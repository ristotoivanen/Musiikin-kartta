/**
 * Äänitiedostojen lataus kerran kokonaisena (ilman Range-otsaketta).
 *
 * Cloudflare Pagesin äänifunktio (`functions/assets/audio/[[path]].ts`) lukee koko tiedoston muistiin
 * jokaista Range-pyyntöä varten. 23 Mt:n WAVeilla se ylittää Workerin resurssirajan, ja Cloudflare
 * vastaa `503 error code: 1102` noin joka kolmanteen pyyntöön (mitattu 18.11.2026). Pyyntö ilman
 * Rangea välitetään virtana eikä kuormita funktiota. Siksi WAV-tiedostot ladataan kerran kokonaan,
 * ja sama Blob palvelee sekä toistoa (Blob-osoite) että mittausreferenssiä.
 */
export interface LoadProgress { loaded: number; total: number | null; attempt: number }
export interface LoadOptions {
  /** Yritysten enimmäismäärä (oletus 3). */
  attempts?: number;
  /** Odotus ennen uusintayritystä, ms (oletus [1000, 3000]). Viimeistä arvoa käytetään loppuun asti. */
  retryDelaysMs?: number[];
  /** Yritys keskeytetään, jos tavuja ei tule näin pitkään aikaan, ms (oletus 20 000). */
  idleTimeoutMs?: number;
  onProgress?(progress: LoadProgress): void;
  onAttemptFailed?(failure: { attempt: number; reason: string; willRetry: boolean }): void;
  fetchImpl?: typeof fetch;
  sleep?(ms: number): Promise<void>;
}

export class LoadError extends Error {
  constructor(readonly url: string, readonly reason: string, readonly attempts: number) {
    super(`${reason} (${attempts} ${attempts === 1 ? 'yritys' : 'yritystä'})`);
    this.name = 'LoadError';
  }
}

class AttemptError extends Error {
  constructor(message: string, readonly retryable: boolean) { super(message); }
}

/** Uusitaan palvelimen ylikuorma ja aikakatkaisut, ei esimerkiksi puuttuvaa tiedostoa (404). */
const retryableStatus = (status: number) => status >= 500 || status === 408 || status === 429;

async function attemptLoad(url: string, attempt: number, options: LoadOptions): Promise<Blob> {
  const controller = new AbortController();
  const idleMs = options.idleTimeoutMs ?? 20_000;
  let idle = 0;
  let timedOut = false;
  let reader: ReadableStreamDefaultReader<Uint8Array> | null = null;
  const arm = () => {
    clearTimeout(idle);
    idle = setTimeout(() => {
      timedOut = true;
      controller.abort();
      // Varmistus: kaikki virrat eivät katkea signaalista, joten lukija perutaan myös suoraan.
      reader?.cancel().catch(() => { /* Jo katkennut. */ });
    }, idleMs) as unknown as number;
  };
  arm();
  const limit = idleMs >= 1000 ? `${Math.round(idleMs / 1000)} s` : `${idleMs} ms`;
  try {
    let response: Response;
    try {
      response = await (options.fetchImpl ?? fetch)(url, { signal: controller.signal });
    } catch (cause) {
      throw new AttemptError(timedOut ? `ei vastausta ${limit}` : `verkkovirhe (${String(cause)})`, true);
    }
    if (!response.ok) throw new AttemptError(`HTTP ${response.status}`, retryableStatus(response.status));
    const total = Number(response.headers.get('Content-Length')) || null;
    const type = response.headers.get('Content-Type') ?? 'application/octet-stream';
    if (!response.body) {
      const blob = await response.blob();
      options.onProgress?.({ loaded: blob.size, total, attempt });
      return blob;
    }
    reader = response.body.getReader();
    const chunks: Uint8Array[] = [];
    let loaded = 0;
    for (;;) {
      let part: ReadableStreamReadResult<Uint8Array>;
      try {
        part = await reader.read();
      } catch (cause) {
        throw new AttemptError(timedOut ? `lataus pysähtyi ${limit}` : `lataus katkesi (${String(cause)})`, true);
      }
      if (timedOut) throw new AttemptError(`lataus pysähtyi ${limit}`, true);
      if (part.done) break;
      arm();
      chunks.push(part.value);
      loaded += part.value.byteLength;
      options.onProgress?.({ loaded, total, attempt });
    }
    if (total !== null && loaded !== total) throw new AttemptError(`vajaa tiedosto (${loaded}/${total} tavua)`, true);
    return new Blob(chunks as BlobPart[], { type });
  } finally {
    clearTimeout(idle);
  }
}

/** Lataa tiedoston kokonaan. Uusii palvelinvirheet, verkkovirheet ja pysähtyneet lataukset. */
export async function loadWhole(url: string, options: LoadOptions = {}): Promise<Blob> {
  const attempts = Math.max(1, options.attempts ?? 3);
  const delays = options.retryDelaysMs ?? [1000, 3000];
  const sleep = options.sleep ?? ((ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms)));
  for (let attempt = 1; ; attempt++) {
    try {
      return await attemptLoad(url, attempt, options);
    } catch (cause) {
      const reason = cause instanceof AttemptError ? cause.message : String(cause);
      const willRetry = cause instanceof AttemptError && cause.retryable && attempt < attempts;
      options.onAttemptFailed?.({ attempt, reason, willRetry });
      if (!willRetry) throw new LoadError(url, reason, attempt);
      await sleep(delays[Math.min(attempt - 1, delays.length - 1)] ?? 0);
    }
  }
}

/**
 * Lataa kunkin osoitteen vain kerran. Onnistunut lataus jaetaan kaikille kutsujille; epäonnistunut
 * poistetaan välimuistista, jotta seuraava kutsu (esim. Yritä uudelleen) lataa uudelleen.
 */
export class OnceLoader {
  private readonly cache = new Map<string, Promise<Blob>>();
  constructor(private readonly options: (url: string) => LoadOptions = () => ({})) {}

  load(url: string): Promise<Blob> {
    let pending = this.cache.get(url);
    if (!pending) {
      pending = loadWhole(url, this.options(url));
      this.cache.set(url, pending);
      pending.catch(() => { if (this.cache.get(url) === pending) this.cache.delete(url); });
    }
    return pending;
  }
}
