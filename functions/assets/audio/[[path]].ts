// Cloudflare Pages Function: tavualueet (HTTP Range) äänitiedostoille.
//
// Pagesin staattinen palvelu vastaa Range-pyyntöön aina koko tiedostolla (200).
// Ilman 206-vastausta selain ei pysty kelaamaan <audio>-elementtiä, jolloin
// kappaleharjoittelun hypyt, tauko–jatko ja raitojen synkronointi palaavat alkuun.
// Tämä funktio ajetaan vain polulle /assets/audio/* ja palauttaa pyydetyn alueen.
// Puuttuva tiedosto palauttaa 404:n eikä sivuston etusivua (Pagesin oletus).

interface Context {
  request: Request;
  next: () => Promise<Response>;
}

const MEDIA = /^(audio|video)\//i;

function withHeaders(response: Response, status: number, extra: Record<string, string>, body: BodyInit | null = response.body): Response {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(extra)) headers.set(key, value);
  return new Response(body, { status, statusText: status === 206 ? 'Partial Content' : status === 416 ? 'Range Not Satisfiable' : response.statusText, headers });
}

/** Palauttaa [alku, loppu] (molemmat mukaan lukien), null = ei tulkittavissa, 'invalid' = alue ei mahdu. */
export function parseRange(header: string, size: number): [number, number] | null | 'invalid' {
  const match = /^bytes=(\d*)-(\d*)$/.exec(header.trim());
  if (!match) return null; // Myös useampi alue (pilkku) palautetaan kokonaisena.
  const [, rawStart, rawEnd] = match;
  if (rawStart === '' && rawEnd === '') return null;
  let start: number;
  let end: number;
  if (rawStart === '') {
    const suffix = Number(rawEnd);
    if (suffix === 0) return 'invalid';
    start = Math.max(0, size - suffix);
    end = size - 1;
  } else {
    start = Number(rawStart);
    end = rawEnd === '' ? size - 1 : Math.min(Number(rawEnd), size - 1);
  }
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start >= size || start > end) return 'invalid';
  return [start, end];
}

export async function onRequest({ request, next }: Context): Promise<Response> {
  const response = await next();
  if (request.method !== 'GET' && request.method !== 'HEAD') return response;
  const type = response.headers.get('Content-Type') ?? '';
  if (response.status === 200 && type.toLowerCase().startsWith('text/html')) {
    return new Response('Tiedostoa ei löydy.', { status: 404, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }
  if (response.status !== 200 || !MEDIA.test(type)) return response;

  const range = request.headers.get('Range');
  const ifRange = request.headers.get('If-Range');
  const etag = response.headers.get('ETag');
  const rangeApplies = range && (!ifRange || (etag !== null && ifRange === etag));
  if (request.method === 'HEAD' || !rangeApplies) return withHeaders(response, 200, { 'Accept-Ranges': 'bytes' });

  const data = await response.arrayBuffer();
  const size = data.byteLength;
  const parsed = parseRange(range, size);
  if (parsed === null) return withHeaders(response, 200, { 'Accept-Ranges': 'bytes', 'Content-Length': String(size) }, data);
  if (parsed === 'invalid') return withHeaders(response, 416, { 'Accept-Ranges': 'bytes', 'Content-Range': `bytes */${size}`, 'Content-Length': '0' }, null);
  const [start, end] = parsed;
  return withHeaders(response, 206, {
    'Accept-Ranges': 'bytes',
    'Content-Range': `bytes ${start}-${end}/${size}`,
    'Content-Length': String(end - start + 1),
  }, data.slice(start, end + 1));
}
