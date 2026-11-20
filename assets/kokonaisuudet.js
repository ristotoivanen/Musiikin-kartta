// Avattavat oppimiskokonaisuudet (details.study-unit, #116). Ladataan vain sivuille, jotka käyttävät niitä.
//
// Suora linkki (#kokonaisuus tai #valinta-<sivu>), selaimen paluu sisältösivulta ja tulostus avaavat
// sisällön sisältävän osion. assets/oppimiskartta.js kohdistaa paluun jälkeen valittuun linkkiin
// requestAnimationFrame-kutsulla; tämä tiedosto avaa osion sitä ennen samassa pageshow-tapahtumassa.
// Ei lue eikä kirjoita suoritusmerkintöjä.
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

  const fromHash = () => openId(location.hash.slice(1))?.scrollIntoView({ block: 'start' });
  fromHash();
  window.addEventListener('hashchange', fromHash);
  const navigation = performance.getEntriesByType('navigation')[0];
  window.addEventListener('pageshow', event => {
    if (event.persisted || navigation?.type === 'back_forward') openId(history.state?.returnTopic ?? '');
  });

  let closed = [];
  window.addEventListener('beforeprint', () => {
    closed = [...units].filter(details => !details.open);
    closed.forEach(details => { details.open = true; });
  });
  window.addEventListener('afterprint', () => {
    closed.forEach(details => { details.open = false; });
    closed = [];
  });
})();
