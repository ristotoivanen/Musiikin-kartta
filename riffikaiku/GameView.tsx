/** Riffikaiku-peli – virtuaalikitara: pelin valikko, pelinäkymä ja kotitreenin onnittelu. */
import { useEffect, useRef, useState, useSyncExternalStore, type RefObject } from 'react';
import type { Mark } from '../harjoittelija/engine';
import type { Position } from '../harjoittelija/music';
import { noteName, type GameState, type RiffGame, type TapResult } from './game';
import { LEVELS } from './riffs';
import type { SlotMark } from './sequence';
import { Breadcrumbs, ModeTag, NoteSlots, RiffBoard, riffMarks, type Slot } from './ui';

/** Pallukan tekstivastine ja symboli: väri ei ole ainoa vihje. */
const MARK_TEXT: Record<SlotMark, string> = { pending: 'harmaa, ei vielä ratkaistu', red: 'punainen, väärä sävel – yritä tätä kohtaa uudelleen', green: 'vihreä, oikein heti', yellow: 'keltainen, löytyi virheen jälkeen' };
const MARK_SYMBOL: Record<SlotMark, string> = { pending: '', red: '✗', green: '✓', yellow: '↻' };
const IN_ROUND = ['ready', 'model-playing', 'listening', 'success', 'retry'];
const levelLabel = (n: number) => `${LEVELS[n - 1]?.name ?? `Kotitreeni ${n}`} – ${LEVELS[n - 1]?.title ?? ''}`;

function gameSlots(s: GameState): Slot[] {
  return s.riff.midi.map((midi, i) => {
    const mark = s.marks[i] ?? 'pending';
    const model = s.modelPlaying && s.playing === i;
    const current = (mark === 'pending' || mark === 'red') && i === s.index && s.phase === 'listening';
    const memory = mark === 'pending' && s.memory[i] != null;
    const solved = mark === 'green' || mark === 'yellow';
    return {
      cls: `${mark}${current ? ' current' : ''}${model ? ' model' : ''}${memory ? ' memory' : ''}`, mark,
      content: solved ? noteName(midi) : model ? '♪' : memory ? noteName(s.memory[i]!) : MARK_SYMBOL[mark] || (current ? '?' : ''),
      symbol: solved ? MARK_SYMBOL[mark] : undefined,
      label: `${i + 1}. sävel: ${MARK_TEXT[mark]}${memory ? `, muistivihje ${noteName(s.memory[i]!)}` : ''}${current ? ', vuorossa' : ''}`,
    };
  });
}

/** Kotitreenin riffit: läpäisty (✓), tähti (★) ja nykyinen. */
function RunProgress({ game, s }: { game: RiffGame; s: GameState }) {
  if (s.tutorial) return null;
  return <ol className="riff-run" aria-label={`${s.level.name}: läpäisty ${s.passedInRun.length}/${s.level.riffs.length} riffiä`} data-testid="run-progress">
    {s.level.riffs.map((r, i) => {
      const passed = s.passedInRun.includes(r.id), star = game.record(r.id).star, current = r.id === s.riff.id;
      return <li key={r.id} className={`${passed ? 'passed' : ''}${current ? ' current' : ''}`}
        aria-label={`Riffi ${i + 1}: ${r.title}${passed ? ', läpäisty' : ''}${star ? ', tähti' : ''}${current ? ', nyt' : ''}`}>
        <span aria-hidden="true">{passed ? (star ? '★' : '✓') : i + 1}</span>
      </li>;
    })}
  </ol>;
}

function GameHome({ game, s, titleRef }: { game: RiffGame; s: GameState; titleRef: RefObject<HTMLHeadingElement> }) {
  const all = LEVELS.flatMap(l => l.riffs).map(r => game.record(r.id));
  const passed = all.filter(r => r.passed).length, stars = all.filter(r => r.star).length;
  const current = LEVELS.find(l => l.number === s.level.number) ?? LEVELS[0];
  // Nykyisen kotitreenin kaikki riffit läpäisty: pääpainike tarjoaa seuraavan avautuneen kotitreenin.
  const runDone = !s.tutorial && s.passedInRun.length >= current.riffs.length;
  const next = runDone ? LEVELS.find(l => l.number === current.number + 1 && s.unlockedLevels.includes(l.number)) : undefined;
  const playLabel = s.tutorial ? 'Aloita peli: lyhyt opastus'
    : next ? `Aloita: ${next.name} – ${next.title}`
    : runDone ? 'Kaikki kotitreenit suoritettu – valitse uusinta'
    : `${passed > 0 || s.passedInRun.length > 0 ? 'Jatka' : 'Aloita'}: ${current.name} · Riffi ${s.passedInRun.length + 1}/${current.riffs.length}`;
  const play = () => next ? game.chooseLevel(next.number) : game.play();
  return <section className="riff-game" data-phase="home" data-mode="peli" aria-labelledby="riff-title">
    <Breadcrumbs mode="peli" />
    <div className="intro riff-intro">
      <ModeTag mode="peli" />
      <h1 id="riff-title" ref={titleRef} tabIndex={-1}>Kuuntele ja toista</h1>
      <p>Kuuntele riffi ja toista se otelaudalla samassa järjestyksessä. Riffi läpäistään, kun kaikki pallukat ovat vihreitä.
        Ei aikarajaa eikä elämiä – yritä niin monta kertaa kuin haluat.</p>
    </div>
    <dl className="riff-score" data-testid="game-score">
      <div><dt>Läpäistyt riffit</dt><dd>{passed}/{all.length}</dd></div>
      <div><dt>Tähdet <small>(ilman vihjettä)</small></dt><dd><span aria-hidden="true">★ </span>{stars}/{all.length}</dd></div>
      <div><dt>Kotitreenit</dt><dd>{s.completedLevels.length}/{LEVELS.length}</dd></div>
    </dl>
    <div className="riff-actions">
      <button type="button" className="primary riff-play-button" onClick={play}>{playLabel}</button>
    </div>
    <h2>Kotitreenit</h2>
    <p className="riff-help">Jokainen kotitreeni harjoittaa yhtä kieltä kolmella riffillä. Seuraava avautuu, kun edellisen kaikki kolme riffiä on läpäisty.</p>
    <ol className="riff-levels" data-testid="levels">{LEVELS.map(level => {
      const done = s.completedLevels.includes(level.number), open = s.unlockedLevels.includes(level.number);
      const isCurrent = s.level.number === level.number && !s.tutorial && !runDone;
      return <li key={level.number} className={done ? 'done' : open ? 'open' : 'locked'}>
        <div>
          <strong>{level.name} – {level.title}</strong>
          <span>{done ? 'suoritettu' : isCurrent ? 'kesken' : open ? 'avattu' : 'lukittu – läpäise ensin edellinen kotitreeni'}</span>
          <span className="riff-level-riffs">{level.riffs.map(r => { const rec = game.record(r.id); return <span key={r.id} className={rec.star ? 'star' : rec.passed ? 'passed' : ''}>
            <span aria-hidden="true">{rec.star ? '★' : rec.passed ? '✓' : '○'}</span> {r.title}<span className="sr-only">{rec.star ? ', läpäisty ilman vihjettä' : rec.passed ? ', läpäisty' : ', ei vielä läpäisty'}</span></span>; })}</span>
        </div>
        {open && <button type="button" className={isCurrent ? 'primary' : ''} onClick={() => game.chooseLevel(level.number, done && !isCurrent)}>
          {isCurrent ? 'Jatka' : done ? 'Pelaa uudelleen' : 'Aloita'}</button>}
      </li>;
    })}</ol>
    <p className="riff-help">Muiden kielten kotitreenit tulevat myöhemmin. Haluatko soittaa oikealla kitaralla? <a href="?tila=harjoitus">Riffiharjoitus – oikea kitara</a>.</p>
  </section>;
}

export function GameView({ game }: { game: RiffGame }) {
  const s = useSyncExternalStore(game.subscribe, game.getState);
  const [tapped, setTapped] = useState<{ p: Position; result: TapResult; n: number } | null>(null);
  const tapTimer = useRef<ReturnType<typeof setTimeout>>();
  const view = IN_ROUND.includes(s.phase) ? 'play' : s.phase;
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
    const hidden = () => { if (document.visibilityState === 'hidden') game.hidden(); };
    const leave = () => game.dispose();
    document.addEventListener('visibilitychange', hidden);
    window.addEventListener('pagehide', leave);
    return () => { document.removeEventListener('visibilitychange', hidden); window.removeEventListener('pagehide', leave); clearTimeout(tapTimer.current); };
  }, [game]);
  // Uusi riffi tai yritys: edellisen painalluksen välähdys pois.
  useEffect(() => { setTapped(null); }, [s.riff.id, s.phase]);

  if (s.phase === 'home') return <GameHome game={game} s={s} titleRef={title} />;

  function home() {
    clearTimeout(tapTimer.current);
    setTapped(null);
    game.home();
  }
  function tap(p: Position) {
    const result = game.tap(p.midi);
    if (!result) return;
    clearTimeout(tapTimer.current);
    setTapped(prev => ({ p, result, n: (prev?.n ?? 0) + 1 }));
    tapTimer.current = setTimeout(() => setTapped(null), 600);
  }

  if (s.phase === 'level-complete') {
    const stars = s.level.riffs.filter(r => game.record(r.id).star).length;
    return <section className="riff-game" data-phase={s.phase} data-mode="peli" aria-labelledby="riff-cleared-title">
      <Breadcrumbs mode="peli" />
      <ModeTag mode="peli" />
      <div className="riff-panel riff-cleared" data-testid="level-complete">
        <p className="riff-cleared-badge" aria-hidden="true">{'★'.repeat(stars) + '☆'.repeat(s.level.riffs.length - stars)}</p>
        <h2 id="riff-cleared-title" tabIndex={-1} ref={clearedHeading}>Onneksi olkoon!</h2>
        <p className="riff-cleared-big">{levelLabel(s.level.number)} suoritettu!</p>
        <p>Läpäisit kaikki kolme riffiä virheettömästi. Tähtiä {stars}/{s.level.riffs.length}{stars < s.level.riffs.length ? ' – tähden saa, kun riffi menee virheettä ilman vihjettä.' : ' – kaikki ilman vihjettä!'}</p>
        {s.level.number < LEVELS.length
          ? <p>Seuraava kotitreeni on auki: {levelLabel(s.level.number + 1)}.</p>
          : <p>Olet suorittanut kaikki nykyiset kotitreenit. Muiden kielten kotitreenit ovat tulossa.</p>}
        <div className="riff-actions">
          {s.level.number < LEVELS.length && <button type="button" className="primary" onClick={() => game.continueLevel()}>Jatka: {LEVELS[s.level.number].name}</button>}
          <button type="button" onClick={() => game.repeatLevel()}>Pelaa uudelleen</button>
          <button type="button" onClick={home}>Pelin valikko</button>
        </div>
      </div>
    </section>;
  }

  const total = s.riff.midi.length;
  const boardLive = ['ready', 'listening', 'success', 'retry'].includes(s.phase) && !s.modelPlaying;
  const turnText = s.phase === 'ready' ? 'Kuuntele riffi aloittaaksesi.'
    : s.phase === 'model-playing' ? 'Kuuntele riffi…'
    : s.phase === 'listening' ? (s.modelPlaying ? 'Kuuntele riffi…' : 'Sinun vuorosi!')
    : s.phase === 'success' ? 'Riffi läpäisty!'
    : s.phase === 'retry' ? 'Riffi soitettu loppuun' : '';
  const flash: Mark[] = tapped ? [{ ...tapped.p, kind: tapped.result === 'right' ? 'answer' : tapped.result === 'wrong' ? 'wrong' : 'playing',
    label: tapped.result === 'wrong' ? '✗' : noteName(tapped.p.midi) }] : [];
  const marks: Mark[] = [...(s.hint ? riffMarks(s.riff, s.playing) : []), ...flash];
  const a = s.achievement;

  return <section className="riff-game" data-phase={s.phase} data-mode="peli" aria-labelledby="riff-title">
    <Breadcrumbs mode="peli" />
    <div className="riff-panel riff-play">
      <header className="riff-round-heading">
        <ModeTag mode="peli" />
        <h1 id="riff-title" ref={title} tabIndex={-1} data-testid="level-heading">{s.tutorial ? `${LEVELS[0].name} · Opastus` : `${s.level.name} · Riffi ${s.riffNumber}/${s.level.riffs.length}`}</h1>
        <p className="riff-name">{s.tutorial ? 'Kaksi säveltä' : s.riff.title}</p>
        <RunProgress game={game} s={s} />
      </header>

      <div className="riff-turn">
        <p className={`riff-status ${s.phase === 'listening' && !s.modelPlaying ? 'turn' : s.phase === 'success' ? 'good' : ''}`} role="status" data-testid="riff-status">{turnText}</p>
        <p className="riff-instruction" data-testid="instruction">{s.level.instruction}</p>
      </div>

      <NoteSlots slots={gameSlots(s)} label={`Ratkaistu ${s.index} / ${total} säveltä`} />
      <p className="riff-count" data-testid="count">Ratkaistu {s.index}/{total}{s.memory.some(m => m !== null) ? ' · muistivihjeet käytössä' : ''}</p>
      {a && (a.firstStar || a.newBest || (a.flawless && a.firstPass)) && <p className="riff-achievement" data-testid="achievement">
        {a.firstStar ? <><span aria-hidden="true">★ </span>Tähti! Virheetön ilman vihjettä.</> : a.flawless && a.firstPass ? <><span aria-hidden="true">✓ </span>Ensimmäinen läpäisy!</> : null}
        {a.newBest && <> Uusi ennätys: {a.wrong === 0 ? 'ei yhtään väärää säveltä' : a.wrong === 1 ? 'vain yksi väärä sävel' : `vain ${a.wrong} väärää säveltä`}.</>}
      </p>}
      {s.feedback && <p className={`riff-feedback ${s.feedback.tone}`} role="status" data-testid="feedback">{s.feedback.text}</p>}

      {s.hint && <div className="riff-hint" data-testid="hint">
        <p><strong>Sävelet:</strong> {s.riff.midi.map(noteName).join(' – ')}</p>
        <p>{s.riff.tip}</p>
      </div>}

      <RiffBoard focus={s.level.strings} marks={marks} disabled={!boardLive} onAnswer={tap}
        caption={boardLive ? 'Virtuaalikitara: kaikki kuusi kieltä, nauhat 0–5' : 'Virtuaalikitara: odota mallin loppuun'} />

      <div className="riff-actions riff-main-actions">
        {s.phase === 'success' && <>
          <button type="button" className="primary" onClick={() => game.next()}>{s.tutorial ? `Aloita ${LEVELS[0].name}` : 'Seuraava riffi'}</button>
          {!s.tutorial && <button type="button" onClick={() => game.playAgain()}>Soita uudelleen</button>}
        </>}
        {s.phase === 'retry' && <button type="button" className="primary" onClick={() => game.retry()}>Yritä uudelleen</button>}
        <button type="button" className={['ready', 'listening', 'model-playing'].includes(s.phase) ? 'primary' : ''}
          onClick={() => game.listen()} aria-pressed={s.modelPlaying} data-testid="listen">{s.modelPlaying ? 'Pysäytä kuuntelu' : 'Kuuntele riffi'}</button>
        <button type="button" aria-pressed={s.hint} onClick={() => game.toggleHint()}>{s.hint ? 'Piilota vihje' : 'Vihje'}</button>
      </div>

      <div className="riff-end-actions">
        <button type="button" onClick={home}>Lopeta peli</button>
      </div>
    </div>
  </section>;
}
