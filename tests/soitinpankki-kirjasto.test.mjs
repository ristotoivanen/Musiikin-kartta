import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { SteelSampleBank, sampleKey, resolveSamples, scheduleSteelNotes } from '../assets/soitinpankki/steel-sampler.mjs';
import { scores } from '../testit/soitinpankki-kirjasto/scores.mjs';

const root = new URL('../assets/soitinpankki/', import.meta.url);
const manifest = JSON.parse(readFileSync(new URL('meta-steel-v1.json', root), 'utf8'));

function fakeContext() {
  const sources = [];
  const gains = [];
  return {
    currentTime: 0, destination: {}, sources, gains,
    createGain() {
      const values = [];
      const gain = {
        value: 1, values,
        setValueAtTime(value, time) { values.push(['set', value, time]); },
        linearRampToValueAtTime(value, time) { values.push(['ramp', value, time]); },
        cancelScheduledValues(time) { values.push(['cancel', time]); },
      };
      const node = { gain, connect() { return this; }, disconnect() {} };
      gains.push(node); return node;
    },
    createBufferSource() {
      const node = {
        playbackRate: { value: 1 }, buffer: null, starts: [], stops: [],
        connect() { return this; }, disconnect() {},
        start(time) { this.starts.push(time); },
        stop(time) { this.stops.push(time); },
      };
      sources.push(node); return node;
    },
    async decodeAudioData(data) { return { duration: 5, byteLength: data.byteLength }; },
  };
}

describe('#132 Meta Steel -kirjastopilotin rajapinta', () => {
  it('manifesti kattaa täsmälleen kahdeksan Vel02-näytettä ja 16 tarkistettua jakelutiedostoa', () => {
    expect(manifest.schema).toBe('musiikin-kartta-instrument-bank-v1');
    expect(manifest.status).toBe('pilot-only');
    expect(manifest.complete).toBe(false);
    expect(manifest.availableLayers).toEqual(['Vel02']);
    expect(manifest.origin.version).toBe('meta-steel-guitar-v1.0.0');
    expect(manifest.origin.license).toBe('CC0-1.0');
    expect(manifest.samples).toHaveLength(8);
    const found = [];
    for (const sample of manifest.samples) {
      expect(sample.sourceSha256).toMatch(/^[a-f0-9]{64}$/);
      expect(sample.layer).toBe('Vel02');
      for (const [format, info] of Object.entries(sample.files)) {
        expect(info.path).toBe(`audio/steel-${sample.string}-${sample.midi}.${format}`);
        const bytes = readFileSync(new URL(info.path, root));
        expect(bytes.byteLength).toBe(info.bytes);
        expect(createHash('sha256').update(bytes).digest('hex')).toBe(info.sha256);
        expect(info.onsetMs).toBeGreaterThanOrEqual(0);
        expect(info.onsetMs).toBeLessThan(80);
        found.push(info.path.split('/').at(-1));
      }
    }
    expect(readdirSync(new URL('audio/', root)).sort()).toEqual(found.sort());
  });

  it('hylkää puuttuvan sävelen, artikulaation ja voimakkuuskerroksen ilman korvausta', () => {
    expect(sampleKey(scores.e2[0])).toBe('6:40:Vel02');
    expect(resolveSamples(manifest, scores.e2).size).toBe(1);
    expect(() => resolveSamples(manifest, [{ ...scores.e2[0], layer: 'Vel03' }])).toThrow('Näyte puuttuu');
    expect(() => resolveSamples(manifest, [{ ...scores.e2[0], articulation: 'palmMute' }])).toThrow('Artikulaatiota');
    expect(() => resolveSamples(manifest, [{ ...scores.e2[0], midi: 41 }])).toThrow('Näyte puuttuu');
  });

  it('ajastaa E2-iskut, kielikohtaisen korvaamisen ja 150 ms loppuvaimennuksen', () => {
    const context = fakeContext();
    const prepared = new Map([['6:40:Vel02', { buffer: { duration: 5 }, onset: .005, rate: 1 }]]);
    const player = scheduleSteelNotes(context, scores.e2, prepared, { startAt: .12, gain: .5 });
    const beat = 60 / 72;
    expect(context.sources).toHaveLength(4);
    expect(context.sources.map(s => s.starts[0]).sort((a, b) => a - b))
      .toEqual([0, 1, 2, 3].map(i => .12 + i*beat - .005));
    expect(context.sources.map(s => s.stops[0]).sort((a, b) => a - b))
      .toEqual([beat, 2*beat, 3*beat, 4*beat+.15].map(t => .12+t));
    const fades = context.gains.slice(1).flatMap(g => g.gain.values);
    expect(fades.some(e => e[0] === 'ramp' && Math.abs(e[2] - (.12 + 4*beat + .15)) < 1e-9)).toBe(true);
    player.stop();
    expect(context.gains[0].gain.values.at(-1)[0]).toBe('ramp');
  });

  it('M2:ssa neljä kuultavaa E2-iskua vuorottelee taukotahdin kanssa neljästi', () => {
    const beat = 60 / 72;
    expect(scores.m2).toHaveLength(16);
    for (let i = 0; i < 16; i++) {
      expect(scores.m2[i].at).toBeCloseTo((4 + Math.floor(i/4)*8 + i%4)*beat);
      expect(scores.m2[i].releaseAt).toBeCloseTo(scores.m2[i].at + beat);
    }
    // M3:n tausta jatkuu viimeisen malliäänen jälkeen viimeisen taukotahdin loppuun.
    expect(scores.m2.at(-1).releaseAt + .15).toBeLessThan(30);
  });

  it('lataa vain tarvitun näytteen, välimuistittaa ja kunnioittaa peruutusta', async () => {
    const context = fakeContext();
    const requests = [];
    const fetcher = async url => {
      requests.push(String(url));
      return String(url).endsWith('.json')
        ? { ok: true, json: async () => manifest }
        : { ok: true, arrayBuffer: async () => new Uint8Array([1, 2, 3]).buffer };
    };
    const bank = new SteelSampleBank(context, new URL('https://example.invalid/assets/soitinpankki/meta-steel-v1.json'),
      { fetcher, formats: ['ogg', 'm4a'] });
    const first = await bank.prepare(scores.e2);
    expect(first.samples.size).toBe(1);
    expect(first.stats.bytes).toBe(3);
    expect(requests).toHaveLength(2);
    const second = await bank.prepare(scores.e2);
    expect(second.stats.bytes).toBe(0);
    expect(second.stats.cacheHits).toBe(1);
    expect(requests).toHaveLength(2);
    const controller = new AbortController();
    controller.abort();
    await expect(bank.prepare(scores.e2, { signal: controller.signal })).rejects.toThrow();
  });
});
