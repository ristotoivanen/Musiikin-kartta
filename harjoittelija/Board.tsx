import { useEffect, useRef, useState } from 'react';
import { music, note, positionKey, positions, stringName, type Position } from './music';
import { proficiency, type Result, type Stat } from './storage';
export function Board({ min, max, strings, targets = [], contextTargets = [], labels = false, disabled = false, answer, stats, currentInput, currentCheck }:
  { min: number; max: number; strings: number[]; targets?: Position[]; contextTargets?: Position[]; labels?: boolean; disabled?: boolean;
    answer?: (p: Position) => void; stats?: Record<string,Stat>; currentInput?: string; currentCheck?: string }) {
  const [cursor,setCursor] = useState({string:Math.min(...strings),fret:min});
  const viewport = useRef<HTMLDivElement>(null);
  const targetKeys = targets.map(positionKey).join(',');
  useEffect(() => {
    const box=viewport.current, target=box?.querySelector<HTMLElement>('.target');
    if (box && target) box.scrollLeft += target.getBoundingClientRect().left-box.getBoundingClientRect().left-box.clientWidth/2+target.clientWidth/2;
  },[targetKeys]);
  function statFor(p: Position): Stat | undefined {
    if (!stats) return undefined;
    const suffix = `:${positionKey(p)}`;
    const rows = Object.entries(stats).filter(([k]) => k.startsWith(`${currentInput}:${currentCheck}:solo:notes:`) && k.endsWith(suffix)).map(([,v]) => v);
    if (!rows.length) return undefined;
    return rows.reduce((a,b) => ({ attempts:a.attempts+b.attempts,correct:a.correct+b.correct,errors:a.errors+b.errors,totalMs:a.totalMs+b.totalMs,lastSeen:Math.max(a.lastSeen,b.lastSeen) }));
  }
  return <div ref={viewport} className="fret-scroll" tabIndex={0} role="region" aria-label={stats ? 'Harjoiteltujen kohteiden osaamiskartta' : 'Otelaudan vastausruudukko'}>
    <table className="practice-board"><caption>{stats ? 'Osaamiskartta' : 'Otelaudan nauhat'} · ohut E ylimpänä</caption><thead><tr><th scope="col">Kieli</th>{Array.from({length:max-min+1},(_,i) => <th key={i} scope="col">{min+i}</th>)}</tr></thead>
      <tbody>{music.OPEN_PITCHES.map((_,string) => <tr key={string}><th scope="row">{string+1} · {stringName[string]}</th>{positions([string],min,max).map(p => {
        const selected = targets.some(t => positionKey(t) === positionKey(p));
        const context = contextTargets.some(t => positionKey(t) === positionKey(p));
        const stat = statFor(p), score = proficiency(stat);
        const mastery = score === null ? 'unseen' : stat!.attempts < 3 ? 'few' : score >= .8 ? 'strong' : score >= .5 ? 'growing' : 'weak';
        const label = `${stringName[string]}-kieli, nauha ${p.fret}`;
        const summary = stat ? `${Math.round(score!*100)} %, ${stat.correct}/${stat.attempts} heti oikein, keskimäärin ${(stat.totalMs/stat.attempts/1000).toFixed(1)} s` : 'ei havaintoja';
        return <td key={p.fret} className={`${selected ? 'target' : context ? 'context-note' : ''} ${stats ? mastery : ''}`}>
          {stats ? <span tabIndex={0} title={`${label}: ${summary}`} aria-label={`${label}: ${summary}`}>{score === null ? '·' : stat!.attempts < 3 ? '?' : Math.round(score*100)}</span> : <button type="button" data-string={string} data-fret={p.fret}
            tabIndex={cursor.string === string && cursor.fret === p.fret ? 0 : -1} onFocus={() => setCursor(p)}
            onKeyDown={event => {
              if (!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(event.key)) return;
              event.preventDefault();
              const sorted = [...strings].sort((a,b)=>a-b), row = sorted.indexOf(string);
              const nextString = event.key === 'ArrowUp' ? sorted[Math.max(0,row-1)] : event.key === 'ArrowDown' ? sorted[Math.min(sorted.length-1,row+1)] : string;
              const nextFret = event.key === 'Home' ? min : event.key === 'End' ? max : Math.max(min,Math.min(max,p.fret+(event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0)));
              event.currentTarget.closest('table')?.querySelector<HTMLButtonElement>(`button[data-string="${nextString}"][data-fret="${nextFret}"]`)?.focus();
            }}
            disabled={disabled || !strings.includes(string)} aria-label={label + (labels && (selected || context) ? `, ${note(p.midi)}` : '')} onClick={() => answer?.(p)}>{selected || context ? labels ? note(p.midi) : '●' : '·'}</button>}
        </td>;
      })}</tr>)}</tbody></table>
  </div>;
}
export function resultSummary(results: Result[]) {
  const count = results.length;
  return count ? `${count} vastattua · ${results.filter(r => r.first).length}/${count} heti oikein · keskimäärin ${(results.reduce((n,r) => n+r.ms,0)/count/1000).toFixed(1)} s` : 'Ei vielä vastattuja kysymyksiä.';
}
