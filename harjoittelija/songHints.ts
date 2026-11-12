import type { SongChord } from './songChart';

/** Piilotus aloitetaan kappaleessa usein toistuvista soinnuista.
 * Tämä EI väitä barré-otteita helpoiksi. Käyttäjä voi muokata järjestystä. */
export const CHORD_NAMES: readonly SongChord[] = ['Gm','F','B♭','E♭','Dm','C'];
export type FadeStep = 1 | 2 | 3 | 4;
export type PracticeLevel = 0 | FadeStep;
export type FadeOrder = Record<SongChord, FadeStep>;
export interface SongHintSettings {
  showChords: boolean;
  level: PracticeLevel;
  fadeOrder: FadeOrder;
}
export const SONG_HINT_STORAGE_KEY = 'musiikin-kartta:kappale-sointuvihjeet:v1';
export const DEFAULT_FADE_ORDER: FadeOrder = {
  Gm: 1, F: 1, 'B♭': 2, 'E♭': 2, Dm: 3, C: 4,
};
export const DEFAULT_SONG_HINTS: SongHintSettings = {
  showChords: true, level: 0, fadeOrder: DEFAULT_FADE_ORDER,
};

/** Piilottaminen on kumulatiivista: tasolla 2 katoavat myös tason 1 soinnut. */
export function isChordHidden(chord: SongChord, settings: SongHintSettings): boolean {
  return !settings.showChords || settings.level >= settings.fadeOrder[chord];
}

/** Virheellinen tai vanhentunut selainasetus ei saa rikkoa harjoitusnäkymää. */
export function parseSongHintSettings(raw: string | null): SongHintSettings {
  if (!raw) return { ...DEFAULT_SONG_HINTS, fadeOrder: { ...DEFAULT_FADE_ORDER } };
  try {
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== 'object') throw new Error('Invalid settings');
    const input = data as Record<string, unknown>;
    const level = input.level;
    const fadeOrder = { ...DEFAULT_FADE_ORDER };
    const rawOrder = input.fadeOrder;
    if (rawOrder && typeof rawOrder === 'object') {
      const custom = rawOrder as Record<string, unknown>;
      for (const chord of CHORD_NAMES) {
        if ([1,2,3,4].includes(custom[chord] as number)) fadeOrder[chord] = custom[chord] as FadeStep;
      }
    }
    return {
      showChords: typeof input.showChords === 'boolean' ? input.showChords : true,
      level: typeof level === 'number' && [0,1,2,3,4].includes(level) ? level as PracticeLevel : 0,
      fadeOrder,
    };
  } catch {
    return { ...DEFAULT_SONG_HINTS, fadeOrder: { ...DEFAULT_FADE_ORDER } };
  }
}
export function loadSongHintSettings(): SongHintSettings {
  try { return parseSongHintSettings(localStorage.getItem(SONG_HINT_STORAGE_KEY)); }
  catch { return parseSongHintSettings(null); }
}
