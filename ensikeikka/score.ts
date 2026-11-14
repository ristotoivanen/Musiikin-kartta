import { backings, endingMidi, midiToFreq, phraseStart, type Backing, type Ending } from './theory';

export const BPM = 96;
const BEAT = 60 / BPM;
export const LEAD_IN = 4 * BEAT;
export const TAKE_DURATION = 8 * BEAT;
// The kick, bass, three comp voices, and lead sum to at most .943 before
// the common gain. No individual part is normalized.
export const MASTER_GAIN = .92;

const TAU = 2 * Math.PI;
const BASS_PARTIALS = [.58, .28, .10, .04];
const COMP_PARTIALS = [.75, .18, .05, .02];
const LEAD_PARTIALS = [.48, .26, .13, .07, .04, .02];

function addVoice(
  buffer: Float32Array, rate: number, start: number, duration: number,
  sample: (time: number) => number,
) {
  const first = Math.round(start * rate);
  const frames = Math.min(Math.ceil(duration * rate), buffer.length - first);
  for (let frame = 0; frame < frames; frame++) buffer[first + frame] += sample(frame / rate);
}

function pluck(
  midi: number, partials: readonly number[], gain: number, duration: number, decay: number, release = .04,
) {
  const angularFrequency = TAU * midiToFreq(midi);
  return (time: number) => {
    let wave = 0;
    for (let partial = 0; partial < partials.length; partial++) {
      wave += partials[partial] * Math.sin((partial + 1) * angularFrequency * time)
        * Math.exp(-time * partial * decay);
    }
    const edge = Math.min(1, time / .009, Math.max(0, (duration - time) / release));
    return gain * wave * edge * Math.exp(-time * decay);
  };
}

function kick(time: number) {
  const phase = TAU * (53 * time + 3 * (1 - Math.exp(-time * 22)));
  return .125 * Math.sin(phase) * Math.min(1, time / .004) * Math.exp(-time * 23)
    * Math.max(0, Math.min(1, (.22 - time) / .02));
}

function drumNoise(seed: number, gain: number, duration: number, decay: number, snare: boolean) {
  let state = seed;
  let previous = 0;
  return (time: number) => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const noise = state / 0x80000000 - 1;
    const high = (noise - previous) * .5;
    previous = noise;
    const wave = snare ? .7 * high + .3 * Math.sin(TAU * 185 * time) : high;
    const edge = Math.min(1, time / .003, Math.max(0, (duration - time) / .012));
    return gain * wave * edge * Math.exp(-time * decay);
  };
}

export function renderBand(backing: Backing, rate: number): Float32Array {
  const buffer = new Float32Array(Math.round(TAKE_DURATION * rate));
  const { bass, voicing } = backings[backing];
  for (let beat = 0; beat < 8; beat++) {
    const start = beat * BEAT;
    if (beat % 2 === 0) {
      addVoice(buffer, rate, start, .22, kick);
      addVoice(buffer, rate, start, .48, pluck(bass, BASS_PARTIALS, .17, .48, 3.4));
    } else {
      addVoice(buffer, rate, start, .15, drumNoise(71 + beat, .09, .15, 25, true));
    }
    addVoice(buffer, rate, start + .5 * BEAT, .08, drumNoise(41 + beat, .034, .08, 43, false));
  }
  for (const beat of [0, 1.5, 2.5, 4, 5.5, 6.5]) {
    const duration = beat % 4 === 0 ? .63 : .39;
    voicing.forEach((midi, string) => {
      const start = beat * BEAT + .018 + .012 * string;
      addVoice(buffer, rate, start, duration, pluck(midi, COMP_PARTIALS, .046, duration, 3.6));
    });
  }
  return buffer;
}

export function renderPhrase(ending: Ending, rate: number): Float32Array {
  const buffer = new Float32Array(Math.round(TAKE_DURATION * rate));
  const notes = [...phraseStart, endingMidi[ending]];
  notes.forEach((midi, index) => {
    const start = LEAD_IN + index * .75 * BEAT;
    const duration = index === notes.length - 1 ? .95 : .40;
    addVoice(buffer, rate, start, duration, pluck(midi, LEAD_PARTIALS, .51, duration, 1.85));
  });
  return buffer;
}

export function renderTake(backing: Backing, ending: Ending | null, rate: number): Float32Array {
  const mix = renderBand(backing, rate);
  if (ending !== null) {
    const phrase = renderPhrase(ending, rate);
    for (let frame = 0; frame < mix.length; frame++) mix[frame] += phrase[frame];
  }
  return mix;
}

export { BASS_PARTIALS, COMP_PARTIALS, LEAD_PARTIALS, addVoice, pluck, kick, drumNoise };
