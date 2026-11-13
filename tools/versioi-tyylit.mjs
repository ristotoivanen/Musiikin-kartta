// Lisää sivujen tyylitiedostolinkkeihin versiotunnisteen (?v=…) tiedoston sisällön perusteella.
//
// Cloudflare antaa CSS-tiedostoille välimuistiajaksi neljä tuntia. Ilman tunnistetta palaava
// kävijä voi saada uuden HTML-sivun ja vanhan tyylitiedoston. Tunniste muuttuu vain, kun
// tiedoston sisältö muuttuu, joten muuttumattomat tyylit pysyvät välimuistissa.
//
// Käyttö: node tools/versioi-tyylit.mjs           päivittää linkit
//         node tools/versioi-tyylit.mjs --tarkista  tulostaa vanhentuneet linkit, poistuu koodilla 1
// tests/site.test.ts tarkistaa saman, joten CSS-muutoksen jälkeen skripti pitää ajaa.
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const LINK = /(<link rel="stylesheet" href=")([^"?#]+\.css)(?:\?v=[0-9a-f]*)?(")/g;

export function pages() {
  const html = dir => readdirSync(join(ROOT, dir)).filter(f => f.endsWith('.html')).map(f => join(ROOT, dir, f));
  return [...html('.'), ...html('book')];
}

export function version(file) {
  return createHash('sha256').update(readFileSync(file)).digest('hex').slice(0, 10);
}

/** Palauttaa sivun tekstin oikein versioiduin linkein. */
export function versioned(page) {
  return readFileSync(page, 'utf8').replace(LINK, (_, start, href, end) =>
    start + href + '?v=' + version(resolve(dirname(page), href)) + end);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const check = process.argv.includes('--tarkista');
  const stale = pages().filter(page => versioned(page) !== readFileSync(page, 'utf8'));
  for (const page of stale) {
    if (check) console.log('Vanhentunut tyylitiedoston versio: ' + relative(ROOT, page));
    else writeFileSync(page, versioned(page));
  }
  if (!check) console.log(`Päivitetty ${stale.length} sivua.`);
  process.exit(check && stale.length ? 1 : 0);
}
