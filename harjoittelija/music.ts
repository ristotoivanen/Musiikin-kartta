import '../assets/otelauta.js';
export { midiToFreq, freqToMidi, nearestMidi, noteToMidi } from './vendor/notes';

export type Scale = { name: string; base: [number, string][]; add: [number, string][] };
export type Box = { strings: number[][]; start: number; end: number; partial?: boolean };
declare global {
  var MusicMapFretboard: {
    OPEN_PITCHES: number[]; CHROM: string[]; SCALES: Record<string, Scale>;
    scaleNotes(scale: Scale): [number, string][];
    noteName(root: number, interval: number, degree: string): string;
    fingeringBoxes(root: number, scale: Scale, system: string, numbers: number[], frets?: number): { number: number; positions: Box[] }[];
    chordGrip(root: number, quality: string): { frets: (number | null)[] } | null;
    /** Otelautakartan SVG-otelauta (sama ulkoasu ja sävelmerkinnät kuin otelautaharjoittelija.html:ssä). */
    renderBoard(root: number, scale: Scale, fretCount: number, options?: {
      boxes?: { number: number; positions: Box[] }[]; onlyBoxNotes?: boolean; automatic?: boolean; label?: string;
    }): string;
    revealPositions(board: Element, selector: string): void;
  };
}
/** Yhteinen musiikkikirjasto: sama laskenta kuin otelautaharjoittelijassa ja oppaassa. */
export const music = globalThis.MusicMapFretboard;
export const pc = (midi: number) => ((midi % 12) + 12) % 12;
const sharp = ['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];
const flat = ['C','D♭','D','E♭','E','F','G♭','G','A♭','A','B♭','B'];
/** Sävelnimi ilman sävellajiyhteyttä: käyttäjän valitsema ylennys- tai alennusmerkintä. */
export const note = (midi: number, flats = false, octave = false) =>
  (flats ? flat : sharp)[pc(midi)] + (octave ? Math.floor(midi / 12) - 1 : '');
/** Toonikan tai soinnun perussävelen nimi kirjoitetaan aina kuten muualla sivustolla. */
export const rootName = (root: number) => music.CHROM[pc(root)];
/** Asteen sävelnimi sävellajin mukaan kirjoitettuna (esim. A♭-duurin 3. aste on C, C♯-duurin 7. on B♯). */
export const spell = (root: number, interval: number, degree: string) => music.noteName(pc(root), interval, degree);
/** Oktaavinumero kirjoitetun nimen mukaan: B♯3 soi samalla korkeudella kuin C4. */
export function octaveOf(midi: number, name: string): number {
  const octave = Math.floor(midi / 12) - 1;
  if (name[0] === 'B' && pc(midi) < 2) return octave - 1;
  if (name[0] === 'C' && pc(midi) > 9) return octave + 1;
  return octave;
}
export const stringName = ['ohut E', 'B', 'G', 'D', 'A', 'paksu E'];
/** Taivutetut muodot kysymyksiin: ”Etsi E D-kieleltä”, ”sävel on D-kielellä”. */
export const stringFrom = ['ohuelta E-kieleltä', 'B-kieleltä', 'G-kieleltä', 'D-kieleltä', 'A-kieleltä', 'paksulta E-kieleltä'];
export const stringOn = ['ohuella E-kielellä', 'B-kielellä', 'G-kielellä', 'D-kielellä', 'A-kielellä', 'paksulla E-kielellä'];
export const stringOf = ['ohuen E-kielen', 'B-kielen', 'G-kielen', 'D-kielen', 'A-kielen', 'paksun E-kielen'];
export const fretName = (fret: number) => fret === 0 ? 'vapaa kieli' : `${fret}. nauha`;
export type Position = { string: number; fret: number; midi: number };
export const at = (string: number, fret: number): Position => ({ string, fret, midi: music.OPEN_PITCHES[string] + fret });
export function positions(strings: number[], min: number, max: number): Position[] {
  return [...strings].sort((a, b) => a - b).flatMap(string =>
    Array.from({ length: Math.max(0, max - min + 1) }, (_, i) => at(string, min + i)));
}
export const positionKey = (p: Pick<Position, 'string' | 'fret'>) => `${p.string}:${p.fret}`;
export const CHORDS = {
  maj: { name: 'Duuri', suffix: '', tones: [[0,'1'],[4,'3'],[7,'5']] },
  min: { name: 'Molli', suffix: 'm', tones: [[0,'1'],[3,'♭3'],[7,'5']] },
  dom7: { name: 'Dominanttiseptimi', suffix: '7', tones: [[0,'1'],[4,'3'],[7,'5'],[10,'♭7']] },
} satisfies Record<string, { name: string; suffix: string; tones: [number, string][] }>;
export type ChordType = keyof typeof CHORDS;
export const chordLabel = (root: number, chord: ChordType) =>
  chord === 'maj' ? `${rootName(root)}-duurisointu` : chord === 'min' ? `${rootName(root)}-mollisointu` : `${rootName(root)}7-sointu`;
export const INTERVALS = [
  'priimi', 'pieni sekunti', 'suuri sekunti', 'pieni terssi', 'suuri terssi', 'puhdas kvartti',
  'tritonus', 'puhdas kvintti', 'pieni seksti', 'suuri seksti', 'pieni septimi', 'suuri septimi', 'oktaavi',
];
// CAGED-duurimuodot avosointuina ohuimmalta kieleltä paksuimmalle. Testi varmistaa, että
// ne ovat samat otteet kuin yhteisen otelautakirjaston avosoinnut C, A, G, E ja D.
export const CAGED_SHAPES: Record<string, { root: number; frets: (number | null)[] }> = {
  C: { root: 0, frets: [0,1,0,2,3,null] },
  A: { root: 9, frets: [0,2,2,2,0,null] },
  G: { root: 7, frets: [3,0,0,0,2,3] },
  E: { root: 4, frets: [0,0,1,2,2,0] },
  D: { root: 2, frets: [2,3,2,0,null,null] },
};
/** Muodon alin kokonainen sijainti kaulalla: avosointu tai sen siirretty versio. */
export function cagedPositions(root: number, shape: string): Position[] {
  const def = CAGED_SHAPES[shape] ?? CAGED_SHAPES.E;
  const shift = pc(root - def.root);
  return def.frets.flatMap((fret, string) => fret === null ? [] : [at(string, fret + shift)]);
}
