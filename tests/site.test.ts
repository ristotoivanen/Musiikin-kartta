import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { Script } from 'node:vm';
import { describe,it,expect } from 'vitest';
import ts from 'typescript';
const read=(file:string)=>readFileSync(new URL('../'+file,import.meta.url),'utf8');
describe('staattisen sivuston yhteensopivuus',()=>{
  it('muutetut nykyiset skriptit ovat syntaktisesti kelvollisia classic-skriptejä',()=>{
    for(const file of ['assets/otelauta.js','assets/edistyminen.js','assets/harjoitustausta.js','assets/korvatreeni.js']) expect(()=>new Script(read(file))).not.toThrow();
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
    expect(home).toContain('Tutki otelautakarttaa');
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

  it('etusivun kahdeksan oppimisaihetta säilyttävät nykyiset teoria- ja harjoittelureitit', () => {
    const html = read('index.html');
    const ids = [...html.matchAll(/<details class="topic-card" id="aihe-([^"]+)">/g)].map(m => m[1]);
    expect(ids).toEqual(['kitara', 'rytmi', 'nuotit', 'korva', 'otelauta', 'soinnut', 'asteikot', 'kappaleet']);
    expect(html).toContain('href="book/osa-1.html#pulssi-ja-komppi"');
    expect(html).toContain('href="riffikaiku.html"');
    expect(html).toContain('href="pelit/ensikeikka/"');
    expect(html).toContain('href="kitaraharjoittelija.html?polku=otelauta&amp;harjoitus=savelten-etsinta"');
    expect(html).toContain('<title>Oppimiskartta – Musiikin kartta</title>');
    expect(html).toContain('<h2 id="oppimisaiheet">Oppimiskartta</h2>');
    expect(html).not.toContain('Nykyiset oppaat ja työkalut');
    expect(html).not.toContain('class="area"');
    expect(html).toContain('href="otelautaharjoittelija.html#soinnut">Tutki sointukarttaa');
    const linkedParts = new Set([...html.matchAll(/href="book[/]osa-([0-9]+)[.]html(?:#[^"]*)?"/g)].map(m => Number(m[1])));
    expect([...linkedParts].sort((a, b) => a - b)).toEqual(Array.from({ length: 11 }, (_, n) => n + 1));
    expect(html).toContain('href="index.html#oppimisaiheet">Oppimiskartta</a>');
    expect(html).toContain('href="pdf/musiikin-kartta.pdf"');
    expect(html).toContain('href="book/sanasto.html"');
    expect(html).toContain('id="harjoittelija"');
    expect(html).toContain('followOldTrainerLink()');
    expect(html).toContain('id="home-continue"');
    expect(html).not.toContain('class="hero-actions"');
    const chapters = [...html.matchAll(/data-theory-chapter="(osa-[0-9]+)\#([^"]+)" href="book[/](osa-[0-9]+)[.]html\#([^"]+)"/g)];
    expect(chapters).toHaveLength(28);
    expect(new Set(chapters.map(m => m[1] + '#' + m[2])).size).toBe(28);
    for (const [, part, anchor, target, targetAnchor] of chapters) {
      expect(target).toBe(part);
      expect(targetAnchor).toBe(anchor);
      expect(read('book/' + target + '.html')).toContain('id="' + anchor + '"');
    }
    expect(html.match(/class="topic-group-title">Teoria/g)).toHaveLength(8);
    expect(read('assets/edistyminen.js')).toContain("document.getElementById('home-continue')");

    // Taitotunnisteet eivät kuulu ensimmäisen vaiheen käyttäjän valikkoteksteihin.
    expect(html).not.toContain('SCALE-CONNECT');
    expect(html).not.toContain('EAR-ECHO');
  });

  it('jokaisella pääsivulla on sama päävalikko samassa järjestyksessä ja oikea aktiivinen osio',()=>{
    const pages:[string,string|null,string][]=[
      ['index.html',null,'page'],['book/index.html','teoria','true'],['otelautaharjoittelija.html','otelauta','page'],['kitaraharjoittelija.html','kitara','page'],
      ...readdirSync(new URL('../book/',import.meta.url)).filter(f=>f.endsWith('.html')&&f!=='index.html').map(f=>['book/'+f,'teoria','true'] as [string,string,string]),
    ];
    const targets={teoria:'index.html',otelauta:'otelautaharjoittelija.html',kitara:'kitaraharjoittelija.html'};
    for(const [file,active,kind] of pages){
      const html=read(file);
      const nav=html.match(/<nav class="main-nav" aria-label="Päävalikko">([\s\S]*?)<\/nav>/)?.[1];
      expect(nav,file).toBeDefined();
      expect(html.match(/class="main-nav"/g),file).toHaveLength(1);
      expect(html,file).toContain('assets/paavalikko.css');
      const base=file.includes('/')?file.slice(0,file.lastIndexOf('/')+1):'';
      const links=[...nav!.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map(([,attrs,inner])=>({
        attrs, href:new URL(attrs.match(/href="([^"]+)"/)![1],'https://x/'+base).pathname.slice(1),
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
