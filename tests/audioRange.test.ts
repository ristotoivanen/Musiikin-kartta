import { describe, expect, it } from 'vitest';
import { onRequest, parseRange } from '../functions/assets/audio/[[path]].ts';

const bytes = new Uint8Array(Array.from({ length: 1000 }, (_, i) => i % 256));
const asset = (type = 'audio/mpeg', status = 200) => () => Promise.resolve(new Response(status === 200 ? bytes.slice() : null, {
  status, headers: { 'Content-Type': type, ETag: '"abc"', 'Cache-Control': 'public, max-age=0' },
}));
const call = (headers: Record<string, string> = {}, next = asset(), method = 'GET') =>
  onRequest({ request: new Request('https://example.test/assets/audio/x.mp3', { method, headers }), next });

describe('parseRange', () => {
  it('tulkitsee alku-loppu-, avoimen ja loppuosan alueen', () => {
    expect(parseRange('bytes=0-99', 1000)).toEqual([0, 99]);
    expect(parseRange('bytes=900-', 1000)).toEqual([900, 999]);
    expect(parseRange('bytes=-100', 1000)).toEqual([900, 999]);
    expect(parseRange('bytes=990-5000', 1000)).toEqual([990, 999]);
  });
  it('hylkää mahdottoman alueen ja ohittaa tuntemattoman muodon', () => {
    expect(parseRange('bytes=1000-', 1000)).toBe('invalid');
    expect(parseRange('bytes=50-10', 1000)).toBe('invalid');
    expect(parseRange('bytes=-0', 1000)).toBe('invalid');
    expect(parseRange('bytes=0-1,5-6', 1000)).toBeNull();
    expect(parseRange('items=0-1', 1000)).toBeNull();
  });
});

describe('äänitiedostojen Range-funktio', () => {
  it('palauttaa pyydetyn alueen 206-vastauksena ja säilyttää alkuperäiset otsakkeet', async () => {
    const res = await call({ Range: 'bytes=100-199' });
    expect(res.status).toBe(206);
    expect(res.headers.get('Content-Range')).toBe('bytes 100-199/1000');
    expect(res.headers.get('Content-Length')).toBe('100');
    expect(res.headers.get('Content-Type')).toBe('audio/mpeg');
    expect(res.headers.get('ETag')).toBe('"abc"');
    const body = new Uint8Array(await res.arrayBuffer());
    expect(body.length).toBe(100);
    expect(body[0]).toBe(100);
    expect(body[99]).toBe(199);
  });
  it('ilmoittaa Range-tuesta myös kokonaisessa vastauksessa', async () => {
    const res = await call();
    expect(res.status).toBe(200);
    expect(res.headers.get('Accept-Ranges')).toBe('bytes');
    expect((await res.arrayBuffer()).byteLength).toBe(1000);
  });
  it('vastaa mahdottomaan alueeseen 416', async () => {
    const res = await call({ Range: 'bytes=5000-' });
    expect(res.status).toBe(416);
    expect(res.headers.get('Content-Range')).toBe('bytes */1000');
  });
  it('palauttaa koko tiedoston, jos If-Range ei vastaa ETagia', async () => {
    const res = await call({ Range: 'bytes=0-9', 'If-Range': '"vanha"' });
    expect(res.status).toBe(200);
  });
  it('HEAD-pyyntö ei lue sisältöä mutta kertoo Range-tuen', async () => {
    const res = await call({ Range: 'bytes=0-9' }, asset(), 'HEAD');
    expect(res.status).toBe(200);
    expect(res.headers.get('Accept-Ranges')).toBe('bytes');
  });
  it('puuttuva tiedosto antaa 404:n eikä etusivun HTML:ää', async () => {
    const res = await call({ Range: 'bytes=0-9' }, asset('text/html; charset=utf-8'));
    expect(res.status).toBe(404);
  });
  it('ei koske muihin kuin äänitiedostoihin', async () => {
    const res = await call({ Range: 'bytes=0-9' }, asset('text/markdown; charset=utf-8'));
    expect(res.status).toBe(200);
    expect(res.headers.get('Accept-Ranges')).toBeNull();
  });
});
