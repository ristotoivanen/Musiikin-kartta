// Avattavat oppimiskokonaisuudet (details.study-unit, #116). Ladataan vain sivuille, jotka käyttävät niitä.
//
// Suora linkki (#kokonaisuus tai #valinta-<sivu>), selaimen paluu sisältösivulta ja tulostus avaavat
// sisällön sisältävän osion. assets/oppimiskartta.js kohdistaa paluun jälkeen valittuun linkkiin
// requestAnimationFrame-kutsulla; tämä tiedosto avaa osion sitä ennen samassa pageshow-tapahtumassa.
// Suoritusmerkintöjä luetaan vain oman kokonaisuuden etenemistietoa varten; niitä ei kirjoiteta.
(() => {
  // Knoppitieto toimii natiivilla details/summary-elementillä myös ilman JS:ää.
  // Aihesivun ja erillisen oppitunnin sisältöön lisätään samalla plektralla
  // merkitty sulkupainike, koska avauskohta jää puhelimessa usein näkyvistä.
  // Sulkeminen palauttaa sekä vierityskohdan että näppäimistöfokuksen avausplektraan.
  const pickUrl = new URL('oppimisikonit.svg#extra-info', document.currentScript.src).href;
  const OPEN_TOP = 16;

  // Yhteinen vieritysapuri myös erillisille oppituntisivuille. Niillä ei ole
  // study-unit-elementtiä, joten apurin on alustuttava ennen varhaista returnia.
  function alignHeading(heading, desiredTop) {
    const delta = heading.getBoundingClientRect().top - desiredTop;
    if (Math.abs(delta) > 2) {
      window.scrollTo({ top: Math.max(0, window.scrollY + delta), behavior: 'instant' });
    }
  }

  for (const tip of document.querySelectorAll('details.study-knoppi')) {
    const summary = tip.querySelector(':scope > summary');
    const content = tip.querySelector('.study-knoppi-sisalto');
    if (!summary || !content) continue;

    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'study-knoppi-close';
    close.setAttribute('aria-label', 'Sulje lisätieto ja palaa avauskohtaan');
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('class', 'study-knoppi-merkki');
    icon.setAttribute('aria-hidden', 'true');
    icon.setAttribute('focusable', 'false');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', pickUrl);
    icon.append(use);
    close.append(icon);
    const title = content.querySelector(':scope > h3');
    if (title) title.after(close);
    else content.prepend(close);

    let activatedByUser = false;
    let openingTop = 16;
    summary.addEventListener('click', () => {
      activatedByUser = !tip.open;
      if (activatedByUser) {
        openingTop = Math.max(16, Math.min(summary.getBoundingClientRect().top, window.innerHeight - 64));
      }
    });

    tip.addEventListener('toggle', () => {
      const shouldMove = activatedByUser && tip.open;
      activatedByUser = false;
      if (!shouldMove) return; // myös tulostus ja ohjelmalliset sulkemiset
      // Native details -avaus voi asettua vasta seuraavassa piirtojaksossa (WebKit).
      // Kohdista mitattuun 16 px paikkaan myös selaimen scroll anchoringin jälkeen.
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (tip.open && !tip.hidden && tip.getClientRects().length) {
          alignHeading(content, OPEN_TOP);
        }
      }));
    });

    close.addEventListener('click', () => {
      if (!tip.open) return;
      tip.open = false;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (tip.open || !summary.isConnected || !summary.getClientRects().length) return;
        alignHeading(summary, openingTop);
        summary.focus({ preventScroll: true });
      }));
    });
  }

  const units = document.querySelectorAll('details.study-unit');
  if (!units.length) return;

  function openParents(element) {
    for (let node = element; node; node = node.parentElement?.closest('details')) {
      if (node.matches('details')) node.open = true;
    }
  }
  // Pääkokonaisuuksista pidetään yksi auki kerrallaan. Ennen sulkemista
  // suljetaan myös mahdollinen sisäinen oppitunti, jotta sen toggle-pohjainen
  // äänentoiston pysäytys saa tapahtuman (Rytmi ja Soinnut).
  function closeInlineLessons(unit) {
    for (const lesson of unit.querySelectorAll('details.study-inline[open]')) {
      lesson.open = false;
    }
  }

  function closeOtherUnits(selected) {
    for (const unit of units) {
      if (unit === selected || !unit.open) continue;
      closeInlineLessons(unit);
      unit.open = false;
    }
  }

  function openId(id) {
    try { id = decodeURIComponent(id); } catch { /* käytetään sellaisenaan */ }
    const target = id ? document.getElementById(id) : null;
    if (target) {
      const unit = target.matches('details.study-unit') ? target : target.closest('details.study-unit');
      if (unit) closeOtherUnits(unit);
      openParents(target);
    }
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
  // Sama navigointimalli myös pääkokonaisuuksien välille: Ydinopinnot,
  // Lisäopinnot ja Aiemmat sisällöt ovat vaihtoehtoisia, eivät päällekkäisiä
  // pitkiä näkymiä. Muistetaan pääotsikon alkuperäinen paikka sulkemista varten.
  const unitOpeningPositions = new WeakMap();
  for (const unit of units) {
    const heading = unit.querySelector(':scope > summary');
    if (!heading) continue;
    heading.addEventListener('click', () => {
      const opening = !unit.open;
      if (opening) {
        const top = heading.getBoundingClientRect().top;
        unitOpeningPositions.set(unit, Math.max(OPEN_TOP, Math.min(top, window.innerHeight - 64)));
        // Sulje vanha sisältö ennen uuden avautumista; selaimen natiivi
        // summary-aktivointi avaa vasta tämän click-käsittelijän jälkeen.
        closeOtherUnits(unit);
      } else {
        // Myös pääkokonaisuuden manuaalinen sulku keskeyttää aktiivisen äänen.
        closeInlineLessons(unit);
      }

      requestAnimationFrame(() => {
        if (unit.open !== opening) return;
        if (opening) {
          const top = heading.getBoundingClientRect().top;
          if (top < 8 || top > 64) alignHeading(heading, OPEN_TOP);
        } else {
          alignHeading(heading, unitOpeningPositions.get(unit) ?? OPEN_TOP);
        }
        // Avaamisen jälkeen käyttäjä voi ehtiä siirtää kohdistuksen oppitunnin
        // otsikkoon. Viivästetty kutsu ei saa kaapata sitä takaisin pääotsikkoon.
        if (document.activeElement === heading || document.activeElement === document.body) {
          heading.focus({ preventScroll: true });
        }
      });
    });
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
        requestAnimationFrame(() => requestAnimationFrame(() => {
          if (card.open !== intent.open) return;
          const heading = card.querySelector(':scope > summary');
          if (!heading) return;
          if (intent.open) {
            // Aina 16 px:iin. Aiempi 8–64 px ohitus jätti avauksen paikalleen.
            alignHeading(heading, OPEN_TOP);
          } else {
            const previousTop = openingPositions.get(card) ?? OPEN_TOP;
            alignHeading(heading, previousTop);
            heading.focus({ preventScroll: true });
          }
        }));
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
