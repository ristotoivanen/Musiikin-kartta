import { chromium } from '@playwright/test';
const lum = c => { const [r, g, bl] = c.match(/[\d.]+/g).slice(0, 3).map(Number).map(v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }); return .2126 * r + .7152 * g + .0722 * bl; };
const ratio = (a, c) => { const [x, y] = [lum(a), lum(c)].sort((m, n) => n - m); return ((x + .05) / (y + .05)).toFixed(2); };
const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', args: ['--mute-audio', '--disable-audio-output'] });
for (const scheme of ['light', 'dark']) {
  const p = await (await b.newContext({ viewport: { width: 1000, height: 900 }, colorScheme: scheme })).newPage(); p.setDefaultTimeout(10000);
  await p.goto((process.argv[2] ?? 'http://127.0.0.1:8794') + '/kitaraharjoittelija.html', { waitUntil: 'domcontentloaded' });
  await p.getByRole('button', { name: /Skaalat ja moodit/ }).click();
  await p.locator('.scale-tracks .learning-card').filter({ hasText: 'Pentatoniset' }).click();
  const btn = p.getByRole('button', { name: '▶ Toista asteikkoa jatkuvasti' });
  await btn.click();
  const stop = p.getByRole('button', { name: '■ Pysäytä asteikon toisto' });
  const read = async () => stop.evaluate(e => { const s = getComputedStyle(e); return [s.color, s.backgroundColor]; });
  const hovered = await read();
  await p.mouse.move(5, 5); await p.waitForTimeout(100);
  const rest = await read();
  console.log(scheme, 'hover/kosketuksen jälkeen', hovered.join(' on '), ratio(...hovered), '| lepotila', rest.join(' on '), ratio(...rest));
  await stop.click();
}
await b.close();
