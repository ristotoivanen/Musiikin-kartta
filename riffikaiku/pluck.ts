/**
 * Riffikaiun näppäilytunnistin: PitchLoopin analyysikehyksistä (Pitchy-havainto, taso, tila)
 * erillisiä näppäilytapahtumia. Puhdas: ei ääntä eikä ajastimia, aika annetaan kutsussa.
 *
 * Perustuu Kitaraharjoittelijan NoteGaten sääntöihin (sama vakausaika, katkosten sieto, aluke
 * OnsetDetectorilla, vapautus hiljaisuudella) ja yhteen lisäykseen:
 *
 *   Eri sävelkorkeus ilman uutta aluketta (legato, pehmeä näppäys soivan kielen päälle) hyväksytään
 *   uutena näppäilynä, kun se on vakaa, ei ole edellisen sävelen ylä-ääni- tai oktaavihyppy ja sen
 *   taso on vähintään neljännes edellisen sävelen huipputasosta.
 *
 * Miksi: ensimmäisessä kitarakokeessa ja synteettisissä testeissä NoteGate vaati jokaiselle uudelle
 * vastaukselle ≥ 2-kertaisen tason nousun tai ≥ 120 ms hiljaisuuden – myös eri sävelelle. Soivan
 * kielen päälle soitettu eri sävel jäi siksi huomaamatta. Ylä-ääni- ja tasoehto estävät soimaan
 * jääneen sävelen ylä-äänen tai hiljaisen myötäresonanssin muuttumisen vastaukseksi.
 * Sama sävel uudelleen vaatii edelleen alukkeen tai vaimennuksen (pitkä sustain ei vastaa kahdesti).
 *
 * Tunnistin ei käytä PitchLoopin omaa onStableNote-väylää, joten jaettu NoteGate (Kitaraharjoittelija)
 * ei muutu. Jokainen vaihe raportoidaan diagnostiikkaa varten (PluckState).
 */
import { OnsetDetector, type AnalysisFrame, type StableNoteEvent } from '../harjoittelija/vendor/pitchDetector';

export type ArmReason = 'quiet' | 'onset' | 'pitch-change';
/** Miksi kehys ei (vielä) tuottanut näppäilyä. */
export type HoldReason =
  | 'silent' | 'unclear' | 'out-of-range' | 'off-pitch'
  /** Sama sävel soi yhä edellisestä hyväksynnästä: odotetaan uutta aluketta tai vaimennusta. */
  | 'waiting-new-pluck'
  /** Eri sävel, mutta edellisen ylä-ääni tai oktaavi: ei hyväksytä ilman uutta aluketta. */
  | 'harmonic'
  /** Eri sävel, mutta liian hiljainen (myötäresonanssi): ei hyväksytä ilman uutta aluketta. */
  | 'too-quiet-for-change'
  /** Sävel tunnistettu ja viritetty, vakausaika kesken. */
  | 'stabilizing';

export type PluckState = {
  armed: boolean;
  armedBy: ArmReason | null;
  /** Vakautuva sävel ja kuinka kauan se on ollut sama. */
  candidate: { midi: number; heldMs: number } | null;
  reason: HoldReason | null;
  /** Viimeksi hyväksytty näppäily (aikaleima pelin kellossa) ja laskuri. */
  last: { midi: number; at: number; armedBy: ArmReason } | null;
  count: number;
};

export type PluckEvent = StableNoteEvent & { armedBy: ArmReason };
export type PluckOptions = { minRms: number; stabilityMs: number; releaseMs?: number; gapMs?: number };

/** Ylä-ääni- ja oktaavihypyt puolisävelaskelina (2., 3., 4., 5., 6. ja 8. osaääni sekä alaoktaavit). */
const HARMONIC_JUMPS = new Set([12, 19, 24, 28, 31, 36]);
/** Uuden sävelen taso suhteessa edellisen sävelen huipputasoon. */
export const PITCH_CHANGE_LEVEL = .25;

export class PluckDetector {
  private onset = new OnsetDetector();
  private armed = false;
  private armedBy: ArmReason | null = null;
  private quietSince: number | null = null;
  private current: { midi: number; since: number; seen: number; armedBy: ArmReason } | null = null;
  /** Edellinen hyväksytty sävel ja sen huipputaso. Nollaus (reset/rearm) poistaa ne. */
  private previous: { midi: number; peak: number } | null = null;
  /** Suurin taso nykyisen sävelen alusta (viritys tai uuden ehdokkaan alku) lähtien: näppäyksen huippu. */
  private notePeak = 0;
  private last: PluckState['last'] = null;
  private count = 0;
  private reason: HoldReason | null = null;

  constructor(private opts: PluckOptions) {}
  setMinRms(minRms: number) { this.opts = { ...this.opts, minRms }; }
  get minRms() { return this.opts.minRms; }

  /**
   * Uusi kysymys tai jatko tauolta: soimaan jäänyt ääni ei saa vastata. Myös sävelvaihdosta
   * virittyminen estetään, kunnes seuraava näppäily on hyväksytty alukkeen tai hiljaisuuden kautta
   * (esim. mallisoiton kaiutinhäntä on eri sävel kuin pelaajan edellinen).
   */
  rearm() { this.armed = false; this.armedBy = null; this.quietSince = null; this.current = null; this.previous = null; }
  reset() { this.rearm(); this.onset.reset(); this.reason = null; }

  state(): PluckState {
    return { armed: this.armed, armedBy: this.armedBy, reason: this.reason, last: this.last, count: this.count,
      candidate: this.current ? { midi: this.current.midi, heldMs: Math.max(0, this.current.seen - this.current.since) } : null };
  }

  feed(frame: AnalysisFrame, now: number): PluckEvent | null {
    const { minRms, stabilityMs, releaseMs = 120, gapMs = 80 } = this.opts;
    const quiet = frame.rms < minRms;
    const onset = this.onset.feed(frame.rms, now, minRms);
    if (quiet) {
      this.quietSince ??= now;
      if (now - this.quietSince >= releaseMs) this.arm('quiet');
    } else {
      this.quietSince = null;
      if (onset) this.arm('onset');
    }
    this.notePeak = Math.max(this.notePeak, frame.rms);
    if (frame.status !== 'pitch' || frame.midi === undefined) {
      if (this.current && now - this.current.seen > gapMs) this.current = null;
      this.reason = frame.status === 'pitch' ? 'unclear' : frame.status;
      return null;
    }
    const midi = frame.midi;
    let armedBy = this.armedBy;
    if (!this.armed) {
      const prev = this.previous;
      if (!prev || midi === prev.midi) { this.current = null; this.reason = 'waiting-new-pluck'; return null; }
      if (HARMONIC_JUMPS.has(Math.abs(midi - prev.midi))) { this.current = null; this.reason = 'harmonic'; return null; }
      if (frame.rms < prev.peak * PITCH_CHANGE_LEVEL) { this.current = null; this.reason = 'too-quiet-for-change'; return null; }
      armedBy = 'pitch-change';
    }
    if (!this.current || this.current.midi !== midi) {
      this.current = { midi, since: now, seen: now, armedBy: armedBy! };
      if (armedBy === 'pitch-change') this.notePeak = frame.rms;
    }
    this.current.seen = now;
    const heldMs = now - this.current.since;
    if (heldMs < stabilityMs) { this.reason = 'stabilizing'; return null; }
    const by = this.current.armedBy;
    this.armed = false; this.armedBy = null; this.current = null;
    this.previous = { midi, peak: this.notePeak };
    this.last = { midi, at: now, armedBy: by };
    this.count++;
    this.reason = null;
    return { midi, frequency: frame.frequency ?? 0, cents: frame.cents ?? 0, clarity: frame.clarity ?? 0, timestamp: now, heldMs, armedBy: by };
  }

  private arm(by: ArmReason) {
    this.armed = true; this.armedBy = by;
    this.current = null;
    this.notePeak = 0;
  }
}
