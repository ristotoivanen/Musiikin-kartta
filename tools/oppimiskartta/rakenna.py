#!/usr/bin/env python3
"""Muodosta Oppimiskartan staattiset sivut aiheluettelosta ja teoriaoppaasta."""

import argparse
import hashlib
import json
import posixpath
import re
from dataclasses import dataclass
from html import escape, unescape
from html.parser import HTMLParser
from pathlib import Path
from textwrap import dedent, indent
from urllib.parse import parse_qs, unquote, urlsplit, urlunsplit

ROOT = Path(__file__).resolve().parents[2]
CONFIG = Path(__file__).with_name('aiheet.json')
GENERATED = '<!-- Muodostettu komennolla npm run build:oppimiskartta. -->'
VOID = set('area base br col embed hr img input link meta param source track wbr'.split())
TOOLS = {'kitaraharjoittelija.html', 'otelautaharjoittelija.html', 'riffikaiku.html', 'pelit/ensikeikka/index.html'}
SLUG = re.compile('[a-z0-9]+(?:-[a-z0-9]+)*')


@dataclass
class Element:
    tag: str
    attrs: dict
    start: int
    inner: int
    parent: object
    close: int
    end: int

    def has_class(self, name):
        return name in self.attrs.get('class', '').split()


class Html(HTMLParser):
    """Tunnista lähde-elementit ja säilytä niiden alkuperäinen merkintä."""

    def __init__(self, source, name):
        super().__init__(convert_charrefs=False)
        self.source = source
        self.name = name
        self.lines = [0, *(match.end() for match in re.finditer('\n', source))]
        self.nodes = []
        self.stack = []
        self.feed(source)
        self.close()
        if self.stack:
            raise ValueError(f'{name}: sulkematon <{self.stack[-1].tag}>')

    def position(self):
        line, column = self.getpos()
        return self.lines[line - 1] + column

    def start_element(self, tag, attrs, closed):
        start = self.position()
        inner = start + len(self.get_starttag_text())
        node = Element(tag, dict(attrs), start, inner, self.stack[-1] if self.stack else None, inner, inner)
        self.nodes.append(node)
        if not (closed or tag in VOID):
            self.stack.append(node)

    def handle_starttag(self, tag, attrs):
        self.start_element(tag, attrs, False)

    def handle_startendtag(self, tag, attrs):
        self.start_element(tag, attrs, True)

    def handle_endtag(self, tag):
        if not self.stack or self.stack[-1].tag != tag:
            line, _ = self.getpos()
            raise ValueError(f'{self.name}:{line}: odottamaton </{tag}>')
        node = self.stack.pop()
        node.close = self.position()
        node.end = self.source.index('>', node.close) + 1

    def one(self, attribute, value):
        matches = [node for node in self.nodes if node.attrs.get(attribute) == value]
        if len(matches) != 1:
            raise ValueError(f'{self.name}: odotettiin yhtä [{attribute}="{value}"], löytyi {len(matches)}')
        return matches[0]

    def children(self, node):
        return [child for child in self.nodes if child.parent is node]

    def text(self, node):
        return ' '.join(unescape(re.sub('<[^>]+>', '', self.source[node.inner:node.close])).split())

    def fragment(self, node, changes=()):
        # Ota sisennys mukaan, jotta koko lohko voidaan siistiä muuttamatta sen sisältöä.
        line_start = self.source.rfind('\n', 0, node.start) + 1
        start = line_start if not self.source[line_start:node.start].strip() else node.start
        parts = []
        for first, last, replacement in sorted(changes):
            if not start <= first <= last <= node.end:
                raise ValueError(f'{self.name}: päällekkäinen tai virheellinen poiminta')
            parts.extend((self.source[start:first], replacement))
            start = last
        parts.append(self.source[start:node.end])
        return dedent(''.join(parts)).strip()


@dataclass
class Page:
    path: str
    title: str
    source: str
    markup: str
    goal: str = ''
    chapter: str = ''
    chapter_number: str = ''
    parent: object = None


def rel(target, output):
    return posixpath.relpath(target, posixpath.dirname(output) or '.')


def link(url, label, attrs='', *, attrib='href'):
    return f'<a {attrib}="{escape(url)}"{attrs}>{escape(label)}</a>'


def stylesheet(path, output):
    version = hashlib.sha256((ROOT / path).read_bytes()).hexdigest()[:10]
    return f'  <link rel="stylesheet" href="{rel(path, output)}?v={version}">'


def part_anchor(ref):
    part, anchor = ref.split('#', 1)
    if not re.fullmatch(r'osa-\d+', part) or not SLUG.fullmatch(anchor):
        raise ValueError(f'Virheellinen oppisisällön lähde {ref}')
    return f'book/{part}.html', anchor


def target_path(topic, slug):
    if not SLUG.fullmatch(slug):
        raise ValueError(f'Virheellinen sivutunniste {slug}')
    return f'oppi/{topic["slug"]}/{slug}.html'


def exercise_title(book, node):
    children = book.children(node)
    if not children or children[0].tag != 'h3':
        raise ValueError(f'{book.name}: harjoituksen {node.attrs} alussa pitää olla h3-otsikko')
    title = book.text(children[0])
    if not title.startswith('Harjoitus · '):
        raise ValueError(f'{book.name}: {title} ei ole Harjoitus-otsikko')
    return children[0], title.removeprefix('Harjoitus · ')


def exercises(book, chapter, topic):
    for node in book.nodes:
        if not chapter.inner <= node.start < chapter.close:
            continue
        if node.tag not in {'aside', 'div'} or not (node.has_class('practice') or node.has_class('ear-trainer')):
            continue
        slug = node.attrs.get('data-oppisisalto')
        if not slug or book.one('data-oppisisalto', slug) is not node:
            raise ValueError(f'{book.name}: harjoitukselta puuttuu yksilöllinen data-oppisisalto ({node.attrs})')
        heading, title = exercise_title(book, node)
        content = book.fragment(node, [(heading.start, heading.end, '')])
        if node.tag == 'aside':
            content = re.sub(r'^<aside\b', '<div', content).removesuffix('</aside>') + '</div>'
        yield node, Page(target_path(topic, slug), title, book.name, content)


def excerpt_range(book, key):
    start = f'<!-- oppisisalto:{key} -->'
    end = f'<!-- /oppisisalto:{key} -->'
    if book.source.count(start) != 1 or book.source.count(end) != 1:
        raise ValueError(f'{book.name}: poiminnan {key} rajat puuttuvat tai toistuvat')
    begin = book.source.index(start)
    return begin, book.source.index(end, begin) + len(end)


def lesson_pages(topic, item, books, excerpts):
    source, key = part_anchor(item['source'])
    book = books[source]
    chapter = book.one('id', key)
    if 'excerpt' in item:
        slug = item['excerpt']
        start, end = excerpt_range(book, slug)
        if not start < chapter.start < chapter.end < end:
            raise ValueError(f'{source}: {key} puuttuu poiminnasta {slug}')
        content = book.source[start:end].split('\n', 1)[1].rsplit('\n', 1)[0]
        return [Page(target_path(topic, slug), item['title'], source, dedent(content), item['goal'])]

    if chapter.tag != 'section' or not chapter.has_class('chapter'):
        raise ValueError(f'{item["source"]} ei ole teoriaoppaan luku')
    children = book.children(chapter)
    number = next(node for node in children if node.has_class('chapter-number'))
    heading = next(node for node in children if node.tag == 'h2')
    match = re.fullmatch(r'Luku (\d+)', book.text(number))
    if not match:
        raise ValueError(f'{item["source"]}: lukunumero puuttuu')
    page = Page(target_path(topic, key), book.text(heading), source, '', item['goal'], key, match[1])
    changes = [(number.start, heading.end, '')]
    for begin, end, destination in excerpts.get(source, []):
        if chapter.inner < begin < end < chapter.close:
            changes.append((begin, end, f'<p class="study-practice-link">{link(rel(destination.path, page.path), destination.title, attrib="data-oppilinkki")}</p>'))
    tasks = []
    for node, exercise in exercises(book, chapter, topic):
        exercise.parent = page
        tasks.append(exercise)
        preview = link(rel(exercise.path, page.path), 'Harjoitus · ' + exercise.title, attrib='data-oppilinkki')
        changes.append((node.start, node.end, f'<p class="study-practice-link">{preview}</p>'))
    page.markup = re.sub(r'(</?h)3(?=[\s>])', r'\g<1>2', book.fragment(chapter, changes))
    return [page, *tasks]


def index_targets(pages):
    """Vanhan kirjan ankkurista sen sisältävälle itsenäiselle sivulle."""
    targets = {}
    for page in pages:
        for node in Html(page.markup, page.path).nodes:
            anchor = node.attrs.get('id')
            if not anchor:
                continue
            key = (page.source, anchor)
            if key in targets:
                raise ValueError(f'{page.source}#{anchor} kuuluu kahdelle sisältösivulle')
            targets[key] = page.path
    return targets


def scoped_url(target, query, fragment, output, topic):
    if target in TOOLS and topic and 'aihe' not in parse_qs(query):
        query = (query + '&' if query else '') + 'aihe=' + topic['anchor']
    return urlunsplit(('', '', rel(target, output), query, fragment))


def rebase(markup, source, output, targets, topic=None):
    local_ids = {unescape(anchor) for anchor in re.findall(r'\sid="([^"]+)"', markup)}

    def rewrite(match):
        value = urlsplit(unescape(match[2]))
        if value.scheme or value.netloc or value.path.startswith('/'):
            return match[0]
        anchor = unquote(value.fragment)
        # Jo muodostettu linkki on kohtaan, josta poiminta tai harjoitus irrotettiin.
        if match[1] == 'data-oppilinkki':
            return 'href="' + match[2] + '"'
        target = posixpath.normpath(posixpath.join(posixpath.dirname(source), value.path)) if value.path else source
        if value.path.endswith('/'):
            target += '/index.html'
        if not value.query and anchor:
            if target == source and anchor in local_ids:
                return f'{match[1]}="#{escape(value.fragment)}"'
            target = targets.get((target, anchor), target)
        url = scoped_url(target, value.query, value.fragment, output, topic)
        return f'{match[1]}="{escape(url)}"'

    return re.sub(r'(?<=\s)(href|src|data-oppilinkki)="([^"]+)"', rewrite, markup)


def play_sources(book, key):
    node = book.one('id', key)
    while node and node.tag != 'figure':
        node = node.parent
    if node is None or not node.has_class('listen'):
        raise ValueError(f'{book.name}#{key}: harjoituksen ääniesimerkki ei ole figure.listen')
    return book.fragment(node)


def section(title, body):
    return f'<section class="study-group"><h2>{escape(title)}</h2>\n{indent(body, "  ")}\n</section>'


def listed(items, *, ordered=False):
    tag, attrs = ('ol', 'class="study-choices" role="list"') if ordered else ('ul', 'class="study-links"')
    return f'<{tag} {attrs}>\n' + '\n'.join(f'  <li>{item}</li>' for item in items) + f'\n</{tag}>'


def choice(page, index, first):
    number = f'<span class="study-number" aria-hidden="true">{index:02}</span>'
    title = ('Harjoitus · ' if page.parent else '') + page.title
    goal = f'<span class="study-description">{escape(page.goal)}</span>' if page.goal else ''
    start = '<span class="study-start">Aloita tästä</span>' if first else ''
    status = f'<span data-study-status="{page.chapter}" class="study-status" hidden></span>' if page.chapter else ''
    style = ' class="study-choice study-choice-practice"' if page.parent else ' class="study-choice"'
    return (f'<a{style} id="valinta-{Path(page.path).stem}" href="{posixpath.basename(page.path)}">{number}<span class="study-choice-label">'
            f'{start}<strong>{escape(title)}</strong>{goal}{status}</span><span aria-hidden="true">→</span></a>')


def topic_home(topic, lookup):
    parts = [f'<p class="study-meta">Aihe {topic["number"]:02}</p>',
             f'<h1>{escape(topic["title"])}</h1>', f'<p class="lead">{escape(topic["lead"])}</p>',
             '<p class="study-status" data-study-total hidden></p>']
    step = 0
    for group in topic['groups']:
        links = []
        for page in group['pages']:
            step += 1
            links.append(choice(page, step, step == 1))
        parts.append(section(group['title'], listed(links, ordered=True)))
    if topic.get('tools'):
        links = []
        for tool in topic['tools']:
            url = urlsplit(tool['href'])
            href = scoped_url(url.path, url.query, url.fragment, topic['path'], topic)
            links.append(link(href, tool['title']))
        parts.append(section('Harjoittelijat ja työkalut', listed(links)))
    related = [link(rel(lookup[key][0], topic['path']), lookup[key][1]) for key in topic['related']]
    parts.append(section('Tutki myös', listed(related)))
    return '\n'.join(parts)


def sources(book, output):
    candidates = [node for node in book.nodes if node.tag == 'aside' and node.has_class('sources')]
    if len(candidates) > 1:
        raise ValueError(f'{book.name}: useampi lähdeosio')
    if not candidates:
        return ''
    html = rebase(book.fragment(candidates[0]), book.name, output, {})
    return f'\n{html}'


def page_content(page, topic, step, books, targets, audio):
    kind = 'Harjoitus' if page.parent else 'Oppitunti'
    chapter = f' <span>Teoriaoppaan luku {page.chapter_number}</span>' if page.chapter else ''
    parts = [f'<p class="study-meta">{kind} {step:02}{chapter}</p>', f'<h1>{escape(page.title)}</h1>']
    if page.goal:
        parts.append(f'<p class="lead">{escape(page.goal)}</p>')
    if page.parent:
        url = rel(page.parent.path, page.path)
        sound = audio.get(Path(page.path).stem)
        if sound:
            part, key = part_anchor(sound)
            figure = play_sources(books[part], key)
            parts.append(rebase(figure, part, page.path, targets))
    markup = rebase(page.markup, page.source, page.path, targets, topic)
    if 'data-korvatreeni=' in markup:
        markup = re.sub(r'<p class="et-fallback">[^<]*</p>',
                        '<p class="et-fallback">Kysymysten soittaminen tarvitsee JavaScriptin ja selaimen äänituen.</p>',
                        markup)
    parts.append(markup)
    if page.parent:
        parts.append('<p class="study-guide">' + link(url, 'Ohje ja esimerkit · ' + page.parent.title) + '</p>')
    return '\n'.join(parts)


def steps(sequence, index):
    links = []
    for offset, label, relation in [(-1, 'Edellinen', 'prev'), (1, 'Seuraava', 'next')]:
        other = index + offset
        if 0 <= other < len(sequence):
            page = sequence[other]
            links.append(link(posixpath.basename(page.path), f'{label} · {page.title}', f' rel="{relation}"'))
    if not links:
        return ''
    return '\n<nav class="study-steps" aria-label="Edellinen ja seuraava sisältö">\n' + indent('\n'.join(links), '  ') + '\n</nav>'


def render(topic, content, nav, page=None):
    output = page.path if page else topic['path']
    title = page.title if page else topic['title']
    styles = '\n'.join(stylesheet(path, output) for path in ('book/reader.css', 'assets/paavalikko.css', 'assets/oppi.css'))
    path_to_map = rel('index.html', output) + '#' + topic['anchor']
    parent = f'\n        <li>{link("index.html", topic["title"])}</li>' if page else ''
    footer = link('index.html', topic['title']) if page else link(rel('book/index.html', output), 'Teoriaoppaan kaikki osat')
    progress = f' data-theory-chapter="{page.chapter}"' if page and page.chapter else ''
    scripts = ['assets/oppimiskartta.js']
    if page is None or page.chapter:
        scripts.append('assets/edistyminen.js')
    if page and 'data-korvatreeni=' in page.markup:
        scripts += ['assets/harjoitustausta.js', 'assets/korvatreeni.js']
    scripts = '\n'.join(f'  <script src="{rel(path, output)}"></script>' for path in scripts)
    return f'''<!doctype html>
{GENERATED}
<html lang="fi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{escape(title)} – Musiikin kartta</title>
{styles}
</head>
<body>
  <a class="study-skip" href="#oppi-sisalto">Siirry sisältöön</a>
  <header class="site-top">
{indent(rebase(nav, "book/osa-2.html", output, {}), '    ')}
  </header>
  <main class="frame study-page" id="oppi-sisalto"{progress}>
    <nav class="study-path" aria-label="Sijainti">
      <ol role="list">
        <li>{link(path_to_map, 'Oppimiskartta')}</li>{parent}
      </ol>
    </nav>
{indent(content, '    ')}
  </main>
  <footer class="site-footer frame study-footer">
    {link(path_to_map, 'Takaisin Oppimiskarttaan')}
    {footer}
  </footer>
{scripts}
</body>
</html>
'''


def replace_block(source, start, end, value, name):
    if source.count(start) != 1 or source.count(end) != 1:
        raise ValueError(f'{name}: muodostettavan lohkon rajat puuttuvat tai toistuvat')
    begin = source.index(start) + len(start)
    closing = source.rfind('\n', begin, source.index(end, begin)) + 1
    if closing <= begin:
        raise ValueError(f'{name}: lohkon on oltava omilla riveillään')
    return source[:begin] + '\n' + value + '\n' + source[closing:]


def home_grid(topics):
    cards = []
    for topic in topics:
        cards.append(f'''    <a class="topic-card" id="{topic['anchor']}" href="{topic['path']}">
      <span class="topic-number" aria-hidden="true">{topic['number']:02}</span>
      <strong class="topic-title">{escape(topic['title'])}</strong>
      <span class="topic-description">{escape(topic['summary'])}</span>
      <span class="topic-arrow" aria-hidden="true">→</span>
    </a>''')
    return '\n'.join(cards)


def collect(config, books):
    excerpts = {}
    topics = config['topics']
    all_pages = []
    for number, topic in enumerate(topics, 1):
        if not SLUG.fullmatch(topic['slug']) or not re.fullmatch(r'aihe-[a-z-]+', topic['anchor']):
            raise ValueError(f'Virheellinen aihetunniste {topic["slug"]} tai {topic["anchor"]}')
        topic['number'] = number
        topic['path'] = target_path(topic, 'index')
        for group in topic['groups']:
            for item in group['lessons']:
                if 'excerpt' in item:
                    page, = lesson_pages(topic, item, books, {})
                    begin, end = excerpt_range(books[page.source], item['excerpt'])
                    excerpts.setdefault(page.source, []).append((begin, end, page))

    for topic in topics:
        sequence = []
        for group in topic['groups']:
            group['pages'] = [page for item in group['lessons'] for page in lesson_pages(topic, item, books, excerpts)]
            sequence.extend(group['pages'])
        if not sequence:
            raise ValueError(f'{topic["title"]}: vähintään yksi oppitunti tarvitaan')
        topic['pages'] = sequence
        all_pages.extend(sequence)
    book_chapters = {(part, node.attrs['id']) for part, book in books.items() for node in book.nodes if node.has_class('chapter')}
    map_chapters = [(page.source, page.chapter) for page in all_pages if page.chapter]
    if len(map_chapters) != len(book_chapters) or set(map_chapters) != book_chapters:
        raise ValueError(f'Teoriaoppaan luku puuttuu Oppimiskartasta tai toistuu. Puuttuvat {sorted(book_chapters - set(map_chapters))}')
    paths = [topic['path'] for topic in topics] + [page.path for page in all_pages]
    if len(set(paths)) != len(paths) or len({topic['anchor'] for topic in topics}) != len(topics):
        raise ValueError('Oppimiskartassa on päällekkäisiä osoitteita tai aihetunnisteita')
    return all_pages


def pages():
    config = json.loads(CONFIG.read_text(encoding='utf-8'))
    books = {path.relative_to(ROOT).as_posix(): Html(path.read_text(encoding='utf-8'), path.relative_to(ROOT).as_posix())
             for path in sorted((ROOT / 'book').glob('osa-*.html'))}
    all_pages = collect(config, books)
    topics = config['topics']
    book = books['book/osa-2.html']
    nav = book.fragment(book.one('aria-label', 'Päävalikko'))
    lookup = {topic['slug']: (topic['path'], topic['title']) for topic in topics}
    lookup.update({page.path.removeprefix('oppi/').removesuffix('.html'): (page.path, page.title) for page in all_pages})
    targets = index_targets(all_pages)
    audio = config.get('exercise_audio', {})
    if set(audio) - {Path(page.path).stem for page in all_pages if page.parent}:
        raise ValueError('Ääniesimerkin harjoitussivu puuttuu')

    output = {}
    for topic in topics:
        output[topic['path']] = render(topic, topic_home(topic, lookup), nav)
        sequence = topic['pages']
        for index, page in enumerate(sequence):
            content = page_content(page, topic, index + 1, books, targets, audio)
            content += steps(sequence, index)
            if not page.parent:
                content += sources(books[page.source], page.path)
            output[page.path] = render(topic, content, nav, page)

    start = lookup[config['start']][0]
    chapter_paths = {page.chapter: page.path for page in all_pages if page.chapter}
    map_routes = '<script type="application/json" id="oppimisreitit">' + json.dumps(chapter_paths, ensure_ascii=False) + '</script>'
    home = (ROOT / 'index.html').read_text(encoding='utf-8')
    block = lambda key, value: replace_block(home, f'<!-- {key} -->', f'<!-- /{key} -->', value, 'index.html')
    home = block('oppimiskartta:kortit', home_grid(topics))
    home = block('oppimiskartta:aloitus', '    ' + link(start, 'Kuuntele pulssi', ' data-return-topic="aihe-rytmi"'))
    home = block('oppimiskartta:reitit', map_routes)
    output['index.html'] = home
    script_path = 'assets/oppimiskartta.js'
    script = (ROOT / script_path).read_text(encoding='utf-8')
    routes = {topic['anchor']: topic['path'] for topic in topics}
    output[script_path] = replace_block(script, '// oppimiskartta:aiheet', '// /oppimiskartta:aiheet',
                                        '  const topicPaths = ' + json.dumps(routes) + ';', script_path)
    return output


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--tarkista', action='store_true', help='tarkista tulokset kirjoittamatta tiedostoja')
    check = parser.parse_args().tarkista
    outputs = pages()
    stale = []
    for name, html in outputs.items():
        path = ROOT / name
        if path.exists() and path.read_text(encoding='utf-8') == html:
            continue
        if check:
            stale.append(name)
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(html, encoding='utf-8')
    extras = sorted(path.relative_to(ROOT).as_posix() for path in (ROOT / 'oppi').rglob('*.html')
                    if path.relative_to(ROOT).as_posix() not in outputs and GENERATED in path.read_text(encoding='utf-8'))
    for name in stale:
        print(f'Päivitä {name} komennolla npm run build:oppimiskartta')
    for name in extras:
        print(f'{name} ei enää muodostu. Tarkista vanha osoite ennen sivun poistamista.')
    return bool(stale or extras)


if __name__ == '__main__':
    raise SystemExit(main())
