// Oppimistavan jatkuvuus Musapelien ja Kitaratreenin välillä (Musiikin kartan neljä pääosiota).
//
// 1. Kun sivu avataan Musapeleistä tai Kitaratreenistä, linkissä on ?tapa=pelit tai ?tapa=kitara.
//    Silloin sivun aihepaluu (Oppimiskartan ← Aiheeseen tai työkalujen Takaisin aiheeseen) vie takaisin
//    samaan oppimistapaan ja samaan aiheeseen, ja päävalikko näyttää kyseisen osion aktiivisena.
//    Ilman parametria mikään ei muutu: vanhat suorat osoitteet toimivat kuten ennenkin.
// 2. Oppimiskartan aihesivulle lisätään rivi "Sama aihe: Musapelit · Kitaratreeni".
//
// Skripti ei lue eikä kirjoita tallennuksia. Aihe- ja sisältömäärät muodostetaan komennolla
// python3 tools/oppimiskartta/rakenna-osiot.py sisältörekisteristä; älä muokkaa lohkoa käsin.
(() => {
  // oppimistapa:tiedot
  const TOPICS = {"aihe-kitara": {"slug": "kitara", "title": "Kitaran perusteet"}, "aihe-rytmi": {"slug": "rytmi", "title": "Rytmi"}, "aihe-nuotit": {"slug": "savelnimet", "title": "Sävelnimet ja sointumerkinnät"}, "aihe-korva": {"slug": "korva", "title": "Sävelkorva ja melodia"}, "aihe-otelauta": {"slug": "otelauta", "title": "Otelauta"}, "aihe-soinnut": {"slug": "soinnut", "title": "Soinnut ja harmonia"}, "aihe-asteikot": {"slug": "asteikot", "title": "Asteikot ja moodit"}, "aihe-kappaleet": {"slug": "kappaleet", "title": "Kappaleet ja oma musiikki"}};
  const MODES = {"pelit": {"nimi": "Musapelit", "osoite": "musapelit.html", "tyhja": "ei peliä", "aiheet": {"aihe-korva": 4, "aihe-otelauta": 1, "aihe-soinnut": 1, "aihe-kappaleet": 1}}, "kitara": {"nimi": "Kitaratreeni", "osoite": "kitaratreeni.html", "tyhja": "ei harjoitusta", "aiheet": {"aihe-kitara": 3, "aihe-rytmi": 2, "aihe-nuotit": 1, "aihe-korva": 7, "aihe-otelauta": 4, "aihe-soinnut": 9, "aihe-asteikot": 5, "aihe-kappaleet": 8}}};
  // /oppimistapa:tiedot
  const root = new URL('../', document.currentScript?.src ?? location.href);
  const params = new URLSearchParams(location.search);
  const anchorOf = slug => Object.keys(TOPICS).find(anchor => TOPICS[anchor].slug === slug);
  const folder = location.pathname.match(/\/oppi\/([a-z]+)\/[^/]*$/)?.[1];
  const topic = params.get('aihe') in TOPICS ? params.get('aihe') : anchorOf(folder);
  const mode = MODES[params.get('tapa')];
  const modeHref = (target, anchor) => new URL(target.osoite + '#' + anchor, root).href;

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
    // Saman aiheen Edellinen/Seuraava pitää oppimistavan mukana. Seuraava aihe palaa Oppimiskarttaan.
    for (const link of document.querySelectorAll('.study-steps a[rel="prev"], .study-steps a[rel="next"]:not(.study-next-topic)')) {
      const url = new URL(link.href);
      url.searchParams.set('tapa', params.get('tapa'));
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
