import { useEffect, useRef, useState } from 'react';
import { Board } from './Board';
import { ReferencePlayer, referenceAudioError } from './audio';
import type { Mark } from './engine';
import {
  LOCATE_MAX_FRET, LOCATE_MIN_FRET, LOCATE_STRINGS, QUESTIONS_PER_STRING, QUESTION_TEMPO, locateQuestions, naturalPositions,
  questionSequence, type QuestionStep,
} from './earData';
import { fretName, note, stringName, stringOf, stringOn, type Position } from './music';

type Phase = 'learn' | 'quiz' | 'string-done' | 'finished';
type Result = { string: number; asked: Position; chosen: Position; correct: boolean };
/** Kysymyksen toiston vaihe: mallisarjan sävel (indeksi), tauko tai kysytty sävel. */
type Cue = { kind: 'model'; position: Position } | { kind: 'pause' } | { kind: 'target' } | null;
const named = (midi: number) => note(midi, false, true);

/**
 * Kuuntele ja paikanna sävel (issue #30 A). Yksi kieli kerrallaan: ensin kielen luonnolliset
 * sävelet kuunnellen ja nähden, sitten kuuntelutesti. Jokainen kysymys soittaa mallisarjan
 * (soiva sävel korostuu), tauon ja satunnaisen kysytyn sävelen, jonka nimeä tai paikkaa ei
 * näytetä ennen vastausta. Vastata voi vasta, kun kysytty sävel on soinut.
 * Tulokset eivät tallennu: olemassa oleva eteneminen ennallaan.
 */
export function EarLocateJourney({ onBack, backLabel }: { onBack: () => void; backLabel: string }) {
  const [stringIndex, setStringIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('learn');
  const [questions, setQuestions] = useState<Position[]>([]);
  const [question, setQuestion] = useState(0);
  const [chosen, setChosen] = useState<Position | null>(null);
  const [results, setResults] = useState<Result[]>([]);
  const [playing, setPlaying] = useState<'scale' | 'question' | 'target' | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const [cue, setCue] = useState<Cue>(null);
  const [heard, setHeard] = useState(false);
  const [error, setError] = useState('');
  const player = useRef(new ReferencePlayer());
  const token = useRef(0);

  const string = LOCATE_STRINGS[Math.min(stringIndex, LOCATE_STRINGS.length - 1)];
  const naturals = naturalPositions(string);
  const target = questions[question];

  function stop() {
    token.current++;
    player.current.stop();
    setPlaying(null);
    setActive(null);
    setCue(null);
  }
  useEffect(() => {
    // Piilotettu välilehti tai poistuminen pysäyttää äänen.
    const hidden = () => { if (document.hidden) stop(); };
    document.addEventListener('visibilitychange', hidden);
    return () => { document.removeEventListener('visibilitychange', hidden); token.current++; player.current.stop(); };
  }, []);

  /** Opettelu: kielen sävelet kerran nousevasti. Uusi painallus samasta painikkeesta pysäyttää. */
  async function playScale() {
    if (playing === 'scale') { stop(); return; }
    const current = ++token.current;
    setError(''); setActive(null); setCue(null); setPlaying('scale');
    try {
      await player.current.play(naturals.map(p => p.midi), index => { if (current === token.current) setActive(index); });
    } catch (cause) {
      if (current === token.current) setError(referenceAudioError(cause));
    } finally {
      if (current === token.current) { setPlaying(null); setActive(null); }
    }
  }

  /**
   * Kysymys: koko järjestys (mallisarja, tauko, kysytty sävel) tai pelkkä kysytty sävel.
   * Jokainen käynnistys kasvattaa sukupolvea ja pysäyttää edellisen toiston (ReferencePlayer.stop),
   * joten nopea eteneminen tai uusintapainallus ei soita ääniä päällekkäin.
   */
  async function playQuestion(kind: 'question' | 'target', asked: Position, toggle = true) {
    if (toggle && playing === kind) { stop(); return; }
    const all = questionSequence(string, asked);
    const steps: QuestionStep[] = kind === 'question' ? all : all.filter(step => step.role === 'target').map(step => ({ ...step, beat: 0 }));
    const current = ++token.current;
    setError(''); setActive(null); setCue(null); setPlaying(kind);
    try {
      await player.current.playTimed(steps, QUESTION_TEMPO, index => {
        if (current !== token.current) return;
        const step = steps[index];
        if (step.role === 'target') { setCue({ kind: 'target' }); setHeard(true); }
        else setCue({ kind: 'model', position: step.position });
      }, () => {
        // Mallisarjan jälkeen tauko: korostus pois ennen kysyttyä säveltä.
        if (current === token.current) setCue(previous => previous?.kind === 'model' ? { kind: 'pause' } : previous);
      });
    } catch (cause) {
      if (current === token.current) setError(referenceAudioError(cause));
    } finally {
      if (current === token.current) { setPlaying(null); setCue(null); }
    }
  }

  function startQuiz() {
    stop();
    const next = locateQuestions(string);
    setQuestions(next);
    setQuestion(0);
    setChosen(null);
    setHeard(false);
    setPhase('quiz');
    void playQuestion('question', next[0], false);
  }
  function answer(position: Position) {
    if (phase !== 'quiz' || chosen || !target || !heard) return;
    stop();
    setChosen(position);
    setResults(previous => [...previous, { string, asked: target, chosen: position, correct: position.fret === target.fret }]);
  }
  function nextQuestion() {
    if (question + 1 >= questions.length) { stop(); setPhase('string-done'); return; }
    setQuestion(question + 1);
    setChosen(null);
    setHeard(false);
    void playQuestion('question', questions[question + 1], false);
  }
  function chooseString(index: number) {
    stop();
    setStringIndex(index);
    setPhase('learn');
    setQuestions([]);
    setChosen(null);
    setHeard(false);
  }
  function nextString() {
    if (stringIndex + 1 >= LOCATE_STRINGS.length) { stop(); setPhase('finished'); return; }
    chooseString(stringIndex + 1);
  }
  function restart() {
    setResults([]);
    chooseString(0);
  }

  const stringResults = results.filter(result => result.string === string);
  const lastRound = stringResults.slice(-QUESTIONS_PER_STRING);
  const correct = chosen && target ? chosen.fret === target.fret : null;
  const playingPosition = playing === 'scale' && active !== null ? naturals[active] : null;

  // Ennen vastausta otelaudalla näkyy vain mallisarjan soiva sävel. Tauon ja kysytyn sävelen
  // aikana otelauta on tyhjä, joten kysytty sävel ei paljastu kuvasta eikä aria-labeleista.
  const marks: Mark[] = phase === 'learn'
    ? naturals.map(position => ({ ...position, label: note(position.midi),
      kind: playingPosition?.fret === position.fret ? 'playing' as const : 'shape' as const }))
    : phase === 'quiz' && chosen && target
      ? [{ ...target, kind: 'answer' as const, label: note(target.midi) },
        ...(correct ? [] : [{ ...chosen, kind: 'wrong' as const, label: note(chosen.midi) }])]
      : phase === 'quiz' && cue?.kind === 'model'
        ? [{ ...cue.position, kind: 'playing' as const, label: note(cue.position.midi) }]
        : [];
  const cueText = cue?.kind === 'model' ? `Mallisarja: ${named(cue.position.midi)} · ${fretName(cue.position.fret)}.`
    : cue?.kind === 'pause' ? 'Tauko. Seuraavaksi kysytty sävel.'
    : cue?.kind === 'target' ? 'Kysytty sävel soi. Millä nauhalla se soi?'
    : heard ? 'Valitse nauha. Voit kuunnella kysymyksen uudelleen.'
    : 'Kuuntele ensin mallisarja ja kysytty sävel. Vastaaminen avautuu, kun kysytty sävel on soinut.';

  const summaryByString = LOCATE_STRINGS.map(s => {
    const own = results.filter(result => result.string === s).slice(-QUESTIONS_PER_STRING);
    return { string: s, right: own.filter(result => result.correct).length, total: own.length };
  });

  return <section className="note-journey ear-locate" aria-labelledby="ear-locate-title">
    <button type="button" className="back-link" onClick={() => { stop(); onBack(); }}>{backLabel}</button>
    <p className="eyebrow">SÄVELKORVA JA OTELAUTA · KUUNTELE</p>
    <h2 id="ear-locate-title">Kuuntele ja paikanna sävel</h2>
    <p className="learning-lead">Kuuntele ensin kielen tutut sävelet ja vastaa sitten korvakuulolta, millä nauhalla
      kuulemasi sävel soi. Kolme ohuinta kieltä, nauhat {LOCATE_MIN_FRET}–{LOCATE_MAX_FRET}, aluksi vain luonnolliset sävelet.</p>

    <nav className="journey-steps ear-strings" aria-label="Kielet">
      {LOCATE_STRINGS.map((s, index) => {
        const done = summaryByString[index].total >= QUESTIONS_PER_STRING;
        return <button type="button" key={s} className={index === stringIndex && phase !== 'finished' ? 'journey-step current' : 'journey-step'}
          aria-current={index === stringIndex && phase !== 'finished' ? 'step' : undefined} onClick={() => chooseString(index)}>
          <span className="journey-index">{done ? '✓' : index + 1}</span>
          <span>{stringName[s]}-kieli{done ? ` · ${summaryByString[index].right}/${summaryByString[index].total}` : ''}</span>
        </button>;
      })}
    </nav>

    <section className="journey-lesson" aria-labelledby="ear-lesson-title">
      {phase === 'learn' && <>
        <div className="session-top"><h3 id="ear-lesson-title">{stringName[string]}-kieli: tutustu säveliin</h3><span>Kieli {stringIndex + 1} / {LOCATE_STRINGS.length}</span></div>
        <p>Kuuntele {stringOf[string]} luonnolliset sävelet alhaalta ylös: {naturals.map(p => `${named(p.midi)} (${fretName(p.fret)})`).join(', ')}.
          Juuri soiva paikka korostuu otelaudalla. Toista niin monta kertaa kuin haluat.</p>
        <div className="action-row">
          <button type="button" aria-pressed={playing === 'scale'} onClick={() => void playScale()}>
            {playing === 'scale' ? '■ Pysäytä' : '▶ Kuuntele kielen sävelet'}
          </button>
        </div>
        <p className="tools-note" role="status" aria-live="polite">{playingPosition
          ? `Nyt soi: ${named(playingPosition.midi)} · ${stringName[string]}-kieli, ${fretName(playingPosition.fret)}.`
          : 'Sävelet soivat kerran nousevassa järjestyksessä.'}</p>
      </>}

      {phase === 'quiz' && target && <>
        <div className="session-top"><h3 id="ear-lesson-title">Kysymys {question + 1} / {questions.length}</h3><span>{stringName[string]}-kieli</span></div>
        <p>Ensin soi {stringOf[string]} mallisarja alhaalta ylös, sitten lyhyen tauon jälkeen yksi kysytty sävel
          samasta sarjasta. Napauta, millä {stringOn[string]} nauhalla {LOCATE_MIN_FRET}–{LOCATE_MAX_FRET} kysytty sävel soi.</p>
        <div className="action-row">
          <button type="button" className="primary" aria-pressed={playing === 'question'} onClick={() => void playQuestion('question', target)}>
            {playing === 'question' ? '■ Pysäytä' : '▶ Kuuntele uudelleen'}
          </button>
          <button type="button" aria-pressed={playing === 'target'} onClick={() => void playQuestion('target', target)}>
            {playing === 'target' ? '■ Pysäytä' : '▶ Vain kysytty sävel'}
          </button>
        </div>
        <p className="tools-note ear-cue" role="status" aria-live="polite" data-testid="ear-cue">{chosen ? '' : cueText}</p>
      </>}

      {(phase === 'learn' || phase === 'quiz') && <Board
        area={{ strings: [string], min: LOCATE_MIN_FRET, max: LOCATE_MAX_FRET, fixed: '' }} marks={marks}
        disabled={phase !== 'quiz' || !!chosen || !heard} onAnswer={phase === 'quiz' ? answer : undefined}
        follow={phase === 'learn' ? 'playing' : 'hints'} playback={playing}
        caption={`${stringName[string]}-kieli, nauhat ${LOCATE_MIN_FRET}–${LOCATE_MAX_FRET}`} />}

      {phase === 'quiz' && <>
        <p className={`feedback ${correct === null ? '' : correct ? 'good' : 'bad'}`} role="status" aria-live="polite" data-testid="ear-feedback">
          {chosen && target ? correct
            ? `Oikein! ${named(target.midi)} soi ${stringOn[string]}, ${fretName(target.fret)}.`
            : `Ei aivan. Valitsit ${fretName(chosen.fret)} (${named(chosen.midi)}). Kuulemasi sävel oli ${named(target.midi)}: ${fretName(target.fret)}.`
            : 'Oikea sävel ja paikka näytetään vasta vastauksen jälkeen.'}
        </p>
        {chosen && <div className="action-row">
          <button type="button" className="primary" onClick={nextQuestion}>
            {question + 1 >= questions.length ? 'Näytä kielen tulos →' : 'Seuraava kysymys →'}
          </button>
        </div>}
      </>}

      {phase === 'learn' && <div className="journey-next">
        <p>Kun sävelet ovat tuttuja, kokeile tunnistaa ne korvakuulolta. Testissä on {QUESTIONS_PER_STRING} kysymystä.</p>
        <button type="button" className="primary" onClick={startQuiz}>Aloita kuuntelutesti →</button>
      </div>}

      {phase === 'string-done' && <div className="round-summary" role="status">
        <h3 id="ear-lesson-title">{stringName[string]}-kieli: {lastRound.filter(r => r.correct).length} / {lastRound.length} oikein</h3>
        <ul className="ear-results">{lastRound.map((result, index) => <li key={index} className={result.correct ? 'good' : 'bad'}>
          {named(result.asked.midi)} · {fretName(result.asked.fret)} — {result.correct ? 'oikein' : `vastasit ${fretName(result.chosen.fret)}`}
        </li>)}</ul>
        <div className="action-row">
          <button type="button" onClick={startQuiz}>Uusi testi tällä kielellä</button>
          <button type="button" className="primary" onClick={nextString}>
            {stringIndex + 1 >= LOCATE_STRINGS.length ? 'Yhteenveto →' : `Seuraava kieli: ${stringName[LOCATE_STRINGS[stringIndex + 1]]} →`}
          </button>
        </div>
      </div>}

      {phase === 'finished' && <div className="round-summary" role="status">
        <h3 id="ear-lesson-title">Yhteenveto</h3>
        <dl>{summaryByString.map(row => <div key={row.string}>
          <dt>{stringName[row.string]}-kieli</dt><dd>{row.total ? `${row.right} / ${row.total}` : '–'}</dd>
        </div>)}</dl>
        <p className="tools-note">Sama sävelkorkeus voi soida myös toisella kielellä (esimerkiksi C4 on G-kielen 5. ja B-kielen 1. nauha), joten kysymys koskee aina valittua kieltä.</p>
        <div className="action-row"><button type="button" className="primary" onClick={restart}>Harjoittele uudelleen</button></div>
      </div>}
      {error && <p className="error" role="alert">{error}</p>}
    </section>
  </section>;
}

