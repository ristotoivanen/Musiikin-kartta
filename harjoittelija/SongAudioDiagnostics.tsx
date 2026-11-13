import { useEffect, useState, type MutableRefObject, type RefObject } from 'react';
import { elementVolumeWorks, isIOSDevice, type SongGainMixer, type SongTrack } from './songAudio';

/**
 * TILAPÄINEN DIAGNOSTIIKKA (issue #9, iPhonen äänenvoimakkuus). Poistetaan, kun korjaus on
 * vahvistettu fyysisellä iPhonella: tämä tiedosto, sen tuonti ja yksi rivi SongJourney.tsx:ssä.
 *
 * Näkyy vain osoitteella kitaraharjoittelija.html?kappale=…&aanidiagnostiikka=1 (tai pelkällä
 * ?aanidiagnostiikka=1). Ei tallenna eikä lähetä mitään: tiedot luetaan selaimesta ja näytetään sivulla.
 */
export function songAudioDiagnosticsEnabled(): boolean {
  try { return new URLSearchParams(location.search).has('aanidiagnostiikka'); } catch { return false; }
}

/** Mitä audioelementin volume-arvo palauttaa, kun siihen asetetaan 0,5 (iOS palauttaa 0,5, mutta ei käytä sitä). */
function volumeReadBack(): string {
  try { const probe = new Audio(); probe.volume = 0.5; return String(probe.volume); } catch (cause) { return 'virhe: ' + String(cause); }
}

const fmt = (value: number | null | undefined, digits = 3) => value === null || value === undefined ? '–' : value.toFixed(digits);

export function SongAudioDiagnostics({ volumeMode, volume, mixer, tracks }: {
  volumeMode: 'element' | 'webaudio';
  volume: number;
  mixer: MutableRefObject<SongGainMixer | null>;
  tracks: Record<SongTrack, RefObject<HTMLAudioElement>>;
}) {
  const [, tick] = useState(0);
  const [readBack] = useState(volumeReadBack);
  const [oldDetection] = useState(() => elementVolumeWorks() ? 'element' : 'webaudio');
  useEffect(() => {
    const timer = setInterval(() => tick(n => n + 1), 500);
    return () => clearInterval(timer);
  }, []);
  const session = (navigator as unknown as { audioSession?: { type: string } }).audioSession;
  const m = mixer.current;
  const rows = (Object.keys(tracks) as SongTrack[]).map(track => {
    const el = tracks[track].current;
    return `${track.padEnd(8)} kytketty=${m?.routed(el) ? 'kyllä' : 'ei'} gain=${fmt(m?.level(el))} ` +
      `element.volume=${fmt(el?.volume)} muted=${el?.muted} paused=${el?.paused} aika=${fmt(el?.currentTime, 2)} readyState=${el?.readyState}`;
  });
  return <details className="song-audio-diagnostics" open>
    <summary>Äänen diagnostiikka (tilapäinen)</summary>
    <pre style={{ whiteSpace: 'pre-wrap', fontSize: 12 }}>{[
      `iOS-laite: ${isIOSDevice() ? 'kyllä' : 'ei'}`,
      `volume-lukutesti (aseta 0.5, lue): ${readBack} → vanha tunnistus olisi valinnut: ${oldDetection}`,
      `valittu tila: ${volumeMode}`,
      `säädin: ${volume} %`,
      `AudioContext: ${m?.state ?? 'ei luotu'}`,
      `audioSession: ${session ? session.type : 'ei tuettu'}`,
      ...rows,
      `viimeisin virhe: ${m?.lastError || '–'}`,
      `selain: ${navigator.userAgent}`,
    ].join('\n')}</pre>
  </details>;
}
