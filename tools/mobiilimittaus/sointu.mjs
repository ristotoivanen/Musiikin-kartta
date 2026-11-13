import { mkdirSync } from 'node:fs'; mkdirSync('test-results/mobiilimittaus', { recursive: true });
// Sointuharjoitus: jääkö C-soinnun 3. nauha (A-kieli) näkymättömiin kapealla näytöllä?
import { chromium } from '@playwright/test';
const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', args: ['--mute-audio'] });
for (const w of [320, 360, 375, 390, 430]) {
  const c = await b.newContext({ viewport: { width: w, height: 800 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  await c.addInitScript(() => { Math.random = () => 0.999999; });
  const p = await c.newPage(); p.setDefaultTimeout(10000);
  await p.goto((process.argv[2] ?? 'http://127.0.0.1:8794') + '/kitaraharjoittelija.html', { waitUntil: 'domcontentloaded' });
  await p.getByRole('button', { name: /Soinnut ja musiikin rakenne/ }).click();
  await p.waitForTimeout(300);
  const r = await p.evaluate(() => {
    const box = document.querySelector('.chord-journey .fret-scroll'); const br = box.getBoundingClientRect();
    const head = box.querySelector('tbody th').getBoundingClientRect().width;
    const dots = [...box.querySelectorAll('td .dot')].map(d => { const btn = d.closest('button'); const r = d.getBoundingClientRect();
      return { s: +btn.dataset.string, f: +btn.dataset.fret, näkyy: r.left >= br.left + head - 2 && r.right <= br.right + 2 }; });
    return { hint: document.querySelector('.chord-journey .fret-scroll-hint')?.textContent?.trim(), dots };
  });
  await p.locator('.chord-journey .fret-wrap').screenshot({ path: `test-results/mobiilimittaus/soinnut-C_${w}_otelauta.png` });
  console.log(w, r.dots.filter(d => !d.näkyy).map(d => `kieli ${d.s + 1}, nauha ${d.f}`).join('; ') || 'kaikki näkyvät', '|', r.hint ?? '');
  await c.close();
}
await b.close();
