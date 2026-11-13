import { useEffect, useRef, useState } from 'react';
import { Board } from './Board';
import { MelodyPractice } from './MelodyPractice';
import { ReferencePlayer, referenceAudioError } from './audio';
import type { Mark } from './engine';
import { note, pc } from './music';
import { MODE_ACTIVE_KEY, MODE_LESSONS, MODE_ORDER, modeOnce, modeProgressKey, type ModeId } from './modeData';

const STEPS = [
  'Kuuntele ja tunnista',
  'Soita yksi oktaavi',
  'Soita muistista',
  'Vertaile sävelkeskuksia',
  'Improvisoi sointupulssin päälle',
] as const;

type Playback = 'scale' | 'comparison' | 'accompaniment' | null;
type Hints = 'roots' | 'all' | 'none';

function readProgress(id: ModeId): number {
  try {
    const value = Number(localStorage.getItem(modeProgressKey(id)));
    return Number.isInteger(value) ? Math.max(0, Math.min(5, value)) : 0;
  } catch { return 0; }
}
function readActiveMode(): ModeId {
  try {
    return localStorage.getItem(MODE_ACTIVE_KEY) === 'aeolian' && readProgress('ionian') === 5
      ? 'aeolian' : 'ionian';
  } catch { return 'ionian'; }
}

/**
 * Opetetaan ensin yksi oktaavi ja moodin toonika, ei seitsemää ulkoa opeteltavaa
 * sormituskuviota. Kuunteluvertailu käyttää samoja sävelluokkia mutta eri kotisäveltä.
 * Eteneminen on käyttäjän itsearvio. Mikrofoni ei arvioi soittoa.
 */
export function ModeJourney({ onBack }: { onBack: () => void }) {
  const [modeId, setModeId] = useState<ModeId>(readActiveMode);
  const [progress, setProgress] = useState(() => ({
    ionian: readProgress('ionian'),
    aeolian: readProgress('aeolian'),
  }));
  const [step, setStep] = useState(() => readProgress(readActiveMode()));
  const [playing, setPlaying] = useState<Playback>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showRoots, setShowRoots] = useState(false);
  const [hints, setHints] = useState<Hints>('roots');
  const [audioError, setAudioError] = useState('');
  const [quizTarget, setQuizTarget] = useState<ModeId | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<ModeId | null>(null);
  const audio = useRef(new ReferencePlayer());
  const generation = useRef(0);
  const melodyStop = useRef<(() => void) | null>(null);
  const lesson = MODE_LESSONS[modeId];
  const once = modeOnce(modeId);
  const activePosition = playing === 'scale' && activeIndex !== null ? once[activeIndex] : null;

  function stopPlayback() {
    melodyStop.current?.();
    generation.current++;
    audio.current.stop();
    setPlaying(null);
    setActiveIndex(null);
  }

  useEffect(() => {
    const onHidden = () => {
      if (document.hidden) {
        generation.current++;
        audio.current.stop();
        setPlaying(null);
        setActiveIndex(null);
      }
    };
    document.addEventListener('visibilitychange', onHidden);
    return () => {
      document.removeEventListener('visibilitychange', onHidden);
      generation.current++;
      audio.current.stop();
    };
  }, []);

  async function listen(kind: Exclude<Playback, null>, notes: number[], continuous = false): Promise<boolean> {
    melodyStop.current?.();
    const current = ++generation.current;
    audio.current.stop();
    setActiveIndex(null);
    setAudioError('');
    setPlaying(kind);
    try {
      const completed = continuous
        ? await audio.current.loop(notes, undefined, 75)
        : await audio.current.play(notes, index => {
          if (current === generation.current && kind === 'scale') setActiveIndex(index);
        });
      return current === generation.current && completed;
    } catch (cause) {
      if (current === generation.current) setAudioError(referenceAudioError(cause));
      return false;
    } finally {
      if (current === generation.current) {
        setPlaying(null);
        setActiveIndex(null);
      }
    }
  }

  function selectStep(next: number) {
    if (next > progress[modeId]) return;
    stopPlayback();
    setStep(next);
    setQuizTarget(null);
    setQuizAnswer(null);
    setShowRoots(false);
    setHints('roots');
    setAudioError('');
  }

  function finishStep() {
    stopPlayback();
    const next = Math.min(5, step + 1);
    setStep(next);
    setQuizTarget(null);
    setQuizAnswer(null);
    setShowRoots(false);
    setHints('roots');
    if (next > progress[modeId]) {
      setProgress(old => ({ ...old, [modeId]: next }));
      try { localStorage.setItem(modeProgressKey(modeId), String(next)); } catch { /* Tallennus voi olla estetty. */ }
    }
  }

  function selectMode(id: ModeId) {
    if (id === 'aeolian' && progress.ionian < 5) return;
    stopPlayback();
    setModeId(id);
    setStep(progress[id]);
    setQuizTarget(null);
    setQuizAnswer(null);
    setShowRoots(false);
    setHints('roots');
    setAudioError('');
    try { localStorage.setItem(MODE_ACTIVE_KEY, id); } catch { /* Tallennus voi olla estetty. */ }
  }

  async function startComparison() {
    stopPlayback();
    setQuizAnswer(null);
    setQuizTarget(null);
    // Tarkoitus on kuulla, mihin säveleen fraasi lopulta kotiutuu.
    const target: ModeId = Math.random() < 0.5 ? 'ionian' : 'aeolian';
    const completed = await listen('comparison', MODE_LESSONS[target].phrase);
    if (completed) setQuizTarget(target);
  }

  const isRoot = (midi: number) => pc(midi) === lesson.tonic;
  const marks: Mark[] = lesson.positions.filter(position => {
    if (step < 2) return true;
    if (step === 2) return showRoots && isRoot(position.midi);
    if (step === 4) return hints === 'all' || (hints === 'roots' && isRoot(position.midi));
    return false;
  }).map(position => ({
    ...position,
    label: step === 2 || (step === 4 && hints === 'roots') ? lesson.tonicName : note(position.midi),
    kind: activePosition?.string === position.string && activePosition.fret === position.fret
      ? 'playing' as const : isRoot(position.midi) ? 'answer' as const : 'shape' as const,
  }));
  // Vain harjoiteltavat kielet näytetään aktiivisina: ei vielä koko kaulan boksia.
  const strings = [...new Set(lesson.positions.map(position => position.string))];
  const min = Math.min(...lesson.positions.map(position => position.fret));
  const max = Math.max(...lesson.positions.map(position => position.fret));

  return <section className="scale-journey mode-journey" aria-labelledby="mode-path-title">
    <button type="button" className="back-link" onClick={() => { stopPlayback(); onBack(); }}>
      ← Valitse harjoittelupolku
    </button>
    <p className="eyebrow">SKAALAT JA MOODIT · MOODIT {MODE_ORDER.indexOf(modeId) + 1} / 7</p>
    <h2 id="mode-path-title">{lesson.title} · {lesson.alias}</h2>
    <p className="exercise-theory"><a href="book/osa-11.html#moodit">Lue moodien teoria →</a></p>
    <p className="learning-lead">{lesson.explanation}</p>
    <p className="scale-fact">Sävelet: <strong>{lesson.noteNames}</strong> · Pohjasävel {lesson.tonicName} · Yksi oktaavi</p>

    <div className="action-row" role="group" aria-label="Valitse opeteltava moodi">
      <button type="button" aria-pressed={modeId === 'ionian'} onClick={() => selectMode('ionian')}>1. C-jooninen</button>
      <button type="button" aria-pressed={modeId === 'aeolian'} disabled={progress.ionian < 5}
        onClick={() => selectMode('aeolian')}>2. A-aiolinen {progress.ionian < 5 ? '🔒' : ''}</button>
    </div>
    <p className="tools-note">Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu.</p>

    <nav className="journey-steps" aria-label="Moodin oppimisvaiheet">
      {STEPS.map((title, index) =>
        <button type="button" key={title} className={step === index ? 'journey-step current' : 'journey-step'}
          aria-current={step === index ? 'step' : undefined} disabled={index > progress[modeId]}
          onClick={() => selectStep(index)}>
          <span className="journey-index">{index > progress[modeId] ? '🔒' : index < progress[modeId] ? '✓' : index + 1}</span>
          <span>{title}</span>
        </button>)}
      <button type="button" className={step === 5 ? 'journey-step current' : 'journey-step'}
        disabled={progress[modeId] < 5} aria-current={step === 5 ? 'step' : undefined}
        onClick={() => selectStep(5)}>
        <span className="journey-index">{progress[modeId] === 5 ? '✓' : '🔒'}</span>
        <span>Moodi harjoiteltu</span>
      </button>
    </nav>

    <section className="journey-lesson" aria-labelledby="mode-lesson-title">
      <div className="session-top">
        <h3 id="mode-lesson-title">{step === 5 ? 'Moodi harjoiteltu' : STEPS[step]}</h3>
        <span>{step === 5 ? 'Valmis' : 'Harjoitus ' + (step + 1) + ' / 5'}</span>
      </div>

      {step === 0 && <>
        <p>Kuuntele asteikko ensin ylös ja sitten alas. Toisto päättyy {lesson.tonicName}-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu.</p>
        <p><strong>Vertailun idea:</strong> {lesson.contrast}</p>
      </>}
      {step === 1 && <p>Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa.</p>}
      {step === 2 && <p>Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain {lesson.tonicName}-pohjasävelen, jos tarvitset vihjettä.</p>}
      {step === 3 && <>
        <p>Kuuntele satunnainen fraasi. Sen sävelet kuuluvat samaan C-duurin ja A-mollin säveljoukkoon. Päättele, <strong>päättyykö fraasi C:hen vai A:han</strong>. Tämä harjoittaa sävelkeskuksen kuulemista, ei vielä koko moodin automaattista tunnistusta.</p>
        <div className="action-row">
          <button type="button" disabled={playing !== null}
            onClick={() => { void startComparison(); }}>▶ Kuuntele satunnainen fraasi</button>
          {quizTarget !== null && <button type="button" onClick={() => {
            void listen('comparison', MODE_LESSONS[quizTarget].phrase);
          }}>▶ Kuuntele uudelleen</button>}
        </div>
        {quizTarget !== null && <>
          <p>Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?</p>
          <div className="action-row" role="group" aria-label="Valitse kuulemasi kotisävel">
            <button type="button" disabled={quizAnswer !== null || playing !== null}
              onClick={() => setQuizAnswer('ionian')}>C</button>
            <button type="button" disabled={quizAnswer !== null || playing !== null}
              onClick={() => setQuizAnswer('aeolian')}>A</button>
          </div>
          {quizAnswer !== null && <p role="status">
            {quizAnswer === quizTarget ? 'Oikein!' : 'Ei aivan.'} Fraasi päättyi {MODE_LESSONS[quizTarget].tonicName}-säveleen.
            Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen.
          </p>}
        </>}
      </>}
      {step === 4 && <>
        {modeId === 'ionian' && <MelodyPractice key="nooa:full" pieceId="nooa" stage="full"
          onBeforePlay={stopPlayback} stopHandleRef={melodyStop} />}
        <p>Soita {lesson.chord}-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä {lesson.tonicName}-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track.</p>
        <p className="tools-note">Tämä säilyttää kuultavan {lesson.tonicName}-sävelkeskuksen. Vertaa myöhemmin, miten samat sävelet kuulostavat toisen moodin sointupulssin päällä.</p>
        <fieldset className="hint-segments">
          <legend>Sävelvihjeet</legend>
          {([
            ['roots', 'Vain pohjasävelet'],
            ['all', 'Kaikki sävelet'],
            ['none', 'Ei vihjeitä'],
          ] as const).map(([value, label]) => <label key={value}>
            <input type="radio" name="mode-hints" value={value}
              checked={hints === value} onChange={() => setHints(value)} />
            <span>{label}</span>
          </label>)}
        </fieldset>
      </>}

      {step === 2 && <button type="button" onClick={() => setShowRoots(value => !value)}>
        {showRoots ? 'Piilota pohjasävelet' : 'Näytä pohjasävelet'}
      </button>}

      {step < 3 && <div className="action-row">
        <button type="button" aria-pressed={playing === 'scale'}
          onClick={() => playing === 'scale' ? stopPlayback() :
            void listen('scale', once.map(position => position.midi))}>
          {playing === 'scale' ? '■ Pysäytä asteikon toisto' : '▶ Soita asteikko kerran'}
        </button>
      </div>}

      {step === 4 && <div className="action-row">
        <button type="button" aria-pressed={playing === 'accompaniment'}
          onClick={() => playing === 'accompaniment' ? stopPlayback() :
            void listen('accompaniment', lesson.accompaniment, true)}>
          {playing === 'accompaniment' ? '■ Pysäytä sointupulssi' : '▶ Käynnistä sointupulssi'}
        </button>
      </div>}

      {step !== 3 && step !== 5 && <Board
        area={{ strings, min, max, fixed: 'box' }} marks={marks}
        disabled caption={lesson.title + ' – yhden oktaavin sormitus'} />}
      {modeId === 'ionian' && step < 3 && <MelodyPractice
        key={`nooa:${step}`} pieceId="nooa"
        stage={step === 0 ? 'listen' : step === 1 ? 'fingering' : 'memory'}
        onBeforePlay={stopPlayback} stopHandleRef={melodyStop} />}

      {step < 2 && playing === 'scale' && activePosition && <p className="tools-note" role="status">
        Nyt soi: {note(activePosition.midi)} · nauha {activePosition.fret}.
      </p>}
      {audioError && <p className="error" role="alert">{audioError}</p>}

      {step < 5 && <div className="journey-next">
        <p>Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti.</p>
        <button type="button" className="primary" onClick={finishStep}>
          {step === 4 ? 'Kirjaa moodi harjoitelluksi' : 'Harjoiteltu, seuraava vaihe →'}
        </button>
      </div>}

      {step === 5 && <div className="journey-next" role="status">
        <h3>{lesson.title} harjoiteltu</h3>
        <p>Kertaa melodian sävelkeskus ja sormitus myös myöhemmin.</p>
        <button type="button" onClick={() => selectStep(2)}>Kertaa muistiharjoitus</button>
        {modeId === 'ionian' && <button type="button" className="primary"
          onClick={() => selectMode('aeolian')}>Jatka A-aioliseen →</button>}
        {modeId === 'aeolian' && <p>Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta.</p>}
      </div>}
    </section>
  </section>;
}
