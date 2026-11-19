// Musapelien ja Kitaratreenin progressiivinen parannus (tools/oppimiskartta/rakenna-osiot.py).
//
// Sivut toimivat ilman tätä skriptiä: Musapelien aiherajaus on CSS:n :target-valitsin ja Kitaratreenin
// aiheet ovat natiiveja <details>-elementtejä. Skripti vain
//  - merkitsee Musapelien aktiivisen aiherajauksen (aria-current), jotta valinta erottuu myös tekstinä ja reunana,
//  - avaa Kitaratreenin aiheen, kun osoitteessa on #aihe-… (myös paluulinkeistä ja Sama aihe -linkeistä),
//  - avaa tulostettaessa kaikki suljetut aiheet, jotta harjoitukset eivät puutu tulosteesta.
// Ei tallennuksia.
(() => {
  const current = () => {
    try { return decodeURIComponent(location.hash.slice(1)); } catch { return location.hash.slice(1); }
  };

  function sync() {
    const id = current();
    const filter = document.querySelectorAll('.game-filter a');
    const topic = id && document.getElementById(id)?.classList.contains('game-topic') ? id : 'pelit';
    for (const link of filter) {
      if (link.getAttribute('href') === '#' + topic) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
    const details = id ? document.getElementById(id) : null;
    if (details instanceof HTMLDetailsElement && !details.open) {
      details.open = true;
      details.scrollIntoView({ block: 'start' });
    }
  }

  sync();
  window.addEventListener('hashchange', sync);

  let closed = [];
  window.addEventListener('beforeprint', () => {
    closed = [...document.querySelectorAll('details.train-topic:not([open])')];
    closed.forEach(details => { details.open = true; });
  });
  window.addEventListener('afterprint', () => {
    closed.forEach(details => { details.open = false; });
    closed = [];
  });
})();
