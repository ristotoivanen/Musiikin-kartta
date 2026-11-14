import { noteToMidi } from '../harjoittelija/music';
import { chord, endingExcerpt, renderArrangement, renderArrangementBand, SONG_TAIL, type Arrangement, type DemoEnding } from './arrangement';
import { approvedSongs } from './approved-songs';
import { backings } from './theory';

export const demoEndings = { A: 'G#4', B: 'A4', C: 'B4' } as const;
export type { DemoEnding } from './arrangement';

const beat = 60 / 100;
const bar = 4 * beat;
export const DEMO_DURATION = 4 * bar + SONG_TAIL;
export const DEMO_EXCERPT = 2 * bar;

const minorHarmony = [
  { ...backings.Am, fifth: noteToMidi('E3') },
  { bass: noteToMidi('D2'), voicing: ['A2', 'D3', 'F3'].map(noteToMidi), fifth: noteToMidi('A2') },
  { ...backings.E7, fifth: noteToMidi('B2') },
  { ...backings.Am, fifth: noteToMidi('E3') },
];
const minorMelody = ['A3', 'C4', 'E4', 'C4', 'D4', 'F4', 'E4', 'D4', 'E4', 'G#4', 'B4', 'G#4'];
const majorHarmony = [
  chord('G2', 'D3', ['B2', 'D3', 'G3']),
  chord('C3', 'G2', ['E3', 'G3', 'C4']),
  chord('D2', 'A2', ['A2', 'C3', 'F#3']),
  chord('G2', 'D3', ['B2', 'D3', 'G3']),
];
const majorMelody = [
  ['B4', 0, 1.5], ['A4', 1.5, .5], ['G4', 2, 2],
  ['E4', 4, 1], ['G4', 5, 1], ['C5', 6, 1.5], ['B4', 7.5, .5],
  ['A4', 8, 1], ['C5', 9, 1], ['A4', 10, 1], ['F#4', 11, 1],
] satisfies [string, number, number][];

export const gigs = {
  1: { title: 'Löydä kotiin', keyName: 'A-molli', root: 'A', endings: { A: 'Bb4', B: 'A4', C: 'Eb5' }, target: 'B' },
  2: { title: 'Uusi kotisävel', keyName: 'G-duuri', root: 'G', endings: { A: 'Db5', B: 'Ab4', C: 'G4' }, target: 'C' },
  ...approvedSongs,
} satisfies Record<number, { title: string; keyName: string; root: string; endings: Record<DemoEnding, string>; target: DemoEnding }>;
export type Gig = keyof typeof gigs;
const arrangements: Record<Gig, Arrangement> = {
  1: { harmony: minorHarmony, melody: minorMelody.map((note, index): [string, number, number] => [note, index, 1]) },
  2: { harmony: majorHarmony, melody: majorMelody },
  3: approvedSongs[3].arrangement,
  4: approvedSongs[4].arrangement,
  5: approvedSongs[5].arrangement,
};

export function renderDemoBand(rate: number, gig: Gig = 1) {
  return renderArrangementBand(arrangements[gig], rate);
}

export function renderDemo(ending: DemoEnding, rate: number) {
  return renderArrangement(arrangements[1], demoEndings[ending], rate);
}

export function gigExcerpt(gig: Gig) {
  return endingExcerpt(arrangements[gig]);
}

export function renderGig(gig: Gig, ending: DemoEnding | null, rate: number) {
  return renderArrangement(arrangements[gig], ending === null ? null : gigs[gig].endings[ending], rate);
}
