/* Kitaran perusteiden kertaus käyttää #187:n yhteistä otelautaa. */
(() => {
  'use strict';
  const section = document.getElementById('perustaitojen-minitunnit');
  const reveal = () => {
    if (section && location.hash === '#perustaitojen-minitunnit') section.open = true;
  };
  reveal();
  window.addEventListener('hashchange', reveal);

  const target = document.querySelector('.recap-standard-neck');
  const fallback = document.querySelector('.recap-neck');
  const board = globalThis.MusicMapFretboard;
  if (!target || !fallback || !board?.renderBoard) return;
  try {
    const notes = [];
    const rows = [];
    for (const [string, open] of board.OPEN_PITCHES.entries()) {
      const row = [];
      for (let fret = 1; fret <= 5; fret++) {
        const label = board.CHROM[(open + fret) % 12];
        if (!/^[A-G]$/.test(label)) continue;
        notes.push({ string, fret, label, kind: 'recap' });
        row.push(fret + '. nauha ' + label);
      }
      rows.push((string + 1) + '. kieli ' + board.STRING_NAMES[string] + ': ' + row.join(', '));
    }
    const label = 'Vakiovire, luonnolliset sävelet. ' + rows.join('. ');
    target.innerHTML = board.renderBoard(0, { name: 'Luonnolliset sävelet', base: [], add: [] }, 5,
      { automatic: false, notes, label });
    if (target.querySelectorAll('.octave-recap').length !== 18) throw new Error('Otelaudan sävelet puuttuvat');
    target.hidden = false;
    fallback.hidden = true;
  } catch {
    target.hidden = true;
    fallback.hidden = false;
  }
})();
