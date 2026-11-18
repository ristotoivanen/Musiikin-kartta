// Oppimistavan jatkuvuus Musapelien ja Kitaratreenin välillä (Musiikin kartan neljä pääosiota).
//
// 1. Kun sivu avataan Musapeleistä tai Kitaratreenistä, linkissä on ?tapa=pelit tai ?tapa=kitara.
//    Jos sivu kuuluu kyseiseen oppimistapaan (MODES.*.sivut), sivun aihepaluu (Oppimiskartan ← Aiheeseen tai
//    työkalujen Takaisin aiheeseen) vie takaisin samaan oppimistapaan ja aiheeseen, ja päävalikko näyttää
//    osion aktiivisena. Edellinen/Seuraava säilyttää parametrin vain, kun kohdesivu kuuluu samaan
//    oppimistapaan. Muualle siirryttäessä käytössä on tavallinen Oppimiskartan navigointi.
//    Ilman parametria tai muulla sivulla mikään ei muutu: vanhat suorat osoitteet toimivat kuten ennenkin.
// 2. Oppimiskartan aihesivulle lisätään rivi "Sama aihe: Musapelit · Kitaratreeni".
//
// Skripti ei lue eikä kirjoita tallennuksia. Aihe- ja sisältömäärät muodostetaan komennolla
// python3 tools/oppimiskartta/rakenna-osiot.py sisältörekisteristä; älä muokkaa lohkoa käsin.
(() => {
  // oppimistapa:tiedot
  const TOPICS = {"aihe-kitara": {"slug": "kitara", "title": "Kitaran perusteet"}, "aihe-rytmi": {"slug": "rytmi", "title": "Rytmi"}, "aihe-nuotit": {"slug": "savelnimet", "title": "Sävelnimet ja sointumerkinnät"}, "aihe-korva": {"slug": "korva", "title": "Sävelkorva ja melodia"}, "aihe-otelauta": {"slug": "otelauta", "title": "Otelauta"}, "aihe-soinnut": {"slug": "soinnut", "title": "Soinnut ja harmonia"}, "aihe-asteikot": {"slug": "asteikot", "title": "Asteikot ja moodit"}, "aihe-kappaleet": {"slug": "kappaleet", "title": "Kappaleet ja oma musiikki"}};
  const MODES = {"pelit": {"nimi": "Musapelit", "osoite": "musapelit.html", "tyhja": "ei peliä", "aiheet": {"aihe-korva": 4, "aihe-otelauta": 1, "aihe-soinnut": 2, "aihe-kappaleet": 1}, "sivut": {"kitaraharjoittelija.html": ["aihe-otelauta", "aihe-soinnut"], "oppi/kappaleet/mika-sointu-tulee.html": ["aihe-kappaleet", "aihe-soinnut"], "oppi/korva/mika-aste-soi.html": ["aihe-korva"], "oppi/korva/tunnista-sointutyyppi.html": ["aihe-korva"], "pelit/ensikeikka/index.html": ["aihe-korva"], "riffikaiku.html": ["aihe-korva"]}}, "kitara": {"nimi": "Kitaratreeni", "osoite": "kitaratreeni.html", "tyhja": "ei harjoitusta", "aiheet": {"aihe-kitara": 3, "aihe-rytmi": 2, "aihe-nuotit": 1, "aihe-korva": 7, "aihe-otelauta": 4, "aihe-soinnut": 9, "aihe-asteikot": 5, "aihe-kappaleet": 7}, "sivut": {"kitaraharjoittelija.html": ["aihe-asteikot", "aihe-kappaleet"], "oppi/asteikot/etsi-puoliaskeleet.html": ["aihe-asteikot"], "oppi/asteikot/kysymys-ja-vastaus-koko-boksilla.html": ["aihe-asteikot"], "oppi/asteikot/tee-kolmesta-savelesta-melodia.html": ["aihe-asteikot"], "oppi/asteikot/vaihda-f-nauhaa-ylemmas.html": ["aihe-asteikot"], "oppi/kappaleet/aanita-kahdeksan-tahtia.html": ["aihe-kappaleet"], "oppi/kappaleet/etsi-ensimmainen-melodiasavel.html": ["aihe-kappaleet"], "oppi/kappaleet/sama-kappale-c-duurissa.html": ["aihe-kappaleet"], "oppi/kappaleet/soita-kysymys-ja-vastaus.html": ["aihe-kappaleet"], "oppi/kappaleet/tee-sointukartta.html": ["aihe-kappaleet"], "oppi/kappaleet/vaihda-saestysta.html": ["aihe-kappaleet"], "oppi/kitara/sointukierrot.html": ["aihe-kitara"], "oppi/kitara/soita-ensin-basso.html": ["aihe-kitara"], "oppi/kitara/vaihto-ja-sointukartta.html": ["aihe-kitara"], "oppi/korva/etsi-jalkimmainen-savel.html": ["aihe-korva"], "oppi/korva/kolme-c-sointua.html": ["aihe-korva"], "oppi/korva/kumpi-on-molli.html": ["aihe-korva"], "oppi/korva/kuuntele-bassolinja.html": ["aihe-korva"], "oppi/korva/taydenna-fraasi.html": ["aihe-korva"], "oppi/korva/vaihda-kotisavelta.html": ["aihe-korva"], "oppi/otelauta/etsi-a-ilman-asteikkokuviota.html": ["aihe-otelauta"], "oppi/otelauta/etsi-sama-savel.html": ["aihe-otelauta"], "oppi/otelauta/etsi-savel-kahdelta-kielelta.html": ["aihe-otelauta"], "oppi/otelauta/soita-c-kahdesta-kohdasta.html": ["aihe-otelauta"], "oppi/rytmi/alas-ylos-yhdella-soinnulla.html": ["aihe-rytmi"], "oppi/rytmi/kaksi-sointua-yhdessa-tahdissa.html": ["aihe-rytmi"], "oppi/savelnimet/siirra-yhta-sormea.html": ["aihe-nuotit"], "oppi/soinnut/etsi-barresointu.html": ["aihe-soinnut"], "oppi/soinnut/ii-v-i-kahdessa-savellajissa.html": ["aihe-soinnut"], "oppi/soinnut/kaikuluotain.html": ["aihe-soinnut"], "oppi/soinnut/laula-paluu.html": ["aihe-soinnut"], "oppi/soinnut/rakenna-barre.html": ["aihe-soinnut"], "oppi/soinnut/siirra-keskelle-d.html": ["aihe-soinnut"], "oppi/soinnut/siirra-kierto-c-duuriin.html": ["aihe-soinnut"], "oppi/soinnut/siirra-kierto-d-duuriin.html": ["aihe-soinnut"], "oppi/soinnut/soita-septimisoinnut.html": ["aihe-soinnut"], "otelautaharjoittelija.html": ["aihe-otelauta", "aihe-soinnut", "aihe-asteikot"], "riffikaiku.html": ["aihe-korva"]}}};
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
  const tapa = params.get('tapa');
  const mode = Object.hasOwn(MODES, tapa) ? MODES[tapa] : null;
  // Oppimistapa on voimassa vain sivulla, joka kuuluu siihen. Aihe on ?aihe=…, jos sivu näkyy siinä, muuten sivun oma aihe.
  const topics = mode?.sivut[pathOf(new URL(location.href))];
  const topic = topics && (topics.includes(params.get('aihe')) ? params.get('aihe') : topics[0] ?? anchorOf(folder));

  if (mode && topic) {
    const label = mode.nimi + ': ' + TOPICS[topic].title;
    const back = document.querySelector('.study-up .study-back');
    if (back && !document.querySelector('[data-study-topic]')) {
      back.href = modeHref(mode, topic);
      const arrow = Object.assign(document.createElement('span'), { textContent: '←' });
      arrow.setAttribute('aria-hidden', 'true');
      back.replaceChildren(arrow, ' ' + label);
    }
    // Työkalujen paluulinkki syntyy assets/oppimiskartta.js:ssä, joka ajetaan ennen tätä skriptiä.
    const tool = document.querySelector('.map-return a');
    if (tool) {
      tool.href = modeHref(mode, topic);
      tool.textContent = 'Takaisin: ' + label;
    }
    // Edellinen/Seuraava pitää oppimistavan mukana vain, kun kohdesivu kuuluu samaan oppimistapaan.
    for (const link of document.querySelectorAll('.study-steps a[rel="prev"], .study-steps a[rel="next"]')) {
      const url = new URL(link.href);
      if (!Object.hasOwn(mode.sivut, pathOf(url))) continue;
      url.searchParams.set('tapa', tapa);
      link.href = url.href;
    }
    const nav = document.querySelector('.main-nav');
    const section = nav?.querySelector(`a[href$="${mode.osoite}"]`);
    if (section && !section.hasAttribute('aria-current')) {
      nav.querySelectorAll('ul a[aria-current]').forEach(link => link.removeAttribute('aria-current'));
      section.setAttribute('aria-current', 'true');
    }
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
