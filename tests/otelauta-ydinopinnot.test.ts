import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  ACCIDENTALS, ALL_POSITIONS, CHROMATIC_FROM, LANDMARK_PHASE, FIND_LEVELS, LANDMARKS, MAX_FRET, NATURALS, NOTE_NAMES,
  OCTAVE_RELATIONS, ROOT_STRINGS, STRINGS, UNISON_EXAMPLE,
  checkFindAll, checkOctavePlace, checkOctaveRelation, checkRootFind, checkRootName, checkUnison, createRandom,
  crossesGB, findHint, findPositions, frequency, generateFindTarget, generateOctaveRound, generateRootRound,
  generateUnisonRound, isLandmarkRound, landmarkReason, landmarkShare, mysteryPitch, nearestLandmark, noteName, octaveGroups, octaveReferences,
  pitchAt, pitchName, positionsOf, relationWords, rootAnswer, shapeWords, shortPosition, unisonAnswer,
  unisonCandidates, unisonHint, unisonPrompt,
} from '../assets/otelauta-ydinopinnot.js';
import type { FretPosition, OctaveRound, RootRound, UnisonRound } from '../assets/otelauta-ydinopinnot.js';

// Otelaudan Ydinopinnot (#116, vaihe 3). Musiikillinen tieto tarkistetaan riippumattomasta
// taulukosta (teoriaoppaan osa 5) ja raa'alla laskennalla kaikista 78 paikasta; generaattoreita
// ajetaan useilla siemenillä tuhansia kierroksia, ei vain yhtä satunnaista tehtävää.
const read = (path: string) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
type Position = readonly [string, number];

// Riippumaton vertailu: vakiovire MIDI-sävelinä E2 A2 D3 G3 B3 E4.
const OPEN: Record<string, number> = { E: 40, A: 45, D: 50, G: 55, B: 59, e: 64 };
const ORDER = ['E', 'A', 'D', 'G', 'B', 'e'];
// book/osa-5.html#e-ja-a-kielen-nauhat, nauhat 0–12.
const E_STRING = ['E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B', 'C', 'C♯', 'D', 'E♭', 'E'];
const A_STRING = ['A', 'B♭', 'B', 'C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A'];
const everyPosition = ORDER.flatMap(string => Array.from({ length: 13 }, (_, fret) => ({ string, fret, midi: OPEN[string] + fret })));
const SEEDS = Array.from({ length: 12 }, (_, index) => 1000 + index * 7919);

function runs<T>(generate: (rand: () => number, history: T[]) => T, rounds = 400) {
  return SEEDS.map(seed => {
    const rand = createRandom(seed);
    const history: T[] = [];
    for (let index = 0; index < rounds; index++) history.push(generate(rand, history));
    return history;
  });
}

describe('vakiovire, sävelet, oktaavit ja taajuudet', () => {
  it('vapaat kielet E2–A2–D3–G3–B3–E4, kielivälit 5–5–5–4–5', () => {
    expect(STRINGS.map(string => string.id)).toEqual(ORDER);
    expect(STRINGS.map(string => pitchName(string.open))).toEqual(['E2', 'A2', 'D3', 'G3', 'B3', 'E4']);
    expect(STRINGS.slice(1).map((string, index) => string.open - STRINGS[index].open)).toEqual([5, 5, 5, 4, 5]);
  });

  it('kaikki 78 paikkaa: sävelkorkeus, nimi ja taajuus vastaavat riippumatonta laskentaa', () => {
    expect(ALL_POSITIONS).toHaveLength(78);
    for (const { string, fret, midi } of everyPosition) {
      expect(pitchAt(string, fret)).toBe(midi);
      expect(frequency(midi)).toBeCloseTo(440 * 2 ** ((midi - 69) / 12), 9);
      expect(pitchName(midi)).toBe(NOTE_NAMES[midi % 12] + (Math.floor(midi / 12) - 1));
    }
    expect(frequency(pitchAt('A', 0))).toBeCloseTo(110, 9);
    expect(frequency(pitchAt('E', 0))).toBeCloseTo(82.407, 3);
    expect(frequency(pitchAt('e', 5))).toBe(440);
  });

  it('E- ja A-kielen nimet vastaavat teoriaoppaan taulukkoa', () => {
    expect(Array.from({ length: 13 }, (_, fret) => noteName(pitchAt('E', fret)))).toEqual(E_STRING);
    expect(Array.from({ length: 13 }, (_, fret) => noteName(pitchAt('A', fret)))).toEqual(A_STRING);
  });

  it('nauhat rajataan välille 0–12; samanniminen sävel ei ole sama korkeus', () => {
    expect(MAX_FRET).toBe(12);
    expect(() => pitchAt('E', 13)).toThrow();
    expect(() => pitchAt('E', -1)).toThrow();
    expect(() => pitchAt('X', 0)).toThrow();
    expect([pitchAt('E', 5), pitchAt('G', 2), pitchAt('e', 5)].map(pitchName)).toEqual(['A2', 'A3', 'A4']);
    expect(relationWords(12)).toBe('oktaavia korkeampi');
    expect(relationWords(-12)).toBe('oktaavia matalampi');
    expect(relationWords(0)).toBe('yhtä korkea');
  });

  it('siirron kuvaus kertoo kielten ja nauhojen suunnan', () => {
    expect(shapeWords(['E', 5], ['D', 7])).toBe('kaksi kieltä ohuemmalle, kaksi nauhaa kohti tallaa');
    expect(shapeWords(['E', 5], ['G', 2])).toBe('kolme kieltä ohuemmalle, kolme nauhaa kohti satulaa');
    expect(shapeWords(['B', 3], ['G', 7])).toBe('yksi kieli paksummalle, neljä nauhaa kohti tallaa');
  });

  it('positionsOf löytää jokaisen 12 sävelnimen kaikki paikat', () => {
    for (const name of NOTE_NAMES) {
      const expected = everyPosition.filter(position => NOTE_NAMES[position.midi % 12] === name);
      expect(positionsOf(name), name).toEqual(expected);
      expect(expected.length, name).toBeGreaterThanOrEqual(6);
    }
  });
});

describe('01 · Sama sävel toiselta kieleltä', () => {
  const candidates = unisonCandidates();

  it('ehdokkaat ovat täsmälleen kaikki naapurikielten yhtä korkeat paikkaparit nauhoilla 0–12', () => {
    const expected = new Set<string>();
    for (const from of everyPosition) {
      for (const to of everyPosition) {
        if (Math.abs(ORDER.indexOf(from.string) - ORDER.indexOf(to.string)) === 1 && from.midi === to.midi) expected.add(`${from.string}${from.fret}>${to.string}`);
      }
    }
    expect(new Set(candidates.map(round => `${round.from[0]}${round.from[1]}>${round.to}`))).toEqual(expected);
    expect(candidates.length).toBe(expected.size);
    // Dokumentoitu määrä (docs/oppiminen/otelauta-ydinopinnot-116-2026-11-23.md).
    expect(candidates.length).toBe(82);
    expect(candidates.filter(crossesGB)).toHaveLength(18);
  });

  it('jokaisen ehdokkaan vastaus on yhtä korkea ja palaute hyväksyy vain sen', () => {
    for (const round of candidates) {
      const answer = unisonAnswer(round);
      expect(pitchAt(answer.string, answer.fret)).toBe(pitchAt(...(round.from as Position)));
      expect(answer.fret).toBeGreaterThanOrEqual(0);
      expect(answer.fret).toBeLessThanOrEqual(12);
      const gap = Math.abs(answer.fret - round.from[1]);
      expect(gap, `${round.from} → ${round.to}`).toBe(crossesGB(round) ? 4 : 5);
      for (let fret = 0; fret <= 12; fret++) {
        const result = checkUnison(round, round.to, fret);
        expect(result.ok, `${round.from} → ${round.to} ${fret}`).toBe(fret === answer.fret);
        if (fret === answer.fret) expect(result.message).toBe(`Oikein. Molemmat ovat ${pitchName(answer.midi)}.${crossesGB(round) ? ' G- ja B-kielen väli on neljä nauhaa.' : ''}`);
        const diff = pitchAt(round.to, fret) - answer.midi;
        if (diff && diff % 12 === 0) expect(result.kind).toBe('oktaavi');
        if (diff && diff % 12) expect(result.message).toContain(diff > 0 ? 'kohti satulaa' : 'kohti tallaa');
      }
    }
  });

  it('opettava esimerkki on ensin: vapaa A → E 5', () => {
    expect(unisonAnswer(UNISON_EXAMPLE)).toMatchObject({ string: 'E', fret: 5, midi: 45 });
    expect(unisonPrompt(UNISON_EXAMPLE, true)).toBe('Vapaa A-kieli soi A2. Sama A2 löytyy paksulta E-kieleltä viisi nauhaa kohti tallaa. Valitse se.');
    expect(checkUnison(UNISON_EXAMPLE, 'E', 5).message).toBe('Oikein. Molemmat ovat A2.');
  });

  it('generaattori: kelvolliset, vaihtelevat tehtävät, G–B vähintään joka neljäs, ei välitöntä toistoa', () => {
    const keys = new Set(candidates.map(round => `${round.from[0]}${round.from[1]}>${round.to}`));
    const pairs = new Set<string>();
    const seen = new Set<string>();
    let thicker = 0;
    for (const history of runs<UnisonRound>((rand, previous) => generateUnisonRound(rand, previous))) {
      history.forEach((round, index) => {
        const key = `${round.from[0]}${round.from[1]}>${round.to}`;
        expect(keys.has(key)).toBe(true);
        seen.add(key);
        pairs.add([round.from[0], round.to].sort().join(''));
        if (ORDER.indexOf(round.to) < ORDER.indexOf(round.from[0])) thicker++;
        const before = history.slice(Math.max(0, index - 3), index);
        expect(before.some(previous => previous.from[0] === round.from[0] && previous.from[1] === round.from[1])).toBe(false);
        if (index > 0) expect(unisonAnswer(history[index - 1]).midi).not.toBe(unisonAnswer(round).midi);
        if (index >= 3) expect(history.slice(index - 3, index + 1).some(crossesGB)).toBe(true);
      });
    }
    expect(pairs.size).toBe(5);
    expect(seen.size).toBeGreaterThan(candidates.length * 0.9);
    const total = SEEDS.length * 400;
    expect(thicker / total).toBeGreaterThan(0.35);
    expect(thicker / total).toBeLessThan(0.65);
  });
});

describe('02 · Kuule ja löydä oktaavi', () => {
  it('lähtöpaikoilla on oktaavi alas, unisono toisella kielellä ja oktaavi ylös', () => {
    const refs = octaveReferences();
    const expected = everyPosition.filter(position =>
      everyPosition.some(other => other.midi === position.midi - 12) &&
      everyPosition.some(other => other.midi === position.midi + 12) &&
      everyPosition.some(other => other.midi === position.midi && other.string !== position.string));
    expect(refs.map(position => `${position.string}${position.fret}`)).toEqual(expected.map(position => `${position.string}${position.fret}`));
    expect(refs).toHaveLength(35);
  });

  const all = runs<OctaveRound>((rand, previous) => generateOctaveRound(rand, previous), 500);

  it('jokainen tehtävä: täsmälleen yksi oikea paikka, erot −12/0/+12, eri kielet, kaikki nauhoilla 0–12', () => {
    for (const history of all) {
      for (const round of history) {
        const ref = pitchAt(...(round.ref as Position));
        const diffs = round.places.map(place => pitchAt(...(place.position as Position)) - ref);
        expect([...diffs].sort((a, b) => a - b)).toEqual([-12, 0, 12]);
        round.places.forEach((place, index) => expect(diffs[index]).toBe(OCTAVE_RELATIONS[place.key]));
        expect(new Set(round.places.map(place => place.position[0])).size).toBe(3);
        expect(round.places.some(place => place.position[0] === round.ref[0] && place.position[1] === round.ref[1])).toBe(false);
        expect(round.places.find(place => place.key === 'sama')!.position[0]).not.toBe(round.ref[0]);
        expect(round.places.filter(place => pitchAt(...(place.position as Position)) === mysteryPitch(round))).toHaveLength(1);
        expect(round.places[round.answer].key).toBe(round.relation);
        for (const place of round.places) expect(place.position[1]).toBeGreaterThanOrEqual(0);
        for (const place of round.places) expect(place.position[1]).toBeLessThanOrEqual(12);
      }
    }
  });

  it('vastauspaikan numero ja suhde eivät ole ennustettavia', () => {
    const answers = all.flat().map(round => round.answer);
    const relations = all.flat().map(round => round.relation);
    for (const value of [0, 1, 2]) {
      const share = answers.filter(answer => answer === value).length / answers.length;
      expect(share).toBeGreaterThan(0.29);
      expect(share).toBeLessThan(0.38);
    }
    for (const key of Object.keys(OCTAVE_RELATIONS)) {
      const share = relations.filter(relation => relation === key).length / relations.length;
      expect(share).toBeGreaterThan(0.28);
      expect(share).toBeLessThan(0.39);
    }
    // Paikkanumeron järjestys ei toistu: peräkkäisten vastausten numero sama noin kolmanneksessa.
    let same = 0;
    let pairs = 0;
    for (const history of all) {
      history.forEach((round, index) => {
        if (!index) return;
        pairs++;
        if (round.answer === history[index - 1].answer) same++;
        if (index >= 2) expect(new Set([history[index - 2].relation, history[index - 1].relation, round.relation]).size).toBeGreaterThan(1);
      });
    }
    expect(same / pairs).toBeGreaterThan(0.25);
    expect(same / pairs).toBeLessThan(0.42);
    // Kiinteä kuuden vastauksen sarja (esim. 3–1–2–3–1–2) ei toistu kahden eri siemenen välillä.
    expect(new Set(all.map(history => history.slice(0, 6).map(round => round.answer).join(''))).size).toBe(SEEDS.length);
    // Paksumman kielen paikka ei aina ole numero 1: järjestys ei seuraa kieliä.
    const thickestFirst = all.flat().filter(round => {
      const indices = round.places.map(place => ORDER.indexOf(place.position[0]));
      return indices[0] === Math.min(...indices);
    }).length / all.flat().length;
    expect(thickestFirst).toBeLessThan(0.45);
  });

  it('palaute: suhde ja paikka', () => {
    const round = generateOctaveRound(createRandom(5));
    const label = { alempi: 'oktaavia matalampi', sama: 'yhtä korkea', ylempi: 'oktaavia korkeampi' }[round.relation];
    expect(checkOctaveRelation(round, round.relation)).toMatchObject({ ok: true, message: `Oikein: ${label}. Missä se soi?` });
    const wrong = Object.keys(OCTAVE_RELATIONS).find(key => key !== round.relation)!;
    expect(checkOctaveRelation(round, wrong)).toMatchObject({ ok: false, message: `Arvoitussävel oli ${label}. Missä se soi?` });
    const right = checkOctavePlace(round, round.answer);
    expect(right.ok).toBe(true);
    expect(right.message).toContain(pitchName(mysteryPitch(round)));
    const other = [0, 1, 2].find(index => index !== round.answer)!;
    expect(checkOctavePlace(round, other)).toMatchObject({ ok: false });
    expect(checkOctavePlace(round, other).message).toContain(`Arvoitussävel oli paikka ${round.answer + 1}`);
  });
});

describe('03 · Etsi perussävel E- ja A-kieleltä', () => {
  it('kiintopisteet ja päättelyn selitys kaikille E- ja A-kielen paikoille', () => {
    expect(LANDMARKS).toEqual([0, 3, 5, 7, 12]);
    expect(LANDMARKS.map(fret => E_STRING[fret])).toEqual(['E', 'G', 'A', 'B', 'E']);
    expect(LANDMARKS.map(fret => A_STRING[fret])).toEqual(['A', 'C', 'D', 'E', 'A']);
    for (const string of ROOT_STRINGS) {
      for (let fret = 0; fret <= 12; fret++) {
        const mark = nearestLandmark(fret);
        expect(Math.abs(fret - mark)).toBeLessThanOrEqual(2);
        const table = string === 'E' ? E_STRING : A_STRING;
        const reason = landmarkReason(string, fret);
        if (fret === mark) expect(reason).toBe('Se on kiintopiste.');
        else expect(reason).toContain(`${table[mark]}:n`);
      }
    }
    expect(landmarkReason('E', 8)).toBe('Löydät sen B:n vierestä (7. nauha).');
    expect(landmarkReason('A', 10)).toBe('Se on kaksi nauhaa A:n alapuolella (12. nauha).');
    expect(landmarkReason('E', 1)).toBe('Löydät sen E:n vierestä (vapaa kieli).');
  });

  const all = SEEDS.map(seed => {
    const rand = createRandom(seed);
    const history: RootRound[] = [];
    for (let index = 0; index < 300; index++) history.push(generateRootRound(rand, index, history));
    return history;
  });

  it('generaattori: kelvolliset etsi- ja nimeä-tehtävät, ♯/♭ vasta alun jälkeen, vaihtelu', () => {
    let chromatic = 0;
    const names = new Set<string>();
    const frets = new Set<number>();
    for (const history of all) {
      history.forEach((round, index) => {
        if (round.type === 'nimea') {
          expect(ROOT_STRINGS).toContain(round.at[0]);
          expect(round.at[1]).toBeGreaterThan(0);
          expect(NATURALS).toContain(rootAnswer(round));
          frets.add(round.at[1]);
        } else {
          expect(ROOT_STRINGS).toContain(round.string);
          const answers = rootAnswer(round) as number[];
          expect(answers.length).toBeGreaterThan(0);
          for (const fret of answers) expect(noteName(pitchAt(round.string, fret))).toBe(round.note);
          if (ACCIDENTALS.includes(round.note)) {
            chromatic++;
            expect(index).toBeGreaterThanOrEqual(CHROMATIC_FROM);
          }
          names.add(round.note);
          for (const fret of answers) frets.add(fret);
        }
        if (index >= 2) expect(new Set(history.slice(index - 2, index + 1).map(item => item.type)).size).toBe(2);
      });
    }
    expect(chromatic).toBeGreaterThan(0);
    expect(names.size).toBe(12);
    // Tehtävät kattavat myös muut kuin kiintopistenauhat.
    expect([...frets].filter(fret => !LANDMARKS.includes(fret)).length).toBeGreaterThanOrEqual(7);
  });

  it('tehtäväjakauma: alussa kiintopisteet, myöhemmin niiden välissä olevien sävelten päättely', () => {
    expect(LANDMARK_PHASE).toBe(4);
    expect(landmarkShare(0)).toBe(0.75);
    expect(landmarkShare(LANDMARK_PHASE)).toBe(0.2);
    // Vanha jakauma: nimeä-tehtävistä 4/7 = 57 % kiintopisteissä.
    const naturals = ALL_POSITIONS.filter(item => ROOT_STRINGS.includes(item.string) && item.fret > 0 && NATURALS.includes(noteName(item.midi)));
    expect(naturals.filter(item => LANDMARKS.includes(item.fret)).length / naturals.length).toBeCloseTo(4 / 7, 5);
    const early = all.flatMap(history => history.slice(0, LANDMARK_PHASE));
    const late = all.flatMap(history => history.slice(LANDMARK_PHASE));
    const share = (list: RootRound[]) => list.filter(isLandmarkRound).length / list.length;
    expect(share(early)).toBeGreaterThan(0.6);
    expect(share(late)).toBeGreaterThan(0.1);
    expect(share(late)).toBeLessThan(0.3);
    // Kiintopisteitä kysytään yhä myöhemminkin.
    expect(late.some(isLandmarkRound)).toBe(true);
  });

  it('palaute opettaa päättelyn', () => {
    expect(checkRootName({ type: 'nimea', at: ['E', 8] }, 'C').message).toBe('Oikein. Paksun E-kielen 8. nauha on C. Löydät sen B:n vierestä (7. nauha).');
    // Virhepalaute ei paljasta vastausta eikä kiintopisteen sävelnimeä.
    expect(checkRootName({ type: 'nimea', at: ['E', 8] }, 'B')).toMatchObject({ ok: false, message: 'Ei B. Päättele lähimmästä kiintopisteestä ja laske nauhat siitä.' });
    expect(checkRootName({ type: 'nimea', at: ['E', 8] }, 'B', 2)).toMatchObject({ ok: false, message: 'Ei B. Lähin kiintopiste on 7. nauha; kysytty paikka on siitä yksi nauha kohti tallaa. Muista: E–F ja B–C ovat vierekkäin.' });
    expect(checkRootName({ type: 'nimea', at: ['A', 10] }, 'F', 2).message).toContain('kysytty paikka on siitä kaksi nauhaa kohti satulaa');
    // N3: kiintopisteessä ei ohjata päättelemään samasta kohdasta, vaan muistamaan tai käyttämään Vihjettä.
    for (const at of [['E', 12], ['A', 5], ['E', 3]] as const) {
      for (const attempt of [1, 2]) {
        const message = checkRootName({ type: 'nimea', at }, 'C♯', attempt).message;
        expect(message).toBe('Ei C♯. Tämä on kiintopiste, joka kannattaa muistaa. Vihje näyttää kiintopisteet.');
      }
    }
    for (const position of ALL_POSITIONS.filter(item => ROOT_STRINGS.includes(item.string) && item.fret > 0 && NATURALS.includes(noteName(item.midi)))) {
      const round = { type: 'nimea' as const, at: [position.string, position.fret] as const };
      for (const wrong of NATURALS.filter(name => name !== noteName(position.midi))) {
        for (const attempt of [1, 2, 3]) {
          const message = checkRootName(round, wrong, attempt).message.replace(`Ei ${wrong}.`, '').replace('Muista: E–F ja B–C ovat vierekkäin.', '').replace('Vihje näyttää', '');
          expect(message, `${position.string} ${position.fret}`).not.toMatch(/[A-G]/);
        }
      }
    }
    expect(checkRootFind({ type: 'etsi', note: 'F♯', string: 'A' }, 'A', 9).message).toBe('Oikein. A-kielen 9. nauha on F♯. Se on kaksi nauhaa E:n yläpuolella (7. nauha).');
    expect(checkRootFind({ type: 'etsi', note: 'D', string: 'E' }, 'E', 8).message).toBe('E 8 on C. D löytyy kohti tallaa.');
    // Oikea sävelnimi väärällä kielellä tunnustetaan, mutta kielirajaus pysyy.
    expect(checkRootFind({ type: 'etsi', note: 'D', string: 'E' }, 'A', 5)).toMatchObject({ ok: false, kind: 'toinen-kieli', message: 'Sekin on D, mutta etsi paksulta E-kieleltä.' });
    expect(checkRootFind({ type: 'etsi', note: 'D', string: 'E' }, 'A', 4)).toMatchObject({ ok: false, kind: 'vaara-kieli' });
  });
});

describe('04 · Liiku otelaudalla', () => {
  it('jokaisen tason ja sävelen paikat lasketaan ohjelmallisesti oikein', () => {
    for (const [key, level] of Object.entries(FIND_LEVELS)) {
      for (const note of level.notes) {
        const expected = everyPosition.filter(position => level.strings.includes(position.string) && NOTE_NAMES[position.midi % 12] === note);
        expect(findPositions(note, key), `${key} ${note}`).toEqual(expected);
        expect(expected.length).toBeGreaterThanOrEqual(level.strings.length === 2 ? 2 : 6);
      }
    }
    expect(FIND_LEVELS.ea.strings).toEqual(['E', 'A']);
    expect(FIND_LEVELS.kaikki.notes).toEqual(NATURALS);
    expect(FIND_LEVELS.kromaattinen.notes).toEqual(NOTE_NAMES);
  });

  it('oktaaviryhmät erottavat saman nimen korkeudet', () => {
    const groups = octaveGroups(positionsOf('D'));
    expect([...groups.keys()]).toEqual(['D3', 'D4', 'D5']);
    expect(groups.get('D3')!.map(position => shortPosition(position.string, position.fret))).toEqual(['E 10', 'A 5', 'vapaa D']);
    const g = octaveGroups(positionsOf('G'));
    expect([...g].map(([pitch, items]) => `${pitch}×${items.length}`)).toEqual(['G2×1', 'G3×3', 'G4×3']);
  });

  it('kokonainen kierros jokaisella sävelellä ja tasolla: palaute, unisono ja valmis', () => {
    for (const [key, level] of Object.entries(FIND_LEVELS)) {
      for (const note of level.notes) {
        const all = findPositions(note, key);
        const found = new Map<string, FretPosition>();
        all.forEach((position, index) => {
          const result = checkFindAll(note, found, position.string, position.fret, key);
          expect(result.ok).toBe(true);
          expect(result.kind).toBe(index === all.length - 1 ? 'valmis' : 'uusi');
          if (all.slice(0, index).some(other => other.midi === position.midi)) expect(result.message).toContain('sama korkeus kuin');
          found.set(`${position.string}${position.fret}`, position);
          expect(checkFindAll(note, found, position.string, position.fret, key).kind).toBe('jo');
        });
        const wrong = everyPosition.find(position => level.strings.includes(position.string) && NOTE_NAMES[position.midi % 12] !== note)!;
        expect(checkFindAll(note, found, wrong.string, wrong.fret, key).ok).toBe(false);
      }
    }
  });

  it('vihje ei koskaan osoita jo löydettyä paikkaa ja etenee päättelystä merkintään', () => {
    for (const [key, level] of Object.entries(FIND_LEVELS)) {
      for (const note of level.notes) {
        const all = findPositions(note, key);
        for (let count = 0; count < all.length; count++) {
          const found = new Map(all.slice(0, count).map(position => [`${position.string}${position.fret}`, position]));
          const final = findHint(note, found, key, 3);
          expect(final.mark).not.toBeNull();
          expect(found.has(`${final.mark![0]}${final.mark![1]}`)).toBe(false);
          expect(noteName(pitchAt(final.mark![0], final.mark![1]))).toBe(note);
          expect(findHint(note, found, key, 1).mark).toBeNull();
        }
      }
    }
    expect(findHint('G', new Map([['E3', { string: 'E', fret: 3, midi: 43 }]]), 'kaikki', 2).message)
      .toBe('Vihje: lähde paikasta E 3. Oktaavi on kaksi kieltä ohuemmalle, kaksi nauhaa kohti tallaa.');
  });

  it('kohdesävelet vaihtelevat eivätkä toistu kahden tehtävän sisällä', () => {
    for (const key of Object.keys(FIND_LEVELS)) {
      for (const seed of SEEDS) {
        const rand = createRandom(seed);
        const history: string[] = [];
        for (let index = 0; index < 200; index++) {
          const target = generateFindTarget(rand, key, history);
          expect(history.slice(-2)).not.toContain(target);
          history.push(target);
        }
        expect(new Set(history)).toEqual(new Set(FIND_LEVELS[key as keyof typeof FIND_LEVELS].notes));
      }
    }
  });
});

describe('sisältölähteet ja muodostetut sivut', () => {
  const lessons = ['sama-savel-toiselta-kielelta', 'kuule-oktaavi', 'perussavel-e-ja-a-kielelta', 'liiku-otelaudalla'];
  const kinds = ['unisono', 'oktaavi', 'perussavel', 'liiku'];
  const source = (slug: string) => read(`tools/oppimiskartta/sisallot/otelauta/${slug}.html`);

  it('ilman JavaScriptiä näkyvän tekstiversion vastaukset ovat oikein', () => {
    const answer = (from: Position, to: string) => shortPosition(to, unisonAnswer({ from, to }).fret);
    expect(source(lessons[0])).toContain(`1. ${answer(['A', 0], 'E')} · 2. ${answer(['B', 0], 'G')} · 3. ${answer(['D', 7], 'G')} · 4. ${answer(['A', 3], 'E')}.`);
    expect(source(lessons[0])).toContain('1. E 5 · 2. G 4 · 3. G 2 · 4. E 8.');
    const at = (string: string, fret: number) => pitchName(pitchAt(string, fret));
    expect(source(lessons[1])).toContain(`e 5 = ${at('e', 5)} korkeampi, E 5 = ${at('E', 5)} matalampi, D 7 = ${at('D', 7)} yhtä korkea`);
    expect(source(lessons[1])).toContain(`e 10 = ${at('e', 10)} korkeampi, G 7 = ${at('G', 7)} yhtä korkea, vapaa D = ${at('D', 0)} matalampi`);
    expect(source(lessons[2])).toContain(`1. ${noteName(pitchAt('E', 8))}, B:n (7. nauha) vieressä`);
    expect(source(lessons[2])).toContain(`3. A ${(rootAnswer({ type: 'etsi', note: 'F♯', string: 'A' }) as number[])[0]}`);
    expect(source(lessons[2])).toContain(`4. ${noteName(pitchAt('A', 10))}`);
    const groups = (name: string) => [...octaveGroups(positionsOf(name))].map(([pitch, items]) => {
      const places = items.map(item => shortPosition(item.string, item.fret).replace(/^vapaa (\S+)$/, 'vapaa $1-kieli'));
      const joined = places.length > 1 ? `${places.slice(0, -1).join(', ')} ja ${places.at(-1)}` : places[0];
      return `${joined} (${pitch})`;
    }).join(' · ');
    expect(source(lessons[3])).toContain(groups('D'));
    expect(source(lessons[3])).toContain(groups('F'));
  });

  it('jokainen harjoitus: lyhyt ohje, kitaravinkki, ei väitettä mitatusta soitosta', () => {
    lessons.forEach((slug, index) => {
      const html = source(slug);
      expect(html).toContain(`data-otelautaharjoitus="${kinds[index]}"`);
      expect(html).toContain('data-otelauta-sovellus hidden');
      expect(html).toContain('data-otelauta-teksti');
      expect(html).toContain('Kitara käsillä?');
      expect(html).toContain('Kokeile kitaralla');
      expect(html).toContain('Sivu ei kuuntele soittoasi');
      const intro = html.match(/<p class="otelauta-johdanto">([^<]*(?:<[^>]+>[^<]*)*?)<\/p>/)![1].replace(/<[^>]+>/g, '');
      expect(intro.split(/[.?!]\s/).length, slug).toBeLessThanOrEqual(3);
      expect(html).not.toMatch(/soitit oikein|osaat nyt/i);
    });
  });

  it('aihesivulla Ydinopinnot ensin, neljä uutta harjoitusta ja aiemmat kahdeksan sisältöä ennallaan', () => {
    const page = read('oppi/otelauta/index.html');
    const core = page.indexOf('<details class="study-unit" id="ydinopinnot">');
    const legacy = page.indexOf('<details class="study-unit study-unit--legacy" id="aiemmat">');
    expect(core).toBeGreaterThan(-1);
    expect(legacy).toBeGreaterThan(core);
    const newIds = [...page.matchAll(/data-study-attempt-status="([^"]+)"/g)].map(match => match[1]);
    expect(newIds).toEqual(lessons.map(slug => `harjoitus:${slug}`));
    const oldIds = [...page.matchAll(/data-study-status="([^"]+)"/g)].map(match => match[1]);
    expect(oldIds).toEqual([
      'otelauta', 'harjoitus:etsi-a-ilman-asteikkokuviota', 'harjoitus:etsi-sama-savel',
      'perussavel', 'harjoitus:etsi-savel-kahdelta-kielelta', 'harjoitus:nimea-savel',
      'caged', 'harjoitus:soita-c-kahdesta-kohdasta',
    ]);
    expect(newIds.some(id => oldIds.includes(id))).toBe(false);
    const hrefs = [...page.slice(legacy).matchAll(/class="study-choice" id="valinta-([^"]+)" href="([^"]+)"/g)].map(match => [match[1], match[2]]);
    expect(hrefs).toEqual([
      'otelauta', 'etsi-a-ilman-asteikkokuviota', 'etsi-sama-savel', 'perussavel',
      'etsi-savel-kahdelta-kielelta', 'nimea-savel', 'caged', 'soita-c-kahdesta-kohdasta',
    ].map(slug => [slug, `${slug}.html`]));
    for (const kind of kinds) expect(page).toContain(`data-otelautaharjoitus="${kind}"`);
    expect(page).toMatch(/assets\/otelauta-ydinopinnot\.js\?v=[a-f0-9]{10}/);
    expect(page).toMatch(/assets\/otelauta-ydinopinnot\.css\?v=[a-f0-9]{10}/);
    const home = read('index.html');
    const card = home.match(/<a class="topic-card" id="aihe-otelauta"[^>]*data-study-items="([^"]+)"/);
    expect(card![1].split(' ')).toEqual(oldIds);
  });

  it('omat sivut käyttävät keskittymistilaa ja kokeiltu-merkintää; vanhat sivut eivät lataa uutta moduulia', () => {
    for (const slug of lessons) {
      const page = read(`oppi/otelauta/${slug}.html`);
      expect(page).toContain(`data-study-item="harjoitus:${slug}" data-study-kind="harjoitus" data-study-mark="kokeiltu"`);
      expect(page).toContain('study-page--focus');
      expect(page).toContain(`href="index.html#valinta-${slug}"`);
      expect(page).toContain('otelauta-ydinopinnot.js');
    }
    for (const slug of ['otelauta', 'etsi-a-ilman-asteikkokuviota', 'etsi-sama-savel', 'perussavel',
      'etsi-savel-kahdelta-kielelta', 'nimea-savel', 'caged', 'soita-c-kahdesta-kohdasta']) {
      const page = read(`oppi/otelauta/${slug}.html`);
      expect(page, slug).not.toContain('otelauta-ydinopinnot');
      expect(page, slug).toContain('Merkitse ');
    }
  });
});

describe('suuntasanasto: fyysinen suunta (satula/talla) ja sävelkorkeus erillään', () => {
  const banned = /ylemmäs|alemmas|ylempänä|alempana|ylempää|alempaa/;
  it('01: väärän vastauksen viestit käyttävät satulaa ja tallaa, ei ylempää/alempaa', () => {
    const round = { from: ['A', 0], to: 'E' } as UnisonRound;
    for (const fret of Array.from({ length: 13 }, (_, index) => index)) {
      const message = checkUnison(round, 'E', fret).message;
      expect(message).not.toMatch(banned);
    }
    expect(checkUnison(round, 'E', 2).message).toBe('F♯2 – liian matala. Siirry kolme nauhaa kohti tallaa.');
    expect(checkUnison(round, 'E', 9).message).toBe('C♯3 – liian korkea. Siirry neljä nauhaa kohti satulaa.');
  });
  it('03 ja 04: virheviestit eivät käytä ylempää/alempaa', () => {
    for (const fret of [1, 2, 4, 6, 8, 10, 11]) {
      expect(checkRootName({ type: 'nimea', at: ['A', fret] }, 'X', 2).message).not.toMatch(banned);
      expect(checkRootFind({ type: 'etsi', note: 'F', string: 'A' }, 'A', fret).message).not.toMatch(banned);
      expect(checkFindAll('E', new Map(), 'E', fret).message).not.toMatch(banned);
    }
    expect(checkRootFind({ type: 'etsi', note: 'F', string: 'A' }, 'A', 5).message).toBe('A 5 on D. F löytyy kohti tallaa.');
  });
  it('02: siirtojen kuvaus ja vihje', () => {
    expect(shapeWords(['E', 5], ['D', 7])).not.toMatch(banned);
    expect(unisonHint({ from: ['A', 0], to: 'E' } as UnisonRound)).toContain('kohti tallaa paksummalla');
    expect(unisonHint({ from: ['E', 5], to: 'A' } as UnisonRound)).toContain('kohti satulaa ohuemmalla');
  });
});
