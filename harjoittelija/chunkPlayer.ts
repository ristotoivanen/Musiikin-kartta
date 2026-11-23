/**
 * D2-kokeilu (issue #9): kappaleen kolme raitaa puretaan 10 s:n paloina ja soitetaan kiinteästä AudioBuffer-altaasta.
 *
 * D1 (bufferPlayer.ts) piti koko version purettuna (244–269 Mt). WebKit ei myöskään vapauta AudioBufferia, joka on
 * ollut soitetun AudioBufferSourceNoden puskurina, ennen AudioContextin sulkemista (mitattu, docs/qa/…/paatosloki.md).
 * Siksi D2 ei luo uusia soitettavia puskureita: enintään POOL_SLOTS paikkaa × 3 raitaa × 10 s varataan kerran, ja
 * jokainen pala kopioidaan vapaaseen paikkaan. Purettu välitulos ei ole koskaan soinut, joten se vapautuu.
 *
 * Pala puretaan decodeAudioDatalla raakakehyksistä (2 kehystä ennen, 1 jälkeen), jolloin tulos on bittitarkasti
 * sama kuin koko tiedoston purku. Palat ajastetaan peräkkäin kokonaisiin näytekehyksiin, kaikille raidoille samaan
 * kehykseen: raidat pysyvät näytetarkasti yhdessä ja sauma on saumaton. Loop on vain seuraava pala kohdasta 0.
 * Raitojen kytkentä ja äänenvoimakkuus ovat GainNode-tasoja kuten D1:ssä.
 */
import { BUFFER_TRACKS, LEVEL_TIME_CONSTANT, START_LEAD_SECONDS, type BufferPlayerEvent, type BufferPlayerState,
  type BufferTrack, type LoadResult, type PlayerContext } from './bufferPlayer';
import { CAL_WINDOWS, findDecoderDelay, hasCalibrationSignal, parseMp3, planSegment, segmentBytes, type Mp3Layout } from './mp3Layout';
import { enoughToStart, headBytesNeeded, predictCbrLayout, ProgressiveTrack } from './progressiveLoad';

export const SEGMENT_SECONDS = 10;
export const POOL_SLOTS = 4;
/** Seuraava pala ajastetaan, kun ajastettua ääntä on jäljellä alle tämän verran. */
export const LOOKAHEAD_SECONDS = 6;
const PUMP_INTERVAL_MS = 400;
/** Pala on myöhässä, jos sen alku ei ole vähintään näin monta kehystä renderöinnin edellä. */
const LATE_FRAMES = 256;
/** Suurin sallittu kohdistusruudukko (MP3-näytteinä), jos kontekstin taajuus poikkeaa MP3:sta (44,1 kHz → 160). */
const MAX_GRID = 480;

/** Selaimen MP3-purkua ei voitu kohdistaa aikajanaan: soitinta ei käytetä arvaamalla. */
export class CalibrationError extends Error {}
/** Kontekstin näytetaajuus ei sovi näytetarkkaan paloitukseen. */
export class SampleRateError extends Error {}

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
/** Kehysalueen loppu tavuina (segmentBytes viipaloi tähän asti). */
const planEnd = (layout: Mp3Layout, endFrame: number) => (endFrame < layout.frameOffsets.length ? layout.frameOffsets[endFrame] : layout.dataEnd);

export interface ChunkPlayerContext extends PlayerContext {
  readonly sampleRate: number;
  createBuffer(channels: number, length: number, sampleRate: number): AudioBuffer;
}

export interface ChunkPlayerOptions {
  fetch?: (url: string, init?: RequestInit) => Promise<Response>;
  now?: () => number;
  setInterval?: (callback: () => void, ms: number) => unknown;
  clearInterval?: (id: unknown) => void;
  /** Purkuun käytettävä konteksti, jos MP3:n näytetaajuus poikkeaa soittokontekstista. */
  decoderFor?: (sampleRate: number) => Pick<PlayerContext, 'decodeAudioData'>;
  /**
   * KOKEILU (ensilataus): raidat luetaan virtana ja toisto voi alkaa ennen koko tiedoston latausta (progressiveLoad.ts).
   * Oletuksena pois: koko tiedosto ladataan ensin kuten hyväksytyssä D2:ssa.
   */
  progressive?: boolean;
  /** Odotusväli aloitussäännön tarkistukselle (testit). */
  sleep?: (ms: number) => Promise<void>;
}

/** Raidan tavut ja kehysrakenne. Virtalatauksessa ready() odottaa, että tavut [0, end) ovat saapuneet. */
interface TrackData { bytes: Uint8Array; layout: Mp3Layout; ready?: (end: number) => Promise<void>; has?: (end: number) => boolean }
interface Slot {
  buffers: Record<BufferTrack, AudioBuffer>;
  gen: number; start: number; length: number;
  ready: boolean; filling: boolean; users: number; used: number;
}
interface Scheduled { slot: Slot; frame: number; timelineStart: number; length: number; sources: AudioBufferSourceNode[]; done: boolean }
interface Session { id: number; items: Scheduled[]; nextFrame: number | null; nextTimeline: number; ending: boolean }
interface Pending { gen: number; start: number; length: number; promise: Promise<Slot | null> }

export class ChunkSongPlayer {
  state: BufferPlayerState = 'tyhja';
  error = '';
  /** Viimeisimmän virheen laji: kalibrointi ja näytetaajuus eivät korjaannu uudella yrityksellä. */
  errorKind: 'lataus' | 'kalibrointi' | 'naytetaajuus' | 'purku' | null = null;
  readonly events: BufferPlayerEvent[] = [];
  onEnded?: () => void;
  onStateChange?: (state: BufferPlayerState) => void;
  /** Toisto keskeytyi purkuvirheeseen (soitin on tilassa 'virhe'). */
  onError?: (message: string) => void;
  /** Virtalataus: toisto odottaa, että seuraavan palan tavut saapuvat (true) tai jatkuu (false). */
  onWaitingChange?: (waiting: boolean) => void;
  waiting = false;
  /** Mittausta varten: raitakohtaiset tulot ennen tasoa (lähteet kytkeytyvät näihin). */
  readonly inputs: Record<BufferTrack, GainNode>;
  private readonly levels: Record<BufferTrack, GainNode>;
  private data: Record<BufferTrack, TrackData> | null = null;
  private length = 0;
  private rate = 0;
  private channels = 2;
  /** Selaimen MP3-dekooderin viive raakakehysten purussa (kalibroidaan kerran: Apple 0, FFmpeg 529). */
  private decoderDelay: number | null = null;
  private slots: Slot[] = [];
  private pending: Pending[] = [];
  private gen = 0;
  private useCounter = 0;
  private session: Session | null = null;
  private sessionId = 0;
  private offset = 0;
  private looping = false;
  private loadToken = 0;
  private controller: AbortController | null = null;
  /** Virtalatauksen keskeytys (jatkuu taustalla 'valmis'-tilan jälkeen; versionvaihto ja poistuminen keskeyttävät). */
  private streamController: AbortController | null = null;
  private streams: ProgressiveTrack[] = [];
  private readonly progressive: boolean;
  private readonly sleep: (ms: number) => Promise<void>;
  private pumping = false;
  private pumpQueued = false;
  private timer: unknown = null;
  private readonly fetchImpl: (url: string, init?: RequestInit) => Promise<Response>;
  private readonly now: () => number;
  private readonly setIntervalImpl: (callback: () => void, ms: number) => unknown;
  private readonly clearIntervalImpl: (id: unknown) => void;
  private readonly decoderFor?: (sampleRate: number) => Pick<PlayerContext, 'decodeAudioData'>;

  constructor(private readonly context: ChunkPlayerContext, options: ChunkPlayerOptions = {}) {
    this.fetchImpl = options.fetch ?? ((url, init) => fetch(url, init));
    this.now = options.now ?? (() => performance.now());
    this.setIntervalImpl = options.setInterval ?? ((callback, ms) => setInterval(callback, ms));
    this.clearIntervalImpl = options.clearInterval ?? (id => clearInterval(id as ReturnType<typeof setInterval>));
    this.decoderFor = options.decoderFor;
    this.progressive = options.progressive ?? false;
    this.sleep = options.sleep ?? (ms => new Promise(resolve => setTimeout(resolve, ms)));
    const inputs = {} as Record<BufferTrack, GainNode>, levels = {} as Record<BufferTrack, GainNode>;
    for (const track of BUFFER_TRACKS) {
      inputs[track] = context.createGain();
      levels[track] = context.createGain();
      inputs[track].connect(levels[track]);
      levels[track].connect(context.destination);
    }
    this.inputs = inputs;
    this.levels = levels;
  }

  private record(kind: string, details: Record<string, unknown> = {}) {
    this.events.push({ kind, ms: Math.round(this.now()), ...details });
    if (this.events.length > 500) this.events.shift();
  }

  private setState(state: BufferPlayerState) {
    if (this.state === state) return;
    this.state = state;
    this.onStateChange?.(state);
  }

  /** Raitojen yhteinen kelvollinen pituus sekunteina. 0, jos kappaletta ei ole ladattu. */
  get duration(): number { return this.rate > 0 ? this.length / this.rate : 0; }

  get playing(): boolean { return this.session !== null; }

  /** Puretun äänen allas tavuina (paikat × raidat × näytteet × kanavat × 4). */
  get bufferBytes(): number {
    return this.slots.reduce((sum, slot) => sum + BUFFER_TRACKS.reduce((s, track) => {
      const buffer = slot.buffers[track];
      return s + buffer.length * buffer.numberOfChannels * 4;
    }, 0), 0);
  }

  /** Ladatut pakatut MP3-tavut. */
  get compressedBytes(): number {
    return this.data ? BUFFER_TRACKS.reduce((sum, track) => sum + this.data![track].bytes.byteLength, 0) : 0;
  }

  /** Lataa yhden version kolme MP3:a ja purkaa ensimmäisen palan valmiiksi. Edellinen versio vapautetaan ensin. */
  async load(urls: Record<BufferTrack, string>): Promise<LoadResult> {
    this.release();
    const token = ++this.loadToken;
    const controller = new AbortController();
    this.controller = controller;
    const current = () => token === this.loadToken;
    this.error = '';
    this.errorKind = null;
    this.setState('ladataan');
    const started = this.now();
    this.record('lataus-alku');
    try {
      const data = {} as Record<BufferTrack, TrackData>;
      if (this.progressive) {
        const loaded = await this.loadProgressive(urls, controller, started);
        if (!current()) return 'peruttu';
        Object.assign(data, loaded);
      } else {
        const fetched = await Promise.all(BUFFER_TRACKS.map(async track => {
          const response = await this.fetchImpl(urls[track], { signal: controller.signal });
          if (!response.ok) throw new Error(`${track}: HTTP ${response.status}`);
          const bytes = new Uint8Array(await response.arrayBuffer());
          this.record('ladattu', { track, bytes: bytes.byteLength, kesto: Math.round(this.now() - started) });
          return bytes;
        }));
        if (!current()) return 'peruttu';
        BUFFER_TRACKS.forEach((track, index) => { data[track] = { bytes: fetched[index], layout: parseMp3(fetched[index]) }; });
        this.setState('puretaan');
      }
      const rates = new Set(BUFFER_TRACKS.map(track => data[track].layout.sampleRate));
      if (rates.size !== 1) throw new Error('Raitojen näytetaajuudet eroavat');
      const rate = data.backing.layout.sampleRate;
      const channels = Math.max(...BUFFER_TRACKS.map(track => data[track].layout.channels));
      // Allas säilyy versionvaihdon yli; uusi varataan vain, jos muoto muuttuu.
      if (rate !== this.rate || channels !== this.channels) this.slots = [];
      this.rate = rate;
      this.channels = channels;
      const grid = this.grid;
      if (grid > MAX_GRID) throw new SampleRateError(`Äänikontekstin näytetaajuus ${this.context.sampleRate} Hz ei sovi ${rate} Hz:n raitojen näytetarkkaan paloitukseen`);
      // Eri taajuuksilla palojen rajat ja alut ovat ruudukossa, jolloin jokainen raja on kokonainen kontekstin kehys.
      this.length = Math.floor(Math.min(...BUFFER_TRACKS.map(track => data[track].layout.length)) / grid) * grid;
      this.data = data;
      this.gen++;
      if (rate !== this.context.sampleRate) this.record('naytetaajuus-ero', { mp3: rate, konteksti: this.context.sampleRate, ruudukko: grid });
      if (this.decoderDelay === null) await this.calibrate(data, current);
      if (!current()) return 'peruttu';
      const first = await this.obtain(0);
      if (!current()) return 'peruttu';
      if (!first) throw new Error('Puskurialtaassa ei ole tilaa');
      if (this.streams.length) {
        // Aloitussääntö: ensimmäinen pala ja ennakko ladattu, eikä toisto ennusteen mukaan ohita latausta.
        while (!this.streams.every(stream => enoughToStart(stream, this.duration))) {
          const failed = this.streams.find(stream => stream.error);
          if (failed) throw failed.error;
          await this.sleep(100);
          if (!current()) return 'peruttu';
        }
        this.record('alku-valmis', { tavut: this.streams.map(stream => stream.received), kesto: Math.round(this.now() - started) });
      }
      this.controller = null;
      this.record('valmis', { kesto: Math.round(this.now() - started), bytes: this.bufferBytes, compressed: this.compressedBytes,
        duration: this.duration, sampleRate: rate });
      this.setState('valmis');
      return 'valmis';
    } catch (error) {
      if (!current()) return 'peruttu';
      this.controller = null;
      this.abortStreams();
      this.data = null;
      this.length = 0;
      this.error = error instanceof Error ? error.message : String(error);
      this.errorKind = error instanceof CalibrationError ? 'kalibrointi' : error instanceof SampleRateError ? 'naytetaajuus' : 'lataus';
      this.record('virhe', { message: this.error, laji: this.errorKind });
      this.setState('virhe');
      return 'virhe';
    }
  }

  /** Peruu kesken olevan latauksen tai ensimmäisen palan purun. */
  cancel() {
    if (this.state !== 'ladataan' && this.state !== 'puretaan') return;
    this.loadToken++;
    this.controller?.abort();
    this.controller = null;
    this.record('peruttu');
    this.setState('tyhja');
  }

  /** Pysäyttää toiston ja unohtaa version (versionvaihto). Allas säilyy uudelleenkäyttöä varten. */
  release() {
    this.cancel();
    this.stopSession();
    this.abortStreams();
    this.setWaiting(false);
    const hadData = this.data !== null;
    this.data = null;
    this.length = 0;
    this.offset = 0;
    this.gen++;
    for (const slot of this.slots) { slot.ready = false; slot.gen = -1; }
    if (hadData) this.record('vapautettu');
    if (this.state !== 'tyhja') this.setState('tyhja');
  }

  /** Vapauttaa kaiken, myös altaan ja raitojen tasosolmut. AudioContextin sulkee omistaja. */
  dispose() {
    this.release();
    this.slots = [];
    for (const track of BUFFER_TRACKS) {
      this.inputs[track].disconnect();
      this.levels[track].disconnect();
    }
  }

  /**
   * Soittaa kaikki raidat kohdasta at. Jos kohdan pala on valmiina, ääni alkaa START_LEAD_SECONDS:n päästä,
   * muuten heti kun pala on purettu. Palauttaa false, jos kappaletta ei ole ladattu.
   */
  play(at: number = this.offset): boolean {
    if (this.state !== 'valmis' || this.length <= 0) return false;
    this.stopSession();
    const grid = this.grid;
    const start = Math.max(0, Math.min(Math.round(at * this.rate / grid) * grid, this.length - grid));
    this.session = { id: ++this.sessionId, items: [], nextFrame: null, nextTimeline: start, ending: false };
    this.offset = start / this.rate;
    this.timer = this.setIntervalImpl(() => { void this.pump(); }, PUMP_INTERVAL_MS);
    void this.pump();
    return true;
  }

  /** Pysäyttää ja palauttaa kohdan, josta jatko alkaa. */
  pause(): number {
    const position = this.position();
    if (this.session) this.record('tauko', { at: position });
    this.stopSession();
    this.offset = position;
    return position;
  }

  /** Kelaa kohtaan at. Soiva kappale jatkuu uudesta kohdasta, pysäytetty aloittaa siitä. */
  seek(at: number) {
    if (this.session) this.play(at);
    else this.offset = Math.max(0, Math.min(at, Math.max(0, this.duration - 1 / Math.max(1, this.rate))));
    this.record('kelaus', { at });
  }

  /** Loop koko kappaleelle: lopun jälkeen seuraava pala alkaa kohdasta 0 samaan näytekehykseen. */
  setLoop(on: boolean) {
    if (this.looping === on) return;
    this.looping = on;
    const session = this.session;
    if (!session) return;
    if (on) {
      session.ending = false;
      void this.pump();
      return;
    }
    // Pois: alkamattomat loopin alun palat perutaan, jolloin kappale soi loppuun ja pysähtyy.
    const nowFrame = this.context.currentTime * this.context.sampleRate;
    const index = session.items.findIndex((item, i) => i > 0 && item.timelineStart === 0 && item.frame > nowFrame);
    if (index > 0) {
      const cancelled = session.items.splice(index);
      for (const item of cancelled) this.stopItem(item);
      session.nextFrame = cancelled[0].frame;
      session.nextTimeline = this.length;
    }
  }

  /** Raidan taso (äänenvoimakkuus × tasapaino, 0 kun raita on pois). Soitto ei katkea. */
  setLevel(track: BufferTrack, value: number) {
    const gain = this.levels[track].gain;
    if (typeof gain.setTargetAtTime === 'function') gain.setTargetAtTime(value, this.context.currentTime, LEVEL_TIME_CONSTANT);
    else gain.value = value;
  }

  level(track: BufferTrack): number { return this.levels[track].gain.value; }

  /** Aikajanan kohta kontekstin kellon hetkellä contextTime: se pala, jonka ajastettu alku on viimeksi ohitettu. */
  position(contextTime: number = this.context.currentTime): number {
    const session = this.session;
    if (!session || !session.items.length) return this.offset;
    const frame = contextTime * this.context.sampleRate;
    let item = session.items[0];
    for (const candidate of session.items) {
      if (candidate.frame <= frame) item = candidate;
      else break;
    }
    if (frame <= item.frame) return item.timelineStart / this.rate;
    const into = Math.min((frame - item.frame) * this.rate / this.context.sampleRate, item.length);
    return Math.min(item.timelineStart + into, this.length) / this.rate;
  }

  /** Kuuluva kohta nyt (kuten D1): getOutputTimestamp, tai kontekstin kello miinus ilmoitetut viiveet. */
  audiblePosition(performanceNow: number = this.now()): number {
    const stamp = this.context.getOutputTimestamp?.();
    let contextTime: number;
    if (stamp && typeof stamp.contextTime === 'number' && typeof stamp.performanceTime === 'number' && stamp.contextTime > 0)
      contextTime = stamp.contextTime + (performanceNow - stamp.performanceTime) / 1000;
    else contextTime = this.context.currentTime - (this.context.outputLatency ?? 0) - (this.context.baseLatency ?? 0);
    return this.position(Math.min(contextTime, this.context.currentTime));
  }

  /** Purkaa aikajanan näytteet [start, start + length) uusiin taulukoihin (testejä ja tarkistuksia varten, ei altaaseen). */
  async readRange(track: BufferTrack, start: number, length: number): Promise<Float32Array[]> {
    const data = this.data?.[track];
    if (!data) throw new Error('Kappaletta ei ole ladattu');
    const plan = planSegment(data.layout, start, length, this.decoderDelay ?? 0);
    await data.ready?.(planEnd(data.layout, plan.endFrame));
    const buffer = await this.decoder().decodeAudioData(segmentBytes(data.bytes, data.layout, plan).buffer as ArrayBuffer);
    return Array.from({ length: buffer.numberOfChannels }, (_, c) => buffer.getChannelData(c).slice(plan.skip, plan.skip + length));
  }

  /**
   * KOKEILU (ensilataus): käynnistää raitojen virtalatauksen ja palauttaa rakenteen heti, kun alkutavut riittävät
   * ennustukseen. Jos ennustus ei ole varma (tai virtaa ei ole), raita ladataan kokonaan ennen jäsennystä.
   */
  private async loadProgressive(urls: Record<BufferTrack, string>, controller: AbortController, started: number): Promise<Record<BufferTrack, TrackData>> {
    const stream = new AbortController();
    this.streamController = stream;
    controller.signal.addEventListener('abort', () => stream.abort(), { once: true });
    const streams: ProgressiveTrack[] = [];
    this.streams = streams;
    const entries = await Promise.all(BUFFER_TRACKS.map(async track => {
      const response = await this.fetchImpl(urls[track], { signal: stream.signal });
      if (!response.ok) throw new Error(`${track}: HTTP ${response.status}`);
      const total = Number(response.headers.get('Content-Length'));
      if (!response.body || !Number.isSafeInteger(total) || total <= 0) {
        const bytes = new Uint8Array(await response.arrayBuffer());
        this.record('ladattu', { track, bytes: bytes.byteLength, kesto: Math.round(this.now() - started), virta: false });
        return [track, { bytes, layout: parseMp3(bytes) }] as const;
      }
      const progressive = new ProgressiveTrack(total, this.now);
      streams.push(progressive);
      void progressive.run(response.body).then(() => {
        if (progressive.done) this.record('ladattu', { track, bytes: total, kesto: Math.round((progressive.doneAt ?? this.now()) - started), virta: true });
      });
      await progressive.waitForBytes(10);
      const need = Math.min(total, headBytesNeeded(progressive.bytes.subarray(0, progressive.received)) ?? total);
      await progressive.waitForBytes(need);
      this.record('ensitavut', { track, kesto: Math.round((progressive.firstByteAt ?? this.now()) - started) });
      let layout = predictCbrLayout(progressive.bytes.subarray(0, Math.max(need, progressive.received)), total);
      if (!layout) {
        // Ei varmaa ennustetta: koko raita ensin (sama kuin ilman virtaa).
        this.record('virta-ei-ennustetta', { track });
        await progressive.waitForBytes(total);
        layout = parseMp3(progressive.bytes);
      }
      progressive.useLayout(layout);
      if (progressive.error) throw progressive.error;
      return [track, { bytes: progressive.bytes, layout, ready: (end: number) => progressive.waitForBytes(end), has: (end: number) => progressive.has(end) }] as const;
    }));
    return Object.fromEntries(entries) as Record<BufferTrack, TrackData>;
  }

  private abortStreams() {
    this.streamController?.abort();
    this.streamController = null;
    this.streams = [];
  }

  private setWaiting(waiting: boolean) {
    if (this.waiting === waiting) return;
    this.waiting = waiting;
    this.record(waiting ? 'odottaa-latausta' : 'lataus-ehti');
    this.onWaitingChange?.(waiting);
  }

  /** Ladattu osuus (0…1) virtalatauksessa; 1, kun kaikki on ladattu tai virtaa ei käytetä. */
  get downloadProgress(): number {
    if (!this.streams.length) return this.data ? 1 : 0;
    const total = this.streams.reduce((sum, stream) => sum + stream.total, 0);
    return this.streams.reduce((sum, stream) => sum + stream.received, 0) / total;
  }

  /**
   * Mittaa kerran, miten selaimen dekooderi kohdistaa raakakehysten purun aikajanaan (Apple 0, Chromiumin FFmpeg 529
   * näytettä). Kokeillaan ikkunoita ja raitoja, kunnes löytyy ääntä ja bittitarkka vastaavuus. Jos ei löydy, lataus
   * päättyy hallittuun virheeseen eikä viivettä arvata (väärä arvo siirtäisi koko kappaleen).
   */
  private async calibrate(data: Record<BufferTrack, TrackData>, current: () => boolean) {
    const decoder = this.decoder();
    const tried: string[] = [];
    // Ehdokkaat halvimmasta (lyhin alkuosa) kalleimpaan. Lyhyelle raidalle ikkuna kolmanneksen kohdalta.
    const candidates: [BufferTrack, number, number][] = [];
    for (const track of BUFFER_TRACKS) {
      const frames = data[track].layout.frameOffsets.length;
      const windows = CAL_WINDOWS.filter(([, end]) => frames > end + 2);
      if (!windows.length && frames >= 16) { const from = Math.max(4, Math.floor(frames / 3)); windows.push([from, Math.min(frames - 2, from + 60)]); }
      for (const [from, end] of windows) candidates.push([track, from, end]);
    }
    candidates.sort((a, b) => a[2] - b[2]);
    for (const [track, from, end] of candidates) {
      const { bytes, layout } = data[track];
      await data[track].ready?.(layout.frameOffsets[end]);
      if (!current()) return;
      const raw = await decoder.decodeAudioData(segmentBytes(bytes, layout, { firstFrame: from, endFrame: end, skip: 0 }).buffer as ArrayBuffer);
      if (!current()) return;
      if (!hasCalibrationSignal(raw.getChannelData(0))) { tried.push(`${track}@${from}: hiljainen`); continue; }
      const prefix = await decoder.decodeAudioData(bytes.slice(0, layout.frameOffsets[end]).buffer as ArrayBuffer);
      if (!current()) return;
      const delay = findDecoderDelay(prefix.getChannelData(0), raw.getChannelData(0), layout, from);
      if (delay !== null) {
        this.decoderDelay = delay;
        this.record('kalibroitu', { track, kehys: from, dekooderiviive: delay });
        return;
      }
      tried.push(`${track}@${from}: ei bittitarkkaa vastaavuutta`);
    }
    this.record('kalibrointi-epaonnistui', { yritykset: tried });
    throw new CalibrationError('Selaimen MP3-purkua ei voitu kohdistaa aikajanaan');
  }

  private decoder(): Pick<PlayerContext, 'decodeAudioData'> {
    if (this.rate === this.context.sampleRate) return this.context;
    if (this.decoderFor) return this.decoderFor(this.rate);
    return new OfflineAudioContext(1, 1, this.rate);
  }

  /** Kohdistusruudukko MP3-näytteinä: 1, kun taajuudet ovat samat; muuten pienin pituus, joka on kokonainen kontekstin kehysmäärä. */
  private get grid(): number {
    const context = Math.round(this.context.sampleRate);
    return this.rate && context !== this.rate ? this.rate / gcd(this.rate, context) : 1;
  }

  private get segmentLength(): number { const grid = this.grid; return Math.floor(Math.round(SEGMENT_SECONDS * this.rate) / grid) * grid; }

  /** Vapaa allaspaikka: varaamaton tai vanhentunut ensin, sitten pisimpään käyttämätön; uusi vain tarvittaessa. */
  private freeSlot(): Slot | null {
    const free = this.slots.filter(slot => slot.users === 0 && !slot.filling);
    const stale = free.find(slot => !slot.ready || slot.gen !== this.gen);
    if (stale) return stale;
    if (free.length && this.slots.length >= POOL_SLOTS) return free.reduce((a, b) => (a.used <= b.used ? a : b));
    if (this.slots.length < POOL_SLOTS) {
      const buffers = {} as Record<BufferTrack, AudioBuffer>;
      for (const track of BUFFER_TRACKS) buffers[track] = this.context.createBuffer(this.channels, this.segmentLength, this.rate);
      const slot: Slot = { buffers, gen: -1, start: 0, length: 0, ready: false, filling: false, users: 0, used: 0 };
      this.slots.push(slot);
      this.record('allas', { paikat: this.slots.length, bytes: this.bufferBytes });
      return slot;
    }
    return free.length ? free.reduce((a, b) => (a.used <= b.used ? a : b)) : null;
  }

  /**
   * Pala, joka sisältää aikajanan näytteen start: valmis paikka altaasta, kesken oleva purku samalle kohdalle
   * (ei kahta purkua samasta palasta) tai uusi purku alkaen kohdasta start.
   */
  private obtain(start: number): Promise<Slot | null> {
    const gen = this.gen;
    const hit = this.slots.find(slot => slot.ready && slot.gen === gen && start >= slot.start && start < slot.start + slot.length);
    if (hit) { hit.used = ++this.useCounter; return Promise.resolve(hit); }
    const pending = this.pending.find(p => p.gen === gen && start >= p.start && start < p.start + p.length);
    if (pending) return pending.promise;
    const data = this.data;
    const slot = this.freeSlot();
    if (!slot || !data) return Promise.resolve(null);
    const length = Math.min(this.segmentLength, this.length - start);
    const entry: Pending = { gen, start, length, promise: Promise.resolve(null) };
    entry.promise = this.fill(slot, data, gen, start, length).finally(() => { this.pending = this.pending.filter(p => p !== entry); });
    this.pending.push(entry);
    return entry.promise;
  }

  private async fill(slot: Slot, data: Record<BufferTrack, TrackData>, gen: number, start: number, length: number): Promise<Slot | null> {
    Object.assign(slot, { gen, start, length, ready: false, filling: true });
    const started = this.now();
    try {
      const decoder = this.decoder();
      // Virtalataus: odotetaan palan tavut. Toisto ilmoittaa odotuksesta, jos tavuja ei vielä ole.
      const plans = BUFFER_TRACKS.map(track => planSegment(data[track].layout, start, length, this.decoderDelay ?? 0));
      const ends = plans.map((plan, i) => planEnd(data[BUFFER_TRACKS[i]].layout, plan.endFrame));
      if (BUFFER_TRACKS.some((track, i) => data[track].has && !data[track].has!(ends[i]))) {
        if (this.session) this.setWaiting(true);
        try { await Promise.all(BUFFER_TRACKS.map((track, i) => data[track].ready?.(ends[i]))); }
        catch (error) { if (gen !== this.gen) { slot.filling = false; slot.gen = -1; return null; } throw error; }
        if (this.session) this.setWaiting(false);
      }
      const decoded = await Promise.all(BUFFER_TRACKS.map(async track => {
        const { bytes, layout } = data[track];
        const plan = planSegment(layout, start, length, this.decoderDelay ?? 0);
        const buffer = await decoder.decodeAudioData(segmentBytes(bytes, layout, plan).buffer as ArrayBuffer);
        return { track, buffer, plan };
      }));
      slot.filling = false;
      if (gen !== this.gen) { slot.gen = -1; return null; }
      for (const { track, buffer, plan } of decoded) {
        const target = slot.buffers[track];
        for (let c = 0; c < target.numberOfChannels; c++) {
          const part = buffer.getChannelData(Math.min(c, buffer.numberOfChannels - 1)).subarray(plan.skip, plan.skip + length);
          target.copyToChannel(part, c, 0);
          if (part.length < length) {
            target.copyToChannel(new Float32Array(length - part.length), c, part.length);
            this.record('pala-lyhyt', { track, start, puuttuu: length - part.length });
          }
        }
      }
      slot.ready = true;
      slot.used = ++this.useCounter;
      this.record('pala', { start: start / this.rate, length: length / this.rate, kesto: Math.round(this.now() - started) });
      return slot;
    } catch (error) {
      slot.filling = false;
      slot.gen = -1;
      throw error;
    }
  }

  /** Ajastaa paloja, kunnes ääntä on LOOKAHEAD_SECONDS valmiina. Vain yksi kierros kerrallaan. */
  private async pump() {
    if (this.pumping) { this.pumpQueued = true; return; }
    this.pumping = true;
    try {
      for (;;) {
        const session = this.session;
        if (!session || session.ending) return;
        if (session.nextFrame !== null && session.nextFrame / this.context.sampleRate - this.context.currentTime >= LOOKAHEAD_SECONDS) return;
        let start = session.nextTimeline;
        if (start >= this.length) {
          if (!this.looping) {
            session.ending = true;
            // Loopin alku valmiiksi, jotta loopin kytkeminen aivan lopussa ei jätä purkuaikaista taukoa.
            this.obtain(0).catch(() => this.record('alku-esipurku-virhe'));
            return;
          }
          start = 0;
        }
        const slot = await this.obtain(start);
        if (this.session !== session) return;
        if (!slot) { this.record('allas-taynna'); return; }
        // Loop kytkettiin pois purun aikana: loopin alkua ei enää ajasteta.
        if (start === 0 && session.nextTimeline >= this.length && !this.looping) { session.ending = true; return; }
        this.schedule(session, slot, start);
      }
    } catch (error) {
      this.fail(error);
    } finally {
      this.pumping = false;
      if (this.pumpQueued) { this.pumpQueued = false; void this.pump(); }
    }
  }

  private schedule(session: Session, slot: Slot, start: number) {
    const rate = this.context.sampleRate;
    const offsetInSlot = start - slot.start;
    const length = slot.length - offsetInSlot;
    const earliest = Math.ceil((this.context.currentTime + START_LEAD_SECONDS) * rate);
    let frame = session.nextFrame ?? earliest;
    if (session.nextFrame !== null && session.nextFrame < Math.ceil(this.context.currentTime * rate) + LATE_FRAMES) {
      // Purku ei ehtinyt ajoissa: jatketaan heti. Aikajana pysyy oikeana (kohta pysähtyy aukon ajaksi).
      this.record('alivuoto', { myohassa: Math.round((this.context.currentTime * rate - session.nextFrame) / rate * 1000) });
      frame = earliest;
    }
    const when = frame / rate;
    // Palan kesto kontekstin kehyksinä: kokonaisluku, koska pituus on ruudukossa.
    const span = Math.round(length * rate / this.rate);
    const sources = BUFFER_TRACKS.map(track => {
      const source = this.context.createBufferSource();
      source.buffer = slot.buffers[track];
      source.connect(this.inputs[track]);
      source.start(when, offsetInSlot / this.rate);
      // Pysäytys täsmälleen palan loppukehykseen: allaspaikka on aina 10 s, joten lyhyemmän palan (kappaleen loppu)
      // perässä olisi edellisen käytön dataa; eri taajuuksilla lähde soittaisi muuten yhden kehyksen yli saumasta.
      source.stop((frame + span) / rate);
      return source;
    });
    const item: Scheduled = { slot, frame, timelineStart: start, length, sources, done: false };
    slot.users++;
    sources[0].onended = () => this.finished(session, item);
    session.items.push(item);
    if (session.items.length === 1) this.record('soitto', { when, offset: start / this.rate, contextTime: this.context.currentTime });
    else this.record('pala-ajastettu', { when, offset: start / this.rate, pituus: length / this.rate });
    session.nextFrame = frame + span;
    session.nextTimeline = start + length;
  }

  private stopItem(item: Scheduled) {
    if (item.done) return;
    item.done = true;
    item.slot.users = Math.max(0, item.slot.users - 1);
    for (const source of item.sources) {
      source.onended = null;
      try { source.stop(); } catch { /* ei vielä käynnistynyt tai jo pysähtynyt */ }
      source.disconnect();
    }
  }

  private finished(session: Session, item: Scheduled) {
    if (item.done) return;
    item.done = true;
    item.slot.users = Math.max(0, item.slot.users - 1);
    for (const source of item.sources) { source.onended = null; source.disconnect(); }
    if (this.session !== session) return;
    // Viimeksi soinut pala jää aikajanan laskentaa varten, vanhemmat poistetaan.
    const index = session.items.indexOf(item);
    if (index > 0) session.items.splice(0, index);
    if (session.ending && session.items[session.items.length - 1] === item) {
      this.stopSession();
      this.offset = this.duration;
      this.record('loppu');
      this.onEnded?.();
      return;
    }
    void this.pump();
  }

  private stopSession() {
    const session = this.session;
    this.session = null;
    this.setWaiting(false);
    if (this.timer !== null) { this.clearIntervalImpl(this.timer); this.timer = null; }
    for (const item of session?.items ?? []) this.stopItem(item);
  }

  private fail(error: unknown) {
    this.stopSession();
    this.error = error instanceof Error ? error.message : String(error);
    this.record('virhe', { message: this.error });
    this.setState('virhe');
    this.onError?.(this.error);
  }
}
