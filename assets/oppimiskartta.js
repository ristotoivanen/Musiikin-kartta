(() => {
  const cards = [...document.querySelectorAll('.topic-grid > .topic-card')];
  if (cards.length) {
    const openTopic = id => {
      const target = cards.find(card => card.id === id);
      if (!target) return;
      if (target.matches('details')) target.open = true;
      (target.querySelector('summary') ?? target).focus({ preventScroll: true });
      target.scrollIntoView({ block: 'start' });
    };
    const panels = cards.filter(card => card.matches('details'));
    const openCards = history.state?.openTopics ?? [];
    for (const panel of panels) panel.open = openCards.includes(panel.id);
    // Selaimen paluu kohdistuu lähtöaiheeseen, vaikka osoitteen ankkuri olisi vanhemmasta aiheesta.
    const navigation = performance.getEntriesByType('navigation')[0];
    window.addEventListener('pageshow', event => {
      const returning = event.persisted || navigation?.type === 'back_forward';
      const topic = returning ? history.state?.returnTopic : null;
      requestAnimationFrame(() => openTopic(topic ?? location.hash.slice(1)));
    });
    window.addEventListener('hashchange', () => openTopic(location.hash.slice(1)));

    for (const link of document.querySelectorAll('.topic-card a, a.topic-card, .start-here a')) {
      const from = link.closest('.topic-card')?.id ?? 'aihe-rytmi';
      if (!link.matches('.topic-card')) {
        const url = new URL(link.href);
        url.searchParams.set('aihe', from);
        link.href = url.href;
      }
      link.addEventListener('click', () => {
        const openTopics = panels.filter(panel => panel.open).map(panel => panel.id);
        history.replaceState({ ...history.state, openTopics, returnTopic: from }, '');
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
  const url = new URL(topic === 'aihe-nuotit' ? 'oppi/savelnimet/index.html' : '#' + topic, map.href);
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
