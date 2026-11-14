import { describe, expect, it } from 'vitest';
import { midiToFreq, noteToMidi } from '../harjoittelija/music';
import { MASTER_GAIN } from '../ensikeikka/score';
import { DEMO_EXCERPT, renderDemoBand, renderGig } from '../ensikeikka/song-demo-score';

const rate = 48000;
const frame = (seconds: number) => Math.round(seconds * rate);
const letters = ['A', 'B', 'C'] as const;

function energy(samples: Float32Array) {
  return samples.reduce((sum, sample) => sum + sample * sample, 0);
}

function powerAt(samples: Float32Array, start: number, end: number, note: string) {
  const omega = 2 * Math.PI * midiToFreq(noteToMidi(note)) / rate;
  let real = 0;
  let imaginary = 0;
  for (let i = frame(start); i < frame(end); i++) {
    real += samples[i] * Math.cos(omega * i);
    imaginary += samples[i] * Math.sin(omega * i);
  }
  return real * real + imaginary * imaginary;
}

describe.each([
  { gig: 1 as const, notes: ['Bb4', 'A4', 'Eb5'], leading: 'G#4' },
  { gig: 2 as const, notes: ['Db5', 'Ab4', 'G4'], leading: 'F#4' },
])('Keikka $gig', ({ gig, notes, leading }) => {
  const band = renderDemoBand(rate, gig);
  const incomplete = renderGig(gig, null, rate);
  const mixes = letters.map(letter => renderGig(gig, letter, rate));
  const lastBar = frame(7.2);

  it('jättää keskeneräisen melodian viimeisen tahdin tyhjäksi', () => {
    expect(incomplete.subarray(lastBar).every((sample, i) => sample === band[lastBar + i])).toBe(true);
    const lead = incomplete.map((sample, i) => sample - band[i]);
    expect(powerAt(lead, 6.64, 6.96, leading)).toBeGreaterThan(10000);
  });

  it('vertaa samalla säestyksellä ja vaimentaa lopun ilman leikkautumista', () => {
    const levels = mixes.map(energy);
    expect(10 * Math.log10(Math.max(...levels) / Math.min(...levels))).toBeLessThan(.25);
    for (const [index, mix] of mixes.entries()) {
      expect(mix.length).toBe(frame(9.96));
      expect(mix[frame(DEMO_EXCERPT)]).toBe(0);
      expect(mix.subarray(0, lastBar).every((sample, i) => sample === incomplete[i])).toBe(true);
      const lead = mix.map((sample, i) => sample - incomplete[i]);
      const intended = powerAt(lead, 7.23, 7.58, notes[index]);
      for (const note of notes.filter(note => note !== notes[index])) {
        expect(intended).toBeGreaterThan(20 * powerAt(lead, 7.23, 7.58, note));
      }
      for (let bar = 0; bar < 4; bar++) {
        const span = { start: frame(bar * 2.4), end: frame((bar + 1) * 2.4) };
        const melody = mix.subarray(span.start, span.end).map((sample, i) => sample - band[span.start + i]);
        const ratio = energy(melody) / energy(band.subarray(span.start, span.end));
        expect(ratio).toBeGreaterThan(2);
        expect(ratio).toBeLessThan(16);
      }
      expect(mix.reduce((peak, sample) => Math.max(peak, Math.abs(sample)), 0) * MASTER_GAIN).toBeLessThan(.9);
      expect(Math.abs(mix.at(-1)!)).toBeLessThan(.0001);
    }
  });
});
