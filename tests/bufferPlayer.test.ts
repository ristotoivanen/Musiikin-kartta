import { describe, expect, it } from 'vitest';
import { BUFFER_TRACKS, BufferSongPlayer, START_LEAD_SECONDS, type PlayerContext } from '../harjoittelija/bufferPlayer';

/** Väärennetty AudioContext: kello asetetaan käsin, lähteet ja purku kirjataan. */
function fakeContext(durations = { backing: 212.2, guitar: 212.2, vocals: 212.3 }) {
  const sources: FakeSource[] = [];
  const decodes: { resolve: () => void; size: number }[] = [];
  let manualDecode = false;
  class FakeSource {
    buffer: { duration: number } | null = null; loop = false; loopStart = 0; loopEnd = 0;
    started: [number, number] | null = null; stopped = false; connected = 0;
    onended: (() => void) | null = null;
    connect() { this.connected++; } disconnect() { this.connected = 0; }
    start(when: number, offset: number) { this.started = [when, offset]; }
    stop() { this.stopped = true; }
  }
  const gain = () => ({ gain: { value: 1, setTargetAtTime(value: number) { this.value = value; } }, connect() {}, disconnect() {} });
  const context = {
    currentTime: 10, destination: {} as AudioNode, outputLatency: 0, baseLatency: 0.003,
    createGain: () => gain() as unknown as GainNode,
    createBufferSource: () => { const s = new FakeSource(); sources.push(s); return s as unknown as AudioBufferSourceNode; },
    decodeAudioData(data: ArrayBuffer) {
      const track = new TextDecoder().decode(data) as keyof typeof durations;
      const buffer = { duration: durations[track], length: Math.round(durations[track] * 48000), numberOfChannels: 2, sampleRate: 48000 } as AudioBuffer;
      if (!manualDecode) return Promise.resolve(buffer);
      return new Promise<AudioBuffer>(resolve => decodes.push({ resolve: () => resolve(buffer), size: data.byteLength }));
    },
    getOutputTimestamp: undefined as undefined | (() => AudioTimestamp),
  };
  return { context: context as PlayerContext & typeof context, sources, decodes, manual: () => { manualDecode = true; } };
}
const urls = { backing: 'backing', guitar: 'guitar', vocals: 'vocals' };
const fetchOk = async (url: string) => new Response(url);

describe('D1: puretut raidat AudioBufferSourceNodeilla (issue #9)', () => {
  it('lataa ja purkaa kolme raitaa ja kirjaa koot ja kestot', async () => {
    const { context } = fakeContext();
    const player = new BufferSongPlayer(context, { fetch: fetchOk });
    await expect(player.load(urls)).resolves.toBe('valmis');
    expect(player.state).toBe('valmis');
    expect(player.duration).toBeCloseTo(212.2);
    expect(player.events.filter(e => e.kind === 'ladattu').map(e => e.track)).toEqual(['backing', 'guitar', 'vocals']);
    expect(player.events.filter(e => e.kind === 'purettu').map(e => e.track)).toEqual(['backing', 'guitar', 'vocals']);
    expect(player.bufferBytes).toBe((Math.round(212.2 * 48000) * 2 + Math.round(212.2 * 48000) * 2 + Math.round(212.3 * 48000) * 2) * 4);
  });

  it('käynnistää kaikki raidat samalla start(when, offset) -kutsulla ja yhteisellä loopin alueella', async () => {
    const { context, sources } = fakeContext();
    const player = new BufferSongPlayer(context, { fetch: fetchOk });
    await player.load(urls);
    player.setLoop(true);
    expect(player.play(30)).toBe(true);
    expect(sources).toHaveLength(3);
    expect(sources.map(s => s.started)).toEqual([[10 + START_LEAD_SECONDS, 30], [10 + START_LEAD_SECONDS, 30], [10 + START_LEAD_SECONDS, 30]]);
    expect(sources.map(s => [s.loop, s.loopStart, s.loopEnd])).toEqual(BUFFER_TRACKS.map(() => [true, 0, player.duration]));
  });

  it('tauko ja jatko luovat uudet lähteet samoista puskureista ja jatkavat täsmälleen pysäytyskohdasta', async () => {
    const { context, sources } = fakeContext();
    const player = new BufferSongPlayer(context, { fetch: fetchOk });
    await player.load(urls);
    player.play(5);
    context.currentTime = 10 + START_LEAD_SECONDS + 2.5;
    expect(player.pause()).toBeCloseTo(7.5);
    expect(sources.every(s => s.stopped)).toBe(true);
    expect(player.playing).toBe(false);
    context.currentTime = 20;
    player.play();
    const second = sources.slice(3);
    expect(second.map(s => s.started)).toEqual([[20 + START_LEAD_SECONDS, 7.5], [20 + START_LEAD_SECONDS, 7.5], [20 + START_LEAD_SECONDS, 7.5]]);
    expect(second.map(s => s.buffer)).toEqual(sources.slice(0, 3).map(s => s.buffer));
  });

  it('kelaus soiton aikana käynnistää uudet lähteet uudesta kohdasta, tauolla vain tallentaa kohdan', async () => {
    const { context, sources } = fakeContext();
    const player = new BufferSongPlayer(context, { fetch: fetchOk });
    await player.load(urls);
    player.play(0);
    player.seek(80);
    expect(sources.slice(0, 3).every(s => s.stopped)).toBe(true);
    expect(sources.slice(3).map(s => s.started![1])).toEqual([80, 80, 80]);
    player.pause();
    player.seek(15);
    expect(sources).toHaveLength(6);
    expect(player.position()).toBe(15);
  });

  it('raidan pois- ja päällekytkentä muuttaa vain tasoa eikä pysäytä lähteitä', async () => {
    const { context, sources } = fakeContext();
    const player = new BufferSongPlayer(context, { fetch: fetchOk });
    await player.load(urls);
    player.play(0);
    player.setLevel('guitar', 0);
    expect(player.level('guitar')).toBe(0);
    player.setLevel('guitar', 0.78);
    expect(player.level('guitar')).toBe(0.78);
    expect(sources.some(s => s.stopped)).toBe(false);
    expect(sources).toHaveLength(3);
  });

  it('loop kiertää kohdan alkuun kaikilla raidoilla, ja loppu ilman looppia pysäyttää toiston', async () => {
    const { context, sources } = fakeContext();
    const player = new BufferSongPlayer(context, { fetch: fetchOk });
    await player.load(urls);
    player.play(210);
    player.setLoop(true);
    expect(sources.every(s => s.loop)).toBe(true);
    context.currentTime = 10 + START_LEAD_SECONDS + 4;
    expect(player.position()).toBeCloseTo(214 - player.duration);
    // Ilman looppia: säestyksen loppu päättää toiston ja seuraava kohta on kappaleen pituus.
    player.setLoop(false);
    player.play(211);
    let ended = 0; player.onEnded = () => { ended++; };
    sources[3].onended?.();
    expect([ended, player.playing, player.position()]).toEqual([1, false, player.duration]);
  });

  it('uusi versio vapauttaa vanhat puskurit ja lähteet ennen purkua', async () => {
    const { context, sources, decodes, manual } = fakeContext();
    const player = new BufferSongPlayer(context, { fetch: fetchOk });
    await player.load(urls);
    player.play(3);
    manual();
    const next = player.load(urls);
    expect(sources.every(s => s.stopped)).toBe(true);
    expect(player.duration).toBe(0);
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(player.state).toBe('puretaan');
    for (let i = 0; i < 3; i++) { decodes[i].resolve(); await new Promise(resolve => setTimeout(resolve, 0)); }
    await expect(next).resolves.toBe('valmis');
    expect(player.events.filter(e => e.kind === 'vapautettu')).toHaveLength(1);
  });

  it('peruutus latauksen tai purun aikana ei jätä puskureita eikä soittoa', async () => {
    const { context, decodes, manual } = fakeContext();
    let release: () => void = () => {};
    const slowFetch = (url: string, init?: RequestInit) => new Promise<Response>((resolve, reject) => {
      release = () => resolve(new Response(url));
      init?.signal?.addEventListener('abort', () => reject(new DOMException('peruttu', 'AbortError')));
    });
    const player = new BufferSongPlayer(context, { fetch: slowFetch });
    const loading = player.load(urls);
    player.cancel();
    await expect(loading).resolves.toBe('peruttu');
    expect([player.state, player.duration, player.play(0)]).toEqual(['tyhja', 0, false]);
    void release;

    manual();
    const decoding = new BufferSongPlayer(context, { fetch: fetchOk });
    const pending = decoding.load(urls);
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(decoding.state).toBe('puretaan');
    decoding.release();
    decodes.at(-1)!.resolve();
    await expect(pending).resolves.toBe('peruttu');
    expect([decoding.state, decoding.duration]).toEqual(['tyhja', 0]);
  });

  it('latausvirhe jättää soittimen virhetilaan eikä soita', async () => {
    const { context } = fakeContext();
    const player = new BufferSongPlayer(context, { fetch: async url => url === 'vocals' ? new Response('', { status: 404 }) : new Response(url) });
    await expect(player.load(urls)).resolves.toBe('virhe');
    expect(player.state).toBe('virhe');
    expect(player.error).toContain('404');
    expect(player.play(0)).toBe(false);
    expect(player.playing).toBe(false);
  });

  it('kuuluva kohta lasketaan ulostulon aikaleimasta, ei renderöinnin kellosta', async () => {
    const { context } = fakeContext();
    const player = new BufferSongPlayer(context, { fetch: fetchOk, now: () => 5000 });
    await player.load(urls);
    player.play(40);
    context.currentTime = 10 + START_LEAD_SECONDS + 3;
    // Ulostulossa on parhaillaan 40 ms aiempi kontekstin hetki kuin renderöinnissä.
    context.getOutputTimestamp = () => ({ contextTime: context.currentTime - 0.05, performanceTime: 4990 });
    expect(player.position()).toBeCloseTo(43);
    expect(player.audiblePosition(5000)).toBeCloseTo(42.96);
  });
});
