import { BRIGHT_BASS, chord } from './arrangement';
import type { Song } from './tasks';

/*
 * Keikka 2 – Kotikulmien toinen ilta. Kaikki melodiat ja sovitukset on sävelletty tähän peliin.
 * Iskut lasketaan kappaleen alusta (tahti = neljä iskua). Kunkin kappaleen musiikillinen idea
 * ja vastausten perustelu on kirjattu myös tiedostoon ensikeikka/README.md, ja testit
 * tests/ensikeikka-second-night.test.ts tarkistavat sointusävelet, bassokulut ja tasot.
 */

const F = chord('F2', 'C3', ['A2', 'C3', 'F3']);
const A = chord('A2', 'E2', ['C#3', 'E3', 'A3']);
const FSharpMinor = chord('F#2', 'C#3', ['C#3', 'F#3', 'A3']);
const Dm = chord('D3', 'A2', ['D3', 'F3', 'A3']);
const E = chord('E2', 'B2', ['B2', 'E3', 'G#3']);

export const secondNight = {
  6: {
    id: 6, title: 'Melodia jatkaa matkaa', keyName: 'F-duuri', root: 'F',
    arrangement: {
      tempo: 96, comp: [0, 1.5, 2, 3], bassTone: BRIGHT_BASS,
      harmony: [
        F,
        chord('D2', 'A2', ['A2', 'D3', 'F3']),
        chord('Bb2', 'F2', ['D3', 'F3', 'Bb3']),
        chord('G2', 'D3', ['Bb2', 'D3', 'G3']),
        chord('C3', 'G2', ['Bb2', 'E3', 'G3']),
        F,
      ],
      melody: [
        ['C4', 0, .5], ['F4', .5, .5], ['A4', 1, 1.5], ['G4', 2.5, .5], ['F4', 3, 1],
        ['A4', 4, .5], ['D5', 4.5, 1], ['C5', 5.5, .5], ['A4', 6, 2],
        ['Bb4', 8, 1], ['D5', 9, .5], ['C5', 9.5, .5], ['Bb4', 10, .5], ['A4', 10.5, .5], ['F4', 11, 1],
        ['G4', 12, 1.5], ['Bb4', 13.5, .5], ['D5', 14, 1], ['C5', 15, 1],
        ['E4', 16, .5], ['G4', 16.5, .5], ['Bb4', 17, 1], ['G4', 18, 2],
      ],
    },
    endings: { A: { lead: 'A4' }, B: { lead: 'F4' }, C: { lead: 'C5' } },
    unfinished: { lead: null },
    target: 'B',
    tasks: [{
      kind: 'choose',
      heading: 'Kuuntele kappale ja valitse lopetus',
      intro: 'Melodian viimeinen sävel puuttuu. Tällä kertaa kaikki kolme lopetusta sopivat bändin viimeiseen sointuun.',
      prompt: 'Jokainen lopetus kuulostaa melko vakaalta. Etsi se, jossa melodia palaa kotisävelelle.',
      answer: 'B',
      retry: 'Tämäkin sävel sopii viimeiseen sointuun. Vertaa sitä basson viimeiseen säveleen.',
      wrong: {
        A: 'Tämä sävel sopii bändin viimeiseen sointuun, joten loppu kuulostaa vakaalta. Se ei kuitenkaan ole sama sävel, jota basso soittaa lopussa. Hyräile basson viimeinen sävel ja vertaa.',
        C: 'Melodia hyppää ylöspäin ja jää soimaan kirkkaasti. Sävel sopii sointuun, mutta loppu jää avoimeksi, ikään kuin kappale voisi vielä jatkua. Kuuntele, mihin melodia pääsee yhdellä pienellä askeleella.',
      },
      hints: [
        'Kun kaikki lopetukset sopivat sointuun, kuuntele bassoa. Mihin säveleen se asettuu lopussa?',
        'Hyräile basson viimeinen sävel. Valitse lopetus, jossa melodia soi samaa säveltä korkeammalta.',
      ],
      success: { title: 'Oikein! Löysit kotiin!', text: 'Melodia laskeutui askeleen kotisävelelle, ja basso soitti samaa säveltä.' },
    }],
    explanation: 'Viimeisessä F-duurisoinnussa soivat F, A ja C, joten kaikki kolme lopetusta sopivat bändiin. Melodian G laskeutuu askeleen F:ään. F on kappaleen kotisävel, ja basso soittaa sitä lopussa. Sävelet A ja C kuulostavat vakailta, koska ne ovat kotisoinnun terssi ja kvintti. Niissä melodia ei kuitenkaan pääse kotiin asti.',
  },
  7: {
    id: 7, title: 'Basso kertoo suunnan', keyName: 'A-duuri', root: 'A',
    arrangement: {
      tempo: 88, comp: [0, 1.5, 2.5, 3], bassTone: BRIGHT_BASS,
      harmony: [
        A,
        chord('D3', 'A2', ['D3', 'F#3', 'A3']),
        FSharpMinor,
        chord('B2', 'F#2', ['B2', 'D3', 'F#3']),
        chord('E2', 'B2', ['B2', 'D3', 'G#3'], [['E2', 0], ['F#2', 2], ['G#2', 3]]),
        A,
      ],
      melody: [
        ['E4', 0, 1], ['A4', 1, 1], ['C#5', 2, 1.5], ['B4', 3.5, .5],
        ['A4', 4, 1], ['F#4', 5, 1], ['A4', 6, 1], ['D5', 7, 1],
        ['C#5', 8, 1.5], ['A4', 9.5, .5], ['F#4', 10, 2],
        ['D4', 12, 1], ['F#4', 13, 1], ['B4', 14, 1.5], ['A4', 15.5, .5],
        ['G#4', 16, 1], ['B4', 17, 1], ['E5', 18, 1], ['D5', 19, .5], ['B4', 19.5, .5],
      ],
    },
    endings: {
      A: { lead: 'A4', chord: FSharpMinor },
      B: { lead: 'A4', chord: chord('E2', 'B2', ['B2', 'E3', 'A3']) },
      C: { lead: 'A4', chord: A },
    },
    unfinished: { lead: 'A4', chord: null },
    target: 'C',
    tasks: [{
      kind: 'choose',
      heading: 'Kuuntele bassoa ja valitse lopetus',
      intro: 'Nyt melodia on valmis, mutta bändin viimeinen sointu puuttuu. Basso on bändin matalin ääni. Se kertoo usein, mihin musiikki on matkalla.',
      prompt: 'Melodia päättyy joka lopetuksessa samaan säveleen. Vain bändi vaihtuu. Missä lopetuksessa bändi palaa kotiin?',
      answer: 'C',
      retry: 'Melodia on sama kaikissa lopetuksissa. Kuuntele, mitä basso tekee.',
      wrong: {
        A: 'Melodia on sama kuin muissa lopetuksissa, mutta basso kääntyy viime hetkellä alaspäin. Loppu kuulostaa yllättävältä ja vähän surulliselta, ikään kuin kappale voisi vielä jatkua. Kuuntele, mihin basson nouseva kulku luontevimmin jatkuisi.',
        B: 'Tässä basso palaa takaisin lähtösäveleensä, ja bändi jää odottamaan. Melodian ja bändin välille jää jännite. Kuuntele basso erikseen: mihin suuntaan se liikkuu viimeisellä askeleella?',
      },
      isolate: ['bass'],
      hints: [
        'Melodia ei auta tässä kappaleessa. Valitse lopetus ja kuuntele vain basso.',
        'Juuri ennen loppua basso nousee kolme askelta. Missä lopetuksessa se ottaa vielä yhden askeleen ylöspäin?',
      ],
      success: { title: 'Oikein! Bändi palasi kotiin!', text: 'Basso nousi askel kerrallaan kotisävelelle, jossa melodia jo odotti.' },
    }],
    explanation: 'Basso nousee E:stä F♯:n ja G♯:n kautta A:han. Sävel A on kappaleen kotisävel, ja melodia soi samaa säveltä. Lopetuksessa {A} basso kääntyy F♯:ään. Melodian sävel on yhä A, mutta sointu muuttuu mollisoinnuksi, ja loppu kuulostaa yllättävältä. Lopetuksessa {B} basso palaa E:hen, ja bändi jää odottamaan. Tätä kuuntelutapaa tarvitset illan viimeisessä kappaleessa.',
  },
  8: {
    id: 8, title: 'Kaksi mahdollista loppua', keyName: 'D-molli', root: 'D',
    arrangement: {
      tempo: 84, comp: [0, 2, 3], drums: { snare: [2], hats: [0, 1, 2, 3] }, bassTone: BRIGHT_BASS,
      harmony: [
        Dm,
        chord('Bb2', 'F2', ['D3', 'F3', 'Bb3']),
        chord('G2', 'D3', ['Bb2', 'D3', 'G3']),
        chord('A2', 'E2', ['C#3', 'E3', 'G3']),
        Dm,
        chord('G2', 'D3', ['Bb2', 'D3', 'G3']),
        Dm,
      ],
      melody: [
        ['A4', 0, 1.5], ['F4', 1.5, .5], ['D4', 2, 1], ['F4', 3, 1],
        ['F4', 4, 1], ['D4', 5, 1], ['Bb4', 6, 2],
        ['G4', 8, 1], ['Bb4', 9, 1], ['D5', 10, 1.5], ['C5', 11.5, .5],
        ['C#5', 12, 1], ['E5', 13, 1], ['A4', 14, 2],
        ['D5', 16, 1.5], ['C5', 17.5, .5], ['A4', 18, 1], ['F4', 19, 1],
        ['Bb4', 20, 1], ['A4', 21, 1], ['G4', 22, 1.5], ['E4', 23.5, .5],
      ],
    },
    endings: {
      A: { lead: 'C#4', chord: chord('A2', 'E2', ['C#3', 'E3', 'A3']) },
      B: { lead: 'D4', chord: Dm },
      C: { lead: 'F4', chord: Dm },
    },
    unfinished: { lead: null, chord: null },
    target: 'B',
    tasks: [{
      kind: 'match',
      heading: 'Kuuntele lopetukset ja tunnista niiden erot',
      intro: 'Kaikki kolme lopetusta ovat musiikillisesti mahdollisia. Kappale voi päättyä kuin piste tai jäädä kysymykseksi, kuten säkeistö ennen kertosäettä.',
      questions: [
        {
          id: 'koti', label: 'Piste',
          prompt: 'Missä lopetuksessa sekä melodia että bändi palaavat kotiin?',
          answer: 'B',
          wrong: {
            A: 'Kuuntele lopetus {A} uudelleen ja keskity bändiin. Palaako se samaan sointuun, jolla kappale alkoi?',
            C: 'Lopetuksessa {C} bändi on kotona, mutta kuuntele melodiaa. Soiko se samaa säveltä kuin basso?',
          },
        },
        {
          id: 'kysymys', label: 'Kysymys',
          prompt: 'Missä lopetuksessa bändi ei palaa kotiin, vaan kappale jää kysymykseksi?',
          answer: 'A',
          wrong: {
            B: 'Kuuntele lopetus {B} uudelleen. Voisiko kappale loppua siihen?',
            C: 'Lopetuksessa {C} bändi palaa kotiin, mutta melodia päättyy eri säveleen kuin basso. Kysymykseksi jäävässä lopetuksessa myös bändi jää odottamaan jatkoa.',
          },
        },
      ],
      hints: [
        'Kuuntele jokaisesta lopetuksesta ensin bändiä. Palaako se samaan sointuun, jolla kappale alkoi?',
        'Kahdessa lopetuksessa bändi on kotona. Niistä vain toisessa melodia soi samaa säveltä kuin basso.',
      ],
      success: { title: 'Oikein! Tunnistit molemmat loput!', text: 'Lopetus {B} päättyy pisteeseen ja lopetus {A} kysymykseen. Kumpikin on toimiva tapa päättää fraasi, mutta eri tarkoitukseen.' },
    }],
    explanation: 'Lopetus {B} päättyy kotiin: basso ja melodia soittavat D:tä, ja bändi palaa d-mollisointuun, jolla kappale alkoi. Lopetus {A} on avoin lopetus. Bändi siirtyy kirkkaaseen A-duurisointuun, ja melodia jää C♯:ään, joka odottaa nousua D:hen. Tällainen loppu sopii säkeistön päätteeksi, kun kappale jatkuu. Lopetuksessa {C} bändi on kotona, mutta melodia jää F:ään eli kotisoinnun terssiin. Se kuulostaa vakaalta mutta pehmeältä, ei pisteeltä.',
  },
  9: {
    id: 9, title: 'Illan viimeinen encore', keyName: 'E-duuri', root: 'E',
    arrangement: {
      tempo: 112, comp: [0, 1, 1.5, 2.5, 3], bassTone: BRIGHT_BASS,
      harmony: [
        E,
        chord('C#3', 'G#2', ['C#3', 'E3', 'G#3']),
        chord('A2', 'E2', ['C#3', 'E3', 'A3']),
        chord('B2', 'F#2', ['B2', 'D#3', 'F#3']),
        E,
        chord('A2', 'E2', ['C#3', 'E3', 'A3']),
        chord('B2', 'F#2', ['A2', 'D#3', 'F#3'], [['B2', 0], ['C#3', 2], ['D#3', 3]]),
        chord('E3', 'B2', ['B2', 'E3', 'G#3']),
      ],
      melody: [
        ['B4', 0, 1], ['G#4', 1, .5], ['B4', 1.5, .5], ['E5', 2, 1.5], ['D#5', 3.5, .5],
        ['C#5', 4, 1], ['B4', 5, .5], ['G#4', 5.5, 1], ['E4', 6.5, 1.5],
        ['A4', 8, .5], ['C#5', 8.5, .5], ['E5', 9, 1], ['C#5', 10, 1], ['A4', 11, 1],
        ['B4', 12, 1.5], ['D#5', 13.5, .5], ['F#5', 14, 1], ['D#5', 15, 1],
        ['E5', 16, 1], ['B4', 17, 1], ['G#4', 18, 1], ['B4', 19, 1],
        ['C#5', 20, 1.5], ['B4', 21.5, .5], ['A4', 22, 1], ['C#5', 23, 1],
        ['B4', 24, 1], ['A4', 25, 1], ['G#4', 26, 1], ['F#4', 27, 1],
      ],
    },
    endings: { A: { lead: 'E4' }, B: { lead: 'G#4' }, C: { lead: 'D#4' } },
    unfinished: { lead: null },
    target: 'A',
    tasks: [{
      kind: 'choose',
      heading: 'Vaihe 1/2: Valitse melodian lopetus',
      intro: 'Illan viimeinen kappale kokoaa kaiken yhteen. Kuuntele ensin melodiaa. Sen viimeinen sävel puuttuu.',
      prompt: 'Lopetukset ovat lähellä toisiaan. Missä melodia palaa kotisävelelle?',
      answer: 'A',
      retry: 'Melodia ei vielä palaa kotiin. Kuuntele vain melodia ja vertaa lopetuksia.',
      wrong: {
        B: 'Tämä sävel sopii viimeiseen sointuun ja kuulostaa vakaalta, mutta melodia kääntyy takaisin ylöspäin eikä pääse kotiin asti. Muistatko kappaleen 6?',
        C: 'Tämä sävel hankaa bändin viimeistä sointua vasten ja kaipaa vielä jatkoa. Kuuntele vain melodia ja vertaa, mihin askelkulku pysähtyy.',
      },
      isolate: ['melody'],
      hints: [
        'Melodia laskeutuu askel kerrallaan. Kuuntele vain melodia: mihin askelkulku luontevimmin pysähtyy?',
        'Vertaa lopetusta basson viimeiseen säveleen. Kotisävelessä melodia ja basso soivat samaa säveltä eri korkeuksilla.',
      ],
      success: { title: 'Oikein! Melodia löysi kotiin.', text: 'Seuraavaksi selvität, mitä basso tekee samaan aikaan.' },
    }, {
      kind: 'reason',
      heading: 'Vaihe 2/2: Miksi lopetus toimii?',
      intro: 'Melodia laskeutuu nyt kotiin. Mitä basso tekee samaan aikaan? Kuuntele ratkaiseva kohta ja basso erikseen.',
      question: 'Mikä kuvaa basson liikettä juuri ennen loppua?',
      statements: [
        {
          id: 'hyppy', text: 'Basso pysyy samassa sävelessä ja hyppää viime hetkellä kotisävelelle.',
          wrong: 'Kuuntele basso erikseen. Pysyykö se paikallaan, vai kuuletko useamman eri sävelen ennen loppua?',
        },
        { id: 'vastaliike', text: 'Basso nousee askel kerrallaan kotisävelelle samalla, kun melodia laskeutuu sinne.' },
        {
          id: 'myotaliike', text: 'Basso laskeutuu askel kerrallaan kotisävelelle samaan suuntaan kuin melodia.',
          wrong: 'Kuuntele basso ja melodia erikseen. Liikkuvatko ne samaan suuntaan vai toisiaan kohti?',
        },
      ],
      answer: 'vastaliike',
      isolate: ['bass', 'melody'],
      hints: [
        'Kuuntele basso erikseen. Nouseeko vai laskeeko se ennen viimeistä säveltä?',
        'Muistatko kappaleen 7? Basso liikkui siinä samalla tavalla.',
      ],
      success: { title: 'Oikein! Kuulit, miksi loppu toimii.', text: 'Basso nousee ja melodia laskeutuu. Kun ne saapuvat kotiin kahdesta suunnasta, loppu kuulostaa erityisen varmalta.' },
    }],
    explanation: 'Melodia laskeutuu B:stä askel kerrallaan E:hen, joka on kappaleen kotisävel. Samaan aikaan basso nousee B:stä C♯:n ja D♯:n kautta E:hen. Kun äänet liikkuvat toisiaan kohti, puhutaan vastaliikkeestä. G♯ sopisi loppusointuun, mutta silloin melodia ei pääsisi kotiin asti. D♯ on vain puoliaskelen päässä kodista ja hankaa loppusointua vasten.',
  },
} satisfies Record<number, Song>;
