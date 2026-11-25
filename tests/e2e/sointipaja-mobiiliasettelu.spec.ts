import { test, expect, type Page } from '@playwright/test';

// #48: tason 2–4 vastausasettelu mahtuu yhteen iPhonen kokoiseen näkymään (402 × 714 CSS px,
// Safari-työkalupalkki auki) eikä liiku vastattaessa. Testi ei korvaa laitetestiä.
const VIEW = { width: 402, height: 714 };

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => { Math.random = () => 0; });
  await page.route('**/assets/audio/soinnut/*', route => route.abort());
  await page.goto('/sointipaja-prototyyppi.html');
  await page.setViewportSize(VIEW);
});

type Box = { top: number; bottom: number; left: number; right: number; width: number; height: number };
const box = (page: Page, selector: string) => page.evaluate((sel): Box | null => {
  const el = document.querySelector(sel);
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return { top: r.top, bottom: r.bottom, left: r.left, right: r.right, width: r.width, height: r.height };
}, selector);
const answerBoxes = (page: Page) => page.evaluate(() => Array.from(document.querySelectorAll('#answers button')).map(b => {
  const r = b.getBoundingClientRect();
  return { name: b.textContent || '', top: r.top, bottom: r.bottom, left: r.left, right: r.right, width: r.width, height: r.height, overflow: b.scrollWidth > b.clientWidth + 1 };
}));

test('level 4: ote, perussävelet, soinnut ja Seuraava mahtuvat yhteen näkymään, eikä asettelu liiku (45 tehtävää)', async ({ page }) => {
  test.setTimeout(120000);
  const plan = await page.evaluate(() => {
    const model = (globalThis as unknown as { SointipajaLevelModel: { levels: { rounds: { options: string[]; targets: string[]; repeats: number }[] }[]; orderFor: (r: unknown, rng: () => number, p: string | null) => string[] } }).SointipajaLevelModel;
    const level = model.levels[3];
    let p: string | null = null;
    return level.rounds.map(r => { const order = model.orderFor(r, () => 0, p); p = order[order.length - 1]; return { order, options: r.options }; });
  });
  expect(plan.map(r => r.order.length)).toEqual([7, 14, 24]);
  await page.getByRole('button', { name: /Taso 4 ·/ }).click();
  const roots = page.locator('#roots'), answers = page.locator('#answers');
  let tasks = 0;
  for (const [j, round] of plan.entries()) {
    for (const name of round.order) {
      tasks++;
      const rootsBefore = await box(page, '#roots');
      const neckBefore = await box(page, '#board .chord-neck');
      const scrollBefore = await page.evaluate(() => scrollY);
      // Vastauskokonaisuus on kokonaan näkyvissä heti tehtävän alussa (ei edestakaista vieritystä).
      expect(neckBefore!.top).toBeGreaterThanOrEqual(-1);
      expect(rootsBefore!.bottom).toBeLessThanOrEqual(VIEW.height);
      const rootButtons = await roots.locator('button').evaluateAll(bs => bs.map(b => { const r = b.getBoundingClientRect(); return { w: r.width, h: r.height }; }));
      for (const r of rootButtons) { expect(r.w).toBeGreaterThanOrEqual(44); expect(r.h).toBeGreaterThanOrEqual(44); }
      await roots.getByRole('button', { name: name[0], exact: true }).click();
      const group = await answerBoxes(page);
      expect(group.map(b => b.name)).toContain(name);
      for (const b of group) { expect(b.width).toBeGreaterThanOrEqual(44); expect(b.height).toBeGreaterThanOrEqual(44); expect(b.overflow).toBe(false); }
      for (let a = 0; a < group.length; a++) for (let c = a + 1; c < group.length; c++) {
        const x = group[a], y = group[c];
        expect(x.left < y.right && y.left < x.right && x.top < y.bottom && y.top < x.bottom, `${x.name} ja ${y.name} menevät päällekkäin`).toBe(false);
      }
      expect(Math.max(...group.map(b => b.bottom))).toBeLessThanOrEqual(VIEW.height);
      // Väärä vastaus ei siirrä perussäveliä, otelautaa eikä soinnun painikkeita.
      const wrong = group.find(b => b.name !== name);
      if (wrong) {
        await answers.getByRole('button', { name: wrong.name, exact: true }).click();
        const groupAfter = await answerBoxes(page);
        expect(groupAfter.map(b => [b.name, Math.round(b.top), Math.round(b.left)])).toEqual(group.map(b => [b.name, Math.round(b.top), Math.round(b.left)]));
        expect((await box(page, '#roots'))!.top).toBeCloseTo(rootsBefore!.top, 0);
        expect((await box(page, '#board .chord-neck'))!.top).toBeCloseTo(neckBefore!.top, 0);
      }
      await answers.getByRole('button', { name, exact: true }).click();
      await expect(page.locator('#feedback')).toContainText('Oikein');
      const groupDone = await answerBoxes(page);
      expect(groupDone.map(b => [b.name, Math.round(b.top), Math.round(b.left), Math.round(b.width)])).toEqual(group.map(b => [b.name, Math.round(b.top), Math.round(b.left), Math.round(b.width)]));
      const next = (await box(page, '#next'))!;
      expect(next.bottom).toBeLessThanOrEqual(VIEW.height);
      expect(next.height).toBeGreaterThanOrEqual(44);
      expect((await box(page, '#roots'))!.top).toBeCloseTo(rootsBefore!.top, 0);
      // Tehtävän aikana sivu ei vierity itsestään.
      expect(await page.evaluate(() => scrollY)).toBe(scrollBefore);
      await page.locator('#next').click();
    }
    if (j < plan.length - 1) await page.locator('#continue').click();
  }
  expect(tasks).toBe(45);
  await expect(page.locator('#done-heading')).toHaveText('Taso 4 valmis');
});

test('taso 2 ja 3: kaksivaiheinen valinta mahtuu samaan näkymään', async ({ page }) => {
  for (const level of [2, 3]) {
    await page.getByRole('button', { name: new RegExp('Taso ' + level + ' ·') }).click();
    const head = await box(page, '#round .question-head');
    expect(head!.top).toBeGreaterThanOrEqual(0);
    expect((await box(page, '#roots'))!.bottom).toBeLessThanOrEqual(VIEW.height);
    expect((await box(page, '#next'))!.bottom).toBeLessThanOrEqual(VIEW.height);
  }
});

test('Seuraava palauttaa uuden tehtävän näkyviin, vaikka sivu olisi vieritetty pois', async ({ page }) => {
  const first = await page.evaluate(() => {
    const model = (globalThis as unknown as { SointipajaLevelModel: { levels: { rounds: unknown[] }[]; orderFor: (r: unknown, rng: () => number, p: string | null) => string[] } }).SointipajaLevelModel;
    return model.orderFor(model.levels[3].rounds[0], () => 0, null)[0];
  });
  await page.getByRole('button', { name: /Taso 4 ·/ }).click();
  await page.locator('#roots').getByRole('button', { name: first[0], exact: true }).click();
  await page.locator('#answers').getByRole('button', { name: first, exact: true }).click();
  await page.evaluate(() => scrollTo(0, 0));
  await page.locator('#next').evaluate(el => (el as HTMLButtonElement).click());
  const head = (await box(page, '#round .question-head'))!;
  expect(head.top).toBeGreaterThanOrEqual(0);
  expect((await box(page, '#roots'))!.bottom).toBeLessThanOrEqual(VIEW.height);
  expect((await box(page, '#next'))!.bottom).toBeLessThanOrEqual(VIEW.height);
});

// Toinen arvo simuloi leveämpää fonttia (esim. CI:n Linux-fontti), jolla lukitusviesti rivittyy kolmelle riville.
for (const letterSpacing of ['0', '0.08em']) test('Sointuhaaste: virheen neljän sekunnin lukitus ei siirrä otelautaa, perussäveliä tai sointuja (kirjainväli ' + letterSpacing + ')', async ({ page }) => {
  await page.addStyleTag({ content: 'body{letter-spacing:' + letterSpacing + '}' });
  await page.clock.install();
  await page.locator('#mode-challenge').click();
  await page.locator('#challenge-duration').selectOption('60');
  await page.locator('#challenge-start').click();
  const roots = page.locator('#roots'), answers = page.locator('#answers');
  // HUD, otelauta ja perussävelet ovat samassa näkymässä.
  expect((await box(page, '#challenge-live'))!.top).toBeGreaterThanOrEqual(-1);
  expect((await box(page, '#roots'))!.bottom).toBeLessThanOrEqual(VIEW.height);
  await roots.getByRole('button', { name: 'G', exact: true }).click();
  const before = { roots: await box(page, '#roots'), neck: await box(page, '#board .chord-neck'), chords: await answerBoxes(page) };
  expect(before.chords.length).toBeGreaterThan(0);
  expect(Math.max(...before.chords.map(b => b.bottom))).toBeLessThanOrEqual(VIEW.height);
  await answers.getByRole('button', { name: 'G', exact: true }).click();
  await expect(page.locator('#challenge-lock')).toContainText('Lukitus');
  const during = { roots: await box(page, '#roots'), neck: await box(page, '#board .chord-neck'), chords: await answerBoxes(page) };
  expect(during.roots!.top).toBeCloseTo(before.roots!.top, 0);
  expect(during.neck!.top).toBeCloseTo(before.neck!.top, 0);
  expect(during.chords.map(b => [b.name, Math.round(b.top), Math.round(b.left)])).toEqual(before.chords.map(b => [b.name, Math.round(b.top), Math.round(b.left)]));
  await page.clock.runFor(4100);
  await expect(page.locator('#challenge-lock')).toBeEmpty();
  const after = { roots: await box(page, '#roots'), neck: await box(page, '#board .chord-neck') };
  expect(after.roots!.top).toBeCloseTo(before.roots!.top, 0);
  expect(after.neck!.top).toBeCloseTo(before.neck!.top, 0);
});

test('suurennettu teksti (150 % ja 200 % zoom) ja kapea näyttö: ei vaakavieritystä, ei päällekkäisiä painikkeita', async ({ page }) => {
  await page.getByRole('button', { name: /Taso 4 ·/ }).click();
  for (const width of [320, 268, 201]) {
    await page.setViewportSize({ width, height: 640 });
    await page.locator('#roots').getByRole('button', { name: 'D', exact: true }).click();
    const group = await answerBoxes(page);
    expect(group.length).toBeGreaterThan(0);
    for (const b of group) { expect(b.overflow, `${b.name} @${width}`).toBe(false); expect(b.height).toBeGreaterThanOrEqual(44); expect(b.right).toBeLessThanOrEqual(width + 1); }
    for (let a = 0; a < group.length; a++) for (let c = a + 1; c < group.length; c++) {
      const x = group[a], y = group[c];
      expect(x.left < y.right && y.left < x.right && x.top < y.bottom && y.top < x.bottom).toBe(false);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  }
});

test('näppäimistö: perussävel, sointu ja Seuraava toimivat ilman hiirtä', async ({ page }) => {
  const first = await page.evaluate(() => {
    const model = (globalThis as unknown as { SointipajaLevelModel: { levels: { rounds: unknown[] }[]; orderFor: (r: unknown, rng: () => number, p: string | null) => string[] } }).SointipajaLevelModel;
    return model.orderFor(model.levels[3].rounds[0], () => 0, null)[0];
  });
  await page.getByRole('button', { name: /Taso 4 ·/ }).click();
  await page.locator('#roots').getByRole('button', { name: first[0], exact: true }).focus();
  await page.keyboard.press('Enter');
  await page.locator('#answers').getByRole('button', { name: first, exact: true }).focus();
  await page.keyboard.press('Space');
  await expect(page.locator('#feedback')).toContainText('Oikein');
  await page.locator('#next').focus();
  await expect(page.locator('#next')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#progress')).toHaveText('Sointu 2 / 7');
});
