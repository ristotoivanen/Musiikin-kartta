import { test,expect, type Page } from '@playwright/test';
const key='musiikin-kartta:harjoittelu';
test.beforeEach(async({page})=>{
  page.on('pageerror',error=>console.error('Selainvirhe:',error.message));
  page.on('console',message=>{if(message.type()==='error' && message.text().includes('Harjoittelijan lataus'))console.error(message.text());});
});
test('kymmenen kysymystä, tauko, tulokset ja uudelleenlataus',async({page})=>{
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>localStorage.setItem('musiikin-kartta:tehdyt','["osa-3#otelauta"]'));
  await page.goto('/kitaraharjoittelija.html?alku=0&loppu=0');
  await page.getByRole('button',{name:'Aloita harjoitus',exact:true}).click();
  await page.getByRole('button',{name:'Keskeytä hetkeksi'}).click();
  await expect(page.getByRole('status').first()).toContainText('tauolla');
  await page.getByRole('button',{name:'Jatka harjoitusta'}).click();
  for(let i=0;i<10;i++){
    if(i>=6) await page.getByRole('button',{name:'Näytä otelautavihje'}).click();
    await page.locator('.practice-board .target button').first().click();
    await expect(page.getByRole('status').first()).toContainText('Oikein');
    await page.getByRole('button',{name:i===9?'Näytä kierroksen tulokset':'Seuraava kysymys'}).click();
  }
  await expect(page.getByRole('button',{name:'Aloita harjoitus',exact:true})).toBeVisible();
  const saved=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);
  expect(saved.recent).toHaveLength(10);expect(saved.sessions).toHaveLength(1);expect(saved.sessions[0].complete).toBe(true);
  expect(await page.evaluate(()=>localStorage.getItem('musiikin-kartta:tehdyt'))).toBe('["osa-3#otelauta"]');
  await page.reload();await expect(page.getByText('10 vastattua kysymystä', {exact:false}).first()).toBeVisible();
  await page.goto('/');await expect(page.getByRole('link',{name:/Jatka kitaraharjoittelua/})).toBeVisible();
  expect(errors).toEqual([]);
});
test('URL-parametrit, järjestetty pentatoniikka ja astevastaukset',async({page})=>{
  await page.goto('/kitaraharjoittelija.html?tila=scale&toonikka=A&asteikko=mp&alku=5&loppu=8&boksi=1&jarjestys=up');
  await expect(page.getByLabel('Asteikko',{exact:true})).toHaveValue('mp');
  await expect(page.getByLabel('Pentatoninen sormitusboksi')).toHaveValue('1');
  await page.getByRole('button',{name:'Aloita harjoitus',exact:true}).click();
  await expect(page.locator('#question')).toContainText('1. aste');
  await page.locator('.practice-board .target button').first().click();
  await page.getByRole('button',{name:'Seuraava kysymys'}).click();
  await expect(page.locator('#question')).toContainText('♭3. aste');
  await page.getByRole('button',{name:'Päätä harjoitus'}).click();
  await page.getByLabel('Tehtävä',{exact:true}).selectOption('degree');
  await page.getByRole('button',{name:'Aloita harjoitus',exact:true}).click();
  await page.getByRole('button',{name:'1',exact:true}).click();
  await expect(page.getByRole('status').first()).toContainText('Oikein');
});
test('CAGED ja G7 rakentuvat ilman kokonaisen soinnun tunnistusväitettä',async({page})=>{
  await page.goto('/kitaraharjoittelija.html?tila=chord&toonikka=G&sointu=dom7&loppu=12');
  await page.getByRole('button',{name:'Aloita harjoitus',exact:true}).click();
  for(const degree of ['1','3','5','♭7']){
    await expect(page.locator('#question')).toContainText(`${degree}. aste`);
    await page.locator('.practice-board .target button').first().click();
    await page.getByRole('button',{name:'Seuraava kysymys'}).click();
  }
  await page.getByRole('button',{name:'Päätä harjoitus'}).click();
  await page.goto('/kitaraharjoittelija.html?tila=caged&toonikka=C&muoto=E&loppu=12');
  await page.getByRole('button',{name:'Aloita harjoitus',exact:true}).click();
  await expect(page.locator('#question')).toContainText('E-muodosta');
  await page.locator('.practice-board .target button').first().click();
  await expect(page.getByRole('status').first()).toContainText('Oikein');
});
test('kuule sävel, toista ja intervalli sulkevat oman äänen ennen vastausta',async({page})=>{
  for(const mode of ['ear-note','repeat','interval']){
    await page.goto(`/kitaraharjoittelija.html?tila=${mode}&loppu=12`);
    await page.getByRole('button',{name:'Aloita harjoitus',exact:true}).click();
    const status=page.getByRole('status').first();
    await expect(status).toContainText('Kuuntele');await expect(status).toContainText('Nyt voit vastata',{timeout:10000});
    if(mode==='ear-note') await expect(page.locator('.answer-choices button')).toHaveCount(12);
    else await expect(page.locator('.practice-board button').first()).toBeEnabled();
    await expect(page.getByText('Mikrofoni suljettu',{exact:false})).toBeVisible();
  }
});
test('näppäimistö ja mobiilin vaakavieritys',async({page})=>{
  await page.goto('/kitaraharjoittelija.html?loppu=24');
  const button=page.getByRole('button',{name:'Aloita harjoitus',exact:true});await button.focus();await page.keyboard.press('Enter');
  const target=page.locator('.practice-board .target button').first();await target.focus();await page.keyboard.press('Enter');
  await expect(page.getByRole('status').first()).toContainText('Oikein');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
  await page.emulateMedia({colorScheme:'light',reducedMotion:'reduce'});
  await expect(page.locator('.session-panel')).toBeVisible();
});
test('opas, otelauta ja äänet toimivat ilman uuden harjoittelijan bundlea',async({page})=>{
  const errors: string[] = [];
  const resources: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => {
    if (response.status() >= 400) resources.push(response.url());
  });
  await page.route(/\/harjoittelija\/(?:app\.|main\.tsx)/, async route => {
    resources.push(route.request().url());
    await route.abort();
  });
  await page.addInitScript(() => localStorage.setItem('musiikin-kartta:tehdyt', '["osa-3#otelauta"]'));

  await page.goto('/');
  await expect(page.getByRole('link', {name: 'Harjoittele kitaralla'})).toBeVisible();
  await expect(page.locator('a[href="pdf/musiikin-kartta.pdf"]').first()).toBeVisible();

  await page.goto('/otelautaharjoittelija.html');
  await page.getByRole('button',{name:'Doorinen',exact:true}).click();
  await expect(page.locator('#board svg')).toBeVisible();
  await page.goto('/otelautaharjoittelija.html#oktaavit');
  await expect(page.getByRole('heading', {name: 'Oktaaviharjoitus'})).toBeVisible();
  await expect(page.locator('#octave-listen button').first()).toBeVisible();

  await page.goto('/harjoitustaustat.html');
  await expect(page.locator('#board svg')).toBeVisible();
  await page.getByRole('button', {name: 'Soita tausta'}).click();
  await expect(page.locator('#backing-status')).toHaveText('Tausta soi toistolla.');
  await expect(page.locator('#chord-loop .is-playing')).toHaveCount(1);
  await page.getByRole('button', {name: 'Pysäytä tausta'}).click();
  await expect(page.locator('#backing-status')).toBeEmpty();

  await page.goto('/book/osa-3.html#otelauta');
  await expect(page).toHaveURL(/osa-5\.html#otelauta$/);
  await expect(page.locator('#otelauta .done-toggle')).toHaveAttribute('aria-pressed', 'true');
  expect(await page.evaluate(() => localStorage.getItem('musiikin-kartta:luvut'))).toBe('["otelauta"]');

  await page.goto('/book/osa-7.html');
  for (const exercise of await page.locator('[data-korvatreeni]').all()) {
    await exercise.getByRole('button', {name: 'Uusi kysymys'}).click();
    await expect(exercise.getByRole('button', {name: 'Kuuntele uudelleen'})).toBeEnabled();
    await expect(exercise.locator('.et-feedback')).toBeEmpty();
    await expect(exercise.locator('.et-answers button').first()).toBeEnabled();
  }
  expect(errors).toEqual([]);
  expect(resources).toEqual([]);
});

test('oppaan harjoituslinkit avaavat oikeat asetukset tallennetuista valinnoista huolimatta', async ({page})=>{
  await page.addInitScript(key => {
    localStorage.setItem(key, JSON.stringify({version: 2, stats: {}, settings: {
      min: 24, max: 24, box: 5, strings: [0], activity: 'degree', chordTone: '5',
    }}));
  }, key);
  const links = [
    ['osa-5#otelauta', 'Harjoittele otelaudan säveliä', 'notes'],
    ['osa-6#caged', 'Etsi C-duurin sointusävelet', 'caged'],
    ['osa-7#intervallit', 'Kuule ja toista sävel', 'repeat'],
    ['osa-7#intervallit', 'Kuule ja toista intervalli', 'interval'],
    ['osa-8#improvisointi', 'Löydä E-mollipentatonisen sävelet', 'scale'],
    ['osa-8#pentatoniikka', 'Soita A-mollipentatoninen järjestyksessä', 'scale'],
    ['osa-10#septimisoinnut', 'Rakenna G7 sävel kerrallaan', 'chord'],
    ['osa-11#moodit', 'Harjoittele A-doorisen asteikon säveliä', 'scale'],
  ];
  for (const [part, name, mode] of links) {
    await page.goto('/book/' + part.replace('#', '.html#'));
    await page.getByRole('link', {name}).click();
    await expect(page.getByLabel('Harjoitus', {exact: true})).toHaveValue(mode);
    await expect(page.getByRole('button', {name: 'Aloita harjoitus', exact: true})).toBeEnabled();
  }
  await expect(page.getByLabel('Asteikko', {exact: true})).toHaveValue('dorian');
  await page.getByRole('link', {name: 'Opas · otelauta'}).click();
  await expect(page).toHaveURL(/osa-5\.html#otelauta$/);
});
async function mockedMic(page:Page, fail=false){
  await page.addInitScript(({fail})=>{
    const state={opens:0,stops:0,frequency:0,ended:null as null|(()=>void)};Object.assign(window,{micTest:state});
    Object.defineProperty(navigator.mediaDevices,'getUserMedia',{value:async()=>{
      state.opens++;
      if(fail) throw new DOMException('denied','NotAllowedError');
      const track={stop:()=>state.stops++,addEventListener:(event:string,callback:()=>void)=>{if(event==='ended')state.ended=callback;}};
      return {getTracks:()=>[track]};
    }});
    Object.defineProperty(window,'AudioContext',{value:class {
      sampleRate=44100;state='running';destination={};
      resume(){return Promise.resolve();} close(){return Promise.resolve();}
      createMediaStreamSource(){return {connect:()=>{},disconnect:()=>{}};}
      createAnalyser(){return {fftSize:8192,smoothingTimeConstant:0,getFloatTimeDomainData:(b:Float32Array)=>{
        for(let i=0;i<b.length;i++) b[i]=state.frequency ? .1*Math.sin(2*Math.PI*state.frequency*i/44100) : 0;
      },disconnect:()=>{}};}
    }});
  },{fail});
}
test('mikrofoniluvan epääminen ei estä otelaudalla harjoittelua',async({page})=>{
  await mockedMic(page,true);await page.goto('/kitaraharjoittelija.html');
  await page.getByLabel('Vastaustapa',{exact:true}).selectOption('mic');
  await page.getByRole('button',{name:'Aloita harjoitus',exact:true}).click();
  await expect(page.getByRole('alert')).toContainText('lupa evättiin');
  await page.getByRole('button',{name:'Päätä harjoitus'}).click();
  await page.getByLabel('Vastaustapa',{exact:true}).selectOption('board');
  await page.getByRole('button',{name:'Aloita harjoitus',exact:true}).click();await page.locator('.practice-board .target button').first().click();
  await expect(page.getByRole('status').first()).toContainText('Oikein');
});
test('simuloitu sävel kulkee Pitchyn ja vakaussuodatuksen läpi, sama ääni ei vastaa kahdesti',async({page})=>{
  await mockedMic(page);await page.goto('/kitaraharjoittelija.html?alku=0&loppu=0&kielet=6&vihjeet=off&vastaus=mic');
  const wave=(frequency:number)=>page.evaluate(f=>(window as unknown as {micTest:{frequency:number}}).micTest.frequency=f,frequency);
  await page.getByRole('button',{name:'Aloita harjoitus',exact:true}).click();
  await expect(page.getByText('Mikrofoni käytössä',{exact:false})).toBeVisible();
  // Deliberately wait for the required silence/release gate, then provide E3 for an E2 pitch-class prompt.
  await page.waitForTimeout(200);await wave(164.8138);
  await expect(page.getByRole('status').first()).toContainText('Oikein',{timeout:5000});
  await page.getByRole('button',{name:'Seuraava kysymys'}).click();
  await page.waitForTimeout(600);await expect(page.getByRole('button',{name:'Seuraava kysymys'})).toHaveCount(0);
  await wave(0);await page.waitForTimeout(200);await wave(82.4069);
  await expect(page.getByRole('status').first()).toContainText('Oikein');
  const data=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);
  expect(data.recent).toHaveLength(2);expect(data.recent.every((r:{first:boolean})=>r.first)).toBe(true);
});
test('tarkka oktaavi ja vahvistettu mikrofonivirhe tallentuvat oikein',async({page})=>{
  await mockedMic(page);await page.goto('/kitaraharjoittelija.html?alku=0&loppu=0&kielet=6&vihjeet=off&vastaus=mic&tarkistus=pitch');
  const wave=(frequency:number)=>page.evaluate(f=>(window as unknown as {micTest:{frequency:number}}).micTest.frequency=f,frequency);
  await page.getByRole('button',{name:'Aloita harjoitus',exact:true}).click();
  await page.waitForTimeout(200);await wave(164.8138);
  await expect(page.locator('.candidate')).toContainText('E3');
  expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)??'{}').recent?.length??0,key)).toBe(0);
  await page.getByRole('button',{name:'Soitin väärän sävelen · kirjaa virhe'}).click();
  await wave(0);await page.waitForTimeout(200);await wave(82.4069);
  await expect(page.getByRole('status').first()).toContainText('Oikein');
  const data=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);
  expect(data.recent[0]).toMatchObject({first:false,errors:1,check:'pitch'});
});
test('valmiiden näkymien kuvakaappaukset',async({page},info)=>{
  await page.emulateMedia({colorScheme:'dark'});
  await page.goto('/kitaraharjoittelija.html?tila=caged&toonikka=C&muoto=E&loppu=12');
  await page.getByRole('button',{name:'Aloita harjoitus',exact:true}).click();
  await page.screenshot({path:`/private/tmp/mk-trainer-${info.project.name}-dark.png`,fullPage:true});
  await page.emulateMedia({colorScheme:'light'});
  await page.screenshot({path:`/private/tmp/mk-trainer-${info.project.name}-light.png`,fullPage:true});
});
test('äänilaitteen katoaminen tauottaa harjoituksen ja vapauttaa virran',async({page})=>{
  await mockedMic(page);await page.goto('/kitaraharjoittelija.html?vastaus=mic');
  await page.getByRole('button',{name:'Aloita harjoitus',exact:true}).click();
  await expect(page.getByText('Mikrofoni käytössä',{exact:false})).toBeVisible();
  await page.evaluate(()=>(window as unknown as {micTest:{ended:()=>void}}).micTest.ended());
  await expect(page.getByRole('alert')).toContainText('Äänitulo katosi');
  await expect(page.getByRole('button',{name:'Jatka harjoitusta'})).toBeVisible();
  expect(await page.evaluate(()=>(window as unknown as {micTest:{stops:number}}).micTest.stops)).toBe(1);
});
test('kalibrointi sulkee mikrofonin ja tallentaa äänikynnyksen',async({page})=>{
  await mockedMic(page);await page.goto('/kitaraharjoittelija.html');
  await page.getByRole('button',{name:'Kalibroi hiljaisuuden äänikynnys'}).click();
  await expect(page.getByRole('status').first()).toContainText('Kalibrointi valmis',{timeout:10000});
  await expect(page.getByText('Mikrofoni suljettu',{exact:false})).toBeVisible();
  const data=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);
  expect(data.settings.minRms).toBe(.003);expect(data.recent).toHaveLength(0);
});
test('mikrofoni alkaa vain käyttäjän toiminnosta ja päättyy tauolla sekä poistuttaessa',async({page})=>{
  await mockedMic(page);await page.goto('/kitaraharjoittelija.html');
  const counts=()=>page.evaluate(()=> (window as unknown as {micTest:{opens:number;stops:number}}).micTest);
  expect((await counts()).opens).toBe(0);
  await page.getByLabel('Vastaustapa',{exact:true}).selectOption('mic');await page.getByRole('button',{name:'Aloita harjoitus',exact:true}).click();
  await expect.poll(async()=>(await counts()).opens).toBe(1);
  await page.getByRole('button',{name:'Keskeytä hetkeksi'}).click();expect((await counts()).stops).toBe(1);
  await page.getByRole('button',{name:'Jatka harjoitusta'}).click();await expect.poll(async()=>(await counts()).opens).toBe(2);
  await page.evaluate(()=>window.dispatchEvent(new Event('pagehide')));expect((await counts()).stops).toBe(2);
});
