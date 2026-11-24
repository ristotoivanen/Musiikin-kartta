import { expect, test } from '@playwright/test';

// Erillinen #144-regressio: muutos ei edellytä JavaScriptiä, eikä se saa
// vaikuttaa sävelen musiikilliseen paikkaan. Ajetaan myös phone-projektilla.
for (const javaScriptEnabled of [false] as const) {
  test.describe(`Kitaran otelauta #144 (JavaScript ${javaScriptEnabled ? 'käytössä' : 'pois'})`, () => {
    test.use({ javaScriptEnabled });

    for (const width of [320, 360, 390]) {
      test(`${width} px: sävelet säilyvät luettavina ja kielillä 100/200 %`, async ({ page }) => {
        await page.setViewportSize({ width, height: 750 });
        await page.goto('/oppi/kitara/index.html');
        await expect(page.locator('.recap-fret-notes li')).toHaveCount(18);
        await page.locator('.recap-note-names summary').click();

        const initialFont = await page.locator('.recap-fret-notes li').first()
          .evaluate(item => parseFloat(getComputedStyle(item).fontSize));

        for (const zoom of [100, 200]) {
          await page.evaluate(value => {
            document.documentElement.style.fontSize = value;
          }, `${zoom}%`);

          const geometry = await page.evaluate(() => {
            const svg = document.querySelector<SVGSVGElement>('.recap-board svg')!;
            const board = svg.getBoundingClientRect();
            const frets = Array.from(document.querySelectorAll<HTMLElement>('.recap-fret-numbers li'));
            const strings = Array.from(document.querySelectorAll<HTMLElement>('.recap-strings li'));
            const wires = Array.from(svg.querySelectorAll<SVGLineElement>('.recap-wire'));
            const notes = Array.from(document.querySelectorAll<HTMLElement>('.recap-fret-notes li'));
            const wireY = (row: number) =>
              board.top + Number(wires[row - 1].getAttribute('y1')) * board.height / 120;
            const edges = [134, 261, 380, 492, 599];

            return {
              scrollWidth: document.documentElement.scrollWidth,
              boardLeft: board.left,
              boardWidth: board.width,
              boardRight: board.right,
              noteCount: notes.length,
              notePositions: notes.map(note => {
                const style = getComputedStyle(note);
                const string = Number(style.gridRowStart);
                const fretNumber = Number(style.gridColumnStart);
                const rect = note.getBoundingClientRect();
                const header = frets[fretNumber - 1].getBoundingClientRect();
                return {
                  fontSize: parseFloat(style.fontSize),
                  leftClearance: rect.left - header.left,
                  rightClearance: header.right - rect.right,
                  xError: Math.abs((rect.left + rect.width / 2) - (header.left + header.width / 2)),
                  yError: Math.abs((rect.top + rect.height / 2) - wireY(string)),
                };
              }),
              stringErrors: strings.map((item, index) => {
                const rect = item.getBoundingClientRect();
                return Math.abs(rect.top + rect.height / 2 - wireY(index + 1));
              }),
              fretEdges: frets.map((item, index) => {
                const rect = item.getBoundingClientRect();
                return Math.abs(rect.right - (board.left + edges[index] * board.width / 600));
              }),
            };
          });

          expect(geometry.scrollWidth, `${width}px / ${zoom}%: sivun ylitys`).toBeLessThanOrEqual(width);
          expect(geometry.boardLeft).toBeGreaterThanOrEqual(0);
          expect(geometry.boardRight).toBeLessThanOrEqual(width);
          expect(geometry.noteCount).toBe(18);
          for (const note of geometry.notePositions) {
            expect(note.fontSize).toBeGreaterThanOrEqual(initialFont * zoom / 100 - .1);
            // Ehto on alkuperäistä "mahtuu juuri ja juuri" -mittausta tiukempi:
            // sävelnimilappu ei saa koskea sarakkeen rajaa fontin vaihtuessakaan.
            expect(note.leftClearance).toBeGreaterThanOrEqual(3);
            expect(note.rightClearance).toBeGreaterThanOrEqual(3);
            expect(note.xError).toBeLessThan(1);
            expect(note.yError).toBeLessThan(1);
          }
          for (const error of geometry.stringErrors) expect(error).toBeLessThan(1);
          for (const error of geometry.fretEdges) expect(error).toBeLessThan(1);

          if (zoom === 200) {
            // Mitataan myös kokonaisella sivulla lähtötilaa vastaava geometria.
            // Tilapäinen CSS kumoaa vain #144-mobiilisäännön; ei tuotantokoodin muutosta.
            const before = await page.evaluate(() => {
              const legacy = document.createElement('style');
              legacy.textContent = '.recap-neck-section { margin-inline: 0 !important; padding-inline: clamp(12px, 4vw, 1.4rem) !important; }';
              document.head.append(legacy);
              const board = document.querySelector<HTMLElement>('.recap-board')!.getBoundingClientRect();
              const headers = Array.from(document.querySelectorAll<HTMLElement>('.recap-fret-numbers li'));
              const clearances = Array.from(document.querySelectorAll<HTMLElement>('.recap-fret-notes li'))
                .map(note => {
                  const rect = note.getBoundingClientRect();
                  const fret = Number(getComputedStyle(note).gridColumnStart) - 1;
                  const header = headers[fret].getBoundingClientRect();
                  return Math.min(rect.left - header.left, header.right - rect.right);
                });
              const result = {
                boardWidth: board.width,
                minClearance: Math.min(...clearances),
                scrollWidth: document.documentElement.scrollWidth,
              };
              legacy.remove();
              return result;
            });
            const after = {
              boardWidth: geometry.boardWidth,
              minClearance: Math.min(...geometry.notePositions.flatMap(note =>
                [note.leftClearance, note.rightClearance])),
              scrollWidth: geometry.scrollWidth,
            };
            console.log(`#144 FULL-SITE ${width}px / 200% / JS=${javaScriptEnabled}: ${JSON.stringify({ before, after })}`);
            expect(after.boardWidth).toBeGreaterThan(before.boardWidth);
            expect(after.minClearance).toBeGreaterThan(before.minClearance);
          }

        }
      });
    }
  });
}

test('yhteinen otelauta näyttää oikeat sävelet ja vieritys jää otelaudan sisään', async ({ page }) => {
  await page.goto('/oppi/kitara/index.html');
  const board = page.locator('.recap-standard-neck');
  await expect(board).toBeVisible();
  await expect(page.locator('.recap-neck')).toBeHidden();
  const expected = [64,59,55,50,45,40].flatMap((open, string) =>
    Array.from({length:5}, (_,i) => ({string, fret:i+1, label:['C','','D','','E','F','','G','','A','','B'][(open+i+1)%12]})).filter(n=>n.label));
  const actual = await board.locator('.octave-recap').evaluateAll(groups => groups.map(g => {
    const circle = g.querySelector('circle')!;
    return {string: (Number(circle.getAttribute('cy'))-42)/34,
      fret: (Number(circle.getAttribute('cx'))-46+27)/54,
      label: g.querySelector('text')!.textContent};
  }));
  expect(actual).toEqual(expected);
  for (const width of [720,390,360,320]) {
    await page.setViewportSize({width,height:800});
    for (const zoom of [100,200]) {
      await page.evaluate(z => { document.documentElement.style.fontSize=z+'%'; },zoom);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      const geometry=await board.evaluate(el=>({width:el.clientWidth,scroll:el.scrollWidth,
        left:el.getBoundingClientRect().left,right:el.getBoundingClientRect().right}));
      expect(geometry.left).toBeGreaterThanOrEqual(0);
      expect(geometry.right).toBeLessThanOrEqual(width);
      expect(geometry.scroll).toBeGreaterThanOrEqual(geometry.width);
      await expect(board.locator('.octave-recap')).toHaveCount(18);
    }
  }
});
