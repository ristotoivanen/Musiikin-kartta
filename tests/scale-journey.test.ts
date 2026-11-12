import { describe, expect, it } from 'vitest';
import { music } from '../harjoittelija/music';

describe('A-mollipentatonisen positio 2', () => {
  const first = music.fingeringBoxes(9, music.SCALES.mp, 'pentatonic', [1])[0].positions[0];
  const second = music.fingeringBoxes(9, music.SCALES.mp, 'pentatonic', [2])[0].positions[0];

  it('käyttää oikeaa 7–10. nauhojen sormitusta ja liittyy positioon 1', () => {
    expect(second.start).toBe(7);
    expect(second.end).toBe(10);
    // Kielet ohuesta e:stä paksuun E:hen, samoin kuin Board-komponentissa.
    expect(second.strings).toEqual([
      [8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10],
    ]);
    expect(second.strings.map(frets => frets[0]))
      .toEqual(first.strings.map(frets => frets[1]));
  });

  it('sisältää vain A-mollipentatonisen säveliä, kaksi A-pohjasäveltä ja mallifraasin', () => {
    const mids = second.strings.flatMap((frets, string) =>
      frets.map(fret => music.OPEN_PITCHES[string] + fret));
    expect(mids).toHaveLength(12);
    expect([...new Set(mids.map(midi => midi % 12))].sort((a, b) => a - b))
      .toEqual([0, 2, 4, 7, 9]);
    const roots = second.strings.flatMap((frets, string) =>
      frets.filter(fret => (music.OPEN_PITCHES[string] + fret) % 12 === 9)
        .map(fret => `${string}:${fret}`));
    expect(roots).toEqual(['1:10', '3:7']);
    for (const midi of [69, 72, 74, 72, 69, 67, 69]) {
      expect(mids).toContain(midi);
    }
  });
});
