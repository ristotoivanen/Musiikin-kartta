import { useEffect, useRef, useState } from 'react';
import { Board } from './Board';
import { ReferencePlayer, referenceAudioError } from './audio';
import type { Mark } from './engine';
import {
  DEGREE_CHOICES, MODE_PAIRS, changeQuestion, degreeMidi, phraseNotes, scaleNotes, whichQuestion, withDrone,
  type DegreeChoice, type ModePair, type ModePairId, type ModeVoice, type TimedNote,
} from './earData';
import { note } from './music';

type Exercise = 'listen' | 'which' | 'change';
const EXERCISES: { id: Exercise; title: string }[] = [
  { id: 'listen', title: 'Kuuntele ero' },
  { id: 'which', title: 'Kumpi oli kumpi?' },
  { id: 'change', title: 'Mikä sävelaste muuttui?' },
];
const TEMPO = 84;
const GAP = 2; // iskua näytteiden välissä
const choiceLabel = (c: DegreeChoice) => `${c.degree}. aste ${c.direction === 'up' ? 'nousi' : 'laski'}`;
const named = (midi: number, mode: ModeVoice, pair: ModePair) => {
  const index = mode.steps.findIndex(step => pair.tonic + step === midi);
  return index >= 0 ? mode.spelled[index] : note(midi);
};

/** Peräkkäiset näytteet samalla urkupisteellä. Palauttaa nuotit ja kunkin nuotin moodin. */
function sequence(pair: ModePair, parts: { mode: ModeVoice; kind: 'scale' | 'phrase' }[]) {
  let beat = 0;
  const notes: TimedNote[] = [], owners: ModeVoice[] = [], sample: number[] = [];
  parts.forEach((part, index) => {
    const own = part.kind === 'scale' ? scaleNotes(pair, part.mode, beat) : phraseNotes(pair, part.mode, beat);
    notes.push(...own); owners.push(...own.map(() => part.mode)); sample.push(...own.map(() => index));
    beat = Math.max(...own.map(n => n.beat + n.duration)) + GAP;
  });
  // Urkupiste on listan ensimmäinen, joten soivien nuottien indeksit siirtyvät yhdellä.
  return { notes: withDrone(pair, notes), owners, sample };
}

/**
 * Kuuntele ja vertaile moodeja (issue #30 B). Kaksi moodiparia, joissa on sama toonika ja yksi
 * eroava sävelaste. Erillinen nykyisestä C-joonisen ja A-aiolisen sävelkeskusvertailusta
 * (ModeJourney), jossa säveljoukko on sama mutta toonika vaihtuu.
 */
export function ModeCompareJourney({ onBack, backLabel }: { onBack: () => void; backLabel: string }) {
  const [pairId, setPairId] = useState<ModePairId>('a-aeolian-dorian');
  const [exercise, setExercise] = useState<Exercise>('listen');
  const [which, setWhich] = useState(() => whichQuestion(MODE_PAIRS['a-aeolian-dorian']));
  const [change, setChange] = useState(() => changeQuestion());
  const [picked, setPicked] = useState<number | DegreeChoice | null>(null);
  const [score, setScore] = useState({ right: 0, total: 0 });
  const [playing, setPlaying] = useState<string | null>(null);
  const [active, setActive] = useState<{ midi: number; mode: ModeVoice; sample: number } | null>(null);
  const [error, setError] = useState('');
  const player = useRef(new ReferencePlayer());
  const token = useRef(0);
  const pair = exercise === 'change' ? change.pair : MODE_PAIRS[pairId];

  function stop() {
    token.current++;
    player.current.stop();
    setPlaying(null);
    setActive(null);
  }
  useEffect(() => {
    const hidden = () => { if (document.hidden) stop(); };
    document.addEventListener('visibilitychange', hidden);
    return () => { document.removeEventListener('visibilitychange', hidden); token.current++; player.current.stop(); };
  }, []);

  async function play(id: string, parts: { mode: ModeVoice; kind: 'scale' | 'phrase' }[], target = pair) {
    if (playing === id) { stop(); return; }
    const current = ++token.current;
    const { notes, owners, sample } = sequence(target, parts);
    setError('');
    setActive(null);
    setPlaying(id);
    try {
      await player.current.playTimed(notes, TEMPO, index => {
        if (current !== token.current || index === 0) return; // 0 = urkupiste
        setActive({ midi: notes[index].midi, mode: owners[index - 1], sample: sample[index - 1] });
      }, () => { if (current === token.current) setActive(null); });
    } catch (cause) {
      if (current === token.current) setError(referenceAudioError(cause));
    } finally {
      if (current === token.current) { setPlaying(null); setActive(null); }
    }
  }

  function selectPair(id: ModePairId) {
    stop(); setPairId(id); setPicked(null); setWhich(whichQuestion(MODE_PAIRS[id]));
  }
  function selectExercise(id: Exercise) {
    stop(); setExercise(id); setPicked(null);
  }
  function newQuestion() {
    stop(); setPicked(null);
    if (exercise === 'which') setWhich(whichQuestion(MODE_PAIRS[pairId])); else setChange(changeQuestion());
  }
  function answerWhich(sample: number) {
    if (picked !== null) return;
    stop(); setPicked(sample);
    setScore(s => ({ right: s.right + (sample === which.answer ? 1 : 0), total: s.total + 1 }));
  }
  function answerChange(choice: DegreeChoice) {
    if (picked !== null) return;
    stop(); setPicked(choice);
    const right = choice.degree === change.answer.degree && choice.direction === change.answer.direction;
    setScore(s => ({ right: s.right + (right ? 1 : 0), total: s.total + 1 }));
  }

  // Otelauta: molempien moodien sävelet. Eroava aste näkyy vasta vastauksen jälkeen tehtävissä 2 ja 3.
  const revealed = exercise === 'listen' || picked !== null;
  const [m0, m1] = pair.modes;
  const differs = (midi: number) => midi === degreeMidi(pair, m0, pair.degree) || midi === degreeMidi(pair, m1, pair.degree);
  const positions = Object.entries(pair.fingering).map(([midi, position]) => ({ midi: Number(midi), position }));
  // Ennen vastausta otelauta on tyhjä myös toiston aikana: soivan sävelen paikka paljastaisi eron.
  const marks: Mark[] = positions.filter(() => revealed).map(({ midi, position }) => {
    const owner = midi === degreeMidi(pair, m1, pair.degree) ? m1 : m0;
    return { ...position, label: named(midi, owner, pair),
      kind: active?.midi === midi ? 'playing' as const : differs(midi) ? 'anchor' as const : midi % 12 === pair.tonic % 12 ? 'answer' as const : 'shape' as const };
  });
  const frets = positions.map(p => p.position.fret);
  const area = { strings: [...new Set(positions.map(p => p.position.string))], min: Math.min(...frets), max: Math.max(...frets), fixed: 'box' as const };
  const nowText = active ? revealed
    ? `Nyt soi: ${exercise === 'listen' ? active.mode.name : `${exercise === 'which' ? 'näyte' : 'versio'} ${active.sample + 1} (${active.mode.name})`} · ${named(active.midi, active.mode, pair)}`
    : `Nyt soi: ${exercise === 'which' ? 'näyte' : 'versio'} ${active.sample + 1}`
    : 'Toonika soi hiljaisena urkupisteenä oktaavia alempana koko näytteen ajan.';
  const differenceText = `${m0.name}: ${pair.degree}. aste ${pair.degreeNames[0]} (${pair.intervalNames[0]}) · ${m1.name}: ${pair.degree}. aste ${pair.degreeNames[1]} (${pair.intervalNames[1]}).`;

  const whichRight = picked !== null && typeof picked === 'number' ? picked === which.answer : null;
  const changeRight = picked !== null && typeof picked === 'object'
    ? picked.degree === change.answer.degree && picked.direction === change.answer.direction : null;

  return <section className="scale-journey mode-compare" aria-labelledby="mode-compare-title">
    <button type="button" className="back-link" onClick={() => { stop(); onBack(); }}>{backLabel}</button>
    <p className="eyebrow">SKAALAT JA MOODIT · KUUNTELE</p>
    <h2 id="mode-compare-title">Kuuntele moodien ero</h2>
    <p className="learning-lead">Kaksi moodia samasta toonikasta, ero vain yhdessä sävelasteessa. Kuuntele, miltä ero kuulostaa, ja tunnista se sitten ilman nimiä.</p>

    {exercise !== 'change' && <div className="action-row" role="group" aria-label="Vertailupari">
      {Object.values(MODE_PAIRS).map(item => <button type="button" key={item.id} aria-pressed={pairId === item.id}
        onClick={() => selectPair(item.id)}>{item.title}</button>)}
    </div>}
    <nav className="journey-steps mode-compare-steps" aria-label="Moodivertailun harjoitukset">{EXERCISES.map((item, index) =>
      <button type="button" key={item.id} className={exercise === item.id ? 'journey-step current' : 'journey-step'}
        aria-current={exercise === item.id ? 'step' : undefined} onClick={() => selectExercise(item.id)}>
        <span className="journey-index">{index + 1}</span><span>{item.title}</span>
      </button>)}</nav>

    <section className="journey-lesson" aria-labelledby="mode-compare-lesson">
      {exercise === 'listen' && <>
        <div className="session-top"><h3 id="mode-compare-lesson">{pair.title}</h3><span>Toonika {pair.tonicName}</span></div>
        <p className="scale-fact">{differenceText}</p>
        <p>{pair.explanation}</p>
        <div className="action-row">
          <button type="button" className="primary" aria-pressed={playing === 'both'}
            onClick={() => void play('both', [{ mode: m0, kind: 'scale' }, { mode: m1, kind: 'scale' }])}>
            {playing === 'both' ? '■ Pysäytä' : `▶ Asteikot peräkkäin: ${m0.name}, sitten ${m1.name}`}</button>
          <button type="button" aria-pressed={playing === 'phrase'}
            onClick={() => void play('phrase', [{ mode: m0, kind: 'phrase' }, { mode: m1, kind: 'phrase' }])}>
            {playing === 'phrase' ? '■ Pysäytä' : '▶ Sama fraasi molempina'}</button>
        </div>
      </>}

      {exercise === 'which' && <>
        <div className="session-top"><h3 id="mode-compare-lesson">Kumpi näyte oli {which.asked.name}?</h3><span>{pair.title}{score.total ? ` · ${score.right}/${score.total} oikein` : ''}</span></div>
        <p>Kuuntele kaksi nimeämätöntä asteikkoa samasta toonikasta {pair.tonicName}. Kuuntele erityisesti {pair.degree}. astetta.</p>
        <div className="action-row">
          <button type="button" className="primary" aria-pressed={playing === 'samples'}
            onClick={() => void play('samples', [{ mode: which.order[0], kind: 'scale' }, { mode: which.order[1], kind: 'scale' }])}>
            {playing === 'samples' ? '■ Pysäytä' : '▶ Kuuntele näytteet 1 ja 2'}</button>
          {[0, 1].map(i => <button type="button" key={i} aria-pressed={playing === `sample-${i}`}
            onClick={() => void play(`sample-${i}`, [{ mode: which.order[i], kind: 'scale' }])}>
            {playing === `sample-${i}` ? '■ Pysäytä' : `▶ Näyte ${i + 1}`}</button>)}
        </div>
        <div className="answer-choices" role="group" aria-label={`Kumpi näyte oli ${which.asked.name}?`}>
          {[0, 1].map(i => <button type="button" key={i} disabled={picked !== null}
            className={picked === null ? '' : i === which.answer ? 'right' : i === picked ? 'wrong' : ''}
            onClick={() => answerWhich(i)}>Näyte {i + 1}</button>)}
        </div>
        {picked !== null && <p className={`feedback ${whichRight ? 'good' : 'bad'}`} role="status" data-testid="mode-feedback">
          {whichRight ? 'Oikein! ' : 'Ei aivan. '}Näyte {which.answer + 1} oli {which.asked.name}. Näyte 1: {which.order[0].name} ({pair.degree}. aste {named(degreeMidi(pair, which.order[0], pair.degree), which.order[0], pair)}),
          näyte 2: {which.order[1].name} ({pair.degree}. aste {named(degreeMidi(pair, which.order[1], pair.degree), which.order[1], pair)}). {pair.explanation}
        </p>}
      </>}

      {exercise === 'change' && <>
        <div className="session-top"><h3 id="mode-compare-lesson">Mikä sävelaste muuttui?</h3><span>Toonika {pair.tonicName}{score.total ? ` · ${score.right}/${score.total} oikein` : ''}</span></div>
        <p>Sama lyhyt fraasi soi kahdesti. Toisessa versiossa yksi sävelaste on eri. Mikä aste muuttui, ja nousiko vai laskiko se?</p>
        <div className="action-row">
          <button type="button" className="primary" aria-pressed={playing === 'versions'}
            onClick={() => void play('versions', [{ mode: change.first, kind: 'phrase' }, { mode: change.second, kind: 'phrase' }], change.pair)}>
            {playing === 'versions' ? '■ Pysäytä' : '▶ Kuuntele versiot 1 ja 2'}</button>
        </div>
        <div className="answer-choices degree-choices" role="group" aria-label="Mikä sävelaste muuttui?">
          {DEGREE_CHOICES.map(choice => {
            const isAnswer = choice.degree === change.answer.degree && choice.direction === change.answer.direction;
            const isPicked = typeof picked === 'object' && picked !== null && picked.degree === choice.degree && picked.direction === choice.direction;
            return <button type="button" key={choiceLabel(choice)} disabled={picked !== null}
              className={picked === null ? '' : isAnswer ? 'right' : isPicked ? 'wrong' : ''}
              onClick={() => answerChange(choice)}>{choiceLabel(choice)}</button>;
          })}
        </div>
        {picked !== null && <p className={`feedback ${changeRight ? 'good' : 'bad'}`} role="status" data-testid="mode-feedback">
          {changeRight ? 'Oikein! ' : 'Ei aivan. '}{change.pair.title}: versio 1 oli {change.first.name}, versio 2 {change.second.name}.
          {' '}{change.answer.degree}. aste {change.answer.direction === 'up' ? 'nousi' : 'laski'} puoli sävelaskelta:
          {' '}{named(degreeMidi(pair, change.first, pair.degree), change.first, pair)} → {named(degreeMidi(pair, change.second, pair.degree), change.second, pair)}.
        </p>}
      </>}

      <p className="tools-note" role="status" aria-live="polite">{nowText}</p>
      {revealed && exercise !== 'listen' && <p className="scale-fact">{differenceText}</p>}
      <Board area={area} marks={marks} disabled follow="playing" playback={playing}
        caption={`${pair.title}: sävelet otelaudalla`} />
      <p className="tools-note">{revealed
        ? `Valkoreunaiset pisteet ovat eroavan ${pair.degree}. asteen vaihtoehdot, vihreä on toonika ${pair.tonicName}.`
        : 'Eroava sävelaste näytetään otelaudalla vastauksen jälkeen.'}</p>
      {exercise !== 'listen' && picked !== null && <div className="action-row">
        <button type="button" className="primary" onClick={newQuestion}>Uusi kysymys →</button>
      </div>}
      {error && <p className="error" role="alert">{error}</p>}
    </section>
  </section>;
}
