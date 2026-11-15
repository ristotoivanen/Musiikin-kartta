/** Molempien käyttötapojen yhteiset näkymäosat: sijaintipolku, tilan tunniste, pallukat ja otelauta. */
import type { ReactNode } from 'react';
import { Board } from '../harjoittelija/Board';
import type { Area, Mark } from '../harjoittelija/engine';
import { positionKey, stringName, type Position } from '../harjoittelija/music';
import { MODES, TRAINER_MENU, modeHref, type Mode } from './modes';
import { ALL_STRINGS, FRET_MAX, FRET_MIN, type Riff } from './riffs';

/** Virtuaaliotelauta: aina koko kuusikielinen otelauta, nauhat 0–5. */
export const BOARD_AREA: Area = { strings: ALL_STRINGS, min: FRET_MIN, max: FRET_MAX, fixed: '' };

/** Sijainti: Harjoitusvalikko › Riffikaiku › käyttötapa. Paluu Kitaraharjoittelijaan on aina ensimmäisenä. */
export function Breadcrumbs({ mode }: { mode: Mode | null }) {
  return <nav className="riff-crumbs" aria-label="Sijainti">
    <a className="riff-back" href={TRAINER_MENU}><span aria-hidden="true">←</span> Takaisin harjoitusvalikkoon</a>
    {mode && <ol>
      <li><a href={modeHref(null)}>Riffikaiku</a></li>
      <li aria-current="page">{MODES[mode].tag}</li>
    </ol>}
  </nav>;
}

/** Käyttötavan tunniste jokaisen näkymän yläreunassa: käyttäjä näkee aina, onko hän harjoituksessa vai pelissä. */
export function ModeTag({ mode }: { mode: Mode }) {
  return <p className={`riff-mode-tag ${mode}`} data-testid="mode-tag">{MODES[mode].title}</p>;
}

export type Slot = { cls: string; content: ReactNode; symbol?: string; label: string; mark?: string };
/** Pallukkarivi: väri + symboli + tekstivastine. */
export function NoteSlots({ slots, label }: { slots: Slot[]; label: string }) {
  return <ol className="riff-slots" aria-label={label} data-testid="slots">
    {slots.map((slot, i) => <li key={i} className={slot.cls} data-mark={slot.mark} aria-label={slot.label}>
      <span className="slot-note" aria-hidden="true">{slot.content}</span>
      {slot.symbol && <span className="slot-symbol" aria-hidden="true">{slot.symbol}</span>}
    </li>)}
  </ol>;
}

/** Riffin ehdotetut otelautapaikat järjestysnumeroin. Sama paikka voi toistua (A–A), joten numerot yhdistetään. */
export function riffMarks(riff: Riff, playing: number | null, show: (index: number) => boolean = () => true, label: (index: number) => string = i => String(i + 1)): Mark[] {
  const byKey = new Map<string, Mark>();
  riff.spots.forEach((spot, i) => {
    if (!show(i)) return;
    const p = { ...spot, midi: riff.midi[i] };
    const key = positionKey(p), prev = byKey.get(key);
    byKey.set(key, { ...p, kind: playing === i ? 'playing' : prev?.kind ?? 'answer', label: prev ? `${prev.label}·${label(i)}` : label(i) });
  });
  return [...byKey.values()];
}

/** Kielen järjestysluku sanallisesti: 1 = ohuin, 2 = toiseksi ohuin, … */
const ORDINAL = ['ohuin kieli', 'toiseksi ohuin', 'kolmanneksi ohuin', 'kolmanneksi paksuin', 'toiseksi paksuin', 'paksuin kieli'];

/** Otelauta harjoituskielen korostuksella. Muut kielet näkyvät himmeämpinä ja ovat soitettavissa. */
export function RiffBoard({ focus, marks, disabled, onAnswer, caption }:
  { focus: number[]; marks: Mark[]; disabled: boolean; onAnswer?: (p: Position) => void; caption: string }) {
  const partial = focus.length < ALL_STRINGS.length;
  return <div className={`riff-board ${partial ? 'has-focus' : ''} ${focus.map(n => `focus-s${n}`).join(' ')}`} data-testid="board">
    {partial && <p className="riff-focus-legend" data-testid="focus-legend">
      <span className="swatch" aria-hidden="true" /> Harjoituskieli: {focus.map(n => `${stringName[n]}-kieli`).join(' ja ')}{focus.length === 1 ? ` (${ORDINAL[focus[0]]})` : ''}
    </p>}
    <Board area={BOARD_AREA} marks={marks} disabled={disabled} onAnswer={onAnswer} caption={caption} />
  </div>;
}
