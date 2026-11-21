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

  // Pitkän inline-oppitunnin hallittu avaus/sulku. Muistetaan OTSIKON sijainti
  // näkymässä, ei window.scrollY:tä: jälkimmäinen ei enää tarkoita samaa paikkaa
  // kun details-sisältö suljetaan tai sisaroppitunti avataan.
  // Ohitetaan hash- ja printtitilanteiden ohjelmalliset toggle-tapahtumat.
  const openingPositions = new WeakMap();
  const pendingMoves = new WeakMap();
  const OPEN_TOP = 16;

  function alignHeading(heading, desiredTop) {
    const delta = heading.getBoundingClientRect().top - desiredTop;
    if (Math.abs(delta) > 2) {
      window.scrollTo({ top: Math.max(0, window.scrollY + delta), behavior: 'instant' });
    }
  }

  for (const list of document.querySelectorAll('.study-inline-choices')) {
    for (const card of list.querySelectorAll('details.study-inline')) {
      // Ilman JavaScriptiä natiivi summary toimii yhä; erillinen sulkemispainike
      // ei silloin ole käytettävissä eikä saa näkyä toimimattomana.
      const close = card.querySelector('.study-inline-close');
      if (close) close.hidden = false;

      card.addEventListener('toggle', () => {
        const intent = pendingMoves.get(card);
        if (!intent) return; // esim. name-ryhmän toisen kortin automaattisulku
        pendingMoves.delete(card);
        requestAnimationFrame(() => {
          if (card.open !== intent.open) return;
          const heading = card.querySelector(':scope > summary');
          if (!heading) return;
          if (intent.open) {
            // Otsikko riittävän ylhäällä ilman ylimääräistä hyppyä,
            // kun se on jo lähellä näkymän yläreunaa.
            const top = heading.getBoundingClientRect().top;
            if (top < 8 || top > 64) alignHeading(heading, OPEN_TOP);
          } else {
            const previousTop = openingPositions.get(card) ?? OPEN_TOP;
            alignHeading(heading, previousTop);
            heading.focus({ preventScroll: true });
          }
        });
      });
    }

    list.addEventListener('click', event => {
      if (!(event.target instanceof Element)) return;
      const heading = event.target.closest('.study-inline > summary');
      if (heading) {
        const card = heading.parentElement;
        if (!card.open) {
          const top = heading.getBoundingClientRect().top;
          openingPositions.set(card, Math.max(OPEN_TOP, Math.min(top, window.innerHeight - 64)));
        }
        // Natiivin summaryn click käynnistää togglen vasta tämän käsittelijän jälkeen.
        pendingMoves.set(card, { open: !card.open });
        return;
      }
      const button = event.target.closest('.study-inline-close');
      if (!button) return;
      const card = button.closest('details.study-inline');
      if (!card?.open) return;
      pendingMoves.set(card, { open: false });
      card.open = false; // triggeröi myös Rytmin/Sointujen äänentoiston pysäytyksen
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
