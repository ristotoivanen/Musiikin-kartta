/**
 * Synteettiset testiraidat, joiden kohdistus tunnetaan näytteen tarkkuudella (testiversio).
 *
 * Molemmissa raidoissa on lyhyt merkkiääni samoissa kohdissa: tausta matala (300 Hz), kitara korkea
 * (1500 Hz). Kohdakkain ne kuulostavat yhdeltä iskulta, ja 20–30 ms:n ero kuuluu kaksoisiskuna.
 * Merkkiäänten väli vaihtelee näennäissatunnaisesti 0,35–0,75 s, jotta ristikorrelaatiolla ei ole
 * toistuvan rytmin aiheuttamaa toista huippua. Lisäksi kummassakin on oma, toisistaan riippumaton
 * kohinapohja. offsetMs siirtää kitaraa tunnetun verran myöhemmäksi (positiivinen kontrolli mittaukselle).
 */

export interface SyntheticTracks {
  sampleRate: number;
  tausta: Float32Array;
  kitara: Float32Array;
  /** Kitaran siirto näytteinä (pyöristetty). */
  shiftSamples: number;
}

/** Deterministinen kohina näyteindeksistä: siirretty raita on täsmälleen sama sisältö siirrettynä. */
function noise(index: number, seed: number): number {
  let x = (index * 0x9e3779b1 + seed * 0x85ebca6b) | 0;
  x = Math.imul(x ^ (x >>> 16), 0x7feb352d);
  x = Math.imul(x ^ (x >>> 15), 0x846ca68b);
  x ^= x >>> 16;
  return (x >>> 0) / 4294967296 * 2 - 1;
}

/** Merkkiäänten alkukohdat (näytteinä): ensimmäinen 0,25 s, sitten 0,35–0,75 s:n välein. Sama molemmille raidoille. */
export function beepStarts(length: number, sampleRate: number): number[] {
  const starts: number[] = [];
  let at = Math.round(0.25 * sampleRate);
  for (let index = 0; at < length; index++) {
    starts.push(at);
    at += Math.round((0.35 + 0.4 * (noise(index, 101) * 0.5 + 0.5)) * sampleRate);
  }
  return starts;
}

function track(length: number, sampleRate: number, shift: number, seed: number, beepHz: number, beepGain: number): Float32Array {
  const out = new Float32Array(length);
  const segment = Math.round(0.1 * sampleRate);
  const beepLength = Math.round(0.03 * sampleRate);
  const starts = beepStarts(length, sampleRate);
  let next = 0;
  let smooth = 0;
  for (let n = 0; n < length; n++) {
    const content = n - shift;
    if (content < 0) { out[n] = 0; continue; }
    // Kohinapohja: 100 ms:n jaksoittain vaihteleva taso, kevyesti alipäästetty.
    const level = 0.03 + 0.12 * (noise(Math.floor(content / segment), seed + 7) * 0.5 + 0.5);
    smooth += 0.5 * (noise(content, seed) - smooth);
    let sample = level * smooth;
    while (next < starts.length && starts[next] + beepLength <= content) next++;
    const phase = next < starts.length ? content - starts[next] : -1;
    if (phase >= 0 && phase < beepLength) {
      const window = 0.5 - 0.5 * Math.cos(2 * Math.PI * phase / beepLength);
      sample += beepGain * window * Math.sin(2 * Math.PI * beepHz * phase / sampleRate);
    }
    out[n] = sample;
  }
  return out;
}

export function syntheticTracks(seconds = 60, sampleRate = 48000, offsetMs = 0): SyntheticTracks {
  const length = Math.round(seconds * sampleRate);
  const shiftSamples = Math.round(offsetMs * sampleRate / 1000);
  return {
    sampleRate, shiftSamples,
    tausta: track(length, sampleRate, 0, 11, 300, 0.22),
    kitara: track(length, sampleRate, shiftSamples, 23, 1500, 0.16),
  };
}

/** 16-bittinen mono-WAV, jonka selain voi toistaa Blob-osoitteesta (kelaus toimii ilman palvelinta). */
export function encodeWav16(samples: Float32Array, sampleRate: number): ArrayBuffer {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);
  const text = (offset: number, value: string) => { for (let i = 0; i < value.length; i++) view.setUint8(offset + i, value.charCodeAt(i)); };
  text(0, 'RIFF'); view.setUint32(4, 36 + samples.length * 2, true); text(8, 'WAVE');
  text(12, 'fmt '); view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true); view.setUint32(28, sampleRate * 2, true); view.setUint16(32, 2, true); view.setUint16(34, 16, true);
  text(36, 'data'); view.setUint32(40, samples.length * 2, true);
  for (let i = 0; i < samples.length; i++) {
    const value = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(44 + i * 2, Math.round(value * 32767), true);
  }
  return buffer;
}
