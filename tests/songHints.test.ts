import { describe, expect, it } from 'vitest';
import {
  CHORD_NAMES, DEFAULT_FADE_ORDER, DEFAULT_SONG_HINTS,
  isChordHidden, parseSongHintSettings,
} from '../harjoittelija/songHints';

describe('Kappaleharjoittelijan sointuvihjeiden häivytys', () => {
  it('näyttää kaikki oletuksena ja piilottaa soinnut kumulatiivisesti', () => {
    const expected = [
      [], ['Gm','F'], ['Gm','F','B♭','E♭'],
      ['Gm','F','B♭','E♭','Dm'], [...CHORD_NAMES],
    ];
    expected.forEach((names,level) => {
      const hints={ ...DEFAULT_SONG_HINTS, level: level as 0|1|2|3|4 };
      expect(CHORD_NAMES.filter(chord=>isChordHidden(chord,hints))).toEqual(names);
    });
  });
  it('erillinen Näytä soinnut -kytkin piilottaa kaikki ja palauttaa aikaisemman tason', () => {
    const settings={...DEFAULT_SONG_HINTS,level:1 as const,showChords:false};
    expect(CHORD_NAMES.every(name=>isChordHidden(name,settings))).toBe(true);
    const back={...settings,showChords:true};
    expect(isChordHidden('Gm',back)).toBe(true);
    expect(isChordHidden('C',back)).toBe(false);
  });
  it('käyttäjä voi vaihtaa tutuksi koettujen sointujen piilotusjärjestystä', () => {
    const customized={...DEFAULT_SONG_HINTS,level:1 as const,
      fadeOrder:{...DEFAULT_FADE_ORDER,Gm:4 as const,C:1 as const}};
    expect(isChordHidden('Gm',customized)).toBe(false);
    expect(isChordHidden('C',customized)).toBe(true);
    expect(isChordHidden('F',customized)).toBe(true);
  });
  it('tallennetut asetukset luetaan, poikkeavat syötteet korjataan turvallisesti', () => {
    const saved=parseSongHintSettings(JSON.stringify({
      showChords:false,level:3,fadeOrder:{Gm:4,F:1,'B♭':2, 'E♭':0,Dm:7,C:3},
    }));
    expect(saved.showChords).toBe(false);
    expect(saved.level).toBe(3);
    expect(saved.fadeOrder.Gm).toBe(4);
    expect(saved.fadeOrder['E♭']).toBe(2);
    expect(saved.fadeOrder.Dm).toBe(3);
    expect(saved.fadeOrder.C).toBe(3);
    expect(parseSongHintSettings('broken-json').level).toBe(0);
    expect(parseSongHintSettings('null').showChords).toBe(true);
    expect(parseSongHintSettings(JSON.stringify({level:111})).level).toBe(0);
  });
});
