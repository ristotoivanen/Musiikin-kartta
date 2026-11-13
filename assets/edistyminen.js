// Edistymisen merkintä ja vanhojen lukulinkkien ohjaus.
//
// Lukija voi merkitä luvun tehdyksi. Musiikin teoria -sivu (book/index.html) näyttää osien ja
// kokonaisuuksien edistymisen sekä seuraavan luvun, ja etusivu lyhyen jatkamislinkin.
// Tieto tallentuu vain tämän selaimen localStorageen; jos tallennus ei ole käytössä (esimerkiksi
// yksityinen ikkuna), painikkeet toimivat sivun ajan mutta merkinnät eivät säily.
//
// PARTS-taulukossa ovat jokaisen osan luvut ja muut ankkurit, joihin linkit voivat osoittaa.
// Kun linkin ankkuria ei ole avatulla sivulla, lukija ohjataan osaan, jossa se nykyään on. Näin
// viiden osan jaon aikaiset linkit (esimerkiksi osa-3.html#caged) vievät oikeaan sisältöön.
// tools/linkit/tarkista-linkit.py tarkistaa, että taulukko vastaa sivuja.
(() => {
  const KEY = 'musiikin-kartta:luvut';
  const OLD_KEY = 'musiikin-kartta:tehdyt';
  const PARTS = [
    { slug: 'osa-1', name: 'Osa 1', chapters: [['pulssi-ja-komppi', 1, 'Pulssi ja komppi'], ['sointukierrot', 2, 'Neljä otetta ja ensimmäinen kappale']],
      anchors: ['pulssi-aanite', 'kahdeksasosat', 'kitaran-merkinnat', 'alas-ylos-komppi', 'vaihto-kolmosella', 'kolme-cowboyta'] },
    { slug: 'osa-2', name: 'Osa 2', chapters: [['musiikki-on-kieli', 3, 'Musiikki on kieli'], ['savelet-ja-intervallit', 4, 'Sävelet ja intervallit'], ['asteikot', 5, 'Asteikot']],
      anchors: ['h-savelnimi'] },
    { slug: 'osa-3', name: 'Osa 3', chapters: [['harmoninen-kentta', 6, 'Harmoninen kenttä'], ['roomalaiset-numerot', 7, 'Roomalaiset numerot'], ['sointujen-tehtavat', 8, 'Sointujen tehtävät'], ['kappale-asteina', 9, 'Kolme cowboyta roomalaisin numeroin']],
      anchors: ['kaikuluotain', 'neljas-savel', 'asteiden-varit'] },
    { slug: 'osa-4', name: 'Osa 4', chapters: [['savellajin-tunnistaminen', 10, 'Sävellajin tunnistaminen'], ['kvinttiympyra', 11, 'Kvinttiympyrä'], ['transponointi', 12, 'Transponointi']],
      anchors: ['ympyra-otsikko'] },
    { slug: 'osa-5', name: 'Osa 5', chapters: [['otelauta', 13, 'Otelauta ja oktaavimuodot'], ['perussavel', 14, 'Sävelet E- ja A-kielellä']],
      anchors: ['oktaaviharjoitus', 'oktaavimuodot'] },
    { slug: 'osa-6', name: 'Osa 6', chapters: [['barre', 15, 'Barré-soinnut ja numerokartta'], ['caged', 16, 'CAGED']],
      anchors: ['numerokartta'] },
    { slug: 'osa-7', name: 'Osa 7', chapters: [['intervallit', 17, 'Asteet ja intervallit korvalla'], ['basso', 18, 'Bassolinjan kuuleminen'], ['soinnut', 19, 'Sointujen tunnistaminen'], ['kappale', 20, 'Kappaleen purkaminen ilman nuotteja']],
      anchors: ['aste-korvalla', 'aste-harjoitus', 'sointu-harjoitus', 'tehtava-harjoitus'] },
    { slug: 'osa-8', name: 'Osa 8', chapters: [['improvisointi', 21, 'Improvisointi'], ['pentatoniikka', 22, 'Pentatoniikka']],
      anchors: ['em-c-tausta', 'am-tausta', 'boksi-e-mollissa'] },
    { slug: 'osa-9', name: 'Osa 9', chapters: [['sovittaminen', 23, 'Sovittaminen'], ['oma-kappale', 24, 'Oman kappaleen tekeminen ja oma ilmaisu']],
      anchors: ['kokoa-yhteen', 'esimerkkikappale', 'kappale-1-luonnos', 'kappale-2-b-osa', 'kappale-3-septimit', 'kappale-4-sovitus'] },
    { slug: 'osa-10', name: 'Osa 10', advanced: true, chapters: [['septimisoinnut', 25, 'Septimisoinnut'], ['septimi-korvalla', 26, 'Kuule septimi'], ['ii-v-i', 27, 'ii–V–I ja äänenkuljetus']],
      anchors: [] },
    { slug: 'osa-11', name: 'Osa 11', advanced: true, chapters: [['moodit', 28, 'Moodit käytännössä']],
      anchors: [] }
  ];
  // Viiden osan jaon aikaiset merkinnät (osa#luku) ja luvut, joissa sama sisältö nyt on.
  // Vanha tallenne jätetään paikalleen, ja merkinnät kopioidaan kerran uuteen avaimeen.
  const MOVED = {
    'osa-1#musiikki-on-kieli': ['musiikki-on-kieli'], 'osa-1#savelet-ja-intervallit': ['savelet-ja-intervallit'], 'osa-1#asteikot': ['asteikot'],
    'osa-1#harmoninen-kentta': ['harmoninen-kentta'], 'osa-1#roomalaiset-numerot': ['roomalaiset-numerot'], 'osa-1#sointujen-tehtavat': ['sointujen-tehtavat'],
    'osa-2#sointukierrot': ['sointukierrot', 'kappale-asteina'], 'osa-2#kvinttiympyra': ['kvinttiympyra'], 'osa-2#savellajin-tunnistaminen': ['savellajin-tunnistaminen'],
    'osa-2#transponointi': ['transponointi'], 'osa-3#otelauta': ['otelauta'], 'osa-3#barre': ['perussavel', 'barre'],
    'osa-3#caged': ['caged'], 'osa-3#septimisoinnut': ['septimisoinnut', 'ii-v-i'], 'osa-3#pentatoniikka': ['pentatoniikka'],
    'osa-3#moodit': ['moodit'], 'osa-4#intervallit': ['intervallit'], 'osa-4#basso': ['basso'],
    'osa-4#soinnut': ['soinnut', 'septimi-korvalla'], 'osa-4#kappale': ['kappale'], 'osa-5#improvisointi': ['improvisointi'],
    'osa-5#sovittaminen': ['sovittaminen'], 'osa-5#oma-kappale': ['oma-kappale']
  };

  let memory = new Set();
  function load() {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved !== null) {
        memory = new Set(JSON.parse(saved));
      } else {
        const old = JSON.parse(localStorage.getItem(OLD_KEY) || '[]');
        memory = new Set(old.flatMap(key => MOVED[key] ?? []));
        if (memory.size) localStorage.setItem(KEY, JSON.stringify([...memory]));
      }
    } catch { /* tallennus ei käytössä */ }
    return memory;
  }
  function save(done) {
    memory = done;
    try { localStorage.setItem(KEY, JSON.stringify([...done])); } catch { /* tallennus ei käytössä */ }
  }

  const ALL = PARTS.flatMap(part => part.chapters.map(([id, num, title]) => ({ part, id, num, title })));
  const nextChapter = done => ALL.find(({ id }) => !done.has(id));
  const partCount = (part, done) => part.chapters.filter(([id]) => done.has(id)).length;

  const page = location.pathname.match(/(osa-\d+)(?:\.html)?\/?$/);
  const current = page && PARTS.find(part => part.slug === page[1]);
  if (current) {
    followMovedAnchor();
    window.addEventListener('hashchange', followMovedAnchor);
    setupPart(current);
  } else if (document.getElementById('teoria-aloitus')) {
    setupTheoryHome();
  } else if (document.querySelector('.hero-actions')) {
    setupPracticeSummary();
    setupFrontPage();
  }

  function followMovedAnchor() {
    let id = location.hash.slice(1);
    try { id = decodeURIComponent(id); } catch { /* käytetään sellaisenaan */ }
    if (!id || document.getElementById(id)) return;
    const home = PARTS.find(part => part.chapters.some(([chapter]) => chapter === id) || part.anchors.includes(id));
    if (home && home !== current) location.replace(home.slug + '.html#' + id);
  }

  // Harjoittelija on itsenäinen: etusivu lukee vain pienen yhteenvedon.
  // Lukumerkinnät ja harjoitustulokset tallennetaan eri avaimiin.
  function setupPracticeSummary() {
    try {
      const data = JSON.parse(localStorage.getItem('musiikin-kartta:harjoittelu') || 'null');
      // Harjoittelijan tallennusversiot 2 ja 3 sisältävät saman sessions-taulukon.
      if (![2, 3].includes(data?.version) || !Array.isArray(data.sessions) || !data.sessions.length) return;
      const last = data.sessions.at(-1);
      if (!Number.isFinite(last.count) || last.count < 0) return;
      const p = document.createElement('p');
      p.className = 'continue';
      const link = document.createElement('a');
      link.href = 'kitaraharjoittelija.html';
      link.textContent = 'Jatka kitaraharjoittelua · viimeksi ' + last.count + ' vastattua kysymystä';
      p.append(link);
      document.querySelector('.hero-actions')?.after(p);
    } catch { /* Harjoitustallennuksen puute ei estä lukemista. */ }
  }

  function setupPart(part) {
    const done = load();
    const nav = document.querySelector('.contents');
    const summary = document.createElement('p');
    summary.className = 'progress-note';
    nav?.append(summary);

    function refresh() {
      const count = part.chapters.filter(([id]) => done.has(id)).length;
      summary.textContent = count ? count + '/' + part.chapters.length + ' lukua tehty' : '';
      nav?.querySelectorAll('ol a').forEach(link => {
        link.parentElement.classList.toggle('is-done', done.has(link.getAttribute('href').slice(1)));
      });
    }

    part.chapters.forEach(([id]) => {
      const section = document.getElementById(id);
      if (!section) return;
      const row = document.createElement('p');
      row.className = 'done-row';
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'done-toggle';
      const draw = () => {
        const on = done.has(id);
        button.setAttribute('aria-pressed', on);
        button.textContent = on ? '✓ Luku tehty' : 'Merkitse luku tehdyksi';
      };
      button.addEventListener('click', () => {
        if (done.has(id)) done.delete(id); else done.add(id);
        save(done);
        draw();
        refresh();
      });
      draw();
      row.append(button);
      section.append(row);
    });
    refresh();
  }

  // Musiikin kartan etusivu: vain lyhyt jatkamislinkki, osien lista on Musiikin teoria -sivulla.
  function setupFrontPage() {
    const done = load();
    const actions = document.querySelector('.hero-actions');
    if (!done.size || !actions) return;
    const next = nextChapter(done);
    const p = document.createElement('p');
    p.className = 'continue';
    if (next) {
      const link = document.createElement('a');
      link.href = 'book/' + next.part.slug + '.html#' + next.id;
      link.textContent = (next.part.advanced ? 'Peruspolku on tehty. Syventävä luku ' : 'Jatka: luku ') + next.num + ' · ' + next.title;
      p.append(link);
    } else {
      p.textContent = 'Olet merkinnyt kaikki ' + ALL.length + ' lukua tehdyiksi.';
    }
    actions.after(p);
  }

  // Musiikin teoria -aloitusnäkymä (book/index.html): jatkamiskortti sekä osien ja
  // kokonaisuuksien merkinnät. Kaikki luvut perustuvat tallennettuihin lukumerkintöihin.
  function setupTheoryHome() {
    const done = load();
    const titleOf = slug => document.querySelector('[data-part="' + slug + '"] strong')?.textContent.trim() ?? '';

    PARTS.forEach(part => {
      const status = document.querySelector('[data-part="' + part.slug + '"] .part-status');
      const count = partCount(part, done);
      if (!status || !count) return;
      const all = count === part.chapters.length;
      status.textContent = all ? '✓ Valmis' : count + '/' + part.chapters.length + ' lukua tehty';
      status.classList.toggle('is-done', all);
    });
    document.querySelectorAll('details.group').forEach(group => {
      const parts = [...group.querySelectorAll('[data-part]')].map(li => PARTS.find(part => part.slug === li.dataset.part)).filter(Boolean);
      const total = parts.reduce((sum, part) => sum + part.chapters.length, 0);
      const count = parts.reduce((sum, part) => sum + partCount(part, done), 0);
      const note = group.querySelector('.group-progress');
      if (note && count) note.textContent = count === total ? '✓ Kaikki ' + total + ' lukua tehty' : count + '/' + total + ' lukua tehty';
    });

    const card = document.getElementById('jatka');
    if (card && done.size) {
      const next = nextChapter(done);
      const count = ALL.filter(({ id }) => done.has(id)).length;
      const label = card.querySelector('.resume-label');
      const title = card.querySelector('.resume-title');
      const note = card.querySelector('.resume-note');
      const action = card.querySelector('.resume-action');
      if (next) {
        label.textContent = next.part.advanced ? 'Peruspolku on tehty · jatka syventäviin osiin' : 'Jatka siitä, mihin jäit';
        title.textContent = next.part.name + ' · ' + titleOf(next.part.slug);
        const chapter = document.createElement('p');
        chapter.className = 'resume-chapter';
        chapter.textContent = 'Seuraavana luku ' + next.num + ' · ' + next.title;
        title.after(chapter);
        action.href = next.part.slug + '.html#' + next.id;
        action.textContent = 'Jatka opiskelua';
      } else {
        label.textContent = 'Kaikki luvut tehty';
        title.textContent = 'Olet merkinnyt kaikki ' + ALL.length + ' lukua tehdyiksi.';
        action.href = '#kokonaisuudet';
        action.textContent = 'Kertaa osia';
      }
      note.textContent = count + '/' + ALL.length + ' lukua merkitty tehdyiksi tässä selaimessa.';
      const bar = document.createElement('span');
      bar.className = 'resume-bar';
      bar.setAttribute('aria-hidden', 'true');
      const fill = document.createElement('span');
      fill.style.width = (100 * count / ALL.length).toFixed(1) + '%';
      bar.append(fill);
      note.after(bar);
    }

    // Suora linkki kokonaisuuteen (#kokonaisuus-2) tai lähtötason valintaan avaa sen.
    function openTarget() {
      let id = location.hash.slice(1);
      try { id = decodeURIComponent(id); } catch { /* käytetään sellaisenaan */ }
      // Ilman ankkuria id on tyhjä merkkijono: ilman tätä tarkistusta ''.closest kaatoi skriptin
      // ennen hashchange-kuuntelijan rekisteröintiä.
      const target = id ? document.getElementById(id) : null;
      const details = target?.closest('details');
      if (details) details.open = true;
    }
    openTarget();
    window.addEventListener('hashchange', openTarget);
  }
})();
