import { midiToFreq } from './music';
import { openMic, type MicStream } from './vendor/micInput';
import { PitchLoop, toDb, type AnalysisFrame, type PitchDetectorOptions } from './vendor/pitchDetector';

let shared: AudioContext | undefined;
/**
 * Sivun yhteinen äänikonteksti mikrofonin analyysille ja esimerkkisävelille. Se luodaan
 * ensimmäisellä käyttökerralla ja suljetaan vasta sivulta poistuttaessa (releaseAudio).
 * Kontekstin toistuva sulkeminen ja avaaminen pysäyttää ja käynnistää äänilaitteen virran,
 * mikä voi USB-äänikortilla jumittaa selaimen useiksi sekunneiksi.
 */
export function audioContext(): AudioContext {
  if (!shared || shared.state === 'closed') shared = new AudioContext();
  return shared;
}
export function releaseAudio() { const c = shared; shared = undefined; void c?.close().catch(() => {}); }

const errorName = (error: unknown) => error instanceof Error ? error.name : '';
/** Selkokielinen virheilmoitus ja toimintaohje mikrofonin avausvirheelle. */
export function micError(error: unknown): string {
  const name = errorName(error);
  if (['NotAllowedError','SecurityError','PermissionDeniedError'].includes(name)) return 'Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta.';
  if (name === 'NotFoundError' || name === 'OverconstrainedError') return 'Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen.';
  if (name === 'NotReadableError' || name === 'AbortError') return 'Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan.';
  if (name === 'MicSetupError') return (error as Error).message;
  return 'Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.';
}

export type MicInfo = {
  /** Laitteen nimi selaimen ilmoittamana. */
  label: string; deviceId: string; channels: number; sampleRate: number;
  /** Tallennettua laitetta ei löytynyt, joten käytössä on järjestelmän oletustulo. */
  fallback: boolean;
};
/**
 * Yksi mikrofonin käyttökerta: avaus, sävelsilmukka ja resurssien vapautus.
 * Sukupolvitunniste vapauttaa myös myöhässä saapuvan lupavastauksen, jos kuuntelu on jo peruttu.
 */
export class Microphone {
  private generation = 0;
  private mic?: MicStream;
  private loop?: PitchLoop;
  private listeners?: AbortController;
  constructor(private opener: (device?: string) => Promise<MicStream> = device => openMic(device, audioContext)) {}
  get active() { return !!this.mic; }
  /** Palauttaa null, jos kuuntelu peruttiin ennen kuin laite ehti avautua. */
  async start(device: string, options: PitchDetectorOptions, ended: () => void): Promise<MicInfo | null> {
    this.stop();
    const token = this.generation;
    let mic: MicStream, fallback = false;
    try { mic = await this.opener(device || undefined); }
    catch (error) {
      // Irrotettu tai vaihtunut laite: yritä oletustuloa ja kerro siitä käyttäjälle.
      if (!device || token !== this.generation || !['OverconstrainedError','NotFoundError'].includes(errorName(error))) throw error;
      mic = await this.opener(undefined); fallback = true;
    }
    if (token !== this.generation) { mic.stop(); return null; }
    this.mic = mic;
    try {
      this.loop = new PitchLoop(mic, { ...options });
      const lost = () => { if (this.mic === mic) { this.stop(); ended(); } };
      // Yhteinen konteksti elää mikrofonia pidempään, joten kuuntelijat poistetaan pysäytettäessä.
      const listeners = this.listeners = new AbortController();
      mic.stream.getTracks().forEach(track => track.addEventListener('ended', lost, { once: true, signal: listeners.signal }));
      mic.context.addEventListener?.('statechange', () => { if (mic.context.state !== 'running') lost(); }, { signal: listeners.signal });
      this.loop.start();
      return { label: mic.label, deviceId: mic.deviceId, channels: mic.channelCount, sampleRate: mic.context.sampleRate, fallback };
    } catch (error) { this.stop(); throw error; }
  }
  setOptions(options: Partial<PitchDetectorOptions>) { this.loop?.setOptions(options); }
  /** Esimerkkiäänen ajaksi: kaiuttimen ääni ei saa vastata tehtävään. */
  pause() { this.loop?.pause(); }
  resume() { this.loop?.resume(); }
  /** Uusi kysymys vaatii uuden näppäyksen tai vaimennuksen. */
  rearm() { this.loop?.rearm(); }
  /** Vapauttaa mikrofonin: äänivirta pysäytetään ja analyysisolmut irrotetaan. */
  stop() {
    this.generation++;
    this.listeners?.abort(); this.listeners = undefined;
    this.loop?.stop(); this.loop = undefined; this.mic?.stop(); this.mic = undefined;
  }
}

export type MicPhase = 'off' | 'requesting' | 'on' | 'error';
export type MicReading = 'off' | 'requesting' | 'silent' | 'noise' | 'untuned' | 'pitch' | 'error';
/**
 * Kuusi käyttäjälle erotettavaa tilaa: ei käytössä, lupaa pyydetään, kuuntelee mutta hiljaista,
 * ääntä tulee mutta sävel ei tunnistu (noise tai epävireinen untuned), sävel tunnistettu, virhe.
 */
export function micReading(phase: MicPhase, frame: AnalysisFrame | null): MicReading {
  if (phase !== 'on') return phase;
  if (!frame || frame.status === 'silent') return 'silent';
  if (frame.status === 'pitch') return 'pitch';
  return frame.status === 'off-pitch' ? 'untuned' : 'noise';
}
/** Äänitaso mittarin asteikolla 0–1 (−60…0 dBFS). */
export const meterLevel = (rms: number) => Math.max(0, Math.min(1, (toDb(rms) + 60) / 60));
/**
 * Taustakohinan mittaus: äänikynnys on kolminkertainen kohinan 95. prosenttipisteeseen nähden,
 * rajoissa 0,003–0,15. Tulos kertoo myös, onko ympäristö liian äänekäs.
 */
export function noiseThreshold(samples: number[]): { threshold: number; noise: number; loud: boolean } {
  const sorted = [...samples].sort((a, b) => a - b);
  const noise = sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * .95))] ?? .002;
  return { threshold: Math.min(.15, Math.max(.003, noise * 3)), noise, loud: noise > .04 };
}

/**
 * Kitaramainen esimerkkisävel: ylä-äänet kuuluvat myös puhelimen ja kannettavan kaiuttimista.
 * Käyttää sivun yhteistä äänikontekstia. Keskeytys vaimentaa jo ajastetut sävelet heti.
 */
export class ReferencePlayer {
  private master?: GainNode;
  private token = 0;
  private timer?: ReturnType<typeof setTimeout>;
  private loopTick?: ReturnType<typeof setInterval>;
  private adjustLoopTempo?: (bpm: number) => void;
  private settle?: (completed: boolean) => void;
  constructor(private provide: () => AudioContext = audioContext) {}
  /** Keskeyttää soivan esimerkin heti. Kesken jäänyt play palauttaa false. */
  stop() {
    this.token++;
    clearTimeout(this.timer);
    clearInterval(this.loopTick); this.loopTick = undefined;
    this.adjustLoopTempo = undefined;
    this.settle?.(false); this.settle = undefined;
    this.master?.disconnect(); this.master = undefined;
  }
  async play(notes: number[]): Promise<boolean> {
    this.stop();
    const token = this.token;
    const c = this.provide();
    if (c.state !== 'running') await c.resume();
    if (token !== this.token) return false;
    const master = c.createGain(); master.connect(c.destination); this.master = master;
    const partials = Array.from({ length: 12 }, (_, i) => 1 / (i + 1) ** 1.3);
    const wave = c.createPeriodicWave?.(new Float32Array([0, ...partials.map(() => 0)]), new Float32Array([0, ...partials]));
    notes.forEach((midi,i) => {
      const oscillator = c.createOscillator(), gain = c.createGain();
      const start = c.currentTime + .05 + i * .8;
      if (wave) oscillator.setPeriodicWave(wave); else oscillator.type = 'triangle';
      oscillator.frequency.value = midiToFreq(midi);
      gain.gain.setValueAtTime(0,start); gain.gain.linearRampToValueAtTime(.22,start+.012);
      gain.gain.exponentialRampToValueAtTime(.001,start+.7);
      oscillator.connect(gain); gain.connect(master); oscillator.start(start); oscillator.stop(start+.72);
    });
    const completed = await new Promise<boolean>(resolve => {
      this.settle = resolve;
      this.timer = setTimeout(() => resolve(true), notes.length * 800 + 350);
    });
    if (!completed || token !== this.token) return false;
    this.settle = undefined; master.disconnect(); this.master = undefined;
    return true;
  }

  /**
   * Yhtenäinen asteikkolooppi. Sävelet ajastetaan AudioContextin kellolla etukäteen,
   * ei toistokierroksen päättymistä odottavalla JavaScript-silmukalla.
   * onNote kertoo saman audiokellon mukaisen sävelindeksin otelautaa varten.
   * Toisto päättyy vain stop()-kutsuun (tai audioalustan virheeseen).
   */
  /** Muuta käynnissä olevan asteikkoloopin tempoa ilman äänivirran katkaisua. */
  setLoopTempo(bpm: number) { this.adjustLoopTempo?.(bpm); }

  async loop(notes: number[], onNote?: (index: number) => void, bpm = 75): Promise<boolean> {
    this.stop();
    if (!notes.length) return false;
    const token = this.token;
    const c = this.provide();
    if (c.state !== 'running') await c.resume();
    if (token !== this.token) return false;

    const master = c.createGain(); master.connect(c.destination); this.master = master;
    const partials = Array.from({ length: 12 }, (_, i) => 1 / (i + 1) ** 1.3);
    const wave = c.createPeriodicWave?.(new Float32Array([0, ...partials.map(() => 0)]), new Float32Array([0, ...partials]));
    // Aiemmin 0,8 s / sävel vastasi 75 BPM:ää.
    // Tempon vaihtuessa jo ajastetut 1–2 sekuntia soivat loppuun, sitten uusi nopeus astuu voimaan.
    let interval = 60 / Math.max(40, Math.min(140, bpm));
    this.adjustLoopTempo = value => {
      if (token === this.token && Number.isFinite(value)) {
        interval = 60 / Math.max(40, Math.min(140, value));
      }
    };
    const ahead = 1.6;
    let nextAt = c.currentTime + .05;
    let nextIndex = 0;
    const pending: { at: number; index: number }[] = [];

    const tick = () => {
      if (token !== this.token) return;
      // Jos pääsäie oli pitkään jumissa, älä käynnistä kymmeniä menneitä säveliä yhtä aikaa.
      if (nextAt < c.currentTime - .02) {
        const skipped = Math.ceil((c.currentTime - nextAt) / interval);
        nextAt += skipped * interval;
        nextIndex = (nextIndex + skipped) % notes.length;
        pending.length = 0;
      }
      while (nextAt < c.currentTime + ahead) {
        const midi = notes[nextIndex], index = nextIndex, start = nextAt;
        const oscillator = c.createOscillator(), gain = c.createGain();
        if (wave) oscillator.setPeriodicWave(wave); else oscillator.type = 'triangle';
        oscillator.frequency.value = midiToFreq(midi);
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(.22, start + .012);
        // Sävel päättyy aina ennen seuraavan pulssin alkua myös nopeassa tempossa.
        gain.gain.exponentialRampToValueAtTime(.001, start + interval * .975);
        oscillator.connect(gain); gain.connect(master);
        oscillator.start(start); oscillator.stop(start + interval * .985);
        pending.push({ at: start, index });
        nextAt += interval;
        nextIndex = (nextIndex + 1) % notes.length;
      }
      while (pending.length && pending[0].at <= c.currentTime + .01) {
        const event = pending.shift()!;
        onNote?.(event.index);
      }
    };

    // Ääni pysyy saumattomana, vaikka selaimen käyttöliittymäpiirto myöhästyisi hieman.
    tick();
    this.loopTick = setInterval(tick, 25);
    return new Promise<boolean>(resolve => { this.settle = resolve; });
  }
}
