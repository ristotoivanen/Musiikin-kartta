#!/usr/bin/env python3
"""#117: PDF:n lähteiden kokoamisen regressio ilman Chromea tai kirjoituksia."""
from importlib.util import module_from_spec, spec_from_file_location
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
script = ROOT / 'tools/pdf/rakenna-pdf.py'
spec = spec_from_file_location('mk_pdf_117', script)
assert spec and spec.loader
pdf = module_from_spec(spec)
spec.loader.exec_module(pdf)

assert pdf.PARTS == [f'osa-{n}' for n in range(1, 12)]
assert pdf.APPENDICES == ['sanasto', 'h-savelnimen-alkupera']
docs = [pdf.read_doc(slug) for slug in pdf.DOCS]
assert len(docs) == 13, '11 kirjaosaa ja 2 liitettä'
book_chapters = [(d['slug'], c['id']) for d in docs if d['slug'] in pdf.PARTS for c in d['chapters']]
appendix_sections = [(d['slug'], c['id']) for d in docs if d['slug'] in pdf.APPENDICES for c in d['chapters']]
assert len(book_chapters) == 28, '11 kirjaosan 28 lukua eivät enää vastaa lähdekoostetta'
assert len(appendix_sections) == 4, 'kahden liitteen 4 chapter-rakenteista osiota puuttuu'
chapters = book_chapters + appendix_sections
html = pdf.build_html(docs, {})
for slug in pdf.DOCS:
    assert f'<section class="part" id="{slug}">' in html, slug
for slug, chapter_id in chapters:
    assert f'id="{chapter_id}"' in html, (slug, chapter_id)
assert 'https://rinnepelto.com/book/osa-1' in html, 'äänien verkkolinkki'
assert '<nav class="book-toc"' in html, 'PDF-sisällys'
assert 'Musiikin kartta' in html, 'kansi'
ids = set(re.findall(r'(?<=\s)id="([^"]+)"', html))
missing = sorted({frag for frag in re.findall(r'href="#([^"]+)"', html) if frag not in ids})
assert not missing, f'PDF-väli-HTML: puuttuvat sisäiset kohteet {missing}'
print(f'PDF-väli-HTML: {len(docs)} dokumenttia, {len(chapters)} lukua, '
      f'{len(ids)} ID:tä, {len(missing)} puuttuvaa sisäistä linkkiä')
print('Ei Chrome-tulostusta, ei PDF-binäärin, verkkolinkkien tai sivunumeroiden validointia.')
