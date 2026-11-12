import { describe, expect, it } from 'vitest';
import {
  ACOUSTIC_CHART, DEFAULT_SONG_VERSION, NORMAL_CHART, SONG_CHARTS, barStartTime, chordAt, isSongLink,
  lookAhead, lyricColumns, sectionBarDuration, songLink, versionFromSongLink,
} from '../harjoittelija/songChart';

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
  it('säkeistökierto 3 säilyy samana bassotauosta huolimatta, eikä teknistä bassohuomiota näytetä', () => {
    expect(NORMAL_CHART[6].bars).toEqual(NORMAL_CHART[1].bars);
    expect(NORMAL_CHART[6].note).toBeUndefined();
    // Käyttäjälle näkyvät huomautukset selittävät vain kartan merkintöjä (basson kulkuääni, Dm?, viimeinen Gm).
    for (const section of [...ACOUSTIC_CHART, ...NORMAL_CHART]) expect(section.note ?? '').not.toMatch(/tauolla|\d:\d\d/);
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

describe('Seuraavan soinnun ja kappaleenosan ennakointi', () => {
  const versions = ['acoustic', 'normal'] as const;
  const lastBarStart = (sectionIndex: number, version: (typeof versions)[number]) =>
    barStartTime(sectionIndex, SONG_CHARTS[version][sectionIndex].bars.length - 1, version);

  it('näyttää seuraavan osan nimen ja ensimmäisen soinnun koko edellisen osan viimeisen tahdin ajan', () => {
    for (const version of versions) {
      const chart = SONG_CHARTS[version];
      chart.slice(0, -1).forEach((section, sectionIndex) => {
        const following = chart[sectionIndex + 1];
        const start = lastBarStart(sectionIndex, version);
        // Viimeistä edeltävässä tahdissa uutta osaa ei vielä ilmoiteta.
        if (section.bars.length > 1) expect(lookAhead(start - 0.01, version).nextSection).toBeNull();
        for (const time of [start, (start + following.start) / 2, following.start - 0.000001]) {
          const { nextSection, nextChord } = lookAhead(time, version);
          expect(nextSection?.section, `${version} ${section.id} ${time}`).toBe(following);
          expect(nextSection?.firstChord).toBe(following.bars[0].first);
          // Tahtikartan korostus pysyy edellisessä osassa uuden osan alkuun asti.
          expect(chordAt(time, version).section).toBe(section);
          if (!nextSection?.continues) {
            expect(nextChord).toMatchObject({ section: following, barIndex: 0, part: 'first', chord: following.bars[0].first });
            expect(nextChord?.time).toBe(following.start);
          }
        }
        expect(chordAt(following.start, version).section).toBe(following);
      });
    }
  });

  it('seuraava sointu muuttuu soivaksi täsmälleen ilmoitetulla hetkellä eikä aiemmin', () => {
    for (const version of versions) {
      const end = SONG_CHARTS[version].at(-1)!.start;
      for (let time = 0; time < end; time += 0.25) {
        const now = chordAt(time, version);
        const { nextChord } = lookAhead(time, version);
        expect(nextChord, `${version} ${time}`).not.toBeNull();
        expect(nextChord!.chord).not.toBe(now.chord);
        expect(nextChord!.time).toBeGreaterThan(time);
        expect(chordAt(nextChord!.time, version).chord).toBe(nextChord!.chord);
        expect(chordAt(nextChord!.time - 0.000001, version).chord).toBe(now.chord);
      }
    }
  });

  it('ei esitä saman soinnun jatkumista soinnunvaihtona', () => {
    // Intro päättyy Gm:ään ja säkeistö alkaa Gm:llä: seuraava vaihto on F kolmannella iskulla.
    const introEnd = lookAhead(lastBarStart(0, 'acoustic') + 0.1, 'acoustic');
    expect(introEnd.nextSection).toMatchObject({ firstChord: 'Gm', continues: true });
    expect(introEnd.nextChord).toMatchObject({ chord: 'F', barIndex: 0, part: 'second' });
    expect(introEnd.nextChord?.section.id).toBe('verse1');
    // Säkeistön 4. tahdin Gm jatkuu 5. tahtiin; ennakko hyppää F:ään.
    const verseBar4 = lookAhead(barStartTime(1, 3) + 0.1, 'acoustic');
    expect(verseBar4.nextChord).toMatchObject({ chord: 'F', barIndex: 4, part: 'second' });
    // Normaalin version säkeistö 3 päättyy Gm:ään ja kertosäe alkaa B♭:llä.
    const verse3End = lookAhead(lastBarStart(6, 'normal') + 0.1, 'normal');
    expect(verse3End.nextSection).toMatchObject({ firstChord: 'B♭', continues: false });
    expect(verse3End.nextChord).toMatchObject({ chord: 'B♭', barIndex: 0 });
    expect(verse3End.nextChord?.section.id).toBe('chorus3');
  });

  it('saman osan sisällä seuraava sointu näkyy jo nykyisen soinnun alusta', () => {
    expect(lookAhead(0.1, 'acoustic').nextChord).toMatchObject({ chord: 'F', barIndex: 0, part: 'second' });
    expect(lookAhead(0.1, 'acoustic').nextSection).toBeNull();
    expect(lookAhead(sectionBarDuration(0) / 2 + 0.1, 'acoustic').nextChord).toMatchObject({ chord: 'Gm', barIndex: 1 });
    expect(lookAhead(barStartTime(5, 0, 'normal') + 0.1, 'normal').nextChord)
      .toMatchObject({ chord: 'Dm', barIndex: 1, part: 'first' });
  });

  it('loopissa kappaleen loppu ennakoi alusta alkavan intron, ilman looppia ennakkoa ei ole', () => {
    for (const version of versions) {
      const chart = SONG_CHARTS[version];
      const last = chart.length - 1;
      for (const time of [lastBarStart(last, version) + 0.1, chart[last].start + 60]) {
        expect(lookAhead(time, version)).toEqual({ nextChord: null, nextSection: null });
        const looped = lookAhead(time, version, true);
        expect(looped.nextSection).toMatchObject({ sectionIndex: 0, wrapped: true, firstChord: 'Gm', continues: true });
        expect(looped.nextChord).toMatchObject({ sectionIndex: 0, barIndex: 0, part: 'second', chord: 'F', wrapped: true });
      }
    }
  });
});

describe('Kappaleen oletusversio ja suorat linkit', () => {
  it('oletus on normaali versio, ja linkissä nimetty versio ohittaa sen', () => {
    expect(DEFAULT_SONG_VERSION).toBe('normal');
    expect(isSongLink('yksi-sointu-kaksi-askelta')).toBe(true);
    expect(versionFromSongLink('yksi-sointu-kaksi-askelta')).toBeNull();
    expect(versionFromSongLink('yksi-sointu-kaksi-askelta-akustinen')).toBe('acoustic');
    expect(versionFromSongLink('yksi-sointu-kaksi-askelta-normaali')).toBe('normal');
    expect(songLink('acoustic')).toBe('yksi-sointu-kaksi-askelta-akustinen');
    expect(songLink('normal')).toBe('yksi-sointu-kaksi-askelta-normaali');
    for (const other of [null, '', 'yksi-sointu', 'yksi-sointu-kaksi-askelta-sahkoinen']) {
      expect(isSongLink(other)).toBe(false);
      expect(versionFromSongLink(other)).toBeNull();
    }
  });
});

describe('Koko sanoituksen palstat', () => {
  it('etenevät kappaleen järjestyksessä vasemmalta oikealle ja tasapainossa katkaisematta osioita', () => {
    for (const version of ['acoustic', 'normal'] as const) {
      const sung = SONG_CHARTS[version].filter(section => section.lyrics?.length);
      const [left, right] = lyricColumns(SONG_CHARTS[version]);
      expect([...left, ...right]).toEqual(sung);
      const lines = (column: typeof left) => column.reduce((sum, s) => sum + 1 + s.lyrics!.length, 0);
      expect(Math.abs(lines(left) - lines(right))).toBeLessThanOrEqual(3);
      // 3 × 5 riviä vasemmalla, 3 × 5 + 3 oikealla (otsikko mukaan lukien).
      expect(left.map(s => s.id)).toEqual(['verse1', 'chorus1', 'verse2']);
      expect(right.map(s => s.id)).toEqual(['chorus2', 'verse3', 'chorus3', 'outro']);
    }
  });
});
