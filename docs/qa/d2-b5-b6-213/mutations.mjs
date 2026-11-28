// Each mutation must make the selected production-facing test fail at the intended assertion.
import { spawnSync } from 'node:child_process';

const mutations = {
  alignment: ['B5', /guitar\/read-480000 channel 0: PCM mismatch/],
  'decoder-delay': ['B5', /D2 decoder delay differs from independent anchor/],
  'length-missing': ['B5', /guitar\/read-480000: wrong PCM sample count/],
  'length-extra': ['B5', /guitar\/read-480000: wrong PCM sample count/],
  seam: ['B5', /pool-1: seam gap or overlap/],
  'start-duration': ['B5', /pool-0\/backing: start duration truncates the scheduled samples/],
  'later-stop': ['B5', /pool-0\/backing: wrong scheduled sample count/],
  'pool-reuse': ['B5', /pool-0\/backing: pool buffer changed before PCM snapshot/],
  'tail-stop': ['B5', /pool-tail\/backing: wrong scheduled sample count/],
  'mp3-wrong': ['B5', /guitar: D2 MP3 SHA-256 mismatch/],
  'mp3-corrupt': ['B5', /guitar: D2 MP3 SHA-256 mismatch/],
  'pool-copy': ['B5', /backing\/pool-0 channel 1: PCM mismatch count=1 first=1000/],
  'slow-wait': ['B6', /slow startup must start before complete download|slow startup download must be below half/],
  'slow-stall': ['B6', /slow playback must advance beyond two seconds/],
  'pcm-step': ['B5', /guitar\/read-480000 channel 0: PCM mismatch count=1 first=481000/],
  'decoder-pattern': ['B5', /unknown decoder delta.*sha256.*count.*max.*rms.*first/],
};
const requested = process.argv.slice(2);
const cases = requested.length ? requested : Object.keys(mutations);
for (const mutation of cases) {
  const [testName, expected] = mutations[mutation] ?? [];
  if (!testName) throw new Error('Unknown mutation: ' + mutation);
  const run = spawnSync(process.execPath, ['node_modules/@playwright/test/cli.js', 'test',
    'tests/e2e/song-d2.spec.ts', '--grep', testName, '--workers=2', '--retries=0', '--reporter=json'], {
    env: { ...process.env, D2_QA_MUTATION: mutation, FORCE_COLOR: '0' }, encoding: 'utf8',
    maxBuffer: 20 * 1024 * 1024,
  });
  if (run.error) throw run.error;
  const results = report => (report.suites ?? []).flatMap(suite => [
    ...suite.specs.flatMap(spec => spec.tests.map(test => ({ project: test.projectName, result: test.results[0] }))),
    ...results(suite),
  ]);
  try {
    const found = results(JSON.parse(run.stdout));
    if (run.status !== 1 || found.length !== 2 || !found.every(({ result }) =>
      result.status === 'failed' && expected.test(result.error?.message ?? ''))) {
      throw new Error('Unexpected test result or assertion');
    }
    for (const { project, result } of found) {
      const error = result.error.message.split('\n').find(line => expected.test(line));
      console.log(JSON.stringify({ mutation, project, rejected: true, assertion: error.trim() }));
    }
  } catch (error) {
    process.exitCode = 1;
    console.error(mutation, error.message, run.stderr, run.stdout);
  }
}
