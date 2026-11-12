import { describe, expect, it } from 'vitest';
import { getSeventhVoicings, hasSeventhVoicing } from '../assets/seventh-voicings.js';

const OPEN_PITCHES = [64, 59, 55, 50, 45, 40]; // e4, B3, G3, D3, A2, E2

describe('Siirrettävät seiskasointuotteet', () => {
  it.each([
    ['maj7', [0, 4, 7, 11]],
    ['7', [0, 4, 7, 10]],
    ['m7', [0, 3, 7, 10]],
    ['m7b5', [0, 3, 6, 10]],
    ['dim7', [0, 3, 6, 9]],
    ['7#5', [0, 4, 8, 10]],
    ['7b5', [0, 4, 6, 10]],
    ['mMaj7', [0, 3, 7, 11]],
  ] as const)('%s sisältää oikeat sävelet kaikilla 12 juurisävelellä', (quality, expectedIntervals) => {
    expect(hasSeventhVoicing(quality)).toBe(true);

    for (let root = 0; root < 12; root++) {
      const voicings = getSeventhVoicings(root, quality, 17, OPEN_PITCHES);
      expect(voicings.map(voicing => voicing.rootString)).toEqual([6, 5]);

      for (const { rootString, rootFret, strings } of voicings) {
        expect(strings).toHaveLength(6);
        expect(strings[rootString - 1]).toBe(rootFret);
        const mutedStrings = strings.flatMap((fret, index) => fret === null ? [index + 1] : []);
        expect(mutedStrings).toEqual(rootString === 6 ? [1, 5] : [1, 6]);

        const pitches = strings.flatMap((fret, index) => fret === null ? [] : [OPEN_PITCHES[index] + fret]);
        const lowestPitch = Math.min(...pitches);
        expect(lowestPitch % 12).toBe(root);
        expect(pitches.map(pitch => (pitch - lowestPitch) % 12).sort((a, b) => a - b))
          .toEqual(expectedIntervals);
        expect(strings.every(fret => fret === null || (fret >= 0 && fret <= 17))).toBe(true);
      }
    }
  });

  it('sijoittaa Am7b5-otteen soivat kielet vahvistetuille nauhoille', () => {
    const voicings = getSeventhVoicings(9, 'm7b5', 17, OPEN_PITCHES);
    expect(voicings.map(({ strings }) => [...strings].reverse())).toEqual([
      [5, null, 5, 5, 4, null],
      [null, 0, 1, 0, 1, null],
    ]);
  });

  it('siirtää E-juurisen Em7b5-otteen oktaavia ylemmäs, jos se mahtuu', () => {
    expect(getSeventhVoicings(4, 'm7b5', 12, OPEN_PITCHES)[0]).toEqual({
      rootString: 6, rootFret: 12, strings: [null, 11, 12, 12, null, 12],
    });
    expect(getSeventhVoicings(4, 'm7b5', 11, OPEN_PITCHES).map(voicing => voicing.rootString)).toEqual([5]);
  });

  it('jättää nauharajan ylittävän otteen pois, vaikka juurisävel mahtuu', () => {
    const narrow = getSeventhVoicings(8, 'maj7', 12, OPEN_PITCHES);
    expect(narrow.map(voicing => voicing.rootString)).toEqual([6]);
    const wider = getSeventhVoicings(8, 'maj7', 13, OPEN_PITCHES);
    expect(wider.map(voicing => voicing.rootString)).toEqual([6, 5]);
    expect(getSeventhVoicings(8, 'maj7', 17, OPEN_PITCHES)).toEqual(wider);
    expect(getSeventhVoicings(9, 'maj7', 0, OPEN_PITCHES)).toEqual([]);
  });

  it('sijoittaa Adim7- ja C7#5-otteet samoille kielille kuin muut seiskasoinnut', () => {
    const frets = (root: number, quality: string) => getSeventhVoicings(root, quality, 17, OPEN_PITCHES)
      .map(({ strings }) => [...strings].reverse());
    // A-juurinen Adim7 ei mahdu vapaaseen asemaan (G-kielen ♭♭7 menisi satulan taakse), joten se siirtyy oktaavia ylös.
    expect(frets(9, 'dim7')).toEqual([[5, null, 4, 5, 4, null], [null, 12, 13, 11, 13, null]]);
    expect(frets(0, '7#5')).toEqual([[8, null, 8, 9, 9, null], [null, 3, 6, 3, 5, null]]);
    expect(frets(0, '7b5')).toEqual([[8, null, 8, 9, 7, null], [null, 3, 4, 3, 5, null]]);
    expect(frets(0, 'mMaj7')).toEqual([[8, null, 9, 8, 8, null], [null, 3, 5, 4, 4, null]]);
  });

  it.each(['maj9', '9', ''])('ei määrittele tuntemattoman laadun "%s" otetta', quality => {
    expect(hasSeventhVoicing(quality)).toBe(false);
    expect(getSeventhVoicings(9, quality, 17, OPEN_PITCHES)).toEqual([]);
  });
});
