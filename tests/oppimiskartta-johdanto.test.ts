// Oppimiskartan numeroimaton johdantoharjoitus (MK-20261117-01-G1).
// Johdannolla on oma osoite ja suoritustunniste, mutta se ei kuulu aiheen numerointiin,
// edellinen/seuraava-järjestykseen eikä aiheen N/N-laskuriin.
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const read = (file: string) => readFileSync(new URL('../' + file, import.meta.url), 'utf8');
const INTRO = 'oppi/rytmi/ensimmaiset-nelja-iskua.html';
const INTRO_ID = 'harjoitus:ensimmaiset-nelja-iskua';
const RHYTHM = [
  ['pulssi-ja-komppi', 'pulssi-ja-komppi', 'Oppitunti'],
  ['kuuntele-pulssi', 'harjoitus:kuuntele-pulssi', 'Harjoitus'],
  ['alas-ylos-yhdella-soinnulla', 'harjoitus:alas-ylos-yhdella-soinnulla', 'Harjoitus'],
  ['kaksi-sointua-yhdessa-tahdissa', 'harjoitus:kaksi-sointua-yhdessa-tahdissa', 'Harjoitus'],
] as const;
const mainTag = (html: string) => html.match(/<main\b[^>]+>/)![0];

describe('numeroimaton johdantoharjoitus', () => {
  it('johdannolla on pysyvä osoite, oma tunniste ja tavallinen tehty-painike ilman numeroa', () => {
    const html = read(INTRO);
    const main = mainTag(html);
    expect(main).toContain(`data-study-item="${INTRO_ID}"`);
    expect(main).toContain('data-study-kind="harjoitus"');
    expect(main).toMatch(/\sdata-study-intro[\s>]/);
    expect(main).not.toContain('data-topic-items=');
    expect(html).toContain('<p class="study-meta">Johdantoharjoitus</p>');
    expect(html).toContain('<h1>Ensimmäiset neljä iskua</h1>');
    expect(html).not.toMatch(/Harjoitus \d\d \/ \d\d/);
    expect(html.match(/class="done-toggle"/g)).toHaveLength(1);
    expect(html).toContain('Merkitse harjoitus tehdyksi');
    // Paikkamerkki: ei ääniä eikä harjoitusvaiheita.
    expect(html).not.toContain('<audio');
    expect(html).toContain('Harjoitus on vielä tekeillä.');
    // Johdanto ohjaa nykyiseen ensimmäiseen oppituntiin ja aiheeseen.
    expect(html).toContain('<a href="pulssi-ja-komppi.html" rel="next">Seuraava: Pulssi ja komppi');
    expect(html).not.toContain('rel="prev"');
    expect(html).toContain('<a href="index.html" class="study-step-back">');
  });

  it('johdanto on Rytmi-aiheen ensimmäinen suositus, ja numeroidut sisällöt pysyvät 01–04', () => {
    const topic = read('oppi/rytmi/index.html');
    const intro = topic.indexOf('<a class="study-intro" id="valinta-ensimmaiset-nelja-iskua" href="ensimmaiset-nelja-iskua.html">');
    expect(intro).toBeGreaterThan(-1);
    expect(intro).toBeLessThan(topic.indexOf('class="study-card-groups"'));
    expect(topic.match(/Aloita tästä/g)).toHaveLength(1);
    expect(topic).toContain(`data-study-intro-status="${INTRO_ID}"`);
    // Johdanto ei ole laskettava kortti.
    expect([...topic.matchAll(/data-study-status="([^"]+)"/g)].map(([, id]) => id)).toEqual(RHYTHM.map(([, id]) => id));
    const numbered = [...topic.matchAll(/<a class="study-choice" id="valinta-([^"]+)"[^>]*><span class="study-number" aria-hidden="true">(\d\d)<\/span>/g)];
    expect(numbered.map(([, slug, number]) => [slug, number])).toEqual(RHYTHM.map(([slug], index) => [slug, String(index + 1).padStart(2, '0')]));
    for (const [index, [slug, , kind]] of RHYTHM.entries()) {
      const html = read(`oppi/rytmi/${slug}.html`);
      expect(html, slug).toContain(`<p class="study-meta">${kind} 0${index + 1} / 04`);
      expect(html, slug).not.toContain('ensimmaiset-nelja-iskua');
    }
    // Aiheen viimeinen sivu laskee edelleen neljä sisältöä.
    expect(mainTag(read('oppi/rytmi/kaksi-sointua-yhdessa-tahdissa.html')))
      .toContain(`data-topic-items="${RHYTHM.map(([, id]) => id).join(' ')}"`);
  });

  it('etusivun suositeltu aloitus on kokonaan generoitu ja osoittaa johdantoon', () => {
    const home = read('index.html');
    const start = home.match(/<p class="start-here">([\s\S]*?)<\/p>/)![1];
    const generated = start.match(/<!-- oppimiskartta:aloitus -->([\s\S]*?)<!-- \/oppimiskartta:aloitus -->/)![1];
    // Kappaleessa ei ole generoidun lohkon ulkopuolista tekstiä.
    expect(start.replace(/<!--[\s\S]*?-->/g, '').trim()).toBe(generated.trim());
    expect(generated.trim()).toBe(
      'Suositeltu aloitus: <a href="oppi/rytmi/ensimmaiset-nelja-iskua.html" data-return-topic="aihe-rytmi">Ensimmäiset neljä iskua</a>');
    // Etusivun Rytmi-kortti laskee edelleen vain neljä numeroitua sisältöä.
    const card = home.match(/<a class="topic-card" id="aihe-rytmi"[^>]+data-study-items="([^"]+)"/)![1];
    expect(card.split(' ')).toEqual(RHYTHM.map(([, id]) => id));
    expect(home).not.toContain(INTRO_ID);
  });

  it('johdanto muuttaa generaattorin tuloksista vain etusivun, Rytmi-aiheen ja oman sivunsa', () => {
    // Muodostetaan sivut samalla generaattorilla myös ilman johdantoa ja vanhalla aloituksella.
    const generator = fileURLToPath(new URL('../tools/oppimiskartta/rakenna.py', import.meta.url));
    const script = `
import importlib.util, json, sys
spec = importlib.util.spec_from_file_location('rakenna', sys.argv[1])
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
current = module.pages()
config = json.loads(module.CONFIG.read_text(encoding='utf-8'))
for topic in config['topics']:
    topic.pop('intro', None)
config['start']['page'] = 'rytmi/kuuntele-pulssi'
class Config:
    parent = module.CONFIG.parent
    def read_text(self, encoding=None):
        return json.dumps(config)
module.CONFIG = Config()
previous = module.pages()
print(json.dumps(sorted(name for name in set(current) | set(previous) if current.get(name) != previous.get(name))))
`;
    const changed = JSON.parse(execFileSync('python3', ['-c', script, generator], { encoding: 'utf8' }));
    expect(changed).toEqual(['index.html', INTRO, 'oppi/rytmi/index.html']);
  });

  it('generaattori hyväksyy johdannon vain tavallisessa aiheessa ja erillisenä sisältönä', () => {
    const config = JSON.parse(read('tools/oppimiskartta/aiheet.json'));
    const withIntro = config.topics.filter((topic: { intro?: unknown }) => topic.intro);
    expect(withIntro.map((topic: { slug: string }) => topic.slug)).toEqual(['rytmi']);
    expect(Object.keys(withIntro[0].intro).sort()).toEqual(['goal', 'standalone', 'title']);
    expect(config.start).toEqual({ page: 'rytmi/ensimmaiset-nelja-iskua', lead: 'Suositeltu aloitus:' });
    const generator = read('tools/oppimiskartta/rakenna.py');
    expect(generator).toContain('kertausaiheella ei voi olla johdantoharjoitusta');
  });

  it('edistymisen tallennus käyttää johdannolle samaa avainta eikä laske sitä aiheen laskuriin', () => {
    const js = read('assets/edistyminen.js');
    expect(js).toContain("const KEY = 'musiikin-kartta:luvut';");
    // Samat tallennusavaimet kuin ennen johdantoa: uutta avainta ei ole.
    expect([...new Set(js.match(/'musiikin-kartta:[^']+'/g))].sort()).toEqual([
      "'musiikin-kartta:aihenakyma'", "'musiikin-kartta:harjoittelu'", "'musiikin-kartta:luvut'", "'musiikin-kartta:tehdyt'",
    ]);
    expect(js).toContain("[data-study-intro-status]");
  });
});
