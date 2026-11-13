import { at, music, pc, type Position } from './music';

/**
 * Kaksi ensimmäistä moodia. Sama säveljoukko, eri sävelkeskus:
 * C-jooninen (duuri) ja A-aiolinen (luonnollinen molli).
 *
 * Aluksi vain yksi soitettava oktaavi. Myöhemmät otelautapositiot
 * ja muut moodit laajennetaan saman opetusmallin päälle.
 */
export type ModeId = 'ionian' | 'aeolian';

export type ModeLesson = {
  id: ModeId;
  title: string;
  alias: string;
  tonic: number;
  scaleKey: 'ionian' | 'aeolian';
  tonicName: 'C' | 'A';
  chord: 'C-duuri' | 'A-molli';
  noteNames: string;
  explanation: string;
  contrast: string;
  positions: Position[];
  phrase: number[];
  accompaniment: number[];
};

export const MODE_ORDER: ModeId[] = ['ionian', 'aeolian'];

export const MODE_LESSONS: Record<ModeId, ModeLesson> = {
  ionian: {
    id: 'ionian',
    title: 'C-jooninen',
    alias: 'Ionian · tavallinen duuri',
    tonic: 0,
    scaleKey: 'ionian',
    tonicName: 'C',
    chord: 'C-duuri',
    noteNames: 'C · D · E · F · G · A · B',
    explanation: 'Seitsemän säveltä ja C kotisävelenä. Kuuntele, miten B pyrkii C:hen.',
    contrast: 'A-aiolisessa ovat samat seitsemän säveltä, mutta A on kotisävel.',
    // A-kieli 3.–5., D-kieli 2.–5. ja G-kieli 2.–5. nauha.
    positions: [at(4, 3), at(4, 5), at(3, 2), at(3, 3),
      at(3, 5), at(2, 2), at(2, 4), at(2, 5)],
    phrase: [48, 52, 55, 59, 60, 59, 55, 52, 48],
    accompaniment: [48, 52, 55, 52],
  },
  aeolian: {
    id: 'aeolian',
    title: 'A-aiolinen',
    alias: 'Aeolian · luonnollinen molli',
    tonic: 9,
    scaleKey: 'aeolian',
    tonicName: 'A',
    chord: 'A-molli',
    noteNames: 'A · B · C · D · E · F · G',
    explanation: 'A tuntuu nyt kotisäveleltä, vaikka sävelnimet ovat samat kuin C-duurissa.',
    contrast: 'C-joonisessa C on kotisävel. Opettele kuulemaan A:n ja C:n eri vetovoima.',
    // Paksu E 5.–8., A-kieli 5.–8. ja D-kieli 5.–7. nauha.
    positions: [at(5, 5), at(5, 7), at(5, 8), at(4, 5),
      at(4, 7), at(4, 8), at(3, 5), at(3, 7)],
    phrase: [45, 48, 52, 55, 57, 55, 52, 48, 45],
    accompaniment: [45, 48, 52, 48],
  },
};

/** Ei sekoiteta pentatonisen oppimispolun edistymiseen. */
export const modeProgressKey = (id: ModeId) =>
  'musiikin-kartta:moodipolku:' + id + ':v1';
export const MODE_ACTIVE_KEY = 'musiikin-kartta:moodipolku:active:v1';

/** Sormitus ja fraasi käyttävät samaa kirjaston moodimääritelmää. */
export function modePitchClasses(id: ModeId): number[] {
  const lesson = MODE_LESSONS[id];
  return music.scaleNotes(music.SCALES[lesson.scaleKey])
    .map(([interval]) => pc(lesson.tonic + interval));
}

/** Asteikko molempiin suuntiin ilman korkeimman sävelen kaksoistoistoa. */
export const modeCycle = (id: ModeId): Position[] => {
  const notes = MODE_LESSONS[id].positions;
  return [...notes, ...notes.slice(1, -1).reverse()];
};
