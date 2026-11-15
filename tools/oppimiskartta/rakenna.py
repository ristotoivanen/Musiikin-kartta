#!/usr/bin/env python3
"""Rakenna Oppimiskartan pilottisivut teoriaoppaan HTML-lähteistä."""

import argparse
import hashlib
import posixpath
import re
from html import escape, unescape
from html.parser import HTMLParser
from pathlib import Path
from textwrap import dedent, indent
from urllib.parse import unquote, urlsplit, urlunsplit

ROOT = Path(__file__).resolve().parents[2]
OUTPUT = 'oppi/savelnimet'
TOPIC = 'Sävelnimet ja musiikin lukeminen'
MAP = '../../index.html#aihe-nuotit'
GUITAR = ('kitaran-kielet-ja-sointumerkinnat', 'Kitaran kielet ja sointumerkinnät')
INTERVALS = ('savelet-ja-intervallit', 'Sävelet ja intervallit')
PRACTICE = ('siirra-yhta-sormea', 'Siirrä yhtä sormea')


class SectionFinder(HTMLParser):
    """Poimi kokonainen lähde-elementti säilyttäen myös sen sisäinen HTML."""

    def __init__(self, source, tag, attribute, value):
        super().__init__(convert_charrefs=False)
        self.source = source
        self.selector = (tag, attribute, value)
        self.lines = [0, *(match.end() for match in re.finditer('\n', source))]
        self.depth = 0
        self.fragments = []
        self.feed(source)
        self.close()

    def handle_starttag(self, tag, attrs):
        expected, attribute, value = self.selector
        if tag == expected:
            if self.depth:
                self.depth += 1
            elif dict(attrs).get(attribute) == value:
                line, column = self.getpos()
                start = self.lines[line - 1]
                self.start = start if not self.source[start:start + column].strip() else start + column
                self.depth = 1

    def handle_endtag(self, tag):
        if tag != self.selector[0] or not self.depth:
            return
        self.depth -= 1
        if not self.depth:
            line, column = self.getpos()
            end = self.source.index('>', self.lines[line - 1] + column) + 1
            self.fragments.append(dedent(self.source[self.start:end]))


def element(source, tag, attribute, value):
    fragments = SectionFinder(source, tag, attribute, value).fragments
    if len(fragments) != 1:
        raise ValueError(f'Odotettiin yhtä lähde-elementtiä: {tag}[{attribute}="{value}"]')
    return fragments[0]


def rebase(markup, source):
    """Säilytä lähdeviitteet, äänet ja ankkurit erillisellä sivulla."""
    anchors = set(re.findall(r'\sid="([^"]+)"', markup))

    def replace(match):
        value = urlsplit(unescape(match[2]))
        if value.scheme or value.netloc or value.path.startswith('/'):
            return match[0]
        if not value.path and not value.query and unquote(value.fragment) in anchors:
            return match[0]
        target = posixpath.join(posixpath.dirname(source), value.path) if value.path else source
        path = posixpath.relpath(target, OUTPUT)
        if value.path.endswith('/'):
            path += '/'
        return f'{match[1]}="{escape(urlunsplit(("", "", path, value.query, value.fragment)))}"'

    return re.sub(r'(?<=\s)(href|src)="([^"]+)"', replace, markup)


def promote_headings(markup, levels):
    return re.sub(r'(</?h)([2-6])(?=[\s>])',
                  lambda match: f'{match[1]}{max(1, int(match[2]) - levels)}', markup)


def stylesheet(path):
    version = hashlib.sha256((ROOT / path).read_bytes()).hexdigest()[:10]
    return f'  <link rel="stylesheet" href="../../{path}?v={version}">'


def render(title, content, nav, *, topic_home=False, chapter=None):
    styles = '\n'.join(stylesheet(path) for path in ('book/reader.css', 'assets/paavalikko.css', 'assets/oppi.css'))
    parent = '' if topic_home else f'\n        <li><a href="index.html">{TOPIC}</a></li>'
    footer = '<a href="../../book/index.html">Teoriaoppaan kaikki osat</a>' if topic_home else f'<a href="index.html">{TOPIC}</a>'
    progress = f' data-theory-chapter="{chapter}"' if chapter else ''
    script = '\n  <script src="../../assets/edistyminen.js"></script>' if chapter else ''
    return f'''<!doctype html>
<!-- Muodostettu komennolla npm run build:oppimiskartta. -->
<html lang="fi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{escape(title)} – Musiikin kartta</title>
{styles}
</head>
<body>
  <header class="site-top">
{indent(nav, '    ')}
  </header>
  <main class="frame study-page"{progress}>
    <nav class="study-path" aria-label="Sijainti">
      <ol role="list">
        <li><a href="{MAP}">Oppimiskartta</a></li>{parent}
      </ol>
    </nav>
{indent(content, '    ')}
  </main>
  <footer class="site-footer frame study-footer">
    <a href="{MAP}">Takaisin Oppimiskarttaan</a>
    {footer}
  </footer>{script}
</body>
</html>
'''


def choice(item, description):
    slug, title = item
    return (f'<li><a href="{slug}.html"><strong>{title}</strong>'
            f'<span>{description}</span></a></li>')


def steps(previous=None, following=None):
    links = []
    if previous:
        links.append(f'<a rel="prev" href="{previous[0]}.html">Edellinen · {previous[1]}</a>')
    if following:
        links.append(f'<a rel="next" href="{following[0]}.html">Seuraava · {following[1]}</a>')
    return '<nav class="study-steps" aria-label="Edellinen ja seuraava sisältö">\n  ' + '\n  '.join(links) + '\n</nav>'


def pages():
    one_path = 'book/osa-1.html'
    two_path = 'book/osa-2.html'
    part_one = (ROOT / one_path).read_text(encoding='utf-8')
    part_two = (ROOT / two_path).read_text(encoding='utf-8')
    nav = rebase(element(part_two, 'nav', 'aria-label', 'Päävalikko'), two_path)

    topic = f'''<h1>{TOPIC}</h1>
<p class="lead">Opettele lukemaan kitaran sointumerkintöjä ja tunnistamaan sävelten välejä.</p>
<section aria-labelledby="teoria">
  <h2 id="teoria">Teoria</h2>
  <ul class="study-choices" role="list">
    {choice(GUITAR, 'Lue kielten nimet ja sointukaavio. Kokeile ensimmäistä G-otetta.')}
    {choice(INTERVALS, 'Mittaa sävelten välejä ja kuuntele, miten terssi muuttaa soinnun.')}
  </ul>
</section>
<section aria-labelledby="harjoitukset">
  <h2 id="harjoitukset">Harjoitus</h2>
  <ul class="study-choices" role="list">
    {choice(PRACTICE, 'Soita C-duuri ja C-molli vaihtamalla yhtä nauhaa.')}
  </ul>
</section>'''

    guitar_source = re.search(r'<!-- oppisisalto:kitaran-kielet-ja-sointumerkinnat -->\n(.*?)\s*'
                              r'<!-- /oppisisalto:kitaran-kielet-ja-sointumerkinnat -->', part_one, re.S)
    if not guitar_source:
        raise ValueError('Kitaran merkintöjen lähdettä ei löytynyt osasta 1.')
    guitar = (f'<h1>{GUITAR[1]}</h1>\n{rebase(dedent(guitar_source[1]), one_path)}\n'
              '<p><a href="../../book/osa-1.html#lisalukeminen">Lähteet teoriaoppaassa</a></p>\n'
              + steps(following=INTERVALS))

    lesson = rebase(element(part_two, 'section', 'id', INTERVALS[0]), two_path)
    sources = rebase(element(part_two, 'aside', 'aria-labelledby', 'lisalukeminen'), two_path)
    intervals = f'{promote_headings(lesson, 1)}\n{sources}\n{steps(GUITAR, PRACTICE)}'

    task = rebase(element(part_two, 'aside', 'data-oppisisalto', PRACTICE[0]), two_path)
    task = promote_headings(task, 2).replace('<aside ', '<section ', 1).removesuffix('</aside>') + '</section>'
    practice = (task + '\n<p><a href="savelet-ja-intervallit.html#terssi-kuvaus">'
                'Kuuntele duuri- ja molliesimerkki</a></p>\n' + steps(previous=INTERVALS))
    return {
        'index.html': render(TOPIC, topic, nav, topic_home=True),
        f'{GUITAR[0]}.html': render(GUITAR[1], guitar, nav),
        f'{INTERVALS[0]}.html': render(INTERVALS[1], intervals, nav, chapter=INTERVALS[0]),
        f'{PRACTICE[0]}.html': render(PRACTICE[1], practice, nav),
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--tarkista', action='store_true', help='tarkista tulokset kirjoittamatta tiedostoja')
    check = parser.parse_args().tarkista
    directory = ROOT / OUTPUT
    stale = []
    for name, html in pages().items():
        path = directory / name
        if path.exists() and path.read_text(encoding='utf-8') == html:
            continue
        if check:
            stale.append(path.relative_to(ROOT))
        else:
            directory.mkdir(parents=True, exist_ok=True)
            path.write_text(html, encoding='utf-8')
    for path in stale:
        print(f'Päivitä {path} komennolla npm run build:oppimiskartta')
    return bool(stale)


if __name__ == '__main__':
    raise SystemExit(main())
