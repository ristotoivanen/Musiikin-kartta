// Oppimiskartan aihekohtainen paluureitti ilman pakollista oppimispolkua tai tallennusta.
(() => {
  const ids = new Set(['kitara', 'rytmi', 'nuotit', 'korva', 'otelauta', 'soinnut', 'asteikot', 'kappaleet']);
  const category = document.querySelector('[data-topic-page]')?.getAttribute('data-topic-page');
  if (category && ids.has(category)) {
    // Säilytä nykyinen suora harjoitusreitti, mutta kerro tulosivulle mistä aiheesta tultiin.
    // URL ja mahdolliset kyselyparametrit säilyvät. Tämä ei korvaa selaimen Takaisin-toimintoa.
    for (const link of document.querySelectorAll('.topic-page .resource-list a')) {
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin) continue;
      url.searchParams.set('aihe', 'aihe-' + category);
      link.href = url.href;
    }
    return;
  }

  const topic = new URLSearchParams(location.search).get('aihe');
  if (!topic?.startsWith('aihe-') || !ids.has(topic.slice(5))) return;
  // Uusilla itsenäisillä lukusivuilla on aina näkyvä paluu aiheeseen.
  if (document.querySelector('.lesson-page .contents a[href^="../aiheet/"]')) return;
  const map = document.querySelector('.main-nav a[href$="#oppimisaiheet"]');
  if (!map) return;
  const url = new URL('aiheet/' + topic.slice(5) + '.html', map.href);
  const link = document.createElement('a');
  link.href = url.href;
  link.textContent = 'Takaisin aiheeseen';
  const row = document.createElement('p');
  row.className = 'map-return';
  row.append(link);
  const anchor = document.getElementById(location.hash.slice(1));
  if (anchor?.closest('.chapter')) {
    if (anchor.matches('h2, h3, figure, .note')) anchor.after(row);
    else anchor.prepend(row);
  } else {
    document.querySelector('.site-top')?.append(row);
  }
})();
