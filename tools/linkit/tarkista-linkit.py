#!/usr/bin/env python3
"""Tarkistaa sivuston sisäiset linkit ja tiedostoviittaukset.

Käyttö repon juuresta:

    python3 tools/linkit/tarkista-linkit.py

Skripti käy läpi juuren ja book-kansion HTML-sivut ja ilmoittaa
  * linkit, joiden kohdetiedostoa ei ole,
  * ankkurit (#tunniste), joita kohdesivulla ei ole,
  * src-viittaukset (äänet, skriptit, kuvat), joiden tiedostoa ei ole,
  * saman sivun sisällä kahdesti käytetyt id-tunnisteet,
  * erot osasivujen ja assets/edistyminen.js-tiedoston PARTS-taulukon välillä.
    Taulukosta luetaan lukujen merkinnät ja vanhojen linkkien ohjaus, joten
    sen luvut, numerot, otsikot ja ankkurit pitää päivittää, kun sivut muuttuvat.
Ulkoisia osoitteita ei haeta. Paluukoodi on 1, jos jotain löytyi.
"""

import re
import sys
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[2]
PAGES = (sorted(ROOT.glob('*.html')) + sorted((ROOT / 'book').glob('*.html'))
         + sorted((ROOT / 'pelit').glob('*/index.html')))
EXTERNAL = re.compile(r'^(?:[a-z][a-z0-9+.-]*:|//)', re.I)
PROGRESS = ROOT / 'assets' / 'edistyminen.js'
# Näkymävalinnat käsitellään assets/visualizer.js:ssä.
VIEW_ROUTES = {ROOT / 'otelautaharjoittelija.html': {'soinnut', 'oktaavit'}}
# Jokaisella osasivulla toistuvat tunnisteet ja kuvatekstien tunnisteet eivät kuulu ankkuritaulukkoon.
GENERIC = {'luvut', 'lukulista', 'harjoitusrutiini', 'rutiini-otsikko', 'lisalukeminen'}


def ids_of(text):
    return re.findall(r'(?<=\s)id="([^"]+)"', text)


def plain(fragment):
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', fragment)).strip()


def check_progress_table(texts, problems):
    """Vertaa edistyminen.js:n PARTS- ja MOVED-taulukoita osasivuihin."""
    source = PROGRESS.read_text(encoding='utf-8')
    name = PROGRESS.relative_to(ROOT)
    listed = {}
    for slug, chapters, anchors in re.findall(r"\{ slug: '(osa-\d+)'.*?chapters: \[(.*?)\],\s*anchors: \[(.*?)\] \}", source, re.S):
        listed[slug] = (
            [(i, int(n), title) for i, n, title in re.findall(r"\['([^']+)', (\d+), '([^']*)'\]", chapters)],
            re.findall(r"'([^']+)'", anchors),
        )
    part_pages = {page.stem: text for page, text in texts.items() if re.fullmatch(r'osa-\d+', page.stem)}
    for slug in sorted(set(listed) ^ set(part_pages)):
        problems.append(f'{name}: osa {slug} on vain ' + ('taulukossa' if slug in listed else 'sivuna'))
    seen = {}
    for slug in sorted(set(listed) & set(part_pages), key=lambda s: int(s.split('-')[1])):
        text = part_pages[slug]
        on_page = [(i, int(n), plain(title)) for i, n, title in re.findall(
            r'<section class="chapter" id="([^"]+)">\s*<p class="chapter-number">Luku (\d+)</p>\s*<h2>(.*?)</h2>', text, re.S)]
        chapters, anchors = listed[slug]
        if chapters != on_page:
            problems.append(f'{name}: osan {slug} luvut eivät vastaa sivua: {chapters} / {on_page}')
        expected = [i for i in ids_of(text)
                    if i not in GENERIC and not i.endswith('-kuvaus') and i not in {c[0] for c in on_page}]
        for anchor in sorted(set(anchors) ^ set(expected)):
            problems.append(f'{name}: ankkuri "{anchor}" on vain ' + ('taulukossa' if anchor in anchors else f'sivulla {slug}'))
        for ident in [c[0] for c in chapters] + anchors:
            if ident in seen and seen[ident] != slug:
                problems.append(f'{name}: tunniste "{ident}" on osissa {seen[ident]} ja {slug}')
            seen[ident] = slug
    numbers = [n for chapters, _ in listed.values() for _, n, _ in chapters]
    if sorted(numbers) != list(range(1, len(numbers) + 1)):
        problems.append(f'{name}: lukujen numerot eivät ole 1–{len(numbers)}')
    all_chapters = {i for chapters, _ in listed.values() for i, _, _ in chapters}
    moved = re.search(r'const MOVED = \{(.*?)\n  \};', source, re.S)
    for old, targets in re.findall(r"'(osa-\d+#[^']+)': \[(.*?)\]", moved.group(1) if moved else ''):
        for target in re.findall(r"'([^']+)'", targets):
            if target not in all_chapters:
                problems.append(f'{name}: vanha merkintä {old} osoittaa lukuun "{target}", jota ei ole')


def main():
    texts = {page: page.read_text(encoding='utf-8') for page in PAGES}
    ids = {page: set(ids_of(text)) for page, text in texts.items()}
    problems = []

    for page, text in texts.items():
        name = page.relative_to(ROOT)
        seen = set()
        for found in ids_of(text):
            if found in seen:
                problems.append(f'{name}: id "{found}" on sivulla kahdesti')
            seen.add(found)

        for attr, value in re.findall(r'(?<=\s)(href|src)="([^"]*)"', text):
            if not value or EXTERNAL.match(value):
                continue
            path, _, fragment = value.partition('#')
            path = unquote(path.split('?')[0])
            target = (page.parent / path).resolve() if path else page
            if target.is_dir():
                target = target / 'index.html'
            if not target.exists():
                problems.append(f'{name}: {attr}="{value}" – tiedostoa ei ole')
            elif attr == 'href' and fragment and target in ids and unquote(fragment) not in (ids[target] | VIEW_ROUTES.get(target, set())):
                problems.append(f'{name}: {attr}="{value}" – ankkuria #{fragment} ei ole')

    check_progress_table(texts, problems)
    for line in problems:
        print(line)
    links = sum(len(re.findall(r'(?<=\s)(?:href|src)="', text)) for text in texts.values())
    print(f'{len(PAGES)} sivua, {links} viittausta, {len(problems)} ongelmaa')
    return 1 if problems else 0


if __name__ == '__main__':
    sys.exit(main())
