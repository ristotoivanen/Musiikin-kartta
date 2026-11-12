import { useEffect, useRef, useState } from 'react';
import { Board } from './Board';
import { ReferencePlayer } from './audio';
import { at, music, note, pc } from './music';
import type { Mark } from './engine';

const PROGRESS_KEY = 'musiikin-kartta:skaalapolku:v1';
const steps = [
  { title: 'Kuuntele ja tutustu', detail: 'Kuule ensin asteikko ja pieni melodinen esimerkki.' },
  { title: 'Soita ylös ja alas', detail: 'Opettele 1. position sormitus rauhallisesti.' },
  { title: 'Soita muistista', detail: 'Vähennä vihjeitä ja soita ilman mallia.' },
  { title: 'Improvisoi taustan päälle', detail: 'Muodosta omia fraaseja samoista sävelistä.' },
  { title: 'Positio 1 harjoiteltu', detail: 'Palaa harjoitukseen ja kertaa myöhemmin.' },
] as const;

function readProgress(): number {
  try {
    const value = Number(localStorage.getItem(PROGRESS_KEY));
    return Number.isInteger(value) ? Math.max(0, Math.min(4, value)) : 0;
  } catch { return 0; }
}

/**
 * Ensimmäinen pedagoginen pystysuuntainen siivu.
 * Etukäteiskäsitys, kuva, asteikon toisto, muistaminen ja musiikillinen soveltaminen.
 * Osaaminen kirjataan käyttäjän itsearviona, ei automaattisena mikrofonitulkintana.
 */
export function ScaleJourney({ onBack, onOpenOldExercise }: { onBack: () => void; onOpenOldExercise: () => void }) {
  const [unlocked, setUnlocked] = useState(readProgress);
  const [step, setStep] = useState(readProgress);
  // 0 = koko kuvio, 1 = vain A-pohjasävelet, 2 = ilman kuvion apumerkkejä.
  const [hintLevel, setHintLevel] = useState(0);
  const [playing, setPlaying] = useState<'scale' | 'phrase' | 'loop' | null>(null);
  const [audioError, setAudioError] = useState('');
  const audio = useRef(new ReferencePlayer());
  const token = useRef(0);

  function stopPlayback() {
    token.current++;
    audio.current.stop();
    setPlaying(null);
  }
  useEffect(() => {
    // Piilotettu välilehti ei saa jatkaa äänentoistoa taustalla.
    const onHidden = () => {
      if (document.hidden) {
        token.current++;
        audio.current.stop();
        setPlaying(null);
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
  const box = music.fingeringBoxes(9, music.SCALES.mp, 'pentatonic', [1])[0].positions[0];
  const played = box.strings.flatMap((frets, string) => frets.map(fret => at(string, fret)))
    .sort((a, b) => a.midi - b.midi || b.string - a.string);
  const ordered = played.map(position => position.midi);
  const upDown = [...ordered, ...ordered.slice(0, -1).reverse()];
  // Sävelet löytyvät kokonaan 1. positiosta. Rytmi on tässä vielä tasainen.
  const examplePhrase = [69, 72, 69, 67, 64, 67, 69];
  const min = box.start, max = box.end;
  const marks: Mark[] = played
    .filter(position => step < 2 || hintLevel === 0 || (hintLevel === 1 && pc(position.midi) === 9))
    .map(position => ({
      ...position, label: hintLevel === 1 && step >= 2 ? 'A' : note(position.midi),
      kind: pc(position.midi) === 9 ? 'answer' as const : 'shape' as const,
    }));

  async function listen(kind: 'scale' | 'phrase' | 'loop') {
    const current = ++token.current;
    audio.current.stop();
    setAudioError('');
    setPlaying(kind);
    try {
      const notes = kind === 'phrase' ? examplePhrase : upDown;
      if (kind === 'loop') {
        // Uusi kierros alkaa vasta edellisen valmistuttua. Vain yksi soitin on käynnissä.
        while (current === token.current && !document.hidden) {
          const completed = await audio.current.play(notes);
          if (!completed) break;
        }
      } else {
        await audio.current.play(notes);
      }
    } catch {
      if (current === token.current) setAudioError('Mallisoitto ei käynnistynyt. Tarkista selaimen ääniasetukset ja yritä uudelleen.');
    } finally {
      if (current === token.current) setPlaying(null);
    }
  }
  function completeStep() {
    stopPlayback();
    const next = Math.min(4, step + 1);
    setStep(next); setHintLevel(next >= 3 ? 2 : 0);
    if (next > unlocked) {
      setUnlocked(next);
      try { localStorage.setItem(PROGRESS_KEY, String(next)); } catch { /* Selain voi estää tallennuksen. */ }
    }
  }
  function selectStep(index: number) {
    if (index > unlocked) return;
    stopPlayback();
    setStep(index); setHintLevel(index >= 3 ? 2 : 0);
  }

  return <section className="scale-journey" aria-labelledby="scale-path-title">
    <button type="button" className="back-link" onClick={() => { stopPlayback(); onBack(); }}>← Oppimispolut</button>
    <p className="eyebrow">SKAALAT JA MOODIT · VAIHE 1</p>
    <h2 id="scale-path-title">A-mollipentatoninen · positio 1</h2>
    <p className="learning-lead">Yksi asteikko, yksi positio. Kuuntele, opettele, soita muistista ja kokeile sitten omia melodioita.</p>
    <p className="scale-fact">Sävelet: <strong>A · C · D · E · G</strong> · Nauhat 5–8 · 6 kieltä</p>

    <nav className="journey-steps" aria-label="Position 1 harjoitukset">{steps.map((item, index) =>
      <button type="button" key={item.title} className={index === step ? 'journey-step current' : 'journey-step'}
        aria-current={index === step ? 'step' : undefined} disabled={index > unlocked}
        onClick={() => selectStep(index)}>
        <span className="journey-index">{index > unlocked ? '🔒' : index < unlocked ? '✓' : index + 1}</span>
        <span>{item.title}</span>
      </button>)}</nav>

    <section className="journey-lesson" aria-labelledby="lesson-title">
      <div className="session-top"><h3 id="lesson-title">{steps[step].title}</h3><span>{step === 4 ? 'Valmis' : `Harjoitus ${step + 1} / 4`}</span></div>
      <p>{steps[step].detail}</p>

      {step < 4 && <>
        {step === 0 && <p>Kuuntele ensin asteikko hitaasti. Sen jälkeen kuulet lyhyen sävelistä rakennetun mallifraasin. Fraasi on syntetisoitu esimerkki, ei kitaralla äänitetty soolo.</p>}
        {step === 1 && <p>Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Käynnistä mallisoiton jatkuva toisto ja soita mukana omaan tahtiisi. Voit pysäyttää toiston milloin tahansa.</p>}
        {step === 2 && <p>Katso ensin koko kuvio. Vähennä sitten vihjeitä kahdessa vaiheessa: ensin näkyvät vain A-pohjasävelet, lopuksi ei yhtään merkkiä. Soita positio muistista molempiin suuntiin.</p>}
        {step === 3 && <p>Kuuntele mallifraasi. Käynnistä sitten Am-tausta ja soita aluksi vain 2–3 eri säveltä. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A. Vasta sitten laajenna koko positioon.</p>}
        {step !== 3 && <div className="action-row">
          {step === 1 ? <button type="button" aria-pressed={playing === 'loop'}
            onClick={() => playing === 'loop' ? stopPlayback() : void listen('loop')}>
            {playing === 'loop' ? '■ Pysäytä asteikon toisto' : '▶ Toista asteikkoa jatkuvasti'}
          </button> : <button type="button" onClick={() => playing === 'scale' ? stopPlayback() : void listen('scale')}>
            {playing === 'scale' ? '■ Pysäytä mallisoitto' : '▶ Kuuntele asteikko ylös ja alas'}
          </button>}
          <button type="button" onClick={() => playing === 'phrase' ? stopPlayback() : void listen('phrase')}>
            {playing === 'phrase' ? '■ Pysäytä fraasi' : '▶ Kuuntele mallifraasi'}
          </button>
        </div>}
        {step === 1 && <p className="tools-note" role="status" aria-live="polite">
          {playing === 'loop' ? 'Jatkuva toisto käynnissä. Asteikko alkaa automaattisesti uudelleen edellisen kierroksen jälkeen.' :
            'Toisto jatkuu, kunnes pysäytät sen tai siirryt seuraavaan vaiheeseen.'}
        </p>}
        {audioError && <p className="error" role="alert">{audioError}</p>
        {step >= 1 && step <= 3 && <>
          {step >= 2 && <div className="action-row">
            {hintLevel < 2 && <button type="button" onClick={() => setHintLevel(value => Math.min(2, value + 1))}>
              {hintLevel === 0 ? 'Näytä vain pohjasävelet' : 'Piilota loputkin vihjeet'}
            </button>}
            {hintLevel > 0 && <button type="button" onClick={() => setHintLevel(0)}>Näytä koko kuvio</button>}
            {step === 3 && <button type="button" onClick={() => void listen('phrase')}>▶ Mallifraasi</button>}
          </div>}
          <Board area={{ strings: [0,1,2,3,4,5], min, max, fixed: 'box' }} marks={marks} disabled caption="A-mollipentatoninen, positio 1" />
          <p className="tools-note">Vihreä A on pohjasävel. Nuotit eivät mittaa soittoasi: arvioit itse, miten harjoitus sujui.</p>
        </>}
        {step === 0 && <>
          <Board area={{ strings: [0,1,2,3,4,5], min, max, fixed: 'box' }} marks={marks} disabled caption="Ensimmäisen position sävelet" />
          <p className="tools-note">Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä.</p>
        </>}
        {step === 3 && <div className="backing-track">
          <strong>Am-harjoitustausta</strong>
          <audio controls preload="none" aria-label="A-mollin improvisointitausta">
            <source src="assets/audio/osa-8/am-harjoitustausta.m4a" type="audio/mp4" />
            <source src="assets/audio/osa-8/am-harjoitustausta.wav" type="audio/wav" />
            Selaimesi ei tue äänentoistoa.
          </audio>
          <p className="tools-note">Taustaraita on oppaan luvusta 8. Käytä sitä omaan improvisointiin, ilman automaattista suoritusarviointia.</p>
        </div>}
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
        <h3>Ensimmäinen positio harjoiteltu</h3>
        <p>Kertaa asteikko muistista myös myöhemmin. Seuraavat positiot ja niiden yhdistäminen rakennetaan tämän mallin pohjalta.</p>
        <button type="button" onClick={() => selectStep(2)}>Kertaa muistiharjoitus</button>
      </div>}
    </section>
    <div className="journey-below">
      <h3>Seuraavaksi tällä polulla</h3>
      <p>🔒 Positio 2 · 🔒 Positioiden 1 ja 2 yhdistäminen · 🔒 Positio 3</p>
      <p className="tools-note">Nämä harjoitukset ovat vielä toteuttamatta. Ensimmäinen positio toimii uuden rakenteen testiversiona.</p>
      <details><summary>Vanha asteikon sävelharjoitus</summary>
        <p>Halutessasi voit käyttää myös aiempaa otelaudalta vastaamisen harjoitusta. Se avautuu omine asetuksineen.</p>
        <button type="button" onClick={() => { stopPlayback(); onOpenOldExercise(); }}>Avaa vanha asteikkoharjoitus</button>
      </details>
    </div>
  </section>;
}
