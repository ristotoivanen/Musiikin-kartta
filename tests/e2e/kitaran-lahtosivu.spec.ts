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

  test('otelaudan kaikki luonnolliset sävelet vastaavat vakiovirettä', async ({ page }) => {
    await page.goto(intro);
    const list = page.getByRole('list', { name: 'Luonnolliset sävelet nauhoilla 1–5' });
    const notes = list.getByRole('listitem');
    const actual = await notes.evaluateAll(items => items.map(item => {
      const style = getComputedStyle(item);
      return { string: Number(style.gridRowStart), fret: Number(style.gridColumnStart), note: item.textContent };
    }));
    const pitches = ['C', null, 'D', null, 'E', 'F', null, 'G', null, 'A', null, 'B'];
    const expected = [64, 59, 55, 50, 45, 40].flatMap((open, index) =>
      Array.from({ length: 5 }, (_, fretIndex) => {
        const fret = fretIndex + 1;
        return { string: index + 1, fret, note: pitches[(open + fret) % 12] };
      }).filter(position => position.note !== null));
    expect(actual).toEqual(expected);
    for (const [index, { string, fret, note }] of expected.entries()) {
      await expect(notes.nth(index)).toHaveAccessibleName(`${string}. kieli, ${fret}. nauha, ${note}`);
    }
  });

  test('H/B-selitys avautuu ja sulkeutuu osoittimella ja näppäimistöllä', async ({ page, isMobile }) => {
    await page.goto(intro);
    const disclosure = page.locator('.recap-note-names');
    const summary = disclosure.locator('summary');
    const table = disclosure.getByRole('table', { name: 'B:n ja H:n vastineet' });
    await expect(summary).toHaveText('Miksi sama sävel on B tai H?');
    await expect(table).toBeHidden();
    await expect(disclosure).toHaveCSS('border-top-style', 'none');

    if (isMobile) await summary.tap();
    else await summary.click();
    await expect(table).toBeVisible();
    await expect(disclosure).toHaveCSS('border-top-style', 'solid');
    await expect(disclosure).toHaveCSS('border-bottom-style', 'solid');
    await expect(disclosure).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
    await expect(table.getByRole('cell')).toHaveText(['B', 'H', 'B♭', 'B']);
    if (isMobile) await summary.tap();
    else await summary.click();
    await expect(table).toBeHidden();
    await expect(disclosure).toHaveCSS('border-top-style', 'none');

    await summary.focus();
    await expect(summary).toBeFocused();
    await summary.press('Enter');
    await expect(table).toBeVisible();
    await summary.press('Space');
    await expect(table).toBeHidden();
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
      await expect(page.getByText('B tunnetaan perinteisessä suomalaisessa merkintätavassa H:na.')).toBeVisible();
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

      await page.locator('.recap-note-names summary').click();
      const labels = page.locator('.recap-fret-notes li');
      const normalFontSize = await labels.first().evaluate(label => parseFloat(getComputedStyle(label).fontSize));
      for (const size of ['100%', '200%']) {
        await page.evaluate(value => { document.documentElement.style.fontSize = value; }, size);
        expect(await page.evaluate(() => document.documentElement.scrollWidth), size).toBeLessThanOrEqual(width);
        expect(await tab.evaluate(element => element.scrollWidth <= element.clientWidth), size).toBe(true);
        const readable = await labels.evaluateAll((items, minFontSize) => {
          const svg = document.querySelector('.recap-board svg')!;
          const rect = svg.getBoundingClientRect();
          const wires = Array.from(svg.querySelectorAll('.recap-wire'));
          const headers = Array.from(document.querySelectorAll('.recap-fret-numbers li'));
          return items.every(label => {
            const style = getComputedStyle(label);
            const wire = wires[Number(style.gridRowStart) - 1];
            const fret = headers[Number(style.gridColumnStart) - 1].getBoundingClientRect();
            const wireY = rect.top + Number(wire.getAttribute('y1')) * rect.height / 120;
            const box = label.getBoundingClientRect();
            return Math.abs(box.left + box.width / 2 - fret.left - fret.width / 2) < 1
              && box.left > fret.left && box.right < fret.right
              && Math.abs(box.top + box.height / 2 - wireY) < 1
              && box.width > 0 && parseFloat(style.fontSize) >= minFontSize;
          });
        }, normalFontSize * (size === '200%' ? 2 : 1));
        expect(readable, size).toBe(true);
        for (const graphic of await page.locator('.recap-board svg, .chord-diagram svg, .recap-tab, .recap-bar').all()) {
          const box = await graphic.boundingBox();
          expect(box, size).not.toBeNull();
          expect(box!.x, size).toBeGreaterThanOrEqual(0);
          expect(box!.x + box!.width, size).toBeLessThanOrEqual(width);
        }
      }
      await page.locator('.recap-note-names summary').click();

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
