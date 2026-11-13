import { at, type Position } from './music';

/**
 * Melodiapilottien soitettavat muodot. Lähteet ja sovituspäätökset:
 * harjoittelija/suunnitelmat/melodiset-pilotit-2026-11.md
 * Käytetään vain public-domain-perinnesävelmän melodista runkoa.
 * Ukko Nooan rytmi lähdenuotista; Wayfaring Strangerin rytmi on OMA
 * 4/4-opetussovitus (ei historiallisen lähteen täsmällinen rytmi).
 */
export type MelodyId = 'wayfaring' | 'nooa' | 'pentatonic-bridge';
export type MelodyStep = {
  position: Position | null; // null = tauko
  beat: number;              // suhteellinen aloitus neljäsosaiskuissa
  duration: number;          // neljäsosaiskuissa
};
export type MelodyClip = { label: string; events: MelodyStep[]; beats: number };
export type MelodyPiece = {
  id: MelodyId;
  title: string;
  qualifier: string;
  tempo: number;
  tonic: number; // A = 9, C = 0
  permitted: number[];
  fragments: [MelodyClip, MelodyClip];
  whole: MelodyClip;
  bonus?: MelodyClip;
  source: string;
  note: string;
};

/** Jokainen osa rakennetaan selvästi aikamitallisista sävelistä ja tauoista. */
function clip(label: string, notes: Array<[number | null, number | null, number]>): MelodyClip {
  let beat = 0;
  const events: MelodyStep[] = notes.map(([string, fret, duration]) => {
    const position = string === null || fret === null ? null : at(string, fret);
    const event = { position, beat, duration };
    beat += duration;
    return event;
  });
  return { label, events, beats: beat };
}
function join(label: string, ...parts: MelodyClip[]): MelodyClip {
  let offset = 0;
  const events = parts.flatMap(part => {
    const slice = part.events.map(event => ({ ...event, beat: event.beat + offset }));
    offset += part.beats;
    return slice;
  });
  return { label, events, beats: offset };
}

// Hymnary, WAYFARING STRANGER, perinteinen inkipit 1 1 5 5 4 / 5 4 3 1 1 / 3 4 4 1 3.
// A-mollissa: A A E E D / E D C A A / C D D A C.
// Nämä fyysiset paikat kuuluvat A-mollipentatonisen ensimmäiseen boksiin.
const wayA = clip('A · Melodian alku', [
  [3, 7, 1], [3, 7, 1], [1, 5, 1], [1, 5, 1], [2, 7, 2], [null, null, 2],
]);
const wayB = clip('B · Vastaus', [
  [1, 5, 1], [2, 7, 1], [2, 5, 1], [3, 7, 1], [3, 7, 4],
]);
const wayC = clip('C · Jatko', [
  [2, 5, 1], [2, 7, 1], [2, 7, 1], [3, 7, 1], [2, 5, 4],
]);

// Opi sävellajit ja asteikot (2023), s. 56: C C C E | D D D F |
// E E D D | C (kokonuotti). Soitetaan oktaavia alempaa, jotta sävelet
// mahtuvat olemassa olevaan C-joonisen yhden oktaavin otelautaan.
const nooaA = clip('A · Ukko Nooan alku', [
  [4, 3, 1], [4, 3, 1], [4, 3, 1], [3, 2, 1],
  [4, 5, 1], [4, 5, 1], [4, 5, 1], [3, 3, 1],
]);
const nooaB = clip('B · Ukko Nooan päätös', [
  [3, 2, 1], [3, 2, 1], [4, 5, 1], [4, 5, 1], [4, 3, 4],
]);

// Erillinen OMA kahden tahdin B → C -harjoitus. Ei ole osa Ukko Nooaa.
const ownLeadingTone = clip('Oma lisä: B ratkeaa C:hen', [
  [3, 5, 1], [2, 2, 1], [2, 4, 1], [2, 5, 1],
  [3, 5, 1], [2, 4, 1], [2, 5, 2],
]);

// OMA kahden position siirtymämotiivi. E5: 5,8,10 ja A5: 7,10
// käyttävät fyysisiä paikkoja kummastakin pentatonisesta boksista.
const bridgeA = clip('A · Siirry ylöspäin', [
  [5, 5, 1], [5, 8, 1], [5, 10, 1], [4, 7, 1],
  [4, 10, 1], [3, 7, 1], [3, 10, 1], [3, 7, 1],
]);
const bridgeB = clip('B · Palaa takaisin', [
  [4, 10, 1], [4, 7, 1], [5, 10, 1], [5, 8, 1],
  [5, 5, 4],
]);

export const melodyPieces: Record<MelodyId, MelodyPiece> = {
  wayfaring: {
    id: 'wayfaring', title: 'Wayfaring Stranger',
    qualifier: 'Perinnesävelmän alku · oma harjoitusrytmi',
    tempo: 78, tonic: 9, permitted: [9, 0, 2, 4, 7],
    fragments: [wayA, wayB], whole: join('Melodia · A + B + C', wayA, wayB, wayC),
    source: 'https://hymnary.org/tune/wayfaring_stranger',
    note: 'Sävelkulku perustuu perinteisen melodian 15-säveliseen alkumotiiviin. Rytmi on tätä harjoitusta varten itse laadittu: kyse ei ole tietyn levytyksen tai nuottisovituksen tarkasta versiosta.',
  },
  nooa: {
    id: 'nooa', title: 'Ukko Nooa',
    qualifier: 'Perinteinen melodia · C-jooninen',
    tempo: 84, tonic: 0, permitted: [0, 2, 4, 5, 7, 9, 11],
    fragments: [nooaA, nooaB], whole: join('Ukko Nooa · A + B', nooaA, nooaB),
    bonus: ownLeadingTone,
    source: 'https://aoe.fi/api/v1/download/file/opisavellajitjaasteikothankkeentehtavapaketti1-1701684466136.pdf',
    note: 'Lähde: Opi sävellajit ja asteikot (2023), s. 56, Ukko Nooan alku C-duurissa. Tässä soitetaan oktaavia alempaa samalla säveljonolla ja rytmillä. Erillinen B → C -täydennys on itse sävelletty.',
  },
  'pentatonic-bridge': {
    id: 'pentatonic-bridge', title: 'Siirtymä kahden position välillä',
    qualifier: 'Oma sävellys · A-mollipentatoninen',
    tempo: 75, tonic: 9, permitted: [9, 0, 2, 4, 7],
    fragments: [bridgeA, bridgeB], whole: join('Siirtymämelodia · A + B', bridgeA, bridgeB),
    source: '',
    note: 'Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää.',
  },
};

export function clipSound(clip: MelodyClip) {
  return clip.events.filter((event): event is MelodyStep & { position: Position } => event.position !== null)
    .map(event => ({ midi: event.position.midi, beat: event.beat, duration: event.duration }));
}
