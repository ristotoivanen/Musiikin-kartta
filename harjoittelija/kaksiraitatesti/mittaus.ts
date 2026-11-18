/**
 * Kahden raidan testiversion mittaukset (selain). Ei tuotantosoittimen osa.
 *
 * - Tapahtumaloki: painallukset, play/pause, kelauskirjoitukset ja niiden valmistuminen, tilat.
 * - Näytteet: mediaelementtien currentTime-arvot ja niiden ero. Ero on elementtien kellojen ero,
 *   ei todellinen kuultava kohdistus.
 * - Renderöity kohdistus: kummankin raidan Web Audio -lähteestä kaapataan samasta renderöintijaksosta
 *   0,68 s näyte, ja se paikannetaan alkuperäisestä PCM-tiedostosta (kohdistus.ts).
 */
import { locate, parseWavHeader, pcmToMono, reliable, resampleLinear, rms, type Location, type WavInfo } from './kohdistus';

export const PROBE_SIZE = 32768;
/**
 * Haun väljyys odotetun kohdan molemmin puolin (s). iOS-simulaattorissa renderöity kohta oli kelauksen
 * jälkeen yli 0,4 s mediakellosta, joten ikkuna kattaa ±1,5 s.
 */
const SEARCH_SECONDS = 1.5;

// ---- Analysaattorit: asennetaan ennen kuin soitin luo MediaElementSourcet. ----
const taps = new WeakMap<HTMLMediaElement, { analyser: AnalyserNode; context: BaseAudioContext; source: MediaElementAudioSourceNode }>();

/** Lisää jokaiseen MediaElementSourceen analysaattorin ennen GainNodea. Ei muuta äänen reittiä. */
export function installTaps() {
  const proto = globalThis.AudioContext?.prototype;
  if (!proto || (proto as unknown as { __kaksiraita?: boolean }).__kaksiraita) return;
  const create = proto.createMediaElementSource;
  proto.createMediaElementSource = function (this: AudioContext, element: HTMLMediaElement) {
    const source = create.call(this, element);
    const analyser = this.createAnalyser();
    analyser.fftSize = PROBE_SIZE;
    source.connect(analyser);
    taps.set(element, { analyser, context: this, source });
    return source;
  };
  (proto as unknown as { __kaksiraita?: boolean }).__kaksiraita = true;
}

export function tapOf(element: HTMLMediaElement | null) {
  return element ? taps.get(element) ?? null : null;
}

// ---- Referenssit: alkuperäinen PCM, josta renderöity kohta paikannetaan. ----
export interface ReferenceWindow { samples: Float32Array; sampleRate: number; startSeconds: number }
export interface Reference {
  durationSeconds(): Promise<number>;
  window(startSeconds: number, endSeconds: number): Promise<ReferenceWindow>;
}

/** WAV-tiedosto HTTP Range -pyynnöillä. Jos palvelin ei tue Rangea (200), koko tiedosto luetaan kerran. */
export function wavReference(url: string): Reference {
  let header: Promise<WavInfo> | null = null;
  let whole: Promise<ArrayBuffer> | null = null;
  async function bytes(start: number, end: number): Promise<Uint8Array> {
    if (whole) return new Uint8Array(await whole, start, end - start + 1);
    const response = await fetch(url, { headers: { Range: `bytes=${start}-${end}` } });
    if (response.status === 206) return new Uint8Array(await response.arrayBuffer());
    if (!response.ok) throw new Error(`Referenssi ${url}: HTTP ${response.status}`);
    whole = response.arrayBuffer();
    return new Uint8Array(await whole, start, end - start + 1);
  }
  const info = () => (header ??= bytes(0, 4095).then(head => parseWavHeader(head.slice().buffer)));
  return {
    async durationSeconds() { const wav = await info(); return wav.frames / wav.sampleRate; },
    async window(startSeconds, endSeconds) {
      const wav = await info();
      const first = Math.max(0, Math.floor(startSeconds * wav.sampleRate));
      const last = Math.min(wav.frames, Math.ceil(endSeconds * wav.sampleRate));
      if (last <= first) throw new Error('Referenssi-ikkuna on tiedoston ulkopuolella');
      const raw = await bytes(wav.dataOffset + first * wav.blockAlign, wav.dataOffset + last * wav.blockAlign - 1);
      return { samples: pcmToMono(raw, wav), sampleRate: wav.sampleRate, startSeconds: first / wav.sampleRate };
    },
  };
}

/** Muistissa oleva referenssi (synteettinen aineisto). */
export function arrayReference(samples: Float32Array, sampleRate: number): Reference {
  return {
    async durationSeconds() { return samples.length / sampleRate; },
    async window(startSeconds, endSeconds) {
      const first = Math.max(0, Math.floor(startSeconds * sampleRate));
      const last = Math.min(samples.length, Math.ceil(endSeconds * sampleRate));
      return { samples: samples.slice(first, last), sampleRate, startSeconds: first / sampleRate };
    },
  };
}

// ---- Renderöidyn kohdistuksen mittaus ----
export interface MeasuredTrack {
  name: string;
  mediaTime: number;
  /** Graafissa juuri renderöidyn kohdan loppu referenssin aikajanalla (s), null jos ei paikannettu. */
  renderedTime: number | null;
  score: number | null;
  runnerUp: number | null;
  probeRms: number;
  reliable: boolean;
  /** Mediakello − renderöity kohta (ms). Kertoo elementin kellon ja graafin välisen viiveen raidalle. */
  mediaMinusRenderedMs: number | null;
  error?: string;
}

export interface AlignmentMeasurement {
  phase: string;
  ms: number;
  contextTime: number;
  sampleRate: number;
  /** Montako kaappausyritystä tarvittiin, jotta molemmat näytteet ovat samasta renderöintijaksosta. */
  attempts: number;
  tracks: MeasuredTrack[];
  /** Mediaelementtien kellojen ero (kitara − tausta, ms). EI ole kuultava kohdistus. */
  mediaDiffMs: number;
  /** Renderöity kohdistus (kitara − tausta, ms): positiivinen = kitara edellä. null, jos ei luotettava. */
  renderedDiffMs: number | null;
  reliable: boolean;
}

export interface MeasuredInput {
  name: string;
  element: HTMLMediaElement;
  reference: Reference;
  /** Mediaelementin aika → referenssin aika (s). WAV- ja MP3-tila: 0 (mitattu Macilla, Applen dekooderi). */
  referenceOffsetSeconds: number;
}

export async function measureAlignment(phase: string, inputs: MeasuredInput[]): Promise<AlignmentMeasurement> {
  const tapped = inputs.map(input => ({ input, tap: tapOf(input.element) }));
  if (tapped.some(item => !item.tap)) throw new Error('Raitaa ei ole vielä kytketty Web Audioon');
  const context = tapped[0].tap!.context;
  let attempts = 0;
  let probes: Float32Array[] = [];
  let media: number[] = [];
  let contextTime = 0;
  // Kaappaus samasta renderöintijaksosta: kontekstin kello ei saa muuttua lukujen välissä.
  for (;;) {
    attempts++;
    const before = context.currentTime;
    probes = tapped.map(({ tap }) => { const buffer = new Float32Array(PROBE_SIZE); tap!.analyser.getFloatTimeDomainData(buffer); return buffer; });
    media = tapped.map(({ input }) => input.element.currentTime);
    contextTime = context.currentTime;
    if (contextTime === before || attempts >= 8) break;
    await new Promise(resolve => setTimeout(resolve, 0));
  }
  const rate = context.sampleRate;
  const probeSeconds = PROBE_SIZE / rate;
  const tracks: MeasuredTrack[] = [];
  for (let index = 0; index < tapped.length; index++) {
    const { input } = tapped[index];
    const probe = probes[index];
    const probeRms = rms(probe);
    const base = { name: input.name, mediaTime: media[index], probeRms };
    try {
      const expected = media[index] + input.referenceOffsetSeconds;
      const duration = await input.reference.durationSeconds();
      if (expected - probeSeconds - SEARCH_SECONDS < 0 || expected + SEARCH_SECONDS > duration) {
        throw new Error('Kohta on referenssin ulkopuolella');
      }
      const window = await input.reference.window(expected - probeSeconds - SEARCH_SECONDS, expected + SEARCH_SECONDS);
      const reference = resampleLinear(window.samples, window.sampleRate, rate);
      const location: Location = locate(reference, probe, rate);
      const renderedTime = window.startSeconds + (location.lag + probe.length) / rate;
      const ok = reliable(location) && probeRms > 1e-4;
      tracks.push({
        ...base, renderedTime, score: location.score, runnerUp: location.runnerUp, reliable: ok,
        mediaMinusRenderedMs: (expected - renderedTime) * 1000,
      });
    } catch (cause) {
      tracks.push({ ...base, renderedTime: null, score: null, runnerUp: null, reliable: false, mediaMinusRenderedMs: null, error: String(cause) });
    }
  }
  const [tausta, kitara] = tracks;
  const both = tausta.reliable && kitara.reliable && tausta.renderedTime !== null && kitara.renderedTime !== null;
  return {
    phase, ms: Math.round(performance.now()), contextTime, sampleRate: rate, attempts, tracks,
    mediaDiffMs: (kitara.mediaTime - tausta.mediaTime) * 1000,
    renderedDiffMs: both ? (kitara.renderedTime! - tausta.renderedTime!) * 1000 : null,
    reliable: both,
  };
}

// ---- Tapahtumaloki ----
export interface LogEntry { ms: number; event: string; [key: string]: unknown }

export class TestLog {
  events: LogEntry[] = [];
  samples: LogEntry[] = [];
  measurements: AlignmentMeasurement[] = [];
  private limit = 4000;
  record(event: string, details: Record<string, unknown> = {}) {
    this.events.push({ ms: Math.round(performance.now()), event, ...details });
    if (this.events.length > this.limit) this.events.shift();
  }
  sample(details: Record<string, unknown>) {
    this.samples.push({ ms: Math.round(performance.now()), event: 'sample', ...details });
    if (this.samples.length > this.limit) this.samples.shift();
  }
}

/** Kelauksen valmistumisaika: seek-write → seuraava saman raidan seeked (ms). */
export function seekLatencies(events: LogEntry[]): { track: string; forced: boolean; ms: number; from: number; to: number }[] {
  const pending = new Map<string, LogEntry>();
  const out: { track: string; forced: boolean; ms: number; from: number; to: number }[] = [];
  for (const entry of events) {
    const track = String(entry.track ?? '');
    if (entry.event === 'seek-write') pending.set(track, entry);
    if (entry.event === 'seeked' && pending.has(track)) {
      const write = pending.get(track)!;
      out.push({ track, forced: Boolean(write.forced), ms: entry.ms - write.ms, from: Number(write.from), to: Number(write.to) });
      pending.delete(track);
    }
  }
  return out;
}
