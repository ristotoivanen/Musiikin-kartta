// #211: kirjaa, mitä muuttamaton käyttöliittymä näyttää oikeassa kohteessa. Kopioidaan ajossa tests/e2e/-hakemistoon.
import { test, expect } from '@playwright/test';

const key = 'musiikin-kartta:harjoittelu';
const STRING: Record<string, number> = { 'ohuelta E': 0, B: 1, G: 2, D: 3, A: 4, 'paksulta E': 5 };
const OPEN = [64, 59, 55, 50, 45, 40];
const NAMES = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];

for (const [label, area] of [['vapaa', 'alku=0&loppu=0'], ['painettu', 'alku=1&loppu=5']]) {
  test(`diag ${label}`, async ({ page }, info) => {
    await page.addInitScript(k => localStorage.setItem(k, JSON.stringify({ version: 3, stats: {}, recent: [], sessions: [], settings: { advance: false } })), key);
    await page.goto(`/kitaraharjoittelija.html?vihjeet=always&${area}&vanha=1`);
    await page.getByRole('button', { name: /^Aloita (harjoitus|uusi kierros)$/ }).click();
    const target = page.locator('.practice-board .target button');
    for (let i = 0; i < 10; i++) {
      await expect(target).toHaveCount(1);
      const match = /^Etsi ([A-G]♯?) (.+)-kieleltä\.$/.exec(await page.locator('#question').innerText())!;
      const seen = await target.evaluate(button => {
        const b = button as HTMLElement, dot = b.querySelector<HTMLElement>('.dot');
        return { string: Number(b.dataset.string), fret: Number(b.dataset.fret), full: b.textContent,
          dot: dot?.textContent ?? null, dotVisible: !!dot && dot.getClientRects().length > 0,
          openName: b.querySelector('.open-string-name')?.textContent ?? null, aria: b.getAttribute('aria-label') };
      });
      console.log('DIAG', info.project.name, label, JSON.stringify({ asked: match[1], ...seen }));
      expect(seen.string).toBe(STRING[match[2]]);
      expect(NAMES[(OPEN[seen.string] + seen.fret) % 12]).toBe(match[1]);
      expect(seen.dot).toBe(match[1]);
      expect(seen.dotVisible).toBe(true);
      expect(label === 'vapaa' ? seen.fret === 0 : seen.fret > 0).toBe(true);
      if (i === 0) await page.locator('.practice-board').screenshot({ path: `qa-211-results/${info.project.name}-${label}.png` });
      await target.click();
      if (i < 9) await page.getByRole('button', { name: 'Seuraava kysymys' }).click();
    }
  });
}
