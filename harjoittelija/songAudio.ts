/**
 * Kappaleharjoittelijan yhteinen äänenvoimakkuus.
 *
 * Raitojen keskinäinen tasapaino on sama kuin ennen säädintä. Säädin kertoo kaikki kolme tasoa
 * samalla prosentilla, joten 100 % vastaa aiempaa toistovoimakkuutta.
 *
 * iOS Safari ei salli HTMLMediaElement.volume-arvon muuttamista (arvo pysyy 1:nä). Silloin raidat
 * ohjataan Web Audio API:n GainNodeihin. Ohjaus tehdään vasta käyttäjän painalluksesta, ja jokainen
 * audioelementti kytketään vain kerran, joten raitaa ei kuulu kahteen kertaan.
 */
export type SongTrack = 'backing' | 'guitar' | 'vocals';
export const TRACK_BALANCE: Record<SongTrack, number> = { backing: 0.85, guitar: 0.78, vocals: 0.78 };
export const DEFAULT_SONG_VOLUME = 100;
export const SONG_VOLUME_STORAGE_KEY = 'musiikin-kartta:kappale-aanenvoimakkuus:v1';

export function parseSongVolume(raw: string | null): number {
  if (raw === null || raw.trim() === '') return DEFAULT_SONG_VOLUME;
  const value = Number(raw);
  if (!Number.isFinite(value)) return DEFAULT_SONG_VOLUME;
  return Math.round(Math.min(100, Math.max(0, value)));
}
export function loadSongVolume(): number {
  try { return parseSongVolume(localStorage.getItem(SONG_VOLUME_STORAGE_KEY)); }
  catch { return DEFAULT_SONG_VOLUME; }
}
export function saveSongVolume(volume: number) {
  try { localStorage.setItem(SONG_VOLUME_STORAGE_KEY, String(parseSongVolume(String(volume)))); }
  catch { /* Säädin toimii ilman selaintallennustakin. */ }
}

/** Raidan lopullinen taso 0–1. Mykistetty raita on aina hiljaa. */
export function trackLevel(track: SongTrack, volume: number, audible = true): number {
  if (!audible) return 0;
  return TRACK_BALANCE[track] * parseSongVolume(String(volume)) / 100;
}

/** Tukeeko selain audioelementin volume-arvoa (iOS Safari ei tue). */
export function elementVolumeWorks(create: () => HTMLMediaElement = () => new Audio()): boolean {
  try {
    const probe = create();
    probe.volume = 0.5;
    return Math.abs(probe.volume - 0.5) < 0.01;
  } catch {
    return false;
  }
}

type ContextFactory = () => AudioContext;
const defaultContext: ContextFactory = () => {
  const Context = globalThis.AudioContext ??
    (globalThis as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Context) throw new Error('Web Audio API puuttuu');
  return new Context();
};

/** Web Audio -reititys niille selaimille, joissa elementin volume ei toimi. */
export class SongGainMixer {
  private context: AudioContext | null = null;
  private gains = new WeakMap<HTMLMediaElement, GainNode>();
  constructor(private create: ContextFactory = defaultContext) {}

  /** Kutsutaan käyttäjän painalluksesta ennen play()-kutsuja. */
  unlock(): boolean {
    try {
      if (!this.context || this.context.state === 'closed') {
        this.context = this.create();
        this.gains = new WeakMap();
      }
      if (this.context.state !== 'running') void this.context.resume().catch(() => {});
      return true;
    } catch {
      return false;
    }
  }

  /** Kytkee elementin yhden kerran: elementin oma ääni kulkee sen jälkeen vain GainNoden kautta. */
  route(element: HTMLMediaElement): boolean {
    if (this.gains.has(element)) return true;
    if (!this.context) return false;
    try {
      const source = this.context.createMediaElementSource(element);
      const gain = this.context.createGain();
      source.connect(gain);
      gain.connect(this.context.destination);
      this.gains.set(element, gain);
      return true;
    } catch {
      return false;
    }
  }

  routed(element: HTMLMediaElement | null): boolean {
    return !!element && this.gains.has(element);
  }

  setLevel(element: HTMLMediaElement, level: number) {
    const gain = this.gains.get(element);
    if (gain) gain.gain.value = level;
  }

  close() {
    const context = this.context;
    this.context = null;
    this.gains = new WeakMap();
    void context?.close().catch(() => {});
  }
}
