import { useEffect, useRef, useState, type RefObject } from 'react';
import type { AlignmentMeasurement, OutputSnapshot } from './mittaus';
import {
  CONFIDENCE, FLASH_MS, MIN_FLASHES, OUTPUTS, REPEATS, SLIDER, flashesBetween, loadTrials, median, nextStep, randomStart,
  saveTrials, seekTarget, snapOffset, type Confidence, type Situation, type Trial,
} from './nayttoaani';

/** Soiva jakso: uuden moottorin aloitus, joka on alkanut soida (KaksiraitaTesti.tsx). */
export interface PlayingSegment { request: number; phase: string; startedMs: number; target: number }

interface Props {
  backing: RefObject<HTMLAudioElement | null>;
  /** Merkkiäänten alkukohdat sekunteina. */
  beeps: number[];
  segment: PlayingSegment | null;
  playing: boolean;
  filesReady: boolean;
  measurements: AlignmentMeasurement[];
  pageLoadId: string;
  onToggle(): void;
  onSeek(seconds: number): void;
  record(event: string, details?: Record<string, unknown>): void;
  outputNow(): OutputSnapshot | null;
  outputEstimate(item: AlignmentMeasurement): number | null;
}

const OUTPUT_KEY = 'musiikin-kartta:kaksiraitatesti:nayttoaani:ulostulo';
const clock = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
const situationOf = (phase: string): Situation | null => (phase === 'käynnistys' || phase === 'jatko' || phase === 'kelaus' ? phase : null);

function readOutput(): string {
  try { return sessionStorage.getItem(OUTPUT_KEY) ?? OUTPUTS[0]; } catch { return OUTPUTS[0]; }
}

/**
 * H4-säätökoe (MK-20261119-02). Välähdys piirretään suoraan DOM-elementtiin requestAnimationFramessa:
 * Reactin uudelleenpiirto ei viivästä sitä. Kokeet säilyvät sivun uudelleenlatauksen yli (sessionStorage),
 * koska alkuperäinen käynnistys vaatii uuden sivun.
 */
export function NayttoAaniKoe(props: Props) {
  const { backing, beeps, segment, playing } = props;
  const [offset, setOffset] = useState(() => randomStart());
  const [sliderStart, setSliderStart] = useState(offset);
  const [output, setOutput] = useState(readOutput);
  const [confidence, setConfidence] = useState<Confidence>('melko varma');
  const [note, setNote] = useState('');
  const [trials, setTrials] = useState<Trial[]>(() => loadTrials());
  const [flashes, setFlashes] = useState(0);
  const [saved, setSaved] = useState('');
  const flashRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(offset);
  offsetRef.current = offset;
  const stats = useRef({ flashes: 0, intervals: [] as number[], stale: 0, frames: 0 });

  useEffect(() => { try { sessionStorage.setItem(OUTPUT_KEY, output); } catch { /* yksityinen tila */ } }, [output]);

  // Välähdys: currentTime luetaan joka piirtokerralla. Uusi jakso nollaa laskurit ja edellisen kohdan.
  useEffect(() => {
    stats.current = { flashes: 0, intervals: [], stale: 0, frames: 0 };
    setFlashes(0);
    const element = backing.current;
    const box = flashRef.current;
    if (!playing || !segment || !element || !box) { if (box) box.dataset.on = 'ei'; return; }
    let previous = element.currentTime;
    let lastFrame: number | null = null;
    let offUntil = 0;
    let handle = requestAnimationFrame(function frame(now) {
      const current = element.currentTime;
      const s = stats.current;
      if (lastFrame !== null) {
        s.frames++;
        if (s.intervals.length < 2000) s.intervals.push(now - lastFrame);
        if (current === previous) s.stale++;
      }
      lastFrame = now;
      if (flashesBetween(beeps, offsetRef.current, previous, current) > 0) {
        box.dataset.on = 'kyllä';
        offUntil = now + FLASH_MS;
        s.flashes++;
        box.dataset.flashes = String(s.flashes);
        if (s.flashes <= MIN_FLASHES) setFlashes(s.flashes);
      } else if (now >= offUntil && box.dataset.on === 'kyllä') {
        box.dataset.on = 'ei';
      }
      previous = current;
      handle = requestAnimationFrame(frame);
    });
    return () => { cancelAnimationFrame(handle); box.dataset.on = 'ei'; };
  }, [playing, segment, backing, beeps]);

  const step = nextStep(trials, output);
  const situation = segment ? situationOf(segment.phase) : null;
  const canSave = playing && segment !== null && situation !== null && flashes >= MIN_FLASHES;
  const mismatch = situation !== null && step.situation !== null && situation !== step.situation;

  function save() {
    if (!canSave || !segment || !situation) return;
    const element = backing.current;
    const now = performance.now();
    const inside = props.measurements.filter(item => item.request === segment.request && item.captureMs >= segment.startedMs && item.captureMs <= now);
    const track = (name: 'tausta' | 'kitara') => {
      const values = inside.flatMap(item => item.tracks.filter(entry => entry.name === name && entry.reliable && entry.mediaMinusRenderedMs !== null)
        .map(entry => entry.mediaMinusRenderedMs!));
      return { median: median(values), count: values.length };
    };
    const reliable = inside.filter(item => item.reliable && item.renderedDiffMs !== null).map(item => item.renderedDiffMs!);
    const estimates = inside.map(props.outputEstimate).filter((value): value is number => value !== null);
    const s = stats.current;
    const trial: Trial = {
      id: `${props.pageLoadId}-${trials.length + 1}`, situation, offsetMs: offset, sliderStartMs: sliderStart,
      adjustMs: Math.round(now - segment.startedMs), savedAt: new Date().toISOString(), pageLoadId: props.pageLoadId,
      request: segment.request, sameOperation: trials.some(item => item.pageLoadId === props.pageLoadId && item.request === segment.request),
      output, confidence, note: note.trim(), mediaTime: element?.currentTime ?? NaN, operationTarget: segment.target, flashes: s.flashes,
      frames: { count: s.frames, medianIntervalMs: median(s.intervals), staleShare: s.frames ? s.stale / s.frames : null },
      mediaMinusRendered: { tausta: track('tausta'), kitara: track('kitara') },
      renderedDiffMedianMs: median(reliable),
      outputEstimateMs: median(estimates) ?? (() => { const out = props.outputNow(); return out?.outputLatency ? out.outputLatency * 1000 : null; })(),
      userAgent: navigator.userAgent,
    };
    const next = [...trials, trial];
    const stored = saveTrials(next);
    setTrials(next);
    props.record('nayttoaani-tallennus', { ...trial, stored });
    setSaved(`Tallennettu: ${situation}, d = ${offset} ms${trial.sameOperation ? ' (sama jakso kuin edellinen, ei lasketa uudeksi operaatioksi)' : ''}${stored ? '' : '. Huom.: selain ei salli tallennusta, joten kopioi raportti ennen sivun uudelleenlatausta.'}`);
    const start = randomStart();
    setOffset(start);
    setSliderStart(start);
    setNote('');
  }

  function reset() {
    if (!window.confirm('Poistetaanko kaikki tämän välilehden säätökokeet?')) return;
    saveTrials([]);
    setTrials([]);
    setSaved('');
    props.record('nayttoaani-nollaus', {});
  }

  const instruction = step.done ? `Valmis: ${REPEATS} operaatiota kussakin tilanteessa. Paina Tauko ja kopioi raportti.`
    : step.situation === 'käynnistys'
      ? (situation === 'käynnistys' && playing && !savedFor(segment) ? 'Säädä ja tallenna.' : started() ? 'Lataa sivu uudelleen, paina ▶ Soita, säädä ja tallenna.' : 'Paina ▶ Soita, säädä ja tallenna.')
      : step.situation === 'jatko'
        ? (situation === 'jatko' && playing && !savedFor(segment) ? 'Säädä ja tallenna.' : 'Paina ■ Tauko, odota noin 2 s, paina ▶ Soita, säädä ja tallenna.')
        : (situation === 'kelaus' && playing && !savedFor(segment) ? 'Säädä ja tallenna.' : `Paina Siirry kohtaan ${clock(seekTarget(step.cycle))}, säädä ja tallenna.`);

  function started() { return segment !== null || trials.some(item => item.pageLoadId === props.pageLoadId); }
  function savedFor(current: PlayingSegment | null) {
    return current !== null && trials.some(item => item.pageLoadId === props.pageLoadId && item.request === current.request);
  }

  return <section className="av" aria-label="Näyttö–ääni-säätökoe" data-situation={situation ?? ''}>
    <h2>H4: näyttö–ääni-säätökoe</h2>
    <p className="av-step" data-next={step.situation ?? 'valmis'}>
      <strong>{step.done ? 'Valmis' : `${step.situation} ${step.cycle}/${REPEATS}`}</strong> · {instruction}
    </p>
    <div className="av-flash" ref={flashRef} data-on="ei" data-flashes="0" aria-hidden="true" />
    <label className="av-slider">
      <span>Välähdyksen siirto <output data-offset={offset}>{offset > 0 ? '+' : ''}{offset} ms</output></span>
      <input type="range" min={SLIDER.min} max={SLIDER.max} step={SLIDER.step} value={offset}
        aria-label="Välähdyksen siirto millisekunteina" onChange={event => setOffset(snapOffset(Number(event.target.value)))} />
    </label>
    <p className="av-fine">
      <button type="button" onClick={() => setOffset(value => snapOffset(value - 50))}>−50</button>
      <button type="button" onClick={() => setOffset(value => snapOffset(value - 10))}>−10</button>
      <button type="button" onClick={() => setOffset(value => snapOffset(value + 10))}>+10</button>
      <button type="button" onClick={() => setOffset(value => snapOffset(value + 50))}>+50</button>
    </p>
    <p className="av-save">
      <label>Varmuus{' '}
        <select value={confidence} onChange={event => setConfidence(event.target.value as Confidence)}>
          {CONFIDENCE.map(level => <option key={level}>{level}</option>)}
        </select>
      </label>{' '}
      <label>Huomio <input type="text" value={note} maxLength={200} onChange={event => setNote(event.target.value)} /></label>
    </p>
    <button type="button" className="play av-store" onClick={save} disabled={!canSave}>Samaan aikaan – tallenna</button>
    {mismatch && <p className="hint" role="status">Nykyinen jakso on {situation}, protokollan seuraava on {step.situation}. Tallennus kirjataan todellisena tilanteena ({situation}).</p>}
    {saved && <p role="status" className="av-saved">{saved}</p>}
    <p className="hint">Siirrä välähdystä, kunnes se ja naksahdus tuntuvat tapahtuvan samaan aikaan. Pienempi arvo = välähdys aiemmin.</p>
    <p className="av-ops">
      <button type="button" className="play" onClick={props.onToggle} disabled={!playing && !props.filesReady}>{playing ? '■ Tauko' : '▶ Soita'}</button>
      <button type="button" onClick={() => props.onSeek(seekTarget(step.cycle))} disabled={!props.filesReady}>Siirry kohtaan {clock(seekTarget(step.cycle))}</button>
      <button type="button" onClick={() => window.location.reload()}>Lataa sivu uudelleen</button>
    </p>
    <p className="av-conditions">
      <label>Ulostulo{' '}
        <select value={output} onChange={event => setOutput(event.target.value)}>
          {OUTPUTS.map(item => <option key={item}>{item}</option>)}
        </select>
      </label>
      {' '}· Tallennettu: käynnistys {step.counts.käynnistys}, jatko {step.counts.jatko}, kelaus {step.counts.kelaus} / {REPEATS}
      {' '}<button type="button" onClick={reset} disabled={!trials.length}>Aloita alusta</button>
    </p>
    {trials.length > 0 && <ol className="av-trials" aria-label="Tallennetut säätökokeet">
      {trials.slice(-6).map(item => <li key={item.id}>{item.situation}: d = {item.offsetMs} ms ({item.confidence}{item.sameOperation ? ', sama jakso' : ''})</li>)}
    </ol>}
  </section>;
}
