import { endingExcerpt, renderIsolated, renderTake, type Layer } from './arrangement';
import { secondNight } from './second-night';
import { gigArrangements, gigs as firstNight, type Gig as FirstNightSong } from './song-demo-score';
import { LETTERS, type Area, type ChooseTask, type Letter, type Song } from './tasks';

const melodyPrompt = 'Kuuntele lopetuksia. Mikä niistä tuntuu palaavan kotiin?';
const closerPrompt = 'Useampi lopetus voi sopia kappaleeseen. Etsi sävel, johon melodia tuntuu palaavan kotiin.';

/**
 * Keikan 1 kappaleiden tehtävä. Kysymys ja vastaus ovat samat kuin ennen tehtävätyyppien
 * yleistämistä. Katselmoinnin jälkeen väärästä vastauksesta kerrotaan, mitä juuri se lopetus tekee.
 */
function findHome(answer: Letter, closer: boolean, wrong: Partial<Record<Letter, string>>): ChooseTask {
  return {
    kind: 'choose',
    heading: 'Kuuntele kappale ja valitse lopetus',
    intro: 'Kuuntele, miten bändi päättää kappaleen. Melodian viimeinen sävel puuttuu.',
    prompt: closer ? closerPrompt : melodyPrompt,
    answer,
    retry: closer
      ? 'Tämä sävel voi sopia lopetukseen. Kuuntele toista vaihtoehtoa ja vertaa, missä melodia tuntuu palaavan kotiin.'
      : 'Tämä lopetus kuulostaa vielä vähän jännitteiseltä. Kokeile toista ja kuuntele, mikä saa kappaleen tuntumaan valmiilta.',
    wrong,
    hints: closer ? [
      'Vertaa viimeistä säveltä siihen, mihin bändi palaa. Missä versiossa melodia tuntuu palaavan samaan kotiin?',
      'Kuuntele lopetus ja hyräile basson viimeinen sävel. Kotisävelessä melodia soi samaa säveltä korkeammalta.',
    ] : [
      'Kuuntele viimeistä säveltä bändin päällä. Missä versiossa loppu tuntuu vakaalta ja kappale voisi jäädä siihen?',
      'Hyräile oma lopetus keskeneräisen kappaleen perään. Mikä vaihtoehdoista on lähimpänä hyräilyäsi?',
    ],
    success: { title: 'Oikein! Löysit kotiin!', text: 'Tämä sävel on kappaleen kotisävel. Siihen melodia päättyy vakaasti.' },
  };
}

/** Vaihtoehtokohtainen palaute. Teksti ei kerro, mihin suuntaan oikea sävel on. */
const firstNightWrong: Record<FirstNightSong, Partial<Record<Letter, string>>> = {
  1: {
    A: 'Tämä sävel hankaa bändin loppusointua vasten, ja loppu jää kireäksi. Kuuntele, missä lopetuksessa melodia asettuu sointuun.',
    C: 'Melodia hyppää tässä kauas säveleen, joka riitelee bändin loppusoinnun kanssa. Etsi lopetus, joka asettuu rauhallisesti sointuun.',
  },
  2: {
    A: 'Tämä sävel on kaukana kodista ja riitelee bändin loppusoinnun kanssa. Kuuntele, mihin basso asettuu.',
    B: 'Tämä sävel hankaa loppusointua vasten, vaikka se ei hyppää kauas. Vertaa sitä basson viimeiseen säveleen.',
  },
  3: {
    B: 'Tämä sävel kuuluu sävellajiin, joten se ei riitele pahasti. Bändi on jo kotona, mutta melodia jää odottamaan jatkoa.',
    C: 'Tämä sävel ei kuulu sävellajiin ja hankaa bändin loppusointua vasten. Etsi lopetus, joka asettuu soinnun kanssa yhteen.',
  },
  4: {
    A: 'Tämä sävel kuuluu mollisävellajiin, mutta melodia jää odottamaan jatkoa. Kuuntele, missä lopetuksessa melodia ja basso soivat samaa säveltä.',
    C: 'Tämä sävel kuuluu sävellajiin mutta ei bändin loppusointuun, joten loppu kuulostaa avoimelta. Vertaa sitä basson viimeiseen säveleen.',
  },
  5: {
    A: 'Tämä sävel kuuluu bändin loppusointuun ja kuulostaa vakaalta, joten se on hyvä harhautus. Se ei kuitenkaan ole sama sävel, jonka basso soittaa lopussa.',
    B: 'Tämä sävel jää odottamaan jatkoa, ikään kuin melodia ei olisi aivan perillä. Kuuntele, mihin se haluaisi vielä liikkua.',
  },
};

const firstNightExplanations: Record<FirstNightSong, string> = {
  1: 'Melodian G♯ nousee puoliaskelen A:han samalla kun bändi vaihtaa E7-soinnusta Am-sointuun. Sävel A on a-mollin kotisävel, ja kuulet sen sekä melodiassa että bassossa. Muut lopetukset, B♭ ja E♭, eivät kuulu a-molliin. Ne hankaavat loppusointua vasten, joten loppu jää kireäksi.',
  2: 'Melodian F♯ nousee puoliaskelen G:hen, kun bändi vaihtaa D7-soinnusta G-duurisointuun. Basso ja melodia soittavat lopussa G:n eri oktaaveissa. Muut lopetukset, D♭ ja A♭, eivät kuulu G-duuriin, joten ne riitelevät bändin kanssa.',
  3: 'Säestys vaihtaa G7-soinnusta C-duurisointuun, ja melodian B nousee puoliaskelen C:hen. Myös D kuuluu C-duuriin. Kun melodia jää D:hen, bändi on jo kotona ja melodia voi yhä tuntua odottavan jatkoa. D♭ ei kuulu sävellajiin ja hankaa loppusointua vasten.',
  4: 'Melodian D♯ nousee puoliaskelen E:hen samalla kun B7 vaihtuu Em-sointuun. Huomaa loppusoinnun G. Se on kolmen puoliaskelen päässä E:stä ja antaa kotisoinnulle sen mollisävyn. D ja F♯ kuuluvat e-molliin, mutta kumpikaan ei ole kotisävel: D jää odottamaan nousua kotiin, ja F♯ jättää lopun avoimeksi.',
  5: 'Bändi vaihtaa A7-soinnusta D-duurisointuun, ja melodian C♯ nousee puoliaskelen D:hen. Myös sävel A voi kuulostaa vakaalta, koska se on D-duurisoinnun kvintti eli D-duuriasteikon viides sävel. D on kappaleen kotisävel, ja se soi lopussa myös bassossa.',
};

/** `closer`: ainakin yksi väärä vaihtoehto kuuluu sävellajiin, joten lopetukset ovat lähempänä toisiaan. */
function firstNightSong(id: FirstNightSong, closer: boolean): Song {
  const { title, keyName, root, endings, target } = firstNight[id];
  return {
    id, title, keyName, root, target,
    arrangement: { tempo: 100, ...gigArrangements[id] },
    endings: { A: { lead: endings.A }, B: { lead: endings.B }, C: { lead: endings.C } },
    unfinished: { lead: null },
    tasks: [findHome(target, closer, firstNightWrong[id])],
    explanation: firstNightExplanations[id],
  };
}

export const songs: Readonly<Record<number, Song>> = {
  1: firstNightSong(1, false), 2: firstNightSong(2, false),
  3: firstNightSong(3, true), 4: firstNightSong(4, true), 5: firstNightSong(5, true),
  ...secondNight,
};

export const area: Area = {
  title: 'Kotikulmien keikat',
  gigs: [{
    id: 1,
    title: 'Ensimmäinen esiintyminen',
    description: 'Kuuntele keskeneräinen kappale, kokeile kolmea lopetusta ja valitse se, johon melodia tuntuu palaavan kotiin.',
    songs: [1, 2, 3, 4, 5],
    completionTitle: 'Keikka valmis!',
  }, {
    id: 2,
    title: 'Kotikulmien toinen ilta',
    description: 'Läheisempiä lopetuksia, bassolinjan kuuntelua ja kaksivaiheinen encore. Melodian lisäksi kuunnellaan bändiä.',
    songs: [6, 7, 8, 9],
    requires: 1,
    freePractice: true,
    directStart: true,
    completionTitle: 'Kotikulmien toinen ilta suoritettu!',
  }],
};

export function gigOf(song: number) {
  return area.gigs.find(gig => gig.songs.includes(song));
}

/** Ratkaiseva kohta alkaa toiseksi viimeisestä tahdista. */
export function songExcerpt(song: Song) {
  return endingExcerpt(song.arrangement);
}

/** Renderöi kappaleen. `null` soittaa keskeneräisen version; `layers` soittaa vain valitut osat. */
export function renderSong(song: Song, ending: Letter | null, rate: number, layers?: readonly Layer[]) {
  const final = ending === null ? song.unfinished : song.endings[ending];
  return layers ? renderIsolated(song.arrangement, final, rate, layers, songExcerpt(song))
    : renderTake(song.arrangement, final, rate);
}

export { LETTERS };
