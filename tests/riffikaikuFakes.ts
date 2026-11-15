// Riffikaiun yksikkötestien yhteiset korvikkeet: ääni (GameAudio) ja tallennus.
import type { GameAudio, MicHandlers } from '../riffikaiku/audioAdapter';

export function fakeAudio() {
  const models: { notes: number[]; onNote: (i: number) => void; resolve: (done: boolean) => void }[] = [];
  const a = {
    handlers: [] as MicHandlers[], fail: null as Error | null, hold: null as null | (() => void),
    calls: [] as string[], models, plucks: [] as number[], devices: [] as string[], minRms: [] as number[],
    async openMic(h: MicHandlers, device: string) {
      a.calls.push('open'); a.handlers.push(h); a.devices.push(device);
      if (a.hold) await new Promise<void>(resolve => { a.hold = resolve; });
      if (a.fail) throw a.fail;
      return { label: device === 'usb' ? 'Scarlett Solo 4th Gen' : 'MacBook Pron mikrofoni', deviceId: device || 'builtin', channels: device === 'usb' ? 2 : 1, sampleRate: 48000, fallback: false };
    },
    async listDevices() { return [{ id: 'builtin', label: 'MacBook Pron mikrofoni' }, { id: 'usb', label: 'Scarlett Solo 4th Gen' }]; },
    setMinRms(v: number) { a.minRms.push(v); },
    pauseAnalysis() { a.calls.push('pause'); }, resumeAnalysis() { a.calls.push('resume'); }, rearm() { a.calls.push('rearm'); },
    closeMic() { a.calls.push('close'); },
    playModel(notes: number[], onNote: (i: number) => void) { a.calls.push('model'); return new Promise<boolean>(resolve => models.push({ notes, onNote, resolve })); },
    stopModel() { a.calls.push('stop-model'); models.splice(0).forEach(m => m.resolve(false)); },
    stopReference() { a.calls.push('stop-reference'); models.splice(0).forEach(m => m.resolve(false)); },
    pluck(midi: number) { a.plucks.push(midi); },
  } satisfies GameAudio & Record<string, unknown>;
  return a;
}

export function memoryStorage() {
  const map = new Map<string, string>();
  return { map, getItem: (k: string) => map.get(k) ?? null, setItem: (k: string, v: string) => { map.set(k, v); } };
}

export const flush = () => new Promise(resolve => setTimeout(resolve, 0));
