import { describe, expect, it } from 'vitest';
import { ACOUSTIC_CHART, barStartTime, chordAt, sectionBarDuration } from '../harjoittelija/songChart';

describe('Yksi sointu, kaksi askelta: akustinen sointukartta', () => {
  it('sisältää annetut osiot, aloitukset ja tahtimäärät', () => {
    expect(ACOUSTIC_CHART.map(s=>s.start)).toEqual([0,14,43,65,72,101,122,151,179,201]);
    expect(ACOUSTIC_CHART.map(s=>s.bars.length)).toEqual([4,8,6,2,8,6,8,8,6,7]);
  });
  it('vaihtaa tavallisen kahden soinnun tahdin puolivälissä', () => {
    const half=sectionBarDuration(0)/2;
    expect(chordAt(half-0.01).chord).toBe('Gm');
    expect(chordAt(half+0.01).chord).toBe('F');
    expect(chordAt(3.5).chord).toBe('Gm');
  });
  it('väliosassa soinnut ovat tahtien alussa Gm Dm F C Gm Dm E♭ F', () => {
    const section=ACOUSTIC_CHART[6];
    expect(section.bars.map(b=>b.first)).toEqual(['Gm','Dm','F','C','Gm','Dm','E♭','F']);
    for (let i=0;i<section.bars.length;i++) {
      expect(chordAt(barStartTime(6,i)+0.05).chord).toBe(section.bars[i].first);
    }
  });
  it('kertosäkeiden loput ovat keskenään erilaiset', () => {
    expect(ACOUSTIC_CHART[2].bars.slice(4)).toEqual([
      {first:'E♭'}, {first:'E♭',passingBass:'F'},
    ]);
    expect(ACOUSTIC_CHART[5].bars.slice(4)).toEqual([{first:'E♭'},{first:'F'}]);
    expect(ACOUSTIC_CHART[8].bars.slice(4)).toEqual([
      {first:'E♭',second:'F'}, {first:'Gm'},
    ]);
    // Kertosäkeen 1 viimeisen iskun F on basson kulkuääni, ei vahvistettu F-sointu.
    expect(chordAt(barStartTime(2,5)+0.95*sectionBarDuration(2)).chord).toBe('E♭');
  });
  it('outrossa epävarmaa Dm:ää ei näytetä vahvistettuna sointuna', () => {
    const outro=ACOUSTIC_CHART[9];
    expect(outro.bars[1].possibleChord).toBe('Dm');
    expect(outro.bars[4].possibleChord).toBe('Dm');
    expect(chordAt(barStartTime(9,1)+0.9).chord).toBe('Gm');
    expect(chordAt(barStartTime(9,4)+0.9).chord).toBe('Gm');
  });
});
