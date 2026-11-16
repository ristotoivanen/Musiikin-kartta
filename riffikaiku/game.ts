/**
 * Riffikaiku-peli – virtuaalikitara. Pelin tilakone ilman Reactia ja suoraa selainääntä: ääni tulee
 * GameAudio-sovittimen kautta, joten koko kulku (myös vanhat asynkroniset kutsut) testataan Vitestillä.
 * Oikean kitaran harjoitus on erillinen (practice.ts + mic.ts); yhteistä on riffidata, säveltoisto ja
 * säveljonon tarkistaja (sequence.ts).
 *
 * Riffin kulku (0.5): Kuuntele → Harjoittele vapaasti → Nyt riffataan! → Palaute → Jatka.
 *
 *   home → practice (malli soi heti, kun riffi avataan pelaajan painalluksesta) ⇄ take (arvioitava otto)
 *        → success (kaikki vihreinä) | retry (loppuun keltaisilla) → practice / take / seuraava riffi
 *        → level-complete (kotitreenin 3/3).
 *
 * - **practice**: mallia voi kuunnella ja pysäyttää rajattomasti, otelauta soi myös mallin aikana, ja
 *   sävelet ja ehdotetut paikat voi näyttää. Mitään ei arvioida eikä kirjata.
 * - **take**: alkaa vain startTake()-kutsusta (”Nyt riffataan!”). Malli pysähtyy, vastaukset piiloon,
 *   uusi yritys ja kierrostunniste. Ensimmäinen oton alun jälkeinen painallus on ensimmäinen tarkistettava
 *   sävel. Mallia ei voi kuunnella kesken oton; ”Harjoittele vielä” (practiceMore) palaa harjoitteluun
 *   kirjaamatta keskeneräistä ottoa.
 * - **success / retry**: tulos jää näkyviin; mallia voi kuunnella ja otelautaa soittaa vapaasti.
 *
 * Harjoittelun apu (sävelet, paikat, malli) ei vaikuta tähtiin. Otossa pyydetty Vihje vaikuttaa
 * (hint-kirjaus), muistivihjeet eivät. Opastustaso tulee kotitreenin datasta (riffs.ts: GUIDANCE).
 * Ei aikarajaa, elämiä eikä rytmin pisteytystä. Seuraavaan siirrytään vain pelaajan valinnasta.
 *
 * Suojaukset: modelOp ohittaa myöhässä palaavan tai keskeytetyn mallisoiton; round-tunniste hylkää
 * edellisen yrityksen vastaukset. Automaattinen mallisoitto käynnistetään vain pelaajan painalluksen
 * käsittelijästä (ei Reactin efektistä), joten StrictMode tai uudelleenrenderöinti ei toista sitä.
 */
import { referenceAudioError } from '../harjoittelija/audio';
import type { GameAudio } from './audioAdapter';
import { GUIDANCE, LEVELS, TUTORIAL, TUTORIAL_GUIDANCE, noteName, type Guidance, type Level, type Riff } from './riffs';
import { SequencePractice, type SequenceChecker, type SlotMark } from './sequence';
import type { RecordOutcome, RiffStore } from './store';

export { noteName } from './riffs';
export type Phase = 'home' | 'practice' | 'take' | 'success' | 'retry' | 'level-complete';
export type Feedback = { tone: 'info' | 'good' | 'bad'; text: string };
/** Painalluksen tulos otelaudan välähdystä varten: oikein, väärin tai vapaa kokeilu. */
export type TapResult = 'right' | 'wrong' | 'free';
/** Riffin saavutukset virtuaalikitaralla: läpäisty (kaikki vihreinä) ja tähti (läpäisty ilman vihjettä). */
export type RiffRecord = { passed: boolean; star: boolean; best: number | null; done: number };
/** Viimeksi loppuun soitetun oton saavutukset onnittelua varten. */
export type Achievement = Omit<RecordOutcome, 'levelComplete'> & { flawless: boolean; wrong: number };

export type GameState = {
  phase: Phase;
  riff: Riff;
  tutorial: boolean;
  /** Nykyinen kotitreeni ja riffin järjestysnumero siinä (1–3). Opastuksessa kotitreeni 1. */
  level: Level;
  riffNumber: number;
  guidance: Guidance;
  /** Ratkaistujen paikkojen määrä tällä otolla. */
  index: number;
  /** Etenemispallukat: pending (harmaa) / red / green / yellow. */
  marks: SlotMark[];
  /** Muistivihjeet paikoittain (MIDI tai null). Kolmannen epäonnistuneen oton jälkeen, jos opastustaso sallii. */
  memory: (number | null)[];
  failedAttempts: number;
  /** Mallisoitossa soiva sävel (korostus), muuten null. */
  playing: number | null;
  modelPlaying: boolean;
  /** Harjoittelun apu: sävelet ja ehdotetut paikat näkyvissä. Ei vaikuta tähtiin. */
  notesShown: boolean;
  /** Otossa pyydetty Vihje: kirjataan tulokseen, estää tähden. */
  hint: boolean;
  feedback: Feedback | null;
  /** Mallisoitto ei käynnistynyt (esim. selain esti automaattisen toiston). */
  audioError: string;
  achievement: Achievement | null;
  completedLevels: number[];
  unlockedLevels: number[];
  /** Nykyisen kotitreenikierroksen läpäistyt riffit. */
  passedInRun: string[];
};

/** Vaiheet, joissa otelauta soi vapaasti (ei arvioida). */
const FREE_PLAY: Phase[] = ['practice', 'success', 'retry'];
const pending = (riff: Riff): SlotMark[] => riff.midi.map(() => 'pending');
/** Opastuksella on aina oma taso (guided); kotitreenin riffit käyttävät kotitreenin tasoa. */
const guidanceOf = (pos: { tutorial: boolean; level: Level }): Guidance => pos.tutorial ? TUTORIAL_GUIDANCE : pos.level.guidance;
const INPUT = 'board' as const;

export class RiffGame {
  private state: GameState;
  private listeners = new Set<() => void>();
  private modelOp = 0;
  private round = 0;
  private series: SequencePractice | null = null;
  private seriesRiff: string | null = null;
  private takeStart: number | null = null;
  /** Mallin kuuntelut pelaajan pyynnöstä edellisen oton jälkeen (kirjataan seuraavan oton tulokseen). */
  private listens = 0;
  private takeListens = 0;

  constructor(private audio: Pick<GameAudio, 'playModel' | 'stopModel' | 'stopReference' | 'pluck'>, private store: RiffStore, private clock: () => number = () => performance.now()) {
    const pos = this.position();
    this.state = {
      phase: 'home', ...pos, guidance: guidanceOf(pos), index: 0, memory: [], failedAttempts: 0, playing: null, modelPlaying: false,
      notesShown: false, hint: false, feedback: null, audioError: '', achievement: null, ...this.progressPatch(),
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
  /** Pelaa: opastus, kesken oleva kotitreeni tai sen onnittelunäkymä. Malli soi heti. */
  play() { this.beginRiff(); }
  /** Pelin aloitusnäkymä: kotitreenit ja eteneminen. Kaikki pysähtyy; edistyminen on jo tallennettu. */
  home() {
    this.silence();
    this.series = null;
    const pos = this.position();
    this.set({ phase: 'home', ...pos, guidance: guidanceOf(pos), feedback: null, audioError: '', achievement: null, index: 0, hint: false,
      notesShown: false, memory: [], failedAttempts: 0, ...this.progressPatch() });
  }
  /**
   * Valitse kotitreeni: läpäisty, nykyinen tai seuraava avattu. Nykyinen jatkuu siitä, mihin jäätiin;
   * muu kotitreeni (tai restart) alkaa ensimmäisestä riffistä. Läpäistyt kotitreenit säilyvät aina.
   */
  chooseLevel(level: number, restart = false) {
    if (!['home', 'level-complete'].includes(this.state.phase) || !this.store.unlockedLevels(INPUT).includes(level)) return;
    if (restart || level !== this.store.run(INPUT).level) this.store.startLevel(INPUT, level);
    this.store.finishTutorial();
    this.beginRiff();
  }

  // ---- riffi: harjoittelu ----
  /** Kaikki ääni pois (riffin vaihto, valikko, sivulta poistuminen). Myöhässä palaava malli ohitetaan. */
  private silence() {
    ++this.modelOp;
    this.audio.stopModel();
    if (this.state.modelPlaying || this.state.playing !== null) this.set({ modelPlaying: false, playing: null });
  }

  /** Avaa tallennetun kohdan riffin harjoitteluun ja soittaa mallin heti (opastustason mukaan). */
  private beginRiff() {
    this.silence();
    const pos = this.position();
    if (!pos.tutorial && this.store.currentRiff(INPUT) === null) { this.showLevelComplete(); return; }
    const riff = pos.tutorial ? TUTORIAL : pos.riff;
    if (this.seriesRiff !== riff.id || !this.series) this.newSeries(riff);
    this.listens = 0;
    const guidance = guidanceOf(pos);
    this.set({ ...pos, riff, guidance, riffNumber: pos.tutorial ? 1 : pos.level.riffs.indexOf(riff) + 1, index: 0, marks: pending(riff),
      memory: this.memory(guidance, riff), failedAttempts: this.series!.failedAttempts, hint: false, notesShown: GUIDANCE[guidance].showNotes,
      feedback: null, audioError: '', achievement: null, ...this.progressPatch() });
    this.enterPractice(GUIDANCE[guidance].autoplay);
  }
  private newSeries(riff: Riff) { this.series = new SequencePractice(riff.midi, INPUT); this.seriesRiff = riff.id; }
  /** Muistivihjeet vain, jos opastustaso sallii automaattiset muistivihjeet. */
  private memory(guidance = this.state.guidance, riff = this.state.riff): (number | null)[] {
    return GUIDANCE[guidance].memoryHints && this.series ? this.series.memory : riff.midi.map(() => null);
  }

  private enterPractice(autoplay: boolean) {
    this.set({ phase: 'practice', hint: false });
    if (autoplay) void this.playModel(true);
  }

  /**
   * Harjoittele vielä / Harjoittele lisää: takaisin vapaaseen harjoitteluun.
   * Kesken olevaa ottoa ei kirjata (ei tulosta, ei epäonnistunutta yritystä). Tuloksen jälkeen malli
   * soi heti uudelleen; kesken oton palatessa ei, koska pelaaja haluaa yleensä kokeilla säveliä.
   */
  practiceMore() {
    const phase = this.state.phase;
    if (!['take', 'success', 'retry'].includes(phase)) return;
    this.set({ index: 0, marks: pending(this.state.riff), feedback: null, achievement: null, notesShown: GUIDANCE[this.state.guidance].showNotes });
    this.enterPractice(phase !== 'take');
  }

  /** Näytä / piilota harjoittelun sävelet ja otelautapaikat. Ei vaikuta tähtiin. */
  toggleNotes() { if (this.state.phase === 'practice') this.set({ notesShown: !this.state.notesShown }); }

  // ---- mallisoitto ----
  /**
   * Kuuntele riffi / Pysäytä (sama painike) harjoittelussa ja tuloksen jälkeen. Ei koskaan aloita ottoa.
   * Kesken arvioitavan oton mallia ei soiteta: otto soitetaan muistista.
   */
  listen() {
    if (this.state.modelPlaying) { this.stopListening(); return; }
    if (!FREE_PLAY.includes(this.state.phase)) return;
    void this.playModel(false);
  }
  stopListening() {
    if (!this.state.modelPlaying) return;
    ++this.modelOp;
    this.audio.stopReference();
    this.set({ modelPlaying: false, playing: null });
  }

  private async playModel(auto: boolean) {
    const op = ++this.modelOp;
    if (!auto && this.state.phase === 'practice') this.listens++;
    this.audio.stopReference();
    this.set({ modelPlaying: true, playing: null, audioError: '' });
    let done: boolean;
    try {
      done = await this.audio.playModel(this.state.riff.midi, index => { if (op === this.modelOp) this.set({ playing: index }); });
    } catch (error) {
      if (op !== this.modelOp) return;
      this.set({ modelPlaying: false, playing: null, audioError: referenceAudioError(error) +
        (auto ? ' Selain ei ehkä salli automaattista toistoa: paina Kuuntele riffi.' : '') + ' Voit harjoitella myös sävelvihjeiden avulla.' });
      return;
    }
    if (op !== this.modelOp || !done) return;
    this.set({ playing: null, modelPlaying: false });
  }

  // ---- arvioitava otto ----
  /**
   * Nyt riffataan! Pysäyttää mallin, piilottaa vastaukset, aloittaa uuden arvioitavan oton ensimmäisestä
   * sävelestä. Malli ei soi; pelaaja aloittaa itse. Harjoittelun painallukset eivät koskaan kuulu ottoon.
   */
  startTake() {
    if (!FREE_PLAY.includes(this.state.phase)) return;
    if (this.state.modelPlaying) { ++this.modelOp; this.audio.stopReference(); }
    if (!this.series) this.newSeries(this.state.riff);
    const attempt = this.series!.start(++this.round);
    this.takeListens = this.listens; this.listens = 0;
    this.takeStart = this.clock();
    this.set({ phase: 'take', modelPlaying: false, playing: null, notesShown: false, hint: false, feedback: null, achievement: null, audioError: '',
      index: 0, marks: attempt.marks, memory: this.memory(), failedAttempts: this.series!.failedAttempts });
  }
  /** Yritä uudelleen tuloksen jälkeen: uusi otto heti, ilman mallia. */
  retry() { if (this.state.phase === 'retry' || (this.state.phase === 'success' && !this.state.tutorial)) this.startTake(); }
  private get checker() { return this.series?.attempt ?? null; }

  /**
   * Virtuaalikitaran painallus. Jokainen painallus soi ja on täsmälleen yksi syötetapahtuma, joten
   * sama sävel kahdesti (A–A) on kaksi painallusta. Vain arvioitavassa otossa painallus tarkistetaan;
   * harjoittelussa ja tuloksen jälkeen se soi (myös mallin aikana) eikä muuta mitään.
   */
  tap(midi: number): TapResult | null {
    const phase = this.state.phase;
    if (phase !== 'take' && !FREE_PLAY.includes(phase)) return null;
    this.audio.pluck(midi);
    return phase === 'take' ? this.answer(midi) : 'free';
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

  /** Otto soitettu loppuun. Kirjataan kerran. */
  private finish(checker: SequenceChecker) {
    const riff = this.state.riff;
    const passed = this.series!.finish();
    const failed = this.series!.failedAttempts;
    const outcome = this.store.record({ riff: riff.id, input: INPUT, hint: checker.hintUsed, passed,
      wrong: checker.wrongCount, octave: checker.octaveCount,
      replays: this.takeListens, ms: Math.max(0, Math.round(this.clock() - (this.takeStart ?? this.clock()))), at: Date.now() });
    this.set({ ...this.progressPatch(), failedAttempts: failed });
    if (riff.id === TUTORIAL.id) {
      if (passed) this.series = null;
      this.set({ phase: passed ? 'success' : 'retry', feedback: { tone: passed ? 'good' : 'info', text: passed
        ? `Hienoa! Opastus on tehty. Seuraavaksi ${LEVELS[0].name}: kolme riffiä ${LEVELS[0].title.toLowerCase().replace('kieli', 'kielellä')}.`
        : 'Soitit opastuksen loppuun. Riffi hyväksytään, kun kaikki pallukat ovat vihreitä – yritä uudelleen tai harjoittele lisää.' } });
      return;
    }
    const achievement: Achievement = { flawless: passed, wrong: checker.wrongCount, firstPass: outcome.firstPass, firstStar: outcome.firstStar, newBest: outcome.newBest };
    if (!passed) {
      const memory = GUIDANCE[this.state.guidance].memoryHints && this.series!.memoryActive;
      this.set({ phase: 'retry', achievement, feedback: { tone: 'info', text: 'Soitit riffin loppuun! Kokeile vielä ilman virheitä – suoraan uudella otolla tai harjoittelemalla ensin lisää.' +
        (outcome.newBest ? ` Uusi ennätys: ${wrongText(checker.wrongCount)}.` : '') +
        (memory ? ' Muistivihjeet ovat käytössä: aiemmin heti oikein soitetut sävelet näkyvät seuraavassa otossa.' : '') } });
      return;
    }
    // Läpäisty: seuraava otto samalla riffillä aloittaa uuden sarjan (muistivihjeet nollautuvat).
    this.newSeries(riff);
    const record = this.record(riff.id);
    this.set({ phase: 'success', achievement, feedback: { tone: 'good', text: checker.hintUsed
      ? `Virheetön, vihjeen kanssa! Riffi läpäisty.${record.star ? '' : ' Soita uudelleen ilman otossa pyydettyä vihjettä, niin saat tähden.'}`
      : `Virheetön! Kaikki pallukat vihreinä – riffi läpäisty.${outcome.firstStar ? ' Sait tähden.' : ''}` } });
  }

  private showLevelComplete() {
    const level = this.store.level(INPUT);
    this.set({ phase: 'level-complete', level, guidance: level.guidance, ...this.progressPatch(), feedback: null, hint: false, achievement: null, audioError: '' });
  }

  // ---- sivutoiminnot ----
  /** Arvioitavan oton Vihje: sävelet ja paikat näkyviin. Kirjataan tulokseen (ei tähteä). */
  toggleHint() {
    if (this.state.phase !== 'take') return;
    const hint = !this.state.hint;
    if (hint) this.checker?.useHint();
    this.set({ hint });
  }
  /** Välilehti taustalle: malli pysähtyy; harjoittelu tai otto säilyy. */
  hidden() { this.stopListening(); }
  /** Seuraava riffi (läpäisyn jälkeen); kotitreenin kolmannen jälkeen onnittelunäkymä. */
  next() { if (this.state.phase === 'success') this.beginRiff(); }
  /** Onnittelunäkymästä: seuraava kotitreeni. Ei koskaan automaattisesti. */
  continueLevel() {
    if (this.state.phase !== 'level-complete') return;
    const next = this.state.level.number + 1;
    if (!LEVELS.some(l => l.number === next)) return;
    this.store.startLevel(INPUT, next);
    this.beginRiff();
  }
  /** Onnittelunäkymästä: sama kotitreeni alusta. */
  repeatLevel(level = this.state.level.number) {
    if (this.state.phase !== 'level-complete') return;
    this.store.startLevel(INPUT, level);
    this.beginRiff();
  }
  /** Sivulta poistuttaessa: kaikki ääni pysähtyy, myöhässä palaavat tapahtumat ohitetaan. */
  dispose() { this.silence(); }
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
