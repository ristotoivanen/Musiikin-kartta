import { useEffect, useRef, useState, type MouseEvent, type ReactNode, type RefObject } from 'react';
import type { Layer } from './arrangement';
import { renderSong, songExcerpt } from './catalog';
import { fillLetters, naturalOrder, shownLetter, type Order } from './order';
import type { ChooseTask, Letter, MatchTask, ReasonTask, Song } from './tasks';
import { usePlayback } from './usePlayback';

type Stage = 'choose' | 'between' | 'perform' | 'complete';
type ListeningMode = 'unfinished' | 'ending' | 'full' | Layer;

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
};

export const initialAttempt: Attempt = {
  stage: 'choose', step: 0, selected: null, heard: [], checked: null, picks: {}, checkedPicks: null, checks: 0, hintLevel: 0, order: naturalOrder,
};

const freshTask = {
  selected: null, heard: [], checked: null, picks: {}, checkedPicks: null, hintLevel: 0,
} satisfies Partial<Attempt>;

const layerNames: Record<Layer, string> = { bass: 'basso', melody: 'melodia', comp: 'komppi', drums: 'rummut' };

type Sound = ReturnType<typeof usePlayback>;
type Listen = (mode: ListeningMode, label: string, ending: Letter | null, onHeard?: () => void) => void;
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
  heading: RefObject<HTMLHeadingElement>;
  retryHeading: RefObject<HTMLHeadingElement>;
  onSolved: () => void;
  /** Lopetuksen näkyvä kirjain. */
  shown: (id: Letter) => Letter;
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
function EndingButton({ letter, playing, heard, pressed, describedBy, onClick }: {
  letter: Letter;
  playing: boolean;
  heard: boolean;
  pressed?: boolean;
  describedBy: string;
  onClick: () => void;
}) {
  return (
    <button className="ending-button" data-playing={playing || undefined} aria-pressed={pressed}
      aria-label={`Lopetus ${letter}`} aria-describedby={describedBy} onClick={onClick}>
      Lopetus <span>{letter}</span>
      <small id={describedBy}><PlayIcon playing={playing} /> {playing ? 'Soi' : heard ? 'Kuultu' : 'Kuuntele'}</small>
    </button>
  );
}

const endingHelp = 'Painike soittaa lopetuksen. Paina soivaa lopetusta uudelleen, niin toisto pysähtyy.';

function Hints({ hints, level, update }: { hints: readonly string[]; level: number; update: Update }) {
  return (
    <details className="gig-hint">
      <summary>Vihje</summary>
      {hints.slice(0, level + 1).map(hint => <p key={hint}>{hint}</p>)}
      {level + 1 < hints.length && <button onClick={() => update({ hintLevel: level + 1 })}>Näytä tarkempi vihje</button>}
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

export function SongPlayer({ song, gigId, showLabel, attempt, update, onList, onSetlist, onNext, nextLabel = 'Seuraava kappale', onComplete, completionTitle, completedCount, completionNote, practice, saving, saveFailed, extraActions }: {
  song: Song;
  gigId: number;
  showLabel: string;
  attempt: Attempt;
  update: Update;
  onList: () => void;
  onSetlist: () => void;
  onNext?: () => void;
  nextLabel?: string;
  onComplete: () => void;
  completionTitle: string;
  completedCount?: number;
  completionNote?: string;
  practice: boolean;
  /** Normaali eteneminen: ratkaisu tallentuu. */
  saving: boolean;
  saveFailed: boolean;
  extraActions?: ReactNode;
}) {
  const { stage, step, checks, order } = attempt;
  const shown = (ending: Letter) => shownLetter(order, ending);
  const fill = (text: string) => fillLetters(text, order);
  const { id, title, tasks, target, explanation } = song;
  const task = tasks[Math.min(step, tasks.length - 1)];
  const sound = usePlayback();
  // Mikä soi: kuuntelutapa ja lopetus. Tämä on erillään tehtävän valinnasta (attempt.selected).
  const [now, setNow] = useState<{ mode: ListeningMode; ending: Letter | null }>({ mode: 'ending', ending: null });
  const isPlaying: IsPlaying = (which, ending) => sound.active && now.mode === which && (ending === undefined || now.ending === ending);
  const heading = useRef<HTMLHeadingElement>(null);
  const retryHeading = useRef<HTMLHeadingElement>(null);
  useEffect(() => { heading.current?.focus(); }, [stage, step]);
  useEffect(() => { retryHeading.current?.focus(); }, [stage, checks]);

  const listen: Listen = (which, label, ending, onHeard) => {
    setNow({ mode: which, ending });
    const whole = which === 'unfinished' || which === 'full';
    const layers = whole || which === 'ending' ? undefined : [which];
    sound.play(label, rate => renderSong(song, ending, rate, layers), whole ? 0 : songExcerpt(song), onHeard);
  };

  const solved = () => update({ stage: step + 1 < tasks.length ? 'between' : 'perform' });
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
    if (stage === 'complete') onSetlist();
    else onList();
  }

  const answerDetails = (
    <details onToggle={event => {
      if (!event.currentTarget.open && playingEnding) sound.stop();
    }}>
      <summary>Miksi tämä vastaus?</summary>
      <p>{fill(explanation)}</p>
      <button onClick={toggleAnswerExcerpt}>
        {playingEnding ? 'Pysäytä ratkaiseva kohta' : 'Kuuntele ratkaiseva kohta'}
      </button>
    </details>
  );

  const taskProps = { song, attempt, update, sound, isPlaying, listen, heading, retryHeading, onSolved: solved, shown, fill };

  return (
    <main className="concert">
      {(stage !== 'complete' || completedCount === undefined) && <nav className="start-navigation" aria-label="Palaa">
        <a className="game-link" href={stage === 'complete' ? `./#keikka-${gigId}` : './#keikkalista'} onClick={returnToList}>
          <span aria-hidden="true">←</span> {stage === 'complete' ? 'Takaisin settilistaan' : 'Takaisin keikkalistaan'}
        </a>
      </nav>}
      <header className="intro">
        <p className="project">{practice ? 'Ensikeikka · Harjoittelu' : showLabel}</p>
        <h1>Kappale {id} – {title}</h1>
        {practice && <p className="mode-note" data-mode="practice">Vapaa harjoittelu: tulos ei tallennu, ja lopetusten järjestys arvotaan joka kierrokselle.</p>}
        {saving && stage !== 'complete' && <p className="mode-note" data-mode="saving">Suoritus tallentuu keikan etenemiseen.</p>}
      </header>
      <section className="session gig-stage" aria-label="Kappaleen tehtävä">
        {stage === 'choose' && (task.kind === 'choose' ? <ChooseView {...taskProps} task={task} />
          : task.kind === 'match' ? <MatchView {...taskProps} task={task} />
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
        {stage === 'perform' && <>
          <div className="answer-feedback" data-result="correct">
            <h2 ref={heading} tabIndex={-1} aria-describedby="correct-explanation">
              <span aria-hidden="true">✓</span> {task.success.title}
            </h2>
            <p id="correct-explanation">{fill(task.success.text)}</p>
            {answerDetails}
          </div>
          <p>Kuuntele valmis kappale loppuun asti.</p>
          <button className="primary" onClick={playingFull ? sound.stop : () => playFinishedSong(onComplete)}>
            {playingFull ? 'Pysäytä' : 'Soita valmis kappale'}
          </button>
          <Status sound={sound} />
        </>}
        {stage === 'complete' && <>
          <h2 ref={heading} tabIndex={-1}>{completionTitle}</h2>
          {completedCount !== undefined && <p>Suoritit {completedCount} kappaletta.</p>}
          {completionNote && <p className="tour-finished">{completionNote}</p>}
          {saveFailed && <p role="status">Selain ei voinut tallentaa etenemistä. Suoritus näkyy tällä sivulla.</p>}
          <div className="button-row">
            {onNext && <button className="primary" onClick={() => { sound.stop(); onNext(); }}>{nextLabel}</button>}
            {completedCount !== undefined && <button className="primary" onClick={() => { sound.stop(); onSetlist(); }}>Palaa settilistaan</button>}
            {extraActions}
            <button onClick={() => {
              if (playingFull) sound.stop();
              else playFinishedSong();
            }}>{playingFull ? 'Pysäytä' : 'Kuuntele uudelleen'}</button>
          </div>
          {answerDetails}
          <Status sound={sound} className="replay-status" />
        </>}
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
