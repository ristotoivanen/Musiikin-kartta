import { useEffect, useRef, useState } from 'react';
import { SongChordChart } from './SongChordChart';

type SongVersion = 'acoustic' | 'normal';
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

const MAX_DRIFT_SECONDS = 0.12;
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
  const [version, setVersion] = useState<SongVersion>('acoustic');
  const song = VERSIONS[version];
  const [playing, setPlaying] = useState(false);
  const [guitarOn, setGuitarOn] = useState(true);
  const [vocalsOn, setVocalsOn] = useState(true);
  const [loopOn, setLoopOn] = useState(false);
  const [chordPanelOpen, setChordPanelOpen] = useState(true);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState('');

  function syncStems(force = false) {
    const backing = backingRef.current;
    if (!backing || backing.readyState < 1) return;
    for (const stem of [guitarRef.current, vocalsRef.current]) {
      if (!stem || stem.readyState < 1) continue;
      const drift = Math.abs(stem.currentTime - backing.currentTime);
      const wrap = backing.loop && Number.isFinite(backing.duration) &&
        Math.abs(drift - backing.duration) < 0.35;
      if (force || (!wrap && drift > MAX_DRIFT_SECONDS)) {
        try { stem.currentTime = backing.currentTime; } catch { /* metadata kesken */ }
      }
    }
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
    pause();
    for (const stem of [backingRef.current, guitarRef.current, vocalsRef.current]) {
      if (!stem) continue;
      try { stem.currentTime = 0; } catch { /* metadata ei vielä latautunut */ }
    }
    setPosition(0);
    setDuration(0);
    setError('');
    setVersion(next);
  }

  function seek(seconds: number) {
    const backing = backingRef.current;
    if (!backing || !Number.isFinite(seconds)) return;
    const at = Math.max(0, Math.min(seconds, Number.isFinite(backing.duration) ? backing.duration : seconds));
    try { backing.currentTime = at; } catch { return; }
    syncStems(true);
    setPosition(at);
  }

  async function togglePlayback() {
    const backing = backingRef.current;
    const guitar = guitarRef.current;
    const vocals = vocalsRef.current;
    if (!backing || !guitar || !vocals) return;
    if (playing) { pause(); return; }
    setError('');
    if (Number.isFinite(backing.duration) && backing.currentTime >= backing.duration - 0.05) seek(0);
    backing.volume = 0.85;
    guitar.volume = 0.78;
    vocals.volume = 0.78;
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
  }

  function changeVocals(enabled: boolean) {
    if (enabled) syncStems();
    if (vocalsRef.current) vocalsRef.current.muted = !enabled;
    setVocalsOn(enabled);
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
    };
  }, []);

  return <section className="song-journey" aria-labelledby="song-journey-title">
    <button type="button" className="back-link" onClick={onBack}>← Oppimispolut</button>
    <p className="eyebrow">KAPPALEHARJOITTELU · MALLIKAPPALE 01</p>
    <h2 id="song-journey-title">Yksi sointu, kaksi askelta</h2>
    <label className="song-version" htmlFor="song-version-select">
      <span>Versio</span>
      <select id="song-version-select" value={version}
        onChange={event => changeVersion(event.target.value as SongVersion)}>
        <option value="acoustic">Akustinen versio</option>
        <option value="normal">Normaali versio</option>
      </select>
    </label>
    <p className="learning-lead">Soita itsenäisesti kappaleen mukana. Voit poistaa mallikitaran tai laulun kesken toiston ja kuulla oman soiton paremmin.</p>

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
      </div>
      <p className="tools-note">Kitara ja laulu ovat aluksi päällä. Versiota vaihtaessa toisto pysähtyy ja palautuu alkuun. Käynnistä valitsemasi versio Soita-painikkeesta.</p>
      {error && <p className="backing-error" role="alert">{error}</p>}
      <audio key={version + '-backing'} ref={backingRef} src={song.backing} preload="metadata" loop={loopOn}
        onLoadedMetadata={event => setDuration(event.currentTarget.duration)}
        onTimeUpdate={event => {
          setPosition(event.currentTarget.currentTime);
          if (!event.currentTarget.paused && event.currentTarget === backingRef.current) syncStems();
        }}
        onEnded={() => {
          if (backingRef.current?.loop) return;
          guitarRef.current?.pause(); vocalsRef.current?.pause();
          setPlaying(false); setPosition(backingRef.current?.duration ?? 0);
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
      <SongChordChart version={version} position={position} onSeek={seek} />
    </details>

    <details className="song-instructions">
      <summary>Miten harjoittelen tämän kappaleen kanssa?</summary>
      <p>Kuuntele ensin kappale kitara ja laulu päällä. Kytke sitten kitara pois ja soita itse sen osuutta laulun ja bändin mukana. Kun haluat harjoitella ilman laulua, poista myös laulu: jäljelle jää säestys.</p>
    </details>

  </section>;
}
