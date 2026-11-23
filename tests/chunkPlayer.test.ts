import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { START_LEAD_SECONDS } from '../harjoittelija/bufferPlayer';
import { ChunkSongPlayer, LOOKAHEAD_SECONDS, POOL_SLOTS, SEGMENT_SECONDS, type ChunkPlayerContext } from '../harjoittelija/chunkPlayer';
import { parseMp3, planSegment, SAMPLES_PER_FRAME } from '../harjoittelija/mp3Layout';

const RATE = 48000, FRAME_BYTES = 576, SEG = SEGMENT_SECONDS * RATE;
const HEADER = [0xff, 0xfb, 0xb4, 0x00]; // MPEG-1 Layer III, 192 kbit/s, 48 kHz, stereo

/** Synteettinen MP3: ID3, Info-kehys (Lavc-viive ja -täyte) ja kehykset, joiden hyötykuorma kertoo kehyksen numeron. */
function synthMp3(frames: number, { id3 = 300, delay = 576, padding = 1080, info = true } = {}) {
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
  for (let f = 0; f < frames; f++) { bytes.set(HEADER, o); new DataView(bytes.buffer).setUint32(o + 4, f); o += FRAME_BYTES; }
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
  onended: (() => void) | null = null;
  connect(target: unknown) { this.connected = target; } disconnect() { this.connected = null; }
  start(when: number, offset = 0) { this.started = [when, offset]; }
  stop() { this.stopped = true; }
}

/**
 * Väärennetty AudioContext. Purku tulkitsee synteettiset kehykset: kehysmallin näyte p = kehys × 1152 + i
 * (kanava 1 negatiivinen). Raakakehykset (ei ID3:a): Applen tapaan kaksi ensimmäistä kehystä (paitsi tiedoston
 * alussa) ja viimeinen (paitsi lopussa) ovat roskaa (−1); extra > 0 jäljittelee FFmpegiä (dekooderiviive näkyy
 * siirtymänä, viimeinen kehys kunnossa). Tiedosto (ID3 + Info) puretaan aikajanan mukaan: alusta poistetaan viive.
 */
function fakeContext(totalFrames: number, { extra = 0, silent = false } = {}) {
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
    const frames = offsets.map(o => view.getUint32(o + 4)), n = frames.length, first = frames[0];
    const trim = layout ? layout.delay : 0, out = new FakeBuffer(2, n * SAMPLES_PER_FRAME - trim, RATE);
    for (let j = 0; j < out.length; j++) {
      let v: number;
      if (layout) v = first * SAMPLES_PER_FRAME + j + trim;
      else {
        const p = first * SAMPLES_PER_FRAME + j - extra, frame = Math.floor(p / SAMPLES_PER_FRAME);
        const garbage = (first > 0 && frame < first + 2) || (!extra && frame === frames[n - 1] && frame < totalFrames - 1);
        v = p < first * SAMPLES_PER_FRAME ? 0 : garbage ? -1 : p;
      }
      if (silent) v = 0;
      out.data[0][j] = v; out.data[1][j] = -v;
    }
    return out;
  }
  const context = {
    currentTime: 10, sampleRate: RATE, destination: {} as AudioNode, outputLatency: 0, baseLatency: 0,
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

function setup(frames = 8842, extra: { fetch?: (url: string, init?: RequestInit) => Promise<Response>; decoderDelay?: number; silent?: boolean } = {}) {
  const fake = fakeContext(frames, { extra: extra.decoderDelay ?? 0, silent: extra.silent });
  const mp3 = synthMp3(frames);
  let tick: (() => void) | null = null;
  const player = new ChunkSongPlayer(fake.context, {
    fetch: extra.fetch ?? (async () => new Response(mp3.slice())),
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

  it('hiljaisilla raidoilla kalibrointi epäonnistuu hallitusti ja oletetaan Applen käytös', async () => {
    const { player } = setup(8842, { silent: true });
    await expect(player.load(urls)).resolves.toBe('valmis');
    expect(player.events.some(e => e.kind === 'kalibrointi-epaonnistui')).toBe(true);
  });

  it('kalibroidaan vain kerran soittimen elinaikana', async () => {
    const { player } = setup();
    await player.load(urls); await player.load(urls);
    expect(player.events.filter(e => e.kind === 'kalibroitu')).toHaveLength(1);
  });
});

/** Kello eteenpäin ilman ajastimen kierrosta (kohdan laskenta). */
function fakeAdvanceNoTick(player: ChunkSongPlayer, to: number) {
  (player as unknown as { context: { currentTime: number } }).context.currentTime = to;
}
