import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { SongPlayer, initialAttempt, type Attempt } from './GigPlayer';
import { gigs as songs, type Gig as SongId } from './song-demo-score';
import { followingSong, setlistProgress } from './setlist';
import { clearProgress, loadProgress, saveProgress } from './progress';
import './style.css';

const area = {
  title: 'Kotikulmien keikat',
  shows: [{ id: 1, title: 'Ensimmäinen esiintyminen', songs: [1, 2, 3, 4, 5] as readonly SongId[] }],
};
const show = area.shows[0];
type Visit = { song: SongId; mode: 'progress' | 'replay' | 'practice' };
const listHashes = ['#keikkalista', '#keikkakartta', '#settilista'];

function Ensikeikka() {
  const [listOpen, setListOpen] = useState(listHashes.includes(window.location.hash));
  const [songsOpen, setSongsOpen] = useState(window.location.hash === '#settilista');
  const [visit, setVisit] = useState<Visit | null>(null);
  const [attempts, setAttempts] = useState<Partial<Record<SongId, Attempt>>>({});
  const [completedSongs, setCompletedSongs] = useState(() => loadProgress(show.songs));
  const [saveFailed, setSaveFailed] = useState(false);
  const [practice, setPractice] = useState(initialAttempt);
  const focusView = useRef(listOpen);
  const { complete: showComplete, count: showSongCount, next } = setlistProgress(show.songs, completedSongs);
  const areaComplete = area.shows.every(item => setlistProgress(item.songs, completedSongs).complete);

  useEffect(() => {
    if (visit !== null || !focusView.current) return;
    focusView.current = false;
    document.getElementById(listOpen ? 'keikkalista' : 'ensikeikka')?.focus({ preventScroll: true });
  }, [visit, listOpen, songsOpen]);

  useEffect(() => {
    function followLink() {
      focusView.current = true;
      setVisit(null);
      setListOpen(listHashes.includes(window.location.hash));
      setSongsOpen(window.location.hash === '#settilista');
      window.scrollTo(0, 0);
    }
    window.addEventListener('hashchange', followLink);
    return () => window.removeEventListener('hashchange', followLink);
  }, []);

  function open(song: SongId, mode: Visit['mode']) {
    if (mode === 'practice') setPractice(initialAttempt);
    setVisit({ song, mode });
    window.scrollTo(0, 0);
  }

  function navigate(hash: '' | '#keikkalista' | '#settilista') {
    if (window.location.hash !== hash) {
      window.history.pushState(null, '', hash || window.location.pathname + window.location.search);
    }
    focusView.current = true;
    setListOpen(hash !== '');
    if (hash === '#settilista') setSongsOpen(true);
    if (!hash) setSongsOpen(false);
    setVisit(null);
    window.scrollTo(0, 0);
  }

  function recordSong(song: SongId) {
    const saved = loadProgress(show.songs);
    const completed = show.songs.filter(id => id === song || completedSongs.includes(id) || saved.includes(id));
    setCompletedSongs(completed);
    setSaveFailed(!saveProgress(completed));
  }

  function resetProgress() {
    if (!window.confirm('Aloitetaanko Ensikeikka alusta? Suoritusmerkinnät tyhjennetään tästä selaimesta.')) return;
    setSaveFailed(!clearProgress());
    setCompletedSongs([]);
    setAttempts({});
    setSongsOpen(false);
    window.scrollTo(0, 0);
    document.getElementById('keikkalista')?.focus({ preventScroll: true });
  }

  if (visit) {
    const { song, mode } = visit;
    const isPractice = mode === 'practice';
    const songComplete = completedSongs.includes(song);
    const attempt = isPractice ? practice : songComplete
      ? { ...initialAttempt, stage: 'complete' as const } : attempts[song] ?? initialAttempt;

    function update(changes: Partial<Attempt>) {
      if (isPractice) setPractice(previous => ({ ...previous, ...changes }));
      else setAttempts(previous => ({ ...previous, [song]: { ...previous[song] ?? initialAttempt, ...changes } }));
    }

    const nextSong = followingSong(show.songs, song);
    const finishedShow = !isPractice && showComplete && nextSong === undefined;
    return <SongPlayer key={`${song}-${mode}`} song={song} showLabel={`Keikka ${show.id} – ${show.title}`}
      attempt={attempt} update={update} onList={() => navigate('#keikkalista')} onSetlist={() => navigate('#settilista')}
      onNext={!isPractice && songComplete && nextSong !== undefined
        ? () => open(nextSong, completedSongs.includes(nextSong) ? 'replay' : 'progress')
        : undefined}
      onComplete={() => {
        if (isPractice) update({ stage: 'complete' });
        else if (!songComplete) recordSong(song);
      }}
      completionTitle={isPractice ? 'Harjoittelu valmis!' : finishedShow ? 'Keikka valmis!' : 'Kappale valmis!'}
      completedCount={finishedShow ? showSongCount : undefined}
      practice={isPractice} saveFailed={saveFailed} />;
  }

  if (!listOpen) return (
    <main className="concert">
      <nav className="start-navigation" aria-label="Palaa">
        <a className="game-link" href="../../kitaraharjoittelija.html?polku=otelauta">
          <span aria-hidden="true">←</span> Takaisin harjoitusvalikkoon
        </a>
      </nav>
      <header className="intro">
        <h1 id="ensikeikka" tabIndex={-1}>Ensikeikka (beta)</h1>
        <p>Kuuntele, miten melodia ja soinnut toimivat yhdessä, ja löydä kappaleiden kotisävelet.</p>
      </header>
      <section className="session gig-stage" aria-labelledby="areas">
        <h2 id="areas">Esiintymisalueet</h2>
        <p>Et tarvitse kitaraa tai nuottien tuntemusta.</p>
        {areaComplete && <p className="tour-finished">Esiintymisalue suoritettu</p>}
        <div className="button-row">
          <button className="primary" onClick={() => navigate('#keikkalista')}>{area.title}</button>
          <a className="game-link" href="../../book/osa-2.html#ensikeikan-teoria">Opettele ensin</a>
        </div>
      </section>
    </main>
  );

  const songList = songsOpen || showComplete;
  return (
    <main className="concert">
      <header className="intro">
        <p className="project">Ensikeikka (beta)</p>
        <h1 id="keikkalista" tabIndex={-1}>{area.title}</h1>
      </header>
      <section className="session" aria-label="Keikkalista">
        <h2>Keikkalista</h2>
        <section className="show-card" aria-labelledby="show-title">
          <h3 id="show-title">Keikka {show.id} – {show.title}</h3>
          <p className="gig-state" data-state={showComplete ? 'done' : 'next'}>
            {showSongCount} / {show.songs.length} kappaletta suoritettu
            {showComplete && ' · Keikka suoritettu'}
          </p>
          {showSongCount === 0 && <p>
            Kuuntele keskeneräinen kappale, kokeile kolmea lopetusta ja valitse se, johon melodia tuntuu palaavan kotiin.
          </p>}
          <div className="button-row">
            {next !== undefined && <button className="primary" onClick={() => open(next, 'progress')}>
              {attempts[next] || showSongCount > 0 ? `Jatka keikkaa ${show.id}` : `Aloita keikka ${show.id}`}
            </button>}
            {!showComplete && <button aria-expanded={songList} aria-controls="show-songs" onClick={() => setSongsOpen(!songsOpen)}>
              {songList ? 'Piilota settilista' : 'Valitse kappale'}
            </button>}
          </div>
          <h4 hidden={!songList} className="setlist-title">Settilista</h4>
          <ol id="show-songs" aria-label="Settilista" className="show-songs" role="list" hidden={!songList}>
            {show.songs.map(song => {
              const done = completedSongs.includes(song);
              return <li key={song}>
                <h4>Kappale {song} – {songs[song].title}</h4>
                <p className="gig-state" data-state={done ? 'done' : song === next ? 'next' : 'locked'}>
                  {done ? 'Suoritettu' : song === next ? 'Seuraava kappale' : 'Avautuu edellisen kappaleen jälkeen'}
                </p>
                {song === next && <button onClick={() => open(song, 'progress')}>Avaa kappale {song}</button>}
                {done && <div className="button-row">
                  <button onClick={() => open(song, 'replay')} aria-label={`Kuuntele kappale ${song}`}>Kuuntele</button>
                  <button onClick={() => open(song, 'practice')} aria-label={`Harjoittele kappaletta ${song}`}>Harjoittele uudelleen</button>
                </div>}
              </li>;
            })}
          </ol>
        </section>
        {areaComplete && <p className="tour-finished">Esiintymisalue suoritettu!</p>}
      </section>
      <nav className="game-navigation" aria-label="Palaa">
        <button className="back-link" onClick={() => navigate('')}>
          <span aria-hidden="true">←</span> Takaisin Ensikeikan alkuun
        </button>
        {completedSongs.length > 0 && <button onClick={resetProgress}>Aloita alusta</button>}
      </nav>
      {saveFailed && <p role="status">Selain ei voinut tallentaa muutosta. Näytetty eteneminen on käytössä tällä sivulla.</p>}
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<Ensikeikka />);
