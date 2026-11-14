/**
 * Riffikaiun pelin tilakone. Ei Reactia eikä suoraa selainääntä: ääni tulee GameAudio-sovittimen
 * kautta, joten koko kulku (myös vanhat asynkroniset kutsut) testataan Vitestillä.
 *
 * Päätila: idle → permission → mic-check → model-playing → output-settling → listening →
 *   success (riffi virheettömästi) | retry (loppuun, mutta keltaisia kohtia) | level-complete (tason 3/3).
 * Sivupolut: paused (oma tauko, taustavälilehti, mikrofonin katkeaminen) ja error (lupa tai laite).
 * Otelaudalla vastattaessa permission, mic-check ja output-settling jäävät pois.
 *
 * Tasot: 4 tasoa × 3 riffiä (riffs.ts). Riffi läpäistään vain kaikki pallukat vihreinä. Tason
 * jälkeen pelaaja valitsee itse: seuraava taso tai saman tason harjoittelu uudelleen.
 *
 * Suojaukset:
 * - op: jokainen käyttäjän vaihe kasvattaa laskuria; myöhässä palaava mallisoitto tai lupavastaus ohitetaan.
 * - micSession: suljetun mikrofonin myöhässä tulevat kehykset ja sävelet ohitetaan.
 * - round: SequenceChecker hylkää edellisen kierroksen vastaukset.
 * - Mallisoiton ajan analyysi on tauolla; sen jälkeen OutputSettler + NoteGaten nollaus.
 */
import { micError, referenceAudioError } from '../harjoittelija/audio';
import { note } from '../harjoittelija/music';
import type { AnalysisFrame, FrameStatus, StableNoteEvent } from '../harjoittelija/vendor/pitchDetector';
import type { GameAudio, MicHandlers } from './audioAdapter';
import { CHECK_MIDI, LEVELS, TUTORIAL, type Level, type Riff } from './riffs';
import { OutputSettler, SequenceChecker, type AnswerInput, type SlotMark } from './sequence';
import type { RiffStore } from './store';

export type Phase = 'idle' | 'permission' | 'mic-check' | 'model-playing' | 'output-settling' | 'listening'
  | 'success' | 'retry' | 'level-complete' | 'paused' | 'error';
export type PauseReason = 'manual' | 'background' | 'mic-lost';
export type Heard = { status: FrameStatus; midi?: number };
export type Feedback = { tone: 'info' | 'good' | 'bad'; text: string };

export type GameState = {
  phase: Phase;
  input: AnswerInput;
  riff: Riff;
  tutorial: boolean;
  /** Nykyinen taso ja riffin järjestysnumero tasolla (1–3). Opastuksessa taso 1. */
  level: Level;
  riffNumber: number;
  /** Hyväksyttyjen sävelten määrä tällä kierroksella. */
  index: number;
  /** Etenemispallukat: pending / red / green / yellow. */
  marks: SlotMark[];
  /** Mallisoitossa soiva sävel (korostus), muuten null. */
  playing: number | null;
  hint: boolean;
  /** Näytetäänkö koko kuusikielinen otelauta tason kielten sijaan. */
  fullBoard: boolean;
  /** Mikrofonin viimeisin analyysikehys tiivistettynä. */
  heard: Heard | null;
  /** Viimeisin vakaa sävel, jonka mikrofoni hyväksyi havainnoksi (ei välttämättä oikea). */
  lastStable: number | null;
  check: 'waiting' | 'ok' | 'other';
  feedback: Feedback | null;
  error: string;
  pausedReason: PauseReason | null;
  micLabel: string;
  /** Tällä vastaustavalla läpäistyt tasot. */
  completedLevels: number[];
};

/** Vaiheet, joissa mikrofoni voi olla auki ja joista tauko on mahdollinen. */
const ACTIVE: Phase[] = ['mic-check', 'model-playing', 'output-settling', 'listening', 'success', 'retry', 'level-complete'];
/** Vaiheet, joissa virtuaalikitaraa voi soittaa vapaasti (vastaukseksi vain listening). */
const FREE_PLAY: Phase[] = ['listening', 'success', 'retry', 'level-complete'];
export const noteName = (midi: number) => note(midi, false, true);
const pending = (riff: Riff): SlotMark[] => riff.midi.map(() => 'pending');

export class RiffGame {
  private state: GameState;
  private listeners = new Set<() => void>();
  private op = 0;
  private micSession = 0;
  private micOpen = false;
  private micChecked = false;
  private round = 0;
  private checker: SequenceChecker | null = null;
  private settler = new OutputSettler();
  private settleTimer: ReturnType<typeof setTimeout> | undefined;
  private roundStart: number | null = null;
  private replays = 0;
  private pausedFrom: Phase | null = null;
  /** Saman riffiyrityksen aiemmilta kierroksilta (uusinta, aloita alusta) kertyneet tiedot. */
  private carried = { wrong: 0, octave: 0, hint: false };

  constructor(private audio: GameAudio, private store: RiffStore, private clock: () => number = () => performance.now()) {
    const input = store.data.input;
    this.state = {
      phase: 'idle', input, ...this.position(input), index: 0, playing: null, hint: false, fullBoard: store.data.fullBoard,
      heard: null, lastStable: null, check: 'waiting', feedback: null, error: '', pausedReason: null, micLabel: '',
      completedLevels: store.completedLevels(input),
    };
  }

  /** Vastaustavan tallennettu kohta: opastus, tason seuraava riffi tai läpäisty taso. */
  private position(input: AnswerInput) {
    const level = this.store.level(input);
    if (!this.store.data.tutorialDone) return { riff: TUTORIAL, tutorial: true, level: LEVELS[0], riffNumber: 1, marks: pending(TUTORIAL) };
    const riff = this.store.currentRiff(input) ?? level.riffs[level.riffs.length - 1];
    return { riff, tutorial: false, level, riffNumber: level.riffs.indexOf(riff) + 1, marks: pending(riff) };
  }

  // ---- tilaus (React: useSyncExternalStore) ----
  subscribe = (listener: () => void) => { this.listeners.add(listener); return () => { this.listeners.delete(listener); }; };
  getState = () => this.state;
  /** Aloitusnäkymän yhteenveto vastaustavoittain. */
  progress = (input: AnswerInput) => ({ level: this.store.run(input).level, completed: this.store.completedLevels(input) });
  private set(patch: Partial<GameState>) { this.state = { ...this.state, ...patch }; this.listeners.forEach(l => l()); }
  private selectInput(input: AnswerInput) {
    this.store.setInput(input);
    this.set({ input, error: '', completedLevels: this.store.completedLevels(input), ...(input === 'board' ? { heard: null, lastStable: null } : {}) });
  }

  // ---- aloitus ----
  /** ”Oikea kitara”: lupa pyydetään vasta tästä painalluksesta. */
  startMic() {
    this.selectInput('mic');
    this.openMicThen(() => this.micChecked ? this.beginRound() : this.enterMicCheck());
  }
  /** Virtuaalikitara: oma pelitapa, ei tarvitse mikrofonilupaa eikä oikeaa soitinta. */
  startBoard() {
    this.closeMic();
    this.selectInput('board');
    this.beginRound();
  }
  /** Vastaustavan vaihto: kummallakin tavalla on oma tasoeteneminen, joten jatketaan sen kohdasta. */
  switchInput(input: AnswerInput) {
    if (input === this.state.input && this.state.phase !== 'error') return;
    if (input === 'board') this.startBoard(); else this.startMic();
  }
  /** Koko kuusikielinen otelauta näkyviin jo ennen tasoa 4 (tai takaisin tason kieliin). */
  setFullBoard(on: boolean) { this.store.setFullBoard(on); this.set({ fullBoard: on }); }

  private async openMicThen(next: () => void) {
    const op = ++this.op;
    this.cancelTimers();
    this.audio.stopModel();
    this.closeMic();
    this.set({ phase: 'permission', feedback: null, error: '', playing: null });
    const session = ++this.micSession;
    const handlers: MicHandlers = {
      onFrame: frame => { if (session === this.micSession) this.onFrame(frame); },
      onStable: event => { if (session === this.micSession) this.onStable(event); },
      onEnded: () => { if (session === this.micSession) this.micLost(); },
    };
    try {
      const info = await this.audio.openMic(handlers);
      if (op !== this.op || session !== this.micSession) return;
      if (!info) return;
      this.micOpen = true;
      this.set({ micLabel: info.label });
      next();
    } catch (error) {
      if (op !== this.op) return;
      this.micOpen = false;
      this.set({ phase: 'error', error: micError(error) });
    }
  }

  private enterMicCheck() {
    this.audio.resumeAnalysis();
    this.set({ phase: 'mic-check', check: 'waiting', lastStable: null, feedback: { tone: 'info', text: `Soita vapaa B-kieli (${noteName(CHECK_MIDI)}) ja anna sen soida hetki.` } });
  }
  /** Mikrofonitestin jälkeen: opastus tai tason seuraava riffi. */
  continueAfterCheck() {
    if (this.state.phase !== 'mic-check' || this.state.check === 'waiting') return;
    this.micChecked = true;
    this.beginRound();
  }

  // ---- kierros ----
  /** Uusi riffiyritys: tallennetun etenemisen seuraava riffi tai annettu riffi (uusi yritys). */
  private beginRound(riff?: Riff, withModel = true) {
    // Mikrofoni suljettiin esimerkiksi taustavälilehdellä onnistumisen jälkeen: avaa ennen mallia.
    if (this.state.input === 'mic' && !this.micOpen) { this.openMicThen(() => this.beginRound(riff, withModel)); return; }
    const pos = this.position(this.state.input);
    if (!pos.tutorial && !riff && this.store.currentRiff(this.state.input) === null) { this.showLevelComplete(); return; }
    const chosen = riff ?? pos.riff;
    this.newChecker(chosen);
    this.replays = 0;
    this.roundStart = null;
    this.set({ ...pos, riff: chosen, riffNumber: pos.tutorial ? 1 : pos.level.riffs.indexOf(chosen) + 1, marks: pending(chosen),
      index: 0, hint: false, feedback: null, lastStable: null });
    if (withModel) void this.playModel(true);
    else {
      if (this.micOpen) this.audio.resumeAnalysis();
      this.startListening();
    }
  }
  private newChecker(riff: Riff) { this.checker = new SequenceChecker(riff.midi, ++this.round, this.state.input); this.carried = { wrong: 0, octave: 0, hint: false }; }
  /**
   * Sama riffi alusta kesken yrityksen (uusinta, aloita alusta, jatko tauolta): uusi kierrostunniste
   * hylkää vanhat vastaukset ja pallukat alkavat alusta, mutta väärät sävelet ja vihje kertyvät tulokseen.
   */
  private renewChecker() {
    const old = this.checker, carried = this.carried;
    this.checker = new SequenceChecker(this.state.riff.midi, ++this.round, this.state.input);
    this.carried = { wrong: carried.wrong + (old?.wrongCount ?? 0), octave: carried.octave + (old?.octaveCount ?? 0), hint: carried.hint || !!old?.hintUsed };
    if (this.carried.hint) this.checker.useHint();
    this.set({ index: 0, marks: this.checker.marks, lastStable: null });
  }

  private async playModel(listenAfter: boolean) {
    const op = ++this.op;
    this.cancelTimers();
    if (this.micOpen) this.audio.pauseAnalysis();
    const phase = listenAfter ? 'model-playing' : this.state.phase;
    this.set({ phase, playing: null });
    let done: boolean;
    try {
      done = await this.audio.playModel(this.state.riff.midi, index => { if (op === this.op) this.set({ playing: index }); });
    } catch (error) {
      if (op !== this.op) return;
      this.set({ feedback: { tone: 'bad', text: referenceAudioError(error) + ' Voit silti soittaa riffin sävelvihjeen avulla.' } });
      done = true;
    }
    if (op !== this.op || !done) return;
    this.set({ playing: null });
    if (listenAfter) this.afterModel(op);
  }

  private afterModel(op: number) {
    if (this.state.input === 'mic' && this.micOpen) {
      this.audio.resumeAnalysis();
      this.settler.start(this.clock());
      this.set({ phase: 'output-settling' });
      // Kehykset ratkaisevat yleensä vaiheen; ajastin vain varmistaa, ettei peli jää odottamaan.
      this.settleTimer = setTimeout(() => { if (op === this.op && this.state.phase === 'output-settling') this.startListening(); }, this.settler.maxMs + 200);
    } else this.startListening();
  }

  private startListening() {
    this.cancelTimers();
    if (this.micOpen) this.audio.rearm();
    this.roundStart ??= this.clock();
    this.set({ phase: 'listening' });
  }

  private cancelTimers() { clearTimeout(this.settleTimer); this.settleTimer = undefined; this.settler.cancel(); }

  // ---- mikrofonin tapahtumat ----
  private onFrame(frame: AnalysisFrame) {
    const heard: Heard = { status: frame.status, midi: frame.status === 'pitch' || frame.status === 'off-pitch' ? frame.midi : undefined };
    const prev = this.state.heard;
    if (!prev || prev.status !== heard.status || prev.midi !== heard.midi) this.set({ heard });
    if (this.state.phase === 'output-settling') {
      const result = this.settler.feed(frame.status === 'silent', this.clock());
      if (result !== 'settling') this.startListening();
    }
  }

  private onStable(event: StableNoteEvent) {
    const phase = this.state.phase;
    if (phase === 'mic-check') {
      const ok = event.midi === CHECK_MIDI;
      this.set({ lastStable: event.midi, check: ok ? 'ok' : 'other', feedback: ok
        ? { tone: 'good', text: `Kuulin ${noteName(event.midi)}. Mikrofoni toimii.` }
        : { tone: 'info', text: `Kuulin ${noteName(event.midi)}. Mikrofoni toimii, mutta testisävel on ${noteName(CHECK_MIDI)}: vapaa B-kieli, toiseksi ohuin kieli. Tarkista tarvittaessa viritys.` } });
      return;
    }
    // Mallisoiton, suojavaiheen ja riffin jälkeen havainto ei vastaa tehtävään.
    if (phase !== 'listening' || this.state.input !== 'mic') return;
    this.set({ lastStable: event.midi });
    this.answer(event.midi, 'mic');
  }

  /**
   * Virtuaalikitaran painallus. Jokainen painallus soi ja on täsmälleen yksi syötetapahtuma, joten
   * sama sävel kahdesti (A–A) on kaksi painallusta. Vastaukseksi lasketaan vain vastausvuorossa;
   * riffin jälkeen otelaudalla voi soitella vapaasti. Mallisoiton aikana otelauta on lukittu.
   * Palauttaa true, jos painallus soi.
   */
  tap(midi: number): boolean {
    const phase = this.state.phase;
    if (this.state.input !== 'board' || !FREE_PLAY.includes(phase)) return false;
    this.audio.pluck(midi);
    if (phase === 'listening') this.answer(midi, 'board');
    return true;
  }

  private answer(midi: number, input: AnswerInput) {
    const checker = this.checker;
    if (!checker) return;
    const event = checker.feed({ midi, round: this.round, input });
    const total = checker.expected.length;
    const verb = input === 'mic' ? 'Kuulin' : 'Soitit';
    if (event.type === 'accepted') {
      this.set({ index: event.index + 1, marks: checker.marks, feedback: { tone: 'good', text: event.mark === 'yellow'
        ? `${noteName(midi)} oikein (${event.index + 1}/${total}). Kohta korjattiin, joten se on keltainen.`
        : `${noteName(midi)} oikein (${event.index + 1}/${total}).` } });
      if (event.complete) this.finish(checker);
    } else if (event.type === 'wrong') {
      this.set({ marks: checker.marks, feedback: { tone: 'bad', text: `${verb} ${noteName(event.played)}; kokeile ${event.index + 1}. sävelen kohtaa uudelleen.` } });
    } else if (event.type === 'octave') {
      this.set({ feedback: { tone: 'info', text: `${verb} ${noteName(event.played)}: oikea sävelnimi, mutta eri oktaavi. ${event.index + 1}. sävel on ${noteName(event.expected)}.` } });
    }
  }

  /** Riffi soitettu loppuun: virheetön → success / level-complete, keltaisia → retry. Kirjataan kerran. */
  private finish(checker: SequenceChecker) {
    if (this.micOpen) this.audio.pauseAnalysis();
    const riff = this.state.riff, passed = checker.flawless;
    const { levelComplete } = this.store.record({ riff: riff.id, input: checker.input, hint: checker.hintUsed, passed,
      wrong: this.carried.wrong + checker.wrongCount, octave: this.carried.octave + checker.octaveCount,
      replays: this.replays, ms: Math.max(0, Math.round(this.clock() - (this.roundStart ?? this.clock()))), at: Date.now() });
    this.checker = null;
    this.set({ completedLevels: this.store.completedLevels(checker.input) });
    if (riff.id === TUTORIAL.id) {
      this.set({ phase: 'success', feedback: { tone: 'good', text: passed
        ? 'Hienoa! Opastus on tehty. Seuraavaksi taso 1: kolme riffiä B-kielellä.'
        : 'Opastus on tehty. Tasoilla riffi hyväksytään, kun kaikki pallukat ovat vihreitä.' } });
    } else if (!passed) {
      const yellow = checker.marks.flatMap((m, i) => m === 'yellow' ? [i + 1] : []);
      this.set({ phase: 'retry', feedback: { tone: 'info', text: `Soitit riffin loppuun. ${yellow.length === 1 ? `Kohta ${yellow[0]} meni` : `Kohdat ${yellow.join(' ja ')} menivät`} ensin väärin. Riffi hyväksytään, kun kaikki pallukat ovat vihreitä – yritä uudelleen.` } });
    } else if (levelComplete) this.showLevelComplete();
    else this.set({ phase: 'success', feedback: { tone: 'good', text: checker.hintUsed ? 'Virheetön, sävelvihjeen kanssa.' : 'Virheetön, omin korvin!' } });
  }

  private showLevelComplete() {
    if (this.micOpen) this.audio.pauseAnalysis();
    const level = this.store.level(this.state.input);
    this.set({ phase: 'level-complete', level, completedLevels: this.store.completedLevels(this.state.input), feedback: null, hint: false });
  }

  // ---- sivutoiminnot ----
  /** Kuuntele malli uudelleen. Vastausvuorossa yritys alkaa alusta, koska riffi kuullaan alusta. */
  replay() {
    const phase = this.state.phase;
    if (phase === 'success' || phase === 'retry') { void this.playModel(false); return; }
    if (!['listening', 'output-settling', 'model-playing'].includes(phase)) return;
    this.replays++;
    this.renewChecker();
    this.set({ feedback: null });
    void this.playModel(true);
  }
  /** Aloita alusta kesken yrityksen: sama riffi ilman mallia. */
  restart() {
    if (!['listening', 'output-settling'].includes(this.state.phase)) return;
    this.renewChecker();
    this.set({ feedback: { tone: 'info', text: 'Aloita riffi alusta.' } });
    this.startListening();
  }
  /** Keltaisten kohtien jälkeen: sama riffi uutena yrityksenä, mallin kanssa tai ilman. */
  retry(withModel = true) { if (this.state.phase === 'retry') this.beginRound(this.state.riff, withModel); }
  toggleHint() {
    const hint = !this.state.hint;
    if (hint) this.checker?.useHint();
    this.set({ hint });
  }
  /** Virheettömän riffin jälkeen tason seuraava riffi. */
  next() { if (this.state.phase === 'success') this.beginRound(); }
  /** Onnittelunäkymästä: seuraava taso. Ei koskaan automaattisesti. */
  continueLevel() {
    if (this.state.phase !== 'level-complete') return;
    const next = this.state.level.number + 1;
    if (!LEVELS.some(l => l.number === next)) return;
    this.store.startLevel(this.state.input, next);
    this.beginRound();
  }
  /** Onnittelunäkymästä: sama taso alusta (tai mikä tahansa tason numero, esim. viimeisen tason jälkeen taso 1). */
  repeatLevel(level = this.state.level.number) {
    if (this.state.phase !== 'level-complete') return;
    this.store.startLevel(this.state.input, level);
    this.beginRound();
  }

  /** Tauko: soitto pysähtyy ja mikrofoni vapautetaan. Jatko vaatii painalluksen. */
  pause(reason: PauseReason) {
    if (!ACTIVE.includes(this.state.phase)) return;
    this.pausedFrom = this.state.phase;
    ++this.op;
    this.cancelTimers();
    this.audio.stopModel();
    this.closeMic();
    this.set({ phase: 'paused', pausedReason: reason, playing: null, heard: null });
  }
  resume() {
    if (this.state.phase !== 'paused') return;
    const from = this.pausedFrom ?? 'listening';
    this.pausedFrom = null;
    this.set({ pausedReason: null });
    // Riffin jälkeiset näkymät eivät tarvitse mikrofonia; se avataan seuraavan riffin alussa.
    if (['success', 'retry', 'level-complete'].includes(from)) { this.set({ phase: from }); return; }
    const go = () => {
      if (from === 'mic-check') this.enterMicCheck();
      else if (from === 'model-playing') { this.renewChecker(); void this.playModel(true); }
      else this.startListening();
    };
    if (this.state.input === 'mic') this.openMicThen(go); else go();
  }
  private micLost() {
    const phase = this.state.phase;
    this.closeMic();
    if (ACTIVE.includes(phase)) {
      this.pausedFrom = phase;
      ++this.op;
      this.cancelTimers();
      this.audio.stopModel();
      this.set({ phase: 'paused', pausedReason: 'mic-lost', playing: null, heard: null });
    }
  }

  /** Lopeta: kaikki pysähtyy, aloitusnäkymä. Edistyminen on jo tallennettu. */
  stop() {
    ++this.op;
    this.cancelTimers();
    this.audio.stopModel();
    this.closeMic();
    this.checker = null;
    this.pausedFrom = null;
    this.set({ phase: 'idle', playing: null, heard: null, feedback: null, error: '', pausedReason: null, index: 0, hint: false, ...this.position(this.state.input) });
  }

  private closeMic() {
    this.micSession++;
    if (this.micOpen) this.audio.closeMic();
    this.micOpen = false;
  }
}
