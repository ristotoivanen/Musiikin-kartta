/**
 * Riffikaiun oma edistyminen. Erillinen avain: Kitaraharjoittelijan versio 3
 * (musiikin-kartta:harjoittelu) ei muutu. Raakaääntä ei tallenneta, eikä mitään lähetetä palvelimelle.
 *
 * Tasot: jokaisella vastaustavalla (mic / board) on oma meneillään oleva tasokierros (run) ja omat
 * läpäistyt tasot. Taso läpäistään, kun sen kolme riffiä on soitettu virheettömästi (kaikki vihreinä)
 * saman kierroksen aikana. Seuraavalle tasolle siirrytään vain pelaajan valinnasta.
 *
 * Kentät run, levels ja fullBoard lisättiin versioon 1 taaksepäin yhteensopivasti: vanha data luetaan
 * ja puuttuvat kentät saavat oletusarvon.
 */
import type { AnswerInput } from './sequence';
import { LEVELS, TUTORIAL, levelOf, type Riff } from './riffs';

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
};

/** done: loppuun soitetut yritykset · passed: virheettömät · solo: virheettömät ilman vihjettä. */
export type RiffStat = { done: number; solo: number; passed?: number; lastAt: number };
export type LevelRun = { level: number; passed: string[] };
export type RiffData = {
  version: 1;
  tutorialDone: boolean;
  /** Viimeksi käytetty vastaustapa. */
  input: AnswerInput;
  /** Näytetäänkö koko kuusikielinen otelauta jo ennen tasoa 4. */
  fullBoard: boolean;
  /** Tilastot vastaustavoittain: mikrofonin ja otelaudan tulokset eivät sekoitu. */
  stats: Record<AnswerInput, Record<string, RiffStat>>;
  results: RiffResult[];
  run: Record<AnswerInput, LevelRun>;
  /** Läpäistyt tasot vastaustavoittain. */
  levels: Record<AnswerInput, number[]>;
};

export const freshRiffData = (): RiffData => ({ version: 1, tutorialDone: false, input: 'mic', fullBoard: false,
  stats: { mic: {}, board: {} }, results: [], run: { mic: { level: 1, passed: [] }, board: { level: 1, passed: [] } }, levels: { mic: [], board: [] } });

const count = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v) && v >= 0;
const isInput = (v: unknown): v is AnswerInput => v === 'mic' || v === 'board';
const levelNumber = (v: unknown): v is number => Number.isInteger(v) && LEVELS.some(l => l.number === v);
const validStat = (s: unknown): s is RiffStat => {
  const x = s as RiffStat;
  return !!x && typeof x === 'object' && count(x.done) && count(x.solo) && count(x.lastAt) && x.solo <= x.done &&
    (x.passed === undefined || count(x.passed) && x.passed <= x.done && x.solo <= x.passed);
};
const validResult = (r: unknown): r is RiffResult => {
  const x = r as RiffResult;
  return !!x && typeof x === 'object' && typeof x.riff === 'string' && isInput(x.input) && typeof x.hint === 'boolean' &&
    (['wrong', 'octave', 'replays', 'ms', 'at'] as const).every(k => count(x[k])) &&
    (x.passed === undefined || typeof x.passed === 'boolean') && (x.level === undefined || levelNumber(x.level));
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
  if (isInput(d.input)) data.input = d.input;
  for (const input of INPUTS) {
    const stats = d.stats?.[input];
    if (stats && typeof stats === 'object') for (const [id, s] of Object.entries(stats)) if (validStat(s)) data.stats[input][id] = { ...s };
    const run = d.run?.[input];
    if (run && levelNumber(run.level) && Array.isArray(run.passed)) {
      const ids = LEVELS.find(l => l.number === run.level)!.riffs.map(r => r.id);
      data.run[input] = { level: run.level, passed: ids.filter(id => run.passed.includes(id)) };
    }
    const levels = d.levels?.[input];
    if (Array.isArray(levels)) data.levels[input] = [...new Set(levels.filter(levelNumber))].sort((a, b) => a - b);
  }
  if (Array.isArray(d.results)) data.results = d.results.filter(validResult).slice(-300);
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
   * tasotulos. Palauttaa levelComplete = true sillä kirjauksella, jolla tason kolmas riffi läpäistiin.
   */
  record(result: RiffResult): { levelComplete: boolean } {
    if (result.riff === TUTORIAL.id) { this.finishTutorial(); return { levelComplete: false }; }
    const { input } = result, passed = result.passed === true;
    const stats = this.data.stats[input];
    const prev = stats[result.riff] ?? { done: 0, solo: 0, passed: 0, lastAt: 0 };
    stats[result.riff] = { done: prev.done + 1, passed: (prev.passed ?? 0) + (passed ? 1 : 0),
      solo: prev.solo + (passed && !result.hint ? 1 : 0), lastAt: result.at };
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
    return { levelComplete };
  }
}
