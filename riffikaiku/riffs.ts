/**
 * Riffikaiun harjoituskokonaisuudet: Kotitreenit. Jokainen kotitreeni harjoittaa yhtä kitarankieltä
 * kolmella neljän sävelen riffillä. Kaikki riffit ovat tätä peliä varten tehtyjä lyhyitä,
 * monofonisia aiheita (ei kappaleiden lainauksia).
 *
 * Toteutettu: Kotitreeni 1 (B-kieli) ja Kotitreeni 2 (G-kieli). Suunnitelma muista kielistä ja
 * myöhemmistä kokonaisuuksista: riffikaiku/KEHITYSSUUNNITELMA.md. Uusi kotitreeni lisätään tähän
 * listaan; pelilogiikka, tallennus ja käyttöliittymä lukevat rakenteen täältä.
 *
 * Otelaudalla näkyy aina koko kuusikielinen otelauta (nauhat 0–5). `strings` on harjoituskieli, jota
 * korostetaan – ei pakottava sääntö: oikea MIDI-sävel hyväksytään miltä kieleltä tahansa, eikä
 * mikrofoni tunnista kieltä. Jokaisen riffin jokainen sävel löytyy harjoituskieleltä (testi varmistaa).
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
  /** Lyhyt soittovinkki pelaajalle (näkyy vihjeessä). */
  tip: string;
};
export type Level = {
  number: number;
  /** Näyttönimi, esim. ”Kotitreeni 1”. */
  name: string;
  /** Harjoiteltava kieli tai kielet lyhyesti, esim. ”B-kieli”. */
  title: string;
  /** Harjoituskieli(et), joita otelaudalla korostetaan. */
  strings: number[];
  /** Harjoitusohje (sama mikrofonille ja virtuaalikitaralle). */
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

/** Opastus: kaksi säveltä B-kielellä Kotitreeni 1:n alussa (ei kuulu kolmeen riffiin). */
export const TUTORIAL: Riff = riff('opastus', 'Opastus: kaksi säveltä', on(B, [0, 1]), 'Vapaa B-kieli ja sitten 1. nauha.');

export const LEVELS: readonly Level[] = [
  { number: 1, name: 'Kotitreeni 1', title: 'B-kieli', strings: [B], instruction: 'Soita riffi B-kieleltä.', riffs: [
    // Sävelet B3, C4 ja D4: vapaa kieli, 1. ja 3. nauha.
    riff('b-kaari', 'Ensimmäinen kaiku', on(B, [0, 1, 3, 1]), 'Vapaa kieli, 1., 3. ja takaisin 1. nauhaan.'),
    riff('b-vaihto', 'Edestakaisin', on(B, [1, 0, 1, 3]), '1. nauha, vapaa kieli, 1. ja 3. nauha.'),
    riff('b-takaisin', 'Kaari takaisin', on(B, [0, 3, 1, 0]), 'Vapaa kieli, 3. ja 1. nauha ja taas vapaa kieli.'),
  ] },
  { number: 2, name: 'Kotitreeni 2', title: 'G-kieli', strings: [G], instruction: 'Soita riffi G-kieleltä.', riffs: [
    // Sävelet G3, A3 ja B3: vapaa kieli, 2. ja 4. nauha. Vaihtelevampi: toisto ja hyppy.
    riff('g-nousu', 'G-kielen kaari', on(G, [0, 2, 4, 2]), 'Vapaa kieli, 2., 4. ja takaisin 2. nauhaan.'),
    riff('g-toisto', 'Kaksi samaa', on(G, [2, 2, 0, 4]), 'Kaksi erillistä näppäystä 2. nauhalla, sitten vapaa kieli ja 4. nauha. Vaimenna kieli hetkeksi samojen sävelten välissä.'),
    riff('g-hyppy', 'Hyppy alas', on(G, [4, 0, 2, 0]), '4. nauha, vapaa kieli, 2. nauha ja taas vapaa kieli.'),
  ] },
];

/** Kaikki riffit järjestyksessä. */
export const RIFFS: readonly Riff[] = LEVELS.flatMap(l => l.riffs);
export const levelOf = (riffId: string) => LEVELS.find(l => l.riffs.some(r => r.id === riffId));
export const riffById = (id: string) => RIFFS.find(r => r.id === id) ?? (id === TUTORIAL.id ? TUTORIAL : undefined);
/** Löytyykö sävel annetuilta kieliltä nauhoilta 0–5. */
export const playableOn = (midi: number, strings: number[]) =>
  strings.some(s => midi - OPEN_STRINGS[s] >= FRET_MIN && midi - OPEN_STRINGS[s] <= FRET_MAX);
