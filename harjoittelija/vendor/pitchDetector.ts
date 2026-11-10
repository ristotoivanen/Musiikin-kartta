// Pitch detection loop built on `pitchy` (McLeod Pitch Method).
// Emits "stable note" events when successive frames agree on the same MIDI note.

import { PitchDetector as Pitchy } from 'pitchy';
import { nearestMidi } from './notes';
import type { MicStream } from './micInput';

export interface PitchFrame {
  frequency: number;
  clarity: number;
  midi: number;
  cents: number;
  rms: number;
}

export interface StableNoteEvent {
  midi: number;
  frequency: number;
  timestamp: number;
}

export interface PitchDetectorOptions {
  fftSize?: number;
  minClarity?: number;
  minRms?: number;
  stabilityFrames?: number;
  stabilityMs?: number;
  centsTolerance?: number;
  minFreq?: number;
  maxFreq?: number;
  onFrame?: (f: PitchFrame | null) => void;
  onStableNote?: (e: StableNoteEvent) => void;
}

export class PitchLoop {
  private analyser: AnalyserNode;
  private detector: Pitchy<Float32Array>;
  private buffer: Float32Array<ArrayBuffer>;
  private rafId: number | null = null;
  private consecutive: { midi: number; count: number; since: number } | null = null;
  private lastEmittedMidi: number | null = null;
  private running = false;
  private paused = false;
  private gate = new StabilityGate();

  constructor(private mic: MicStream, private opts: PitchDetectorOptions = {}) {
    const fftSize = opts.fftSize ?? 8192;
    this.analyser = mic.context.createAnalyser();
    this.analyser.fftSize = fftSize;
    this.analyser.smoothingTimeConstant = 0;
    mic.source.connect(this.analyser);
    this.buffer = new Float32Array(new ArrayBuffer(this.analyser.fftSize * 4));
    this.detector = Pitchy.forFloat32Array(this.analyser.fftSize);
    this.detector.minVolumeDecibels = -60;
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.consecutive = null;
    this.lastEmittedMidi = null;
    const tick = () => {
      if (!this.running) return;
      if (!this.paused) this.processFrame();
      this.rafId = requestAnimationFrame(tick);
    };
    this.rafId = requestAnimationFrame(tick);
  }

  stop() {
    this.running = false;
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    this.rafId = null;
    this.consecutive = null;
    this.lastEmittedMidi = null;
    this.gate.reset();
    this.analyser.disconnect();
  }

  /** Stop processing frames without tearing down the audio graph. */
  pause() {
    this.paused = true;
    this.consecutive = null;
    this.lastEmittedMidi = null;
    // Clear the detected display so tones/speech don't leak info.
    this.opts.onFrame?.(null);
    this.gate.reset();
  }

  /** Resume processing. Clears any residual state so the next note is fresh. */
  resume() {
    this.paused = false;
    this.consecutive = null;
    this.lastEmittedMidi = null;
    this.gate.reset();
  }

  /** Allow the UI to read current RMS for a mic meter. */
  getRms(): number {
    this.analyser.getFloatTimeDomainData(this.buffer);
    return computeRms(this.buffer);
  }

  /** Reset the stable-note state so the next correct note is freshly emitted. */
  armForNextNote() {
    this.consecutive = null;
    this.lastEmittedMidi = null;
  }

  private processFrame() {
    const {
      minClarity = 0.9,
      minRms = 0.01,
      stabilityFrames = 3,
      stabilityMs = 240,
      centsTolerance = 35,
      minFreq = 70,
      maxFreq = 1450,
      onFrame,
      onStableNote,
    } = this.opts;

    this.analyser.getFloatTimeDomainData(this.buffer);
    const rms = computeRms(this.buffer);

    if (rms < minRms) {
      this.consecutive = null;
      this.lastEmittedMidi = null;
      onFrame?.(null);
      this.gate.feed(null, performance.now(), stabilityMs);
      return;
    }

    const [frequency, clarity] = this.detector.findPitch(
      this.buffer,
      this.mic.context.sampleRate
    );

    if (
      clarity < minClarity ||
      !isFinite(frequency) ||
      frequency < minFreq ||
      frequency > maxFreq
    ) {
      this.consecutive = null;
      onFrame?.(null);
      this.gate.feed(null, performance.now(), stabilityMs);
      return;
    }

    const { midi, cents } = nearestMidi(frequency);
    const frame: PitchFrame = { frequency, clarity, midi, cents, rms };
    onFrame?.(frame);

    // Reject if far off a semitone center — implies unstable transient.
    if (Math.abs(cents) > centsTolerance) {
      this.consecutive = null;
      this.gate.feed(null, performance.now(), stabilityMs);
      return;
    }

    if (this.consecutive && this.consecutive.midi === midi) {
      this.consecutive.count += 1;
    } else {
      this.consecutive = { midi, count: 1, since: performance.now() };
    }

    if (
      this.consecutive.count >= stabilityFrames &&
      this.gate.feed(midi, performance.now(), stabilityMs) !== null
    ) {
      this.lastEmittedMidi = midi;
      onStableNote?.({ midi, frequency, timestamp: performance.now() });
    }
  }
}

// Adaptation: require elapsed stability time, then silence before another answer.
// A single held tone must never answer multiple questions or create repeated errors.
export class StabilityGate {
  private current: { midi: number; since: number } | null = null;
  private emitted = false;
  private silentSince: number | null = null;
  reset() { this.current = null; this.emitted = true; this.silentSince = null; }
  feed(midi: number | null, now: number, stableMs: number): number | null {
    if (midi === null) {
      this.current = null;
      this.silentSince ??= now;
      if (now - this.silentSince >= 140) this.emitted = false;
      return null;
    }
    this.silentSince = null;
    if (this.emitted) return null;
    if (!this.current || this.current.midi !== midi) this.current = { midi, since: now };
    if (now - this.current.since < stableMs) return null;
    this.emitted = true;
    return midi;
  }
}

function computeRms(buf: Float32Array): number {
  let sum = 0;
  for (let i = 0; i < buf.length; i++) sum += buf[i] * buf[i];
  return Math.sqrt(sum / buf.length);
}
