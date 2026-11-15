/**
 * Riffiharjoitus – oikea kitara. Ohjattu, rauhallinen harjoittelu omalla kitaralla. Ei Reactia eikä
 * suoraa selainääntä; testataan Vitestillä.
 *
 * Kolme vaihetta, joiden välillä voi liikkua vapaasti ilman, että Kokeile muistista -kierroksen
 * eteneminen katoaa:
 * - **Kuuntele (listen):** malli soi ja pysähtyy pyynnöstä. Ei arviointia.
 * - **Opettele (learn):** sävelnimet ja ehdotetut otelautapaikat näkyvät. Mikrofoni näyttää kuulemansa
 *   sävelen, mutta ei arvioi. Otelaudalta voi kuunnella yksittäisiä säveliä.
 * - **Kokeile muistista (recall):** vihjeet piilossa. Mikrofoni kertoo säveljärjestyksestä samalla
 *   säveljonon tarkistajalla (SequenceChecker) kuin peli, mutta palaute on opastavaa: väärä sävel ei
 *   ole virhepiste, vaan kohta odottaa oikeaa säveltä. Oktaaviero kerrotaan erikseen. Seuraavan sävelen
 *   saa näkyviin pyynnöstä.
 *
 * Ei aikarajoja, virhepisteitä eikä pakollista läpäisyä: seuraavaan riffiin voi siirtyä milloin vain.
 * Edistyminen on itse kuitattuja riffejä (marked) ja mikrofonin kokonaan kuulemia kertoja (heard).
 *
 * Epävarma tunnistus (selkeys ei riitä tai sävel on epävireinen) näytetään ohjeena, ei koskaan virheenä.
 * Mikrofoni ei tunnista kieltä eikä sormitusta: sävelkorkeus on ainoa tieto.
 * Mikrofonia ei tarvita: kaikki vaiheet toimivat ilman sitä, ja tarkistuksen voi tehdä korvalla.
 */
import { referenceAudioError } from '../harjoittelija/audio';
import type { AnalysisFrame } from '../harjoittelija/vendor/pitchDetector';
import type { GameAudio } from './audioAdapter';
import type { MicController } from './mic';
import type { PluckEvent, PluckState } from './pluck';
import { LEVELS, RIFFS, noteName, riffPlace, spotText, type Level, type Riff } from './riffs';
import { SequenceChecker } from './sequence';
import type { PracticeData, PracticeStep, RiffStore } from './store';

export type { PracticeStep } from './store';
/** Harjoituksen päälle avautuva paneeli: mikrofonin valmistelu, viritin tai diagnostiikka. */
export type PracticePanel = 'mic' | 'tuner' | 'diagnostics';
export type PracticeTone = 'good' | 'info' | 'near' | 'uncertain' | 'hint' | 'done';
export type PracticeFeedback = { tone: PracticeTone; text: string };
/** Viimeisin mikrofonin näppäily: oikein, väärä sävel, sama sävelnimi eri oktaavissa tai vapaa (ei arvioitu). */
export type Verdict = 'right' | 'wrong' | 'octave' | 'free';

export type PracticeState = {
  view: 'home' | 'riff';
  level: Level;
  riff: Riff;
  riffNumber: number;
  step: PracticeStep;
  panel: PracticePanel | null;
  modelPlaying: boolean;
  /** Mallisoitossa soiva sävel. */
  playing: number | null;
  modelError: string;
  /** Kokeile muistista: soitetut kohdat tällä kierroksella. Säilyy vaiheiden välillä. */
  found: boolean[];
  index: number;
  complete: boolean;
  /** Seuraavan sävelen vihje näkyvissä, kunnes kohta on soitettu. */
  nextHint: boolean;
  /** Ilman mikrofonia: sävelet näytetään oman soiton tarkistamiseksi. */
  revealed: boolean;
  last: { midi: number; verdict: Verdict } | null;
  feedback: PracticeFeedback | null;
  progress: PracticeData;
};

/** Näin kauan epäselvää tai epävireistä ääntä ennen kuin siitä kerrotaan. */
export const UNSURE_MS = 450;
/** Näin kauan sama sävel soi odotetun toiston kohdalla ennen ohjetta vaimentaa kieli. */
export const REPEAT_HINT_MS = 700;

export class RiffPractice {
  private state: PracticeState;
  private listeners = new Set<() => void>();
  private op = 0;
  private round = 0;
  private checker: SequenceChecker;
  private unsure: { since: number; shown: boolean } | null = null;
  private repeatSince: number | null = null;
  private repeatShown = -1;

  constructor(private audio: Pick<GameAudio, 'playModel' | 'stopModel' | 'pluck'>, readonly mic: MicController, private store: RiffStore) {
    const riff = LEVELS[0].riffs[0];
    this.checker = new SequenceChecker(riff.midi, this.round, 'mic');
    this.state = { view: 'home', level: LEVELS[0], riff, riffNumber: 1, step: 'listen', panel: null, modelPlaying: false, playing: null,
      modelError: '', ...this.freshAttempt(riff), progress: this.progressCopy() };
    mic.onPluck = event => this.pluck(event);
    mic.onFrame = (frame, pluck, now) => this.frame(frame, pluck, now);
  }

  subscribe = (listener: () => void) => { this.listeners.add(listener); return () => { this.listeners.delete(listener); }; };
  getState = () => this.state;
  private set(patch: Partial<PracticeState>) { this.state = { ...this.state, ...patch }; this.listeners.forEach(l => l()); }
  private progressCopy(): PracticeData {
    const p = this.store.data.practice;
    return { marked: { ...p.marked }, heard: { ...p.heard }, last: p.last && { ...p.last } };
  }
  /** Vanhan mikrofonipelin läpäistyt riffit: näytetään erikseen, ei harjoituskuittauksina. */
  legacyMicPasses() { return Object.values(this.store.data.stats.mic).filter(s => (s.passed ?? 0) > 0).length; }

  // ---- navigointi ----
  /** Harjoitusten valikko. Malli pysähtyy; mikrofoni saa jäädä auki. */
  home() {
    this.stopModel();
    this.mic.setView('practice');
    this.set({ view: 'home', panel: null, progress: this.progressCopy() });
  }
  /** Avaa riffin. Uusi riffi aloittaa uuden muistista-kierroksen; saman riffin avaus säilyttää sen. */
  openRiff(riffId: string, step: PracticeStep = 'listen') {
    const place = riffPlace(riffId);
    if (!place) return;
    this.stopModel();
    const same = place.riff.id === this.state.riff.id;
    if (!same) this.newAttempt(place.riff);
    this.store.setPracticeLast(place.riff.id, step);
    this.mic.setView('practice');
    this.mic.rearm();
    this.set({ view: 'riff', level: place.level, riff: place.riff, riffNumber: place.number, step, panel: null, modelError: '',
      ...(same ? {} : this.freshAttempt(place.riff)), progress: this.progressCopy() });
  }
  /** Jatka viimeksi harjoiteltua, tai aloita ensimmäisestä. */
  continueLast() {
    const last = this.store.data.practice.last;
    this.openRiff(last?.riff ?? RIFFS[0].id, last?.step ?? 'listen');
  }
  /** Siirry riffijärjestyksessä eteen- tai taaksepäin (kotitreenien yli). Ei vaadi läpäisyä. */
  moveRiff(delta: 1 | -1) {
    const i = RIFFS.findIndex(r => r.id === this.state.riff.id) + delta;
    if (i >= 0 && i < RIFFS.length) this.openRiff(RIFFS[i].id, 'listen');
  }
  /** Vaihe vaihtuu vapaasti. Muistista-kierroksen eteneminen ja kuitattu tila säilyvät. */
  setStep(step: PracticeStep) {
    if (step === this.state.step) return;
    // Opettele-vaiheessa soitettu otelaudan ääni ei saa vastata muistista-kierrokseen.
    this.mic.rearm();
    this.store.setPracticeLast(this.state.riff.id, step);
    this.unsure = null;
    this.set({ step, last: null, feedback: step === 'recall' ? this.state.feedback : null });
  }

  // ---- mikrofoni ja työkalut ----
  /** Avaa paneelin. Mikrofonin lupa pyydetään vasta tästä valinnasta. */
  openPanel(panel: PracticePanel) {
    this.stopModel();
    this.set({ panel });
    this.mic.setView(panel === 'mic' ? 'check' : panel);
    if (!this.mic.isOn && this.mic.getState().status !== 'permission') void this.mic.start();
  }
  closePanel() {
    this.mic.setView('practice');
    this.set({ panel: null });
  }
  /** Sulje mikrofoni: harjoittelu jatkuu ilman automaattista arviointia. */
  closeMic() {
    this.mic.stop('user');
    if (this.state.panel) this.closePanel();
  }

  // ---- kuuntelu ----
  /** Kuuntele malli / Pysäytä (sama painike). Ei nollaa mitään. */
  listen() {
    if (this.state.modelPlaying) { this.stopModel(); return; }
    void this.playModel();
  }
  private async playModel() {
    const op = ++this.op;
    this.audio.stopModel();
    this.mic.muteForOutput();
    this.set({ modelPlaying: true, playing: null, modelError: '' });
    try {
      const done = await this.audio.playModel(this.state.riff.midi, index => { if (op === this.op) this.set({ playing: index }); });
      if (op !== this.op || !done) return;
    } catch (error) {
      if (op !== this.op) return;
      this.set({ modelError: referenceAudioError(error) });
    }
    this.set({ modelPlaying: false, playing: null });
    this.mic.unmuteAfterOutput();
  }
  private stopModel() {
    if (!this.state.modelPlaying) return;
    ++this.op;
    this.audio.stopModel();
    this.set({ modelPlaying: false, playing: null });
    this.mic.unmuteAfterOutput();
  }

  /** Otelaudan painallus Kuuntele- ja Opettele-vaiheissa: soittaa sävelen. Ei koskaan arvioida. */
  tap(midi: number): boolean {
    if (this.state.view !== 'riff' || this.state.step === 'recall' || this.state.modelPlaying) return false;
    this.audio.pluck(midi);
    return true;
  }

  // ---- Kokeile muistista ----
  /** Aloita alusta: uusi kierros samalla riffillä. */
  restartRecall() {
    this.newAttempt(this.state.riff);
    this.mic.rearm();
    this.set({ ...this.freshAttempt(this.state.riff), feedback: { tone: 'info', text: 'Uusi kierros: soita riffi alusta.' } });
  }
  /** Vihje pyynnöstä: seuraava odotettu sävel ja sen ehdotettu paikka. Ei rangaistusta. */
  showNextHint() {
    const i = this.state.index;
    if (this.state.step !== 'recall' || this.state.complete) return;
    const spot = this.state.riff.spots[i];
    this.set({ nextHint: true, feedback: { tone: 'hint', text: `Seuraava sävel (${i + 1}/${this.state.riff.midi.length}): ${noteName(this.state.riff.midi[i])} – ${spotText(spot)}.` } });
  }
  /** Ilman mikrofonia: näytä tai piilota riffin sävelet oman soiton tarkistamiseksi. */
  toggleReveal() { if (this.state.step === 'recall') this.set({ revealed: !this.state.revealed }); }
  private newAttempt(riff: Riff) {
    this.checker = new SequenceChecker(riff.midi, ++this.round, 'mic');
    this.unsure = null; this.repeatSince = null; this.repeatShown = -1;
  }
  private freshAttempt(riff: Riff) {
    return { found: riff.midi.map(() => false), index: 0, complete: false, nextHint: false, revealed: false, last: null, feedback: null };
  }

  /** Itse kuittaus: riffi on harjoiteltu. Ei vaadi mikrofonia eikä virheetöntä soittoa. Voi perua. */
  toggleMarked() {
    const id = this.state.riff.id;
    this.store.setMarked(id, !(id in this.store.data.practice.marked));
    this.set({ progress: this.progressCopy() });
  }

  /** Välilehti taustalle: malli pysähtyy ja mikrofoni suljetaan. Harjoituksen tila säilyy. */
  hidden() {
    // Mikrofoni ensin kiinni, jotta mallin pysäytys ei käynnistä analyysia turhaan uudelleen.
    if (this.mic.isOn || this.mic.getState().status === 'permission') this.mic.stop('background');
    this.stopModel();
  }
  dispose() { ++this.op; this.audio.stopModel(); this.mic.stop('user'); }

  // ---- mikrofonin tapahtumat ----
  private pluck(event: PluckEvent): boolean {
    const s = this.state;
    if (s.view !== 'riff' || s.panel !== null || s.modelPlaying) return false;
    this.unsure = null;
    if (s.step !== 'recall' || s.complete) { this.set({ last: { midi: event.midi, verdict: 'free' } }); return true; }
    const result = this.checker.feed({ midi: event.midi, round: this.checker.round, input: 'mic' });
    const total = s.riff.midi.length;
    if (result.type === 'accepted') {
      const found = s.found.map((f, i) => f || i === result.index);
      if (result.complete) {
        this.store.addHeard(s.riff.id);
        this.set({ found, index: result.index + 1, complete: true, nextHint: false, last: { midi: event.midi, verdict: 'right' }, progress: this.progressCopy(),
          feedback: { tone: 'done', text: `Mikrofoni kuuli koko riffin oikeassa järjestyksessä: ${s.riff.midi.map(noteName).join(' – ')}. Voit soittaa uudelleen, kuitata riffin harjoitelluksi tai siirtyä seuraavaan.` } });
      } else {
        this.set({ found, index: result.index + 1, nextHint: false, last: { midi: event.midi, verdict: 'right' },
          feedback: { tone: 'good', text: `${noteName(event.midi)} – oikea sävel oikeassa kohdassa (${result.index + 1}/${total}).` } });
      }
      return true;
    }
    if (result.type === 'wrong') {
      this.set({ last: { midi: event.midi, verdict: result.octave ? 'octave' : 'wrong' }, feedback: result.octave
        ? { tone: 'near', text: `Kuulin ${noteName(event.midi)}: sävelnimi on oikea, mutta korkeus on eri oktaavissa. Kokeile toista nauhaa tai kieltä. Mikrofoni voi myös kuulla ylä-äänen – jos soitit mielestäsi oikein, näppää uudelleen.` }
        : { tone: 'info', text: `Kuulin ${noteName(event.midi)}. Tähän kohtaan (${result.index + 1}/${total}) kuuluu toinen sävel. Kokeile uudelleen, kuuntele malli tai pyydä vihje.` } });
      return true;
    }
    return false;
  }

  /**
   * Analyysikehykset: epävarma tunnistus ja toistuva sama sävel. Kumpikaan ei ole virhe; ne kertovat,
   * miksi soitto ei (vielä) tunnistunut.
   */
  private frame(frame: AnalysisFrame, pluck: PluckState, now: number) {
    const s = this.state;
    if (s.view !== 'riff' || s.panel !== null || s.modelPlaying || s.step === 'listen') return;
    const loud = frame.rms >= this.mic.getState().minRms;
    if (loud && (frame.status === 'unclear' || frame.status === 'off-pitch')) {
      this.unsure ??= { since: now, shown: false };
      if (!this.unsure.shown && now - this.unsure.since >= UNSURE_MS) {
        this.unsure.shown = true;
        this.set({ feedback: { tone: 'uncertain', text: frame.status === 'off-pitch' && frame.midi !== undefined
          ? `Epävarma tunnistus: lähin sävel on ${noteName(frame.midi)}, mutta vire on yli 35 senttiä sivussa. Tätä ei arvioida – tarkista viritys virittimellä.`
          : 'Epävarma tunnistus: kuulen ääntä, mutta selvää säveltä ei löydy. Syynä voi olla useampi soiva kieli, taustamelu tai hiljainen soitto. Tätä ei lasketa virheeksi – soita yksi kieli kerrallaan ja anna sen soida hetki.' } });
      }
    } else if (!loud || frame.status === 'pitch') this.unsure = null;

    // Toistuva sama sävel: odotettu sävel on sama kuin juuri hyväksytty, ja se soi yhä.
    const expected = this.checker.next;
    const waiting = s.step === 'recall' && !s.complete && expected !== null && pluck.reason === 'waiting-new-pluck' && pluck.last?.midi === expected
      && s.index > 0 && s.riff.midi[s.index - 1] === expected;
    if (!waiting) { this.repeatSince = null; return; }
    this.repeatSince ??= now;
    if (this.repeatShown !== s.index && now - this.repeatSince >= REPEAT_HINT_MS) {
      this.repeatShown = s.index;
      this.set({ feedback: { tone: 'hint', text: 'Sama sävel soi yhä. Toistuvaa säveltä varten vaimenna kieli hetkeksi kämmenellä tai sormella ja näppää sitten uudelleen.' } });
    }
  }
}
