import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

// Neljä pääosiota ja kolme oppimistapaa: tools/oppimiskartta/sisaltorekisteri.json ja rakenna-osiot.py.
const read = (path: string) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const builder = fileURLToPath(new URL('../tools/oppimiskartta/rakenna-osiot.py', import.meta.url));
type App = { id: string; nimi: string; tavat: string[]; aiheet: string[]; osoite: string | null; saatavuus: string; tulos: string | null };
const registry = JSON.parse(read('tools/oppimiskartta/sisaltorekisteri.json')) as {
  osiot: { id: string; nimi: string; osoite: string }[]; sovellukset: App[]; oppisivut: Record<string, string[]>;
};
const topics = (JSON.parse(read('tools/oppimiskartta/aiheet.json')) as { topics: { slug: string; anchor: string; title: string }[] }).topics;
const sectionIds = (html: string) => [...html.matchAll(/<section class="mode-topic[^"]*" id="([^"]+)"/g)].map(m => m[1]);
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
    expect(registry.osiot[0].osoite).toBe('index.html#oppimisaiheet');
  });

  it('Musapelit ja Kitaratreeni käyttävät samoja kahdeksaa aihetta ja tunnisteita kuin Oppimiskartta', () => {
    const home = [...read('index.html').matchAll(/<a class="topic-card" id="([^"]+)"/g)].map(m => m[1]);
    expect(home).toEqual(topics.map(t => t.anchor));
    for (const page of ['musapelit.html', 'kitaratreeni.html']) {
      const html = read(page);
      expect(sectionIds(html), page).toEqual(home);
      topics.forEach((topic, index) => {
        expect(html, page).toContain(`<span class="mode-num">${String(index + 1).padStart(2, '0')}</span> ${topic.title}</h2>`);
        // Jokaisesta aiheesta pääsee saman aiheen teoriaan ja toiseen oppimistapaan.
        expect(html, page).toContain(`href="oppi/${topic.slug}/index.html"`);
      });
    }
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
          const block = html.split(`id="${anchor}"`)[1].split('</section>')[0];
          expect(block, app.id).toContain(`<strong class="mode-card-title">${app.nimi}`);
          expect(block, app.id).toContain(`aihe=${anchor}`);
        }
      }
    }
  });

  it('peli ja kitaraharjoitus eivät ole samassa listassa samanarvoisina', () => {
    // Sama sisältö saa kuulua useaan aiheeseen, mutta yksi sisältö kirjataan vain yhteen oppimistapaan:
    // virtuaalinen valinta tai kuuntelu ei näy oikean kitaran harjoituksena.
    const games = new Set(registry.oppisivut.pelit);
    expect(registry.oppisivut.kitara.filter(path => games.has(path))).toEqual([]);
    for (const app of registry.sovellukset) expect(app.tavat.includes('pelit') && app.tavat.includes('kitara'), app.id).toBe(false);
  });

  it('rekisterin tulosavaimet ovat nykyisessä koodissa käytössä olevia avaimia', () => {
    const source = ['harjoittelija', 'riffikaiku', 'ensikeikka'].flatMap(sourceFiles).map(read).join('\n');
    for (const app of registry.sovellukset.filter(a => a.tulos)) expect(source, app.id).toContain(`'${app.tulos}`);
  });

  it('näkymät eivät kirjoita etenemistietoja eikä niissä ole omaa skriptiä', () => {
    for (const page of ['musapelit.html', 'kitaratreeni.html', 'soittopakki.html']) {
      const html = read(page);
      expect(html, page).not.toContain('localStorage');
      expect([...html.matchAll(/<script\b[^>]*>/g)].map(m => m[0]), page).toEqual(['<script defer src="assets/oppimiskartta.js">']);
    }
  });
});
