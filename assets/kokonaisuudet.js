// Avattavat oppimiskokonaisuudet (details.study-unit, #116). Ladataan vain sivuille, jotka käyttävät niitä.
//
// Suora linkki (#kokonaisuus tai #valinta-<sivu>), selaimen paluu sisältösivulta ja tulostus avaavat
// sisällön sisältävän osion. assets/oppimiskartta.js kohdistaa paluun jälkeen valittuun linkkiin
// requestAnimationFrame-kutsulla; tämä tiedosto avaa osion sitä ennen samassa pageshow-tapahtumassa.
// Suoritusmerkintöjä luetaan vain oman kokonaisuuden etenemistietoa varten; niitä ei kirjoiteta.
(() => {
  const units = document.querySelectorAll('details.study-unit');
  if (!units.length) return;

  function openParents(element) {
    for (let node = element; node; node = node.parentElement?.closest('details')) {
      if (node.matches('details')) node.open = true;
    }
  }
  function openId(id) {
    try { id = decodeURIComponent(id); } catch { /* käytetään sellaisenaan */ }
    const target = id ? document.getElementById(id) : null;
    if (target) openParents(target);
    return target;
  }

  const fromHash = () => {
    const target = openId(location.hash.slice(1));
    if (!target) return;
    target.scrollIntoView({ block: 'start' });
    if (target.matches('.study-choice, summary')) target.focus({ preventScroll: true });
  };
  fromHash();
  window.addEventListener('hashchange', fromHash);
  const navigation = performance.getEntriesByType('navigation')[0];
  window.addEventListener('pageshow', event => {
    if (event.persisted || navigation?.type === 'back_forward') openId(history.state?.returnTopic ?? '');
  });

  for (const list of document.querySelectorAll('.study-inline-choices')) {
    list.addEventListener('click', event => {
      if (!(event.target instanceof Element)) return;
      const heading = event.target.closest('.study-inline > summary');
      if (!heading || heading.parentElement.open || !list.querySelector('.study-inline[open]')) return;

      // Selain sulkee edellisen details-kortin ennen seuraavaa piirtoa. Vieritä vasta uuden korkeuden mukaan.
      requestAnimationFrame(() => {
        if (heading.parentElement.open) heading.scrollIntoView({ block: 'start', behavior: 'instant' });
      });
    });
  }

  // Oman kokonaisuuden etenemistieto (#116, vaihe B). Lukee vain nykyiset suoritusmerkinnät
  // (assets/edistyminen.js, avain musiikin-kartta:luvut) eikä kirjoita niitä. Korttien tila on
  // data-study-intro-status-merkinnässä kuten PR #111:n johdannossa: se näkyy, mutta aiheen laskuri
  // ja etusivun kortti laskevat edelleen vain aiemmat sisällöt (data-study-status).
  // Yksi kirjoittaja kullekin tilariville: edistyminen.js ajetaan ennen tätä tiedostoa. Jos se jo
  // näytti korttien tilat (PR #111:n data-study-intro-status-tuki), tämä tiedosto ei kirjoita niitä
  // uudelleen vaan päivittää vain kokonaisuuden laskurin. Ilman sitä tuki on tässä tiedostossa.
  const READING_KEY = 'musiikin-kartta:luvut';
  const progressUnits = [...units].filter(unit => unit.querySelector('[data-unit-progress]:not([data-unit-attempts])'));
  const engineRows = new Set(document.querySelectorAll('[data-study-intro-status]:not([hidden])'));
  function marks() {
    try {
      const list = JSON.parse(localStorage.getItem(READING_KEY) ?? '[]');
      return new Set(Array.isArray(list) ? list.filter(value => typeof value === 'string') : []);
    } catch {
      return new Set();
    }
  }
  function showProgress() {
    const done = marks();
    for (const unit of progressUnits) {
      const total = unit.querySelector('[data-unit-progress]');
      const rows = [...unit.querySelectorAll('[data-study-intro-status]')];
      let count = 0;
      for (const row of rows) {
        const marked = done.has(row.dataset.studyIntroStatus);
        if (marked) count++;
        if (engineRows.has(row)) continue;
        row.textContent = marked ? '✓ Tehty' : 'Tekemättä';
        row.classList.toggle('is-done', marked);
        row.hidden = false;
      }
      total.textContent = `${count}/${rows.length} sisältöä tehty`;
      total.classList.toggle('is-done', rows.length > 0 && count === rows.length);
      total.hidden = false;
    }
  }
  if (progressUnits.length) {
    showProgress();
    window.addEventListener('pageshow', event => { if (event.persisted) showProgress(); });
    window.addEventListener('storage', event => {
      if (event.key === READING_KEY || event.key === null) showProgress();
    });
  }

  let closed = [];
  window.addEventListener('beforeprint', () => {
    closed = [...units].filter(details => !details.open && !details.matches('.study-unit--archived'));
    closed.forEach(details => { details.open = true; });
  });
  window.addEventListener('afterprint', () => {
    closed.forEach(details => { details.open = false; });
    closed = [];
  });
})();
