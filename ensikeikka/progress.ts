const key = 'musiikin-kartta:ensikeikka';
const version = 1;

export function decodeProgress<Song>(raw: string | null, songs: readonly Song[]): Song[] {
  try {
    const data: unknown = JSON.parse(raw ?? 'null');
    if (!data || typeof data !== 'object' || !('version' in data) || data.version !== version
      || !('completed' in data) || !Array.isArray(data.completed)) return [];
    const completed: unknown[] = data.completed;
    const firstMissing = songs.findIndex(song => !completed.includes(song));
    return songs.slice(0, firstMissing === -1 ? songs.length : firstMissing);
  } catch {
    return [];
  }
}

export function loadProgress<Song>(songs: readonly Song[]): Song[] {
  try {
    return decodeProgress(window.localStorage.getItem(key), songs);
  } catch {
    return [];
  }
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
