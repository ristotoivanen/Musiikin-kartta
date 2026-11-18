import { describe, expect, it } from 'vitest';
import { LoadError, OnceLoader, loadWhole, type LoadOptions } from '../harjoittelija/kaksiraitatesti/lataus';
import { blobReference } from '../harjoittelija/kaksiraitatesti/mittaus';
import { encodeWav16 } from '../harjoittelija/kaksiraitatesti/synteettinen';

const noWait = { sleep: async () => {} } satisfies LoadOptions;
const bytes = (count: number) => new Uint8Array(count).map((_, index) => index % 251);
const ok = (body: Uint8Array, length = body.byteLength) =>
  new Response(body.buffer as ArrayBuffer, { status: 200, headers: { 'Content-Length': String(length), 'Content-Type': 'audio/wav' } });

/** Vastaa annetuilla vastauksilla järjestyksessä ja kirjaa pyyntöjen otsakkeet. */
function scripted(...answers: (() => Promise<Response> | Response)[]) {
  const calls: { url: string; range: string | null }[] = [];
  const fetchImpl = (async (input: RequestInfo | URL, init?: RequestInit) => {
    calls.push({ url: String(input), range: new Headers(init?.headers).get('Range') });
    const next = answers[Math.min(calls.length - 1, answers.length - 1)];
    return next();
  }) as typeof fetch;
  return { calls, fetchImpl };
}

describe('loadWhole', () => {
  it('lataa koko tiedoston yhdellä pyynnöllä ilman Range-otsaketta ja raportoi edistymisen', async () => {
    const data = bytes(300_000);
    const { calls, fetchImpl } = scripted(() => ok(data));
    const progress: number[] = [];
    const blob = await loadWhole('a.wav', { ...noWait, fetchImpl, onProgress: item => progress.push(item.loaded) });
    expect(new Uint8Array(await blob.arrayBuffer())).toEqual(data);
    expect(blob.type).toBe('audio/wav');
    expect(calls).toEqual([{ url: 'a.wav', range: null }]);
    expect(progress.at(-1)).toBe(300_000);
  });

  it('uusii HTTP 503 -vastaukset ja onnistuu kolmannella yrityksellä', async () => {
    const failures: unknown[] = [];
    const { calls, fetchImpl } = scripted(
      () => new Response('error code: 1102', { status: 503 }),
      () => new Response('error code: 1102', { status: 503 }),
      () => ok(bytes(10)),
    );
    const blob = await loadWhole('a.wav', { ...noWait, fetchImpl, onAttemptFailed: item => failures.push(item) });
    expect(blob.size).toBe(10);
    expect(calls).toHaveLength(3);
    expect(failures).toEqual([
      { attempt: 1, reason: 'HTTP 503', willRetry: true },
      { attempt: 2, reason: 'HTTP 503', willRetry: true },
    ]);
  });

  it('pysyvä 503 päättyy selkeään virheeseen yritysten jälkeen', async () => {
    const { calls, fetchImpl } = scripted(() => new Response('', { status: 503 }));
    const error = await loadWhole('a.wav', { ...noWait, fetchImpl }).catch(cause => cause);
    expect(error).toBeInstanceOf(LoadError);
    expect((error as LoadError).message).toBe('HTTP 503 (3 yritystä)');
    expect(calls).toHaveLength(3);
  });

  it('puuttuvaa tiedostoa (404) ei uusita', async () => {
    const { calls, fetchImpl } = scripted(() => new Response('', { status: 404 }));
    await expect(loadWhole('a.wav', { ...noWait, fetchImpl })).rejects.toThrow('HTTP 404 (1 yritys)');
    expect(calls).toHaveLength(1);
  });

  it('viivästynyt vastaus keskeytetään aikarajan jälkeen ja yritetään uudelleen', async () => {
    const { calls, fetchImpl } = scripted(
      () => new Promise<Response>(() => { /* Ei koskaan vastaa. */ }),
      () => ok(bytes(5)),
    );
    // fetchImpl ei kuuntele signaalia: aikaraja keskeyttää odotuksen silti.
    const raced = (async (input: RequestInfo | URL, init?: RequestInit) => Promise.race([
      fetchImpl(input, init),
      new Promise<Response>((_, reject) => init?.signal?.addEventListener('abort', () => reject(new DOMException('aborted', 'AbortError')))),
    ])) as typeof fetch;
    const failures: string[] = [];
    const blob = await loadWhole('a.wav', { ...noWait, fetchImpl: raced, idleTimeoutMs: 50, onAttemptFailed: item => failures.push(item.reason) });
    expect(blob.size).toBe(5);
    expect(calls).toHaveLength(2);
    expect(failures).toEqual(['ei vastausta 50 ms']);
  });

  it('kesken pysähtynyt lataus keskeytetään ja yritetään uudelleen', async () => {
    const stalled = () => {
      const body = new ReadableStream<Uint8Array>({ start(controller) { controller.enqueue(bytes(4)); } });
      return new Response(body, { status: 200, headers: { 'Content-Length': '8' } });
    };
    const { calls, fetchImpl } = scripted(stalled, () => ok(bytes(8)));
    const failures: string[] = [];
    const blob = await loadWhole('a.wav', { ...noWait, fetchImpl, idleTimeoutMs: 50, onAttemptFailed: item => failures.push(item.reason) });
    expect(blob.size).toBe(8);
    expect(calls).toHaveLength(2);
    expect(failures[0]).toMatch(/^lataus pysähtyi/);
  });

  it('vajaa tiedosto (Content-Length ei täsmää) yritetään uudelleen', async () => {
    const { calls, fetchImpl } = scripted(() => ok(bytes(4), 8), () => ok(bytes(8)));
    const blob = await loadWhole('a.wav', { ...noWait, fetchImpl });
    expect(blob.size).toBe(8);
    expect(calls).toHaveLength(2);
  });
});

describe('OnceLoader', () => {
  it('samanaikaiset ja myöhemmät kutsut jakavat yhden latauksen', async () => {
    const { calls, fetchImpl } = scripted(() => ok(bytes(3)));
    const loader = new OnceLoader(() => ({ ...noWait, fetchImpl }));
    const [first, second] = await Promise.all([loader.load('a.wav'), loader.load('a.wav')]);
    expect(first).toBe(second);
    expect(await loader.load('a.wav')).toBe(first);
    expect(calls).toHaveLength(1);
  });

  it('epäonnistunut lataus ei jää välimuistiin: seuraava kutsu lataa uudelleen', async () => {
    const { calls, fetchImpl } = scripted(() => new Response('', { status: 503 }), () => ok(bytes(3)));
    const loader = new OnceLoader(() => ({ ...noWait, fetchImpl, attempts: 1 }));
    await expect(loader.load('a.wav')).rejects.toThrow('HTTP 503');
    expect((await loader.load('a.wav')).size).toBe(3);
    expect(calls).toHaveLength(2);
  });
});

describe('blobReference', () => {
  const samples = new Float32Array(48000).map((_, index) => Math.sin(index / 10) * 0.5);
  const wav = () => new Blob([encodeWav16(samples, 48000)], { type: 'audio/wav' });

  it('lukee ikkunat kerran ladatusta Blobista', async () => {
    let loads = 0;
    const reference = blobReference(async () => { loads++; return wav(); });
    expect(await reference.durationSeconds()).toBeCloseTo(1, 6);
    const window = await reference.window(0.5, 0.6);
    expect(window.startSeconds).toBeCloseTo(0.5, 6);
    expect(window.samples.length).toBe(4800);
    expect(window.samples[0]).toBeCloseTo(samples[24000], 3);
    expect(loads).toBeGreaterThan(0);
  });

  it('epäonnistunut lataus ei estä myöhempiä mittauksia', async () => {
    let attempt = 0;
    const reference = blobReference(async () => {
      attempt++;
      if (attempt === 1) throw new Error('HTTP 503');
      return wav();
    });
    await expect(reference.durationSeconds()).rejects.toThrow('HTTP 503');
    expect(await reference.durationSeconds()).toBeCloseTo(1, 6);
  });
});
