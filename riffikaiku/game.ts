/**
 * Riffikaiun pelin tilakone. Ei Reactia eikä suoraa selainääntä: ääni tulee GameAudio-sovittimen
 * kautta, joten koko kulku (myös vanhat asynkroniset kutsut) testataan Vitestillä.
 *
 * Päätila: idle → permission → mic-check → ready (pelaaja aloittaa kuuntelun) → model-playing →
 *   output-settling → listening → success (riffi virheettömästi; pelaaja valitsee jatkon) |
 *   retry (loppuun, mutta keltaisia; pallukat jäävät näkyviin, kunnes pelaaja valitsee Yritä uudelleen)
 *   → seuraava riffi → level-complete (kotitreenin 3/3).
 * Kuuntelu (listen) ei koskaan aloita uutta yritystä eikä nollaa pallukoita, ja mallia saa kuunnella rajattomasti.
 *
 * Vapaa kokeilu (ready, success, retry): virtuaalikitara soi ja mikrofoni kuulee (”Mikrofoni kuulee: X”),
 * mutta mitään ei arvioida eikä tulos tai pallukat muutu. Arvioitava yritys alkaa vain kuuntelusta
 * (ready) tai painikkeesta (Yritä uudelleen / Soita uudelleen); mikrofonilla näppäilytunnistin nollataan
 * yrityksen alussa, joten kokeilusta soimaan jäänyt kieli ei vastaa.
 * Sivupolut: tools (viritin ja diagnostiikka, ei pelivastauksia), levels (tasovalikko),
 * paused (oma tauko, taustavälilehti, mikrofonin katkeaminen) ja error (lupa tai laite).
 * Virtuaalikitaralla permission, mic-check ja output-settling jäävät pois.
 *
 * Mikrofonin näppäilyt reititetään vain kahteen paikkaan: mikrofonitestiin (mic-check) ja
 * kuuntelevaan riffiyritykseen (listening). Kaikissa muissa vaiheissa – myös virittimessä ja
 * diagnostiikassa – ne kirjataan diagnostiikkaan, mutta eivät muuta pelitilaa.
 *
 * Suojaukset:
 * - op: jokainen käyttäjän vaihe kasvattaa laskuria; myöhässä palaava mallisoitto tai lupavastaus ohitetaan.
 * - micSession: suljetun mikrofonin myöhässä tulevat kehykset ja näppäilyt ohitetaan.
 * - round: SequenceChecker hylkää edellisen yrityksen vastaukset.
 * - Mallisoiton ajan analyysi on tauolla; sen jälkeen OutputSettler + näppäilytunnistimen nollaus.
 */
import { micError, noiseThreshold, referenceAudioError, type MicInfo } from '../harjoittelija/audio';
import { note } from '../harjoittelija/music';
import type { AnalysisFrame, FrameStatus } from '../harjoittelija/vendor/pitchDetector';
import { DETECTION, type GameAudio, type InputDevice, type MicHandlers } from './audioAdapter';
import type { PluckEvent, PluckState } from './pluck';
import { CHECK_MIDI, LEVELS, TUTORIAL, type Level, type Riff } from './riffs';
import { OutputSettler, SequencePractice, type AnswerInput, type SequenceChecker, type SlotMark } from './sequence';
import type { RiffStore } from './store';
import { Tuner, type TunerReading } from './tuner';

export type Phase = 'idle' | 'permission' | 'mic-check' | 'tools' | 'levels' | 'ready' | 'model-playing' | 'output-settling' | 'listening'
  | 'success' | 'retry' | 'level-complete' | 'paused' | 'error';
export type Tool = 'tuner' | 'diagnostics';
export type PauseReason = 'manual' | 'background' | 'mic-lost';
export type Heard = { status: FrameStatus; midi?: number };
export type Feedback = { tone: 'info' | 'good' | 'bad'; text: string };
/** Mihin viimeisin näppäily välitettiin. */
export type Route = 'game' | 'mic-check' | 'not-routed';
export type Diagnostics = {
  frame: AnalysisFrame;
  pluck: PluckState;
  minRms: number;
  routed: { count: number; last: { midi: number; at: number; route: Route; phase: Phase } | null };
};
export type NoiseMeasurement = { noise: number; threshold: number; loud: boolean };

export type GameState = {
  phase: Phase;
  input: AnswerInput;
  riff: Riff;
  tutorial: boolean;
  /** Nykyinen taso ja riffin järjestysnumero tasolla (1–3). Opastuksessa taso 1. */
  level: Level;
  riffNumber: number;
  /** Ratkaistujen paikkojen määrä tällä yrityksellä. */
  index: number;
  /** Etenemispallukat: pending (harmaa) / red / green / yellow. */
  marks: SlotMark[];
  /** Muistivihjeet paikoittain (MIDI tai null). Käytössä kolmannen epäonnistuneen yrityksen jälkeen. */
  memory: (number | null)[];
  /** Saman riffin loppuun soitetut epäonnistuneet yritykset tällä käyttökerralla. */
  failedAttempts: number;
  /** Mallisoitossa soiva sävel (korostus), muuten null. */
  playing: number | null;
  /** Soiko malliriffi juuri nyt (Kuuntele riffi / Pysäytä kuuntelu). */
  modelPlaying: boolean;
  /** Manuaalinen sävelvihje (erillinen muistivihjeistä). */
  hint: boolean;
  heard: Heard | null;
  lastStable: number | null;
  check: 'waiting' | 'ok' | 'other';
  feedback: Feedback | null;
  error: string;
  pausedReason: PauseReason | null;
  completedLevels: number[];
  unlockedLevels: number[];
  // ---- mikrofoni ----
  /** Valittu äänitulo ('' = järjestelmän oletus) ja selaimen ilmoittamat laitteet. */
  device: string;
  devices: InputDevice[];
  /** Todella käytössä oleva laite (selaimen ilmoittama). */
  micInfo: MicInfo | null;
  minRms: number;
  noise: NoiseMeasurement | null;
  calibrating: boolean;
  tool: Tool;
  tuner: TunerReading | null;
  /** Virittimen valittu kieli (MIDI) tai null = automaattinen. */
  tunerTarget: number | null;
  diag: Diagnostics | null;
  /** Diagnostiikkapaneeli auki pelin aikana (vain luku). */
  diagOpen: boolean;
};

/** Vaiheet, joissa mikrofoni voi olla auki ja joista tauko on mahdollinen. */
const ACTIVE: Phase[] = ['mic-check', 'tools', 'ready', 'model-playing', 'output-settling', 'listening', 'success', 'retry', 'level-complete'];
const FREE_PLAY: Phase[] = ['ready', 'listening', 'success', 'retry', 'level-complete'];
/** Vapaan kokeilun vaiheet: soitto ja kuuntelu sallittu, mitään ei arvioida. */
const FREE_TRY: Phase[] = ['ready', 'success', 'retry'];
/** Taustakohinan mittausaika mikrofonitestin alussa. */
export const CALIBRATION_MS = 1000;
/** Diagnostiikan ja virittimen näyttöpäivitysten väli. */
const VIEW_UPDATE_MS = 80;
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
  private practice: SequencePractice | null = null;
  private practiceRiff: string | null = null;
  private settler = new OutputSettler();
  private settleTimer: ReturnType<typeof setTimeout> | undefined;
  private roundStart: number | null = null;
  private replays = 0;
  private pausedFrom: Phase | null = null;
  /** Mikrofonitestin tai työkalujen jälkeen jatkettava riffi (laitteen vaihto kesken riffin). */
  private afterCheck: Riff | null = null;
  private toolsReturn: 'idle' | 'mic-check' = 'idle';
  private calibration: { start: number; samples: number[] } | null = null;
  private tunerEngine = new Tuner();
  private lastView = -Infinity;
  private routed: Diagnostics['routed'] = { count: 0, last: null };

  constructor(private audio: GameAudio, private store: RiffStore, private clock: () => number = () => performance.now()) {
    const input = store.data.input;
    this.state = {
      phase: 'idle', input, ...this.position(input), index: 0, memory: [], failedAttempts: 0, playing: null, modelPlaying: false, hint: false,
      heard: null, lastStable: null, check: 'waiting', feedback: null, error: '', pausedReason: null,
      completedLevels: store.completedLevels(input), unlockedLevels: store.unlockedLevels(input),
      device: store.data.device, devices: [], micInfo: null, minRms: DETECTION.minRms, noise: null, calibrating: false,
      tool: 'tuner', tuner: null, tunerTarget: null, diag: null, diagOpen: false,
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
    this.set({ input, error: '', completedLevels: this.store.completedLevels(input), unlockedLevels: this.store.unlockedLevels(input),
      ...(input === 'board' ? { heard: null, lastStable: null } : {}) });
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

  private async openMicThen(next: () => void) {
    const op = ++this.op;
    this.cancelTimers();
    this.audio.stopModel();
    this.closeMic();
    this.set({ phase: 'permission', feedback: null, error: '', playing: null, heard: null });
    const session = ++this.micSession;
    const handlers: MicHandlers = {
      onFrame: (frame, pluck) => { if (session === this.micSession) this.onFrame(frame, pluck); },
      onStable: event => { if (session === this.micSession) this.onStable(event); },
      onEnded: () => { if (session === this.micSession) this.micLost(); },
    };
    try {
      const info = await this.audio.openMic(handlers, this.state.device);
      if (op !== this.op || session !== this.micSession) return;
      if (!info) return;
      this.micOpen = true;
      this.set({ micInfo: info });
      void this.refreshDevices();
      next();
    } catch (error) {
      if (op !== this.op) return;
      this.micOpen = false;
      this.set({ phase: 'error', error: micError(error), micInfo: null });
    }
  }

  /** Päivittää laitelistan (nimet näkyvät vasta luvan jälkeen). Kutsutaan myös devicechange-tapahtumasta. */
  async refreshDevices() {
    try { this.set({ devices: await this.audio.listDevices() }); } catch { /* lista ei ole pelin edellytys */ }
  }

  /**
   * Äänitulon vaihto sovelluksesta. Vanha virta suljetaan ja uusi avataan valitulla laitteella;
   * rinnakkaisia virtoja ei jää. Kesken riffin palataan mikrofonitestiin (uusi laite mitataan),
   * ja sama riffi jatkuu testin jälkeen alusta.
   */
  setDevice(device: string) {
    this.store.setDevice(device);
    this.set({ device });
    if (this.state.input !== 'mic' || !['permission', 'error', ...ACTIVE, 'paused'].includes(this.state.phase)) return;
    const phase = this.state.phase;
    if (phase === 'tools') { this.openMicThen(() => this.enterTools(this.state.tool, true)); return; }
    if (!['mic-check', 'permission', 'error'].includes(phase) && !this.state.tutorial) this.afterCheck = this.state.riff;
    this.micChecked = false;
    this.openMicThen(() => this.enterMicCheck());
  }

  private enterMicCheck() {
    this.audio.resumeAnalysis();
    this.startCalibration();
    this.set({ phase: 'mic-check', check: 'waiting', lastStable: null });
  }

  /** Taustakohinan mittaus: äänikynnys mitatun kohinan mukaan (sama menetelmä kuin Kitaraharjoittelijassa). */
  calibrate() { if (this.micOpen && ['mic-check', 'tools'].includes(this.state.phase)) this.startCalibration(); }
  private startCalibration() {
    this.calibration = { start: this.clock(), samples: [] };
    this.set({ calibrating: true, feedback: { tone: 'info', text: 'Pidä kielet hiljaa hetki: mitataan taustakohinaa…' } });
  }
  private finishCalibration(samples: number[]) {
    this.calibration = null;
    const measured = noiseThreshold(samples);
    // Äänekäs ympäristö tai soittaminen mittauksen aikana: pidä oletuskynnys ja kerro siitä.
    const minRms = measured.loud ? DETECTION.minRms : measured.threshold;
    this.audio.setMinRms(minRms);
    this.audio.rearm();
    const inCheck = this.state.phase === 'mic-check';
    this.set({ calibrating: false, minRms, noise: measured, feedback: measured.loud
      ? { tone: 'bad', text: 'Taustalla kuului ääntä mittauksen aikana. Käytössä on oletuskynnys. Vaimenna kielet ja mittaa uudelleen.' }
      : inCheck ? { tone: 'info', text: `Soita vapaa B-kieli (${noteName(CHECK_MIDI)}) ja anna sen soida hetki.` } : null });
  }

  /** Mikrofonitestin jälkeen: opastus tai tason seuraava riffi (tai laitteen vaihdossa kesken jäänyt riffi). */
  continueAfterCheck() {
    if (this.state.phase !== 'mic-check' || this.state.check === 'waiting') return;
    this.micChecked = true;
    const riff = this.afterCheck ?? undefined;
    this.afterCheck = null;
    this.beginRound(riff);
  }

  // ---- työkalut: viritin ja diagnostiikka ----
  /** Avaa työkalun. Aloitusnäkymästä mikrofoni avataan ensin. Työkalut eivät koskaan anna pelivastauksia. */
  openTools(tool: Tool) {
    const phase = this.state.phase;
    if (phase === 'tools') { this.set({ tool }); return; }
    if (phase === 'mic-check' && this.micOpen) { this.toolsReturn = 'mic-check'; this.enterTools(tool); return; }
    if (phase !== 'idle') return;
    this.toolsReturn = 'idle';
    this.selectInput('mic');
    this.openMicThen(() => this.enterTools(tool, true));
  }
  private enterTools(tool: Tool, fresh = false) {
    this.audio.resumeAnalysis();
    this.tunerEngine.reset();
    this.tunerEngine.setTarget(this.state.tunerTarget);
    if (fresh) this.startCalibration();
    this.set({ phase: 'tools', tool, tuner: null });
  }
  setTool(tool: Tool) { if (this.state.phase === 'tools') this.set({ tool }); }
  setTunerTarget(midi: number | null) { this.tunerEngine.setTarget(midi); this.set({ tunerTarget: midi }); }
  /** Takaisin: mikrofonitestiin tai aloitusnäkymään (mikrofoni suljetaan). */
  closeTools() {
    if (this.state.phase !== 'tools') return;
    if (this.toolsReturn === 'mic-check') {
      this.audio.rearm();
      this.set({ phase: 'mic-check', feedback: this.state.check === 'waiting' ? { tone: 'info', text: `Soita vapaa B-kieli (${noteName(CHECK_MIDI)}) ja anna sen soida hetki.` } : this.state.feedback });
    } else this.stop();
  }
  /** Virittimestä suoraan harjoitukseen: virittimen lukema osoittaa mikrofonin toimivan. */
  startFromTools() {
    if (this.state.phase !== 'tools') return;
    this.micChecked = true;
    this.calibration = null;
    this.set({ calibrating: false });
    const riff = this.afterCheck ?? undefined;
    this.afterCheck = null;
    this.beginRound(riff);
  }
  /** Diagnostiikkapaneeli pelin aikana (vain luku, ei vaikuta peliin). */
  setDiagnosticsOpen(open: boolean) { this.set({ diagOpen: open, ...(open ? {} : { diag: null }) }); }

  // ---- tasovalikko ----
  openLevels() {
    if (!['idle', 'level-complete', 'success', 'retry', 'ready', 'listening', 'output-settling', 'model-playing', 'paused'].includes(this.state.phase)) return;
    ++this.op;
    this.cancelTimers();
    this.audio.stopModel();
    if (this.micOpen) this.audio.pauseAnalysis();
    this.set({ modelPlaying: false, playing: null, phase: 'levels', unlockedLevels: this.store.unlockedLevels(this.state.input), completedLevels: this.store.completedLevels(this.state.input), feedback: null, hint: false });
  }
  /**
   * Valitse taso: läpäisty, nykyinen tai seuraava avattu. Nykyinen taso jatkuu siitä, mihin jäätiin;
   * muu taso (tai restart) alkaa ensimmäisestä riffistä. Läpäistyt tasot säilyvät aina.
   */
  chooseLevel(level: number, restart = false) {
    if (this.state.phase !== 'levels' || !this.store.unlockedLevels(this.state.input).includes(level)) return;
    if (restart || level !== this.store.run(this.state.input).level) this.store.startLevel(this.state.input, level);
    this.store.finishTutorial();
    this.beginRound();
  }

  // ---- kierros ----
  /**
   * Uusi riffi (tai uusi yritys samalla riffillä: riff annettu).
   * start: 'ready' = pelaaja aloittaa kuuntelun itse (uusi riffi), 'model' = malli soi heti
   * (Soita uudelleen, automaattinen uusinta), 'listen' = suoraan vuoroon ilman mallia.
   */
  private beginRound(riff?: Riff, start: 'ready' | 'model' | 'listen' = 'ready') {
    // Mikrofoni suljettiin esimerkiksi taustavälilehdellä: avaa ennen mallia.
    if (this.state.input === 'mic' && !this.micOpen) { this.openMicThen(() => this.beginRound(riff, start)); return; }
    // Mahdollinen soiva malli tai odottava uusinta päättyy ennen uutta yritystä (ei päällekkäisiä soittoja).
    ++this.op;
    this.cancelTimers();
    this.audio.stopModel();
    this.set({ modelPlaying: false, playing: null });
    const pos = this.position(this.state.input);
    if (!pos.tutorial && !riff && this.store.currentRiff(this.state.input) === null) { this.showLevelComplete(); return; }
    const chosen = pos.tutorial ? TUTORIAL : riff ?? pos.riff;
    // Sama riffi jatkaa samaa yrityssarjaa (epäonnistuneet yritykset, muistivihjeet); uusi riffi aloittaa alusta.
    const sameSeries = !!this.practice && this.practiceRiff === chosen.id && this.practice.input === this.state.input;
    if (!sameSeries) { this.practice = new SequencePractice(chosen.midi, this.state.input); this.practiceRiff = chosen.id; }
    this.replays = 0;
    this.roundStart = null;
    this.set({ ...pos, riff: chosen, riffNumber: pos.tutorial ? 1 : pos.level.riffs.indexOf(chosen) + 1, hint: sameSeries ? this.state.hint : false,
      feedback: null, lastStable: null, unlockedLevels: this.store.unlockedLevels(this.state.input),
      tuner: null, diag: this.state.diagOpen ? this.state.diag : null });
    this.startAttempt();
    if (start === 'model') void this.playModel(true);
    else if (start === 'listen') {
      if (this.micOpen) this.audio.resumeAnalysis();
      this.startListening();
    } else this.enterFreeTry('ready');
  }
  /** Uusi yritys samassa sarjassa: kierrostunniste vaihtuu, pallukat harmaiksi, muistivihjeet näkyviin. */
  private startAttempt(): SequenceChecker {
    const attempt = this.practice!.start(++this.round);
    if (this.state.hint) attempt.useHint();
    this.set({ index: 0, marks: attempt.marks, memory: this.practice!.memory, failedAttempts: this.practice!.failedAttempts, lastStable: null });
    return attempt;
  }
  private get checker() { return this.practice?.attempt ?? null; }

  private async playModel(listenAfter: boolean) {
    const op = ++this.op;
    this.cancelTimers();
    if (this.micOpen) this.audio.pauseAnalysis();
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
    if (listenAfter) this.afterModel(op);
    else this.enterFreeTry(this.state.phase);
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

  /**
   * Vapaa kokeilu: mikrofonin analyysi käy (pelaaja näkee, mitä soittaa), mutta näppäilyt eivät mene
   * tarkistajalle (onStable reitittää vain listening-vaiheessa). Virtuaalikitara soi (FREE_PLAY).
   */
  private enterFreeTry(phase: Phase) {
    if (this.micOpen) this.audio.resumeAnalysis();
    this.set({ phase });
  }

  // ---- mikrofonin tapahtumat ----
  private onFrame(frame: AnalysisFrame, pluck: PluckState) {
    const now = this.clock();
    const heard: Heard = { status: frame.status, midi: frame.status === 'pitch' || frame.status === 'off-pitch' ? frame.midi : undefined };
    const prev = this.state.heard;
    if (!prev || prev.status !== heard.status || prev.midi !== heard.midi) this.set({ heard });
    const phase = this.state.phase;
    if (this.calibration && (phase === 'mic-check' || phase === 'tools')) {
      this.calibration.samples.push(frame.rms);
      if (now - this.calibration.start >= CALIBRATION_MS) this.finishCalibration(this.calibration.samples);
    }
    if (phase === 'output-settling') {
      const result = this.settler.feed(frame.status === 'silent', now);
      if (result !== 'settling') this.startListening();
    }
    const reading = phase === 'tools' ? this.tunerEngine.feed(frame, now) : null;
    const showDiag = this.state.diagOpen || phase === 'tools' || phase === 'mic-check';
    if ((reading || showDiag) && now - this.lastView >= VIEW_UPDATE_MS) {
      this.lastView = now;
      this.set({ ...(reading ? { tuner: reading } : {}), ...(showDiag ? { diag: { frame, pluck, minRms: this.state.minRms, routed: this.routed } } : {}) });
    }
  }

  private route(event: PluckEvent, route: Route) {
    this.routed = { count: this.routed.count + 1, last: { midi: event.midi, at: event.timestamp, route, phase: this.state.phase } };
    if (this.state.diag) this.set({ diag: { ...this.state.diag, routed: this.routed } });
  }

  private onStable(event: PluckEvent) {
    const phase = this.state.phase;
    if (phase === 'mic-check' && !this.state.calibrating) {
      this.route(event, 'mic-check');
      const ok = event.midi === CHECK_MIDI;
      this.set({ lastStable: event.midi, check: ok ? 'ok' : 'other', feedback: ok
        ? { tone: 'good', text: `Kuulin ${noteName(event.midi)}. Mikrofoni toimii.` }
        : { tone: 'info', text: `Kuulin ${noteName(event.midi)}. Mikrofoni toimii, mutta testisävel on ${noteName(CHECK_MIDI)}: vapaa B-kieli, toiseksi ohuin kieli. Tarkista tarvittaessa viritys.` } });
      return;
    }
    // Mallisoiton, suojavaiheen, työkalujen ja riffin jälkeiset näppäilyt eivät vastaa tehtävään.
    if (phase !== 'listening' || this.state.input !== 'mic') { this.route(event, 'not-routed'); return; }
    this.route(event, 'game');
    this.set({ lastStable: event.midi });
    this.answer(event.midi, 'mic');
  }

  /**
   * Virtuaalikitaran painallus. Jokainen painallus soi ja on täsmälleen yksi syötetapahtuma, joten
   * sama sävel kahdesti (A–A) on kaksi painallusta. Vastaukseksi lasketaan vain vastausvuorossa;
   * riffin jälkeen otelaudalla voi soitella vapaasti. Mallisoiton aikana otelauta on lukittu.
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
    if (event.type === 'accepted') {
      this.set({ index: event.index + 1, marks: checker.marks, feedback: { tone: 'good', text: event.mark === 'yellow'
        ? `${noteName(midi)} löytyi (${event.index + 1}/${total}). Kohta korjattiin, joten pallukka on keltainen.`
        : `${noteName(midi)} oikein (${event.index + 1}/${total}).` } });
      if (event.complete) this.finish(checker);
    } else if (event.type === 'wrong') {
      // Oikeaa säveltä ei paljasteta. Mikrofonilla kerrotaan, mitä kuultiin (auttaa havaitsemaan väärän tunnistuksen).
      this.set({ marks: checker.marks, feedback: { tone: 'bad', text: input === 'mic'
        ? `Väärä sävel (kuulin ${noteName(event.played)}). Kokeile uudelleen.` : 'Väärä sävel. Kokeile uudelleen.' } });
    }
  }

  /**
   * Riffi soitettu loppuun. Kirjataan kerran.
   * - Virheetön → success: pelaaja valitsee itse Soita uudelleen tai Seuraava riffi.
   * - Keltaisia → retry: vihreät ja keltaiset jäävät näkyviin. Ei automaattista mallia eikä uutta
   *   yritystä; pelaaja voi kuunnella ja kokeilla vapaasti ja valitsee itse Yritä uudelleen.
   * Molemmissa vapaa kokeilu: mikrofoni kuulee, mutta mitään ei arvioida.
   */
  private finish(checker: SequenceChecker) {
    const riff = this.state.riff;
    const passed = this.practice!.finish();
    const failed = this.practice!.failedAttempts;
    this.store.record({ riff: riff.id, input: checker.input, hint: checker.hintUsed, passed,
      wrong: checker.wrongCount, octave: checker.octaveCount,
      replays: this.replays, ms: Math.max(0, Math.round(this.clock() - (this.roundStart ?? this.clock()))), at: Date.now() });
    this.set({ completedLevels: this.store.completedLevels(checker.input), unlockedLevels: this.store.unlockedLevels(checker.input), failedAttempts: failed });
    if (riff.id === TUTORIAL.id) {
      this.practice = null;
      this.set({ feedback: { tone: 'good', text: passed
        ? `Hienoa! Opastus on tehty. Seuraavaksi ${LEVELS[0].name}: kolme riffiä ${LEVELS[0].title.toLowerCase().replace('kieli', 'kielellä')}.`
        : 'Opastus on tehty. Riffi hyväksytään, kun kaikki pallukat ovat vihreitä.' } });
      this.enterFreeTry('success');
    } else if (!passed) {
      this.set({ feedback: { tone: 'info', text: 'Soitit riffin loppuun! Kokeile vielä ilman virheitä. Voit kuunnella ja kokeilla säveliä vapaasti – niitä ei arvioida ennen kuin valitset Yritä uudelleen.' +
        (this.practice!.memoryActive ? ' Muistivihjeet ovat käytössä: aiemmin heti oikein soitetut sävelet näkyvät seuraavassa yrityksessä.' : '') } });
      this.enterFreeTry('retry');
    } else {
      this.practice = null;
      this.set({ feedback: { tone: 'good', text: checker.hintUsed ? 'Virheetön, vihjeen kanssa! Riffi läpäisty.' : 'Virheetön! Kaikki pallukat vihreinä – riffi läpäisty.' } });
      this.enterFreeTry('success');
    }
  }

  private showLevelComplete() {
    if (this.micOpen) this.audio.pauseAnalysis();
    const level = this.store.level(this.state.input);
    this.set({ phase: 'level-complete', level, completedLevels: this.store.completedLevels(this.state.input),
      unlockedLevels: this.store.unlockedLevels(this.state.input), feedback: null, hint: false });
  }

  // ---- sivutoiminnot ----
  /**
   * Kuuntele riffi / Pysäytä kuuntelu (sama painike).
   * - Kesken yrityksen malli soi, eikä mitään nollata: sama paikka, samat pallukat, muistivihjeet ja laskurit.
   *   Mikrofonin analyysi on tauolla mallin ajan, ja vuoro jatkuu suojavaiheen kautta.
   * - ready: ensimmäinen kuuntelu, sitten vuoro.
   * - success / retry: pelkkä kuuntelu, vaihe ja pallukat eivät muutu.
   */
  listen() {
    if (this.state.modelPlaying) { this.stopListening(); return; }
    const phase = this.state.phase;
    if (phase === 'success' || phase === 'retry') { void this.playModel(false); return; }
    if (!['ready', 'listening', 'output-settling'].includes(phase)) return;
    if (phase !== 'ready') this.replays++;
    void this.playModel(true);
  }
  /** Pysäytä kuuntelu: malli katkeaa, eteneminen säilyy; vuoro jatkuu suojavaiheen kautta. */
  stopListening() {
    if (!this.state.modelPlaying) return;
    const op = ++this.op;
    this.audio.stopModel();
    this.set({ modelPlaying: false, playing: null });
    if (this.state.phase === 'model-playing') this.afterModel(op);
    else if (FREE_TRY.includes(this.state.phase)) this.enterFreeTry(this.state.phase);
  }
  /** Aloita uusi yritys samalla riffillä ilman mallia. Kesken jäänyt yritys ei ole epäonnistunut kokonaisyritys. */
  restart() {
    const phase = this.state.phase;
    if (phase === 'retry') { this.beginRound(this.state.riff, 'listen'); return; }
    if (!['ready', 'listening', 'output-settling', 'model-playing'].includes(phase)) return;
    if (this.state.modelPlaying) this.stopListening();
    this.startAttempt();
    this.set({ feedback: { tone: 'info', text: 'Uusi yritys: aloita riffi alusta.' } });
    if (this.micOpen) this.audio.resumeAnalysis();
    this.startListening();
  }
  /**
   * Yritä uudelleen (keltaisten jälkeen): uusi arvioitava yritys ensimmäisestä sävelestä. Värit ja
   * eteneminen nollataan, muistivihjeet säilyvät. Malli ei soi itsestään; sitä voi kuunnella milloin vain.
   */
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
  /** Onnittelunäkymästä: seuraava taso. Ei koskaan automaattisesti. */
  continueLevel() {
    if (this.state.phase !== 'level-complete') return;
    const next = this.state.level.number + 1;
    if (!LEVELS.some(l => l.number === next)) return;
    this.store.startLevel(this.state.input, next);
    this.beginRound();
  }
  /** Onnittelunäkymästä: sama taso alusta (tai annettu taso, esim. viimeisen jälkeen taso 1). */
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
    this.calibration = null;
    this.audio.stopModel();
    this.closeMic();
    this.set({ phase: 'paused', pausedReason: reason, playing: null, modelPlaying: false, heard: null, calibrating: false });
  }
  resume() {
    if (this.state.phase !== 'paused') return;
    const from = this.pausedFrom ?? 'listening';
    this.pausedFrom = null;
    this.set({ pausedReason: null });
    if (from === 'level-complete') { this.set({ phase: from }); return; }
    const feedback = this.state.feedback;
    const go = () => {
      if (from === 'mic-check') this.enterMicCheck();
      else if (from === 'tools') this.enterTools(this.state.tool);
      // Vapaan kokeilun vaiheet palaavat sellaisinaan: tulos, palaute ja pallukat eivät muutu.
      else if (FREE_TRY.includes(from)) { this.set({ feedback }); this.enterFreeTry(from); }
      // Keskeytynyt kuuntelu ei nollaa yritystä: vuoro jatkuu, ja mallin voi kuunnella uudelleen.
      else this.startListening();
    };
    if (this.state.input === 'mic') this.openMicThen(go); else go();
  }
  private micLost() {
    const phase = this.state.phase;
    this.closeMic();
    this.calibration = null;
    if (ACTIVE.includes(phase)) {
      this.pausedFrom = phase;
      ++this.op;
      this.cancelTimers();
      this.audio.stopModel();
      this.set({ phase: 'paused', pausedReason: 'mic-lost', playing: null, modelPlaying: false, heard: null, micInfo: null, calibrating: false });
    }
  }

  /** Lopeta: kaikki pysähtyy, aloitusnäkymä. Edistyminen on jo tallennettu. */
  stop() {
    ++this.op;
    this.cancelTimers();
    this.calibration = null;
    this.audio.stopModel();
    this.closeMic();
    this.practice = null;
    this.pausedFrom = null;
    this.afterCheck = null;
    this.set({ phase: 'idle', playing: null, modelPlaying: false, heard: null, feedback: null, error: '', pausedReason: null, index: 0, hint: false,
      memory: [], failedAttempts: 0, calibrating: false, micInfo: null, diag: null, tuner: null, ...this.position(this.state.input) });
  }

  private closeMic() {
    this.micSession++;
    if (this.micOpen) this.audio.closeMic();
    this.micOpen = false;
  }
}
