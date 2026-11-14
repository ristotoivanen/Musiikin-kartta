import { useEffect, useState } from 'react';
import { Board } from './Board';
import { fretName, note, pc, positionKey, positions, stringName, type Position } from './music';
import type { Area, Mark } from './engine';

// Ensimmäinen oppimistaso: vain luonnolliset sävelnimet ja nauhat 0–5.
// Kaikki saman sävelnimen sijainnit on löydettävä, ei vain yhtä oikeaa kohtaa.
const NOTES = [0, 2, 4, 5, 7, 9, 11];
const AUTO_ADVANCE_DELAY_MS = 1200;
const AREA: Area = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: '' };

export function NoteJourney({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(0);
  const [found, setFound] = useState<string[]>([]);
  const [hintShown, setHintShown] = useState(false);
  const [message, setMessage] = useState('');
  const [mistakes, setMistakes] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(false);

  const finished = step >= NOTES.length;
  const target = NOTES[Math.min(step, NOTES.length - 1)];
  const wanted = positions(AREA.strings, AREA.min, AREA.max).filter(p => pc(p.midi) === target);
  const missing = wanted.filter(p => !found.includes(positionKey(p)));
  const complete = missing.length === 0 && !finished;
  const hint = !complete && hintShown ? missing[0] : undefined;

  // Näytä valmistunut otelauta ja palaute hetken ajan ennen seuraavaa säveltä.
  // Siirtymä peruuntuu, jos automaattinen jatko poistetaan tai näkymä suljetaan.
  useEffect(() => {
    if (!autoAdvance || !complete) return;
    const timer = window.setTimeout(() => {
      setStep(current => current + 1);
      setFound([]);
      setHintShown(false);
      setMessage('');
    }, AUTO_ADVANCE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [autoAdvance, complete]);

  const marks: Mark[] = [
    ...wanted.filter(p => found.includes(positionKey(p)))
      .map(p => ({ ...p, kind: 'answer' as const, label: note(p.midi) })),
    ...(hint ? [{ ...hint, kind: 'anchor' as const, label: '?' }] : [])
  ];

  function answer(p: Position) {
    if (finished || complete) return;
    const key = positionKey(p);
    if (pc(p.midi) !== target) {
      setMistakes(n => n + 1);
      setMessage(`Valitsit sävelen ${note(p.midi)}. Etsi ${note(target)}.`);
      return;
    }
    if (found.includes(key)) {
      setMessage('Tämä kohta on jo löydetty. Etsi seuraava sijainti.');
      return;
    }
    const nextFound = [...found, key];
    setFound(nextFound);
    setHintShown(false);
    const remaining = wanted.length - nextFound.length;
    setMessage(remaining
      ? `Oikein! ${note(target)} löytyi ${stringName[p.string]}-kieleltä (${fretName(p.fret)}). Vielä ${remaining}.`
      : `Löysit kaikki ${wanted.length} ${note(target)}-säveltä tällä alueella.`);
  }

  function next() {
    if (!complete) return;
    setStep(n => n + 1);
    setFound([]);
    setHintShown(false);
    setMessage('');
  }

  function restart() {
    setStep(0);
    setFound([]);
    setHintShown(false);
    setMessage('');
    setMistakes(0);
  }

  return <section className="note-journey" aria-labelledby="note-journey-title">
    <button type="button" className="back-link" onClick={onBack}>← Oppimispolut</button>
    <p className="eyebrow">SÄVELKORVA JA OTELAUTA · VAIHE 1</p>
    <h2 id="note-journey-title">Etsi sävelet otelaudalta</h2>
    <p className="exercise-theory"><a href="book/osa-5.html#otelauta">Lue tämän harjoituksen teoria: Otelauta ja sävelet →</a></p>
    <p className="learning-lead">Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Voit harjoitella kuuntelemista ja toistamista myös Riffikaiussa.</p>
    <section className="journey-lesson" aria-labelledby="riffikaiku-entry-title">
      <h3 id="riffikaiku-entry-title">Riffikaiku (beta)</h3>
      <p>Kuuntele lyhyt kitarariffi ja toista sävelet oikeassa järjestyksessä. Harjoittele virtuaalikitaralla tai kokeile oikeaa kitaraa mikrofonin kautta.</p>
      <p><a href="riffikaiku.html">Avaa Riffikaiku →</a></p>
    </section>
    {!finished && <label className="note-autoadvance">
      <input type="checkbox" checked={autoAdvance}
        onChange={event => setAutoAdvance(event.target.checked)} />
      <span>Jatka automaattisesti</span>
    </label>}
    <div className="journey-lesson">
      {finished ? <>
        <h3>Otelautakierros valmis</h3>
        <p>Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. {mistakes
          ? `Vääriä valintoja yhteensä ${mistakes}.`
          : 'Kaikki valinnat osuivat oikeaan.'}</p>
        <div className="action-row"><button type="button" className="primary" onClick={restart}>Harjoittele uudelleen</button></div>
      </> : <>
        <div className="session-top">
          <h3>Etsi kaikki {note(target)}-sävelet</h3>
          <span>Sävel {step + 1} / {NOTES.length}</span>
        </div>
        <p>Napauta otelaudalta kaikki {note(target)}-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa.</p>
        <p className="note-progress" role="status" aria-live="polite">Löydetty {found.length} / {wanted.length}</p>
        <Board area={AREA} marks={marks} onAnswer={answer} disabled={complete}
          caption="Otelauta" />
        <p className={complete ? 'feedback good' : 'feedback info'} data-testid="note-feedback"
          role="status" aria-live="polite">{message}</p>
        <div className="action-row">
          {!complete && <button type="button" aria-pressed={hintShown}
            onClick={() => setHintShown(v => !v)}>
            {hintShown ? 'Piilota vihje' : 'Näytä vihje'}
          </button>}
          {complete && (autoAdvance
            ? <span className="tools-note" role="status">Siirrytään automaattisesti {step === NOTES.length - 1 ? 'yhteenvetoon' : 'seuraavaan säveleen'}…</span>
            : <button type="button" className="primary" onClick={next}>
                {step === NOTES.length - 1 ? 'Näytä yhteenveto' : 'Seuraava sävel →'}
              </button>)}
        </div>
      </>}
    </div>
    <p className="tools-note">Jatka Riffikaikuun, kun haluat harjoitella lyhyiden melodioiden tunnistamista ja toistamista.</p>
  </section>;
}
