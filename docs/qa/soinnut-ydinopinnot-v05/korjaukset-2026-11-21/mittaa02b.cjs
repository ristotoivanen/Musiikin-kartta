// 02:n kuuntelupainikkeiden asettelu: leveydet × 100/200 % × aihesivu/oma sivu × arvaus/vastattu.
const path = require('path');
const fs = require('fs');
const [wt, out] = process.argv.slice(2);
const { chromium, devices } = require(path.join(wt, 'node_modules', 'playwright'));
const base = 'http://127.0.0.1:8765';
(async () => {
  const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', args: ['--mute-audio', '--disable-audio-output'] });
  const rows = [];
  if (out) fs.mkdirSync(out, { recursive: true });
  for (const w of [320, 360, 375, 390, 768]) {
    for (const font of ['100%', '200%']) {
      for (const [where, url] of [['aihesivu', '/oppi/soinnut/index.html#valinta-yksi-savel-muuttaa-sointua'], ['oma', '/oppi/soinnut/yksi-savel-muuttaa-sointua.html']]) {
        const ctx = await b.newContext({ ...devices['iPhone 13'], viewport: { width: w, height: 900 } });
        const p = await ctx.newPage();
        await p.goto(base + url);
        await p.evaluate(f => { document.documentElement.style.fontSize = f; const v = [0.9, 0.1]; Math.random = () => v.shift() ?? 0; }, font);
        const sec = p.locator('.sointuharjoitus[data-sointuharjoitus="arvaa"]:visible');
        const m = () => sec.evaluate(s => {
          const row = s.querySelector('[data-arvaus-kuuntelu]');
          const bs = [...row.querySelectorAll('button')];
          const r = bs.map(x => x.getBoundingClientRect());
          const icon = bs[0].querySelector('svg').getBoundingClientRect();
          const text = bs[0].querySelector('[data-arvaus-teksti]').getBoundingClientRect();
          return {
            rivi: Math.round(row.getBoundingClientRect().width),
            koot: r.map(x => `${Math.round(x.width)}×${Math.round(x.height)}`).join(' '),
            rinnakkain: Math.abs(r[0].top - r[1].top) < 2,
            rako: Math.round(r[1].left - r[0].right),
            tekstiKuvakkeesta: Math.round(text.left - icon.right),
            leikkaus: bs.some(x => x.scrollWidth > x.clientWidth + 1 || x.scrollHeight > x.clientHeight + 1),
            vaaka: document.documentElement.scrollWidth > document.documentElement.clientWidth,
            tekstit: bs.map(x => x.querySelector('[data-arvaus-teksti]').textContent).join(' | '),
          };
        });
        console.error('ajo', w, font, where); await sec.getByRole('button', { name: 'Arvaa' }).click({ timeout: 5000 });
        const ennen = await m();
        if (out && where === 'oma' && (font === '100%' || w === 320)) await sec.screenshot({ path: path.join(out, `02-${w}-${font === '100%' ? '100' : '200'}-arvaus.png`) });
        await sec.getByRole('group', { name: 'Vastaa' }).getByRole('button', { name: 'Sointu 1' }).click();
        const jalkeen = await m();
        if (out && where === 'oma' && (font === '100%' || w === 320)) await sec.screenshot({ path: path.join(out, `02-${w}-${font === '100%' ? '100' : '200'}-vastattu.png`) });
        rows.push({ w, font, where, ennen, jalkeen, kokoSama: ennen.koot === jalkeen.koot && ennen.rinnakkain === jalkeen.rinnakkain });
        await ctx.close();
      }
    }
  }
  for (const r of rows) console.log(`${r.w} ${r.font} ${r.where.padEnd(8)} rivi ${r.ennen.rivi} | ${r.ennen.koot} | rinnakkain ${r.ennen.rinnakkain}/${r.jalkeen.rinnakkain} rako ${r.ennen.rako} | teksti+${r.ennen.tekstiKuvakkeesta}px | leikkaus ${r.ennen.leikkaus}/${r.jalkeen.leikkaus} vaaka ${r.ennen.vaaka}/${r.jalkeen.vaaka} | koko sama ${r.kokoSama} | ${r.jalkeen.tekstit}`);
  if (out) fs.writeFileSync(path.join(out, 'mittaus-02.json'), JSON.stringify(rows, null, 2));
  await b.close();
})().catch(e => { console.error(e); process.exit(1); });
