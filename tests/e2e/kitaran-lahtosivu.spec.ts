import { expect, test } from '@playwright/test';

const intro = '/oppi/kitara/index.html';
const map = '/index.html#oppimisaiheet';
const readingKey = 'musiikin-kartta:luvut';
const exercises = [
  ['savelesta-sointuun', 'oppitunti:savelesta-sointuun'],
  ['vaihto-ja-sointukartta', 'oppitunti:vaihto-ja-sointukartta'],
  ['sointukierrot', 'sointukierrot'],
  ['soita-ensin-basso', 'harjoitus:soita-ensin-basso'],
  ['mihin-kierto-paattyy', 'oppitunti:mihin-kierto-paattyy'],
] as const;

test.describe('Kitaran pikakertaus ilman JavaScriptiä', () => {
  test.use({ javaScriptEnabled: false });

  test('karttaan voi siirtyä heti näppäimistöllä ja kartalta voi palata kertaukseen', async ({ page }) => {
    await page.goto(intro);
    const action = page.locator('.recap-header').getByRole('link', { name: 'Siirry Oppimiskarttaan' });
    await action.focus();
    await expect(action).toHaveCSS('outline-style', 'solid');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(map);
    const topics = page.getByRole('navigation', { name: 'Oppimisen aiheet' });
    await expect(topics.getByRole('link')).toHaveCount(8);
    const guitar = topics.getByRole('link', { name: /^Kitaran perusteet/ });
    await expect(guitar).toHaveAccessibleName(/Kertaa kielet, soinnut ja rytmin perusteet 2–5 minuutissa/);
    await guitar.press('Enter');
    await expect(page).toHaveURL(intro);
    await page.locator('.recap-next').getByRole('link', { name: 'Siirry Oppimiskarttaan' }).press('Enter');
    await expect(page).toHaveURL(map);
  });

  for (const width of [320, 360, 390]) {
    test('kertaus ja linkit mahtuvat leveyteen ' + width + ' px', async ({ page }) => {
      await page.setViewportSize({ width, height: 700 });
      await page.goto(intro);
      await expect(page.getByRole('heading', { level: 1, name: 'Kitaran perusteet' })).toBeVisible();
      await expect(page.getByRole('heading', { level: 2 })).toHaveText([
        'Kielet ja otelauta', 'Soinnut ja merkinnät', 'Rytmin perusteet', 'Jos kaipaat tarkempaa kertausta',
      ]);
      const strings = page.getByRole('list', { name: 'Vapaat kielet ylhäältä alas, ohuimmasta paksuimpaan' });
      await expect(strings.getByRole('listitem')).toHaveText(['1. e', '2. B', '3. G', '4. D', '5. A', '6. E']);
      const wires = await page.locator('.recap-board line').evaluateAll(lines => lines.map(line => ({
        row: Number(line.getAttribute('y1')),
        thickness: parseFloat(getComputedStyle(line).strokeWidth),
      })));
      expect(wires.map(wire => wire.row)).toEqual([10, 30, 50, 70, 90, 110]);
      for (const [index, wire] of wires.slice(1).entries()) {
        expect(wire.thickness).toBeGreaterThan(wires[index].thickness);
      }
      const frets = page.getByRole('list', { name: 'Nauhat vasemmalta oikealle' });
      await expect(frets.getByRole('listitem')).toHaveText(['1', '2', '3', '4', '5']);
      await expect(page.getByText('B vastaa perinteisen suomalaisen merkintätavan H:ta.')).toBeVisible();
      const chords = page.getByRole('group', { name: 'Avosointujen kaaviot' });
      await expect(chords.getByRole('img')).toHaveCount(5);
      const tab = page.locator('.recap-tab');
      await expect(tab).toBeVisible();
      expect((await tab.textContent())?.split('\n')).toEqual([
        'e ─────────', 'B ─0─1─3───', 'G ─────────', 'D ─────────', 'A ─────────', 'E ─────────',
      ]);
      await expect(page.getByText('Soita B-kieleltä vasemmalta oikealle vapaa kieli, 1. nauha ja 3. nauha.')).toBeVisible();
      await expect(page.locator('.recap-bar li')).toHaveText(['1', '2', '3', '4']);
      await expect(page.getByText('Yksi 4/4-tahti.', { exact: false })).toBeVisible();

      for (const size of ['100%', '200%']) {
        await page.evaluate(value => { document.documentElement.style.fontSize = value; }, size);
        expect(await page.evaluate(() => document.documentElement.scrollWidth), size).toBeLessThanOrEqual(width);
        expect(await tab.evaluate(element => element.scrollWidth <= element.clientWidth), size).toBe(true);
        for (const graphic of await page.locator('.recap-board svg, .chord-diagram svg, .recap-tab, .recap-bar').all()) {
          const box = await graphic.boundingBox();
          expect(box, size).not.toBeNull();
          expect(box!.x, size).toBeGreaterThanOrEqual(0);
          expect(box!.x + box!.width, size).toBeLessThanOrEqual(width);
        }
      }

      for (const [label, path] of [
        ['Kitaran kielet ja sointumerkinnät', '/oppi/savelnimet/kitaran-kielet-ja-sointumerkinnat.html'],
        ['Pulssi ja komppi', '/oppi/rytmi/pulssi-ja-komppi.html'],
      ]) {
        await page.getByRole('link', { name: label, exact: true }).press('Enter');
        await expect(page).toHaveURL(path);
        await page.goBack();
        await expect(page).toHaveURL(intro);
      }
    });
  }
});

test('viiden avosoinnun SVG-merkit vastaavat otteita, sormituksia ja sointusäveliä', async ({ page }) => {
  await page.goto(intro);
  const chords = [
    { name: 'G', frets: '320003', fingers: '21---3', root: 7, intervals: [0, 4, 7], midi: [43, 47, 50, 55, 59, 67] },
    { name: 'C', frets: 'x32010', fingers: '-32-1-', root: 0, intervals: [0, 4, 7], midi: [48, 52, 55, 60, 64] },
    { name: 'D', frets: 'xx0232', fingers: '---132', root: 2, intervals: [0, 4, 7], midi: [50, 57, 62, 66] },
    { name: 'Am', frets: 'x02210', fingers: '--231-', root: 9, intervals: [0, 3, 7], midi: [45, 52, 57, 60, 64] },
    { name: 'Em', frets: '022000', fingers: '-23---', root: 4, intervals: [0, 3, 7], midi: [40, 47, 52, 55, 59, 64] },
  ];
  const tuning = [40, 45, 50, 55, 59, 64];
  const diagrams = page.getByRole('group', { name: 'Avosointujen kaaviot' });
  await expect(diagrams.locator('figcaption')).toHaveText(chords.map(chord => chord.name));

  for (const chord of chords) {
    const svg = diagrams.getByRole('img', { name: new RegExp('^' + chord.name + ':') });
    const strings = await svg.evaluate(diagram => {
      const frets = Array.from(diagram.querySelectorAll('line.fret'), line => Number(line.getAttribute('y1')));
      return Array.from(diagram.querySelectorAll('line.string'), line => {
        const x = line.getAttribute('x1');
        const dot = diagram.querySelector(`circle[cx="${x}"]`);
        const muted = diagram.querySelector(`.marker[x="${x}"]`)?.textContent === '×';
        const finger = diagram.querySelector(`.finger[x="${x}"]`)?.textContent ?? '-';
        const fret = muted ? 'x' : !dot ? '?' : dot.classList.contains('open') ? '0'
          : String(frets.findIndex(y => y > Number(dot.getAttribute('cy'))) + 1);
        return { fret, finger, root: !!dot?.matches('.root, .root-open') };
      });
    });
    await expect(svg.locator('..').locator('code')).toHaveText(chord.frets);
    expect(strings.map(string => string.fret).join(''), chord.name).toBe(chord.frets);
    expect(strings.map(string => string.finger).join(''), chord.name).toBe(chord.fingers);
    const pitches = strings.flatMap(({ fret, root }, index) => {
      if (fret === 'x') {
        expect(root).toBe(false);
        return [];
      }
      const midi = tuning[index] + Number(fret);
      expect(root, chord.name + ' kieli ' + (6 - index)).toBe(midi % 12 === chord.root);
      return [midi];
    });
    expect(pitches, chord.name).toEqual(chord.midi);
    expect(pitches[0] % 12, chord.name).toBe(chord.root);
    expect([...new Set(pitches.map(midi => (midi - chord.root) % 12))].sort((a, b) => a - b))
      .toEqual(chord.intervals);
  }
});

test('vanhat harjoitusosoitteet ja merkinnät säilyvät ilman kartan tai kertauksen suoritusmittaria', async ({ page }) => {
  await page.goto(intro);
  expect(await page.evaluate(key => localStorage.getItem(key), readingKey)).toBeNull();
  const saved = JSON.stringify([...exercises.map(([, id]) => id), 'pulssi-ja-komppi']);
  await page.evaluate(({ key, value }) => localStorage.setItem(key, value), { key: readingKey, value: saved });
  await page.reload();
  const main = page.getByRole('main');
  await expect(main.locator('.study-choice, [data-study-total], [data-study-status], .done-toggle')).toHaveCount(0);
  await expect(main.getByRole('link')).toHaveCount(4);

  await page.locator('.recap-header').getByRole('link', { name: 'Siirry Oppimiskarttaan' }).click();
  const card = page.locator('#aihe-kitara');
  await expect(card.locator('.topic-status')).toHaveCount(0);
  expect(await card.getAttribute('data-study-items')).toBeNull();

  for (const [slug, id] of exercises) {
    expect((await page.goto('/oppi/kitara/' + slug + '.html'))?.ok()).toBe(true);
    await expect(main).toHaveAttribute('data-study-item', id);
    await expect(page.locator('button.done-toggle')).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('navigation', { name: 'Paluunavigointi' })
      .getByRole('link', { name: 'Kitaran perusteisiin' }).click();
    await expect(page).toHaveURL(intro);
  }

  await page.goto('/book/osa-2.html#sointukierrot');
  await expect(page).toHaveURL('/book/osa-1.html#sointukierrot');
  await expect(page.locator('#sointukierrot .done-toggle')).toHaveAttribute('aria-pressed', 'true');
  expect(await page.evaluate(key => localStorage.getItem(key), readingKey)).toBe(saved);
});
