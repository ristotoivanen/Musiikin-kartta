// Issue #217: toistomittaus. Aja repositorion juuresta:
//   node mittaa.mjs <nimi> <erilliset> <tiedostoajot> <koko sarjat>
// Jokainen yritys on oma Vitest-prosessinsa ilman retryjä. Kaikki yritykset tulostetaan,
// ajoa ei keskeytetä virheeseen, ja lopussa poistutaan virhekoodilla, jos yksikin kaatui.
import { appendFileSync, mkdtempSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir, availableParallelism, cpus } from 'node:os';
import { join, relative } from 'node:path';

const [label, isolated, files, suites] = [process.argv[2], ...process.argv.slice(3).map(Number)];
const target = 'mitattu kynnys: soiva kieli';
const file = 'tests/riffikaiku-pipeline.test.ts';
const dir = mkdtempSync(join(tmpdir(), 'mittaus-217-'));
const stats = values => {
  const s = [...values].sort((a, b) => a - b), n = s.length;
  const median = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
  return { n, min: Math.round(s[0]), mediaani: Math.round(median), p95: Math.round(s[Math.ceil(n * .95) - 1]), max: Math.round(s[n - 1]) };
};
const out = text => { console.log(text); if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, text + '\n\n'); };

out(`### ${label}\nnode ${process.version} · ${cpus()[0].model} · availableParallelism ${availableParallelism()} · image ${process.env.ImageOS ?? '-'} ${process.env.ImageVersion ?? '-'}`);
let failures = 0;
for (const [kind, count, args] of [
  ['erillinen testi', isolated, [file, '-t', target]],
  ['pipeline-tiedosto', files, [file]],
  ['koko yksikkötestisarja', suites, []],
]) {
  const targetMs = [], wallMs = [], slowest = new Map();
  for (let i = 1; i <= count; i++) {
    const json = join(dir, 'tulos.json');
    const started = Date.now();
    const run = spawnSync('npx', ['vitest', 'run', ...args, '--reporter=default', '--reporter=json', `--outputFile.json=${json}`],
      { encoding: 'utf8', env: { ...process.env, NO_COLOR: '1' }, maxBuffer: 1e8 });
    const wall = Date.now() - started;
    const report = JSON.parse(readFileSync(json, 'utf8'));
    const all = report.testResults.flatMap(f => f.assertionResults.map(a => ({ ...a, file: relative(process.cwd(), f.name) })));
    const test = all.find(a => a.title.startsWith(target));
    for (const a of all) if (a.duration > (slowest.get(a.fullName) ?? 0)) slowest.set(a.fullName, a.duration);
    const pipeline = report.testResults.find(f => f.name.endsWith(file));
    const ok = run.status === 0 && test.status === 'passed';
    if (!ok) { failures++; console.log(run.stdout + run.stderr); }
    targetMs.push(test.duration); wallMs.push(wall);
    out(`${kind} ${i}/${count}: ${ok ? 'OK' : 'VIRHE'} · testit ${report.numPassedTests}/${report.numPassedTests + report.numFailedTests} läpi (ohitettu ${report.numPendingTests}) · kohdetesti ${Math.round(test.duration)} ms · pipeline-tiedosto ${Math.round(pipeline.endTime - pipeline.startTime)} ms · prosessi ${wall} ms`);
  }
  if (!count) continue;
  out(`**${kind}, kohdetesti (ms):** ${JSON.stringify(stats(targetMs))} · prosessi ${JSON.stringify(stats(wallMs))}`);
  if (kind !== 'erillinen testi') out(`${kind}, hitaimmat testit (maksimi yli ajojen, ms): ` +
    [...slowest].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([name, ms]) => `${Math.round(ms)} ${name}`).join(' · '));
}
out(`**Epäonnistuneita yrityksiä: ${failures}**`);
process.exitCode = failures ? 1 : 0;
