import { describe, expect, it } from 'vitest';
import { midiToFreq, noteToMidi } from '../harjoittelija/music';
import { MASTER_GAIN } from '../ensikeikka/score';
import { DEMO_DURATION, DEMO_EXCERPT, renderDemo, renderDemoBand, type DemoEnding } from '../ensikeikka/song-demo-score';

const rate = 48_000;
const frame = (seconds: number) => Math.round(seconds * rate);
const endings = ['A', 'B', 'C'] as const;
const lastBar = frame(7.2);
const mixes = endings.map(ending => renderDemo(ending, rate));
const band = renderDemoBand(rate);
const rms = (samples: Float32Array) => Math.sqrt(samples.reduce((sum, sample) => sum + sample * sample, 0) / samples.length);

function powerAt(take: Float32Array, start: number, note: string) {
  const omega = 2 * Math.PI * midiToFreq(noteToMidi(note)) / rate;
  let real = 0;
  let imaginary = 0;
  for (let i = frame(.03); i < frame(.38); i++) {
    const sample = take[frame(start) + i] - band[frame(start) + i];
    real += sample * Math.cos(omega * i);
    imaginary += sample * Math.sin(omega * i);
  }
  return real * real + imaginary * imaginary;
}

describe('Löydä kotiin -kuunteludemo', () => {
  it('pitää säestyksen ja melodian samoina viimeisen tahdin alkuun asti', () => {
    expect(DEMO_EXCERPT).toBe(4.8);
    expect(DEMO_DURATION).toBeCloseTo(9.96);
    const prefix = mixes[0].subarray(0, lastBar);
    for (const mix of mixes) {
      expect(mix.length).toBe(frame(9.96));
      expect(mix.subarray(0, lastBar).every((sample, i) => sample === prefix[i])).toBe(true);
      expect(mix[frame(DEMO_EXCERPT)]).toBe(0);
    }
    const firstNotes = ['A3', 'C4', 'E4', 'C4', 'D4', 'F4', 'E4', 'D4', 'E4', 'G#4', 'B4', 'G#4'];
    firstNotes.forEach((note, index) => {
      expect(powerAt(mixes[0], index * .6, note)).toBeGreaterThan(10_000);
    });
  });

  it('erottaa loppusävelet, säilyttää tason ja jättää äänen vaimenemaan', () => {
    const expected: Record<DemoEnding, string> = { A: 'G#4', B: 'A4', C: 'B4' };
    const levels = mixes.map(mix => rms(mix));
    expect(20 * Math.log10(Math.max(...levels) / Math.min(...levels))).toBeLessThan(.5);
    for (const [i, ending] of endings.entries()) {
      const mix = mixes[i];
      const intended = powerAt(mix, 7.2, expected[ending]);
      for (const other of endings.filter(other => other !== ending)) {
        expect(intended).toBeGreaterThan(20 * powerAt(mix, 7.2, expected[other]));
      }
      const peak = mix.reduce((max, sample) => Math.max(max, Math.abs(sample)), 0);
      expect(peak * MASTER_GAIN).toBeLessThan(.9);
      expect(rms(mix.subarray(frame(9.5), frame(9.6)))).toBeGreaterThan(.01);
      expect(Math.abs(mix.at(-1)!)).toBeLessThan(.0001);
    }
  });
});
