// Oppimistavan jatkuvuus Musapelien ja Kitaratreenin välillä (Musiikin kartan neljä pääosiota).
//
// 1. Kun sivu avataan Musapeleistä tai Kitaratreenistä, linkissä on ?tapa=pelit tai ?tapa=kitara.
//    Jos sivu kuuluu kyseiseen oppimistapaan (MODES.*.sivut; samassa tiedostossa eri oppimistavat erotetaan
//    osoitteen parametreilla, esim. riffikaiku.html?tila=peli), sivun aihepaluu (Oppimiskartan ← Aiheeseen tai
//    työkalujen Takaisin aiheeseen) vie takaisin samaan oppimistapaan ja aiheeseen, ja päävalikko näyttää
//    osion aktiivisena. Edellinen/Seuraava säilyttää parametrin vain, kun kohdesivu kuuluu samaan
//    oppimistapaan. Muualle siirryttäessä käytössä on tavallinen Oppimiskartan navigointi.
//    Ilman parametria tai muulla sivulla mikään ei muutu: vanhat suorat osoitteet toimivat kuten ennenkin.
// 2. Opi & oivalla: aihesivun Tutki myös -linkki toisen aiheen sisältösivulle kuljettaa lähtöaiheen (?aihe=…).
//    Jos sivu on lähtöaiheen Tutki myös -listassa (RELATED), sivun aihepaluu vie lähtöaiheeseen.
// 3. Oppimiskartan aihesivulle lisätään rivi "Sama aihe: Musapelit · Kitaratreeni".
//
// Skripti ei lue eikä kirjoita tallennuksia. Aihe- ja sisältömäärät muodostetaan komennolla
// python3 tools/oppimiskartta/rakenna-osiot.py sisältörekisteristä; älä muokkaa lohkoa käsin.
(() => {
  // oppimistapa:tiedot
  const TOPICS = {"aihe-kitara": {"slug": "kitara", "title": "Kitaran perusteet", "paluu": "Kitaran perusteisiin"}, "aihe-rytmi": {"slug": "rytmi", "title": "Rytmi", "paluu": "Rytmiin"}, "aihe-nuotit": {"slug": "savelnimet", "title": "Sävelnimet ja sointumerkinnät", "paluu": "Sävelnimiin ja sointumerkintöihin"}, "aihe-korva": {"slug": "korva", "title": "Sävelkorva ja melodia", "paluu": "Sävelkorvaan ja melodiaan"}, "aihe-otelauta": {"slug": "otelauta", "title": "Otelauta", "paluu": "Otelautaan"}, "aihe-soinnut": {"slug": "soinnut", "title": "Soinnut ja harmonia", "paluu": "Sointuihin ja harmoniaan"}, "aihe-asteikot": {"slug": "asteikot", "title": "Asteikot ja moodit", "paluu": "Asteikkoihin ja moodeihin"}, "aihe-kappaleet": {"slug": "kappaleet", "title": "Kappaleet ja oma musiikki", "paluu": "Kappaleisiin ja omaan musiikkiin"}};
  const MODES = {"pelit": {"nimi": "Musapelit", "osoite": "musapelit.html", "tyhja": "ei peliä", "aiheet": {"aihe-korva": 4, "aihe-otelauta": 2, "aihe-soinnut": 3, "aihe-kappaleet": 1}, "sivut": {"kitaraharjoittelija.html": [{"ehdot": {"polku": "otelauta", "harjoitus": "savelten-etsinta"}, "aiheet": ["aihe-otelauta"]}, {"ehdot": {"polku": "soinnut"}, "aiheet": ["aihe-soinnut"]}], "oppi/kappaleet/mika-sointu-tulee.html": [{"ehdot": {}, "aiheet": ["aihe-kappaleet", "aihe-soinnut"]}], "oppi/korva/mika-aste-soi.html": [{"ehdot": {}, "aiheet": ["aihe-korva"]}], "oppi/korva/tunnista-sointutyyppi.html": [{"ehdot": {}, "aiheet": ["aihe-korva"]}], "pelit/ensikeikka/index.html": [{"ehdot": {}, "aiheet": ["aihe-korva"]}], "riffikaiku.html": [{"ehdot": {"tila": "peli"}, "aiheet": ["aihe-korva"]}], "savelverkko.html": [{"ehdot": {}, "aiheet": ["aihe-otelauta"]}], "sointipaja-prototyyppi.html": [{"ehdot": {}, "aiheet": ["aihe-soinnut"]}]}}, "kitara": {"nimi": "Kitaratreeni", "osoite": "kitaratreeni.html", "tyhja": "ei harjoitusta", "aiheet": {"aihe-kitara": 3, "aihe-rytmi": 2, "aihe-nuotit": 1, "aihe-korva": 7, "aihe-otelauta": 4, "aihe-soinnut": 9, "aihe-asteikot": 5, "aihe-kappaleet": 7}, "sivut": {"kitaraharjoittelija.html": [{"ehdot": {"polku": "asteikot"}, "aiheet": ["aihe-asteikot"]}, {"ehdot": {"polku": "kappaleet"}, "aiheet": ["aihe-kappaleet"]}], "oppi/asteikot/etsi-puoliaskeleet.html": [{"ehdot": {}, "aiheet": ["aihe-asteikot"]}], "oppi/asteikot/kysymys-ja-vastaus-koko-boksilla.html": [{"ehdot": {}, "aiheet": ["aihe-asteikot"]}], "oppi/asteikot/tee-kolmesta-savelesta-melodia.html": [{"ehdot": {}, "aiheet": ["aihe-asteikot"]}], "oppi/asteikot/vaihda-f-nauhaa-ylemmas.html": [{"ehdot": {}, "aiheet": ["aihe-asteikot"]}], "oppi/kappaleet/aanita-kahdeksan-tahtia.html": [{"ehdot": {}, "aiheet": ["aihe-kappaleet"]}], "oppi/kappaleet/etsi-ensimmainen-melodiasavel.html": [{"ehdot": {}, "aiheet": ["aihe-kappaleet"]}], "oppi/kappaleet/sama-kappale-c-duurissa.html": [{"ehdot": {}, "aiheet": ["aihe-kappaleet"]}], "oppi/kappaleet/soita-kysymys-ja-vastaus.html": [{"ehdot": {}, "aiheet": ["aihe-kappaleet"]}], "oppi/kappaleet/tee-sointukartta.html": [{"ehdot": {}, "aiheet": ["aihe-kappaleet"]}], "oppi/kappaleet/vaihda-saestysta.html": [{"ehdot": {}, "aiheet": ["aihe-kappaleet"]}], "oppi/kitara/sointukierrot.html": [{"ehdot": {}, "aiheet": ["aihe-kitara"]}], "oppi/kitara/soita-ensin-basso.html": [{"ehdot": {}, "aiheet": ["aihe-kitara"]}], "oppi/kitara/vaihto-ja-sointukartta.html": [{"ehdot": {}, "aiheet": ["aihe-kitara"]}], "oppi/korva/etsi-jalkimmainen-savel.html": [{"ehdot": {}, "aiheet": ["aihe-korva"]}], "oppi/korva/kolme-c-sointua.html": [{"ehdot": {}, "aiheet": ["aihe-korva"]}], "oppi/korva/kumpi-on-molli.html": [{"ehdot": {}, "aiheet": ["aihe-korva"]}], "oppi/korva/kuuntele-bassolinja.html": [{"ehdot": {}, "aiheet": ["aihe-korva"]}], "oppi/korva/taydenna-fraasi.html": [{"ehdot": {}, "aiheet": ["aihe-korva"]}], "oppi/korva/vaihda-kotisavelta.html": [{"ehdot": {}, "aiheet": ["aihe-korva"]}], "oppi/otelauta/etsi-a-ilman-asteikkokuviota.html": [{"ehdot": {}, "aiheet": ["aihe-otelauta"]}], "oppi/otelauta/etsi-sama-savel.html": [{"ehdot": {}, "aiheet": ["aihe-otelauta"]}], "oppi/otelauta/etsi-savel-kahdelta-kielelta.html": [{"ehdot": {}, "aiheet": ["aihe-otelauta"]}], "oppi/otelauta/soita-c-kahdesta-kohdasta.html": [{"ehdot": {}, "aiheet": ["aihe-otelauta"]}], "oppi/rytmi/alas-ylos-yhdella-soinnulla.html": [{"ehdot": {}, "aiheet": ["aihe-rytmi"]}], "oppi/rytmi/kaksi-sointua-yhdessa-tahdissa.html": [{"ehdot": {}, "aiheet": ["aihe-rytmi"]}], "oppi/savelnimet/siirra-yhta-sormea.html": [{"ehdot": {}, "aiheet": ["aihe-nuotit"]}], "oppi/soinnut/etsi-barresointu.html": [{"ehdot": {}, "aiheet": ["aihe-soinnut"]}], "oppi/soinnut/ii-v-i-kahdessa-savellajissa.html": [{"ehdot": {}, "aiheet": ["aihe-soinnut"]}], "oppi/soinnut/kaikuluotain.html": [{"ehdot": {}, "aiheet": ["aihe-soinnut"]}], "oppi/soinnut/laula-paluu.html": [{"ehdot": {}, "aiheet": ["aihe-soinnut"]}], "oppi/soinnut/rakenna-barre.html": [{"ehdot": {}, "aiheet": ["aihe-soinnut"]}], "oppi/soinnut/siirra-keskelle-d.html": [{"ehdot": {}, "aiheet": ["aihe-soinnut"]}], "oppi/soinnut/siirra-kierto-c-duuriin.html": [{"ehdot": {}, "aiheet": ["aihe-soinnut"]}], "oppi/soinnut/siirra-kierto-d-duuriin.html": [{"ehdot": {}, "aiheet": ["aihe-soinnut"]}], "oppi/soinnut/soita-septimisoinnut.html": [{"ehdot": {}, "aiheet": ["aihe-soinnut"]}], "otelautaopas-beta.html": [{"ehdot": {}, "aiheet": ["aihe-otelauta", "aihe-soinnut", "aihe-asteikot"]}], "riffikaiku.html": [{"ehdot": {"tila": "harjoitus"}, "aiheet": ["aihe-korva"]}]}}};
  const RELATED = {"oppi/asteikot/asteikot.html": ["aihe-nuotit", "aihe-soinnut"], "oppi/asteikot/pentatoniikka.html": ["aihe-kappaleet"], "oppi/kappaleet/improvisointi.html": ["aihe-asteikot"], "oppi/kappaleet/kappale.html": ["aihe-korva"], "oppi/kappaleet/mika-sointu-tulee.html": ["aihe-soinnut"], "oppi/kitara/sointukierrot.html": ["aihe-kappaleet"], "oppi/korva/intervallit.html": ["aihe-nuotit"], "oppi/korva/soinnut.html": ["aihe-soinnut"], "oppi/savelnimet/kitaran-kielet-ja-sointumerkinnat.html": ["aihe-rytmi", "aihe-otelauta"], "oppi/savelnimet/savelet-ja-intervallit.html": ["aihe-korva", "aihe-asteikot"], "oppi/soinnut/barre.html": ["aihe-otelauta"]};
  // /oppimistapa:tiedot
  const root = new URL('../', document.currentScript?.src ?? location.href);
  const params = new URLSearchParams(location.search);
  const anchorOf = slug => Object.keys(TOPICS).find(anchor => TOPICS[anchor].slug === slug);
  const folder = location.pathname.match(/\/oppi\/([a-z]+)\/[^/]*$/)?.[1];
  const modeHref = (target, anchor) => new URL(target.osoite + '#' + anchor, root).href;
  /** Sivun polku sivuston juuresta, esimerkiksi oppi/rytmi/kuuntele-pulssi.html tai pelit/ensikeikka/index.html. */
  const pathOf = url => {
    if (url.origin !== root.origin || !url.pathname.startsWith(root.pathname)) return null;
    const path = decodeURI(url.pathname.slice(root.pathname.length));
    return path === '' || path.endsWith('/') ? path + 'index.html' : path;
  };
  /** Aiheet, joissa osoitteen sivu ja sovelluksen tila (esim. ?tila=peli) kuuluvat oppimistapaan; null jos ei kuulu. */
  const topicsIn = (target, url) => {
    const variants = (target.sivut[pathOf(url)] ?? [])
      .filter(variant => Object.entries(variant.ehdot).every(([key, value]) => url.searchParams.get(key) === value));
    return variants.length ? variants.flatMap(variant => variant.aiheet) : null;
  };
  const setBack = (href, label) => {
    const back = document.querySelector('.study-up .study-back');
    if (!back || document.querySelector('[data-study-topic]')) return;
    back.href = href;
    const arrow = Object.assign(document.createElement('span'), { textContent: '←' });
    arrow.setAttribute('aria-hidden', 'true');
    back.replaceChildren(arrow, ' ' + label);
  };
  const here = new URL(location.href);
  const tapa = params.get('tapa');
  const mode = Object.hasOwn(MODES, tapa) ? MODES[tapa] : null;
  // Oppimistapa on voimassa vain sivulla, joka kuuluu siihen. Aihe on ?aihe=…, jos sivu näkyy siinä, muuten sivun oma aihe.
  const topics = mode && topicsIn(mode, here);
  const topic = topics && (topics.includes(params.get('aihe')) ? params.get('aihe') : topics[0] ?? anchorOf(folder));

  if (mode && topic) {
    const label = mode.nimi + ': ' + TOPICS[topic].title;
    setBack(modeHref(mode, topic), label);
    // Työkalujen paluulinkki syntyy assets/oppimiskartta.js:ssä, joka ajetaan ennen tätä skriptiä.
    const tool = document.querySelector('.map-return a');
    if (tool) {
      tool.href = modeHref(mode, topic);
      tool.textContent = 'Takaisin: ' + label;
    }
    // Edellinen/Seuraava pitää oppimistavan mukana vain, kun kohdesivu kuuluu samaan oppimistapaan.
    for (const link of document.querySelectorAll('.study-steps a[rel="prev"], .study-steps a[rel="next"]')) {
      const url = new URL(link.href);
      if (!topicsIn(mode, url)) continue;
      url.searchParams.set('tapa', tapa);
      link.href = url.href;
    }
    const nav = document.querySelector('.main-nav');
    const section = nav?.querySelector(`a[href$="${mode.osoite}"]`);
    if (section && !section.hasAttribute('aria-current')) {
      nav.querySelectorAll('ul a[aria-current]').forEach(link => link.removeAttribute('aria-current'));
      section.setAttribute('aria-current', 'true');
    }
  } else if ((RELATED[pathOf(here)] ?? []).includes(params.get('aihe'))) {
    // Opi & oivalla: Tutki myös -linkistä tultaessa paluu lähtöaiheeseen. Suoritustunniste ja muu navigointi ennallaan.
    const source = TOPICS[params.get('aihe')];
    setBack(new URL(`oppi/${source.slug}/index.html`, root).href, source.paluu);
  }

  // Oppimiskartan aihesivu: saman aiheen muut oppimistavat sivun alkuun.
  const home = document.querySelector('main.study-page[data-study-topic]');
  const anchor = home?.dataset.studyTopic;
  if (home && anchor in TOPICS && !home.querySelector('.study-modes')) {
    const row = document.createElement('p');
    row.className = 'study-modes';
    row.append(Object.assign(document.createElement('span'), { textContent: 'Sama aihe:' }), ' ');
    Object.values(MODES).forEach((target, index) => {
      if (index) row.append(' · ');
      const link = Object.assign(document.createElement('a'), { href: modeHref(target, anchor), textContent: target.nimi });
      const count = target.aiheet[anchor] ?? 0;
      row.append(link, Object.assign(document.createElement('span'), {
        className: 'study-modes-count', textContent: count ? ` (${count})` : ` (${target.tyhja})`,
      }));
    });
    const lead = home.querySelector(':scope > .lead') ?? home.querySelector(':scope > h1');
    lead?.after(row);
  }
})();
