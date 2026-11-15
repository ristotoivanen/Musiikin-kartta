import { expect, test } from '@playwright/test';

const topicPath = '/oppi/savelnimet/index.html';
const intervalsPath = '/oppi/savelnimet/savelet-ja-intervallit.html';
const guitarPath = '/oppi/savelnimet/kitaran-kielet-ja-sointumerkinnat.html';
const practicePath = '/oppi/savelnimet/siirra-yhta-sormea.html';
const topicName = 'Sävelnimet ja sointumerkinnät';
const readingKey = 'musiikin-kartta:luvut';

test('pääaiheen kortti avaa oman sivunsa ja selaimen paluu löytää kortin', async ({ page }) => {
  await page.goto('/index.html#oppimisaiheet');
  const card = page.getByRole('link', { name: new RegExp(topicName) });
  await expect(card).toHaveAttribute('href', 'oppi/savelnimet/index.html');
  await expect(page.getByRole('link', { name: 'Sävelet ja intervallit', exact: true })).toHaveCount(0);
  await expect(page.getByText('H- ja B-sävelnimet', { exact: true })).toHaveCount(0);
  await card.focus();
  await expect(card).toHaveCSS('outline-style', 'solid');
  await card.press('Enter');
  await expect(page).toHaveURL(topicPath);
  await expect(page.getByRole('heading', { level: 1, name: topicName })).toBeVisible();
  await page.getByRole('link', { name: /^Sävelet ja intervallit/ }).click();
  await expect(page).toHaveURL(intervalsPath);
  await expect(page.getByRole('heading', { level: 1, name: 'Sävelet ja intervallit' })).toBeVisible();
  await expect(page.locator('.chapter')).toHaveCount(1);
  await expect(page.getByText(/^Soita A-kielen 3\. nauha \(C\), D-kielen/)).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'Asteikot', exact: true })).toHaveCount(0);
  await page.goBack();
  await expect(page).toHaveURL(topicPath);
  await page.goBack();
  await expect(card).toBeFocused();
});

test('oppitunneilla on oma sisältö, toimiva ääni ja reitit aiheeseen', async ({ page }) => {
  await page.goto(topicPath);
  await page.getByRole('link', { name: /Kitaran kielet ja sointumerkinnät/ }).click();
  await expect(page).toHaveURL(guitarPath);
  await expect(page.getByRole('img', { name: /^C: paksu E-kieli/ })).toBeVisible();
  await expect(page.getByRole('img', { name: /^G: paksu E-kieli/ })).toBeVisible();
  await page.getByRole('link', { name: 'Seuraava · Sävelet ja intervallit' }).click();
  await expect(page).toHaveURL(intervalsPath);
  const audio = page.locator('audio');
  await audio.evaluate(player => {
    const media = player as HTMLAudioElement;
    media.muted = true;
    return media.play();
  });
  await expect.poll(() => audio.evaluate(player => (player as HTMLAudioElement).currentTime)).toBeGreaterThan(0);
  const hNote = page.locator('#h-savelnimi');
  await expect(hNote).toContainText('H ja B');
  await hNote.getByRole('link', { name: 'Lue, mistä H-nimi tuli' }).click();
  await expect(page).toHaveURL('/book/h-savelnimen-alkupera.html');
  await expect(page.getByRole('link', { name: /^Christina Kwon · Saksalainen urkutabulatuuri/ })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sävelet ja intervallit Oppimiskartassa' }))
    .toHaveAttribute('href', '../oppi/savelnimet/savelet-ja-intervallit.html#h-savelnimi');
  await page.goBack();
  await expect(page).toHaveURL(intervalsPath);
  await page.getByRole('link', { name: 'Seuraava · Siirrä yhtä sormea' }).click();
  await expect(page).toHaveURL(practicePath);
  await expect(page.getByRole('heading', { level: 1, name: /Siirrä yhtä sormea/ })).toBeVisible();
  await expect(page.getByText(/^Soita A-kielen 3\. nauha/)).toBeVisible();
  const path = page.getByRole('navigation', { name: 'Sijainti' });
  await path.getByRole('link', { name: topicName }).click();
  await expect(page).toHaveURL(topicPath);
  await page.getByRole('link', { name: 'Takaisin Oppimiskarttaan' }).click();
  await expect(page).toHaveURL('/index.html#aihe-nuotit');
  await expect(page.locator('#aihe-nuotit')).toBeFocused();
});

test('jatkaminen avaa uuden lukusivun ja jakaa lukumerkinnän teoriaoppaan kanssa', async ({ page }) => {
  await page.goto('/index.html');
  await page.evaluate(key => {
    localStorage.setItem(key, JSON.stringify(['pulssi-ja-komppi', 'sointukierrot', 'musiikki-on-kieli']));
  }, readingKey);
  await page.reload();
  await page.getByRole('link', { name: 'Jatka oppimista · Sävelet ja intervallit' }).click();
  await expect(page).toHaveURL(intervalsPath);
  await page.getByRole('button', { name: 'Merkitse luku tehdyksi' }).click();
  await page.goto('/book/osa-2.html#savelet-ja-intervallit');
  await expect(page.locator('#savelet-ja-intervallit').getByRole('button', { name: /Luku tehty/ }))
    .toHaveAttribute('aria-pressed', 'true');
  await page.goto('/book/osa-2.html?aihe=aihe-nuotit#h-savelnimi');
  await expect(page.locator('#h-savelnimi')).toBeVisible();
  await page.getByRole('link', { name: 'Takaisin aiheeseen' }).click();
  await expect(page).toHaveURL(topicPath);
});

test('aihe, oppitunnit ja harjoitus mahtuvat 320 pikselin näyttöön', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  for (const url of [topicPath, intervalsPath, guitarPath, practicePath]) {
    await page.goto(url);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth), url).toBeLessThanOrEqual(320);
  }
});

const topics = [
  ['kitara', 'kitara', 'Kitaran perusteet'],
  ['rytmi', 'rytmi', 'Rytmi'],
  ['nuotit', 'savelnimet', topicName],
  ['korva', 'korva', 'Sävelkorva ja melodia'],
  ['otelauta', 'otelauta', 'Otelauta'],
  ['soinnut', 'soinnut', 'Soinnut ja harmonia'],
  ['asteikot', 'asteikot', 'Asteikot ja moodit'],
  ['kappaleet', 'kappaleet', 'Kappaleet ja oma musiikki'],
] as const;

for (const [anchor, slug, title] of topics) {
  test(title + ' · jokainen askel ja resurssi löytyy', async ({ page, request }) => {
    const map = '/index.html#aihe-' + anchor;
    const topic = '/oppi/' + slug + '/index.html';
    await page.goto(map);
    await page.locator('#aihe-' + anchor).click();
    await expect(page).toHaveURL(topic);
    await expect(page.getByRole('heading', { level: 1, name: title })).toBeVisible();
    await expect(page.getByText('Aloita tästä', { exact: true })).toBeVisible();
    const choices = page.locator('a.study-choice');
    expect(await choices.count()).toBeGreaterThanOrEqual(2);
    const paths = await choices.evaluateAll(nodes => nodes.map(node => new URL((node as HTMLAnchorElement).href).pathname));
    const audio = new Set<string>();
    for (const [index, path] of paths.entries()) {
      expect((await page.goto(path))?.ok(), path).toBe(true);
      await expect(page.getByRole('heading', { level: 1 }), path).toBeVisible();
      const number = String(index + 1).padStart(2, '0');
      await expect(page.locator('.study-meta'), path).toHaveText(new RegExp('^(Oppitunti|Harjoitus) ' + number));
      await expect(page.getByRole('navigation', { name: 'Sijainti' }).getByRole('link', { name: title }))
        .toHaveAttribute('href', 'index.html');
      for (const [rel, neighbor] of [['prev', paths[index - 1]], ['next', paths[index + 1]]] as const) {
        const link = page.locator('a[rel="' + rel + '"]');
        if (neighbor) await expect(link).toHaveAttribute('href', neighbor.split('/').at(-1)!);
        else await expect(link).toHaveCount(0);
      }
      const media = await page.locator('audio source').evaluateAll(sources => sources.map(item => (item as HTMLSourceElement).src));
      media.forEach(src => audio.add(src));
      expect(await page.evaluate(() => document.documentElement.scrollWidth), path).toBeLessThanOrEqual(page.viewportSize()!.width);
    }
    for (const resource of audio) {
      const response = await request.head(resource);
      expect(response.ok(), resource).toBe(true);
      expect(response.headers()['content-type'], resource).toMatch(/^(audio|video)\//);
      await response.dispose();
    }
    await page.getByRole('link', { name: 'Takaisin Oppimiskarttaan' }).click();
    await expect(page).toHaveURL(map);
  });
}

test('ristiinlinkitys avaa saman opetussivun ja takaisinpaluu säilyttää lähtöaiheen', async ({ page }) => {
  await page.goto('/oppi/kitara/index.html');
  await page.getByRole('link', { name: 'Kitaran kielet ja sointumerkinnät', exact: true }).click();
  await expect(page).toHaveURL(guitarPath);
  await page.goBack();
  await expect(page).toHaveURL('/oppi/kitara/index.html');
  await page.goto('/oppi/korva/intervallit.html');
  await page.getByRole('link', { name: /Kertaa intervallit/ }).click();
  await expect(page).toHaveURL(intervalsPath + '#savelet-ja-intervallit');
  await expect(page.getByRole('heading', { level: 1, name: 'Sävelet ja intervallit' })).toBeVisible();
});

test('vanhat ja virheelliset merkinnät eivät kaada sivua tai muutu sivua lukiessa', async ({ page }) => {
  await page.goto(topicPath);
  const total = page.locator('[data-study-total]');
  await expect(total).toHaveText('0/1 teoriaoppaan lukua tehty');
  await page.evaluate(key => {
    localStorage.setItem('musiikin-kartta:tehdyt', JSON.stringify(['osa-1#savelet-ja-intervallit', '__proto__']));
    localStorage.setItem(key, '{"katkennut":');
  }, readingKey);
  await page.reload();
  await expect(total).toHaveText('1/1 teoriaoppaan lukua tehty');
  expect(await page.evaluate(key => localStorage.getItem(key), readingKey)).toBe('{"katkennut":');
  await page.evaluate(key => localStorage.setItem(key, JSON.stringify(['tuleva-luku'])), readingKey);
  await page.goto('/index.html');
  await expect(page.getByRole('link', { name: /Jatka oppimista/ })).toHaveCount(0);
  expect(await page.evaluate(key => localStorage.getItem(key), readingKey)).toBe('["tuleva-luku"]');
});

test('äänitiedostojen katketessa ilmoitus näkyy ja harjoitukseen voi silti siirtyä', async ({ page }) => {
  await page.route('**/assets/audio/osa-2/duuri-ja-molli.*', route => route.abort());
  await page.goto(intervalsPath);
  await page.locator('audio').evaluate(element => {
    const player = element as HTMLAudioElement;
    player.muted = true;
    void player.play().catch(() => {});
  });
  await expect(page.getByRole('status')).toHaveText(/Ääniesimerkkiä ei voitu ladata/);
  await page.getByRole('link', { name: 'Seuraava · Siirrä yhtä sormea' }).click();
  await expect(page).toHaveURL(practicePath);
});

test.describe('Oppimiskartta ilman JavaScriptiä', () => {
  test.use({ javaScriptEnabled: false });

  test('staattiset linkit ja tehtävien ohjeet toimivat', async ({ page }) => {
    await page.goto('/index.html#oppimisaiheet');
    await page.locator('#aihe-nuotit').click();
    await expect(page).toHaveURL(topicPath);
    await expect(page.locator('[data-study-total]')).toBeHidden();
    await page.locator('#valinta-savelet-ja-intervallit').click();
    await expect(page).toHaveURL(intervalsPath);
    await expect(page.locator('audio[controls]')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Kromaattinen asteikko' })).toBeVisible();
    await page.getByRole('link', { name: 'Seuraava · Siirrä yhtä sormea' }).click();
    await expect(page).toHaveURL(practicePath);
    await expect(page.getByText(/^Soita A-kielen 3\. nauha/)).toBeVisible();
    await page.getByRole('link', { name: 'Takaisin Oppimiskarttaan' }).click();
    await expect(page).toHaveURL('/index.html#aihe-nuotit');
    await page.goto('/oppi/korva/mika-aste-soi.html');
    await expect(page.getByText(/Kysymysten soittaminen tarvitsee JavaScriptin/)).toBeVisible();
  });
});

test('korvaharjoitus toipuu äänilaitteen käynnistysvirheestä', async ({ page }) => {
  await page.addInitScript(() => {
    const NativeAudioContext = window.AudioContext;
    let attempts = 0;
    window.AudioContext = class extends NativeAudioContext {
      constructor(options?: AudioContextOptions) {
        if (attempts++ === 0) throw new Error('Simuloitu äänilaitteen virhe');
        super(options);
      }
    };
  });
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/oppi/korva/mika-aste-soi.html');
  const newQuestion = page.getByRole('button', { name: 'Uusi kysymys' });
  const feedback = page.locator('.et-feedback');
  const answer = page.getByRole('group', { name: 'Vastausvaihtoehdot' }).getByRole('button').first();
  await newQuestion.click();
  await expect(feedback).toHaveText(/Ääni ei käynnistynyt/);
  await expect(answer).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Kuuntele uudelleen' })).toBeDisabled();
  await newQuestion.click();
  await expect(feedback).toBeEmpty();
  await expect(answer).toBeEnabled();
  await answer.click();
  await expect(feedback).toHaveText(/Oikein|Ei aivan/);
  await page.getByRole('link', { name: 'Takaisin Oppimiskarttaan' }).click();
  await expect(page).toHaveURL('/index.html#aihe-korva');
  expect(errors).toEqual([]);
});

test('tahtitaulukko ja korvaharjoituksen valitsin mahtuvat 320 pikseliin suurennetulla tekstillä', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  for (const path of [
    '/oppi/rytmi/pulssi-ja-komppi.html',
    '/oppi/kappaleet/kappale-asteina.html',
    '/oppi/korva/mika-aste-soi.html',
    '/oppi/korva/tunnista-sointutyyppi.html',
    '/oppi/savelnimet/kitaran-kielet-ja-sointumerkinnat.html',
  ]) {
    await page.goto(path);
    await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
    expect(await page.evaluate(() => document.documentElement.scrollWidth), path).toBeLessThanOrEqual(320);
  }
  await page.goto('/oppi/rytmi/pulssi-ja-komppi.html');
  await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
  const table = page.getByRole('region', { name: 'Alas–ylös-komppi yhdessä tahdissa' });
  expect(await table.evaluate(element => element.scrollWidth)).toBeGreaterThan(await table.evaluate(element => element.clientWidth));
  await table.focus();
  await expect(table).toBeFocused();
  await expect(table).toHaveCSS('outline-style', 'solid');
});
