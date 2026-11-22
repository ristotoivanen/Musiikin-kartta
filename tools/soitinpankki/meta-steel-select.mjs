/**
 * #156: Meta Steel -lähdeaineiston VALINTA, ei äänen lataus tai ajoitus.
 * Palauttaa tarkat kieli/sävel/voimakkuus-tuotantolähteet. Älä käytä
 * sourceOgg-kenttää suoraan selainäänipankin paikallisena tiedostopoluna.
 */
export const SOURCE_CATALOG_SCHEMA = 'musiikin-kartta-upstream-inventory-v1';

const openMidi = Object.freeze({ 6: 40, 5: 45, 4: 50, 3: 55, 2: 59, 1: 64 });
const expectedLayers = ['Vel01', 'Vel02', 'Vel03'];

function eventKey(string, midi, layer) {
  return `${string}:${midi}:${layer}`;
}

export function velocityLayer(velocity) {
  if (!Number.isInteger(velocity) || velocity < 1 || velocity > 127) {
    throw new RangeError('MIDI-velocityn on oltava kokonaisluku 1–127.');
  }
  if (velocity <= 48) return 'Vel01';
  if (velocity <= 96) return 'Vel02';
  return 'Vel03';
}

/**
 * Alkuperäisen Meta Steel SFZ:n ensimmäisen aseman oletuskanavan valinta.
 * Eksplisiittistä kitara-asemaa EI korvata tällä: sama sävel eri kielellä
 * kuulostaa erilaiselta.
 */
export function firstPositionString(midi) {
  if (!Number.isInteger(midi) || midi < 40 || midi > 84) {
    throw new RangeError('Meta Steelin sävelalue on MIDI 40–84 (E2–C6).');
  }
  for (const string of [1, 2, 3, 4, 5, 6]) {
    const open = openMidi[string];
    const fret = midi - open;
    if (fret >= 0 && (fret <= 4 || string === 1)) return string;
  }
  throw new Error(`Sävelelle ${midi} ei löytynyt oletuskieltä.`);
}

export function validateMetaSteelInventory(catalog) {
  if (!catalog || catalog.schema !== SOURCE_CATALOG_SCHEMA ||
      catalog.purpose !== 'source-inventory-not-browser-playable' ||
      catalog.localSamplesIncluded !== false ||
      catalog.origin?.license !== 'CC0-1.0' ||
      catalog.expected?.samples !== 375 ||
      catalog.expected?.stringPitchPairs !== 125 ||
      !Array.isArray(catalog.samples)) {
    throw new Error('Virheellinen tai ei-lähdeluetteloksi merkitty Meta Steel -katalogi.');
  }
  const index = new Map();
  const stringPitches = new Map();
  let totalOggBytes = 0;
  for (const sample of catalog.samples) {
    const { string, midi, fret, layer, sourceWav, sourceOgg, oggBytes, oggSha256 } = sample;
    const sourceMatch = /^INSGuitarSteel_String(LowE|A|D|G|B|HighE)_Vel(0[1-3])_([A-G])(s?)([2-6])_01\.wav$/.exec(sourceWav);
    const stringNames = { LowE: 6, A: 5, D: 4, G: 3, B: 2, HighE: 1 };
    const noteSteps = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
    const sourceMidi = sourceMatch
      ? (Number(sourceMatch[5]) + 1) * 12 + noteSteps[sourceMatch[3]] + (sourceMatch[4] ? 1 : 0)
      : null;
    if (!Number.isInteger(string) || !Object.hasOwn(openMidi, string) ||
        !Number.isInteger(midi) || midi - openMidi[string] !== fret ||
        fret < 0 || fret > 20 ||
        !expectedLayers.includes(layer) ||
        !sourceMatch || stringNames[sourceMatch[1]] !== string ||
        `Vel${sourceMatch[2]}` !== layer || sourceMidi !== midi ||
        sourceOgg !== sourceWav.replace(/\.wav$/, '.ogg') ||
        !Number.isInteger(oggBytes) || oggBytes <= 0 ||
        !/^[0-9a-f]{64}$/.test(oggSha256)) {
      throw new Error(`Katalogin näyterivi on virheellinen: ${string}:${midi}:${layer}`);
    }
    const key = eventKey(string, midi, layer);
    if (index.has(key)) throw new Error(`Katalogissa on päällekkäinen näyte: ${key}`);
    index.set(key, sample);
    const stringPitch = `${string}:${midi}`;
    stringPitches.set(stringPitch, (stringPitches.get(stringPitch) ?? 0) + 1);
    totalOggBytes += oggBytes;
  }
  if (index.size !== 375 || stringPitches.size !== 125 ||
      [...stringPitches.values()].some(count => count !== 3) ||
      totalOggBytes !== catalog.expected.sourceOggBytesTotal) {
    throw new Error('Katalogin 375/125/3-rakenne tai tavumäärä ei täsmää.');
  }
  return { index, stringPitchPairs: stringPitches.size, totalOggBytes };
}

export function planMetaSteelSamples(catalog, events) {
  if (!Array.isArray(events)) throw new TypeError('Harjoituksen tapahtumien on oltava taulukko.');
  const { index } = validateMetaSteelInventory(catalog);
  const selected = new Map();
  for (const event of events) {
    if (!event || !Number.isInteger(event.midi)) throw new TypeError('Tapahtumasta puuttuu MIDI-sävel.');
    const string = event.string ?? firstPositionString(event.midi);
    if (!Number.isInteger(string) || !Object.hasOwn(openMidi, string)) throw new RangeError('Kitaran kielen on oltava kokonaisluku 1–6.');
    const layer = event.layer ?? (event.velocity === undefined ? 'Vel02' : velocityLayer(event.velocity));
    if (!expectedLayers.includes(layer)) throw new Error(`Tuntematon velocity-kerros: ${layer}`);
    if (event.velocity !== undefined && velocityLayer(event.velocity) !== layer) {
      throw new Error('Tapahtuman velocity ja nimetty velocity-kerros ovat ristiriidassa.');
    }
    const key = eventKey(string, event.midi, layer);
    const sample = index.get(key);
    if (!sample) throw new Error(`Meta Steel -näyte puuttuu: ${key}. Ei hiljaista korvausta.`);
    selected.set(key, sample);
  }
  const samples = [...selected.values()];
  return {
    bank: 'meta-steel-guitar',
    sourceOnly: true,
    samples,
    sourceOggBytes: samples.reduce((sum, s) => sum + s.oggBytes, 0),
    uniqueSamples: samples.length,
  };
}
