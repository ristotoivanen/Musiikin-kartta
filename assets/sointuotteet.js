// Sointuotteet ja otteiden valinta (Otelautaopas BETA, issue #193).
// Puhdas laskenta ilman DOMia. Piirto tehdään yhteisellä otelautakomponentilla
// (globalThis.MusicMapFretboard, assets/otelauta.js); tämä moduuli ei piirrä eikä laske otelautaa.
// Otteet ovat taulukoita kielillä 1–6 eli ohuesta e-kielestä paksuun E-kieleen (null = ei soiteta).
import { getSeventhVoicings } from './seventh-voicings.js';

const board = () => globalThis.MusicMapFretboard;

/** Sointulaadut. id on myös URL-parametrin ?sointu= arvo; vanhat arvot (maj, min, seiskasoinnut) säilyvät. */
export const QUALITIES = [
  { id: 'maj', family: 'triad', suffix: '', label: 'Duuri', title: 'Duurisointu',
    tones: [[0, '1'], [4, '3'], [7, '5']] },
  { id: 'min', family: 'triad', suffix: 'm', label: 'Molli', title: 'Mollisointu',
    tones: [[0, '1'], [3, '♭3'], [7, '5']] },
  { id: 'dim', family: 'triad', suffix: 'dim', label: 'dim', title: 'Vähennetty kolmisointu',
    tones: [[0, '1'], [3, '♭3'], [6, '♭5']] },
  { id: 'aug', family: 'triad', suffix: 'aug', label: 'aug', title: 'Ylinouseva kolmisointu',
    tones: [[0, '1'], [4, '3'], [8, '♯5']] },
  { id: 'sus2', family: 'sus', suffix: 'sus2', label: 'sus2', title: 'Sus2-sointu',
    tones: [[0, '1'], [2, '2'], [7, '5']] },
  { id: 'sus4', family: 'sus', suffix: 'sus4', label: 'sus4', title: 'Sus4-sointu',
    tones: [[0, '1'], [5, '4'], [7, '5']] },
  { id: 'maj7', family: 'seventh', suffix: 'maj7', label: 'maj7', title: 'Duuriseptimisointu',
    tones: [[0, '1'], [4, '3'], [7, '5'], [11, '7']] },
  { id: '7', family: 'seventh', suffix: '7', label: '7', title: 'Dominanttiseptimisointu',
    tones: [[0, '1'], [4, '3'], [7, '5'], [10, '♭7']] },
  { id: 'm7', family: 'seventh', suffix: 'm7', label: 'm7', title: 'Molliseptimisointu',
    tones: [[0, '1'], [3, '♭3'], [7, '5'], [10, '♭7']] },
  { id: 'm7b5', family: 'seventh', suffix: 'm7♭5', label: 'm7♭5', title: 'Puolivähennetty septimisointu',
    tones: [[0, '1'], [3, '♭3'], [6, '♭5'], [10, '♭7']] },
  { id: 'dim7', family: 'seventh', suffix: 'dim7', label: 'dim7', title: 'Vähennetty septimisointu',
    tones: [[0, '1'], [3, '♭3'], [6, '♭5'], [9, '♭♭7']] },
  { id: '7#5', family: 'seventh', suffix: '7♯5', label: '7♯5', title: 'Dominanttiseptimi, korotettu kvintti',
    tones: [[0, '1'], [4, '3'], [8, '♯5'], [10, '♭7']] },
  { id: '7b5', family: 'seventh', suffix: '7♭5', label: '7♭5', title: 'Dominanttiseptimi, alennettu kvintti',
    tones: [[0, '1'], [4, '3'], [6, '♭5'], [10, '♭7']] },
  { id: 'mMaj7', family: 'seventh', suffix: 'm(maj7)', label: 'm(maj7)', title: 'Molli duuriseptimillä',
    tones: [[0, '1'], [3, '♭3'], [7, '5'], [11, '7']] },
];

export const FAMILIES = [
  { id: 'triad', label: 'Kolmisoinnut' },
  { id: 'sus', label: 'Sus-soinnut' },
  { id: 'seventh', label: 'Septimisoinnut' },
];

export const qualityById = id => QUALITIES.find(quality => quality.id === id) ?? null;

/** Kolmen kielen ryhmät ohuimmasta paksuimpaan (UI:ssa ylhäältä alas). strings = kielten indeksit (0 = ohut e). */
export const STRING_GROUPS = [
  { id: 'gbe', label: 'G–B–e', strings: [2, 1, 0] },
  { id: 'dgb', label: 'D–G–B', strings: [3, 2, 1] },
  { id: 'adg', label: 'A–D–G', strings: [4, 3, 2] },
  { id: 'ead', label: 'E–A–D', strings: [5, 4, 3] },
];
export const groupById = id => STRING_GROUPS.find(group => group.id === id) ?? null;
/** Ryhmän naapuri: +1 = ohuempien kielten ryhmä (↑), −1 = paksumpien kielten ryhmä (↓); null rajalla. */
export function neighbourGroup(id, step) {
  const index = STRING_GROUPS.findIndex(group => group.id === id);
  return STRING_GROUPS[index - step] ?? null; // taulukossa ohuin ensin
}

export const MODES = [
  { id: 'all', label: 'Sointusävelet' },
  { id: 'full', label: 'Koko ote' },
  { id: 'triad', label: 'Triadit' },
];

/** Soinnun tiedot otelautakomponentin renderBoardille ja otsikoille. */
export function chordInfo(rootPC, qualityId) {
  const { CHROM, noteName } = board();
  const quality = qualityById(qualityId);
  const notes = quality.tones.map(([interval, degree]) => noteName(rootPC, interval, degree));
  return {
    root: rootPC, quality, id: quality.id,
    name: CHROM[rootPC] + quality.suffix,
    notes, degrees: quality.tones.map(([, degree]) => degree),
    base: quality.tones, add: [],
    pitchClasses: quality.tones.map(([interval]) => (rootPC + interval) % 12),
  };
}

// --- Kolmisointujen, sus-sointujen ja avoimien otteiden täysotteet ---------------------------------------

// Perinteiset avosoinnut (kielet e…E), vain duuri ja molli kuten ennen uudistusta.
const OPEN_GRIPS = {
  '0:maj': [0, 1, 0, 2, 3, null], '2:maj': [2, 3, 2, 0, null, null],
  '4:maj': [0, 0, 1, 2, 2, 0], '7:maj': [3, 0, 0, 0, 2, 3],
  '9:maj': [0, 2, 2, 2, 0, null],
  '2:min': [1, 3, 2, 0, null, null], '4:min': [0, 0, 0, 2, 2, 0],
  '9:min': [0, 1, 2, 2, 0, null],
};

// Siirrettävät muodot: offsetit paksusta E-kielestä ohueen e-kieleen juurikielen nauhasta.
// root = juurikielen vapaan kielen sävelluokka; barre = [ohuin kieli, paksuin kieli] (e…E-indeksit).
// Jokainen sävel on tarkistettu yksikkötestissä (tests/sointuotteet.test.ts).
const SHAPES = {
  maj: [
    { id: 'E', root: 4, offsets: [0, 2, 2, 1, 0, 0], barre: [0, 5], name: 'E-muoto · 6 kieltä' },
    { id: 'A', root: 9, offsets: [null, 0, 2, 2, 2, 0], barre: [0, 4], name: 'A-muoto · 5 kieltä' },
  ],
  min: [
    { id: 'E', root: 4, offsets: [0, 2, 2, 0, 0, 0], barre: [0, 5], name: 'E-muoto · 6 kieltä' },
    { id: 'A', root: 9, offsets: [null, 0, 2, 2, 1, 0], barre: [0, 4], name: 'A-muoto · 5 kieltä' },
  ],
  dim: [
    { id: 'E', root: 4, offsets: [0, 1, 2, 0, null, null], barre: null, name: 'E-muoto · 4 kieltä' },
    { id: 'A', root: 9, offsets: [null, 0, 1, 2, 1, null], barre: null, name: 'A-muoto · 4 kieltä' },
  ],
  aug: [
    { id: 'E', root: 4, offsets: [0, 3, 2, 1, 1, 0], barre: null, name: 'E-muoto · 6 kieltä' },
    { id: 'A', root: 9, offsets: [null, 0, 3, 2, 2, 1], barre: null, name: 'A-muoto · 5 kieltä' },
  ],
  sus2: [
    { id: 'E', root: 4, offsets: [0, 2, 4, 4, 0, 0], barre: [0, 5], name: 'E-muoto · 6 kieltä' },
    { id: 'A', root: 9, offsets: [null, 0, 2, 2, 0, 0], barre: [0, 4], name: 'A-muoto · 5 kieltä' },
    { id: 'D', root: 2, offsets: [null, null, 0, 2, 3, 0], barre: null, name: 'D-muoto · 4 kieltä' },
  ],
  sus4: [
    { id: 'E', root: 4, offsets: [0, 2, 2, 2, 0, 0], barre: [0, 5], name: 'E-muoto · 6 kieltä' },
    { id: 'A', root: 9, offsets: [null, 0, 2, 2, 3, 0], barre: [0, 4], name: 'A-muoto · 5 kieltä' },
    { id: 'D', root: 2, offsets: [null, null, 0, 2, 3, 3], barre: null, name: 'D-muoto · 4 kieltä' },
  ],
};

export const gripCenter = strings => {
  const frets = strings.filter(fret => fret !== null);
  return frets.reduce((sum, fret) => sum + fret, 0) / frets.length;
};

export const gripKey = strings => strings.map(fret => fret ?? 'x').join(',');

/** Paksuimmalla soivalla kielellä soiva sävel: indeksi soinnun sävelissä (0 = perussävel). */
export function bassSlot(chord, strings) {
  const { OPEN_PITCHES } = board();
  for (let string = strings.length - 1; string >= 0; string--) {
    if (strings[string] === null) continue;
    return chord.pitchClasses.indexOf((OPEN_PITCHES[string] + strings[string]) % 12);
  }
  return -1;
}

const INVERSIONS = ['Perusmuoto', '1. käännös', '2. käännös', '3. käännös'];
export const inversionLabel = slot => INVERSIONS[slot] ?? '';

/** Soivat sävelluokat (lajiteltu, ilman toistoa). */
export function soundingPitchClasses(strings) {
  const { OPEN_PITCHES } = board();
  return [...new Set(strings.flatMap((fret, string) =>
    fret === null ? [] : [(OPEN_PITCHES[string] + fret) % 12]))].sort((a, b) => a - b);
}

function withSlot(chord, grip) {
  return { ...grip, slot: bassSlot(chord, grip.strings), center: gripCenter(grip.strings) };
}

/** Kolmisointujen ja sus-sointujen täysotteet: avoin ote ensin, sitten barré-/siirrettävät muodot nauhajärjestyksessä. */
function triadFullGrips(chord, fretCount) {
  const grips = [], seen = new Set();
  const add = (strings, label, shape, base, barre) => {
    if (strings.some(fret => fret !== null && (fret < 0 || fret > fretCount))) return;
    const key = gripKey(strings);
    if (seen.has(key)) return;
    seen.add(key);
    grips.push({ strings, label, shape, base, barre, muteFret: null });
  };
  const open = OPEN_GRIPS[chord.root + ':' + chord.id];
  if (open) add(open, 'Avoin ote', 'open', 0, null);
  for (const shape of SHAPES[chord.id] ?? []) {
    const offsets = [...shape.offsets].reverse(); // e…E
    for (let fret = (chord.root - shape.root + 12) % 12; fret <= fretCount; fret += 12) {
      const strings = offsets.map(offset => offset === null ? null : offset + fret);
      const barre = fret > 0 && shape.barre ? { fret, from: shape.barre[0], to: shape.barre[1] } : null;
      const label = fret === 0 ? 'Avoin ' + shape.name
        : (shape.barre ? 'Barré · ' : 'Siirrettävä · ') + shape.name;
      add(strings, label, shape.id, fret, barre);
    }
  }
  const opens = grips.filter(grip => grip.shape === 'open');
  const others = grips.filter(grip => grip.shape !== 'open')
    .sort((a, b) => a.base - b.base || a.label.localeCompare(b.label, 'fi'));
  return [...opens, ...others];
}

/** Septimisoinnun täysotteet: E- ja A-juuriset muodot (assets/seventh-voicings.js) kaikissa mahtuvissa oktaaveissa. */
function seventhFullGrips(chord, fretCount) {
  const { OPEN_PITCHES } = board();
  const grips = [];
  for (const voicing of getSeventhVoicings(chord.root, chord.id, fretCount, OPEN_PITCHES)) {
    for (let shift = 0; ; shift += 12) {
      const strings = voicing.strings.map(fret => fret === null ? null : fret + shift);
      if (Math.max(...strings.filter(fret => fret !== null)) > fretCount) break;
      const formName = voicing.rootString === 6 ? 'E-juurinen' : 'A-juurinen';
      grips.push({
        strings, label: formName + ' ote', shape: voicing.rootString === 6 ? 'E' : 'A', form: formName.toLowerCase(),
        base: voicing.rootFret + shift, barre: null, muteFret: voicing.rootFret + shift,
      });
    }
  }
  return grips.sort((a, b) => a.base - b.base || a.shape.localeCompare(b.shape));
}

/** Koko ote: kaikki tunnetut otteet nauhajärjestyksessä (avoin ote ensin). */
export function fullGrips(rootPC, qualityId, fretCount) {
  const chord = chordInfo(rootPC, qualityId);
  const grips = chord.quality.family === 'seventh' ? seventhFullGrips(chord, fretCount) : triadFullGrips(chord, fretCount);
  return grips.map(grip => withSlot(chord, grip));
}

/** Triadit: kolmen vierekkäisen kielen otteet nauhajärjestyksessä. Vain kolmisävelisille soinnuille. */
export function groupGrips(rootPC, qualityId, groupId, fretCount) {
  const chord = chordInfo(rootPC, qualityId);
  const group = groupById(groupId);
  if (chord.base.length !== 3 || !group) return [];
  return board().triadGrips(chord, fretCount)
    .filter(({ strings }) => strings.every((fret, string) => (fret !== null) === group.strings.includes(string)))
    .map(({ strings, low }) => withSlot(chord, {
      strings, label: inversionLabel(bassSlot(chord, strings)) + ' · ' + group.label,
      shape: 'group', base: low, barre: null, muteFret: null,
    }))
    .sort((a, b) => a.base - b.base || a.center - b.center);
}

export const supportsTriads = qualityId => qualityById(qualityId).tones.length === 3;

/** Esitystavan otteet; tila 'all' ei käytä otteita. */
export function gripsFor(rootPC, qualityId, mode, groupId, fretCount) {
  if (mode === 'full') return fullGrips(rootPC, qualityId, fretCount);
  if (mode === 'triad') return groupGrips(rootPC, qualityId, groupId, fretCount);
  return [];
}

// --- Otteen valinta --------------------------------------------------------------------------------------

/** Lähin ote nauhasijainnin mukaan (kielten tai juuren vaihto). Tasatilanteessa matalampi. */
export function nearestGrip(grips, reference) {
  if (!grips.length) return -1;
  if (!reference) return 0;
  let best = 0, bestDistance = Infinity;
  grips.forEach((grip, index) => {
    const distance = Math.abs(grip.center - reference.center);
    if (distance < bestDistance - 1e-9) { best = index; bestDistance = distance; }
  });
  return best;
}

/**
 * Laadun vaihto (esim. duuri ↔ molli): sama käännös eli sama bassosävel, sama muoto ja mahdollisimman
 * pieni liike. Jos vaaditun terssin siirto puoliaskeleen ei ole mahdollinen, valitaan lähin kelvollinen ote.
 */
export function matchAfterQualityChange(grips, reference) {
  if (!grips.length) return -1;
  if (!reference) return 0;
  let best = 0, bestScore = Infinity;
  grips.forEach((grip, index) => {
    let moved = 0;
    grip.strings.forEach((fret, string) => {
      const before = reference.strings[string];
      if (fret !== null && before !== null && before !== undefined) moved += Math.abs(fret - before);
      else if (fret !== before) moved += 3;
    });
    const score = (grip.slot !== reference.slot ? 1000 : 0) + (grip.shape !== reference.shape ? 200 : 0) +
      Math.abs(grip.center - reference.center) * 10 + moved;
    if (score < bestScore - 1e-9) { best = index; bestScore = score; }
  });
  return best;
}

/** Ote kirjoitettuna paksusta kielestä ohueen: "x 3 2 0 1 0". */
export const formatFrets = strings => [...strings].reverse().map(fret => fret === null ? 'x' : fret).join(' ');

// --- URL-parametrit --------------------------------------------------------------------------------------

/** Lukee ?sointu=, ?ote=, ?kielet= ja ?nro=. Vanhat arvot (ote=all|full|triad|e-juurinen|a-juurinen) säilyvät. */
export function parseChordParams(params) {
  const quality = qualityById(params.get('sointu'))?.id ?? 'maj';
  const ote = params.get('ote');
  const form = ote === 'e-juurinen' ? 'E' : ote === 'a-juurinen' ? 'A' : null;
  let mode = ['all', 'full', 'triad'].includes(ote) ? ote : 'full';
  if (mode === 'triad' && !supportsTriads(quality)) mode = 'full';
  const group = groupById(params.get('kielet'))?.id ?? 'gbe';
  const number = Number(params.get('nro'));
  return { quality, mode, group, form, number: Number.isInteger(number) && number > 0 ? number : null };
}

/** Kirjoittaa tilan URL-parametreihin. Septimisoinnun koko ote kirjoitetaan vanhalla ote=e-juurinen/a-juurinen-muodolla. */
export function writeChordParams(params, { quality, mode, group, grip, number }) {
  params.set('sointu', quality);
  const form = qualityById(quality).family === 'seventh' && mode === 'full' ? grip?.form : null;
  params.set('ote', form ?? mode);
  if (mode === 'triad') params.set('kielet', group); else params.delete('kielet');
  if (mode !== 'all' && number) params.set('nro', String(number)); else params.delete('nro');
}
