import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { SongPlayer, initialAttempt, type Attempt, type SongAction, type Update } from './GigPlayer';
import {
  area, capitalize, drawRounds, gigName, gigOf, progressOrder, progressText, renderFinale, requiredGigs, requiredText,
  sectionGigs, sectionOf, sections, songs, songVersion, versionCount,
} from './catalog';
import { followingSong, gigStatus, songAccess, type SongMode } from './setlist';
import { shuffledOrder } from './order';
import { clearProgress, completedPrefix, readProgress, saveProgress, storedSongs, withCompleted } from './progress';
import type { Gig, Section } from './tasks';
import './style.css';

/*
 * Näkymät ja osoitteet:
 *   (ei hashia)      Alku: kokonaisuudet Bänditreenit ja Ensikeikka omina valintoinaan
 *   #banditreenit    Bänditreenit: treenikerrat 1 ja 2 (sisäiset keikat 1 ja 2)
 *   #keikka-N        Keikan N kokonaisuus, jossa sen harjoitukset ovat auki. #keikka-3 on Ensikeikka.
 *   #keikkalista     Vanha keikkalista → Bänditreenit (#settilista → treenikerta 1)
 *   #kappale-N       Kappale normaalissa etenemisessä tai valmiin kappaleen uudelleenkuuntelu
 *   #harjoitus-N     Vapaa harjoittelu, joka ei muuta tallennettua etenemistä
 * Jokainen siirtymä lisää selainhistoriaan merkinnän, joten selaimen Takaisin-painike toimii.
 */
type View = { kind: 'start' } | { kind: 'section'; section: string; gig?: number } | { kind: 'song'; song: number; mode: SongMode };

const order = area.gigs.flatMap(gig => gig.songs);
const completedFrom = (stored: readonly number[]) => area.gigs.flatMap(gig => completedPrefix(stored, gig.songs));
const gigById = (id: number | undefined) => area.gigs.find(gig => gig.id === id);
const sectionById = (id: string) => sections.find(section => section.id === id)!;
const status = (gig: Gig, completed: readonly number[]) => gigStatus(area.gigs, gig, completed);
const songHash = (song: number, mode: SongMode) => `#${mode === 'practice' ? 'harjoitus' : 'kappale'}-${song}`;
const gigHash = (gig: number) => `#keikka-${gig}`;
const single = (section: Section) => section.gigs.length === 1;
/** Kokonaisuuden näkymä keikan kohdalta: monen keikan kokonaisuudessa keikan harjoitukset avataan. */
const gigView = (gig: Gig): View => ({ kind: 'section', section: sectionOf(gig).id, gig: gig.id });

function sectionProgress(section: Section, completed: readonly number[]) {
  const gigs = sectionGigs(section);
  const total = gigs.reduce((sum, gig) => sum + gig.songs.length, 0);
  const count = gigs.reduce((sum, gig) => sum + status(gig, completed).count, 0);
  const next = gigs.map(gig => status(gig, completed).next).find(song => song !== undefined);
  return { total, count, complete: count === total, next };
}

function resolve(hash: string, completed: readonly number[]): { view: View; redirect?: string } {
  const banditreenit = sections[0];
  if (hash === '#keikkalista' || hash === '#keikkakartta') return { view: { kind: 'section', section: banditreenit.id }, redirect: banditreenit.hash };
  const section = sections.find(item => !single(item) && item.hash === hash);
  if (section) return { view: { kind: 'section', section: section.id } };
  if (hash === '#settilista') return { view: gigView(area.gigs[0]) };
  const gigMatch = /^#keikka-(\d+)$/.exec(hash);
  const gig = gigMatch ? gigById(Number(gigMatch[1])) : undefined;
  if (gig) return { view: gigView(gig) };
  const songMatch = /^#(kappale|harjoitus)-(\d+)$/.exec(hash);
  if (songMatch) {
    const song = Number(songMatch[2]);
    const access = songAccess(area.gigs, song, completed);
    if (songMatch[1] === 'harjoitus' && access.practice) return { view: { kind: 'song', song, mode: 'practice' } };
    if (songMatch[1] === 'kappale' && access.play) return { view: { kind: 'song', song, mode: access.play } };
    // Lukittu kappale: näytä kokonaisuus, josta sen voi avata tai kokeilla.
    const owner = gigOf(song);
    if (owner) return { view: gigView(owner), redirect: gigHash(owner.id) };
  }
  return { view: { kind: 'start' } };
}

function focusView(view: View) {
  const target = document.getElementById(view.kind === 'start' ? 'ensikeikka'
    : view.kind === 'section' && view.gig ? `show-${view.gig}-title` : view.kind === 'section' ? view.section : '');
  target?.focus({ preventScroll: true });
  if (view.kind === 'section' && view.gig && !single(sectionById(view.section))) target?.scrollIntoView({ block: 'start' });
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
  const [openGigs, setOpenGigs] = useState<number[]>(() => view.kind === 'section' && view.gig ? [view.gig] : []);
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
    if (next.kind === 'section' && next.gig) setOpenGigs(gigs => gigs.includes(next.gig!) ? gigs : [...gigs, next.gig!]);
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

  const toStart = () => go('', { kind: 'start' });
  const toSection = (section: Section) => go(section.hash, single(section)
    ? { kind: 'section', section: section.id, gig: section.gigs[0] } : { kind: 'section', section: section.id });
  const toGig = (gig: Gig) => go(gigHash(gig.id), gigView(gig));

  function recordSong(song: number) {
    const saved = withCompleted(readProgress(), order, latest.current, song);
    setCompleted(completedFrom(saved));
    setSaveFailed(!saveProgress(saved));
  }

  function resetProgress() {
    if (!window.confirm('Aloitetaanko alusta? Bänditreenien ja Ensikeikan suoritusmerkinnät tyhjennetään tästä selaimesta.')) return;
    setSaveFailed(!clearProgress());
    setCompleted([]);
    setAttempts({});
    fresh.current = {};
    setOpenGigs([]);
    window.scrollTo(0, 0);
    document.getElementById('ensikeikka')?.focus({ preventScroll: true });
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
    // Valmistumisviesti: oman kokonaisuuden tila ja muiden kokonaisuuksien kesken jääneet keikat.
    const section = sectionOf(gig);
    const waiting = finishedGig ? requiredGigs(gig).filter(other => !status(other, completed).complete) : [];
    const waitingHere = waiting.find(other => sectionOf(other) === section);
    const waitingElsewhere = waiting.find(other => sectionOf(other) !== section);
    const sectionDone = sectionProgress(section, completed).complete;
    const completionNote = !finishedGig ? undefined : [
      sectionDone ? section.doneNote : waitingHere
        ? `${capitalize(gigName(waitingHere).nominative)} on vielä kesken. ${section.title} valmistuvat, kun kaikki treenikerrat on suoritettu.` : '',
      waitingElsewhere ? sectionOf(waitingElsewhere).pendingNote : '',
    ].filter(Boolean).join(' ') || undefined;
    const finale = finishedGig && gig.finale ? {
      label: 'Kuuntele keikan biisit', stopLabel: 'Pysäytä keikan biisit', status: 'keikan biisit', note: gig.finale.note,
      render: (rate: number) => renderFinale(gig, rate),
    } : undefined;

    // Jatkaminen tapahtuu vain painalluksesta: seuraava kappale, seuraava keikka tai oma kokonaisuus.
    const actions: SongAction[] = [];
    const toSetlist = { label: section.backLabel, run: () => toGig(gig) };
    if (isPractice && nextSong !== undefined) {
      actions.push({ label: 'Harjoittele seuraavaa kappaletta', run: () => open(nextSong, 'practice') });
    } else if (!isPractice && songComplete && nextSong !== undefined) {
      actions.push({ label: 'Seuraava kappale', run: () => open(nextSong, completed.includes(nextSong) ? 'replay' : 'progress') });
    } else if (followingGig && followingStart !== undefined) {
      actions.push({ label: `Aloita ${gigName(followingGig).nominative}`, run: () => open(followingStart, 'progress') }, toSetlist);
    } else actions.push(toSetlist);

    return <SongPlayer key={`${id}-${mode}`} song={song}
      showLabel={isPractice ? `${gigName(gig).heading} · Vapaa harjoittelu` : `${gigName(gig).heading} – ${gig.title}`}
      back={{ label: section.backLabel, href: `./${gigHash(gig.id)}`, run: () => toGig(gig) }}
      attempt={attempt} update={update}
      actions={actions}
      onComplete={() => {
        if (isPractice) update({ stage: 'complete' });
        else if (!songComplete) recordSong(id);
      }}
      completionTitle={isPractice ? 'Harjoittelu valmis' : finishedGig ? gig.completionTitle : song.completionTitle ?? 'Kappale valmis'}
      completedSummary={finishedGig ? gig.completionSummary ?? `Suoritit ${gig.songs.length} ${gig.unit ?? 'kappaletta'}.` : undefined}
      completionNote={completionNote}
      finale={finale}
      practice={isPractice} saving={mode === 'progress'} saveFailed={saveFailed} />;
  }

  if (view.kind === 'start') {
    // Suositeltu kokonaisuus on ensimmäinen keskeneräinen: sen avauspainike on ensisijainen.
    const recommended = sections.find(section => !sectionProgress(section, completed).complete);
    return (
      <main className="concert">
        <nav className="start-navigation" aria-label="Palaa">
          <a className="game-link" href="../../kitaraharjoittelija.html?polku=otelauta">
            <span aria-hidden="true">←</span> Takaisin harjoitusvalikkoon
          </a>
        </nav>
        <header className="intro">
          <h1 id="ensikeikka" tabIndex={-1}>{area.title} (beta)</h1>
          <p>Kuuntele, miten melodia ja soinnut toimivat yhdessä, ja löydä kappaleiden kotisävelet. Et tarvitse kitaraa tai nuottien tuntemusta.</p>
        </header>
        {sections.map(section => {
          const progress = sectionProgress(section, completed);
          const gigs = sectionGigs(section);
          const locked = gigs.every(gig => !status(gig, completed).unlocked);
          const direct = gigs.some(gig => status(gig, completed).direct !== undefined);
          const state = progress.complete ? 'done' : locked ? 'locked' : 'next';
          return <section key={section.id} className="session section-card" aria-labelledby={`${section.id}-otsikko`}>
            <h2 id={`${section.id}-otsikko`}>{section.title}</h2>
            <p className="show-description">{section.description}</p>
            <p className="gig-state" data-state={state}>
              {progress.complete ? 'Suoritettu' : locked
                ? `Avautuu ${requiredText(gigs[0], 'genitive')} jälkeen${direct ? '. Voit myös aloittaa suoraan.' : '.'}`
                : `${progress.count} / ${progress.total} ${section.unit} suoritettu`}
            </p>
            <div className="button-row">
              <button className={section === recommended ? 'primary' : undefined} onClick={() => toSection(section)}>
                Avaa {section.shortName}
              </button>
            </div>
          </section>;
        })}
        <nav className="game-navigation" aria-label="Muut toiminnot">
          <a className="game-link" href="../../book/osa-2.html#ensikeikan-teoria">Opettele ensin</a>
          {completed.length > 0 && <button onClick={resetProgress}>Aloita alusta</button>}
        </nav>
        {saveFailed && <p role="status">Selain ei voinut tallentaa muutosta. Näytetty eteneminen on käytössä tällä sivulla.</p>}
      </main>
    );
  }

  const section = sectionById(view.section);
  const gigs = sectionGigs(section);
  const progress = sectionProgress(section, completed);
  const started = progress.count > 0 || gigs.some(gig => gig.songs.some(song => attempts[song]));
  const toggle = (gig: number) => setOpenGigs(open => open.includes(gig) ? open.filter(item => item !== gig) : [...open, gig]);
  const cards = gigs.map(gig => <GigCard key={gig.id} gig={gig} section={section} completed={completed} attempts={attempts}
    open={openGigs.includes(gig.id)} onOpen={open} onToggle={() => toggle(gig.id)} titled={!single(section)}
    sectionNext={progress.next} />);
  return (
    <main className="concert">
      <nav className="start-navigation" aria-label="Palaa">
        <button className="back-link" onClick={toStart}>
          <span aria-hidden="true">←</span> Takaisin alkuun
        </button>
      </nav>
      <header className="intro">
        <p className="project">{area.title} (beta)</p>
        <h1 id={single(section) ? `show-${gigs[0].id}-title` : section.id} tabIndex={-1}>{section.title}</h1>
      </header>
      {single(section) ? <div className="session">{cards}</div>
        : <section className="session" aria-labelledby={section.id}>
          <p className="gig-state" data-state={progress.complete ? 'done' : 'next'}>
            {progress.count} / {progress.total} {section.unit} suoritettu
          </p>
          {progress.complete ? <p className="tour-finished">{section.doneNote}</p>
            : progress.next !== undefined && <div className="button-row">
              <button className="primary" onClick={() => open(progress.next!, 'progress')}>
                {started ? section.continueLabel : section.startLabel}
              </button>
            </div>}
          {cards}
        </section>}
      {saveFailed && <p role="status">Selain ei voinut tallentaa muutosta. Näytetty eteneminen on käytössä tällä sivulla.</p>}
    </main>
  );
}

/**
 * Keikan kortti kokonaisuuden näkymässä. Bänditreeneissä treenikerran kortilla ei ole omaa
 * aloituspainiketta (aloitus on näkymän yläosassa), vaan harjoitukset avataan listasta. Ensikeikan
 * näkymässä kortti on näkymän ainoa sisältö, ja sen otsikkona toimii näkymän pääotsikko.
 */
function GigCard({ gig, section, completed, attempts, open, onOpen, onToggle, titled, sectionNext }: {
  gig: Gig;
  section: Section;
  completed: readonly number[];
  attempts: Partial<Record<number, Attempt>>;
  open: boolean;
  onOpen: (song: number, mode: SongMode) => void;
  onToggle: () => void;
  titled: boolean;
  /** Kokonaisuuden ensisijaisen aloituksen kappale. Muu kesken oleva treenikerta saa toissijaisen jatkopainikkeen. */
  sectionNext?: number;
}) {
  const { count, complete, unlocked, next, direct } = status(gig, completed);
  const required = requiredGigs(gig).length > 0;
  const name = gigName(gig);
  const started = count > 0 || gig.songs.some(song => attempts[song]);
  const listId = `show-${gig.id}-songs`;
  const ListHeading = titled ? 'h3' : 'h2';
  const ItemHeading = titled ? 'h4' : 'h3';
  const toggle = <button aria-expanded={open} aria-controls={listId} onClick={onToggle}
    aria-describedby={!unlocked && gig.freePractice ? `show-${gig.id}-free` : undefined}>
    {open ? section.hideLabel : section.chooseLabel}
  </button>;
  return (
    <section className="show-card" aria-labelledby={`show-${gig.id}-title`} data-state={complete ? 'done' : unlocked ? 'open' : 'locked'}>
      {titled && <h2 id={`show-${gig.id}-title`} tabIndex={-1}>{name.heading} – {gig.title}</h2>}
      <p className="show-description">{gig.description}</p>
      <p className="gig-state" data-state={complete ? 'done' : unlocked ? 'next' : 'locked'}>
        {progressText(gig, count)} suoritettu
        {complete && ` · ${capitalize(name.nominative)} suoritettu`}
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
            {toggle}
            <p id={`show-${gig.id}-free`} className="gig-note">Vapaa harjoittelu: mitään ei tallenneta.</p>
          </div>}
        </div>
      </>}
      {(unlocked || !gig.freePractice) && <div className="button-row">
        {!titled && next !== undefined && <button className="primary" onClick={() => onOpen(next, 'progress')}>
          {started ? section.continueLabel : section.startLabel}
        </button>}
        {titled && next !== undefined && next !== sectionNext && <button onClick={() => onOpen(next, 'progress')}>
          {started ? `Jatka ${name.partitive}` : `Aloita ${name.nominative}`}
        </button>}
        {toggle}
      </div>}
      <ListHeading hidden={!open} className="setlist-title">{section.listTitle}</ListHeading>
      <ol id={listId} aria-label={`${capitalize(name.genitive)} ${section.listTitle.toLowerCase()}`} className="show-songs" role="list" hidden={!open}>
        {gig.songs.map(song => {
          const done = completed.includes(song);
          const state = done ? 'done' : song === next || song === direct ? 'next' : 'locked';
          return <li key={song}>
            <ItemHeading>Kappale {song} – {songs[song].title}</ItemHeading>
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
