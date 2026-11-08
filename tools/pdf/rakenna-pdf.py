#!/usr/bin/env python3
"""Kokoaa oppaan osat yhdeksi tulostettavaksi PDF:ksi.

Käyttö repon juuresta:

    python3 tools/pdf/rakenna-pdf.py

PDF tallentuu tiedostoon pdf/musiikin-kartta.pdf. Skripti tarvitsee
Chromen tai Chromiumin. Polun voi antaa CHROME-ympäristömuuttujalla.

Lähteenä ovat book-kansion HTML-sivut sellaisinaan. Skripti
  * kokoaa kannen, sisällysluettelon, osat I–V ja liitteet,
  * vaihtaa ääniesimerkkien soittimet linkeiksi verkkoversioon,
  * avaa vastaukset (<details>) näkyviin,
  * muuttaa osien väliset linkit PDF:n sisäisiksi ja muut linkit
    osoittamaan verkkosivustoon,
  * tulostaa PDF:n kahdesti, jotta sisällysluetteloon saadaan sivunumerot.
"""

import argparse
import datetime
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
BOOK = ROOT / 'book'
HERE = Path(__file__).resolve().parent
DEFAULT_OUT = ROOT / 'pdf' / 'musiikin-kartta.pdf'
SITE = 'https://rinnepelto.com'
PARTS = ['osa-1', 'osa-2', 'osa-3', 'osa-4', 'osa-5']
APPENDICES = ['sanasto', 'h-savelnimen-alkupera']
DOCS = PARTS + APPENDICES


# ---------------------------------------------------------------- HTML

def between(text, start_re, end_re, name):
    m = re.search(start_re + r'(.*?)' + end_re, text, re.S)
    if not m:
        sys.exit(f'{name}: ei löytynyt kohtaa {start_re}')
    return m.group(1)


def plain(fragment):
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', fragment)).strip()


def site_url(path):
    """book/osa-1.html -> https://rinnepelto.com/book/osa-1"""
    path = path.replace(os.sep, '/')
    if path == 'index.html':
        return SITE + '/'
    return f'{SITE}/{path[:-5] if path.endswith(".html") else path}'


def rewrite_href(href, slug):
    if href.startswith(('http://', 'https://', 'mailto:')):
        return href
    if href.startswith('#'):
        return f'#{slug}-{href[1:]}' if len(href) > 1 else f'#{slug}'
    m = re.match(r'([^?#]*)(\?[^#]*)?(#.*)?$', href)
    path, query, frag = m.group(1), m.group(2) or '', m.group(3) or ''
    target = os.path.normpath(os.path.join('book', path)) if path else f'book/{slug}.html'
    name = Path(target).stem
    if Path(target).parent == Path('book') and name in DOCS and not query:
        return f'#{name}-{frag[1:]}' if len(frag) > 1 else f'#{name}'
    return site_url(target) + query + frag


def transform(fragment, slug):
    """Muokkaa yhden sivun sisällön koosteeseen sopivaksi."""

    def audio_link(m):
        label = re.search(r'aria-labelledby="([^"]+)"', m.group(1))
        anchor = f'#{label.group(1).split()[0]}' if label else ''
        url = f'{SITE}/book/{slug}{anchor}'
        shown = url.split('://', 1)[1]
        return f'<p class="listen-link">Kuuntele verkossa: <a href="{url}">{shown}</a></p>'

    s = re.sub(r'<audio\b([^>]*)>.*?</audio>', audio_link, fragment, flags=re.S)
    s = re.sub(r'\s*<a class="primary-link"[^>]*>.*?</a>', '', s, flags=re.S)
    s = re.sub(r'<details(?![^>]*\sopen)', '<details open', s)
    s = re.sub(r'(?<=\s)(id|for)="([^"]+)"', lambda m: f'{m.group(1)}="{slug}-{m.group(2)}"', s)
    s = re.sub(r'(?<=\s)(aria-labelledby|aria-describedby)="([^"]+)"',
               lambda m: f'{m.group(1)}="' + ' '.join(f'{slug}-{t}' for t in m.group(2).split()) + '"', s)
    s = re.sub(r'(?<=\s)href="([^"]*)"', lambda m: f'href="{rewrite_href(m.group(1), slug)}"', s)

    def absolute_src(m):
        src = m.group(1)
        if re.match(r'[a-z]+:', src):
            return m.group(0)
        return f'src="{(BOOK / src).resolve().as_uri()}"'

    return re.sub(r'(?<=\s)src="([^"]*)"', absolute_src, s)


def read_doc(slug):
    text = (BOOK / f'{slug}.html').read_text(encoding='utf-8')
    head = between(text, r'<head>', r'</head>', slug)
    hero = between(text, r'<header class="hero">\s*<div class="frame">', r'</div>\s*</header>', slug)
    article = between(text, r'<article>', r'</article>', slug)
    label = plain(between(hero, r'<p class="part-number">', r'</p>', slug))
    title = plain(between(hero, r'<h1>', r'</h1>', slug))
    chapters = []
    for m in re.finditer(r'<section class="chapter" id="([^"]+)">(.*?)</section>', article, re.S):
        num = re.search(r'<p class="chapter-number">(.*?)</p>', m.group(2), re.S)
        h2 = re.search(r'<h2>(.*?)</h2>', m.group(2), re.S)
        chapters.append({
            'id': f'{slug}-{m.group(1)}',
            'num': plain(num.group(1)).replace('Luku', '').strip() if num else '',
            'title': plain(h2.group(1)) if h2 else m.group(1),
        })
    if slug in APPENDICES:
        hero = re.sub(r'(<p class="part-number">).*?(</p>)', r'\1Liite\2', hero, flags=re.S)
        label = 'Liite'
    return {
        'slug': slug,
        'styles': re.findall(r'<style>(.*?)</style>', head, re.S),
        'label': label.split('·')[0].strip(),
        'title': title,
        'chapters': chapters,
        'body': transform(f'<header class="hero">{hero}</header>\n<article>{article}</article>', slug),
    }


def toc_row(href, inner, page):
    return (f'<div class="toc-row"><a href="#{href}">{inner}</a>'
            f'<span class="dots"></span><span class="toc-page">{page}</span></div>')


def build_html(docs, pages):
    def page_of(target):
        return pages.get(target, '00')

    index = (ROOT / 'index.html').read_text(encoding='utf-8')
    tagline = plain(between(index, r'<p class="tagline">', r'</p>', 'index.html'))
    today = datetime.date.today()

    toc = []
    for d in docs:
        rows = ''
        for c in d['chapters']:
            if c['num']:
                inner = '<span class="toc-num">%s</span>%s' % (c['num'], c['title'])
                rows += '<li>%s</li>' % toc_row(c['id'], inner, page_of(c['id']))
        inner = '<span class="toc-part-label">%s</span> · %s' % (d['label'], d['title'])
        part = toc_row(d['slug'], inner, page_of(d['slug']))
        chapters = '<ol class="toc-chapters">%s</ol>' % rows if rows else ''
        toc.append('<li class="toc-part">%s%s</li>' % (part, chapters))

    styles = [(BOOK / 'reader.css').read_text(encoding='utf-8')]
    for d in docs:
        styles += d['styles']
    styles.append((HERE / 'kooste.css').read_text(encoding='utf-8'))

    parts = '\n'.join(f'<section class="part" id="{d["slug"]}">\n{d["body"]}\n</section>' for d in docs)
    return f'''<!DOCTYPE html>
<html lang="fi">
<head>
<meta charset="utf-8">
<title>Musiikin kartta</title>
{''.join(f'<style>{s}</style>' for s in styles)}
</head>
<body class="print-book">
<section class="cover">
  <p class="kicker">Tulostettava versio</p>
  <h1>Musiikin <span>kartta</span></h1>
  <p class="tagline">{tagline}</p>
  <div class="cover-meta">
    <p>Koottu verkko-oppaasta {today.day}.{today.month}.{today.year}.</p>
    <p>Ääniesimerkit, otelautaharjoittelija ja harjoitustaustat: <a href="{SITE}/">rinnepelto.com</a></p>
  </div>
</section>
<nav class="book-toc" aria-labelledby="sisallys">
  <h1 id="sisallys">Sisällys</h1>
  <ol class="toc-parts">{''.join(toc)}</ol>
  <p class="toc-note">Ääniesimerkkien kohdalla on osoite, josta esimerkin voi kuunnella verkossa.
  Harjoitusten vastaukset ovat heti tehtävän alla. Verkkoversiossa ne ovat piilossa, kunnes avaat ne.</p>
</nav>
{parts}
</body>
</html>
'''


def check_links(html):
    ids = set(re.findall(r'(?<=\s)id="([^"]+)"', html))
    missing = sorted({h for h in re.findall(r'href="#([^"]+)"', html) if h not in ids})
    for h in missing:
        print(f'Varoitus: sisäinen linkki #{h} ei osoita mihinkään.', file=sys.stderr)


# ---------------------------------------------------------------- PDF

def find_chrome():
    candidates = [os.environ.get('CHROME'),
                  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
                  '/Applications/Chromium.app/Contents/MacOS/Chromium']
    candidates += [shutil.which(n) for n in
                   ('google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', 'chrome')]
    for c in candidates:
        if c and Path(c).exists():
            return c
    sys.exit('Chromea ei löytynyt. Anna polku CHROME-ympäristömuuttujalla.')


def print_pdf(chrome, html_path, pdf_path, profile):
    subprocess.run([chrome, '--headless=new', '--disable-gpu', '--no-first-run',
                    '--no-default-browser-check', f'--user-data-dir={profile}',
                    '--no-pdf-header-footer', '--generate-pdf-document-outline',
                    f'--print-to-pdf={pdf_path}', html_path.as_uri()],
                   check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


def pdf_objects(data):
    """Lukee PDF:n xref-taulukon ja palauttaa objektien sisällön numeron mukaan."""
    start = int(re.findall(rb'startxref\s+(\d+)', data)[-1])
    m = re.match(rb'xref\s+(\d+)\s+(\d+)\s+', data[start:])
    first, count, pos = int(m.group(1)), int(m.group(2)), start + m.end()
    offsets = {}
    for i in range(count):
        entry = data[pos + 20 * i:pos + 20 * i + 18].split()
        if entry[2] == b'n':
            offsets[first + i] = int(entry[0])

    def obj(n):
        body = data[offsets[n]:]
        return body[:body.index(b'endobj')]
    return obj


def destination_pages(pdf_path):
    """Palauttaa nimettyjen kohteiden sivunumerot ({'osa-1-asteikot': 7, ...})."""
    data = pdf_path.read_bytes()
    obj = pdf_objects(data)
    root = int(re.search(rb'/Root\s+(\d+)\s+0\s+R', data[data.rindex(b'trailer'):]).group(1))
    catalog = obj(root)
    pages_root = int(re.search(rb'/Pages\s+(\d+)\s+0\s+R', catalog).group(1))

    order = []

    def walk(n):
        node = obj(n)
        kids = re.search(rb'/Kids\s*\[(.*?)\]', node, re.S)
        if kids and re.search(rb'/Type\s*/Pages\b', node):
            for k in re.findall(rb'(\d+)\s+0\s+R', kids.group(1)):
                walk(int(k))
        else:
            order.append(n)
    walk(pages_root)
    page_no = {n: i + 1 for i, n in enumerate(order)}

    dests = re.search(rb'/Dests\s+(\d+)\s+0\s+R', catalog)
    if not dests:
        return {}
    result = {}
    for name, page in re.findall(rb'/([^\s/\[\]<>()]+)\s*\[\s*(\d+)\s+0\s+R', obj(int(dests.group(1)))):
        name = re.sub(rb'#([0-9A-Fa-f]{2})', lambda m: bytes([int(m.group(1), 16)]), name)
        result[name.decode('utf-8')] = page_no.get(int(page), '?')
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    parser.add_argument('-o', '--out', type=Path, default=DEFAULT_OUT, help='PDF-tiedoston polku')
    parser.add_argument('--html', type=Path, help='tallenna myös koottu HTML tähän tiedostoon')
    args = parser.parse_args()

    docs = [read_doc(slug) for slug in DOCS]
    chrome = find_chrome()
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        html_path, pdf_path = tmp / 'musiikin-kartta.html', tmp / 'musiikin-kartta.pdf'
        pages = {}
        for _ in range(3):
            html = build_html(docs, pages)
            html_path.write_text(html, encoding='utf-8')
            print_pdf(chrome, html_path, pdf_path, tmp / 'profiili')
            found = destination_pages(pdf_path)
            targets = [d['slug'] for d in docs] + [c['id'] for d in docs for c in d['chapters'] if c['num']]
            new_pages = {t: found.get(t, '?') for t in targets}
            if new_pages == pages:
                break
            pages = new_pages
        else:
            print('Varoitus: sivunumerot eivät vakiintuneet.', file=sys.stderr)

        check_links(html)
        if '?' in pages.values():
            print('Varoitus: osan kohteiden sivunumeroa ei löytynyt.', file=sys.stderr)
        args.out.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(pdf_path, args.out)
        if args.html:
            args.html.write_text(html, encoding='utf-8')

    total = len(re.findall(rb'/Type\s*/Page[^s]', args.out.read_bytes()))
    print(f'{args.out.relative_to(ROOT) if args.out.is_relative_to(ROOT) else args.out}: {total} sivua')


if __name__ == '__main__':
    main()
