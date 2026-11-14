/**
 * Kevyt kitaraviritin PitchLoopin analyysikehysten päälle (Pitchy-taajuus jatkuvasti, ei
 * näppäilytapahtumia). Puhdas: ei ääntä eikä ajastimia. Viritin ei koskaan välitä mitään pelin
 * säveljonon tarkistajalle.
 *
 * - Normaali viritys E2–A2–D3–G3–B3–E4, A4 = 440 Hz.
 * - cents = 1200 · log2(mitattu / tavoite).
 * - Vihreä alue ±5 senttiä: noin puolet kuulon erotuskyvystä yksittäisillä sävelillä ja tavallinen
 *   kitaravirittimien ”vireessä”-raja. Tiukempi raja hyppisi kielen värähtelyn ja Pitchyn
 *   mittaushajonnan vuoksi; löysempi kuuluu sointuja soitettaessa.
 * - Luotettava lukema vaatii vähintään 5 selkeää havaintoa 100 ms:n ajalta ja enintään 25 sentin
 *   hajonnan. Muuten näytetään ”epävarma havainto” eikä viritysohjetta.
 * - Mittari tasoitetaan: mediaani viimeisistä havainnoista ja eksponentiaalinen keskiarvo.
 */
import type { AnalysisFrame } from '../harjoittelija/vendor/pitchDetector';

export const A4 = 440;
export const midiHz = (midi: number) => A4 * 2 ** ((midi - 69) / 12);
export const centsBetween = (measured: number, target: number) => 1200 * Math.log2(measured / target);
export const IN_TUNE_CENTS = 5;
/** Yli puolisävelaskeleen poikkeama: kuullaan todennäköisesti eri kieli, ei anneta viritysohjetta. */
export const FAR_CENTS = 100;

export type OpenString = { name: string; midi: number; number: number };
/** Kielet paksuimmasta ohuimpaan; number on kitaran kielinumero (6 = paksu E). */
export const OPEN_TUNING: readonly OpenString[] = [
  { name: 'E2', midi: 40, number: 6 }, { name: 'A2', midi: 45, number: 5 }, { name: 'D3', midi: 50, number: 4 },
  { name: 'G3', midi: 55, number: 3 }, { name: 'B3', midi: 59, number: 2 }, { name: 'E4', midi: 64, number: 1 },
];

export type TunerStatus = 'no-signal' | 'unreliable' | 'far' | 'flat' | 'in-tune' | 'sharp';
export type TunerReading = {
  status: TunerStatus;
  target: OpenString;
  /** Valitsiko viritin kielen itse (lähin vapaa kieli). */
  auto: boolean;
  frequency?: number;
  /** Tasoitettu poikkeama tavoitteesta. */
  cents?: number;
  /** Lähin tasavireinen sävel mitatulle taajuudelle. */
  heardMidi?: number;
};

const median = (values: number[]) => { const s = [...values].sort((a, b) => a - b); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
export const nearestString = (frequency: number) =>
  OPEN_TUNING.reduce((best, s) => Math.abs(centsBetween(frequency, midiHz(s.midi))) < Math.abs(centsBetween(frequency, midiHz(best.midi))) ? s : best);

export class Tuner {
  private samples: { at: number; frequency: number }[] = [];
  private smoothed: number | null = null;
  private target: OpenString | null = null;
  private lastAt = -Infinity;
  constructor(private windowMs = 160, private minSamples = 5, private maxSpreadCents = 25, private smoothing = .35) {}

  /** null = automaattinen (lähin vapaa kieli). */
  setTarget(midi: number | null) {
    this.target = midi === null ? null : OPEN_TUNING.find(s => s.midi === midi) ?? null;
    this.smoothed = null;
  }
  get selected() { return this.target; }
  reset() { this.samples = []; this.smoothed = null; }

  feed(frame: AnalysisFrame, now: number): TunerReading {
    const usable = (frame.status === 'pitch' || frame.status === 'off-pitch') && frame.frequency !== undefined && frame.frequency > 0;
    if (usable) { this.samples.push({ at: now, frequency: frame.frequency! }); this.lastAt = now; }
    this.samples = this.samples.filter(s => now - s.at <= this.windowMs);
    // Lyhyt katkos (yksittäinen epäselvä kehys) ei nollaa mittaria.
    if (!usable && now - this.lastAt > this.windowMs) this.smoothed = null;
    const fallback = this.target ?? OPEN_TUNING[0];
    if (!this.samples.length) {
      return { status: frame.status === 'silent' ? 'no-signal' : 'unreliable', target: fallback, auto: !this.target };
    }
    const frequency = median(this.samples.map(s => s.frequency));
    const spread = centsBetween(Math.max(...this.samples.map(s => s.frequency)), Math.min(...this.samples.map(s => s.frequency)));
    const span = this.samples[this.samples.length - 1].at - this.samples[0].at;
    const target = this.target ?? nearestString(frequency);
    const heardMidi = Math.round(69 + 12 * Math.log2(frequency / A4));
    if (this.samples.length < this.minSamples || span < 100 || spread > this.maxSpreadCents) {
      return { status: 'unreliable', target, auto: !this.target, frequency, heardMidi };
    }
    const raw = centsBetween(frequency, midiHz(target.midi));
    if (Math.abs(raw) > FAR_CENTS) { this.smoothed = null; return { status: 'far', target, auto: !this.target, frequency, cents: raw, heardMidi }; }
    this.smoothed = this.smoothed === null ? raw : this.smoothed + this.smoothing * (raw - this.smoothed);
    const cents = this.smoothed;
    const status: TunerStatus = Math.abs(cents) <= IN_TUNE_CENTS ? 'in-tune' : cents < 0 ? 'flat' : 'sharp';
    return { status, target, auto: !this.target, frequency, cents, heardMidi };
  }
}
