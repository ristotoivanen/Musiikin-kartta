import { useEffect, useRef, useState } from 'react';
import { music } from './music';
import { SONG_KEY_ROOT, SONG_SCALES, songScaleNotes, type SongScaleId } from './songScaleData';

const FRETS = 17;

/** Kappaleeseen sopivat asteikot Otelautakartan otelaudalla. Ei vaikuta äänen toistoon. */
export function SongScales({ open }: { open: boolean }) {
  const [scaleId, setScaleId] = useState<SongScaleId>('mp');
  const [box, setBox] = useState(0);
  const boardRef = useRef<HTMLDivElement>(null);
  const choice = SONG_SCALES.find(item => item.id === scaleId) ?? SONG_SCALES[0];
  const boxCount = choice.system === 'pentatonic' ? 5 : 7;
  const boxes = box ? music.fingeringBoxes(SONG_KEY_ROOT, choice.scale, choice.system, [box], FRETS) : [];
  const svg = music.renderBoard(SONG_KEY_ROOT, choice.scale, FRETS, {
    automatic: true, boxes, label: choice.title + (box ? ', boksi ' + box : ''),
  });

  // Tuo valittu boksi näkyviin kapealla näytöllä, kuten Otelautakartassa.
  useEffect(() => {
    const board = boardRef.current;
    if (!board || !open) return;
    if (box) music.revealPositions(board, '.box-highlight');
    else board.scrollLeft = 0;
  }, [svg, box, open]);

  return <section className="song-scales-panel" aria-label="Kappaleeseen sopivat asteikot">
    <div className="song-scale-controls">
      <label>Asteikko
        <select value={scaleId} onChange={event => {
          const next = SONG_SCALES.find(item => item.id === event.target.value) ?? SONG_SCALES[0];
          setScaleId(next.id);
          if (box > (next.system === 'pentatonic' ? 5 : 7)) setBox(0);
        }}>
          {SONG_SCALES.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
        </select>
      </label>
      <label>{choice.system === 'pentatonic' ? 'Pentatoninen boksi' : 'Sormitus (3 säveltä kielellä)'}
        <select value={box} onChange={event => setBox(Number(event.target.value))}>
          <option value={0}>Koko otelauta</option>
          {Array.from({ length: boxCount }, (_, index) =>
            <option key={index + 1} value={index + 1}>Boksi {index + 1}</option>)}
        </select>
      </label>
    </div>
    <p className="song-scale-notes"><strong>{choice.title}</strong>
      <span>{songScaleNotes(choice.scale).join(' · ')}</span></p>
    <p className="song-scale-note">{choice.note}</p>
    <div className="song-scale-board" ref={boardRef} role="region" tabIndex={0}
      aria-label="Asteikko otelaudalla" dangerouslySetInnerHTML={{ __html: svg }} />
    <div className="legend">
      <span><span className="swatch" style={{ background: '#4b2fd6', border: '2px solid #fff' }} />Juurisävel G (1)</span>
      <span><span className="swatch" style={{ background: '#6d4aff' }} />Asteikon sävel</span>
      {choice.scale.add.length > 0 && <span><span className="swatch" style={{ background: '#f0a13c' }} />
        {choice.id === 'blues' ? 'Bluessävel D♭ (♭5)' : 'Mollin lisäsävel'}</span>}
    </div>
  </section>;
}
