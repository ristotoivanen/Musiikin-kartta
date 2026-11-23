import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

// #116: Soinnut ja harmonia -aiheen oma oppimiskokonaisuus 01 · Miten sointu muodostuu?
// Uudet oppitunnit ovat erillinen kokonaisuus: oma numerointi ja Edellinen/Seuraava, eivät aiheen
// etenemisjärjestyksessä, aihesivun tai etusivun laskurissa eivätkä oppimispolun lopussa.
const read = (path: string) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const exists = (path: string) => existsSync(new URL('../' + path, import.meta.url));
const unitPages = ['kuule-mika-on-sointu', 'rakenna-g-duurisointu', 'kokeile-g-sointua-kitaralla'];
const unitIds = unitPages.map(slug => 'oppitunti:' + slug);
const main = (html: string) => html.match(/<main\b[^>]+>/)![0];

describe('Soinnut ja harmonia: oma oppimiskokonaisuus', () => {
  it('uusilla oppitunneilla on omat tunnisteet, numerointi ja paluu aihesivulle', () => {
    unitPages.forEach((slug, index) => {
      const html = read(`oppi/soinnut/${slug}.html`);
      expect(main(html)).toContain(`data-study-item="oppitunti:${slug}" data-study-kind="oppitunti"`);
      expect(main(html)).not.toContain('data-topic-items=');
      expect(html).toContain(`data-study-unit="miten-sointu-muodostuu">Oppitunti 0${index + 1} / 03 <span>01 · Lisäopinnot · Miten sointu muodostuu?</span>`);
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
    expect(read('index.html').match(/data-progress-count=/g)).toHaveLength(2);
    expect(read('index.html')).toMatch(new RegExp(`id="aihe-soinnut"[^]*?<span class="topic-status" ${attrs} hidden>`));
    expect(read('oppi/soinnut/index.html')).toContain(`data-study-total ${attrs} hidden`);
    expect(read('oppi/soinnut/ii-v-i-kahdessa-savellajissa.html').match(new RegExp(`data-boundary-progress( aria-live="polite")? ${attrs} hidden`, 'g'))).toHaveLength(2);
    // Muut sivut eivät saa tekstimäärittelyä.
    for (const file of ['oppi/asteikot/index.html', 'oppi/soinnut/harmoninen-kentta.html']) {
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
    expect([...topic.matchAll(/data-study-intro-status="oppitunti:([^"]+)"/g)].map(([, slug]) => slug)).toEqual(unitPages);
    // Uusien korttien tila käyttää PR #111:n johdannon merkintää: näkyy, mutta ei kuulu aiheen laskuriin.
    expect([...topic.matchAll(/data-study-intro-status="([^"]+)"/g)].map(([, id]) => id)).toEqual(unitIds);
    expect(topic).toMatch(/<details class="study-unit" id="miten-sointu-muodostuu">\n\s+<summary>[^\n]*data-unit-progress hidden><\/span><\/summary>/);
  });
});

it('Ydinopinnot on ensimmäinen ja kokeilut eivät sekoitu G-pilotin tai aiempien tunnisteisiin', () => {
  const topic = read('oppi/soinnut/index.html');
  const slugs = ['kuule-ja-kokoa-sointu', 'yksi-savel-muuttaa-sointua', 'mihin-kappale-haluaa-palata', 'sointukierto-ja-asteet', 'siirra-sama-rakenne', 'sama-kierto-vahemmilla-vihjeilla'];
  const attempts = slugs.map(slug => 'harjoitus:' + slug);
  expect(topic).toMatch(/<div class="study-units">\s+<details class="study-unit" id="ydinopinnot">/);
  expect([...topic.matchAll(/data-study-attempt-status="([^"]+)"/g)].map(([, id]) => id)).toEqual(attempts);
  for (const [index, slug] of slugs.entries()) {
    const html = read('oppi/soinnut/' + slug + '.html');
    expect(main(html)).toContain(`data-study-item="${attempts[index]}" data-study-kind="harjoitus" data-study-mark="kokeiltu"`);
    expect(main(html)).not.toContain('data-topic-items=');
    expect(html).toContain('aria-pressed="false" disabled>Merkitse kokeilluksi');
    expect(html).toContain(`href="index.html#valinta-${slug}"`);
    expect(topic).toContain(`<details class="study-inline" name="ydinopinnot-harjoitukset" data-study-item="${attempts[index]}"`);
    expect(topic).toContain(`<summary class="study-choice study-choice--unit" id="valinta-${slug}">`);
    expect(topic).toContain(`href="${slug}.html" data-return-topic="valinta-${slug}">Avaa omalla sivullaan</a>`);
    expect(topic).toContain('class="study-inline-close" hidden>↑ Sulje oppitunti</button>');
  }
});

it('03 alkaa ilman valittua lopetusta ja kertoo G:n roolin vasta Mitä opit? -osiossa; 02 varaa nimille tilan', () => {
  const topic = read('oppi/soinnut/index.html');
  for (const html of [read('oppi/soinnut/mihin-kappale-haluaa-palata.html'), topic]) {
    const practice = html.slice(html.indexOf('data-sointuharjoitus="paluu"'));
    const note = practice.indexOf('<h2>Mitä opit?</h2>');
    expect(note).toBeGreaterThan(0);
    const [task, learned] = [practice.slice(0, note), practice.slice(note)];
    expect([...task.matchAll(/data-lopetus="([GCD])" aria-pressed="(\w+)"/g)].map(([, chord, pressed]) => chord + pressed))
      .toEqual(['Gfalse', 'Cfalse', 'Dfalse']);
    expect(task).toContain('type="button" data-kierto disabled>');
    expect(task).toContain('<div class="sointu-kierto-alue" data-sointu-ohjaimet hidden>');
    expect(task).not.toMatch(/toonika|kotisointu|Harmoninen suunta/);
    expect(learned).toMatch(/^[\s\S]*?<p>[^<]*G toimii kotisointuna eli toonikana, ja sen paluu voi tuntua lopetukselta\. Kuulokokemus ei silti ole kaikille täysin samanlainen\.<\/p>/);
    expect(practice).not.toContain('Paljasta');
  }
  for (const html of [read('oppi/soinnut/yksi-savel-muuttaa-sointua.html'), topic]) {
    for (const number of [1, 2]) {
      expect(html).toContain(`<span class="sointu-vaihtuva"><span data-arvaus-teksti>Sointu ${number}</span><span class="sointu-varaus" aria-hidden="true">Sointu ${number}</span></span>`);
    }
    // PR #141 (zoom): jokainen tunnistustilan vaihtuva teksti on myös näkymättömänä varauksena, jotta
    // kortin ja painikkeiden korkeus ei muutu tilanvaihdossa. JS:n teksti ja varaus pidetään samoina.
    const script = read('assets/sointuharjoitus.js');
    const prompt = 'Kuuntele sointuja 1 ja 2. Valitse sitten vastaus.';
    for (const text of ['Kumpi on duuri?', 'Kumpi on molli?', prompt]) expect(script).toContain(`'${text}'`);
    for (const [heading, text] of [['Kumpi on duuri?', prompt], ['Kumpi on molli?', prompt]]) {
      expect(html).toContain(`<div class="sointu-varaus" aria-hidden="true"><span class="sointu-varaus-otsikko">${heading}</span><span>${text}</span></div>`);
    }
    expect(html).toContain('<button type="button" data-uusi-arvaus>Tunnista</button>');
    expect(html).not.toContain('Uusi tehtävä');
    const recognitionCode = script.slice(script.indexOf('function setupGuess('), script.indexOf('function setupProgression('));
    expect(recognitionCode).not.toContain('setTimeout(');
    expect(recognitionCode).toContain('if (family === nextFamily && !started) return;');
    expect(recognitionCode).toContain('if (answered) {');
    expect(recognitionCode).toContain("choice.setAttribute('aria-disabled', 'true');");
    expect(recognitionCode).toContain("button.removeAttribute('aria-disabled');");
    const answerHandler = recognitionCode.slice(recognitionCode.indexOf('for (const button of choices)'));
    expect(answerHandler).not.toContain('startRound(true)');
    expect(html).toContain('Aloita uusi tehtävä valitsemalla sointupari ylhäältä.');
    expect(html).not.toContain('Paina vastauspainiketta uudelleen');
    expect(html).toContain('data-arvaus-kysymys hidden');
    expect(html).toContain('data-arvaus-kuuntelu role="group" aria-label="Tunnistustehtävän ääniesimerkit" hidden');
    expect(html).toContain('data-arvaus-pari="D" aria-pressed="true"');
    expect(html).toContain('data-arvaus-pari="E" aria-pressed="false"');
    expect(html).toContain('data-arvaus-pari="A" aria-pressed="false"');
    expect(html).toContain('data-aam-kaaviot hidden');
    expect(html).toContain('<figcaption>A</figcaption>');
    expect(html).toContain('<figcaption>Am</figcaption>');
    expect(html).toContain('<code>x02220</code>');
    expect(html).toContain('<code>x02210</code>');
    expect(script).toContain("A: ['A:A2', 'D:E3', 'G:A3', 'B:Cs4', 'HighE:E4']");
    expect(script).toContain("Am: ['A:A2', 'D:E3', 'G:A3', 'B:C4', 'HighE:E4']");
    expect(script).toContain("nextTargetByFamily = { D: 'D', E: 'E', A: 'A' }");
    expect(html).not.toContain('data-suora-kuuntelu');
  }
});

// Yhteinen Kokeiltu-mekanismi (#116, Soinnut #137 ja Rytmi #134): ryhmän "attempts" määrää vain
// merkinnän esitystavan ja laskurin. Sisältötyyppi (tallennustunniste) ja navigointi ovat omia asetuksiaan.
describe('oman kokonaisuuden asetukset ovat toisistaan riippumattomia', () => {
  const generator = (script: string) => execFileSync('python3', ['-c',
    `import sys, json; sys.path.insert(0, 'tools/oppimiskartta'); import rakenna\n${script}`],
  { cwd: new URL('..', import.meta.url), encoding: 'utf8', stdio: 'pipe' });
  const describePage = (group: object) => JSON.parse(generator(`
group = dict(title='T', id='ydin', **json.loads(${JSON.stringify(JSON.stringify(group))}))
page = rakenna.Page('oppi/x/kokeilu.html', 'Kokeilu', 'lahde.html', '<p>x</p>', 'tavoite')
group['pages'] = [page]
rakenna.unit_pages(group)
print(json.dumps({'id': page.study_id, 'kind': page.study_kind, 'mark': rakenna.study_mark(page),
                  'button': rakenna.unit_mark(page)}))`));

  it('attempts yksin: oppitunti-tunniste säilyy, merkintä on Kokeiltu', () => {
    expect(describePage({ attempts: true })).toEqual({
      id: 'oppitunti:kokeilu', kind: 'oppitunti', mark: ' data-study-mark="kokeiltu"',
      button: expect.stringContaining('>Merkitse kokeilluksi</button>'),
    });
  });

  it('kind yksin muuttaa tunnisteen mutta ei merkintää; ilman asetuksia kaikki ennallaan', () => {
    expect(describePage({ kind: 'harjoitus' })).toMatchObject({ id: 'harjoitus:kokeilu', mark: '' });
    expect(describePage({ kind: 'harjoitus' }).button).toContain('>Merkitse harjoitus tehdyksi</button>');
    expect(describePage({})).toMatchObject({ id: 'oppitunti:kokeilu', kind: 'oppitunti', mark: '' });
  });

  it('tuntematon arvo pysäyttää generoinnin', () => {
    for (const group of [{ kind: 'luku' }, { back: 'alkuun' }, { last: 'unit' }, { attempts: 'kyllä' }]) {
      expect(() => describePage(group)).toThrow(/voi olla vain/);
    }
  });
});


it('04 G–D–Em–C säilyttää hyväksytyn yhden soinnun 4/4-tahdissa ja oikean kaaviosarjan', () => {
  const markup = read('tools/oppimiskartta/sisallot/soinnut/sointukierto-ja-asteet.html');
  const standalone = read('oppi/soinnut/sointukierto-ja-asteet.html');
  const topic = read('oppi/soinnut/index.html');
  expect(markup).toContain('data-sointuharjoitus="asteet"');
  expect(markup).toContain('I–V–vi–IV');
  expect(markup).toContain('Jokainen sointu kestää yhden 4/4-tahdin');
  for (const html of [standalone, topic]) {
    expect(html).toContain('data-sointuharjoitus="asteet"');
    const section = html.slice(html.indexOf('data-sointuharjoitus="asteet"'));
    const diagrams = [...section.matchAll(/<figure class="chord-diagram"><figcaption>(G|D|Em|C)<\/figcaption>/g)]
      .map(([, name]) => name);
    expect(diagrams.slice(0, 4)).toEqual(['G', 'D', 'Em', 'C']);
    expect(section).toContain('G-duurin seitsemän kolmisointua');
    expect(section).toContain('F♯dim');
  }
});

it('06 sointukierto säilyttää neljä vapaasti vaihdettavaa, ei-lukittua vihjenäkymää', () => {
  const source = read('tools/oppimiskartta/sisallot/soinnut/sama-kierto-vahemmilla-vihjeilla.html');
  const page = read('oppi/soinnut/sama-kierto-vahemmilla-vihjeilla.html');
  const topic = read('oppi/soinnut/index.html');
  for (const markup of [source, page, topic]) {
    const section = markup.slice(markup.indexOf('data-sointuharjoitus="vihjeet"'));
    for (const mode of ['soinnut', 'asteet', 'tahdit', 'ilman']) {
      expect(section).toContain('data-vihje-mode="' + mode + '"');
    }
    expect(section).toContain('data-vihje-play');
    expect(section).toContain('data-vihje-kartta');
    expect(section).toContain('voit palata helpompaan näkymään milloin vain');
    expect(section).not.toContain('data-requires-completed');
  }
  expect(page).toContain('data-study-item="harjoitus:sama-kierto-vahemmilla-vihjeilla"');
  expect(topic).toContain('data-study-attempt-status="harjoitus:sama-kierto-vahemmilla-vihjeilla"');
  expect(page).toContain('G–D–Em–C');
});

it('05 C–G–Am–F käyttää oikean F-duurin valmista graafista otetta', () => {
  const src = read('tools/oppimiskartta/sisallot/soinnut/siirra-sama-rakenne.html');
  const page = read('oppi/soinnut/siirra-sama-rakenne.html');
  const topic = read('oppi/soinnut/index.html');
  expect(src).toContain('G–D–Em–C');
  expect(src).toContain('C–G–Am–F');
  expect(src).toContain('I–V–vi–IV');
  expect(src).toContain('<!-- sointukaaviot:osa-3#harmoninen-kentta F -->');
  const diagramStart = page.indexOf('<div class="chord-diagrams">');
  const diagrams = page.slice(diagramStart, page.indexOf('</div>', diagramStart));
  expect([...diagrams.matchAll(/<figure class="chord-diagram"><figcaption>([^<]+)<\/figcaption>/g)]
    .map(([, chord]) => chord)).toEqual(['C', 'G', 'Am', 'F']);
  expect(diagrams).toContain('<code>xx3211</code>');
  expect(diagrams).not.toContain('<figcaption>Fmaj7</figcaption>');
  expect(topic).toContain('data-study-attempt-status="harjoitus:siirra-sama-rakenne"');
  expect(page).toContain('data-study-item="harjoitus:siirra-sama-rakenne"');
});


it('02:n D/Dm käyttää F♯4:n rinnalla aitoa F4-näytettä ja säilyttää E/Em-arvauksen', () => {
  const src = read('tools/oppimiskartta/sisallot/soinnut/yksi-savel-muuttaa-sointua.html');
  const page = read('oppi/soinnut/yksi-savel-muuttaa-sointua.html');
  const topic = read('oppi/soinnut/index.html');
  const audio = read('assets/sointuharjoitus.js');
  expect(src).toContain('D–F♯–A');
  expect(src).toContain('D–F–A');
  expect(src).toContain('data-ddm-play="D"');
  expect(src).toContain('data-ddm-play="Dm"');
  expect(src).toContain('data-eem-play="E"');
  expect(src).toContain('data-eem-play="Em"');
  expect(src).toContain('1 · Kuuntele D ja Dm');
  expect(src).toContain('2 · Kuuntele E ja Em');
  expect(src).toContain('3 · Tunnista duuri ja molli');
  expect(src).toContain('data-eem-kaaviot');
  expect(src).toContain('data-uusi-arvaus');
  expect(audio).toContain("Dm: ['D:D3', 'G:A3', 'B:D4', 'HighE:F4']");
  expect(audio).toContain("D: ['D:D3', 'G:A3', 'B:D4', 'HighE:Fs4']");
  expect(exists('assets/audio/soinnut/INSGuitarSteel_StringHighE_Vel02_F4_01.ogg')).toBe(true);
  expect(exists('assets/audio/soinnut/INSGuitarSteel_StringHighE_Vel02_F4_01.m4a')).toBe(true);
  for (const markup of [page, topic]) {
    const section = markup.slice(markup.indexOf('data-sointuharjoitus="arvaa"'));
    expect(section).toContain('data-ddm-play="D"');
    expect(section).toContain('data-ddm-play="Dm"');
    const diagrams = [...section.matchAll(/<figure class="chord-diagram"><figcaption>(D|Dm)<\/figcaption>[\s\S]*?<code>([^<]+)<\/code><\/figure>/g)]
      .slice(0, 2).map(([, chord, fingering]) => ({ chord, fingering }));
    expect(diagrams).toEqual([
      { chord: 'D', fingering: 'xx0232' },
      { chord: 'Dm', fingering: 'xx0231' },
    ]);
    expect(section).toContain('data-arvaus-kaaviot');
  }
});
