import { chord, type Arrangement, type DemoEnding } from './arrangement';

type ApprovedSong = {
  title: string;
  keyName: string;
  root: string;
  target: DemoEnding;
  endings: Record<DemoEnding, string>;
  arrangement: Arrangement & { tempo: number };
};

export const approvedSongs = {
  3: {
    title: 'Melodia löytää perille', keyName: 'C-duuri', root: 'C', target: 'A', endings: { A: 'C5', B: 'D5', C: 'Db5' },
    arrangement: {
      tempo: 108, comp: [0, 1.5, 2.5],
      harmony: [
        chord('C3', 'G2', ['E3', 'G3', 'C4']),
        chord('F2', 'C3', ['A3', 'C4', 'F3']),
        chord('G2', 'D3', ['B2', 'D3', 'F3']),
        chord('C3', 'G2', ['E3', 'G3', 'C4']),
      ],
      melody: [
        ['E4', 0, .5], ['G4', .5, .5], ['E4', 1, 1], ['G4', 2, 1.5],
        ['A4', 4, .5], ['C5', 4.5, 1], ['A4', 6, .5], ['F4', 6.5, 1],
        ['G4', 8, 1], ['A4', 9, .5], ['G4', 9.5, .5], ['F4', 10, 1], ['B4', 11, 1],
      ],
    },
  },
  4: {
    title: 'Mollin maisemat', keyName: 'E-molli', root: 'E', target: 'B', endings: { A: 'D5', B: 'E5', C: 'F#5' },
    arrangement: {
      tempo: 88, comp: [0, 2.5],
      harmony: [
        chord('E2', 'B2', ['G3', 'B3', 'E3']),
        chord('A2', 'E3', ['C3', 'E3', 'A3']),
        chord('B2', 'F#3', ['D#3', 'F#3', 'A3']),
        chord('E2', 'B2', ['G3', 'B3', 'E3']),
      ],
      melody: [
        ['E5', 0, 2], ['B4', 2, 1.5], ['G4', 3.5, .5],
        ['A4', 4, 1.5], ['E4', 5.5, .5], ['C5', 6, 2],
        ['B4', 8, 1.5], ['A4', 9.5, .5], ['F#4', 10, .5], ['B4', 10.5, 1], ['D#5', 11.5, .5],
      ],
    },
  },
  5: {
    title: 'Ensimmäinen finaali', keyName: 'D-duuri', root: 'D', target: 'C', endings: { A: 'A4', B: 'C#5', C: 'D5' },
    arrangement: {
      tempo: 116, comp: [0, 1, 2, 3],
      harmony: [
        chord('D2', 'A2', ['F#3', 'A3', 'D3']),
        chord('B2', 'D3', ['G3', 'B3', 'D4']),
        chord('A2', 'E3', ['C#3', 'E3', 'G3']),
        chord('D2', 'A2', ['F#3', 'A3', 'D3']),
      ],
      melody: [
        ['D4', 0, 1.5], ['F#4', 1.5, .5], ['A4', 2, .5], ['F#4', 2.5, .5], ['D5', 3, 1],
        ['B4', 4, .5], ['G4', 4.5, .5], ['D4', 5, 1], ['G4', 6, .5], ['B4', 6.5, 1.5],
        ['E5', 8, .5], ['G5', 8.5, .5], ['E5', 9, .5], ['C#5', 9.5, .5],
        ['A4', 10, 1], ['B4', 11, .5], ['C#5', 11.5, .5],
      ],
    },
  },
} satisfies Record<number, ApprovedSong>;
