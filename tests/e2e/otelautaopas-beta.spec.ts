import { expect, test, type Page } from '@playwright/test';

// Otelautaopas BETA (issue #193): uudistettu Soinnut-näkymä rinnakkain nykyisen oppaan kanssa.
const PAGE = '/otelautaopas-beta.html';
const ROOTS = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];
const QUALITIES: Record<string, string[]> = {
  maj: ['1', '3', '5'], min: ['1', '♭3', '5'], dim: ['1', '♭3', '♭5'], aug: ['1', '3', '♯5'],
  sus2: ['1', '2', '5'], sus4: ['1', '4', '5'],
  maj7: ['1', '3', '5', '7'], '7': ['1', '3', '5', '♭7'], m7: ['1', '♭3', '5', '♭7'],
  m7b5: ['1', '♭3', '♭5', '♭7'], dim7: ['1', '♭3', '♭5', '♭♭7'],
  '7#5': ['1', '3', '♯5', '♭7'], '7b5': ['1', '3', '♭5', '♭7'], mMaj7: ['1', '♭3', '5', '7'],
};
const panel = (page: Page) => page.locator('#chord-beta');
const root = (page: Page, name: string) => page.locator('#beta-roots').locator(`[data-root="${ROOTS.indexOf(name)}"]`);
const quality = (page: Page, id: string) => panel(page).locator(`[data-quality="${id}"]`);
const mode = (page: Page, id: string) => panel(page).locator(`[data-mode="${id}"]`);
const group = (page: Page, id: string) => panel(page).locator(`[data-group="${id}"]`);
const pad = (page: Page, id: string) => page.locator(`#chord-pad [data-pad="${id}"]`);

async function dots(page: Page) {
  return page.locator('#board .grip-notes circle[data-degree]').evaluateAll(nodes => nodes.map(node => ({
    string: Number(node.getAttribute('data-string')), fret: Number(node.getAttribute('data-fret')),
    degree: node.getAttribute('data-degree') ?? '',
  })));
}
const labels = (page: Page) => page.locator('#board .grip-notes text[font-weight="700"]').allTextContents();
const advanced = (page: Page) => page.locator('#beta-level [data-level="advanced"]').click();
const OPEN = [64, 59, 55, 50, 45, 40];

test.describe('Otelautaopas BETA', () => {
  test('Soittopakin Otelautaopas on tämä sivu BETA-merkinnällä; vanha sivu ei ole Soittopakissa', async ({ page }) => {
    await page.goto('/soittopakki.html');
    const tool = page.locator('#otelautaopas');
    await expect(tool.getByRole('heading', { level: 2 })).toHaveText('Otelautaopas BETA');
    await expect(page.locator('#otelautaopas-beta')).toHaveCount(0);
    await expect(page.locator('a[href^="otelautaharjoittelija.html"]')).toHaveCount(0);
    // Kortissa on vain päälinkki; päällekkäiset pikavalinnat poistettiin (PR #209).
    await expect(tool.getByRole('link')).toHaveCount(1);
    await expect(tool.getByRole('heading', { level: 3 })).toHaveCount(0);
    for (const removed of ['Asteikot ja moodit', 'Sointukartta', 'Oktaavit']) {
      await expect(tool.getByRole('link', { name: removed })).toHaveCount(0);
    }
    const open = tool.getByRole('link', { name: 'Avaa Otelautaopas', exact: true });
    await expect(open).toHaveAttribute('href', 'otelautaopas-beta.html');
    await open.click();
    await expect(page).toHaveURL(/otelautaopas-beta\.html$/);
    await expect(page.locator('.beta-badge')).toHaveText('BETA');
    await expect(page.getByRole('navigation', { name: 'Päävalikko' }).getByRole('link', { name: 'Soittopakki' })).toHaveAttribute('aria-current', 'true');
    await expect(page.getByRole('button', { name: 'Soinnut', exact: true })).toHaveAttribute('aria-pressed', 'true');
    // Poistettujen pikavalintojen rajatut näkymät toimivat yhä suorista osoitteista.
    for (const [query, view, title] of [
      ['?toonikka=A&asteikko=mp#asteikot', 'Asteikot', 'A-mollipentatoninen'],
      ['#soinnut', 'Soinnut', null],
      ['?toonikka=A#oktaavit', 'Oktaavit', 'A · sijainnit otelaudalla'],
    ] as const) {
      await page.goto('about:blank');
      await page.goto(PAGE + query);
      await expect(page.getByRole('button', { name: view, exact: true }), query).toHaveAttribute('aria-pressed', 'true');
      if (title) await expect(page.locator('#selection-title'), query).toContainText(title);
      else await expect(panel(page), query).toBeVisible();
    }
    // Vanha osoite toimii yhä.
    await page.goto('/otelautaharjoittelija.html#soinnut');
    await expect(page.locator('#chord-group')).toBeVisible();
  });

  test('Soinnut on ensimmäinen välilehti ja avautuu oletuksena ilman osoitteen osaa', async ({ page }) => {
    await page.goto(PAGE);
    await expect(page.locator('.visualizer-views button')).toHaveText(['Soinnut', 'Asteikot', 'Oktaavit']);
    await expect(page.getByRole('button', { name: 'Soinnut', exact: true })).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#chord-beta')).toBeVisible();
    await page.getByRole('button', { name: 'Asteikot' }).click();
    expect(page.url()).toContain('#asteikot');
    await page.reload();
    await expect(page.getByRole('button', { name: 'Asteikot' })).toHaveAttribute('aria-pressed', 'true');
  });

  test('Soinnut-näkymässä on 12 perussävelpainiketta ja kaikki sointulaadut suorina painikkeina, ei valikkoa', async ({ page }) => {
    await page.goto(PAGE + '#soinnut');
    await advanced(page);
    await expect(page.locator('#beta-roots [data-root]')).toHaveText(ROOTS);
    for (const id of Object.keys(QUALITIES)) await expect(quality(page, id)).toBeVisible();
    await expect(panel(page).getByRole('group', { name: 'Kolmisoinnut' }).getByRole('button')).toHaveText(['Duuri', 'Molli', 'dim', 'aug']);
    await expect(panel(page).getByRole('group', { name: 'Sus-soinnut' }).getByRole('button')).toHaveText(['sus2', 'sus4']);
    await expect(panel(page).getByRole('group', { name: 'Septimisoinnut' }).getByRole('button')).toHaveCount(8);
    await expect(panel(page).locator('select')).toHaveCount(0);
    await expect(page.locator('#fret-count')).toBeVisible();
    await expect(page.locator('#fret-count option')).toHaveText(['17 nauhaa (oletus)', '12 nauhaa', '19 nauhaa', '20 nauhaa', '22 nauhaa', '24 nauhaa']);
  });

  test('kaikki 12 säveltä ja 14 laatua: koko ote soittaa vain sointusävelet ja kaikki asteet', async ({ page }) => {
    await page.goto(PAGE + '#soinnut');
    await advanced(page);
    for (const [rootIndex, name] of ROOTS.entries()) {
      await root(page, name).click();
      await expect(root(page, name)).toHaveAttribute('aria-pressed', 'true');
      for (const [id, degrees] of Object.entries(QUALITIES)) {
        await quality(page, id).click();
        const shown = await dots(page);
        expect(shown.length, `${name} ${id}`).toBeGreaterThanOrEqual(3);
        expect(new Set(shown.map(dot => dot.degree)), `${name} ${id}`).toEqual(new Set(degrees));
        for (const dot of shown) {
          expect(dot.fret).toBeGreaterThanOrEqual(0);
          expect(dot.fret).toBeLessThanOrEqual(17);
        }
        // Sävel = avoin kieli + nauha vastaa asteen intervallia.
        const intervals: Record<string, number> = { '1': 0, '2': 2, '♭3': 3, '3': 4, '4': 5, '♭5': 6, '5': 7, '♯5': 8, '♭♭7': 9, '♭7': 10, '7': 11 };
        for (const dot of shown) {
          expect((OPEN[dot.string - 1] + dot.fret) % 12, `${name} ${id} ${dot.degree}`).toBe((rootIndex + intervals[dot.degree]) % 12);
        }
      }
    }
  });

  test('Sävelet/Asteet-painike vaihtaa otelaudan merkinnät ja sointumerkki sekä asteet näkyvät', async ({ page }) => {
    await page.goto(PAGE + '?toonikka=C&sointu=dim7&ote=full#soinnut');
    await expect(page.locator('#selection-title')).toContainText('Cdim7');
    await expect(page.locator('#selection-notes')).toHaveText('Sointusävelet: C (1) · E♭ (♭3) · G♭ (♭5) · B♭♭ (♭♭7)');
    expect(new Set(await labels(page))).toEqual(new Set(['C', 'E♭', 'G♭', 'B♭♭']));
    await panel(page).locator('[data-labels="degrees"]').click();
    expect(new Set(await labels(page))).toEqual(new Set(['1', '♭3', '♭5', '♭♭7']));
    await panel(page).locator('[data-labels="names"]').click();
    expect(new Set(await labels(page))).toEqual(new Set(['C', 'E♭', 'G♭', 'B♭♭']));
  });

  test('Perusnäkymä näyttää vain perusasiat ja Laaja-näkymä kaikki; valinta säilyy osoitteessa', async ({ page }) => {
    await page.goto(PAGE + '#soinnut');
    await expect(page.locator('#beta-level [data-level="basic"]')).toHaveAttribute('aria-pressed', 'true');
    for (const id of ['maj', 'min', '7', 'maj7', 'm7']) await expect(quality(page, id)).toBeVisible();
    for (const id of ['dim', 'aug', 'sus2', 'sus4', 'm7b5', 'dim7', '7#5', '7b5', 'mMaj7']) await expect(quality(page, id)).toBeHidden();
    await expect(page.locator('#beta-roots [data-root]:visible')).toHaveText(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
    await expect(mode(page, 'full')).toBeVisible();
    await expect(mode(page, 'triad')).toBeVisible();
    await expect(mode(page, 'all')).toBeHidden();
    await expect(panel(page).locator('[data-labels]').first()).toBeHidden();
    await mode(page, 'triad').click();
    await expect(panel(page).locator('#cb-groups')).toBeHidden();
    await expect(pad(page, 'down')).toBeEnabled();
    await pad(page, 'down').click();
    await expect(pad(page, 'up')).toBeEnabled();
    await advanced(page);
    await expect(group(page, 'dgb')).toBeVisible();
    await expect(group(page, 'dgb')).toHaveAttribute('aria-pressed', 'true');
    await page.locator('#beta-level [data-level="basic"]').click();
    await mode(page, 'full').click();
    await advanced(page);
    for (const id of Object.keys(QUALITIES)) await expect(quality(page, id)).toBeVisible();
    await mode(page, 'all').click();
    expect(page.url()).toContain('taso=laaja');
    await page.locator('#beta-level [data-level="basic"]').click();
    await expect(mode(page, 'full')).toHaveAttribute('aria-pressed', 'true');
    expect(page.url()).not.toContain('taso=laaja');
  });

  test('otelaudalla ei ole tallaa ja kielten paksuudet kasvavat ohuesta paksuun', async ({ page }) => {
    await page.goto(PAGE + '#soinnut');
    await expect(page.locator('#board svg')).not.toContainText('Talla');
    const widths = await page.locator('#board svg line[stroke="#b9b9c4"], #board svg line[stroke="#c4d2d3"]').evaluateAll(nodes =>
      nodes.filter(n => n.getAttribute('y1') === n.getAttribute('y2')).map(n => Number(n.getAttribute('stroke-width'))));
    expect(widths).toHaveLength(6);
    expect(widths).toEqual([...widths].sort((a, b) => a - b));
    expect(widths[5] / widths[0]).toBeGreaterThan(4);
  });

  test('Asteikot ja Oktaavit käyttävät samaa sävelnavigointia ja Perus/Laaja-näkymää kuin Soinnut', async ({ page }) => {
    await page.goto(PAGE + '#asteikot');
    // Perus: vain luonnolliset sävelet, kaksi pentatonista asteikkoa, ei sormitusbokseja.
    await expect(page.locator('#beta-roots [data-root]:visible')).toHaveText(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
    await expect(page.locator('#beta-scales, #beta-pent button:visible')).toHaveText(['Mollipentatoninen', 'Duuripentatoninen']);
    await expect(page.locator('#beta-modes button:visible')).toHaveCount(0);
    await expect(page.locator('#scale-settings')).toBeHidden();
    await page.locator('#beta-pent [data-scale="majp"]').click();
    await expect(page.locator('#selection-title')).toHaveText('A-duuripentatoninen');
    await root(page, 'D').click();
    await expect(page.locator('#selection-title')).toHaveText('D-duuripentatoninen');
    expect(page.url()).toContain('toonikka=D');
    // Laaja: kaikki moodit, etumerkilliset sävelet ja boksit.
    await advanced(page);
    expect(page.url()).toContain('taso=laaja');
    await expect(page.locator('#beta-roots [data-root]:visible')).toHaveCount(12);
    await expect(page.locator('#beta-modes button:visible')).toHaveCount(7);
    await expect(page.locator('#scale-settings')).toBeVisible();
    await page.locator('#beta-modes [data-scale="dorian"]').click();
    await expect(page.locator('#selection-title')).toHaveText('D-doorinen');
    await root(page, 'B♭').click();
    // Oktaavit: sama sävelrivi ja taso, ei asteikkovalintoja.
    await page.getByRole('button', { name: 'Oktaavit' }).click();
    await expect(page.locator('#beta-roots')).toBeVisible();
    await expect(page.locator('#beta-scale-block')).toBeHidden();
    await expect(page.locator('#selection-title')).toContainText('B♭ · sijainnit otelaudalla');
    await expect(page.locator('#beta-level [data-level="advanced"]')).toHaveAttribute('aria-pressed', 'true');
    // Takaisin Perukseen: sävel ja asteikko siirtyvät lähimpään perusvaihtoehtoon.
    await page.locator('#beta-level [data-level="basic"]').click();
    await expect(page.locator('#beta-roots [data-root]:visible')).toHaveCount(7);
    await expect(page.locator('#selection-title')).toContainText('A · sijainnit');
    await page.getByRole('button', { name: 'Asteikot' }).click();
    await expect(page.locator('#selection-title')).toHaveText('A-mollipentatoninen');
    expect(page.url()).not.toContain('taso=laaja');
    // Osoite avaa oikean tason: etumerkillinen sävel tai moodi vaatii Laajan.
    await page.goto(PAGE + '?toonikka=F%E2%99%AF&asteikko=lydian#oktaavit');
    await expect(page.locator('#beta-level [data-level="advanced"]')).toHaveAttribute('aria-pressed', 'true');
  });

  test('Triadit: neljä kieliryhmää, aktiiviset kielet korostuvat ja nuolet toimivat rajoille asti', async ({ page }) => {
    await page.goto(PAGE + '?toonikka=C&sointu=maj&ote=triad&taso=laaja#soinnut');
    await expect(panel(page).getByRole('group', { name: 'Kielet' }).getByRole('button')).toHaveText(['G–B–e', 'D–G–B', 'A–D–G', 'E–A–D']);
    await expect(group(page, 'gbe')).toHaveAttribute('aria-pressed', 'true');
    // Ylin ryhmä: ↑ pois käytöstä, ↓ käytössä.
    await expect(pad(page, 'up')).toBeDisabled();
    await expect(pad(page, 'down')).toBeEnabled();
    const strings = async () => [...new Set((await dots(page)).map(dot => dot.string))].sort();
    expect(await strings()).toEqual([1, 2, 3]);
    await expect(page.locator('#board .string-group-band')).toHaveCount(1);
    for (const [click, expected, target] of [
      ['down', [2, 3, 4], 'dgb'], ['down', [3, 4, 5], 'adg'], ['down', [4, 5, 6], 'ead'],
    ] as const) {
      await pad(page, click).click();
      expect(await strings()).toEqual(expected);
      await expect(group(page, target)).toHaveAttribute('aria-pressed', 'true');
      await expect(page.locator('#board .string-group-band')).toHaveCount(1);
    }
    await expect(pad(page, 'down')).toBeDisabled();
    await expect(pad(page, 'up')).toBeEnabled();
    await pad(page, 'up').click();
    await pad(page, 'up').click();
    await pad(page, 'up').click();
    expect(await strings()).toEqual([1, 2, 3]);
    await expect(pad(page, 'up')).toBeDisabled();
    // Ryhmäpainikkeet vaihtavat ryhmän suoraan.
    await group(page, 'adg').click();
    expect(await strings()).toEqual([3, 4, 5]);
  });

  test('← ja → selaavat otteita nauhasijainnin mukaan; rajalla painike on pois käytöstä', async ({ page }) => {
    await page.goto(PAGE + '?toonikka=G&sointu=maj&ote=triad&kielet=dgb&taso=laaja#soinnut');
    await expect(pad(page, 'left')).toBeDisabled();
    const seen: number[] = [];
    let guard = 0;
    while (await pad(page, 'right').isEnabled() && guard++ < 20) {
      const low = Math.min(...(await dots(page)).map(dot => dot.fret));
      seen.push(low);
      await pad(page, 'right').click();
    }
    seen.push(Math.min(...(await dots(page)).map(dot => dot.fret)));
    expect(seen.length).toBeGreaterThan(2);
    expect(seen).toEqual([...seen].sort((a, b) => a - b));
    await expect(pad(page, 'right')).toBeDisabled();
    await expect(page.locator('#chord-pad [data-pad="count"]')).toHaveText(new RegExp(`^${seen.length}/${seen.length}$`));
    await expect(page.locator('#cb-facts')).toContainText(`${seen.length}/${seen.length}`);
  });

  test('ryhmän vaihto valitsee lähimmän otteen ja duuri–molli säilyttää käännöksen ja kaksi muuta säveltä', async ({ page }) => {
    await page.goto(PAGE + '?toonikka=C&sointu=maj&ote=triad&kielet=gbe&taso=laaja#soinnut');
    // Siirry G–B–e-ryhmässä toiseen otteeseen ja merkitse paikka.
    await pad(page, 'right').click();
    const before = await dots(page);
    const centre = before.reduce((sum, dot) => sum + dot.fret, 0) / before.length;
    await pad(page, 'down').click();
    const afterGroup = await dots(page);
    const groupCentre = afterGroup.reduce((sum, dot) => sum + dot.fret, 0) / afterGroup.length;
    expect(Math.abs(groupCentre - centre)).toBeLessThanOrEqual(4);
    // Duuri → molli: terssi (3) → ♭3, muut kaksi paikallaan.
    const major = await dots(page);
    await quality(page, 'min').click();
    const minor = await dots(page);
    expect(minor.map(dot => dot.string)).toEqual(major.map(dot => dot.string));
    for (const [index, dot] of major.entries()) {
      if (dot.degree === '3') {
        expect(minor[index].degree).toBe('♭3');
        expect(minor[index].fret).toBe(dot.fret - 1);
      } else {
        expect(minor[index].fret).toBe(dot.fret);
      }
    }
    // Takaisin molli → duuri palauttaa saman otteen.
    await quality(page, 'maj').click();
    expect(await dots(page)).toEqual(major);
    // Käännös säilyy.
    await expect(page.locator('#cb-facts')).toContainText('käännös');
  });

  // Yksi testi pohjasäveltä kohti: yhtenä testinä läpikäynti kesti CI-runnerista riippuen yli aikarajan.
  for (const name of ROOTS) {
    test(`duuri–molli-vaihto ei muodosta negatiivista nauhaa avointen kielten kohdalla: ${name}`, async ({ page }) => {
      await page.goto(PAGE + '?sointu=maj&ote=triad&taso=laaja#soinnut');
      await root(page, name).click();
      for (const id of ['gbe', 'dgb', 'adg', 'ead']) {
        await group(page, id).click();
        let guard = 0;
        do {
          await quality(page, 'min').click();
          for (const dot of await dots(page)) expect(dot.fret, `${name} ${id}`).toBeGreaterThanOrEqual(0);
          await quality(page, 'maj').click();
          for (const dot of await dots(page)) expect(dot.fret).toBeGreaterThanOrEqual(0);
          if (await pad(page, 'right').isDisabled()) break;
          await pad(page, 'right').click();
        } while (guard++ < 8);
      }
    });
  }

  test('Triadit eivät ole käytössä nelisävelisille soinnuille; koko ote näyttää E- ja A-juuriset otteet', async ({ page }) => {
    await page.goto(PAGE + '?toonikka=C&sointu=maj7&ote=triad&taso=laaja#soinnut');
    await expect(mode(page, 'triad')).toBeDisabled();
    await expect(mode(page, 'full')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#cb-groups')).toBeHidden();
    await expect(pad(page, 'up')).toBeDisabled();
    await expect(pad(page, 'down')).toBeDisabled();
    // Otteet ovat nauhajärjestyksessä: Cmaj7 A-juurisena 3. nauhalla, E-juurisena 8. nauhalla.
    await expect(page.locator('#cb-facts')).toContainText('A-juurinen ote');
    await expect(page.locator('#cb-facts')).toContainText('1/');
    await pad(page, 'right').click();
    await expect(page.locator('#cb-facts')).toContainText('E-juurinen ote');
    await expect(pad(page, 'left')).toBeEnabled();
    await quality(page, 'min').click();
    await expect(mode(page, 'triad')).toBeEnabled();
    // Valittu Triadit-esitys palaa, kun septimisoinnun jälkeen valitaan taas kolmisointu.
    await mode(page, 'triad').click();
    await quality(page, 'dim7').click();
    await expect(mode(page, 'triad')).toBeDisabled();
    await expect(mode(page, 'full')).toHaveAttribute('aria-pressed', 'true');
    await quality(page, 'min').click();
    await expect(mode(page, 'triad')).toHaveAttribute('aria-pressed', 'true');
  });

  test('vanhat linkit toimivat: sointu, ote ja nauhamäärä', async ({ page }) => {
    await page.goto(PAGE + '?toonikka=A&asteikko=mp&sointu=m7&ote=a-juurinen#soinnut');
    await expect(quality(page, 'm7')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#cb-facts')).toContainText('A-juurinen ote');
    await page.goto(PAGE + '?toonikka=F%E2%99%AF&sointu=min&ote=all#soinnut');
    await expect(page.locator('#selection-notes')).toHaveText('Sointusävelet: F♯ (1) · A (♭3) · C♯ (5)');
    await expect(mode(page, 'all')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#board svg circle[r="11"]').first()).toBeVisible();
    await page.goto(PAGE + '?sointu=sus4&ote=triad&kielet=adg&nro=2&taso=laaja#soinnut');
    await expect(group(page, 'adg')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#chord-pad [data-pad="count"]')).toHaveText(/^2\//);
  });

  test('tila kirjoitetaan osoitteeseen ja latautuu samana', async ({ page }) => {
    await page.goto(PAGE + '#soinnut');
    await advanced(page);
    await root(page, 'D').click();
    await quality(page, 'sus2').click();
    await mode(page, 'triad').click();
    await group(page, 'dgb').click();
    await pad(page, 'right').click();
    const url = new URL(page.url());
    expect(url.searchParams.get('toonikka')).toBe('D');
    expect(url.searchParams.get('sointu')).toBe('sus2');
    expect(url.searchParams.get('ote')).toBe('triad');
    expect(url.searchParams.get('kielet')).toBe('dgb');
    const before = await dots(page);
    await page.reload();
    expect(await dots(page)).toEqual(before);
    await expect(group(page, 'dgb')).toHaveAttribute('aria-pressed', 'true');
  });

  test('Asteikot ja Oktaavit toimivat ennallaan ja perussävelen valinta säilyy näkymien välillä', async ({ page }) => {
    await page.goto(PAGE + '?toonikka=A&asteikko=mp#asteikot');
    await expect(page.locator('#selection-title')).toHaveText('A-mollipentatoninen');
    await expect(page.locator('#beta-roots')).toBeVisible();
    await expect(page.locator('#chord-settings')).toBeHidden();
    await expect(page.locator('#chord-pad')).toBeHidden();
    await expect(page.locator('#board .box-highlight')).toHaveCount(0);
    await advanced(page);
    await page.locator('#box-details summary').click();
    await page.locator('#pentatonic-boxes input[value="1"]').check();
    await expect(page.locator('#board .box-highlight').first()).toBeAttached();
    await page.getByRole('button', { name: 'Oktaavit' }).click();
    await expect(page.locator('#selection-title')).toContainText('A · sijainnit otelaudalla');
    await expect(page.locator('#board .octave-note').first()).toBeVisible();
    await page.getByRole('button', { name: 'Soinnut', exact: true }).click();
    await expect(root(page, 'A')).toHaveAttribute('aria-pressed', 'true');
    await root(page, 'E♭').click();
    await page.getByRole('button', { name: 'Asteikot' }).click();
    await expect(page.locator('#root-select')).toHaveValue('3');
    await expect(page.locator('#selection-title')).toHaveText('E♭-mollipentatoninen');
  });

  test('nauhamäärän vaihto pitää koko otteen valittuna tai valitsee lähimmän kelvollisen', async ({ page }) => {
    await page.goto(PAGE + '?toonikka=B&sointu=aug&ote=full#soinnut');
    for (const count of ['12', '19', '24', '17']) {
      await page.locator('#fret-count').selectOption(count);
      const shown = await dots(page);
      for (const dot of shown) expect(dot.fret).toBeLessThanOrEqual(Number(count));
      expect(shown.length).toBeGreaterThan(0);
    }
    await page.locator('#fret-count').selectOption('12');
    await root(page, 'B').click();
    await quality(page, 'sus2').click();
    // 12 nauhalla sus2 voi jäädä ilman osaa otteista, mutta näkymä ei kaadu ja kertoo tilanteen.
    await expect(page.locator('#board svg')).toBeVisible();
  });

  test('näppäimistö: painikkeet tavoitetaan Tabilla ja nuolinäppäimet toimivat nuoliohjauksessa', async ({ page }) => {
    await page.goto(PAGE + '?toonikka=C&sointu=maj&ote=triad&kielet=dgb&taso=laaja#soinnut');
    await pad(page, 'right').focus();
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('#chord-pad [data-pad="count"]')).toHaveText(/^2\//);
    await page.keyboard.press('ArrowLeft');
    await expect(page.locator('#chord-pad [data-pad="count"]')).toHaveText(/^1\//);
    await page.keyboard.press('ArrowUp');
    await expect(group(page, 'gbe')).toHaveAttribute('aria-pressed', 'true');
    await page.keyboard.press('ArrowDown');
    await expect(group(page, 'dgb')).toHaveAttribute('aria-pressed', 'true');
    // Valintapainike aktivoituu Enterillä.
    await quality(page, 'dim').focus();
    await page.keyboard.press('Enter');
    await expect(quality(page, 'dim')).toHaveAttribute('aria-pressed', 'true');
    // Jokaisella painikkeella on nimi ja kosketuskohde on vähintään 44 px.
    for (const button of await page.locator('#chord-beta button, #chord-pad button').all()) {
      const box = await button.boundingBox();
      expect(box!.width, await button.innerText()).toBeGreaterThanOrEqual(43);
      expect(box!.height).toBeGreaterThanOrEqual(43);
      expect(((await button.getAttribute('aria-label')) ?? (await button.innerText())).length).toBeGreaterThan(0);
    }
  });

  for (const width of [320, 390, 640]) {
    test(`${width} px leveys: ei vaakavieritystä, ohjaus otelaudan alapuolella ja lauta täyttää leveyden`, async ({ page }) => {
      await page.setViewportSize({ width, height: 780 });
      await page.goto(PAGE + '?toonikka=C&sointu=maj&ote=triad&kielet=dgb&taso=laaja#soinnut');
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      const board = await page.locator('#board').boundingBox();
      const controls = await page.locator('#chord-pad').boundingBox();
      expect(controls!.y).toBeGreaterThanOrEqual(board!.y + board!.height - 1);
      // Lautaa ei kutisteta ohjauksen takia: se on vähintään näkymän leveyden verran (vieritettävä).
      expect(board!.width).toBeGreaterThanOrEqual(width - 40);
      expect(await page.locator('#board svg').evaluate(node => node.getBoundingClientRect().width)).toBeGreaterThanOrEqual(width - 40);
      for (const button of await page.locator('#chord-pad button').all()) {
        const box = await button.boundingBox();
        expect(box!.width).toBeGreaterThanOrEqual(43);
        expect(box!.x).toBeGreaterThanOrEqual(0);
        expect(box!.x + box!.width).toBeLessThanOrEqual(width);
      }
      for (const button of await page.locator('#chord-beta button').all()) {
        const box = await button.boundingBox();
        expect(box!.x + box!.width, await button.innerText()).toBeLessThanOrEqual(width + 1);
        expect(box!.height).toBeGreaterThanOrEqual(43);
      }
    });
  }

  test('työpöydällä nuoliohjaus on otelaudan oikealla puolella', async ({ page }) => {
    test.skip(test.info().project.name === 'phone', 'Työpöytäasettelu');
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(PAGE + '?toonikka=C&sointu=maj&ote=triad&kielet=dgb#soinnut');
    const board = await page.locator('#board').boundingBox();
    const controls = await page.locator('#chord-pad').boundingBox();
    expect(controls!.x).toBeGreaterThanOrEqual(board!.x + board!.width - 1);
    expect(controls!.y).toBeLessThan(board!.y + board!.height);
  });
});
