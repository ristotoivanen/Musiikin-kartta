import { LEAD_IN, MASTER_GAIN, renderTake } from './score';
import type { Backing, Ending } from './theory';

function createAudioContext() {
  const Context = globalThis.AudioContext ??
    (globalThis as typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Context) throw new Error('Web Audio puuttuu');
  return new Context();
}

function resumeAudio(context: AudioContext, signal: AbortSignal): Promise<void> {
  let timeout: ReturnType<typeof setTimeout>;
  let cancel: () => void;
  const waiting = new Promise<void>((resolve, reject) => {
    // Safari voi jättää resume()-lupauksen odottamaan. Aikaraja sallii uuden yrityksen.
    timeout = setTimeout(() => reject(new Error('Äänentoisto ei käynnistynyt ajoissa')), 4000);
    cancel = resolve;
    signal.addEventListener('abort', cancel, { once: true });
    context.resume().then(() => {
      if (context.state === 'running') resolve();
      else reject(new Error('Äänentoisto ei käynnistynyt'));
    }, reject);
  });
  return waiting.finally(() => {
    clearTimeout(timeout);
    signal.removeEventListener('abort', cancel);
  });
}

type PlayingTake = {
  source: AudioBufferSourceNode;
  master: GainNode;
  removeStateListener: () => void;
};

export class TakePlayer {
  private context?: AudioContext;
  private request?: AbortController;
  private playing?: PlayingTake;

  constructor(private readonly createContext = createAudioContext) {}

  /** Kutsu suoraan painalluksesta, jotta myös ensimmäinen soitto saa selaimen luvan. */
  play(backing: Backing, ending: Ending | null, onEnded: () => void, excerpt = false): Promise<void> {
    return this.playSamples(rate => renderTake(backing, ending, rate), excerpt ? LEAD_IN : 0, () => onEnded());
  }

  async playSamples(render: (rate: number) => Float32Array, offset: number, onEnded: (completed: boolean) => void): Promise<void> {
    this.stop();
    const request = this.request = new AbortController();
    try {
      if (!this.context || this.context.state === 'closed') this.context = this.createContext();
      const context = this.context;
      if (context.state !== 'running') await resumeAudio(context, request.signal);
      if (request.signal.aborted) return;

      const samples = render(context.sampleRate);
      const buffer = context.createBuffer(1, samples.length, context.sampleRate);
      buffer.getChannelData(0).set(samples);
      const source = context.createBufferSource();
      const master = context.createGain();
      const finish = (completed: boolean) => {
        if (this.request !== request) return;
        this.stop();
        onEnded(completed);
      };
      const stateChanged = () => {
        if (context.state !== 'running') finish(false);
      };
      this.playing = {
        source,
        master,
        removeStateListener: () => context.removeEventListener('statechange', stateChanged),
      };
      source.buffer = buffer;
      source.onended = () => finish(context.state === 'running');
      master.gain.value = MASTER_GAIN;
      source.connect(master);
      master.connect(context.destination);
      context.addEventListener('statechange', stateChanged);
      source.start(0, offset);
    } catch (error) {
      if (request.signal.aborted) return;
      this.stop();
      throw error;
    }
  }

  stop() {
    this.request?.abort();
    this.request = undefined;
    const playing = this.playing;
    this.playing = undefined;
    if (!playing) return;
    const { source, master, removeStateListener } = playing;
    removeStateListener();
    source.onended = null;
    source.disconnect();
    master.disconnect();
    try { source.stop(); } catch { /* Käynnistys saattoi epäonnistua ennen start()-kutsua. */ }
  }

  dispose() {
    this.stop();
    const context = this.context;
    this.context = undefined;
    if (context && context.state !== 'closed') void context.close().catch(() => {});
  }
}
