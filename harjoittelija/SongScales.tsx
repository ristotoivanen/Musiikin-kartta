import { useEffect, useRef, useState } from 'react';
import { music } from './music';
import {
  SONG_KEY_ROOT, SONG_SCALES, boxCount, songBoxes, songScaleNotes, type SongScale, type SongScaleId,
} from './songScaleData';

const FRETS = 17;
type System = SongScale['system'];

/** Kappaleeseen sopivat asteikot Otelautakartan otelaudalla. Ei vaikuta äänen toistoon. */
export function SongScales({ open }: { open: boolean }) {
  const [scaleId, setScaleId] = useState<SongScaleId>('mp');
  // Kuten Otelautakartassa: pentatonisilla bokseilla ja 3NPS-sormituksilla on omat valintansa,
  // joten asteikon vaihto (5 ↔ 7) ei jätä toisen järjestelmän valintoja voimaan.
  const [selected, setSelected] = useState<Record<System, number[]>>({ pentatonic: [], '3nps': [] });
  const [onlyBoxNotes, setOnlyBoxNotes] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);
  const choice = SONG_SCALES.find(item => item.id === scaleId) ?? SONG_SCALES[0];
  const numbers = selected[choice.system];
  const boxes = songBoxes(choice, numbers, FRETS);
  const usable = boxes.some(box => box.positions.length > 0);
  const svg = music.renderBoard(SONG_KEY_ROOT, choice.scale, FRETS, {
    automatic: true, boxes, onlyBoxNotes: usable && onlyBoxNotes,
    label: choice.title + (numbers.length ? ', ' + numbers.map(number => 'boksi ' + number).join(', ') : ''),
  });

  // Tuo yksittäinen valittu boksi näkyviin kapealla näytöllä, kuten Otelautakartassa.
  useEffect(() => {
    const board = boardRef.current;
    if (!board || !open) return;
    if (boxes.length === 1) music.revealPositions(board, '.box-highlight');
  }, [svg, open]);

  function toggleBox(number: number, on: boolean) {
    setSelected(prev => ({ ...prev, [choice.system]: on
      ? [...prev[choice.system], number].sort((a, b) => a - b)
      : prev[choice.system].filter(item => item !== number) }));
  }

  return <section className="song-scales-panel" aria-label="Kappaleeseen sopivat asteikot">
    <div className="song-scale-controls">
      <label>Asteikko
        <select value={scaleId} onChange={event => setScaleId(event.target.value as SongScaleId)}>
          {SONG_SCALES.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
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

    <details className="song-box-settings" open={settingsOpen}>
      <summary onClick={event => { event.preventDefault(); setSettingsOpen(value => !value); }}>
        Sormitusboksit ja näyttöasetukset
      </summary>
      <p className="song-box-system">{choice.system === 'pentatonic'
        ? 'Pentatoniset boksit (5)' : '3NPS: kolme säveltä per kieli (7)'}</p>
      <div className="box-options" role="group" aria-label="Näytettävät sormitusboksit">
        {Array.from({ length: boxCount(choice.system) }, (_, index) => index + 1).map(number =>
          <label key={choice.system + number} className="box-toggle" data-box={number}>
            <input type="checkbox" value={number} checked={numbers.includes(number)}
              onChange={event => toggleBox(number, event.target.checked)} /> Boksi {number}
          </label>)}
      </div>
      <label className="box-toggle box-filter">
        <input type="checkbox" checked={usable && onlyBoxNotes} disabled={!usable}
          onChange={event => setOnlyBoxNotes(event.target.checked)} />
        Näytä vain valittujen boksien sävelet
      </label>
      <p className="tools-note">{usable
        ? 'Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet.'
        : 'Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita.'}</p>
    </details>
  </section>;
}
