import { test, expect } from '@playwright/test';

/**
 * Latausaikojen mittaus (MK-20261118-03, vaihe B), ei tavallinen regressiotesti. Ajetaan vain pyydettäessä:
 *   KAKSIRAITA_LATAUSMITTAUS=1 npx playwright test tests/e2e/kaksiraitatesti-latausmittaus.spec.ts --project=desktop
 * Verkko rajoitetaan H2:ssa havaittuun nopeuteen: 46,1 Mt latautui iPhonella noin 11 sekunnissa (≈ 4,2 Mt/s).
 * Tulokset kirjataan testin huomautuksiksi (annotations).
 */
const THROUGHPUT = 46.08e6 / 11; // tavua sekunnissa
const LATENCY_MS = 30;
interface Entry { ms: number; event: string; track?: string; kind?: string; bytes?: number; kestoMs?: number; otsakkeetMs?: number; siirtoMs?: number; blobMs?: number; sivustaMs?: number; control?: string }

const CASES = [
  { label: 'WAV 0–120 s', query: 'lahde=wav' },
  { label: 'AAC 0–120 s', query: 'lahde=aac' },
  { label: 'MP3 CBR 0–120 s', query: 'lahde=mp3cbr' },
  { label: 'AAC koko', query: 'lahde=aac&pituus=koko' },
  { label: 'MP3 CBR koko', query: 'lahde=mp3cbr&pituus=koko' },
];

test.describe('Kahden raidan testi: latausaikojen mittaus (H2:n verkkonopeus)', () => {
  test.skip(!process.env.KAKSIRAITA_LATAUSMITTAUS, 'Mittaus ajetaan vain pyydettäessä (KAKSIRAITA_LATAUSMITTAUS=1).');
  test.describe.configure({ mode: 'serial', timeout: 120_000 });

  for (const { label, query } of CASES) {
    test(label, async ({ page, context }) => {
      const cdp = await context.newCDPSession(page);
      await cdp.send('Network.enable');
      await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
      await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: LATENCY_MS, downloadThroughput: THROUGHPUT, uploadThroughput: THROUGHPUT / 4 });
      await page.goto(`/kaksiraitatesti.html?${query}&moottori=uusi`);
      await expect(page.getByRole('button', { name: '▶ Soita' })).toBeEnabled({ timeout: 60_000 });
      await page.waitForTimeout(500);
      const pressed = await page.evaluate(() => performance.now());
      await page.getByRole('button', { name: '▶ Soita' }).click();
      await expect(page.getByRole('button', { name: '■ Tauko' })).toBeVisible();
      const events = await page.evaluate(() => (window as unknown as { kaksiraitatesti: { report(): { events: Entry[] } } }).kaksiraitatesti.report().events) as Entry[];
      const loads = events.filter(item => item.event === 'lataus-valmis' && item.kind !== 'referenssi');
      const ready = events.find(item => item.event === 'soita-kaytossa')!;
      const sourceSet = events.filter(item => item.event === 'lahde-asetettu');
      const metadata = events.filter(item => item.event === 'loadedmetadata' && item.ms < pressed).map(item => item.ms);
      const canPlay = events.filter(item => item.event === 'canplaythrough' && item.ms < pressed).map(item => item.ms);
      const started = events.find(item => item.event === 'toisto-alkoi' && item.ms > pressed)!;
      const bytes = loads.reduce((sum, item) => sum + (item.bytes ?? 0), 0);
      const describe = [
        `tavuja ${(bytes / 1e6).toFixed(1)} Mt`,
        `siirto ${loads.map(item => `${item.track} ${item.siirtoMs} ms (otsakkeet ${item.otsakkeetMs} ms)`).join(', ')}`,
        `Blob ${loads.map(item => `${item.blobMs} ms`).join(' / ')}`,
        `Soita käytössä ${ready.sivustaMs} ms sivun avaamisesta`,
        `lähde → loadedmetadata ${metadata.length && sourceSet.length ? Math.round(Math.max(...metadata) - Math.max(...sourceSet.map(item => item.ms))) : '–'} ms`,
        `lähde → canplaythrough ${canPlay.length && sourceSet.length ? Math.round(Math.max(...canPlay) - Math.max(...sourceSet.map(item => item.ms))) : '–'} ms`,
        `painallus → toisto ${Math.round(started.ms - pressed)} ms`,
      ].join('; ');
      test.info().annotations.push({ type: label, description: describe });
    });
  }
});
