import { afterEach, describe, expect, it, vi } from 'vitest';
import { CLOCK_PLAYING_WINDOW_MS, ContextClockWatch, RECOVERY_TIMEOUT_MS, clockAdvances, recoverContext } from '../harjoittelija/contextClock';

describe('D2: kontekstin kellon seuranta (lukituksen jälkeinen pysähdys, PR #92 D6)', () => {
  it('yksi näyte tai liian lyhyt väli antaa unknown', () => {
    const watch = new ContextClockWatch();
    expect(watch.status()).toBe('unknown');
    watch.sample(10, 1000);
    expect(watch.status()).toBe('unknown');
    watch.sample(10.2, 1200);
    expect(watch.status()).toBe('unknown');
  });

  it('normaali kello, myös iOS:n 43 ms:n renderöintijaksoissa etenevä, on ok', () => {
    const watch = new ContextClockWatch();
    for (let wall = 0; wall <= 1000; wall += 50) watch.sample(Math.floor(wall / 43) * 0.043, wall);
    expect(watch.status()).toBe('ok');
    expect(watch.status(CLOCK_PLAYING_WINDOW_MS)).toBe('ok');
  });

  it('D6:n luvut: tila running, currentTime 43,6907 s yli 100 s → stalled', () => {
    const watch = new ContextClockWatch();
    for (let wall = 0; wall <= 100000; wall += 250) watch.sample(43.6907, 5000 + wall);
    expect(watch.status()).toBe('stalled');
    expect(watch.status(CLOCK_PLAYING_WINDOW_MS)).toBe('stalled');
  });

  it('raja 0,5: kello etenee puolella nopeudella → ok, alle → stalled', () => {
    const half = new ContextClockWatch();
    half.sample(0, 0); half.sample(0.5, 1000);
    expect(half.status(CLOCK_PLAYING_WINDOW_MS)).toBe('ok');
    const slower = new ContextClockWatch();
    slower.sample(0, 0); slower.sample(0.49, 1000);
    expect(slower.status(CLOCK_PLAYING_WINDOW_MS)).toBe('stalled');
  });

  it('vertailukohta on uusin riittävän vanha näyte: vanha toimiva jakso ei peitä tuoretta pysähdystä', () => {
    const watch = new ContextClockWatch();
    for (let wall = 0; wall <= 3000; wall += 250) watch.sample(wall / 1000, wall);
    // Kello pysähtyy 3 s:n kohdalla.
    for (let wall = 3250; wall <= 4500; wall += 250) watch.sample(3, wall);
    expect(watch.status(CLOCK_PLAYING_WINDOW_MS)).toBe('stalled');
  });

  it('reset unohtaa näytteet (sivu piiloon / näkyviin), eikä taaksepäin mennyt seinäkello kelpaa näytteeksi', () => {
    const watch = new ContextClockWatch();
    watch.sample(5, 0); watch.sample(5, 2000);
    expect(watch.status()).toBe('stalled');
    watch.reset();
    expect(watch.status()).toBe('unknown');
    watch.sample(5, 3000); watch.sample(6, 2500);
    expect(watch.status()).toBe('unknown');
  });
});

/** Väärennetty konteksti: suspend/resume-järjestys, tila ja säädettävät virheet. */
function fakeContext(options: { suspendFails?: Error; resumeFails?: Error; hang?: 'suspend' | 'resume'; endState?: string; noSuspend?: boolean } = {}) {
  const calls: string[] = [];
  const context = {
    state: 'running' as string,
    suspend: options.noSuspend ? undefined : () => {
      calls.push('suspend');
      if (options.hang === 'suspend') return new Promise<void>(() => {});
      if (options.suspendFails) return Promise.reject(options.suspendFails);
      context.state = 'suspended';
      return Promise.resolve();
    },
    resume: () => {
      calls.push('resume');
      if (options.hang === 'resume') return new Promise<void>(() => {});
      if (options.resumeFails) return Promise.reject(options.resumeFails);
      context.state = options.endState ?? 'running';
      return Promise.resolve();
    },
  };
  return { context, calls };
}

describe('D2: kontekstin palautus suspend → resume', () => {
  afterEach(() => { vi.useRealTimers(); });

  it('tekee yhden suspend → resume -kierroksen ja onnistuu', async () => {
    const { context, calls } = fakeContext();
    await expect(recoverContext(context)).resolves.toEqual({ ok: true });
    expect(calls).toEqual(['suspend', 'resume']);
  });

  it('resume hylätään NotAllowedError-virheellä (iOS vaatii eleen) → ok false, syy kertoo nimen', async () => {
    const { context } = fakeContext({ resumeFails: new DOMException('vaatii eleen', 'NotAllowedError') });
    const result = await recoverContext(context);
    expect(result.ok).toBe(false);
    expect(result.reason).toMatch(/^NotAllowedError/);
  });

  it('suspend-virhe ja interrupted-tilaan jäävä konteksti → ok false', async () => {
    expect((await recoverContext(fakeContext({ suspendFails: new Error('suspend epäonnistui') }).context)).ok).toBe(false);
    const interrupted = await recoverContext(fakeContext({ endState: 'interrupted' }).context);
    expect(interrupted).toEqual({ ok: false, reason: 'tila interrupted' });
  });

  it('2 s:n aikaraja: jumiutuva suspend tai resume ei jätä palautusta odottamaan', async () => {
    vi.useFakeTimers();
    for (const hang of ['suspend', 'resume'] as const) {
      const pending = recoverContext(fakeContext({ hang }).context);
      await vi.advanceTimersByTimeAsync(RECOVERY_TIMEOUT_MS + 1);
      const result = await pending;
      expect(result.ok).toBe(false);
      expect(result.reason).toContain(`${hang}: aikaraja`);
    }
  });

  it('puuttuva suspend: pelkkä resume; suljettu konteksti: ei kutsuja', async () => {
    const missing = fakeContext({ noSuspend: true });
    expect((await recoverContext(missing.context)).ok).toBe(true);
    expect(missing.calls).toEqual(['resume']);
    const closed = fakeContext();
    closed.context.state = 'closed';
    expect(await recoverContext(closed.context)).toEqual({ ok: false, reason: 'konteksti suljettu' });
    expect(closed.calls).toEqual([]);
  });

  it('palautuksen varmistus: etenevä kello hyväksytään, paikallaan pysyvä ei', async () => {
    let wall = 0, ctx = 10;
    const tick = async (ms: number) => { wall += ms; ctx += ms / 1000; };
    expect(await clockAdvances(() => ctx, { ms: 300, now: () => wall, wait: tick })).toBe(true);
    const frozen = async (ms: number) => { wall += ms; };
    expect(await clockAdvances(() => ctx, { ms: 300, now: () => wall, wait: frozen })).toBe(false);
  });
});
