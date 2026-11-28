// Issue #217: rajattu mutaatiokoe. Jokaisen mutaation pitää kaataa kohdetesti odotettuun väitteeseen.
// Aja repositorion juuresta puhtaassa työpuussa: node docs/qa/riffikaiku-ci-timeout-2026-11-28/mutaatiot.mjs
// Muuttaa tiedostoa hetkeksi ja palauttaa alkuperäisen sisällön jokaisen kokeen jälkeen.
import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const test = 'tests/riffikaiku-pipeline.test.ts', detector = 'harjoittelija/vendor/pitchDetector.ts';
const first = 'expect(e2[0]).toBeGreaterThan(e4[0] * 2.5);';
const measured = 'expect(e2[1]).toBeGreaterThan(e2[0]); expect(e4[1]).toBeGreaterThan(e4[0]);';
const mutations = [
  ['M1 mitattu kynnys poistettu E2:lta', test, 'await lastPitchMs(low, .003)', 'await lastPitchMs(low, .01)', measured],
  ['M2 mitattu kynnys poistettu E4:ltä', test, 'await lastPitchMs(high, .003)', 'await lastPitchMs(high, .01)', measured],
  ['M3 E2 vaimenee yhtä nopeasti kuin E4', test, 'ring(40, 2000)', 'ring(40, 500)', first],
  ['M4 näytemuisti sekoitettu: E4 saa E2:n näytteet', test, 'high = ring(64, 500)', 'high = low', first],
  ['M5 PitchLoop ohittaa annetun äänikynnyksen', detector, '} = this.opts;', '} = { ...this.opts, minRms: .01 };', measured],
  ['M6 näytemuistin ruudukkovahti: 44,1 kHz', test, 'sampleRate = 48000) {\n  const lead', 'sampleRate = 44100) {\n  const lead', 'ei voi muistaa'],
];
let failed = 0;
for (const [name, file, from, to, expected] of mutations) {
  const original = readFileSync(file, 'utf8');
  if (original.split(from).length !== 2) throw new Error(`${name}: kohta ei ole yksiselitteinen: ${from}`);
  let output, status;
  try {
    writeFileSync(file, original.replace(from, to));
    const run = spawnSync('npx', ['vitest', 'run', 'tests/riffikaiku-pipeline.test.ts', '-t', 'mitattu kynnys: soiva kieli'],
      { encoding: 'utf8', env: { ...process.env, NO_COLOR: '1', FORCE_COLOR: '0' } });
    output = run.stdout + run.stderr; status = run.status;
  } finally { writeFileSync(file, original); }
  // Vitest merkitsee kaatuneen rivin koodikehykseen "NNN|".
  const lines = output.split('\n');
  const at = lines.findIndex(line => /^\s*\|\s*\^/.test(line));
  const where = at > 0 ? lines[at - 1].trim() : '';
  // Pitkät koodirivit katkaistaan merkkiin "…", joten verrataan rivin alkua.
  const shown = where.replace(/^\d+\|\s*/, '').replace(/…$/, '');
  const ok = status !== 0 && (expected === 'ei voi muistaa' ? output.includes(expected) : shown !== '' && expected.startsWith(shown));
  if (!ok) { failed++; console.log(output); }
  const message = lines.find(line => /^(AssertionError|Error|TypeError)/.test(line.trim()))?.trim() ?? '';
  console.log(`${ok ? 'KAATUI ODOTETUSTI' : 'ODOTTAMATON'} | ${name} | ${message} | ${where}`);
}
process.exitCode = failed ? 1 : 0;
