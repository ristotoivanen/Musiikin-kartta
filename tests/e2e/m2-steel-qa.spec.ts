import { expect, test } from '@playwright/test';

const url = '/assets/soitinpankki/m2-koe.html';

test('M2 Steel käyttää hyväksyttyä B-taustaa ilman paikallista latausta', async ({page}) => {
  const requests:string[] = [];
  page.on('request', request => {
    const u=request.url();
    if (/steel-6-40\.(ogg|m4a)|em-komppi-b-m3-hillitty-basso\.wav|e2-freepats/.test(u))
      requests.push(u);
  });
  await page.goto(url);
  await page.locator('button[data-mode="M2"]').click();
  await expect(page.locator('#description')).toContainText('B-säestyksen');
  await page.locator('#steelGain').fill('1.2');
  await expect(page.locator('#steelGainLabel')).toHaveText('1,2 ×');
  await page.locator('#start').click();
  await expect(page.locator('#message')).toContainText('Musiikki soi: kuuntele mallikitaraa.', {timeout:15000});
  expect(requests.some(u=>u.includes('em-komppi-b-m3-hillitty-basso.wav'))).toBe(true);
  expect(requests.some(u=>/steel-6-40\.(ogg|m4a)/.test(u))).toBe(true);
  expect(requests.some(u=>u.includes('e2-freepats'))).toBe(false);
  await page.locator('#stop').click();
  await expect(page.locator('#message')).toHaveText('Pysäytetty');
});

test('M0 käyttää edelleen FreePats-E2:ta eikä vaihda M2:n Steel-ääneen', async ({page}) => {
  const requests:string[]=[];
  page.on('request', request => { if(/e2-freepats|steel-6-40/.test(request.url()))requests.push(request.url()); });
  await page.goto(url);
  await page.locator('#start').click();
  await expect(page.locator('#message')).toContainText('Esimerkki soi:', {timeout:15000});
  expect(requests.some(u=>u.includes('e2-freepats'))).toBe(true);
  expect(requests.some(u=>u.includes('steel-6-40'))).toBe(false);
  await page.locator('#stop').click();
});

test('mallikitaran toisto pysähtyy heti myös taustalle siirryttäessä', async ({page}) => {
  await page.goto(url);
  await page.locator('button[data-mode="M2"]').click();
  await page.locator('#start').click();
  await expect(page.locator('#message')).toContainText('Musiikki soi:', {timeout:15000});
  await page.evaluate(() => {
    Object.defineProperty(document,'hidden',{value:true,configurable:true});
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await expect(page.locator('#message')).toContainText('sivu siirtyi taustalle');
  await expect(page.locator('#start')).toBeEnabled();
});
