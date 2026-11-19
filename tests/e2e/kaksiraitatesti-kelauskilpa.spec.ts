import { test, expect, type Page } from '@playwright/test';

/**
 * Kelauksen kilpatilanteiden toistotestit (MK-20261119-03, juurisyyanalyysi).
 * Testit on merkitty test.fail(): ne todentavat nykyisen moottorin virheellisen käytöksen.
 * Kun hyväksytty korjaus tehdään, merkintä poistetaan ja testien pitää mennä läpi sellaisinaan.
 * Synteettinen aineisto soi muistista, joten verkko ei vaikuta ajoitukseen.
 */
const URL = '/kaksiraitatesti.html?lahde=synteettinen&moottori=uusi&mittaus=pois';
interface Entry { ms: number; event: string; request?: number; tausta?: number | string; kitara?: number | string; to?: number }
const events = (page: Page): Promise<Entry[]> =>
  page.evaluate(() => (window as unknown as { kaksiraitatesti: { report(): { events: Entry[] } } }).kaksiraitatesti.report().events);
const playButton = (page: Page) => page.getByRole('button', { name: '▶ Soita' }).first();

async function startPlaying(page: Page) {
  await page.goto(URL);
  await playButton(page).click();
  await expect.poll(async () => (await events(page)).some(item => item.event === 'toisto-alkoi')).toBe(true);
  await page.waitForTimeout(500);
}

const lastStart = async (page: Page) => (await events(page)).filter(item => item.event === 'toisto-alkoi').at(-1);

test.describe('Kahden raidan testi: kelauksen kilpatilanteet (toistotestit)', () => {
  test.describe.configure({ timeout: 30_000 });

  test('T1: kelaus kesken Soita-aloituksen käynnistää toiston kelauskohdasta', async ({ page }) => {
    test.fail(true, 'Tunnettu vika V1: seek() lukee Reactin playing-tilaa, joka on false kesken aloituksen, joten kelaus vain ohittaa aloituksen.');
    await startPlaying(page);
    await page.getByRole('button', { name: '■ Tauko' }).first().click();
    await page.waitForTimeout(300);
    // Kelaus tehdään, kun jatkon load() on alkanut mutta toisto ei vielä soi (deterministinen kohta).
    await page.evaluate(() => document.querySelector('audio')!.addEventListener('loadstart',
      () => (window as unknown as { kaksiraitatesti: { seek(s: number): void } }).kaksiraitatesti.seek(40), { once: true }));
    await playButton(page).click();
    await expect.poll(async () => Number((await lastStart(page))?.tausta), { timeout: 4000 }).toBeCloseTo(40, 0);
  });

  test('T2: ohitettu aloitus lopettaa odotuksen eikä kirjaa aikakatkaisua', async ({ page }) => {
    test.fail(true, 'Tunnettu vika V2: ohitetun aloituksen waitPositioned odottaa 5 s ja kirjaa kelattu: aikakatkaisu.');
    await startPlaying(page);
    const t0 = await page.evaluate(() => performance.now());
    await page.evaluate(() => {
      const hook = (window as unknown as { kaksiraitatesti: { seek(s: number): void } }).kaksiraitatesti;
      hook.seek(20); hook.seek(40); hook.seek(50);
    });
    await expect.poll(async () => Number((await lastStart(page))?.tausta)).toBeCloseTo(50, 0);
    await page.waitForTimeout(5600);
    const stale = (await events(page)).filter(item => item.ms > t0 && item.event === 'kelattu' && (item.tausta === 'aikakatkaisu' || item.kitara === 'aikakatkaisu'));
    expect(stale).toEqual([]);
  });

  test('T3 (WebKit-hypoteesin malli): pause-tapahtuma kesken kelausaloituksen ei saa estää seuraavaa kelausta', async ({ page }) => {
    test.fail(true, 'Mallintaa hypoteesia H1: jos selain lähettää pause-tapahtuman load()-kutsun jälkeen, playing muuttuu falseksi ja seuraava kelaus ohittaa aloituksen (vika V1).');
    await startPlaying(page);
    await page.evaluate(() => {
      const backing = document.querySelector('audio')!;
      const hook = (window as unknown as { kaksiraitatesti: { seek(s: number): void } }).kaksiraitatesti;
      backing.addEventListener('loadstart', () => {
        // Chromium poistaa jonossa olevan pause-tapahtuman load()-kutsussa (HTML-spesifikaatio). Lähetetään se itse,
        // annetaan Reactin piirtää ja kelataan sitten uudelleen ennen kuin ensimmäinen aloitus soi.
        backing.dispatchEvent(new Event('pause'));
        queueMicrotask(() => hook.seek(40));
      }, { once: true });
      hook.seek(20);
    });
    await expect.poll(async () => Number((await lastStart(page))?.tausta), { timeout: 4000 }).toBeCloseTo(40, 0);
  });
});
