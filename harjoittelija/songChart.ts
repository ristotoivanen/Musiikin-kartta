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
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  { id:'verse3', title:'Väliosa (laulu, kitara)', start:139, bars:verse(),
    lyrics:bridgeLyrics,
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

/** Kappale avautuu ensimmäisellä kerralla normaalina (sähköisenä) versiona. */
export const DEFAULT_SONG_VERSION: SongVersion = 'normal';
const SONG_SLUG = 'yksi-sointu-kaksi-askelta';
const VERSION_SLUGS: Record<SongVersion, string> = {
  acoustic: SONG_SLUG + '-akustinen',
  normal: SONG_SLUG + '-normaali',
};
/** URL:n ?kappale= -arvo: kappaleen nimi tai nimi ja versio (-akustinen / -normaali). */
export const isSongLink = (slug: string | null): boolean =>
  slug === SONG_SLUG || Object.values(VERSION_SLUGS).includes(slug ?? '');
/** Linkissä nimetty versio, tai null, jos linkki ei määrää versiota. */
export function versionFromSongLink(slug: string | null): SongVersion | null {
  const entry = Object.entries(VERSION_SLUGS).find(([, value]) => value === slug);
  return entry ? entry[0] as SongVersion : null;
}
export const songLink = (version: SongVersion): string => VERSION_SLUGS[version];

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
  // Käytä samoja aikarajoja kuin tahtihypyissä, jotta pyöristys ei jätä valintaa edelliseen tahtiin.
  let barIndex = 0;
  while (barIndex + 1 < section.bars.length && time >= barStartTime(sectionIndex, barIndex + 1, version)) {
    barIndex++;
  }
  const barStart = barStartTime(sectionIndex, barIndex, version);
  const beatDuration = sectionBarDuration(sectionIndex, version) / 4;
  let beat = 1;
  while (beat < 4 && time >= barStart + beat * beatDuration) beat++;
  const bar=section.bars[barIndex];
  return {section,sectionIndex,barIndex,beat,
    chord:bar.second && beat>=3 ? bar.second : bar.first};
}
export function barStartTime(sectionIndex:number,barIndex:number,version:SongVersion='acoustic'):number {
  return SONG_CHARTS[version][sectionIndex].start + sectionBarDuration(sectionIndex,version)*barIndex;
}

export type ChordPart = 'first' | 'second';
/** Yksi sointu kartan aikajärjestyksessä: tahdin alku tai kolmannen iskun vaihto. */
export interface ChordEvent {
  section: SongSection;
  sectionIndex: number;
  barIndex: number;
  part: ChordPart;
  chord: SongChord;
  /** Alkuhetki kappaleessa. Sama aikamalli kuin chordAt, joten ennakko ja korostus eivät erkane. */
  time: number;
  /** Looppi palaa kappaleen alkuun ennen tätä sointua. */
  wrapped: boolean;
}
export interface UpcomingSection {
  section: SongSection;
  sectionIndex: number;
  firstChord: SongChord;
  /** Uusi osa alkaa samalla soinnulla, jolla edellinen päättyy: ei soinnunvaihtoa. */
  continues: boolean;
  wrapped: boolean;
}
export interface LookAhead {
  /** Seuraava eri sointu. Saman soinnun jatkumista ei esitetä vaihtona. */
  nextChord: ChordEvent | null;
  /** Seuraava osa näytetään koko nykyisen osan viimeisen tahdin ajan. */
  nextSection: UpcomingSection | null;
}

function chordEvents(version: SongVersion): Omit<ChordEvent, 'wrapped'>[] {
  return SONG_CHARTS[version].flatMap((section, sectionIndex) => section.bars.flatMap((bar, barIndex) => {
    const time = barStartTime(sectionIndex, barIndex, version);
    const first = { section, sectionIndex, barIndex, part: 'first' as const, chord: bar.first, time };
    if (!bar.second) return [first];
    // chordAt vaihtaa jälkimmäiseen sointuun kolmannella iskulla eli tahdin puolivälissä.
    const half = sectionBarDuration(sectionIndex, version) / 2;
    return [first, { ...first, part: 'second' as const, chord: bar.second, time: time + half }];
  }));
}

/** Ennakkotieto soittajalle. Ei muuta chordAtin palauttamaa soivaa sointua tai tahtia. */
export function lookAhead(seconds: number, version: SongVersion = 'acoustic', loop = false): LookAhead {
  const chart = SONG_CHARTS[version];
  const current = chordAt(seconds, version);
  const bar = current.section.bars[current.barIndex];
  const part: ChordPart = current.beat >= 3 && bar.second ? 'second' : 'first';
  const events = chordEvents(version);
  const index = events.findIndex(event => event.sectionIndex === current.sectionIndex &&
    event.barIndex === current.barIndex && event.part === part);
  const upcoming: ChordEvent[] = [
    ...events.slice(index + 1).map(event => ({ ...event, wrapped: false })),
    ...(loop ? events.slice(0, index + 1).map(event => ({ ...event, wrapped: true })) : []),
  ];
  const nextChord = upcoming.find(event => event.chord !== current.chord) ?? null;

  let nextSection: UpcomingSection | null = null;
  const lastSection = current.sectionIndex === chart.length - 1;
  if (current.barIndex === current.section.bars.length - 1 && (!lastSection || loop)) {
    const sectionIndex = lastSection ? 0 : current.sectionIndex + 1;
    const section = chart[sectionIndex];
    const firstChord = section.bars[0].first;
    nextSection = {
      section, sectionIndex, firstChord, wrapped: lastSection,
      continues: firstChord === (bar.second ?? bar.first),
    };
  }
  return { nextChord, nextSection };
}

/** Jakaa sanoitetut osiot järjestyksessä kahteen palstaan: vasen luetaan ensin ylhäältä alas.
 * Osiota ei katkaista. Jakokohta tasaa palstojen korkeuden (otsikko + rivit). */
export function lyricColumns(sections: SongSection[]): [SongSection[], SongSection[]] {
  const parts = sections.filter(section => section.lyrics?.length);
  const weight = (section: SongSection) => 1 + (section.lyrics?.length ?? 0);
  const total = parts.reduce((sum, section) => sum + weight(section), 0);
  let best = 0, bestDiff = Infinity, left = 0;
  for (let split = 0; split <= parts.length; split++) {
    const diff = Math.abs(total - 2 * left);
    // Tasatilanteessa vasen palsta saa enemmän, jotta lukeminen jatkuu luontevasti oikealle.
    if (diff < bestDiff || (diff === bestDiff && left >= total - left)) { best = split; bestDiff = diff; }
    if (split < parts.length) left += weight(parts[split]);
  }
  return [parts.slice(0, best), parts.slice(best)];
}
