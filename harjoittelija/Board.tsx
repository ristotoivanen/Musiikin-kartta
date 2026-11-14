import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { fretName, music, note, positionKey, positions, stringName, type Position } from './music';
import type { Area, Mark } from './engine';
import { accuracy, averageMs, proficiency, type Stat } from './storage';
import { useFollowScroll } from './followScroll';

const INLAYS = new Set([3, 5, 7, 9, 15, 17, 19, 21]);
const STRING_LABELS = ['e', 'B', 'G', 'D', 'A', 'E'];
/**
 * Kielen nimi kiinnitetyssä sarakkeessa. Kapealla näytöllä (style.css) näkyy vain kielen kirjain
 * (e, B, G, D, A, E), jotta otelaudalle jää tilaa. Järjestysnumero ja ”ohuin/paksuin” piilotetaan
 * silloin vain näkyvistä: rivin otsikon aria-label kertoo ruudunlukijalle kielen koko nimen.
 */
function StringLabel({ string }: { string: number }) {
  return <span className="string-label">
    <span><span className="string-number">{string + 1} · </span><strong>{STRING_LABELS[string]}</strong></span>
    {string === 0 ? <small>ohuin</small> : string === 5 ? <small>paksuin</small> : null}
  </span>;
}
const stringThickness = (string: number) =>
  ({ '--string-thickness': (1.25 + string * 0.45) + 'px' }) as CSSProperties;
const MARK_WORD: Record<Mark['kind'], string> = { answer: 'vastaus', anchor: 'apupiste', shape: 'muodon sävel', wrong: 'valintasi, ei oikea', playing: 'nyt soi' };

function FretHeader({ min, max }: { min: number; max: number }) {
  return <thead><tr><th scope="col"><span className="board-head-label">Kielet</span></th>{Array.from({ length: max - min + 1 }, (_, i) => {
    const fret = min + i;
    return <th key={fret} scope="col" className={fret === 0 ? 'open-fret' : ''}>
      {fret}{fret > 0 && fret % 12 === 0 ? <span className="inlay" aria-hidden="true">●●</span> : INLAYS.has(fret) ? <span className="inlay" aria-hidden="true">●</span> : null}
    </th>;
  })}</tr></thead>;
}

/**
 * Vastausotelauta. Semanttinen taulukko: rivit ovat kielet (ohut E ylimpänä, kuten tabulatuurissa),
 * sarakkeet nauhat. Nuolinäppäimet, Home ja End siirtävät kohdistusta, Enter vastaa.
 *
 * Kapealla näytöllä otelauta vierii sivusuunnassa. `follow` valitsee, mitä se tuo itse näkyviin:
 * - 'hints' (oletus, harjoitustehtävät): vastaus- tai apupiste keskitetään, kun ne muuttuvat.
 * - 'playing' (mallisoitot): otelauta alkaa alueen alusta ja seuraa soivaa säveltä vain tarvittaessa.
 *   Käyttäjän oma vieritys keskeyttää seurannan hetkeksi (followScroll.ts). `playback` on polun
 *   toistotila (esimerkiksi 'loop'); sen vaihtuminen uudeksi toistoksi palauttaa seurannan heti.
 */
export function Board({ area, marks = [], mutedStrings = [], disabled = false, onAnswer, caption = 'Otelauta', follow = 'hints', playback }:
  { area: Area; marks?: Mark[]; mutedStrings?: number[]; disabled?: boolean; onAnswer?: (p: Position) => void; caption?: string;
    follow?: 'hints' | 'playing'; playback?: string | boolean | null }) {
  const columns = { '--cols': area.max - area.min + 1 } as CSSProperties;
  const { strings, min, max } = area;
  const [cursor, setCursor] = useState({ string: Math.min(...strings), fret: min });
  const viewport = useRef<HTMLDivElement>(null);
  const byKey = new Map(marks.map(m => [positionKey(m), m]));
  const shown = marks.map(m => `${positionKey(m)}${m.kind}`).join(',');
  useEffect(() => {
    // Tuo vihje tai vastaus näkyviin vierittämällä vain otelautaa, ei koko sivua.
    if (follow !== 'hints') return;
    const box = viewport.current, target = box?.querySelector<HTMLElement>('.target, .anchor');
    if (box && target) box.scrollLeft += target.getBoundingClientRect().left - box.getBoundingClientRect().left - box.clientWidth / 2 + target.clientWidth / 2;
  }, [shown, follow]);
  // Mallisoitossa otelauta alkaa alueen alusta, kun alue vaihtuu, eikä hyppää kotisävelen kohdalle.
  useEffect(() => {
    if (follow === 'playing' && viewport.current) viewport.current.scrollLeft = 0;
  }, [follow, min, max]);
  const playing = marks.find(m => m.kind === 'playing');
  useFollowScroll(viewport, '.playing', playing ? positionKey(playing) : '', { stickySelector: 'tbody th', enabled: follow === 'playing', playback });
  // Kapealla näytöllä osa nauhoista jää vierityksen taakse: kerro, kummalla puolella niitä on.
  const [more, setMore] = useState({ left: false, right: false });
  useEffect(() => {
    const box = viewport.current;
    if (!box) return;
    const update = () => {
      const left = box.scrollLeft > 2, right = box.scrollLeft + box.clientWidth < box.scrollWidth - 2;
      setMore(prev => prev.left === left && prev.right === right ? prev : { left, right });
    };
    update();
    box.addEventListener('scroll', update, { passive: true });
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(update);
    observer?.observe(box);
    return () => { box.removeEventListener('scroll', update); observer?.disconnect(); };
  }, [shown, min, max]);
  const focusable = strings.includes(cursor.string) && cursor.fret >= min && cursor.fret <= max ? cursor : { string: Math.min(...strings), fret: min };
  return <div className={'fret-wrap' + (more.left ? ' more-left' : '') + (more.right ? ' more-right' : '')}>
    {(more.left || more.right) && <p className="fret-scroll-hint">
      {more.left && <span aria-hidden="true">← </span>}
      Vieritä otelautaa sivusuunnassa: nauhoja on lisää {more.left && more.right ? 'molemmilla puolilla' : more.right ? 'oikealla' : 'vasemmalla'}
      {more.right && <span aria-hidden="true"> →</span>}
    </p>}
    <div ref={viewport} className="fret-scroll" tabIndex={0} role="region" aria-label="Otelaudan vastausruudukko">
    <table className={'practice-board' + (disabled && !onAnswer ? ' display-only' : '')} style={columns}><caption>{caption} · ohut e ylhäällä, paksu E alhaalla</caption>
      <FretHeader min={min} max={max} />
      <tbody>{music.OPEN_PITCHES.map((_, string) => <tr key={string} className={strings.includes(string) ? '' : 'unused'} style={stringThickness(string)}>
        <th scope="row" aria-label={`${string + 1}. kieli: ${stringName[string]}${mutedStrings.includes(string) ? ', ei soiteta' : ''}`}>
          <StringLabel string={string} />
          {mutedStrings.includes(string) && <span className="string-muted" aria-hidden="true">×</span>}
        </th>
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
    </div>
  </div>;
}

/** Otelaudan sävelharjoituksen osaamiskartta: itsenäiset vastaukset valitulla vastaus- ja tarkistustavalla. */
export function MasteryMap({ area, stats, input, check, flats }: { area: Area; stats: Record<string, Stat>; input: string; check: string; flats: boolean }) {
  const { strings, min, max } = area;
  const prefix = `${input}:${check}:solo:notes:`;
  return <div className="fret-scroll" tabIndex={0} role="region" aria-label="Harjoiteltujen kohteiden osaamiskartta">
    <table className="practice-board mastery" style={{ '--cols': max - min + 1 } as CSSProperties}><caption>Osaamiskartta · ohut e ylhäällä, paksu E alhaalla</caption>
      <FretHeader min={min} max={max} />
      <tbody>{music.OPEN_PITCHES.map((_, string) => <tr key={string} className={strings.includes(string) ? '' : 'unused'} style={stringThickness(string)}>
        <th scope="row" aria-label={`${string + 1}. kieli: ${stringName[string]}`}><StringLabel string={string} /></th>
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
