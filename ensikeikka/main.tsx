import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { SongPlayer, initialAttempt, type Attempt } from './GigPlayer';
import { area, gigOf, songs } from './catalog';
import { areaComplete, followingSong, gigStatus, songAccess, type SongMode } from './setlist';
import { clearProgress, completedPrefix, readProgress, saveProgress, storedSongs, withCompleted } from './progress';
import type { Gig } from './tasks';
import './style.css';

/*
 * Näkymät ja osoitteet:
 *   (ei hashia)      Ensikeikan alku
 *   #keikkalista     Esiintymisalueen keikat
 *   #keikka-N        Keikkalista, jossa keikan N settilista on auki (#settilista = keikka 1)
 *   #kappale-N       Kappale normaalissa etenemisessä tai valmiin kappaleen uudelleenkuuntelu
 *   #harjoitus-N     Vapaa harjoittelu, joka ei muuta tallennettua etenemistä
 * Jokainen siirtymä lisää selainhistoriaan merkinnän, joten selaimen Takaisin-painike toimii.
 */
type View = { kind: 'start' } | { kind: 'area'; gig?: number } | { kind: 'song'; song: number; mode: SongMode };

const order = area.gigs.flatMap(gig => gig.songs);
const completedFrom = (stored: readonly number[]) => area.gigs.flatMap(gig => completedPrefix(stored, gig.songs));
const gigById = (id: number | undefined) => area.gigs.find(gig => gig.id === id);
const status = (gig: Gig, completed: readonly number[]) => gigStatus(area.gigs, gig, completed);
const songHash = (song: number, mode: SongMode) => `#${mode === 'practice' ? 'harjoitus' : 'kappale'}-${song}`;
const gigHash = (gig: number) => `#keikka-${gig}`;

function resolve(hash: string, completed: readonly number[]): { view: View; redirect?: string } {
  if (hash === '#keikkalista' || hash === '#keikkakartta') return { view: { kind: 'area' } };
  if (hash === '#settilista') return { view: { kind: 'area', gig: 1 } };
  const gigMatch = /^#keikka-(\d+)$/.exec(hash);
  if (gigMatch && gigById(Number(gigMatch[1]))) return { view: { kind: 'area', gig: Number(gigMatch[1]) } };
  const songMatch = /^#(kappale|harjoitus)-(\d+)$/.exec(hash);
  if (songMatch) {
    const song = Number(songMatch[2]);
    const access = songAccess(area.gigs, song, completed);
    if (songMatch[1] === 'harjoitus' && access.practice) return { view: { kind: 'song', song, mode: 'practice' } };
    if (songMatch[1] === 'kappale' && access.play) return { view: { kind: 'song', song, mode: access.play } };
    // Lukittu kappale: näytä keikka, josta sen voi avata tai kokeilla.
    if (access.gig) return { view: { kind: 'area', gig: access.gig.id }, redirect: gigHash(access.gig.id) };
  }
  return { view: { kind: 'start' } };
}

function focusView(view: View) {
  const id = view.kind === 'start' ? 'ensikeikka' : view.kind === 'area' && view.gig ? `show-${view.gig}-title` : 'keikkalista';
  const target = document.getElementById(id);
  target?.focus({ preventScroll: true });
  if (view.kind === 'area' && view.gig) target?.scrollIntoView({ block: 'start' });
  else window.scrollTo(0, 0);
}

function Ensikeikka() {
  const [completed, setCompleted] = useState(() => completedFrom(storedSongs(readProgress())));
  const latest = useRef(completed);
  latest.current = completed;
  const [view, setView] = useState<View>(() => {
    const { view, redirect } = resolve(window.location.hash, completed);
    if (redirect) window.history.replaceState(null, '', redirect);
    return view;
  });
  const [openGigs, setOpenGigs] = useState<number[]>(() => view.kind === 'area' && view.gig ? [view.gig] : []);
  const [attempts, setAttempts] = useState<Partial<Record<number, Attempt>>>({});
  const [practice, setPractice] = useState(initialAttempt);
  const [saveFailed, setSaveFailed] = useState(false);
  const pendingFocus = useRef(window.location.hash !== '');

  useEffect(() => {
    if (view.kind === 'song' || !pendingFocus.current) return;
    pendingFocus.current = false;
    focusView(view);
  }, [view, openGigs]);

  function show(next: View) {
    if (next.kind === 'area' && next.gig) setOpenGigs(gigs => gigs.includes(next.gig!) ? gigs : [...gigs, next.gig!]);
    if (next.kind === 'start') setOpenGigs([]);
    if (next.kind === 'song') window.scrollTo(0, 0);
    pendingFocus.current = true;
    setView(next);
  }

  useEffect(() => {
    function followHistory() {
      const { view, redirect } = resolve(window.location.hash, latest.current);
      if (redirect) window.history.replaceState(null, '', redirect);
      show(view);
    }
    window.addEventListener('hashchange', followHistory);
    return () => window.removeEventListener('hashchange', followHistory);
  }, []);

  function go(hash: string, next: View) {
    if (window.location.hash !== hash) {
      window.history.pushState(null, '', hash || window.location.pathname + window.location.search);
    }
    show(next);
  }

  function open(song: number, mode: SongMode) {
    if (mode === 'practice') setPractice(initialAttempt);
    go(songHash(song, mode), { kind: 'song', song, mode });
  }

  const toArea = () => go('#keikkalista', { kind: 'area' });
  const toGig = (gig: number) => go(gigHash(gig), { kind: 'area', gig });

  function recordSong(song: number) {
    const saved = withCompleted(readProgress(), order, latest.current, song);
    setCompleted(completedFrom(saved));
    setSaveFailed(!saveProgress(saved));
  }

  function resetProgress() {
    if (!window.confirm('Aloitetaanko Ensikeikka alusta? Kaikkien keikkojen suoritusmerkinnät tyhjennetään tästä selaimesta.')) return;
    setSaveFailed(!clearProgress());
    setCompleted([]);
    setAttempts({});
    setOpenGigs([]);
    window.scrollTo(0, 0);
    document.getElementById('keikkalista')?.focus({ preventScroll: true });
  }

  if (view.kind === 'song') {
    const { song: id, mode } = view;
    const song = songs[id];
    const gig = gigOf(id)!;
    const isPractice = mode === 'practice';
    const songComplete = completed.includes(id);
    const attempt = isPractice ? practice : songComplete
      ? { ...initialAttempt, stage: 'complete' as const } : attempts[id] ?? initialAttempt;

    function update(changes: Partial<Attempt>) {
      if (isPractice) setPractice(previous => ({ ...previous, ...changes }));
      else setAttempts(previous => ({ ...previous, [id]: { ...previous[id] ?? initialAttempt, ...changes } }));
    }

    const gigNow = status(gig, completed);
    const nextSong = followingSong(gig.songs, id);
    const finishedGig = !isPractice && gigNow.complete && nextSong === undefined;
    const followingGig = finishedGig ? area.gigs.find(item => item.requires === gig.id) : undefined;
    const followingStart = followingGig && status(followingGig, completed).next;
    const everything = finishedGig && areaComplete(area.gigs, completed);

    let onNext: (() => void) | undefined;
    if (isPractice && nextSong !== undefined) onNext = () => open(nextSong, 'practice');
    else if (!isPractice && songComplete && nextSong !== undefined) {
      onNext = () => open(nextSong, completed.includes(nextSong) ? 'replay' : 'progress');
    }

    return <SongPlayer key={`${id}-${mode}`} song={song} gigId={gig.id} showLabel={`Keikka ${gig.id} – ${gig.title}`}
      attempt={attempt} update={update} onList={toArea} onSetlist={() => toGig(gig.id)}
      onNext={onNext} nextLabel={isPractice ? 'Harjoittele seuraavaa kappaletta' : 'Seuraava kappale'}
      onComplete={() => {
        if (isPractice) update({ stage: 'complete' });
        else if (!songComplete) recordSong(id);
      }}
      completionTitle={isPractice ? 'Harjoittelu valmis!' : finishedGig ? gig.completionTitle : 'Kappale valmis!'}
      completedCount={finishedGig ? gig.songs.length : undefined}
      completionNote={everything ? `${area.title} on nyt kokonaan soitettu. Esiintymisalue suoritettu!` : undefined}
      extraActions={followingGig && followingStart !== undefined
        ? <button onClick={() => open(followingStart, 'progress')}>Aloita keikka {followingGig.id}</button> : undefined}
      practice={isPractice} saveFailed={saveFailed} />;
  }

  if (view.kind === 'start') {
    const finished = areaComplete(area.gigs, completed);
    return (
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
          <ul className="area-summary" aria-label={`${area.title}: eteneminen`}>
            {area.gigs.map(gig => {
              const { count, complete, unlocked } = status(gig, completed);
              return <li key={gig.id} className="gig-state" data-state={complete ? 'done' : unlocked ? 'next' : 'locked'}>
                Keikka {gig.id}: {complete ? 'suoritettu' : unlocked ? `${count} / ${gig.songs.length} kappaletta` : `avautuu keikan ${gig.requires} jälkeen`}
              </li>;
            })}
          </ul>
          {finished && <p className="tour-finished">Esiintymisalue suoritettu</p>}
          <div className="button-row">
            <button className="primary" onClick={toArea}>{area.title}</button>
            <a className="game-link" href="../../book/osa-2.html#ensikeikan-teoria">Opettele ensin</a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="concert">
      <nav className="start-navigation" aria-label="Palaa">
        <button className="back-link" onClick={() => go('', { kind: 'start' })}>
          <span aria-hidden="true">←</span> Takaisin Ensikeikan alkuun
        </button>
      </nav>
      <header className="intro">
        <p className="project">Ensikeikka (beta)</p>
        <h1 id="keikkalista" tabIndex={-1}>{area.title}</h1>
      </header>
      <section className="session" aria-label="Keikkalista">
        <h2>Keikkalista</h2>
        {area.gigs.map(gig => <GigCard key={gig.id} gig={gig} completed={completed} attempts={attempts}
          open={openGigs.includes(gig.id)} onOpen={open}
          onToggle={() => setOpenGigs(gigs => gigs.includes(gig.id) ? gigs.filter(item => item !== gig.id) : [...gigs, gig.id])} />)}
        {areaComplete(area.gigs, completed) && <p className="tour-finished">Esiintymisalue suoritettu!</p>}
      </section>
      <nav className="game-navigation" aria-label="Muut toiminnot">
        {completed.length > 0 && <button onClick={resetProgress}>Aloita alusta</button>}
      </nav>
      {saveFailed && <p role="status">Selain ei voinut tallentaa muutosta. Näytetty eteneminen on käytössä tällä sivulla.</p>}
    </main>
  );
}

function GigCard({ gig, completed, attempts, open, onOpen, onToggle }: {
  gig: Gig;
  completed: readonly number[];
  attempts: Partial<Record<number, Attempt>>;
  open: boolean;
  onOpen: (song: number, mode: SongMode) => void;
  onToggle: () => void;
}) {
  const { count, complete, unlocked, next } = status(gig, completed);
  const required = gigById(gig.requires);
  const started = count > 0 || gig.songs.some(song => attempts[song]);
  const listId = `show-${gig.id}-songs`;
  return (
    <section className="show-card" aria-labelledby={`show-${gig.id}-title`} data-state={complete ? 'done' : unlocked ? 'open' : 'locked'}>
      <h3 id={`show-${gig.id}-title`} tabIndex={-1}>Keikka {gig.id} – {gig.title}</h3>
      <p className="show-description">{gig.description}</p>
      <p className="gig-state" data-state={complete ? 'done' : unlocked ? 'next' : 'locked'}>
        {count} / {gig.songs.length} kappaletta suoritettu
        {complete && ' · Keikka suoritettu'}
      </p>
      {!unlocked && required && <p className="gig-note">
        Avautuu, kun keikka {required.id} on suoritettu. Voit silti kokeilla kappaleita vapaasti. Kokeilu ei tallennu.
      </p>}
      <div className="button-row">
        {next !== undefined && <button className="primary" onClick={() => onOpen(next, 'progress')}>
          {started ? `Jatka keikkaa ${gig.id}` : `Aloita keikka ${gig.id}`}
        </button>}
        {complete && <button className="primary" onClick={() => onOpen(gig.songs[0], 'practice')}>
          Harjoittele keikka {gig.id} uudelleen
        </button>}
        <button aria-expanded={open} aria-controls={listId} onClick={onToggle}>
          {open ? 'Piilota settilista' : unlocked ? 'Valitse kappale' : 'Kokeile kappaleita'}
        </button>
      </div>
      <h4 hidden={!open} className="setlist-title">Settilista</h4>
      <ol id={listId} aria-label={`Keikan ${gig.id} settilista`} className="show-songs" role="list" hidden={!open}>
        {gig.songs.map(song => {
          const done = completed.includes(song);
          const state = done ? 'done' : song === next ? 'next' : 'locked';
          return <li key={song}>
            <h4>Kappale {song} – {songs[song].title}</h4>
            <p className="gig-state" data-state={state}>
              {done ? 'Suoritettu' : song === next ? 'Seuraava kappale'
                : unlocked ? 'Avautuu edellisen kappaleen jälkeen' : `Avautuu keikan ${required?.id} jälkeen`}
            </p>
            {song === next && <button onClick={() => onOpen(song, 'progress')}>Avaa kappale {song}</button>}
            {!done && song !== next && gig.freePractice && <button onClick={() => onOpen(song, 'practice')}
              aria-label={`Kokeile kappaletta ${song} vapaasti`}>Kokeile vapaasti</button>}
            {done && <div className="button-row">
              <button onClick={() => onOpen(song, 'replay')} aria-label={`Kuuntele kappale ${song}`}>Kuuntele</button>
              <button onClick={() => onOpen(song, 'practice')} aria-label={`Harjoittele kappaletta ${song}`}>Harjoittele uudelleen</button>
            </div>}
          </li>;
        })}
      </ol>
    </section>
  );
}

createRoot(document.getElementById('root')!).render(<Ensikeikka />);
