/**
 * Riffikaiun oma edistyminen. Erillinen avain: Kitaraharjoittelijan versio 3
 * (musiikin-kartta:harjoittelu) ei muutu. Raakaääntä ei tallenneta, eikä mitään lähetetä palvelimelle.
 *
 * Kotitreenit (koodissa ”level”): jokaisella vastaustavalla (mic / board) on oma meneillään oleva
 * kierros (run) ja omat suoritetut kotitreenit (levels). Kotitreeni suoritetaan, kun sen kolme riffiä on
 * soitettu virheettömästi (kaikki vihreinä) saman kierroksen aikana. Seuraavaan siirrytään vain
 * pelaajan valinnasta.
 *
 * Kentät lisättiin versioon 1 taaksepäin yhteensopivasti; mitään ei poisteta.
 *
 * Kaksi käyttötapaa, kaksi erillistä edistymistä (0.4):
 * - **Riffikaiku-peli – virtuaalikitara** käyttää `board`-kenttiä: todelliset läpäisyt (`run.board`,
 *   `levels.board`, `stats.board`, `results`). Ennätys `stats.board[riffi].best` = vähiten vääriä säveliä
 *   loppuun soitetussa yrityksessä; puuttuu ennen 0.4:ää tallennetuista tilastoista.
 * - **Riffiharjoitus – oikea kitara** käyttää omaa `practice`-kenttää: itse kuitatut riffit (`marked`)
 *   ja kerrat, jolloin mikrofoni kuuli koko riffin oikeassa järjestyksessä (`heard`). Nämä eivät ole
 *   läpäisyjä, eikä niitä näytetä samalla nimellä.
 * - Vanhat mikrofonipelin tulokset (`run.mic`, `levels.mic`, `stats.mic`, `input: 'mic'`) säilyvät
 *   sellaisinaan. Niitä ei muuteta harjoituksen kuittauksiksi: virheetön mikrofonipelin läpäisy ei kerro,
 *   että pelaaja itse pitää riffiä harjoiteltuna. Ne näytetään harjoitusnäkymässä erikseen.
 *
 * Siirto 0.2:n nelitasoisesta rakenteesta (ei structure-kenttää): vanhat tasonumerot eivät vastaa
 * kotitreenejä (vanha taso 2 oli B-kieli, uusi Kotitreeni 2 on G-kieli), joten suoritettuja tasoja ei
 * siirretä eikä mitään merkitä läpäistyksi tasonumeron perusteella. Riffikohtaiset tilastot ja tulokset
 * säilyvät tunnisteittain (samat tunnisteet = samat sävelet). Kesken olleen tason 1 läpäistyt riffit
 * siirtyvät Kotitreeni 1:een vain, jos täsmälleen sama riffi kuuluu siihen. Vanhat tulokset merkitään
 * legacy-tunnisteella, koska niiden level-numero viittaa vanhaan rakenteeseen.
 */
import type { AnswerInput } from './sequence';
import { LEVELS, RIFFS, TUTORIAL, levelOf, type Riff } from './riffs';

export const RIFF_STORAGE_KEY = 'musiikin-kartta:riffikaiku:v1';
const INPUTS = ['mic', 'board'] as const;

export type RiffResult = {
  riff: string;
  input: AnswerInput;
  /** Avattiinko sävelvihje riffiyrityksen aikana. */
  hint: boolean;
  /** Vakaat väärät sävelet ja väärän oktaavin havainnot. */
  wrong: number;
  octave: number;
  /** Mallin uusintakuuntelut riffiyrityksen aikana. */
  replays: number;
  /** Vastausvuoron kesto ensimmäisestä kuuntelun alusta loppuun. */
  ms: number;
  at: number;
  /** Kaikki pallukat vihreinä. Puuttuu 0.1-version tuloksista. */
  passed?: boolean;
  level?: number;
  /** Tulos on tallennettu ennen kotitreenejä: level viittaa vanhaan nelitasoiseen rakenteeseen. */
  legacy?: boolean;
};

/** done: loppuun soitetut yritykset · passed: virheettömät · solo: virheettömät ilman vihjettä. */
export type RiffStat = { done: number; solo: number; passed?: number; lastAt: number;
  /** Vähiten vääriä säveliä yhdessä loppuun soitetussa yrityksessä (ennätys). Puuttuu ennen 0.4:ää. */
  best?: number };
/** Harjoitustilan vaiheet: kuuntele, opettele, kokeile muistista. */
export type PracticeStep = 'listen' | 'learn' | 'recall';
export const PRACTICE_STEPS: readonly PracticeStep[] = ['listen', 'learn', 'recall'];
export type PracticeData = {
  /** Itse kuitatut riffit: tunniste → kuittauksen aika. */
  marked: Record<string, number>;
  /** Kuinka monta kertaa mikrofoni kuuli koko riffin oikeassa järjestyksessä (Kokeile muistista). */
  heard: Record<string, number>;
  /** Viimeksi harjoiteltu riffi ja vaihe (Jatka-painike). */
  last: { riff: string; step: PracticeStep } | null;
};
export type LevelRun = { level: number; passed: string[] };
export const STRUCTURE = 'kotitreenit';
export type RiffData = {
  version: 1;
  /** Harjoitusrakenne, johon run ja levels viittaavat. Puuttuu 0.1–0.2-tallennuksista. */
  structure: typeof STRUCTURE;
  tutorialDone: boolean;
  /** Viimeksi käytetty vastaustapa. */
  input: AnswerInput;
  /** 0.2: näytettiinkö koko otelauta. 0.3:sta alkaen koko otelauta näkyy aina; kenttä säilytetään. */
  fullBoard: boolean;
  /** Valittu äänitulo (selaimen deviceId); tyhjä = järjestelmän oletus. */
  device: string;
  /** Tilastot vastaustavoittain: mikrofonin ja otelaudan tulokset eivät sekoitu. */
  stats: Record<AnswerInput, Record<string, RiffStat>>;
  results: RiffResult[];
  run: Record<AnswerInput, LevelRun>;
  /** Läpäistyt tasot vastaustavoittain. */
  levels: Record<AnswerInput, number[]>;
  /** Oikean kitaran riffiharjoitus (0.4). Puuttuu vanhoista tallennuksista. */
  practice: PracticeData;
};

export const freshRiffData = (): RiffData => ({ version: 1, structure: STRUCTURE, tutorialDone: false, input: 'mic', fullBoard: false, device: '',
  stats: { mic: {}, board: {} }, results: [], run: { mic: { level: 1, passed: [] }, board: { level: 1, passed: [] } }, levels: { mic: [], board: [] },
  practice: { marked: {}, heard: {}, last: null } });

const count = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v) && v >= 0;
const isInput = (v: unknown): v is AnswerInput => v === 'mic' || v === 'board';
const levelNumber = (v: unknown): v is number => Number.isInteger(v) && LEVELS.some(l => l.number === v);
const validStat = (s: unknown): s is RiffStat => {
  const x = s as RiffStat;
  return !!x && typeof x === 'object' && count(x.done) && count(x.solo) && count(x.lastAt) && x.solo <= x.done &&
    (x.passed === undefined || count(x.passed) && x.passed <= x.done && x.solo <= x.passed) && (x.best === undefined || count(x.best));
};
const knownRiff = (id: string) => RIFFS.some(r => r.id === id);
/** Harjoitustilan kentät: vain tunnetut riffit ja kelvolliset luvut. */
function decodePractice(raw: unknown): PracticeData {
  const out: PracticeData = { marked: {}, heard: {}, last: null };
  const p = raw as Partial<PracticeData> | null;
  if (!p || typeof p !== 'object') return out;
  for (const key of ['marked', 'heard'] as const) {
    const map = p[key];
    if (map && typeof map === 'object') for (const [id, v] of Object.entries(map)) if (knownRiff(id) && count(v)) out[key][id] = v;
  }
  const last = p.last;
  if (last && typeof last === 'object' && typeof last.riff === 'string' && knownRiff(last.riff) && PRACTICE_STEPS.includes(last.step)) out.last = { riff: last.riff, step: last.step };
  return out;
}
const validResult = (r: unknown): r is RiffResult => {
  const x = r as RiffResult;
  return !!x && typeof x === 'object' && typeof x.riff === 'string' && isInput(x.input) && typeof x.hint === 'boolean' &&
    (['wrong', 'octave', 'replays', 'ms', 'at'] as const).every(k => count(x[k])) &&
    (x.passed === undefined || typeof x.passed === 'boolean') && (x.level === undefined || Number.isInteger(x.level) && x.level > 0);
};

/** Lukee tallennuksen. Virheellinen tai tuntematon data palautetaan tyhjänä, ei kaadu. */
export function decodeRiffData(raw: string | null): RiffData {
  const data = freshRiffData();
  if (!raw) return data;
  let parsed: unknown;
  try { parsed = JSON.parse(raw); } catch { return data; }
  const d = parsed as Partial<RiffData> | null;
  if (!d || d.version !== 1) return data;
  data.tutorialDone = d.tutorialDone === true;
  data.fullBoard = d.fullBoard === true;
  if (typeof d.device === 'string') data.device = d.device.slice(0, 256);
  if (isInput(d.input)) data.input = d.input;
  const legacy = d.structure !== STRUCTURE;
  for (const input of INPUTS) {
    const stats = d.stats?.[input];
    if (stats && typeof stats === 'object') for (const [id, s] of Object.entries(stats)) if (validStat(s)) data.stats[input][id] = { ...s };
    const run = d.run?.[input];
    if (legacy) {
      // Vain vanhan tason 1 kesken olleet, Kotitreeni 1:ssä täsmälleen samat riffit siirtyvät.
      if (run && run.level === 1 && Array.isArray(run.passed)) data.run[input] = { level: 1, passed: LEVELS[0].riffs.map(r => r.id).filter(id => run.passed.includes(id)) };
      continue;
    }
    if (run && levelNumber(run.level) && Array.isArray(run.passed)) {
      const ids = LEVELS.find(l => l.number === run.level)!.riffs.map(r => r.id);
      data.run[input] = { level: run.level, passed: ids.filter(id => run.passed.includes(id)) };
    }
    const levels = d.levels?.[input];
    if (Array.isArray(levels)) data.levels[input] = [...new Set(levels.filter(levelNumber))].sort((a, b) => a - b);
  }
  data.practice = decodePractice(d.practice);
  if (Array.isArray(d.results)) data.results = d.results.filter(validResult).slice(-300).map(r => legacy && !r.legacy ? { ...r, legacy: true } : r);
  return data;
}

export class RiffStore {
  data: RiffData;
  /** storage puuttuu tai heittää (yksityinen ikkuna, estetty tallennus): peli toimii ilman tallennusta. */
  constructor(private storage?: Pick<Storage, 'getItem' | 'setItem'>) {
    let raw: string | null = null;
    try { raw = storage?.getItem(RIFF_STORAGE_KEY) ?? null; } catch { raw = null; }
    this.data = decodeRiffData(raw);
  }
  private save() {
    try { this.storage?.setItem(RIFF_STORAGE_KEY, JSON.stringify(this.data)); } catch { /* tallennus ei ole pelin edellytys */ }
  }
  setInput(input: AnswerInput) { if (this.data.input !== input) { this.data.input = input; this.save(); } }
  setFullBoard(on: boolean) { if (this.data.fullBoard !== on) { this.data.fullBoard = on; this.save(); } }
  setDevice(device: string) { if (this.data.device !== device) { this.data.device = device; this.save(); } }
  /** Tasot, jotka voi valita tasovalikosta: läpäistyt, nykyinen ja seuraava läpäisemätön. */
  unlockedLevels(input: AnswerInput): number[] {
    const top = Math.max(this.data.run[input].level, ...this.data.levels[input].map(n => n + 1));
    return LEVELS.map(l => l.number).filter(n => n <= top);
  }
  finishTutorial() { if (!this.data.tutorialDone) { this.data.tutorialDone = true; this.save(); } }

  run(input: AnswerInput): LevelRun { return this.data.run[input]; }
  completedLevels(input: AnswerInput): number[] { return this.data.levels[input]; }
  level(input: AnswerInput) { return LEVELS.find(l => l.number === this.data.run[input].level)!; }
  /** Tasokierroksen seuraava läpäisemätön riffi, tai null kun kaikki kolme on läpäisty. */
  currentRiff(input: AnswerInput): Riff | null {
    const run = this.data.run[input];
    return this.level(input).riffs.find(r => !run.passed.includes(r.id)) ?? null;
  }
  /** Aloittaa tason alusta (uusi kierros). Läpäistyt tasot säilyvät. */
  startLevel(input: AnswerInput, level: number) {
    if (!levelNumber(level)) return;
    this.data.run[input] = { level, passed: [] };
    this.save();
  }

  /**
   * Kirjaa yhden loppuun soitetun riffiyrityksen kerran. Opastus merkitään tehdyksi, mutta se ei ole
   * tasotulos. Palauttaa levelComplete = true sillä kirjauksella, jolla tason kolmas riffi läpäistiin,
   * ja tiedot uusista saavutuksista (ensimmäinen läpäisy, ensimmäinen tähti, uusi ennätys).
   */
  record(result: RiffResult): RecordOutcome {
    if (result.riff === TUTORIAL.id) { this.finishTutorial(); return { levelComplete: false, firstPass: false, firstStar: false, newBest: false }; }
    const { input } = result, passed = result.passed === true;
    const stats = this.data.stats[input];
    const prev = stats[result.riff] ?? { done: 0, solo: 0, passed: 0, lastAt: 0 };
    const solo = passed && !result.hint;
    const firstPass = passed && (prev.passed ?? 0) === 0, firstStar = solo && prev.solo === 0;
    // Ennätys: vähemmän vääriä säveliä kuin aiemmin. Ensimmäinen kirjaus (myös vanhassa tilastossa,
    // jossa ennätystä ei vielä seurattu) aloittaa seurannan, mutta ei ole ”uusi ennätys”.
    const newBest = prev.best !== undefined && result.wrong < prev.best;
    const best = prev.best === undefined ? result.wrong : Math.min(prev.best, result.wrong);
    stats[result.riff] = { done: prev.done + 1, passed: (prev.passed ?? 0) + (passed ? 1 : 0),
      solo: prev.solo + (solo ? 1 : 0), lastAt: result.at, best };
    this.data.results = [...this.data.results, { ...result, level: result.level ?? levelOf(result.riff)?.number }].slice(-300);
    let levelComplete = false;
    const run = this.data.run[input], level = this.level(input);
    if (passed && level.riffs.some(r => r.id === result.riff) && !run.passed.includes(result.riff)) {
      run.passed = level.riffs.map(r => r.id).filter(id => id === result.riff || run.passed.includes(id));
      if (run.passed.length === level.riffs.length) {
        levelComplete = true;
        if (!this.data.levels[input].includes(level.number)) this.data.levels[input] = [...this.data.levels[input], level.number].sort((a, b) => a - b);
      }
    }
    this.save();
    return { levelComplete, firstPass, firstStar, newBest };
  }

  // ---- oikean kitaran riffiharjoitus ----
  /** Itse kuitattu (true) tai kuittaus poistettu (false). */
  setMarked(riff: string, on: boolean, at = Date.now()) {
    if (!knownRiff(riff) || (riff in this.data.practice.marked) === on) return;
    if (on) this.data.practice.marked[riff] = at; else delete this.data.practice.marked[riff];
    this.save();
  }
  /** Mikrofoni kuuli koko riffin oikeassa järjestyksessä. */
  addHeard(riff: string) {
    if (!knownRiff(riff)) return;
    this.data.practice.heard[riff] = (this.data.practice.heard[riff] ?? 0) + 1;
    this.save();
  }
  setPracticeLast(riff: string, step: PracticeStep) {
    const last = this.data.practice.last;
    if (!knownRiff(riff) || last?.riff === riff && last.step === step) return;
    this.data.practice.last = { riff, step };
    this.save();
  }
}

export type RecordOutcome = { levelComplete: boolean; firstPass: boolean; firstStar: boolean; newBest: boolean };
