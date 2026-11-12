import { useEffect, useRef, useState } from 'react';

const BASE = 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/';
const PREFIX = 'yksi-sointu-kaksi-askelta-akustinen-';
const TRACKS = {
  backing: BASE + PREFIX + 'saestys.mp3',
  guitar: BASE + PREFIX + 'kitara.mp3',
  vocals: BASE + PREFIX + 'laulu.mp3',
} as const;

const MAX_DRIFT_SECONDS = 0.12;
function clock(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const whole = Math.floor(seconds);
  return String(Math.floor(whole / 60)) + ':' + String(whole % 60).padStart(2, '0');
}

/** Ensimmäinen akustisen kappaleen soitin: kolme striimattavaa MP3-raitaa. */
export function SongJourney({ onBack }: { onBack: () => void }) {
  const backingRef = useRef<HTMLAudioElement>(null);
  const guitarRef = useRef<HTMLAudioElement>(null);
  const vocalsRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [guitarOn, setGuitarOn] = useState(true);
  const [vocalsOn, setVocalsOn] = useState(true);
  const [loopOn, setLoopOn] = useState(false);
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
    backingRef.current?.pause();
    guitarRef.current?.pause();
    vocalsRef.current?.pause();
    setPlaying(false);
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
    try {
      // Kaikki käynnistyvät samalla käyttäjän painalluksella.
      const starters = [backing.play(), guitar.play(), vocals.play()];
      await Promise.all(starters);
      syncStems();
      setPlaying(true);
    } catch {
      pause();
      setError('Toisto epäonnistui. Tarkista, että akustisen version kaikki kolme MP3-raitaa ovat paikallaan.');
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
      backingRef.current?.pause();
      guitarRef.current?.pause();
      vocalsRef.current?.pause();
      setPlaying(false);
    };
    document.addEventListener('visibilitychange', hide);
    return () => {
      document.removeEventListener('visibilitychange', hide);
      backingRef.current?.pause();
      guitarRef.current?.pause();
      vocalsRef.current?.pause();
    };
  }, []);

  return <section className="song-journey" aria-labelledby="song-journey-title">
    <button type="button" className="back-link" onClick={onBack}>← Oppimispolut</button>
    <p className="eyebrow">KAPPALEHARJOITTELU · MALLIKAPPALE 01</p>
    <h2 id="song-journey-title">Yksi sointu, kaksi askelta</h2>
    <p className="song-edition">Akustinen versio</p>
    <p className="learning-lead">Soita itsenäisesti kappaleen mukana. Voit poistaa mallikitaran tai laulun kesken toiston ja kuulla oman soiton paremmin.</p>

    <div className="journey-lesson song-player">
      <div className="session-top"><h3>Kappaleen soitin</h3><span>3:53 · kolme erillistä ääniraitaa</span></div>
      <div className="song-player-controls" role="group" aria-label="Akustisen kappaleen soitin">
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
      <p className="tools-note">Kitara ja laulu ovat aluksi päällä. Niiden raidat kulkevat mukana myös mykistettyinä, joten saat ne takaisin keskeyttämättä kappaletta.</p>
      {error && <p className="backing-error" role="alert">{error}</p>}
      <audio ref={backingRef} src={TRACKS.backing} preload="metadata" loop={loopOn}
        onLoadedMetadata={event => setDuration(event.currentTarget.duration)}
        onTimeUpdate={event => {
          setPosition(event.currentTarget.currentTime);
          if (!event.currentTarget.paused) syncStems();
        }}
        onEnded={() => {
          if (backingRef.current?.loop) return;
          guitarRef.current?.pause(); vocalsRef.current?.pause();
          setPlaying(false); setPosition(backingRef.current?.duration ?? 0);
        }}
        onPause={() => setPlaying(false)}
        onError={() => setError('Säestysraita puuttuu. Pura akustisen kappaleen ZIP-paketti projektin juureen.')} />
      <audio ref={guitarRef} src={TRACKS.guitar} preload="metadata" muted={!guitarOn} loop={loopOn}
        onLoadedMetadata={() => syncStems(true)}
        onError={() => setError('Akustisen version kitararaita puuttuu tai ei lataudu.')} />
      <audio ref={vocalsRef} src={TRACKS.vocals} preload="metadata" muted={!vocalsOn} loop={loopOn}
        onLoadedMetadata={() => syncStems(true)}
        onError={() => setError('Akustisen version lauluraita puuttuu tai ei lataudu.')} />
    </div>

    <details className="song-instructions">
      <summary>Miten harjoittelen tämän kappaleen kanssa?</summary>
      <p>Kuuntele ensin kappale kitara ja laulu päällä. Kytke sitten kitara pois ja soita itse sen osuutta laulun ja bändin mukana. Kun haluat harjoitella ilman laulua, poista myös laulu: jäljelle jää säestys.</p>
    </details>
    <p className="tools-note song-future">Sointujen tarkka järjestys ja osioiden aikaleimat lisätään sen jälkeen, kun ne on tarkistettu tästä akustisesta äänitteestä.</p>
  </section>;
}
