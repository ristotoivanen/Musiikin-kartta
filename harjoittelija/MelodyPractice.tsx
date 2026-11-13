import { useEffect, useRef, useState, type MutableRefObject } from 'react';
import { ReferencePlayer, referenceAudioError } from './audio';
import { Board } from './Board';
import type { Mark } from './engine';
import { clipSound, melodyPieces, type MelodyClip, type MelodyId } from './melodyData';
import { note, pc, positionKey } from './music';
import { useFollowScroll } from './followScroll';

type Stage = 'fingering' | 'memory';
type Choice = 'a' | 'b' | 'whole' | 'bonus';

const STRINGS = ['e', 'B', 'G', 'D', 'A', 'E'];

/**
 * Rytmillinen 1–2 tahdin motiivi ja myöhemmin niistä muodostuva pieni
 * melodia. Tallennettua etenemistä ei muuteta; tämä on harjoitusvaiheiden
 * sisällä oleva opetusosio.
 */
export function MelodyPractice({ pieceId, stage, onBeforePlay, stopHandleRef }: {
  pieceId: MelodyId;
  stage: Stage;
  onBeforePlay?: () => void;
  stopHandleRef?: MutableRefObject<(() => void) | null>;
}) {
  const piece = melodyPieces[pieceId];
  const [choice, setChoice] = useState<Choice>(stage === 'fingering' ? 'a' : 'whole');
  const [tempo, setTempo] = useState(piece.tempo);
  const [expanded, setExpanded] = useState(false);
  const [showTab, setShowTab] = useState(false);
  const [showBoardNotes, setShowBoardNotes] = useState(stage !== 'memory');
  const [playing, setPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [error, setError] = useState('');
  const player = useRef(new ReferencePlayer());
  const generation = useRef(0);

  function stop() {
    generation.current++;
    player.current.stop();
    setPlaying(false);
    setActiveIndex(null);
  }
  useEffect(() => {
    if (stopHandleRef) stopHandleRef.current = stop;
    const onHidden = () => { if (document.hidden) stop(); };
    document.addEventListener('visibilitychange', onHidden);
    return () => {
      document.removeEventListener('visibilitychange', onHidden);
      generation.current++;
      player.current.stop();
      if (stopHandleRef) stopHandleRef.current = null;
    };
  }, [stopHandleRef]);

  // Muistivaiheessa A- ja B-osat ovat jo tuttuja: soitetaan koko yhdistetty
  // melodia ilman osavalintoja. Lyhyitä osia harjoitellaan edellisessä vaiheessa.
  const choices: { id: Choice; name: string; clip: MelodyClip }[] = stage === 'memory'
    ? [{ id: 'whole', name: 'Koko melodia', clip: piece.whole }]
    : [
      { id: 'a', name: 'Osa A', clip: piece.fragments[0] },
      { id: 'b', name: 'Osa B', clip: piece.fragments[1] },
      ...(piece.bonus ? [{ id: 'bonus' as const, name: 'Oma B → C -lisä', clip: piece.bonus }] : []),
    ];
  const selection = choices.find(item => item.id === choice) ?? choices[0];
  const clip = selection.clip;
  const sounding = clipSound(clip);
  const activeBeat = activeIndex === null ? null : sounding[activeIndex]?.beat ?? null;
  const activePosition = activeBeat === null ? null : clip.events.find(e => e.beat === activeBeat)?.position ?? null;
  // Tabulatuuri seuraa soivaa saraketta samoin periaattein kuin otelauta (followScroll.ts).
  const tabScroll = useRef<HTMLDivElement>(null);
  useFollowScroll(tabScroll, '.melody-playing', playing && activeBeat !== null ? String(activeBeat) : '', { enabled: expanded && showTab });
  const bars = clip.beats / 4;
  const uniquePositions = [...new Map(clip.events.filter(event => event.position)
    .map(event => [positionKey(event.position!), event.position!] as const)).values()];
  const frets = uniquePositions.map(position => position.fret);
  const marks: Mark[] = uniquePositions.filter(position => showBoardNotes ||
    (activePosition?.string === position.string && activePosition.fret === position.fret))
    .map(position => ({
      ...position,
      label: note(position.midi),
      kind: activePosition?.string === position.string && activePosition.fret === position.fret
        ? 'playing' as const : pc(position.midi) === piece.tonic ? 'answer' as const : 'shape' as const,
    }));
  const boardArea = {
    strings: [...new Set(uniquePositions.map(position => position.string))],
    min: Math.min(...frets), max: Math.max(...frets), fixed: 'box' as const,
  };

  async function play() {
    if (playing) { stop(); return; }
    onBeforePlay?.();
    const current = ++generation.current;
    player.current.stop();
    setPlaying(true);
    setActiveIndex(null);
    setError('');
    try {
      await player.current.playTimed(sounding, tempo, index => {
        if (current === generation.current) setActiveIndex(index);
      }, () => {
        if (current === generation.current) setActiveIndex(null);
      });
    } catch (cause) {
      if (current === generation.current) setError(referenceAudioError(cause));
    } finally {
      if (current === generation.current) {
        setPlaying(false);
        setActiveIndex(null);
      }
    }
  }
  function choose(id: Choice) {
    stop();
    setError('');
    setChoice(id);
  }

  return <section className="melody-practice" aria-label={`Melodiaharjoitus: ${piece.title}`}>
    <details onToggle={event => {
      const isOpen = event.currentTarget.open;
      setExpanded(isOpen);
      if (!isOpen) stop();
    }}>
      <summary>{stage === 'memory'
        ? `Valinnainen: pidempi melodia muistista · ${piece.title}`
        : `Valinnainen melodiaharjoitus · ${piece.title}`}</summary>
      {expanded && <div className="melody-practice-content">
    <p className="eyebrow">{stage === 'memory' ? 'PIDEMPI MELODIA · MUISTISTA'
      : 'HARJOITTELE MELODIAA OTELAUDALLA'}</p>
    <h4>{piece.title}</h4>
    <p className="melody-subtitle">{piece.qualifier} · 4/4 · {bars.toString().replace('.', ',')} tahtia {stage === 'memory' ? 'yhdistetyssä melodiassa' : 'valitussa osassa'}</p>
    <p className="melody-instruction">
      {stage === 'fingering'
        ? 'Kokeile osia A ja B erikseen. Kuuntele ja seuraa keltaisella korostettua säveltä otelaudalla.'
        : 'Yhdistä aiemmin harjoitellut osat ja soita koko melodia alusta loppuun muistista. Sävelvihjeet ja tabulatuuri ovat aluksi piilossa. Kuunnellessa soiva sävel korostuu otelaudalla. Siirry tämän jälkeen improvisoimaan.'}
    </p>
    {stage === 'fingering' && piece.bonus && <p className="tools-note">
      Oma B → C -lisä on <strong>erillinen harjoitus</strong>, ei osa {piece.title} -sävelmää.
    </p>}
    {stage !== 'memory' && <div className="melody-choices" role="group" aria-label="Valitse melodiaharjoituksen osa">
      {choices.map(item => <button type="button" key={item.id} aria-pressed={selection.id === item.id}
        onClick={() => choose(item.id)}>{item.name}</button>)}
    </div>}
    <div className="melody-controls">
      <button type="button" aria-pressed={playing} onClick={() => void play()}>
        {playing ? '■ Pysäytä melodia' : stage === 'memory' ? '▶ Kuuntele koko melodia kerran' : '▶ Kuuntele valittu melodia kerran'}
      </button>
      <label>Tempo
        <select value={tempo} onChange={event => { stop(); setTempo(Number(event.target.value)); }}>
          {[60, 75, 84, 96, 108].concat([piece.tempo]).sort((a, b) => a - b)
            .filter((v, i, all) => all.indexOf(v) === i)
            .map(value => <option key={value} value={value}>{value} BPM</option>)}
        </select>
      </label>
      <button type="button" aria-pressed={showTab} onClick={() => setShowTab(v => !v)}>
        {showTab ? 'Piilota tabulatuuri' : 'Näytä tabulatuuri'}
      </button>
    </div>
    {error && <p role="alert" className="error">{error}</p>}
    <p className="melody-now" aria-live="polite">
      {playing && activeIndex !== null
        ? `Nyt soi ${note(sounding[activeIndex].midi)} · ${STRINGS[activePosition!.string]}-kieli, ${activePosition!.fret}. nauha`
        : playing ? 'Melodia soi kerran ja pysähtyy itsestään.' : 'Kuuntele malli tai soita katkelma itse.'}
    </p>
    <div className="melody-board" aria-label="Melodian sävelet otelaudalla">
      <Board area={boardArea} marks={marks} disabled follow="playing" caption={`${piece.title}, ${selection.name}`} />
      <div className="melody-board-actions">
        <button type="button" aria-pressed={showBoardNotes}
          onClick={() => setShowBoardNotes(value => !value)}>
          {showBoardNotes ? 'Piilota otelaudan sävelvihjeet' : 'Näytä otelaudan sävelvihjeet'}
        </button>
        <p className="tools-note">Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa.</p>
      </div>
    </div>
    {showTab && <div ref={tabScroll} className="melody-tab-scroll" tabIndex={0} role="region" aria-label="Melodian tabulatuuri">
      <table className="melody-tab" aria-label={`${piece.title}, ${selection.name}, kitaratabulatuuri`}>
        <thead>
          <tr><th scope="col">Kieli</th>{clip.events.map((event, i) =>
            <th scope="col" key={i} className={event.beat % 4 === 0 ? 'bar-start' : ''}>
              <span className="melody-bar">{event.beat % 4 === 0 ? `T${Math.floor(event.beat / 4) + 1}` : '·'}</span>
              <span className="melody-duration">{event.duration === 1 ? '♩' : `${event.duration} iskua`}</span>
            </th>)}</tr>
        </thead>
        <tbody>{STRINGS.map((stringName, stringIndex) => <tr key={stringIndex}>
          <th scope="row">{stringName}</th>
          {clip.events.map((event, i) => {
            const played = event.position?.string === stringIndex;
            const isActive = played && activeBeat === event.beat;
            return <td key={i} className={`${event.beat % 4 === 0 ? 'bar-start ' : ''}${isActive ? 'melody-playing ' : ''}${played && pc(event.position!.midi) === piece.tonic ? 'melody-root' : ''}`}
              aria-label={played ? `${stringName}-kieli, ${event.position!.fret}. nauha, ${note(event.position!.midi)}` : undefined}>
              {played ? event.position!.fret : '—'}
            </td>;
          })}
        </tr>)}</tbody>
      </table>
      <p className="tools-note">e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu.</p>
    </div>}
    <p className="tools-note">{piece.note}</p>
    {piece.source && <p className="melody-source"><a href={piece.source} target="_blank" rel="noreferrer">Melodian lähde</a></p>}
      </div>}
    </details>
  </section>;
}
