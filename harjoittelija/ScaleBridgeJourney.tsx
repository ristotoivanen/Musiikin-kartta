import { useEffect, useRef, useState } from 'react';
import { Board } from './Board';
import { BackingTrackMixer } from './BackingTrackMixer';
import { ReferencePlayer } from './audio';
import { bridgePositions, bridgeRoute, sharedPositionKeys } from './scaleBridgeData';
import { note, pc, positionKey, stringName } from './music';
import type { Mark } from './engine';

const PROGRESS_KEY = 'musiikin-kartta:skaalapolku:bridge-1-2:v1';
const TEMPO_KEY = 'musiikin-kartta:skaalapolku:bridge-tempo:v1';
const STEPS = [
  { title: 'Löydä yhteiset sävelet', detail: 'Tunnista, missä kaksi boksia liittyvät toisiinsa.' },
  { title: 'Soita siirtymä', detail: 'Siirrä kättä saman asteikon sisällä ja palaa takaisin.' },
  { title: 'Yhdistä muistista', detail: 'Toista sama reitti ilman kuvion apua.' },
  { title: 'Improvisoi kahdella positiolla', detail: 'Rakenna fraaseja molempien boksien sävelistä.' },
  { title: 'Yhdistäminen harjoiteltu', detail: 'Palaa kertaamaan kummankin position yhteistä otelauta-aluetta.' },
] as const;
const isRoot = (midi: number) => pc(midi) === 9;
type Hints = 'roots' | 'all' | 'none';

function readProgress() {
  try {
    const value = Number(localStorage.getItem(PROGRESS_KEY));
    return Number.isInteger(value) ? Math.max(0, Math.min(4, value)) : 0;
  } catch { return 0; }
}
function readTempo() {
  try {
    const value = Number(localStorage.getItem(TEMPO_KEY));
    return Number.isInteger(value) && value >= 40 && value <= 140 && value % 5 === 0 ? value : 75;
  } catch { return 75; }
}

/**
 * Pienten boksien opettelun jälkeen erillinen harjoitus: todellinen käsiaseman
 * siirtymä, kuuden päällekkäisen sävelpaikan tunnistus ja oma muistiharjoitus.
 */
export function ScaleBridgeJourney({ onBack, onPosition }: {
  onBack: () => void;
  onPosition: (number: 1 | 2) => void;
}) {
  const [unlocked, setUnlocked] = useState(readProgress);
  const [step, setStep] = useState(readProgress);
  const [showShared, setShowShared] = useState(false);
  const [hints, setHints] = useState<Hints>('roots');
  const [tempo, setTempo] = useState(readTempo);
  const [playing, setPlaying] = useState<'route' | 'phrase' | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [audioError, setAudioError] = useState('');
  const player = useRef(new ReferencePlayer());
  const generation = useRef(0);
  const active = activeIndex === null ? null : bridgeRoute[activeIndex];

  function stopPlayback() {
    generation.current++;
    player.current.stop();
    setPlaying(null);
    setActiveIndex(null);
  }
  useEffect(() => {
    const onHidden = () => {
      if (!document.hidden) return;
      generation.current++;
      player.current.stop();
      setPlaying(null);
      setActiveIndex(null);
    };
    document.addEventListener('visibilitychange', onHidden);
    return () => {
      document.removeEventListener('visibilitychange', onHidden);
      generation.current++;
      player.current.stop();
    };
  }, []);

  async function listen(kind: 'route' | 'phrase') {
    const current = ++generation.current;
    player.current.stop();
    setActiveIndex(null);
    setAudioError('');
    setPlaying(kind);
    try {
      if (kind === 'phrase') {
        await player.current.play(bridgeRoute.map(position => position.midi));
      } else {
        await player.current.loop(bridgeRoute.map(position => position.midi), index => {
          if (current === generation.current) setActiveIndex(index);
        }, tempo);
      }
    } catch {
      if (current === generation.current) setAudioError('Mallisoitto ei käynnistynyt. Tarkista selaimen ääniasetukset.');
    } finally {
      if (current === generation.current) { setPlaying(null); setActiveIndex(null); }
    }
  }
  function changeTempo(next: number) {
    const value = Math.max(40, Math.min(140, next));
    setTempo(value);
    player.current.setLoopTempo(value);
    try { localStorage.setItem(TEMPO_KEY, String(value)); } catch { /* Tallennus ei aina ole sallittu. */ }
  }
  function chooseStep(index: number) {
    if (index > unlocked) return;
    stopPlayback();
    setStep(index);
    setShowShared(false);
    setHints('roots');
  }
  function completeStep() {
    stopPlayback();
    const next = Math.min(4, step + 1);
    setStep(next);
    setShowShared(false);
    setHints('roots');
    if (next > unlocked) {
      setUnlocked(next);
      try { localStorage.setItem(PROGRESS_KEY, String(next)); } catch { /* Tallennus ei aina ole sallittu. */ }
    }
  }

  const show = (midi: number, key: string) =>
    step < 2 || (step === 2 && showShared && sharedPositionKeys.has(key)) ||
    (step === 3 && (hints === 'all' || (hints === 'roots' && isRoot(midi))));
  const marks: Mark[] = bridgePositions.filter(position => show(position.midi, positionKey(position)))
    .map(position => ({
      ...position,
      label: step < 2 || (step === 2 && showShared) || (step === 3 && hints === 'all') ? note(position.midi) : 'A',
      kind: step < 2 && active?.string === position.string && active?.fret === position.fret
        ? 'playing' as const
        : isRoot(position.midi) ? 'answer' as const
        : sharedPositionKeys.has(positionKey(position)) ? 'anchor' as const : 'shape' as const,
    }));

  return <section className="scale-journey scale-bridge" aria-labelledby="scale-path-title">
    <button type="button" className="back-link" onClick={() => { stopPlayback(); onBack(); }}>← Oppimispolut</button>
    <p className="eyebrow">SKAALAT JA MOODIT · VAIHE 3</p>
    <h2 id="scale-path-title">A-mollipentatoninen · positioiden 1 ja 2 yhdistäminen</h2>
    <p className="learning-lead">Opettele liikkumaan kahden tutun boksin välillä, älä vain muistamaan kahta erillistä kuviota.</p>
    <p className="scale-fact">Sävelet: <strong>A · C · D · E · G</strong> · Nauhat 5–10 · 6 kieltä</p>
    <div className="action-row" role="group" aria-label="Valitse opeteltava positio">
      <button type="button" onClick={() => { stopPlayback(); onPosition(1); }}>Positio 1</button>
      <button type="button" onClick={() => { stopPlayback(); onPosition(2); }}>Positio 2</button>
      <button type="button" aria-pressed="true" onClick={() => chooseStep(0)}>Yhdistä 1 + 2</button>
    </div>

    <nav className="journey-steps" aria-label="Positioiden 1 ja 2 yhdistämisen harjoitukset">
      {STEPS.map((item, index) =>
        <button type="button" key={item.title} className={index === step ? 'journey-step current' : 'journey-step'}
          aria-current={index === step ? 'step' : undefined} disabled={index > unlocked}
          onClick={() => chooseStep(index)}>
          <span className="journey-index">{index > unlocked ? '🔒' : index < unlocked ? '✓' : index + 1}</span>
          <span>{item.title}</span>
        </button>)}
    </nav>

    <section className="journey-lesson" aria-labelledby="lesson-title">
      <div className="session-top"><h3 id="lesson-title">{STEPS[step].title}</h3>
        <span>{step === 4 ? 'Valmis' : `Harjoitus ${step + 1} / 4`}</span></div>
      <p>{STEPS[step].detail}</p>

      {step < 4 && <>
        {step === 0 && <>
          <p>Kummassakin positiossa on 12 sävelpaikkaa, mutta yhteisiä paikkoja on kuusi. Niinpä näet yhteensä 18 erillistä paikkaa, et 24:ää.</p>
          <p><strong>Violetit reunustetut sävelet</strong> kuuluvat molempiin bokseihin. Vihreät A:t ovat pohjasäveliä. D-kielen 7. nauha on sekä yhteinen sävel että A-pohjasävel. Koko yhdistetyllä otelaudalla on neljä A-pohjasävelpaikkaa.</p>
        </>}
        {step === 1 && <>
          <p>Soita ensin paksulla E-kielellä <strong>5 (A) → 8 (C) → 10 (D)</strong>. Nauha 8 on yhteinen kohta. Jatka A-kielellä <strong>7 (E) → 10 (G)</strong> ja D-kielellä <strong>7 (A) → 10 (C)</strong>. Palaa samaa reittiä. Vaihda käsiasemaa rauhallisesti, älä venytä sormia väkisin.</p>
          <p>Reitti on yksi soitettava harjoitussarja, ei koko asteikon ylös–alas-kuvio. Se näyttää, miten siirtymä toimii käytännössä.</p>
        </>}
        {step === 2 && <p>Soita sama siirtymä korvakuulolta ja muistista. Sävelet eivät näy oletuksena. Voit pyytää näkyviin vain molempien boksien kuusi yhteistä sävelpaikkaa. Palaa edelliseen vaiheeseen, jos tarvitset koko kuvion.</p>}
        {step === 3 && <p>Soita Am-taustan päälle ensin kahden tahdin fraasi 1. positiosta ja vastaa siihen 2. positiosta. Käytä samoja yhteisiä säveliä siirtymäkohtina. Kokeile lopettaa A-säveleen ja pidä fraasien välissä taukoja.</p>}

        {step === 2 && <div className="scale-tempo" role="group" aria-label="Siirtymäharjoituksen tempo">
          <span>Tempo</span>
          <button type="button" disabled={tempo <= 40} aria-label="Hidasta tempoa 5 BPM" onClick={() => changeTempo(tempo - 5)}>− 5</button>
          <output aria-label="Nykyinen tempo">{tempo} BPM</output>
          <button type="button" disabled={tempo >= 140} aria-label="Nopeuta tempoa 5 BPM" onClick={() => changeTempo(tempo + 5)}>+ 5</button>
          <small>Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana.</small>
        </div>}
        {step < 3 && <div className="action-row">
          <button type="button" aria-pressed={playing === 'route'}
            onClick={() => playing === 'route' ? stopPlayback() : void listen('route')}>
            {playing === 'route' ? '■ Pysäytä siirtymä' : '▶ Toista siirtymää jatkuvasti'}
          </button>
          <button type="button" onClick={() => playing === 'phrase' ? stopPlayback() : void listen('phrase')}>
            {playing === 'phrase' ? '■ Pysäytä mallisoitto' : '▶ Kuuntele siirtymä kerran'}
          </button>
        </div>}
        {step === 2 && <div className="action-row">
          <button type="button" aria-pressed={showShared} onClick={() => setShowShared(value => !value)}>
            {showShared ? 'Piilota yhteiset sävelet' : 'Näytä yhteiset sävelet'}
          </button>
          <button type="button" onClick={() => chooseStep(1)}>← Palaa sormitukseen</button>
        </div>}
        {step === 3 && <>
          <fieldset className="hint-segments">
            <legend>Sävelvihjeet otelaudalla</legend>
            {([
              { value: 'roots', name: 'Vain A-pohjasävelet' },
              { value: 'all', name: 'Molemmat positiot' },
              { value: 'none', name: 'Ei vihjeitä' },
            ] as const).map(option => <label key={option.value}>
              <input type="radio" name="bridge-hints" value={option.value}
                checked={hints === option.value} onChange={() => setHints(option.value)} />
              <span>{option.name}</span>
            </label>)}
          </fieldset>
          <div className="action-row">
            <button type="button" onClick={() => void listen('phrase')}>▶ Kuuntele siirtymä kerran</button>
          </div>
        </>}
        {step !== 3 && <p className="tools-note" role="status" aria-live="polite">
          {playing === 'route'
            ? active && step < 2
              ? `Nyt soi ${note(active.midi, false, true)} · ${stringName[active.string]}-kieli, nauha ${active.fret}.`
              : 'Siirtymän toisto käynnissä. Pysäytä painikkeesta.'
            : 'Mallisoitto etenee paksulta E-kieleltä A- ja D-kielille, sitten takaisin.'}
        </p>}
        {audioError && <p role="alert" className="error">{audioError}</p>}
        <Board area={{ strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: 'box' }}
          disabled marks={marks} caption="A-mollipentatoninen, positiot 1 ja 2" />
        <p className="tools-note">{step === 2
          ? showShared ? 'Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa.' : 'Otelauta on ilman sävelvihjeitä.'
          : step === 3 ? hints === 'roots' ? 'Näkyvissä ovat vain A-pohjasävelet.'
            : hints === 'all' ? 'Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty.' : 'Otelauta ilman vihjeitä.'
          : 'Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.'} Arvioit itse, miten soittaminen sujui.</p>
        {step === 3 && <BackingTrackMixer />}
        <div className="journey-next">
          <p>{step === 0 ? 'Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon.'
            : step === 1 ? 'Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä.'
            : step === 2 ? 'Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa.'
            : 'Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle.'}</p>
          <button type="button" className="primary" onClick={completeStep}>
            {step === 3 ? 'Kirjaa yhdistäminen harjoitelluksi' : 'Harjoiteltu, seuraava vaihe →'}
          </button>
          <p className="tools-note">Eteneminen perustuu omaan arvioosi, ei mikrofonilla mitattuun soittotulokseen.</p>
        </div>
      </>}
      {step === 4 && <div className="journey-next" role="status">
        <h3>Hallussa: kaksi positiota</h3>
        <p>Osaat käyttää kahta boksia yhtenä asteikkona. Voit palata muistiharjoitukseen tai kerrata kumpaa tahansa positiota.</p>
        <div className="action-row">
          <button type="button" onClick={() => chooseStep(2)}>Kertaa muistiharjoitus</button>
          <button type="button" onClick={() => onPosition(1)}>Kertaa positio 1</button>
          <button type="button" onClick={() => onPosition(2)}>Kertaa positio 2</button>
        </div>
      </div>}
    </section>
    <div className="journey-below">
      <h3>Seuraavaksi tällä polulla</h3>
      <p>🔒 Positio 3</p>
      <p className="tools-note">Positio 3 on vielä toteuttamatta. Kahden position kertaus säilyy käytettävissä.</p>
    </div>
  </section>;
}
