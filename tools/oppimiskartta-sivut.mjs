#!/usr/bin/env node
// Synkronoi Oppimiskartan 8 aihe- ja 28 lukusivua alkuperäisestä teoriaoppaasta.
// Alkuperäinen book/osa-*.html säilyy vanhojen linkkien, tulosteen ja lähteiden lähteenä.
// Käyttö: node tools/oppimiskartta-sivut.mjs [--check]
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');
const read = path => readFileSync(resolve(root, path), 'utf8');
const manifest = JSON.parse(read('assets/oppimiskartan-aiheet.json')).topics;
const styleVersion = createHash('sha256').update(read('assets/oppimiskartta-sivut.css')).digest('hex').slice(0, 10);
const escape = s => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const progress = read('assets/edistyminen.js');
const chapters = new Map();
for (const part of progress.matchAll(/\{ slug: 'osa-(\d+)',[\s\S]*?chapters: \[([\s\S]*?)\],\s*\n\s*anchors/g)) {
  for (const match of part[2].matchAll(/\['([^']+)',\s*(\d+),\s*'([^']+)'\]/g)) {
    chapters.set(Number(match[2]), { number: Number(match[2]), part: Number(part[1]), anchor: match[1], title: match[3] });
  }
}
if (chapters.size !== 28 || manifest.length !== 8) throw Error('Oppimiskartan 8 aihetta / 28 lukua eivät täsmää taitokarttaan');

const owner = new Map();
const topicOf = new Map();
for (const topic of manifest) {
  for (const item of topic.links) {
    if (item.type !== 'chapter') continue;
    if (!chapters.has(item.number) || topicOf.has(item.number)) throw Error('Luku puuttuu tai on kahdessa aiheessa: ' + item.number);
    topicOf.set(item.number, topic);
  }
}
if (topicOf.size !== 28) throw Error('Kaikkia 28 lukua ei ole sijoitettu aiheeseen');

function extractSection(html, id) {
  const start = html.indexOf('<section class="chapter" id="' + id + '">');
  if (start < 0) throw Error('Lukuankkuri puuttuu: ' + id);
  const matcher = /<\/?section\b[^>]*>/gi;
  matcher.lastIndex = start;
  let level = 0;
  for (const token of html.slice(start).matchAll(/<\/?section\b[^>]*>/gi)) {
    if (/^<\//.test(token[0])) level--; else level++;
    if (level === 0) return html.slice(start, start + token.index + token[0].length);
  }
  throw Error('Luvun section-tunniste ei sulkeudu: ' + id);
}

const sections = new Map();
for (const [number, meta] of chapters) {
  const raw = extractSection(read('book/osa-' + meta.part + '.html'), meta.anchor);
  sections.set(number, raw);
  for (const match of raw.matchAll(/\bid="([^"]+)"/g)) {
    const key = meta.part + '#' + match[1];
    if (owner.has(key)) throw Error('Kahdesti määritelty ankkuri: ' + key);
    owner.set(key, number);
  }
}
const chapterPath = number => 'luku-' + number + '.html';
function convertBookHref(raw, currentPart) {
  const match = raw.match(/^osa-(\d+)\.html#(.+)$/);
  if (!match) {
    if (raw.startsWith('#')) {
      const anchor = raw.slice(1), number = owner.get(currentPart + '#' + anchor);
      return number ? chapterPath(number) + '#' + anchor : 'osa-' + currentPart + '.html#' + anchor;
    }
    return raw;
  }
  const number = owner.get(Number(match[1]) + '#' + match[2]);
  return number ? chapterPath(number) + '#' + match[2] : raw;
}
function topicLink(item) {
  if (item.type === 'chapter') return '../book/' + chapterPath(item.number);
  const match = item.href.match(/^book\/osa-(\d+)\.html#(.+)$/);
  if (match) {
    const number = owner.get(Number(match[1]) + '#' + match[2]);
    if (number) return '../book/' + chapterPath(number) + '#' + match[2];
  }
  return '../' + item.href;
}
function nav(prefix) {
  return '<header class="site-top"><nav class="main-nav" aria-label="Päävalikko">' +
    '<a class="brand" href="' + prefix + 'index.html">Musiikin <span>kartta</span></a>' +
    '<ul><li><a href="' + prefix + 'index.html#oppimisaiheet" aria-current="true">Oppimiskartta</a></li>' +
    '<li><a href="' + prefix + 'otelautaharjoittelija.html">Otelautaopas</a></li>' +
    '<li><a href="' + prefix + 'kitaraharjoittelija.html">Kitaraharjoittelu</a></li></ul></nav></header>';
}
function topicPage(topic) {
  const theory = topic.links.filter(item => item.type === 'chapter' ||
    (item.type === 'resource' && item.href.startsWith('book/') && !item.title.startsWith('Kokeile')));
  const practice = topic.links.filter(item => !theory.includes(item));
  const list = links => '<ul class="resource-list">' + links.map(item =>
    '<li><a href="' + escape(topicLink(item)) + '">' + escape(item.title) + '</a></li>').join('\n') + '</ul>';
  const content = theory.length ? '<section aria-labelledby="teoria"><h2 id="teoria">Teoria</h2>' + list(theory) + '</section>' : '';
  const exercises = practice.length ? '<section aria-labelledby="harjoitukset"><h2 id="harjoitukset">Harjoitukset ja työkalut</h2>' + list(practice) + '</section>' : '';
  return '<!doctype html><html lang="fi"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<title>' + escape(topic.title) + ' – Oppimiskartta</title>' +
    '<link rel="stylesheet" href="../book/reader.css?v=65711fca9c">' +
    '<link rel="stylesheet" href="../assets/paavalikko.css?v=59824281af">' +
    '<link rel="stylesheet" href="../assets/oppimiskartta-sivut.css?v=' + styleVersion + '">' +
    '<script defer src="../assets/oppimiskartta.js"></script></head><body>' +
    nav('../') + '<main class="topic-page" data-topic-page="' + escape(topic.id) + '">' +
    '<nav class="breadcrumb" aria-label="Murupolku"><a href="../index.html#oppimisaiheet">← Oppimiskartta</a></nav>' +
    '<h1>' + escape(topic.title) + '</h1><p class="description">' + escape(topic.description) + '</p>' +
    content + exercises + '</main>' +
    '<footer class="site-footer frame"><a href="../index.html#oppimisaiheet">Kaikki oppimisaiheet</a></footer>' +
    '</body></html>\n';
}
function lessonPage(number) {
  const meta = chapters.get(number), topic = topicOf.get(number);
  let chapter = sections.get(number)
    .replace(/<p class="chapter-number">[\s\S]*?<\/p>/, '')
    .replace(/<h2>[^<]*<\/h2>/, '');
  chapter = chapter.replace(/\bhref="([^"]+)"/g, (full, target) => {
    const redirected = convertBookHref(target, meta.part);
    return redirected === target ? full : 'href="' + escape(redirected) + '"';
  });
  // Ulkoiset originaalilähteet pysyvät alkuperäisessä osa-sivussa sekä lukujen omissa teksteissä.
  const others = topic.links.filter(item => item.type === 'chapter' && item.number !== number);
  const next = others.map(item => '<li><a href="' + chapterPath(item.number) + '">' + escape(item.title) + '</a></li>').join('');
  const scripts = meta.part === 7 ?
    '<script src="../assets/harjoitustausta.js"></script><script src="../assets/korvatreeni.js"></script>' : '';
  const title = escape(meta.title);
  return '<!doctype html><html lang="fi"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<title>' + title + ' – Oppimiskartta</title>' +
    '<link rel="stylesheet" href="reader.css?v=65711fca9c">' +
    '<link rel="stylesheet" href="../assets/paavalikko.css?v=59824281af">' +
    '<link rel="stylesheet" href="../assets/oppimiskartta-sivut.css?v=' + styleVersion + '">' +
    '<script defer src="../assets/oppimiskartta.js"></script></head>' +
    '<body class="lesson-page">' + nav('../') +
    '<main><header class="hero"><div class="frame"><p class="part-number">Luku ' + number + '</p>' +
    '<h1>' + title + '</h1><p class="lead">' + escape(topic.title) + '</p></div></header>' +
    '<div class="reading-layout frame"><nav class="contents" aria-label="Luvun navigaatio">' +
    '<h2>Oppimiskartta</h2><a href="../aiheet/' + escape(topic.id) + '.html">← ' + escape(topic.title) + '</a>' +
    (next ? '<p>Saman aiheen muuta teoriaa:</p><ol>' + next + '</ol>' : '') + '</nav>' +
    '<article><div class="lesson-context"><p>Teoria · ' + escape(topic.title) + '</p></div>' +
    chapter + '<p class="source-reference">Luvun yhteiset lähteet ja lisäharjoitukset: ' +
    '<a href="osa-' + meta.part + '.html#' + escape(meta.anchor) + '">alkuperäinen teoriaosa ' + meta.part + '</a>.</p>' +
    '</article></div></main><footer class="site-footer frame">' +
    '<a href="../aiheet/' + escape(topic.id) + '.html">Takaisin aiheeseen</a>' +
    '<a href="../index.html#oppimisaiheet">Oppimiskartta</a></footer>' +
    scripts + '<script src="../assets/edistyminen.js"></script></body></html>\n';
}
let changed = 0;
function output(path, contents) {
  const full = resolve(root, path);
  if (check) {
    if (!existsSync(full) || read(path) !== contents) throw Error('Päivitä generoitu sivu: ' + path);
  } else {
    mkdirSync(dirname(full), { recursive: true });
    writeFileSync(full, contents);
    changed++;
  }
}
const anchorDoc = {
  _comment: 'Johdettu kanonisista book/osa-*.html -sivuista. Muodostetaan uudelleen tools/oppimiskartta-sivut.mjs -skriptillä; sisältää luvussa sijaitsevat ankkurit, jotta uudet lukusivut ovat suoraan linkitettävissä.',
  anchors: Object.fromEntries(owner)
};
output('assets/oppimiskartan-ankkurit.json', JSON.stringify(anchorDoc, null, 2) + '\n');
for (const topic of manifest) output('aiheet/' + topic.id + '.html', topicPage(topic));
for (const number of [...chapters.keys()].sort((a, b) => a - b)) output('book/' + chapterPath(number), lessonPage(number));
console.log((check ? 'Tarkistettu' : 'Päivitetty') + ' 8 aihe- ja 28 lukusivua' + (changed ? ', ' + changed + ' tiedostoa' : ''));
