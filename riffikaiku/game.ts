/**
 * Riffikaiku-peli – virtuaalikitara. Pelin tilakone ilman Reactia ja suoraa selainääntä: ääni tulee
 * GameAudio-sovittimen kautta, joten koko kulku (myös vanhat asynkroniset kutsut) testataan Vitestillä.
 * Oikean kitaran harjoitus on erillinen (practice.ts + mic.ts); yhteistä on riffidata, säveltoisto ja
 * säveljonon tarkistaja (sequence.ts).
 *
 * Päätila: home (kotitreenit ja eteneminen) → ready (pelaaja aloittaa kuuntelun) → model-playing →
 *   listening → success (riffi virheettömästi; pelaaja valitsee jatkon) |
 *   retry (loppuun, mutta keltaisia; pallukat jäävät näkyviin, kunnes pelaaja valitsee Yritä uudelleen)
 *   → seuraava riffi → level-complete (kotitreenin 3/3).
 * Kuuntelu (listen) ei koskaan aloita uutta yritystä eikä nollaa pallukoita, ja mallia saa kuunnella rajattomasti.
 *
 * Vapaa kokeilu (ready, success, retry): otelauta soi, mutta mitään ei arvioida eikä tulos tai pallukat
 * muutu. Arvioitava yritys alkaa vain kuuntelusta (ready) tai painikkeesta (Yritä uudelleen / Soita uudelleen).
 * Ei aikarajaa, elämiä eikä rytmin pisteytystä. Seuraavaan riffiin ja kotitreeniin siirrytään vain pelaajan valinnasta.
 *
 * Suojaukset: op-laskuri ohittaa myöhässä palaavan mallisoiton; round-tunniste hylkää edellisen yrityksen vastaukset.
 */
import { referenceAudioError } from '../harjoittelija/audio';
import type { GameAudio } from './audioAdapter';
import { LEVELS, TUTORIAL, noteName, type Level, type Riff } from './riffs';
import { SequencePractice, type SequenceChecker, type SlotMark } from './sequence';
import type { RecordOutcome, RiffStore } from './store';

export { noteName } from './riffs';
export type Phase = 'home' | 'ready' | 'model-playing' | 'listening' | 'success' | 'retry' | 'level-complete';
export type Feedback = { tone: 'info' | 'good' | 'bad'; text: string };
/** Painalluksen tulos otelaudan välähdystä varten: oikein, väärin tai vapaa kokeilu. */
export type TapResult = 'right' | 'wrong' | 'free';
/** Riffin saavutukset virtuaalikitaralla: läpäisty (kaikki vihreinä) ja tähti (läpäisty ilman vihjettä). */
export type RiffRecord = { passed: boolean; star: boolean; best: number | null; done: number };
/** Viimeksi loppuun soitetun yrityksen saavutukset onnittelua varten. */
export type Achievement = Omit<RecordOutcome, 'levelComplete'> & { flawless: boolean; wrong: number };

export type GameState = {
  phase: Phase;
  riff: Riff;
  tutorial: boolean;
  /** Nykyinen kotitreeni ja riffin järjestysnumero siinä (1–3). Opastuksessa kotitreeni 1. */
  level: Level;
  riffNumber: number;
  /** Ratkaistujen paikkojen määrä tällä yrityksellä. */
  index: number;
  /** Etenemispallukat: pending (harmaa) / red / green / yellow. */
  marks: SlotMark[];
  /** Muistivihjeet paikoittain (MIDI tai null). Käytössä kolmannen epäonnistuneen yrityksen jälkeen. */
  memory: (number | null)[];
  failedAttempts: number;
  /** Mallisoitossa soiva sävel (korostus), muuten null. */
  playing: number | null;
  modelPlaying: boolean;
  /** Manuaalinen sävelvihje (erillinen muistivihjeistä). */
  hint: boolean;
  feedback: Feedback | null;
  achievement: Achievement | null;
  completedLevels: number[];
  unlockedLevels: number[];
  /** Nykyisen kotitreenikierroksen läpäistyt riffit. */
  passedInRun: string[];
};

/** Vaiheet, joissa otelauta soi. */
const FREE_PLAY: Phase[] = ['ready', 'listening', 'success', 'retry'];
const pending = (riff: Riff): SlotMark[] => riff.midi.map(() => 'pending');
const INPUT = 'board' as const;

export class RiffGame {
  private state: GameState;
  private listeners = new Set<() => void>();
  private op = 0;
  private round = 0;
  private practice: SequencePractice | null = null;
  private practiceRiff: string | null = null;
  private roundStart: number | null = null;
  private replays = 0;

  constructor(private audio: Pick<GameAudio, 'playModel' | 'stopModel' | 'pluck'>, private store: RiffStore, private clock: () => number = () => performance.now()) {
    this.state = {
      phase: 'home', ...this.position(), index: 0, memory: [], failedAttempts: 0, playing: null, modelPlaying: false, hint: false,
      feedback: null, achievement: null, ...this.progressPatch(),
    };
  }

  /** Tallennettu kohta: opastus, kotitreenin seuraava riffi tai läpäisty kotitreeni. */
  private position() {
    const level = this.store.level(INPUT);
    if (!this.store.data.tutorialDone) return { riff: TUTORIAL, tutorial: true, level: LEVELS[0], riffNumber: 1, marks: pending(TUTORIAL) };
    const riff = this.store.currentRiff(INPUT) ?? level.riffs[level.riffs.length - 1];
    return { riff, tutorial: false, level, riffNumber: level.riffs.indexOf(riff) + 1, marks: pending(riff) };
  }
  private progressPatch() {
    return { completedLevels: this.store.completedLevels(INPUT), unlockedLevels: this.store.unlockedLevels(INPUT), passedInRun: [...this.store.run(INPUT).passed] };
  }

  // ---- tilaus (React: useSyncExternalStore) ----
  subscribe = (listener: () => void) => { this.listeners.add(listener); return () => { this.listeners.delete(listener); }; };
  getState = () => this.state;
  private set(patch: Partial<GameState>) { this.state = { ...this.state, ...patch }; this.listeners.forEach(l => l()); }

  /** Yhden riffin saavutukset virtuaalikitaralla. */
  record(riffId: string): RiffRecord { return riffRecord(this.store, riffId); }

  // ---- aloitus ja kotitreenit ----
  /** Pelaa: opastus, kesken oleva kotitreeni tai sen onnittelunäkymä. */
  play() { this.beginRound(); }
  /** Pelin aloitusnäkymä: kotitreenit ja eteneminen. Kaikki pysähtyy; edistyminen on jo tallennettu. */
  home() {
    ++this.op;
    this.audio.stopModel();
    this.practice = null;
    this.set({ phase: 'home', playing: null, modelPlaying: false, feedback: null, achievement: null, index: 0, hint: false,
      memory: [], failedAttempts: 0, ...this.position(), ...this.progressPatch() });
  }
  /**
   * Valitse kotitreeni: läpäisty, nykyinen tai seuraava avattu. Nykyinen jatkuu siitä, mihin jäätiin;
   * muu kotitreeni (tai restart) alkaa ensimmäisestä riffistä. Läpäistyt kotitreenit säilyvät aina.
   */
  chooseLevel(level: number, restart = false) {
    if (!['home', 'level-complete'].includes(this.state.phase) || !this.store.unlockedLevels(INPUT).includes(level)) return;
    if (restart || level !== this.store.run(INPUT).level) this.store.startLevel(INPUT, level);
    this.store.finishTutorial();
    this.beginRound();
  }

  // ---- kierros ----
  /**
   * Uusi riffi (tai uusi yritys samalla riffillä: riff annettu).
   * start: 'ready' = pelaaja aloittaa kuuntelun itse (uusi riffi), 'listen' = suoraan vuoroon ilman mallia.
   */
  private beginRound(riff?: Riff, start: 'ready' | 'listen' = 'ready') {
    // Mahdollinen soiva malli päättyy ennen uutta yritystä (ei päällekkäisiä soittoja).
    ++this.op;
    this.audio.stopModel();
    this.set({ modelPlaying: false, playing: null });
    const pos = this.position();
    if (!pos.tutorial && !riff && this.store.currentRiff(INPUT) === null) { this.showLevelComplete(); return; }
    const chosen = pos.tutorial ? TUTORIAL : riff ?? pos.riff;
    // Sama riffi jatkaa samaa yrityssarjaa (epäonnistuneet yritykset, muistivihjeet); uusi riffi aloittaa alusta.
    const sameSeries = !!this.practice && this.practiceRiff === chosen.id;
    if (!sameSeries) { this.practice = new SequencePractice(chosen.midi, INPUT); this.practiceRiff = chosen.id; }
    this.replays = 0;
    this.roundStart = null;
    this.set({ ...pos, riff: chosen, riffNumber: pos.tutorial ? 1 : pos.level.riffs.indexOf(chosen) + 1, hint: sameSeries ? this.state.hint : false,
      feedback: null, achievement: null, ...this.progressPatch() });
    this.startAttempt();
    if (start === 'listen') this.startListening();
    else this.set({ phase: 'ready' });
  }
  /** Uusi yritys samassa sarjassa: kierrostunniste vaihtuu, pallukat harmaiksi, muistivihjeet näkyviin. */
  private startAttempt(): SequenceChecker {
    const attempt = this.practice!.start(++this.round);
    if (this.state.hint) attempt.useHint();
    this.set({ index: 0, marks: attempt.marks, memory: this.practice!.memory, failedAttempts: this.practice!.failedAttempts });
    return attempt;
  }
  private get checker() { return this.practice?.attempt ?? null; }

  private async playModel(listenAfter: boolean) {
    const op = ++this.op;
    const phase = listenAfter ? 'model-playing' : this.state.phase;
    this.set({ phase, playing: null, modelPlaying: true });
    let done: boolean;
    try {
      done = await this.audio.playModel(this.state.riff.midi, index => { if (op === this.op) this.set({ playing: index }); });
    } catch (error) {
      if (op !== this.op) return;
      this.set({ feedback: { tone: 'bad', text: referenceAudioError(error) + ' Voit silti soittaa riffin sävelvihjeen avulla.' } });
      done = true;
    }
    if (op !== this.op || !done) return;
    this.set({ playing: null, modelPlaying: false });
    if (listenAfter) this.startListening();
  }

  private startListening() {
    this.roundStart ??= this.clock();
    this.set({ phase: 'listening' });
  }

  /**
   * Virtuaalikitaran painallus. Jokainen painallus soi ja on täsmälleen yksi syötetapahtuma, joten
   * sama sävel kahdesti (A–A) on kaksi painallusta. Vastaukseksi lasketaan vain vastausvuorossa;
   * muulloin otelaudalla voi soitella vapaasti. Mallisoiton aikana otelauta on lukittu.
   */
  tap(midi: number): TapResult | null {
    const phase = this.state.phase;
    if (!FREE_PLAY.includes(phase) || this.state.modelPlaying) return null;
    this.audio.pluck(midi);
    return phase === 'listening' ? this.answer(midi) : 'free';
  }

  private answer(midi: number): TapResult {
    const checker = this.checker;
    if (!checker) return 'free';
    const event = checker.feed({ midi, round: this.round, input: INPUT });
    const total = checker.expected.length;
    if (event.type === 'accepted') {
      this.set({ index: event.index + 1, marks: checker.marks, feedback: { tone: 'good', text: event.mark === 'yellow'
        ? `${noteName(midi)} löytyi (${event.index + 1}/${total}). Kohta korjattiin, joten pallukka on keltainen.`
        : `${noteName(midi)} oikein (${event.index + 1}/${total}).` } });
      if (event.complete) this.finish(checker);
      return 'right';
    }
    if (event.type === 'wrong') {
      // Oikeaa säveltä ei paljasteta.
      this.set({ marks: checker.marks, feedback: { tone: 'bad', text: 'Väärä sävel. Kokeile uudelleen.' } });
      return 'wrong';
    }
    return 'free';
  }

  /**
   * Riffi soitettu loppuun. Kirjataan kerran.
   * - Virheetön → success: pelaaja valitsee itse Soita uudelleen tai Seuraava riffi.
   * - Keltaisia → retry: vihreät ja keltaiset jäävät näkyviin. Ei automaattista mallia eikä uutta
   *   yritystä; pelaaja voi kuunnella ja kokeilla vapaasti ja valitsee itse Yritä uudelleen.
   */
  private finish(checker: SequenceChecker) {
    const riff = this.state.riff;
    const passed = this.practice!.finish();
    const failed = this.practice!.failedAttempts;
    const outcome = this.store.record({ riff: riff.id, input: INPUT, hint: checker.hintUsed, passed,
      wrong: checker.wrongCount, octave: checker.octaveCount,
      replays: this.replays, ms: Math.max(0, Math.round(this.clock() - (this.roundStart ?? this.clock()))), at: Date.now() });
    this.set({ ...this.progressPatch(), failedAttempts: failed });
    if (riff.id === TUTORIAL.id) {
      this.practice = null;
      this.set({ phase: 'success', feedback: { tone: 'good', text: passed
        ? `Hienoa! Opastus on tehty. Seuraavaksi ${LEVELS[0].name}: kolme riffiä ${LEVELS[0].title.toLowerCase().replace('kieli', 'kielellä')}.`
        : 'Opastus on tehty. Riffi hyväksytään, kun kaikki pallukat ovat vihreitä.' } });
      return;
    }
    const achievement: Achievement = { flawless: passed, wrong: checker.wrongCount, firstPass: outcome.firstPass, firstStar: outcome.firstStar, newBest: outcome.newBest };
    if (!passed) {
      this.set({ phase: 'retry', achievement, feedback: { tone: 'info', text: 'Soitit riffin loppuun! Kokeile vielä ilman virheitä. Voit kuunnella ja kokeilla säveliä vapaasti – niitä ei arvioida ennen kuin valitset Yritä uudelleen.' +
        (outcome.newBest ? ` Uusi ennätys: ${wrongText(checker.wrongCount)}.` : '') +
        (this.practice!.memoryActive ? ' Muistivihjeet ovat käytössä: aiemmin heti oikein soitetut sävelet näkyvät seuraavassa yrityksessä.' : '') } });
      return;
    }
    this.practice = null;
    const record = this.record(riff.id);
    this.set({ phase: 'success', achievement, feedback: { tone: 'good', text: checker.hintUsed
      ? `Virheetön, vihjeen kanssa! Riffi läpäisty.${record.star ? '' : ' Soita uudelleen ilman vihjettä, niin saat tähden.'}`
      : `Virheetön! Kaikki pallukat vihreinä – riffi läpäisty.${outcome.firstStar ? ' Sait tähden.' : ''}` } });
  }

  private showLevelComplete() {
    const level = this.store.level(INPUT);
    this.set({ phase: 'level-complete', level, ...this.progressPatch(), feedback: null, hint: false, achievement: null });
  }

  // ---- sivutoiminnot ----
  /**
   * Kuuntele riffi / Pysäytä kuuntelu (sama painike).
   * - Kesken yrityksen malli soi, eikä mitään nollata: sama paikka, samat pallukat, muistivihjeet ja laskurit.
   * - ready: ensimmäinen kuuntelu, sitten vuoro.
   * - success / retry: pelkkä kuuntelu, vaihe ja pallukat eivät muutu.
   */
  listen() {
    if (this.state.modelPlaying) { this.stopListening(); return; }
    const phase = this.state.phase;
    if (phase === 'success' || phase === 'retry') { void this.playModel(false); return; }
    if (!['ready', 'listening'].includes(phase)) return;
    if (phase !== 'ready') this.replays++;
    void this.playModel(true);
  }
  /** Pysäytä kuuntelu: malli katkeaa, eteneminen säilyy; ensimmäisen kuuntelun jälkeen vuoro alkaa. */
  stopListening() {
    if (!this.state.modelPlaying) return;
    ++this.op;
    this.audio.stopModel();
    this.set({ modelPlaying: false, playing: null });
    if (this.state.phase === 'model-playing') this.startListening();
  }
  /** Välilehti taustalle: malli pysähtyy, mutta yritys ja pallukat säilyvät. */
  hidden() { this.stopListening(); }
  /** Yritä uudelleen (keltaisten jälkeen): uusi arvioitava yritys ensimmäisestä sävelestä. Muistivihjeet säilyvät. */
  retry() { if (this.state.phase === 'retry') this.beginRound(this.state.riff, 'listen'); }
  /** Soita uudelleen (virheettömän jälkeen): sama riffi uutena yrityksenä. Läpäisy säilyy. */
  playAgain() { if (this.state.phase === 'success' && !this.state.tutorial) this.beginRound(this.state.riff, 'listen'); }
  toggleHint() {
    const hint = !this.state.hint;
    if (hint) this.checker?.useHint();
    this.set({ hint });
  }
  /** Seuraava riffi; kotitreenin kolmannen jälkeen onnittelunäkymä. */
  next() { if (this.state.phase === 'success') this.beginRound(); }
  /** Onnittelunäkymästä: seuraava kotitreeni. Ei koskaan automaattisesti. */
  continueLevel() {
    if (this.state.phase !== 'level-complete') return;
    const next = this.state.level.number + 1;
    if (!LEVELS.some(l => l.number === next)) return;
    this.store.startLevel(INPUT, next);
    this.beginRound();
  }
  /** Onnittelunäkymästä: sama kotitreeni alusta. */
  repeatLevel(level = this.state.level.number) {
    if (this.state.phase !== 'level-complete') return;
    this.store.startLevel(INPUT, level);
    this.beginRound();
  }
  /** Sivulta poistuttaessa: kaikki ääni pysähtyy. */
  dispose() { ++this.op; this.audio.stopModel(); }
}

/** Riffin saavutukset virtuaalikitaralla tallennuksesta (myös aloitussivulle ilman peliä). */
export function riffRecord(store: RiffStore, riffId: string): RiffRecord {
  const s = store.data.stats.board[riffId];
  return { passed: (s?.passed ?? 0) > 0, star: (s?.solo ?? 0) > 0, best: s?.best ?? null, done: s?.done ?? 0 };
}
/** Pelin yhteenveto: todelliset läpäisyt ja tähdet virtuaalikitaralla. */
export function gameSummary(store: RiffStore) {
  const records = LEVELS.flatMap(l => l.riffs).map(r => riffRecord(store, r.id));
  return { level: store.run(INPUT).level, completed: store.completedLevels(INPUT), passed: records.filter(r => r.passed).length,
    stars: records.filter(r => r.star).length, total: records.length, started: store.data.tutorialDone || records.some(r => r.done > 0) };
}

const wrongText = (n: number) => n === 1 ? 'vain yksi väärä sävel' : `vain ${n} väärää säveltä`;
