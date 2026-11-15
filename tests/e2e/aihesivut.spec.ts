import { expect, test } from '@playwright/test';

const topicPath = '/oppi/savelnimet/index.html';
const intervalsPath = '/oppi/savelnimet/savelet-ja-intervallit.html';
const guitarPath = '/oppi/savelnimet/kitaran-kielet-ja-sointumerkinnat.html';
const practicePath = '/oppi/savelnimet/siirra-yhta-sormea.html';
const topicName = 'Sävelnimet ja musiikin lukeminen';
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
  await expect(page.getByRole('heading', { name: 'Asteikot', exact: true })).toHaveCount(0);
  await page.goBack();
  await expect(page).toHaveURL(topicPath);
  await page.goBack();
  await expect(card).toBeFocused();
});

test('oppitunneilla on oma sisältö, toimiva ääni ja reitit aiheeseen', async ({ page }) => {
  await page.goto(topicPath);
  await page.getByRole('link', { name: /^Kitaran kielet ja sointumerkinnät/ }).click();
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
  await page.getByRole('link', { name: 'Jatka: luku 4 · Sävelet ja intervallit' }).click();
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
