import { describe, expect, it } from 'vitest';
import { ACOUSTIC_CHART, NORMAL_CHART, SONG_CHARTS, barStartTime, chordAt, sectionBarDuration } from '../harjoittelija/songChart';

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

describe('Yksi sointu, kaksi askelta: sähköisen version sointukartta', () => {
  it('sisältää yhdeksän osiota 60 tahdissa ja versiolle ominaiset aikaleimat', () => {
    expect(SONG_CHARTS.normal).toBe(NORMAL_CHART);
    expect(NORMAL_CHART.map(s=>s.start)).toEqual([0,14,42,63,91,111,139,167,195]);
    expect(NORMAL_CHART.map(s=>s.bars.length)).toEqual([4,8,6,8,6,8,8,8,4]);
    expect(NORMAL_CHART.reduce((sum,s)=>sum+s.bars.length,0)).toBe(60);
    expect(NORMAL_CHART.some(s=>s.id==='interlude')).toBe(false);
  });
  it('eroaa akustisesta kertosäkeiden päätöksissä', () => {
    expect(NORMAL_CHART[2].bars.slice(4)).toEqual([{first:'E♭'},{first:'E♭'}]);
    expect(NORMAL_CHART[4].bars.slice(4)).toEqual([{first:'E♭'},{first:'F'}]);
    expect(NORMAL_CHART[7].bars).toEqual([
      {first:'B♭',second:'F'}, {first:'Gm',second:'Dm'},
      {first:'E♭',second:'F'}, {first:'Gm',second:'Dm'},
      {first:'B♭',second:'F'}, {first:'Gm'},
      {first:'E♭',second:'F'}, {first:'Gm'},
    ]);
  });
  it('säkeistökierto 3 säilyy samana bassotauosta huolimatta', () => {
    expect(NORMAL_CHART[6].bars).toEqual(NORMAL_CHART[1].bars);
    expect(NORMAL_CHART[6].note).toMatch(/Basso on tauolla/);
  });
  it('väliosan kahdeksan tahtia ja outro ovat vahvistetut', () => {
    expect(NORMAL_CHART[5].bars.map(b=>b.first)).toEqual(['Gm','Dm','F','C','Gm','Dm','E♭','F']);
    expect(NORMAL_CHART[8].bars).toEqual([
      {first:'E♭',second:'F'}, {first:'Gm',second:'F'},
      {first:'E♭',second:'F'}, {first:'Gm'},
    ]);
    expect(NORMAL_CHART[8].bars.every(bar=>!bar.possibleChord)).toBe(true);
  });
  it('osiohyppy ja isku 3 huomioivat version', () => {
    expect(barStartTime(3,0,'normal')).toBe(63);
    expect(barStartTime(5,0,'normal')).toBe(111);
    expect(barStartTime(8,0,'normal')).toBe(195);
    expect(chordAt(63.01,'normal').section.id).toBe('verse2');
    expect(chordAt(63.01,'acoustic').section.id).toBe('chorus1');
    const bar=barStartTime(8,1,'normal');
    const half=sectionBarDuration(8,'normal')/2;
    expect(chordAt(bar+half-.01,'normal').chord).toBe('Gm');
    expect(chordAt(bar+half+.01,'normal').chord).toBe('F');
    expect(chordAt(barStartTime(8,3,'normal')+.1,'normal').chord).toBe('Gm');
  });
});

describe('Tahtihyppyjen aikarajat', () => {
  it('valitsee hypätyn tahdin ensimmäisen iskun molemmissa versioissa', () => {
    for (const version of ['acoustic', 'normal'] as const) {
      SONG_CHARTS[version].forEach((section, sectionIndex) => {
        section.bars.forEach((bar, barIndex) => {
          const start = barStartTime(sectionIndex, barIndex, version);
          expect(chordAt(start, version)).toMatchObject({ sectionIndex, barIndex, beat: 1, chord: bar.first });
          if (barIndex > 0) {
            expect(chordAt(start - 0.000001, version)).toMatchObject({ sectionIndex, barIndex: barIndex - 1, beat: 4 });
          }
        });
      });
    }
  });
});

describe('Kappalerakenteen sanojen sijoittelu', () => {
  it('kitarasoolossa ei ole laulusäkeitä, ja väliosan sanat tulevat sen jälkeen', () => {
    for (const version of ['acoustic', 'normal'] as const) {
      const chart = SONG_CHARTS[version];
      const solo=chart.find(section=>section.id==='bridge');
      const vocal=chart.find(section=>section.id==='verse3');
      expect(solo?.title).toBe('Kitarasoolo');
      expect(solo?.lyrics).toBeUndefined();
      expect(vocal?.title).toMatch(/^Väliosa/);
      expect(vocal?.lyrics).toEqual([
        'Pidän tauon, annan soida',
        'kuuntelen ja hengitän',
        'pienestäkin sävelestä',
        'löytyy tie eteenpäin',
      ]);
      expect(vocal!.start).toBeGreaterThan(solo!.start);
      expect(chordAt(vocal!.start - 0.000001, version).section).toBe(solo);
      expect(chordAt(vocal!.start, version).section).toBe(vocal);
    }
  });
});
