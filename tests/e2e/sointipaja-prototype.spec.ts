import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => { Math.random = () => 0; });
  await page.goto('/sointipaja-prototyyppi.html');
});

test('level 1: 4 + 6 + 14, cumulative summary, retry and free rounds', async ({ page }) => {
  await page.route('**/assets/audio/soinnut/*', route => route.abort());
  const answers = page.getByRole('group', { name: 'Valitse soinnun nimi' });
  const board = page.locator('#board');
  const select = async (name: string) => {
    await answers.getByRole('button', { name, exact: true }).click();
    await page.locator('#next').click();
  };
  await expect(board.locator('.mark')).toHaveCount(5);
  await expect(board.locator('.mute')).toHaveCount(1);
  await expect(board.locator('svg text')).toHaveText(['1','2','3','4','5','0']);
  await expect(board.locator('svg line[opacity=".35"]')).toHaveCount(0);
  await expect(page.locator('#progress')).toHaveText('Sointu 1 / 4');
  await expect(answers.locator('button')).toHaveCount(4);
  await answers.getByRole('button', { name: 'D', exact: true }).click();
  await expect(page.locator('#feedback')).toContainText('Ei aivan');
  await answers.getByRole('button', { name: 'C', exact: true }).click();
  await expect(page.locator('#notes')).toContainText('C3 · E3 · G3 · C4 · E4');
  await expect(board.locator('.mark[data-string="4"]')).toHaveText('C');
  await expect(board.locator('.mark[data-string="3"]')).toHaveAttribute('aria-label', /E3, suuri terssi/);
  await page.locator('#next').click();
  for (const name of ['G','D','Em']) await select(name);
  await expect(page.locator('#done-heading')).toHaveText('Kierros 1 valmis');
  await expect(page.locator('#result')).toContainText('3/4 oikein ensimmäisellä yrityksellä');
  await page.locator('#continue').click();
  await expect(page.locator('#progress')).toHaveText('Sointu 1 / 6');
  await expect(answers.locator('button')).toHaveCount(7);
  for (const name of ['Am','E','Am','A','E','A']) await select(name);
  await expect(page.locator('#done-heading')).toHaveText('Kierros 2 valmis');
  await page.locator('#continue').click();
  await expect(page.locator('#progress')).toHaveText('Sointu 1 / 14');
  for (const name of ['C','G','C','G','D','Em','D','Em','Am','E','Am','A','E','A']) await select(name);
  await expect(page.locator('#done-heading')).toHaveText('Taso 1 valmis');
  await expect(page.locator('#result')).toContainText('23/24 oikein ensimmäisellä yrityksellä');
  await expect(page.locator('#difficult')).toContainText('C (1)');
  await expect(page.locator('#future')).toBeHidden();
  await expect(page.locator('#next-level')).toBeVisible();
  await page.locator('#next-level').click();
  await expect(page.locator('#level-title')).toContainText('Taso 2');
  await expect(page.locator('#level-progress')).toHaveText('0/30 tehtävää ratkaistu');
  await page.getByRole('button', { name: /Taso 1 ·/ }).click();
  await expect(page.locator('#level-title')).toContainText('Taso 1');
  await expect(page.locator('#summary')).toBeHidden();
  await expect(page.locator('#progress')).toHaveText('Sointu 1 / 4');
  await page.locator('#settings summary').click();
  await page.getByRole('button', { name: '3 · Kaikki yhdessä', exact: true }).click();
  await expect(page.locator('#level-progress')).toHaveText('Vapaa harjoittelu');
  await expect(page.locator('#progress')).toHaveText('Sointu 1 / 14');
  for (const name of ['C','G','C','G','D','Em','D','Em','Am','E','Am','A','E','A']) await select(name);
  await expect(page.locator('#done-heading')).toHaveText('Harjoituskierros valmis');
  await expect(page.locator('#future')).toBeHidden();
  await page.locator('#retry-round').click();
  await expect(page.locator('#progress')).toHaveText('Sointu 1 / 14');
});

test('audio request includes correct C voicing, failure does not prevent answering', async ({ page }) => {
  const requested = new Set<string>();
  await page.route('**/assets/audio/soinnut/*', async route => {
    requested.add(route.request().url().split('/').pop()!.replace(/\.(ogg|m4a)$/, ''));
    await route.abort();
  });
  await page.getByRole('button', { name: 'Kuuntele sointu' }).click();
  await expect(page.locator('#audio-status')).toContainText('Ääniä ei voitu ladata');
  expect([...requested].sort()).toEqual([
    'INSGuitarSteel_StringA_Vel02_C3_01',
    'INSGuitarSteel_StringB_Vel02_C4_01',
    'INSGuitarSteel_StringD_Vel02_E3_01',
    'INSGuitarSteel_StringG_Vel02_G3_01',
    'INSGuitarSteel_StringHighE_Vel02_E4_01',
  ]);
  await page.getByRole('group', { name: 'Valitse soinnun nimi' }).getByRole('button', { name: 'C', exact: true }).click();
  await expect(page.locator('#feedback')).toContainText('Oikein');
});

for (const width of [320, 360, 390]) {
  test('compact neck and answers at '+width+' CSS px', async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    const board=page.locator('#board');
    await expect(board.locator('.mark')).toHaveCount(5);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    expect(await board.evaluate(el => el.scrollWidth)).toBeLessThanOrEqual(await board.evaluate(el=>el.clientWidth));
    const neckRect = await board.locator('.chord-neck').boundingBox();
    expect(neckRect).not.toBeNull();
    await expect(board.locator('svg text')).toHaveText(['1','2','3','4','5','0']);
    for (const button of await board.locator('.mark').all()) {
      const rect=await button.boundingBox();
      expect(rect!.width).toBeGreaterThanOrEqual(44);
      expect(rect!.height).toBeGreaterThanOrEqual(44);
      expect(rect!.x).toBeGreaterThanOrEqual(neckRect!.x);
      expect(rect!.x + rect!.width).toBeLessThanOrEqual(neckRect!.x + neckRect!.width);
      expect(rect!.y + rect!.height).toBeLessThanOrEqual(neckRect!.y + neckRect!.height);
    }
    await expect(page.getByRole('group', { name: 'Valitse soinnun nimi' })).toBeVisible();
  });
}

test('wrong answer is silent; correct answer reveals notes and triggers model sound', async ({ page }) => {
  const requests: string[] = [];
  await page.route('**/assets/audio/soinnut/*', async route => {
    requests.push(route.request().url());
    await route.abort();
  });
  const root = page.locator('#board .mark[data-string="4"]');
  await expect(root).toHaveText('●');
  await expect(root).not.toHaveAttribute('aria-label', /C3|perussävel/);
  const answers = page.getByRole('group', { name: 'Valitse soinnun nimi' });
  await answers.getByRole('button', { name: 'G', exact: true }).click();
  expect(requests).toHaveLength(0);
  await answers.getByRole('button', { name: 'C', exact: true }).click();
  await expect(page.locator('#audio-status')).toContainText('Ääniä ei voitu ladata');
  expect(requests.length).toBeGreaterThan(0);
  await expect(page.locator('#explain')).toBeVisible();
  requests.length=0;
  await root.click();
  await expect(page.locator('#note-detail')).toContainText('C3 · perussävel');
  await expect(page.locator('#audio-status')).toContainText('Ääniä ei voitu ladata');
  expect(requests.length).toBeGreaterThan(0);
  expect(requests.every(url => url.includes('StringA_Vel02_C3_01'))).toBe(true);
  await page.locator('#next').click();
  await expect(page.locator('#question')).toBeFocused();
  await expect(page.locator('#explain')).toBeHidden();
  await expect(page.locator('#board .mark.revealed')).toHaveCount(0);
  await expect(page.locator('#audio-status')).toBeEmpty();
});

test('audio controls cancel a pending download without late playback', async ({ page }) => {
  let release!: () => void;
  const pending = new Promise<void>(resolve => { release = resolve; });
  await page.route('**/assets/audio/soinnut/*', async route => {
    await pending;
    await route.abort().catch(() => {});
  });
  try {
    const listen = page.locator('#listen');
    await listen.click();
    await expect(listen).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#stop')).toBeEnabled();
    await listen.click();
    await expect(listen).toHaveAttribute('aria-pressed', 'false');
    await expect(page.locator('#stop')).toBeDisabled();
    release();
    await expect(page.locator('#audio-status')).toHaveText('Kuuntelu pysäytetty.');
    await expect(page.locator('#board .sounding')).toHaveCount(0);
  } finally { release(); }
});

test('automatic chord playback cannot delay progression and uses the same stop control', async ({ page }) => {
  let release!: () => void;
  const pending = new Promise<void>(resolve => { release = resolve; });
  await page.route('**/assets/audio/soinnut/*', async route => {
    await pending;
    await route.abort().catch(() => {});
  });
  try {
    await expect(page.locator('#auto')).toHaveCount(0);
    await page.getByRole('group', { name: 'Valitse soinnun nimi' }).getByRole('button', { name: 'C', exact: true }).click();
    await expect(page.locator('#listen')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#stop')).toBeEnabled();
    await page.locator('#next').click();
    await expect(page.locator('#listen')).toHaveAttribute('aria-pressed', 'false');
    await expect(page.locator('#stop')).toBeDisabled();
    await expect(page.locator('#audio-status')).toBeEmpty();
  } finally { release(); }
});

test('level 2: contrasts, seventh roles, all eleven chords and free navigation', async ({ page }) => {
  await page.route('**/assets/audio/soinnut/*', route => route.abort());
  await page.getByRole('button', { name: /Taso 2 ·/ }).click();
  const answers = page.getByRole('group', { name: 'Valitse soinnun nimi' });
  const board = page.locator('#board');
  const roots = page.getByRole('group', { name: 'Valitse perussävel' });
  const solve = async (name: string) => {
    await roots.getByRole('button', { name: name[0], exact: true }).click();
    await answers.getByRole('button', { name, exact: true }).click();
    if(name==='D7'){
      await expect(page.locator('#notes')).toContainText('D – F♯ – A – C');
      await expect(board.locator('.mark[data-string="1"]')).toHaveAttribute('aria-label', /C4, pieni septimi/);
    }
    if(name==='A7')await expect(board.locator('.mark[data-string="2"]')).toHaveAttribute('aria-label', /G3, pieni septimi/);
    if(name==='E7')await expect(board.locator('.mark[data-string="3"]')).toHaveAttribute('aria-label', /D3, pieni septimi/);
    if(name==='Dm')await expect(board.locator('.mark[data-string="0"]')).toHaveAttribute('aria-label', /F4, pieni terssi/);
    await page.locator('#next').click();
  };
  await expect(page.locator('#progress')).toHaveText('Sointu 1 / 8');
  await expect(roots.locator('button')).toHaveText(['D','E','A']);
  await expect(answers.locator('button')).toHaveCount(0);
  for(const n of ['Dm','D7','Dm','D7','A7','E7','A7','E7'])await solve(n);
  await page.locator('#continue').click();
  await expect(page.locator('#progress')).toHaveText('Sointu 1 / 11');
  await expect(roots.locator('button')).toHaveText(['C','D','E','G','A']);
  await expect(answers.locator('button')).toHaveCount(0);
  for(const n of ['C','G','D','Em','Am','E','A','Dm','D7','A7','E7'])await solve(n);
  await page.locator('#continue').click();
  await expect(roots.locator('button')).toHaveText(['C','D','E','G','A']);
  await expect(answers.locator('button')).toHaveCount(0);
  await expect(page.locator('#progress')).toHaveText('Sointu 1 / 11');
  for(const n of ['C','G','D','Em','Am','E','A','Dm','D7','A7','E7'])await solve(n);
  await expect(page.locator('#done-heading')).toHaveText('Taso 2 valmis');
  await expect(page.locator('#result')).toContainText('30/30 oikein ensimmäisellä yrityksellä');
  await expect(page.locator('#next-level')).toBeHidden();
  await expect(page.locator('#future')).toBeVisible();
  await page.locator('#restart').click();
  await expect(page.locator('#progress')).toHaveText('Sointu 1 / 8');
  await page.locator('#settings summary').click();
  await page.getByRole('button', { name:'3 · Kaikki yksitoista sointua', exact:true }).click();
  await expect(page.locator('#progress')).toHaveText('Sointu 1 / 11');
  await expect(page.locator('#level-progress')).toHaveText('Vapaa harjoittelu');
  await page.getByRole('button', { name: /Taso 1 ·/ }).click();
  await expect(page.locator('#progress')).toHaveText('Sointu 1 / 4');
});

test('root choice alone is neutral, wrong chord remains marked after switching roots', async ({ page }) => {
  const requests: string[] = [];
  await page.route('**/assets/audio/soinnut/*', async route => {
    requests.push(route.request().url());
    await route.abort();
  });
  await page.getByRole('button', { name: /Taso 2 ·/ }).click();
  const roots=page.getByRole('group', {name:'Valitse perussävel'});
  const answers=page.getByRole('group', {name:'Valitse soinnun nimi'});
  await expect(answers.locator('button')).toHaveCount(0);
  await roots.getByRole('button',{name:'E',exact:true}).click();
  await expect(answers.locator('button')).toHaveText(['E','E7']);
  await expect(page.locator('#feedback')).toBeEmpty();
  await expect(page.locator('#level-progress')).toHaveText('0/30 tehtävää ratkaistu');
  expect(requests).toHaveLength(0);
  await answers.getByRole('button',{name:'E7',exact:true}).click();
  await expect(page.locator('#feedback')).toContainText('Ei aivan');
  await roots.getByRole('button',{name:'D',exact:true}).click();
  await expect(answers.locator('button')).toHaveText(['D','Dm','D7']);
  await roots.getByRole('button',{name:'E',exact:true}).click();
  await expect(answers.locator('.wrong')).toHaveText('E7');
  await roots.getByRole('button',{name:'D',exact:true}).click();
  await answers.getByRole('button',{name:'Dm',exact:true}).click();
  await expect(page.locator('#feedback')).toContainText('Oikein');
  await expect(roots.getByRole('button',{name:'D',exact:true})).toHaveAttribute('aria-pressed','true');
  await expect(roots.getByRole('button',{name:'E',exact:true})).toHaveAttribute('aria-disabled','true');
  await page.locator('#next').click();
  await expect(answers.locator('button')).toHaveCount(0);
  await expect(roots.locator('[aria-pressed="true"]')).toHaveCount(0);
});

test('root and chord choices have usable equal widths on desktop and mobile', async ({ page }) => {
  await page.getByRole('button', {name:/Taso 2 ·/}).click();
  const roots=page.locator('#roots');
  const answers=page.locator('#answers');
  for(const width of [780,390,320]){
    await page.setViewportSize({width,height:1000});
    await roots.getByRole('button',{name:'D',exact:true}).click();
    await expect(answers.locator('button')).toHaveText(['D','Dm','D7']);
    for(const group of [roots,answers]){
      const sizes=await group.locator('button').evaluateAll(buttons=>buttons.map(button=>{
        const {width,height}=button.getBoundingClientRect();
        return {width,height};
      }));
      expect(sizes.length).toBeGreaterThan(0);
      for(const size of sizes){
        expect(size.width).toBeGreaterThanOrEqual(48);
        expect(size.height).toBeGreaterThanOrEqual(48);
        expect(size.width).toBeCloseTo(sizes[0].width,0);
      }
    }
    expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  }
});
