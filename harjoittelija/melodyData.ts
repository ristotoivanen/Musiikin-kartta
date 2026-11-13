import { at, type Position } from './music';

/**
 * Melodiapilottien soitettavat muodot. Lähteet ja sovituspäätökset:
 * harjoittelija/suunnitelmat/melodiset-pilotit-2026-11.md
 * Käytetään vain public-domain-perinnesävelmän melodista runkoa.
 * Ukko Nooan rytmi lähdenuotista; Wayfaring Strangerin rytmi on OMA
 * 4/4-opetussovitus (ei historiallisen lähteen täsmällinen rytmi).
 */
export type MelodyId = 'wayfaring' | 'wayfaring-p2' | 'high-answer' | 'nooa' | 'pentatonic-bridge';
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
  /** Sama melodia toisessa käsiasemassa: sormitusvaihe näyttää avattavan vertailun tähän. */
  compareWith?: { id: MelodyId; label: string; ownLabel: string };
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

// Sama Wayfaring Stranger -alku A-mollipentatonisen positiossa 2 (nauhat 7–10). Sävelkorkeudet
// ja rytmi ovat täsmälleen samat kuin positiossa 1: A3 ja D4 pysyvät D-kielen 7. ja G-kielen
// 7. nauhalla, E4 siirtyy B-kielen 5. nauhalta G-kielen 9. nauhalle ja C4 G-kielen 5. nauhalta
// D-kielen 10. nauhalle. Ei oktaavisiirtoa.
const wayA2 = clip('A · Melodian alku', [
  [3, 7, 1], [3, 7, 1], [2, 9, 1], [2, 9, 1], [2, 7, 2], [null, null, 2],
]);
const wayB2 = clip('B · Vastaus', [
  [2, 9, 1], [2, 7, 1], [3, 10, 1], [3, 7, 1], [3, 7, 4],
]);
const wayC2 = clip('C · Jatko', [
  [3, 10, 1], [2, 7, 1], [2, 7, 1], [3, 7, 1], [3, 10, 4],
]);

// OMA neljän tahdin harjoitusmelodia ”Korkea vastaus” A-mollipentatonisen positiossa 3
// (nauhat 9–13, kolme ohuinta kieltä). Kysymys nousee D5:een ja jää G4:ään, vastaus alkaa
// position ylimmästä E5:stä ja laskeutuu pentatonisesti A4-pohjasäveleen.
const highA = clip('A · Kysymys', [
  [1, 10, 1], [1, 13, 1], [0, 10, 2],
  [1, 13, 1], [1, 10, 1], [2, 12, 2],
]);
const highB = clip('B · Vastaus', [
  [0, 12, 1], [0, 10, 1], [1, 13, 1], [1, 10, 1],
  [2, 12, 1], [2, 9, 1], [1, 10, 2],
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
  'wayfaring-p2': {
    id: 'wayfaring-p2', title: 'Wayfaring Stranger · positio 2',
    qualifier: 'Sama perinnesävelmän alku uudessa käsiasemassa · oma harjoitusrytmi',
    tempo: 78, tonic: 9, permitted: [9, 0, 2, 4, 7],
    fragments: [wayA2, wayB2], whole: join('Melodia · A + B + C', wayA2, wayB2, wayC2),
    compareWith: { id: 'wayfaring', label: 'Positio 1', ownLabel: 'Positio 2' },
    source: 'https://hymnary.org/tune/wayfaring_stranger',
    note: 'Sama sävelkulku, samat sävelkorkeudet ja sama itse laadittu harjoitusrytmi kuin positiossa 1. Vain sormitus vaihtuu: kaksi säveltä siirtyy toiselle kielelle. Sävelkulku perustuu perinteisen melodian alkumotiiviin.',
  },
  'high-answer': {
    id: 'high-answer', title: 'Korkea vastaus',
    qualifier: 'Oma sävellys · A-mollipentatoninen · positio 3',
    tempo: 76, tonic: 9, permitted: [9, 0, 2, 4, 7],
    fragments: [highA, highB], whole: join('Korkea vastaus · A + B', highA, highB),
    source: '',
    note: 'Alkuperäinen tätä harjoitusta varten sävelletty neljän tahdin melodia. Kysymys jää G-säveleen, ja vastaus laskeutuu position ylimmästä E-sävelestä A-pohjasäveleen. Melodia käyttää position 3 kolmea ohuinta kieltä.',
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

/**
 * Saman melodian sävelpaikat kahdessa käsiasemassa: jokainen eri sävelkorkeus kerran,
 * korkeimmasta matalimpaan. `moved` kertoo, soitetaanko sävel uudessa asemassa eri paikasta.
 */
export function comparePositions(from: MelodyClip, to: MelodyClip) {
  const first = (clip: MelodyClip) => new Map(clip.events.filter(e => e.position)
    .map(e => [e.position!.midi, e.position!] as const).reverse());
  const before = first(from), after = first(to);
  return [...after.entries()].sort((a, b) => b[0] - a[0]).map(([midi, position]) => {
    const old = before.get(midi) ?? null;
    return { midi, from: old, to: position, moved: !old || old.string !== position.string || old.fret !== position.fret };
  });
}
