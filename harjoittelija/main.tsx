import { useEffect, useReducer, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Board } from './Board';
import { Controls, modeTitle, settingsSummary } from './Controls';
import { LearningPaths, type LearningTrack } from './LearningPaths';
import { ScaleJourney } from './ScaleJourney';
import { NoteJourney } from './NoteJourney';
import { ChordJourney } from './ChordJourney';
import { MicLive, MicPanel, type Heard, type MicUi } from './MicPanel';
import { Progress } from './Progress';
import { Microphone, ReferencePlayer, micError, noiseThreshold, releaseAudio } from './audio';
import { PracticeEngine, boardArea, hintFor, practiceArea, summarize, validate, type AnswerInput, type Mark, type Phase } from './engine';
import { candidateText, correctText, describeItem, instruction, wrongText } from './feedback';
import { CHORDS, music, note, positionKey, type Position } from './music';
import { PRACTICE, fromURL, sanitize, settingsURL, usesMic, type Settings } from './settings';
import { ProgressStore } from './storage';
import { listInputDevices } from './vendor/micInput';
import { toDb, type AnalysisFrame, type StableNoteEvent } from './vendor/pitchDetector';
import './style.css';

function createStore() { try { return new ProgressStore(localStorage); } catch { return new ProgressStore(); } }
const detection = (s: Settings) => ({ minRms: s.minRms, minClarity: s.clarity, stabilityMs: s.stability, centsTolerance: s.cents });
const seconds = (ms: number) => (ms / 1000).toFixed(1).replace('.', ',') + ' s';
const NATURALS = [0, 2, 4, 5, 7, 9, 11];
/** Oppaan luku, jossa harjoituksen teoria on. */
function theoryLink(s: Settings): [string, string] {
  if (s.mode === 'notes') return ['book/osa-5.html#otelauta', 'Otelauta ja oktaavimuodot'];
  if (s.mode === 'caged') return ['book/osa-6.html#caged', 'CAGED'];
  if (s.mode === 'chord') return s.chord === 'dom7' ? ['book/osa-10.html#septimisoinnut', 'Septimisoinnut'] : ['book/osa-3.html#harmoninen-kentta', 'Harmoninen kenttä'];
  if (s.mode === 'scale') return ['mp','majp'].includes(s.scale) ? ['book/osa-8.html#pentatoniikka', 'Pentatoniikka'] : ['book/osa-11.html#moodit', 'Moodit käytännössä'];
  return ['book/osa-7.html#intervallit', 'Asteet ja intervallit korvalla'];
}

function App() {
  const [store] = useState(createStore);
  const [s, setSettings] = useState(() => fromURL(location.search, store.data.settings));
  const [, redraw] = useReducer((n: number) => n + 1, 0);
  const engine = useRef<PracticeEngine | null>(null);
  const microphone = useRef(new Microphone()), player = useRef(new ReferencePlayer());
  /** Kasvaa aina, kun käynnissä oleva asynkroninen vaihe (avaus, toisto, ajastin) pitää mitätöidä. */
  const op = useRef(0);
  const advanceTimer = useRef<ReturnType<typeof setTimeout>>();
  const calibrationTimer = useRef<ReturnType<typeof setTimeout>>();
  const calibrationSamples = useRef<number[] | null>(null);
  const lastFrameAt = useRef(0);
  const panel = useRef<HTMLElement>(null);
  const sRef = useRef(s); sRef.current = s;
  const [mic, setMicState] = useState<MicUi>({ phase: 'off', purpose: 'none' });
  const micRef = useRef(mic);
  const setMic = (next: MicUi) => { micRef.current = next; setMicState(next); };
  const [frame, setFrame] = useState<AnalysisFrame | null>(null);
  const [heard, setHeard] = useState<Heard | null>(null);
  const [accepted, setAccepted] = useState<StableNoteEvent | null>(null);
  const [now, setNow] = useState(0);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [busy, setBusy] = useState(false), [playing, setPlaying] = useState(false);
  const [message, setMessage] = useState(''), [tone, setTone] = useState<'info' | 'good' | 'bad'>('info');
  const [error, setError] = useState('');
  const [hintShown, setHintShown] = useState(0);
  const [wrong, setWrong] = useState<Position[]>([]), [wrongValues, setWrongValues] = useState<number[]>([]);
  const [candidate, setCandidate] = useState<number | null>(null);
  const [calibrating, setCalibrating] = useState(false), [calibration, setCalibration] = useState('');
  const [finished, setFinished] = useState<'' | 'complete' | 'stopped'>('');
  // Vanhoilla ?tila=-linkeillä avataan alkuperäinen harjoitus suoraan.
  const [track, setTrack] = useState<LearningTrack | 'legacy' | null>(() =>
    (new URLSearchParams(location.search).has('tila') || new URLSearchParams(location.search).has('vanha')) ? 'legacy' : null);

  const refreshDevices = () => void listInputDevices().then(setDevices).catch(() => {});
  function stopCalibration() { clearTimeout(calibrationTimer.current); calibrationSamples.current = null; setCalibrating(false); }
  function clearMicReadings() { setFrame(null); setHeard(null); setAccepted(null); }
  function closeMic() {
    microphone.current.stop(); stopCalibration();
    setMic({ phase: 'off', purpose: 'none' }); clearMicReadings();
  }
  /** Avaa mikrofonin tai ottaa jo auki olevan (esimerkiksi testin) käyttöön ilman uutta lupakyselyä. */
  async function ensureMic(purpose: 'test' | 'round'): Promise<boolean> {
    if (microphone.current.active && micRef.current.phase === 'on') {
      stopCalibration(); setMic({ ...micRef.current, purpose }); microphone.current.rearm();
      return true;
    }
    setMic({ phase: 'requesting', purpose }); clearMicReadings();
    try {
      const info = await microphone.current.start(sRef.current.device, {
        ...detection(sRef.current),
        onFrame: f => handlers.current.frame(f), onStableNote: event => handlers.current.stable(event),
      }, () => handlers.current.lost());
      if (!info) return false;
      setMic({ phase: 'on', purpose, info }); refreshDevices();
      return true;
    } catch (cause) {
      setMic({ phase: 'error', purpose: 'none', error: micError(cause) });
      return false;
    }
  }
  function onFrame(f: AnalysisFrame) {
    calibrationSamples.current?.push(f.rms);
    const t = performance.now();
    if (t - lastFrameAt.current < 66) return;
    lastFrameAt.current = t; setFrame(f); setNow(t);
    if (f.midi !== undefined && f.frequency !== undefined)
      setHeard({ midi: f.midi, frequency: f.frequency, cents: f.cents ?? 0, clarity: f.clarity ?? 0, tuned: f.status === 'pitch', at: t });
  }
  function onStable(event: StableNoteEvent) {
    if (micRef.current.purpose === 'test') setAccepted(event);
    else if (micRef.current.purpose === 'round') respond(event.midi, 'mic', undefined, event.heldMs);
  }
  function onLost() {
    const inRound = micRef.current.purpose === 'round';
    stopCalibration(); clearMicReadings();
    setMic({ phase: 'error', purpose: 'none', error: 'Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen.' });
    const current = engine.current;
    if (inRound && current && ['active','feedback','paused'].includes(current.phase)) {
      cancelPending(); setPlaying(false); current.pause();
      setError('Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus.'); redraw();
    }
  }
  // Mikrofonin takaisinkutsut elävät koko kuuntelun ajan, joten ne ohjataan aina tuoreimpiin funktioihin.
  const handlers = useRef({ frame: onFrame, stable: onStable, lost: onLost });
  handlers.current = { frame: onFrame, stable: onStable, lost: onLost };

  function change(next: Settings) {
    const clean = sanitize(next), deviceChanged = clean.device !== sRef.current.device;
    sRef.current = clean; setSettings(clean); store.settings(clean); setError('');
    if (!microphone.current.active) return;
    if (deviceChanged && micRef.current.purpose === 'test') { closeMic(); void ensureMic('test'); }
    else microphone.current.setOptions(detection(clean));
  }
  function selectTrack(next: LearningTrack) {
    setFinished(''); engine.current = null;
    setTrack(next);
  }
  function openOldScale() {
    change({ ...sRef.current, mode: 'scale', root: 9, scale: 'mp', box: 1, order: 'up',
      activity: 'play', hints: 'fade', input: 'board', rounds: 10 });
    engine.current = null; setFinished(''); setTrack('legacy');
  }
  function testMic() { setCalibration(''); void ensureMic('test'); }
  function calibrate() {
    if (micRef.current.phase !== 'on' || micRef.current.purpose !== 'test') return;
    stopCalibration(); calibrationSamples.current = []; setCalibrating(true);
    setCalibration('Mitataan taustakohinaa kolme sekuntia. Älä soita.');
    calibrationTimer.current = setTimeout(() => {
      const samples = calibrationSamples.current ?? [];
      stopCalibration();
      if (samples.length < 10) { setCalibration('Mittaus ei onnistunut. Yritä uudelleen.'); return; }
      const { threshold, noise, loud } = noiseThreshold(samples);
      change({ ...sRef.current, minRms: threshold });
      setCalibration(`Taustakohina on ${Math.round(toDb(noise))} dB ja äänikynnys nyt ${Math.round(toDb(threshold))} dB. ${loud ? 'Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen.' : 'Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli.'}`);
    }, 3000);
  }

  function cancelPending() { op.current++; clearTimeout(advanceTimer.current); player.current.stop(); }
  function saveSession(current: PracticeEngine, complete: boolean) {
    if (!current.results.length) return;
    const sum = summarize(current.results);
    store.session({ id: current.id, mode: current.settings.mode, count: sum.count, first: sum.first, ms: sum.ms,
      solo: sum.solo, soloFirst: sum.soloFirst, hints: current.settings.hints, at: Date.now(), complete });
  }
  async function playQuestion(current: PracticeEngine) {
    if (!current.question?.sound.length || current.phase !== 'active') return;
    cancelPending(); const token = op.current;
    current.pause(); microphone.current.pause();
    setPlaying(true); setTone('info'); setMessage('Kuuntele…'); redraw();
    try { await player.current.play(current.question.sound); }
    catch { if (token === op.current) setError('Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.'); }
    if (token !== op.current || engine.current !== current) return;
    current.resume(); microphone.current.resume();
    setPlaying(false); setMessage(''); redraw();
  }
  async function present(current: PracticeEngine) {
    setWrong([]); setWrongValues([]); setCandidate(null); setError('');
    setHintShown(current.hintLevel);
    // Edellisestä vastauksesta soimaan jäänyt sävel ei saa vastata uuteen kysymykseen.
    microphone.current.rearm();
    setTone('info'); setMessage(''); redraw();
    if (current.question?.sound.length) await playQuestion(current);
  }
  async function start() {
    const settings = sRef.current, problem = validate(settings);
    if (problem) { setError(problem); return; }
    cancelPending(); const token = op.current;
    setError(''); setCalibration(''); setFinished('');
    if (usesMic(settings)) {
      setBusy(true);
      const ok = await ensureMic('round');
      if (token !== op.current) return;
      setBusy(false);
      if (!ok) { setError('Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.'); return; }
    } else if (micRef.current.phase !== 'off') closeMic();
    const current = new PracticeEngine(settings, () => store.data.stats, result => store.record(result));
    try { current.start(); }
    catch (cause) { if (micRef.current.purpose === 'round') closeMic(); setError(cause instanceof Error ? cause.message : 'Harjoitusta ei voitu aloittaa.'); return; }
    engine.current = current;
    requestAnimationFrame(() => panel.current?.scrollIntoView({ block: 'start', behavior: 'auto' }));
    await present(current);
  }
  function cancelStart() { cancelPending(); setBusy(false); closeMic(); }
  function respond(value: number, input: AnswerInput, position?: Position, heldMs = 0) {
    const current = engine.current, q = current?.question;
    if (!current || !q || current.phase !== 'active') return;
    const status = current.answer(value, input, position, heldMs);
    if (status === 'ignored') return;
    if (status === 'candidate') { setCandidate(value); setTone('bad'); setMessage(candidateText(current.settings, q, value)); }
    else if (status === 'wrong') {
      if (position) setWrong(list => [...list, position]); else setWrongValues(list => [...list, value]);
      setTone('bad'); setMessage(wrongText(current.settings, q, input, value, position));
    } else {
      setCandidate(null); setTone('good'); setMessage(correctText(current.settings, q, input, value, position));
      saveSession(current, false);
      if (current.settings.advance) {
        const token = op.current;
        advanceTimer.current = setTimeout(() => { if (token === op.current) void next(); }, input === 'mic' ? 1800 : 1400);
      }
    }
    redraw();
  }
  async function next() {
    const current = engine.current;
    if (!current || current.phase !== 'feedback') return;
    cancelPending();
    try { current.next(); }
    catch (cause) { finish(false); setError(cause instanceof Error ? cause.message : 'Seuraavaa kysymystä ei voitu muodostaa.'); return; }
    if ((current.phase as Phase) === 'done') { finish(true); return; }
    await present(current);
  }
  function finish(complete = false) {
    cancelPending(); setPlaying(false); setBusy(false);
    if (micRef.current.purpose === 'round' || micRef.current.phase === 'requesting') closeMic();
    const current = engine.current;
    if (current) { current.stop(); saveSession(current, complete); }
    setCandidate(null); setHintShown(0); setWrong([]); setWrongValues([]); setError('');
    setFinished(complete ? 'complete' : 'stopped'); setTone('info'); setMessage(''); redraw();
  }
  function pause() {
    const current = engine.current;
    if (!current || !['active','feedback','paused'].includes(current.phase)) return;
    cancelPending(); setPlaying(false); current.pause();
    const hadMic = micRef.current.purpose === 'round';
    if (hadMic) closeMic();
    setTone('info'); setMessage(`Harjoitus on tauolla.${hadMic ? ' Mikrofoni on suljettu.' : ''}`); redraw();
  }
  async function resume() {
    const current = engine.current;
    if (!current || current.phase !== 'paused' || playing) return;
    cancelPending(); const token = op.current; setError('');
    if (usesMic(current.settings)) {
      setBusy(true);
      const ok = await ensureMic('round');
      if (token !== op.current) return;
      setBusy(false);
      if (!ok) { setError('Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.'); return; }
    }
    current.resume(); setTone('info'); setMessage(''); redraw();
    if ((current.phase as Phase) !== 'active') return;
    microphone.current.rearm();
    if (current.question?.sound.length) await playQuestion(current);
  }
  function showHint(level: number) {
    const current = engine.current;
    if (!current || current.phase !== 'active') return;
    current.useHint(level); setHintShown(level); redraw();
  }

  // Välilehden piilottaminen sulkee mikrofonin: kuuntelu ei jatku taustalla.
  const handlersForPage = useRef({ hidden: () => {}, restored: () => {} });
  handlersForPage.current = {
    hidden: () => {
      const current = engine.current;
      if (current && ['active','feedback'].includes(current.phase) || playing) pause();
      else if (micRef.current.phase !== 'off' && micRef.current.phase !== 'error') { cancelPending(); setBusy(false); closeMic(); }
    },
    restored: () => { setBusy(false); setPlaying(false); setMic({ phase: 'off', purpose: 'none' }); clearMicReadings(); redraw(); },
  };

  useEffect(() => {
    refreshDevices();
    const devicesChanged = () => refreshDevices();
    navigator.mediaDevices?.addEventListener?.('devicechange', devicesChanged);
    const release = () => { op.current++; clearTimeout(advanceTimer.current); clearTimeout(calibrationTimer.current); microphone.current.stop(); player.current.stop(); releaseAudio(); engine.current?.pause(); };
    const hidden = () => { if (document.hidden) handlersForPage.current.hidden(); };
    const returning = (event: PageTransitionEvent) => { if (event.persisted) handlersForPage.current.restored(); };
    document.addEventListener('visibilitychange', hidden);
    window.addEventListener('pagehide', release); window.addEventListener('pageshow', returning);
    return () => {
      release();
      navigator.mediaDevices?.removeEventListener?.('devicechange', devicesChanged);
      document.removeEventListener('visibilitychange', hidden);
      window.removeEventListener('pagehide', release); window.removeEventListener('pageshow', returning);
    };
  }, []);
  // Näppäimistöllä vastaava ei saa kadottaa kohdistusta, kun otelauta lukittuu vastauksen jälkeen:
  // kohdistus siirtyy Seuraava kysymys -painikkeeseen ja uuden kysymyksen alkaessa takaisin vastauksiin.
  const nextButton = useRef<HTMLButtonElement>(null);
  const focusKey = `${engine.current?.id}:${engine.current?.index}:${engine.current?.phase}:${playing}`;
  useEffect(() => {
    const current = engine.current, root = panel.current, focused = document.activeElement;
    if (!current || !root || !(focused === document.body || root.contains(focused))) return;
    if (current.phase === 'feedback') nextButton.current?.focus({ preventScroll: true });
    else if (current.phase === 'active' && !playing && (focused === document.body || focused === nextButton.current))
      root.querySelector<HTMLElement>('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: true });
  }, [focusKey]);

  const e = engine.current;
  const inRound = !!e && ['active','paused','feedback'].includes(e.phase);
  const view = inRound ? e.settings : s;
  const q = inRound ? e.question : undefined;
  const answered = !!q && !!e?.answered;
  // Tauolla keskeneräinen kysymys piilotetaan: miettimisaika ei saa jäädä mittaamatta.
  const onBreak = inRound && e.phase === 'paused' && !playing && !answered;
  const canAnswer = inRound && e.phase === 'active' && !playing;
  const problem = inRound ? null : validate(s);
  const locked = inRound || busy;
  const area = practiceArea(view), board = boardArea(view);
  const level = q && !answered ? hintShown : 0;
  const hint = q ? hintFor(view, q, answered ? 2 : level) : { marks: [], text: '' };
  const marks: Mark[] = [...new Map([...hint.marks, ...(answered ? [] : wrong.map(p => ({ ...p, label: note(p.midi, view.flats), kind: 'wrong' as const })))].map(m => [positionKey(m), m])).values()];
  const micRound = inRound && usesMic(view);
  const showBoard = !!q && !onBreak && (q.choices === 'position' || marks.length > 0);
  const tally = e ? summarize(e.results) : null;
  const stage = !e || view.hints !== 'fade' ? '' : e.index <= 3 ? ' · vastaus näkyy' : e.index <= 6 ? ' · apupiste näkyy' : ' · ilman vihjettä';
  const review = e && !inRound ? e.results.filter(r => r.errors > 0 || r.hint) : [];
  const [theoryHref, theoryTitle] = theoryLink(view);

  const introduction = <div className="intro"><p className="eyebrow">LÖYDÄ · KUUNTELE · SOITA</p><h1>Kitaraharjoittelija</h1>
    <p>Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita.</p></div>;
  const notice = store.data.notice === 'hints-default' && <div className="notice" role="status" data-testid="hints-notice">
    <p><strong>Harjoittelutapa on muuttunut.</strong> Oikea kohta ei enää näy heti kysymyksen alussa: tapa on nyt <em>Testaa osaamistasi</em>, ja vihjeen saa pyytämällä. Aiemmat tuloksesi ja muut asetuksesi ovat tallessa. Jos haluat vihjeet takaisin, valitse <em>Opettele</em> tai <em>Vähennä vihjeitä</em>.</p>
    <button type="button" onClick={() => { store.dismissNotice(); redraw(); }}>Selvä</button>
  </div>;
  if (!inRound && track === null) return <>{introduction}{notice}
    <LearningPaths onSelect={selectTrack} onAdvanced={() => setTrack('legacy')} /></>;
  if (!inRound && track === 'scales') return <>{introduction}{notice}
    <ScaleJourney onBack={() => setTrack(null)} onOpenOldExercise={openOldScale} /></>;
  if (!inRound && track === 'ear') return <>{introduction}{notice}
    <NoteJourney onBack={() => setTrack(null)} /></>;
  if (!inRound && track === 'chords') return <>{introduction}{notice}
    <ChordJourney onBack={() => setTrack(null)} /></>;

  return <>
    {introduction}{notice}
    <p className="exercise-theory"><a href={theoryHref}>Lue tämän harjoituksen teoria: {theoryTitle} →</a></p>
    {track !== 'legacy' && <section className="selected-track" aria-label="Valittu oppimispolku">
      <button type="button" className="back-link" onClick={() => { if (inRound) finish(); setTrack(null); }}>← Oppimispolut</button>
      <h2>{track === 'ear' ? 'Sävelkorva ja otelauta' : 'Soinnut ja musiikin rakenne'}</h2>
      <p>{track === 'ear' ? 'Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä.' :
        'Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta.'}</p>
      <p className="tools-note">Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus.</p>
    </section>}
    {inRound ? <p className="round-setup" data-testid="round-setup"><strong>{modeTitle(view.mode)}</strong> · {settingsSummary(view)}</p>
      : track === 'legacy' ? <Controls s={s} change={change} locked={locked} problem={problem} />
      : <details className="track-settings"><summary>Muuta harjoituksen asetuksia</summary>
          <Controls s={s} change={change} locked={locked} problem={problem} />
        </details>}
    {!inRound && (track === 'legacy' || usesMic(s)) && <MicPanel mic={mic} frame={frame} heard={heard} accepted={accepted} now={now} s={s} change={change} devices={devices}
      locked={busy} calibrating={calibrating} calibration={calibration} onTest={testMic} onStop={closeMic} onCalibrate={calibrate} />}
    <section className="session-panel" aria-labelledby="session-title" ref={panel}>
      <div className="session-top"><h2 id="session-title">{modeTitle(view.mode)}</h2>
        <span data-testid="round-status">{inRound ? `Kysymys ${e.index}${e.total ? ' / ' + e.total : ' · vapaa harjoittelu'} · ${PRACTICE[view.hints].title}${stage}${e.phase === 'paused' && !playing ? ' · tauolla' : ''}` : finished === 'complete' ? 'Kierros valmis' : 'Valmis aloittamaan'}</span></div>
      {!inRound && <>
        {e && e.results.length > 0 && tally ? <div className="round-summary" data-testid="round-summary">
          <h3>{finished === 'complete' ? 'Kierros valmis' : 'Harjoitus lopetettu'}</h3>
          <dl>
            <div><dt>Itsenäisesti heti oikein</dt><dd data-testid="summary-solo">{tally.solo ? `${tally.soloFirst} / ${tally.solo}` : '–'}</dd></div>
            <div><dt>Vihjeen kanssa</dt><dd data-testid="summary-guided">{tally.guided}</dd></div>
            <div><dt>Keskimääräinen aika</dt><dd>{seconds(tally.ms / tally.count)}</dd></div>
          </dl>
          {tally.solo === 0 && <p className="tools-note">Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä.</p>}
          {review.length > 0 && <><p>Näitä kannattaa kerrata:</p><ul>{[...new Set(review.map(r => describeItem(r.item, s.flats)).filter(Boolean))].slice(0, 6).map(text => <li key={text}>{text}</li>)}</ul></>}
        </div> : <p className="question idle">{settingsSummary(s)}</p>}
        <div className="action-row">
          {busy ? <><button type="button" className="primary" disabled>Avataan mikrofonia…</button><button type="button" onClick={cancelStart}>Peru</button></>
            : <button type="button" className="primary" disabled={!!problem} onClick={() => void start()}>{e?.results.length ? 'Aloita uusi kierros' : 'Aloita harjoitus'}</button>}
        </div>
        {!e && <p className="tools-note">Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä.</p>}
      </>}
      {inRound && q && <>
        <p className="question" id="question" aria-live="polite">{onBreak ? 'Harjoitus on tauolla.' : q.prompt}</p>
        <p className="how" data-testid="instruction">{onBreak ? 'Kysymys palaa näkyviin, kun jatkat.' : playing ? 'Kuuntele esimerkki. Vastaa, kun ääni on päättynyt.' : instruction(view, q)}</p>
        {e.hintLevel > 0 && !answered && <p className="hint-note" data-testid="hint-note">{view.hints === 'always' ? 'Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi.' : 'Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi.'}</p>}
        {micRound && <MicLive mic={mic} frame={frame} heard={heard} s={view} now={now} />}
        {q.choices === 'note' && !onBreak && <div className="answer-choices" role="group" aria-label="Sävelnimet">{(view.accidentals ? Array.from({ length: 12 }, (_, i) => i) : NATURALS).map(i =>
          <button type="button" key={i} className={wrongValues.includes(i) ? 'wrong' : answered && i === q.midi % 12 ? 'right' : ''} disabled={!canAnswer || wrongValues.includes(i)} onClick={() => respond(i, 'note')}>{note(i, view.flats)}</button>)}</div>}
        {q.choices === 'degree' && !onBreak && <div className="answer-choices" role="group" aria-label="Asteet">{(view.mode === 'scale' ? music.scaleNotes(music.SCALES[view.scale]) : CHORDS[view.chord].tones).map(([iv, degree]) =>
          <button type="button" key={iv} className={wrongValues.includes(iv) ? 'wrong' : answered && iv === q.interval ? 'right' : ''} disabled={!canAnswer || wrongValues.includes(iv)} onClick={() => respond(iv, 'degree')}>{degree}</button>)}</div>}
        {showBoard && <Board area={board} marks={marks} disabled={!canAnswer || q.choices !== 'position' || view.input === 'mic'} onAnswer={p => respond(p.midi, 'board', p)}
          caption={area.fixed === 'shape' ? `${view.shape}-muodon alue` : area.fixed === 'box' ? `Boksin ${view.box} alue` : 'Otelauta'} />}
        {!answered && !onBreak && level > 0 && hint.text && <p className="hint-text" data-testid="hint-text">{hint.text}</p>}
        <p className={`feedback ${tone}`} role="status" aria-live="polite" data-testid="feedback">{message}</p>
        {candidate !== null && e.phase === 'active' && <div className="candidate">
          <button type="button" onClick={() => { e.confirmWrong(); setCandidate(null); setMessage('Kirjattu virheeksi. Etsi sävel uudelleen.'); redraw(); }}>Soitin väärän sävelen · kirjaa virhe</button>
          <span className="tools-note">Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen.</span>
        </div>}
        {error && <p className="error" role="alert">{error}</p>}
        <div className="action-row">
          {e.phase === 'feedback' && <button type="button" className="primary" ref={nextButton} onClick={() => void next()}>{e.isLast ? 'Näytä kierroksen tulokset' : 'Seuraava kysymys'}</button>}
          {e.phase === 'active' && !answered && !playing && <>
            {level === 0 && <button type="button" onClick={() => showHint(Math.max(1, e.hintLevel))}>{e.hintLevel ? 'Näytä vihje uudelleen' : 'Näytä vihje'}</button>}
            {level === 1 && <button type="button" onClick={() => showHint(2)}>Näytä vastaus</button>}
            {level > 0 && <button type="button" onClick={() => setHintShown(0)}>Piilota vihje</button>}
          </>}
          {q.sound.length > 0 && <button type="button" disabled={!canAnswer} onClick={() => void playQuestion(e)}>Kuuntele uudelleen</button>}
          {e.phase === 'paused' && !playing ? <button type="button" className="primary" disabled={busy} onClick={() => void resume()}>{busy ? 'Avataan mikrofonia…' : 'Jatka harjoitusta'}</button>
            : <button type="button" onClick={pause}>Tauko</button>}
          <button type="button" onClick={() => finish()}>Lopeta harjoitus</button>
        </div>
        {e.phase === 'feedback' && view.advance && <p className="tools-note">Seuraava kysymys tulee hetken kuluttua itsestään.</p>}
        <p className="tools-note" data-testid="tally">{tally?.count ? `Vastattu ${tally.count} · itsenäisesti heti oikein ${tally.soloFirst}/${tally.solo}${tally.guided ? ` · vihjeen kanssa ${tally.guided}` : ''}` : 'Ei vielä vastattuja kysymyksiä.'}</p>
      </>}
      {!inRound && error && <p className="error" role="alert">{error}</p>}
    </section>
    {!inRound && <>
      <p className="link-row">
        {s.mode === 'scale' && <a href={`otelautaharjoittelija.html?toonikka=${encodeURIComponent(music.CHROM[s.root])}&asteikko=${s.scale}`}>Katso asteikko otelautakartassa</a>}
        <a href={settingsURL(s)}>Linkki tähän harjoitukseen</a></p>
      <Progress store={store} s={s} locked={locked} changed={() => { const restored = sanitize(store.data.settings); sRef.current = restored; setSettings(restored); redraw(); }} />
      <details className="privacy"><summary>Miten tunnistus ja tallennus toimivat?</summary>
        <p>Mikrofoni käynnistyy vain, kun painat Testaa mikrofoni tai aloitat harjoituksen, jossa vastaat soittamalla. Ääntä ei tallenneta eikä lähetetä palvelimelle. Mikrofoni on auki kierroksen ajan ja sulkeutuu tauolla, kierroksen lopussa, testin lopettamisessa, välilehden piilottamisessa ja sivulta poistuttaessa.</p>
        <p>Mikrofoni tunnistaa sävelkorkeuden, ei kieltä, nauhaa tai kokonaista sointuotetta. Sävel hyväksytään vastaukseksi, kun sen voimakkuus, selkeys, vire ja vakaus ylittävät asetetut rajat. Uusi vastaus vaatii uuden näppäyksen tai kielten vaimentamisen. Tehtävästä eriävää havaintoa ei kirjata virheeksi ilman omaa vahvistustasi, koska se voi olla ylä-ääni tai toisen kielen resonanssi.</p>
        <p>Tulokset ja asetukset ovat vain tämän selaimen localStorage-tallennuksessa. Selaintietojen tyhjentäminen poistaa ne. Oppaan lukumerkinnät säilyvät erillisinä. Mikrofoni tarvitsee HTTPS-yhteyden tai paikallisen localhost-osoitteen.</p>
        <p>Tunnistus on sovitettu <a href="https://github.com/dmb1107/fretecho">FretEchosta</a> (MIT) ja käyttää Pitchyä. <a href="harjoittelija/vendor/FretEcho-LICENSE.txt">FretEchon lisenssi</a> · <a href="assets/harjoittelija/THIRD-PARTY-NOTICES.txt">Riippuvuuksien lisenssit</a>.</p>
      </details>
    </>}
  </>;
}
createRoot(document.getElementById('guitar-practice')!).render(<App />);
