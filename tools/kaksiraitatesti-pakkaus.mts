// Pakattujen testiraitojen vertailu lähde-WAViin (MK-20261118-03). Ajetaan Macilla Node 22:lla.
//
// Pakattu tiedosto puretaan ensin Applen dekooderilla (sama kuin Safarissa), esimerkiksi:
//   afconvert -f WAVE -d LEI16@48000 kitara.m4a kitara-aac.wav
// Käyttö:
//   node tools/kaksiraitatesti-pakkaus.mts NIMI lähde-kitara.wav lähde-tausta.wav purettu-kitara.wav purettu-tausta.wav
// Tulostaa kummankin raidan siirtymän lähteeseen nähden useassa kohdassa, raitojen keskinäisen
// siirtymän (kitara − tausta), pituuseron (kooderin viive ja täyte) ja signaali–kohinasuhteen.
import { readFileSync } from 'node:fs';
import { locate, parseWavHeader, pcmToMono } from '../harjoittelija/kaksiraitatesti/kohdistus.ts';

const RATE = 48000;
const [name, sourceGuitar, sourceBacking, decodedGuitar, decodedBacking] = process.argv.slice(2);
if (!decodedBacking) {
  console.error('Käyttö: node tools/kaksiraitatesti-pakkaus.mts NIMI lähde-kitara.wav lähde-tausta.wav purettu-kitara.wav purettu-tausta.wav');
  process.exit(1);
}

interface Track { mono: Float32Array; left: Float32Array; right: Float32Array; frames: number }
function load(path: string): Track {
  const bytes = readFileSync(path);
  const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  const info = parseWavHeader(buffer);
  if (info.sampleRate !== RATE || info.bitsPerSample !== 16 || info.channels !== 2) throw new Error(`${path}: odotettiin 48 kHz 16 bit stereo`);
  const raw = new Int16Array(buffer, info.dataOffset, info.frames * 2);
  const left = new Float32Array(info.frames), right = new Float32Array(info.frames);
  for (let i = 0; i < info.frames; i++) { left[i] = raw[2 * i] / 32768; right[i] = raw[2 * i + 1] / 32768; }
  const mono = pcmToMono(new Uint8Array(buffer, info.dataOffset, info.frames * info.blockAlign), info);
  return { mono, left, right, frames: info.frames };
}

/** Siirtymä näytteinä (purettu − lähde) kohdassa at: 1,5 s:n näyte, haku ±0,25 s. */
function offsetAt(source: Float32Array, target: Float32Array, at: number) {
  const start = Math.round(at * RATE);
  const probe = source.subarray(start, start + 1.5 * RATE);
  const from = Math.max(0, start - 0.25 * RATE);
  const found = locate(target.subarray(from, Math.min(target.length, start + probe.length + 0.25 * RATE)), probe, RATE);
  return { offset: from + found.lag - start, score: found.score };
}

/** Signaali–kohinasuhde (dB), kun purettu on kohdistettu lähteeseen kokonaisella näytesiirrolla. */
function snr(source: Float32Array, decoded: Float32Array, shift: number, from: number, to: number) {
  let signal = 0, noise = 0;
  for (let i = from; i < to; i++) {
    const j = i + shift;
    if (j < 0 || j >= decoded.length) continue;
    signal += source[i] * source[i];
    const diff = decoded[j] - source[i];
    noise += diff * diff;
  }
  return 10 * Math.log10(signal / Math.max(noise, 1e-20));
}

/** Kaistanleveys: taajuus, jonka yläpuolella purettu signaali on yli 40 dB lähdettä hiljaisempi (karkea DFT). */
function bandwidth(source: Float32Array, decoded: Float32Array, shift: number, at: number) {
  const size = 4096;
  const start = Math.round(at * RATE);
  const power = (signal: Float32Array, offset: number, bin: number) => {
    let re = 0, im = 0;
    for (let n = 0; n < size; n++) {
      const w = 0.5 - 0.5 * Math.cos((2 * Math.PI * n) / (size - 1));
      const value = signal[offset + n] * w;
      re += value * Math.cos((2 * Math.PI * bin * n) / size);
      im -= value * Math.sin((2 * Math.PI * bin * n) / size);
    }
    return re * re + im * im;
  };
  let edge = 0;
  for (let khz = 10; khz <= 23; khz += 0.5) {
    const bin = Math.round((khz * 1000 * size) / RATE);
    const a = power(source, start, bin), b = power(decoded, start + shift, bin);
    if (a > 1e-9 && b / a > 1e-4) edge = khz;
  }
  return edge;
}

const sources = { kitara: load(sourceGuitar), tausta: load(sourceBacking) };
const decoded = { kitara: load(decodedGuitar), tausta: load(decodedBacking) };
const seconds = sources.kitara.frames / RATE;
const points = [5, 20, 47, 60, 90, 115, 150, 200, 230].filter(at => at + 2 < seconds);

console.log(`== ${name}`);
const offsets: Record<string, number[]> = { kitara: [], tausta: [] };
for (const track of ['kitara', 'tausta'] as const) {
  const s = sources[track], d = decoded[track];
  const row = points.map(at => offsetAt(s.mono, d.mono, at));
  offsets[track] = row.map(item => item.offset);
  const shift = Math.round(median(offsets[track]));
  const quality = snr(s.mono, d.mono, shift, Math.round(17 * RATE), Math.min(s.frames, Math.round(117 * RATE)));
  const stereo = (snr(s.left, d.left, shift, Math.round(17 * RATE), Math.round(60 * RATE)) + snr(s.right, d.right, shift, Math.round(17 * RATE), Math.round(60 * RATE))) / 2;
  console.log(`${track}: kehyksiä lähde ${s.frames}, purettu ${d.frames} (ero ${d.frames - s.frames})`);
  console.log(`  siirtymä näytteinä kohdissa ${points.join(', ')} s: ${row.map(item => item.offset.toFixed(2)).join(', ')}`);
  console.log(`  korrelaatio: ${row.map(item => item.score.toFixed(4)).join(', ')}`);
  console.log(`  SNR mono 17–117 s: ${quality.toFixed(1)} dB, stereo 17–60 s: ${stereo.toFixed(1)} dB, kaista ≈ ${bandwidth(s.mono, d.mono, shift, 47)} kHz`);
}
const relative = points.map((_, index) => offsets.kitara[index] - offsets.tausta[index]);
console.log(`keskinäinen siirtymä (kitara − tausta) näytteinä: ${relative.map(value => value.toFixed(2)).join(', ')}`);
console.log(`suurin |keskinäinen siirtymä|: ${Math.max(...relative.map(Math.abs)).toFixed(2)} näytettä = ${(Math.max(...relative.map(Math.abs)) / RATE * 1000).toFixed(3)} ms`);

function median(values: number[]) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}
