import { useEffect, useRef, useState } from 'react';
import { SongChordChart } from './SongChordChart';
import { SongScales } from './SongScales';
import {
  SongGainMixer, elementVolumeWorks, loadSongVolume, saveSongVolume, shouldCorrectDrift, trackLevel, type SongTrack,
} from './songAudio';
import { DEFAULT_SONG_VERSION, isSongLink, songLink, versionFromSongLink, type SongVersion } from './songChart';

// Käyttäjän itse valitsema versio säilyy, vaikka hän käy välillä oppimispoluissa.
let chosenVersion: SongVersion | null = null;

/** URL:ssa nimetty versio voittaa, sitten käyttäjän valinta, muuten oletus (normaali). */
function initialVersion(): SongVersion {
  const linked = versionFromSongLink(new URLSearchParams(location.search).get('kappale'));
  return linked ?? chosenVersion ?? DEFAULT_SONG_VERSION;
}

/** Pidä suora linkki samassa versiossa kuin valinta, jos sivu avattiin kappalelinkillä. */
function rememberVersion(version: SongVersion) {
  chosenVersion = version;
  const url = new URL(location.href);
  if (!isSongLink(url.searchParams.get('kappale'))) return;
  url.searchParams.set('kappale', songLink(version));
  history.replaceState(history.state, '', url.pathname + url.search + url.hash);
}
const VERSIONS = {
  acoustic: {
    label: 'Akustinen versio', length: '3:53',
    backing: 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-saestys.mp3',
    guitar: 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-kitara.mp3',
    vocals: 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-laulu.mp3',
  },
  normal: {
    label: 'Normaali versio', length: '3:32',
    backing: 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-saestys.mp3',
    guitar: 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-kitara.mp3',
    vocals: 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-laulu.mp3',
  },
} as const;

const SEEK_PRECISION_SECONDS = 0.001;

function setBackingTime(backing: HTMLAudioElement, seconds: number) {
  try { backing.currentTime = seconds; } catch { /* Media ei ehkä ole vielä kelattavissa. */ }
}

function clock(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const whole = Math.floor(seconds);
  return String(Math.floor(whole / 60)) + ':' + String(whole % 60).padStart(2, '0');
}

/** Kaksi sovitusta ja kolme striimattavaa MP3-raitaa per sovitus. */
export function SongJourney({ onBack }: { onBack: () => void }) {
  const backingRef = useRef<HTMLAudioElement>(null);
  const guitarRef = useRef<HTMLAudioElement>(null);
  const vocalsRef = useRef<HTMLAudioElement>(null);
  // Suojaa keskeneräisen play()-lupauksen versionvaihtoon liittyvältä kilpailutilanteelta.
  const playbackRequest = useRef(0);
  // Kunkin raidan edellinen driftikorjaus (performance.now), ks. shouldCorrectDrift.
  const lastDriftFix = useRef(new WeakMap<HTMLMediaElement, number>());
  const pendingSeek = useRef<number | null>(null);
  const [version, setVersion] = useState<SongVersion>(initialVersion);
  const song = VERSIONS[version];
  const [playing, setPlaying] = useState(false);
  const [guitarOn, setGuitarOn] = useState(true);
  const [vocalsOn, setVocalsOn] = useState(true);
  const [loopOn, setLoopOn] = useState(false);
  // Suljettukin sointukartta pysyy mukana DOMissa, joten toisto ja harjoitusasetukset säilyvät.
  const [chordPanelOpen, setChordPanelOpen] = useState(false);
  const [scalePanelOpen, setScalePanelOpen] = useState(false);
  const [volume, setVolume] = useState(loadSongVolume);
  // Työpöytäselaimissa käytetään elementin volume-arvoa. iOS Safarissa se ei toimi, joten
  // raidat ohjataan Web Audion GainNodeihin ensimmäisestä Soita-painalluksesta alkaen.
  const [volumeMode] = useState<'element' | 'webaudio'>(() => elementVolumeWorks() ? 'element' : 'webaudio');
  const mixer = useRef<SongGainMixer | null>(null);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState('');

  function syncStems(force = false) {
    const backing = backingRef.current;
    if (!backing || backing.readyState < 1) return;
    const now = performance.now();
    for (const stem of [guitarRef.current, vocalsRef.current]) {
      if (!stem || stem.readyState < 1) continue;
      const drift = Math.abs(stem.currentTime - backing.currentTime);
      const atLoopBoundary = backing.loop && Number.isFinite(backing.duration) &&
        Math.abs(drift - backing.duration) < 0.35;
      const lastFix = lastDriftFix.current.get(stem);
      if (!shouldCorrectDrift({ drift, atLoopBoundary, seeking: stem.seeking, readyState: stem.readyState,
        msSinceLastFix: lastFix === undefined ? Infinity : now - lastFix }, force)) continue;
      try {
        stem.currentTime = backing.currentTime;
        if (!force) lastDriftFix.current.set(stem, now);
      } catch { /* metadata kesken */ }
    }
  }

  function tracks(): [SongTrack, HTMLAudioElement | null, boolean][] {
    return [['backing', backingRef.current, true], ['guitar', guitarRef.current, guitarOn],
      ['vocals', vocalsRef.current, vocalsOn]];
  }

  /** Asettaa kaikkien raitojen tason. Ei koske toistoon, kelaukseen eikä synkronointiin. */
  function applyLevels(level = volume, audible?: Partial<Record<SongTrack, boolean>>) {
    for (const [track, element, on] of tracks()) {
      if (!element) continue;
      const value = trackLevel(track, level, audible?.[track] ?? on);
      if (volumeMode === 'webaudio' && mixer.current?.routed(element)) {
        mixer.current.setLevel(element, value);
      } else {
        // Mykistys hoidetaan muted-ominaisuudella kuten ennenkin, joten elementin taso ei sisällä sitä.
        try { element.volume = trackLevel(track, level); } catch { /* volume ei ehkä ole säädettävissä */ }
      }
    }
  }

  function changeVolume(next: number) {
    setVolume(next);
    saveSongVolume(next);
    applyLevels(next);
  }

  function pause() {
    playbackRequest.current++;
    backingRef.current?.pause();
    guitarRef.current?.pause();
    vocalsRef.current?.pause();
    setPlaying(false);
  }

  function changeVersion(next: SongVersion) {
    if (next === version) return;
    // Toisto pysäytetään ja kelataan alkuun. Uuden version käynnistäminen
    // edellyttää aina käyttäjältä erillistä Soita-painallusta.
    pendingSeek.current = null;
    pause();
    for (const stem of [backingRef.current, guitarRef.current, vocalsRef.current]) {
      if (!stem) continue;
      try { stem.currentTime = 0; } catch { /* metadata ei vielä latautunut */ }
    }
    setPosition(0);
    setDuration(0);
    setError('');
    setVersion(next);
    rememberVersion(next);
  }

  function seek(seconds: number) {
    const backing = backingRef.current;
    if (!backing || !Number.isFinite(seconds)) return;
    const at = Math.max(0, Math.min(seconds, Number.isFinite(backing.duration) ? backing.duration : seconds));
    pendingSeek.current = at;
    setPosition(at);
    setBackingTime(backing, at);
  }

  function retryPendingSeek(backing: HTMLAudioElement) {
    const target = pendingSeek.current;
    if (target === null || backing !== backingRef.current || backing.seeking) return;
    const at = Number.isFinite(backing.duration) ? Math.min(target, backing.duration) : target;
    if (at !== target) {
      pendingSeek.current = at;
      setPosition(at);
    }
    if (Math.abs(backing.currentTime - at) < SEEK_PRECISION_SECONDS) return;
    const ranges = backing.seekable;
    for (let i = 0; i < ranges.length; i++) {
      if (ranges.start(i) <= at && at <= ranges.end(i)) {
        setBackingTime(backing, at);
        return;
      }
    }
  }

  function followBacking(backing: HTMLAudioElement) {
    if (backing !== backingRef.current) return;
    const target = pendingSeek.current;
    if (target === null) {
      setPosition(backing.currentTime);
    } else if (backing.readyState >= 1 && !backing.seeking &&
      Math.abs(backing.currentTime - target) < SEEK_PRECISION_SECONDS) {
      pendingSeek.current = null;
      syncStems(true);
      return;
    }
    // Epäonnistuneen tai keskeneräisen kelauksen timeupdate voi ilmoittaa vanhan ajan.
    if (!backing.paused) syncStems();
  }

  async function togglePlayback() {
    const backing = backingRef.current;
    const guitar = guitarRef.current;
    const vocals = vocalsRef.current;
    if (!backing || !guitar || !vocals) return;
    if (playing) { pause(); return; }
    setError('');
    const startAt = pendingSeek.current ?? backing.currentTime;
    if (Number.isFinite(backing.duration) && startAt >= backing.duration - 0.05) seek(0);
    retryPendingSeek(backing);
    if (volumeMode === 'webaudio') {
      // AudioContext käynnistyy käyttäjän painalluksesta. Jokainen elementti kytketään vain kerran.
      mixer.current ??= new SongGainMixer();
      if (mixer.current.unlock()) for (const stem of [backing, guitar, vocals]) mixer.current.route(stem);
    }
    applyLevels();
    guitar.muted = !guitarOn;
    vocals.muted = !vocalsOn;
    syncStems(true);
    const request = ++playbackRequest.current;
    try {
      // Kaikki käynnistyvät samalla käyttäjän painalluksella.
      const starters = [backing.play(), guitar.play(), vocals.play()];
      await Promise.all(starters);
      if (request !== playbackRequest.current) return;
      syncStems();
      setPlaying(true);
    } catch {
      if (request !== playbackRequest.current) return;
      pause();
      setError('Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.');
    }
  }

  function changeGuitar(enabled: boolean) {
    if (enabled) syncStems();
    if (guitarRef.current) guitarRef.current.muted = !enabled;
    setGuitarOn(enabled);
    applyLevels(volume, { guitar: enabled });
  }

  function changeVocals(enabled: boolean) {
    if (enabled) syncStems();
    if (vocalsRef.current) vocalsRef.current.muted = !enabled;
    setVocalsOn(enabled);
    applyLevels(volume, { vocals: enabled });
  }

  useEffect(() => {
    const hide = () => {
      if (!document.hidden) return;
      pause();
    };
    document.addEventListener('visibilitychange', hide);
    return () => {
      document.removeEventListener('visibilitychange', hide);
      playbackRequest.current++;
      backingRef.current?.pause();
      guitarRef.current?.pause();
      vocalsRef.current?.pause();
      mixer.current?.close();
    };
  }, []);

  // Versionvaihdossa syntyvät uudet audioelementit saavat saman tason heti.
  useEffect(() => { applyLevels(); }, [version]);

  return <section className="song-journey" aria-labelledby="song-journey-title">
    <button type="button" className="back-link" onClick={onBack}>← Oppimispolut</button>
    <p className="eyebrow">KAPPALEHARJOITTELU · MALLIKAPPALE 01</p>
    <h2 id="song-journey-title">Yksi sointu, kaksi askelta</h2>
    <p className="learning-lead song-lead">Avaa sointukartta nähdäksesi soinnut ja sanat tai harjoitellaksesi sointuja muistista. Voit myös mykistää mallikitaran tai laulun ja toistaa kappaletta looppina.</p>
    <label className="song-version" htmlFor="song-version-select">
      <span>Versio</span>
      <select id="song-version-select" value={version}
        onChange={event => changeVersion(event.target.value as SongVersion)}>
        <option value="normal">Normaali versio</option>
        <option value="acoustic">Akustinen versio</option>
      </select>
    </label>

    <div className="journey-lesson song-player">
      <div className="session-top"><h3>Kappaleen soitin</h3><span>{song.label} · {song.length} · kolme ääniraitaa</span></div>
      <div className="song-player-controls" role="group" aria-label="Kappaleen soitin">
        <button type="button" className="primary song-play" onClick={() => void togglePlayback()}>
          {playing ? '■ Tauko' : '▶ Soita kappale'}
        </button>
        <input type="range" aria-label="Siirry kappaleessa" min={0}
          max={duration > 0 ? duration : 1} step={0.1}
          value={Math.min(position, duration > 0 ? duration : 1)}
          disabled={duration <= 0} onChange={event => seek(Number(event.target.value))} />
        <output aria-live="off" className="song-time">{clock(position)} / {clock(duration)}</output>
      </div>
      <div className="song-toggles">
        <label><input type="checkbox" checked={guitarOn}
          onChange={event => changeGuitar(event.target.checked)} /> Kitara kuuluu</label>
        <label><input type="checkbox" checked={vocalsOn}
          onChange={event => changeVocals(event.target.checked)} /> Laulu kuuluu</label>
        <label><input type="checkbox" checked={loopOn}
          onChange={event => setLoopOn(event.target.checked)} /> Soita looppina</label>
        <label className="song-volume" data-volume-mode={volumeMode}>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
            <path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor" />
            {volume > 0 && <path d="M16 9.5a3.5 3.5 0 0 1 0 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />}
            {volume > 50 && <path d="M18.5 7a7 7 0 0 1 0 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />}
          </svg>
          <input type="range" min={0} max={100} step={1} value={volume} aria-label="Äänenvoimakkuus"
            aria-valuetext={volume + ' %'} onChange={event => changeVolume(Number(event.target.value))} />
          <output aria-hidden="true">{volume} %</output>
        </label>
      </div>
      {error && <p className="backing-error" role="alert">{error}</p>}
      <audio key={version + '-backing'} ref={backingRef} src={song.backing} preload="metadata" loop={loopOn}
        onLoadedMetadata={event => {
          if (event.currentTarget !== backingRef.current) return;
          setDuration(event.currentTarget.duration);
          retryPendingSeek(event.currentTarget);
        }}
        onProgress={event => retryPendingSeek(event.currentTarget)}
        onCanPlay={event => retryPendingSeek(event.currentTarget)}
        onTimeUpdate={event => followBacking(event.currentTarget)}
        onEnded={event => {
          if (event.currentTarget !== backingRef.current || event.currentTarget.loop) return;
          pendingSeek.current = null;
          guitarRef.current?.pause(); vocalsRef.current?.pause();
          setPlaying(false); setPosition(event.currentTarget.duration);
        }}
        onPause={event => {
          if (event.currentTarget === backingRef.current) setPlaying(false);
        }}
        onError={() => setError(song.label + ': säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.')} />
      <audio key={version + '-guitar'} ref={guitarRef} src={song.guitar} preload="metadata" muted={!guitarOn} loop={loopOn}
        onLoadedMetadata={() => syncStems(true)}
        onError={() => setError(song.label + ': kitararaita puuttuu tai ei lataudu.')} />
      <audio key={version + '-vocals'} ref={vocalsRef} src={song.vocals} preload="metadata" muted={!vocalsOn} loop={loopOn}
        onLoadedMetadata={() => syncStems(true)}
        onError={() => setError(song.label + ': lauluraita puuttuu tai ei lataudu.')} />
    </div>

    <details className="song-chart-collapse" open={chordPanelOpen}>
      <summary onClick={event => { event.preventDefault(); setChordPanelOpen(open => !open); }}>
        Soinnut ja sanat
      </summary>
      <SongChordChart version={version} position={position} loop={loopOn} onSeek={seek} />
    </details>

    <details className="song-scales-collapse" open={scalePanelOpen}>
      <summary onClick={event => { event.preventDefault(); setScalePanelOpen(open => !open); }}>
        Skaalat ja moodit
      </summary>
      <SongScales open={scalePanelOpen} />
    </details>
  </section>;
}
