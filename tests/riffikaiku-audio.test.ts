// Riffikaiun BrowserAudio: malli ja virtuaalikitaran näppäilyt soivat omilla soittimillaan
// (kaksi ReferencePlayeria, kummallakin oma master-vahvistin samassa äänikontekstissa).
import { afterEach, describe, expect, it, vi } from 'vitest';
import { releaseAudio } from '../harjoittelija/audio';
import { BrowserAudio } from '../riffikaiku/audioAdapter';

type FakeGain = { connected: boolean; master: boolean; peak: number; start: number };
function stubContext() {
  const gains: FakeGain[] = [];
  const destination = {};
  vi.stubGlobal('AudioContext', class {
    state = 'running'; currentTime = 0; destination = destination; sampleRate = 48000;
    resume() { return Promise.resolve(); } close() { return Promise.resolve(); }
    createPeriodicWave() { return {}; }
    createGain() {
      const g: FakeGain = { connected: false, master: false, peak: 0, start: 0 };
      gains.push(g);
      return {
        gain: { setValueAtTime: (_v: number, t: number) => { g.start = t; }, linearRampToValueAtTime: (v: number) => { g.peak = Math.max(g.peak, v); }, exponentialRampToValueAtTime: () => {} },
        connect: (target: unknown) => { g.connected = true; g.master = target === destination; },
        disconnect: () => { g.connected = false; },
      };
    }
    createOscillator() { return { connect() {}, disconnect() {}, frequency: { value: 0 }, type: '', setPeriodicWave() {}, start() {}, stop() {} }; }
  });
  return gains;
}

afterEach(() => { releaseAudio(); vi.unstubAllGlobals(); vi.useRealTimers(); });

describe('BrowserAudio: malli ja omat näppäilyt eivät häiritse toisiaan', () => {
  it('näppäily mallin aikana soi omalla soittimellaan; stopReference pysäyttää vain mallin; yhteinen huippu pysyy maltillisena', async () => {
    vi.useFakeTimers();
    const gains = stubContext();
    const audio = new BrowserAudio();
    let done: boolean | undefined;
    void audio.playModel([59, 60, 62, 60], () => {}).then(d => { done = d; });
    await vi.advanceTimersByTimeAsync(0);
    audio.pluck(64);
    await vi.advanceTimersByTimeAsync(0);
    const masters = gains.filter(g => g.master);
    expect(masters).toHaveLength(2);
    expect(masters.every(g => g.connected)).toBe(true); // painallus ei katkaissut mallia
    const [model, pluck] = masters;
    audio.stopReference();
    await vi.advanceTimersByTimeAsync(0);
    expect(done).toBe(false);
    expect(model.connected).toBe(false);
    expect(pluck.connected).toBe(true); // pelaajan sävel soi loppuun
    // Jokainen sävel huipussaan 0,22; malli ja painallus yhtä aikaa enintään 0,44 (< 1, ei leikkautumista).
    const notes = gains.filter(g => !g.master);
    expect(notes.every(g => g.peak <= .22)).toBe(true);
    expect(notes.slice(0, 1).concat(notes.at(-1)!).reduce((sum, g) => sum + g.peak, 0)).toBeLessThanOrEqual(.5);
    // Uusi painallus katkaisee vain edellisen painalluksen (sama sävel kahdesti = kaksi näppäystä).
    audio.pluck(64); await vi.advanceTimersByTimeAsync(0);
    expect(pluck.connected).toBe(false);
    // stopModel (lopetus) pysäyttää molemmat.
    audio.stopModel();
    expect(gains.filter(g => g.master && g.connected)).toHaveLength(0);
  });
});
