import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Board } from '../harjoittelija/Board';
import type { Area, Mark } from '../harjoittelija/engine';
import { positionKey, stringName, type Position } from '../harjoittelija/music';
import { noteName, type GameState, type RiffGame } from './game';
import { DeviceSelect, DiagnosticsView, TunerView } from './MicTools';
import { ALL_STRINGS, CHECK_MIDI, FRET_MAX, FRET_MIN, LEVELS } from './riffs';
import type { SlotMark } from './sequence';

/** Virtuaaliotelauta: aina koko kuusikielinen otelauta, nauhat 0–5. */
export const BOARD_AREA: Area = { strings: ALL_STRINGS, min: FRET_MIN, max: FRET_MAX, fixed: '' };
/** Harjoituskieli(et): korostetaan, mutta muut kielet ovat näkyvissä ja painettavissa. */
export const focusStrings = (s: Pick<GameState, 'level'>) => s.level.strings;

const PAUSE_TEXT = {
  manual: 'Peli on tauolla.',
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

const levelLabel = (n: number) => `${LEVELS[n - 1]?.name ?? `Kotitreeni ${n}`} – ${LEVELS[n - 1]?.title ?? ''}`;

function Slots({ s }: { s: GameState }) {
  const total = s.riff.midi.length;
  return <ol className="riff-slots" aria-label={`Ratkaistu ${s.index} / ${total} säveltä`} data-testid="slots">
    {s.riff.midi.map((midi, i) => {
      const mark = s.marks[i] ?? 'pending';
      const model = s.modelPlaying && s.playing === i;
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
  const inGame = ['ready', 'model-playing', 'output-settling', 'listening', 'success', 'retry', 'paused'].includes(s.phase);
  const view = inGame ? 'play' : s.phase;
  const title = useRef<HTMLHeadingElement>(null);
  const clearedHeading = useRef<HTMLHeadingElement>(null);
  const previousView = useRef(view);
  useEffect(() => {
    if (previousView.current !== view) {
      if (view === 'level-complete') clearedHeading.current?.focus();
      else title.current?.focus();
    }
    previousView.current = view;
  }, [view]);

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
  const board = s.input === 'board';
  const boardLive = board && ['ready', 'listening', 'success', 'retry'].includes(s.phase);
  const focus = focusStrings(s);

  function stop() {
    clearTimeout(tapTimer.current);
    setTapped(null);
    game.stop();
  }

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
    const p = (input: 'mic' | 'board') => game.progress(input);
    const next = p(s.input).level;
    const summary = (input: 'mic' | 'board') => `${LEVELS[p(input).level - 1].name}, suoritettu ${p(input).completed.length}/${LEVELS.length}`;
    return <section className="riff-game" data-phase="idle" aria-labelledby="riff-title">
      <a className="back-link riff-back" href="kitaraharjoittelija.html?polku=otelauta">
        <span aria-hidden="true">←</span> Takaisin harjoitusvalikkoon
      </a>
      <div className="intro riff-intro">
        <h1 id="riff-title" ref={title} tabIndex={-1}>Riffikaiku (beta)</h1>
        <p>Kuuntele lyhyt riffi ja soita se takaisin samassa järjestyksessä. Harjoittele omaan tahtiisi.</p>
      </div>
      <div className="riff-next" data-testid="next-training">
        <p className="eyebrow">{p('mic').completed.length || p('board').completed.length ? 'JATKA' : 'ALOITA TÄSTÄ'}</p>
        <h2>{levelLabel(next)}</h2>
        <p>Kolme lyhyttä riffiä. Harjoituskieli näkyy korostettuna otelaudalla.</p>
      </div>
      <h2>Millä soitat?</h2>
      <div className="riff-choices">
        <button type="button" className="riff-choice" onClick={() => game.startMic()}>
          <strong>Oikea kitara</strong>
          <span>Soita omalla kitaralla. Valitse äänitulo, testaa mikrofoni ja viritä halutessasi. Ääni käsitellään vain tässä selaimessa eikä sitä tallenneta.</span>
        </button>
        <button type="button" className="riff-choice" onClick={() => game.startBoard()}>
          <strong>Virtuaalikitara</strong>
          <span>Soita otelaudalla hiirellä, kosketuksella tai näppäimistöllä. Ei mikrofonia.</span>
        </button>
      </div>
      <p className="riff-tally" data-testid="tally">Oikea kitara: {summary('mic')} · Virtuaalikitara: {summary('board')}</p>
      <div className="riff-tools-links" role="group" aria-label="Oikean kitaran työkalut">
        <button type="button" className="link" onClick={() => game.openTools('tuner')}>Viritin</button>
        <button type="button" className="link" onClick={() => game.openTools('diagnostics')}>Mikrofonin diagnostiikka</button>
      </div>
    </section>;
  }

  const turnText = s.phase === 'ready' ? 'Kuuntele riffi aloittaaksesi.'
    : s.phase === 'model-playing' ? 'Kuuntele riffi…'
    : s.phase === 'output-settling' ? 'Valmistaudu…'
    : s.phase === 'listening' ? (s.modelPlaying ? 'Kuuntele riffi…' : 'Sinun vuorosi!')
    : s.phase === 'success' ? 'Riffi läpäisty!'
    : s.phase === 'retry' ? 'Riffi soitettu loppuun'
    : s.phase === 'paused' ? PAUSE_TEXT[s.pausedReason ?? 'manual'] : '';

  return <section className="riff-game" data-phase={s.phase} data-input={s.input} aria-labelledby="riff-title">
    {!inGame && <div className="riff-top">
      <h1 id="riff-title" ref={title} tabIndex={-1}>Riffikaiku (beta)</h1>
      <span>{s.input === 'mic' ? 'Oikea kitara' : 'Virtuaalikitara'}{s.micInfo && s.input === 'mic' ? ` · ${s.micInfo.label}` : ''}</span>
    </div>}

    {s.phase === 'permission' && <div className="riff-panel">
      <p className="riff-status" role="status">Pyydetään mikrofonilupaa…</p>
      <p className="riff-help">Salli mikrofoni selaimen kysymyksestä. Voit myös pelata virtuaalikitaralla.</p>
      <div className="riff-actions"><button type="button" onClick={() => game.startBoard()}>Pelaa virtuaalikitaralla</button><button type="button" onClick={stop}>Takaisin aloitukseen</button></div>
    </div>}

    {s.phase === 'error' && <div className="riff-panel">
      <p className="riff-status bad" role="alert" data-testid="riff-error">{s.error}</p>
      <div className="riff-actions">
        <button type="button" className="primary" onClick={() => game.startBoard()}>Pelaa virtuaalikitaralla</button>
        <button type="button" onClick={() => game.startMic()}>Yritä mikrofonia uudelleen</button>
        <button type="button" onClick={stop}>Takaisin aloitukseen</button>
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
        <button type="button" onClick={stop}>Takaisin aloitukseen</button>
      </div>
      <p className="riff-help">Jos sävel ei tunnistu, avaa diagnostiikka: se näyttää, tuleeko ääntä, tunnistuuko sävelkorkeus ja hyväksytäänkö näppäily.</p>
    </div>}

    {s.phase === 'tools' && <div className="riff-panel" data-testid="tools">
      <div className="riff-tools-switch" role="group" aria-label="Mikrofonin työkalut">
        <button type="button" aria-pressed={s.tool === 'tuner'} onClick={() => game.setTool('tuner')}>Viritin</button>
        <button type="button" aria-pressed={s.tool === 'diagnostics'} onClick={() => game.setTool('diagnostics')}>Diagnostiikka</button>
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
      <h2>Kotitreenit</h2>
      <p className="riff-help">Jokainen kotitreeni harjoittaa yhtä kieltä kolmella riffillä. Seuraava avautuu edellisen suorittamisesta.</p>
      <ol className="riff-levels">{LEVELS.map(level => {
        const done = s.completedLevels.includes(level.number), open = s.unlockedLevels.includes(level.number);
        const current = game.progress(s.input).level === level.number;
        return <li key={level.number} className={done ? 'done' : open ? 'open' : 'locked'}>
          <div><strong>{level.name} – {level.title}</strong><span>{done ? 'suoritettu' : current ? 'kesken' : open ? 'avattu' : 'lukittu'}</span></div>
          {open && <button type="button" className={current ? 'primary' : ''} onClick={() => game.chooseLevel(level.number, done && !current)}>
            {current ? 'Jatka' : done ? 'Harjoittele uudelleen' : 'Aloita'}</button>}
        </li>;
      })}</ol>
      <p className="riff-help">Muiden kielten kotitreenit tulevat myöhemmin.</p>
      <div className="riff-actions"><button type="button" onClick={stop}>Takaisin aloitukseen</button></div>
    </div>}

    {s.phase === 'level-complete' && <div className="riff-panel riff-cleared" data-testid="level-complete">
      <h2 tabIndex={-1} ref={clearedHeading}>Onneksi olkoon!</h2>
      <p className="riff-cleared-big">{levelLabel(s.level.number)} suoritettu!</p>
      {s.level.number < LEVELS.length
        ? <p>Soitit kaikki kolme riffiä oikein. Olet valmis seuraavaan kotitreeniin: {levelLabel(s.level.number + 1)}.</p>
        : <p>Olet suorittanut kaikki nykyiset kotitreenit. Muiden kielten kotitreenit ovat tulossa.</p>}
      <div className="riff-actions">
        {s.level.number < LEVELS.length && <button type="button" className="primary" onClick={() => game.continueLevel()}>Jatka: {LEVELS[s.level.number].name}</button>}
        <button type="button" onClick={() => game.repeatLevel()}>Harjoittele uudelleen</button>
        <button type="button" onClick={() => game.openLevels()}>Kotitreenit</button>
      </div>
      <div className="riff-end-actions">
        <button type="button" onClick={stop}>Takaisin aloitukseen</button>
      </div>
    </div>}

    {inGame && <div className="riff-panel riff-play">
      <header className="riff-round-heading">
        <p className="riff-brand">Riffikaiku (beta)</p>
        <h1 id="riff-title" ref={title} tabIndex={-1} data-testid="level-heading">{s.tutorial ? `${LEVELS[0].name} · Opastus` : `${s.level.name} · Riffi ${s.riffNumber}/${s.level.riffs.length}`}</h1>
        <p className="riff-name">{s.tutorial ? 'Kaksi säveltä' : s.riff.title}</p>
      </header>

      <div className="riff-turn">
        <p className={`riff-status ${s.phase === 'listening' && !s.modelPlaying ? 'turn' : s.phase === 'success' ? 'good' : ''}`} role="status" data-testid="riff-status">{turnText}</p>
        <p className="riff-instruction" data-testid="instruction">{s.level.instruction}</p>
      </div>

      <Slots s={s} />
      <p className="riff-count" data-testid="count">Ratkaistu {s.index}/{total}{s.memory.some(m => m !== null) ? ' · muistivihjeet käytössä' : ''}</p>
      {s.feedback && <p className={`riff-feedback ${s.feedback.tone}`} role="status" data-testid="feedback">{s.feedback.text}</p>}
      {s.input === 'mic' && s.phase !== 'paused' && <p className="riff-heard">
        Mikrofoni kuulee{['ready', 'success', 'retry'].includes(s.phase) && !s.modelPlaying ? ' (vapaa kokeilu, ei arvioida)' : ''}: <strong data-testid="heard">{s.modelPlaying ? 'tauolla mallin ajan' : heardText(s)}</strong></p>}

      {s.hint && <div className="riff-hint" data-testid="hint">
        <p><strong>Sävelet:</strong> {s.riff.midi.map(noteName).join(' – ')}</p>
        <p>{s.riff.tip}</p>
      </div>}

      <div className={`riff-board ${focus.length < ALL_STRINGS.length ? 'has-focus' : ''} ${focus.map(n => `focus-s${n}`).join(' ')}`} data-testid="board">
        {focus.length < ALL_STRINGS.length && <p className="riff-focus-legend" data-testid="focus-legend">
          <span className="swatch" aria-hidden="true" /> Harjoituskieli: {focus.map(n => `${stringName[n]}-kieli`).join(' ja ')}{focus.length === 1 ? ` (${n2(focus[0])})` : ''}
        </p>}
        <Board area={BOARD_AREA} marks={marks} disabled={!boardLive} onAnswer={tap}
          caption={board ? (boardLive ? 'Virtuaalikitara: kaikki kuusi kieltä, nauhat 0–5' : 'Virtuaalikitara: odota mallin loppuun')
            : 'Otelauta: soita oikealla kitaralla (mikrofoni kuulee vain sävelkorkeuden)'} />
      </div>

      <div className="riff-actions riff-main-actions">
        {s.phase === 'paused' && <button type="button" className="primary" onClick={() => game.resume()}>Jatka</button>}
        {s.phase === 'success' && <>
          <button type="button" className="primary" onClick={() => game.next()}>{s.tutorial ? `Aloita ${LEVELS[0].name}` : 'Seuraava riffi'}</button>
          {!s.tutorial && <button type="button" onClick={() => game.playAgain()}>Soita uudelleen</button>}
        </>}
        {s.phase === 'retry' && <button type="button" className="primary" onClick={() => game.retry()}>Yritä uudelleen</button>}
        {s.phase !== 'paused' && <button type="button" className={['ready', 'listening', 'output-settling', 'model-playing'].includes(s.phase) ? 'primary' : ''}
          onClick={() => game.listen()} aria-pressed={s.modelPlaying} data-testid="listen">{s.modelPlaying ? 'Pysäytä kuuntelu' : 'Kuuntele riffi'}</button>}
        {s.phase !== 'paused' && <button type="button" aria-pressed={s.hint} onClick={() => game.toggleHint()}>{s.hint ? 'Piilota vihje' : 'Vihje'}</button>}
      </div>

      <div className="riff-end-actions">
        <button type="button" onClick={stop}>Lopeta harjoitus</button>
      </div>
    </div>}
  </section>;
}

/** Kielen järjestysluku sanallisesti: 1 = ohuin, 2 = toiseksi ohuin, … */
function n2(string: number) {
  return ['ohuin kieli', 'toiseksi ohuin', 'kolmanneksi ohuin', 'kolmanneksi paksuin', 'toiseksi paksuin', 'paksuin kieli'][string];
}
