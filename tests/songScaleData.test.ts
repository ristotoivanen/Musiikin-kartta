import { describe, expect, it } from 'vitest';
import { music } from '../harjoittelija/music';
import { CHORD_TONES, SONG_SCALES, scalePitchClasses, songChords, songScaleNotes } from '../harjoittelija/songScaleData';

const scale = (id: string) => SONG_SCALES.find(item => item.id === id)!.scale;

describe('Yksi sointu, kaksi askelta: kappaleeseen sopivat asteikot', () => {
  it('tarjoaa vain G-mollipentatonisen, G-bluesin ja G-luonnollisen mollin oikeilla sävelillä', () => {
    expect(SONG_SCALES.map(item => item.title)).toEqual([
      'G-mollipentatoninen', 'G-bluesasteikko', 'G-luonnollinen molli (aiolinen)',
    ]);
    expect(songScaleNotes(scale('mp'))).toEqual(['G', 'B♭', 'C', 'D', 'F']);
    expect(songScaleNotes(scale('blues'))).toEqual(['G', 'B♭', 'C', 'D♭', 'D', 'F']);
    expect(songScaleNotes(scale('aeolian'))).toEqual(['G', 'A', 'B♭', 'C', 'D', 'E♭', 'F']);
    expect(SONG_SCALES.map(item => item.system)).toEqual(['pentatonic', 'pentatonic', '3nps']);
  });

  it('perustuu molempien versioiden todellisiin sointuihin', () => {
    expect(songChords().sort()).toEqual(['B♭', 'C', 'Dm', 'E♭', 'F', 'Gm']);
    const aeolian = scalePitchClasses(scale('aeolian'));
    // Kaikki sointusävelet kuuluvat G-mollin asteikkoon paitsi kitarasoolon C-soinnun E.
    const outside = songChords().flatMap(chord => CHORD_TONES[chord].filter(pc => !aeolian.includes(pc)).map(pc => chord + ':' + pc));
    expect(outside).toEqual(['C:4']);
    // Pentatonisessa ei ole E:tä eikä E♭:ta, joten se ei hankaa E♭- eikä C-sointua vastaan.
    const pentatonic = scalePitchClasses(scale('mp'));
    expect(pentatonic.every(pc => aeolian.includes(pc))).toBe(true);
    expect(pentatonic).not.toContain(3);
    expect(pentatonic).not.toContain(4);
    // G-doorisen E olisi ristiriidassa toistuvan E♭-soinnun kanssa, joten sitä ei tarjota.
    expect(scalePitchClasses(music.SCALES.dorian)).toContain(4);
    expect(SONG_SCALES.some(item => item.scale === music.SCALES.dorian)).toBe(false);
  });

  it('bluessävel D♭ on merkitty lisäsäveleksi eikä asteikon perussäveleksi', () => {
    expect(scale('blues').add).toEqual([[6, '♭5']]);
    expect(scale('blues').base).toBe(music.SCALES.mp.base);
  });
});
