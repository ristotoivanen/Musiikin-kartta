import { describe, it, expect } from 'vitest';
import {
  PracticeEngine, accepts, acceptedPositions, autoHintLevel, boardArea, generate, hintFor, matches, pool, practiceArea, roundLength,
  summarize, validate, weightedPick, type Question,
} from '../harjoittelija/engine';
import { answerCheck, answerInput, defaults, fromURL, sanitize, settingsURL, usesMic, type Mode, type Settings } from '../harjoittelija/settings';
import { CHORDS, at, music, pc, positionKey, positions } from '../harjoittelija/music';
import type { Result } from '../harjoittelija/storage';

/** Toistettava satunnaislukugeneraattori (mulberry32). */
function seeded(seed: number) {
  return () => { let t = seed += 0x6D2B79F5; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
const MODES: Mode[] = ['notes','ear-note','repeat','scale','chord','caged','interval'];
const engineFor = (settings: Settings, results: Result[] = [], random = seeded(1)) => {
  let now = 0;
  const engine = new PracticeEngine(settings, () => ({}), r => results.push(r), () => now, random);
  return { engine, results, tick: (ms: number) => { now += ms; } };
};
/** Vastaa oikein kysymyksen omalla tavalla. */
function solve(engine: PracticeEngine) {
  const q = engine.question!;
  if (q.choices === 'note') return engine.answer(pc(q.midi), 'note');
  if (q.choices === 'degree') return engine.answer(q.interval!, 'degree');
  return engine.answer(q.midi, 'board', acceptedPositions(engine.settings, q)[0]);
}

describe('harjoitusalue ja kysymysten rajaus', () => {
  it('kieli-, nauha- ja luonnollisten sävelten rajaus', () => {
    const s = { ...defaults, strings: [5], min: 0, max: 5 };
    expect(pool(s).map(p => p.midi)).toEqual([40,41,43,45]);
    expect(pool({ ...s, accidentals: true })).toHaveLength(6);
  });
  it('boksi määrää alueen itse, vaikka tallennettu nauha-alue olisi muualla', () => {
    const s: Settings = { ...defaults, mode: 'scale', root: 9, scale: 'mp', box: 1, min: 0, max: 3 };
    expect(practiceArea(s)).toMatchObject({ min: 5, max: 8, fixed: 'box' });
    const notes = pool(s);
    expect(notes).toHaveLength(12);
    expect(notes.every(p => [0,3,5,7,10].includes(pc(p.midi - 9)))).toBe(true);
    expect(notes.find(p => p.string === 2 && p.fret === 8)).toBeUndefined();
    for (let box = 1; box <= 5; box++) for (let root = 0; root < 12; root++) expect(validate({ ...s, box, root })).toBeNull();
  });
  it('CAGED-muoto määrää alueen itse kaikissa sävellajeissa', () => {
    for (let root = 0; root < 12; root++) for (const shape of ['C','A','G','E','D']) {
      const s: Settings = { ...defaults, mode: 'caged', root, shape, min: 20, max: 24, strings: [0] };
      expect(validate(s)).toBeNull();
      expect(practiceArea(s).fixed).toBe('shape');
      expect(pool(s).length).toBeGreaterThanOrEqual(4);
    }
    expect(practiceArea({ ...defaults, mode: 'caged', root: 0, shape: 'E' })).toMatchObject({ min: 8, max: 10 });
  });
  it('näytettävä otelauta ympäröi boksin tai muodon yhdellä nauhalla, muuten alue on valittu', () => {
    expect(boardArea({ ...defaults, mode: 'caged', root: 0, shape: 'E', strings: [0] })).toMatchObject({ min: 7, max: 11, strings: [0,1,2,3,4,5] });
    expect(boardArea({ ...defaults, mode: 'caged', root: 0, shape: 'C' })).toMatchObject({ min: 0, max: 4 });
    expect(boardArea({ ...defaults, mode: 'scale', root: 9, scale: 'mp', box: 1 })).toMatchObject({ min: 4, max: 9 });
    expect(boardArea({ ...defaults, strings: [5], min: 3, max: 7 })).toEqual(practiceArea({ ...defaults, strings: [5], min: 3, max: 7 }));
  });
  it('mahdoton valinta ilmoitetaan ennen aloitusta', () => {
    expect(validate({ ...defaults, strings: [1], min: 2, max: 2 })).toContain('luonnollisia');
    expect(validate({ ...defaults, strings: [1], min: 2, max: 2, accidentals: true })).toBeNull();
    expect(validate({ ...defaults, mode: 'chord', root: 0, strings: [5], min: 0, max: 0 })).toContain('puuttuu soinnun 1. aste ja 5. aste');
    expect(validate({ ...defaults, mode: 'chord', root: 0, strings: [5], min: 0, max: 0, chordTone: 'random' })).toBeNull();
    expect(validate({ ...defaults, mode: 'chord', root: 0, strings: [5], min: 0, max: 0, chordTone: '5' })).toContain('5. aste');
    expect(validate({ ...defaults, mode: 'chord', root: 1, strings: [5], min: 0, max: 0 })).toContain('Soinnun säveliä ei ole');
    expect(validate({ ...defaults, mode: 'interval', strings: [5], min: 0, max: 0 })).toContain('intervalleista');
    expect(validate({ ...defaults, mode: 'interval', strings: [5], min: 0, max: 3, intervals: [7] })).toContain('intervalleista');
    expect(validate({ ...defaults, mode: 'scale', strings: [5], min: 1, max: 2, order: 'up' })).not.toBeNull();
    expect(() => generate({ ...defaults, mode: 'interval', strings: [5], min: 0, max: 0 }, 0)).toThrow('intervalleista');
    expect(validate(defaults)).toBeNull();
  });
});

describe('kysymykset ovat musiikillisesti oikein ja vastattavissa', () => {
  it('jokaiseen kysymykseen on vastaus valitulla alueella (kaikki tilat, satunnaiset rajaukset)', () => {
    const random = seeded(42);
    const int = (lo: number, hi: number) => lo + Math.floor(random() * (hi - lo + 1));
    let checked = 0;
    for (const mode of MODES) for (let round = 0; round < 60; round++) {
      const min = int(0, 20), strings = [0,1,2,3,4,5].filter(() => random() < .6);
      const s = sanitize({ ...defaults, mode, min, max: Math.min(24, min + int(0, 12)), strings,
        accidentals: random() < .5, check: random() < .5 ? 'pitch' : 'class', root: int(0, 11),
        scale: Object.keys(music.SCALES)[int(0, 8)], box: int(0, 5), order: (['random','up','down'] as const)[int(0, 2)],
        chord: (['maj','min','dom7'] as const)[int(0, 2)], chordTone: ['build','random','1','3','5'][int(0, 4)],
        shape: 'CAGED'[int(0, 4)], intervals: [int(1, 12), int(1, 12)], direction: (['up','down','both'] as const)[int(0, 2)],
        activity: random() < .3 ? 'degree' : 'play', reference: random() < .5 });
      if (validate(s)) { expect(() => generate(s, 0)).toThrow(); continue; }
      const area = practiceArea(s), board = positions(area.strings, area.min, area.max).map(positionKey);
      let previous: Question | undefined;
      for (let index = 0; index < 12; index++) {
        const q = generate(s, index, {}, previous, random);
        const where = `${mode} ${JSON.stringify(s)}`;
        expect(board, where).toContain(positionKey(q.position));
        expect(q.midi).toBe(at(q.position.string, q.position.fret).midi);
        expect(q.check).toBe(answerCheck(s));
        if (q.choices === 'position') {
          const answers = acceptedPositions(s, q);
          expect(answers.length, where).toBeGreaterThan(0);
          expect(answers.map(positionKey), where).toContain(positionKey(q.position));
          for (const p of answers) expect(matches(q.midi, p.midi, q.check)).toBe(true);
        }
        if (q.choices === 'degree') expect((s.mode === 'scale' ? music.scaleNotes(music.SCALES[s.scale]) : CHORDS[s.chord].tones).map(([iv]) => iv)).toContain(q.interval);
        previous = q; checked++;
      }
    }
    expect(checked).toBeGreaterThan(2000);
  });
  it('sävelharjoitus ei väitä astetta ja nimeää kielen', () => {
    for (let i = 0; i < 40; i++) {
      const q = generate({ ...defaults, root: 9 }, i, {}, undefined, seeded(i));
      expect(q.degree).toBeUndefined(); expect(q.interval).toBeUndefined();
      expect(q.prompt).toMatch(/^Etsi [A-G] (ohuelta E|B|G|D|A|paksulta E)-kieleltä\.$/);
      expect(q.item).toBe(`notes:${positionKey(q.position)}`);
    }
    expect(generate({ ...defaults, strings: [3], min: 2, max: 2, check: 'pitch' }, 0).prompt).toBe('Etsi E3 D-kieleltä.');
  });
  it('asteikon ja soinnun nimet kirjoitetaan sävellajin mukaan, ei ylennysasetuksen', () => {
    for (const flats of [false, true]) {
      const scale: Settings = { ...defaults, mode: 'scale', root: 3, scale: 'mp', min: 0, max: 12, flats, activity: 'degree' };
      for (let i = 0; i < 20; i++) {
        const q = generate(scale, i, {}, undefined, seeded(i));
        expect(q.prompt).toMatch(/^E♭-mollipentatoninen: mikä aste on (E♭|G♭|A♭|B♭|D♭)\?$/);
      }
      const chord: Settings = { ...defaults, mode: 'chord', root: 11, chord: 'maj', max: 12, flats };
      expect([0,1,2].map(i => generate(chord, i).name)).toEqual(['B','D♯','F♯']);
      expect(generate(chord, 1).prompt).toBe('B-duurisointu: etsi 3. aste.');
    }
  });
  it('kaikkien asteikkojen kysymykset pysyvät asteikossa kaikissa toonikoissa', () => {
    for (const scale of Object.keys(music.SCALES)) for (let root = 0; root < 12; root++) {
      const s: Settings = { ...defaults, mode: 'scale', root, scale, max: 24 };
      const tones = music.scaleNotes(music.SCALES[scale]);
      for (let i = 0; i < 5; i++) {
        const q = generate(s, i, {}, undefined, seeded(root * 10 + i));
        expect(tones.find(([iv]) => iv === pc(q.midi - root))?.[1]).toBe(q.degree);
        expect(q.interval).toBe(pc(q.midi - root));
      }
    }
  });
  it('järjestetty asteikko kulkee sävelkorkeuksissa, tarkistaa oktaavin ja kestää yhden läpisoiton', () => {
    const s: Settings = { ...defaults, mode: 'scale', root: 9, scale: 'mp', box: 1, order: 'up', rounds: 20 };
    expect(roundLength(s)).toBe(12); expect(answerCheck(s)).toBe('pitch');
    const up = Array.from({ length: 12 }, (_, i) => generate(s, i));
    expect(up.map(q => q.midi)).toEqual([45,48,50,52,55,57,60,62,64,67,69,72]);
    expect(up[0].prompt).toBe('A-mollipentatoninen, boksi 1 ylöspäin, sävel 1/12: 1. aste (A2).');
    expect(up[1].prompt).toContain('sävel 2/12: ♭3. aste (C3)');
    expect(Array.from({ length: 12 }, (_, i) => generate({ ...s, order: 'down' }, i).midi)).toEqual([...up.map(q => q.midi)].reverse());
    const { engine } = engineFor(s);
    engine.start();
    for (let i = 0; i < 12; i++) { expect(engine.answer(engine.question!.midi + 12, 'mic')).toBe('candidate'); expect(solve(engine)).toBe('correct'); engine.next(); }
    expect(engine.phase).toBe('done'); expect(engine.results).toHaveLength(12);
  });
  it('sointu rakentuu sävel kerrallaan: 1, 3, 5 ja ♭7', () => {
    for (const chord of ['maj','min','dom7'] as const) {
      const s: Settings = { ...defaults, mode: 'chord', root: 0, chord, min: 0, max: 12 };
      const tones = CHORDS[chord].tones;
      expect(tones.map((_, i) => pc(generate(s, i).midi))).toEqual(tones.map(([iv]) => iv));
      expect(tones.map((_, i) => generate(s, i).degree)).toEqual(tones.map(([, degree]) => degree));
    }
    expect(generate({ ...defaults, mode: 'chord', root: 7, chord: 'dom7', max: 12, chordTone: '7' }, 0).name).toBe('F');
    expect(generate({ ...defaults, mode: 'chord', root: 9, chord: 'min', max: 12, chordTone: '3' }, 0).name).toBe('C');
  });
  it('nousevat ja laskevat intervallit säilyttävät tarkan etäisyyden eri oktaaveissa', () => {
    for (const direction of ['up','down'] as const) for (let iv = 1; iv <= 12; iv++) for (let seed = 0; seed < 5; seed++) {
      const q = generate({ ...defaults, mode: 'interval', max: 12, intervals: [iv], direction }, 0, {}, undefined, seeded(seed));
      expect(q.midi - q.reference!).toBe(iv * (direction === 'up' ? 1 : -1));
      expect(q.interval).toBe(iv); expect(q.direction).toBe(direction); expect(q.sound).toEqual([q.reference, q.midi]);
      expect(q.prompt).toContain(direction === 'up' ? 'nousevan' : 'laskevan');
    }
  });
  it('intervallin valinta ei riipu siitä, kuinka monta sävelparia alueelle mahtuu', () => {
    // Pieniä sekunteja mahtuu alueelle moninkertaisesti oktaaveihin nähden.
    const s: Settings = { ...defaults, mode: 'interval', max: 12, intervals: [1, 12], direction: 'up', weak: false };
    const random = seeded(7);
    let octaves = 0, previous: Question | undefined;
    for (let i = 0; i < 400; i++) { previous = generate(s, i, {}, i % 2 ? undefined : previous, random); if (previous.interval === 12) octaves++; }
    expect(octaves).toBeGreaterThan(160); expect(octaves).toBeLessThan(320);
  });
  it('kuultu sävel: vertailusävel A on lähin A ja kysytty sävel soi sen jälkeen', () => {
    for (let i = 0; i < 30; i++) {
      const q = generate({ ...defaults, mode: 'ear-note', max: 12 }, i, {}, undefined, seeded(i));
      expect(pc(q.reference!)).toBe(9); expect(Math.abs(q.midi - q.reference!)).toBeLessThanOrEqual(6);
      expect(q.sound).toEqual([q.reference, q.midi]); expect(q.choices).toBe('note'); expect(q.item).toBe(`ear-note:${pc(q.midi)}:ref`);
    }
    const plain = generate({ ...defaults, mode: 'ear-note', reference: false }, 0);
    expect(plain.sound).toEqual([plain.midi]); expect(plain.item).toBe(`ear-note:${pc(plain.midi)}`);
  });
  it('heikkoja suosiva arvonta ja toiston esto', () => {
    expect(weightedPick(['strong','weak'], [.25,3], () => .5)).toBe('weak');
    expect(weightedPick(['a','b'], [0,0], () => .9)).toBe('b');
    expect(() => weightedPick([], [])).toThrow();
    const q = generate({ ...defaults, min: 0, max: 0 }, 0, {}, undefined, () => 0);
    expect(generate({ ...defaults, min: 0, max: 0 }, 1, {}, q, () => 0).position).not.toEqual(q.position);
    const weak = { 'board:class:solo:notes:5:0': { attempts: 5, correct: 5, errors: 0, totalMs: 5000, lastSeen: 1 } };
    const s: Settings = { ...defaults, strings: [5], min: 0, max: 1 };
    const random = seeded(3);
    let strong = 0;
    for (let i = 0; i < 300; i++) if (generate(s, i, weak, undefined, random).position.fret === 0) strong++;
    expect(strong).toBeLessThan(60);
  });
});

describe('harjoittelutavat ja vihjeet', () => {
  it('uuden käyttäjän oletus on Testaa osaamistasi: vastaus ei näy', () => {
    expect(defaults.hints).toBe('off');
    expect(sanitize({}).hints).toBe('off');
    for (let index = 1; index <= 20; index++) expect(autoHintLevel(defaults, index)).toBe(0);
    for (const mode of MODES) {
      const { engine } = engineFor({ ...defaults, mode, max: 12 });
      engine.start();
      for (let i = 0; i < 10; i++) { expect(engine.hintLevel).toBe(0); expect(hintFor(engine.settings, engine.question!, engine.hintLevel).marks).toEqual([]); solve(engine); engine.next(); }
      expect(engine.results.every(r => !r.hint && r.hintLevel === 0)).toBe(true);
    }
  });
  it('Opettele näyttää vastauksen heti ja kirjaa jokaisen vastauksen vihjeelliseksi', () => {
    const { engine } = engineFor({ ...defaults, hints: 'always' });
    engine.start();
    for (let i = 0; i < 10; i++) { expect(engine.hintLevel).toBe(2); solve(engine); engine.next(); }
    expect(engine.results.every(r => r.hint && r.hintLevel === 2)).toBe(true);
    expect(summarize(engine.results)).toMatchObject({ count: 10, solo: 0, guided: 10 });
  });
  it('Vähennä vihjeitä: kolme vastauksella, kolme apupisteellä, loput ilman', () => {
    const { engine } = engineFor({ ...defaults, hints: 'fade' });
    engine.start();
    const levels: number[] = [];
    for (let i = 0; i < 10; i++) { levels.push(engine.hintLevel); solve(engine); engine.next(); }
    expect(levels).toEqual([2,2,2,1,1,1,0,0,0,0]);
    expect(engine.results.map(r => r.hint)).toEqual([true,true,true,true,true,true,false,false,false,false]);
    expect(summarize(engine.results)).toMatchObject({ solo: 4, soloFirst: 4, guided: 6 });
  });
  it('pyydetty vihje jää voimaan piilottamisen jälkeen eikä taso laske', () => {
    const { engine } = engineFor(defaults);
    engine.start();
    engine.useHint(2); engine.useHint(1); engine.useHint(0);
    expect(engine.hintLevel).toBe(2);
    solve(engine);
    expect(engine.results[0]).toMatchObject({ hint: true, hintLevel: 2, first: true });
    engine.useHint(2); engine.next();
    expect(engine.hintLevel).toBe(0);
    engine.useHint(1); solve(engine);
    expect(engine.results[1]).toMatchObject({ hint: true, hintLevel: 1 });
    engine.next(); solve(engine);
    expect(engine.results[2]).toMatchObject({ hint: false, hintLevel: 0 });
  });
  it('taso 1 on apupiste eikä paljasta vastausta, taso 2 näyttää kaikki kelpaavat kohdat', () => {
    for (const mode of ['notes','repeat','interval','scale','chord','caged'] as Mode[]) for (let seed = 0; seed < 25; seed++) {
      const s: Settings = { ...defaults, mode, max: 12, root: seed % 12, shape: 'CAGED'[seed % 5] };
      const q = generate(s, seed, {}, undefined, seeded(seed));
      const answers = acceptedPositions(s, q).map(positionKey);
      const partial = hintFor(s, q, 1), full = hintFor(s, q, 2);
      expect(partial.text).not.toBe(''); expect(full.text).not.toBe('');
      expect(full.marks.filter(m => m.kind === 'answer').map(positionKey).sort()).toEqual([...answers].sort());
      expect(partial.marks.some(m => m.kind === 'answer')).toBe(false);
      // Apupiste voi osua vastauksen kohdalle vain sävelharjoituksessa, kun kysytty sävel on kielen alin.
      if (mode === 'scale' || mode === 'chord') expect(partial.marks.every(m => m.label === '1' && !answers.includes(positionKey(m)))).toBe(true);
      if (mode === 'caged') expect(partial.marks.every(m => m.label === '' && m.kind === 'shape')).toBe(true);
      if (mode === 'interval') expect(partial.marks.every(m => m.midi === q.reference)).toBe(true);
      if (mode === 'notes' && q.position.fret !== 0) expect(partial.marks.map(positionKey)).toEqual([`${q.position.string}:0`]);
    }
  });
  it('nimeämistehtävien vihje ei näytä nimeä ennen tasoa 2', () => {
    const ear = generate({ ...defaults, mode: 'ear-note' }, 0);
    expect(hintFor({ ...defaults, mode: 'ear-note' }, ear, 1).marks).toEqual([{ ...ear.position, label: '?', kind: 'anchor' }]);
    expect(hintFor({ ...defaults, mode: 'ear-note' }, ear, 1).text).not.toContain(`on ${ear.name}`);
    expect(hintFor({ ...defaults, mode: 'ear-note' }, ear, 2).marks[0].label).toBe(ear.name);
    const s: Settings = { ...defaults, mode: 'scale', activity: 'degree', min: 5, max: 8 };
    for (let seed = 0; seed < 20; seed++) {
      const q = generate(s, seed, {}, undefined, seeded(seed));
      const partial = hintFor(s, q, 1);
      if (q.interval !== 0) expect(partial.marks.some(m => m.label === q.degree)).toBe(false);
      expect(hintFor(s, q, 2).marks.filter(m => m.kind === 'answer').every(m => m.label === q.degree)).toBe(true);
    }
  });
});

describe('vastausten tarkistus ja tilasiirtymät', () => {
  it('sävelnimi hyväksyy oktaavin, tarkka sävelkorkeus vaatii oikean oktaavin', () => {
    expect(matches(40, 52, 'class')).toBe(true); expect(matches(40, 52, 'pitch')).toBe(false);
    expect(matches(40, 40, 'pitch')).toBe(true); expect(matches(40, 40.1, 'class')).toBe(false);
  });
  it('otelaudan vastaus edellyttää pyydettyä kieltä sävelharjoituksessa', () => {
    const s: Settings = { ...defaults, strings: [4, 5], min: 0, max: 12 };
    const { engine } = engineFor(s); engine.start();
    const q = engine.question!, other = q.position.string === 4 ? 5 : 4;
    const sameNoteOtherString = positions([other], 0, 12).find(p => pc(p.midi) === pc(q.midi))!;
    expect(accepts(s, q, sameNoteOtherString)).toBe(false);
    expect(engine.answer(sameNoteOtherString.midi, 'board', sameNoteOtherString)).toBe('wrong');
    expect(engine.answer(q.midi, 'board', q.position)).toBe('correct');
    expect(engine.results[0]).toMatchObject({ first: false, errors: 1, hint: false, input: 'board', position: positionKey(q.position) });
  });
  it('sävelnimitarkistuksessa sama kieli toisessa oktaavissa kelpaa ja tilastoi valitun kohdan', () => {
    const s: Settings = { ...defaults, strings: [5], min: 0, max: 12 };
    const { engine } = engineFor(s, [], () => 0); engine.start();
    expect(engine.question!.position).toMatchObject({ string: 5, fret: 0 });
    expect(engine.answer(52, 'board', at(5, 12))).toBe('correct'); expect(engine.results[0].item).toBe('notes:5:12');
    const exact = engineFor({ ...s, check: 'pitch' }, [], () => 0).engine; exact.start();
    expect(exact.answer(52, 'board', at(5, 12))).toBe('wrong');
  });
  it('boksin ja CAGED-muodon ulkopuolinen oikea sävel ei kelpaa', () => {
    const box: Settings = { ...defaults, mode: 'scale', root: 9, scale: 'mp', box: 1 };
    const q = generate(box, 0, {}, undefined, seeded(2));
    const inside = acceptedPositions(box, q);
    expect(inside.length).toBeGreaterThan(0);
    // G-kielen 8. nauha on boksin alueella mutta ei boksin sävel.
    expect(accepts(box, { ...q, midi: 63, interval: 6 }, at(2, 8))).toBe(false);
    const caged: Settings = { ...defaults, mode: 'caged', root: 0, shape: 'E' };
    const { engine } = engineFor(caged); engine.start();
    for (const p of acceptedPositions(caged, engine.question!)) expect(pool(caged).map(positionKey)).toContain(positionKey(p));
    const outside = at(0, 9);
    expect(engine.answer(outside.midi, 'board', outside)).toBe('wrong');
  });
  it('tauko ei kasvata vastausaikaa, sävelen vakaantumisaika ei kuulu vastausaikaan', () => {
    const { engine, results, tick } = engineFor(defaults);
    engine.start(); tick(100); engine.pause(); tick(10000);
    expect(engine.answer(engine.question!.midi, 'mic')).toBe('ignored');
    engine.resume(); tick(400);
    expect(engine.answer(engine.question!.midi, 'mic', undefined, 240)).toBe('correct');
    expect(results[0].ms).toBe(260); expect(results[0].input).toBe('mic'); expect(results).toHaveLength(1);
    expect(engine.answer(engine.question!.midi, 'mic')).toBe('ignored'); expect(results).toHaveLength(1);
  });
  it('mikrofonin eriävä havainto on ehdotus: vain vahvistettu virhe tilastoituu, ja vain kerran', () => {
    const { engine } = engineFor(defaults); engine.start();
    const midi = engine.question!.midi;
    expect(engine.answer(midi + 1, 'mic')).toBe('candidate'); expect(engine.answer(midi + 2, 'mic')).toBe('candidate');
    expect(engine.errors).toBe(0); expect(engine.mismatches).toBe(2);
    engine.confirmWrong(); engine.confirmWrong();
    expect(engine.errors).toBe(1);
    expect(engine.answer(midi + 12, 'mic')).toBe('correct');
    expect(engine.results[0]).toMatchObject({ first: false, errors: 1, mismatches: 2 });
    engine.next(); engine.confirmWrong();
    expect(engine.errors).toBe(0);
    engine.answer(engine.question!.midi + 1, 'mic'); engine.answer(engine.question!.midi, 'mic');
    expect(engine.results[1]).toMatchObject({ first: true, errors: 0, mismatches: 1 });
  });
  it('nimi- ja astevastaukset tarkistetaan oikein', () => {
    const ear = engineFor({ ...defaults, mode: 'ear-note' }).engine; ear.start();
    expect(ear.answer(pc(ear.question!.midi + 1), 'note')).toBe('wrong'); expect(ear.answer(pc(ear.question!.midi), 'note')).toBe('correct');
    expect(ear.results[0]).toMatchObject({ input: 'note', check: 'class', first: false });
    const degree = engineFor({ ...defaults, mode: 'chord', activity: 'degree', max: 12 }).engine; degree.start();
    expect(degree.question!.prompt).toBe('A-duurisointu: mikä aste on A?');
    expect(degree.answer(7, 'degree')).toBe('wrong'); expect(degree.answer(0, 'degree')).toBe('correct');
    expect(answerInput({ ...defaults, mode: 'chord', activity: 'degree' })).toBe('degree');
    expect(usesMic({ ...defaults, mode: 'ear-note', input: 'mic' })).toBe(false); expect(usesMic({ ...defaults, input: 'mic' })).toBe(true);
  });
  it('10, 20 ja vapaat kierrokset sekä lopetus', () => {
    for (const rounds of [10, 20, 0]) {
      const { engine } = engineFor({ ...defaults, rounds }); engine.start();
      expect(engine.total).toBe(rounds);
      for (let i = 0; i < (rounds || 30); i++) { expect(engine.isLast).toBe(rounds > 0 && i === rounds - 1); solve(engine); engine.next(); }
      expect(engine.phase).toBe(rounds ? 'done' : 'active'); engine.stop(); engine.next(); expect(engine.phase).toBe('done');
    }
  });
  it('nopeat peräkkäiset toiminnot eivät riko tilaa', () => {
    const { engine, results } = engineFor(defaults);
    engine.next(); engine.start(); engine.start();
    expect(engine.index).toBe(1);
    engine.pause(); engine.pause(); engine.next(); engine.useHint(2);
    expect(engine.phase).toBe('paused'); expect(engine.hintLevel).toBe(0);
    engine.resume(); engine.resume();
    expect(engine.answered).toBe(false);
    solve(engine); solve(engine); engine.pause();
    expect(engine.answered).toBe(true);
    engine.resume();
    expect(engine.phase).toBe('feedback'); expect(results).toHaveLength(1);
    engine.next(); engine.next();
    expect(engine.index).toBe(2);
    engine.stop(); expect(solve(engine)).toBe('ignored'); expect(results).toHaveLength(1);
  });
  it('yhteenveto erottaa itsenäiset ja vihjeelliset vastaukset', () => {
    expect(summarize([{ first: true, hint: false, ms: 1000 }, { first: false, hint: false, ms: 3000 }, { first: true, hint: true, ms: 2000 }]))
      .toEqual({ count: 3, first: 2, solo: 2, soloFirst: 1, guided: 1, ms: 6000 });
  });
});

describe('asetukset ja linkit', () => {
  it('URL:n validointi ja enharmonia', () => {
    expect(fromURL('?tila=scale&toonikka=Bb&asteikko=majp&loppu=99', defaults)).toMatchObject({ mode: 'scale', root: 10, scale: 'majp', max: 24 });
    expect(fromURL('?toonikka=F%23', defaults).root).toBe(6); expect(fromURL('?toonikka=E♭', defaults).root).toBe(3); expect(fromURL('?toonikka=b', defaults).root).toBe(11);
    expect(fromURL('?tila=bad&asteikko=__proto__&alku=NaN&vihjeet=kaikki', defaults)).toMatchObject({ mode: 'notes', scale: 'mp', min: 0, hints: 'off' });
    expect(sanitize({ strings: [], min: 20, max: -2 })).toMatchObject({ strings: [0,1,2,3,4,5], min: 20, max: 20 });
  });
  it('vihjeet-parametri valitsee harjoittelutavan, muuten tallennettu valinta säilyy', () => {
    expect(fromURL('?vihjeet=always', defaults).hints).toBe('always'); expect(fromURL('?vihjeet=fade', defaults).hints).toBe('fade');
    expect(fromURL('?tila=caged', { ...defaults, hints: 'always' }).hints).toBe('always');
    expect(fromURL('', defaults).hints).toBe('off');
  });
  it('jaettu linkki säilyttää harjoituksen musiikilliset valinnat mutta ei laitetta', () => {
    const s: Settings = { ...defaults, mode: 'interval', strings: [1,5], min: 3, max: 24, hints: 'fade', input: 'mic', intervals: [1,6,12], direction: 'down', check: 'pitch', accidentals: true, flats: true, weak: false, reference: false };
    expect(fromURL(settingsURL(s).split('?')[1], defaults)).toEqual(s);
    expect(settingsURL({ ...s, device: 'salainen-laite' })).not.toContain('salainen');
  });
});
