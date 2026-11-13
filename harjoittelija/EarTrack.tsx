import { useState } from 'react';
import { NoteJourney } from './NoteJourney';
import { EarLocateJourney } from './EarLocateJourney';
import { ModeCompareJourney } from './ModeCompareJourney';

type EarExercise = 'notes' | 'locate' | 'modes';

/**
 * Sävelkorva ja otelauta -polku. Polku (ja suora linkki ?polku=otelauta) avautuu edelleen
 * Etsi sävelet otelaudalta -harjoitukseen. Kuunteluharjoitukset avataan sen alta. Moodivertailu
 * on sama komponentti kuin Skaalat ja moodit -polulla, ei kopio.
 */
export function EarTrack({ onBack }: { onBack: () => void }) {
  const [exercise, setExercise] = useState<EarExercise>('notes');
  const back = () => setExercise('notes');
  if (exercise === 'locate') return <EarLocateJourney onBack={back} backLabel="← Sävelkorva ja otelauta" />;
  if (exercise === 'modes') return <ModeCompareJourney onBack={back} backLabel="← Sävelkorva ja otelauta" />;
  return <NoteJourney onBack={onBack}>
    <div className="journey-below ear-more">
      <h3>Kuuntele korvalla</h3>
      <div className="learning-grid">
        <button type="button" className="learning-card" onClick={() => setExercise('locate')}>
          <span className="learning-number" aria-hidden="true">02</span>
          <span className="learning-card-body">
            <strong>Kuuntele ja paikanna sävel</strong>
            <span>Kuule sävel ja napauta, millä nauhalla se soi. Ohut e-, B- ja G-kieli, nauhat 0–5.</span>
          </span>
          <span className="learning-arrow" aria-hidden="true">→</span>
        </button>
        <button type="button" className="learning-card" onClick={() => setExercise('modes')}>
          <span className="learning-number" aria-hidden="true">03</span>
          <span className="learning-card-body">
            <strong>Kuuntele moodien ero</strong>
            <span>A-aiolinen ja A-doorinen, C-jooninen ja C-miksolyydinen: sama toonika, yksi eri sävelaste.</span>
            <small>Sama harjoitus löytyy myös Skaalat ja moodit -polulta</small>
          </span>
          <span className="learning-arrow" aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  </NoteJourney>;
}
