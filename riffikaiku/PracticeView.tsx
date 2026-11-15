/** Riffiharjoitus – oikea kitara: harjoitusvalikko ja yhden riffin harjoittelu. */
import { useEffect, useRef, useState, useSyncExternalStore, type RefObject } from 'react';
import type { Mark } from '../harjoittelija/engine';
import type { Position } from '../harjoittelija/music';
import type { MicState } from './mic';
import { modeHref } from './modes';
import { MicBar, MicPanel } from './PracticeMic';
import { STEP_LABEL, StepContent, StepNav } from './PracticeSteps';
import type { PracticeState, RiffPractice } from './practice';
import { LEVELS, RIFFS, noteName, riffPlace } from './riffs';
import { Breadcrumbs, ModeTag, RiffBoard, riffMarks } from './ui';

/** Kohdistus siirtyy uuden näkymän otsikkoon, kun näkymä vaihtuu (ei ensimmäisellä latauksella). */
function useFocusOnChange(key: string, ref: RefObject<HTMLElement>) {
  const previous = useRef(key);
  useEffect(() => {
    if (previous.current !== key) ref.current?.focus();
    previous.current = key;
  }, [key, ref]);
}

function riffStatus(s: PracticeState, id: string) {
  const marked = id in s.progress.marked, heard = s.progress.heard[id] ?? 0;
  return { marked, heard, text: [marked ? 'harjoiteltu (itse kuitattu)' : '', heard ? `mikrofoni kuuli kokonaan ${heard} ${heard === 1 ? 'kerran' : 'kertaa'}` : ''].filter(Boolean).join(' · ') };
}

function PracticeHome({ s, m, practice, titleRef }: { s: PracticeState; m: MicState; practice: RiffPractice; titleRef: RefObject<HTMLHeadingElement> }) {
  const last = s.progress.last && riffPlace(s.progress.last.riff);
  const markedTotal = RIFFS.filter(r => r.id in s.progress.marked).length;
  const legacy = practice.legacyMicPasses();
  return <>
    <div className="intro riff-intro">
      <ModeTag mode="harjoitus" />
      <h1 id="riff-title" ref={titleRef} tabIndex={-1}>Opettele riffit omaan tahtiin</h1>
      <p>Harjoittele lyhyitä riffejä omalla kitaralla. Mikrofoni voi kertoa, mitkä sävelet se tunnisti, mutta harjoitella voi myös ilman sitä.
        Ei aikarajoja eikä virhepisteitä – siirry seuraavaan, kun olet valmis.</p>
    </div>
    <ol className="riff-process" aria-label="Näin harjoittelet">
      <li><strong>Valitse riffi</strong> alta.</li>
      <li><strong>Valmistele mikrofoni</strong> ja tarkista viritys, jos haluat palautetta (vapaaehtoinen).</li>
      <li><strong>Kuuntele</strong> malli, <strong>opettele</strong> sävelet ja otelautapaikat ja <strong>kokeile muistista</strong>.</li>
      <li><strong>Kuittaa riffi harjoitelluksi</strong>, kun se tuntuu sujuvan. Saman riffin voi harjoitella uudelleen milloin vain.</li>
    </ol>
    {last && <div className="riff-actions">
      <button type="button" className="primary" onClick={() => practice.continueLast()} data-testid="continue-practice">
        Jatka: {last.level.name} · {last.riff.title} ({STEP_LABEL[s.progress.last!.step]})</button>
    </div>}
    <MicBar m={m} practice={practice} />
    <h2>Harjoitukset</h2>
    <p className="riff-help" data-testid="practice-summary">Harjoiteltu {markedTotal}/{RIFFS.length} riffiä. Kaikki harjoitukset ovat auki: järjestystä ei tarvitse noudattaa.</p>
    {LEVELS.map(level => {
      const marked = level.riffs.filter(r => r.id in s.progress.marked).length;
      return <section key={level.number} className="riff-set" aria-labelledby={`riff-set-${level.number}`}>
        <h3 id={`riff-set-${level.number}`}>{level.name} – {level.title} <span className="riff-set-count">Harjoiteltu {marked}/{level.riffs.length}</span></h3>
        <ol className="riff-set-list">{level.riffs.map((r, i) => {
          const st = riffStatus(s, r.id);
          return <li key={r.id}>
            <button type="button" className={`riff-set-item${st.marked ? ' marked' : ''}`} onClick={() => practice.openRiff(r.id)}>
              <span className="riff-set-mark" aria-hidden="true">{st.marked ? '✓' : i + 1}</span>
              <span><strong>{r.title}</strong>{st.text && <small>{st.text}</small>}</span>
            </button>
          </li>;
        })}</ol>
      </section>;
    })}
    {legacy > 0 && <p className="riff-help" data-testid="legacy-mic">Aiemman version mikrofonipelin tulokset ovat tallessa ({legacy} läpäistyä riffiä).
      Niitä ei lasketa tämän harjoituksen kuittauksiksi.</p>}
    <p className="riff-help">Haluatko pelata ilman kitaraa? <a href={modeHref('peli')}>Riffikaiku-peli – virtuaalikitara</a>.</p>
  </>;
}

function RiffPracticeView({ s, m, practice, titleRef, stepRef }: { s: PracticeState; m: MicState; practice: RiffPractice; titleRef: RefObject<HTMLHeadingElement>; stepRef: RefObject<HTMLHeadingElement> }) {
  const [tapped, setTapped] = useState<{ p: Position; n: number } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => { setTapped(null); }, [s.step, s.riff.id]);
  const index = RIFFS.findIndex(r => r.id === s.riff.id);
  const st = riffStatus(s, s.riff.id);
  const heard = m.status === 'on' && m.muted === null && !m.calibrating && m.heard?.status === 'pitch' ? m.heard.midi : undefined;
  const boardTaps = s.step !== 'recall';

  function tap(p: Position) {
    if (!practice.tap(p.midi)) return;
    clearTimeout(timer.current);
    setTapped(prev => ({ p, n: (prev?.n ?? 0) + 1 }));
    timer.current = setTimeout(() => setTapped(null), 600);
  }
  // Otelaudan merkinnät vaiheittain: Opettele näyttää paikat, muistista vain pyydetyn vihjeen ja lopuksi koko riffin.
  const micOn = m.status === 'on';
  const marks: Mark[] = s.step === 'learn' || (s.step === 'recall' && !micOn && s.revealed) ? riffMarks(s.riff, s.playing)
    : s.step === 'recall' && micOn ? riffMarks(s.riff, s.playing, i => s.complete || s.found[i] || (s.nextHint && i === s.index), i => s.found[i] || s.complete ? String(i + 1) : '?')
    : [];
  const heardSpot = heard !== undefined && s.step === 'learn' ? s.riff.spots[s.riff.midi.indexOf(heard)] : undefined;
  if (heardSpot) marks.push({ ...heardSpot, midi: heard!, kind: 'playing', label: noteName(heard!) });
  if (tapped && boardTaps) marks.push({ ...tapped.p, kind: 'playing', label: noteName(tapped.p.midi) });

  return <>
    <header className="riff-round-heading">
      <ModeTag mode="harjoitus" />
      <h1 id="riff-title" ref={titleRef} tabIndex={-1} data-testid="level-heading">{s.level.name} · Riffi {s.riffNumber}/{s.level.riffs.length}</h1>
      <p className="riff-name">{s.riff.title}{st.marked && <span className="riff-marked-badge"> · ✓ harjoiteltu</span>}</p>
    </header>
    <StepNav s={s} practice={practice} />
    <MicBar m={m} practice={practice} />
    <div className="riff-panel riff-play">
      <StepContent s={s} m={m} practice={practice} headingRef={stepRef} />
      {s.step === 'learn' && m.status === 'on' && <p className="riff-heard" data-testid="learn-heard">Kuulen nyt: <strong>{heard !== undefined ? noteName(heard) : '–'}</strong>
        {heard !== undefined && !s.riff.midi.includes(heard) ? ' (ei kuulu tähän riffiin)' : ''}</p>}
      <RiffBoard focus={s.level.strings} marks={marks} disabled={!boardTaps || s.modelPlaying} onAnswer={tap}
        caption={boardTaps ? 'Otelauta: painamalla kuulet sävelen (ei arvioida)' : 'Otelauta: soita oikealla kitaralla – mikrofoni kuulee vain sävelkorkeuden, ei kieltä'} />
      <div className="riff-actions riff-practice-footer">
        <button type="button" aria-pressed={st.marked} onClick={() => practice.toggleMarked()} data-testid="mark-practiced" className={st.marked ? 'marked' : ''}>
          {st.marked ? '✓ Harjoiteltu – poista kuittaus' : 'Kuittaa harjoitelluksi'}</button>
        {index > 0 && <button type="button" onClick={() => practice.moveRiff(-1)}><span aria-hidden="true">←</span> Edellinen riffi</button>}
        {index < RIFFS.length - 1 && <button type="button" onClick={() => practice.moveRiff(1)}>Seuraava riffi <span aria-hidden="true">→</span></button>}
      </div>
      <div className="riff-end-actions">
        <button type="button" onClick={() => practice.home()}>Kaikki harjoitukset</button>
      </div>
    </div>
  </>;
}

export function PracticeView({ practice }: { practice: RiffPractice }) {
  const s = useSyncExternalStore(practice.subscribe, practice.getState);
  const m = useSyncExternalStore(practice.mic.subscribe, practice.mic.getState);
  const title = useRef<HTMLHeadingElement>(null);
  const step = useRef<HTMLHeadingElement>(null);
  const panelHeading = useRef<HTMLHeadingElement>(null);
  useFocusOnChange(s.panel ? 'panel' : `${s.view}:${s.riff.id}`, s.panel ? panelHeading : title);
  useFocusOnChange(s.step, step);

  useEffect(() => {
    const hidden = () => { if (document.visibilityState === 'hidden') practice.hidden(); };
    const leave = () => practice.dispose();
    const devices = () => void practice.mic.refreshDevices();
    document.addEventListener('visibilitychange', hidden);
    window.addEventListener('pagehide', leave);
    navigator.mediaDevices?.addEventListener?.('devicechange', devices);
    return () => {
      document.removeEventListener('visibilitychange', hidden); window.removeEventListener('pagehide', leave);
      navigator.mediaDevices?.removeEventListener?.('devicechange', devices);
    };
  }, [practice]);

  return <section className="riff-game" data-mode="harjoitus" data-view={s.panel ? 'panel' : s.view} aria-labelledby={s.panel ? undefined : 'riff-title'} aria-label={s.panel ? 'Riffiharjoitus – oikea kitara' : undefined}>
    <Breadcrumbs mode="harjoitus" />
    {s.panel
      ? <><ModeTag mode="harjoitus" /><MicPanel m={m} mic={practice.mic} practice={practice} panel={s.panel} headingRef={panelHeading} /></>
      : s.view === 'home' ? <PracticeHome s={s} m={m} practice={practice} titleRef={title} />
      : <RiffPracticeView s={s} m={m} practice={practice} titleRef={title} stepRef={step} />}
  </section>;
}
