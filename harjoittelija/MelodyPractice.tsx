import { useEffect, useRef, useState, type MutableRefObject } from 'react';
import { ReferencePlayer, referenceAudioError } from './audio';
import { clipSound, melodyPieces, type MelodyClip, type MelodyId } from './melodyData';
import { note, pc } from './music';

type Stage = 'listen' | 'fingering' | 'memory' | 'full';
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
  const [choice, setChoice] = useState<Choice>(stage === 'full' ? 'whole' : 'a');
  const [tempo, setTempo] = useState(piece.tempo);
  const [showTab, setShowTab] = useState(stage !== 'memory');
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

  const choices: { id: Choice; name: string; clip: MelodyClip }[] = [
    { id: 'a', name: 'Osa A', clip: piece.fragments[0] },
    ...(stage === 'listen' ? [] : [{ id: 'b' as const, name: 'Osa B', clip: piece.fragments[1] }]),
    ...(stage === 'full' ? [{ id: 'whole' as const, name: 'Pidempi melodia', clip: piece.whole }] : []),
    ...(stage === 'full' && piece.bonus ? [{ id: 'bonus' as const, name: 'Oma B → C -lisä', clip: piece.bonus }] : []),
  ];
  const selection = choices.find(item => item.id === choice) ?? choices[0];
  const clip = selection.clip;
  const sounding = clipSound(clip);
  const activeBeat = activeIndex === null ? null : sounding[activeIndex]?.beat ?? null;
  const bars = clip.beats / 4;

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
    <p className="eyebrow">{stage === 'full' ? 'ENNEN IMPROVISOINTIA · PIENI KAPPALE'
      : stage === 'memory' ? 'MELODIA MUISTISTA'
        : 'TUNNISTETTAVA MELODIAPÄTKÄ'}</p>
    <h4>{piece.title}</h4>
    <p className="melody-subtitle">{piece.qualifier} · 4/4 · {bars.toString().replace('.', ',')} tahtia valitussa osassa</p>
    <p className="melody-instruction">
      {stage === 'listen' ? 'Kuuntele ensin lyhyt katkelma. Samat sävelet löytyvät opeteltavasta asteikosta.'
        : stage === 'fingering' ? 'Kokeile osia A ja B erikseen. Seuraa rytmiä ja löydä oikeat kielet sekä nauhat.'
          : stage === 'memory' ? 'Kuuntele katkelma, piilota tabulatuuri ja yritä soittaa se muistista. Voit pyytää merkinnät takaisin.'
            : 'Kuuntele osat erikseen ja yhdistä ne pidemmäksi melodiaksi. Soita se sitten itse. Tämän jälkeen siirryt improvisoimaan ja muuttelemaan tuttuja säveliä.'}
    </p>
    {stage === 'full' && piece.bonus && <p className="tools-note">
      Viimeinen valinta on <strong>erillinen oma harjoitus</strong>, ei osa {piece.title} -sävelmää.
    </p>}
    <div className="melody-choices" role="group" aria-label="Valitse melodiaharjoituksen osa">
      {choices.map(item => <button type="button" key={item.id} aria-pressed={selection.id === item.id}
        onClick={() => choose(item.id)}>{item.name}</button>)}
    </div>
    <div className="melody-controls">
      <button type="button" aria-pressed={playing} onClick={() => void play()}>
        {playing ? '■ Pysäytä melodia' : '▶ Kuuntele valittu melodia kerran'}
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
    <p className="melody-now" aria-live="polite" role="status">
      {playing && activeIndex !== null
        ? `Nyt soi ${note(sounding[activeIndex].midi)} · ${STRINGS[sounding[activeIndex].midi === -1 ? 0 : clip.events.find(e => e.beat === activeBeat)?.position?.string ?? 0]}-kieli, ${clip.events.find(e => e.beat === activeBeat)?.position?.fret}. nauha`
        : playing ? 'Melodia soi kerran ja pysähtyy itsestään.' : 'Kuuntele malli tai soita katkelma itse.'}
    </p>
    {showTab && <div className="melody-tab-scroll" tabIndex={0} role="region" aria-label="Melodian tabulatuuri">
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
  </section>;
}
