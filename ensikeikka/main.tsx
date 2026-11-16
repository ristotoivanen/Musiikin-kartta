import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { SongPlayer, initialAttempt, type Attempt, type SongAction, type Update } from './GigPlayer';
import { area, capitalize, drawRounds, gigName, gigOf, progressOrder, progressText, renderFinale, requiredGigs, requiredText, songs, songVersion, versionCount } from './catalog';
import { areaComplete, followingSong, gigStatus, songAccess, type SongMode } from './setlist';
import { shuffledOrder } from './order';
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
  // Harjoittelu valitsee musiikkiesimerkin, jota ei juuri kuultu. Opetus käyttää versiota 0.
  const lastVariant = useRef<Record<number, number>>({});
  function pickVariant(song: number) {
    const count = songs[song] ? versionCount(songs[song]) : 1;
    if (count < 2) return 0;
    const options = [...Array(count).keys()].filter(variant => variant !== (lastVariant.current[song] ?? 0));
    const variant = options[Math.min(options.length - 1, Math.floor(Math.random() * options.length))];
    lastVariant.current[song] = variant;
    return variant;
  }
  // Etenemisen uusi yritys arvotaan kerran sivun aikana: kierrokset (soundcheck) ja Ensitreenien
  // lopetusjärjestys. Yritys säilyy muistissa, joten järjestys ei vaihdu renderöinnissä, vaiheiden
  // välillä eikä tarkistuksessa. Uudelleenlataus aloittaa keskeneräisen kappaleen uutena yrityksenä.
  const fresh = useRef<Partial<Record<number, Attempt>>>({});
  function freshAttempt(song: number): Attempt {
    const existing = fresh.current[song];
    if (existing) return existing;
    const rounds = songs[song] && drawRounds(songs[song]);
    const attempt = { ...initialAttempt, order: progressOrder(song), ...rounds && { rounds } };
    fresh.current[song] = attempt;
    return attempt;
  }
  // Harjoittelukierros kuuluu yhdelle kappaleelle. Uusi kierros arpoo esimerkin, kierrokset ja lopetusten järjestyksen.
  const newRound = (song: number) => {
    const rounds = songs[song] && drawRounds(songs[song]);
    return { song, attempt: { ...initialAttempt, order: shuffledOrder(), variant: pickVariant(song), ...rounds && { rounds } } };
  };
  const [practice, setPractice] = useState(() => newRound(view.kind === 'song' ? view.song : 0));
  const [saveFailed, setSaveFailed] = useState(false);
  const pendingFocus = useRef(window.location.hash !== '');

  useEffect(() => {
    if (view.kind === 'song' || !pendingFocus.current) return;
    pendingFocus.current = false;
    focusView(view);
  }, [view, openGigs]);

  function show(next: View) {
    // Selaimen historia voi palauttaa toisen kappaleen harjoittelun: silloin alkaa uusi kierros.
    if (next.kind === 'song' && next.mode === 'practice') {
      setPractice(current => current.song === next.song ? current : newRound(next.song));
    }
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
    if (mode === 'practice') setPractice(newRound(song));
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
    fresh.current = {};
    setOpenGigs([]);
    window.scrollTo(0, 0);
    document.getElementById('keikkalista')?.focus({ preventScroll: true });
  }

  if (view.kind === 'song') {
    const { song: id, mode } = view;
    const gig = gigOf(id)!;
    const isPractice = mode === 'practice';
    const songComplete = completed.includes(id);
    // Valmis kappale säilyttää tehtävän tilan (esim. kappaleen 9 vaiheen), jotta onnistumiskortti ei vaihdu.
    const attempt = isPractice ? practice.attempt : songComplete
      ? { ...attempts[id] ?? freshAttempt(id), stage: 'complete' as const } : attempts[id] ?? freshAttempt(id);
    const song = songVersion(songs[id], attempt.variant, attempt.rounds);

    const update: Update = changes => {
      const apply = (current: Attempt) => ({ ...current, ...(typeof changes === 'function' ? changes(current) : changes) });
      if (isPractice) setPractice(previous => ({ song: id, attempt: apply(previous.attempt) }));
      else setAttempts(previous => ({ ...previous, [id]: apply(previous[id] ?? freshAttempt(id)) }));
    };

    const gigNow = status(gig, completed);
    const nextSong = followingSong(gig.songs, id);
    const finishedGig = !isPractice && gigNow.complete && nextSong === undefined;
    // Seuraava keikka, jonka voi aloittaa normaalisti (esim. keikka 1 → keikka 2, Ensitreenit → Ensikeikka).
    const followingGig = finishedGig
      ? area.gigs.find(item => item.requires?.includes(gig.id) && status(item, completed).next !== undefined) : undefined;
    const followingStart = followingGig && status(followingGig, completed).next;
    const everything = finishedGig && areaComplete(area.gigs, completed);
    const waiting = finishedGig ? requiredGigs(gig).find(other => !status(other, completed).complete) : undefined;
    const finale = finishedGig && gig.finale ? {
      label: 'Kuuntele keikan biisit', stopLabel: 'Pysäytä keikan biisit', status: 'keikan biisit', note: gig.finale.note,
      render: (rate: number) => renderFinale(gig, rate),
    } : undefined;

    // Jatkaminen tapahtuu vain painalluksesta: seuraava kappale, seuraava keikka tai settilista.
    const actions: SongAction[] = [];
    const toSetlist = { label: 'Palaa settilistaan', run: () => toGig(gig.id) };
    if (isPractice && nextSong !== undefined) {
      actions.push({ label: 'Harjoittele seuraavaa kappaletta', run: () => open(nextSong, 'practice') });
    } else if (!isPractice && songComplete && nextSong !== undefined) {
      actions.push({ label: 'Seuraava kappale', run: () => open(nextSong, completed.includes(nextSong) ? 'replay' : 'progress') });
    } else if (followingGig && followingStart !== undefined) {
      actions.push({ label: `Aloita ${gigName(followingGig).nominative}`, run: () => open(followingStart, 'progress') }, toSetlist);
    } else actions.push(toSetlist);

    return <SongPlayer key={`${id}-${mode}`} song={song} gigId={gig.id} showLabel={`${gigName(gig).heading} – ${gig.title}`}
      attempt={attempt} update={update} onList={toArea} onSetlist={() => toGig(gig.id)}
      actions={actions}
      onComplete={() => {
        if (isPractice) update({ stage: 'complete' });
        else if (!songComplete) recordSong(id);
      }}
      completionTitle={isPractice ? 'Harjoittelu valmis' : finishedGig ? gig.completionTitle : song.completionTitle ?? 'Kappale valmis'}
      completedSummary={finishedGig ? gig.completionSummary ?? `Suoritit ${gig.songs.length} kappaletta.` : undefined}
      completionNote={everything ? `${area.title} on nyt kokonaan soitettu. Esiintymisalue suoritettu!`
        : waiting ? `${capitalize(gigName(waiting).nominative)} on vielä soittamatta. Esiintymisalue valmistuu, kun kaikki keikat on suoritettu.` : undefined}
      finale={finale}
      practice={isPractice} saving={mode === 'progress'} saveFailed={saveFailed} />;
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
              const { count, complete, unlocked, direct } = status(gig, completed);
              const locked = `avautuu ${requiredText(gig, 'genitive')} jälkeen${direct !== undefined ? ' tai suoraan aloittamalla' : ''}`;
              return <li key={gig.id} className="gig-state" data-state={complete ? 'done' : unlocked ? 'next' : 'locked'}>
                {gigName(gig).heading}: {complete ? 'suoritettu' : unlocked ? progressText(gig, count) : locked}
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
  const { count, complete, unlocked, next, direct } = status(gig, completed);
  const required = requiredGigs(gig).length > 0;
  const name = gigName(gig);
  const started = count > 0 || gig.songs.some(song => attempts[song]);
  const listId = `show-${gig.id}-songs`;
  return (
    <section className="show-card" aria-labelledby={`show-${gig.id}-title`} data-state={complete ? 'done' : unlocked ? 'open' : 'locked'}>
      <h3 id={`show-${gig.id}-title`} tabIndex={-1}>{name.heading} – {gig.title}</h3>
      <p className="show-description">{gig.description}</p>
      <p className="gig-state" data-state={complete ? 'done' : unlocked ? 'next' : 'locked'}>
        {progressText(gig, count)} suoritettu
        {complete && ' · Keikka suoritettu'}
      </p>
      {!unlocked && required && <>
        <p className="gig-note">{gig.lockNote ?? `Tavallisesti ${name.nominative} avautuu, kun ${requiredText(gig, 'nominative')} on suoritettu.`}</p>
        <div className="gig-options">
          {direct !== undefined && <div className="gig-option">
            <button onClick={() => onOpen(direct, 'progress')} aria-describedby={`show-${gig.id}-direct`}>
              {started ? `Jatka ${name.partitive}` : `Aloita suoraan ${name.elative}`}
            </button>
            <p id={`show-${gig.id}-direct`} className="gig-note">
              {gig.directNote ?? `Kotisävelet jo tuttuja? Suoritukset tallentuvat. ${capitalize(requiredText(gig, 'nominative'))} pysyy ennallaan ja odottaa sinua.`}
            </p>
          </div>}
          {gig.freePractice && <div className="gig-option">
            <button aria-expanded={open} aria-controls={listId} onClick={onToggle} aria-describedby={`show-${gig.id}-free`}>
              {open ? 'Piilota settilista' : 'Kokeile kappaleita'}
            </button>
            <p id={`show-${gig.id}-free`} className="gig-note">Vapaa harjoittelu: mitään ei tallenneta.</p>
          </div>}
        </div>
      </>}
      {(unlocked || !gig.freePractice) && <div className="button-row">
        {next !== undefined && <button className="primary" onClick={() => onOpen(next, 'progress')}>
          {started ? `Jatka ${name.partitive}` : `Aloita ${name.nominative}`}
        </button>}
        {complete && <button className="primary" onClick={() => onOpen(gig.songs[0], 'practice')}>
          Harjoittele {name.nominative} uudelleen
        </button>}
        <button aria-expanded={open} aria-controls={listId} onClick={onToggle}>
          {open ? 'Piilota settilista' : unlocked ? 'Valitse kappale' : 'Kokeile kappaleita'}
        </button>
      </div>}
      <h4 hidden={!open} className="setlist-title">Settilista</h4>
      <ol id={listId} aria-label={`${capitalize(name.genitive)} settilista`} className="show-songs" role="list" hidden={!open}>
        {gig.songs.map(song => {
          const done = completed.includes(song);
          const state = done ? 'done' : song === next || song === direct ? 'next' : 'locked';
          return <li key={song}>
            <h4>Kappale {song} – {songs[song].title}</h4>
            <p className="gig-state" data-state={state}>
              {done ? 'Suoritettu' : song === next ? 'Seuraava kappale'
                : song === direct ? 'Voit aloittaa tästä suoraan'
                  : unlocked ? 'Avautuu edellisen kappaleen jälkeen' : `Avautuu ${requiredText(gig, 'genitive')} jälkeen`}
            </p>
            {song === next && <button onClick={() => onOpen(song, 'progress')}>Avaa kappale {song}</button>}
            {song === direct && <button onClick={() => onOpen(song, 'progress')}
              aria-label={`Aloita suoraan kappaleesta ${song}`}>Aloita suoraan</button>}
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
