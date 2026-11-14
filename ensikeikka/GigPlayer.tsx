import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { gigExcerpt, gigs, renderGig, type DemoEnding, type Gig } from './song-demo-score';
import { usePlayback } from './usePlayback';

const endings = ['A', 'B', 'C'] as const;
const hasCloserEndings = (song: Gig) => song !== 1 && song !== 2;

const answerExplanations: Record<Gig, string> = {
  1: 'Melodian G♯ nousee puoliaskelen A:han samalla kun bändi vaihtaa E7-soinnusta Am-sointuun. A on a-mollin kotisävel, ja kuulet sen sekä melodiassa että bassossa.',
  2: 'Melodian F♯ nousee puoliaskelen G:hen, kun bändi vaihtaa D7-soinnusta G-duurisointuun. Basso ja melodia soittavat lopussa G:n eri oktaaveissa.',
  3: 'Säestys vaihtaa G7-soinnusta C-duurisointuun, ja melodian B nousee puoliaskelen C:hen. Myös D kuuluu C-duuriin. Kun melodia jää D:hen, bändi on jo kotona ja melodia voi yhä tuntua odottavan jatkoa.',
  4: 'Melodian D♯ nousee puoliaskelen E:hen samalla kun B7 vaihtuu Em-sointuun. Huomaa loppusoinnun G. Se on kolmen puoliaskelen päässä E:stä ja antaa kotisoinnulle sen mollisävyn.',
  5: 'Bändi vaihtaa A7-soinnusta D-duurisointuun, ja melodian C♯ nousee puoliaskelen D:hen. Myös A voi kuulostaa vakaalta, koska se on D-duurisoinnun kvintti eli D-duuriasteikon viides sävel. D on kappaleen kotisävel, ja se soi lopussa myös bassossa.',
};

type Stage = 'listen' | 'choose' | 'perform' | 'complete';
type ListeningMode = 'ending' | 'full';
export type Attempt = {
  stage: Stage;
  selected: DemoEnding | null;
  heard: DemoEnding[];
  checked: DemoEnding | null;
};

export const initialAttempt: Attempt = {
  stage: 'listen', selected: null, heard: [], checked: null,
};

export function SongPlayer({ song, showLabel, attempt, update, onList, onSetlist, onNext, onComplete, completionTitle, completedCount, practice, saveFailed }: {
  song: Gig;
  showLabel: string;
  attempt: Attempt;
  update: (changes: Partial<Attempt>) => void;
  onList: () => void;
  onSetlist: () => void;
  onNext?: () => void;
  onComplete: () => void;
  completionTitle: string;
  completedCount?: number;
  practice: boolean;
  saveFailed: boolean;
}) {
  const { stage, selected, heard, checked } = attempt;
  const { title, target } = gigs[song];
  const sound = usePlayback();
  const [listeningMode, setListeningMode] = useState<ListeningMode>('ending');
  const playingFull = sound.active && listeningMode === 'full';
  const playingEnding = sound.active && listeningMode === 'ending';
  const heading = useRef<HTMLHeadingElement>(null);
  const retryHeading = useRef<HTMLHeadingElement>(null);
  useEffect(() => { heading.current?.focus(); }, [stage]);
  useEffect(() => { retryHeading.current?.focus(); }, [stage, checked]);

  function listen() {
    sound.play('Keskeneräinen kappale', rate => renderGig(song, null, rate), 0, () => update({ stage: 'choose' }));
  }

  function preview(ending: DemoEnding, mode: ListeningMode) {
    setListeningMode(mode);
    sound.play(`Lopetus ${ending}${mode === 'full' ? ' · koko kappale' : ''}`, rate => renderGig(song, ending, rate),
      mode === 'full' ? 0 : gigExcerpt(song), () => {
        if (!heard.includes(ending)) update({ heard: [...heard, ending] });
      });
  }

  function toggleListening(mode: ListeningMode) {
    if (sound.active && listeningMode === mode) sound.stop();
    else if (selected !== null) preview(selected, mode);
  }

  function check() {
    if (selected === null || !heard.includes(selected)) return;
    sound.stop();
    if (selected === checked) retryHeading.current?.focus();
    update({ checked: selected, stage: selected === target ? 'perform' : 'choose' });
  }

  function playFinishedSong(onEnded?: () => void) {
    setListeningMode('full');
    sound.play('valmista kappaletta', rate => renderGig(song, target, rate), 0, onEnded);
  }

  function perform() {
    playFinishedSong(onComplete);
  }

  function toggleAnswerExcerpt() {
    if (playingEnding) {
      sound.stop();
      return;
    }
    setListeningMode('ending');
    sound.play('ratkaisevaa kohtaa', rate => renderGig(song, target, rate), gigExcerpt(song));
  }

  function returnToList(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    sound.stop();
    if (stage === 'complete') onSetlist();
    else onList();
  }

  function goTo(next: Stage) {
    sound.stop();
    update({ stage: next, checked: null });
  }

  const closerEndings = hasCloserEndings(song);

  const answerDetails = (
    <details onToggle={event => {
      if (!event.currentTarget.open && playingEnding) sound.stop();
    }}>
      <summary>Miksi tämä vastaus?</summary>
      <p>{answerExplanations[song]}</p>
      <button onClick={toggleAnswerExcerpt}>
        {playingEnding ? 'Pysäytä ratkaiseva kohta' : 'Kuuntele ratkaiseva kohta'}
      </button>
    </details>
  );

  return (
    <main className="concert">
      <header className="intro">
        <p className="project">{practice ? 'Ensikeikka · Harjoittelu' : showLabel}</p>
        <h1>Kappale {song} – {title}</h1>
      </header>
      <section className="session gig-stage" aria-label="Kappaleen tehtävä">
        {stage === 'listen' && <>
          <h2 ref={heading} tabIndex={-1}>1. Kuuntele kappale</h2>
          <p>Kuuntele, miten bändi päättää kappaleen. Melodian viimeinen sävel puuttuu.</p>
          <button className="primary" onClick={listen}>Kuuntele keskeneräinen kappale</button>
        </>}
        {stage === 'choose' && <>
          <h2 ref={heading} tabIndex={-1}>2. Kokeile lopetuksia</h2>
          <p>{closerEndings
            ? 'Useampi lopetus voi sopia kappaleeseen. Etsi sävel, johon melodia tuntuu palaavan kotiin.'
            : 'Kuuntele lopetuksia. Mikä niistä tuntuu palaavan kotiin?'}</p>
          <fieldset>
            <legend>Lopetukset</legend>
            <div className="ending-choices">
              {endings.map(ending => <button key={ending} aria-pressed={selected === ending} onClick={() => {
                update({ selected: ending, checked: null });
                preview(ending, 'ending');
              }}>
                Lopetus <span>{ending}</span>
              </button>)}
            </div>
          </fieldset>
          {checked && <div className="answer-feedback" data-result="retry">
            <h3 ref={retryHeading} tabIndex={-1} aria-describedby="retry-explanation">
              <span aria-hidden="true">↺</span> Ei vielä. Kokeile uudelleen!
            </h3>
            <p id="retry-explanation">{closerEndings
              ? 'Tämä sävel voi sopia lopetukseen. Kuuntele toista vaihtoehtoa ja vertaa, missä melodia tuntuu palaavan kotiin.'
              : 'Tämä lopetus kuulostaa vielä vähän jännitteiseltä. Kokeile toista ja kuuntele, mikä saa kappaleen tuntumaan valmiilta.'}</p>
          </div>}
          <div className="gig-transport">
            <div className="button-row">
              <button disabled={selected === null} onClick={() => toggleListening('ending')}>
                {sound.active && listeningMode === 'ending' ? 'Pysäytä' : 'Kuuntele lopetus'}
              </button>
              <button disabled={selected === null} onClick={() => toggleListening('full')}>
                {sound.active && listeningMode === 'full' ? 'Pysäytä' : 'Kuuntele koko kappale'}
              </button>
            </div>
            <p className="status listening-status" role="status">{sound.status}</p>
          </div>
          <button className="primary" disabled={selected === null || !heard.includes(selected)} onClick={check}>Tarkista valintani</button>
          <details className="gig-hint">
            <summary>Vihje</summary>
            <p>{closerEndings
              ? 'Vertaa viimeistä säveltä siihen, mihin bändi palaa. Missä versiossa melodia tuntuu palaavan samaan kotiin?'
              : 'Kuuntele viimeistä säveltä bändin päällä. Missä versiossa loppu tuntuu vakaalta ja kappale voisi jäädä siihen?'}</p>
          </details>
        </>}
        {stage === 'perform' && <>
          <div className="answer-feedback" data-result="correct">
            <h2 ref={heading} tabIndex={-1} aria-describedby="correct-explanation">
              <span aria-hidden="true">✓</span> Oikein! Löysit kotiin!
            </h2>
            <p id="correct-explanation">Tämä sävel on kappaleen kotisävel. Siihen melodia päättyy vakaasti.</p>
            {answerDetails}
          </div>
          <p>Kuuntele valmis kappale loppuun asti.</p>
          <button className="primary" onClick={playingFull ? sound.stop : perform}>
            {playingFull ? 'Pysäytä' : 'Soita valmis kappale'}
          </button>
          <p className="status listening-status" role="status">{sound.status}</p>
        </>}
        {stage === 'complete' && <>
          <h2 ref={heading} tabIndex={-1}>{completionTitle}</h2>
          {completedCount !== undefined && <p>Suoritit {completedCount} kappaletta.</p>}
          {saveFailed && <p role="status">Selain ei voinut tallentaa etenemistä. Suoritus näkyy tällä sivulla.</p>}
          <div className="button-row">
            {onNext && <button className="primary" onClick={() => { sound.stop(); onNext(); }}>Seuraava kappale</button>}
            {completedCount !== undefined && <button className="primary" onClick={() => { sound.stop(); onSetlist(); }}>Palaa settilistaan</button>}
            <button onClick={() => {
              if (playingFull) sound.stop();
              else playFinishedSong();
            }}>{playingFull ? 'Pysäytä' : 'Kuuntele uudelleen'}</button>
          </div>
          {answerDetails}
          <p className="status replay-status" role="status">{sound.status}</p>
        </>}
        {stage === 'listen' && <div className="gig-transport button-row">
          <button disabled={!sound.active} onClick={sound.stop}>Pysäytä</button>
          <p className="status" role="status">{sound.status}</p>
        </div>}
      </section>
      {(stage !== 'complete' || completedCount === undefined) && <nav className="game-navigation" aria-label="Palaa">
        {stage === 'choose' && <button className="back-link" onClick={() => goTo('listen')}>Takaisin kuunteluun</button>}
        {stage === 'perform' && <button className="back-link" onClick={() => goTo('choose')}>Takaisin lopetuksiin</button>}
        <a className="game-link" href={stage === 'complete' ? './#settilista' : './#keikkalista'} onClick={returnToList}>
          <span aria-hidden="true">←</span> {stage === 'complete' ? 'Takaisin settilistaan' : 'Takaisin keikkalistaan'}
        </a>
      </nav>}
    </main>
  );
}
