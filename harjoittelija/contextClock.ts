/**
 * Issue #9, D2: AudioContextin pysähtyneen kellon tunnistus ja palautus näytön lukituksen jälkeen.
 *
 * Fyysisellä iPhonella (PR #92, D5/D6, 17.11.2026) lukitus jätti kontekstin tilaan `running`, mutta `currentTime`
 * pysyi paikallaan yli 100 s eikä mitään kuulunut. `suspend()` → `resume()` palautti kellon ja äänen (R1 PASS).
 * Tämä moduuli toteuttaa saman periaatteen D2:n omalle kontekstille; PR #92:n vanhan soittimen koodia ei käytetä.
 *
 * Pysähdys todetaan vasta, kun vertailuväli on vähintään minWindowMs ja kontekstin kello on edennyt alle
 * STALL_RATIO kertaa seinäkellon matkan. iOS renderöi 2,7–43 ms:n jaksoissa, joten toimiva kello etenee 250 ms:ssä
 * vähintään noin 0,83 kertaa seinäkellon nopeudella; pysähtynyt kello eteni D6:ssa tasan 0.
 */
export const CLOCK_MIN_WINDOW_MS = 250;
/** Soiton aikainen valvonta vaatii pidemmän ikkunan, jottei yksittäinen viive pysäytä soittoa. */
export const CLOCK_PLAYING_WINDOW_MS = 1000;
export const CLOCK_STALL_RATIO = 0.5;
/** suspend()- ja resume()-kutsujen aikaraja palautuksessa. */
export const RECOVERY_TIMEOUT_MS = 2000;

export type ClockStatus = 'ok' | 'stalled' | 'unknown';
interface Sample { context: number; wall: number }

/** Kontekstin kellon ja seinäkellon näytteet (näkyvältä sivulta). */
export class ContextClockWatch {
  private samples: Sample[] = [];

  /** contextSeconds = AudioContext.currentTime, wallMs = performance.now(). */
  sample(contextSeconds: number, wallMs: number) {
    const last = this.samples[this.samples.length - 1];
    // Sama hetki tai taaksepäin mennyt seinäkello: ei uutta tietoa.
    if (last && wallMs <= last.wall) return;
    this.samples.push({ context: contextSeconds, wall: wallMs });
    if (this.samples.length > 32) this.samples.shift();
  }

  /** Nollaa näytteet (sivu piiloon tai näkyviin, uusi konteksti, palautus): piilossa kello saa pysähtyä. */
  reset() { this.samples = []; }

  /**
   * Uusinta näytettä verrataan uusimpaan vähintään minWindowMs vanhempaan näytteeseen.
   * 'unknown', jos vertailukohtaa ei ole.
   */
  status(minWindowMs = CLOCK_MIN_WINDOW_MS): ClockStatus {
    const newest = this.samples[this.samples.length - 1];
    if (!newest) return 'unknown';
    for (let i = this.samples.length - 2; i >= 0; i--) {
      const old = this.samples[i];
      const wall = newest.wall - old.wall;
      if (wall < minWindowMs) continue;
      const advanced = (newest.context - old.context) * 1000;
      return advanced < CLOCK_STALL_RATIO * wall ? 'stalled' : 'ok';
    }
    return 'unknown';
  }
}

/** AudioContextin osa, jota palautus käyttää (testattavissa ilman selainta). */
export interface RecoverableContext {
  readonly state: AudioContextState | string;
  suspend?(): Promise<void>;
  resume(): Promise<void>;
}

export interface RecoveryResult { ok: boolean; reason?: string }

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`${label}: aikaraja ${ms} ms`)), ms);
    promise.then(value => { clearTimeout(timer); resolve(value); }, error => { clearTimeout(timer); reject(error); });
  });
}

/**
 * Palauttaa pysähtyneen kontekstin: suspend() ja sen jälkeen resume(), kumpikin aikarajalla. Kutsutaan
 * käyttäjän painalluksesta (iOS voi vaatia eleen). Ei heitä: epäonnistuminen palauttaa syyn.
 */
export async function recoverContext(context: RecoverableContext, timeoutMs = RECOVERY_TIMEOUT_MS): Promise<RecoveryResult> {
  try {
    if (context.state === 'closed') return { ok: false, reason: 'konteksti suljettu' };
    if (typeof context.suspend === 'function' && context.state === 'running') await withTimeout(context.suspend(), timeoutMs, 'suspend');
    if (context.state === 'closed') return { ok: false, reason: 'konteksti suljettu' };
    await withTimeout(context.resume(), timeoutMs, 'resume');
    if (context.state !== 'running') return { ok: false, reason: `tila ${context.state}` };
    return { ok: true };
  } catch (error) {
    const name = error instanceof DOMException || error instanceof Error ? error.name : '';
    const message = error instanceof Error ? error.message : String(error);
    return { ok: false, reason: name && name !== 'Error' ? `${name}: ${message}` : message };
  }
}

/** Odottaa ms ja kertoo, etenikö kontekstin kello (palautuksen varmistus ennen soittoa). */
export async function clockAdvances(read: () => number, { ms = 300, now = () => performance.now(),
  wait = (t: number) => new Promise<void>(resolve => setTimeout(resolve, t)) } = {}): Promise<boolean> {
  const start = read(), wallStart = now();
  await wait(ms);
  const advanced = (read() - start) * 1000, wall = now() - wallStart;
  return advanced >= CLOCK_STALL_RATIO * Math.max(ms, wall);
}
