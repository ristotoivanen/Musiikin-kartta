#!/usr/bin/env python3
"""Muodosta Oppimiskartan sivut aiheluettelosta, teoriaoppaasta ja erillisistä oppitunneista."""

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
# Itse tehdyn merkinnän sanamuoto (Rytmin Ydinopinnot v0.9, #116). Merkintä on aina oppijan oma
# kuittaus, ei osoitettu taito; tallennus ja tunniste (study_id) ovat samat kuin muillakin sisällöillä.
MARKS = {'kokeiltu': 'Merkitse kokeilluksi'}


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

    @property
    def study_kind(self):
        if self.chapter:
            return 'luku'
        return 'harjoitus' if self.parent else 'oppitunti'

    @property
    def study_id(self):
        return self.chapter or f'{self.study_kind}:{Path(self.path).stem}'

    # Merkinnän sanamuoto (MARKS). Viimeisenä kenttänä, jotta sijaintiparametreilla luodut sivut eivät muutu.
    mark: str = ''


def rel(target, output):
    return posixpath.relpath(target, posixpath.dirname(output) or '.')


def link(url, label, attrs='', *, attrib='href'):
    return f'<a {attrib}="{escape(url)}"{attrs}>{escape(label)}</a>'


def versioned_url(path, output):
    version = hashlib.sha256((ROOT / path).read_bytes()).hexdigest()[:10]
    return f'{rel(path, output)}?v={version}'


def stylesheet(path, output):
    return f'  <link rel="stylesheet" href="{versioned_url(path, output)}">'


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
    if 'standalone' in item:
        if 'source' in item or 'excerpt' in item:
            raise ValueError('Erillisellä oppitunnilla ei voi olla teoriakirjaviitettä')
        slug = item['standalone']
        path = target_path(topic, slug)
        source = CONFIG.parent / 'sisallot' / topic['slug'] / f'{slug}.html'
        content = source.read_text(encoding='utf-8').strip()
        if not content:
            raise ValueError(f'{source.name}: oppitunnin sisältö puuttuu')
        return [Page(path, item['title'], source.relative_to(ROOT).as_posix(), content, item['goal'])]

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


def apply_marks(topics):
    """aiheet.json: erillisen oppitunnin "mark": "kokeiltu" vaihtaa vain merkintäpainikkeen sanamuodon."""
    for topic in topics:
        for group in topic['groups']:
            for item in group['lessons']:
                if 'mark' not in item:
                    continue
                if item['mark'] not in MARKS or 'standalone' not in item:
                    raise ValueError(f'{topic["title"]}: merkintätapa {item["mark"]!r} sopii vain erilliselle oppitunnille')
                path = target_path(topic, item['standalone'])
                page, = (page for page in group['pages'] if page.path == path)
                page.mark = item['mark']


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


def choice(page, index, exercise_descriptions):
    slug = Path(page.path).stem
    number = f'<span class="study-number" aria-hidden="true">{index:02}</span>'
    title = ('Harjoitus · ' if page.parent else '') + page.title
    description = exercise_descriptions[slug] if page.parent else page.goal
    status = f'<span data-study-status="{page.study_id}" class="study-status" hidden></span>'
    return (f'<a class="study-choice" id="valinta-{slug}" href="{posixpath.basename(page.path)}">{number}'
            f'<strong class="study-title">{escape(title)}</strong>'
            f'<span class="study-choice-details"><span class="study-description">{escape(description)}</span>{status}</span>'
            '<span class="study-arrow" aria-hidden="true">→</span></a>')


def study_ids(pages):
    return ' '.join(page.study_id for page in pages)


def recap_chord_diagrams(match, books):
    source, anchor = part_anchor(match[2])
    book = books[source]
    chapter = book.one('id', anchor)
    diagrams = {}
    for figure in book.nodes:
        if not (chapter.inner <= figure.start < chapter.close and figure.has_class('chord-diagram')):
            continue
        caption = next(node for node in book.children(figure) if node.tag == 'figcaption')
        diagrams[book.text(caption)] = book.fragment(figure)
    chords = match[3].split()
    if missing := set(chords) - diagrams.keys():
        raise ValueError(f'{source}#{anchor}: sointukaavio puuttuu ({", ".join(sorted(missing))})')
    return indent('\n'.join(diagrams[chord] for chord in chords), match[1])


def recap_fret_notes():
    open_strings = (64, 59, 55, 50, 45, 40)  # Vakiovire tabulatuurin järjestyksessä, ohuin e ensin.
    natural_notes = {0: 'C', 2: 'D', 4: 'E', 5: 'F', 7: 'G', 9: 'A', 11: 'B'}
    labels = []
    for string, pitch in enumerate(open_strings, 1):
        for fret in range(1, 6):
            note = natural_notes.get((pitch + fret) % 12)
            if note:
                labels.append(f'<li style="grid-area: {string} / {fret}" '
                              f'aria-label="{string}. kieli, {fret}. nauha, {note}">{note}</li>')
    return '\n'.join(labels)


def topic_home(topic, lookup, exercise_descriptions, books):
    if topic.get('recap'):
        output = topic['path']
        source = CONFIG.parent / 'sisallot' / topic['slug'] / 'pikakertaus.html'
        body = rebase(source.read_text(encoding='utf-8').strip(), source.relative_to(ROOT).as_posix(), output, {})
        body = re.sub(r'^([ ]*)<!-- otelaudan-luonnolliset-savelet -->',
                      lambda match: indent(recap_fret_notes(), match[1]), body, flags=re.MULTILINE)
        body = re.sub(r'^([ ]*)<!-- sointukaaviot:(\S+) ([^\n]+?) -->',
                      lambda match: recap_chord_diagrams(match, books), body, flags=re.MULTILINE)
        action = link(rel('index.html', output) + '#oppimisaiheet', 'Siirry Oppimiskarttaan', ' class="primary-link"')
        return f'''<header class="recap-header">
  <h1>{escape(topic['title'])}</h1>
  <p class="lead">{escape(topic['lead'])}</p>
  {action}
</header>
{body}
<p class="recap-next">{action}</p>'''
    if topic.get('layout') == 'kokonaisuudet':
        return units_home(topic, lookup, exercise_descriptions)
    parts = [f'<p class="study-meta">Aihe {topic["number"]:02}</p>',
             f'<h1>{escape(topic["title"])}</h1>', f'<p class="lead">{escape(topic["lead"])}</p>',
             '<p class="study-status" data-study-total hidden></p>']
    step = 0
    groups = []
    rows = []
    for group in topic['groups']:
        links = [choice(page, number, exercise_descriptions)
                 for number, page in enumerate(group['pages'], step + 1)]
        size = len(links)
        rows.append(f'auto repeat({size}, var(--study-card-tracks))')
        start = '<p class="study-start">Aloita tästä</p>' if step == 0 else ''
        heading = f'<div class="study-choice-heading"><h2>{escape(group["title"])}</h2>{start}</div>'
        groups.append(f'<section class="study-group" style="--study-group-span: {1 + size * 2}">\n'
                      + indent(heading + '\n' + listed(links, ordered=True), '  ') + '\n</section>')
        step += size
    parts.append(f'<div class="study-card-groups" style="--study-rows: {" ".join(rows)}">\n'
                 + indent('\n'.join(groups), '  ') + '\n</div>')
    if topic.get('tools'):
        links = []
        for tool in topic['tools']:
            url = urlsplit(tool['href'])
            href = scoped_url(url.path, url.query, url.fragment, topic['path'], topic)
            links.append(link(href, tool['title']))
        parts.append(section('Harjoittelijat ja työkalut', listed(links)))
    related = [link(related_url(lookup[key][0], topic), lookup[key][1]) for key in topic['related']]
    parts.append(section('Tutki myös', listed(related)))
    return '\n'.join(parts)


def own_unit(topic, group):
    """#116: aiheen oma oppimiskokonaisuus (ei aiempien sisältöjen ryhmä). Sen oppitunneilla on oma
    numerointi ja Edellinen/Seuraava, eivätkä ne kuulu aiheen etenemisjärjestykseen, aihesivun ja
    etusivun laskuriin eivätkä oppimispolun loppuun. Aiempien sisältöjen merkitys pysyy ennallaan."""
    return topic.get('layout') == 'kokonaisuudet' and not group.get('legacy')


def unit_pages(group):
    for page in group['pages']:
        if page.parent or page.chapter:
            raise ValueError(f'{group["title"]}: kokonaisuudessa voi olla vain itsenäisiä oppitunteja')
        page.unit = group
    return group['pages']


def content_count(size):
    return '1 sisältö' if size == 1 else f'{size} sisältöä'


def unit(anchor, title, size, body, *, number=None, opened=False, kind='', progress=''):
    """Avattava oppimiskokonaisuus Kitaratreenin aiherivien tapaan (natiivi details/summary).
    Avaaminen vain näyttää sisällöt: se ei käynnistä harjoitusta eikä muuta suoritusmerkintöjä."""
    if not SLUG.fullmatch(anchor):
        raise ValueError(f'Virheellinen kokonaisuuden tunniste {anchor}')
    label = f'<span class="study-unit-number">{number:02}</span> ' if number else ''
    return (f'<details class="study-unit{kind}" id="{anchor}"{" open" if opened else ""}>\n'
            f'  <summary>{label}<span class="study-unit-title">{escape(title)}</span>'
            f'<span class="study-unit-count">{content_count(size)}</span>{progress}</summary>\n'
            f'  <div class="study-unit-body">\n{indent(body, "    ")}\n  </div>\n</details>')


def unit_choice(page, index):
    """Oman kokonaisuuden kortti. Tila on data-study-intro-status-merkinnässä (sama kuin PR #111:n
    numeroimattomassa johdannossa: näkyy, mutta ei kuulu aiheen laskuriin), ei data-study-status-
    merkinnässä, joten aiheen laskuri (assets/edistyminen.js) laskee edelleen vain aiemmat sisällöt."""
    slug = Path(page.path).stem
    status = f'<span data-study-intro-status="{page.study_id}" class="study-status" hidden></span>'
    return (f'<a class="study-choice study-choice--unit" id="valinta-{slug}" href="{posixpath.basename(page.path)}">'
            f'<span class="study-number" aria-hidden="true">{index:02}</span>'
            f'<strong class="study-title">{escape(page.title)}</strong>'
            f'<span class="study-choice-details"><span class="study-description">{escape(page.goal)}</span>{status}</span>'
            '<span class="study-arrow" aria-hidden="true">→</span></a>')


def unit_choices(links):
    """Kokonaisuuden korttiluettelo: luettelon kortit jakavat rivien mitoituksen kuten korttiruudukossa."""
    return (f'<ol class="study-choices" role="list" style="--study-rows: repeat({len(links)}, var(--study-card-tracks))">\n'
            + '\n'.join(f'  <li>{item}</li>' for item in links) + '\n</ol>')


def topic_links(topic, lookup):
    parts = []
    if topic.get('tools'):
        links = []
        for tool in topic['tools']:
            url = urlsplit(tool['href'])
            links.append(link(scoped_url(url.path, url.query, url.fragment, topic['path'], topic), tool['title']))
        parts.append(section('Harjoittelijat ja työkalut', listed(links)))
    related = [link(related_url(lookup[key][0], topic), lookup[key][1]) for key in topic['related']]
    parts.append(section('Tutki myös', listed(related)))
    return parts


def units_home(topic, lookup, exercise_descriptions):
    """#116: omat oppimiskokonaisuudet ensin, aiemmat sisällöt yhden oletuksena suljetun osion alla.
    Aiempien sisältöjen numerointi, osoitteet ja laskuri ovat samat kuin korttiruudukossa."""
    groups = topic['groups']
    own = [group for group in groups if own_unit(topic, group)]
    legacy = [group for group in groups if not own_unit(topic, group)]
    if not own or groups != own + legacy:
        raise ValueError(f'{topic["title"]}: omat kokonaisuudet ensin, aiemmat sisällöt niiden jälkeen')
    parts = [f'<p class="study-meta">Aihe {topic["number"]:02}</p>',
             f'<h1>{escape(topic["title"])}</h1>', f'<p class="lead">{escape(topic["lead"])}</p>']
    units = []
    for order, group in enumerate(own):
        links = [unit_choice(page, number) for number, page in enumerate(group['pages'], 1)]
        body = [f'<p class="study-unit-goal">{escape(group["goal"])}</p>']
        if order == 0:
            body.append('<p class="study-start">Aloita tästä</p>')
        body.append(unit_choices(links))
        # Kokonaisuuden oma laskuri (assets/kokonaisuudet.js) lukee vain tämän kokonaisuuden korttien tilat.
        progress = '<span class="study-status study-unit-progress" data-unit-progress hidden></span>'
        units.append(unit(group['id'], group['title'], len(links), '\n'.join(body),
                          number=group['number'], opened=group.get('open', False), progress=progress))
    if legacy:
        info = topic['legacy']
        sections = [f'<p class="study-unit-goal">{escape(info["intro"])}</p>']
        step = 0
        for group in legacy:
            links = [choice(page, number, exercise_descriptions)
                     for number, page in enumerate(group['pages'], step + 1)]
            sections.append(section(group['title'], unit_choices(links)))
            step += len(links)
        # Aiheen laskuri (edistyminen.js) täyttää tämän aiempien sisältöjen merkinnöistä kuten ennenkin.
        progress = '<span class="study-status study-unit-progress" data-study-total hidden></span>'
        units.append(unit(info['id'], info['title'], step, '\n'.join(sections),
                          kind=' study-unit--legacy', progress=progress))
    parts.append('<div class="study-units">\n' + indent('\n'.join(units), '  ') + '\n</div>')
    return '\n'.join(parts + topic_links(topic, lookup))


def unit_page_content(page, group, index, topic, targets):
    """Oman kokonaisuuden oppitunti: numerointi ja Edellinen/Seuraava kokonaisuuden sisällä. Viimeisestä
    oppitunnista palataan aihesivulle, ei siirrytä aiempiin sisältöihin."""
    sequence = group['pages']
    meta = (f'<p class="study-meta" data-study-unit="{group["id"]}">Oppitunti {index + 1:02} / {len(sequence):02} '
            f'<span>{group["number"]:02} · {escape(group["title"])}</span></p>')

    def nav(bottom):
        items = []
        if index > 0:
            previous = sequence[index - 1]
            items.append(step_link(rel(previous.path, page.path), f'Edellinen: {previous.title}', ' rel="prev"'))
        if index + 1 < len(sequence):
            following = sequence[index + 1]
            items.append(step_link(rel(following.path, page.path), f'Seuraava: {following.title}', ' rel="next"', forward=True))
        else:
            url = rel(topic['path'], page.path) + '#' + group['id']
            items.append(step_link(url, f'Palaa aihesivulle: {topic["title"]}', ' class="study-step-map"'))
        where, label = ('bottom', 'lopussa') if bottom else ('top', 'alussa')
        return (f'<nav class="study-steps study-steps--{where}" aria-label="Sisältönavigointi sivun {label}">\n'
                + indent('\n'.join(items), '  ') + '\n</nav>')

    return '\n'.join([
        meta, f'<h1>{escape(page.title)}</h1>', f'<p class="lead">{escape(page.goal)}</p>', nav(False),
        rebase(page.markup, page.source, page.path, targets, topic),
        '<p class="done-row"><button type="button" class="done-toggle" aria-pressed="false" disabled>'
        f'Merkitse {page.study_kind} tehdyksi</button></p>', nav(True)])


def related_url(target, topic):
    """Tutki myös -linkki. Toisen aiheen sisältösivulle viedään lähtöaihe (?aihe=…), jotta sivun
    aihepaluu palaa siihen aiheeseen, josta käyttäjä tuli (assets/oppimistapa.js). Ilman parametria
    sivu toimii kuten ennen: paluu vie sivun omaan aiheeseen. Suoritustunniste ei muutu."""
    url = rel(target, topic['path'])
    folder = posixpath.dirname(target)
    if folder != posixpath.dirname(topic['path']) and not target.endswith('/index.html'):
        url += '?aihe=' + topic['anchor']
    return url


def sources(book, output):
    candidates = [node for node in book.nodes if node.tag == 'aside' and node.has_class('sources')]
    if len(candidates) > 1:
        raise ValueError(f'{book.name}: useampi lähdeosio')
    if not candidates:
        return ''
    html = rebase(book.fragment(candidates[0]), book.name, output, {})
    return f'\n{html}'


def wrap_rhythm_tables(markup):
    # Tahdin iskut pysyvät sarakkeissa myös suurennetulla tekstillä.
    def wrap(match):
        label = escape(unescape(match[2]))
        return f'<div class="study-table" role="region" aria-label="{label}" tabindex="0">{match[1]}</div>'

    pattern = r'(<table class="bar-chart[^"]*"[^>]*>\s*<caption>([^<]+)</caption>[\s\S]*?</table>)'
    return re.sub(pattern, wrap, markup)


def page_content(page, topic, index, next_topic, books, targets, audio):
    kind = 'Harjoitus' if page.parent else 'Oppitunti'
    chapter = f' <span>Teoriaoppaan luku {page.chapter_number}</span>' if page.chapter else ''
    parts = [f'<p class="study-meta">{kind} {index + 1:02} / {len(topic["pages"]):02}{chapter}</p>',
             f'<h1>{escape(page.title)}</h1>']
    if page.goal:
        parts.append(f'<p class="lead">{escape(page.goal)}</p>')
    parts.append(steps(topic, index, next_topic))
    if page.parent:
        url = rel(page.parent.path, page.path)
        for sound in audio.get(Path(page.path).stem, []):
            part, key = part_anchor(sound)
            figure = play_sources(books[part], key)
            parts.append(rebase(figure, part, page.path, targets))
    markup = rebase(page.markup, page.source, page.path, targets, topic)
    if 'data-korvatreeni=' in markup:
        markup = re.sub(r'<p class="et-fallback">[^<]*</p>',
                        '<p class="et-fallback">Kysymysten soittaminen tarvitsee JavaScriptin ja selaimen äänituen.</p>',
                        markup)
    completion = ('<p class="done-row"><button type="button" class="done-toggle" aria-pressed="false" disabled>'
                  f'Merkitse {page.study_kind} tehdyksi</button></p>')
    if page.chapter:
        markup = markup.removesuffix('</section>') + '\n  ' + completion + '\n</section>'
    parts.append(wrap_rhythm_tables(markup))
    if page.parent:
        parts.append('<p class="study-guide">' + link(url, 'Ohje ja esimerkit · ' + page.parent.title) + '</p>')
    if not page.chapter:
        parts.append(completion)
    parts.append(steps(topic, index, next_topic, bottom=True))
    return '\n'.join(parts)


def step_link(url, label, attrs, *, forward=False):
    arrow = '→' if forward else '←'
    marker = f'<span class="study-step-arrow" aria-hidden="true">{arrow}</span>'
    title = escape(label)
    content = f'{title} {marker}' if forward else f'{marker} {title}'
    return f'<a href="{escape(url)}"{attrs}>{content}</a>'


def steps(topic, index, next_topic, *, bottom=False):
    sequence = topic['pages']
    page = sequence[index]
    items = []
    if index == len(sequence) - 1 and not topic.get('recap'):
        live = ' aria-live="polite"' if bottom else ''
        status = f'<p class="study-status" data-boundary-progress{live} hidden></p>'
        if next_topic is None:
            status += '<p class="study-status is-done" data-path-progress hidden>✓ Oppimispolku käyty läpi</p>'
        items.append(f'<div class="study-boundary-status">{status}</div>')
    if index > 0:
        previous = sequence[index - 1]
        items.append(step_link(rel(previous.path, page.path), f'Edellinen: {previous.title}', ' rel="prev"'))
    if index + 1 < len(sequence):
        following = sequence[index + 1]
        items.append(step_link(rel(following.path, page.path), f'Seuraava: {following.title}', ' rel="next"', forward=True))
    elif next_topic:
        url = rel(next_topic['path'], page.path) + '?polku=' + next_topic['anchor']
        items.append(step_link(url, f'Seuraava aihe: {next_topic["title"]}', ' rel="next" class="study-next-topic"', forward=True))
    else:
        url = rel('index.html', page.path) + '#' + topic['anchor']
        items.append(step_link(url, 'Oppimiskarttaan', ' class="study-step-map"'))
    # Aiheeseen palataan sivun yläreunan paluulinkistä (study-up). Alareunassa ovat vain
    # Edellinen/Seuraava-siirtymät, ei samaa paluupainiketta toiseen kertaan (#54, 18.11.2026).
    where, label = ('bottom', 'lopussa') if bottom else ('top', 'alussa')
    return (f'<nav class="study-steps study-steps--{where}" aria-label="Sisältönavigointi sivun {label}">\n'
            + indent('\n'.join(items), '  ') + '\n</nav>')


def render(topic, content, nav, page=None, *, path_items=()):
    output = page.path if page else topic['path']
    title = page.title if page else topic['title']
    recap = not page and topic.get('recap')
    stylesheets = ['book/reader.css', 'assets/paavalikko.css', 'assets/oppi.css']
    if recap:
        stylesheets.append('assets/kitara-kertaus.css')
    # Rytmin Ydinopinnot (#116): harjoitusten tyylit ja moduuli sekä merkinnän sanamuoto.
    rhythm_practice = page and 'data-rytmiharjoitus=' in page.markup
    if rhythm_practice:
        stylesheets.append('assets/rytmi-ydinopinnot.css')
    if page and page.mark:
        content = content.replace(f'>Merkitse {page.study_kind} tehdyksi</button>', f'>{MARKS[page.mark]}</button>')
    interval_recall = page and 'data-intervallimuisti' in page.markup
    if interval_recall:
        stylesheets.append('assets/intervallimuisti.css')
    # Avattavat oppimiskokonaisuudet ja ⓘ Knoppitieto (#116) sekä Soinnut-aiheen kitaranäyteharjoitukset.
    units = getattr(page, 'unit', None) if page else topic.get('layout') == 'kokonaisuudet'
    chord_practice = page and 'data-sointuharjoitus' in page.markup
    if units:
        stylesheets.append('assets/kokonaisuudet.css')
    if chord_practice:
        stylesheets.append('assets/sointuharjoitus.css')
    styles = '\n'.join(stylesheet(path, output) for path in stylesheets)
    back_href = rel(topic['path'], output) if page else rel('index.html', output) + '#' + topic['anchor']
    back_label = topic['back_label'] if page else 'Oppimiskarttaan'
    if not page and not recap:
        content += '\n<p class="study-reference">' + link(rel('book/index.html', output), 'Teoriaoppaan kaikki osat') + '</p>'
    if page:
        progress = f' data-study-item="{page.study_id}" data-study-kind="{page.study_kind}"'
        if page.chapter:
            progress += f' data-theory-chapter="{page.chapter}"'
        if page.mark:
            progress += f' data-study-mark="{page.mark}"'
        if page is topic['pages'][-1] and not topic.get('recap'):
            progress += f' data-topic-items="{escape(study_ids(topic["pages"]))}"'
        if path_items:
            progress += f' data-path-items="{escape(study_ids(path_items))}"'
    else:
        progress = f' data-study-topic="{topic["anchor"]}"'
    scripts = [rel('assets/oppimiskartta.js', output), versioned_url('assets/edistyminen.js', output)]
    if page and 'data-korvatreeni=' in page.markup:
        scripts += [rel(path, output) for path in ('assets/harjoitustausta.js', 'assets/korvatreeni.js')]
    # Musapeleistä ja Kitaratreenistä avattu sivu palaa samaan oppimistapaan (?tapa=…), ja aihesivulla
    # näkyy saman aiheen vaihto. Muodostetaan komennolla tools/oppimiskartta/rakenna-osiot.py.
    scripts.append(rel('assets/oppimistapa.js', output))
    if units:
        scripts.append(versioned_url('assets/kokonaisuudet.js', output))
    if chord_practice:
        scripts.append(versioned_url('assets/sointuharjoitus.js', output))
    scripts = '\n'.join(f'  <script src="{url}"></script>' for url in scripts)
    if interval_recall:
        url = versioned_url('assets/intervallimuisti.js', output)
        scripts += f'\n  <script type="module" src="{url}"></script>'
    if rhythm_practice:
        scripts += f'\n  <script type="module" src="{versioned_url("assets/rytmi-ydinopinnot.js", output)}"></script>'
    page_class = ' recap-page' if recap else ''
    if not recap:
        back = f'''<nav class="study-up" aria-label="Paluunavigointi">
  <a class="study-back" href="{escape(back_href)}"><span aria-hidden="true">←</span> {escape(back_label)}</a>
</nav>'''
        content = back + '\n' + content
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
  <main class="frame study-page{page_class}" id="oppi-sisalto"{progress}>
{indent(content, '    ')}
  </main>
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
        items = status = ''
        if not topic.get('recap'):
            items = f' data-study-items="{escape(study_ids(topic["pages"]))}"'
            status = '\n        <span class="topic-status" hidden></span>'
        cards.append(f'''    <a class="topic-card" id="{topic['anchor']}" href="{topic['path']}"{items}>
      <span class="topic-number" aria-hidden="true">{topic['number']:02}</span>
      <strong class="topic-title">{escape(topic['title'])}</strong>
      <span class="topic-details">
        <span class="topic-description">{escape(topic['summary'])}</span>{status}
      </span>
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
            if own_unit(topic, group):
                all_pages.extend(unit_pages(group))
            else:
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
    if len({page.study_id for page in all_pages}) != len(all_pages):
        raise ValueError('Oppimiskartassa on päällekkäisiä suoritusmerkinnän tunnisteita')
    return all_pages


def pages():
    config = json.loads(CONFIG.read_text(encoding='utf-8'))
    books = {path.relative_to(ROOT).as_posix(): Html(path.read_text(encoding='utf-8'), path.relative_to(ROOT).as_posix())
             for path in sorted((ROOT / 'book').glob('osa-*.html'))}
    all_pages = collect(config, books)
    topics = config['topics']
    apply_marks(topics)
    book = books['book/osa-2.html']
    nav = book.fragment(book.one('aria-label', 'Päävalikko'))
    lookup = {topic['slug']: (topic['path'], topic['title']) for topic in topics}
    lookup.update({page.path.removeprefix('oppi/').removesuffix('.html'): (page.path, page.title) for page in all_pages})
    targets = index_targets(all_pages)
    exercise_slugs = {Path(page.path).stem for page in all_pages if page.parent}
    exercise_descriptions = config['exercise_descriptions']
    if set(exercise_descriptions) != exercise_slugs or any(not text.strip() for text in exercise_descriptions.values()):
        raise ValueError('Jokainen harjoitus tarvitsee oman kuvauksen aiheet.json-tiedostossa')
    audio = config.get('exercise_audio', {})
    if set(audio) - exercise_slugs:
        raise ValueError('Ääniesimerkin harjoitussivu puuttuu')

    path_pages = [page for topic in topics if not topic.get('recap') for page in topic['pages']]
    output = {}
    for number, topic in enumerate(topics):
        next_topic = topics[number + 1] if number + 1 < len(topics) else None
        output[topic['path']] = render(topic, topic_home(topic, lookup, exercise_descriptions, books), nav)
        for group in topic['groups']:
            for index, page in enumerate(group['pages'] if own_unit(topic, group) else ()):
                output[page.path] = render(topic, unit_page_content(page, group, index, topic, targets), nav, page)
        sequence = topic['pages']
        for index, page in enumerate(sequence):
            content = page_content(page, topic, index, next_topic, books, targets, audio)
            if not page.parent and page.source in books:
                content += sources(books[page.source], page.path)
            path_items = path_pages if next_topic is None and index == len(sequence) - 1 else ()
            output[page.path] = render(topic, content, nav, page, path_items=path_items)

    start = lookup[config['start']][0]
    chapter_paths = {page.chapter: page.path for page in all_pages if page.chapter}
    map_routes = '<script type="application/json" id="oppimisreitit">' + json.dumps(chapter_paths, ensure_ascii=False) + '</script>'
    home = (ROOT / 'index.html').read_text(encoding='utf-8')
    block = lambda key, value: replace_block(home, f'<!-- {key} -->', f'<!-- /{key} -->', value, 'index.html')
    home = block('oppimiskartta:kortit', home_grid(topics))
    home = block('oppimiskartta:aloitus', '    ' + link(start, 'Kuuntele pulssi', ' data-return-topic="aihe-rytmi"'))
    home = block('oppimiskartta:reitit', map_routes)
    home = re.sub(r'(?<=src=")assets/edistyminen\.js(?:\?v=[a-f0-9]+)?(?=")',
                  versioned_url('assets/edistyminen.js', 'index.html'), home)
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
