// Rajattu Node-koe. Kopioi tämä tiedosto koehakemiston juureen. Katso koe.md.
import assert from 'node:assert/strict';
import { readFile, writeFile, unlink } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import * as beat from '@audio/beat';
import Meyda from 'meyda';
import fft from 'fourier-transform';
import hann from 'window-function/hann';

assert(process.argv[2] && ['--alkuperainen', '--vertailu'].includes(process.argv[2]),
  'Anna ajotavaksi --alkuperainen tai --vertailu.');
const original = resolve(fileURLToPath(new URL(
  './docs/oppiminen/rytmi/mikrofoniarvio-2026-11/koe/onset-koe.mjs', import.meta.url)));
const source = await readFile(original, 'utf8');

if (process.argv[2] === '--alkuperainen') {
  await import(pathToFileURL(original));
} else {
  // Käytetään PR #77:n aineistoa ja toteutuksia sellaisenaan. Lisätään ainoastaan
  // valinnainen magnitudin laskija ja viennit, jätetään alkuperäinen raportointiajo pois.
  const runnerStart = source.indexOf('\nconst rows = [];');
  const parameter = 'minGapMs = 60 } = {})';
  const magnitude = 'Math.hypot(re[k], im[k])';
  assert(runnerStart > 0 && source.includes(parameter) && source.includes(magnitude));
  const moduleSource = source.slice(0, runnerStart)
    .replace(parameter, 'minGapMs = 60, spectrum } = {})')
    .replace('    fft(re, im);', '    const amplitudes = spectrum?.(re);\n    if (!amplitudes) fft(re, im);')
    .replace(magnitude, '(amplitudes ? amplitudes[k] : Math.hypot(re[k], im[k]))');
  const generated = original.replace(/\.mjs$/, '-82-' + process.pid + '.mjs');
  await writeFile(generated, moduleSource +
    '\nexport { SR, BARS, scenarios, patternEvents, strumTrack, addDrums, detectCurrent, detectFlux, match };\n',
    { flag: 'wx' });
  try {
    await run(await import(pathToFileURL(generated)));
  } finally {
    await unlink(generated);
  }
}

async function run(base) {
  const { SR, BARS, scenarios, patternEvents, strumTrack, addDrums, detectCurrent, detectFlux, match } = base;
  const probe = Float32Array.from({ length: 1024 }, (_, i) => Math.sin(2 * Math.PI * 32 * i / 1024));
  const previous = Float32Array.from(probe, value => value / 2);
  Meyda.sampleRate = SR;
  Meyda.bufferSize = 1024;
  Meyda.windowingFunction = 'rect'; // PR #77 on jo ikkunoinut syötteen.
  assert(Math.abs(fft(probe)[32] - 1) < 0.01);
  assert(Math.abs(hann(512, 1024) - 1) < 0.01);
  assert(Math.abs(Meyda.extract('amplitudeSpectrum', probe)[32] - 512) < 0.01);
  assert(Math.abs(Meyda.extract('rms', probe) - Math.SQRT1_2) < 0.01);
  try {
    const value = Meyda.extract('spectralFlux', probe, previous);
    console.log('Meyda spectralFlux -koe:', String(value));
  } catch (error) {
    console.log('Meyda spectralFlux -koe:', error.name, error.message);
  }

  const guitarCases = [...scenarios, [
    'Soiva sointu, kuudestoistaosat, 120 BPM', 'DUDUDUDUDUDUDUDU', 120, {},
  ]];
  const rows = [];
  const tempos = [];
  for (const [index, [name, pattern, bpm, options]] of guitarCases.entries()) {
    const { events, seconds } = patternEvents(pattern, bpm, { level: options.level ?? 1, seed: index + 1 });
    const { signal, truth } = strumTrack(events, seconds, { muted: options.muted, seed: index + 11 });
    if (options.drums) addDrums(signal, bpm, BARS, options.drums, index + 101);

    const audioOptions = { fs: SR };
    const audioOnsets = beat.onsets(signal, audioOptions);
    const estimates = beat.detect(signal, audioOptions);
    const tracked = beat.beatTrack(signal, audioOptions); // Myös erillinen beat-track-paketti ajetaan.
    const tempo = beat.tempo(signal, audioOptions);
    assert(audioOnsets.length > 0 && audioOnsets.every(Number.isFinite));
    assert(Number.isFinite(estimates.bpm) && estimates.beats.every(Number.isFinite));
    assert(Number.isFinite(tempo.bpm) && tracked.beats.every(Number.isFinite));
    const fluxAvailability = (1024 / 2 + 2 * 256) / SR;
    const detectors = [
      ['A60', detectCurrent(signal, 1000 / 60), 0],
      ['A30', detectCurrent(signal, 1000 / 30), 0],
      ['B', detectFlux(signal), fluxAvailability],
      ['Beat', audioOnsets, null],
      ['Meyda', detectFlux(signal, { spectrum: frame => Meyda.extract('amplitudeSpectrum', frame) }), fluxAvailability],
    ];
    for (const [detector, times, availability] of detectors) {
      const wide = match(times, truth, 0.05);
      const narrow = match(times, truth, 0.025);
      rows.push({ id: index + 1, detector, n: truth.length, found: times.length, wide, narrow, availability });
    }
    tempos.push({ id: index + 1, name, bpm, estimated: estimates.bpm, tempo: tempo.bpm, tracked: tracked.bpm,
      beats: estimates.beats.length, trackBeats: tracked.beats.length });
  }

  const values = (x, digits = 1) => x.toFixed(digits);
  const median = offsets => {
    const sorted = [...offsets].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  };
  const ms = offsets => offsets.length ? values(median(offsets) * 1000) : '–';
  const f1 = (hits, truth, found) => truth ? values(200 * hits / (truth + found)) : '–';
  console.log('\n| ID | Skenaario | BPM | detect BPM | tempo BPM | beatTrack BPM | detect / track pulssit |');
  console.log('| ---: | --- | ---: | ---: | ---: | ---: | ---: |');
  for (const r of tempos) {
    console.log(`| ${r.id} | ${r.name} | ${r.bpm} | ${values(r.estimated)} | ${values(r.tempo)} | ${values(r.tracked)} | ${r.beats} / ${r.trackBeats} |`);
  }
  console.log('\n| ID | Tunnistin | Kitara | Löytyi | TP / FN / FP ±50 ms | TP / FN / FP ±25 ms | F1 ±50 % | F1 ±25 % | Aikaleimavirhe ms | Saatavuus ms | Ylös löytyi ±50 ms |');
  console.log('| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |');
  for (const r of rows) {
    const { wide, narrow } = r;
    const available = r.availability === null ? [] : wide.offsets.map(value => value + r.availability);
    console.log(`| ${r.id} | ${r.detector} | ${r.n} | ${r.found} | ${wide.hits} / ${wide.missed} / ${wide.extra} | ${narrow.hits} / ${narrow.missed} / ${narrow.extra} | ${f1(wide.hits, r.n, r.found)} | ${f1(narrow.hits, r.n, r.found)} | ${ms(wide.offsets)} | ${ms(available)} | ${wide.hitUp.up}/${wide.totalUp.up} |`);
  }

  console.log('\n| Tunnistin | Kitara | Löytyi | TP / FN / FP ±50 ms | TP / FN / FP ±25 ms | F1 ±50 % | F1 ±25 % | Aikaleimavirhe ms | Saatavuus ms |');
  console.log('| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |');
  for (const detector of new Set(rows.map(r => r.detector))) {
    const group = rows.filter(r => r.detector === detector);
    const sum = fn => group.reduce((total, row) => total + fn(row), 0);
    const n = sum(r => r.n), found = sum(r => r.found);
    const wide = sum(r => r.wide.hits), narrow = sum(r => r.narrow.hits);
    const offsets = group.flatMap(r => r.wide.offsets);
    const availability = group[0].availability;
    console.log(`| ${detector} | ${n} | ${found} | ${wide} / ${n - wide} / ${found - wide} | ${narrow} / ${n - narrow} / ${found - narrow} | ${f1(wide, n, found)} | ${f1(narrow, n, found)} | ${ms(offsets)} | ${ms(availability === null ? [] : offsets.map(value => value + availability))} |`);
  }
}
