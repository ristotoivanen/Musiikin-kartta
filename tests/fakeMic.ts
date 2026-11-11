// Synteettinen äänitulo testeihin. Signaali kulkee oikean PitchLoopin ja Pitchyn läpi,
// mutta se ei korvaa oikealla kitaralla ja mikrofonilla tehtävää hyväksyntätestiä.
import { vi } from 'vitest';
import type { MicStream } from '../harjoittelija/vendor/micInput';

export type Signal = (channel: number, time: number) => number;
export const silence: Signal = () => 0;
export const sine = (frequency: number, amplitude = .1, onlyChannel?: number): Signal =>
  (channel, time) => onlyChannel !== undefined && channel !== onlyChannel ? 0 : amplitude * Math.sin(2 * Math.PI * frequency * time);
/** Kitaramainen sävel: perustaajuus on heikompi kuin toinen ja kolmas osaääni. */
export const harmonic = (frequency: number, amplitude = .1): Signal => (_, time) =>
  amplitude * [.35, 1, .7, .4, .3, .2].reduce((sum, level, i) => sum + level * Math.sin(2 * Math.PI * frequency * (i + 1) * time + i), 0) / 2;
export const noise = (amplitude = .1): Signal => (_, time) => {
  const x = Math.sin(time * 1e7 + 1.7) * 43758.5453;
  return amplitude * 2 * (x - Math.floor(x) - .5);
};
export const midiHz = (midi: number) => 440 * 2 ** ((midi - 69) / 12);

export function fakeMic({ sampleRate = 48000, channels = 1, label = 'Testitulo' } = {}) {
  const state = { signal: silence, stops: 0, analysers: [] as { disconnect: ReturnType<typeof vi.fn> }[],
    ended: null as null | (() => void), stateChanged: null as null | (() => void) };
  const context = {
    sampleRate, state: 'running' as string,
    createAnalyser() {
      const channel = state.analysers.length;
      const node = { fftSize: 2048, smoothingTimeConstant: 0, disconnect: vi.fn(),
        getFloatTimeDomainData(buffer: Float32Array) { for (let i = 0; i < buffer.length; i++) buffer[i] = state.signal(channel, i / sampleRate); } };
      state.analysers.push(node);
      return node;
    },
    createChannelSplitter() { return { connect: vi.fn(), disconnect: vi.fn() }; },
    addEventListener(_: string, listener: () => void) { state.stateChanged = listener; },
  };
  const track = { stop: vi.fn(), addEventListener(type: string, listener: () => void) { if (type === 'ended') state.ended = listener; } };
  const mic = { context, source: { connect: vi.fn(), disconnect: vi.fn() }, stream: { getTracks: () => [track] },
    label, deviceId: 'fake', channelCount: channels, stop: () => { state.stops++; } } as unknown as MicStream;
  return { mic, state, context, track };
}

/** Käsin askellettava kello ja animaatiokehys. */
export function fakeClock() {
  let now = 0, pending: FrameRequestCallback | null = null;
  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => { pending = callback; return 1; });
  vi.stubGlobal('cancelAnimationFrame', () => { pending = null; });
  vi.spyOn(performance, 'now').mockImplementation(() => now);
  const frame = (ms = 16) => { now += ms; const callback = pending; pending = null; callback?.(now); };
  return { frame, run: (ms: number, step = 16) => { for (let t = 0; t < ms; t += step) frame(step); }, get now() { return now; } };
}
