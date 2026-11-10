import { CHORDS, INTERVALS, cagedPositions, music, note, pc, positionKey, positions, type Position } from './music';
import { answerCheck, answerInput, type Settings } from './settings';
import { statKey, weight, type Result, type Stat } from './storage';
export type Question = {
  position: Position; midi: number; item: string; prompt: string; degree?: string;
  interval?: number; reference?: number; sound: number[]; choices: 'note' | 'degree' | 'position';
};
export function pool(s: Settings): Position[] {
  let all = positions(s.strings, s.min, s.max);
  if (['notes','ear-note','repeat'].includes(s.mode)) return all.filter(p => s.accidentals || ![1,3,6,8,10].includes(pc(p.midi)));
  if (s.mode === 'caged') {
    const allowed = new Set(cagedPositions(s.root, s.shape).map(positionKey));
    return all.filter(p => allowed.has(positionKey(p)));
  }
  if (s.mode === 'chord') return all.filter(p => CHORDS[s.chord].tones.some(([iv]) => pc(p.midi - s.root) === iv));
  if (s.mode === 'scale') {
    const sc = music.SCALES[s.scale];
    all = all.filter(p => music.scaleNotes(sc).some(([iv]) => pc(p.midi - s.root) === iv));
    if (s.box) {
      // The old renderer and new practice pool use exactly the same box ranges.
      const boxes = music.fingeringBoxes(s.root, sc, 'pentatonic', [s.box], 24).flatMap(b => b.positions);
      all = all.filter(p => boxes.some(b => b.strings[p.string].length && p.fret >= b.strings[p.string][0] && p.fret <= b.strings[p.string].at(-1)!));
    }
  }
  return all;
}
export function weightedPick<T>(items: T[], weights: number[], random = Math.random): T {
  if (!items.length) throw new Error('Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.');
  let r = Math.min(.999999999, Math.max(0, random())) * weights.reduce((a,b) => a+b, 0);
  for (let i = 0; i < items.length; i++) { r -= weights[i]; if (r < 0) return items[i]; }
  return items.at(-1)!;
}
export function itemFor(s: Settings, p: Position, interval?: number, direction?: string) {
  if (s.mode === 'interval') return `interval:${interval}:${direction}`;
  if (s.mode === 'chord') return `chord:${s.root}:${s.chord}:${pc(p.midi - s.root)}:${s.activity}`;
  if (s.mode === 'scale') return `scale:${s.root}:${s.scale}:${positionKey(p)}:${s.activity}`;
  if (s.mode === 'caged') return `caged:${s.root}:${s.shape}:${positionKey(p)}`;
  return s.mode === 'ear-note' ? `ear-note:${pc(p.midi)}` : `${s.mode}:${positionKey(p)}`;
}
export function generate(s: Settings, index: number, stats: Record<string,Stat> = {}, previous?: Question, random = Math.random): Question {
  let eligible = pool(s);
  if (!eligible.length) weightedPick([], []);
  let interval: number | undefined;
  let reference: number | undefined;
  let direction = s.direction;
  if (s.mode === 'interval') {
    direction = direction === 'both' ? random() < .5 ? 'up' : 'down' : direction;
    const candidates = s.intervals.flatMap(iv => eligible.flatMap(p => eligible
      .filter(target => target.midi === p.midi + (direction === 'down' ? -iv : iv))
      .map(target => ({ iv, reference: p.midi, target }))));
    const choice = weightedPick(candidates, candidates.map(c => s.weak ? weight(stats[statKey({ input: answerInput(s), check: answerCheck(s), hint: false, item: itemFor(s,c.target,c.iv,direction) })]) : 1), random);
    interval = choice.iv; reference = choice.reference; eligible = [choice.target];
  }
  const tones = s.mode === 'scale' ? music.scaleNotes(music.SCALES[s.scale]) : CHORDS[s.mode === 'caged' ? 'maj' : s.chord].tones;
  if (s.mode === 'chord' && s.chordTone !== 'random') {
    const wanted = s.chordTone === 'build' ? tones[index % tones.length][0] : tones.find(([,degree]) => degree.endsWith(s.chordTone))?.[0];
    eligible = eligible.filter(p => pc(p.midi - s.root) === wanted);
  }
  let target: Position;
  if (s.mode === 'scale' && s.order !== 'random') {
    const ordered = [...new Map(eligible.sort((a,b) => a.midi-b.midi || a.string-b.string).map(p => [p.midi,p])).values()];
    if (s.order === 'down') ordered.reverse();
    target = weightedPick(ordered, ordered.map((_,i) => i === index % ordered.length ? 1 : 0), random);
  } else {
    if (eligible.length > 1) eligible = eligible.filter(p => positionKey(p) !== (previous && positionKey(previous.position)));
    target = weightedPick(eligible, eligible.map(p => s.weak ? weight(stats[statKey({ input: answerInput(s), check: answerCheck(s), hint: false, item: itemFor(s,p) })]) : 1), random);
  }
  const iv = pc(target.midi - s.root);
  const degree = tones.find(([i]) => i === iv)?.[1];
  const spelled = s.mode === 'scale' && degree ? music.noteName(s.root, iv, degree) : note(target.midi, s.flats);
  const pitchLabel = spelled + (s.check === 'pitch' ? Math.floor(target.midi / 12) - 1 : '');
  const string = ['ohuelta E','B','G','D','A','paksulta E'][target.string];
  let prompt = `Etsi ja soita ${pitchLabel} ${string}-kieleltä.`;
  let sound: number[] = [];
  let choices: Question['choices'] = 'position';
  if (s.mode === 'ear-note') { prompt = 'Kuuntele sävel. Mikä sävelnimi soi?'; sound = [target.midi]; choices = 'note'; }
  if (s.mode === 'repeat') { prompt = 'Kuuntele ja toista kuulemasi sävel kitaralla.'; sound = [target.midi]; }
  if (s.mode === 'scale') prompt = `Soita ${note(s.root, s.flats)}-${music.SCALES[s.scale].name}: ${degree}. aste${s.check === 'pitch' ? ` (${pitchLabel})` : ''}.`;
  if (s.mode === 'chord' || s.mode === 'caged') prompt = `Soita ${note(s.root,s.flats)}${CHORDS[s.mode === 'caged' ? 'maj' : s.chord].suffix}-soinnun ${degree}. aste${s.mode === 'caged' ? ` ${s.shape}-muodosta` : ''}${s.check === 'pitch' ? ` (${pitchLabel})` : ''}.`;
  if (['scale','chord'].includes(s.mode) && s.activity === 'degree') {
    prompt = `Mikä aste ${spelled} on ${note(s.root,s.flats)}${s.mode === 'scale' ? '-'+music.SCALES[s.scale].name+'-asteikossa' : CHORDS[s.chord].suffix+'-soinnussa'}?`;
    choices = 'degree';
  }
  if (s.mode === 'interval') {
    sound = [reference!, target.midi];
    prompt = `Kuuntele ${direction === 'down' ? 'laskeva' : 'nouseva'} intervalli. Toista jälkimmäinen sävel. Alkusävel on ${note(reference!,s.flats,true)}.`;
  }
  return { position: target, midi: target.midi, item: itemFor(s,target,interval,direction), prompt, degree,
    interval: s.mode === 'interval' ? interval : iv, reference, sound, choices };
}
export function matches(expected: number, actual: number, check: Settings['check']): boolean {
  return Number.isInteger(actual) && (check === 'class' ? pc(expected) === pc(actual) : expected === actual);
}
export type Phase = 'idle' | 'active' | 'paused' | 'feedback' | 'done';
export class PracticeEngine {
  phase: Phase = 'idle'; question?: Question; index = 0; results: Result[] = [];
  errors = 0; hinted = false; started = 0; private pausedAt = 0; private prior: Phase = 'active';
  readonly id = globalThis.crypto?.randomUUID?.() ?? String(Date.now()) + Math.random();
  constructor(readonly settings: Settings, private stats: () => Record<string,Stat>, private record: (r: Result) => void,
    private now = () => performance.now(), private random = Math.random) {}
  start() { if (this.phase === 'idle') this.next(); }
  next() {
    if (!['idle','feedback'].includes(this.phase)) return;
    if (this.settings.rounds && this.index >= this.settings.rounds) { this.phase = 'done'; return; }
    this.question = generate(this.settings, this.index, this.stats(), this.question, this.random);
    this.index++; this.errors = 0; this.hinted = false; this.started = this.now(); this.phase = 'active';
  }
  pause() { if (['active','feedback'].includes(this.phase)) { this.prior = this.phase; this.pausedAt = this.now(); this.phase = 'paused'; } }
  resume() { if (this.phase === 'paused') { this.started += this.now() - this.pausedAt; this.phase = this.prior; } }
  hint() { if (this.phase === 'active') this.hinted = true; }
  answer(value: number, input: 'mic' | 'board' | 'note' | 'degree', position?: Position): 'ignored' | 'candidate' | 'wrong' | 'correct' {
    if (this.phase !== 'active' || !this.question) return 'ignored';
    const q = this.question;
    const correct = input === 'degree' ? value === q.interval :
      input === 'board' && this.settings.mode === 'notes' ? !!position && position.string === q.position.string && matches(q.midi,value,this.settings.check) :
      input === 'board' && this.settings.mode === 'caged' ? !!position && pool(this.settings).some(p => positionKey(p) === positionKey(position)) && matches(q.midi,value,this.settings.check) :
      matches(q.midi,value,input === 'note' ? 'class' : this.settings.check);
    if (!correct) {
      if (input === 'mic') return 'candidate';
      this.errors++; return 'wrong';
    }
    const result: Result = { id: `${this.id}:${this.index}`, item: input === 'board' && position && this.settings.mode !== 'interval' ? itemFor(this.settings,position) : q.item, mode: this.settings.mode,
      input: q.choices === 'position' ? this.settings.input : q.choices,
      check: answerCheck(this.settings),
      expected: q.midi, played: value, first: this.errors === 0, errors: this.errors,
      ms: Math.max(0,this.now()-this.started), hint: this.hinted, at: Date.now(), position: positionKey(input === 'board' && position ? position : q.position) };
    this.results.push(result); this.record(result); this.phase = 'feedback'; return 'correct';
  }
  confirmWrong() { if (this.phase === 'active') this.errors++; }
  stop() { this.phase = 'done'; }
  get intervalName() { return this.question?.interval ? INTERVALS[this.question.interval] : ''; }
}
