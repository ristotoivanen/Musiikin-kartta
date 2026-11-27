import { readFileSync } from 'node:fs';

export type Track = 'backing' | 'guitar' | 'vocals';
export type Version = 'normaali' | 'akustinen';
export type Mutation = '' | 'alignment' | 'decoder-delay' | 'length-missing' | 'length-extra' |
  'seam' | 'tail-stop' | 'mp3-wrong' | 'mp3-corrupt' | 'pool-copy' | 'slow-wait' | 'slow-stall' |
  'pcm-step' | 'decoder-pattern';

type Slice = [from: number, to: number, skip: number];
type ReferenceWindow = { start: number; count: number; slices: Record<string, Slice>; delta: [string | null, string | null] };
type Stem = { url: string; bytes: number; sha256: string; windows: Record<string, ReferenceWindow> };
type Reference = { length: number; tail: number; tracks: Record<Track, Stem> };

export const references: Record<Version, Reference> = JSON.parse(readFileSync(
  new URL('./d2-audio-reference.json', import.meta.url), 'utf8'));
export const d2Mutation = (process.env.D2_QA_MUTATION ?? '') as Mutation;

type AudioHook = { context: AudioContext; player: {
  duration: number;
  bufferBytes: number;
  decoderDelay: number;
  data: Record<Track, { bytes: Uint8Array<ArrayBuffer> }>;
  inputs: Record<Track, GainNode>;
  events: { kind: string; dekooderiviive?: number }[];
  readRange(track: Track, start: number, count: number): Promise<Float32Array[]>;
} };
type Source = { track: Track; buffer: AudioBuffer; when: number; offset: number; stop?: number; id: number };
type Probe = { sources: Source[]; snapshots: Record<string, Float32Array[]>; history: number[]; phase: string };
type TestWindow = Window & typeof globalThis & { __kappaleD1: AudioHook; d2AudioProbe: Probe };

export function installD2AudioProbe(mutation: Mutation) {
  const w = window as unknown as TestWindow;
  const probe: Probe = { sources: [], snapshots: {}, history: [], phase: 'initial' };
  w.d2AudioProbe = probe;
  const buffers = new WeakMap<AudioBuffer, number>();
  const create = BaseAudioContext.prototype.createBufferSource;
  BaseAudioContext.prototype.createBufferSource = function () {
    const source = create.call(this);
    const connect = source.connect;
    const start = source.start;
    const stop = source.stop;
    let input: AudioNode | AudioParam | undefined;
    let observed: Source | undefined;
    source.connect = function (...args: unknown[]) {
      const result = Reflect.apply(connect, this, args);
      input = args[0] as AudioNode | AudioParam;
      return result;
    };
    source.start = function (...args: [when?: number, offset?: number, duration?: number]) {
      const [when = 0, offset = 0] = args;
      const hook = w.__kappaleD1;
      const isPlayer = hook?.context === this.context && this.buffer;
      const whenToUse = mutation === 'seam' && isPlayer && probe.sources.length >= 3 && probe.phase === 'initial'
        ? when + 1 / 48000 : when;
      Reflect.apply(start, this, whenToUse !== when ? [whenToUse, offset, ...args.slice(2)] : args);
      if (!isPlayer || !this.buffer) return;
      const track = (Object.keys(hook.player.inputs) as Track[]).find(track => hook.player.inputs[track] === input);
      if (!track) return;
      const id = buffers.get(this.buffer) ?? probe.history.length;
      if (!buffers.has(this.buffer)) {
        probe.history.push(id);
        buffers.set(this.buffer, id);
      }
      observed = { track, buffer: this.buffer, when: whenToUse, offset, id };
      probe.sources.push(observed);
    };
    source.stop = function (...args: [when?: number]) {
      const [when] = args;
      const whenToUse = mutation === 'tail-stop' && when !== undefined && probe.phase === 'tail' &&
        probe.sources.length <= 3 ? when + 1 / 48000 : when;
      Reflect.apply(stop, this, whenToUse !== when ? [whenToUse] : args);
      if (observed && observed.stop === undefined) observed.stop = whenToUse;
    };
    return source;
  };
  if (mutation === 'pool-copy') {
    const copy = AudioBuffer.prototype.copyToChannel;
    AudioBuffer.prototype.copyToChannel = function (samples, channel, offset) {
      if (samples.length === 480000 && channel === 1 && offset === 0) {
        const damaged = samples.slice();
        damaged[1000] += 0.125;
        copy.call(this, damaged, channel, offset);
      } else {
        copy.call(this, samples, channel, offset);
      }
    };
  }
}

export function snapshotD2Sources({ keys, lengths, priorIds }: { keys: string[]; lengths: number[]; priorIds?: number[] }) {
  const probe = (window as unknown as TestWindow).d2AudioProbe;
  const sources = probe.sources.slice(0, keys.length * 3);
  const failures: string[] = [];
  const fail = (message: string) => failures.push(message);
  const frame = (seconds: number) => {
    const exact = seconds * 48000;
    const rounded = Math.round(exact);
    // Only correct the round-trip error of frame -> seconds -> frame.
    if (!Number.isFinite(exact) || Math.abs(exact - rounded) > 4 * Number.EPSILON * Math.max(1, Math.abs(exact))) {
      fail('source time is not a whole sample frame: ' + seconds);
    }
    return rounded;
  };
  if (sources.length !== keys.length * 3) fail('unexpected source count: ' + sources.length);
  for (const [index, key] of keys.entries()) {
    const group = sources.slice(index * 3, index * 3 + 3);
    const starts = new Set(group.map(source => frame(source.when)));
    const stops = new Set(group.map(source => frame(source.stop ?? NaN)));
    if (starts.size !== 1 || stops.size !== 1 || new Set(group.map(source => source.track)).size !== 3) {
      fail(key + ': tracks are not sample-synchronous');
    }
    if (index > 0 && group[0] && frame(group[0].when) !== frame(sources[index * 3 - 1].stop ?? NaN)) {
      fail(key + ': seam gap or overlap');
    }
    for (const { track, buffer, when, offset, stop, id } of group) {
      const start = frame(offset);
      const count = frame(stop ?? NaN) - frame(when);
      if (count !== lengths[index] || start !== 0 || buffer.length !== 480000 ||
          buffer.numberOfChannels !== 2 || buffer.sampleRate !== 48000) {
        fail(key + '/' + track + ': wrong scheduled sample count or buffer shape');
        continue;
      }
      if (index === 0 && priorIds && !priorIds.includes(id)) fail(key + '/' + track + ': expected a reused buffer');
      probe.snapshots[key + '/' + track] = [0, 1].map(channel => {
        const pcm = new Float32Array(count);
        buffer.copyFromChannel(pcm, channel, start);
        return pcm;
      });
    }
  }
  return failures;
}

export async function verifyD2Audio({ reference, mode, mutation }: {
  reference: Reference; mode: 'B5' | 'B6'; mutation: Mutation;
}) {
  const w = window as unknown as TestWindow;
  const { context, player } = w.__kappaleD1;
  const failures: string[] = [];
  const rate = 48000;
  const decoder = new OfflineAudioContext(2, 1, rate);
  const hex = async (bytes: BufferSource) => Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes)),
    octet => octet.toString(16).padStart(2, '0')).join('');
  const trackNames = Object.keys(reference.tracks) as Track[];
  const fetchStem = async (stem: Stem) => {
    const response = await fetch(stem.url, { cache: 'no-store' });
    if (!response.ok) throw new Error('Reference HTTP ' + response.status);
    const bytes = await response.arrayBuffer();
    if (bytes.byteLength !== stem.bytes || await hex(bytes) !== stem.sha256) throw new Error('Reference MP3 SHA-256: ' + stem.url);
    return bytes;
  };
  const decode = async (bytes: ArrayBuffer, window: ReferenceWindow, delay: number) => {
    const [from, to, skip] = window.slices[delay];
    const buffer = await decoder.decodeAudioData(bytes.slice(from, to));
    if (buffer.numberOfChannels !== 2 || buffer.sampleRate !== rate || buffer.length < skip + window.count) {
      throw new Error('Invalid reference segment shape at ' + window.start);
    }
    return [0, 1].map(channel => buffer.getChannelData(channel).subarray(skip, skip + window.count));
  };
  const deltaStats = async (actual: Float32Array, whole: Float32Array, start: number) => {
    const serial = new DataView(new ArrayBuffer(actual.length * 8));
    let count = 0, max = 0, squared = 0, first = null;
    for (let i = 0; i < actual.length; i++) {
      const delta = actual[i] - whole[start + i];
      if (!Number.isFinite(delta)) throw new Error('Non-finite PCM sample at ' + (start + i));
      serial.setFloat64(i * 8, delta || 0, true);
      if (!delta) continue;
      count++;
      max = Math.max(max, Math.abs(delta));
      squared += delta * delta;
      first ??= start + i;
    }
    return { sha256: count ? await hex(serial.buffer) : null, count, max, rms: Math.sqrt(squared / actual.length), first };
  };
  const sameSamples = (actual: Float32Array[] | undefined, expected: Float32Array[], window: ReferenceWindow, label: string) => {
    if (actual?.length !== 2 || actual.some(pcm => pcm.length !== window.count)) {
      failures.push(label + ': wrong PCM sample count or channel count');
      return;
    }
    for (const [channel, pcm] of actual.entries()) {
      let first = -1;
      let mismatches = 0;
      for (let i = 0; i < pcm.length; i++) {
        if (!Number.isFinite(pcm[i]) || !Object.is(pcm[i], expected[channel][i])) {
          if (first === -1) first = window.start + i;
          mismatches++;
        }
      }
      if (mismatches) failures.push(label + ' channel ' + channel + ': PCM mismatch count=' + mismatches + ' first=' + first);
    }
  };

  if (context.sampleRate !== rate || player.duration !== reference.length / rate) failures.push('Wrong player sample rate or duration');
  for (const track of trackNames) {
    const stem = reference.tracks[track];
    const stored = player.data[track].bytes;
    if (stored.byteLength !== stem.bytes || await hex(stored) !== stem.sha256) failures.push(track + ': D2 MP3 SHA-256 mismatch');
  }
  if (failures.length) return failures;

  const anchorStem = reference.tracks.guitar;
  const anchor = anchorStem.windows['read-480000'];
  const guitarBytes = await fetchStem(anchorStem);
  const guitarFull = await decoder.decodeAudioData(guitarBytes.slice(0));
  const anchorWhole = guitarFull.getChannelData(0);
  let peak = 0;
  for (let i = anchor.start; i < anchor.start + anchor.count; i++) peak = Math.max(peak, Math.abs(anchorWhole[i]));
  if (peak === 0) throw new Error('Independent delay anchor is silent');
  const delays = [];
  const anchorStats = [];
  for (const key of Object.keys(anchor.slices)) {
    const delay = Number(key);
    const pcm = await decode(guitarBytes, anchor, delay);
    const stats = await deltaStats(pcm[0], anchorWhole, anchor.start);
    anchorStats.push({ delay, ...stats });
    if (!stats.count || stats.sha256 === anchor.delta[0]) delays.push(delay);
  }
  if (delays.length !== 1) return ['Independent decoder delay is ambiguous or unknown: ' + JSON.stringify(anchorStats)];
  const delay = delays[0];
  // This mutation changes the actual value consumed by D2 readRange.
  if (mutation === 'decoder-delay') player.decoderDelay = delay === 0 ? 529 : 0;
  if (player.decoderDelay !== delay || !player.events.some(event => event.kind === 'kalibroitu' && event.dekooderiviive === delay)) {
    failures.push('D2 decoder delay differs from independent anchor: ' + player.decoderDelay + ' vs ' + delay);
  }

  for (const track of mode === 'B6' ? ['vocals'] as const : trackNames) {
    const stem = reference.tracks[track];
    const bytes = track === 'guitar' ? guitarBytes : await fetchStem(stem);
    const full = track === 'guitar' ? guitarFull : await decoder.decodeAudioData(bytes.slice(0));
    if (full.length !== reference.length || full.sampleRate !== rate || full.numberOfChannels !== 2) {
      failures.push(track + ': wrong full decode shape');
      continue;
    }
    const keys = mode === 'B5'
      ? Object.keys(stem.windows).filter(key => key !== 'read-5000000' && key !== 'read-' + (reference.length - 2000))
      : [0, 480000, 5000000, reference.length - 2000].map(start => 'read-' + start);
    for (const key of keys) {
      const window = stem.windows[key];
      const label = track + '/' + key;
      const expected = await decode(bytes, window, delay);
      if (key.startsWith('pool-')) {
        sameSamples(w.d2AudioProbe.snapshots[key + '/' + track], expected, window, label);
        if (key === 'pool-0') {
          const loop = w.d2AudioProbe.snapshots['loop-start/' + track];
          sameSamples(loop, expected, window, track + '/loop-start');
        }
      } else {
        const mutate = track === 'guitar' && key === 'read-480000';
        const shift = mutate && mutation === 'alignment' ? 1 : 0;
        const count = window.count + (mutate && mutation === 'length-extra' ? 1 : 0) -
          (mutate && mutation === 'length-missing' ? 1 : 0);
        const pcm = await player.readRange(track, window.start + shift, count);
        if (mutate && mutation === 'pcm-step') pcm[0][1000] += 1 / 131072;
        sameSamples(pcm, expected, window, label);
      }
      if (mutation === 'decoder-pattern' && track === 'guitar' && key === 'read-480000') {
        expected[0][1000] += 1 / 131072;
      }
      for (const [channel, pcm] of expected.entries()) {
        const stats = await deltaStats(pcm, full.getChannelData(channel), window.start);
        if (stats.count && stats.sha256 !== window.delta[channel]) {
          failures.push(label + ' channel ' + channel + ': unknown decoder delta ' + JSON.stringify(stats));
        }
      }
    }
  }
  return failures;
}
