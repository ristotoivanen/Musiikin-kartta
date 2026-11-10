#!/usr/bin/env python3
"""Oppaan sointukaaviot yhdestä paikasta.

Piirtää sointukaavion SVG-muodossa samalla tyylillä kuin osan 6 barré- ja
septimisointujen kaaviot. Tyylit ovat tiedostossa book/reader.css
(.chord-diagram). Kaavion voi tulostaa komentoriviltä ja liittää sivulle:

    python3 tools/kaaviot/sointukaavio.py C x32010 --sormet x32x1x
    python3 tools/kaaviot/sointukaavio.py Cmaj7 "8 x 9 9 8 x" --sormet "1 x 3 4 2 x" \\
        --kuvaus "perussävel E-kielellä" --ei-merkintaa

Ote ja sormet luetaan paksusta E-kielestä ohueen e-kieleen. Ote on joko kuusi
merkkiä (x32010) tai välilyönnein erotettu, jos mukana on kaksinumeroisia
nauhoja. x tarkoittaa soittamatonta kieltä ja 0 vapaata kieltä. Sormissa
1 = etusormi … 4 = pikkusormi. Jos etusormi painaa samalla nauhalla useampaa
kieltä, kaavioon piirretään barré-palkki. Soinnun perussävel päätellään nimestä,
ja sen paikat merkitään kultaisella.
"""
import argparse
import html

LEFT, GAP, TOP, ROW, ROWS = 24, 14, 30, 18, 4
OPEN_PC = [4, 9, 2, 7, 11, 4]  # E A D G B e
STRING_NAMES = ['paksu E-kieli', 'A-kieli', 'D-kieli', 'G-kieli', 'B-kieli', 'ohut e-kieli']
FINGER_NAMES = {1: 'etusormella', 2: 'keskisormella', 3: 'nimettömällä', 4: 'pikkusormella'}
LETTER_PC = {'C': 0, 'D': 2, 'E': 4, 'F': 5, 'G': 7, 'A': 9, 'B': 11}


def parse(text):
    """'x32010' tai '8 x 9 9 8 x' → [None, 3, 2, 0, 1, 0]."""
    parts = text.split() if ' ' in text.strip() else list(text.strip())
    if len(parts) != 6:
        raise ValueError(f'Odotettiin kuutta kieltä: {text!r}')
    return [None if p.lower() == 'x' else int(p) for p in parts]


def root_pc(name):
    pc = LETTER_PC[name[0]]
    if name[1:2] in ('♯', '#'):
        pc += 1
    elif name[1:2] in ('♭', 'b'):
        pc -= 1
    return pc % 12


def svg(name, frets, fingers=None, kuvaus=None, alku=None):
    fingers = fingers or [None] * 6
    pc = root_pc(name)
    fretted = [f for f in frets if f]
    # Ylin nauha: satula, jos ote käyttää vapaita kieliä tai 1. nauhaa ja mahtuu
    # neljälle nauhalle. Muuten kaavio alkaa matalimmasta painetusta nauhasta.
    if alku:
        base = alku
    elif not fretted or (max(fretted) <= ROWS and (0 in frets or min(fretted) == 1)):
        base = 1
    else:
        base = min(fretted)
    x = lambda s: LEFT + s * GAP
    y = lambda f: TOP + (f - base) * ROW + ROW // 2
    right, bottom = x(5), TOP + ROWS * ROW
    is_root = [f is not None and (OPEN_PC[s] + f) % 12 == pc for s, f in enumerate(frets)]

    # Barré: etusormi painaa samalta nauhalta vähintään kahta kieltä, joista
    # toinen on ohuin soiva kieli. Muuten etusormi painaa kielet erikseen.
    barre = None
    ones = [s for s in range(6) if fingers[s] == 1 and frets[s]]
    top_string = max(s for s in range(6) if frets[s] is not None)
    if len(ones) >= 2 and len({frets[s] for s in ones}) == 1 and ones[-1] == top_string:
        barre = (frets[ones[0]], ones[0], ones[-1])

    words = []
    for s, f in enumerate(frets):
        if f is None:
            words.append(f'{STRING_NAMES[s]} soittamatta')
        elif f == 0:
            words.append(f'{STRING_NAMES[s]} vapaana' + (' (perussävel)' if is_root[s] else ''))
        else:
            finger = f' {FINGER_NAMES[fingers[s]]}' if fingers[s] in FINGER_NAMES else ''
            words.append(f'{STRING_NAMES[s]} {f}. nauha{finger}' + (' (perussävel)' if is_root[s] else ''))
    label = name + (f', {kuvaus}' if kuvaus else '') + ': ' + ', '.join(words) + '.'

    out = [f'<svg viewBox="0 0 108 124" role="img" aria-label="{html.escape(label, quote=True)}">']
    for row in range(ROWS + 1):
        cls = 'nut' if row == 0 and base == 1 else 'fret'
        out.append(f'<line class="{cls}" x1="{LEFT}" y1="{TOP + row * ROW}" x2="{right}" y2="{TOP + row * ROW}"/>')
    for s in range(6):
        out.append(f'<line class="string" x1="{x(s)}" y1="{TOP}" x2="{x(s)}" y2="{bottom}"/>')
    if base > 1:
        out.append(f'<text class="fret-label" x="{LEFT - 9}" y="{y(base) + 4}">{base}</text>')
    if barre:
        fret, a, b = barre
        out.append(f'<rect class="barre" x="{x(a) - 6.5:g}" y="{y(fret) - 6.5:g}" width="{(b - a) * GAP + 13:g}" height="13" rx="6.5"/>')
    for s, f in enumerate(frets):
        if f is None:
            out.append(f'<text class="marker" x="{x(s)}" y="22">×</text>')
            continue
        if f == 0:
            out.append(f'<circle class="{"open root-open" if is_root[s] else "open"}" cx="{x(s)}" cy="18" r="4.5"/>')
            continue
        if not (barre and f == barre[0] and barre[1] <= s <= barre[2] and not is_root[s]):
            out.append(f'<circle class="{"root" if is_root[s] else "tone"}" cx="{x(s)}" cy="{y(f)}" r="6.5"/>')
        if fingers[s]:
            out.append(f'<text class="finger" x="{x(s)}" y="118">{fingers[s]}</text>')
    out.append('</svg>')
    return ''.join(out)


def figure(name, ote, sormet=None, kuvaus=None, merkinta=True, alku=None):
    frets = parse(ote)
    fingers = [f if f else None for f in parse(sormet)] if sormet else None
    body = svg(name, frets, fingers, kuvaus, alku)
    note = f'<code>{html.escape(ote.strip())}</code>' if merkinta else ''
    return f'<figure class="chord-diagram"><figcaption>{html.escape(name)}</figcaption>{body}{note}</figure>'


def row(*figures):
    return '<div class="chord-diagrams">' + ''.join(figures) + '</div>'


if __name__ == '__main__':
    ap = argparse.ArgumentParser(description='Tulostaa oppaan sointukaavion HTML-muodossa.')
    ap.add_argument('nimi', help='Soinnun nimi, esimerkiksi C, Am, F♯m tai Cmaj7')
    ap.add_argument('ote', help='Ote paksusta kielestä ohueen, esimerkiksi x32010')
    ap.add_argument('--sormet', help='Sormet samassa järjestyksessä, esimerkiksi x32x1x')
    ap.add_argument('--kuvaus', help='Lisätieto ruudunlukijalle, esimerkiksi "E-muoto"')
    ap.add_argument('--ei-merkintaa', action='store_true', help='Jätä otemerkintä kaavion alta pois')
    ap.add_argument('--alku', type=int, help='Kaavion ylin nauha, jos automaattinen valinta ei sovi')
    a = ap.parse_args()
    print(figure(a.nimi, a.ote, a.sormet, a.kuvaus, not a.ei_merkintaa, a.alku))
