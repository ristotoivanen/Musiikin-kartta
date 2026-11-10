// Edistymisen merkintä. Lukija voi merkitä luvun tehdyksi, ja etusivu näyttää osien
// edistymisen sekä seuraavan luvun. Tieto tallentuu vain tämän selaimen localStorageen;
// jos tallennus ei ole käytössä (esimerkiksi yksityinen ikkuna), painikkeet toimivat
// sivun ajan mutta merkinnät eivät säily.
(() => {
  const KEY = 'musiikin-kartta:tehdyt';
  const PARTS = [
    { slug: 'osa-1', name: 'Osa I', chapters: [
      ['musiikki-on-kieli', 1, 'Musiikki on kieli'], ['savelet-ja-intervallit', 2, 'Sävelet ja intervallit'],
      ['asteikot', 3, 'Asteikot'], ['harmoninen-kentta', 4, 'Harmoninen kenttä'],
      ['roomalaiset-numerot', 5, 'Roomalaiset numerot'], ['sointujen-tehtavat', 6, 'Sointujen tehtävät']] },
    { slug: 'osa-2', name: 'Osa II', chapters: [
      ['sointukierrot', 7, 'Sointukierrot ja kappaleen rakenne'], ['kvinttiympyra', 8, 'Kvinttiympyrä'],
      ['savellajin-tunnistaminen', 9, 'Sävellajin tunnistaminen'], ['transponointi', 10, 'Transponointi']] },
    { slug: 'osa-3', name: 'Osa III', chapters: [
      ['otelauta', 11, 'Otelauta'], ['barre', 12, 'Barré-soinnut ja numerokartta'], ['caged', 13, 'CAGED'],
      ['septimisoinnut', 14, 'Septimisoinnut'], ['pentatoniikka', 15, 'Pentatoniikka'], ['moodit', 16, 'Moodit käytännössä']] },
    { slug: 'osa-4', name: 'Osa IV', chapters: [
      ['intervallit', 17, 'Asteet ja intervallit korvalla'], ['basso', 18, 'Bassolinjan kuuleminen'],
      ['soinnut', 19, 'Sointujen tunnistaminen'], ['kappale', 20, 'Kappaleen purkaminen ilman nuotteja']] },
    { slug: 'osa-5', name: 'Osa V', chapters: [
      ['improvisointi', 21, 'Improvisointi'], ['sovittaminen', 22, 'Sovittaminen'],
      ['oma-kappale', 23, 'Oman kappaleen tekeminen ja oma ilmaisu']] }
  ];

  let memory = new Set();
  function load() {
    try { memory = new Set(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch { /* tallennus ei käytössä */ }
    return memory;
  }
  function save(done) {
    memory = done;
    try { localStorage.setItem(KEY, JSON.stringify([...done])); } catch { /* tallennus ei käytössä */ }
  }

  const page = location.pathname.match(/(osa-[1-5])(?:\.html)?\/?$/);
  if (document.querySelector('.parts')) setupPracticeSummary();
  if (page) setupPart(PARTS.find(part => part.slug === page[1]));
  else if (document.querySelector('.parts')) setupIndex();

  // Harjoittelija on itsenäinen: etusivu lukee vain pienen yhteenvedon.
  // Oppaan vanhaa KEY-avainta ei muuteta eikä Reactia ladata lukusivuille.
  function setupPracticeSummary() {
    try {
      const data = JSON.parse(localStorage.getItem('musiikin-kartta:harjoittelu') || 'null');
      if (data?.version !== 2 || !Array.isArray(data.sessions) || !data.sessions.length) return;
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
    if (!part) return;
    const done = load();
    const nav = document.querySelector('.contents');
    const summary = document.createElement('p');
    summary.className = 'progress-note';
    nav?.append(summary);

    function refresh() {
      const count = part.chapters.filter(([id]) => done.has(part.slug + '#' + id)).length;
      summary.textContent = count ? count + '/' + part.chapters.length + ' lukua tehty' : '';
      nav?.querySelectorAll('ol a').forEach(link => {
        link.parentElement.classList.toggle('is-done', done.has(part.slug + link.getAttribute('href')));
      });
    }

    part.chapters.forEach(([id]) => {
      const section = document.getElementById(id);
      if (!section) return;
      const key = part.slug + '#' + id;
      const row = document.createElement('p');
      row.className = 'done-row';
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'done-toggle';
      const draw = () => {
        const on = done.has(key);
        button.setAttribute('aria-pressed', on);
        button.textContent = on ? '✓ Luku tehty' : 'Merkitse luku tehdyksi';
      };
      button.addEventListener('click', () => {
        if (done.has(key)) done.delete(key); else done.add(key);
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

  function setupIndex() {
    const done = load();
    if (!done.size) return;
    PARTS.forEach(part => {
      const card = document.querySelector('a.part-link[href="book/' + part.slug + '.html"]');
      const count = part.chapters.filter(([id]) => done.has(part.slug + '#' + id)).length;
      if (!card || !count) return;
      const note = document.createElement('span');
      note.className = 'part-progress';
      note.textContent = count === part.chapters.length ? '✓ Kaikki luvut tehty' : count + '/' + part.chapters.length + ' lukua tehty';
      card.querySelector('.part-action')?.before(note);
    });
    const next = PARTS.flatMap(part => part.chapters.map(([id, num, title]) => ({ part, id, num, title })))
      .find(({ part, id }) => !done.has(part.slug + '#' + id));
    const actions = document.querySelector('.hero-actions');
    if (!actions) return;
    const p = document.createElement('p');
    p.className = 'continue';
    if (next) {
      const link = document.createElement('a');
      link.href = 'book/' + next.part.slug + '.html#' + next.id;
      link.textContent = 'Jatka: luku ' + next.num + ' · ' + next.title;
      p.append(link);
    } else {
      p.textContent = 'Olet merkinnyt kaikki 23 lukua tehdyiksi.';
    }
    actions.after(p);
  }
})();
