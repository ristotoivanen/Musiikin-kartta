import { BRIGHT_BASS, chord, type Arrangement, type Chord } from './arrangement';
import { PARTS, type CompareTask, type Feedback, type Part, type Song, type Take } from './tasks';

/*
 * Ensikeikka – Kotikulman keikka: kappaleet 10–12. Käsikirjoitus ja vastausten perusteet ovat
 * tiedostossa KOTIKULMAN-KEIKKA.md. Kaikki melodiat ja sovitukset on sävelletty tähän peliin.
 * Iskut lasketaan kappaleen alusta (tahti = neljä iskua).
 */

type Notes = Arrangement['melody'];

function take(tempo: number, harmony: Chord[], melody: Notes, lead: string, extra: Partial<Arrangement> = {}): Take {
  return { arrangement: { tempo, harmony, melody, bassTone: BRIGHT_BASS, ...extra }, final: { lead } };
}

// Soinnut. Nimi kertoo soinnun; basso ja kvintti ensin, sitten kompin äänet.
const C = chord('C3', 'G2', ['E3', 'G3', 'C4']);
const F = chord('F2', 'C3', ['F3', 'A3', 'C4']);
const Fm = chord('F2', 'C3', ['F3', 'Ab3', 'C4']);
const G = chord('G2', 'D3', ['B2', 'D3', 'G3']);
const G7 = chord('G2', 'D3', ['B2', 'D3', 'F3']);
const Am = chord('A2', 'E2', ['C3', 'E3', 'A3']);
const Dm = chord('D3', 'A2', ['D3', 'F3', 'A3']);
const D = chord('D2', 'A2', ['A2', 'D3', 'F#3']);
const A = chord('A2', 'E2', ['C#3', 'E3', 'A3']);
const E = chord('E2', 'B2', ['B2', 'E3', 'G#3']);
const E7 = chord('E2', 'B2', ['B2', 'D3', 'G#3']);
const Em = chord('E2', 'B2', ['B2', 'E3', 'G3']);
const FSharpMinor = chord('F#2', 'C#3', ['C#3', 'F#3', 'A3']);

const compareWrong = {
  bass: 'Basso soittaa molemmissa versioissa samat sävelet. Kuuntele seuraavaksi kitaran sointuja ja melodiaa.',
  comp: 'Kitaran soinnut ovat molemmissa versioissa samat. Kuuntele, laulaako melodia samoin ja kulkeeko basso samaan suuntaan.',
  melody: 'Melodia on molemmissa versioissa sama. Kuuntele bändiä: muuttuuko soinnun väri tai basson suunta?',
} as const;

const compareHints = [
  'Kuuntele versiot peräkkäin ja keskity yhteen soittimeen kerrallaan: ensin basso, sitten soinnut ja lopuksi melodia.',
  'Vertaa osia erikseen. Kun kuulet yhden osan molemmat versiot peräkkäin, muutos erottuu helpommin.',
];

type Round = Omit<CompareTask, 'heading' | 'intro' | 'hints' | 'wrong'> & {
  /** Selitys ratkaisun jälkeen. Kierroksen sijainti lisätään eteen. */
  explanation: string;
};

function round(versions: [Take, Take], answer: Part, success: Feedback, explanation: string): Round {
  return { kind: 'compare', versions, answer, success, explanation };
}

const chordsChanged = { title: 'Oikein! Soinnut muuttuivat.', text: 'Toisen tahdin duurisointu vaihtui mollisoinnuksi. Melodia ja basso pysyivät samoina.' };
const bassChanged = { title: 'Oikein! Basso muuttui.', text: 'Ensimmäisessä versiossa basso nousi kotiin, toisessa se laskeutui. Soinnut ja melodia pysyivät samoina.' };
const melodyChanged = { title: 'Oikein! Melodia muuttui.', text: 'Melodia soitti samat sävelet, mutta ensin ylöspäin ja sitten alaspäin. Bändi soitti molemmilla kerroilla samoin.' };

// Soundcheckin kierrokset: kolme kutakin osaa eri sävellajeissa.
const chordsC = (second: Chord) => take(100, [C, second, C], [
  ['G4', 0, 1], ['E4', 1, .5], ['G4', 1.5, .5], ['C5', 2, 1.5], ['B4', 3.5, .5],
  ['C5', 4, 1.5], ['F4', 5.5, .5], ['G4', 6, 1], ['F4', 7, 1],
], 'E4');
const bassAm = (walk: readonly (readonly [string, number])[]) => take(96, [Am, chord('E2', 'B2', ['B2', 'D3', 'G#3'], walk), Am], [
  ['A4', 0, 1], ['C5', 1, 1], ['E5', 2, 1.5], ['D5', 3.5, .5],
  ['B4', 4, 1], ['G#4', 5, 1], ['E4', 6, 1], ['B4', 7, 1],
], 'A4');
const melodyD = (second: Notes, lead: string) => take(108, [D, A, D], [
  ['F#4', 0, 1], ['A4', 1, .5], ['F#4', 1.5, .5], ['D4', 2, 2], ...second,
], lead);
const melodyAm = (second: Notes, lead: string) => take(90, [Am, Dm, Am], [
  ['E4', 0, 1], ['A4', 1, 1], ['C5', 2, 1], ['B4', 3, 1], ...second,
], lead);
const bassG = (walk: readonly (readonly [string, number])[]) => take(100, [G, chord('D2', 'A2', ['A2', 'D3', 'F#3'], walk), G], [
  ['B4', 0, 1], ['D5', 1, 1], ['G4', 2, 2],
  ['A4', 4, 1], ['F#4', 5, 1], ['D4', 6, 1], ['F#4', 7, 1],
], 'G4');
const chordsE = (second: Chord) => take(92, [E, second, E], [
  ['B4', 0, 1], ['G#4', 1, 1], ['E4', 2, 1.5], ['F#4', 3.5, .5],
  ['E4', 4, 1.5], ['A4', 5.5, .5], ['B4', 6, 1], ['A4', 7, 1],
], 'G#4');
const chordsD = (second: Chord) => take(104, [D, second, D], [
  ['A4', 0, 1], ['F#4', 1, .5], ['A4', 1.5, .5], ['D5', 2, 1.5], ['C#5', 3.5, .5],
  ['D5', 4, 1.5], ['G4', 5.5, .5], ['A4', 6, 1], ['G4', 7, 1],
], 'F#4');
const bassF = (walk: readonly (readonly [string, number])[]) => take(98, [F, chord('C3', 'G2', ['Bb2', 'E3', 'G3'], walk), F], [
  ['C5', 0, 1], ['A4', 1, 1], ['F4', 2, 1.5], ['G4', 3.5, .5],
  ['E4', 4, 1], ['G4', 5, 1], ['C5', 6, 1], ['Bb4', 7, 1],
], 'A4');
const melodyEm = (second: Notes, lead: string) => take(96, [Em, Am, Em], [
  ['B4', 0, 1], ['G4', 1, 1], ['E4', 2, 1.5], ['F#4', 3.5, .5], ...second,
], lead);

/**
 * Kierrosjoukko. Kolme ensimmäistä ovat oletussarja (soinnut, basso, melodia), jota käytetään,
 * jos kierroksia ei ole arvottu, esimerkiksi yksikkötesteissä.
 */
export const soundcheckPool: readonly Round[] = [
  round([chordsC(F), chordsC(Fm)], 'comp', chordsChanged,
    'C-duurissa F-duurisointu vaihtui f-mollisoinnuksi: terssi A laski A♭:ksi.'),
  round([bassAm([['E2', 0], ['F#2', 2], ['G#2', 3]]), bassAm([['E3', 0], ['D3', 2], ['C3', 3]])], 'bass', bassChanged,
    'a-mollissa basso nousi E:stä F♯:n ja G♯:n kautta A:han, kun taas toisessa versiossa se laskeutui E:stä D:n ja C:n kautta.'),
  round([
    melodyD([['E4', 4, 1], ['A4', 5, 1], ['C#5', 6, 1], ['E5', 7, 1]], 'D5'),
    melodyD([['E5', 4, 1], ['C#5', 5, 1], ['A4', 6, 1], ['E4', 7, 1]], 'D4'),
  ], 'melody', melodyChanged, 'D-duurissa melodia soitti A-duurisoinnun sävelet ensin ylöspäin ja sitten alaspäin.'),
  round([
    melodyAm([['D4', 4, 1], ['F4', 5, 1], ['A4', 6, 1], ['D5', 7, 1]], 'C5'),
    melodyAm([['D5', 4, 1], ['A4', 5, 1], ['F4', 6, 1], ['D4', 7, 1]], 'C4'),
  ], 'melody', melodyChanged, 'a-mollissa melodia soitti d-mollisoinnun sävelet ensin ylöspäin ja sitten alaspäin.'),
  round([bassG([['D2', 0], ['E2', 2], ['F#2', 3]]), bassG([['D3', 0], ['C3', 2], ['B2', 3]])], 'bass', bassChanged,
    'G-duurissa basso nousi D:stä E:n ja F♯:n kautta G:hen ja toisessa versiossa laskeutui D:stä C:n ja B:n kautta.'),
  round([chordsE(chord('A2', 'E2', ['C#3', 'E3', 'A3'])), chordsE(chord('A2', 'E2', ['C3', 'E3', 'A3']))], 'comp', chordsChanged,
    'E-duurissa A-duurisointu vaihtui a-mollisoinnuksi: terssi C♯ laski C:ksi.'),
  round([chordsD(chord('G2', 'D3', ['G3', 'B3', 'D4'])), chordsD(chord('G2', 'D3', ['G3', 'Bb3', 'D4']))], 'comp', chordsChanged,
    'D-duurissa G-duurisointu vaihtui g-mollisoinnuksi: terssi B laski B♭:ksi.'),
  round([bassF([['C2', 0], ['D2', 2], ['E2', 3]]), bassF([['C3', 0], ['Bb2', 2], ['A2', 3]])], 'bass', bassChanged,
    'F-duurissa basso nousi C:stä D:n ja E:n kautta F:ään ja toisessa versiossa laskeutui C:stä B♭:n ja A:n kautta.'),
  round([
    melodyEm([['A4', 4, 1.5], ['C5', 5.5, .5], ['E5', 6, 1], ['A5', 7, 1]], 'G5'),
    melodyEm([['A5', 4, 1.5], ['E5', 5.5, .5], ['C5', 6, 1], ['A4', 7, 1]], 'B4'),
  ], 'melody', melodyChanged, 'e-mollissa melodia soitti a-mollisoinnun sävelet ensin ylöspäin ja sitten alaspäin.'),
];

export const SOUNDCHECK_ROUNDS = 3;

/**
 * Arpoo soundcheckin kierrokset. Jokaisen kierroksen osa arvotaan erikseen, joten sama osa voi
 * muuttua useammin kuin kerran, eikä kahdesta ensimmäisestä vastauksesta voi päätellä kolmatta.
 * Saman osan kierroksista valitaan vielä käyttämätön, joten sama pätkä ei toistu sarjassa.
 */
export function drawSoundcheck(random: () => number = Math.random): number[] {
  const pick = <T>(items: readonly T[]) => items[Math.min(items.length - 1, Math.floor(random() * items.length))];
  const used: number[] = [];
  for (let n = 0; n < SOUNDCHECK_ROUNDS; n++) {
    const part = pick(PARTS);
    used.push(pick([...soundcheckPool.keys()].filter(index => soundcheckPool[index].answer === part && !used.includes(index))));
  }
  return used;
}

const soundcheckIntros = [
  'Ovet aukeavat pian. Bändi soittaa saman pätkän kahdesti, ja miksaaja kysyy, mikä muuttui.',
  'Sama kysymys, uusi pätkä. Jokin osa soittaa nyt toisin.',
  'Viimeinen pätkä ennen ovien avaamista.',
];
const ordinal = ['Ensimmäisellä', 'Toisella', 'Kolmannella'];

/** Soundcheckin tehtävät ja selitys valituista kierroksista. */
export function soundcheckSet(picks: readonly number[]): Pick<Song, 'tasks' | 'explanation'> {
  const rounds = picks.map(index => soundcheckPool[index]);
  return {
    tasks: rounds.map((item, n): CompareTask => ({
      kind: 'compare', versions: item.versions, answer: item.answer, success: item.success,
      heading: `Soundcheck ${n + 1}/${rounds.length}: Mikä muuttui?`,
      intro: soundcheckIntros[n === 0 ? 0 : n === rounds.length - 1 ? 2 : 1],
      hints: compareHints,
      wrong: Object.fromEntries(Object.entries(compareWrong).filter(([part]) => part !== item.answer)),
    })),
    explanation: `Jokaisella kierroksella vain yksi osa soitti toisin, ja sama osa voi muuttua useammin kuin kerran. ${
      rounds.map((item, n) => `${ordinal[n] ?? `${n + 1}.`} kierroksella ${item.explanation}`).join(' ')
    } Kun kuuntelet yhtä soitinta kerrallaan, muutos löytyy, vaikka kaikki soittavat yhtä aikaa.`,
  };
}

// Kappale 11: säkeistön alku ja kaksi jatkoa. Opetusversio C-duurissa, harjoittelun versio a-mollissa.
const openingC: Notes = [
  ['E4', 0, 1], ['G4', 1, 1], ['C5', 2, 1], ['G4', 3, 1],
  ['A4', 4, 1], ['E4', 5, 1], ['C5', 6, 1.5], ['B4', 7.5, .5],
  ['A4', 8, 1], ['F4', 9, 1], ['C5', 10, 1], ['A4', 11, 1],
  ['B4', 12, 1], ['D5', 13, 1], ['G4', 14, 2],
];
const verseC = { open: [C, Am, F, G] };
const openingAm: Notes = [
  ['A4', 0, 1.5], ['C5', 1.5, .5], ['E5', 2, 1], ['C5', 3, 1],
  ['A4', 4, 1], ['F4', 5, 1], ['C5', 6, 2],
  ['G4', 8, 1], ['E4', 9, 1], ['C5', 10, 1], ['G4', 11, 1],
  ['G#4', 12, 1], ['B4', 13, 1], ['E4', 14, 2],
];
const CMajor = chord('C3', 'G2', ['E3', 'G3', 'C4']);

// Kappaleen 11 otot. A on avoin jatko (pysähtyy dominanttiin), B on vastaus (palaa alun aiheeseen ja kotiin).
const openC = take(100, [...verseC.open, F, G, Am, G], [
  ...openingC,
  ['C5', 16, 1], ['F5', 17, 1], ['E5', 18, 1], ['C5', 19, 1],
  ['D5', 20, 1], ['B4', 21, 1], ['G4', 22, 1.5], ['A4', 23.5, .5],
  ['C5', 24, 1], ['E5', 25, 1], ['A4', 26, 1], ['B4', 27, 1],
], 'D5');
const answerC = take(100, [...verseC.open, CMajor, Am, G7, CMajor], [
  ...openingC,
  ['E4', 16, 1], ['G4', 17, 1], ['C5', 18, 1], ['G4', 19, 1],
  ['A4', 20, 1], ['E4', 21, 1], ['C5', 22, 1], ['B4', 23, 1],
  ['D5', 24, 1], ['B4', 25, 1], ['G4', 26, 1], ['B4', 27, 1],
], 'C5');
const openAm = take(92, [Am, F, CMajor, E, Dm, Am, F, E], [...openingAm,
  ['D5', 16, 1], ['F5', 17, 1], ['A4', 18, 2],
  ['C5', 20, 1], ['E5', 21, 1], ['A4', 22, 1.5], ['B4', 23.5, .5],
  ['C5', 24, 1], ['A4', 25, 1], ['F4', 26, 1], ['A4', 27, 1],
], 'G#4');
const answerAm = take(92, [Am, F, CMajor, E, Am, F, E7, Am], [...openingAm,
  ['A4', 16, 1.5], ['C5', 17.5, .5], ['E5', 18, 1], ['C5', 19, 1],
  ['A4', 20, 1], ['F4', 21, 1], ['C5', 22, 2],
  ['B4', 24, 1], ['D5', 25, 1], ['B4', 26, 1], ['G#4', 27, 1],
], 'A4');

const continueHints = [
  'Kuuntele alun loppu: jääkö säkeistö kysymykseen? Vertaa sitten, kumpi jatko vastaa bändin tavoitteeseen.',
  'Toinen jatko palaa alun aiheeseen ja kotiin, toinen tuo uutta ja jää taas odottamaan. Kumpaa bändi nyt tarvitsee?',
];

// Kappale 12: kertosäe G-duurissa, nousu A-duuriin.
const lift: Take['arrangement'] = {
  tempo: 104, comp: [0, 1, 1.5, 2.5, 3], bassTone: BRIGHT_BASS,
  harmony: [
    G, Em, chord('C3', 'G2', ['C3', 'E3', 'G3']), D, G,
    chord('G#2', 'B2', ['D3', 'E3', 'B3']), A, FSharpMinor, chord('D3', 'A2', ['D3', 'F#3', 'A3']), E, A,
  ],
  melody: [
    ['D5', 0, 1.5], ['B4', 1.5, .5], ['G4', 2, 1], ['B4', 3, 1],
    ['E5', 4, 1.5], ['D5', 5.5, .5], ['B4', 6, 2],
    ['C5', 8, 1], ['E5', 9, 1], ['G4', 10, 1], ['C5', 11, 1],
    ['A4', 12, 1.5], ['B4', 13.5, .5], ['A4', 14, 1], ['F#4', 15, 1],
    ['G4', 16, 2], ['B4', 18, 1], ['D5', 19, 1],
    ['E5', 20, 1], ['D5', 21, 1], ['B4', 22, 1], ['G#4', 23, 1],
    ['E5', 24, 1.5], ['C#5', 25.5, .5], ['A4', 26, 1], ['C#5', 27, 1],
    ['F#5', 28, 1.5], ['E5', 29.5, .5], ['C#5', 30, 2],
    ['D5', 32, 1], ['F#5', 33, 1], ['A4', 34, 1], ['D5', 35, 1],
    ['B4', 36, 1.5], ['C#5', 37.5, .5], ['B4', 38, 1], ['G#4', 39, 1],
  ],
};

export const firstGig = {
  10: {
    id: 10, title: 'Soundcheck – Mikä muuttui?', keyName: 'C-duuri', root: 'C',
    arrangement: {
      tempo: 108, comp: [0, 1, 1.5, 2.5, 3], bassTone: BRIGHT_BASS,
      harmony: [C, Am, F, G, C],
      melody: [
        ['E4', 0, 1], ['G4', 1, 1], ['C5', 2, 1.5], ['B4', 3.5, .5],
        ['A4', 4, 1], ['C5', 5, 1], ['E5', 6, 2],
        ['F4', 8, 1], ['A4', 9, 1], ['C5', 10, 1], ['A4', 11, 1],
        ['B4', 12, 1], ['D5', 13, 1], ['G4', 14, 1], ['B4', 15, 1],
      ],
    },
    endings: { A: { lead: 'C5' }, B: { lead: 'C5' }, C: { lead: 'C5' } },
    unfinished: { lead: null },
    target: 'A',
    ...soundcheckSet([0, 1, 2]),
    rounds: { draw: drawSoundcheck, build: soundcheckSet },
    completionTitle: 'Soundcheck valmis',
  },
  11: {
    id: 11, title: 'Ensimmäinen biisi – Miten kappale jatkuu?', keyName: 'C-duuri', root: 'C',
    arrangement: answerC.arrangement,
    endings: { A: openC.final, B: answerC.final, C: answerC.final },
    unfinished: { lead: null },
    target: 'B',
    takes: { A: openC, B: answerC },
    tasks: [{
      kind: 'continue',
      heading: 'Kuuntele alku ja valitse jatko',
      intro: 'Laulaja aloittaa ensimmäisen biisin säkeistön. Bändillä on kaksi tapaa soittaa sen loppupuolisko.',
      goal: 'Säkeistö on lopussa. Päätetään se kotiin, jotta laulaja ehtii hengähtää ennen kertosäettä.',
      openingBars: 4,
      answer: 'B',
      wrong: {
        A: 'Bändi soitti kappaleen valitsemallasi jatkolla. Jatko toimii, mutta säkeistö jäi kysymykseen, vaikka bändi halusi päättää sen kotiin. Kuuntele, kumpi jatko palaa alun aiheeseen.',
      },
      hints: continueHints,
      success: {
        title: 'Oikein! Säkeistö päättyi kotiin.',
        text: 'Jatko vastasi alkuun: sama aihe palasi, ja melodia ja bändi päättyivät kotiin.',
      },
    }],
    explanation: 'Säkeistön alku pysähtyy G-duurisointuun eli kysymykseen. Jatko {B} toistaa alun aiheen ja päättyy C-duurisointuun: melodian B nousee C:hen, ja basso soittaa C:tä. Säkeistö saa pisteen. Jatko {A} tuo uuden melodian ja pysähtyy taas G-duurisointuun D:n päälle. Se olisi hyvä silloin, kun kertosäe alkaa heti, mutta nyt bändi halusi päättää säkeistön kotiin.',
    variants: [{
      name: 'Harjoittelun biisi',
      keyName: 'A-molli', root: 'A',
      arrangement: openAm.arrangement,
      endings: { A: openAm.final, B: answerAm.final, C: answerAm.final },
      target: 'A',
      takes: { A: openAm, B: answerAm },
      tasks: [{
        kind: 'continue',
        heading: 'Kuuntele alku ja valitse jatko',
        intro: 'Laulaja aloittaa säkeistön. Bändillä on kaksi tapaa soittaa sen loppupuolisko.',
        goal: 'Kertosäe tulee heti perään. Säkeistön pitää jäädä kysymykseen, jotta kertosäe tuntuu saapuvan.',
        openingBars: 4,
        answer: 'A',
        wrong: {
          B: 'Bändi soitti kappaleen valitsemallasi jatkolla. Jatko toimii, mutta säkeistö päättyi kotiin, vaikka kertosäkeen piti alkaa heti perään. Kuuntele, kumpi jatko jää odottamaan.',
        },
        hints: continueHints,
        success: {
          title: 'Oikein! Säkeistö jäi kysymykseen.',
          text: 'Jatko pysähtyi odottamaan, joten kertosäe voi alkaa heti.',
        },
      }],
      explanation: 'Säkeistön alku pysähtyy E-duurisointuun eli kysymykseen. Jatko {A} tuo uuden melodian ja pysähtyy taas E-duurisointuun: melodian G♯ odottaa nousua A:han. Se johdattaa kertosäkeeseen. Jatko {B} toistaa alun aiheen ja palaa a-mollisointuun ja säveleen A. Se olisi hyvä säkeistön lopetus, mutta nyt kertosäkeen piti alkaa heti.',
    }],
  },
  12: {
    id: 12, title: 'Illan viimeinen kappale – Kertosäe nousee', keyName: 'G-duuri → A-duuri', root: 'A',
    arrangement: lift,
    endings: { A: { lead: 'G4' }, B: { lead: 'A4' }, C: { lead: 'C#5' } },
    unfinished: { lead: null },
    target: 'B',
    tasks: [{
      kind: 'reason',
      heading: 'Vaihe 1/2: Mihin basso vie?',
      intro: 'Illan viimeinen kertosäe soitetaan kahdesti. Kuuntele, mitä bändi tekee toisen kierroksen alussa.',
      question: 'Mitä basso tekee ennen viimeistä kertosäettä?',
      statements: [
        {
          id: 'sama', text: 'Basso palaa samaan kotiin, ja kertosäe toistuu samalta korkeudelta.',
          wrong: 'Kuuntele basso erikseen ja vertaa sen ensimmäistä ja viimeistä säveltä. Ovatko ne samalla korkeudella?',
        },
        {
          id: 'alas', text: 'Basso laskeutuu, ja kertosäe toistuu matalammalta.',
          wrong: 'Kuuntele basso erikseen. Liikkuuko se kertosäkeiden välissä ylös vai alas?',
        },
        { id: 'ylos', text: 'Basso nousee pienin askelin uuteen, korkeampaan kotiin, ja kertosäe toistuu korkeammalta.' },
      ],
      answer: 'ylos',
      isolate: ['bass', 'melody'],
      span: [3, 8],
      hints: [
        'Kuuntele basso erikseen. Mihin suuntaan se liikkuu kertosäkeiden välissä?',
        'Vertaa melodiaa ennen nousua ja sen jälkeen. Laulaako se saman kertosäkeen eri korkeudelta?',
      ],
      success: {
        title: 'Oikein! Basso vei bändin uuteen kotiin.',
        text: 'Kertosäe toistuu nyt korkeammalta. Seuraavaksi päätät, mihin melodia päättyy uudessa kodissa.',
      },
    }, {
      kind: 'choose',
      heading: 'Vaihe 2/2: Valitse melodian lopetus',
      intro: 'Kertosäe on noussut. Melodian viimeinen sävel puuttuu.',
      prompt: 'Kotisävel on vaihtunut, ja bändi haluaa päättää kappaleen uuteen kotiin. Missä lopetuksessa melodia päättyy uuteen kotisäveleen?',
      answer: 'B',
      retry: 'Melodia ei vielä päädy uuteen kotiin. Vertaa lopetusta basson viimeiseen säveleen.',
      wrong: {
        A: 'Tämä oli kappaleen koti ennen nousua. Uuden loppusoinnun päällä se on pieni septimi: bluesissa ja rockissa sitä käytetään joskus tarkoituksella, mutta se jättää loppuun jännitteen. Bändi halusi päättää kappaleen uuteen kotiin, joten tämä lopetus ei vastaa tavoitetta. Vertaa sitä basson viimeiseen säveleen.',
        C: 'Tämä sävel sopii loppusointuun ja kuulostaa vakaalta, mutta se ei ole uusi kotisävel. Vertaa sitä basson viimeiseen säveleen.',
      },
      isolate: ['melody'],
      hints: [
        'Kuuntele, mihin basso päättyy viimeisessä tahdissa. Onko se sama sävel kuin kappaleen alussa?',
        'Kun kertosäe nousee, myös koti nousee. Valitse lopetus, jossa melodia soi samaa säveltä kuin basso lopussa.',
      ],
      success: { title: 'Oikein! Melodia löysi uuden kodin.', text: 'Basso ja melodia päättyivät samaan, uuteen kotisäveleen.' },
    }],
    explanation: 'Kertosäe alkaa G-duurissa ja palaa G:hen. Sen jälkeen basso nousee G:stä G♯:n kautta A:han, ja E7 johdattaa bändin A-duuriin. Kertosäe toistuu kokonaisen sävelaskeleen korkeammalta, joten kappaleen koti on nyt A. Sävel A päättää kappaleen uuteen kotiin, kuten bändi halusi. Vanha koti G on A-duurisoinnun päällä pieni septimi. Blues- ja rock-kappaleissa sillä joskus lopetetaan tarkoituksella, mutta se jättää loppuun jännitteen eikä päätä kappaletta uuteen kotiin. C♯ on uuden kotisoinnun terssi: vakaa, mutta ei koti.',
  },
} satisfies Record<number, Song>;
