import {
  CHORDS, INTERVALS, cagedPositions, chordLabel, fretName, music, note, octaveOf, pc, positionKey, positions,
  rootName, spell, stringFrom, stringName, stringOf, stringOn, type Position,
} from './music';
import { answerCheck, answerInput, ordered, type Settings } from './settings';
import { statKey, weight, type Result, type Stat } from './storage';

export type Question = {
  /** Kysymyksen mallikohta otelaudalla. Mikrofoni ei tunnista kieltä tai nauhaa. */
  position: Position; midi: number; item: string; prompt: string;
  /** Kysytyn sävelen nimi oikein kirjoitettuna; oktaavi mukana, kun se tarkistetaan. */
  name: string;
  check: Settings['check']; choices: 'note' | 'degree' | 'position'; sound: number[];
  /** Vain asteikko-, sointu- ja CAGED-tehtävissä. */
  degree?: string;
  /** Puoliaskelia perussävelestä (asteet) tai sävelten välillä (intervallit). */
  interval?: number;
  reference?: number; direction?: 'up' | 'down';
};
export type Area = { strings: number[]; min: number; max: number; fixed: '' | 'box' | 'shape' };
type Tone = [number, string];

const isDegreeMode = (s: Settings) => s.mode === 'scale' || s.mode === 'chord' || s.mode === 'caged';
const tonesOf = (s: Settings): Tone[] =>
  s.mode === 'scale' ? music.scaleNotes(music.SCALES[s.scale]) : CHORDS[s.mode === 'caged' ? 'maj' : s.chord].tones as Tone[];
const scaleBox = (s: Settings) => music.fingeringBoxes(s.root, music.SCALES[s.scale], 'pentatonic', [s.box])[0].positions[0];

/** Otelaudan alue, jolta vastataan. Sormitusboksi ja CAGED-muoto määräävät alueensa itse. */
export function practiceArea(s: Settings): Area {
  if (s.mode === 'caged') {
    const frets = cagedPositions(s.root, s.shape).map(p => p.fret);
    return { strings: [0,1,2,3,4,5], min: Math.min(...frets), max: Math.max(...frets), fixed: 'shape' };
  }
  if (s.mode === 'scale' && s.box) {
    const box = scaleBox(s);
    return { strings: s.strings, min: box.start, max: box.end, fixed: 'box' };
  }
  return { strings: s.strings, min: s.min, max: s.max, fixed: '' };
}
/** Näytettävä otelauta: boksin tai muodon ympärillä on yksi nauha yhteyden hahmottamiseksi. */
export function boardArea(s: Settings): Area {
  const area = practiceArea(s);
  return area.fixed ? { ...area, strings: [0,1,2,3,4,5], min: Math.max(0, area.min - 1), max: Math.min(24, area.max + 1) } : area;
}
/** Kohdat, joista kysymykset muodostetaan ja jotka kelpaavat aste- ja sointutehtävien vastauksiksi. */
export function pool(s: Settings): Position[] {
  const area = practiceArea(s);
  const all = positions(area.strings, area.min, area.max);
  if (s.mode === 'notes' || s.mode === 'ear-note' || s.mode === 'repeat')
    return all.filter(p => s.accidentals || ![1,3,6,8,10].includes(pc(p.midi)));
  if (s.mode === 'caged') {
    const shape = new Set(cagedPositions(s.root, s.shape).map(positionKey));
    return all.filter(p => shape.has(positionKey(p)));
  }
  if (s.mode === 'interval') return all;
  const inKey = all.filter(p => tonesOf(s).some(([iv]) => pc(p.midi - s.root) === iv));
  if (s.mode !== 'scale' || !s.box) return inKey;
  // Sama rajaus kuin otelautaharjoittelijan boksinäkymässä: kielen alimman ja ylimmän boksisävelen väli.
  const box = scaleBox(s);
  return inKey.filter(p => {
    const frets = box.strings[p.string];
    return frets.length > 0 && p.fret >= frets[0] && p.fret <= frets.at(-1)!;
  });
}
type IntervalChoice = { iv: number; direction: 'up' | 'down'; pairs: { reference: Position; target: Position }[] };
function intervalChoices(s: Settings, all: Position[]): IntervalChoice[] {
  const directions: ('up' | 'down')[] = s.direction === 'both' ? ['up','down'] : [s.direction];
  return directions.flatMap(direction => s.intervals.map(iv => ({ iv, direction,
    pairs: all.flatMap(reference => all
      .filter(target => target.midi === reference.midi + (direction === 'down' ? -iv : iv))
      .map(target => ({ reference, target }))),
  }))).filter(choice => choice.pairs.length);
}
function requiredTones(s: Settings): Tone[] {
  const tones = tonesOf(s);
  if (s.mode !== 'chord' || s.chordTone === 'random') return [];
  if (s.chordTone === 'build') return tones;
  return tones.filter(([, degree]) => degree.endsWith(s.chordTone));
}
/** Palauttaa syyn, jos valinnoilla ei voi muodostaa vastattavaa tehtävää. */
export function validate(s: Settings): string | null {
  const all = pool(s);
  const widen = 'Laajenna nauha-aluetta tai valitse lisää kieliä.';
  if (!all.length) {
    if (s.mode === 'scale') return `Asteikon säveliä ei ole valitulla alueella. ${s.box ? 'Valitse lisää kieliä tai toinen boksi.' : widen}`;
    if (s.mode === 'chord') return `Soinnun säveliä ei ole valitulla alueella. ${widen}`;
    if (s.mode !== 'interval' && !s.accidentals) return 'Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet.';
    return `Valitulla alueella ei ole harjoiteltavia säveliä. ${widen}`;
  }
  const missing = requiredTones(s).filter(([iv]) => !all.some(p => pc(p.midi - s.root) === iv));
  if (missing.length) return `Valitulta alueelta puuttuu soinnun ${missing.map(([, degree]) => degree + '. aste').join(' ja ')}. ${widen}`;
  if (s.mode === 'interval' && !intervalChoices(s, all).length)
    return 'Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja.';
  if (ordered(s) && new Set(all.map(p => p.midi)).size < 2)
    return `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${widen}`;
  return null;
}
/** Asteikon sävelet sävelkorkeuden mukaan, sama korkeus vain kerran. */
function orderedRun(s: Settings, all: Position[]): Position[] {
  const run = [...new Map([...all].sort((a, b) => a.midi - b.midi || a.string - b.string).map(p => [p.midi, p])).values()];
  return s.order === 'down' ? run.reverse() : run;
}
/** Kierroksen kysymysmäärä; 0 tarkoittaa vapaata harjoittelua. Järjestetty asteikko soitetaan kerran läpi. */
export function roundLength(s: Settings): number {
  return ordered(s) ? new Set(pool(s).map(p => p.midi)).size : s.rounds;
}
/** Automaattinen vihjetaso kysymykselle numero index (1 = ensimmäinen): 2 = vastaus, 1 = apupiste. */
export function autoHintLevel(s: Settings, index: number): number {
  if (s.hints === 'always') return 2;
  if (s.hints === 'fade') return index <= 3 ? 2 : index <= 6 ? 1 : 0;
  return 0;
}
export function weightedPick<T>(items: T[], weights: number[], random = Math.random): T {
  if (!items.length) throw new Error('Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.');
  const total = weights.reduce((a, b) => a + b, 0);
  const roll = Math.min(.999999999, Math.max(0, random()));
  if (!(total > 0)) return items[Math.floor(roll * items.length)];
  let r = roll * total;
  for (let i = 0; i < items.length; i++) { r -= weights[i]; if (r < 0) return items[i]; }
  return items.at(-1)!;
}
const degreeItem = (s: Settings, iv: number) =>
  s.mode === 'caged' ? `caged:${s.root}:${s.shape}:${iv}`
    : s.mode === 'chord' ? `chord:${s.root}:${s.chord}:${iv}:${s.activity}`
      : `scale:${s.root}:${s.scale}:${iv}:${s.activity}`;
/** Älä toista samaa kohdetta heti, jos muita on tarjolla. */
function avoid<T>(items: T[], same: (item: T) => boolean): T[] {
  const rest = items.filter(item => !same(item));
  return rest.length ? rest : items;
}

export function generate(s: Settings, index: number, stats: Record<string, Stat> = {}, previous?: Question, random = Math.random): Question {
  const problem = validate(s);
  if (problem) throw new Error(problem);
  const check = answerCheck(s), input = answerInput(s), exact = check === 'pitch';
  const w = (item: string) => s.weak ? weight(stats[statKey({ input, check, hint: false, item })]) : 1;
  const any = <T,>(items: T[]) => weightedPick(items, items.map(() => 1), random);
  const all = pool(s);
  const base = { check, sound: [] as number[], choices: 'position' as Question['choices'] };

  if (s.mode === 'notes') {
    const eligible = avoid(all, p => !!previous && positionKey(p) === positionKey(previous.position));
    const target = weightedPick(eligible, eligible.map(p => w(`notes:${positionKey(p)}`)), random);
    const name = note(target.midi, s.flats, exact);
    return { ...base, position: target, midi: target.midi, name, item: `notes:${positionKey(target)}`,
      prompt: `Etsi ${name} ${stringFrom[target.string]}.` };
  }
  if (s.mode === 'ear-note') {
    const item = (p: Position) => `ear-note:${pc(p.midi)}${s.reference ? ':ref' : ''}`;
    const eligible = avoid(all, p => !!previous && pc(p.midi) === pc(previous.midi));
    const target = weightedPick(eligible, eligible.map(p => w(item(p))), random);
    // Vertailusävel on kysyttyä säveltä lähin A, jotta väli pysyy pienenä.
    const reference = s.reference ? 57 + 12 * Math.round((target.midi - 57) / 12) : undefined;
    return { ...base, position: target, midi: target.midi, name: note(target.midi, s.flats), item: item(target), choices: 'note',
      reference, sound: reference === undefined ? [target.midi] : [reference, target.midi],
      prompt: s.reference ? 'Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?' : 'Mikä sävel soi?' };
  }
  if (s.mode === 'repeat') {
    const eligible = avoid(all, p => !!previous && p.midi === previous.midi);
    const target = weightedPick(eligible, eligible.map(p => w(`repeat:${p.midi}`)), random);
    return { ...base, position: target, midi: target.midi, name: note(target.midi, s.flats, true), item: `repeat:${target.midi}`,
      sound: [target.midi], prompt: 'Kuuntele sävel ja etsi se kitarasta.' };
  }
  if (s.mode === 'interval') {
    const options = avoid(intervalChoices(s, all), c => previous?.interval === c.iv && previous?.direction === c.direction);
    const choice = weightedPick(options, options.map(c => w(`interval:${c.iv}:${c.direction}`)), random);
    const pair = any(avoid(choice.pairs, p => previous?.reference === p.reference.midi));
    return { ...base, position: pair.target, midi: pair.target.midi, name: note(pair.target.midi, s.flats, true),
      item: `interval:${choice.iv}:${choice.direction}`, interval: choice.iv, direction: choice.direction,
      reference: pair.reference.midi, sound: [pair.reference.midi, pair.target.midi],
      prompt: `Kuulet ${choice.direction === 'up' ? 'nousevan' : 'laskevan'} intervallin. Alkusävel on ${note(pair.reference.midi, s.flats, true)}. Etsi jälkimmäinen sävel.` };
  }

  // Asteikko, sointusävelet ja CAGED: kohde on aste, ei yksittäinen otelaudan kohta.
  const tones = tonesOf(s);
  let target: Position;
  let run = 0;
  if (ordered(s)) {
    const sequence = orderedRun(s, all);
    run = sequence.length;
    target = sequence[index % sequence.length];
  } else {
    const present = tones.filter(([iv]) => all.some(p => pc(p.midi - s.root) === iv));
    const wanted = s.mode === 'chord' && s.chordTone !== 'random'
      ? s.chordTone === 'build' ? [tones[index % tones.length]] : tones.filter(([, degree]) => degree.endsWith(s.chordTone))
      : avoid(present, ([iv]) => previous?.interval === iv);
    const [iv] = weightedPick(wanted, wanted.map(([tone]) => w(degreeItem(s, tone))), random);
    target = any(avoid(all.filter(p => pc(p.midi - s.root) === iv), p => !!previous && positionKey(p) === positionKey(previous.position)));
  }
  const iv = pc(target.midi - s.root);
  const degree = tones.find(([tone]) => tone === iv)![1];
  const spelled = spell(s.root, iv, degree);
  const name = exact ? spelled + octaveOf(target.midi, spelled) : spelled;
  const title = s.mode === 'scale' ? `${rootName(s.root)}-${music.SCALES[s.scale].name}${s.box ? `, boksi ${s.box}` : ''}`
    : s.mode === 'caged' ? `${rootName(s.root)}-duurisointu, ${s.shape}-muoto` : chordLabel(s.root, s.chord);
  const asksDegree = s.mode !== 'caged' && s.activity === 'degree';
  const prompt = asksDegree ? `${title}: mikä aste on ${spelled}?`
    : run ? `${title} ${s.order === 'up' ? 'ylöspäin' : 'alaspäin'}, sävel ${index % run + 1}/${run}: ${degree}. aste (${name}).`
      : `${title}: etsi ${degree}. aste${exact ? ` (${name})` : ''}.`;
  return { ...base, position: target, midi: target.midi, name, item: degreeItem(s, iv), prompt, degree, interval: iv,
    choices: asksDegree ? 'degree' : 'position' };
}

export function matches(expected: number, actual: number, check: Settings['check']): boolean {
  return Number.isInteger(actual) && (check === 'class' ? pc(expected) === pc(actual) : expected === actual);
}
/** Kelpaako otelaudan kohta vastaukseksi. */
export function accepts(s: Settings, q: Question, p: Position): boolean {
  if (!matches(q.midi, p.midi, q.check)) return false;
  if (s.mode === 'notes') return p.string === q.position.string;
  if (isDegreeMode(s)) return pool(s).some(member => positionKey(member) === positionKey(p));
  return true;
}
export function acceptedPositions(s: Settings, q: Question): Position[] {
  const area = practiceArea(s);
  return positions(area.strings, area.min, area.max).filter(p => accepts(s, q, p));
}

export type Mark = Position & { label: string; kind: 'answer' | 'anchor' | 'shape' | 'wrong' | 'playing' };
export type Hint = { marks: Mark[]; text: string };
const mark = (p: Position, label: string, kind: Mark['kind']): Mark => ({ ...p, label, kind });
const capital = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
/**
 * Vihje kahdella tasolla. Taso 1 on apupiste, josta vastauksen voi päätellä.
 * Taso 2 näyttää vastauksen.
 */
export function hintFor(s: Settings, q: Question, level: number): Hint {
  if (level <= 0) return { marks: [], text: '' };
  const full = level >= 2;
  const area = practiceArea(s);
  const board = positions(area.strings, area.min, area.max);
  const answers = acceptedPositions(s, q);
  if (s.mode === 'notes') {
    if (full) return { marks: answers.map(p => mark(p, q.name, 'answer')), text: `${q.name} on ${stringOn[q.position.string]}: ${fretName(q.position.fret)}.` };
    const first = board.find(p => p.string === q.position.string)!;
    const name = note(first.midi, s.flats);
    return { marks: [mark(first, name, 'anchor')],
      text: `Apupiste: ${stringOf[first.string]} ${first.fret === 0 ? 'vapaa sävel' : first.fret + '. nauhan sävel'} on ${name}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.` };
  }
  if (s.mode === 'ear-note') {
    return full ? { marks: [mark(q.position, q.name, 'answer')], text: `Sävel on ${q.name}.` }
      : { marks: [mark(q.position, '?', 'anchor')], text: `Sävel soi tässä kohdassa: ${stringName[q.position.string]}-kieli, ${fretName(q.position.fret)}.` };
  }
  if (s.mode === 'repeat') {
    return full ? { marks: answers.map(p => mark(p, note(p.midi, s.flats, q.check === 'pitch'), 'answer')), text: `Sävel on ${q.name}.` }
      : { marks: [], text: `Sävel löytyy ${stringFrom[q.position.string]}.` };
  }
  if (s.mode === 'interval') {
    const start = note(q.reference!, s.flats, true);
    const anchors = board.filter(p => p.midi === q.reference).map(p => mark(p, start, 'anchor'));
    return full ? { marks: [...anchors, ...answers.map(p => mark(p, note(p.midi, s.flats, true), 'answer'))],
        text: `${capital(INTERVALS[q.interval!])} ${q.direction === 'up' ? 'ylöspäin' : 'alaspäin'}: ${start} → ${q.name}.` }
      : { marks: anchors, text: `Alkusävel ${start} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${q.direction === 'up' ? 'korkeampi' : 'matalampi'}.` };
  }
  const members = pool(s);
  const tones = tonesOf(s);
  const degreeOf = (p: Position) => tones.find(([iv]) => iv === pc(p.midi - s.root))?.[1] ?? '';
  const spelled = spell(s.root, q.interval!, q.degree!);
  const roots = members.filter(p => pc(p.midi - s.root) === 0);
  const isAnswer = (p: Position) => answers.some(a => positionKey(a) === positionKey(p));
  const solved = `${q.degree}. aste on ${spelled}.`;
  if (s.mode === 'caged') {
    return full ? { marks: members.map(p => mark(p, degreeOf(p), isAnswer(p) ? 'answer' : 'shape')), text: solved }
      : { marks: members.map(p => mark(p, '', 'shape')), text: `${s.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${q.degree}. aste?` };
  }
  const what = s.mode === 'scale' ? 'asteikon' : 'soinnun';
  if (q.choices === 'degree') {
    const same = members.filter(p => pc(p.midi) === pc(q.midi));
    if (full) return { marks: [...(q.interval === 0 ? [] : roots).map(p => mark(p, '1', 'anchor')), ...same.map(p => mark(p, q.degree!, 'answer'))], text: `${spelled} on ${q.degree}. aste.` };
    return q.interval === 0
      ? { marks: same.map(p => mark(p, spelled, 'shape')), text: `Katso ${what} nimeä: mikä on sen perussävel?` }
      : { marks: [...roots.map(p => mark(p, '1', 'anchor')), ...same.map(p => mark(p, spelled, 'shape'))],
        text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${spelled} kohdalle.` };
  }
  if (full) return { marks: [...roots.filter(p => !isAnswer(p)).map(p => mark(p, '1', 'anchor')), ...answers.map(p => mark(p, q.degree!, 'answer'))], text: solved };
  return q.interval === 0
    ? { marks: [], text: `1. aste on ${what} perussävel ${rootName(s.root)}.` }
    : { marks: roots.map(p => mark(p, '1', 'anchor')), text: `Apupiste: perussävelet (1). ${q.degree}. aste on ${q.interval} puoliaskelta perussävelen yläpuolella.` };
}

export type Phase = 'idle' | 'active' | 'paused' | 'feedback' | 'done';
export type Answer = 'ignored' | 'candidate' | 'wrong' | 'correct';
export type AnswerInput = 'mic' | 'board' | 'note' | 'degree';
export class PracticeEngine {
  phase: Phase = 'idle'; question?: Question; index = 0; results: Result[] = [];
  errors = 0; started = 0;
  /** 0 = ei vihjettä, 1 = apupiste, 2 = vastaus. Arvo ei laske kysymyksen aikana. */
  hintLevel = 0;
  /** Mikrofonin vakaat, tehtävästä eriävät havainnot tässä kysymyksessä. */
  mismatches = 0;
  /** Kierroksen pituus; 0 = vapaa harjoittelu. */
  readonly total: number;
  private pendingMismatch = false; private pausedAt = 0; private prior: Phase = 'active';
  readonly id = globalThis.crypto?.randomUUID?.() ?? String(Date.now()) + Math.random();
  constructor(readonly settings: Settings, private stats: () => Record<string,Stat>, private record: (r: Result) => void,
    private now = () => performance.now(), private random = Math.random) {
    this.total = roundLength(settings);
  }
  get isLast() { return this.total > 0 && this.index >= this.total; }
  /** Onko nykyiseen kysymykseen jo vastattu oikein (myös tauolla palautteen aikana). */
  get answered() { return this.index > 0 && this.results.at(-1)?.id === `${this.id}:${this.index}`; }
  start() { if (this.phase === 'idle') this.next(); }
  next() {
    if (!['idle','feedback'].includes(this.phase)) return;
    if (this.isLast) { this.phase = 'done'; return; }
    this.question = generate(this.settings, this.index, this.stats(), this.question, this.random);
    this.index++; this.errors = 0; this.mismatches = 0; this.pendingMismatch = false;
    this.hintLevel = autoHintLevel(this.settings, this.index);
    this.started = this.now(); this.phase = 'active';
  }
  pause() { if (['active','feedback'].includes(this.phase)) { this.prior = this.phase; this.pausedAt = this.now(); this.phase = 'paused'; } }
  resume() { if (this.phase === 'paused') { this.started += this.now() - this.pausedAt; this.phase = this.prior; } }
  /** Vihjeen käyttö jää voimaan, vaikka vihje piilotettaisiin näkyvistä. */
  useHint(level: number) { if (this.phase === 'active') this.hintLevel = Math.max(this.hintLevel, Math.min(2, Math.round(level))); }
  /** heldMs: kuinka kauan mikrofonin sävel oli soinut ennen hyväksymistä. Se ei kuulu vastausaikaan. */
  answer(value: number, input: AnswerInput, position?: Position, heldMs = 0): Answer {
    if (this.phase !== 'active' || !this.question) return 'ignored';
    const q = this.question;
    const correct = input === 'degree' ? value === q.interval
      : input === 'note' ? matches(q.midi, value, 'class')
        : input === 'board' ? !!position && accepts(this.settings, q, position)
          : matches(q.midi, value, q.check);
    if (!correct) {
      // Mikrofonin eriävä havainto voi olla ylä-ääni tai resonanssi: se ei ole virhe ilman vahvistusta.
      if (input === 'mic') { this.mismatches++; this.pendingMismatch = true; return 'candidate'; }
      this.errors++; return 'wrong';
    }
    const clicked = input === 'board' ? position : undefined;
    const result: Result = { id: `${this.id}:${this.index}`,
      item: clicked && this.settings.mode === 'notes' ? `notes:${positionKey(clicked)}` : q.item,
      mode: this.settings.mode, input, check: q.check, expected: q.midi, played: value,
      first: this.errors === 0, errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, heldMs)),
      hint: this.hintLevel > 0, hintLevel: this.hintLevel, mismatches: this.mismatches, at: Date.now() };
    if (clicked) result.position = positionKey(clicked);
    else if (this.settings.mode === 'notes') result.position = positionKey(q.position);
    this.results.push(result); this.record(result); this.phase = 'feedback'; return 'correct';
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() { if (this.phase === 'active' && this.pendingMismatch) { this.errors++; this.pendingMismatch = false; } }
  stop() { this.phase = 'done'; }
}
export type Summary = { count: number; first: number; solo: number; soloFirst: number; guided: number; ms: number };
export function summarize(results: Pick<Result, 'first' | 'hint' | 'ms'>[]): Summary {
  const solo = results.filter(r => !r.hint);
  return { count: results.length, first: results.filter(r => r.first).length, solo: solo.length,
    soloFirst: solo.filter(r => r.first).length, guided: results.length - solo.length, ms: results.reduce((n, r) => n + r.ms, 0) };
}
