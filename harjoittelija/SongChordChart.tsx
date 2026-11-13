import { useEffect, useState } from 'react';
import {
  SONG_CHARTS, barStartTime, chordAt, lookAhead, lyricColumns, songClock,
  type ChordPart, type SongVersion, type SongChord,
} from './songChart';
import {
  CHORD_NAMES, SONG_HINT_STORAGE_KEY, isChordHidden, loadSongHintSettings,
  type FadeStep, type PracticeLevel,
} from './songHints';
import { chordLabel, type ChordDisplay } from './chordLabel';

const LEVELS: { value: PracticeLevel; label: string }[] = [
  { value: 0, label: '0 · Kaikki näkyvät' },
  { value: 1, label: '1 · Helppo: tutut pois' },
  { value: 2, label: '2 · Keskitaso: lisää pois' },
  { value: 3, label: '3 · Vaikea: viimeiset vihjeet' },
  { value: 4, label: '4 · Muistista: kaikki piilossa' },
];
const STEPS: { value: FadeStep; label: string }[] = [
  { value: 1, label: '1 · Piilota ensimmäisenä' },
  { value: 2, label: '2 · Piilota toisena' },
  { value: 3, label: '3 · Piilota kolmantena' },
  { value: 4, label: '4 · Piilota viimeisenä' },
];

/** Harjoituskäyttöön tehty, soitinta seuraava sointukartta. Ei muuta äänen toistoa. */
export function SongChordChart({version, position, loop = false, onSeek}: {
  version: SongVersion;
  position: number;
  loop?: boolean;
  onSeek: (seconds: number) => void;
}) {
  const [hints, setHints] = useState(loadSongHintSettings);
  const [revealed, setRevealed] = useState<string | null>(null);
  const [showAllLyrics, setShowAllLyrics] = useState(false);
  // Leveällä näytöllä asetukset ovat heti näkyvissä, puhelimessa ne avataan tarvittaessa.
  const [settingsOpen, setSettingsOpen] = useState(() =>
    typeof matchMedia !== 'function' || matchMedia('(min-width: 701px)').matches);
  // Esitystapa muuttaa vain näkyvää merkintää. Piilotus ja ajoitus käyttävät alkuperäisiä sointuja.
  const [display, setDisplay] = useState<ChordDisplay>('full');
  const label = (name: string) => chordLabel(name, display);

  const chart = SONG_CHARTS[version];
  const current = chordAt(position, version);
  const {section,sectionIndex,barIndex,beat,chord} = current;
  const currentPart = beat >= 3 && section.bars[barIndex].second ? 'second' : 'first';
  const eventKey = (sectionId: string, index: number, part: ChordPart) => `${version}:${sectionId}:${index}:${part}`;
  const keyFor = (index: number, part: ChordPart) => eventKey(section.id, index, part);
  const currentKey = keyFor(barIndex, currentPart);
  const hiddenCurrent = isChordHidden(chord, hints);
  const revealedCurrent = hiddenCurrent && revealed === currentKey;
  const showChord = (name: SongChord, index: number, part: ChordPart) =>
    !isChordHidden(name, hints) || revealed === keyFor(index, part);
  const showExplanations = hints.showChords && hints.level === 0;
  const hiddenCount = CHORD_NAMES.filter(name => isChordHidden(name,hints)).length;
  const settingsSummary = !hints.showChords ? 'Soinnut piilossa'
    : hints.level === 0 ? 'Kaikki soinnut näkyvät' : `Taso ${hints.level} · piilossa ${hiddenCount}/6`;

  // Ennakko näkyy vain osan viimeisessä tahdissa: seuraavan osan ensimmäinen sointu.
  // Se käyttää samoja tahtirajoja kuin korostus ja katoaa, kun uusi osa alkaa.
  const {nextSection} = lookAhead(position, version, loop);
  const nextHidden = !!nextSection && isChordHidden(nextSection.firstChord, hints);

  // Uuden tahdin, soinnun tai version alkaessa vihje ei jää paljastetuksi.
  useEffect(() => { setRevealed(null); }, [currentKey]);
  useEffect(() => {
    try { localStorage.setItem(SONG_HINT_STORAGE_KEY, JSON.stringify(hints)); }
    catch { /* Harjoittelu toimii ilman selaintallennustakin. */ }
  }, [hints]);

  return <section className="song-chord-panel" aria-labelledby="song-chord-heading">
    <div className="session-top">
      <h3 id="song-chord-heading">Harjoituskartta</h3>
      <span>{hints.showChords && hints.level === 0 ? 'G-molli · ' : ''}4/4 · noin 69 BPM</span>
    </div>

    <div className="song-chord-toolbar">
      <label htmlFor="song-section-jump">Harjoiteltava osa
        <select id="song-section-jump" value={section.id}
          onChange={event => {
            const target = chart.find(item => item.id === event.target.value);
            if (target) onSeek(target.start);
          }}>
          {chart.map(item => <option key={item.id} value={item.id}>
            {songClock(item.start)} · {item.title}
          </option>)}
        </select>
      </label>
      <div className="song-now-next">
        <p className="song-current-chord">
          {hiddenCurrent && !revealedCurrent ? 'Piilotettu sointu' : 'Soiva sointu'}
          <strong>{hiddenCurrent && !revealedCurrent ? '?' : label(chord)}</strong>
          <span>{section.title}, tahti {barIndex+1}, isku {beat}/4</span>
          {hiddenCurrent && <button type="button" className="song-reveal-chord"
            onClick={() => setRevealed(revealedCurrent ? null : currentKey)}>
            {revealedCurrent ? 'Piilota vihje' : 'Paljasta sointu'}
          </button>}
        </p>
        {nextSection && <p className="song-ahead song-next-chord">
          Seuraava sointu <strong>{nextHidden ? '?' : label(nextSection.firstChord)}</strong>
        </p>}
      </div>
    </div>

    <div className="song-bar-grid" role="group" aria-label={section.title + ': tahdit'}>
      {section.bars.map((bar,index) => {
        const selected = index === barIndex;
        const firstOn = selected && (beat < 3 || !bar.second);
        const secondOn = selected && beat >= 3 && !!bar.second;
        const firstVisible = showChord(bar.first,index,'first');
        const secondVisible = bar.second ? showChord(bar.second,index,'second') : false;
        const contents = (firstVisible ? label(bar.first) : 'sointu piilossa') +
          (bar.second ? ' ' + (secondVisible ? label(bar.second) : 'sointu piilossa') : '') +
          (showExplanations && bar.passingBass ? ' (basson kulku ' + bar.passingBass + ')' : '') +
          (showExplanations && bar.possibleChord ? ' (' + label(bar.possibleChord + '?') + ')' : '');
        return <button type="button" key={index}
          className={'song-measure' + (selected ? ' active' : '')}
          aria-pressed={selected}
          aria-label={'Tahti ' + (index+1) + ': ' + contents + '. Siirry kohtaan ' + songClock(barStartTime(sectionIndex,index,version))}
          onClick={() => onSeek(barStartTime(sectionIndex,index,version))}>
          <span className="song-measure-number">Tahti {index+1}</span>
          <span className="song-measure-chords">
            <strong className={firstOn && firstVisible ? 'now' : ''}>
              {firstVisible ? label(bar.first) : '?'}
            </strong>
            {bar.second && <strong className={secondOn && secondVisible ? 'now' : ''}>
              {secondVisible ? label(bar.second) : '?'}
            </strong>}
          </span>
          {showExplanations && bar.passingBass && <small>Basso: ({bar.passingBass}), isku 4</small>}
          {showExplanations && bar.possibleChord && <small>Mahdollinen ({label(bar.possibleChord + '?')})</small>}
        </button>;
      })}
    </div>
    {/* K4: soiva sointu ja tahdit ensin. Asetukset avattavassa osassa, kapealla näytöllä aluksi suljettuna. */}
    <details className="song-chart-settings" open={settingsOpen}>
      <summary onClick={event => { event.preventDefault(); setSettingsOpen(open => !open); }}>
        Harjoituskartan asetukset
        <span className="song-chart-settings-state">{settingsSummary}</span>
      </summary>
      <div className="song-hint-controls" role="group" aria-label="Sointujen ja sanojen asetukset">
        <label className="song-hints-toggle">
          <input type="checkbox" checked={hints.showChords}
            onChange={event => { setHints(prev => ({...prev,showChords:event.target.checked})); setRevealed(null); }} />
          Näytä soinnut
        </label>
        <label className="song-hints-toggle">
          <input type="checkbox" checked={showAllLyrics}
            onChange={event => setShowAllLyrics(event.target.checked)} />
          Näytä koko sanoitus
        </label>
        <fieldset className="song-chord-display">
          <legend>Sointumerkinnät</legend>
          {([['full', 'Täydet soinnut'], ['power', 'Power-soinnut']] as const).map(([value, text]) =>
            <label key={value}>
              <input type="radio" name="song-chord-display" value={value} checked={display === value}
                onChange={() => setDisplay(value)} />
              <span>{text}</span>
            </label>)}
        </fieldset>
        <label className="song-hint-level" htmlFor="song-hint-level">Harjoitustaso
          <select id="song-hint-level" value={hints.level} disabled={!hints.showChords}
            onChange={event => {
              const level = Number(event.target.value) as PracticeLevel;
              setHints(prev => ({...prev,level})); setRevealed(null);
            }}>
            {LEVELS.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>
        <span className="song-hint-progress" aria-live="polite">
          {hiddenCount === 0 ? 'Kaikki kuusi sointua näkyvät' : `Piilossa ${hiddenCount}/6 sointua`}
        </span>
      </div>

      {hints.showChords && hints.level < 4 && <details className="song-fade-customize">
        <summary>Muokkaa sointujen piilotusjärjestystä</summary>
        <p>Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen.
          Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa.</p>
        <div className="song-fade-order">
          {CHORD_NAMES.map(name => <label key={name}>{name}
            <select aria-label={name + ': piilotusvaihe'} value={hints.fadeOrder[name]}
              onChange={event => {
                const step = Number(event.target.value) as FadeStep;
                setHints(prev => ({ ...prev, fadeOrder: { ...prev.fadeOrder, [name]: step } }));
                setRevealed(null);
              }}>
              {STEPS.map(step => <option key={step.value} value={step.value}>{step.label}</option>)}
            </select>
          </label>)}
        </div>
      </details>}

    </details>
    {showAllLyrics ? <div className="song-all-lyrics" aria-label="Koko kappaleen sanat">
      <h4>Koko kappaleen sanat</h4>
      <div className="song-all-lyrics-grid">
        {lyricColumns(chart).map((column, index) => <div key={index} className="song-lyrics-column">
          {column.map(part => <section key={part.id} className="song-lyrics-stanza">
            <h5>{part.title}</h5>
            {part.lyrics?.map((line,i) => <p key={i}>{line}</p>)}
          </section>)}
        </div>)}
      </div>
      <p className="tools-note">Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta.</p>
    </div> : section.lyrics && <div className="song-section-lyrics">
      <h4>{section.title}: sanat</h4>
      {section.lyrics.map((line,i) => <p key={i}>{line}</p>)}
    </div>}
    {showExplanations && section.note && <p className="song-chord-note">{section.note}</p>}
  </section>;
}
