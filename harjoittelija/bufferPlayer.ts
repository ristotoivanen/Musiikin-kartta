/**
 * D1-kokeilu (issue #9): kappaleen kolme raitaa puretaan AudioBuffereiksi ja soitetaan AudioBufferSourceNodeilla.
 *
 * Kaikki raidat ajastetaan samaan AudioContextiin samalla start(when, offset) -kutsulla, joten ne alkavat
 * näytetarkasti yhtä aikaa. Aikajana on offset + (kontekstin kello − when). iOS:n MediaElementSourcen
 * puskuriongelmaa ei ole, koska mediaelementtejä ei käytetä. AudioBufferSourceNode on kertakäyttöinen:
 * jokainen soitto, jatko ja kelaus luo uudet lähteet samoista puretuista puskureista.
 *
 * Raidan pois- ja päällekytkentä ja äänenvoimakkuus ovat pelkkiä GainNode-tasoja, joten muut raidat eivät katkea.
 * Muistissa on kerrallaan vain yhden version puskurit: load() ja release() vapauttavat edelliset ensin.
 */
export type BufferTrack = 'backing' | 'guitar' | 'vocals';
export const BUFFER_TRACKS: readonly BufferTrack[] = ['backing', 'guitar', 'vocals'];
/** Lähteet ajastetaan tämän verran kontekstin kellon edelle, jotta kaikki kolme ehtivät samaan hetkeen. */
export const START_LEAD_SECONDS = 0.05;
/** Tason muutoksen aikavakio (s): ei naksahdusta kytkennässä eikä äänenvoimakkuuden muutoksessa. */
export const LEVEL_TIME_CONSTANT = 0.005;

export type BufferPlayerState = 'tyhja' | 'ladataan' | 'puretaan' | 'valmis' | 'virhe';
export type LoadResult = 'valmis' | 'peruttu' | 'virhe';
export interface BufferPlayerEvent { kind: string; ms: number; [key: string]: unknown }

/** AudioContextin osa, jota soitin käyttää (testattavissa ilman selainta). */
export interface PlayerContext {
  readonly currentTime: number;
  readonly destination: AudioNode;
  readonly outputLatency?: number;
  readonly baseLatency?: number;
  createGain(): GainNode;
  createBufferSource(): AudioBufferSourceNode;
  decodeAudioData(data: ArrayBuffer): Promise<AudioBuffer>;
  getOutputTimestamp?(): AudioTimestamp;
}

export interface BufferPlayerOptions {
  fetch?: (url: string, init?: RequestInit) => Promise<Response>;
  now?: () => number;
}

export class BufferSongPlayer {
  state: BufferPlayerState = 'tyhja';
  error = '';
  readonly events: BufferPlayerEvent[] = [];
  /** Kutsutaan, kun kappale soi loppuun ilman looppia. */
  onEnded?: () => void;
  onStateChange?: (state: BufferPlayerState) => void;
  /** Mittausta varten: raitakohtaiset tulot ennen tasoa (lähteet kytkeytyvät näihin). */
  readonly inputs: Record<BufferTrack, GainNode>;
  private readonly levels: Record<BufferTrack, GainNode>;
  private buffers: Partial<Record<BufferTrack, AudioBuffer>> = {};
  private sources: AudioBufferSourceNode[] | null = null;
  private when = 0;
  private offset = 0;
  private looping = false;
  /** Loop on ollut päällä tämän soiton aikana, joten kohta lasketaan loopin pituuden jakojäännöksenä. */
  private wrapped = false;
  private loadToken = 0;
  private controller: AbortController | null = null;
  private readonly fetchImpl: (url: string, init?: RequestInit) => Promise<Response>;
  private readonly now: () => number;

  constructor(private readonly context: PlayerContext, options: BufferPlayerOptions = {}) {
    this.fetchImpl = options.fetch ?? ((url, init) => fetch(url, init));
    this.now = options.now ?? (() => performance.now());
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

  /** Raitojen yhteinen pituus (lyhimmän raidan kesto). 0, jos puskureita ei ole. */
  get duration(): number {
    const durations = BUFFER_TRACKS.map(track => this.buffers[track]?.duration ?? 0);
    return durations.every(value => value > 0) ? Math.min(...durations) : 0;
  }

  get playing(): boolean { return this.sources !== null; }

  /** Puskurien todellinen koko tavuina (näytteet × kanavat × 4). */
  get bufferBytes(): number {
    return BUFFER_TRACKS.reduce((sum, track) => {
      const buffer = this.buffers[track];
      return sum + (buffer ? buffer.length * buffer.numberOfChannels * 4 : 0);
    }, 0);
  }

  /**
   * Lataa ja purkaa yhden version kolme raitaa. Edellisen version puskurit ja lähteet vapautetaan ensin.
   * Purku tehdään raita kerrallaan, jotta purun aikainen huippumuisti pysyy pienempänä.
   */
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
      const data = await Promise.all(BUFFER_TRACKS.map(async track => {
        const response = await this.fetchImpl(urls[track], { signal: controller.signal });
        if (!response.ok) throw new Error(`${track}: HTTP ${response.status}`);
        const bytes = await response.arrayBuffer();
        this.record('ladattu', { track, bytes: bytes.byteLength, kesto: Math.round(this.now() - started) });
        return bytes;
      }));
      if (!current()) return 'peruttu';
      this.setState('puretaan');
      const decoded: Partial<Record<BufferTrack, AudioBuffer>> = {};
      for (const [index, track] of BUFFER_TRACKS.entries()) {
        const decodeStart = this.now();
        this.record('purku-alku', { track });
        const buffer = await this.context.decodeAudioData(data[index]);
        if (!current()) return 'peruttu';
        decoded[track] = buffer;
        this.record('purettu', { track, kesto: Math.round(this.now() - decodeStart), length: buffer.length,
          channels: buffer.numberOfChannels, sampleRate: buffer.sampleRate, bytes: buffer.length * buffer.numberOfChannels * 4 });
      }
      this.buffers = decoded;
      this.controller = null;
      this.record('valmis', { kesto: Math.round(this.now() - started), bytes: this.bufferBytes, duration: this.duration });
      this.setState('valmis');
      return 'valmis';
    } catch (error) {
      if (!current()) return 'peruttu';
      this.controller = null;
      this.buffers = {};
      this.error = error instanceof Error ? error.message : String(error);
      this.record('virhe', { message: this.error });
      this.setState('virhe');
      return 'virhe';
    }
  }

  /** Peruu kesken olevan latauksen tai purun. Valmiit puskurit säilyvät. */
  cancel() {
    if (this.state !== 'ladataan' && this.state !== 'puretaan') return;
    this.loadToken++;
    this.controller?.abort();
    this.controller = null;
    this.record('peruttu');
    this.setState('tyhja');
  }

  /** Pysäyttää toiston ja vapauttaa puskurit (versionvaihto, soittimesta poistuminen). */
  release() {
    this.cancel();
    this.stopSources();
    const hadBuffers = this.duration > 0;
    this.buffers = {};
    this.offset = 0;
    if (hadBuffers) this.record('vapautettu');
    if (this.state !== 'tyhja') this.setState('tyhja');
  }

  /** Vapauttaa kaiken, myös raitojen tasosolmut. */
  dispose() {
    this.release();
    for (const track of BUFFER_TRACKS) {
      this.inputs[track].disconnect();
      this.levels[track].disconnect();
    }
  }

  /**
   * Soittaa kaikki raidat kohdasta at samalla ajoitushetkellä. Edelliset lähteet pysäytetään.
   * Palauttaa false, jos puskureita ei ole.
   */
  play(at: number = this.offset): boolean {
    const duration = this.duration;
    if (this.state !== 'valmis' || duration <= 0) return false;
    this.stopSources();
    const offset = Math.max(0, Math.min(at, duration - 0.001));
    const when = this.context.currentTime + START_LEAD_SECONDS;
    const sources = BUFFER_TRACKS.map(track => {
      const source = this.context.createBufferSource();
      source.buffer = this.buffers[track]!;
      source.loop = this.looping;
      source.loopStart = 0;
      source.loopEnd = duration;
      source.connect(this.inputs[track]);
      source.start(when, offset);
      return source;
    });
    sources[0].onended = () => {
      if (this.sources !== sources) return;
      // Kappale soi loppuun: lähteet ovat käytetty, ja seuraava soitto alkaa alusta.
      this.sources = null;
      this.offset = duration;
      this.record('loppu');
      this.onEnded?.();
    };
    this.sources = sources;
    this.when = when;
    this.offset = offset;
    this.wrapped = this.looping;
    this.record('soitto', { when, offset, contextTime: this.context.currentTime });
    return true;
  }

  /** Pysäyttää ja palauttaa kohdan, josta jatko alkaa. */
  pause(): number {
    const position = this.position();
    if (this.sources) this.record('tauko', { at: position });
    this.stopSources();
    this.offset = position;
    return position;
  }

  /** Kelaa kohtaan at. Soiva kappale jatkuu uudesta kohdasta, pysäytetty aloittaa siitä. */
  seek(at: number) {
    if (this.sources) this.play(at);
    else this.offset = Math.max(0, Math.min(at, Math.max(0, this.duration - 0.001)));
    this.record('kelaus', { at });
  }

  /** Loop kaikille raidoille yhtä aikaa: sama alku (0) ja loppu (yhteinen pituus). */
  setLoop(on: boolean) {
    this.looping = on;
    if (on) this.wrapped = true;
    for (const source of this.sources ?? []) source.loop = on;
  }

  /** Raidan taso (äänenvoimakkuus × tasapaino, 0 kun raita on pois). Soitto ei katkea. */
  setLevel(track: BufferTrack, value: number) {
    const gain = this.levels[track].gain;
    if (typeof gain.setTargetAtTime === 'function') gain.setTargetAtTime(value, this.context.currentTime, LEVEL_TIME_CONSTANT);
    else gain.value = value;
  }

  level(track: BufferTrack): number { return this.levels[track].gain.value; }

  /** Aikajanan kohta kontekstin kellon hetkellä c (renderöinnin aika). */
  position(contextTime: number = this.context.currentTime): number {
    if (!this.sources) return this.offset;
    const duration = this.duration;
    const elapsed = Math.max(0, contextTime - this.when);
    const raw = this.offset + elapsed;
    if (duration <= 0) return raw;
    return this.wrapped ? raw % duration : Math.min(raw, duration);
  }

  /**
   * Kuuluva kohta nyt. AudioContext.currentTime on renderöinnin aika, ei kaiuttimen: getOutputTimestamp kertoo,
   * mikä kontekstin hetki on parhaillaan ulostulossa. Ilman sitä vähennetään ilmoitetut viiveet.
   */
  audiblePosition(performanceNow: number = this.now()): number {
    const stamp = this.context.getOutputTimestamp?.();
    let contextTime: number;
    if (stamp && typeof stamp.contextTime === 'number' && typeof stamp.performanceTime === 'number' && stamp.contextTime > 0)
      contextTime = stamp.contextTime + (performanceNow - stamp.performanceTime) / 1000;
    else contextTime = this.context.currentTime - (this.context.outputLatency ?? 0) - (this.context.baseLatency ?? 0);
    return this.position(Math.min(contextTime, this.context.currentTime));
  }

  private stopSources() {
    const sources = this.sources;
    this.sources = null;
    for (const source of sources ?? []) {
      source.onended = null;
      try { source.stop(); } catch { /* ei vielä käynnistynyt tai jo pysähtynyt */ }
      source.disconnect();
    }
  }
}

/** Toistoon tarkoitettu AudioContext. iOS:n Web Audio noudattaa muuten äänetön-kytkintä (istunto 'ambient'). */
export function createPlaybackContext(options?: AudioContextOptions): AudioContext {
  const session = (globalThis.navigator as { audioSession?: { type: string } } | undefined)?.audioSession;
  if (session && session.type !== 'playback') session.type = 'playback';
  const Context = globalThis.AudioContext ?? (globalThis as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Context) throw new Error('Web Audio API puuttuu');
  if (options) {
    // Pyydetty taajuus (D2) ei ole pakollinen: jos selain ei tue sitä, soitin käyttää laitteen taajuutta.
    try { return new Context(options); } catch { /* oletuskonteksti alla */ }
  }
  return new Context();
}
