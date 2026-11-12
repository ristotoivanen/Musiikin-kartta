import { music, type Box, type Scale } from './music';
import { SONG_CHARTS, type SongChord } from './songChart';

/** Yksi sointu, kaksi askelta on G-mollissa. */
export const SONG_KEY_ROOT = 7;
export type SongScaleId = 'mp' | 'blues' | 'aeolian';
export interface SongScale {
  id: SongScaleId;
  title: string;
  scale: Scale;
  /** Sama sormitusjärjestelmä kuin Otelautakartassa: pentatoniset boksit tai 3NPS. */
  system: 'pentatonic' | '3nps';
  note: string;
}

// Bluesasteikko on mollipentatoninen ja alennettu kvintti. Sävel merkitään lisäsäveleksi,
// koska se on jännite- ja ohitussävel eikä kuulu kappaleen sointuihin.
const BLUES: Scale = { name: 'bluesasteikko', base: music.SCALES.mp.base, add: [[6, '♭5']] };

/** Vain kappaleen sävellajiin ja sointuihin perustellut asteikot, ei kaikkia moodeja. */
export const SONG_SCALES: readonly SongScale[] = [
  { id: 'mp', title: 'G-mollipentatoninen', scale: music.SCALES.mp, system: 'pentatonic',
    note: 'G-mollipentatoninen on hyvä lähtökohta kappaleen improvisointiin. Kuuntele, miten eri sävelet sopivat kulloinkin soivaan sointuun.' },
  { id: 'blues', title: 'G-bluesasteikko', scale: BLUES, system: 'pentatonic',
    note: 'Bluesille ominainen lisäsävel D♭ (♭5) on jännite- ja ohitussävel: soita se ohimennen C:n ja D:n välissä, älä jää siihen pitkäksi kohdesäveleksi.' },
  { id: 'aeolian', title: 'G-luonnollinen molli (aiolinen)', scale: music.SCALES.aeolian, system: '3nps',
    note: 'Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan.' },
];

export function songScaleNotes(scale: Scale): string[] {
  return music.scaleNotes(scale).map(([interval, degree]) => music.noteName(SONG_KEY_ROOT, interval, degree));
}

/** Kappaleen soinnut ja niiden sävelluokat (tarkistukseen ja testeihin). */
export const CHORD_TONES: Record<SongChord, number[]> = {
  Gm: [7, 10, 2], F: [5, 9, 0], 'B♭': [10, 2, 5], 'E♭': [3, 7, 10], Dm: [2, 5, 9], C: [0, 4, 7],
};
export const songChords = (): SongChord[] => [...new Set(Object.values(SONG_CHARTS)
  .flatMap(chart => chart.flatMap(section => section.bars.flatMap(bar => [bar.first, ...(bar.second ? [bar.second] : [])]))))];
export const scalePitchClasses = (scale: Scale): number[] =>
  music.scaleNotes(scale).map(([interval]) => (SONG_KEY_ROOT + interval) % 12);

export type SongBox = { number: number; positions: Box[] };
export const boxCount = (system: SongScale['system']): number => system === 'pentatonic' ? 5 : 7;

/**
 * Valitun asteikon sormitusboksit Otelautakartan fingeringBoxes-laskennasta.
 * Bluesasteikon boksi on sama pentatoninen boksi: sitä levennetään kielellä nauhan verran ylöspäin
 * vain, jos lisäsävel D♭ on heti boksin ylimmän sävelen vieressä, jotta sävel ei katoa rajauksessa.
 */
export function songBoxes(choice: SongScale, numbers: number[], fretCount: number): SongBox[] {
  const valid = numbers.filter(number => number >= 1 && number <= boxCount(choice.system));
  const boxes = music.fingeringBoxes(SONG_KEY_ROOT, choice.scale, choice.system, valid, fretCount) as SongBox[];
  if (choice.id !== 'blues') return boxes;
  const extra = choice.scale.add.map(([interval]) => (SONG_KEY_ROOT + interval) % 12);
  const isExtra = (string: number, fret: number) => fret >= 0 && fret <= fretCount &&
    extra.includes((music.OPEN_PITCHES[string] + fret) % 12);
  return boxes.map(box => ({ ...box, positions: box.positions.map(position => {
    const strings = position.strings.map((frets, string) => {
      if (!frets.length) return frets;
      // Vain ylöspäin (pikkusormen venytys), kuten vakiintuneissa viidessä bluesboksissa.
      // Boksin alareunan alapuolinen D♭ kuuluu edelliseen boksiin, jossa se on alueen sisällä.
      // Sama sävelluokka saa esiintyä usealla kielellä: mitään alueen sisäistä säveltä ei poisteta.
      const high = frets[frets.length - 1];
      return isExtra(string, high + 1) ? [...frets.slice(0, -1), high + 1] : frets;
    });
    const all = strings.flat();
    return { ...position, strings, start: Math.min(...all), end: Math.max(...all) };
  }) }));
}
