import { useState } from 'react';
import { ScaleJourney } from './ScaleJourney';
import { ModeJourney } from './ModeJourney';

type ScaleTrack = 'pentatonic' | 'modes';

/** Molemmat oppimispolut samassa osiossa, mutta itsenäiset etenemistiedot. */
export function ScaleTracks({ onBack }: { onBack: () => void }) {
  const [selected, setSelected] = useState<ScaleTrack | null>(null);
  if (selected === 'pentatonic') return <ScaleJourney onBack={() => setSelected(null)} />;
  if (selected === 'modes') return <ModeJourney onBack={() => setSelected(null)} />;

  return <section className="scale-tracks" aria-labelledby="scale-tracks-title">
    <button type="button" className="back-link" onClick={onBack}>← Oppimispolut</button>
    <p className="eyebrow">SKAALAT JA MOODIT</p>
    <h2 id="scale-tracks-title">Mitä haluat opetella?</h2>
    <p className="learning-lead">Valitse pentatoniset tai moodit. Voit palata valintaan milloin tahansa. Kummankin polun eteneminen tallentuu erikseen.</p>
    <div className="learning-grid">
      <button type="button" className="learning-card" onClick={() => setSelected('pentatonic')}>
        <span className="learning-number" aria-hidden="true">01</span>
        <span className="learning-card-body">
          <strong>Pentatoniset</strong>
          <span>A-mollipentatoninen: positiot 1–3, niiden yhdistäminen, kuuntelu ja improvisointi.</span>
          <small>Jatka nykyistä harjoittelua</small>
        </span>
        <span className="learning-arrow" aria-hidden="true">→</span>
      </button>
      <button type="button" className="learning-card" onClick={() => setSelected('modes')}>
        <span className="learning-number" aria-hidden="true">02</span>
        <span className="learning-card-body">
          <strong>Moodit</strong>
          <span>Opettele tunnistamaan sävelkeskus, soittamaan yksi oktaavi ja improvisoimaan.</span>
          <small>Aloita C-joonisesta; seuraavaksi A-aiolinen</small>
        </span>
        <span className="learning-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  </section>;
}
