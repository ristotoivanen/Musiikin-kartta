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

test('M2:n kitaran ja säestyksen voimakkuus muuttuu kesken toiston ilman uudelleenkäynnistystä', async ({page}) => {
  await page.addInitScript(() => {
    const w = window as Window & { __audioGainChanges?: number[] };
    w.__audioGainChanges = [];
    const original = AudioParam.prototype.setTargetAtTime;
    AudioParam.prototype.setTargetAtTime = function(value, startTime, timeConstant) {
      w.__audioGainChanges?.push(value);
      return original.call(this, value, startTime, timeConstant);
    };
  });
  await page.goto(url);
  await expect(page.locator('#m0GainControls')).toBeVisible();
  await expect(page.locator('#m2GainControls')).toBeHidden();
  await page.locator('button[data-mode="M2"]').click();
  await expect(page.locator('#m2GainControls')).toBeVisible();
  await expect(page.locator('#m0GainControls')).toBeHidden();
  await page.locator('#start').click();
  await expect(page.locator('#message')).toContainText('Musiikki soi: kuuntele mallikitaraa.', {timeout:15000});
  await page.locator('#steelGain').fill('2');
  await expect(page.locator('#steelGainLabel')).toHaveText('2,0 ×');
  await page.locator('#m2BackingGain').fill('0.35');
  await expect(page.locator('#m2BackingGainLabel')).toHaveText('35 %');
  await expect.poll(() => page.evaluate(() =>
    (window as Window & {__audioGainChanges?: number[]}).__audioGainChanges ?? [])
  ).toEqual(expect.arrayContaining([2,0.35]));
  await expect(page.locator('#message')).toContainText('Musiikki soi:');
  await page.locator('#stop').click();
});

test('M0:n erillinen kitarasäätö toimii toiston aikana ilman vaikutusta M2-säätöön', async ({page}) => {
  await page.addInitScript(() => {
    const w = window as Window & { __audioGainChanges?: number[] };
    w.__audioGainChanges = [];
    const original = AudioParam.prototype.setTargetAtTime;
    AudioParam.prototype.setTargetAtTime = function(value, startTime, timeConstant) {
      w.__audioGainChanges?.push(value);
      return original.call(this,value,startTime,timeConstant);
    };
  });
  await page.goto(url);
  await page.locator('#start').click();
  await expect(page.locator('#message')).toContainText('Esimerkki soi:', {timeout:15000});
  await page.locator('#m0Gain').fill('0.5');
  await expect(page.locator('#m0GainLabel')).toHaveText('50 %');
  await expect.poll(() => page.evaluate(() =>
    (window as Window & {__audioGainChanges?: number[]}).__audioGainChanges ?? [])
  ).toContain(0.5);
  await expect(page.locator('#message')).toContainText('Esimerkki soi:');
  await expect(page.locator('#m2GainControls')).toBeHidden();
  await page.locator('#stop').click();
});


/**
 * Kriittinen regressio: A/B/C-tason pitää muuttua oikeassa Web Audio
 * GainNode-solmussa, ei pelkässä liukusäätimen tekstissä.
 */
async function observeAudioGains(page: import('@playwright/test').Page) {
  await page.addInitScript(() => {
    const w = window as Window & { __capturedGains?: GainNode[] };
    w.__capturedGains = [];
    const original = AudioContext.prototype.createGain;
    AudioContext.prototype.createGain = function() {
      const node = original.call(this);
      w.__capturedGains?.push(node);
      return node;
    };
  });
}

async function hasWebAudioGain(page: import('@playwright/test').Page, value: number) {
  return page.evaluate((v) => {
    const gains = (window as Window & { __capturedGains?: GainNode[] }).__capturedGains ?? [];
    return gains.some(node => Math.abs(node.gain.value - v) < 0.001);
  }, value);
}

test('sokkoutettu M2 Steel A/B/C käynnistyy aina samalla säestyksellä ja paljastaa tasot vasta kuuntelun jälkeen', async ({page}) => {
  await observeAudioGains(page);
  const testedSteelGains:number[] = [];
  const sourceRequests:string[] = [];
  page.on('request', request => {
    if (request.url().includes('em-komppi-b-m3-hillitty-basso.wav')) sourceRequests.push(request.url());
  });
  await page.goto(url);
  await expect(page.locator('#balanceStatus')).toContainText('Balanssi avoin');
  await page.locator('#trialBegin').click();
  await expect(page.locator('#trialActive')).toBeVisible();
  await expect(page.locator('#m2GainControls')).toBeHidden();
  await expect(page.locator('#trialRevealResult')).toBeHidden();
  await expect(page.locator('button[data-mode="M2"]')).toHaveAttribute('aria-pressed','true');
  for (const letter of ['A','B','C']) {
    await page.locator('[data-trial-option="'+letter+'"]').click();
    await expect(page.locator('#message')).toContainText('Musiikki soi: kuuntele mallikitaraa.', {timeout:15000});
    await expect(page.locator('#trialStatus')).toContainText('Kuuntelet '+letter+':ää');
    const steelGain = Number(await page.locator('#steelGain').inputValue());
    testedSteelGains.push(steelGain);
    expect(await hasWebAudioGain(page, steelGain)).toBe(true);
    expect(await hasWebAudioGain(page, .55)).toBe(true); // säestys ei muutu Steel-kokeessa
    await expect(page.locator('#trialRevealResult')).toBeHidden();
  }
  expect(testedSteelGains.sort((a,b)=>a-b)).toEqual([1.8,2.4,3]);
  expect(sourceRequests).toHaveLength(1); // Samaa paikallista B-WAV:ia käytetään uudelleen.
  await page.locator('#trialSelect').selectOption('B');
  await page.locator('#trialResultNote').fill('A, B ja C kuunneltu samasta alusta.');
  await page.locator('#trialReveal').click();
  await expect(page.locator('#trialRevealResult')).toContainText('Valinta: B');
  const revealed = await page.locator('#trialRevealResult').innerText();
  expect(revealed).toContain('1,8 ×');
  expect(revealed).toContain('2,4 ×');
  expect(revealed).toContain('3,0 ×');
  expect(revealed).toContain('Tämä tallentuu vain tähän avoimeen sivuun');
  await page.locator('#trialEnd').click();
  await expect(page.locator('#trialActive')).toBeHidden();
  await expect(page.locator('#m2GainControls')).toBeVisible();
  await expect(page.locator('#steelGainLabel')).toHaveText('2,4 ×');
});

test('sokkoutettu M0 vertaa kitaran tasoa ja kopioi vain pyydettäessä selkeän ei-hyväksytty-raportin', async ({page}) => {
  await observeAudioGains(page);
  const testedM0Gains:number[] = [];
  await page.addInitScript(() => {
    const saved: string[] = [];
    Object.defineProperty(window, '__copiedTrial', {value:saved,configurable:true});
    Object.defineProperty(navigator,'clipboard',{value:{
      writeText:async (value:string)=> {saved.push(value);}
    },configurable:true});
  });
  await page.goto(url);
  await page.locator('input[name="trialGroup"][value="m0"]').check();
  await page.locator('#trialBegin').click();
  await expect(page.locator('button[data-mode="M0"]')).toHaveAttribute('aria-pressed','true');
  await page.locator('#trialSelect').selectOption('none');
  await page.locator('#trialReveal').click();
  await expect(page.locator('#trialStatus')).toContainText('Kuuntele ensin kaikki kolme');
  for (const letter of ['C','A','B']) {
    await page.locator('[data-trial-option="'+letter+'"]').click();
    await expect(page.locator('#message')).toContainText('Esimerkki soi:', {timeout:15000});
    const m0Gain = Number(await page.locator('#m0Gain').inputValue());
    testedM0Gains.push(m0Gain);
    expect(await hasWebAudioGain(page, m0Gain)).toBe(true);
  }
  expect(testedM0Gains.sort((a,b)=>a-b)).toEqual([.2,.3,.4]);
  await page.locator('#trialReveal').click();
  const label = await page.locator('#trialRevealResult').innerText();
  expect(label).toContain('20 %');
  expect(label).toContain('30 %');
  expect(label).toContain('40 %');
  expect(label).toContain('ei selvää eroa');
  await page.locator('#trialCopy').click();
  const copied = await page.evaluate(() => (window as Window & {__copiedTrial?:string[]}).__copiedTrial ?? []);
  expect(copied).toHaveLength(1);
  const report = JSON.parse(copied[0]);
  expect(report.calibration).toBe('NOT_APPROVED');
  expect(report.tests).toHaveLength(1);
  expect(report.tests[0].selected).toBe('none');
  expect(report.tests[0].listened).toEqual(['A','B','C']);
  expect(Object.values(report.tests[0].options).sort()).toEqual([.2,.3,.4]);
});

test('balanssikoe ei väitä miksauksen hyväksyntää ja pitää A/B/C-säätimet oikeilla rajoilla', async ({page}) => {
  await observeAudioGains(page);
  const testedBackingGains:number[] = [];
  await page.goto(url);
  await expect(page.locator('#balanceStatus')).toContainText('Balanssi avoin');
  const bounds = await page.evaluate(() => {
    const ids = ['m0Gain','steelGain','m2BackingGain'];
    return Object.fromEntries(ids.map(id=>{
      const el=document.getElementById(id) as HTMLInputElement;
      return [id,{min:Number(el.min),max:Number(el.max),step:Number(el.step)}];
    }));
  });
  expect(bounds).toEqual({
    m0Gain:{min:.1,max:1,step:.05},
    steelGain:{min:.5,max:3,step:.1},
    m2BackingGain:{min:.2,max:.8,step:.05}
  });
  await page.locator('input[name="trialGroup"][value="backing"]').check();
  await page.locator('#trialBegin').click();
  for (const letter of ['A','B','C']) {
    await page.locator('[data-trial-option="'+letter+'"]').click();
    await expect(page.locator('#message')).toContainText('Musiikki soi:', {timeout:15000});
    const backingGain = Number(await page.locator('#m2BackingGain').inputValue());
    testedBackingGains.push(backingGain);
    expect(await hasWebAudioGain(page, backingGain)).toBe(true);
    expect(await hasWebAudioGain(page, 2.4)).toBe(true); // Steel pysyy vakiona
  }
  expect(testedBackingGains.sort((a,b)=>a-b)).toEqual([.4,.55,.7]);
  await page.locator('#trialSelect').selectOption('A');
  await page.locator('#trialReveal').click();
  const label = await page.locator('#trialRevealResult').innerText();
  expect(label).toContain('40 %');
  expect(label).toContain('55 %');
  expect(label).toContain('70 %');
});
