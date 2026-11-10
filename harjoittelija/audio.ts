import { midiToFreq } from './music';
import { openMic, type MicStream } from './vendor/micInput';
import { PitchLoop, type PitchDetectorOptions } from './vendor/pitchDetector';
export function micError(error: unknown): string {
  const name = error instanceof Error ? error.name : '';
  if (['NotAllowedError','SecurityError'].includes(name)) return 'Mikrofonilupa evättiin. Voit sallia mikrofonin selaimen sivustoasetuksista tai vastata otelaudalla.';
  if (name === 'NotFoundError' || name === 'OverconstrainedError') return 'Valittua äänituloa ei löydy. Valitse oletustulo tai kytke äänikortti uudelleen.';
  if (name === 'NotReadableError') return 'Äänituloa ei voitu avata. Tarkista, käyttääkö toinen ohjelma laitetta.';
  return error instanceof Error ? error.message : 'Mikrofonia ei voitu käynnistää.';
}
/** A generation token releases even a late permission grant after stop/unmount. */
export class Microphone {
  private generation = 0;
  private mic?: MicStream;
  loop?: PitchLoop;
  constructor(private opener = openMic) {}
  async start(device: string, options: PitchDetectorOptions, ended: () => void): Promise<boolean> {
    this.stop();
    const token = this.generation;
    const mic = await this.opener(device || undefined);
    if (token !== this.generation) { mic.stop(); return false; }
    this.mic = mic;
    try {
      this.loop = new PitchLoop(mic, options);
      mic.stream.getTracks().forEach(track => track.addEventListener('ended', () => {
        if (this.mic === mic) { this.stop(); ended(); }
      }, { once: true }));
      this.loop.start(); return true;
    } catch (error) { this.stop(); throw error; }
  }
  stop() { this.generation++; this.loop?.stop(); this.loop = undefined; this.mic?.stop(); this.mic = undefined; }
}
export class ReferencePlayer {
  private context?: AudioContext;
  private token = 0;
  stop() { this.token++; const c = this.context; this.context = undefined; void c?.close().catch(() => {}); }
  async play(notes: number[]): Promise<boolean> {
    this.stop();
    const token = this.token;
    const c = new AudioContext(); this.context = c;
    try {
      await c.resume();
      if (token !== this.token) return false;
      notes.forEach((midi,i) => {
        const oscillator = c.createOscillator(), gain = c.createGain();
        const start = c.currentTime + .04 + i * .8;
        oscillator.type = 'triangle'; oscillator.frequency.value = midiToFreq(midi);
        gain.gain.setValueAtTime(0,start); gain.gain.linearRampToValueAtTime(.16,start+.025);
        gain.gain.exponentialRampToValueAtTime(.001,start+.6);
        oscillator.connect(gain); gain.connect(c.destination); oscillator.start(start); oscillator.stop(start+.65);
      });
      await new Promise(resolve => setTimeout(resolve, notes.length * 800 + 450));
      return token === this.token;
    } finally { if (this.context === c) { this.context = undefined; await c.close().catch(() => {}); } }
  }
}
