import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

// #116: Soinnut ja harmonia -aiheen oma oppimiskokonaisuus 01 · Miten sointu muodostuu?
// Uudet oppitunnit ovat erillinen kokonaisuus: oma numerointi ja Edellinen/Seuraava, eivät aiheen
// etenemisjärjestyksessä, aihesivun tai etusivun laskurissa eivätkä oppimispolun lopussa.
const read = (path: string) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const unitPages = ['kuule-mika-on-sointu', 'rakenna-g-duurisointu', 'kokeile-g-sointua-kitaralla'];
const unitIds = unitPages.map(slug => 'oppitunti:' + slug);
const main = (html: string) => html.match(/<main\b[^>]+>/)![0];

describe('Soinnut ja harmonia: oma oppimiskokonaisuus', () => {
  it('uusilla oppitunneilla on omat tunnisteet, numerointi ja paluu aihesivulle', () => {
    unitPages.forEach((slug, index) => {
      const html = read(`oppi/soinnut/${slug}.html`);
      expect(main(html)).toContain(`data-study-item="oppitunti:${slug}" data-study-kind="oppitunti"`);
      expect(main(html)).not.toContain('data-topic-items=');
      expect(html).toContain(`data-study-unit="miten-sointu-muodostuu">Oppitunti 0${index + 1} / 03 <span>01 · Miten sointu muodostuu?</span>`);
      expect(html.match(/rel="prev"/g)?.length ?? 0).toBe(index === 0 ? 0 : 2);
      if (index < 2) expect(html).toContain(`href="${unitPages[index + 1]}.html" rel="next"`);
    });
    const last = read('oppi/soinnut/kokeile-g-sointua-kitaralla.html');
    expect(last).not.toContain('rel="next"');
    expect(last.match(/href="index.html#miten-sointu-muodostuu" class="study-step-map"><span class="study-step-arrow" aria-hidden="true">←<\/span> Palaa aihesivulle: Soinnut ja harmonia<\/a>/g)).toHaveLength(2);
    expect(last).not.toContain('harmoninen-kentta.html');
  });

  it('aiempien 18 sisällön järjestys, numerointi ja laskurit ovat ennallaan', () => {
    const first = read('oppi/soinnut/harmoninen-kentta.html');
    expect(first).toContain('<p class="study-meta">Oppitunti 01 / 18 <span>Teoriaoppaan luku 6</span></p>');
    expect(first).not.toContain('rel="prev"');
    const last = main(read('oppi/soinnut/ii-v-i-kahdessa-savellajissa.html'));
    const topicItems = last.match(/data-topic-items="([^"]+)"/)![1].split(' ');
    expect(topicItems).toHaveLength(18);
    expect(topicItems.some(id => unitIds.includes(id))).toBe(false);
    const home = read('index.html').match(/href="oppi\/soinnut\/index.html"[^>]+data-study-items="([^"]+)"/)![1].split(' ');
    expect(home).toEqual(topicItems);
    const path = main(read('oppi/kappaleet/aanita-kahdeksan-tahtia.html')).match(/data-path-items="([^"]+)"/)![1].split(' ');
    expect(path.some(id => unitIds.includes(id))).toBe(false);
  });

  it('aiempien sisältöjen oma laskuriteksti on vain Soinnut-aiheen kolmessa laskurissa', () => {
    const attrs = 'data-progress-count="aiemmista sisällöistä tehty" data-progress-done="✓ Aiemmat sisällöt tehty"';
    expect(read('index.html').match(/data-progress-count=/g)).toHaveLength(1);
    expect(read('index.html')).toMatch(new RegExp(`id="aihe-soinnut"[^]*?<span class="topic-status" ${attrs} hidden>`));
    expect(read('oppi/soinnut/index.html')).toContain(`data-study-total ${attrs} hidden`);
    expect(read('oppi/soinnut/ii-v-i-kahdessa-savellajissa.html').match(new RegExp(`data-boundary-progress( aria-live="polite")? ${attrs} hidden`, 'g'))).toHaveLength(2);
    // Muut sivut eivät saa tekstimäärittelyä.
    for (const file of ['oppi/rytmi/index.html', 'oppi/asteikot/index.html', 'oppi/soinnut/harmoninen-kentta.html']) {
      expect(read(file), file).not.toContain('data-progress-');
    }
  });

  it('aihesivun laskuri ja korttien tilat kattavat vain aiemmat sisällöt', () => {
    const topic = read('oppi/soinnut/index.html');
    const statuses = [...topic.matchAll(/data-study-status="([^"]+)"/g)].map(([, id]) => id);
    expect(statuses).toHaveLength(18);
    expect(statuses.some(id => unitIds.includes(id))).toBe(false);
    // Laskuri on Aiemmat oppitunnit ja harjoitukset -osion otsikkorivillä, ei koko aiheen yläpuolella.
    expect(topic.match(/data-study-total/g)).toHaveLength(1);
    expect(topic).toMatch(/<details class="study-unit study-unit--legacy" id="aiemmat">\n\s+<summary>[^\n]*data-study-total[^>]*hidden><\/span><\/summary>/);
    expect([...topic.matchAll(/class="study-choice study-choice--unit" id="valinta-([^"]+)"/g)].map(([, slug]) => slug)).toEqual(unitPages);
    // Uusien korttien tila käyttää PR #111:n johdannon merkintää: näkyy, mutta ei kuulu aiheen laskuriin.
    expect([...topic.matchAll(/data-study-intro-status="([^"]+)"/g)].map(([, id]) => id)).toEqual(unitIds);
    expect(topic).toMatch(/<details class="study-unit" id="miten-sointu-muodostuu" open>\n\s+<summary>[^\n]*data-unit-progress hidden><\/span><\/summary>/);
  });
});
