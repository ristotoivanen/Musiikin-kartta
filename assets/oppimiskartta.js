(() => {
  const cards = [...document.querySelectorAll('details.topic-card')];
  if (cards.length) {
    const openTarget = () => {
      const target = cards.find(card => '#' + card.id === location.hash);
      if (!target) return;
      target.open = true;
      target.querySelector('summary').focus({ preventScroll: true });
      target.scrollIntoView({ block: 'start' });
    };
    const openCards = history.state?.openTopics ?? [];
    for (const card of cards) card.open = openCards.includes(card.id);
    window.addEventListener('load', () => requestAnimationFrame(openTarget), { once: true });
    window.addEventListener('hashchange', openTarget);

    for (const link of document.querySelectorAll('.topic-card a, .start-here a')) {
      const from = link.closest('.topic-card')?.id ?? 'aihe-rytmi';
      const url = new URL(link.href);
      url.searchParams.set('aihe', from);
      link.href = url.href;
      link.addEventListener('click', () => {
        const openTopics = cards.filter(card => card.open).map(card => card.id);
        history.replaceState({ ...history.state, openTopics }, '');
      });
    }
    return;
  }

  // Paluureitti säilyttää muut kyselyparametrit ja kohdesivun ankkurin.
  // Sallitut tunnisteet ovat etusivun aiheita, eivät ulkoisia osoitteita.
  const topics = new Set(['kitara', 'rytmi', 'nuotit', 'korva', 'otelauta', 'soinnut', 'asteikot', 'kappaleet']);
  const topic = new URLSearchParams(location.search).get('aihe');
  if (!topic?.startsWith('aihe-') || !topics.has(topic.slice(5))) return;
  const map = document.querySelector('.main-nav a[href$="#oppimisaiheet"]');
  if (!map) return;
  const url = new URL(map.href);
  url.hash = topic;
  const link = document.createElement('a');
  link.href = url.href;
  link.textContent = 'Takaisin aiheeseen';
  const row = document.createElement('p');
  row.className = 'map-return';
  row.append(link);

  // Lukulinkki vie suoraan sisältöön, jolloin paluulinkki tarvitaan siinä kohdassa.
  const anchor = document.getElementById(location.hash.slice(1));
  if (anchor?.closest('.chapter')) {
    if (anchor.matches('h2, h3, figure, .note')) anchor.after(row);
    else anchor.prepend(row);
  } else {
    document.querySelector('.site-top')?.append(row);
  }
})();
