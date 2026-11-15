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
};

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

export type Task = ChooseTask | MatchTask | ReasonTask;

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
};

export type Gig = {
  id: number;
  title: string;
  description: string;
  /** Kappaleiden tunnisteet ovat koko pelissä yksilöllisiä, koska tallenne käyttää niitä. */
  songs: readonly number[];
  /** Keikka, jonka suoritus avaa tämän keikan normaalissa etenemisessä. */
  requires?: number;
  /** Sallii kappaleiden kokeilemisen ilman tallennusta, vaikka keikka ei olisi vielä auki. */
  freePractice?: boolean;
  completionTitle: string;
};

export type Area = { title: string; gigs: readonly Gig[] };
