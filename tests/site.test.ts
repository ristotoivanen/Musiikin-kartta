import { readFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';
import { describe,it,expect } from 'vitest';
import ts from 'typescript';
const read=(file:string)=>readFileSync(new URL('../'+file,import.meta.url),'utf8');
const topics = ['kitara', 'rytmi', 'savelnimet', 'korva', 'otelauta', 'soinnut', 'asteikot', 'kappaleet'];
const studyFiles = topics.flatMap(topic => readdirSync(new URL('../oppi/' + topic + '/', import.meta.url))
  .filter(file => file.endsWith('.html')).map(file => 'oppi/' + topic + '/' + file));

// Julkaistun navigointiversion f1fe5e4 reitit sisältöjärjestyksessä.
const legacyStudyRoutes = {
  kitara: ['sointukierrot', 'soita-ensin-basso'],
  rytmi: [
    'pulssi-ja-komppi', 'kuuntele-pulssi', 'alas-ylos-yhdella-soinnulla',
    'kaksi-sointua-yhdessa-tahdissa',
  ],
  savelnimet: ['kitaran-kielet-ja-sointumerkinnat', 'savelet-ja-intervallit', 'siirra-yhta-sormea'],
  korva: [
    'musiikki-on-kieli', 'taydenna-fraasi', 'savellajin-tunnistaminen',
    'vaihda-kotisavelta', 'intervallit', 'mika-aste-soi',
    'etsi-jalkimmainen-savel', 'basso', 'kuuntele-bassolinja',
    'soinnut', 'kumpi-on-molli', 'tunnista-sointutyyppi',
    'septimi-korvalla', 'kolme-c-sointua',
  ],
  otelauta: [
    'otelauta', 'etsi-a-ilman-asteikkokuviota', 'etsi-sama-savel',
    'perussavel', 'etsi-savel-kahdelta-kielelta', 'nimea-savel', 'caged', 'soita-c-kahdesta-kohdasta',
  ],
  soinnut: [
    'harmoninen-kentta', 'kolme-sointua-g-duurista', 'kaikuluotain',
    'roomalaiset-numerot', 'siirra-kierto-d-duuriin', 'sointujen-tehtavat',
    'laula-paluu', 'kvinttiympyra', 'siirra-keskelle-d',
    'barre', 'etsi-barresointu', 'rakenna-barre',
    'siirra-kierto-c-duuriin', 'septimisoinnut', 'lisaa-septimi',
    'soita-septimisoinnut', 'ii-v-i', 'ii-v-i-kahdessa-savellajissa',
  ],
  asteikot: [
    'asteikot', 'etsi-puoliaskeleet', 'pentatoniikka', 'tee-kolmesta-savelesta-melodia',
    'kysymys-ja-vastaus-koko-boksilla', 'moodit', 'vaihda-f-nauhaa-ylemmas',
  ],
  kappaleet: [
    'kappale-asteina', 'sama-kappale-c-duurissa', 'transponointi',
    'sovita-savellaji-laulajalle', 'kappale', 'mika-sointu-tulee',
    'tee-sointukartta', 'etsi-ensimmainen-melodiasavel', 'improvisointi',
    'soita-kysymys-ja-vastaus', 'sovittaminen', 'vaihda-saestysta',
    'oma-kappale', 'aanita-kahdeksan-tahtia',
  ],
};

describe('staattisen sivuston yhteensopivuus',()=>{
  it('muutetut nykyiset skriptit ovat syntaktisesti kelvollisia classic-skriptejä',()=>{
    for(const file of ['assets/otelauta.js','assets/edistyminen.js','assets/oppimiskartta.js','assets/harjoitustausta.js','assets/korvatreeni.js']) expect(()=>new Script(read(file))).not.toThrow();
  });
  it('otelautakartan moduuliskriptit ovat syntaktisesti kelvollisia ja ladataan moduulina',()=>{
    // visualizer.js tuo seiskasointuotteet import-lauseella, joten se ei ole enää classic-skripti.
    for(const file of ['assets/visualizer.js','assets/seventh-voicings.js']){
      const { diagnostics } = ts.transpileModule(read(file),{ fileName:file, reportDiagnostics:true, compilerOptions:{ allowJs:true, module:ts.ModuleKind.ESNext, target:ts.ScriptTarget.ES2022 } });
      expect(diagnostics).toEqual([]);
    }
    const html=read('otelautaharjoittelija.html');
    expect(html).toContain('<script src="assets/otelauta.js"></script>');
    expect(html).toContain('<script type="module" src="assets/visualizer.js"></script>');
  });
  it('otelautakartassa ei ole harjoitus- tai äänentoistotoimintoja', () => {
    const visualizer = read('otelautaharjoittelija.html');
    const redirect = read('harjoitustaustat.html');
    const home = read('index.html');
    expect(visualizer).toContain('assets/visualizer.js');
    expect(visualizer).not.toContain('assets/oktaavit.js');
    expect(visualizer).not.toContain('assets/harjoitustausta.js');
    expect(visualizer).not.toContain('<audio');
    expect(visualizer).toContain('Sormitusboksit ja näyttöasetukset');
    expect(redirect).toContain('otelautaharjoittelija.html');
    expect(read('oppi/otelauta/index.html')).toContain('Tutki otelautakarttaa');
    expect(home).not.toContain('Soita taustan mukana');
  });

  it('oppaan osat säilyttävät luvut, vanhat kuuntelut ja pelkät harjoituslinkit',()=>{
    for(const part of Array.from({length: 11}, (_, index) => index + 1)){
      const html=read(`book/osa-${part}.html`);
      expect(html).toContain('assets/edistyminen.js');expect(html).toContain('../kitaraharjoittelija.html');
      expect(html).not.toContain('harjoittelija/app');expect(html).not.toContain('main.tsx');
    }
    expect(read('book/osa-7.html')).toContain('data-korvatreeni="aste"');
    expect(read('book/osa-7.html')).toContain('data-korvatreeni="sointu"');
    expect(read('book/osa-8.html')).toContain('assets/audio/osa-8/em-c-tausta.m4a');
  });

  it('kahdeksan numeroitua korttia avaa omat aihesivunsa ja vanhat ankkurit säilyvät', () => {
    const html = read('index.html');
    const cards = [...html.matchAll(/<a class="topic-card" id="(aihe-[^"]+)" href="oppi\/([^/]+)\/index.html"[^>]*>\s*<span class="topic-number" aria-hidden="true">(\d\d)<\/span>/g)];
    expect(cards.map(card => card[1])).toEqual(['aihe-kitara', 'aihe-rytmi', 'aihe-nuotit', 'aihe-korva', 'aihe-otelauta', 'aihe-soinnut', 'aihe-asteikot', 'aihe-kappaleet']);
    expect(cards.map(card => card[2])).toEqual(topics);
    expect(cards.map(card => card[3])).toEqual(['01', '02', '03', '04', '05', '06', '07', '08']);
    expect(html).not.toContain('<details class="topic-card"');
    expect(html).not.toContain('#h-savelnimi');
    expect(html).toContain('<title>Oppimiskartta – Musiikin kartta</title>');
    expect(html).toContain('<h1 id="oppimisaiheet">Oppimiskartta</h1>');
    expect(html).not.toContain('Nykyiset oppaat ja työkalut');
    expect(html).not.toContain('class="area"');
    expect(html).toContain('href="index.html#oppimisaiheet">Oppimiskartta</a>');
    expect(html).toContain('href="pdf/musiikin-kartta.pdf"');
    expect(html).toContain('href="book/sanasto.html"');
    expect(html).toContain('id="harjoittelija"');
    expect(html).toContain('followOldTrainerLink()');
    expect(html).toContain('id="home-continue"');
    expect(html).not.toContain('class="hero-actions"');
    expect(html).not.toContain('SCALE-CONNECT');
    expect(html).not.toContain('EAR-ECHO');
  });

  it('jokainen teoriaoppaan luku ja itsenäinen harjoitus on omalla sivullaan', () => {
    const parts = Array.from({length: 11}, (_, index) => read('book/osa-' + (index + 1) + '.html'));
    const bookIds = parts.flatMap(html => [...html.matchAll(/<section class="chapter" id="([^"]+)"/g)].map(m => m[1]));
    const mapIds = studyFiles.flatMap(file => [...read(file).matchAll(/<main[^>]+data-theory-chapter="([^"]+)"/g)].map(m => m[1]));
    const tasks = (html: string) => [...html.matchAll(/data-oppisisalto="([^"]+)"/g)].map(m => m[1]);
    const mapTasks = studyFiles.flatMap(file => {
      const html = read(file);
      if (html.includes('data-theory-chapter=')) expect(tasks(html), file).toHaveLength(0);
      return tasks(html);
    });
    expect(bookIds).toHaveLength(28);
    expect(mapIds.sort()).toEqual(bookIds.sort());
    expect(mapTasks).toHaveLength(41);
    expect(mapTasks.sort()).toEqual(parts.flatMap(tasks).sort());
    const map = read('index.html');
    const routes = JSON.parse(map.match(/id="oppimisreitit">([^<]+)/)![1]) as Record<string, string>;
    expect(Object.keys(routes).sort()).toEqual(bookIds);
    for (const [id, route] of Object.entries(routes)) expect(read(route)).toContain('data-theory-chapter="' + id + '"');
    expect(read('assets/edistyminen.js')).toContain("document.getElementById('home-continue')");
  });

  it('aihekortit ja sisältösivut käyttävät samoja yksilöllisiä suoritustunnisteita', () => {
    const byKind = { luku: 0, harjoitus: 0, oppitunti: 0 };
    const allIds = new Set<string>();
    const map = read('index.html');
    for (const topic of topics) {
      const items = studyFiles.filter(file => file.startsWith('oppi/' + topic + '/') && !file.endsWith('/index.html'));
      const topicIds = new Set<string>();
      for (const file of items) {
        const html = read(file);
        const main = html.match(/<main\b[^>]+>/)?.[0];
        const id = main?.match(/data-study-item="([^"]+)"/)?.[1];
        const kind = main?.match(/data-study-kind="(luku|harjoitus|oppitunti)"/)?.[1] as keyof typeof byKind | undefined;
        if (!id || !kind) throw new Error(file + ' puuttuu suoritusseurannasta');
        const slug = file.split('/').at(-1)!.replace(/\.html$/, '');
        expect(id, file).toBe(kind === 'luku' ? slug : kind + ':' + slug);
        if (kind === 'luku') expect(main, file).toContain('data-theory-chapter="' + id + '"');
        else expect(main, file).not.toContain('data-theory-chapter=');
        expect(allIds.has(id), file).toBe(false);
        allIds.add(id);
        topicIds.add(id);
        byKind[kind]++;
        expect(html.match(/class="done-toggle"/g), file).toHaveLength(1);
      }
      const topicPage = read('oppi/' + topic + '/index.html');
      const cardIds = [...topicPage.matchAll(/data-study-status="([^"]+)"/g)].map(([, id]) => id);
      const mapCard = map.match(new RegExp('<a[^>]+href="oppi/' + topic + '/index.html"[^>]+data-study-items="([^"]+)"'));
      expect(cardIds.sort(), topic).toEqual([...topicIds].sort());
      expect(mapCard?.[1].split(' ').sort(), topic).toEqual([...topicIds].sort());
      expect(topicPage, topic).not.toContain('class="done-toggle"');
    }
    expect(byKind).toEqual({ luku: 28, harjoitus: 41, oppitunti: 4 });
  });

  it('kaikki 70 vanhaa sisältöosoitetta säilyvät ja uudet oppitunnit sijoittuvat vain Kitaran perusteisiin', () => {
    const studyRoutes = (topic: string) => [...read(`oppi/${topic}/index.html`)
      .matchAll(/<a class="study-choice"[^>]* href="([^"]+)\.html"/g)].map(([, route]) => route);
    expect(Object.values(legacyStudyRoutes).flat()).toHaveLength(70);
    expect(studyRoutes('kitara')).toEqual([
      'savelesta-sointuun', 'vaihto-ja-sointukartta', ...legacyStudyRoutes.kitara, 'mihin-kierto-paattyy',
    ]);
    for (const [topic, routes] of Object.entries(legacyStudyRoutes)) {
      if (topic !== 'kitara') expect(studyRoutes(topic), topic).toEqual(routes);
      for (const route of routes) {
        expect(studyFiles, topic + '/' + route).toContain(`oppi/${topic}/${route}.html`);
      }
    }
  });

  it('Oppimiskartan muodostus on toistettava ja linkit osoittavat olemassa oleviin kohteisiin', () => {
    const generator = fileURLToPath(new URL('../tools/oppimiskartta/rakenna.py', import.meta.url));
    const links = fileURLToPath(new URL('../tools/linkit/tarkista-linkit.py', import.meta.url));
    execFileSync('python3', [generator, '--tarkista']);
    execFileSync('python3', [links]);
  });

  it('jokaisella pääsivulla on sama päävalikko samassa järjestyksessä ja oikea aktiivinen osio',()=>{
    const pages:[string,string|null,string][]=[
      ['index.html',null,'page'],['book/index.html','teoria','true'],['otelautaharjoittelija.html','otelauta','page'],['kitaraharjoittelija.html','kitara','page'],
      ['riffikaiku.html','kitara','true'],['pelit/ensikeikka/index.html','kitara','true'],
      ...readdirSync(new URL('../book/',import.meta.url)).filter(f=>f.endsWith('.html')&&f!=='index.html').map(f=>['book/'+f,'teoria','true'] as [string,string,string]),
      ...studyFiles.map(file=>[file,'teoria','true'] as [string,string,string]),
    ];
    const targets={teoria:'index.html#oppimisaiheet',otelauta:'otelautaharjoittelija.html',kitara:'kitaraharjoittelija.html'};
    for(const [file,active,kind] of pages){
      const html=read(file);
      const nav=html.match(/<nav class="main-nav" aria-label="Päävalikko">([\s\S]*?)<\/nav>/)?.[1];
      expect(nav,file).toBeDefined();
      expect(html.match(/class="main-nav"/g),file).toHaveLength(1);
      expect(html,file).toContain('assets/paavalikko.css');
      const base=file.includes('/')?file.slice(0,file.lastIndexOf('/')+1):'';
      const links=[...nav!.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map(([,attrs,inner])=>({
        attrs, href:new URL(attrs.match(/href="([^"]+)"/)![1],'https://x/'+base).href.slice('https://x/'.length),
        text:inner.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim(),
      }));
      expect(links.map(l=>l.href),file).toEqual(['index.html',targets.teoria,targets.otelauta,targets.kitara]);
      expect(links.map(l=>l.text),file).toEqual(['Musiikin kartta','Oppimiskartta','Otelautaopas','Kitaraharjoittelu']);
      expect(nav,file).toContain('oppimisaiheet');
      const current=links.filter(l=>l.attrs.includes('aria-current'));
      expect(current,file).toHaveLength(1);
      expect(current[0].href,file).toBe(active?targets[active as keyof typeof targets]:'index.html');
      expect(current[0].attrs,file).toContain(`aria-current="${kind}"`);
    }
  });

  it('teoriasivun neljä kokonaisuutta kattavat jokaisen oppaan osan täsmälleen kerran',()=>{
    const html=read('book/index.html');
    const titles=[...html.matchAll(/<details class="group" id="kokonaisuus-(\d)">[\s\S]*?<strong>([^<]+)<\/strong>/g)].map(m=>m[1]+' '+m[2]);
    expect(titles).toEqual(['1 Musiikin perusteet','2 Otelauta ja sointujen hahmottaminen','3 Kuuntele, improvisoi ja soita','4 Syventävät ja jatko-osat']);
    const parts=[...html.matchAll(/<li data-part="(osa-\d+)"><a href="(osa-\d+)\.html">/g)];
    for(const [,slug,href] of parts) expect(href).toBe(slug);
    const files=readdirSync(new URL('../book/',import.meta.url)).filter(f=>/^osa-\d+\.html$/.test(f)).map(f=>f.replace('.html','')).sort();
    expect(parts.map(m=>m[1]).sort()).toEqual(files);
    // Edistymistaulukon osat ovat samat kuin aloitussivun osat, jotta jatkamiskortti ja merkinnät osuvat oikein.
    const table=[...read('assets/edistyminen.js').matchAll(/\{ slug: '(osa-\d+)'/g)].map(m=>m[1]).sort();
    expect(table).toEqual(files);
  });

  it('edistymisen tallennusavaimet ovat ennallaan eikä teoria lue harjoittelijan tuloksia jatkamiskorttiin',()=>{
    const js=read('assets/edistyminen.js');
    expect(js).toContain("const KEY = 'musiikin-kartta:luvut';");
    expect(js).toContain("const OLD_KEY = 'musiikin-kartta:tehdyt';");
    expect(js).not.toMatch(/localStorage\.(setItem|removeItem)\('musiikin-kartta:harjoittelu'/);
  });

  it('jokaisen tyylitiedostolinkin versiotunniste vastaa tiedoston nykyistä sisältöä',()=>{
    // Ilman tunnistetta selain voi käyttää vanhaa CSS:ää uuden HTML:n kanssa (Cloudflare: max-age 4 h).
    const pages=['index.html','otelautaharjoittelija.html','kitaraharjoittelija.html',...readdirSync(new URL('../book/',import.meta.url)).filter(f=>f.endsWith('.html')).map(f=>'book/'+f)];
    for(const page of pages){
      const links=[...read(page).matchAll(/<link rel="stylesheet" href="([^"]+)"/g)].map(m=>m[1]);
      expect(links.length,page).toBeGreaterThan(0);
      for(const link of links){
        const [href,v]=link.split('?v=');
        const file=new URL('../'+(page.includes('/')?page.slice(0,page.lastIndexOf('/')+1):'')+href,import.meta.url);
        expect(v,`${page}: ${href} (aja node tools/versioi-tyylit.mjs)`).toBe(createHash('sha256').update(readFileSync(file)).digest('hex').slice(0,10));
      }
    }
  });
});
