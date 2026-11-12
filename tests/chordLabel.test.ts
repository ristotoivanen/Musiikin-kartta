import { describe, expect, it } from 'vitest';
import { chordLabel, powerChord } from '../harjoittelija/chordLabel';
import { SONG_CHARTS } from '../harjoittelija/songChart';

describe('Power-sointumerkinnät', () => {
  it('muuntaa kappaleen soinnut säilyttäen juuren ja etumerkin', () => {
    expect(['Gm', 'F', 'B♭', 'E♭', 'Dm', 'C'].map(powerChord)).toEqual(['G5', 'F5', 'B♭5', 'E♭5', 'D5', 'C5']);
  });
  it('säilyttää epävarmuusmerkin ja käsittelee muutkin sointutyypit', () => {
    expect(powerChord('Dm?')).toBe('D5?');
    expect(powerChord('F♯m7')).toBe('F♯5');
    expect(powerChord('Bbmaj7')).toBe('Bb5');
    expect(powerChord('C#dim')).toBe('C#5');
    expect(powerChord('Am7♭5')).toBe('A5');
    expect(powerChord('E7♯9')).toBe('E5');
    expect(powerChord('Dsus4')).toBe('D5');
    expect(powerChord('G5')).toBe('G5');
    expect(powerChord('D/F♯')).toBe('D5/F♯');
    expect(powerChord('?')).toBe('?');
    expect(powerChord('N.C.')).toBe('N.C.');
  });
  it('täydet soinnut näytetään sellaisenaan, eikä raakadata muutu', () => {
    const before = JSON.stringify(SONG_CHARTS);
    for (const chart of Object.values(SONG_CHARTS)) for (const section of chart) for (const bar of section.bars) {
      expect(chordLabel(bar.first, 'full')).toBe(bar.first);
      expect(chordLabel(bar.first, 'power')).toMatch(/^[A-G][♭♯]?5$/);
      if (bar.second) expect(chordLabel(bar.second, 'power')).toMatch(/^[A-G][♭♯]?5$/);
    }
    expect(JSON.stringify(SONG_CHARTS)).toBe(before);
  });
});
