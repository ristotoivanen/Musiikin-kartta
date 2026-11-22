#!/usr/bin/env python3
"""#151: oikean PDF:n ja sen HTML-lähdekoosteen regressiot.

Lähdetesti ei tarvitse Chromea: python3 tests/issue-151-pdf.py --source-only
PDF-testi tarvitsee PyMuPDF:n: python3 tests/issue-151-pdf.py --pdf FILE --html FILE
"""
import argparse
from importlib.util import module_from_spec, spec_from_file_location
from pathlib import Path
import re
import tempfile
import unicodedata
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
spec = spec_from_file_location('mk_pdf_151', ROOT / 'tools/pdf/rakenna-pdf.py')
assert spec and spec.loader
builder = module_from_spec(spec)
spec.loader.exec_module(builder)


def norm(s):
    return re.sub(r'\s+', ' ', unicodedata.normalize('NFC', s)).strip()


def documents():
    assert builder.PARTS == [f'osa-{i}' for i in range(1, 12)]
    assert builder.APPENDICES == ['sanasto', 'h-savelnimen-alkupera']
    docs = [builder.read_doc(slug) for slug in builder.DOCS]
    assert len(docs) == 13
    chapters = [c for d in docs if d['slug'] in builder.PARTS for c in d['chapters']]
    appendices = [c for d in docs if d['slug'] in builder.APPENDICES for c in d['chapters']]
    assert len(chapters) == 28, f'Lukuja {len(chapters)}, odotettiin 28'
    assert len(appendices) == 4, f'Liiteosioita {len(appendices)}, odotettiin 4'
    return docs, chapters, appendices


def check_html(html, docs, chapters, appendices, complete):
    assert '<nav class="book-toc"' in html
    assert '<h1>Musiikin <span>kartta</span></h1>' in html
    assert f'<p class="tagline">{builder.PDF_DESCRIPTION}</p>' in html
    for d in docs:
        assert f'<section class="part" id="{d["slug"]}">' in html, d['slug']
    for c in chapters + appendices:
        assert f'id="{c["id"]}"' in html, c['id']
    ids = set(re.findall(r'(?<=\s)id="([^"]+)"', html))
    anchors = set(re.findall(r'href="#([^"]+)"', html))
    assert not anchors - ids, f'Rikkinäiset HTML-ankkurit: {sorted(anchors - ids)}'
    assert 'https://rinnepelto.com/book/osa-1' in html
    if complete:
        toc = html.split('<nav class="book-toc"', 1)[1].split('</nav>', 1)[0]
        nums = re.findall(r'<span class="toc-page">(.*?)</span>', toc)
        assert len(nums) == len(docs) + len(chapters)
        assert all(v.isdigit() and int(v) > 0 for v in nums), nums
    return ids, anchors


def source_test():
    docs, chapters, appendices = documents()
    # Varmista, ettei etusivun olemassaolo tai HTML-rakenne ole PDF:n vaatimus.
    with tempfile.TemporaryDirectory() as tmp, patch.object(builder, 'ROOT', Path(tmp)):
        html = builder.build_html(docs, {})
    ids, anchors = check_html(html, docs, chapters, appendices, complete=False)
    print(f'Lähdekooste OK: {len(docs)} dokumenttia, {len(chapters)} lukua, '
          f'{len(appendices)} liiteosiota, {len(ids)} ID:tä, {len(anchors)} ankkuria')
    return docs, chapters, appendices


def pdf_test(pdf_path, html_path, docs, chapters, appendices):
    import fitz
    assert pdf_path.is_file() and pdf_path.stat().st_size > 20000, 'PDF puuttuu tai on tyhjä'
    doc = fitz.open(pdf_path)
    assert doc.is_pdf and not doc.is_encrypted and doc.page_count > 13
    html = html_path.read_text(encoding='utf-8')
    check_html(html, docs, chapters, appendices, complete=True)
    texts = [norm(page.get_text()) for page in doc]
    full_text = ' '.join(texts)
    assert 'Musiikin kartta' in texts[0], 'Kansi puuttuu'
    assert norm(builder.PDF_DESCRIPTION) in texts[0], 'PDF-kansikuvaus puuttuu'
    assert 'Sisällys' in texts[1], 'Sisällysluettelo ei ala sivulla 2'
    for d in docs:
        assert norm(d['title']) in full_text, f'Osa/liite ei ole PDF:n tekstissä: {d["slug"]}'
    for c in chapters + appendices:
        assert norm(c['title']) in full_text, f'Luku puuttuu PDF:n tekstistä: {c["id"]}'

    targets = [d['slug'] for d in docs] + [c['id'] for c in chapters]
    found = builder.destination_pages(pdf_path)
    missing = [t for t in targets if not isinstance(found.get(t), int)]
    assert not missing, f'PDF:n sisäiset nimetyt kohteet puuttuvat: {missing}'
    assert all(1 <= found[t] <= doc.page_count for t in targets)
    toc = html.split('<nav class="book-toc"', 1)[1].split('</nav>', 1)[0]
    rows = re.findall(r'<div class="toc-row"><a href="#([^"]+)">.*?</a><span class="dots"></span><span class="toc-page">(\d+)</span></div>', toc, re.S)
    assert len(rows) == len(targets), (len(rows), len(targets))
    assert all(int(n) == found[t] for t, n in rows), 'PDF:n sivunumerot ja sisällys eivät vastaa toisiaan'

    links = [link for page in doc for link in page.get_links()]
    internal = [link for link in links if link['kind'] == fitz.LINK_GOTO]
    assert len(internal) >= len(targets), f'PDF:n sisäisiä linkkejä liian vähän: {len(internal)}'
    assert all(0 <= link['page'] < doc.page_count for link in internal), 'Rikkinäinen PDF-sisälinkki'
    assert any(link['kind'] == fitz.LINK_URI for link in links), 'Ulkoiset kuuntelulinkit puuttuvat'
    assert all(abs(page.rect.width - 595.28) < 3 and abs(page.rect.height - 841.89) < 3 for page in doc), 'PDF ei ole A4'
    assert 'ä' in full_text.lower() and 'ö' in full_text.lower() and 'Ä' in full_text, 'Ääkkösiä puuttuu'
    for i in sorted({1, doc.page_count // 2, doc.page_count - 1}):
        footer = [w for w in doc[i].get_text('words') if w[1] > doc[i].rect.height - 55]
        assert any(w[4] == str(i + 1) for w in footer), f'Sivunumero puuttuu sivulta {i + 1}'
    previews = pdf_path.parent / 'previews'
    previews.mkdir(exist_ok=True)
    for i in sorted({0, 1, 2, doc.page_count // 2, doc.page_count - 1}):
        doc[i].get_pixmap(matrix=fitz.Matrix(1.2, 1.2), alpha=False).save(previews / f'page-{i + 1:03d}.png')
    print(f'PDF OK: {pdf_path.stat().st_size} tavua, {doc.page_count} A4-sivua, '
          f'{len(targets)} kohdetta, {len(internal)} sisälinkkiä, {len(links)} linkkiä')
    print('Viisi sivuesikatselua artefaktissa, lopullinen typografian tarkastus silmämääräinen.')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--source-only', action='store_true')
    parser.add_argument('--pdf', type=Path)
    parser.add_argument('--html', type=Path)
    args = parser.parse_args()
    docs, chapters, appendices = source_test()
    if not args.source_only:
        if args.pdf is None or args.html is None:
            parser.error('Anna --pdf ja --html tai --source-only')
        pdf_test(args.pdf, args.html, docs, chapters, appendices)


if __name__ == '__main__':
    main()
