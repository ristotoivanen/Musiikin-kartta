/*
 * Tallenne: localStorage['musiikin-kartta:ensikeikka'] = { version: 1, completed: number[] }.
 *
 * Kappaleiden tunnisteet ovat koko pelissä yksilöllisiä (keikka 1: 1–5, keikka 2: 6–9), joten
 * toinen keikka mahtuu samaan versioon 1 ilman migraatiota. Vanha versio lukee tallenteesta
 * edelleen vain kappaleet 1–5 eikä hylkää tallennetta. Tuntemattomat tunnisteet säilytetään
 * tallennettaessa, jotta myöhemmin lisättävien keikkojen suoritukset eivät katoa.
 */
const key = 'musiikin-kartta:ensikeikka';
const version = 1;

/** Tallenteen kokonaislukutunnisteet ensimmäisessä järjestyksessään. Virheellinen tallenne on tyhjä. */
export function storedSongs(raw: string | null): number[] {
  try {
    const data: unknown = JSON.parse(raw ?? 'null');
    if (!data || typeof data !== 'object' || !('version' in data) || data.version !== version
      || !('completed' in data) || !Array.isArray(data.completed)) return [];
    return [...new Set((data.completed as unknown[]).filter((id): id is number => Number.isInteger(id)))];
  } catch {
    return [];
  }
}

/** Yhden keikan suoritetut kappaleet. Kappaleet avautuvat järjestyksessä, joten vain alusta yhtenäinen osa lasketaan. */
export function decodeProgress<Song>(raw: string | null, songs: readonly Song[]): Song[] {
  return completedPrefix(storedSongs(raw), songs);
}

export function completedPrefix<Song>(completed: readonly unknown[], songs: readonly Song[]): Song[] {
  const firstMissing = songs.findIndex(song => !completed.includes(song));
  return songs.slice(0, firstMissing === -1 ? songs.length : firstMissing);
}

export function readProgress(): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function loadProgress<Song>(songs: readonly Song[]): Song[] {
  return decodeProgress(readProgress(), songs);
}

/**
 * Lisää kappaleen suoritettuihin. Tunnetut kappaleet tallennetaan pelin järjestyksessä, ja
 * tuntemattomat tunnisteet jätetään tallenteen loppuun.
 */
export function withCompleted(raw: string | null, order: readonly number[], shown: readonly number[], song: number) {
  const stored = storedSongs(raw);
  const known = order.filter(id => id === song || shown.includes(id) || stored.includes(id));
  return [...known, ...stored.filter(id => !order.includes(id))];
}

export function saveProgress<Song>(completed: readonly Song[]) {
  try {
    window.localStorage.setItem(key, JSON.stringify({ version, completed }));
    return true;
  } catch {
    return false;
  }
}

export function clearProgress() {
  try {
    window.localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}
