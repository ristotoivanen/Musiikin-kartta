#!/usr/bin/env python3
"""Tarkistaa sivuston sisäiset linkit ja tiedostoviittaukset.

Käyttö repon juuresta:

    python3 tools/linkit/tarkista-linkit.py

Skripti käy läpi juuren ja book-kansion HTML-sivut ja ilmoittaa
  * linkit, joiden kohdetiedostoa ei ole,
  * ankkurit (#tunniste), joita kohdesivulla ei ole,
  * src-viittaukset (äänet, skriptit, kuvat), joiden tiedostoa ei ole,
  * saman sivun sisällä kahdesti käytetyt id-tunnisteet.
Ulkoisia osoitteita ei haeta. Paluukoodi on 1, jos jotain löytyi.
"""

import re
import sys
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[2]
PAGES = sorted(ROOT.glob('*.html')) + sorted((ROOT / 'book').glob('*.html'))
EXTERNAL = re.compile(r'^(?:[a-z][a-z0-9+.-]*:|//)', re.I)


def ids_of(text):
    return re.findall(r'(?<=\s)id="([^"]+)"', text)


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
            elif attr == 'href' and fragment and target in ids and unquote(fragment) not in ids[target]:
                problems.append(f'{name}: {attr}="{value}" – ankkuria #{fragment} ei ole')

    for line in problems:
        print(line)
    links = sum(len(re.findall(r'(?<=\s)(?:href|src)="', text)) for text in texts.values())
    print(f'{len(PAGES)} sivua, {links} viittausta, {len(problems)} ongelmaa')
    return 1 if problems else 0


if __name__ == '__main__':
    sys.exit(main())
