import { useState } from 'react';
import { Board } from './Board';
import { fretName, note, pc, positionKey, positions, stringName, type Position } from './music';
import type { Area, Mark } from './engine';

// Ensimmäinen oppimistaso: vain luonnolliset sävelnimet ja nauhat 0–5.
// Kaikki saman sävelnimen sijainnit on löydettävä, ei vain yhtä oikeaa kohtaa.
const NOTES = [0, 2, 4, 5, 7, 9, 11];
const AREA: Area = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: '' };

export function NoteJourney({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(0);
  const [found, setFound] = useState<string[]>([]);
  const [hintShown, setHintShown] = useState(false);
  const [message, setMessage] = useState('');
  const [mistakes, setMistakes] = useState(0);

  const finished = step >= NOTES.length;
  const target = NOTES[Math.min(step, NOTES.length - 1)];
  const wanted = positions(AREA.strings, AREA.min, AREA.max).filter(p => pc(p.midi) === target);
  const missing = wanted.filter(p => !found.includes(positionKey(p)));
  const complete = missing.length === 0 && !finished;
  const hint = !complete && hintShown ? missing[0] : undefined;

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
    <p className="learning-lead">Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen tulee myöhemmissä vaiheissa.</p>
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
          {complete && <button type="button" className="primary" onClick={next}>
            {step === NOTES.length - 1 ? 'Näytä yhteenveto' : 'Seuraava sävel →'}
          </button>}
        </div>
      </>}
    </div>
    <p className="tools-note">Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä.</p>
  </section>;
}
