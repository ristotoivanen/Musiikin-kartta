// Issue #217: näytteiden ja tunnistuksen vertailu ilman näytemuistia ja sen kanssa, sekä kustannusprofiili.
// Aja repositorion juuresta: node docs/qa/riffikaiku-ci-timeout-2026-11-28/vertailu.mjs
// Luo väliaikaisen testitiedoston testin omista apufunktioista (sama guitar, fakeInput, sampledOnce),
// ajaa sen ja poistaa sen. Ei muuta repositorion tiedostoja.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const source = readFileSync('tests/riffikaiku-pipeline.test.ts', 'utf8');
const helpers = source.slice(0, source.indexOf("describe('neljä peräkkäistä"));
const body = `
import { PitchDetector as Pitchy } from 'pitchy';
it('näytemuisti: samat näytteet, kehykset ja lastPitchMs', async () => {
  const proto = Object.getPrototypeOf(Pitchy.forFloat32Array(8192));
  const findPitch = proto.findPitch;
  let pitchMs = 0;
  proto.findPitch = function (this: unknown, ...a: unknown[]) {
    const t0 = process.hrtime.bigint(); const r = findPitch.apply(this, a); pitchMs += Number(process.hrtime.bigint() - t0) / 1e6; return r; };

  const run = async (line: (t: number) => number, minRms: number) => {
    const clock = fakeClock(); let last = 0, synthMs = 0, computed = 0;
    const buffers: Float32Array[] = []; const frames: string[] = [];
    const input = fakeInput(clock, () => line);
    const context = input.context as unknown as { createAnalyser: () => { getFloatTimeDomainData: (b: Float32Array) => void } };
    const create = context.createAnalyser;
    context.createAnalyser = () => { const node = create(); const read = node.getFloatTimeDomainData;
      node.getFloatTimeDomainData = b => { const t0 = process.hrtime.bigint(); read(b); synthMs += Number(process.hrtime.bigint() - t0) / 1e6; computed += b.length; buffers.push(b.slice()); };
      return node; };
    const mic = new Microphone(async () => input);
    pitchMs = 0;
    await mic.start('', { ...DETECTION, minRms, onFrame: f => {
      if (f.status === 'pitch') last = clock.now;
      frames.push(JSON.stringify([clock.now, f.status, f.midi ?? null, f.rms, f.frequency ?? null, f.clarity ?? null, f.cents ?? null]));
    } }, () => {});
    clock.run(6000); mic.stop(); vi.unstubAllGlobals(); vi.restoreAllMocks();
    return { last, buffers, frames, synthMs, pitchMs, requested: computed };
  };

  const total = { samples: 0, differing: 0, maxAbs: 0, frames: 0, framesStatusDiff: 0, maxRmsRel: 0, maxFreqRel: 0 };
  for (const [midi, decay] of [[40, 2000], [64, 500]]) {
    const signal = () => guitar([{ at: 0, midi, amp: .06, decay }]);
    let evaluations = 0;
    const counted = (t: number) => { evaluations++; return signal()(t); };
    const memo = sampledOnce(counted, 6000);
    for (const minRms of [.01, .003]) {
      const before = evaluations;
      const a = await run(signal(), minRms), b = await run(memo, minRms);
      expect(b.buffers.length).toBe(a.buffers.length);
      a.buffers.forEach((x, k) => x.forEach((v, i) => { total.samples++; const d = Math.abs(v - b.buffers[k][i]); if (d) total.differing++; if (d > total.maxAbs) total.maxAbs = d; }));
      expect(b.frames.length).toBe(a.frames.length);
      a.frames.forEach((x, k) => {
        const p = JSON.parse(x), q = JSON.parse(b.frames[k]); total.frames++;
        if (p[0] !== q[0] || p[1] !== q[1] || p[2] !== q[2]) total.framesStatusDiff++;
        if (p[3]) total.maxRmsRel = Math.max(total.maxRmsRel, Math.abs(p[3] - q[3]) / p[3]);
        if (p[4]) total.maxFreqRel = Math.max(total.maxFreqRel, Math.abs(p[4] - q[4]) / p[4]);
      });
      expect(b.last).toBe(a.last);
      console.log(JSON.stringify({ midi, minRms, lastPitchMs: { ennen: a.last, jalkeen: b.last },
        naytepyynnot: a.requested, uudetLaskennatMuistilla: evaluations - before,
        ennenMs: { synteesi: Math.round(a.synthMs), pitchy: Math.round(a.pitchMs) },
        jalkeenMs: { synteesiJaMuisti: Math.round(b.synthMs), pitchy: Math.round(b.pitchMs) } }));
    }
  }
  console.log(JSON.stringify(total));
  expect(total.framesStatusDiff).toBe(0);
  expect(total.maxAbs).toBeLessThan(1e-7);
  proto.findPitch = findPitch;
}, 120000);
`;
const tmp = 'tests/zz-217-vertailu-tmp.test.ts';
writeFileSync(tmp, helpers + body, { flag: 'wx' });
try {
  process.exitCode = spawnSync('npx', ['vitest', 'run', tmp, '--disableConsoleIntercept'], { stdio: 'inherit' }).status ?? 1;
} finally { rmSync(tmp); }
