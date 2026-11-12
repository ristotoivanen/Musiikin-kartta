// Siirrettävien otteiden nauhasiirtymät kielille 6–1. Ensin E-juurinen, sitten A-juurinen.
// Kaikki laadut käyttävät samoja kieliä: E-juurinen 6-4-3-2 (1, 7, 3, 5) ja A-juurinen
// 5-4-3-2 (1, 5, 7, 3). Laatu vaihtuu siirtämällä yksittäistä säveltä nauhan verran.
const SHAPES = new Map([
  ['maj7',  [[0, null, 1, 1, 0, null], [null, 0, 2, 1, 2, null]]],
  ['7',     [[0, null, 0, 1, 0, null], [null, 0, 2, 0, 2, null]]],
  ['m7',    [[0, null, 0, 0, 0, null], [null, 0, 2, 0, 1, null]]],
  ['m7b5',  [[0, null, 0, 0, -1, null], [null, 0, 1, 0, 1, null]]],
  ['dim7',  [[0, null, -1, 0, -1, null], [null, 0, 1, -1, 1, null]]],
  ['7#5',   [[0, null, 0, 1, 1, null], [null, 0, 3, 0, 2, null]]],
  ['7b5',   [[0, null, 0, 1, -1, null], [null, 0, 1, 0, 2, null]]],
  ['mMaj7', [[0, null, 1, 0, 0, null], [null, 0, 2, 1, 1, null]]],
]);
const ROOT_STRINGS = [6, 5];

export function hasSeventhVoicing(quality) {
  return SHAPES.has(quality);
}

/** Palauttaa kummankin muodon alimman sopivan otteen. Viritys ja tulos kulkevat kielillä 1–6. */
export function getSeventhVoicings(rootPC, quality, maxFret, openPitches) {
  const shapes = SHAPES.get(quality);
  if (!shapes) return [];

  return shapes.flatMap((offsets, index) => {
    const rootString = ROOT_STRINGS[index];
    const openRoot = openPitches[rootString - 1] % 12;
    const firstRootFret = (rootPC - openRoot + 12) % 12;
    for (let rootFret = firstRootFret; rootFret <= maxFret; rootFret += 12) {
      const strings = offsets.map(offset => offset === null ? null : rootFret + offset).reverse();
      if (strings.every(fret => fret === null || (fret >= 0 && fret <= maxFret))) {
        return [{ rootString, rootFret, strings }];
      }
    }
    return [];
  });
}
