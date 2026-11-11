// Pitch detection loop built on `pitchy` (McLeod Pitch Method).
// Adapted from FretEcho (MIT, see FretEcho-LICENSE.txt). Musiikin kartan muutokset:
// - jokainen kehys raportoidaan tilan ja äänitason kanssa, myös kun säveltä ei hyväksytä
// - kaksikanavaisesta äänikortista analysoidaan voimakkaampi kanava
// - analyysi-ikkuna skaalautuu näytteenottotaajuuteen
// - uusi vastaus vaatii hiljaisuuden tai uuden alukkeen (NoteGate)

import { PitchDetector as Pitchy } from 'pitchy';
import { nearestMidi } from './notes';
import type { MicStream } from './micInput';

/**
 * silent: taso alle äänikynnyksen · unclear: ääntä on, jaksollista säveltä ei löydy ·
 * out-of-range: taajuus kitaran alueen ulkopuolella · off-pitch: sävel tunnistuu, mutta
 * vire on toleranssin ulkopuolella · pitch: hyväksyttävä sävelhavainto.
 */
export type FrameStatus = 'silent' | 'unclear' | 'out-of-range' | 'off-pitch' | 'pitch';

export interface AnalysisFrame {
  status: FrameStatus;
  /** Lyhyen ikkunan RMS voimakkaimmalta kanavalta, 0–1. Päivittyy joka kehyksellä. */
  rms: number;
  /** Lyhyen ikkunan huippuarvo, 0–1. Arvo lähellä yhtä tarkoittaa leikkautumista. */
  peak: number;
  /** Analysoitu kanava (0 = ensimmäinen) ja kanavien tasot. */
  channel: number;
  levels: number[];
  frequency?: number;
  clarity?: number;
  midi?: number;
  cents?: number;
}

export interface StableNoteEvent {
  midi: number;
  frequency: number;
  cents: number;
  clarity: number;
  timestamp: number;
  /** Kuinka kauan sävel oli soinut vakaana ennen hyväksymistä. */
  heldMs: number;
}

export interface PitchDetectorOptions {
  minClarity?: number;
  minRms?: number;
  stabilityMs?: number;
  centsTolerance?: number;
  minFreq?: number;
  maxFreq?: number;
  onFrame?: (f: AnalysisFrame) => void;
  onStableNote?: (e: StableNoteEvent) => void;
}

/** Noin 170 ms:n ikkuna: riittää matalalle E:lle (82 Hz) myös 96 ja 192 kHz:n äänikorteilla. */
export function windowSizeFor(sampleRate: number): number {
  const wanted = sampleRate * 0.17;
  let size = 2048;
  while (size < wanted && size < 32768) size *= 2;
  return size;
}

const SHORT_WINDOW_S = 0.05;
const CHANNEL_SWITCH_RATIO = 1.5;

export class PitchLoop {
  private analysers: AnalyserNode[] = [];
  private splitter: ChannelSplitterNode | null = null;
  private detector: Pitchy<Float32Array>;
  private buffers: Float32Array<ArrayBuffer>[] = [];
  private shortLength: number;
  private rafId: number | null = null;
  private running = false;
  private paused = false;
  private channel = 0;
  private gate = new NoteGate();
  private onset = new OnsetDetector();

  constructor(private mic: MicStream, private opts: PitchDetectorOptions = {}) {
    const context = mic.context;
    const fftSize = windowSizeFor(context.sampleRate);
    const channels = Math.max(1, Math.min(2, mic.channelCount ?? 1));
    if (channels > 1 && typeof context.createChannelSplitter === 'function') {
      // Äänikortin soitintulo voi olla kumpi tahansa kanava. Kanavia ei summata,
      // jotta toisen tulon kohina tai vastavaihe ei heikennä kitaran signaalia.
      this.splitter = context.createChannelSplitter(channels);
      mic.source.connect(this.splitter);
    }
    for (let i = 0; i < (this.splitter ? channels : 1); i++) {
      const analyser = context.createAnalyser();
      analyser.fftSize = fftSize;
      analyser.smoothingTimeConstant = 0;
      if (this.splitter) this.splitter.connect(analyser, i);
      else mic.source.connect(analyser);
      this.analysers.push(analyser);
      this.buffers.push(new Float32Array(new ArrayBuffer(fftSize * 4)));
    }
    this.shortLength = Math.min(fftSize, Math.max(256, Math.round(context.sampleRate * SHORT_WINDOW_S)));
    this.detector = Pitchy.forFloat32Array(fftSize);
    this.detector.minVolumeDecibels = -60;
  }

  /** Kynnysten muuttaminen kesken kuuntelun, esimerkiksi mikrofonitestin liukusäätimistä. */
  setOptions(options: Partial<PitchDetectorOptions>) {
    Object.assign(this.opts, options);
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.gate.reset();
    this.onset.reset();
    const tick = () => {
      if (!this.running) return;
      if (!this.paused) this.processFrame(performance.now());
      this.rafId = requestAnimationFrame(tick);
    };
    this.rafId = requestAnimationFrame(tick);
  }

  stop() {
    this.running = false;
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    this.rafId = null;
    this.gate.reset();
    this.onset.reset();
    for (const analyser of this.analysers) analyser.disconnect();
    this.splitter?.disconnect();
  }

  /** Stop processing frames without tearing down the audio graph (esimerkkiäänen ajaksi). */
  pause() {
    this.paused = true;
    this.gate.reset();
    this.onset.reset();
  }

  resume() {
    this.paused = false;
    this.gate.reset();
    this.onset.reset();
  }

  /** Uusi kysymys: edellisestä vastauksesta soimaan jäänyt sävel ei saa vastata siihen. */
  rearm() {
    this.gate.reset();
  }

  private processFrame(now: number) {
    const {
      minClarity = 0.9,
      minRms = 0.01,
      stabilityMs = 240,
      centsTolerance = 35,
      minFreq = 70,
      maxFreq = 1450,
      onFrame,
      onStableNote,
    } = this.opts;

    const levels = this.analysers.map((analyser, i) => {
      analyser.getFloatTimeDomainData(this.buffers[i]);
      return computeRms(this.buffers[i], this.buffers[i].length - this.shortLength);
    });
    // Vaihda kanavaa vasta selvällä erolla, ettei analyysi hypi kanavien välillä.
    const loudest = levels.indexOf(Math.max(...levels));
    if (loudest !== this.channel && levels[loudest] > (levels[this.channel] ?? 0) * CHANNEL_SWITCH_RATIO) this.channel = loudest;
    const buffer = this.buffers[this.channel];
    const rms = levels[this.channel];
    const peak = computePeak(buffer, buffer.length - this.shortLength);
    const base = { rms, peak, channel: this.channel, levels };
    const quiet = rms < minRms;
    const onset = this.onset.feed(rms, now, minRms);

    // Koko ikkunan taso ratkaisee, kannattaako säveltä etsiä: sävelen häntä on vielä
    // ikkunassa hetken sen jälkeen, kun lyhyt taso on jo laskenut.
    if (quiet && computeRms(buffer, 0) < minRms) {
      this.gate.feed(null, now, stabilityMs, true, false);
      onFrame?.({ ...base, status: 'silent' });
      return;
    }

    const [frequency, clarity] = this.detector.findPitch(buffer, this.mic.context.sampleRate);
    if (!isFinite(frequency) || clarity < minClarity) {
      this.gate.feed(null, now, stabilityMs, quiet, onset);
      onFrame?.({ ...base, status: quiet ? 'silent' : 'unclear', clarity: isFinite(clarity) ? clarity : 0 });
      return;
    }
    if (frequency < minFreq || frequency > maxFreq) {
      this.gate.feed(null, now, stabilityMs, quiet, onset);
      onFrame?.({ ...base, status: 'out-of-range', frequency, clarity });
      return;
    }

    const { midi, cents } = nearestMidi(frequency);
    // Reject if far off a semitone center — implies unstable transient or an untuned string.
    if (Math.abs(cents) > centsTolerance) {
      this.gate.feed(null, now, stabilityMs, quiet, onset);
      onFrame?.({ ...base, status: 'off-pitch', frequency, clarity, midi, cents });
      return;
    }

    onFrame?.({ ...base, status: 'pitch', frequency, clarity, midi, cents });
    const stable = this.gate.feed(midi, now, stabilityMs, quiet, onset);
    if (stable !== null) onStableNote?.({ midi, frequency, cents, clarity, timestamp: now, heldMs: stable.heldMs });
  }
}

/**
 * Päästää läpi yhden vastauksen sävelen alkua kohti. Uusi vastaus on mahdollinen vasta, kun
 * - taso on ollut alle äänikynnyksen vähintään releaseMs (kieli vaimennettu), tai
 * - taso nousee äkisti (uusi näppäys soivan sävelen päälle).
 * Soimaan jäänyt sävel tai sen ylä-ääneksi vaihtuva havainto ei siis vastaa toista kertaa.
 * Lyhyt katkos havainnossa (enintään gapMs) ei nollaa vakausaikaa.
 */
export class NoteGate {
  private armed = false;
  private quietSince: number | null = null;
  private current: { midi: number; since: number; seen: number } | null = null;
  constructor(private releaseMs = 120, private gapMs = 80) {}
  reset() { this.armed = false; this.quietSince = null; this.current = null; }
  feed(midi: number | null, now: number, stableMs: number, quiet: boolean, onset: boolean): { midi: number; heldMs: number } | null {
    if (quiet) {
      this.quietSince ??= now;
      if (now - this.quietSince >= this.releaseMs) { this.armed = true; this.current = null; }
    } else {
      this.quietSince = null;
      if (onset) { this.armed = true; this.current = null; }
    }
    if (midi === null) {
      if (this.current && now - this.current.seen > this.gapMs) this.current = null;
      return null;
    }
    if (!this.armed) return null;
    if (!this.current || this.current.midi !== midi) this.current = { midi, since: now, seen: now };
    this.current.seen = now;
    const heldMs = now - this.current.since;
    if (heldMs < stableMs) return null;
    this.armed = false;
    this.current = null;
    return { midi, heldMs };
  }
}

/**
 * Uusi aluke: lyhyen ikkunan taso vähintään kaksinkertaistuu viimeisten 300 ms:n
 * pienimpään arvoon nähden ja ylittää äänikynnyksen selvästi.
 */
export class OnsetDetector {
  private history: { time: number; rms: number }[] = [];
  private lastOnset = -Infinity;
  constructor(private ratio = 2, private windowMs = 300, private refractoryMs = 150) {}
  reset() { this.history = []; this.lastOnset = -Infinity; }
  feed(rms: number, now: number, minRms: number): boolean {
    // Alukkeen aikana taso vielä nousee. Seurataan sitä, ettei sama näppäys laukea kahdesti.
    if (now - this.lastOnset < this.refractoryMs) { this.history = [{ time: now, rms }]; return false; }
    while (this.history.length && now - this.history[0].time > this.windowMs) this.history.shift();
    const floor = this.history.length ? Math.min(...this.history.map(h => h.rms)) : rms;
    this.history.push({ time: now, rms });
    if (rms < minRms * 1.5 || rms < floor * this.ratio) return false;
    this.lastOnset = now;
    this.history = [{ time: now, rms }];
    return true;
  }
}

export function computeRms(buf: Float32Array, from = 0): number {
  const start = Math.max(0, from);
  let sum = 0;
  for (let i = start; i < buf.length; i++) sum += buf[i] * buf[i];
  return Math.sqrt(sum / Math.max(1, buf.length - start));
}

export function computePeak(buf: Float32Array, from = 0): number {
  let peak = 0;
  for (let i = Math.max(0, from); i < buf.length; i++) { const v = Math.abs(buf[i]); if (v > peak) peak = v; }
  return peak;
}

/** RMS desibeleinä täydestä tasosta (dBFS). Hiljaisuus rajataan arvoon −90. */
export const toDb = (rms: number) => rms > 0 ? Math.max(-90, 20 * Math.log10(rms)) : -90;
