import { at, pc, type Position } from './music';

/*
 * Kuunteluharjoitusten (issue #30) musiikillinen data. Ei tallennettua etenemistä:
 * ensimmäinen versio ei muuta olemassa olevia localStorage-avaimia.
 */

// ---------------------------------------------------------------------------------------------
// A. Kuuntele ja paikanna sävel: kolme ohuinta kieltä, nauhat 0–5, luonnolliset sävelet.
// ---------------------------------------------------------------------------------------------

/** Kielten järjestys: ohut e, B, G (indeksit kuten muuallakin: 0 = ohut e). */
export const LOCATE_STRINGS = [0, 1, 2] as const;
export const LOCATE_MIN_FRET = 0;
export const LOCATE_MAX_FRET = 5;
export const QUESTIONS_PER_STRING = 5;
const NATURAL = new Set([0, 2, 4, 5, 7, 9, 11]);

/** Kielen luonnolliset sävelet nauhoilla 0–5 nousevassa järjestyksessä. */
export function naturalPositions(string: number): Position[] {
  return Array.from({ length: LOCATE_MAX_FRET - LOCATE_MIN_FRET + 1 }, (_, i) => at(string, LOCATE_MIN_FRET + i))
    .filter(position => NATURAL.has(pc(position.midi)));
}

/**
 * Kysymysjärjestys yhdelle kielelle: jokainen luonnollinen sävel vähintään kerran (kun kysymyksiä
 * on vähintään yhtä monta kuin säveliä), loput satunnaisesti, ei kahta samaa peräkkäin.
 * `random` on vaihdettavissa testejä varten.
 */
export function locateQuestions(string: number, count = QUESTIONS_PER_STRING, random: () => number = Math.random): Position[] {
  const pool = naturalPositions(string);
  const pick = <T,>(items: T[]) => items[Math.min(items.length - 1, Math.floor(random() * items.length))];
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.min(i, Math.floor(random() * (i + 1)));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const out = shuffled.slice(0, Math.min(count, shuffled.length));
  while (out.length < count) out.push(pick(pool.filter(p => p.fret !== out[out.length - 1].fret)));
  return out;
}

/**
 * Kuuntelutestin yksi kysymys (pedagoginen vaatimus päivitetty 14.11.2026, issue #30):
 * 1) mallisarja: kielen kaikki luonnolliset sävelet nauhoilta 0–5 nousevasti, yksi isku kukin,
 * 2) selvä tauko QUESTION_PAUSE_BEATS iskua, 3) kysytty sävel kahden iskun mittaisena.
 * Sama järjestys soi jokaisen kysymyksen alussa ja Kuuntele uudelleen -painikkeesta.
 */
export const QUESTION_TEMPO = 80;
export const QUESTION_PAUSE_BEATS = 2;
export const QUESTION_TARGET_BEATS = 2;
export type QuestionStep = { midi: number; beat: number; duration: number; role: 'model' | 'target'; position: Position };
export function questionSequence(string: number, target: Position): QuestionStep[] {
  const model = naturalPositions(string);
  if (target.string !== string || !model.some(p => p.fret === target.fret))
    throw new Error('Kysytyn sävelen pitää kuulua valitun kielen mallisarjaan.');
  const steps: QuestionStep[] = model.map((position, beat) => ({ midi: position.midi, beat, duration: 1, role: 'model', position }));
  steps.push({ midi: target.midi, beat: model.length + QUESTION_PAUSE_BEATS, duration: QUESTION_TARGET_BEATS, role: 'target', position: target });
  return steps;
}

// ---------------------------------------------------------------------------------------------
// B. Kuuntele ja vertaile moodeja: sama toonika, yksi eroava sävelaste.
// ---------------------------------------------------------------------------------------------

export type ModeName = 'aeolian' | 'dorian' | 'ionian' | 'mixolydian';
export type ModePairId = 'a-aeolian-dorian' | 'c-ionian-mixolydian';
export type ModeVoice = { id: ModeName; name: string; steps: number[]; spelled: string[] };
export type ModePair = {
  id: ModePairId; title: string; tonic: number; tonicName: string; drone: number;
  modes: [ModeVoice, ModeVoice];
  /** Asteen järjestysnumero (1–7), joka eroaa, ja sen nimet kummassakin moodissa. */
  degree: number; degreeNames: [string, string]; intervalNames: [string, string];
  /** Sävelkorkeus → soitettava paikka (yksi oktaavi toonikasta toonikaan, molempien moodien sävelet). */
  fingering: Record<number, Position>;
  /** Asteina (1–8) kirjoitettu lyhyt rytminen fraasi, joka korostaa eroavaa astetta. */
  phrase: { degree: number; duration: number }[];
  explanation: string;
};

const AEOLIAN: ModeVoice = { id: 'aeolian', name: 'A-aiolinen', steps: [0, 2, 3, 5, 7, 8, 10, 12], spelled: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'] };
const DORIAN: ModeVoice = { id: 'dorian', name: 'A-doorinen', steps: [0, 2, 3, 5, 7, 9, 10, 12], spelled: ['A', 'B', 'C', 'D', 'E', 'F♯', 'G', 'A'] };
const IONIAN: ModeVoice = { id: 'ionian', name: 'C-jooninen', steps: [0, 2, 4, 5, 7, 9, 11, 12], spelled: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'] };
const MIXOLYDIAN: ModeVoice = { id: 'mixolydian', name: 'C-miksolyydinen', steps: [0, 2, 4, 5, 7, 9, 10, 12], spelled: ['C', 'D', 'E', 'F', 'G', 'A', 'B♭', 'C'] };

export const MODE_PAIRS: Record<ModePairId, ModePair> = {
  'a-aeolian-dorian': {
    id: 'a-aeolian-dorian', title: 'A-aiolinen ja A-doorinen', tonic: 57, tonicName: 'A', drone: 45,
    modes: [AEOLIAN, DORIAN], degree: 6, degreeNames: ['F', 'F♯'], intervalNames: ['♭6, pieni seksti', '6, suuri seksti'],
    // Nauhat 7–11, kielet D, G ja B: A3 D7, B3 D9, C4 D10, D4 G7, E4 G9, F4 G10 / F♯4 G11, G4 B8, A4 B10.
    fingering: { 57: at(3, 7), 59: at(3, 9), 60: at(3, 10), 62: at(2, 7), 64: at(2, 9), 65: at(2, 10), 66: at(2, 11), 67: at(1, 8), 69: at(1, 10) },
    phrase: [
      { degree: 1, duration: 1 }, { degree: 3, duration: 1 }, { degree: 5, duration: 1 }, { degree: 6, duration: 1 },
      { degree: 6, duration: 1 }, { degree: 5, duration: 1 }, { degree: 4, duration: 1 }, { degree: 3, duration: 1 },
      { degree: 2, duration: 1 }, { degree: 1, duration: 3 },
    ],
    explanation: 'Molemmissa on molliterssi C. Aiolisessa kuudes aste on F, puoli sävelaskelta kvintin E yläpuolella: kuulostaa tummalta ja haluaa laskeutua E:hen. Doorisessa kuudes aste on F♯, kokonainen sävelaskel E:n yläpuolella: mollisointi kirkastuu.',
  },
  'c-ionian-mixolydian': {
    id: 'c-ionian-mixolydian', title: 'C-jooninen ja C-miksolyydinen', tonic: 60, tonicName: 'C', drone: 48,
    modes: [IONIAN, MIXOLYDIAN], degree: 7, degreeNames: ['B', 'B♭'], intervalNames: ['7, suuri septimi', '♭7, pieni septimi'],
    // Nauhat 5–8, kielet G, B ja e: C4 G5, D4 G7, E4 B5, F4 B6, G4 B8, A4 e5, B♭4 e6 / B4 e7, C5 e8.
    fingering: { 60: at(2, 5), 62: at(2, 7), 64: at(1, 5), 65: at(1, 6), 67: at(1, 8), 69: at(0, 5), 70: at(0, 6), 71: at(0, 7), 72: at(0, 8) },
    phrase: [
      { degree: 1, duration: 1 }, { degree: 3, duration: 1 }, { degree: 5, duration: 1 }, { degree: 7, duration: 1 },
      { degree: 8, duration: 1 }, { degree: 7, duration: 1 }, { degree: 6, duration: 1 }, { degree: 5, duration: 1 },
      { degree: 3, duration: 1 }, { degree: 1, duration: 3 },
    ],
    explanation: 'Molemmissa on duuriterssi E. Joonisessa seitsemäs aste on B, puoli sävelaskelta toonikan alapuolella: johtosävel vetää C:hen. Miksolyydisessä seitsemäs aste on B♭, kokonainen sävelaskel alempana: veto heikkenee ja sointi on rennompi, bluesahtavampi.',
  },
};

/** Moodin sävelasteen (1–8) sävelkorkeus annetusta toonikasta. */
export const degreeMidi = (pair: ModePair, mode: ModeVoice, degree: number) => pair.tonic + mode.steps[degree - 1];

export type TimedNote = { midi: number; beat: number; duration: number; level?: number };

/** Nouseva asteikko neljäsosin ja pitkä toonika lopussa. */
export function scaleNotes(pair: ModePair, mode: ModeVoice, startBeat = 0): TimedNote[] {
  return mode.steps.map((step, i) => ({ midi: pair.tonic + step, beat: startBeat + i, duration: i === 7 ? 2 : 1 }));
}
/** Fraasi valitun moodin sävelin. */
export function phraseNotes(pair: ModePair, mode: ModeVoice, startBeat = 0): TimedNote[] {
  let beat = startBeat;
  return pair.phrase.map(step => {
    const event = { midi: degreeMidi(pair, mode, step.degree), beat, duration: step.duration };
    beat += step.duration;
    return event;
  });
}
/** Toonikan vahvistus: hiljainen urkupiste oktaavia alempana koko näytteen ajan. */
export function withDrone(pair: ModePair, notes: TimedNote[]): TimedNote[] {
  const start = Math.min(...notes.map(n => n.beat));
  const end = Math.max(...notes.map(n => n.beat + n.duration));
  return [{ midi: pair.drone, beat: start, duration: end - start, level: .1 }, ...notes];
}

/** Kumpi oli kumpi -kysymys: näytteiden järjestys ja kysytty moodi satunnaisesti. */
export function whichQuestion(pair: ModePair, random: () => number = Math.random) {
  const order: [ModeVoice, ModeVoice] = random() < .5 ? [pair.modes[0], pair.modes[1]] : [pair.modes[1], pair.modes[0]];
  const asked = random() < .5 ? pair.modes[0] : pair.modes[1];
  return { order, asked, answer: order[0].id === asked.id ? 0 : 1 };
}

export type DegreeChoice = { degree: 6 | 7; direction: 'up' | 'down' };
export const DEGREE_CHOICES: DegreeChoice[] = [
  { degree: 6, direction: 'up' }, { degree: 6, direction: 'down' }, { degree: 7, direction: 'up' }, { degree: 7, direction: 'down' },
];
/**
 * Mikä sävelaste muuttui -kysymys: sama fraasi ensin toisena ja sitten toisena moodina.
 * Suunta on ylös, kun toinen versio on ensimmäistä korkeammalla eroavassa asteessa.
 */
export function changeQuestion(random: () => number = Math.random) {
  const pair = random() < .5 ? MODE_PAIRS['a-aeolian-dorian'] : MODE_PAIRS['c-ionian-mixolydian'];
  const [first, second] = random() < .5 ? [pair.modes[0], pair.modes[1]] : [pair.modes[1], pair.modes[0]];
  const d = pair.degree;
  const direction: 'up' | 'down' = first.steps[d - 1] < second.steps[d - 1] ? 'up' : 'down';
  return { pair, first, second, answer: { degree: d as 6 | 7, direction } };
}
