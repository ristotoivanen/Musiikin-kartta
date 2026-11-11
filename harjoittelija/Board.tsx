import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { fretName, music, note, positionKey, positions, stringName, type Position } from './music';
import type { Area, Mark } from './engine';
import { accuracy, averageMs, proficiency, type Stat } from './storage';

const INLAYS = new Set([3, 5, 7, 9, 15, 17, 19, 21]);
const MARK_WORD: Record<Mark['kind'], string> = { answer: 'vastaus', anchor: 'apupiste', shape: 'muodon sävel', wrong: 'valintasi, ei oikea' };

function FretHeader({ min, max }: { min: number; max: number }) {
  return <thead><tr><th scope="col">Kieli</th>{Array.from({ length: max - min + 1 }, (_, i) => {
    const fret = min + i;
    return <th key={fret} scope="col" className={fret === 0 ? 'open-fret' : ''}>
      {fret}{fret > 0 && fret % 12 === 0 ? <span className="inlay" aria-hidden="true">●●</span> : INLAYS.has(fret) ? <span className="inlay" aria-hidden="true">●</span> : null}
    </th>;
  })}</tr></thead>;
}

/**
 * Vastausotelauta. Semanttinen taulukko: rivit ovat kielet (ohut E ylimpänä, kuten tabulatuurissa),
 * sarakkeet nauhat. Nuolinäppäimet, Home ja End siirtävät kohdistusta, Enter vastaa.
 */
export function Board({ area, marks = [], disabled = false, onAnswer, caption = 'Otelauta' }:
  { area: Area; marks?: Mark[]; disabled?: boolean; onAnswer?: (p: Position) => void; caption?: string }) {
  const columns = { '--cols': area.max - area.min + 1 } as CSSProperties;
  const { strings, min, max } = area;
  const [cursor, setCursor] = useState({ string: Math.min(...strings), fret: min });
  const viewport = useRef<HTMLDivElement>(null);
  const byKey = new Map(marks.map(m => [positionKey(m), m]));
  const shown = marks.map(m => `${positionKey(m)}${m.kind}`).join(',');
  useEffect(() => {
    // Tuo vihje tai vastaus näkyviin vierittämällä vain otelautaa, ei koko sivua.
    const box = viewport.current, target = box?.querySelector<HTMLElement>('.target, .anchor');
    if (box && target) box.scrollLeft += target.getBoundingClientRect().left - box.getBoundingClientRect().left - box.clientWidth / 2 + target.clientWidth / 2;
  }, [shown]);
  const focusable = strings.includes(cursor.string) && cursor.fret >= min && cursor.fret <= max ? cursor : { string: Math.min(...strings), fret: min };
  return <div ref={viewport} className="fret-scroll" tabIndex={0} role="region" aria-label="Otelaudan vastausruudukko">
    <table className="practice-board" style={columns}><caption>{caption} · ohut E ylimpänä</caption>
      <FretHeader min={min} max={max} />
      <tbody>{music.OPEN_PITCHES.map((_, string) => <tr key={string} className={strings.includes(string) ? '' : 'unused'}>
        <th scope="row">{string + 1} · {stringName[string]}</th>
        {positions([string], min, max).map(p => {
          const m = byKey.get(positionKey(p));
          const place = `${stringName[string]}-kieli, ${fretName(p.fret)}`;
          return <td key={p.fret} className={`${p.fret === 0 ? 'open-fret ' : ''}${m ? (m.kind === 'answer' ? 'target' : m.kind) : ''}`}>
            <button type="button" data-string={string} data-fret={p.fret}
              tabIndex={focusable.string === string && focusable.fret === p.fret ? 0 : -1} onFocus={() => setCursor(p)}
              onKeyDown={event => {
                if (!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(event.key)) return;
                event.preventDefault();
                const sorted = [...strings].sort((a, b) => a - b), row = sorted.indexOf(string);
                const nextString = event.key === 'ArrowUp' ? sorted[Math.max(0, row - 1)] : event.key === 'ArrowDown' ? sorted[Math.min(sorted.length - 1, row + 1)] : string;
                const nextFret = event.key === 'Home' ? min : event.key === 'End' ? max : Math.max(min, Math.min(max, p.fret + (event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0)));
                event.currentTarget.closest('table')?.querySelector<HTMLButtonElement>(`button[data-string="${nextString}"][data-fret="${nextFret}"]`)?.focus();
              }}
              disabled={disabled || !strings.includes(string)}
              aria-label={place + (m ? `, ${MARK_WORD[m.kind]}${m.label ? ' ' + m.label : ''}` : '')}
              onClick={() => onAnswer?.(p)}>{m ? <span className="dot">{m.label || '●'}</span> : null}</button>
          </td>;
        })}</tr>)}</tbody></table>
  </div>;
}

/** Otelaudan sävelharjoituksen osaamiskartta: itsenäiset vastaukset valitulla vastaus- ja tarkistustavalla. */
export function MasteryMap({ area, stats, input, check, flats }: { area: Area; stats: Record<string, Stat>; input: string; check: string; flats: boolean }) {
  const { strings, min, max } = area;
  const prefix = `${input}:${check}:solo:notes:`;
  return <div className="fret-scroll" tabIndex={0} role="region" aria-label="Harjoiteltujen kohteiden osaamiskartta">
    <table className="practice-board mastery" style={{ '--cols': max - min + 1 } as CSSProperties}><caption>Osaamiskartta · ohut E ylimpänä</caption>
      <FretHeader min={min} max={max} />
      <tbody>{music.OPEN_PITCHES.map((_, string) => <tr key={string} className={strings.includes(string) ? '' : 'unused'}>
        <th scope="row">{string + 1} · {stringName[string]}</th>
        {positions([string], min, max).map(p => {
          const stat = Object.hasOwn(stats, prefix + positionKey(p)) ? stats[prefix + positionKey(p)] : undefined;
          const score = proficiency(stat);
          const level = score === null ? 'unseen' : stat!.attempts < 3 ? 'few' : score >= .8 ? 'strong' : score >= .5 ? 'growing' : 'weak';
          const place = `${stringName[string]}-kieli, ${fretName(p.fret)}, ${note(p.midi, flats)}`;
          const summary = stat ? `${Math.round(score! * 100)} %, ${stat.correct}/${stat.attempts} heti oikein, viime aikoina ${Math.round(accuracy(stat) * 100)} % ja ${(averageMs(stat) / 1000).toFixed(1)} s` : 'ei vastauksia';
          return <td key={p.fret} className={`${p.fret === 0 ? 'open-fret ' : ''}${level}`} title={`${place}: ${summary}`}>
            <span aria-hidden="true">{score === null ? '·' : stat!.attempts < 3 ? '?' : Math.round(score * 100)}</span>
            <span className="sr-only">{place}: {summary}</span>
          </td>;
        })}</tr>)}</tbody></table>
  </div>;
}
