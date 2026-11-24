import { describe, expect, it } from 'vitest';
import '../assets/otelauta.js';
import {
  FAMILIES, MODES, QUALITIES, STRING_GROUPS, bassSlot, chordInfo, formatFrets, fullGrips, gripCenter,
  gripsFor, groupGrips, inversionLabel, matchAfterQualityChange, nearestGrip, neighbourGroup,
  parseChordParams, qualityById, soundingPitchClasses, supportsTriads, writeChordParams,
} from '../assets/sointuotteet.js';

const { OPEN_PITCHES, CHROM } = globalThis.MusicMapFretboard as unknown as { OPEN_PITCHES: number[]; CHROM: string[] };
const ROOTS = Array.from({ length: 12 }, (_, root) => root);
const FRET_COUNTS = [12, 17, 24];
const qualities = QUALITIES.map(quality => quality.id);

const pitches = (strings: (number | null)[]) => strings.flatMap((fret, string) =>
  fret === null ? [] : [(OPEN_PITCHES[string] + fret) % 12]);

describe('sointulaadut ja asteet', () => {
  it('sisältää prototyypin laadut ja kaikki aiemmin tarjotut sointulaadut', () => {
    expect(qualities).toEqual(expect.arrayContaining([
      'maj', 'min', 'dim', 'aug', 'sus2', 'sus4', '7', 'maj7', 'm7', 'm7b5', 'dim7', // prototyyppi
      '7#5', '7b5', 'mMaj7', // aiemmin Otelautaoppaassa
    ]));
    expect(FAMILIES.map(family => family.id)).toEqual(['triad', 'sus', 'seventh']);
    expect(new Set(qualities).size).toBe(qualities.length);
  });

  it('antaa sävelnimet ja asteet oikein, myös vähennetyn septimisoinnun ♭♭7', () => {
    const names = (root: number, quality: string) => chordInfo(root, quality).notes.join(' ');
    expect(names(0, 'maj')).toBe('C E G');
    expect(names(0, 'dim')).toBe('C E♭ G♭');
    expect(names(0, 'aug')).toBe('C E G♯');
    expect(names(0, 'sus2')).toBe('C D G');
    expect(names(0, 'sus4')).toBe('C F G');
    expect(names(0, 'dim7')).toBe('C E♭ G♭ B♭♭');
    expect(chordInfo(0, 'dim7').degrees).toEqual(['1', '♭3', '♭5', '♭♭7']);
    expect(names(0, 'm7b5')).toBe('C E♭ G♭ B♭');
    expect(names(0, 'mMaj7')).toBe('C E♭ G B');
    expect(names(0, '7#5')).toBe('C E G♯ B♭');
    expect(names(0, '7b5')).toBe('C E G♭ B♭');
    // Olemassa oleva sävelnimikäytäntö: E♭, A♭, B♭ ja C♯, F♯.
    expect(names(3, 'maj')).toBe('E♭ G B♭');
    expect(names(6, 'min')).toBe('F♯ A C♯');
    expect(names(1, 'aug')).toBe('C♯ E♯ G♯♯');
    expect(names(8, 'maj7')).toBe('A♭ C E♭ G');
    expect(names(11, 'sus4')).toBe('B E F♯');
    expect(chordInfo(6, 'm7').name).toBe('F♯m7');
  });

  it('nimeää sävelet oikein jokaisessa sävelessä: kolmisoinnuissa kolme eri kirjainta', () => {
    for (const root of ROOTS) {
      for (const id of ['maj', 'min', 'dim', 'aug']) {
        const chord = chordInfo(root, id);
        expect(new Set(chord.notes.map(note => note[0])).size, chord.name).toBe(3);
        chord.pitchClasses.forEach((pc, index) => expect(CHROM.includes(chord.notes[index]) || chord.notes[index].length > 0).toBe(true));
        expect(chord.notes[0]).toBe(CHROM[root]);
      }
    }
  });
});

describe('otteiden musiikillinen oikeellisuus', () => {
  for (const frets of FRET_COUNTS) {
    it(`täysotteissa soivat vain sointusävelet ja kaikki asteet ovat mukana (${frets} nauhaa)`, () => {
      let checked = 0;
      for (const root of ROOTS) {
        for (const id of qualities) {
          const chord = chordInfo(root, id);
          const grips = fullGrips(root, id, frets);
          const seen = new Set<string>();
          for (const grip of grips) {
            const where = `${chord.name} ${grip.label} ${formatFrets(grip.strings)}`;
            expect(grip.strings, where).toHaveLength(6);
            grip.strings.forEach(fret => {
              if (fret !== null) { expect(fret, where).toBeGreaterThanOrEqual(0); expect(fret, where).toBeLessThanOrEqual(frets); }
            });
            const sounding = soundingPitchClasses(grip.strings);
            expect(sounding.every(pc => chord.pitchClasses.includes(pc)), `${where}: ylimääräinen sävel`).toBe(true);
            expect(chord.pitchClasses.every(pc => sounding.includes(pc)), `${where}: aste puuttuu`).toBe(true);
            expect(grip.strings.filter(fret => fret !== null).length, where).toBeGreaterThanOrEqual(3);
            const key = grip.strings.join(',');
            expect(seen.has(key), `${where}: kaksoiskappale`).toBe(false);
            seen.add(key);
            expect(bassSlot(chord, grip.strings), where).toBeGreaterThanOrEqual(0);
            checked++;
          }
        }
      }
      expect(checked).toBeGreaterThan(300);
    });
  }

  it('jokaiselle sävelelle ja laadulle löytyy koko ote 17 nauhalla', () => {
    for (const root of ROOTS) {
      for (const id of qualities) {
        expect((fullGrips(root, id, 17)).length, `${CHROM[root]} ${id}`).toBeGreaterThan(0);
      }
    }
  });

  it('säilyttää nykyiset maj/min-otteet: avoin ote ensin, E- ja A-barré nauhajärjestyksessä', () => {
    const grips = fullGrips(7, 'maj', 17); // G
    expect(grips[0].label).toBe('Avoin ote');
    expect(formatFrets(grips[0].strings)).toBe('3 2 0 0 0 3');
    expect(grips.slice(1).map(grip => grip.base)).toEqual([...grips.slice(1).map(grip => grip.base)].sort((a, b) => a - b));
    const f = fullGrips(5, 'maj', 17);
    expect(f.map(grip => formatFrets(grip.strings))).toEqual(expect.arrayContaining(['1 3 3 2 1 1', 'x 8 10 10 10 8']));
    expect(fullGrips(9, 'min', 17)[0].strings).toEqual([0, 1, 2, 2, 0, null]);
  });

  it('septimisointujen otteet säilyvät: E- ja A-juurinen ote mukana, ♭♭7 soi oikein dim7:ssä', () => {
    const grips = fullGrips(0, 'dim7', 17);
    expect(grips.map(grip => grip.label)).toEqual(expect.arrayContaining(['E-juurinen ote', 'A-juurinen ote']));
    const chord = chordInfo(0, 'dim7');
    for (const grip of grips) expect(soundingPitchClasses(grip.strings)).toEqual([...chord.pitchClasses].sort((a, b) => a - b));
    // Nelisävelisille ei ole triaditilaa.
    expect(supportsTriads('dim7')).toBe(false);
    expect(groupGrips(0, 'dim7', 'gbe', 17)).toEqual([]);
  });

  for (const frets of FRET_COUNTS) {
    it(`triadiryhmissä soi täsmälleen kolme vierekkäistä kieltä ja kaikki kolme säveltä (${frets} nauhaa)`, () => {
      for (const root of ROOTS) {
        for (const id of qualities.filter(supportsTriads)) {
          const chord = chordInfo(root, id);
          for (const group of STRING_GROUPS) {
            const grips = groupGrips(root, id, group.id, frets);
            expect(grips.length, `${chord.name} ${group.label}`).toBeGreaterThan(0);
            for (const grip of grips) {
              const where = `${chord.name} ${group.label} ${formatFrets(grip.strings)}`;
              grip.strings.forEach((fret, string) => {
                expect(fret !== null, where).toBe(group.strings.includes(string));
                if (fret !== null) { expect(fret).toBeGreaterThanOrEqual(0); expect(fret).toBeLessThanOrEqual(frets); }
              });
              expect([...new Set(pitches(grip.strings))].sort((a, b) => a - b), where)
                .toEqual([...chord.pitchClasses].sort((a, b) => a - b));
              const frettedSpan = Math.max(...grip.strings.filter((x): x is number => x !== null)) -
                Math.min(...grip.strings.filter((x): x is number => x !== null));
              expect(frettedSpan, where).toBeLessThanOrEqual(3);
            }
            const bases = grips.map(grip => grip.base);
            expect(bases, `${chord.name} ${group.label}: nauhajärjestys`).toEqual([...bases].sort((a, b) => a - b));
          }
        }
      }
    });
  }

  it('antaa käännöksen basson mukaan: G-duurin G–B–e-ryhmässä kaikki kolme käännöstä', () => {
    const grips = groupGrips(7, 'maj', 'gbe', 17);
    expect(new Set(grips.map(grip => inversionLabel(grip.slot)))).toEqual(
      new Set(['Perusmuoto', '1. käännös', '2. käännös']));
    // Perusmuoto G–B–e: G-kielellä G (5. nauha)... bassosävel määrää käännöksen.
    const root = grips.find(grip => grip.strings.slice(0, 3).join() === '3,0,0');
    expect(root).toBeUndefined(); // e3 B0 G0 = G–B–G ei ole kolme eri säveltä
    const first = grips.find(grip => grip.strings[2] === 4); // G-kielen 4. nauha = B
    expect(first && inversionLabel(first.slot)).toBe('1. käännös');
  });
});

describe('ryhmien ja otteiden selaus', () => {
  it('ryhmien järjestys on ohuimmasta paksuimpaan ja rajoilla ei ole naapuria', () => {
    expect(STRING_GROUPS.map(group => group.label)).toEqual(['G–B–e', 'D–G–B', 'A–D–G', 'E–A–D']);
    expect(neighbourGroup('gbe', 1)).toBeNull();
    expect(neighbourGroup('gbe', -1)?.id).toBe('dgb');
    expect(neighbourGroup('ead', -1)).toBeNull();
    expect(neighbourGroup('ead', 1)?.id).toBe('adg');
  });

  it('ryhmän vaihto valitsee lähimmän otteen nauhasijainnin mukaan', () => {
    for (const root of ROOTS) {
      const from = groupGrips(root, 'maj', 'gbe', 17);
      for (const current of from) {
        const next = groupGrips(root, 'maj', 'dgb', 17);
        const picked = next[nearestGrip(next, current)];
        const best = Math.min(...next.map(grip => Math.abs(grip.center - current.center)));
        expect(Math.abs(picked.center - current.center)).toBeCloseTo(best, 9);
      }
    }
  });

  it('duuri ↔ molli säilyttää käännöksen ja liikuttaa tersssiä puoliaskeleen, kun se on mahdollista', () => {
    let exact = 0, total = 0;
    for (const root of ROOTS) {
      for (const group of STRING_GROUPS) {
        const majors = groupGrips(root, 'maj', group.id, 17);
        const minors = groupGrips(root, 'min', group.id, 17);
        for (const major of majors) {
          const picked = minors[matchAfterQualityChange(minors, major)];
          expect(picked.slot, 'sama käännös').toBe(major.slot);
          expect(picked.strings.every(fret => fret === null || fret >= 0)).toBe(true);
          // Täsmälleen yksi sävel (terssi) laskee yhden nauhan, jos sellainen ote on olemassa.
          const wanted = major.strings.map((fret, string) => {
            if (fret === null) return null;
            const pc = (OPEN_PITCHES[string] + fret) % 12;
            return pc === (root + 4) % 12 ? fret - 1 : fret;
          });
          const exists = minors.some(grip => grip.strings.join() === wanted.join());
          total++;
          if (exists) {
            expect(picked.strings.join(), `${CHROM[root]} ${group.label} ${formatFrets(major.strings)}`).toBe(wanted.join());
            exact++;
          }
        }
      }
    }
    expect(exact).toBeGreaterThan(total * 0.5);
  });

  it('molli → duuri toimii myös käänteisesti (terssi ylös) ja täysotteessa pysyy samassa muodossa', () => {
    const minors = fullGrips(9, 'min', 17); // Am avoin
    const majors = fullGrips(9, 'maj', 17);
    const picked = majors[matchAfterQualityChange(majors, minors[0])];
    expect(picked.shape).toBe('open');
    expect(formatFrets(picked.strings)).toBe('x 0 2 2 2 0');
    const cm = fullGrips(0, 'min', 17);
    const fromC = (fullGrips(0, 'maj', 17))[0]; // C-duuri avoin
    const toMinor = cm[matchAfterQualityChange(cm, fromC)];
    expect(toMinor.base).toBe(3); // Cm A-muodossa 3. nauhalla, ei negatiivista nauhaa
  });

  it('septimisoinnun laadun vaihto säilyttää juurimuodon', () => {
    const maj7 = fullGrips(7, 'maj7', 17);
    const dom = fullGrips(7, '7', 17);
    for (const grip of maj7) {
      const picked = dom[matchAfterQualityChange(dom, grip)];
      expect(picked.shape).toBe(grip.shape);
      expect(picked.base).toBe(grip.base);
    }
  });

  it('nearestGrip ja gripsFor käsittelevät tyhjän listan ja Sointusävelet-tilan', () => {
    expect(nearestGrip([], null)).toBe(-1);
    expect(gripsFor(0, 'maj', 'all', 'gbe', 17)).toEqual([]);
    expect(gripCenter([null, 3, 5, null, null, null])).toBe(4);
  });
});

describe('URL-parametrit', () => {
  const parse = (query: string) => parseChordParams(new URLSearchParams(query));
  it('lukee vanhat linkit: sointu=maj|min|seiskasointu ja ote=all|full|triad|e-juurinen|a-juurinen', () => {
    expect(parse('')).toMatchObject({ quality: 'maj', mode: 'full', group: 'gbe' });
    expect(parse('sointu=min&ote=triad')).toMatchObject({ quality: 'min', mode: 'triad', group: 'gbe' });
    expect(parse('sointu=maj7&ote=a-juurinen')).toMatchObject({ quality: 'maj7', mode: 'full', form: 'A' });
    expect(parse('sointu=m7b5&ote=all')).toMatchObject({ quality: 'm7b5', mode: 'all' });
    expect(parse('sointu=7%235&ote=e-juurinen')).toMatchObject({ quality: '7#5', form: 'E' });
  });
  it('hylkää tuntemattoman laadun ja triaditilan nelisävelisille', () => {
    expect(parse('sointu=huuhaa').quality).toBe('maj');
    expect(parse('sointu=dim7&ote=triad').mode).toBe('full');
    expect(parse('sointu=sus4&ote=triad&kielet=dgb')).toMatchObject({ mode: 'triad', group: 'dgb' });
    expect(parse('kielet=xx').group).toBe('gbe');
    expect(parse('nro=-2').number).toBeNull();
    expect(parse('nro=3').number).toBe(3);
  });
  it('kirjoittaa tilan takaisin ja septimisoinnun otteen vanhalla muodolla', () => {
    const params = new URLSearchParams('toonikka=C');
    writeChordParams(params, { quality: 'maj7', mode: 'full', group: 'gbe', grip: { form: 'a-juurinen' }, number: 2 });
    expect(params.get('ote')).toBe('a-juurinen');
    expect(params.get('nro')).toBe('2');
    expect(params.has('kielet')).toBe(false);
    writeChordParams(params, { quality: 'sus2', mode: 'triad', group: 'adg', grip: null, number: 1 });
    expect(params.toString()).toContain('sointu=sus2');
    expect(params.get('kielet')).toBe('adg');
    writeChordParams(params, { quality: 'maj', mode: 'all', group: 'adg', grip: null, number: null });
    expect(params.has('nro')).toBe(false);
  });
  it('tilat ja laadut ovat yksilöllisiä', () => {
    expect(MODES.map(mode => mode.id)).toEqual(['all', 'full', 'triad']);
    expect(qualityById('nope')).toBeNull();
  });
});
