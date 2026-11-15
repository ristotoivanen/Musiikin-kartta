(() => {
  // Vanhojen '?aihe=aihe-...' -linkkien paluureitti toimii myös erillisillä aihekohtaisilla sivuilla.
  // Oppimiskartan etusivulla vanhat #aihe-ankkurit säilyvät tavallisina ankkureina.
  const topics = new Set(['kitara', 'rytmi', 'nuotit', 'korva', 'otelauta', 'soinnut', 'asteikot', 'kappaleet']);
  const topic = new URLSearchParams(location.search).get('aihe');
  if (!topic?.startsWith('aihe-') || !topics.has(topic.slice(5))) return;
  const navLink = document.querySelector('.main-nav a[href$="#oppimisaiheet"]');
  if (!navLink) return;
  const url = new URL(navLink.href);
  url.pathname = url.pathname.replace(/index[.]html$/, 'aiheet/' + topic.slice(5) + '.html');
  url.hash = '';
  url.search = '';

  const breadcrumb = document.getElementById('chapter-parent');
  if (breadcrumb) {
    breadcrumb.href = url.href;
    return;
  }
  const row = document.createElement('p');
  row.className = 'map-return';
  const link = document.createElement('a');
  link.href = url.href;
  link.textContent = 'Takaisin aiheeseen';
  row.append(link);

  const anchor = document.getElementById(location.hash.slice(1));
  if (anchor?.closest('.chapter')) {
    if (anchor.matches('h2, h3, figure, .note')) anchor.after(row);
    else anchor.prepend(row);
  } else {
    document.querySelector('.site-top')?.append(row);
  }
})();