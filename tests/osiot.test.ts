import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

// Neljä pääosiota ja kolme oppimistapaa: tools/oppimiskartta/sisaltorekisteri.json ja rakenna-osiot.py.
const read = (path: string) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const builder = fileURLToPath(new URL('../tools/oppimiskartta/rakenna-osiot.py', import.meta.url));
type App = { id: string; nimi: string; tavat: string[]; aiheet: string[]; osoite: string | null; saatavuus: string; tulos: string | null; valine: string };
type StudyEntry = { sivu: string; tavat: string[]; tehtava: string[]; lisaaiheet?: string[] };
type Registry = { osiot: { id: string; nimi: string; osoite: string }[]; sovellukset: App[]; oppisivut: StudyEntry[] };
const registryText = read('tools/oppimiskartta/sisaltorekisteri.json');
const registry = JSON.parse(registryText) as Registry;
/** Ajaa rekisterin validoinnin muokatulle kopiolle. Palauttaa virhetekstin tai null. */
function validateCopy(change: (copy: Registry) => void): string | null {
  const copy = JSON.parse(registryText) as Registry;
  change(copy);
  const file = join(mkdtempSync(join(tmpdir(), 'rekisteri-')), 'rekisteri.json');
  writeFileSync(file, JSON.stringify(copy));
  try {
    execFileSync('python3', [builder, '--rekisteri', file, '--validoi'], { stdio: 'pipe' });
    return null;
  } catch (error) {
    return String((error as { stderr?: Buffer }).stderr);
  }
}
const topics = (JSON.parse(read('tools/oppimiskartta/aiheet.json')) as { topics: { slug: string; anchor: string; title: string }[] }).topics;
const sectionIds = (html: string) => [...html.matchAll(/<(?:section class="game-topic"|details class="train-topic") id="([^"]+)"/g)].map(m => m[1]);
/** Näkymän osa: Musapelien kaikkien pelien lista, aiheen rajattu näkymä tai Kitaratreenin aihe. */
const block = (html: string, id: string) => html.split(`id="${id}"`)[1].split(/<\/section>|<\/details>/)[0];
const cards = (html: string) => [...html.matchAll(/<a class="game-card" href="([^"]+)">[\s\S]*?<strong class="game-card-title">([^<]+)/g)]
  .map(([, href, title]) => ({ href: href.replace(/&amp;/g, '&'), title: title.trim() }));
const trainLinks = (html: string) => [...html.matchAll(/<li><a href="([^"]+)">([^<]+)<\/a><span class="mode-desc">/g)]
  .map(([, href, title]) => ({ href: href.replace(/&amp;/g, '&'), title }));
const sourceFiles = (dir: string): string[] => readdirSync(new URL('../' + dir, import.meta.url), { withFileTypes: true })
  .flatMap(entry => entry.isDirectory() ? sourceFiles(dir + '/' + entry.name) : [dir + '/' + entry.name])
  .filter(file => /\.(tsx?|js)$/.test(file) && !file.includes('/vendor/'));

describe('pääosiot ja sisältörekisteri', () => {
  it('rekisteri on validi ja näkymät sekä päävalikot ovat ajan tasalla', () => {
    // Paluukoodi 1 kaataa testin: virheelliset osoitteet, aiheet, ankkurit tai vanhentuneet sivut.
    execFileSync('python3', [builder, '--tarkista']);
  });

  it('päävalikon nimet ovat täsmälleen sovitut', () => {
    expect(registry.osiot.map(s => s.nimi)).toEqual(['Opi & oivalla', 'Musapelit', 'Kitaratreeni', 'Soittopakki']);
    expect(registry.osiot[0].osoite).toBe('index.html');
  });

  it('Musapelit ja Kitaratreeni käyttävät samoja kahdeksaa aihetta ja tunnisteita kuin Oppimiskartta', () => {
    const home = [...read('index.html').matchAll(/<a class="topic-card" id="([^"]+)"/g)].map(m => m[1]);
    expect(home).toEqual(topics.map(t => t.anchor));
    for (const page of ['musapelit.html', 'kitaratreeni.html']) {
      const html = read(page);
      expect(sectionIds(html), page).toEqual(home);
      topics.forEach((topic, index) => {
        expect(html, page).toMatch(new RegExp(`<span class="mode-num">${String(index + 1).padStart(2, '0')}</span> (<span class="train-title">)?${topic.title}`));
        // Jokaisesta aiheesta pääsee saman aiheen teoriaan ja toiseen oppimistapaan.
        expect(block(html, topic.anchor), page).toContain(`href="oppi/${topic.slug}/index.html"`);
      });
    }
  });

  it('Musapelit näyttää jokaisen pelattavan sisällön kerran heti, ja aiheiden näkymät vastaavat rekisteriä', () => {
    const html = read('musapelit.html');
    const all = cards(block(html, 'pelit'));
    const games = [
      ...registry.sovellukset.filter(app => app.tavat.includes('pelit') && app.saatavuus !== 'suunniteltu').map(app => app.nimi),
      ...registry.oppisivut.filter(entry => entry.tavat.includes('pelit'))
        .map(entry => read(entry.sivu).match(/<h1[^>]*>([^<]+)</)![1].trim()),
    ];
    expect(all.map(card => card.title).sort()).toEqual([...games].sort());
    expect(new Set(all.map(card => card.title)).size).toBe(all.length);
    for (const name of ['Ensikeikka', 'Riffikaiku-peli', 'Sävelten etsintä', 'Tunnista avoin sointu', 'Mikä aste soi?', 'Tunnista sointutyyppi', 'Mikä sointu tulee?']) {
      expect(all.map(card => card.title), name).toContain(name);
    }
    // Kaikkien pelien lista on viimeisenä, jotta aiheen :target piilottaa sen; aiheet ennen sitä tunnisteineen.
    expect(html.indexOf('id="pelit"')).toBeGreaterThan(html.lastIndexOf('class="game-topic"'));
    // Rajaus näyttää vain aiheet, joissa on pelejä, ja määrät vastaavat aiheen näkymää.
    const chips = [...html.matchAll(/<li><a href="#(aihe-[a-z]+)">[\s\S]*?<span class="chip-count">(\d+)/g)];
    for (const [, id, count] of chips) expect(cards(block(html, id)), id).toHaveLength(Number(count));
    expect(chips.map(([, id]) => id)).toEqual(topics.map(t => t.anchor).filter(id => cards(block(html, id)).length));
    // Sama sisältö kahdessa aiheessa: sama osoite ja suoritustunniste, lähtöaihe kulkee mukana.
    expect(cards(block(html, 'aihe-soinnut')).find(card => card.title === 'Mikä sointu tulee?')!.href)
      .toBe('oppi/kappaleet/mika-sointu-tulee.html?aihe=aihe-soinnut&tapa=pelit');
    expect(cards(block(html, 'aihe-kappaleet')).find(card => card.title === 'Mikä sointu tulee?')!.href)
      .toBe('oppi/kappaleet/mika-sointu-tulee.html?tapa=pelit');
  });

  it('Kitaratreeni näyttää aiheet suljettuina ja jokaisen harjoituksen omassa aiheessaan tehtävälajin alla', () => {
    const html = read('kitaratreeni.html');
    expect(html).not.toMatch(/<details class="train-topic"[^>]* open/);
    expect(html).toContain('<a class="train-hub" href="kitaraharjoittelija.html">');
    const entries = registry.oppisivut.filter(entry => entry.tavat.includes('kitara'));
    const found = topics.flatMap(topic => trainLinks(block(html, topic.anchor)));
    expect(found.map(link => link.href.split('?')[0]).sort()).toEqual(entries.map(entry => entry.sivu).sort());
    for (const entry of entries) {
      const slug = entry.sivu.split('/')[1];
      const part = block(html, topics.find(t => t.slug === slug)!.anchor);
      const kind = entry.tehtava.includes('korvalla') ? 'Korvalla kitaralle' : 'Soita';
      const section = part.split(`<h3 class="train-kind">${kind}`)[1]?.split('<h3')[0] ?? '';
      expect(section, entry.sivu).toContain(`href="${entry.sivu}?tapa=kitara"`);
      // Suoritustunniste on sivun oma; Kitaratreeni ei luo uutta.
      expect(read(entry.sivu), entry.sivu).toMatch(/data-study-item="[a-z0-9:-]+"/);
    }
    // Soittopakin aiheeseen rajatut näkymät säilyvät aiheen sisällä.
    expect(block(html, 'aihe-asteikot')).toContain('otelautaopas-beta.html?toonikka=A&amp;asteikko=mp&amp;aihe=aihe-asteikot&amp;tapa=kitara#asteikot');
  });

  it('suunniteltuja työkaluja ei näytetä valmiina eikä sivuilla ole tulossa-kortteja', () => {
    const planned = registry.sovellukset.filter(app => app.saatavuus === 'suunniteltu');
    expect(planned.map(app => app.nimi)).toContain('Metronomi');
    for (const page of ['musapelit.html', 'kitaratreeni.html', 'soittopakki.html']) {
      const html = read(page);
      for (const app of planned) expect(html, page).not.toContain(app.nimi);
      expect(html, page).not.toMatch(/tulossa|pian/i);
    }
  });

  it('jokainen rekisterin sovellus näkyy omassa oppimistavassaan ja aiheessaan', () => {
    const pages: Record<string, string> = { pelit: 'musapelit.html', kitara: 'kitaratreeni.html', pakki: 'soittopakki.html' };
    for (const app of registry.sovellukset.filter(a => a.saatavuus !== 'suunniteltu')) {
      for (const mode of app.tavat) {
        const html = read(pages[mode]);
        if (mode === 'pakki') { expect(html, app.id).toContain(`>${app.nimi}`); continue; }
        for (const slug of app.aiheet) {
          const anchor = topics.find(t => t.slug === slug)!.anchor;
          const part = block(html, anchor);
          expect(part, app.id).toContain(`<strong class="game-card-title">${app.nimi}`);
          expect(part, app.id).toContain(`aihe=${anchor}`);
        }
      }
    }
  });

  it('sisällöllä voi olla useita aiheita ja oppimistapoja', () => {
    // Lisäaihe ja Soittopakin rinnalle lisätty oppimistapa ovat sallittuja, kun väline vastaa tehtävää.
    expect(validateCopy(copy => {
      copy.oppisivut.find(entry => entry.sivu === 'oppi/kappaleet/mika-sointu-tulee.html')!.lisaaiheet = ['soinnut'];
      copy.sovellukset.find(app => app.id === 'harjoittelija:asteikot')!.tavat.push('pakki');
      copy.oppisivut.find(entry => entry.sivu === 'oppi/korva/kumpi-on-molli.html')!.lisaaiheet = ['soinnut'];
    })).toBeNull();
  });

  it('pelin tulosta ja oikealla kitaralla harjoittelua ei voi merkitä samaksi tehtäväksi', () => {
    // Virtuaalinen peli ei kelpaa Kitaratreeniin eikä oikean kitaran harjoitus Musapeleihin.
    expect(validateCopy(copy => { copy.sovellukset.find(app => app.id === 'peli:riffikaiku')!.tavat.push('kitara'); }))
      .toContain('väline virtuaalikitara ei sovi oppimistapaan kitara');
    expect(validateCopy(copy => { copy.sovellukset.find(app => app.id === 'harjoitus:riffiharjoitus')!.tavat.push('pelit'); }))
      .toContain('väline oikea kitara ei sovi oppimistapaan pelit');
    // Oppimiskartan sivu on Musapeleissä vain, jos sivulla on vuorovaikutteinen kuuntelutehtävä.
    expect(validateCopy(copy => {
      const entry = copy.oppisivut.find(item => item.sivu === 'oppi/korva/kumpi-on-molli.html')!;
      entry.tavat.push('pelit'); entry.tehtava.push('kuuntelutehtava');
    })).toContain('ei ole vuorovaikutteista harjoitusta');
    expect(validateCopy(copy => { copy.oppisivut.find(item => item.sivu === 'oppi/korva/mika-aste-soi.html')!.tavat.push('kitara'); }))
      .toContain('ei sovi oppimistapaan kitara');
  });

  it('saman tiedoston eri oppimistavat on erotettava sovelluksen tilalla', () => {
    expect(validateCopy(copy => { delete (copy.sovellukset.find(app => app.id === 'peli:riffikaiku') as { tunnistus?: string[] }).tunnistus; }))
      .toContain('tunnistus-parametrit tarvitaan');
    expect(validateCopy(copy => { (copy.sovellukset.find(app => app.id === 'harjoittelija:kappaleet') as { tunnistus?: string[] }).tunnistus = ['tila']; }))
      .toContain('tunnistusparametria tila ei ole osoitteessa');
  });

  it('Opi & oivalla -lisäaihelinkki kuljettaa lähtöaiheen vain toisen aiheen sisältösivulle', () => {
    const chords = read('oppi/soinnut/index.html');
    expect(chords).toContain('href="../kappaleet/mika-sointu-tulee.html?aihe=aihe-soinnut"');
    expect(chords).toContain('href="../korva/soinnut.html?aihe=aihe-soinnut"');
    // Suoritustunniste on sama riippumatta reitistä.
    expect(read('oppi/kappaleet/mika-sointu-tulee.html')).toContain('data-study-item="harjoitus:mika-sointu-tulee"');
    const related = JSON.parse(read('assets/oppimistapa.js').match(/const RELATED = (\{.*\});\n/)![1]) as Record<string, string[]>;
    expect(related['oppi/kappaleet/mika-sointu-tulee.html']).toEqual(['aihe-soinnut']);
    // Aihesivuille vievät Tutki myös -linkit eivät saa parametria.
    expect(read('oppi/rytmi/index.html')).toContain('href="../kitara/index.html"');
  });

  it('rekisteri hylkää tuntemattoman aiheen ja puuttuvan osoitteen', () => {
    expect(validateCopy(copy => { copy.sovellukset[0].aiheet = ['tuntematon']; })).toContain('aihetunniste');
    expect(validateCopy(copy => { copy.sovellukset[0].osoite = 'puuttuu.html'; })).toContain('osoitetta puuttuu.html ei ole');
    expect(validateCopy(copy => { copy.oppisivut[0].sivu = 'oppi/korva/puuttuu.html'; })).toContain('sivua ei ole');
  });

  it('Musapeleistä ja Kitaratreenistä avatut sisällöt kertovat oppimistavan, vanhat osoitteet eivät muutu', () => {
    const games = read('musapelit.html');
    const guitar = read('kitaratreeni.html');
    expect(games).toContain('href="pelit/ensikeikka/index.html?aihe=aihe-korva&amp;tapa=pelit"');
    expect(games).toContain('href="oppi/korva/mika-aste-soi.html?tapa=pelit"');
    expect(guitar).toContain('href="oppi/rytmi/alas-ylos-yhdella-soinnulla.html?tapa=kitara"');
    expect(guitar).toContain('href="otelautaopas-beta.html?toonikka=A&amp;aihe=aihe-otelauta&amp;tapa=kitara#oktaavit"');
    // Oppimiskartan omat linkit pysyvät ilman parametria.
    expect(read('oppi/rytmi/index.html')).toContain('href="alas-ylos-yhdella-soinnulla.html"');
    expect(read('oppi/rytmi/index.html')).not.toContain('tapa=');
  });

  it('oppimistapa.js tuntee vain oppimistapaan kuuluvat sivut ja niiden aiheet', () => {
    const block = read('assets/oppimistapa.js').match(/const MODES = (\{.*\});\n/)![1];
    type Variant = { ehdot: Record<string, string>; aiheet: string[] };
    const modes = JSON.parse(block) as Record<string, { sivut: Record<string, Variant[]> }>;
    expect(modes.pelit.sivut['oppi/kappaleet/mika-sointu-tulee.html']).toEqual([{ ehdot: {}, aiheet: ['aihe-kappaleet', 'aihe-soinnut'] }]);
    expect(modes.kitara.sivut['oppi/rytmi/alas-ylos-yhdella-soinnulla.html']).toEqual([{ ehdot: {}, aiheet: ['aihe-rytmi'] }]);
    expect(modes.kitara.sivut['otelautaopas-beta.html']).toEqual([{ ehdot: {}, aiheet: ['aihe-otelauta', 'aihe-soinnut', 'aihe-asteikot'] }]);
    // Sama tiedosto eri oppimistavoissa: sovelluksen tila ratkaisee (Riffikaiku, Kitaraharjoittelijan polut).
    expect(modes.pelit.sivut['riffikaiku.html']).toEqual([{ ehdot: { tila: 'peli' }, aiheet: ['aihe-korva'] }]);
    expect(modes.kitara.sivut['riffikaiku.html']).toEqual([{ ehdot: { tila: 'harjoitus' }, aiheet: ['aihe-korva'] }]);
    expect(modes.pelit.sivut['kitaraharjoittelija.html'].map(v => v.ehdot))
      .toEqual([{ polku: 'otelauta', harjoitus: 'savelten-etsinta' }, { polku: 'soinnut' }]);
    expect(modes.kitara.sivut['kitaraharjoittelija.html'].map(v => v.ehdot)).toEqual([{ polku: 'asteikot' }, { polku: 'kappaleet' }]);
    // Opi & oivalla -sivut ja toisen oppimistavan sivut eivät ole mukana.
    expect(modes.kitara.sivut).not.toHaveProperty(['oppi/rytmi/kuuntele-pulssi.html']);
    expect(modes.kitara.sivut).not.toHaveProperty(['oppi/korva/mika-aste-soi.html']);
    expect(modes.pelit.sivut).not.toHaveProperty(['oppi/rytmi/alas-ylos-yhdella-soinnulla.html']);
    // Laulukorkeuden valinta ei ole kitaraharjoitus: kitaraa käytetään vain lisätehtävässä.
    expect(modes.kitara.sivut).not.toHaveProperty(['oppi/kappaleet/sovita-savellaji-laulajalle.html']);
  });

  it('Oppimiskartan sivujen alareunassa ei toisteta yläreunan aihepaluuta', () => {
    const pages = readdirSync(new URL('../oppi/', import.meta.url), { recursive: true }).map(String)
      .filter(file => file.endsWith('.html') && !file.endsWith('index.html'));
    expect(pages.length).toBeGreaterThan(70);
    for (const file of pages) {
      const html = read('oppi/' + file);
      expect(html, file).not.toContain('study-step-back');
      expect(html, file).toContain('<a class="study-back"');
      expect(html, file).toContain('assets/oppimistapa.js');
    }
  });

  it('rekisterin tulosavaimet ovat nykyisessä koodissa käytössä olevia avaimia', () => {
    const source = ['harjoittelija', 'riffikaiku', 'ensikeikka'].flatMap(sourceFiles).map(read).join('\n');
    for (const app of registry.sovellukset.filter(a => a.tulos)) expect(source, app.id).toContain(`'${app.tulos}`);
  });

  it('näkymät eivät kirjoita etenemistietoja eikä niissä ole omaa skriptiä', () => {
    for (const page of ['musapelit.html', 'kitaratreeni.html', 'soittopakki.html']) {
      const html = read(page);
      expect(html, page).not.toContain('localStorage');
      const scripts = page === 'soittopakki.html' ? ['assets/oppimiskartta.js'] : ['assets/oppimiskartta.js', 'assets/osiot.js'];
      expect([...html.matchAll(/<script\b[^>]*>/g)].map(m => m[0]), page).toEqual(scripts.map(src => `<script defer src="${src}">`));
    }
    expect(read('assets/osiot.js')).not.toMatch(/localStorage|sessionStorage/);
    // Oppimistavan säilyttävä skripti ei käytä tallennuksia.
    expect(read('assets/oppimistapa.js')).not.toMatch(/localStorage|sessionStorage/);
    for (const page of ['riffikaiku.html', 'kitaraharjoittelija.html', 'otelautaopas-beta.html', 'pelit/ensikeikka/index.html']) {
      const html = read(page);
      expect(html.indexOf('oppimistapa.js'), page).toBeGreaterThan(html.indexOf('oppimiskartta.js'));
    }
  });
});
