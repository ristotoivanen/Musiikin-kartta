import { music } from './music';
export type Mode = 'notes' | 'ear-note' | 'repeat' | 'scale' | 'chord' | 'caged' | 'interval';
export type Settings = {
  mode: Mode; strings: number[]; min: number; max: number; accidentals: boolean; flats: boolean;
  check: 'class' | 'pitch'; input: 'mic' | 'board'; rounds: number; weak: boolean;
  root: number; scale: string; box: number; order: 'random' | 'up' | 'down';
  chord: 'maj' | 'min' | 'dom7'; chordTone: string; shape: string;
  intervals: number[]; direction: 'up' | 'down' | 'both';
  hints: 'always' | 'fade' | 'off'; activity: 'play' | 'degree';
  minRms: number; clarity: number; stability: number; cents: number; device: string;
};
export const defaults: Settings = {
  mode: 'notes', strings: [0,1,2,3,4,5], min: 0, max: 5, accidentals: false, flats: false,
  check: 'class', input: 'board', rounds: 10, weak: true, root: 9, scale: 'mp', box: 0,
  order: 'random', chord: 'maj', chordTone: 'build', shape: 'E', intervals: [3,4,7],
  direction: 'both', hints: 'fade', activity: 'play', minRms: .01, clarity: .94,
  stability: 240, cents: 35, device: '',
};
const clamp = (v: unknown, lo: number, hi: number, fallback: number) =>
  typeof v === 'number' && Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : fallback;
const choose = <T extends string>(v: unknown, choices: readonly T[], fallback: T): T =>
  choices.includes(v as T) ? v as T : fallback;
export function sanitize(raw: Partial<Settings>): Settings {
  const s = { ...defaults };
  s.mode = choose(raw.mode, ['notes','ear-note','repeat','scale','chord','caged','interval'], s.mode);
  s.strings = Array.isArray(raw.strings) ? [...new Set(raw.strings.filter(v => Number.isInteger(v) && v >= 0 && v <= 5))] : s.strings;
  if (!s.strings.length) s.strings = [...defaults.strings];
  s.min = Math.round(clamp(raw.min, 0, 24, s.min));
  s.max = Math.round(clamp(raw.max, s.min, 24, Math.max(s.min, s.max)));
  for (const key of ['accidentals','flats','weak'] as const) if (typeof raw[key] === 'boolean') s[key] = raw[key];
  s.check = choose(raw.check, ['class','pitch'], s.check);
  s.input = choose(raw.input, ['mic','board'], s.input);
  s.rounds = [0,10,20].includes(raw.rounds!) ? raw.rounds! : s.rounds;
  s.root = Math.round(clamp(raw.root, 0, 11, s.root));
  s.scale = typeof raw.scale === 'string' && Object.hasOwn(music.SCALES, raw.scale) ? raw.scale : s.scale;
  s.box = Math.round(clamp(raw.box, 0, 5, s.box));
  s.order = choose(raw.order, ['random','up','down'], s.order);
  s.chord = choose(raw.chord, ['maj','min','dom7'], s.chord);
  s.chordTone = choose(raw.chordTone, ['build','random','1','3','5','7'], s.chordTone);
  if (s.chord !== 'dom7' && s.chordTone === '7') s.chordTone = 'build';
  s.shape = choose(raw.shape, ['C','A','G','E','D'], s.shape);
  s.intervals = Array.isArray(raw.intervals) ? [...new Set(raw.intervals.filter(v => Number.isInteger(v) && v >= 1 && v <= 12))] : s.intervals;
  if (!s.intervals.length) s.intervals = [...defaults.intervals];
  s.direction = choose(raw.direction, ['up','down','both'], s.direction);
  s.hints = choose(raw.hints, ['always','fade','off'], s.hints);
  s.activity = choose(raw.activity, ['play','degree'], s.activity);
  s.minRms = clamp(raw.minRms, .001, .15, s.minRms);
  s.clarity = clamp(raw.clarity, .85, .99, s.clarity);
  s.stability = clamp(raw.stability, 120, 800, s.stability);
  s.cents = clamp(raw.cents, 10, 45, s.cents);
  s.device = typeof raw.device === 'string' ? raw.device.slice(0,256) : '';
  return s;
}
export function fromURL(search: string, initial: Settings): Settings {
  const p = new URLSearchParams(search);
  const raw: Partial<Settings> = { ...initial };
  for (const [url, key] of [['tila','mode'],['asteikko','scale'],['tarkistus','check'],['muoto','shape'],['sointu','chord'],['jarjestys','order'],['vastaus','input'],['vihjeet','hints'],['tehtava','activity'],['sointuaste','chordTone'],['suunta','direction']] as const)
    if (p.has(url)) Object.assign(raw, { [key]: p.get(url) });
  for (const [url,key] of [['alku','min'],['loppu','max'],['boksi','box'],['kierros','rounds']] as const)
    if (p.has(url)) raw[key] = Number(p.get(url));
  if (p.has('kielet')) raw.strings = p.get('kielet')!.split(',').map(n => Number(n)-1);
  if (p.has('intervallit')) raw.intervals = p.get('intervallit')!.split(',').map(Number);
  for (const [url,key] of [['kromaattinen','accidentals'],['alennukset','flats'],['kertaus','weak']] as const)
    if (p.has(url)) raw[key] = p.get(url) === '1';
  if (p.has('toonikka')) {
    const token = p.get('toonikka')!.replace('#','♯').replace('b','♭');
    const names = ['C','D♭','D','E♭','E','F','G♭','G','A♭','A','B♭','B'];
    const root = Math.max(music.CHROM.indexOf(token), names.indexOf(token), ['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'].indexOf(token));
    if (root >= 0) raw.root = root;
  }
  return sanitize(raw);
}
export function settingsURL(s: Settings): string {
  return 'kitaraharjoittelija.html?' + new URLSearchParams({ tila: s.mode, toonikka: music.CHROM[s.root], asteikko: s.scale,
    alku: String(s.min), loppu: String(s.max), boksi: String(s.box), kierros: String(s.rounds),
    tarkistus: s.check, muoto: s.shape, sointu: s.chord, jarjestys: s.order,
    vastaus: s.input, vihjeet: s.hints, tehtava: s.activity, sointuaste: s.chordTone,
    suunta: s.direction, kielet: s.strings.map(i=>i+1).join(','), intervallit: s.intervals.join(','),
    kromaattinen: s.accidentals ? '1':'0', alennukset: s.flats ? '1':'0', kertaus: s.weak ? '1':'0' });
}
export const answerInput = (s: Settings) => s.mode === 'ear-note' ? 'note' : ['scale','chord'].includes(s.mode) && s.activity === 'degree' ? 'degree' : s.input;
export const answerCheck = (s: Settings) => ['note','degree'].includes(answerInput(s)) ? 'class' : s.check;
