import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Board } from '../harjoittelija/Board';
import type { Area, Mark } from '../harjoittelija/engine';
import { positionKey, type Position } from '../harjoittelija/music';
import { noteName, type GameState, type RiffGame } from './game';
import { DeviceSelect, DiagnosticsView, TunerView } from './MicTools';
import { ALL_STRINGS, CHECK_MIDI, FRET_MAX, FRET_MIN, LEVELS, RIFFS } from './riffs';
import type { SlotMark } from './sequence';

/** Virtuaaliotelauta: tason kielet (tai kaikki kuusi) ja nauhat 0–5. Muut kielet piilotetaan tyyleillä. */
export const boardArea = (s: Pick<GameState, 'level' | 'fullBoard'>): Area =>
  ({ strings: s.fullBoard ? ALL_STRINGS : s.level.strings, min: FRET_MIN, max: FRET_MAX, fixed: '' });

const PHASE_TEXT: Partial<Record<GameState['phase'], string>> = {
  permission: 'Pyydetään mikrofonilupaa…', 'model-playing': 'Kuuntele malli',
  'output-settling': 'Valmistaudu: odotetaan mallin äänen vaimenemista…', success: 'Riffi hyväksytty!', retry: 'Riffi soitettu loppuun',
};
const PAUSE_TEXT = {
  manual: 'Peli on tauolla. Mikrofoni on suljettu.',
  background: 'Peli pysähtyi, koska välilehti siirtyi taustalle. Mikrofoni ja äänet on suljettu.',
  'mic-lost': 'Yhteys mikrofoniin katkesi (laite irrotettiin tai selain pysäytti äänen). Tarkista laite ja jatka.',
};
/** Pallukan tekstivastine ja symboli: väri ei ole ainoa vihje. */
const MARK_TEXT: Record<SlotMark, string> = { pending: 'harmaa, ei vielä ratkaistu', red: 'punainen, väärä sävel – yritä tätä kohtaa uudelleen', green: 'vihreä, oikein heti', yellow: 'keltainen, löytyi virheen jälkeen' };
const MARK_SYMBOL: Record<SlotMark, string> = { pending: '', red: '✗', green: '✓', yellow: '↻' };

/** Mikrofonin kuulema tila lyhyesti. ”Alle kynnyksen” ei tarkoita, ettei kieli soisi: taso on vain liian matala. */
export function heardText(s: GameState): string {
  const h = s.heard;
  if (!h) return 'ei vielä analyysia';
  if (h.status === 'silent') return 'alle äänikynnyksen';
  if (h.status === 'pitch' && h.midi !== undefined) return noteName(h.midi);
  if (h.status === 'off-pitch' && h.midi !== undefined) return `${noteName(h.midi)}, epävireinen`;
  return 'ääntä, ei selvää säveltä';
}

/** Vihjeen otelautamerkit: sama paikka voi toistua (A–A), joten järjestysnumerot yhdistetään. */
function hintMarks(s: GameState): Mark[] {
  const byKey = new Map<string, Mark>();
  s.riff.spots.forEach((spot, i) => {
    const p = { ...spot, midi: s.riff.midi[i] };
    const key = positionKey(p), prev = byKey.get(key);
    byKey.set(key, { ...p, kind: s.playing === i ? 'playing' : prev?.kind ?? 'answer', label: prev ? `${prev.label}·${i + 1}` : String(i + 1) });
  });
  return [...byKey.values()];
}

const stringWord = (n: number) => n === 1 ? 'yksi kieli' : n === 6 ? 'koko otelauta' : `${n} kieltä`;

function Slots({ s }: { s: GameState }) {
  const total = s.riff.midi.length;
  return <ol className="riff-slots" aria-label={`Ratkaistu ${s.index} / ${total} säveltä`} data-testid="slots">
    {s.riff.midi.map((midi, i) => {
      const mark = s.marks[i] ?? 'pending';
      const model = s.phase === 'model-playing' && s.playing === i;
      const current = (mark === 'pending' || mark === 'red') && i === s.index && s.phase === 'listening';
      const memory = mark === 'pending' && s.memory[i] != null;
      const content = mark === 'green' || mark === 'yellow' ? noteName(midi) : model ? '♪' : memory ? noteName(s.memory[i]!) : MARK_SYMBOL[mark] || (current ? '?' : '');
      return <li key={i} className={`${mark}${current ? ' current' : ''}${model ? ' model' : ''}${memory ? ' memory' : ''}`} data-mark={mark}
        aria-label={`${i + 1}. sävel: ${MARK_TEXT[mark]}${memory ? `, muistivihje ${noteName(s.memory[i]!)}` : ''}${current ? ', vuorossa' : ''}`}>
        <span className="slot-note" aria-hidden="true">{content}</span>
        {(mark === 'green' || mark === 'yellow') && <span className="slot-symbol" aria-hidden="true">{MARK_SYMBOL[mark]}</span>}
      </li>;
    })}
  </ol>;
}

export function Riffikaiku({ game }: { game: RiffGame }) {
  const s = useSyncExternalStore(game.subscribe, game.getState);
  const [tapped, setTapped] = useState<{ p: Position; n: number } | null>(null);
  const tapTimer = useRef<ReturnType<typeof setTimeout>>();
  const clearedHeading = useRef<HTMLHeadingElement>(null);
  useEffect(() => { if (s.phase === 'level-complete') clearedHeading.current?.focus(); }, [s.phase]);

  useEffect(() => {
    // Taustavälilehti: pysäytä soitto ja vapauta mikrofoni. Jatko vaatii painalluksen.
    const hidden = () => { if (document.visibilityState === 'hidden') game.pause('background'); };
    const leave = () => game.stop();
    const devices = () => void game.refreshDevices();
    document.addEventListener('visibilitychange', hidden);
    window.addEventListener('pagehide', leave);
    navigator.mediaDevices?.addEventListener?.('devicechange', devices);
    return () => {
      document.removeEventListener('visibilitychange', hidden); window.removeEventListener('pagehide', leave);
      navigator.mediaDevices?.removeEventListener?.('devicechange', devices); clearTimeout(tapTimer.current);
    };
  }, [game]);

  const total = s.riff.midi.length;
  const inGame = ['model-playing', 'output-settling', 'listening', 'success', 'retry', 'paused'].includes(s.phase);
  const board = s.input === 'board';
  const boardLive = board && ['listening', 'success', 'retry'].includes(s.phase);
  const area = boardArea(s);
  const limited = s.level.strings.length < ALL_STRINGS.length;

  function tap(p: Position) {
    if (!game.tap(p.midi)) return;
    clearTimeout(tapTimer.current);
    setTapped(prev => ({ p, n: (prev?.n ?? 0) + 1 }));
    tapTimer.current = setTimeout(() => setTapped(null), 450);
  }
  const marks: Mark[] = [
    ...(s.hint ? hintMarks(s) : []),
    ...(tapped && board ? [{ ...tapped.p, kind: 'playing' as const, label: noteName(tapped.p.midi) }] : []),
  ];

  if (s.phase === 'idle') {
    const summary = (input: 'mic' | 'board') => { const p = game.progress(input); return `taso ${p.level}, läpäisty ${p.completed.length}/${LEVELS.length}`; };
    return <section className="riff-game" data-phase="idle" aria-labelledby="riff-title">
      <div className="riff-intro">
        <p className="eyebrow">KAIKUPELI · PROTOTYYPPI 0.2</p>
        <h1 id="riff-title">Riffikaiku</h1>
        <p>Kuuntele lyhyt riffi ja soita se takaisin samassa järjestyksessä. Ensin yhdellä kielellä, sitten kahdella ja lopuksi laajemmalla otelaudalla. Ei aikarajaa, ei elämiä.</p>
      </div>
      <h2>Millä soitat?</h2>
      <div className="riff-choices">
        <button type="button" className="riff-choice primary" onClick={() => game.startMic()}>
          <strong>Oikea kitara</strong>
          <span>Soita omalla kitaralla. Valitse äänitulo, testaa mikrofoni ja viritä halutessasi. Ääni käsitellään vain tässä selaimessa eikä sitä tallenneta.</span>
        </button>
        <button type="button" className="riff-choice" onClick={() => game.startBoard()}>
          <strong>Virtuaalikitara</strong>
          <span>Soita otelaudalla hiirellä tai kosketuksella. Ei mikrofonia, suoraan ensimmäiseen harjoitukseen.</span>
        </button>
      </div>
      <p className="riff-tally" data-testid="tally">Oikea kitara: {summary('mic')} · Virtuaalikitara: {summary('board')}</p>
      <p className="riff-tools-links">Oikean kitaran työkalut:{' '}
        <button type="button" className="link" onClick={() => game.openTools('tuner')}>Viritin</button>{' · '}
        <button type="button" className="link" onClick={() => game.openTools('diagnostics')}>Mikrofonin diagnostiikka</button></p>
    </section>;
  }

  return <section className="riff-game" data-phase={s.phase} data-input={s.input} aria-labelledby="riff-title">
    <div className="riff-top">
      <h1 id="riff-title">Riffikaiku</h1>
      <span>{s.input === 'mic' ? 'Oikea kitara' : 'Virtuaalikitara'}{s.micInfo && s.input === 'mic' ? ` · ${s.micInfo.label}` : ''}</span>
    </div>

    {s.phase === 'permission' && <div className="riff-panel">
      <p className="riff-status" role="status">{PHASE_TEXT.permission}</p>
      <p className="riff-help">Salli mikrofoni selaimen kysymyksestä. Voit myös pelata virtuaalikitaralla.</p>
      <div className="riff-actions"><button type="button" onClick={() => game.startBoard()}>Pelaa virtuaalikitaralla</button><button type="button" onClick={() => game.stop()}>Takaisin</button></div>
    </div>}

    {s.phase === 'error' && <div className="riff-panel">
      <p className="riff-status bad" role="alert" data-testid="riff-error">{s.error}</p>
      <div className="riff-actions">
        <button type="button" className="primary" onClick={() => game.startBoard()}>Pelaa virtuaalikitaralla</button>
        <button type="button" onClick={() => game.startMic()}>Yritä mikrofonia uudelleen</button>
        <button type="button" onClick={() => game.stop()}>Takaisin</button>
      </div>
      {s.devices.length > 0 && <DeviceSelect s={s} game={game} />}
    </div>}

    {s.phase === 'mic-check' && <div className="riff-panel" data-testid="mic-setup">
      <h2>Oikea kitara: valmistelu</h2>
      <DeviceSelect s={s} game={game} />
      <h3>Mikrofonin testi</h3>
      {s.calibrating
        ? <p className="riff-status" role="status" data-testid="calibrating">Pidä kielet hiljaa hetki: mitataan taustakohinaa…</p>
        : <p>Soita <strong>vapaa B-kieli ({noteName(CHECK_MIDI)})</strong>, toiseksi ohuin kieli, ja anna sen soida hetki.</p>}
      <p className="riff-heard">Mikrofoni kuulee: <strong data-testid="heard">{heardText(s)}</strong></p>
      {s.feedback && <p className={`riff-feedback ${s.feedback.tone}`} role="status" data-testid="feedback">{s.feedback.text}</p>}
      <div className="riff-actions">
        <button type="button" className="primary" disabled={s.check === 'waiting'} onClick={() => game.continueAfterCheck()}>{s.check === 'other' ? 'Aloita silti harjoitus' : 'Aloita harjoitus'}</button>
        <button type="button" onClick={() => game.openTools('tuner')}>Viritä kitara (valinnainen)</button>
        <button type="button" onClick={() => game.openTools('diagnostics')}>Mikrofonin diagnostiikka</button>
        <button type="button" onClick={() => game.switchInput('board')}>Pelaa virtuaalikitaralla</button>
        <button type="button" onClick={() => game.stop()}>Lopeta</button>
      </div>
      <p className="riff-help">Jos sävel ei tunnistu, avaa diagnostiikka: se näyttää, tuleeko ääntä, tunnistuuko sävelkorkeus ja hyväksytäänkö näppäily.</p>
    </div>}

    {s.phase === 'tools' && <div className="riff-panel" data-testid="tools">
      <div className="riff-tabs" role="tablist" aria-label="Mikrofonin työkalut">
        <button type="button" role="tab" aria-selected={s.tool === 'tuner'} onClick={() => game.setTool('tuner')}>Viritin</button>
        <button type="button" role="tab" aria-selected={s.tool === 'diagnostics'} onClick={() => game.setTool('diagnostics')}>Diagnostiikka</button>
      </div>
      <DeviceSelect s={s} game={game} />
      {s.calibrating && <p className="riff-status" role="status" data-testid="calibrating">Pidä kielet hiljaa hetki: mitataan taustakohinaa…</p>}
      {s.feedback && !s.calibrating && <p className={`riff-feedback ${s.feedback.tone}`} role="status">{s.feedback.text}</p>}
      {s.tool === 'tuner' ? <TunerView s={s} game={game} /> : <DiagnosticsView s={s} />}
      <div className="riff-actions">
        <button type="button" className="primary" onClick={() => game.startFromTools()}>Aloita harjoitus</button>
        <button type="button" onClick={() => game.closeTools()}>Takaisin</button>
        <button type="button" onClick={() => game.calibrate()} disabled={s.calibrating}>Mittaa taustakohina uudelleen</button>
      </div>
    </div>}

    {s.phase === 'levels' && <div className="riff-panel" data-testid="levels">
      <h2>Tasot</h2>
      <ol className="riff-levels">{LEVELS.map(level => {
        const done = s.completedLevels.includes(level.number), open = s.unlockedLevels.includes(level.number);
        const current = game.progress(s.input).level === level.number;
        return <li key={level.number} className={done ? 'done' : open ? 'open' : 'locked'}>
          <div><strong>Taso {level.number} · {level.title}</strong><span>{stringWord(level.strings.length)} · {done ? 'läpäisty' : current ? 'kesken' : open ? 'avattu' : 'lukittu'}</span></div>
          {open && <button type="button" className={current ? 'primary' : ''} onClick={() => game.chooseLevel(level.number, done && !current)}>
            {current ? 'Jatka' : done ? 'Harjoittele uudelleen' : 'Aloita'}</button>}
        </li>;
      })}</ol>
      <div className="riff-actions"><button type="button" onClick={() => game.stop()}>Lopeta</button></div>
    </div>}

    {s.phase === 'level-complete' && <div className="riff-panel riff-cleared" data-testid="level-complete">
      <h2 tabIndex={-1} ref={clearedHeading}>Onneksi olkoon!</h2>
      {s.level.number < LEVELS.length ? <>
        <p className="riff-cleared-big">Läpäisit tason {s.level.number}!</p>
        <p>Soitit kaikki kolme riffiä oikein. Olet valmis seuraavaan haasteeseen.</p>
      </> : <>
        <p className="riff-cleared-big">Läpäisit kaikki {LEVELS.length} tasoa!</p>
        <p>Soitit kaikki {RIFFS.length} riffiä virheettömästi. Ensimmäinen harjoituskokonaisuus on valmis.</p>
      </>}
      <div className="riff-actions">
        {s.level.number < LEVELS.length && <button type="button" className="primary" onClick={() => game.continueLevel()}>Jatka tasolle {s.level.number + 1}</button>}
        <button type="button" onClick={() => game.repeatLevel()}>Harjoittele tasoa uudelleen</button>
        <button type="button" onClick={() => game.openLevels()}>Takaisin tasovalikkoon</button>
      </div>
    </div>}

    {inGame && <div className="riff-panel riff-play">
      <div className="riff-heading">
        <h2 data-testid="level-heading">{s.tutorial ? 'Opastus: kaksi säveltä' : `Taso ${s.level.number} · Riffi ${s.riffNumber}/${s.level.riffs.length}`}</h2>
        <span>{s.tutorial ? 'B-kieli' : `${s.riff.title} · ${s.level.title}`}</span>
      </div>
      {s.input === 'mic' && <p className="riff-instruction" data-testid="instruction">{s.tutorial ? LEVELS[0].instruction : s.level.instruction}</p>}
      <p className={`riff-status ${s.phase === 'listening' ? 'turn' : s.phase === 'success' ? 'good' : ''}`} role="status" data-testid="riff-status">
        {s.phase === 'listening' ? (board ? 'Sinun vuorosi: soita riffi otelaudalla.' : 'Sinun vuorosi: mikrofoni kuuntelee.') : s.phase === 'paused' ? PAUSE_TEXT[s.pausedReason ?? 'manual'] : PHASE_TEXT[s.phase]}
      </p>

      <Slots s={s} />
      <p className="riff-count" data-testid="count">Ratkaistu {s.index}/{total}{s.memory.some(m => m !== null) ? ' · muistivihjeet käytössä' : ''}</p>

      {s.input === 'mic' && s.phase !== 'paused' && <p className="riff-heard">Mikrofoni kuulee: <strong data-testid="heard">{s.phase === 'model-playing' ? 'tauolla mallin ajan' : heardText(s)}</strong></p>}
      {s.feedback && <p className={`riff-feedback ${s.feedback.tone}`} role="status" data-testid="feedback">{s.feedback.text}</p>}

      {s.hint && <div className="riff-hint" data-testid="hint">
        <p><strong>Sävelet:</strong> {s.riff.midi.map(noteName).join(' – ')}</p>
        <p>{s.riff.tip}</p>
        <p className="riff-help">{board ? 'Sama sävel löytyy usein myös toiselta kieleltä; kaikki samat sävelkorkeudet kelpaavat.' : 'Otelauta ehdottaa soittopaikan. Mikrofoni kuulee vain sävelkorkeuden, ei kieltä eikä sormitusta.'}</p>
      </div>}

      {(board || s.hint) && <div className={`riff-board strings-${area.strings.length}`} data-testid="board">
        <Board area={area} marks={marks} disabled={!boardLive} onAnswer={tap}
          caption={board ? (boardLive ? `Virtuaalikitara: ${stringWord(area.strings.length)}, nauhat 0–5` : 'Virtuaalikitara: odota mallin loppuun') : 'Sävelvihje otelaudalla'} />
        {limited && <label className="riff-toggle">
          <input type="checkbox" checked={s.fullBoard} onChange={e => game.setFullBoard(e.target.checked)} />
          Näytä koko otelauta (kaikki kuusi kieltä)
        </label>}
      </div>}

      <div className="riff-actions">
        {s.phase === 'paused' && <button type="button" className="primary" onClick={() => game.resume()}>Jatka</button>}
        {s.phase === 'success' && <button type="button" className="primary" onClick={() => game.next()}>{s.tutorial ? 'Aloita taso 1' : 'Seuraava riffi'}</button>}
        {s.phase === 'retry' && <>
          <button type="button" className="primary" onClick={() => game.retry(false)}>Yritä uudelleen</button>
          <button type="button" onClick={() => game.retry(true)}>Kuuntele ja yritä</button>
        </>}
        {s.phase !== 'paused' && <button type="button" onClick={() => game.replay()} disabled={s.phase === 'model-playing'}>{s.phase === 'success' || s.phase === 'retry' ? 'Kuuntele riffi' : 'Kuuntele uudelleen'}</button>}
        {(s.phase === 'listening' || s.phase === 'output-settling') && <button type="button" onClick={() => game.restart()} disabled={s.index === 0 && !s.marks.includes('red')}>Aloita alusta</button>}
        {s.phase !== 'paused' && <button type="button" aria-pressed={s.hint} onClick={() => game.toggleHint()}>{s.hint ? 'Piilota sävelvihje' : 'Näytä sävelvihje'}</button>}
        {s.phase !== 'paused' && !['success', 'retry'].includes(s.phase) && <button type="button" onClick={() => game.pause('manual')}>Tauko</button>}
        {!s.tutorial && ['listening', 'success', 'retry', 'paused'].includes(s.phase) && <button type="button" onClick={() => game.openLevels()}>Tasot</button>}
        <button type="button" onClick={() => game.stop()}>Lopeta</button>
      </div>

      {s.input === 'mic' && s.phase !== 'paused' && <details className="riff-details" onToggle={e => game.setDiagnosticsOpen((e.target as HTMLDetailsElement).open)}>
        <summary>Mikrofonin tiedot ja äänitulo</summary>
        <DeviceSelect s={s} game={game} />
        {s.diagOpen && <DiagnosticsView s={s} compact />}
      </details>}

      <p className="riff-switch">
        {board
          ? <button type="button" className="link" onClick={() => game.switchInput('mic')}>Vaihda oikeaan kitaraan (mikrofoni)</button>
          : <button type="button" className="link" onClick={() => game.switchInput('board')}>Vaihda virtuaalikitaraan</button>}
        <span> · Läpäistyt tasot tällä tavalla: <span data-testid="levels-done">{s.completedLevels.length}/{LEVELS.length}</span></span>
      </p>
    </div>}
  </section>;
}
