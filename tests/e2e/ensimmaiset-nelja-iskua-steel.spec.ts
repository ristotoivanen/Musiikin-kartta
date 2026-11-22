import { expect, test } from '@playwright/test';

const url = '/testit/ensimmaiset-nelja-iskua-steel.html';

test('M2 käyttää beta-koosteessa Steel E2:ta, B-taustaa ja samaa neljän iskun mallia', async ({page}) => {
  const requests:string[]=[];
  await page.addInitScript(() => {
    const win = window as Window & {
      __starts?:{duration:number;when:number;loop:boolean;loopStart:number;loopEnd:number}[];
      __filters?:BiquadFilterNode[]; __gains?:GainNode[];
    };
    win.__starts=[];win.__filters=[];win.__gains=[];
    const originalStart=AudioBufferSourceNode.prototype.start;
    AudioBufferSourceNode.prototype.start=function(when=0,...args:number[]) {
      win.__starts?.push({duration:this.buffer?.duration??0,when,loop:this.loop,loopStart:this.loopStart,loopEnd:this.loopEnd});
      return originalStart.call(this,when,...args);
    };
    const originalFilter=AudioContext.prototype.createBiquadFilter;
    AudioContext.prototype.createBiquadFilter=function() {
      const node=originalFilter.call(this);win.__filters?.push(node);return node;
    };
    const originalGain=AudioContext.prototype.createGain;
    AudioContext.prototype.createGain=function() {
      const node=originalGain.call(this);win.__gains?.push(node);return node;
    };
  });
  page.on('request',request => { const path=request.url();if(/em-komppi-b|steel-6-40|e2-freepats/.test(path))requests.push(path); });
  await page.goto(url);
  await page.locator('button[data-mode="M2"]').click();
  await page.locator('#start').click();
  await expect(page.locator('#message')).toHaveText('Musiikki soi: kuuntele Meta Steel -mallikitaraa.',{timeout:20000});
  expect(requests.some(path=>path.includes('em-komppi-b-m3-hillitty-basso.wav'))).toBe(true);
  expect(requests.some(path=>/steel-6-40\.(ogg|m4a)$/.test(path))).toBe(true);
  expect(requests.some(path=>path.includes('e2-freepats'))).toBe(false);
  const data=await page.evaluate(() => {
    const win=window as Window & {
      __starts?:{duration:number;when:number;loop:boolean;loopStart:number;loopEnd:number}[];
      __filters?:BiquadFilterNode[]; __gains?:GainNode[];
    };
    return {
      starts:win.__starts??[],
      filters:(win.__filters??[]).map(x=>({type:x.type,frequency:x.frequency.value,gain:x.gain.value})),
      gains:(win.__gains??[]).map(x=>x.gain.value)
    };
  });
  expect(data.starts.filter(x=>x.duration>25)).toHaveLength(1);
  expect(data.starts.filter(x=>x.duration>1 && x.duration<10)).toHaveLength(16);
  expect(data.filters.some(x=>x.type==='lowshelf'&&x.frequency===90&&x.gain===2)).toBe(true);
  expect(data.gains.some(x=>Math.abs(x-.55)<.001)).toBe(true);
  expect(data.gains.some(x=>Math.abs(x-(.76221*2.4))<.005)).toBe(true);
  await page.locator('#stop').click();
  await expect(page.locator('#message')).toHaveText('Pysäytetty');
});

test('Steel-näytteen puuttuessa FreePats-varakitara kerrotaan näkyvästi', async ({page}) => {
  await page.route('**/assets/soitinpankki/meta-steel-v1.json',route=>route.abort());
  const fetched:string[]=[];
  page.on('request',req=>{if(/steel-6-40|e2-freepats/.test(req.url()))fetched.push(req.url());});
  await page.goto(url);
  await page.locator('button[data-mode="M2"]').click();
  await page.locator('#start').click();
  await expect(page.locator('#message')).toContainText('Musiikki soi FreePats-varakitaralla:',{timeout:20000});
  expect(fetched.some(url=>url.includes('e2-freepats'))).toBe(true);
  expect(fetched.some(url=>url.includes('steel-6-40'))).toBe(false);
  await page.locator('#stop').click();
});

test('M0 säilyttää FreePats-äänen; M3 säilyttää B-taustan silmukan ilman Steel EQ:ta', async ({page}) => {
  const fetched:string[]=[];
  await page.addInitScript(() => {
    const w=window as Window & { __gainRamps?:number[];__filters?:number;__loops?:boolean[] };
    w.__gainRamps=[];w.__filters=0;w.__loops=[];
    const oldRamp=AudioParam.prototype.linearRampToValueAtTime;
    AudioParam.prototype.linearRampToValueAtTime=function(value,time) {
      w.__gainRamps?.push(value);
      return oldRamp.call(this,value,time);
    };
    const oldFilter=AudioContext.prototype.createBiquadFilter;
    AudioContext.prototype.createBiquadFilter=function() {
      w.__filters=(w.__filters??0)+1;return oldFilter.call(this);
    };
    const oldStart=AudioBufferSourceNode.prototype.start;
    AudioBufferSourceNode.prototype.start=function(when=0,...rest:number[]) {
      w.__loops?.push(this.loop);return oldStart.call(this,when,...rest);
    };
  });
  page.on('request',req=>{if(/em-komppi-b|steel-6-40|e2-freepats/.test(req.url()))fetched.push(req.url());});
  await page.goto(url);
  await page.locator('#start').click();
  await expect(page.locator('#message')).toContainText('Esimerkki soi:',{timeout:15000});
  const m0=await page.evaluate(()=>{
    const w=window as Window & {__gainRamps?:number[];__filters?:number};
    return {ramps:w.__gainRamps??[],filters:w.__filters??0};
  });
  expect(m0.ramps.some(x=>Math.abs(x-.255)<.001)).toBe(true);
  expect(m0.filters).toBe(0);
  expect(fetched.some(x=>x.includes('e2-freepats'))).toBe(true);
  await page.locator('#stop').click();
  await page.locator('button[data-mode="M3"]').click();
  await page.locator('#start').click();
  await expect(page.locator('#message')).toContainText('Musiikki soi: soita mukana.',{timeout:15000});
  const m3=await page.evaluate(()=>{
    const w=window as Window & {__filters?:number;__loops?:boolean[]};
    return {filters:w.__filters??0,loops:w.__loops??[]};
  });
  expect(m3.filters).toBe(0);
  expect(m3.loops).toContain(true);
  expect(fetched.some(x=>x.includes('steel-6-40'))).toBe(false);
  await page.locator('#stop').click();
});

test('M2 voidaan pysäyttää ja käynnistää uudelleen, taustoitus pysäyttää', async ({page}) => {
  await page.goto(url);
  await page.locator('button[data-mode="M2"]').click();
  await page.locator('#start').click();
  await expect(page.locator('#message')).toContainText('Meta Steel -mallikitaraa.',{timeout:20000});
  await page.locator('#stop').click();
  await expect(page.locator('#start')).toBeEnabled();
  await page.locator('#start').click();
  await expect(page.locator('#message')).toContainText('Meta Steel -mallikitaraa.',{timeout:15000});
  await page.evaluate(()=>{
    Object.defineProperty(document,'hidden',{value:true,configurable:true});
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await expect(page.locator('#message')).toContainText('sivu siirtyi taustalle');
  await expect(page.locator('#start')).toBeEnabled();
});
