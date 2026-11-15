/** Riffikaiku-peli – virtuaalikitara: pelin valikko, pelinäkymä ja kotitreenin onnittelu. */
import { useEffect, useRef, useSyncExternalStore, type RefObject } from 'react';
import type { GameState, RiffGame } from './game';
import { GameRound } from './GameRound';
import { modeHref } from './modes';
import { LEVELS } from './riffs';
import { Breadcrumbs, ModeTag } from './ui';

const IN_ROUND = ['practice', 'take', 'success', 'retry'];
const levelLabel = (n: number) => `${LEVELS[n - 1]?.name ?? `Kotitreeni ${n}`} – ${LEVELS[n - 1]?.title ?? ''}`;

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
      <p>Kuuntele riffi, harjoittele sen sävelet otelaudalla ja soita se sitten muistista. Riffi läpäistään, kun kaikki
        pallukat ovat vihreitä. Ei aikarajaa eikä elämiä – harjoitteluun pääsee aina takaisin.</p>
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
    <p className="riff-help">Muiden kielten kotitreenit tulevat myöhemmin. Haluatko soittaa oikealla kitaralla? <a href={modeHref('harjoitus')}>Riffiharjoitus – oikea kitara</a>.</p>
  </section>;
}

export function GameView({ game }: { game: RiffGame }) {
  const s = useSyncExternalStore(game.subscribe, game.getState);
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
  // Uusi riffi: kohdistus riffin otsikkoon.
  const previousRiff = useRef(s.riff.id);
  useEffect(() => {
    if (previousRiff.current !== s.riff.id && view === 'play') title.current?.focus();
    previousRiff.current = s.riff.id;
  }, [s.riff.id, view]);

  useEffect(() => {
    const hidden = () => { if (document.visibilityState === 'hidden') game.hidden(); };
    const leave = () => game.dispose();
    document.addEventListener('visibilitychange', hidden);
    window.addEventListener('pagehide', leave);
    return () => { document.removeEventListener('visibilitychange', hidden); window.removeEventListener('pagehide', leave); };
  }, [game]);

  if (s.phase === 'home') return <GameHome game={game} s={s} titleRef={title} />;
  const home = () => game.home();

  if (s.phase === 'level-complete') {
    const stars = s.level.riffs.filter(r => game.record(r.id).star).length;
    return <section className="riff-game" data-phase={s.phase} data-mode="peli" aria-labelledby="riff-cleared-title">
      <Breadcrumbs mode="peli" />
      <ModeTag mode="peli" />
      <div className="riff-panel riff-cleared" data-testid="level-complete">
        <p className="riff-cleared-badge" aria-hidden="true">{'★'.repeat(stars) + '☆'.repeat(s.level.riffs.length - stars)}</p>
        <h2 id="riff-cleared-title" tabIndex={-1} ref={clearedHeading}>Onneksi olkoon!</h2>
        <p className="riff-cleared-big">{levelLabel(s.level.number)} suoritettu!</p>
        <p>Läpäisit kaikki kolme riffiä virheettömästi. Tähtiä {stars}/{s.level.riffs.length}{stars < s.level.riffs.length ? ' – tähden saa, kun riffi menee virheettä ilman otossa pyydettyä vihjettä.' : ' – kaikki ilman vihjettä!'}</p>
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

  return <GameRound game={game} s={s} titleRef={title} onHome={home} />;
}
