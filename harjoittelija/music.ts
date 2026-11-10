import '../assets/otelauta.js';
export { midiToFreq, freqToMidi, nearestMidi, noteToMidi } from './vendor/notes';

export type Scale = { name: string; base: [number, string][]; add: [number, string][] };
type Box = { strings: number[][]; start: number; end: number };
declare global {
  var MusicMapFretboard: {
    OPEN_PITCHES: number[]; CHROM: string[]; SCALES: Record<string, Scale>;
    scaleNotes(scale: Scale): [number, string][];
    noteName(root: number, interval: number, degree: string): string;
    fingeringBoxes(root: number, scale: Scale, system: string, numbers: number[], frets: number): { positions: Box[] }[];
  };
}
export const music = globalThis.MusicMapFretboard;
export const pc = (midi: number) => ((midi % 12) + 12) % 12;
const sharp = ['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];
const flat = ['C','D♭','D','E♭','E','F','G♭','G','A♭','A','B♭','B'];
export const note = (midi: number, flats = false, octave = false) =>
  (flats ? flat : sharp)[pc(midi)] + (octave ? Math.floor(midi / 12) - 1 : '');
export const stringName = ['ohut E', 'B', 'G', 'D', 'A', 'paksu E'];
export type Position = { string: number; fret: number; midi: number };
export function positions(strings: number[], min: number, max: number): Position[] {
  return strings.flatMap(string => Array.from({ length: max - min + 1 }, (_, i) =>
    ({ string, fret: min + i, midi: music.OPEN_PITCHES[string] + min + i })));
}
export const positionKey = (p: Position) => `${p.string}:${p.fret}`;
export const CHORDS = {
  maj: { name: 'Duuri', suffix: '', tones: [[0,'1'],[4,'3'],[7,'5']] },
  min: { name: 'Molli', suffix: 'm', tones: [[0,'1'],[3,'♭3'],[7,'5']] },
  dom7: { name: 'Dominanttiseptimi', suffix: '7', tones: [[0,'1'],[4,'3'],[7,'5'],[10,'♭7']] },
} satisfies Record<string, { name: string; suffix: string; tones: [number, string][] }>;
export const INTERVALS = [
  '', 'pieni sekunti', 'suuri sekunti', 'pieni terssi', 'suuri terssi', 'puhdas kvartti',
  'tritonus', 'puhdas kvintti', 'pieni seksti', 'suuri seksti', 'pieni septimi', 'suuri septimi', 'oktaavi',
];
// CAGED-duurimuodot. Kielijärjestys sama kuin yhteisessä otelautakirjastossa.
const SHAPES: Record<string, { root: number; frets: (number | null)[] }> = {
  C: { root: 0, frets: [0,1,0,2,3,null] },
  A: { root: 9, frets: [0,2,2,2,0,null] },
  G: { root: 7, frets: [3,0,0,0,2,3] },
  E: { root: 4, frets: [0,0,1,2,2,0] },
  D: { root: 2, frets: [2,3,2,0,null,null] },
};
export function cagedPositions(root: number, shape: string): Position[] {
  const def = SHAPES[shape];
  const shift = pc(root - def.root);
  return [shift, shift + 12].flatMap(offset => def.frets.flatMap((fret, string) =>
    fret === null || fret + offset > 24 ? [] : [{ string, fret: fret + offset, midi: music.OPEN_PITCHES[string] + fret + offset }]));
}
