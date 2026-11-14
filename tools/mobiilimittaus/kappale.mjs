// Kohdennettu mittaus: kappaleharjoittelun soitin vs. soiva sointu, kontrasti ja pienennetyn otelaudan tekstikoko.
import { chromium } from '@playwright/test';
const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', args: ['--mute-audio'] });
const lum = c => { const [r, g, bl] = c.match(/[\d.]+/g).slice(0, 3).map(Number).map(v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }); return .2126 * r + .7152 * g + .0722 * bl; };
const ratio = (a, c) => { const [x, y] = [lum(a), lum(c)].sort((m, n) => n - m); return ((x + .05) / (y + .05)).toFixed(2); };
for (const [w, h, scheme] of [[390, 844, 'light'], [390, 844, 'dark'], [360, 780, 'light'], [844, 390, 'light'], [1440, 900, 'dark']]) {
  const c = await b.newContext({ viewport: { width: w, height: h }, colorScheme: scheme, isMobile: w < 1000, hasTouch: w < 1000 });
  await c.addInitScript(() => { HTMLMediaElement.prototype.play = function () { return Promise.resolve(); }; HTMLMediaElement.prototype.pause = function () {}; });
  const p = await c.newPage(); p.setDefaultTimeout(10000);
  await p.goto((process.argv[2] ?? 'http://127.0.0.1:8794') + '/kitaraharjoittelija.html', { waitUntil: 'domcontentloaded' });
  await p.getByRole('button', { name: /Kappaleharjoittelu/ }).click();
  for (const n of ['Soinnut ja sanat', 'Skaalat ja moodit']) await p.locator('.song-journey > details > summary', { hasText: n }).click();
  await p.waitForTimeout(300);
  const m = await p.evaluate(() => {
    const top = el => el ? Math.round(el.getBoundingClientRect().top + scrollY) : null;
    const play = document.querySelector('.song-play');
    const now = [...document.querySelectorAll('.song-journey *')].find(e => e.childNodes[0]?.textContent?.trim() === 'Soiva sointu');
    const active = document.querySelector('.song-measure.active');
    const st = active && getComputedStyle(active);
    const label = active?.querySelector('strong.now') ?? active?.querySelector('strong');
    const svg = document.querySelector('.song-scale-board svg');
    const t = svg?.querySelector('text');
    const scale = svg ? svg.getBoundingClientRect().width / svg.viewBox.baseVal.width : null;
    const head = active?.firstElementChild; return { headColor: head && getComputedStyle(head).color, playTop: top(play), playBottom: play ? Math.round(play.getBoundingClientRect().bottom + scrollY) : null, chordTop: top(now),
      activeClass: active?.className, activeBg: st?.backgroundColor, activeColor: st?.color, labelColor: label && getComputedStyle(label).color,
      svgW: svg && Math.round(svg.getBoundingClientRect().width), svgFont: t && getComputedStyle(t).fontSize, svgScale: scale && scale.toFixed(2), vh: innerHeight };
  });
  const contrasts = m.activeBg && m.activeBg !== 'rgba(0, 0, 0, 0)' ? { teksti: ratio(m.activeColor, m.activeBg), sointu: m.labelColor ? ratio(m.labelColor, m.activeBg) : null, tahti: m.headColor ? ratio(m.headColor, m.activeBg) : null } : null;
  console.log(w + 'x' + h, scheme, JSON.stringify({ ...m, väli: m.chordTop - m.playTop, contrasts }));
  await c.close();
}
await b.close();
