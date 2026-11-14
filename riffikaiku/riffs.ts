/**
 * Riffikaiun tasot ja riffit. Kaikki riffit ovat tätä peliä varten tehtyjä lyhyitä, monofonisia
 * aiheita (ei kappaleiden lainauksia).
 *
 * Neljä tasoa × kolme riffiä. Taso määrää virtuaaliotelaudan kielet (nauhat aina 0–5):
 * 1–2 vain B-kieli, 3 G- ja B-kieli, 4 koko otelauta. Jokaisen riffin jokainen sävel löytyy
 * tason otelaudalta (testi varmistaa).
 *
 * Otelautapaikka on soittoehdotus: mikrofoni kuulee vain sävelkorkeuden, ei kieltä eikä sormitusta.
 */
/** Vapaiden kielten MIDI-korkeudet ohuimmasta paksuimpaan (sama kuin otelauta.js:n OPEN_PITCHES). */
export const OPEN_STRINGS = [64, 59, 55, 50, 45, 40] as const;
export const ALL_STRINGS = [0, 1, 2, 3, 4, 5];
export const FRET_MIN = 0, FRET_MAX = 5;

export type Spot = { string: number; fret: number };
export type Riff = {
  id: string;
  title: string;
  /** Ehdotettu soittopaikka jokaiselle sävelelle (kieli 0 = ohut E … 5 = paksu E). */
  spots: Spot[];
  midi: number[];
  /** Lyhyt soittovinkki pelaajalle. */
  tip: string;
};
export type Level = {
  number: number;
  title: string;
  /** Virtuaaliotelaudan kielet tällä tasolla. */
  strings: number[];
  /** Ohje oikean kitaran tilassa. */
  instruction: string;
  riffs: Riff[];
};

const riff = (id: string, title: string, spots: [number, number][], tip: string): Riff => ({
  id, title, tip,
  spots: spots.map(([string, fret]) => ({ string, fret })),
  midi: spots.map(([string, fret]) => OPEN_STRINGS[string] + fret),
});
/** Yhden kielen riffi: [kieli, nauhat]. */
const on = (string: number, frets: number[]): [number, number][] => frets.map(f => [string, f]);
const B = 1, G = 2;

/** Mikrofonitesti: yksi vapaa B-kieli. */
export const CHECK_MIDI = 59;

/** Opastus: kaksi säveltä B-kielellä ennen tasoa 1. */
export const TUTORIAL: Riff = riff('opastus', 'Opastus: kaksi säveltä', on(B, [0, 1]), 'Vapaa B-kieli ja sitten 1. nauha.');

const B_INSTRUCTION = 'Soita B-kielellä (toiseksi ohuin kieli).';

export const LEVELS: readonly Level[] = [
  { number: 1, title: 'Ensimmäiset riffit', strings: [B], instruction: B_INSTRUCTION, riffs: [
    riff('b-kaari', 'Ensimmäinen kaiku', on(B, [0, 1, 3, 1]), 'Vapaa kieli, 1., 3. ja takaisin 1. nauhaan.'),
    riff('b-vaihto', 'Edestakaisin', on(B, [1, 0, 1, 3]), '1. nauha, vapaa kieli, 1. ja 3. nauha.'),
    riff('b-lasku', 'Laskeva kaiku', on(B, [5, 3, 1, 0]), 'Alaspäin: 5., 3., 1. nauha ja vapaa kieli.'),
  ] },
  { number: 2, title: 'Muista melodia', strings: [B], instruction: B_INSTRUCTION, riffs: [
    riff('b-kumpu', 'Kumpu', on(B, [0, 3, 5, 3]), 'Vapaa kieli, 3., 5. ja takaisin 3. nauhaan.'),
    riff('b-toisto', 'Toistuva alku', on(B, [5, 5, 3, 1]), 'Kaksi näppäystä 5. nauhalla, sitten 3. ja 1. Vaimenna kieli hetkeksi samojen sävelten välissä.'),
    riff('b-hyppy', 'Hyppivä kaiku', on(B, [0, 5, 1, 3]), 'Vapaa kieli, hyppy 5. nauhaan, sitten 1. ja 3. nauha.'),
  ] },
  { number: 3, title: 'Kaksi kieltä', strings: [B, G], instruction: 'Soita G- ja B-kielellä (kolmanneksi ja toiseksi ohuin kieli).', riffs: [
    riff('gb-nousu', 'Kahden kielen nousu', [[G, 0], [G, 2], [B, 0], [B, 1]], 'G-kieli vapaa ja 2. nauha, sitten B-kieli vapaa ja 1. nauha.'),
    riff('g-kaksi-a', 'Kaksi samaa', [[G, 2], [G, 2], [B, 1], [G, 2]], 'Kaksi erillistä näppäystä G-kielen 2. nauhalla, C B-kielen 1. nauhalta. Vaimenna kieli A:iden välissä.'),
    riff('gb-kaari', 'Kahden kielen kaari', [[G, 2], [B, 1], [B, 3], [G, 2]], 'G-kielen 2. nauha, B-kielen 1. ja 3. nauha ja takaisin G-kielelle.'),
  ] },
  { number: 4, title: 'Laajempi otelauta', strings: [...ALL_STRINGS], instruction: 'Soita millä kielellä tahansa, nauhat 0–5.', riffs: [
    riff('e-hyppy', 'Hyppy ylös', on(0, [0, 5, 3, 0]), 'Ohut E-kieli: vapaa, hyppy 5. nauhaan, 3. ja vapaa.'),
    riff('d-molli', 'Mollinen kaiku', on(3, [0, 3, 5, 0]), 'D-kieli: vapaa, 3., 5. ja taas vapaa.'),
    riff('am-arpeggio', 'Kielten yli', [[4, 0], [4, 3], [3, 2], [G, 2]], 'A-kieli vapaa ja 3. nauha, D-kielen 2. ja G-kielen 2. nauha.'),
  ] },
];

/** Kaikki tasojen riffit järjestyksessä. */
export const RIFFS: readonly Riff[] = LEVELS.flatMap(l => l.riffs);
export const levelOf = (riffId: string) => LEVELS.find(l => l.riffs.some(r => r.id === riffId));
export const riffById = (id: string) => RIFFS.find(r => r.id === id) ?? (id === TUTORIAL.id ? TUTORIAL : undefined);
/** Löytyykö sävel annetuilta kieliltä nauhoilta 0–5. */
export const playableOn = (midi: number, strings: number[]) =>
  strings.some(s => midi - OPEN_STRINGS[s] >= FRET_MIN && midi - OPEN_STRINGS[s] <= FRET_MAX);
