import { useEffect, useRef, useState, type MouseEvent, type ReactNode, type RefObject } from 'react';
import type { Layer } from './arrangement';
import { cutSection } from './arrangement';
import { renderPair, renderSong, renderTakeAudio, songExcerpt } from './catalog';
import { naturalOrder, shownLetter, type Order } from './order';
import { PARTS, type ChooseTask, type CompareTask, type ContinueTask, type Letter, type MatchTask, type Part, type ReasonTask, type Song } from './tasks';
import { usePlayback } from './usePlayback';

type Stage = 'choose' | 'between' | 'perform' | 'complete';
/** Kuuntelutapa: keskeneräinen, lopetus, koko kappale, erilliskuuntelu (osa) tai tehtävän oma toisto. */
type ListeningMode = string;

export type Attempt = {
  stage: Stage;
  /** Monivaiheisen kappaleen käynnissä oleva tehtävä. */
  step: number;
  selected: Letter | null;
  /** Loppuun asti kuullut lopetukset ja erikseen kuunnellut osat. */
  heard: string[];
  checked: Letter | null;
  /** Tunnistus- ja perustelutehtävän valinnat: kysymys → vastaus. */
  picks: Record<string, string>;
  checkedPicks: Record<string, string> | null;
  /** Kasvaa jokaisessa tarkistuksessa, jotta palautteen otsikko saa fokuksen myös toistuvassa yrityksessä. */
  checks: number;
  hintLevel: number;
  /**
   * Lopetusten näkyvä järjestys (paikka → tunniste). Harjoittelukierros arpoo sen kerran
   * kierroksen alussa, eikä se muutu saman kierroksen aikana, ei myöskään vaiheiden välillä.
   */
  order: Order;
  /** Musiikkiesimerkin versio (0 = opetus). Harjoittelukierros arpoo sen kerran. */
  variant: number;
  /** Arvotut tehtäväkierrokset (`Song.rounds`). Pysyvät samoina koko yrityksen ajan. */
  rounds?: readonly number[];
};

export const initialAttempt: Attempt = {
  stage: 'choose', step: 0, selected: null, heard: [], checked: null, picks: {}, checkedPicks: null, checks: 0, hintLevel: 0, order: naturalOrder, variant: 0,
};

const freshTask = {
  selected: null, heard: [], checked: null, picks: {}, checkedPicks: null, hintLevel: 0,
} satisfies Partial<Attempt>;

const layerNames: Record<Layer, string> = { bass: 'basso', melody: 'melodia', comp: 'komppi', drums: 'rummut' };

type Sound = ReturnType<typeof usePlayback>;
type Listen = (mode: ListeningMode, label: string, ending: Letter | null, onHeard?: () => void) => void;
/** Soittaa valmiiksi määritellyn äänen (esim. kaksi versiota peräkkäin). */
type Play = (mode: ListeningMode, label: string, render: (rate: number) => Float32Array, onHeard?: () => void) => void;
/** Muutos tehtävän tilaan. Funktio saa tuoreimman tilan, jottei myöhään valmistuva kuuntelu käytä vanhaa. */
export type Update = (changes: Partial<Attempt> | ((current: Attempt) => Partial<Attempt>)) => void;
/** Soiko juuri tämä kuuntelu (ja lopetus). Toiston tila on erillään tehtävän valinnoista. */
type IsPlaying = (mode: ListeningMode, ending?: Letter | null) => boolean;
type TaskProps<T> = {
  song: Song;
  task: T;
  attempt: Attempt;
  update: Update;
  sound: Sound;
  isPlaying: IsPlaying;
  listen: Listen;
  play: Play;
  heading: RefObject<HTMLHeadingElement>;
  retryHeading: RefObject<HTMLHeadingElement>;
  /** `performed`: ratkaisu soitettiin jo kokonaisena, joten kappale valmistuu heti. */
  onSolved: (performed?: boolean) => void;
  /** Vaihtoehdon näkyvä tunnus: kirjain (A–C) tai jatkotehtävässä numero (1–2). */
  shown: (id: Letter) => string;
  /** Täyttää tekstin lopetusviittaukset {A}/{B}/{C} näkyvillä kirjaimilla. */
  fill: (text: string) => string;
};

const remember = (heard: readonly string[], item: string) => heard.includes(item) ? [...heard] : [...heard, item];
/** Merkitsee kuunnellun kohteen kuulluksi tuoreimpaan tilaan. */
const markHeard = (item: string) => (current: Attempt) => ({ heard: remember(current.heard, item) });

function PlayIcon({ playing }: { playing: boolean }) {
  return <svg className="play-icon" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" focusable="false">
    {playing ? <rect x="2" y="2" width="8" height="8" rx="1" /> : <path d="M3 1.5v9l7.5-4.5z" />}
  </svg>;
}

/**
 * Lopetuksen painike: painallus soittaa lopetuksen ratkaisevan kohdan, ja uusi painallus samaan
 * soivaan lopetukseen pysäyttää sen. Nimi pysyy samana ("Lopetus A"); toiston tila kerrotaan
 * kuvakkeella ja kuvaustekstillä, ja valinta (aria-pressed) on siitä erillinen.
 */
function EndingButton({ label = 'Lopetus', letter, playing, heard, pressed, describedBy, onClick }: {
  label?: string;
  letter: string;
  playing: boolean;
  heard: boolean;
  pressed?: boolean;
  describedBy: string;
  onClick: () => void;
}) {
  return (
    <button className="ending-button" data-playing={playing || undefined} aria-pressed={pressed}
      aria-label={`${label} ${letter}`} aria-describedby={describedBy} onClick={onClick}>
      {label} <span>{letter}</span>
      <small id={describedBy}><PlayIcon playing={playing} /> {playing ? 'Soi' : heard ? 'Kuultu' : 'Kuuntele'}</small>
    </button>
  );
}

const endingHelp = 'Painike soittaa lopetuksen. Paina soivaa lopetusta uudelleen, niin toisto pysähtyy.';

function Hints({ hints, level, update, children }: { hints: readonly string[]; level: number; update: Update; children?: ReactNode }) {
  return (
    <details className="gig-hint">
      <summary>Vihje</summary>
      {hints.slice(0, level + 1).map(hint => <p key={hint}>{hint}</p>)}
      {level + 1 < hints.length && <button onClick={() => update({ hintLevel: level + 1 })}>Näytä tarkempi vihje</button>}
      {level + 1 >= hints.length && children}
    </details>
  );
}

function Retry({ retryHeading, children }: { retryHeading: RefObject<HTMLHeadingElement>; children: ReactNode }) {
  return (
    <div className="answer-feedback" data-result="retry">
      <h3 ref={retryHeading} tabIndex={-1} aria-describedby="retry-explanation">
        <span aria-hidden="true">↺</span> Ei vielä. Kokeile uudelleen!
      </h3>
      <div id="retry-explanation">{children}</div>
    </div>
  );
}

function UnfinishedButton({ sound, isPlaying, listen }: { sound: Sound; isPlaying: IsPlaying; listen: Listen }) {
  const playing = isPlaying('unfinished');
  return (
    <button className="primary" onClick={() => playing ? sound.stop() : listen('unfinished', 'Keskeneräinen kappale', null)}>
      {playing ? 'Pysäytä keskeneräinen kappale' : 'Kuuntele keskeneräinen kappale'}
    </button>
  );
}

function Status({ sound, className = 'listening-status' }: { sound: Sound; className?: string }) {
  return <p className={`status ${className}`} role="status">{sound.status}</p>;
}

function ChooseView({ task, attempt, update, sound, isPlaying, listen, heading, retryHeading, onSolved, shown, fill }: TaskProps<ChooseTask>) {
  const { selected, heard, checked } = attempt;
  const preview = (ending: Letter, which: 'ending' | 'full') => listen(which,
    `Lopetus ${shown(ending)}${which === 'full' ? ' · koko kappale' : ''}`, ending, () => update(markHeard(ending)));
  /** Valitsee lopetuksen ja soittaa sen, tai pysäyttää sen, jos juuri se soi. */
  const chooseEnding = (ending: Letter) => {
    if (isPlaying('ending', ending)) {
      sound.stop();
      return;
    }
    update({ selected: ending, checked: null });
    preview(ending, 'ending');
  };
  const toggleFull = () => {
    if (isPlaying('full')) sound.stop();
    else if (selected !== null) preview(selected, 'full');
  };
  const toggleLayer = (layer: Layer) => {
    if (isPlaying(layer)) sound.stop();
    else if (selected !== null) listen(layer, `Lopetus ${shown(selected)} · vain ${layerNames[layer]}`, selected);
  };
  const check = () => {
    if (selected === null || !heard.includes(selected)) return;
    sound.stop();
    if (selected === task.answer) onSolved();
    else update({ checked: selected, checks: attempt.checks + 1 });
  };

  return <>
    <h2 ref={heading} tabIndex={-1}>{task.heading}</h2>
    <p>{fill(task.intro)}</p>
    <UnfinishedButton sound={sound} isPlaying={isPlaying} listen={listen} />
    <div className="gig-transport">
      <fieldset>
        <legend>Kokeile lopetuksia</legend>
        <p>{fill(task.prompt)}</p>
        <p className="ending-help">{endingHelp}</p>
        <div className="ending-choices">
          {attempt.order.map(ending => <EndingButton key={ending} letter={shown(ending)} pressed={selected === ending}
            playing={isPlaying('ending', ending)} heard={heard.includes(ending)} describedBy={`lopetus-${ending}-tila`}
            onClick={() => chooseEnding(ending)} />)}
        </div>
      </fieldset>
      <div className="button-row ending-playback">
        <button disabled={selected === null} onClick={toggleFull}>
          <PlayIcon playing={isPlaying('full')} /> {isPlaying('full') ? 'Pysäytä koko kappale' : 'Kuuntele koko kappale valitulla lopetuksella'}
        </button>
        {task.isolate?.map(layer => <button key={layer} disabled={selected === null} onClick={() => toggleLayer(layer)}>
          <PlayIcon playing={isPlaying(layer)} /> {isPlaying(layer) ? `Pysäytä ${layerNames[layer]}` : `Kuuntele vain ${layerNames[layer]}`}
        </button>)}
      </div>
    </div>
    <Status sound={sound} />
    <button className="primary" disabled={selected === null || !heard.includes(selected)} onClick={check}>Tarkista valintani</button>
    {selected !== null && !heard.includes(selected) && <p className="status">Kuuntele valittu lopetus loppuun ennen tarkistusta.</p>}
    {checked && <Retry retryHeading={retryHeading}><p>{fill(task.wrong?.[checked] ?? task.retry)}</p></Retry>}
    <Hints hints={task.hints.map(fill)} level={attempt.hintLevel} update={update} />
  </>;
}

function MatchView({ task, attempt, update, sound, isPlaying, listen, heading, retryHeading, onSolved, shown, fill }: TaskProps<MatchTask>) {
  const { heard, picks, checkedPicks } = attempt;
  const chosen = task.questions.flatMap(question => picks[question.id] ?? []);
  const ready = chosen.length === task.questions.length && chosen.every(pick => heard.includes(pick));
  const check = () => {
    if (!ready) return;
    sound.stop();
    if (task.questions.every(question => picks[question.id] === question.answer)) onSolved();
    else update({ checkedPicks: { ...picks }, checks: attempt.checks + 1 });
  };
  const mistakes = checkedPicks ? task.questions.filter(question => checkedPicks[question.id] !== question.answer) : [];

  return <>
    <h2 ref={heading} tabIndex={-1}>{task.heading}</h2>
    <p>{fill(task.intro)}</p>
    <UnfinishedButton sound={sound} isPlaying={isPlaying} listen={listen} />
    <div className="gig-transport">
      <fieldset>
        <legend>Kuuntele lopetukset</legend>
        <p>Kuuntele jokainen lopetus loppuun asti. Voit toistaa niitä niin monta kertaa kuin haluat.</p>
        <p className="ending-help">{endingHelp}</p>
        <div className="ending-choices">
          {attempt.order.map(ending => <EndingButton key={ending} letter={shown(ending)}
            playing={isPlaying('ending', ending)} heard={heard.includes(ending)} describedBy={`lopetus-${ending}-tila`}
            onClick={() => isPlaying('ending', ending) ? sound.stop()
              : listen('ending', `Lopetus ${shown(ending)}`, ending, () => update(markHeard(ending)))} />)}
        </div>
      </fieldset>
    </div>
    <Status sound={sound} />
    {task.questions.map(question => <fieldset key={question.id} className="match-question">
      <legend>{question.prompt}</legend>
      <div className="ending-choices">
        {attempt.order.map(ending => <button key={ending} aria-pressed={picks[question.id] === ending}
          aria-label={`${question.label}: lopetus ${shown(ending)}`}
          onClick={() => update({ picks: { ...picks, [question.id]: ending }, checkedPicks: null })}>
          {shown(ending)}
        </button>)}
      </div>
    </fieldset>)}
    <button className="primary" disabled={!ready} onClick={check}>Tarkista valintani</button>
    {!ready && chosen.length === task.questions.length && <p className="status">Kuuntele valitsemasi lopetukset loppuun ennen tarkistusta.</p>}
    {mistakes.length > 0 && <Retry retryHeading={retryHeading}>
      {mistakes.length < task.questions.length && <p>Toinen tunnistus on jo oikein. Korjaa vielä yksi.</p>}
      {mistakes.map(question => {
        const pick = checkedPicks![question.id] as Letter;
        return <p key={question.id}><strong>{question.label}:</strong> {fill(question.wrong[pick] ?? 'Kuuntele lopetukset uudelleen ja vertaa niitä.')}</p>;
      })}
    </Retry>}
    <Hints hints={task.hints.map(fill)} level={attempt.hintLevel} update={update} />
  </>;
}

function ReasonView({ song, task, attempt, update, sound, isPlaying, listen, heading, retryHeading, onSolved }: TaskProps<ReasonTask>) {
  const { heard, picks, checkedPicks } = attempt;
  const pick = picks.reason;
  const needsBass = task.isolate.includes('bass') && !heard.includes('bass');
  const check = () => {
    if (pick === undefined || needsBass) return;
    sound.stop();
    if (pick === task.answer) onSolved();
    else update({ checkedPicks: { reason: pick }, checks: attempt.checks + 1 });
  };
  const wrong = checkedPicks && task.statements.find(statement => statement.id === checkedPicks.reason);

  return <>
    <h2 ref={heading} tabIndex={-1}>{task.heading}</h2>
    <p>{task.intro}</p>
    <div className="button-row">
      <button className="primary" onClick={() => isPlaying('ending') ? sound.stop() : listen('ending', 'ratkaiseva kohta', song.target)}>
        <PlayIcon playing={isPlaying('ending')} /> {isPlaying('ending') ? 'Pysäytä ratkaiseva kohta' : 'Kuuntele ratkaiseva kohta'}
      </button>
      {task.isolate.map(layer => <button key={layer} onClick={() => isPlaying(layer) ? sound.stop()
        : listen(layer, `vain ${layerNames[layer]}`, song.target, () => update(markHeard(layer)))}>
        <PlayIcon playing={isPlaying(layer)} /> {isPlaying(layer) ? `Pysäytä ${layerNames[layer]}` : `Kuuntele vain ${layerNames[layer]}`}
      </button>)}
    </div>
    <Status sound={sound} />
    <fieldset className="statement-choices">
      <legend>{task.question}</legend>
      {task.statements.map(statement => <button key={statement.id} aria-pressed={pick === statement.id}
        onClick={() => update({ picks: { reason: statement.id }, checkedPicks: null })}>
        {statement.text}
      </button>)}
    </fieldset>
    <button className="primary" disabled={pick === undefined || needsBass} onClick={check}>Tarkista valintani</button>
    {needsBass && <p className="status">Kuuntele basso erikseen ennen tarkistusta.</p>}
    {wrong && <Retry retryHeading={retryHeading}><p>{wrong.wrong ?? 'Kuuntele ratkaiseva kohta uudelleen.'}</p></Retry>}
    <Hints hints={task.hints} level={attempt.hintLevel} update={update} />
  </>;
}

const partNames: Record<Part, string> = { bass: 'Basso', comp: 'Soinnut', melody: 'Melodia' };
const partCompare: Record<Part, string> = { bass: 'Vertaa vain bassoa', comp: 'Vertaa vain sointuja', melody: 'Vertaa vain melodiaa' };

/** Kuuntele kaksi versiota ja kerro, mikä osa muuttui. Erilliskuuntelu on tarkimman vihjeen takana. */
function CompareView({ task, attempt, update, sound, isPlaying, play, heading, retryHeading, onSolved }: TaskProps<CompareTask>) {
  const { heard, picks, checkedPicks } = attempt;
  const pick = picks.part as Part | undefined;
  const bothHeard = heard.includes('v1') && heard.includes('v2');
  const ready = pick !== undefined && bothHeard;
  const toggleVersion = (index: 0 | 1) => {
    const key = `v${index + 1}`;
    if (isPlaying(key)) sound.stop();
    else play(key, `Versio ${index + 1}`, rate => renderTakeAudio(task.versions[index], rate), () => update(markHeard(key)));
  };
  const togglePair = (part?: Part) => {
    const key = part ? `pari-${part}` : 'pari';
    if (isPlaying(key)) sound.stop();
    else play(key, part ? `Versiot peräkkäin · vain ${partNames[part].toLowerCase()}` : 'Versiot peräkkäin',
      rate => renderPair(task.versions, rate, part ? [part] : undefined),
      part ? undefined : () => update(current => ({ heard: remember(remember(current.heard, 'v1'), 'v2') })));
  };
  const check = () => {
    if (!ready) return;
    sound.stop();
    if (pick === task.answer) onSolved();
    else update({ checkedPicks: { part: pick }, checks: attempt.checks + 1 });
  };
  const wrong = checkedPicks ? task.wrong[checkedPicks.part as Part] : undefined;

  return <>
    <h2 ref={heading} tabIndex={-1}>{task.heading}</h2>
    <p>{task.intro}</p>
    <div className="gig-transport">
      <fieldset>
        <legend>Kuuntele versiot</legend>
        <p className="ending-help">Versiot ovat yhtä pitkiä ja yhtä voimakkaita. Vain yksi osa soittaa toisin.</p>
        <div className="ending-choices compare-versions">
          {([0, 1] as const).map(index => <EndingButton key={index} label="Versio" letter={String(index + 1)}
            playing={isPlaying(`v${index + 1}`)} heard={heard.includes(`v${index + 1}`)} describedBy={`versio-${index + 1}-tila`}
            onClick={() => toggleVersion(index)} />)}
        </div>
        <div className="button-row ending-playback">
          <button onClick={() => togglePair()}>
            <PlayIcon playing={isPlaying('pari')} /> {isPlaying('pari') ? 'Pysäytä' : 'Kuuntele molemmat peräkkäin'}
          </button>
        </div>
      </fieldset>
    </div>
    <Status sound={sound} />
    <fieldset className="statement-choices part-choices">
      <legend>Mikä muuttui?</legend>
      {PARTS.map(part => <button key={part} aria-pressed={pick === part}
        onClick={() => update({ picks: { part }, checkedPicks: null })}>{partNames[part]}</button>)}
    </fieldset>
    <button className="primary" disabled={!ready} onClick={check}>Tarkista valintani</button>
    {pick !== undefined && !bothHeard && <p className="status">Kuuntele molemmat versiot loppuun ennen tarkistusta.</p>}
    {wrong && <Retry retryHeading={retryHeading}><p>{wrong}</p></Retry>}
    <Hints hints={task.hints} level={attempt.hintLevel} update={update}>
      <div className="button-row hint-tools" role="group" aria-label="Vertaa osia erikseen">
        {PARTS.map(part => <button key={part} onClick={() => togglePair(part)}>
          <PlayIcon playing={isPlaying(`pari-${part}`)} /> {isPlaying(`pari-${part}`) ? 'Pysäytä' : partCompare[part]}
        </button>)}
      </div>
    </Hints>
  </>;
}

/**
 * Kuuntele alku ja kaksi jatkoa. Valinta ratkeaa soittamalla koko kappale valitulla jatkolla:
 * palaute tulee vasta esityksen jälkeen, ja oikea esitys valmistaa kappaleen.
 */
function ContinueView({ song, task, attempt, update, sound, isPlaying, play, heading, retryHeading, onSolved, shown, fill }: TaskProps<ContinueTask>) {
  const { selected, heard, checked } = attempt;
  const takes = song.takes ?? {};
  const options = attempt.order.filter(id => takes[id]);
  const bar = (id: Letter) => 4 * 60 / takes[id]!.arrangement.tempo;
  const bothHeard = options.every(id => heard.includes(id));
  const toggleOpening = () => {
    if (isPlaying('alku')) sound.stop();
    else play('alku', 'Kappaleen alku', rate => cutSection(renderTakeAudio(takes[options[0]]!, rate), rate, 0, task.openingBars * bar(options[0])));
  };
  const chooseContinuation = (id: Letter) => {
    if (isPlaying(`jatko-${id}`)) {
      sound.stop();
      return;
    }
    update({ selected: id, checked: null });
    play(`jatko-${id}`, `Jatko ${shown(id)}`,
      rate => cutSection(renderTakeAudio(takes[id]!, rate), rate, (task.openingBars - 1) * bar(id), Infinity),
      () => update(markHeard(id)));
  };
  const perform = () => {
    if (isPlaying('esitys')) {
      sound.stop();
      return;
    }
    if (selected === null || !bothHeard) return;
    const choice = selected;
    play('esitys', `Kappale jatkolla ${shown(choice)}`, rate => renderTakeAudio(takes[choice]!, rate), () => {
      if (choice === task.answer) onSolved(true);
      else update(current => ({ checked: choice, checks: current.checks + 1 }));
    });
  };

  return <>
    <h2 ref={heading} tabIndex={-1}>{task.heading}</h2>
    <p>{task.intro}</p>
    <p className="band-goal"><strong>Bändin tavoite:</strong> {task.goal}</p>
    <button className="primary" onClick={toggleOpening}>
      <PlayIcon playing={isPlaying('alku')} /> {isPlaying('alku') ? 'Pysäytä alku' : 'Kuuntele alku'}
    </button>
    <div className="gig-transport">
      <fieldset>
        <legend>Vertaa jatkoja</legend>
        <p className="ending-help">Jatko soi alun viimeisestä tahdista loppuun. Paina soivaa jatkoa uudelleen, niin toisto pysähtyy.</p>
        <div className="ending-choices continue-choices">
          {options.map(id => <EndingButton key={id} label="Jatko" letter={shown(id)} pressed={selected === id}
            playing={isPlaying(`jatko-${id}`)} heard={heard.includes(id)} describedBy={`jatko-${id}-tila`}
            onClick={() => chooseContinuation(id)} />)}
        </div>
      </fieldset>
    </div>
    <Status sound={sound} />
    <button className="primary" disabled={!isPlaying('esitys') && (selected === null || !bothHeard)} onClick={perform}>
      <PlayIcon playing={isPlaying('esitys')} /> {isPlaying('esitys') ? 'Pysäytä esitys' : 'Soita kappale valitulla jatkolla'}
    </button>
    {!bothHeard && <p className="status">Kuuntele molemmat jatkot ennen kuin bändi soittaa kappaleen.</p>}
    {checked && checked !== task.answer && <Retry retryHeading={retryHeading}><p>{fill(task.wrong[checked] ?? task.goal)}</p></Retry>}
    <Hints hints={task.hints} level={attempt.hintLevel} update={update} />
  </>;
}

/** Valmiin kappaleen jatkotoiminto. Ensimmäinen on ensisijainen. */
export type SongAction = { label: string; run: () => void };

export function SongPlayer({ song, showLabel, back, attempt, update, actions, finale, onComplete, completionTitle, completedSummary, completionNote, practice, saving, saveFailed }: {
  song: Song;
  showLabel: string;
  /** Paluu kappaleen omaan kokonaisuuteen (Bänditreenit tai Ensikeikka). */
  back: { label: string; href: string; run: () => void };
  attempt: Attempt;
  update: Update;
  /** Jatkotoiminnot, jotka ilmestyvät onnistumiskorttiin, kun valmis kappale on kuultu. */
  actions: readonly SongAction[];
  /** Keikan viimeisen vaiheen jälkeen tarjottava esitys. `note` kertoo, mitä esitys sisältää. */
  finale?: { label: string; stopLabel: string; status: string; note: string; render: (rate: number) => Float32Array };
  onComplete: () => void;
  completionTitle: string;
  completedSummary?: string;
  completionNote?: string;
  practice: boolean;
  /** Normaali eteneminen: ratkaisu tallentuu. */
  saving: boolean;
  saveFailed: boolean;
}) {
  const { stage, step, checks, order } = attempt;
  // Jatkotehtävässä vaihtoehdot numeroidaan (Jatko 1, Jatko 2), muuten kirjaimin.
  const optionIds = song.takes ? order.filter(id => song.takes![id]) : order;
  const shown = (ending: Letter) => song.takes ? String(optionIds.indexOf(ending) + 1) : shownLetter(order, ending);
  const fill = (text: string) => text.replace(/\{([ABC])\}/g, (_, id: Letter) => shown(id));
  const { id, title, tasks, target, explanation } = song;
  const task = tasks[Math.min(step, tasks.length - 1)];
  // Onnistumiskortti kertoo koko kappaleen ratkaisusta, joten se käyttää viimeisen tehtävän palautetta.
  const finalTask = tasks[tasks.length - 1];
  const sound = usePlayback();
  // Mikä soi: kuuntelutapa ja lopetus. Tämä on erillään tehtävän valinnasta (attempt.selected).
  const [now, setNow] = useState<{ mode: ListeningMode; ending: Letter | null }>({ mode: 'ending', ending: null });
  const isPlaying: IsPlaying = (which, ending) => sound.active && now.mode === which && (ending === undefined || now.ending === ending);
  const heading = useRef<HTMLHeadingElement>(null);
  const retryHeading = useRef<HTMLHeadingElement>(null);
  // Valmiin kappaleen kuuntelu ei vaihda näkymää, joten se ei myöskään siirrä fokusta.
  const view = stage === 'complete' ? 'perform' : stage;
  useEffect(() => { heading.current?.focus(); }, [view, step]);
  const [explainOpen, setExplainOpen] = useState(false);
  useEffect(() => { retryHeading.current?.focus(); }, [stage, checks]);

  const listen: Listen = (which, label, ending, onHeard) => {
    setNow({ mode: which, ending });
    const whole = which === 'unfinished' || which === 'full';
    const layers = whole || which === 'ending' ? undefined : [which as Layer];
    // Tehtävän rajattu katkelma leikataan valmiiksi; muuten soitto alkaa ratkaisevasta kohdasta.
    const span = whole ? undefined : task.span;
    sound.play(label, rate => renderSong(song, ending, rate, layers, span), whole || span ? 0 : songExcerpt(song), onHeard);
  };
  const play: Play = (which, label, render, onHeard) => {
    setNow({ mode: which, ending: null });
    sound.play(label, render, 0, onHeard);
  };

  const solved = (performed = false) => {
    if (step + 1 < tasks.length) update({ stage: 'between' });
    else {
      update({ stage: 'perform' });
      // Ratkaisu soitettiin jo kokonaisena (jatkotehtävä), joten kappale valmistuu heti.
      if (performed) onComplete();
    }
  };
  const playingFull = isPlaying('full');
  const playingEnding = isPlaying('ending');

  function playFinishedSong(onEnded?: () => void) {
    setNow({ mode: 'full', ending: target });
    sound.play('valmista kappaletta', rate => renderSong(song, target, rate), 0, onEnded);
  }

  function toggleAnswerExcerpt() {
    if (playingEnding) {
      sound.stop();
      return;
    }
    setNow({ mode: 'ending', ending: target });
    sound.play('ratkaisevaa kohtaa', rate => renderSong(song, target, rate), songExcerpt(song));
  }

  function returnToList(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    sound.stop();
    back.run();
  }

  const answerDetails = (
    <details className="answer-explanation" open={explainOpen} onToggle={event => {
      const open = event.currentTarget.open;
      setExplainOpen(open);
      if (!open && playingEnding) sound.stop();
    }}>
      <summary>Selitä, miksi tämä toimii</summary>
      <p>{fill(explanation)}</p>
      <button onClick={toggleAnswerExcerpt}>
        <PlayIcon playing={playingEnding} /> {playingEnding ? 'Pysäytä ratkaiseva kohta' : 'Kuuntele ratkaiseva kohta'}
      </button>
    </details>
  );

  const taskProps = { song, attempt, update, sound, isPlaying, listen, play, heading, retryHeading, onSolved: solved, shown, fill };

  return (
    <main className="concert">
      <nav className="start-navigation" aria-label="Palaa">
        <a className="game-link" href={back.href} onClick={returnToList}>
          <span aria-hidden="true">←</span> {back.label}
        </a>
      </nav>
      <header className="intro">
        <p className="project">{showLabel}</p>
        <h1>Kappale {id} – {title}</h1>
        {practice && <p className="mode-note" data-mode="practice">Vapaa harjoittelu: tulos ei tallennu, ja vaihtoehtojen järjestys arvotaan joka kierrokselle.</p>}
        {saving && stage !== 'complete' && <p className="mode-note" data-mode="saving">Suoritus tallentuu etenemiseen.</p>}
      </header>
      <section className="session gig-stage" aria-label="Kappaleen tehtävä">
        {stage === 'choose' && (task.kind === 'choose' ? <ChooseView {...taskProps} task={task} />
          : task.kind === 'match' ? <MatchView {...taskProps} task={task} />
            : task.kind === 'compare' ? <CompareView {...taskProps} task={task} />
              : task.kind === 'continue' ? <ContinueView {...taskProps} task={task} />
                : <ReasonView {...taskProps} task={task} />)}
        {stage === 'between' && <>
          <div className="answer-feedback" data-result="correct">
            <h2 ref={heading} tabIndex={-1} aria-describedby="correct-explanation">
              <span aria-hidden="true">✓</span> {task.success.title}
            </h2>
            <p id="correct-explanation">{fill(task.success.text)}</p>
          </div>
          <button className="primary" onClick={() => update({ ...freshTask, stage: 'choose', step: step + 1 })}>
            Jatka vaiheeseen {step + 2}
          </button>
        </>}
        {(stage === 'perform' || stage === 'complete') && <div className="answer-feedback success-card" data-result="correct">
          {/* Sama kortti säilyy valmiin kappaleen kuuntelun ajan ja sen jälkeen. */}
          <h2 ref={heading} tabIndex={-1} aria-describedby="correct-explanation">
            <span aria-hidden="true">✓</span> {finalTask.success.title}
          </h2>
          <p id="correct-explanation">{fill(finalTask.success.text)}</p>
          {answerDetails}
          {stage === 'perform' && <p className="perform-hint">Kuuntele valmis kappale loppuun asti.</p>}
          <div className="song-complete" aria-live="polite">
            {stage === 'complete' && <>
              <h3><span aria-hidden="true">✓</span> {completionTitle}</h3>
              {completedSummary && <p>{completedSummary}</p>}
              {finale && <p className="finale-note">{finale.note}</p>}
              {completionNote && <p className="tour-finished">{completionNote}</p>}
              {saveFailed && <p>Selain ei voinut tallentaa etenemistä. Suoritus näkyy tällä sivulla.</p>}
            </>}
          </div>
          <div className="button-row song-actions">
            {stage === 'complete' && actions.map((action, index) => <button key={action.label}
              className={index === 0 ? 'primary' : undefined} onClick={() => { sound.stop(); action.run(); }}>{action.label}</button>)}
            {stage === 'complete' && finale && <button key="finale" onClick={() => {
              if (isPlaying('finale')) sound.stop();
              else play('finale', finale.status, finale.render);
            }}>
              <PlayIcon playing={isPlaying('finale')} /> {isPlaying('finale') ? finale.stopLabel : finale.label}
            </button>}
            {/* Sama painike-elementti: "Soita valmis kappale" muuttuu valmistumisen jälkeen "Kuuntele uudelleen"
                -painikkeeksi, joten fokus pysyy paikallaan. Uudelleenkuuntelu ei kutsu onComplete-käsittelijää. */}
            <button key="finished-song" className={stage === 'perform' ? 'primary' : undefined} onClick={() => {
              if (playingFull) sound.stop();
              else playFinishedSong(stage === 'perform' ? onComplete : undefined);
            }}>
              <PlayIcon playing={playingFull} /> {playingFull ? 'Pysäytä' : stage === 'perform' ? 'Soita valmis kappale' : 'Kuuntele uudelleen'}
            </button>
          </div>
          <Status sound={sound} />
        </div>}
      </section>
      {stage === 'perform' && <nav className="game-navigation" aria-label="Tehtävä">
        <button className="back-link" onClick={() => {
          sound.stop();
          update({ stage: 'choose', checked: null, checkedPicks: null });
        }}>Takaisin lopetuksiin</button>
      </nav>}
    </main>
  );
}
