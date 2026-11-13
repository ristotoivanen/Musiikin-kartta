import { useEffect, useRef, useState } from 'react';
import { Board } from './Board';
import { BackingTrackMixer } from './BackingTrackMixer';
import { ScaleBridgeJourney } from './ScaleBridgeJourney';
import { MelodyPractice } from './MelodyPractice';
import { ReferencePlayer, referenceAudioError } from './audio';
import { at, music, note, pc, stringName } from './music';
import type { Mark } from './engine';

const PROGRESS_KEY = 'musiikin-kartta:skaalapolku:v1';
const POSITION_2_PROGRESS_KEY = 'musiikin-kartta:skaalapolku:position-2:v1';
const POSITION_3_PROGRESS_KEY = 'musiikin-kartta:skaalapolku:position-3:v1';
const BRIDGE_PROGRESS_KEY = 'musiikin-kartta:skaalapolku:bridge-1-2:v1';
const ACTIVE_POSITION_KEY = 'musiikin-kartta:skaalapolku:active-position:v1';
const TEMPO_KEY = 'musiikin-kartta:skaalapolku:tempo:v1';
const DEFAULT_TEMPO = 75;
const MIN_TEMPO = 40;
const MAX_TEMPO = 140;

function readTempo(): number {
  try {
    const saved = localStorage.getItem(TEMPO_KEY);
    if (saved === null) return DEFAULT_TEMPO;
    const value = Number(saved);
    return Number.isInteger(value) && value >= MIN_TEMPO && value <= MAX_TEMPO && value % 5 === 0
      ? value : DEFAULT_TEMPO;
  } catch { return DEFAULT_TEMPO; }
}
const steps = [
  { title: 'Kuuntele ja tutustu', detail: 'Kuule ensin asteikko ja pieni melodinen esimerkki.' },
  { title: 'Soita ylös ja alas', detail: 'Opettele valitun position sormitus rauhallisesti.' },
  { title: 'Soita muistista', detail: 'Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin.' },
  { title: 'Improvisoi taustan päälle', detail: 'Muodosta omia fraaseja samoista sävelistä.' },
  { title: 'Positio harjoiteltu', detail: 'Palaa harjoitukseen ja kertaa myöhemmin.' },
] as const;

/** Improvisaatioharjoituksen sävelnäyttö. Vaikuttaa vain otelaudan merkintöihin, ei ääneen. */
type ImproHints = 'roots' | 'scale' | 'none';
const IMPRO_HINTS: { value: ImproHints; label: string; note: string }[] = [
  { value: 'roots', label: 'Vain pohjasävelet', note: 'Näkyvissä ovat vain A-pohjasävelet.' },
  { value: 'scale', label: 'Koko pentatoninen', note: 'Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu.' },
  { value: 'none', label: 'Ei sävelvihjeitä', note: 'Otelauta on ilman sävelmerkintöjä: improvisoi muistista.' },
];

function readProgress(key = PROGRESS_KEY): number {
  try {
    const value = Number(localStorage.getItem(key));
    return Number.isInteger(value) ? Math.max(0, Math.min(4, value)) : 0;
  } catch { return 0; }
}

function readActivePosition(): 1 | 2 | 3 {
  try {
    const active = localStorage.getItem(ACTIVE_POSITION_KEY);
    if (active === '3' && readProgress(BRIDGE_PROGRESS_KEY) === 4) return 3;
    return readProgress(PROGRESS_KEY) === 4 && (active === '2' || active === 'bridge') ? 2 : 1;
  } catch { return 1; }
}

function readBridgeOpen(): boolean {
  try {
    return readProgress(POSITION_2_PROGRESS_KEY) === 4 &&
      localStorage.getItem(ACTIVE_POSITION_KEY) === 'bridge';
  } catch { return false; }
}

/**
 * Ensimmäinen pedagoginen pystysuuntainen siivu.
 * Etukäteiskäsitys, kuva, asteikon toisto, muistaminen ja musiikillinen soveltaminen.
 * Osaaminen kirjataan käyttäjän itsearviona, ei automaattisena mikrofonitulkintana.
 */
export function ScaleJourney({ onBack }: { onBack: () => void }) {
  const [positionNumber, setPositionNumber] = useState<1 | 2 | 3>(readActivePosition);
  const [bridgeOpen, setBridgeOpen] = useState(readBridgeOpen);
  const [unlockedByPosition, setUnlockedByPosition] = useState(() => ({
    1: readProgress(PROGRESS_KEY),
    2: readProgress(POSITION_2_PROGRESS_KEY),
    3: readProgress(POSITION_3_PROGRESS_KEY),
  }));
  const [step, setStep] = useState(() =>
    readProgress(readActivePosition() === 3 ? POSITION_3_PROGRESS_KEY
      : readActivePosition() === 2 ? POSITION_2_PROGRESS_KEY : PROGRESS_KEY));
  const unlocked = unlockedByPosition[positionNumber];
  // Muistiharjoituksessa ei näytetä koko kuviota: vain erikseen pyydetyt A-pohjasävelet.
  const [showRoots, setShowRoots] = useState(false);
  // Improvisoinnissa pohjasävelet näkyvät oletuksena; muut vaihtoehdot valitaan itse.
  const [improHints, setImproHints] = useState<ImproHints>('roots');
  const [tempo, setTempo] = useState(readTempo);
  const [playing, setPlaying] = useState<'phrase' | 'loop' | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [audioError, setAudioError] = useState('');
  const audio = useRef(new ReferencePlayer());
  const token = useRef(0);
  const melodyStop = useRef<(() => void) | null>(null);

  function changeTempo(next: number) {
    const value = Math.max(MIN_TEMPO, Math.min(MAX_TEMPO, next));
    setTempo(value);
    audio.current.setLoopTempo(value);
    try { localStorage.setItem(TEMPO_KEY, String(value)); } catch { /* Selain voi estää tallennuksen. */ }
  }

  function stopPlayback() {
    melodyStop.current?.();
    token.current++;
    audio.current.stop();
    setPlaying(null);
    setActiveIndex(null);
  }
  useEffect(() => {
    // Piilotettu välilehti ei saa jatkaa äänentoistoa taustalla.
    const onHidden = () => {
      if (document.hidden) {
        token.current++;
        audio.current.stop();
        setPlaying(null);
        setActiveIndex(null);
      }
    };
    document.addEventListener('visibilitychange', onHidden);
    return () => {
      document.removeEventListener('visibilitychange', onHidden);
      token.current++;
      audio.current.stop();
    };
  }, []);
  // Boksi ja sen sävelkorkeudet saadaan samasta kirjastosta kuin otelautaharjoittelijassa.
  const box = music.fingeringBoxes(9, music.SCALES.mp, 'pentatonic', [positionNumber])[0].positions[0];
  const played = box.strings.flatMap((frets, string) => frets.map(fret => at(string, fret)))
    .sort((a, b) => a.midi - b.midi || b.string - a.string);
  // Viimeisen ja ensimmäisen sävelen tuplaus poistettu: tasainen syke jatkuu kierrosrajan yli.
  const cyclePositions = [...played, ...played.slice(1, -1).reverse()];
  const activePosition = activeIndex === null ? null : cyclePositions[activeIndex];
  // Kunkin fraasin sävelet löytyvät kokonaan valitusta positiosta.
  const examplePhrase = positionNumber === 1
    ? [69, 72, 69, 67, 64, 67, 69]
    : positionNumber === 2 ? [69, 72, 74, 72, 69, 67, 69]
      : [69, 72, 74, 76, 74, 72, 69];
  const min = box.start, max = box.end;
  const isRoot = (midi: number) => pc(midi) === 9;
  // Merkinnät tulevat valitun position boksista (fingeringBoxes), ei erillisestä sävelkartasta.
  const visible = (midi: number) => step < 2 ? true
    : step === 2 ? showRoots && isRoot(midi)
    : improHints === 'scale' || (improHints === 'roots' && isRoot(midi));
  const marks: Mark[] = played
    .filter(position => visible(position.midi))
    .map(position => ({
      ...position, label: step < 2 || (step === 3 && improHints === 'scale') ? note(position.midi) : 'A',
      kind: step < 2 && activePosition?.string === position.string && activePosition.fret === position.fret
        ? 'playing' as const : isRoot(position.midi) ? 'answer' as const : 'shape' as const,
    }));

  async function listen(kind: 'phrase' | 'loop') {
    melodyStop.current?.();
    const current = ++token.current;
    audio.current.stop();
    setActiveIndex(null);
    setAudioError('');
    setPlaying(kind);
    try {
      if (kind === 'phrase') {
        await audio.current.play(examplePhrase);
      } else {
        await audio.current.loop(cyclePositions.map(position => position.midi), index => {
          if (current === token.current) setActiveIndex(index);
        }, step === 2 ? tempo : DEFAULT_TEMPO);
      }
    } catch (error) {
      if (current === token.current) setAudioError(referenceAudioError(error));
    } finally {
      if (current === token.current) { setPlaying(null); setActiveIndex(null); }
    }
  }
  function completeStep() {
    stopPlayback();
    const next = Math.min(4, step + 1);
    setStep(next); setShowRoots(false); setImproHints('roots');
    if (next > unlocked) {
      setUnlockedByPosition(previous => ({ ...previous, [positionNumber]: next }));
      const key = positionNumber === 1 ? PROGRESS_KEY
        : positionNumber === 2 ? POSITION_2_PROGRESS_KEY : POSITION_3_PROGRESS_KEY;
      try { localStorage.setItem(key, String(next)); } catch { /* Selain voi estää tallennuksen. */ }
    }
  }
  function selectStep(index: number) {
    if (index > unlocked) return;
    stopPlayback();
    setStep(index); setShowRoots(false); setImproHints('roots');
  }
  function selectPosition(next: 1 | 2 | 3) {
    if (next === 2 && unlockedByPosition[1] < 4) return;
    if (next === 3 && readProgress(BRIDGE_PROGRESS_KEY) < 4) return;
    stopPlayback();
    setBridgeOpen(false);
    setPositionNumber(next);
    setStep(unlockedByPosition[next]);
    setShowRoots(false);
    setImproHints('roots');
    setAudioError('');
    try { localStorage.setItem(ACTIVE_POSITION_KEY, String(next)); } catch { /* Selain voi estää tallennuksen. */ }
  }
  function selectBridge() {
    if (unlockedByPosition[2] < 4) return;
    stopPlayback();
    setBridgeOpen(true);
    setShowRoots(false);
    setAudioError('');
    try { localStorage.setItem(ACTIVE_POSITION_KEY, 'bridge'); } catch { /* Selain voi estää tallennuksen. */ }
  }

  if (bridgeOpen) return <ScaleBridgeJourney onBack={onBack} onPosition={selectPosition} />;

  return <section className="scale-journey" aria-labelledby="scale-path-title">
    <button type="button" className="back-link" onClick={() => { stopPlayback(); onBack(); }}>← Valitse harjoittelupolku</button>
    <p className="eyebrow">SKAALAT JA MOODIT · VAIHE {positionNumber}</p>
    <h2 id="scale-path-title">A-mollipentatoninen · positio {positionNumber}</h2>
    <p className="exercise-theory"><a href="book/osa-8.html#pentatoniikka">Lue tämän harjoituksen teoria: Pentatoniikka →</a></p>
    <p className="learning-lead">Yksi asteikko, yksi positio. Kuuntele, opettele, soita muistista ja kokeile sitten omia melodioita.</p>
    <p className="scale-fact">Sävelet: <strong>A · C · D · E · G</strong> · Nauhat {min}–{max} · 6 kieltä</p>

    <div className="action-row" role="group" aria-label="Valitse opeteltava positio">
      <button type="button" aria-pressed={positionNumber === 1} onClick={() => selectPosition(1)}>Positio 1</button>
      <button type="button" aria-pressed={positionNumber === 2} disabled={unlockedByPosition[1] < 4}
        onClick={() => selectPosition(2)}>Positio 2</button>
      <button type="button" disabled={unlockedByPosition[2] < 4}
        onClick={selectBridge}>Yhdistä 1 + 2</button>
      <button type="button" aria-pressed={positionNumber === 3} disabled={readProgress(BRIDGE_PROGRESS_KEY) < 4}
        onClick={() => selectPosition(3)}>Positio 3</button>
    </div>

    <nav className="journey-steps" aria-label={`Position ${positionNumber} harjoitukset`}>{steps.map((item, index) =>
      <button type="button" key={item.title} className={index === step ? 'journey-step current' : 'journey-step'}
        aria-current={index === step ? 'step' : undefined} disabled={index > unlocked}
        onClick={() => selectStep(index)}>
        <span className="journey-index">{index > unlocked ? '🔒' : index < unlocked ? '✓' : index + 1}</span>
        <span>{index === 4 ? `Positio ${positionNumber} harjoiteltu` : item.title}</span>
      </button>)}</nav>

    <section className="journey-lesson" aria-labelledby="lesson-title">
      <div className="session-top"><h3 id="lesson-title">{step === 4 ? `Positio ${positionNumber} harjoiteltu` : steps[step].title}</h3><span>{step === 4 ? 'Valmis' : `Harjoitus ${step + 1} / 4`}</span></div>
      <p>{steps[step].detail}</p>

      {step < 4 && <>
        {step === 0 && <p>Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. {positionNumber === 1 ? 'Tässä vaiheessa keskitytään vain asteikon säveliin.' : 'Kuuntele myös lyhyt mallifraasi.'} Ääni on syntetisoitu.</p>}
        {step === 0 && positionNumber === 2 && <p>Positio 2 alkaa paksun E-kielen C-sävelestä (8. nauha), ei A:sta. A-pohjasävelet löytyvät D-kielen 7. ja B-kielen 10. nauhalta. Huomaa, miten kuvio jatkuu position 1 yläreunasta.</p>}
        {step === 0 && positionNumber === 3 && <p>Positio 3 alkaa paksun E-kielen D-sävelestä 10. nauhalta ja jatkuu nauhoille 9–13. B-kielen 10. ja A-kielen 12. nauha ovat A-pohjasäveliä. Position 2 ylimmät sävelet ovat tämän position alempia säveliä, joten voit liikkua tutun yhteisen sävelen kautta ilman sävellajin vaihtumista.</p>}
        {step === 1 && <p>Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa.</p>}
        {step === 2 && <p>Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen.</p>}
        {step === 3 && <p>{positionNumber === 1 ? 'Käytä aiemmin muistista soitettua melodiaa omien fraasien lähtökohtana. ' : 'Kuuntele mallifraasi. '}Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A.</p>}
        {step === 2 && <div className="scale-tempo" role="group" aria-label="Asteikon toiston tempo">
          <span>Tempo</span>
          <button type="button" aria-label="Hidasta tempoa 5 BPM" disabled={tempo <= MIN_TEMPO}
            onClick={() => changeTempo(tempo - 5)}>− 5</button>
          <output aria-live="polite" aria-label="Nykyinen tempo">{tempo} BPM</output>
          <button type="button" aria-label="Nopeuta tempoa 5 BPM" disabled={tempo >= MAX_TEMPO}
            onClick={() => changeTempo(tempo + 5)}>+ 5</button>
          {tempo !== DEFAULT_TEMPO && <button type="button" className="tempo-reset"
            onClick={() => changeTempo(DEFAULT_TEMPO)}>Palauta 75 BPM</button>}
          <small>Yksi sävel / isku. Voit säätää myös toiston aikana.</small>
        </div>}
        {step !== 3 && <div className="action-row">
          <button type="button" aria-pressed={playing === 'loop'}
            onClick={() => playing === 'loop' ? stopPlayback() : void listen('loop')}>
            {playing === 'loop' ? '■ Pysäytä asteikon toisto' : '▶ Toista asteikkoa jatkuvasti'}
          </button>
          {positionNumber !== 1 && <button type="button" onClick={() => playing === 'phrase' ? stopPlayback() : void listen('phrase')}>
            {playing === 'phrase' ? '■ Pysäytä fraasi' : '▶ Kuuntele mallifraasi'}
          </button>}
        </div>}
        {step !== 3 && <p className="tools-note" role="status" aria-live="polite">
          {playing === 'loop'
            ? activePosition && step < 2
              ? `Jatkuva toisto käynnissä · Nyt soi: ${note(activePosition.midi, false, true)} · ${stringName[activePosition.string]}-kieli, nauha ${activePosition.fret}.`
              : 'Jatkuva toisto käynnissä. Pysäytä se painikkeesta.'
            : 'Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta.'}
        </p>}
        {audioError && <p className="error" role="alert">{audioError}</p>}
        {step >= 1 && step <= 3 && <>
          {step === 2 && <div className="action-row">
            <button type="button" aria-pressed={showRoots} onClick={() => setShowRoots(value => !value)}>
              {showRoots ? 'Piilota pohjasävelet' : 'Näytä pohjasävelet'}
            </button>
            <button type="button" onClick={() => selectStep(1)}>← Palaa edelliseen opetukseen</button>
          </div>}
          {step === 3 && <>
            <fieldset className="hint-segments">
              <legend>Sävelvihjeet otelaudalla</legend>
              {IMPRO_HINTS.map(option => <label key={option.value}>
                <input type="radio" name="impro-hints" value={option.value}
                  checked={improHints === option.value} onChange={() => setImproHints(option.value)} />
                <span>{option.label}</span>
              </label>)}
            </fieldset>
            {positionNumber !== 1 && <div className="action-row">
              <button type="button" onClick={() => void listen('phrase')}>▶ Mallifraasi</button>
            </div>}
          </>}
          <Board area={{ strings: [0,1,2,3,4,5], min, max, fixed: 'box' }} marks={marks} disabled follow="playing" caption={`A-mollipentatoninen, positio ${positionNumber}`} />
          <p className="tools-note">{step < 2 ? 'Vihreällä merkitty A on pohjasävel.'
            : step === 3 ? IMPRO_HINTS.find(option => option.value === improHints)!.note
            : showRoots ? 'Näkyvissä ovat vain A-pohjasävelet.' : 'Otelauta on ilman vihjemerkintöjä.'} Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui.</p>
        </>}
        {step === 0 && <>
          <Board area={{ strings: [0,1,2,3,4,5], min, max, fixed: 'box' }} marks={marks} disabled follow="playing" caption={`Position ${positionNumber} sävelet`} />
          <p className="tools-note">Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä.</p>
        </>}
        {positionNumber === 1 && (step === 1 || step === 2) && <MelodyPractice
          key={`wayfaring:${step}`} pieceId="wayfaring"
          stage={step === 1 ? 'fingering' : 'memory'}
          onBeforePlay={stopPlayback} stopHandleRef={melodyStop} />}
        {step === 3 && <BackingTrackMixer key={positionNumber} />}
        <div className="journey-next">
          <p>{step === 0 ? 'Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen.' :
            step === 1 ? 'Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti.' :
            step === 2 ? 'Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä.' :
            'Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle.'}</p>
          <button type="button" className="primary" onClick={completeStep}>{step === 3 ? 'Kirjaa harjoitelluksi' : 'Harjoiteltu, seuraava vaihe →'}</button>
          <p className="tools-note">Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa.</p>
        </div>
      </>}
      {step === 4 && <div className="journey-next" role="status">
        <h3>{positionNumber === 1 ? 'Valmis seuraavaan positioon'
          : positionNumber === 2 ? 'Kaksi positiota harjoiteltu' : 'Kolmas positio harjoiteltu'}</h3>
        <p>{positionNumber === 1
          ? 'Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2.'
          : positionNumber === 2
            ? 'Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä.'
            : 'Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä.'}</p>
        <button type="button" onClick={() => selectStep(2)}>Kertaa muistiharjoitus</button>
        {positionNumber === 1
          ? <button type="button" className="primary" onClick={() => selectPosition(2)}>Siirry positioon 2 →</button>
          : positionNumber === 2
            ? <button type="button" className="primary" onClick={selectBridge}>Yhdistä positiot 1 ja 2 →</button>
            : <button type="button" onClick={() => selectPosition(2)}>Kertaa positio 2</button>}
      </div>}
    </section>
    <div className="journey-below">
      <h3>Seuraavaksi tällä polulla</h3>
      <p>{unlockedByPosition[1] < 4 ? '🔒 Positio 2' : unlockedByPosition[2] === 4 ? '✓ Positio 2 harjoiteltu' : 'Positio 2 käytettävissä'} · {unlockedByPosition[2] === 4 ? 'Positioiden 1 ja 2 yhdistäminen käytettävissä' : '🔒 Positioiden 1 ja 2 yhdistäminen'} · {readProgress(BRIDGE_PROGRESS_KEY) < 4 ? '🔒 Positio 3' : unlockedByPosition[3] === 4 ? '✓ Positio 3 harjoiteltu' : 'Positio 3 käytettävissä'}</p>
      <p className="tools-note">Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi.</p>
    </div>
  </section>;
}
