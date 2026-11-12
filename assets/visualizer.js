/* Otelautakartta: vain visualisointi, ei harjoitustehtäviä tai ääniraitoja. */
(() => {
  'use strict';

  const { CHROM, SCALES, OPEN_PITCHES, noteName, scaleNotes, scaleTriads,
    triadGrips, selectionFromURL, renderBoard, fingeringBoxes, boxOptions,
    revealPositions } = fretboard;

  const $ = id => document.getElementById(id);
  const rootSelect = $('root-select');
  const scaleSelect = $('scale-select');
  const scaleField = $('scale-field');
  const fretCountSelect = $('fret-count');
  const board = $('board');
  const scrollHint = $('scroll-hint');
  const title = $('selection-title');
  const notesLabel = $('selection-notes');
  const scaleSettings = $('scale-settings');
  const chordSettings = $('chord-settings');
  const octaveSettings = $('octave-settings');
  const chordButtons = $('chord-buttons');
  const gripSelect = $('grip-select');
  const pentatonicBoxes = $('pentatonic-boxes');
  const threeNoteBoxes = $('three-note-boxes');
  const onlyBoxNotes = $('box-notes-only');
  const boxHelp = $('box-help');
  const systemName = $('system-name');
  const viewButtons = [...document.querySelectorAll('[data-view]')];
  const legends = {
    scale: $('scale-legend'),
    chords: $('chord-legend'),
    octaves: $('octave-legend')
  };

  let { rootPC, scaleId } = selectionFromURL(9, 'mp');
  let view = location.hash === '#oktaavit' ? 'octaves'
    : location.hash === '#soinnut' ? 'chords' : 'scale';
  let selectedChord = 0;
  let selectedGrip = -1;

  function isPentatonic() { return scaleId === 'mp' || scaleId === 'majp'; }
  function fretCount() { return Number(fretCountSelect.value); }
  function system() { return isPentatonic() ? 'pentatonic' : '3nps'; }
  function automatic() { return fretCount() === 17; }
  function activeBoxes() { return isPentatonic() ? pentatonicBoxes : threeNoteBoxes; }

  function updateScrollHint() {
    scrollHint.hidden = board.scrollWidth <= board.clientWidth + 1;
  }

  function syncUrl() {
    const url = new URL(location.href);
    url.searchParams.set('toonikka', CHROM[rootPC]);
    url.searchParams.set('asteikko', scaleId);
    url.hash = view === 'octaves' ? 'oktaavit' : view === 'chords' ? 'soinnut' : '';
    history.replaceState(null, '', url.pathname + url.search + url.hash);
  }

  function setView(next, updateUrl = true) {
    view = next;
    viewButtons.forEach(button => button.setAttribute('aria-pressed', button.dataset.view === next ? 'true' : 'false'));
    scaleField.hidden = next === 'octaves';
    scaleSettings.hidden = next !== 'scale';
    chordSettings.hidden = next !== 'chords';
    octaveSettings.hidden = next !== 'octaves';
    Object.entries(legends).forEach(([name, element]) => { element.hidden = name !== next; });
    if (updateUrl) syncUrl();
    render();
  }

  function renderScale() {
    const scale = SCALES[scaleId];
    const chosenSystem = system();
    const pentatonic = chosenSystem === 'pentatonic';
    pentatonicBoxes.hidden = !pentatonic;
    threeNoteBoxes.hidden = pentatonic;
    systemName.textContent = pentatonic ? 'Pentatoniset boksit (5)' : '3NPS: kolme säveltä per kieli (7)';
    const numbers = [...activeBoxes().querySelectorAll('input:checked')].map(input => Number(input.value));
    const boxes = fingeringBoxes(rootPC, scale, chosenSystem, numbers, fretCount());
    const usable = boxes.some(box => box.positions.length > 0);
    onlyBoxNotes.disabled = !usable;
    boxHelp.textContent = usable
      ? 'Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet.'
      : 'Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita.';
    board.innerHTML = renderBoard(rootPC, scale, fretCount(), {
      automatic: automatic(),
      boxes,
      onlyBoxNotes: usable && onlyBoxNotes.checked,
      label: CHROM[rootPC] + ' ' + scale.name
    });
    title.textContent = CHROM[rootPC] + '-' + scale.name;
    notesLabel.textContent = 'Sävelet: ' + scaleNotes(scale)
      .map(([interval, degree]) => noteName(rootPC, interval, degree)).join(' · ');
    updateScrollHint();
    if (boxes.length === 1) revealPositions(board, '.box-highlight[data-box="' + boxes[0].number + '"]');
  }

  function renderChords() {
    const chords = scaleTriads(rootPC, SCALES[scaleId]);
    if (!chords.length) {
      chordButtons.replaceChildren();
      gripSelect.replaceChildren();
      title.textContent = 'Valitun asteikon soinnut';
      notesLabel.textContent = 'Tälle asteikolle ei löytynyt näytettäviä kolmisointuja.';
      board.innerHTML = renderBoard(rootPC, SCALES[scaleId], fretCount(), { automatic: automatic() });
      updateScrollHint();
      return;
    }
    selectedChord = Math.max(0, Math.min(chords.length - 1, selectedChord));
    const chord = chords[selectedChord];

    chordButtons.replaceChildren(...chords.map((item, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = item.name;
      button.setAttribute('aria-pressed', index === selectedChord ? 'true' : 'false');
      button.addEventListener('click', () => {
        selectedChord = index;
        selectedGrip = -1;
        render();
      });
      return button;
    }));

    const grips = triadGrips(chord, fretCount()).slice(0, 24);
    if (selectedGrip >= grips.length) selectedGrip = -1;
    const allOption = new Option('Kaikki sointusävelet', '-1');
    gripSelect.replaceChildren(allOption,
      ...grips.map(({ strings }, index) => new Option(
        'Ote ' + (index + 1) + ' · ' + [...strings].reverse().map(fret => fret ?? 'x').join(' '),
        String(index)
      )));
    gripSelect.value = String(selectedGrip);
    const grip = selectedGrip < 0 ? null : grips[selectedGrip]?.strings ?? null;

    board.innerHTML = renderBoard(chord.root, chord, fretCount(), {
      automatic: automatic(),
      grip,
      label: chord.name + (grip ? ', valittu sointuote' : ', kaikki sointusävelet')
    });
    title.textContent = chord.name + ' · ' + CHROM[rootPC] + '-' + SCALES[scaleId].name;
    notesLabel.textContent = 'Sointusävelet: ' + chord.notes.join(' · ');
    updateScrollHint();
    if (grip) revealPositions(board, '.grip-notes');
  }

  function renderOctaves() {
    const matches = [];
    OPEN_PITCHES.forEach((openMidi, string) => {
      for (let fret = 0; fret <= fretCount(); fret++) {
        const midi = openMidi + fret;
        if (midi % 12 === rootPC) matches.push({ string, fret, midi });
      }
    });
    const lowest = Math.min(...matches.map(position => position.midi));
    const kinds = ['same', 'up', 'up2', 'up3'];
    const points = matches.map(({ string, fret, midi }) => {
      const octave = Math.floor((midi - lowest) / 12);
      return {
        string, fret, kind: kinds[Math.min(octave, kinds.length - 1)],
        label: CHROM[rootPC] + (Math.floor(midi / 12) - 1)
      };
    });
    board.innerHTML = renderBoard(rootPC, SCALES[scaleId], fretCount(), {
      notes: points, automatic: automatic(), label: CHROM[rootPC] + ' eri oktaaveissa'
    });
    title.textContent = CHROM[rootPC] + ' · sijainnit otelaudalla';
    notesLabel.textContent = matches.length + ' sijaintia näkyvissä. Samanniminen sävel esiintyy eri korkeuksilla.';
    updateScrollHint();
  }

  function render() {
    rootSelect.value = String(rootPC);
    scaleSelect.value = scaleId;
    if (view === 'chords') renderChords();
    else if (view === 'octaves') renderOctaves();
    else renderScale();
  }

  CHROM.forEach((name, index) => rootSelect.add(new Option(name, String(index))));
  pentatonicBoxes.innerHTML = boxOptions('pentatonic');
  threeNoteBoxes.innerHTML = boxOptions('3nps');

  rootSelect.addEventListener('change', () => {
    rootPC = Number(rootSelect.value);
    selectedChord = 0; selectedGrip = -1;
    syncUrl();
    render();
  });
  scaleSelect.addEventListener('change', () => {
    scaleId = scaleSelect.value;
    selectedChord = 0; selectedGrip = -1;
    syncUrl();
    render();
  });
  fretCountSelect.addEventListener('change', render);
  viewButtons.forEach(button => button.addEventListener('click', () => setView(button.dataset.view)));
  [pentatonicBoxes, threeNoteBoxes].forEach(group =>
    group.addEventListener('change', render));
  onlyBoxNotes.addEventListener('change', render);
  gripSelect.addEventListener('change', () => {
    selectedGrip = Number(gripSelect.value);
    render();
  });

  window.addEventListener('hashchange', () => {
    setView(location.hash === '#oktaavit' ? 'octaves'
      : location.hash === '#soinnut' ? 'chords' : 'scale', false);
  });
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(updateScrollHint).observe(board);
  setView(view, false);
})();
