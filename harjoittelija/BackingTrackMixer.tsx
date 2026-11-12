import { useEffect, useRef, useState } from 'react';
import { shouldCorrectDrift } from './songAudio';

const BACKING_SRC = 'assets/audio/harjoittelija/am-vamp-without-guitar.mp3';
const GUITAR_SRC = 'assets/audio/harjoittelija/am-vamp-electric-guitar.mp3';
// Kaksi samasta projektista vietyä MP3-tiedostoa: sama kesto ja näytemäärä.
// HTMLMediaElement ei takaa sampletarkkaa aloitusta, joten seuraamme mahdollista driftia.

function clock(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const rounded = Math.floor(seconds);
  return String(Math.floor(rounded / 60)) + ':' + String(rounded % 60).padStart(2, '0');
}

/** Yksi soitin, kaksi koko ajan mukana kulkevaa raitaa. Mallikitara ja looppi ovat aluksi pois päältä. */
export function BackingTrackMixer() {
  const backingRef = useRef<HTMLAudioElement>(null);
  const guitarRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [guitarOn, setGuitarOn] = useState(false);
  const [loopOn, setLoopOn] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState('');
  // Edellinen driftikorjaus (performance.now), ks. shouldCorrectDrift.
  const lastDriftFix = useRef<number | null>(null);

  function syncGuitar(force = false) {
    const backing = backingRef.current, guitar = guitarRef.current;
    if (!backing || !guitar || !Number.isFinite(backing.currentTime) || guitar.readyState < 1) return;
    const drift = Math.abs(guitar.currentTime - backing.currentTime);
    // Loopin vaihtuessa kierrokselta toiselle toinen raita voi käydä hetken
    // alussa ja toinen lopussa. Älä korjaa tätä hetkellistä kääntökohtaa.
    const atLoopBoundary = backing.loop && Number.isFinite(backing.duration) &&
      Math.abs(drift - backing.duration) < 0.3;
    const now = performance.now();
    const msSinceLastFix = lastDriftFix.current === null ? Infinity : now - lastDriftFix.current;
    if (!shouldCorrectDrift({ drift, atLoopBoundary, seeking: guitar.seeking, readyState: guitar.readyState, msSinceLastFix }, force)) return;
    try {
      guitar.currentTime = backing.currentTime;
      if (!force) lastDriftFix.current = now;
    } catch { /* Metadata ei ehkä ole vielä latautunut. */ }
  }

  function pause() {
    backingRef.current?.pause();
    guitarRef.current?.pause();
    setPlaying(false);
  }

  async function togglePlayback() {
    const backing = backingRef.current, guitar = guitarRef.current;
    if (!backing || !guitar) return;
    if (playing) { pause(); return; }

    setError('');
    guitar.muted = !guitarOn;
    guitar.volume = 0.55;
    backing.volume = 0.75;
    syncGuitar(true);
    try {
      // Molemmat play-kutsut tapahtuvat samassa käyttäjän painalluksessa.
      await Promise.all([backing.play(), guitar.play()]);
      syncGuitar();
      setPlaying(true);
    } catch {
      pause();
      setError('Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.');
    }
  }

  function seek(seconds: number) {
    const backing = backingRef.current, guitar = guitarRef.current;
    if (!backing || !guitar || !Number.isFinite(seconds)) return;
    backing.currentTime = seconds;
    try { guitar.currentTime = seconds; } catch { /* Odota toisen raidan metadataa. */ }
    setPosition(seconds);
  }

  function toggleGuitar(enabled: boolean) {
    if (enabled) syncGuitar();
    if (guitarRef.current) guitarRef.current.muted = !enabled;
    setGuitarOn(enabled);
  }

  useEffect(() => {
    const hide = () => {
      if (!document.hidden) return;
      backingRef.current?.pause();
      guitarRef.current?.pause();
      setPlaying(false);
    };
    document.addEventListener('visibilitychange', hide);
    return () => {
      document.removeEventListener('visibilitychange', hide);
      backingRef.current?.pause();
      guitarRef.current?.pause();
    };
  }, []);

  return <div className="backing-track-mixer">
    <div className="backing-track-heading">
      <strong>Am-harjoitustausta</strong>
      <div className="backing-track-toggles">
        <label className="guitar-toggle">
          <input type="checkbox" checked={guitarOn}
            onChange={event => toggleGuitar(event.target.checked)} />
          <span>Kitara kuuluu</span>
        </label>
        <label className="guitar-toggle">
          <input type="checkbox" checked={loopOn}
            onChange={event => setLoopOn(event.target.checked)} />
          <span>Soita looppina</span>
        </label>
      </div>
    </div>
    <p className="tools-note">Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen.</p>

    <div className="backing-controls" role="group" aria-label="Am-harjoitustaustan soitin">
      <button type="button" className="backing-play" onClick={() => void togglePlayback()}>
        {playing ? '■ Tauko' : '▶ Soita'}
      </button>
      <input aria-label="Siirry kappaleessa" type="range" min={0}
        max={duration > 0 ? duration : 1} step={0.1}
        value={Math.min(position, duration > 0 ? duration : 1)}
        disabled={!duration} onChange={event => seek(Number(event.target.value))} />
      <output className="backing-time" aria-live="off">{clock(position)} / {clock(duration)}</output>
    </div>

    <audio ref={backingRef} preload="metadata" src={BACKING_SRC} loop={loopOn}
      onLoadedMetadata={event => setDuration(event.currentTarget.duration)}
      onTimeUpdate={event => {
        setPosition(event.currentTarget.currentTime);
        if (!event.currentTarget.paused) syncGuitar();
      }}
      onEnded={() => {
        if (backingRef.current?.loop) return;
        guitarRef.current?.pause(); setPlaying(false); setPosition(duration);
      }}
      onPause={() => { guitarRef.current?.pause(); setPlaying(false); }}
      onError={() => setError('Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.')} />
    <audio ref={guitarRef} preload="metadata" src={GUITAR_SRC} muted loop={loopOn}
      onLoadedMetadata={() => {
        const backing = backingRef.current, guitar = guitarRef.current;
        if (backing?.duration && guitar?.duration &&
            Math.abs(backing.duration - guitar.duration) > 0.15) {
          setError('Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.');
        }
      }}
      onError={() => setError('Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.')} />

    {error && <p className="backing-error" role="alert">{error}</p>}
    <p className="tools-note">Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana.</p>
  </div>;
}
