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
import { CAL_END, CAL_FROM, findDecoderDelay, parseMp3, planSegment, segmentBytes, type Mp3Layout } from './mp3Layout';

export const SEGMENT_SECONDS = 10;
export const POOL_SLOTS = 4;
/** Seuraava pala ajastetaan, kun ajastettua ääntä on jäljellä alle tämän verran. */
export const LOOKAHEAD_SECONDS = 6;
const PUMP_INTERVAL_MS = 400;
/** Pala on myöhässä, jos sen alku ei ole vähintään näin monta kehystä renderöinnin edellä. */
const LATE_FRAMES = 256;

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
}

interface TrackData { bytes: Uint8Array; layout: Mp3Layout }
interface Slot {
  buffers: Record<BufferTrack, AudioBuffer>;
  gen: number; start: number; length: number;
  ready: boolean; filling: boolean; users: number; used: number;
}
interface Scheduled { slot: Slot; frame: number; timelineStart: number; length: number; sources: AudioBufferSourceNode[]; done: boolean }
interface Session { id: number; items: Scheduled[]; nextFrame: number | null; nextTimeline: number; ending: boolean }

export class ChunkSongPlayer {
  state: BufferPlayerState = 'tyhja';
  error = '';
  readonly events: BufferPlayerEvent[] = [];
  onEnded?: () => void;
  onStateChange?: (state: BufferPlayerState) => void;
  /** Toisto keskeytyi purkuvirheeseen (soitin on tilassa 'virhe'). */
  onError?: (message: string) => void;
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
  private gen = 0;
  private useCounter = 0;
  private session: Session | null = null;
  private sessionId = 0;
  private offset = 0;
  private looping = false;
  private loadToken = 0;
  private controller: AbortController | null = null;
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
    this.setState('ladataan');
    const started = this.now();
    this.record('lataus-alku');
    try {
      const fetched = await Promise.all(BUFFER_TRACKS.map(async track => {
        const response = await this.fetchImpl(urls[track], { signal: controller.signal });
        if (!response.ok) throw new Error(`${track}: HTTP ${response.status}`);
        const bytes = new Uint8Array(await response.arrayBuffer());
        this.record('ladattu', { track, bytes: bytes.byteLength, kesto: Math.round(this.now() - started) });
        return bytes;
      }));
      if (!current()) return 'peruttu';
      this.setState('puretaan');
      const data = {} as Record<BufferTrack, TrackData>;
      BUFFER_TRACKS.forEach((track, index) => { data[track] = { bytes: fetched[index], layout: parseMp3(fetched[index]) }; });
      const rates = new Set(BUFFER_TRACKS.map(track => data[track].layout.sampleRate));
      if (rates.size !== 1) throw new Error('Raitojen näytetaajuudet eroavat');
      const rate = data.backing.layout.sampleRate;
      const channels = Math.max(...BUFFER_TRACKS.map(track => data[track].layout.channels));
      // Allas säilyy versionvaihdon yli; uusi varataan vain, jos muoto muuttuu.
      if (rate !== this.rate || channels !== this.channels) this.slots = [];
      this.rate = rate;
      this.channels = channels;
      this.length = Math.min(...BUFFER_TRACKS.map(track => data[track].layout.length));
      this.data = data;
      this.gen++;
      if (rate !== this.context.sampleRate) this.record('naytetaajuus-ero', { mp3: rate, konteksti: this.context.sampleRate });
      if (this.decoderDelay === null) await this.calibrate(data);
      if (!current()) return 'peruttu';
      const first = await this.obtain(0);
      if (!current()) return 'peruttu';
      if (!first) throw new Error('Puskurialtaassa ei ole tilaa');
      this.controller = null;
      this.record('valmis', { kesto: Math.round(this.now() - started), bytes: this.bufferBytes, compressed: this.compressedBytes,
        duration: this.duration, sampleRate: rate });
      this.setState('valmis');
      return 'valmis';
    } catch (error) {
      if (!current()) return 'peruttu';
      this.controller = null;
      this.data = null;
      this.length = 0;
      this.error = error instanceof Error ? error.message : String(error);
      this.record('virhe', { message: this.error });
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
    const start = Math.max(0, Math.min(Math.round(at * this.rate), this.length - 1));
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
    const buffer = await this.decoder().decodeAudioData(segmentBytes(data.bytes, data.layout, plan).buffer as ArrayBuffer);
    return Array.from({ length: buffer.numberOfChannels }, (_, c) => buffer.getChannelData(c).slice(plan.skip, plan.skip + length));
  }

  /**
   * Mittaa kerran, miten selaimen dekooderi kohdistaa raakakehysten purun aikajanaan. Ilman tätä palat olisivat
   * esimerkiksi Chromiumissa 529 näytettä (11 ms) siirtyneinä. Epäonnistuessa oletetaan Applen käytös (0).
   */
  private async calibrate(data: Record<BufferTrack, TrackData>) {
    const decoder = this.decoder();
    for (const track of BUFFER_TRACKS) {
      const { bytes, layout } = data[track];
      if (layout.frameOffsets.length <= CAL_END + 2) continue;
      const prefix = await decoder.decodeAudioData(bytes.slice(0, layout.frameOffsets[CAL_END]).buffer as ArrayBuffer);
      const raw = await decoder.decodeAudioData(segmentBytes(bytes, layout, { firstFrame: CAL_FROM, endFrame: CAL_END, skip: 0 }).buffer as ArrayBuffer);
      const delay = findDecoderDelay(prefix.getChannelData(0), raw.getChannelData(0), layout);
      if (delay !== null) {
        this.decoderDelay = delay;
        this.record('kalibroitu', { track, dekooderiviive: delay });
        return;
      }
    }
    this.decoderDelay = 0;
    this.record('kalibrointi-epaonnistui');
  }

  private decoder(): Pick<PlayerContext, 'decodeAudioData'> {
    if (this.rate === this.context.sampleRate) return this.context;
    if (this.decoderFor) return this.decoderFor(this.rate);
    return new OfflineAudioContext(1, 1, this.rate);
  }

  private get segmentLength(): number { return Math.round(SEGMENT_SECONDS * this.rate); }

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

  /** Pala, joka sisältää aikajanan näytteen start: valmis paikka altaasta tai uusi purku alkaen kohdasta start. */
  private async obtain(start: number): Promise<Slot | null> {
    const gen = this.gen;
    const hit = this.slots.find(slot => slot.ready && slot.gen === gen && start >= slot.start && start < slot.start + slot.length);
    if (hit) { hit.used = ++this.useCounter; return hit; }
    const data = this.data;
    const slot = this.freeSlot();
    if (!slot || !data) return null;
    const length = Math.min(this.segmentLength, this.length - start);
    Object.assign(slot, { gen, start, length, ready: false, filling: true });
    const started = this.now();
    try {
      const decoder = this.decoder();
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
          if (!this.looping) { session.ending = true; return; }
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
    const sources = BUFFER_TRACKS.map(track => {
      const source = this.context.createBufferSource();
      source.buffer = slot.buffers[track];
      source.connect(this.inputs[track]);
      source.start(when, offsetInSlot / this.rate);
      return source;
    });
    const item: Scheduled = { slot, frame, timelineStart: start, length, sources, done: false };
    slot.users++;
    sources[0].onended = () => this.finished(session, item);
    session.items.push(item);
    if (session.items.length === 1) this.record('soitto', { when, offset: start / this.rate, contextTime: this.context.currentTime });
    else this.record('pala-ajastettu', { when, offset: start / this.rate, pituus: length / this.rate });
    session.nextFrame = frame + Math.round(length * rate / this.rate);
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
