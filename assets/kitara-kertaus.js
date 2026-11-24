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
    // Sama komponentti ja samat sävelkoordinaatit, mutta kertauksessa
    // pidempi, kitaramaisempi kuvasuhde. Tekstit ja pisteet eivät veny.
    const svg = target.querySelector('svg');
    const ratio = 1.65;
    const [x, y, w, h] = svg.getAttribute('viewBox').split(/\s+/).map(Number);
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.style.aspectRatio = w + ' / ' + (h / ratio);
    svg.querySelectorAll('text, circle').forEach(el => {
      const cy = Number(el.getAttribute(el.localName === 'circle' ? 'cy' : 'y'));
      // Korjaa pystysuuntainen litistys elementin oman keskipisteen ympäriltä.
      el.setAttribute('transform', 'translate(0 '+cy+') scale(1 '+ratio+') translate(0 '+(-cy)+')');
    });
    target.hidden = false;
    fallback.hidden = true;
  } catch {
    target.hidden = true;
    fallback.hidden = false;
  }
})();
