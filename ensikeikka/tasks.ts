import type { Arrangement, DemoEnding, FinalBar, Layer } from './arrangement';

/*
 * Ensikeikan tehtävätyypit. Käyttöliittymä valitsee näkymän tehtävän `kind`-kentän perusteella,
 * eikä kappaleiden numeroihin sidottuja ehtoja tarvita. Uusi kappale lisätään kirjoittamalla
 * sille sovitus, kolme loppua ja tehtävälista (katso README.md).
 */

export type Letter = DemoEnding;
export const LETTERS = ['A', 'B', 'C'] as const satisfies readonly Letter[];

export type Feedback = { title: string; text: string };

type TaskBase = {
  heading: string;
  intro: string;
  /** Porrastetut vihjeet. Ensimmäinen ohjaa kuuntelua, seuraavat tarkentavat. */
  hints: readonly string[];
  /** Näytetään, kun tehtävä on ratkaistu. */
  success: Feedback;
  /**
   * Ratkaiseva kohta tahteina [alku, loppu) kappaleen alusta. Oletuksena kaksi viimeistä tahtia.
   * Rajattu katkelma soitetaan leikattuna ja lyhyesti häivytettynä.
   */
  span?: readonly [from: number, to: number];
};

/** Bändin osa, jonka muutosta kuunnellaan vertailutehtävässä. */
export type Part = 'bass' | 'comp' | 'melody';
export const PARTS = ['bass', 'comp', 'melody'] as const satisfies readonly Part[];

/** Yksi kokonainen soitettava otto: sovitus ja sen viimeinen tahti. */
export type Take = { arrangement: Arrangement & { tempo: number }; final: FinalBar };

/** Kuuntele lopetukset ja valitse yksi. Vaihtoehdot voivat vaihtaa melodiaa, bändiä tai molempia. */
export type ChooseTask = TaskBase & {
  kind: 'choose';
  prompt: string;
  answer: Letter;
  /** Yleinen palaute väärästä valinnasta. */
  retry: string;
  /** Vaihtoehtokohtainen palaute. Se ei saa paljastaa oikeaa kirjainta tai säveltä. */
  wrong?: Partial<Record<Letter, string>>;
  /** Osat, jotka valitusta lopetuksesta voi kuunnella erikseen. */
  isolate?: readonly Layer[];
};

/** Tunnista useasta lopetuksesta, mikä vastaa kutakin kuvausta. */
export type MatchTask = TaskBase & {
  kind: 'match';
  questions: readonly {
    id: string;
    /** Lyhyt nimi painikkeiden saavutettavaa nimeä varten. */
    label: string;
    prompt: string;
    answer: Letter;
    wrong: Partial<Record<Letter, string>>;
  }[];
};

/** Arvioi kuuntelemalla, mikä väite selittää ratkaisun. */
export type ReasonTask = TaskBase & {
  kind: 'reason';
  question: string;
  statements: readonly { id: string; text: string; wrong?: string }[];
  answer: string;
  isolate: readonly Layer[];
};

/**
 * Kuuntele saman kohdan kaksi versiota ja kerro, mikä osa muuttui. Versioissa muuttuu tasan
 * yksi osa, ja muut osat soivat näytteen tarkkuudella samoin.
 */
export type CompareTask = TaskBase & {
  kind: 'compare';
  versions: readonly [Take, Take];
  answer: Part;
  wrong: Partial<Record<Part, string>>;
};

/**
 * Kuuntele kappaleen alku ja vertaile kahta jatkoa (kappaleen `takes`). Valinta ratkeaa soittamalla
 * koko kappale valitulla jatkolla; arvio perustuu bändin tavoitteeseen (`goal`).
 */
export type ContinueTask = TaskBase & {
  kind: 'continue';
  goal: string;
  /** Alun pituus tahteina; jatkot alkavat tämän jälkeen. */
  openingBars: number;
  answer: Letter;
  wrong: Partial<Record<Letter, string>>;
};

export type Task = ChooseTask | MatchTask | ReasonTask | CompareTask | ContinueTask;

export type Song = {
  id: number;
  title: string;
  keyName: string;
  root: string;
  arrangement: Arrangement & { tempo: number };
  endings: Record<Letter, FinalBar>;
  /** Keskeneräinen versio, jonka pelaaja kuulee ennen valintaa. */
  unfinished: FinalBar;
  /** Lopetus, jolla valmis kappale soitetaan. */
  target: Letter;
  tasks: readonly Task[];
  /** "Miksi tämä vastaus?" – näytetään vasta ratkaisun jälkeen. */
  explanation: string;
  /** Kokonaiset vaihtoehtoiset otot (jatkotehtävä). Kirjain viittaa ottoon, ei viimeiseen tahtiin. */
  takes?: Partial<Record<Letter, Take>>;
  /**
   * Saman taidon toiset musiikkiesimerkit. Opetus käyttää kappaletta sellaisenaan (versio 0) ja
   * harjoittelu arpoo version, jottei vastausta opi muistamaan yhdestä äänitteestä.
   */
  variants?: readonly SongVariant[];
};

export type SongVariant = Partial<Omit<Song, 'id' | 'variants'>> & { name: string };

export type Gig = {
  id: number;
  title: string;
  description: string;
  /** Kappaleiden tunnisteet ovat koko pelissä yksilöllisiä, koska tallenne käyttää niitä. */
  songs: readonly number[];
  /** Keikat, joiden suoritus avaa tämän keikan normaalissa etenemisessä. */
  requires?: readonly number[];
  /** Näkyvä nimi taivutuksineen. Oletus on "keikka N". */
  name?: GigName;
  /** Lukitun keikan selitteet: tavallinen avautuminen ja suora aloitus. */
  lockNote?: string;
  directNote?: string;
  /** Keikan lopuksi soitettava kokonainen esitys. */
  finale?: boolean;
  /** Sallii kappaleiden kokeilemisen ilman tallennusta, vaikka keikka ei olisi vielä auki. */
  freePractice?: boolean;
  /**
   * Kokenut pelaaja voi aloittaa keikan suoraan ennen edellytettyä keikkaa. Suoritukset
   * tallentuvat normaalisti, mutta edellytetty keikka ei merkitse itseään suoritetuksi.
   */
  directStart?: boolean;
  completionTitle: string;
};

export type GigName = { heading: string; nominative: string; partitive: string; elative: string; genitive: string };

export type Area = { title: string; gigs: readonly Gig[] };
