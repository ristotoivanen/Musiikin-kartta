import { applause, concatenate, cutSection, endingExcerpt, renderIsolated, renderTake, type Layer } from './arrangement';
import { firstGig } from './first-gig';
import { secondNight } from './second-night';
import { gigArrangements, gigs as firstNight, type Gig as FirstNightSong } from './song-demo-score';
import { LETTERS, type Area, type ChooseTask, type Gig, type Letter, type Song, type Take } from './tasks';

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
  ...firstGig,
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
    requires: [1],
    freePractice: true,
    directStart: true,
    completionTitle: 'Kotikulmien toinen ilta suoritettu!',
  }, {
    id: 3,
    name: { heading: 'Ensikeikka', nominative: 'Ensikeikka', partitive: 'Ensikeikkaa', elative: 'Ensikeikasta', genitive: 'Ensikeikan' },
    title: 'Kotikulman keikka',
    description: 'Ensimmäinen esiintyminen: soundcheck, ensimmäinen biisi ja illan viimeinen kappale. Ensitreenien kuuntelutaidot pidemmässä musiikissa. Lopuksi kuulet koko keikan.',
    songs: [10, 11, 12],
    requires: [1, 2],
    freePractice: true,
    directStart: true,
    lockNote: 'Tavallisesti Ensikeikka avautuu, kun Ensitreenit eli keikat 1 ja 2 on suoritettu.',
    directNote: 'Kuuntelutaidot jo hallussa? Suoritukset tallentuvat, ja Ensitreenit pysyvät ennallaan.',
    completionTitle: 'Ensikeikka soitettu!',
    unit: 'vaihetta',
    completionSummary: 'Suoritit soundcheckin ja kaksi keikkabiisiä.',
    finale: {
      songs: [11, 12],
      note: 'Keikan biisit soivat valmiina peräkkäin oikeilla ratkaisuilla: ensimmäinen biisi ja illan viimeinen kappale. Lopuksi yleisö taputtaa. Soundcheck ei kuulu esitykseen.',
    },
  }],
};

/** Keikan näkyvä nimi taivutuksineen ("keikka 2", "Ensikeikka"). */
export function gigName(gig: Gig) {
  return gig.name ?? {
    heading: `Keikka ${gig.id}`, nominative: `keikka ${gig.id}`, partitive: `keikkaa ${gig.id}`, elative: `keikasta ${gig.id}`,
    genitive: `keikan ${gig.id}`,
  };
}

/**
 * Kappaleen musiikkiesimerkki. Versio 0 on kappale sellaisenaan; muut versiot korvaavat sen kentät
 * (esimerkiksi toinen soundcheck tai toinen biisi), mutta tunniste ja tallennus pysyvät samoina.
 */
export function songVersion(song: Song, variant: number, rounds?: readonly number[]): Song {
  const version = variant > 0 ? song.variants?.[variant - 1] : undefined;
  const resolved = version ? { ...song, ...version, id: song.id } : song;
  return rounds && resolved.rounds ? { ...resolved, ...resolved.rounds.build(rounds) } : resolved;
}

/** Arpoo kappaleen tehtäväkierrokset, jos kappaleella on kierrosjoukko. */
export const drawRounds = (song: Song, random: () => number = Math.random) => song.rounds?.draw(random);

/** Keikan etenemislaskuri, esim. "1 / 5 kappaletta" tai "1 / 3 vaihetta". */
export const progressText = (gig: Gig, count: number) => `${count} / ${gig.songs.length} ${gig.unit ?? 'kappaletta'}`;

export const versionCount = (song: Song) => 1 + (song.variants?.length ?? 0);

/** Keikat, joiden suoritus avaa keikan normaalissa etenemisessä. */
export const requiredGigs = (gig: Gig) => area.gigs.filter(other => gig.requires?.includes(other.id));

/** "keikka 1" tai "keikat 1 ja 2"; `genitive` antaa muodon "keikan 1" / "keikkojen 1 ja 2". */
export function requiredText(gig: Gig, form: 'nominative' | 'genitive') {
  const ids = requiredGigs(gig).map(other => other.id);
  const list = ids.length > 1 ? `${ids.slice(0, -1).join(', ')} ja ${ids.at(-1)}` : `${ids[0]}`;
  if (form === 'genitive') return ids.length > 1 ? `keikkojen ${list}` : `keikan ${list}`;
  return ids.length > 1 ? `keikat ${list}` : `keikka ${list}`;
}

export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export function gigOf(song: number) {
  return area.gigs.find(gig => gig.songs.includes(song));
}

/** Ratkaiseva kohta alkaa toiseksi viimeisestä tahdista. */
export function songExcerpt(song: Song) {
  return endingExcerpt(song.arrangement);
}

const barLength = (take: { tempo: number }) => 4 * 60 / take.tempo;

/** Otto, jonka kirjain valitsee: jatkotehtävässä kokonainen otto, muuten sovitus ja viimeinen tahti. */
export function songTake(song: Song, ending: Letter | null): Take {
  const own = ending === null ? undefined : song.takes?.[ending];
  if (own) return own;
  return { arrangement: song.arrangement, final: ending === null ? song.unfinished : song.endings[ending] };
}

/**
 * Renderöi kappaleen. `null` soittaa keskeneräisen version; `layers` soittaa vain valitut osat.
 * `span` rajaa soiton tahteihin [alku, loppu) ja häivyttää lopun.
 */
export function renderSong(song: Song, ending: Letter | null, rate: number, layers?: readonly Layer[], span?: readonly [number, number]) {
  const { arrangement, final } = songTake(song, ending);
  const from = span ? span[0] * barLength(arrangement) : songExcerpt(song);
  const full = layers ? renderIsolated(arrangement, final, rate, layers, from) : renderTake(arrangement, final, rate);
  return span ? cutSection(full, rate, span[0] * barLength(arrangement), span[1] * barLength(arrangement)) : full;
}

/** Ottojen renderöinti vertailutehtävään. `layers` normalisoi osan koko oton tasolle. */
export function renderTakeAudio(take: Take, rate: number, layers?: readonly Layer[]) {
  return layers ? renderIsolated(take.arrangement, take.final, rate, layers, 0) : renderTake(take.arrangement, take.final, rate);
}

/** Kaksi ottoa peräkkäin vertailua varten. */
export function renderPair(takes: readonly [Take, Take], rate: number, layers?: readonly Layer[]) {
  return concatenate(takes.map(item => renderTakeAudio(item, rate, layers)), rate, .6);
}

/**
 * Keikan biisit yhtenä esityksenä: `gig.finale.songs` valmiina hyväksytyillä ratkaisuilla
 * (opetusversio ja `target`) ja lopuksi aplodit. Esitys ei riipu pelaajan kokeilemista versioista
 * eikä tallennetusta tilasta, joten se on sama myös uudelleenlatauksen jälkeen.
 */
export function renderFinale(gig: Gig, rate: number) {
  const parts = (gig.finale?.songs ?? []).map(id => renderSong(songs[id], songs[id].target, rate));
  return concatenate([...parts, applause(rate)], rate, .7);
}

export { LETTERS };
