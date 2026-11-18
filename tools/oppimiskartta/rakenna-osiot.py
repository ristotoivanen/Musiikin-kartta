#!/usr/bin/env python3
"""Muodostaa Musiikin kartan pääosioiden näkymät ja päävalikon sisältörekisteristä.

Käyttö repon juuresta:

    python3 tools/oppimiskartta/rakenna-osiot.py             muodostaa sivut ja päivittää päävalikot
    python3 tools/oppimiskartta/rakenna-osiot.py --tarkista  vain tarkistaa, paluukoodi 1 virheestä
    python3 tools/oppimiskartta/rakenna-osiot.py --rekisteri polku.json --validoi   vain rekisterin validointi

Lähteet:
  * tools/oppimiskartta/aiheet.json: kahdeksan aihetta, niiden pysyvät tunnisteet ja nimet (vain luku).
  * tools/oppimiskartta/sisaltorekisteri.json: pääosiot, sovellukset, työkalut ja
    oppimistapojen kytkennät olemassa oleviin Oppimiskartan sivuihin.
  * oppi/<aihe>/<sivu>.html: sivun otsikko ja suoritustunniste luetaan muodostetusta sivusta.

Tulokset:
  * musapelit.html, kitaratreeni.html ja soittopakki.html.
  * assets/oppimistapa.js:n aihe- ja määrätiedot (oppimistavan säilyminen ja aihesivujen vaihto).
  * Päävalikko (<nav class="main-nav">) juuren ja book-kansion käsin ylläpidetyillä sivuilla.
    Ensikeikan käännös (vite.ensikeikka.config.ts) kopioi valikon musapelit.html-sivulta. Oppimiskartan generaattori (rakenna.py) kopioi valikon book/osa-2.html-sivulta, joten
    oppi-kansion sivut päivittyvät komennolla npm run build:oppimiskartta.

Skripti ei kirjoita etenemistietoja eikä muuta aiheiden tai sisältöjen tunnisteita.
"""

import html
import json
import re
import sys
from pathlib import Path
from urllib.parse import parse_qs, urlsplit

ROOT = Path(__file__).resolve().parents[2]
TOPICS_FILE = ROOT / 'tools' / 'oppimiskartta' / 'aiheet.json'
REGISTRY_FILE = ROOT / 'tools' / 'oppimiskartta' / 'sisaltorekisteri.json'
SECTION_IDS = ('opi', 'pelit', 'kitara', 'pakki')
MODES = ('pelit', 'kitara')
AVAILABILITY = {'valmis', 'beta', 'upotettu', 'suunniteltu'}
TOOLS = ('valine', 'taito', 'kuvaus')
TOOL_SCRIPT = 'assets/oppimistapa.js'
# Työkalusivut, joilla Takaisin aiheeseen -linkki palaa oppimistapaan (?tapa=…). Ensikeikan sivun
# skriptilinkki lisätään käännöksessä (vite.ensikeikka.config.ts).
TOOL_PAGES = ('riffikaiku.html', 'kitaraharjoittelija.html', 'otelautaharjoittelija.html')
NAV = re.compile(r'(?P<indent>[ \t]*)<nav class="main-nav" aria-label="Päävalikko">.*?</nav>', re.S)
GENERATED = '<!-- Muodostettu komennolla python3 tools/oppimiskartta/rakenna-osiot.py. Älä muokkaa käsin. -->'


class RegistryError(ValueError):
    pass


def esc(text):
    return html.escape(text, quote=True)


def load(registry_file=REGISTRY_FILE):
    topics = json.loads(TOPICS_FILE.read_text(encoding='utf-8'))
    registry = json.loads(Path(registry_file).read_text(encoding='utf-8'))
    return topics, registry


def page_path(href):
    """Osoitteen tiedosto-osa juuresta katsottuna (ilman kyselyä ja ankkuria)."""
    path = urlsplit(href).path
    return 'index.html' if path in ('', '/') else (path + 'index.html' if path.endswith('/') else path)


def ids_in(path):
    return set(re.findall(r'(?<=\s)id="([^"]+)"', (ROOT / path).read_text(encoding='utf-8')))


def with_params(href, **params):
    """Lisää kyselyparametrit ennen ankkuria. ?aihe=… tuo työkaluihin Takaisin aiheeseen -linkin ja
    ?tapa=… palauttaa sen samaan oppimistapaan (assets/oppimistapa.js). Ilman niitä osoite toimii ennallaan."""
    parts = urlsplit(href)
    extra = '&'.join(f'{key}={value}' for key, value in params.items() if value)
    query = '&'.join(part for part in (parts.query, extra) if part)
    return parts.path + ('?' + query if query else '') + ('#' + parts.fragment if parts.fragment else '')


def study_page(path, topics_by_slug, config):
    """Lukee Oppimiskartan sivun tiedot muodostetusta sivusta. Aihe päätellään kansiosta."""
    match = re.fullmatch(r'oppi/([a-z]+)/([a-z0-9-]+)\.html', path)
    if not match:
        raise RegistryError(f'{path}: Oppimiskartan sivun osoite ei ole muotoa oppi/<aihe>/<sivu>.html')
    topic, slug = match.groups()
    if topic not in topics_by_slug:
        raise RegistryError(f'{path}: tuntematon aihe {topic}')
    file = ROOT / path
    if not file.exists():
        raise RegistryError(f'{path}: sivua ei ole (aja ensin npm run build:oppimiskartta)')
    text = file.read_text(encoding='utf-8')
    main = re.search(r'<main [^>]*data-study-item="([^"]+)" data-study-kind="([a-z]+)"', text)
    title = re.search(r'<h1[^>]*>(.*?)</h1>', text, re.S)
    if not main or not title:
        raise RegistryError(f'{path}: sivulta puuttuu suoritustunniste tai otsikko')
    description = config['exercise_descriptions'].get(slug)
    if description is None:
        for lesson in (lesson for t in config['topics'] for g in t['groups'] for lesson in g['lessons']):
            if slug in (lesson.get('standalone'), lesson.get('excerpt'), lesson.get('source', '').partition('#')[2]):
                description = lesson['goal']
                break
    if not description:
        raise RegistryError(f'{path}: sivulle ei löydy kuvausta aiheet.json-tiedostosta')
    return {
        'id': main.group(1), 'laji': main.group(2), 'aihe': topic, 'osoite': path, 'interaktiivinen': 'data-korvatreeni=' in text,
        'nimi': html.unescape(re.sub(r'<[^>]+>', '', title.group(1))).strip(), 'kuvaus': description,
    }


def validate(config, registry):
    """Tarkistaa rekisterin. Palauttaa jäsennellyt tiedot sivujen muodostamista varten."""
    errors = []
    topics = config['topics']
    by_slug = {t['slug']: t for t in topics}
    sections = registry['osiot']
    if [s['id'] for s in sections] != list(SECTION_IDS):
        errors.append('osiot: järjestyksen on oltava ' + ', '.join(SECTION_IDS))
    for section in sections:
        if section['id'] != 'opi' and not (ROOT / page_path(section['osoite'])).exists() and \
                page_path(section['osoite']) not in OUTPUTS:
            errors.append(f'osio {section["id"]}: osoite {section["osoite"]} puuttuu')
    for prefix, section in registry['sivujen_osiot'].items():
        if section not in SECTION_IDS:
            errors.append(f'sivujen_osiot: {prefix} viittaa tuntemattomaan osioon {section}')

    apps, seen = {}, set()
    for app in registry['sovellukset']:
        name = app.get('id', '?')
        if name in seen:
            errors.append(f'{name}: sama tunniste kahdesti')
        seen.add(name)
        if app.get('saatavuus') not in AVAILABILITY:
            errors.append(f'{name}: tuntematon saatavuus {app.get("saatavuus")}')
        if not app.get('tavat') or any(m not in SECTION_IDS[1:] for m in app['tavat']):
            errors.append(f'{name}: tuntematon tai puuttuva oppimistapa')
        if not app.get('aiheet') or any(t not in by_slug for t in app['aiheet']):
            errors.append(f'{name}: tuntematon tai puuttuva aihetunniste {app.get("aiheet")}')
        if any(not app.get(field) for field in ('nimi',) + TOOLS):
            errors.append(f'{name}: nimi, väline, taito tai kuvaus puuttuu')
        for key in app.get('tunnistus', []):
            if key not in conditions(app.get('osoite') or '', [key]):
                errors.append(f'{name}: tunnistusparametria {key} ei ole osoitteessa {app.get("osoite")}')
        # Oppimistavan on vastattava todellista tehtävää: peli ei voi olla oikean kitaran harjoitus.
        for mode in MODES:
            if mode in app.get('tavat', []) and app.get('valine') not in registry['tavat'][mode]['valineet']:
                errors.append(f'{name}: väline {app.get("valine")} ei sovi oppimistapaan {mode}')
        if app.get('saatavuus') == 'suunniteltu':
            if app.get('osoite'):
                errors.append(f'{name}: suunnitellulla sisällöllä ei saa olla osoitetta ennen toteutusta')
        else:
            links = [app.get('osoite')] + [v.get('osoite') for v in app.get('nakymat', [])]
            for href in links:
                if not href or not (ROOT / page_path(href)).exists():
                    errors.append(f'{name}: osoitetta {href} ei ole')
                elif urlsplit(href).fragment and page_path(href) == 'otelautaharjoittelija.html':
                    if urlsplit(href).fragment not in {'soinnut', 'oktaavit'}:
                        errors.append(f'{name}: Otelautaoppaassa ei ole näkymää #{urlsplit(href).fragment}')
                elif urlsplit(href).fragment and urlsplit(href).fragment not in ids_in(page_path(href)):
                    errors.append(f'{name}: ankkuria {href} ei ole')
            for view in app.get('nakymat', []):
                if view.get('aihe') not in app['aiheet']:
                    errors.append(f'{name}/{view.get("id")}: näkymän aihe ei kuulu työkalun aiheisiin')
        apps[name] = app

    # Sama tiedosto eri oppimistavoissa: sisällöt on erotettava osoitteen parametreilla (tunnistus),
    # muuten ?tapa= voisi jäädä voimaan väärässä sovelluksen tilassa (esim. Riffikaiun peli ja harjoitus).
    by_file = {}
    for app in apps.values():
        for mode in (m for m in app.get('tavat', []) if m in MODES):
            if app.get('osoite') and app.get('aiheparametri'):
                by_file.setdefault(page_path(app['osoite']), []).append((mode, app))
    for file, entries in by_file.items():
        if len({mode for mode, _ in entries}) < 2:
            continue
        seen_conditions = {}
        for mode, app in entries:
            found = conditions(app['osoite'], app.get('tunnistus', []))
            if not found:
                errors.append(f'{app["id"]}: {file} on useassa oppimistavassa, joten tunnistus-parametrit tarvitaan')
            elif seen_conditions.get(json.dumps(found, sort_keys=True), mode) != mode:
                errors.append(f'{app["id"]}: {file} {found} on jo toisessa oppimistavassa')
            seen_conditions[json.dumps(found, sort_keys=True)] = mode

    study = {}
    kinds = registry['tehtavat']
    for entry in registry['oppisivut']:
        path = entry.get('sivu', '?')
        if path in study:
            errors.append(f'{path}: sama sivu kahdesti oppisivuissa')
            continue
        try:
            page = study_page(path, by_slug, config)
        except RegistryError as error:
            errors.append(str(error))
            continue
        page['tavat'], page['tehtava'] = entry.get('tavat', []), entry.get('tehtava', [])
        page['aiheet'] = [page['aihe']] + [t for t in entry.get('lisaaiheet', []) if t != page['aihe']]
        if not page['tavat'] or any(mode not in MODES for mode in page['tavat']):
            errors.append(f'{path}: tuntematon tai puuttuva oppimistapa {page["tavat"]}')
        if not page['tehtava'] or any(kind not in kinds for kind in page['tehtava']):
            errors.append(f'{path}: tuntematon tai puuttuva tehtävän laji {page["tehtava"]}')
        if any(t not in by_slug for t in page['aiheet']):
            errors.append(f'{path}: tuntematon lisäaihe {entry.get("lisaaiheet")}')
        for mode in page['tavat']:
            if mode in MODES and not set(page['tehtava']) & set(registry['tavat'][mode]['tehtavat']):
                errors.append(f'{path}: tehtävän laji {page["tehtava"]} ei sovi oppimistapaan {mode}')
        if 'kuuntelutehtava' in page['tehtava'] and not page['interaktiivinen']:
            errors.append(f'{path}: kuuntelutehtäväksi merkityllä sivulla ei ole vuorovaikutteista harjoitusta')
        if page['id'] in apps:
            errors.append(f'{path}: suoritustunniste {page["id"]} on jo sovelluksella')
        study[path] = page

    for topic, helpers in registry.get('apuvalineet', {}).items():
        if topic not in by_slug:
            errors.append(f'apuvalineet: tuntematon aihe {topic}')
        for helper in helpers:
            app_id, _, view_id = helper['nakyma'].partition('/')
            views = {v['id']: v for v in apps.get(app_id, {}).get('nakymat', [])}
            if view_id not in views:
                errors.append(f'apuvalineet.{topic}: näkymää {helper["nakyma"]} ei ole')
            elif views[view_id]['aihe'] != topic:
                errors.append(f'apuvalineet.{topic}: näkymä {helper["nakyma"]} kuuluu aiheeseen {views[view_id]["aihe"]}')

    # aiheet.json:n aihesivuilla näkyvät työkalulinkit eivät saa olla ristiriidassa rekisterin kanssa.
    known = {}
    for app in apps.values():
        for href in [app.get('osoite')] + [v['osoite'] for v in app.get('nakymat', [])]:
            if href:
                known.setdefault(page_path(href), set()).update(app['aiheet'])
    for topic in topics:
        for tool in topic.get('tools', []):
            target = page_path(tool['href'])
            if target not in known:
                errors.append(f'aiheet.json {topic["slug"]}: työkalua {tool["href"]} ei ole sisältörekisterissä')
            elif topic['slug'] not in known[target]:
                errors.append(f'aiheet.json {topic["slug"]}: {tool["href"]} ei kuulu rekisterissä tähän aiheeseen')

    if errors:
        raise RegistryError('\n'.join(errors))
    return apps, study


# --- Päävalikko ---------------------------------------------------------------------------------

def section_of(path, registry):
    rules = registry['sivujen_osiot']
    if path in rules:
        return rules[path]
    for prefix, section in rules.items():
        if prefix.endswith('/') and path.startswith(prefix):
            return section
    return None


def main_nav(path, registry, indent=''):
    """Päävalikon merkintä sivulle. Etusivulla aktiivinen on brändilinkki, muualla oma osio."""
    up = '../' * path.count('/')
    current = section_of(path, registry)
    brand = ' aria-current="page"' if path == 'index.html' else ''
    lines = [f'<nav class="main-nav" aria-label="Päävalikko">',
             f'  <a class="brand" href="{up}index.html"{brand}>Musiikin <span>kartta</span></a>',
             '  <ul>']
    for section in registry['osiot']:
        attr = ''
        if path != 'index.html' and section['id'] == current:
            attr = ' aria-current="page"' if page_path(section['osoite']) == path else ' aria-current="true"'
        lines.append(f'    <li><a href="{up}{section["osoite"]}"{attr}>{esc(section["nimi"])}</a></li>')
    lines += ['  </ul>', '</nav>']
    return '\n'.join(indent + line if i else line for i, line in enumerate(lines))


def nav_pages(registry):
    pages = sorted(p.relative_to(ROOT).as_posix() for p in ROOT.glob('*.html'))
    pages += sorted(p.relative_to(ROOT).as_posix() for p in (ROOT / 'book').glob('*.html'))
    # pelit/ensikeikka/index.html on Viten käännöstulos: vite.ensikeikka.config.ts kopioi valikon musapelit.html-sivulta.
    return [p for p in pages if p not in OUTPUTS and NAV.search((ROOT / p).read_text(encoding='utf-8'))]


def with_nav(path, text, registry):
    return NAV.sub(lambda m: m.group('indent') + main_nav(path, registry, m.group('indent')), text, count=1)


# --- Sivut --------------------------------------------------------------------------------------

def head(title, description):
    return f'''<!doctype html>
{GENERATED}
<html lang="fi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(title)} – Musiikin kartta</title>
<meta name="description" content="{esc(description)}">
<link rel="stylesheet" href="assets/otelauta.css">
<link rel="stylesheet" href="assets/paavalikko.css">
<link rel="stylesheet" href="assets/osiot.css">
<script defer src="assets/oppimiskartta.js"></script>
</head>
<body>
<a class="mode-skip" href="#sisalto">Siirry sisältöön</a>
<header class="site-top">
  {{nav}}
</header>
'''


FOOT = '''<footer>
  Musiikin kartta · avoin opas ·
  lähdekoodi: <a href="https://github.com/ristotoivanen/Musiikin-kartta">GitHub</a>
</footer>
</body>
</html>
'''

TOOL_LABELS = {'oikea kitara': 'Oikea kitara', 'virtuaalikitara': 'Virtuaalikitara', 'kuuntelu': 'Kuuntelu',
               'otelautakuva': 'Otelautakuva, ei ääntä', 'mikrofoni': 'Mikrofoni', 'näkymä': 'Otelautanäkymä'}


def badge(app):
    return ' <span class="mode-badge">beta</span>' if app['saatavuus'] == 'beta' else ''


def app_item(app, topic, mode):
    href = with_params(app['osoite'], aihe=topic['anchor'], tapa=mode) if app['aiheparametri'] else app['osoite']
    tool = TOOL_LABELS[app['valine']]
    return (f'      <li><a class="mode-card" href="{esc(href)}">'
            f'<strong class="mode-card-title">{esc(app["nimi"])}{badge(app)}</strong>'
            f'<span class="mode-card-text">{esc(app["kuvaus"])}</span>'
            f'<span class="mode-card-meta">Harjoittaa: {esc(app["taito"].lower())} · {esc(tool)}</span>'
            f'<span class="mode-card-arrow" aria-hidden="true">→</span></a></li>')


def study_item(page, mode, registry, topic):
    kind = next(k for k in page['tehtava'] if k in registry['tavat'][mode]['tehtavat'])
    # Lisäaiheesta avattaessa aihe kulkee mukana, jotta paluu osuu samaan aiheeseen. Oma aihe päätellään kansiosta.
    aihe = topic['anchor'] if topic['slug'] != page['aihe'] else None
    return (f'      <li><a href="{esc(with_params(page["osoite"], aihe=aihe, tapa=mode))}"><span class="mode-kind">'
            f'{esc(registry["tehtavat"][kind]["nimi"])}</span> <strong>{esc(page["nimi"])}</strong></a>'
            f'<span class="mode-desc">{esc(page["kuvaus"])}</span></li>')


def switch(topic, current, counts):
    links = [f'<a href="oppi/{topic["slug"]}/index.html">Opi &amp; oivalla</a>']
    for mode, name, page in (('pelit', 'Musapelit', 'musapelit.html'), ('kitara', 'Kitaratreeni', 'kitaratreeni.html')):
        if mode == current:
            continue
        label = name if counts[mode].get(topic['slug']) else f'{name} <span class="mode-none">(ei sisältöä)</span>'
        links.append(f'<a href="{page}#{topic["anchor"]}">{label}</a>')
    return (f'    <p class="mode-switch"><span>Sama aihe:</span> ' + ' · '.join(links) + '</p>')


def topic_jump(topics, mode, counts):
    items = []
    for number, topic in enumerate(topics, 1):
        count = counts[mode].get(topic['slug'], 0)
        state = '' if count else ' class="is-empty"'
        amount = (f'{count} <span class="mode-sr">{"sisältö" if count == 1 else "sisältöä"}</span>' if count
                  else '– <span class="mode-sr">ei sisältöä</span>')
        items.append(f'    <li{state}><a href="#{topic["anchor"]}"><span class="mode-num" aria-hidden="true">{number:02d}</span> '
                     f'{esc(topic["title"])}<span class="mode-count">{amount}</span></a></li>')
    return ('  <nav class="mode-jump" aria-label="Aiheet">\n  <ol>\n' + '\n'.join(items) + '\n  </ol>\n  </nav>\n')


def mode_page(mode, topics, apps, study, registry, counts):
    section = {s['id']: s for s in registry['osiot']}[mode]
    texts = {
        'pelit': ('Musapelit',
                  'Kuuntele, tunnista ja pelaa. Jokainen peli kertoo, mitä taitoa se harjoittaa. '
                  'Saman aiheen soittoharjoitukset oikealla kitaralla ovat Kitaratreenissä.'),
        'kitara': ('Kitaratreeni',
                   'Ota kitara käteen ja aloita mistä tahansa aiheesta. Aiheet ovat samat kuin Oppimiskartassa, '
                   'eikä teoriaa tarvitse lukea ensin.'),
    }
    title, lead = texts[mode]
    out = [head(title, section['kuvaus']).replace('{nav}', main_nav(page_path(section['osoite']), registry, '  '))]
    out.append('<main class="mode-main" id="sisalto">\n')
    out.append(f'  <div class="mode-intro">\n  <h1>{title}</h1>\n  <p class="mode-lead">{lead}</p>\n  </div>\n')
    if mode == 'kitara':
        out.append('  <p class="mode-helper mode-all"><span>Kaikki harjoituspolut yhdessä paikassa:</span> '
                   '<a href="kitaraharjoittelija.html">Kitaraharjoittelija</a></p>\n')
        out.append('  <p class="mode-note">Harjoitussivun <em>Merkitse tehdyksi</em> on oma kuittauksesi. '
                   'Se ei tarkoita, että soittotaito olisi todettu hallituksi.</p>\n')
    out.append(topic_jump(topics, mode, counts))
    for number, topic in enumerate(topics, 1):
        slug = topic['slug']
        topic_apps = [a for a in apps.values() if mode in a['tavat'] and slug in a['aiheet'] and a['saatavuus'] != 'suunniteltu']
        pages = [p for p in study.values() if mode in p['tavat'] and slug in p['aiheet']]
        out.append(f'  <section class="mode-topic{"" if topic_apps or pages else " is-empty"}" id="{topic["anchor"]}" '
                   f'aria-labelledby="{topic["anchor"]}-otsikko">\n')
        out.append(f'    <h2 id="{topic["anchor"]}-otsikko"><span class="mode-num">{number:02d}</span> {esc(topic["title"])}</h2>\n')
        if not topic_apps and not pages:
            other = 'kitara' if mode == 'pelit' else 'pelit'
            alt = ('Kitaratreenistä' if other == 'kitara' else 'Musapeleistä')
            text = registry['tavat'][mode]['merkinta']
            extra = (f' Saman aiheen harjoituksia löydät <a href="{"kitaratreeni" if other == "kitara" else "musapelit"}.html#{topic["anchor"]}">'
                     f'{alt}</a>.' if counts[other].get(slug) else '')
            out.append(f'    <p class="mode-empty">{text} Jatka aiheen oppitunneista: '
                       f'<a href="oppi/{slug}/index.html">Opi &amp; oivalla</a>.{extra}</p>\n')
        else:
            if topic_apps:
                out.append('    <ul class="mode-cards" role="list">\n' + '\n'.join(app_item(a, topic, mode) for a in topic_apps) + '\n    </ul>\n')
            if pages:
                heading = 'Kuuntelutehtävät oppitunneilta' if mode == 'pelit' else 'Soita oppitunnin harjoitus'
                out.append(f'    <h3 class="mode-sub">{heading}</h3>\n')
                out.append('    <ul class="mode-list" role="list">\n' + '\n'.join(study_item(p, mode, registry, topic) for p in pages) + '\n    </ul>\n')
            if mode == 'kitara':
                for helper in registry.get('apuvalineet', {}).get(slug, []):
                    app_id, _, view_id = helper['nakyma'].partition('/')
                    tool = apps[app_id]
                    view = next(v for v in tool['nakymat'] if v['id'] == view_id)
                    href = with_params(view['osoite'], aihe=topic['anchor'], tapa=mode) if helper.get('aiheparametri') else view['osoite']
                    out.append(f'    <p class="mode-helper"><span>Soittopakista:</span> <a href="{esc(href)}">'
                               f'{esc(tool["nimi"])} · {esc(view["nimi"])}</a></p>\n')
            out.append(switch(topic, mode, counts) + '\n')
        out.append('  </section>\n')
    out.append('</main>\n\n')
    out.append(FOOT)
    return ''.join(out)


def toolkit_page(topics, apps, registry):
    section = {s['id']: s for s in registry['osiot']}['pakki']
    by_slug = {t['slug']: t for t in topics}
    numbers = {t['slug']: n for n, t in enumerate(topics, 1)}
    out = [head('Soittopakki', section['kuvaus']).replace('{nav}', main_nav('soittopakki.html', registry, '  '))]
    out.append('<main class="mode-main" id="sisalto">\n')
    out.append('  <div class="mode-intro">\n  <h1>Soittopakki</h1>\n'
               '  <p class="mode-lead">Apuvälineet soittamiseen ja tutkimiseen. Käytä niitä itsenäisesti tai avaa ne '
               'harjoituksen yhteydessä Kitaratreenistä, jolloin näkymä on valmiiksi rajattu aiheeseen.</p>\n  </div>\n')
    for app in (a for a in apps.values() if 'pakki' in a['tavat'] and a['saatavuus'] != 'suunniteltu'):
        tool_id = app['id'].partition(':')[2]
        out.append(f'  <section class="mode-tool" id="{tool_id}" aria-labelledby="{tool_id}-otsikko">\n')
        out.append(f'    <h2 id="{tool_id}-otsikko">{esc(app["nimi"])}{badge(app)}</h2>\n')
        out.append(f'    <p class="mode-desc">{esc(app["kuvaus"])}</p>\n')
        if app['saatavuus'] == 'upotettu':
            out.append(f'    <p><a class="mode-action" href="{esc(app["osoite"])}">Avaa Riffiharjoitus ja viritin</a></p>\n')
            out.append('    <p class="mode-note">Viritin tarvitsee mikrofonin. Mikrofonin ääni käsitellään vain selaimessa. '
                       'Viritin ei kirjaa harjoitustuloksia.</p>\n')
        else:
            out.append(f'    <p><a class="mode-action" href="{esc(app["osoite"])}">Avaa {esc(app["nimi"])}</a></p>\n')
        views = app.get('nakymat', [])
        if views:
            out.append('    <h3 class="mode-sub">Avaa valmiiksi rajattu näkymä</h3>\n')
            out.append('    <ul class="mode-list" role="list">\n')
            for view in views:
                topic = by_slug[view['aihe']]
                out.append(f'      <li><a href="{esc(view["osoite"])}"><strong>{esc(view["nimi"])}</strong></a>'
                           f'<span class="mode-desc">{esc(view["kuvaus"])} Aihe {numbers[view["aihe"]]:02d}: '
                           f'<a href="oppi/{topic["slug"]}/index.html">{esc(topic["title"])}</a>.</span></li>\n')
            out.append('    </ul>\n')
        out.append('  </section>\n')
    out.append('</main>\n\n')
    out.append(FOOT)
    return ''.join(out)


OUTPUTS = ('musapelit.html', 'kitaratreeni.html', 'soittopakki.html')


def build(registry_file=REGISTRY_FILE):
    config, registry = load(registry_file)
    apps, study = validate(config, registry)
    topics = config['topics']
    counts = {mode: {} for mode in MODES}
    for mode in MODES:
        for app in apps.values():
            if mode in app['tavat'] and app['saatavuus'] != 'suunniteltu':
                for topic in app['aiheet']:
                    counts[mode][topic] = counts[mode].get(topic, 0) + 1
        for page in study.values():
            if mode in page['tavat']:
                for topic in page['aiheet']:
                    counts[mode][topic] = counts[mode].get(topic, 0) + 1
    files = {
        'musapelit.html': mode_page('pelit', topics, apps, study, registry, counts),
        'kitaratreeni.html': mode_page('kitara', topics, apps, study, registry, counts),
        'soittopakki.html': toolkit_page(topics, apps, registry),
    }
    for path in nav_pages(registry):
        text = (ROOT / path).read_text(encoding='utf-8')
        files[path] = with_tool_script(path, with_nav(path, text, registry))
    files[TOOL_SCRIPT] = mode_script(config, registry, counts, apps, study)
    return files


def conditions(href, keys):
    """Osoitteen kyselyparametrit, jotka tunnistavat sisällön samassa tiedostossa (esim. {'tila': 'peli'})."""
    query = parse_qs(urlsplit(href).query)
    return {key: query[key][0] for key in keys if key in query}


def mode_pages(mode, topics, registry, apps, study):
    """Oppimistapaan kuuluvat sivut ja aiheet, joissa ne näkyvät (ensimmäinen on sivun oma aihe).
    oppimistapa.js säilyttää ?tapa=…-parametrin vain näillä sivuilla ja näihin sivuihin vievissä linkeissä."""
    anchors = {t['slug']: t['anchor'] for t in topics}
    pages = {}

    def add(path, required, slugs):
        variants = pages.setdefault(path, [])
        variant = next((v for v in variants if v['ehdot'] == required), None)
        if variant is None:
            variant = {'ehdot': required, 'aiheet': []}
            variants.append(variant)
        variant['aiheet'] += [anchors[slug] for slug in slugs if anchors[slug] not in variant['aiheet']]

    for page in (p for p in study.values() if mode in p['tavat']):
        add(page['osoite'], {}, page['aiheet'])
    for app in apps.values():
        if mode in app['tavat'] and app['aiheparametri'] and app['saatavuus'] != 'suunniteltu':
            add(page_path(app['osoite']), conditions(app['osoite'], app.get('tunnistus', [])), app['aiheet'])
    if mode == 'kitara':
        for slug, helpers in registry.get('apuvalineet', {}).items():
            for helper in helpers:
                app_id, _, view_id = helper['nakyma'].partition('/')
                view = next(v for v in apps[app_id]['nakymat'] if v['id'] == view_id)
                add(page_path(view['osoite']), conditions(view['osoite'], apps[app_id].get('tunnistus', [])), [slug])
    return dict(sorted(pages.items()))


def related_contexts(config):
    """Opi & oivalla: Tutki myös -linkit toisen aiheen sisältösivulle (aiheet.json, related). Sivun
    aihepaluu saa palata lähtöaiheeseen vain näissä aiheissa (?aihe=… ohitetaan muuten)."""
    paths = {}
    for topic in config['topics']:
        for key in topic['related']:
            target = f'oppi/{key}.html'
            if '/' in key and (ROOT / target).exists() and not key.startswith(topic['slug'] + '/'):
                paths.setdefault(target, []).append(topic['anchor'])
    return dict(sorted(paths.items()))


def mode_script(config, registry, counts, apps, study):
    """assets/oppimistapa.js:n tietolohko: aiheiden nimet, oppimistapojen sisältömäärät ja niihin kuuluvat sivut."""
    source = (ROOT / TOOL_SCRIPT).read_text(encoding='utf-8')
    start, end = '  // oppimistapa:tiedot\n', '  // /oppimistapa:tiedot\n'
    if source.count(start) != 1 or source.count(end) != 1:
        raise RegistryError(f'{TOOL_SCRIPT}: tietolohkon rajat puuttuvat')
    topics = config['topics']
    names = {s['id']: s for s in registry['osiot']}
    data = {t['anchor']: {'slug': t['slug'], 'title': t['title'], 'paluu': t['back_label']} for t in topics}
    modes = {mode: {'nimi': names[mode]['nimi'], 'osoite': names[mode]['osoite'], 'tyhja': registry['tavat'][mode]['tyhja'],
                    'aiheet': {t['anchor']: counts[mode][t['slug']] for t in topics if counts[mode].get(t['slug'])},
                    'sivut': mode_pages(mode, topics, registry, apps, study)}
             for mode in MODES}
    block = (f'  const TOPICS = {json.dumps(data, ensure_ascii=False)};\n'
             f'  const MODES = {json.dumps(modes, ensure_ascii=False)};\n'
             f'  const RELATED = {json.dumps(related_contexts(config), ensure_ascii=False)};\n')
    head, rest = source.split(start)
    return head + start + block + end + rest.split(end, 1)[1]


def with_tool_script(path, text):
    """Lisää työkalusivulle oppimistapa.js:n heti oppimiskartta.js:n jälkeen (sama defer-järjestys)."""
    if path not in TOOL_PAGES or TOOL_SCRIPT in text:
        return text
    tag = re.search(r'([ \t]*)<script defer src="assets/oppimiskartta\.js"></script>\n', text)
    if not tag:
        raise RegistryError(f'{path}: oppimiskartta.js-skriptiä ei löydy')
    return text[:tag.end()] + f'{tag.group(1)}<script defer src="{TOOL_SCRIPT}"></script>\n' + text[tag.end():]


def versioned(files):
    """Tyylitiedostojen versiotunnisteet samalla tavalla kuin tools/versioi-tyylit.mjs."""
    import hashlib

    def tag(match):
        href = match.group(2)
        digest = hashlib.sha256((ROOT / href).read_bytes()).hexdigest()[:10]
        return f'{match.group(1)}{href}?v={digest}{match.group(3)}'
    for path in OUTPUTS:
        files[path] = re.sub(r'(<link rel="stylesheet" href=")([^"?#]+\.css)(?:\?v=[0-9a-f]*)?(")', tag, files[path])
    return files


def main():
    args = sys.argv[1:]
    check = '--tarkista' in args
    registry_file = args[args.index('--rekisteri') + 1] if '--rekisteri' in args else REGISTRY_FILE
    try:
        files = versioned(build(registry_file))
    except RegistryError as error:
        print('Sisältörekisterin virheet:\n' + str(error), file=sys.stderr)
        return 1
    if '--validoi' in args:
        return 0
    stale = [path for path, text in files.items()
             if not (ROOT / path).exists() or (ROOT / path).read_text(encoding='utf-8') != text]
    if check:
        for path in stale:
            print(f'Vanhentunut: {path} (aja python3 tools/oppimiskartta/rakenna-osiot.py)', file=sys.stderr)
        return 1 if stale else 0
    for path in stale:
        (ROOT / path).write_text(files[path], encoding='utf-8')
    print(f'Päivitetty {len(stale)} tiedostoa.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
