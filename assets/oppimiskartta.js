(() => {
  // oppimiskartta:aiheet
  const topicPaths = {"aihe-kitara": "oppi/kitara/index.html", "aihe-rytmi": "oppi/rytmi/index.html", "aihe-nuotit": "oppi/savelnimet/index.html", "aihe-korva": "oppi/korva/index.html", "aihe-otelauta": "oppi/otelauta/index.html", "aihe-soinnut": "oppi/soinnut/index.html", "aihe-asteikot": "oppi/asteikot/index.html", "aihe-kappaleet": "oppi/kappaleet/index.html"};
  // /oppimiskartta:aiheet
  const entries = document.querySelectorAll('.topic-card, .study-choice[id], [data-return-topic]');
  const onMap = Boolean(document.querySelector('.topic-grid'));
  if (entries.length) {
    function focusEntry(id) {
      const link = document.getElementById(id);
      if (!link?.matches('.topic-card, .study-choice')) return;
      link.focus({ preventScroll: true });
      link.scrollIntoView({ block: 'nearest' });
    }

    // Selaimen paluu löytää lähtökohdan myös, kun URL:ssa on jonkin toisen aiheen ankkuri.
    const navigation = performance.getEntriesByType('navigation')[0];
    window.addEventListener('pageshow', event => {
      const returning = event.persisted || navigation?.type === 'back_forward';
      const entry = returning ? history.state?.returnTopic : null;
      requestAnimationFrame(() => focusEntry(entry ?? (onMap ? location.hash.slice(1) : '')));
    });
    if (onMap) window.addEventListener('hashchange', () => focusEntry(location.hash.slice(1)));

    for (const link of entries) {
      link.addEventListener('click', event => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const returnTopic = link.dataset.returnTopic ?? link.id;
        history.replaceState({ ...history.state, returnTopic }, '');
      });
    }
  }

  // Ääni ei jää taustalle selaimen sivuvälimuistista palattaessa.
  const players = document.querySelectorAll('.study-page audio, .reading-layout audio');
  if (players.length) {
    window.addEventListener('pagehide', () => players.forEach(player => player.pause()));
  }
  for (const player of document.querySelectorAll('.study-page audio')) {
    const last = [...player.querySelectorAll('source')].at(-1);
    const notice = document.createElement('p');
    notice.className = 'study-audio-error';
    notice.setAttribute('role', 'status');
    player.after(notice);
    player.addEventListener('error', event => {
      if (event.target === player || event.target === last) {
        notice.textContent = 'Ääniesimerkkiä ei voitu ladata. Lataa sivu uudelleen ja kokeile uudestaan.';
      }
    }, true);
    player.addEventListener('playing', () => { notice.textContent = ''; });
  }

  // Työkalujen ja vanhojen teoriakirjalinkkien asiayhteys säilyy nykyisissä URL-parametreissa.
  const topic = new URLSearchParams(location.search).get('aihe');
  // Päävalikon brändilinkki osoittaa aina sivuston juureen; siitä ratkaistaan aihesivun suhteellinen osoite.
  const map = document.querySelector('.main-nav a.brand');
  if (!map || !Object.hasOwn(topicPaths, topic) || document.querySelector('.study-page')) return;
  const link = document.createElement('a');
  link.href = new URL(topicPaths[topic], map.href).href;
  link.textContent = 'Takaisin aiheeseen';
  const row = document.createElement('p');
  row.className = 'map-return';
  row.append(link);
  let id = location.hash.slice(1);
  try { id = decodeURIComponent(id); } catch { /* käytetään ankkuria sellaisenaan */ }
  const anchor = document.getElementById(id);
  if (anchor?.closest('.chapter')) {
    if (anchor.matches('h2, h3, figure, .note')) anchor.after(row);
    else anchor.prepend(row);
  } else {
    document.querySelector('.site-top')?.append(row);
  }
})();
