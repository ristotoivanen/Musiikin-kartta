/**
 * Yksi sointu, kaksi askelta: akustisen version harjoituskartta.
 *
 * Sointukulku ja osioiden alkukohdat ovat 12.11.2026 tehty kuuntelutulkinta.
 * Aikaleimat ovat likimääräisiä. Soiva sointu korostetaan osioiden sisällä
 * tasavälisellä tahtijaolla, kunnes jokainen tahdin alku on tarkistettu.
 * Normaali versio on eri pituinen eikä käytä tätä aikakarttaa.
 */
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
  { id:'bridge', title:'Väliosa', start:122,
    bars:[b('Gm'),b('Dm'),b('F'),b('C'),b('Gm'),b('Dm'),b('E♭'),b('F')],
    lyrics:['Pidän tauon, annan soida', 'kuuntelen ja hengitän',
      'pienestäkin sävelestä', 'löytyy tie eteenpäin'],
  },
  { id:'verse3', title:'Säkeistökierto 3', start:151, bars:verse(),
    note:'Tekstirungossa ei ole kolmatta säkeistöä. Tarkista erikseen, onko tämä instrumentaalinen soolo vai laulettu jakso.',
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

export const songClock = (seconds: number): string => {
  const n = Math.max(0, Math.floor(Number.isFinite(seconds) ? seconds : 0));
  return `${Math.floor(n / 60)}:${String(n % 60).padStart(2,'0')}`;
};
export function sectionBarDuration(index: number): number {
  const current = ACOUSTIC_CHART[index];
  const next = ACOUSTIC_CHART[index+1];
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
export function chordAt(seconds: number): CurrentChord {
  const time = Math.max(0, Number.isFinite(seconds) ? seconds : 0);
  let sectionIndex=0;
  for (let i=1; i<ACOUSTIC_CHART.length; i++) {
    if (time < ACOUSTIC_CHART[i].start) break;
    sectionIndex=i;
  }
  const section=ACOUSTIC_CHART[sectionIndex];
  const barDuration=sectionBarDuration(sectionIndex);
  const barPosition=Math.max(0,(time-section.start)/barDuration);
  const barIndex=Math.min(section.bars.length-1,Math.floor(barPosition));
  const beat=Math.min(4,Math.floor((barPosition-barIndex)*4)+1);
  const bar=section.bars[barIndex];
  return {section,sectionIndex,barIndex,beat,
    chord:bar.second && beat>=3 ? bar.second : bar.first};
}
export function barStartTime(sectionIndex:number,barIndex:number):number {
  return ACOUSTIC_CHART[sectionIndex].start + sectionBarDuration(sectionIndex)*barIndex;
}
