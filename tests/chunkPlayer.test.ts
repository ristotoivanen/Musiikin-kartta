import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { START_LEAD_SECONDS } from '../harjoittelija/bufferPlayer';
import { ChunkSongPlayer, LOOKAHEAD_SECONDS, POOL_SLOTS, SEGMENT_SECONDS, type ChunkPlayerContext } from '../harjoittelija/chunkPlayer';
import { parseMp3, planSegment, SAMPLES_PER_FRAME } from '../harjoittelija/mp3Layout';

const RATE = 48000, FRAME_BYTES = 576, SEG = SEGMENT_SECONDS * RATE;
const HEADER = [0xff, 0xfb, 0xb4, 0x00]; // MPEG-1 Layer III, 192 kbit/s, 48 kHz, stereo

/** Synteettinen MP3: ID3, Info-kehys (Lavc-viive ja -täyte) ja kehykset, joiden hyötykuorma kertoo kehyksen numeron. */
function synthMp3(frames: number, { id3 = 300, delay = 576, padding = 1080, info = true, version = 0 } = {}) {
  const bytes = new Uint8Array(10 + id3 + (info ? FRAME_BYTES : 0) + frames * FRAME_BYTES);
  bytes.set([0x49, 0x44, 0x33, 3, 0, 0, (id3 >> 21) & 127, (id3 >> 14) & 127, (id3 >> 7) & 127, id3 & 127]);
  let o = 10 + id3;
  if (info) {
    bytes.set(HEADER, o);
    bytes.set([...'Info'].map(c => c.charCodeAt(0)), o + 36);
    bytes[o + 36 + 7] = 0x0f;
    const lame = o + 36 + 120;
    bytes.set([...'Lavc61.19'].map(c => c.charCodeAt(0)), lame);
    bytes.set([delay >> 4, ((delay & 15) << 4) | (padding >> 8), padding & 255], lame + 21);
    o += FRAME_BYTES;
  }
  // Hyötykuorma: kehyksen numero (4 tavua) ja versiotunniste (kanava 1 = +p versiossa 1, −p versiossa 0).
  for (let f = 0; f < frames; f++) { bytes.set(HEADER, o); new DataView(bytes.buffer).setUint32(o + 4, f); bytes[o + 8] = version; o += FRAME_BYTES; }
  return bytes;
}

class FakeBuffer {
  readonly data: Float32Array[];
  constructor(readonly numberOfChannels: number, readonly length: number, readonly sampleRate: number) {
    this.data = Array.from({ length: numberOfChannels }, () => new Float32Array(length));
  }
  get duration() { return this.length / this.sampleRate; }
  getChannelData(c: number) { return this.data[c]; }
  copyToChannel(source: Float32Array, c: number, offset = 0) { this.data[c].set(source, offset); }
}

class FakeSource {
  buffer: FakeBuffer | null = null; started: [number, number] | null = null; stopped = false; connected: unknown = null;
  /** Ajastettu pysäytys (stop(when)); stopped kertoo välittömästä pysäytyksestä (stop()). */
  stopAt: number | null = null;
  onended: (() => void) | null = null;
  connect(target: unknown) { this.connected = target; } disconnect() { this.connected = null; }
  start(when: number, offset = 0) { this.started = [when, offset]; }
  stop(when?: number) { if (when === undefined) this.stopped = true; else this.stopAt = when; }
}

/**
 * Väärennetty AudioContext. Purku tulkitsee synteettiset kehykset: kehysmallin näyte p = kehys × 1152 + i
 * (kanava 1 negatiivinen). Raakakehykset (ei ID3:a): Applen tapaan kaksi ensimmäistä kehystä (paitsi tiedoston
 * alussa) ja viimeinen (paitsi lopussa) ovat roskaa (−1); extra > 0 jäljittelee FFmpegiä (dekooderiviive näkyy
 * siirtymänä, viimeinen kehys kunnossa). Tiedosto (ID3 + Info) puretaan aikajanan mukaan: alusta poistetaan viive.
 */
function fakeContext(totalFrames: number, { extra = 0, silent = false, silentFrames = 0, noise = false, rate = RATE } = {}) {
  const sources: FakeSource[] = [];
  const created: FakeBuffer[] = [];
  const decodes: { frames: number; resolve: () => void; reject: (e: Error) => void }[] = [];
  let manual = false, failNext = false;
  const gain = () => ({ gain: { value: 1, setTargetAtTime(value: number) { this.value = value; } }, connect() {}, disconnect() {} });
  function decode(data: ArrayBuffer): FakeBuffer {
    const bytes = new Uint8Array(data), view = new DataView(data);
    const file = bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33;
    const layout = file ? parseMp3(bytes) : null;
    const offsets = layout ? Array.from(layout.frameOffsets) : Array.from({ length: data.byteLength / FRAME_BYTES }, (_, k) => k * FRAME_BYTES);
    const frames = offsets.map(o => view.getUint32(o + 4)), n = frames.length, first = frames[0], sign = bytes[offsets[0] + 8] ? 1 : -1;
    const trim = layout ? layout.delay : 0, out = new FakeBuffer(2, n * SAMPLES_PER_FRAME - trim, RATE);
    for (let j = 0; j < out.length; j++) {
      let v: number;
      if (layout) v = first * SAMPLES_PER_FRAME + j + trim;
      else {
        const p = first * SAMPLES_PER_FRAME + j - extra, frame = Math.floor(p / SAMPLES_PER_FRAME);
        const garbage = (first > 0 && frame < first + 2) || (!extra && frame === frames[n - 1] && frame < totalFrames - 1);
        v = p < first * SAMPLES_PER_FRAME ? 0 : garbage ? -1 : p;
      }
      const p = layout ? first * SAMPLES_PER_FRAME + j + trim : first * SAMPLES_PER_FRAME + j - extra;
      if (silent || p < silentFrames * SAMPLES_PER_FRAME) v = 0;
      // Tuntematon dekooderi: raakapurku ei ole bittitarkka koko tiedoston purkuun nähden.
      if (noise && !layout && v > 0) v += 0.5;
      out.data[0][j] = v; out.data[1][j] = sign * v;
    }
    return out;
  }
  const context = {
    currentTime: 10, sampleRate: rate, destination: {} as AudioNode, outputLatency: 0, baseLatency: 0,
    createGain: () => gain() as unknown as GainNode,
    createBuffer: (channels: number, length: number, rate: number) => { const b = new FakeBuffer(channels, length, rate); created.push(b); return b as unknown as AudioBuffer; },
    createBufferSource: () => { const s = new FakeSource(); sources.push(s); return s as unknown as AudioBufferSourceNode; },
    decodeAudioData(data: ArrayBuffer) {
      const out = decode(data);
      if (failNext) { failNext = false; return Promise.reject(new Error('purku epäonnistui')); }
      if (!manual) return Promise.resolve(out as unknown as AudioBuffer);
      return new Promise<AudioBuffer>((resolve, reject) => decodes.push({ frames: out.length, resolve: () => resolve(out as unknown as AudioBuffer), reject }));
    },
  };
  return { context: context as unknown as ChunkPlayerContext & typeof context, sources, created, decodes,
    manual: () => { manual = true; }, failNext: () => { failNext = true; } };
}

type SetupOptions = { fetch?: (url: string, init?: RequestInit) => Promise<Response>; decoderDelay?: number; silent?: boolean;
  silentFrames?: number; noise?: boolean; rate?: number; files?: Record<string, Uint8Array>; progressive?: boolean; clock?: { t: number } };
function setup(frames = 8842, extra: SetupOptions = {}) {
  const fake = fakeContext(frames, { extra: extra.decoderDelay ?? 0, silent: extra.silent, silentFrames: extra.silentFrames, noise: extra.noise, rate: extra.rate });
  const mp3 = synthMp3(frames);
  let tick: (() => void) | null = null;
  const player = new ChunkSongPlayer(fake.context, {
    fetch: extra.fetch ?? (async (url: string) => new Response((extra.files?.[url] ?? mp3).slice())),
    decoderFor: () => fake.context,
    progressive: extra.progressive,
    ...(extra.clock ? { now: () => extra.clock!.t, sleep: () => new Promise<void>(resolve => setTimeout(resolve, 0)) } : {}),
    setInterval: callback => { tick = callback; return 1; }, clearInterval: () => { tick = null; },
  });
  const flush = async () => { for (let i = 0; i < 20; i++) await Promise.resolve(); };
  const advance = async (to: number) => { fake.context.currentTime = to; tick?.(); await flush(); };
  const live = () => fake.sources.filter(s => !s.stopped && s.connected);
  return { ...fake, player, flush, advance, live, layout: parseMp3(mp3) };
}
const urls = { backing: 'b.mp3', guitar: 'g.mp3', vocals: 'v.mp3' };
const delay = 576;

describe('MP3-kehysrakenne (D2)', () => {
  it('jäsentää ID3:n, Info-kehyksen viiveen ja täytteen sekä kehysten sijainnit', () => {
    const layout = parseMp3(synthMp3(100));
    expect(layout).toMatchObject({ sampleRate: 48000, channels: 2, delay: 576, padding: 1080, length: 100 * 1152 - 576 - 1080 });
    expect(layout.frameOffsets).toHaveLength(100);
    expect(layout.frameOffsets[0]).toBe(10 + 300 + 576);
    const plain = parseMp3(synthMp3(10, { info: false }));
    expect(plain).toMatchObject({ delay: 0, padding: 0, length: 10 * 1152 });
  });

  it('jäsentää kappaleen oikeat raidat samoin kuin Applen afinfo (kelvolliset näytteet 10 184 328 / 11 200 008)', () => {
    for (const [version, frames, padding, valid] of [['normaali', 8842, 1080, 10184328], ['akustinen', 9724, 1464, 11200008]] as const) for (const track of ['saestys', 'kitara', 'laulu']) {
      const file = `assets/audio/kappaleet/yksi-sointu-kaksi-askelta-${version}/yksi-sointu-kaksi-askelta-${version}-${track}.mp3`;
      const layout = parseMp3(new Uint8Array(readFileSync(file)));
      expect(layout, file).toMatchObject({ sampleRate: 48000, channels: 2, delay: 576, padding, length: valid });
      expect(layout.frameOffsets).toHaveLength(frames);
    }
  });

  it('palan kehysalue: kaksi kehystä ennen ja yksi jälkeen, kopiointi alkaa oikeasta näytteestä', () => {
    const layout = parseMp3(synthMp3(8842));
    expect(planSegment(layout, 0, SEG)).toEqual({ firstFrame: 0, endFrame: Math.ceil((SEG + 576) / 1152) + 1, skip: 576 });
    expect(planSegment(layout, SEG, SEG)).toEqual({ firstFrame: 415, endFrame: 835, skip: SEG + 576 - 415 * 1152 });
    expect(planSegment(layout, layout.length - 1000, 1000).endFrame).toBe(8842);
  });
});

describe('D2: paloittainen purku kiinteästä altaasta (issue #9)', () => {
  it('lataa raidat, purkaa ensimmäisen palan valmiiksi ja kirjaa altaan ja pakatut koot', async () => {
    const { player, created } = setup();
    await expect(player.load(urls)).resolves.toBe('valmis');
    expect(player.duration).toBeCloseTo((8842 * 1152 - 1656) / RATE, 6);
    expect(created).toHaveLength(3);
    expect(player.bufferBytes).toBe(3 * SEG * 2 * 4);
    expect(player.compressedBytes).toBe(3 * synthMp3(8842).byteLength);
    expect(player.events.filter(e => e.kind === 'ladattu')).toHaveLength(3);
  });

  it('palan sisältö on aikajanan näytteet täsmälleen (viive huomioitu, roskakehykset ohitettu), kaikki raidat samaan kehykseen', async () => {
    const { player, sources } = setup();
    await player.load(urls);
    expect(player.play(0)).toBe(true);
    await Promise.resolve();
    expect(sources).toHaveLength(3);
    const frame = Math.ceil((10 + START_LEAD_SECONDS) * RATE);
    expect(sources.map(s => s.started)).toEqual([[frame / RATE, 0], [frame / RATE, 0], [frame / RATE, 0]]);
    const data = sources[0].buffer!.data;
    for (const i of [0, 1, 1151, 2000, SEG - 1]) { expect(data[0][i]).toBe(i + delay); expect(data[1][i]).toBe(-(i + delay)); }
    expect(new Set(sources.map(s => s.buffer)).size).toBe(3);
  });

  it('seuraava pala ajastetaan saumattomasti samaan kehykseen, kun ennakkoa on alle LOOKAHEAD_SECONDS', async () => {
    const { player, sources, advance } = setup();
    await player.load(urls);
    player.play(0);
    await Promise.resolve();
    const first = sources[0].started![0] * RATE;
    await advance(10 + START_LEAD_SECONDS + SEGMENT_SECONDS - LOOKAHEAD_SECONDS + 0.1);
    expect(sources).toHaveLength(6);
    const next = sources.slice(3);
    expect(next.map(s => Math.round(s.started![0] * RATE))).toEqual([first + SEG, first + SEG, first + SEG]);
    expect(next.every(s => s.started![1] === 0)).toBe(true);
    expect(next[0].buffer!.data[0][0]).toBe(SEG + delay);
    expect(next[0].buffer!.data[0][SEG - 1]).toBe(2 * SEG - 1 + delay);
    expect(next[0].buffer).not.toBe(sources[0].buffer);
  });

  it('aikajana seuraa ajastettuja paloja ja tauko palauttaa näytetarkan kohdan', async () => {
    const { player, sources, advance } = setup();
    await player.load(urls);
    player.play(2);
    await Promise.resolve();
    const when = sources[0].started![0];
    expect(sources[0].started![1]).toBeCloseTo(2, 9);
    expect(player.position(when + 1.25)).toBeCloseTo(3.25, 9);
    await advance(when + 3);
    expect(sources).toHaveLength(6);
    expect(Math.round(sources[3].started![0] * RATE)).toBe(Math.round(when * RATE) + SEG - 2 * RATE);
    expect(player.position(when + 9)).toBeCloseTo(11, 9);
    fakeAdvanceNoTick(player, when + 3.5);
    expect(player.pause()).toBeCloseTo(5.5, 9);
    expect(sources.every(s => s.stopped || s.started === null)).toBe(true);
    expect(player.playing).toBe(false);
  });

  it('jatko ja pieni kelaus käyttävät valmista palaa ilman uutta purkua; kaukainen kelaus purkaa palan kohdasta alkaen', async () => {
    const { player, sources, context, manual, decodes, flush } = setup();
    await player.load(urls);
    manual();
    player.play(0); await flush();
    context.currentTime = 12;
    const at = player.pause();
    player.play(at); await flush();
    expect(decodes).toHaveLength(0);
    const resumed = sources.slice(3);
    expect(resumed[0].buffer).toBe(sources[0].buffer);
    expect(resumed[0].started![1]).toBeCloseTo(Math.round(at * RATE) / RATE, 9);
    player.seek(100); await flush();
    expect(decodes).toHaveLength(3);
    decodes.splice(0).forEach(d => d.resolve()); await flush();
    const far = sources.slice(6);
    expect(far).toHaveLength(3);
    expect(far[0].started![1]).toBe(0);
    expect(far[0].buffer!.data[0][0]).toBe(100 * RATE + delay);
  });

  it('loop: kappaleen lopun jälkeen pala kohdasta 0 alkaa täsmälleen seuraavassa kehyksessä; pois kytkentä peruu sen', async () => {
    const frames = 30, { player, sources, flush, layout } = setup(frames);
    await player.load(urls);
    player.setLoop(true);
    player.play(0); await flush();
    const first = Math.round(sources[0].started![0] * RATE);
    // Lyhyt kappale: loopin kierroksia ajastetaan, kunnes ennakkoa on LOOKAHEAD_SECONDS.
    expect(sources.length).toBe(3 * Math.ceil((LOOKAHEAD_SECONDS + START_LEAD_SECONDS) / (layout.length / RATE)));
    expect(Math.round(sources[3].started![0] * RATE)).toBe(first + layout.length);
    expect(sources[3].started![1]).toBe(0);
    expect(player.position((first + layout.length + 480) / RATE)).toBeCloseTo(480 / RATE, 9);
    player.setLoop(false);
    expect(sources.slice(3).every(s => s.stopped)).toBe(true);
    expect(sources.slice(0, 3).some(s => s.stopped)).toBe(false);
  });

  it('soi loppuun ilman looppia: onEnded, kohta = kesto', async () => {
    const frames = 30, { player, sources, advance } = setup(frames);
    await player.load(urls);
    let ended = 0;
    player.onEnded = () => { ended++; };
    player.play(0); await Promise.resolve(); await advance(10.2);
    expect(sources).toHaveLength(3);
    sources[0].onended?.();
    expect(ended).toBe(1);
    expect(player.playing).toBe(false);
    expect(player.position()).toBeCloseTo(player.duration, 9);
  });

  it('allas ei kasva: koko kappaleen läpisoitto ja kymmenen versionvaihtoa käyttävät enintään POOL_SLOTS paikkaa', async () => {
    const { player, sources, created, advance, flush, context } = setup();
    // Yksi koko läpisoitto ja sen jälkeen kymmenen versionvaihtoa, joista jokainen soittaa kaksi palaa.
    for (let round = 0; round < 11; round++) {
      await player.load(urls);
      player.play(0); await flush();
      const begin = context.currentTime;
      let t = begin;
      while (player.playing && t < begin + (round === 0 ? 230 : 15)) {
        t += 1;
        // Soineet palat päättyvät: kutsutaan päättymiskäsittelijät ajassa.
        for (const s of sources) if (s.started && !s.stopped && s.onended && s.connected && s.started[0] + SEGMENT_SECONDS <= t) s.onended();
        await advance(t);
      }
      expect(player.playing).toBe(round > 0);
      player.release();
      await flush();
    }
    expect(created.length).toBeLessThanOrEqual(POOL_SLOTS * 3);
    expect(player.bufferBytes).toBeLessThanOrEqual(POOL_SLOTS * 3 * SEG * 2 * 4);
  }, 30000);

  it('raidan kytkentä ja äänenvoimakkuus ovat tasoja: lähteitä ei luoda uudelleen', async () => {
    const { player, sources } = setup();
    await player.load(urls);
    player.play(0); await Promise.resolve();
    player.setLevel('guitar', 0);
    player.setLevel('vocals', 0.5);
    expect(player.level('guitar')).toBe(0);
    expect(player.level('vocals')).toBe(0.5);
    expect(sources).toHaveLength(3);
    expect(sources[1].connected).toBe(player.inputs.guitar);
  });

  it('latauksen peruutus ja purkuvirhe soiton aikana', async () => {
    let release: (() => void) | null = null;
    const slow = setup(8842, { fetch: (_url, init) => new Promise<Response>((resolve, reject) => {
      release = () => resolve(new Response(synthMp3(10)));
      init?.signal?.addEventListener('abort', () => reject(new DOMException('aborted', 'AbortError')));
    }) });
    const loading = slow.player.load(urls);
    expect(slow.player.state).toBe('ladataan');
    slow.player.cancel();
    await expect(loading).resolves.toBe('peruttu');
    expect(slow.player.state).toBe('tyhja');
    expect(release).not.toBeNull();

    const { player, advance, failNext } = setup();
    await player.load(urls);
    let message = '';
    player.onError = m => { message = m; };
    player.play(0); await Promise.resolve();
    failNext();
    await advance(10 + SEGMENT_SECONDS - LOOKAHEAD_SECONDS + 0.1);
    expect(message).toBe('purku epäonnistui');
    expect(player.state).toBe('virhe');
    expect(player.playing).toBe(false);
  });

  it('myöhästynyt pala (alivuoto) ajastetaan heti eikä menneisyyteen', async () => {
    const { player, sources, context, manual, decodes, flush, advance } = setup();
    await player.load(urls);
    player.play(0); await flush();
    manual();
    await advance(10 + SEGMENT_SECONDS - LOOKAHEAD_SECONDS + 0.1);
    expect(decodes).toHaveLength(3);
    context.currentTime = 10 + SEGMENT_SECONDS + 1;
    decodes.splice(0).forEach(d => d.resolve()); await flush();
    expect(player.events.some(e => e.kind === 'alivuoto')).toBe(true);
    expect(sources[3].started![0]).toBeGreaterThan(context.currentTime);
  });
});

describe('D2: dekooderin kalibrointi (Apple ja FFmpeg)', () => {
  for (const decoderDelay of [0, 529]) it(`dekooderiviive ${decoderDelay}: mitataan ja palat ovat silti täsmälleen aikajanan näytteet`, async () => {
    const { player, sources, advance, flush } = setup(8842, { decoderDelay });
    await player.load(urls);
    expect(player.events.find(e => e.kind === 'kalibroitu')?.dekooderiviive).toBe(decoderDelay);
    player.play(0); await Promise.resolve();
    const data = sources[0].buffer!.data;
    for (const i of [0, 1, 1151, 2000, SEG - 1]) expect(data[0][i]).toBe(i + delay);
    await advance(10 + START_LEAD_SECONDS + SEGMENT_SECONDS - LOOKAHEAD_SECONDS + 0.1);
    const next = sources[3].buffer!.data;
    for (const i of [0, 1, 777, SEG - 1]) expect(next[0][i]).toBe(SEG + i + delay);
    player.seek(123.456); await flush();
    const far = sources.at(-1)!;
    const at = Math.round(123.456 * RATE);
    expect(far.buffer!.data[0][Math.round(far.started![1] * RATE)]).toBe(at + delay);
  });

  it('hiljaisilla raidoilla kalibrointi päättyy hallittuun virheeseen eikä viivettä arvata', async () => {
    const { player, sources } = setup(8842, { silent: true });
    await expect(player.load(urls)).resolves.toBe('virhe');
    expect(player.state).toBe('virhe');
    expect(player.errorKind).toBe('kalibrointi');
    expect(player.events.find(e => e.kind === 'kalibrointi-epaonnistui')?.yritykset).toHaveLength(9);
    expect(player.play(0)).toBe(false);
    expect(sources).toHaveLength(0);
  });

  it('tuntematon dekooderi (ei bittitarkkaa vastaavuutta) → hallittu virhe', async () => {
    const { player } = setup(8842, { noise: true });
    await expect(player.load(urls)).resolves.toBe('virhe');
    expect(player.errorKind).toBe('kalibrointi');
  });

  it('hiljainen alku: kalibrointi käyttää myöhempää ikkunaa', async () => {
    const { player, sources, flush } = setup(8842, { silentFrames: 2000, decoderDelay: 529 });
    await expect(player.load(urls)).resolves.toBe('valmis');
    expect(player.events.find(e => e.kind === 'kalibroitu')).toMatchObject({ kehys: 3000, dekooderiviive: 529 });
    player.seek(100); player.play(100); await flush();
    expect(sources.at(-1)!.buffer!.data[0][0]).toBe(100 * RATE + delay);
  });

  it('lyhyt raita kalibroidaan kolmanneksen kohdalta', async () => {
    const { player } = setup(40, { decoderDelay: 529 });
    await expect(player.load(urls)).resolves.toBe('valmis');
    expect(player.events.find(e => e.kind === 'kalibroitu')).toMatchObject({ kehys: 13, dekooderiviive: 529 });
  });

  it('kalibroidaan vain kerran soittimen elinaikana', async () => {
    const { player } = setup();
    await player.load(urls); await player.load(urls);
    expect(player.events.filter(e => e.kind === 'kalibroitu')).toHaveLength(1);
  });
});

describe('D2: katselmoinnin korjaukset (loopin alku, näytetaajuus, kilpailutilanteet)', () => {
  type Internals = { slots: { users: number; filling: boolean; ready: boolean; start: number }[] };
  const slots = (player: ChunkSongPlayer) => (player as unknown as Internals).slots;
  const settle = async (fake: { decodes: { resolve: () => void }[] }, flush: () => Promise<void>) => {
    for (let i = 0; i < 20 && fake.decodes.length; i++) { fake.decodes.splice(0).forEach(d => d.resolve()); await flush(); }
  };

  it('loopin kytkentä aivan lopussa: loopin alku on purettu etukäteen ja jatkuu samasta kehyksestä ilman taukoa', async () => {
    const { player, sources, flush, context, created, layout } = setup();
    await player.load(urls);
    for (const at of [60, 100, 150, 190]) { player.play(at); await flush(); }
    expect(slots(player).some(s => s.ready && s.start === 0)).toBe(false);
    const d = player.duration, from = Math.round((d - 1) * RATE);
    player.play(d - 1); await flush();
    const last = sources.at(-3)!, endFrame = Math.round(last.started![0] * RATE) + layout.length - from;
    expect(slots(player).some(s => s.ready && s.start === 0)).toBe(true);
    const decodesBefore = player.events.filter(e => e.kind === 'pala').length;
    context.currentTime = (endFrame - 480) / RATE;
    player.setLoop(true); await flush();
    const wrap = sources.slice(-3);
    expect(wrap.map(s => Math.round(s.started![0] * RATE))).toEqual([endFrame, endFrame, endFrame]);
    expect(wrap.every(s => s.started![1] === 0)).toBe(true);
    expect(wrap[0].buffer!.data[0][0]).toBe(delay);
    expect(player.events.filter(e => e.kind === 'pala').length).toBe(decodesBefore);
    expect(player.events.some(e => e.kind === 'alivuoto')).toBe(false);
    expect(created.length).toBeLessThanOrEqual(POOL_SLOTS * 3);
  });

  it('jokainen pala pysähtyy täsmälleen loppukehykseensä: kappaleen lopun lyhyt pala ei soita altaan vanhaa dataa', async () => {
    const { player, sources, flush, layout } = setup();
    await player.load(urls);
    for (const at of [0, 60, 150]) { player.play(at); await flush(); }
    const d = player.duration, from = Math.round((d - 3) * RATE);
    player.setLoop(true);
    player.play(d - 3); await flush();
    const tail = sources.filter(s => s.started && !s.stopped && s.stopAt !== null);
    // Viimeinen pala: alkaa kohdasta d − 3 ja pysähtyy kappaleen loppuun (3 s), ei altaan paikan loppuun (10 s).
    const end = tail.filter(s => s.buffer && s.stopAt! - s.started![0] < 3.01);
    expect(end.length).toBeGreaterThanOrEqual(3);
    for (const s of end) expect(Math.round((s.stopAt! - s.started![0]) * RATE)).toBe(layout.length - from);
    // Loopin alku alkaa täsmälleen siitä kehyksestä, johon viimeinen pala pysähtyy.
    const wrap = tail.find(s => s.started![0] > end[0].started![0])!;
    expect(Math.round(wrap.started![0] * RATE)).toBe(Math.round(end[0].stopAt! * RATE));
    // Kaikki ajastetut palat: pysäytyskehys = alku + pituus kokonaisina kehyksinä.
    for (const s of tail) { const f = s.stopAt! * RATE; expect(Math.abs(f - Math.round(f))).toBeLessThan(1e-6); }
  });

  it('44,1 kHz:n konteksti: alut ja palat 160 näytteen ruudukossa, rajat kokonaisiin kehyksiin, aikajana oikein', async () => {
    const { player, sources, advance, flush } = setup(8842, { rate: 44100 });
    await expect(player.load(urls)).resolves.toBe('valmis');
    expect(player.events.find(e => e.kind === 'naytetaajuus-ero')).toMatchObject({ mp3: 48000, konteksti: 44100, ruudukko: 160 });
    expect(Math.round(player.duration * RATE) % 160).toBe(0);
    player.play(1.2345); await flush();
    const first = sources[0], start = Math.round(first.started![1] * RATE);
    expect(start % 160).toBe(0);
    expect(Math.abs(start - 1.2345 * RATE)).toBeLessThanOrEqual(80);
    const f0 = first.started![0] * 44100;
    expect(Math.abs(f0 - Math.round(f0))).toBeLessThan(1e-6);
    expect(player.position(first.started![0] + 2)).toBeCloseTo(start / RATE + 2, 6);
    await advance(first.started![0] + (SEG - start) / RATE - LOOKAHEAD_SECONDS + 0.1);
    await advance(first.started![0] + (2 * SEG - start) / RATE - LOOKAHEAD_SECONDS + 0.1);
    const frames = [0, 3, 6].map(i => sources[i].started![0] * 44100);
    expect(frames[1] - frames[0]).toBeCloseTo((SEG - start) * 44100 / RATE, 6);
    expect(Number.isInteger(Math.round((frames[1] - frames[0]) * 1e6) / 1e6)).toBe(true);
    expect(frames[2] - frames[1]).toBeCloseTo(441000, 6);
    expect(sources[3].buffer!.data[0][0]).toBe(SEG + delay);
  });

  it('kontekstin taajuus, jolle ei ole kohtuullista ruudukkoa (44 101 Hz) → hallittu virhe', async () => {
    const { player } = setup(8842, { rate: 44101 });
    await expect(player.load(urls)).resolves.toBe('virhe');
    expect(player.errorKind).toBe('naytetaajuus');
  });

  it('nopeat peräkkäiset kelaukset: vain viimeinen kohta puretaan ja soi, paikat vapautuvat', async () => {
    const fake = setup(), { player, sources, flush, manual, decodes } = fake;
    await player.load(urls);
    manual();
    player.play(0); await flush();
    for (const at of [50, 100, 150, 200]) player.seek(at);
    await flush();
    expect(decodes).toHaveLength(3);
    await settle(fake, flush);
    const scheduled = sources.slice(3).filter(s => s.started);
    expect(scheduled).toHaveLength(3);
    expect(scheduled[0].buffer!.data[0][0]).toBe(200 * RATE + delay);
    expect(player.events.filter(e => e.kind === 'pala').map(e => e.start)).toEqual([0, 50, 200]);
    player.pause();
    expect(slots(player).every(s => s.users === 0 && !s.filling)).toBe(true);
  });

  it('sama pala pyydetään kahdesti ennen purun valmistumista → yksi purku', async () => {
    const { player, flush, manual, decodes } = setup();
    await player.load(urls);
    manual();
    player.play(100); await flush();
    player.play(100.5); await flush();
    expect(decodes).toHaveLength(3);
  });

  it('versionvaihto kesken palan purun: vanha purku ei ajastu eikä sotke uuden version allasta', async () => {
    const versionB = synthMp3(4000, { version: 1 });
    const fake = setup(8842, { files: { 'B1': versionB, 'B2': versionB, 'B3': versionB } }), { player, sources, flush, manual } = fake;
    await player.load(urls);
    manual();
    player.play(120); await flush();
    player.release();
    const loading = player.load({ backing: 'B1', guitar: 'B2', vocals: 'B3' });
    await settle(fake, flush);
    await expect(loading).resolves.toBe('valmis');
    expect(sources).toHaveLength(0);
    player.play(0); await settle(fake, flush);
    expect(sources).toHaveLength(3);
    expect(sources[0].buffer!.data[1][1000]).toBe(1000 + delay);
    expect(player.duration).toBeCloseTo((4000 * 1152 - 1656) / RATE, 6);
    expect(slots(player).every(s => !s.filling)).toBe(true);
  });

  it('peruutus ensimmäisen palan purun aikana ja heti uusi lataus: vain uusi versio valmistuu', async () => {
    const versionB = synthMp3(4000, { version: 1 });
    const fake = setup(8842, { files: { 'B1': versionB, 'B2': versionB, 'B3': versionB } }), { player, flush, manual, decodes } = fake;
    manual();
    const first = player.load(urls);
    for (let i = 0; i < 20 && player.state !== 'puretaan'; i++) await flush();
    while (decodes.length && !player.events.some(e => e.kind === 'kalibroitu')) { decodes.splice(0).forEach(d => d.resolve()); await flush(); }
    expect(player.state).toBe('puretaan');
    player.cancel();
    const second = player.load({ backing: 'B1', guitar: 'B2', vocals: 'B3' });
    await settle(fake, flush);
    await expect(first).resolves.toBe('peruttu');
    await expect(second).resolves.toBe('valmis');
    player.play(0); await settle(fake, flush);
    const src = fake.sources.at(-1)!;
    expect(src.buffer!.data[1][10]).toBe(10 + delay);
  });
});

/** Virtoina tarjoiltavat tiedostot: testi syöttää tavuja käsin (push) ja voi katkaista virran. */
function streamingFiles(files: Record<string, Uint8Array>, { contentLength = true } = {}) {
  const state: Record<string, { c: ReadableStreamDefaultController<Uint8Array>; sent: number; aborted: boolean }> = {};
  const fetch = async (url: string, init?: RequestInit) => {
    const bytes = files[url];
    const entry = { c: null as unknown as ReadableStreamDefaultController<Uint8Array>, sent: 0, aborted: false };
    const body = new ReadableStream<Uint8Array>({ start(c) { entry.c = c; }, cancel() { entry.aborted = true; } });
    state[url] = entry;
    init?.signal?.addEventListener('abort', () => { entry.aborted = true; try { entry.c.error(new DOMException('keskeytetty', 'AbortError')); } catch { /* suljettu */ } });
    return new Response(body, contentLength ? { headers: { 'Content-Length': String(bytes.length) } } : {});
  };
  const push = (n: number) => {
    for (const [url, entry] of Object.entries(state)) {
      if (entry.aborted || entry.sent >= files[url].length) continue;
      const end = Math.min(files[url].length, entry.sent + n);
      entry.c.enqueue(files[url].slice(entry.sent, end));
      entry.sent = end;
      if (end === files[url].length) entry.c.close();
    }
  };
  return { fetch, push, state };
}
const macro = () => new Promise(resolve => setTimeout(resolve, 0));

describe('Ensilataus (kokeilu): virtalataus D2:n syötteenä', () => {
  const mp3 = synthMp3(8842);
  const files = { 'b.mp3': mp3, 'g.mp3': mp3, 'v.mp3': mp3 };
  const progressiveUrls = { backing: 'b.mp3', guitar: 'g.mp3', vocals: 'v.mp3' };
  async function startPartial(extra: SetupOptions = {}) {
    const clock = { t: 0 }, net = streamingFiles(files);
    const fake = setup(8842, { fetch: net.fetch, progressive: true, clock, ...extra });
    const loading = fake.player.load(progressiveUrls);
    // 64 kt / 100 ms / raita ≈ 640 kt/s (selvästi toistoa nopeampi).
    for (let i = 0; i < 300 && fake.player.state !== 'valmis' && fake.player.state !== 'virhe'; i++) { net.push(65536); clock.t += 100; await macro(); await fake.flush(); }
    return { ...fake, net, clock, loading };
  }

  it('toisto voi alkaa ennen koko latausta, ja palat ovat samat aikajanan näytteet kuin koko latauksessa', async () => {
    const { player, sources, net, loading, flush } = await startPartial();
    await expect(loading).resolves.toBe('valmis');
    const sent = Object.values(net.state).map(e => e.sent);
    expect(Math.max(...sent)).toBeLessThan(mp3.length * 0.25);
    expect(player.downloadProgress).toBeLessThan(0.25);
    expect(player.events.some(e => e.kind === 'alku-valmis')).toBe(true);
    expect(player.duration).toBeCloseTo((8842 * 1152 - 1656) / RATE, 6);
    player.play(0); await flush();
    expect(sources).toHaveLength(3);
    for (const i of [0, 1151, SEG - 1]) expect(sources[0].buffer!.data[0][i]).toBe(i + delay);
  });

  it('kelaus lataamattomaan kohtaan odottaa tavuja (ilmoittaa odotuksesta) ja jatkaa täsmälleen oikeasta kohdasta', async () => {
    const { player, sources, net, clock, flush } = await startPartial();
    const waits: boolean[] = [];
    player.onWaitingChange = waiting => { waits.push(waiting); };
    player.play(0); await flush();
    player.seek(150); await flush();
    expect(sources.filter(s => s.started && !s.stopped)).toHaveLength(0);
    expect(player.waiting).toBe(true);
    for (let i = 0; i < 400 && player.waiting; i++) { net.push(65536); clock.t += 100; await macro(); await flush(); }
    const scheduled = sources.filter(s => s.started && !s.stopped);
    expect(scheduled).toHaveLength(3);
    expect(scheduled[0].buffer!.data[0][0]).toBe(150 * RATE + delay);
    expect(waits).toEqual([true, false]);
  });

  it('versionvaihto kesken taustalatauksen keskeyttää virrat ilman virhettä', async () => {
    const { player, net, flush } = await startPartial();
    player.play(0); await flush();
    player.release(); await flush(); await macro();
    expect(player.state).toBe('tyhja');
    expect(Object.values(net.state).every(e => e.aborted)).toBe(true);
    expect(player.events.some(e => e.kind === 'virhe')).toBe(false);
  });

  it('virran katkeaminen kesken soiton → hallittu virhe, kun puuttuvia tavuja tarvitaan', async () => {
    const { player, net, flush } = await startPartial();
    let message = '';
    player.onError = m => { message = m; };
    player.play(0); await flush();
    net.state['g.mp3'].c.error(new Error('yhteys katkesi'));
    player.seek(180); await flush(); await macro(); await flush();
    expect(message).toBe('yhteys katkesi');
    expect(player.state).toBe('virhe');
    expect(player.playing).toBe(false);
  });

  it('ilman Content-Lengthiä ladataan koko tiedosto ensin kuten hyväksytyssä D2:ssa', async () => {
    const clock = { t: 0 }, net = streamingFiles(files, { contentLength: false });
    const { player, flush } = setup(8842, { fetch: net.fetch, progressive: true, clock });
    const loading = player.load(progressiveUrls);
    for (let i = 0; i < 400 && player.state !== 'valmis'; i++) { net.push(262144); clock.t += 100; await macro(); await flush(); }
    await expect(loading).resolves.toBe('valmis');
    expect(player.events.filter(e => e.kind === 'ladattu').every(e => e.virta === false)).toBe(true);
    expect(Object.values(net.state).every(e => e.sent === mp3.length)).toBe(true);
  });

  it('kun kaikki tavut ovat heti saatavilla (välimuisti), ajastus ja sisältö ovat samat kuin ilman virtaa', async () => {
    const run = async (progressive: boolean) => {
      const clock = { t: 0 }, net = streamingFiles(files);
      const fake = setup(8842, { fetch: progressive ? net.fetch : undefined, progressive, clock });
      const loading = fake.player.load(progressiveUrls);
      for (let i = 0; i < 20; i++) { net.push(mp3.length); clock.t += 100; await macro(); await fake.flush(); }
      await loading;
      fake.player.play(12.5); await fake.flush();
      return fake.sources.map(s => [s.started, s.buffer!.data[0][1000], s.buffer!.data[1][1000]]);
    };
    expect(await run(true)).toEqual(await run(false));
  });
});

/** Kello eteenpäin ilman ajastimen kierrosta (kohdan laskenta). */
function fakeAdvanceNoTick(player: ChunkSongPlayer, to: number) {
  (player as unknown as { context: { currentTime: number } }).context.currentTime = to;
}
