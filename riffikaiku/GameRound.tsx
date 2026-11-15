/**
 * Riffikaiku-pelin riffinäkymä: harjoittelu → arvioitava otto → tulos samassa näkymässä.
 * Vaihe näkyy otsikossa (Harjoittele / Sinun vuorosi! / tulos), ja kohdistus siirtyy siihen vaiheen vaihtuessa.
 */
import { useEffect, useRef, useState, type RefObject } from 'react';
import type { Mark } from '../harjoittelija/engine';
import type { Position } from '../harjoittelija/music';
import { noteName, type GameState, type Phase, type RiffGame, type TapResult } from './game';
import { GUIDANCE, LEVELS } from './riffs';
import type { SlotMark } from './sequence';
import { Breadcrumbs, ModeTag, NoteSlots, RiffBoard, riffMarks, type Slot } from './ui';

/** Pallukan tekstivastine ja symboli: väri ei ole ainoa vihje. */
const MARK_TEXT: Record<SlotMark, string> = { pending: 'harmaa, ei vielä ratkaistu', red: 'punainen, väärä sävel – yritä tätä kohtaa uudelleen', green: 'vihreä, oikein heti', yellow: 'keltainen, löytyi virheen jälkeen' };
const MARK_SYMBOL: Record<SlotMark, string> = { pending: '', red: '✗', green: '✓', yellow: '↻' };

const STAGE: Partial<Record<Phase, { title: string; text: string }>> = {
  practice: { title: 'Harjoittele', text: 'Kuuntele riffi ja etsi sen sävelet otelaudalta omaan tahtiin. Mitään ei vielä arvioida.' },
  take: { title: 'Sinun vuorosi!', text: 'Soita riffi muistista. Painalluksesi tarkistetaan.' },
  success: { title: 'Riffi läpäisty!', text: '' },
  retry: { title: 'Riffi soitettu loppuun', text: '' },
};

function slots(s: GameState): Slot[] {
  return s.riff.midi.map((midi, i) => {
    const model = s.modelPlaying && s.playing === i;
    if (s.phase === 'practice') {
      const shown = s.notesShown;
      return { cls: `${shown ? 'shown' : 'pending'}${model ? ' model' : ''}`, mark: 'pending', content: model ? '♪' : shown ? noteName(midi) : '',
        label: `${i + 1}. sävel${shown ? `: ${noteName(midi)}` : ''}${model ? ', soi nyt' : ''}` };
    }
    const mark = s.marks[i] ?? 'pending';
    const current = (mark === 'pending' || mark === 'red') && i === s.index && s.phase === 'take';
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

function Achievement({ s }: { s: GameState }) {
  const a = s.achievement;
  if (!a || !(a.firstStar || a.newBest || (a.flawless && a.firstPass))) return null;
  return <p className="riff-achievement" data-testid="achievement">
    {a.firstStar ? <><span aria-hidden="true">★ </span>Tähti! Virheetön ilman vihjettä.</> : a.flawless && a.firstPass ? <><span aria-hidden="true">✓ </span>Ensimmäinen läpäisy!</> : null}
    {a.newBest && <> Uusi ennätys: {a.wrong === 0 ? 'ei yhtään väärää säveltä' : a.wrong === 1 ? 'vain yksi väärä sävel' : `vain ${a.wrong} väärää säveltä`}.</>}
  </p>;
}

export function GameRound({ game, s, titleRef, onHome }: { game: RiffGame; s: GameState; titleRef: RefObject<HTMLHeadingElement>; onHome: () => void }) {
  const [tapped, setTapped] = useState<{ p: Position; result: TapResult; n: number } | null>(null);
  const tapTimer = useRef<ReturnType<typeof setTimeout>>();
  const stageRef = useRef<HTMLHeadingElement>(null);
  const previous = useRef(s.phase);
  useEffect(() => () => clearTimeout(tapTimer.current), []);
  // Vaihe vaihtui saman riffin sisällä: kohdistus vaiheen otsikkoon (ruudunlukija kuulee ”Sinun vuorosi!”).
  useEffect(() => {
    if (previous.current !== s.phase) stageRef.current?.focus();
    previous.current = s.phase;
    setTapped(null);
  }, [s.phase, s.riff.id]);

  function tap(p: Position) {
    const result = game.tap(p.midi);
    if (!result) return;
    clearTimeout(tapTimer.current);
    setTapped(prev => ({ p, result, n: (prev?.n ?? 0) + 1 }));
    tapTimer.current = setTimeout(() => setTapped(null), 600);
  }

  const total = s.riff.midi.length;
  const stage = STAGE[s.phase] ?? { title: '', text: '' };
  const practice = s.phase === 'practice', take = s.phase === 'take', result = s.phase === 'success' || s.phase === 'retry';
  const showNotes = (practice && s.notesShown) || (take && s.hint);
  // Oma painallus: otossa vihreä (oikein) tai punainen (väärin); vapaassa kokeilussa violetti, jotta se
  // erottuu mallin kultaisesta ”nyt soi” -korostuksesta.
  const flash: Mark[] = tapped ? [{ ...tapped.p, kind: tapped.result === 'right' ? 'answer' : tapped.result === 'wrong' ? 'wrong' : 'anchor',
    label: tapped.result === 'wrong' ? '✗' : noteName(tapped.p.midi) }] : [];
  const marks: Mark[] = [...(showNotes ? riffMarks(s.riff, s.playing) : []), ...flash];
  const listenButton = (primary = false) => <button type="button" className={primary ? 'primary' : ''} onClick={() => game.listen()} aria-pressed={s.modelPlaying} data-testid="listen">
    {s.modelPlaying ? 'Pysäytä kuuntelu' : 'Kuuntele riffi'}</button>;
  const guide = GUIDANCE[s.guidance];

  return <section className="riff-game" data-phase={s.phase} data-mode="peli" aria-labelledby="riff-title">
    <Breadcrumbs mode="peli" />
    <div className={`riff-panel riff-play stage-${s.phase}`}>
      <header className="riff-round-heading">
        <ModeTag mode="peli" />
        <h1 id="riff-title" ref={titleRef} tabIndex={-1} data-testid="level-heading">{s.tutorial ? `${LEVELS[0].name} · Opastus` : `${s.level.name} · Riffi ${s.riffNumber}/${s.level.riffs.length}`}</h1>
        <p className="riff-name">{s.tutorial ? 'Kaksi säveltä' : s.riff.title}</p>
        <RunProgress game={game} s={s} />
      </header>

      <ol className="riff-flow" aria-label="Riffin vaiheet">
        <li aria-current={practice ? 'step' : undefined}>Kuuntele ja harjoittele</li>
        <li aria-current={take ? 'step' : undefined}>Soita muistista</li>
        <li aria-current={result ? 'step' : undefined}>Tulos</li>
      </ol>

      <div className="riff-turn">
        <h2 className={`riff-status ${take ? 'turn' : s.phase === 'success' ? 'good' : ''}`} tabIndex={-1} ref={stageRef} data-testid="riff-status">{stage.title}</h2>
        {stage.text && <p className="riff-stage-text" data-testid="stage-text">{stage.text}</p>}
        {!result && <p className="riff-instruction" data-testid="instruction">{s.level.instruction}</p>}
      </div>

      <NoteSlots slots={slots(s)} label={practice ? `Riffissä on ${total} säveltä` : `Ratkaistu ${s.index} / ${total} säveltä`} />
      {!practice && <p className="riff-count" data-testid="count">Ratkaistu {s.index}/{total}{take && s.memory.some(m => m !== null) ? ' · muistivihjeet käytössä' : ''}</p>}
      {result && <Achievement s={s} />}
      {s.feedback && !practice && <p className={`riff-feedback ${s.feedback.tone}`} role="status" data-testid="feedback">{s.feedback.text}</p>}
      {s.audioError && <p className="riff-feedback bad" role="alert" data-testid="audio-error">{s.audioError}</p>}

      {practice && <div className="riff-actions riff-practice-actions">
        {listenButton()}
        <button type="button" aria-pressed={s.notesShown} onClick={() => game.toggleNotes()} data-testid="toggle-notes">{s.notesShown ? 'Piilota sävelet' : 'Näytä sävelet'}</button>
      </div>}
      {showNotes && <div className="riff-hint" data-testid="hint">
        <p><strong>Sävelet:</strong> {s.riff.midi.map(noteName).join(' – ')}</p>
        <p>{s.riff.tip}</p>
        {take && <p className="riff-help">Otossa pyydetty vihje kirjataan: riffi voi silti mennä läpi, mutta tähteä ei tule.</p>}
      </div>}

      <RiffBoard focus={s.level.strings} marks={marks} disabled={false} onAnswer={tap}
        caption={take ? 'Virtuaalikitara: soita riffi muistista – painallukset tarkistetaan' : 'Virtuaalikitara: kokeile säveliä vapaasti (ei arvioida)'} />
      {!take && <p className="riff-board-legend" data-testid="board-legend">
        <span className="swatch model" aria-hidden="true" /> malli soi nyt
        <span className="swatch own" aria-hidden="true" /> oma painalluksesi
        {showNotes && <><span className="swatch spot" aria-hidden="true" /> ehdotettu paikka (järjestysnumero)</>}
      </p>}

      {practice && <div className="riff-go">
        <button type="button" className="primary riff-go-button" onClick={() => game.startTake()} aria-describedby="riff-go-text">Nyt riffataan!</button>
        <p id="riff-go-text" className="riff-help">Nyt soitat riffin muistista. Painalluksesi tarkistetaan.</p>
        {guide.showNotes === false && !s.notesShown && <p className="riff-help">Tällä tasolla sävelet ovat piilossa, kunnes avaat ne. Harjoittelun apu ei vaikuta tähtiin.</p>}
      </div>}

      {take && <div className="riff-actions riff-main-actions">
        <button type="button" aria-pressed={s.hint} onClick={() => game.toggleHint()}>{s.hint ? 'Piilota vihje' : 'Vihje'}</button>
        <button type="button" onClick={() => game.practiceMore()}>Harjoittele vielä</button>
      </div>}

      {result && <div className="riff-actions riff-main-actions">
        {s.phase === 'success' && <button type="button" className="primary" onClick={() => game.next()}>{s.tutorial ? `Aloita ${LEVELS[0].name}` : 'Seuraava riffi'}</button>}
        {!(s.phase === 'success' && s.tutorial) && <button type="button" className={s.phase === 'retry' ? 'primary' : ''} onClick={() => game.retry()}>Yritä uudelleen</button>}
        {!(s.phase === 'success' && s.tutorial) && <button type="button" onClick={() => game.practiceMore()}>Harjoittele lisää</button>}
        {listenButton()}
      </div>}

      <div className="riff-end-actions">
        <button type="button" onClick={onHome}>Lopeta peli</button>
      </div>
    </div>
  </section>;
}
