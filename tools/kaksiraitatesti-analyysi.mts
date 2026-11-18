// Kahden raidan testiaineiston kohdistusanalyysi (issue #9). Ajetaan Macilla Node 22:lla.
//
// MP3:t puretaan ensin Applen dekooderilla (sama kuin Safarissa), esimerkiksi:
//   afconvert -f WAVE -d LEI16@48000 kitara.mp3 kitara-mp3.wav
// Käyttö:
//   node tools/kaksiraitatesti-analyysi.mts kitara.wav tausta.wav kitara-mp3.wav tausta-mp3.wav [kokonainen.wav] [tuotanto-kitara.wav]
// Tulostaa MP3–WAV-siirtymät, raitojen sisäisen kohdistuksen kokonaista kappaletta vastaan ja
// uuden kitaran siirtymän tuotannon kitararaitaan nähden.
import { readFileSync } from 'node:fs';
import { locate, parseWavHeader, pcmToMono, rms } from '../harjoittelija/kaksiraitatesti/kohdistus.ts';

const RATE = 48000;
const [kitaraWav, taustaWav, kitaraMp3, taustaMp3, mixPath, productionPath] = process.argv.slice(2);
if (!taustaMp3) {
  console.error('Käyttö: node tools/kaksiraitatesti-analyysi.mts kitara.wav tausta.wav kitara-mp3.wav tausta-mp3.wav [kokonainen.wav] [tuotanto-kitara.wav]');
  process.exit(1);
}

function load(path: string) {
  const bytes = readFileSync(path);
  const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  const info = parseWavHeader(buffer);
  if (info.sampleRate !== RATE) throw new Error(`${path}: ${info.sampleRate} Hz, odotettiin ${RATE}`);
  const mono = pcmToMono(new Uint8Array(buffer, info.dataOffset, info.frames * info.blockAlign), info);
  console.log(`${path}: ${info.channels} ch, ${info.bitsPerSample} bit, ${info.frames} kehystä = ${(info.frames / RATE).toFixed(6)} s, RMS ${rms(mono).toFixed(4)}`);
  return mono;
}

/** Siirtymä näytteinä (target − source) kohdassa at: 1,5 s:n näyte, haku ±0,25 s. */
function offsetAt(source: Float32Array, target: Float32Array, at: number) {
  const start = Math.round(at * RATE);
  const probe = source.subarray(start, start + 1.5 * RATE);
  const from = Math.max(0, start - 0.25 * RATE);
  const found = locate(target.subarray(from, start + probe.length + 0.25 * RATE), probe, RATE);
  return { offset: from + found.lag - start, score: found.score, runnerUp: found.runnerUp };
}

function report(label: string, source: Float32Array, target: Float32Array) {
  console.log(`\n${label}`);
  for (const at of [5, 20, 47, 60, 90, 119, 150, 200]) {
    if ((at + 2) * RATE > Math.min(source.length, target.length)) continue;
    const row = offsetAt(source, target, at);
    console.log(`  ${String(at).padStart(3)} s: ${row.offset.toFixed(2).padStart(8)} näytettä (${(row.offset / RATE * 1000).toFixed(3)} ms), korrelaatio ${row.score.toFixed(4)}, toiseksi paras ${row.runnerUp.toFixed(3)}`);
  }
}

const kitara = load(kitaraWav), tausta = load(taustaWav);
report('MP3 vs. WAV, kitara (siirtymä = MP3 − WAV)', kitara, load(kitaraMp3));
report('MP3 vs. WAV, tausta', tausta, load(taustaMp3));
if (mixPath) {
  const mix = load(mixPath);
  const sum = kitara.map((value, index) => value + tausta[index]);
  report('Kitara + tausta vs. kokonainen kappale', sum, mix);
  // Jäännösenergia, kun taustaa siirretään kitaraan nähden: pienin arvo = raitojen keskinäinen kohdistus.
  console.log('\nJäännösenergia / kappaleen energia (30–110 s), tausta siirrettynä kitaraan nähden:');
  for (const lag of [-12, -4, -2, -1, 0, 1, 2, 4, 12]) {
    let residual = 0, energy = 0;
    for (let i = 30 * RATE; i < 110 * RATE; i++) {
      const diff = mix[i] - kitara[i] - (tausta[i + lag] ?? 0);
      residual += diff * diff; energy += mix[i] * mix[i];
    }
    console.log(`  ${String(lag).padStart(3)} näytettä: ${(residual / energy).toFixed(5)}`);
  }
}
if (productionPath) report('Uusi kitara vs. tuotannon kitara', kitara, load(productionPath));
