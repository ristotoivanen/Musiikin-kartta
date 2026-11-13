import { describe, expect, it } from 'vitest';
import {
  DEGREE_CHOICES, MODE_PAIRS, QUESTIONS_PER_STRING, changeQuestion, degreeMidi, locateQuestions, naturalPositions,
  phraseNotes, scaleNotes, whichQuestion, withDrone,
} from '../harjoittelija/earData';
import { music, pc } from '../harjoittelija/music';

const NAMES = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
const named = (midi: number) => NAMES[pc(midi)] + (Math.floor(midi / 12) - 1);
/** Toistettava satunnaislukujono testejä varten (Lehmer). Siemen sekoitetaan, jotta pienilläkin
 * siemenillä ensimmäinen arvo jakautuu koko välille. */
const seeded = (seed: number) => {
  let state = (seed * 2654435761) % 2147483647 || 1;
  return () => ((state = (state * 16807) % 2147483647) - 1) / 2147483646;
};

describe('Kuuntele ja paikanna sävel: kolme ohuinta kieltä, nauhat 0–5', () => {
  it('issue #30:n testitapaukset: luonnolliset sävelet ja nauhat', () => {
    const table = (string: number) => naturalPositions(string).map(p => `${named(p.midi)}@${p.fret}`);
    expect(table(0)).toEqual(['E4@0', 'F4@1', 'G4@3', 'A4@5']);
    expect(table(1)).toEqual(['B3@0', 'C4@1', 'D4@3', 'E4@5']);
    expect(table(2)).toEqual(['G3@0', 'A3@2', 'B3@4', 'C4@5']);
    // e-kielellä ei ole C-säveltä nauhoilla 0–5.
    expect(naturalPositions(0).some(p => pc(p.midi) === 0)).toBe(false);
    for (const string of [0, 1, 2]) for (const p of naturalPositions(string))
      expect(p.midi).toBe(music.OPEN_PITCHES[string] + p.fret);
  });

  it('sama sävelkorkeus toisella kielellä: G5 ja B1 ovat molemmat C4', () => {
    expect(naturalPositions(2).find(p => p.fret === 5)!.midi).toBe(naturalPositions(1).find(p => p.fret === 1)!.midi);
  });

  it('kysymykset: vain valitun kielen luonnolliset sävelet, kaikki mukana, ei samaa peräkkäin', () => {
    for (let seed = 1; seed < 200; seed++) for (const string of [0, 1, 2]) {
      const questions = locateQuestions(string, QUESTIONS_PER_STRING, seeded(seed));
      const allowed = new Set(naturalPositions(string).map(p => p.fret));
      expect(questions).toHaveLength(QUESTIONS_PER_STRING);
      expect(questions.every(q => q.string === string && allowed.has(q.fret))).toBe(true);
      expect(new Set(questions.map(q => q.fret)).size).toBe(allowed.size);
      for (let i = 1; i < questions.length; i++) expect(questions[i].fret).not.toBe(questions[i - 1].fret);
    }
  });
});

describe('Kuuntele ja vertaile moodeja', () => {
  const aPair = MODE_PAIRS['a-aeolian-dorian'], cPair = MODE_PAIRS['c-ionian-mixolydian'];

  it('moodiparit ovat teoreettisesti oikein ja niillä on sama toonika', () => {
    const spell = (pair: typeof aPair, i: 0 | 1) => pair.modes[i].steps.map(step => NAMES[pc(pair.tonic + step)]);
    expect(spell(aPair, 0)).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A']);
    expect(spell(aPair, 1)).toEqual(['A', 'B', 'C', 'D', 'E', 'F♯', 'G', 'A']);
    expect(spell(cPair, 0)).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']);
    expect(spell(cPair, 1)).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'A♯', 'C']); // B♭ = A♯ korkeudeltaan
    expect(cPair.modes[1].spelled[6]).toBe('B♭');
    expect(aPair.modes[1].spelled[5]).toBe('F♯');
    for (const pair of [aPair, cPair]) {
      const [m0, m1] = pair.modes;
      const different = m0.steps.map((step, i) => step !== m1.steps[i] ? i + 1 : 0).filter(Boolean);
      expect(different, pair.id).toEqual([pair.degree]);
      expect(Math.abs(m0.steps[pair.degree - 1] - m1.steps[pair.degree - 1])).toBe(1);
      expect(scaleNotes(pair, m0)[0].midi).toBe(scaleNotes(pair, m1)[0].midi);
      expect(pc(pair.drone)).toBe(pc(pair.tonic));
      expect(pair.drone).toBe(pair.tonic - 12);
    }
    expect([aPair.degree, aPair.degreeNames]).toEqual([6, ['F', 'F♯']]);
    expect([cPair.degree, cPair.degreeNames]).toEqual([7, ['B', 'B♭']]);
  });

  it('otelaudan paikat vastaavat sävelkorkeuksia ja kattavat molempien moodien sävelet', () => {
    for (const pair of [aPair, cPair]) {
      for (const [midi, position] of Object.entries(pair.fingering)) expect(position.midi, pair.id).toBe(Number(midi));
      for (const mode of pair.modes) for (const n of [...scaleNotes(pair, mode), ...phraseNotes(pair, mode)])
        expect(pair.fingering[n.midi], `${mode.name} ${named(n.midi)}`).toBeDefined();
      const frets = Object.values(pair.fingering).map(p => p.fret);
      expect(Math.max(...frets) - Math.min(...frets)).toBeLessThanOrEqual(4); // yksi käsiasema
    }
    expect(aPair.fingering[65]).toMatchObject({ string: 2, fret: 10 }); // F4
    expect(aPair.fingering[66]).toMatchObject({ string: 2, fret: 11 }); // F♯4
    expect(cPair.fingering[70]).toMatchObject({ string: 0, fret: 6 }); // B♭4
    expect(cPair.fingering[71]).toMatchObject({ string: 0, fret: 7 }); // B4
  });

  it('fraasi on sama rytmi molemmissa, ja eroava aste kuuluu siinä vähintään kahdesti', () => {
    for (const pair of [aPair, cPair]) {
      const [a, b] = pair.modes.map(mode => phraseNotes(pair, mode));
      expect(a.map(n => [n.beat, n.duration])).toEqual(b.map(n => [n.beat, n.duration]));
      const changed = a.filter((n, i) => n.midi !== b[i].midi);
      expect(changed.length, pair.id).toBeGreaterThanOrEqual(2);
      expect(changed.every(n => n.midi === degreeMidi(pair, pair.modes[0], pair.degree))).toBe(true);
      expect(pc(a.at(-1)!.midi)).toBe(pc(pair.tonic)); // päättyy toonikaan
      expect(a.at(-1)!.beat + a.at(-1)!.duration).toBe(12); // kolme 4/4-tahtia
    }
  });

  it('urkupiste kattaa koko näytteen hiljaisemmalla tasolla', () => {
    const notes = withDrone(aPair, [...scaleNotes(aPair, aPair.modes[0]), ...scaleNotes(aPair, aPair.modes[1], 11)]);
    expect(notes[0]).toEqual({ midi: 45, beat: 0, duration: 20, level: .1 });
  });

  it('kysymysten arvonta: järjestys ja kysytty moodi vaihtelevat, vastaus vastaa järjestystä', () => {
    const answers = new Set<string>();
    for (let seed = 1; seed < 100; seed++) {
      const q = whichQuestion(aPair, seeded(seed));
      expect(q.order[q.answer].id).toBe(q.asked.id);
      expect(new Set(q.order.map(m => m.id)).size).toBe(2);
      answers.add(`${q.order[0].id}:${q.asked.id}`);
      const c = changeQuestion(seeded(seed));
      const up = c.first.steps[c.pair.degree - 1] < c.second.steps[c.pair.degree - 1];
      expect(c.answer).toEqual({ degree: c.pair.degree, direction: up ? 'up' : 'down' });
      expect(DEGREE_CHOICES).toContainEqual(c.answer);
    }
    expect(answers.size).toBe(4);
  });
});
