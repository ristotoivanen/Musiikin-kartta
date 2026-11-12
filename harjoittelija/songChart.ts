/**
 * Yksi sointu, kaksi askelta: akustisen ja normaalin version harjoituskartat.
 *
 * Sointukulku ja osioiden alkukohdat ovat 12.11.2026 tehty kuuntelutulkinta.
 * Aikaleimat ovat likimääräisiä. Soiva sointu korostetaan osioiden sisällä
 * tasavälisellä tahtijaolla, kunnes jokainen tahdin alku on tarkistettu.
 * Molemmilla sovituksilla on oma osio- ja tahtiaikakarttansa.
 */
export type SongVersion = 'acoustic' | 'normal';
export type SongChord = 'Gm' | 'F' | 'B♭' | 'E♭' | 'Dm' | 'C';
export interface SongBar {
  first: SongChord;
  /** Mahdollinen uusi sointu kolmannella iskulla. */
  second?: SongChord;
  /** Ohimenevä bassosävel, ei vahvistettu soinnunvaihto. */
  passingBass?: SongChord;
  /** Epävarma sointutulkinta, ei automaattisesti näytettävä uusi sointu. */
  possibleChord?: SongChord;
}
export interface SongSection {
  id: string;
  title: string;
  start: number;
  bars: SongBar[];
  lyrics?: string[];
  note?: string;
}
const b = (first: SongChord, second?: SongChord): SongBar => ({ first, ...(second ? { second } : {}) });
const verse = (): SongBar[] => [
  b('Gm','F'), b('Gm'), b('B♭','F'), b('Gm'),
  b('Gm','F'), b('Gm'), b('E♭','F'), b('Gm'),
];
const chorusStart = (): SongBar[] => [
  b('B♭','F'), b('Gm','Dm'), b('E♭','F'), b('Gm','Dm'),
];
const chorusLyrics = [
  'Yksi sointu, kaksi askelta',
  'sama riffi palaa taas',
  'kun sen soitan vielä kerran',
  'se jo jää mun sormiin, jää',
];
const bridgeLyrics = [
  'Pidän tauon, annan soida',
  'kuuntelen ja hengitän',
  'pienestäkin sävelestä',
  'löytyy tie eteenpäin',
];
export const ACOUSTIC_CHART: SongSection[] = [
  { id:'intro', title:'Intro', start:0, bars:[b('Gm','F'),b('Gm'),b('B♭','F'),b('Gm')] },
  { id:'verse1', title:'Säkeistö 1', start:14, bars:verse(), lyrics:[
    'Aamu piirtää viivan seinään', 'kahvi jäähtyy pöydälle',
    'mä otan kitaran syliin', 'ja aloitan uudelleen',
  ] },
  { id:'chorus1', title:'Kertosäe 1', start:43,
    bars:[...chorusStart(), b('E♭'), {...b('E♭'), passingBass:'F'}],
    lyrics:chorusLyrics,
    note:'Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi.',
  },
  { id:'interlude', title:'Välisoitto', start:65, bars:[b('Gm','F'),b('Gm')] },
  { id:'verse2', title:'Säkeistö 2', start:72, bars:verse(), lyrics:[
    'Ei tarvitse kiirehtiä', 'ei tarvitse osata kaikkea',
    'jokainen puhdas sävel', 'vie lähemmäs omaa ääntä',
  ] },
  { id:'chorus2', title:'Kertosäe 2', start:101,
    bars:[...chorusStart(), b('E♭'), b('F')], lyrics:chorusLyrics },
  { id:'bridge', title:'Kitarasoolo', start:122,
    bars:[b('Gm'),b('Dm'),b('F'),b('C'),b('Gm'),b('Dm'),b('E♭'),b('F')],
  },
  { id:'verse3', title:'Väliosa (laulu)', start:151, bars:verse(),
    lyrics:bridgeLyrics,
  },
  { id:'chorus3', title:'Kertosäe 3', start:179,
    bars:[...chorusStart(), b('E♭','F'), b('Gm')], lyrics:chorusLyrics },
  { id:'outro', title:'Outro', start:201,
    bars:[b('E♭','F'),{...b('Gm'),possibleChord:'Dm'},b('E♭','F'),
      b('Gm','F'),{...b('Gm'),possibleChord:'Dm'},b('Gm','F'),b('Gm')],
    lyrics:['Yksi sointu, kaksi askelta','sama riffi palaa taas'],
    note:'Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu.',
  },
];


/** Sähköinen (normaali) sovitus, 3:32. Alut on tarkistettu erikseen tästä versiosta. */
export const NORMAL_CHART: SongSection[] = [
  { id:'intro', title:'Intro', start:0, bars:[b('Gm','F'),b('Gm'),b('B♭','F'),b('Gm')] },
  { id:'verse1', title:'Säkeistö 1', start:14, bars:verse(), lyrics:[
    'Aamu piirtää viivan seinään', 'kahvi jäähtyy pöydälle',
    'mä otan kitaran syliin', 'ja aloitan uudelleen',
  ] },
  { id:'chorus1', title:'Kertosäe 1', start:42,
    bars:[...chorusStart(),b('E♭'),b('E♭')], lyrics:chorusLyrics },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id:'verse2', title:'Säkeistö 2', start:63, bars:verse(), lyrics:[
    'Ei tarvitse kiirehtiä', 'ei tarvitse osata kaikkea',
    'jokainen puhdas sävel', 'vie lähemmäs omaa ääntä',
  ] },
  { id:'chorus2', title:'Kertosäe 2', start:91,
    bars:[...chorusStart(),b('E♭'),b('F')], lyrics:chorusLyrics },
  { id:'bridge', title:'Kitarasoolo', start:111,
    bars:[b('Gm'),b('Dm'),b('F'),b('C'),b('Gm'),b('Dm'),b('E♭'),b('F')],
  },
  { id:'verse3', title:'Väliosa (laulu, kitara)', start:139, bars:verse(),
    lyrics:bridgeLyrics,
    note:'Basso on tauolla noin 2:23–2:44. Laulu sijoittuu tämän kitaravetoisen jakson päälle.',
  },
  { id:'chorus3', title:'Kertosäe 3', start:167,
    bars:[...chorusStart(),b('B♭','F'),b('Gm'),b('E♭','F'),b('Gm')],
    lyrics:chorusLyrics },
  { id:'outro', title:'Outro', start:195,
    bars:[b('E♭','F'),b('Gm','F'),b('E♭','F'),b('Gm')],
    lyrics:['Yksi sointu, kaksi askelta','sama riffi palaa taas'],
    note:'Viimeinen Gm jää soimaan kappaleen loppuun.',
  },
];

export const SONG_CHARTS: Record<SongVersion, SongSection[]> = {
  acoustic: ACOUSTIC_CHART,
  normal: NORMAL_CHART,
};

export const songClock = (seconds: number): string => {
  const n = Math.max(0, Math.floor(Number.isFinite(seconds) ? seconds : 0));
  return `${Math.floor(n / 60)}:${String(n % 60).padStart(2,'0')}`;
};
export function sectionBarDuration(index: number, version: SongVersion = 'acoustic'): number {
  const chart = SONG_CHARTS[version];
  const current = chart[index];
  const next = chart[index+1];
  // Viimeiseen osaan ei venytetä mahdollista hiljaista häntää.
  return next ? (next.start-current.start)/current.bars.length : (4*60/69);
}
export interface CurrentChord {
  section: SongSection;
  sectionIndex: number;
  barIndex: number;
  beat: number;
  chord: SongChord;
}
export function chordAt(seconds: number, version: SongVersion = 'acoustic'): CurrentChord {
  const chart = SONG_CHARTS[version];
  const time = Math.max(0, Number.isFinite(seconds) ? seconds : 0);
  let sectionIndex=0;
  for (let i=1; i<chart.length; i++) {
    if (time < chart[i].start) break;
    sectionIndex=i;
  }
  const section=chart[sectionIndex];
  const barDuration=sectionBarDuration(sectionIndex, version);
  const barPosition=Math.max(0,(time-section.start)/barDuration);
  const barIndex=Math.min(section.bars.length-1,Math.floor(barPosition));
  const beat=Math.min(4,Math.floor((barPosition-barIndex)*4)+1);
  const bar=section.bars[barIndex];
  return {section,sectionIndex,barIndex,beat,
    chord:bar.second && beat>=3 ? bar.second : bar.first};
}
export function barStartTime(sectionIndex:number,barIndex:number,version:SongVersion='acoustic'):number {
  return SONG_CHARTS[version][sectionIndex].start + sectionBarDuration(sectionIndex,version)*barIndex;
}
