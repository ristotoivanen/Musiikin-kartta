import { describe, expect, it } from 'vitest';
import { backingNames, backings, belongsTo, checkEnding, endingMidi, endings, phraseStart } from '../ensikeikka/theory';
import { pc } from '../harjoittelija/music';

describe('Ensikeikan soinnut ja fraasi', () => {
  it('uses the intended notes and gives each ending its own membership', () => {
    expect(backingNames).toEqual(['Am', 'E7']);
    expect(endings).toEqual(['C4', 'D4', 'E4']);
    expect(phraseStart).toEqual([60, 62]);
    expect(endingMidi).toEqual({ C4: 60, D4: 62, E4: 64 });
    expect(backings.Am.noteNames).toEqual(['A', 'C', 'E']);
    expect(backings.E7.noteNames).toEqual(['E', 'G♯', 'B', 'D']);
    expect(endings.map(ending => backingNames.map(backing => belongsTo(ending, backing)))).toEqual([
      [true, false],
      [false, true],
      [true, true],
    ]);
    expect(endings.filter(ending => checkEnding(ending).common)).toEqual(['E4']);
  });

  it('contains all and only the expected chord tones in the arrangement', () => {
    for (const { bass, voicing, pitchClasses } of Object.values(backings)) {
      expect(new Set([bass, ...voicing].map(pc))).toEqual(new Set(pitchClasses));
      expect(Math.max(...voicing)).toBeLessThan(endingMidi.C4);
    }
  });
});
