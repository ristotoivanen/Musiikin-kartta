/* Otelautakartta: vain visualisointi, ei harjoitustehtäviä tai ääniraitoja. */
(() => {
  'use strict';

  const { CHROM, SCALES, OPEN_PITCHES, noteName, scaleNotes,
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
  const rootLabel = $('root-label');
  const qualitySelect = $('chord-quality');
  const chordModes = [...document.querySelectorAll('[data-chord-mode]')];
  const chordNavigation = $('chord-navigation');
  const chordPosition = $('chord-position');
  const chordHelp = $('chord-help');
  const prevGrip = $('chord-prev');
  const nextGrip = $('chord-next');
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
  // Soinnut eivät riipu muualla valitusta asteikosta.
  const params = new URLSearchParams(location.search);
  let chordQuality = params.get('sointu') === 'min' ? 'min' : 'maj';
  let chordMode = ['all', 'full', 'triad'].includes(params.get('ote')) ? params.get('ote') : 'full';
  const gripIndex = { full: 0, triad: 0 };

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
    if (view === 'chords') {
      url.searchParams.set('sointu', chordQuality);
      url.searchParams.set('ote', chordMode);
    } else {
      url.searchParams.delete('sointu');
      url.searchParams.delete('ote');
    }
    url.hash = view === 'octaves' ? 'oktaavit' : view === 'chords' ? 'soinnut' : '';
    history.replaceState(null, '', url.pathname + url.search + url.hash);
  }

  function setView(next, updateUrl = true) {
    view = next;
    viewButtons.forEach(button => button.setAttribute('aria-pressed', button.dataset.view === next ? 'true' : 'false'));
    scaleField.hidden = next !== 'scale';
    rootLabel.textContent = next === 'chords' ? 'Soinnun perussävel'
      : next === 'octaves' ? 'Näytettävä sävel' : 'Kotisävel';
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

  // Vain perinteiset helposti tunnistettavat avosoinnut.
  // Otteiden nauhat on lueteltu ohuimmalta e-kieleltä paksuimpaan E-kieleen.
  const OPEN_GRIPS = {
    '0:maj': [0, 1, 0, 2, 3, null], '2:maj': [2, 3, 2, 0, null, null],
    '4:maj': [0, 0, 1, 2, 2, 0], '7:maj': [3, 0, 0, 0, 2, 3],
    '9:maj': [0, 2, 2, 2, 0, null],
    '2:min': [1, 3, 2, 0, null, null], '4:min': [0, 0, 0, 2, 2, 0],
    '9:min': [0, 1, 2, 2, 0, null]
  };
  function chordData() {
    const third = chordQuality === 'min' ? 3 : 4;
    return {
      root: rootPC,
      name: CHROM[rootPC] + (chordQuality === 'min' ? 'm' : ''),
      notes: [0, third, 7].map(iv => CHROM[(rootPC + iv) % 12]),
      base: [[0, '1'], [third, chordQuality === 'min' ? '♭3' : '3'], [7, '5']],
      add: []
    };
  }
  function fullGrips() {
    const grips = [], seen = new Set();
    const add = (frets, label, base, barre = null) => {
      if (frets.some(fret => fret !== null && (fret < 0 || fret > fretCount()))) return;
      const key = frets.join(',');
      if (seen.has(key)) return;
      seen.add(key);
      grips.push({ strings: frets, label, base, barre });
    };
    const open = OPEN_GRIPS[rootPC + ':' + chordQuality];
    if (open) add(open, 'Avoin ote', 0);
    // E-barré soittaa kuutta, A-barré viittä kieltä; matala E mykistetään A-muodossa.
    const shapes = [
      { name: 'E-muoto · 6 kieltä', root: 4, from: 0, to: 5,
        offsets: chordQuality === 'min' ? [0,0,0,2,2,0] : [0,0,1,2,2,0] },
      { name: 'A-muoto · 5 kieltä', root: 9, from: 0, to: 4,
        offsets: chordQuality === 'min' ? [0,1,2,2,0,null] : [0,2,2,2,0,null] }
    ];
    for (const shape of shapes) {
      for (let fret = (rootPC - shape.root + 12) % 12; fret <= fretCount(); fret += 12) {
        const frets = shape.offsets.map(offset => offset === null ? null : offset + fret);
        add(frets, fret ? 'Barré · ' + shape.name : 'Avoin ' + shape.name,
          fret, fret ? { fret, from: shape.from, to: shape.to } : null);
      }
    }
    return [...grips.filter(x => x.label === 'Avoin ote'),
      ...grips.filter(x => x.label !== 'Avoin ote')
        .sort((a,b) => a.base - b.base || a.label.localeCompare(b.label, 'fi'))];
  }
  function threeStringGrips(chord) {
    return triadGrips(chord, fretCount())
      .filter(({ strings }) => strings.slice(0,3).every(fret => fret !== null) &&
        strings.slice(3).every(fret => fret === null))
      .sort((a,b) => a.low - b.low || a.high - b.high);
  }
  function triadInversion(chord, strings) {
    const bass = (OPEN_PITCHES[2] + strings[2]) % 12; // G-kieli.
    const third = (chord.root + (chordQuality === 'min' ? 3 : 4)) % 12;
    return bass === chord.root ? 'Perusmuoto' : bass === third ? '1. käännös' : '2. käännös';
  }
  function formatFrets(strings) {
    return [...strings].reverse().map(fret => fret === null ? 'x' : fret).join(' ');
  }
  function renderChords() {
    const chord = chordData();
    qualitySelect.value = chordQuality;
    chordModes.forEach(button => button.setAttribute(
      'aria-pressed', button.dataset.chordMode === chordMode ? 'true' : 'false'));

    let grip = null, barre = null, description = '';
    if (chordMode === 'all') {
      board.scrollLeft = 0;
      chordNavigation.hidden = true;
      chordHelp.textContent = 'Näytössä ovat kaikki soinnun perussävelet, terssit ja kvintit koko otelaudalla.';
    } else {
      const options = chordMode === 'full' ? fullGrips() : threeStringGrips(chord);
      const index = Math.min(gripIndex[chordMode], Math.max(0, options.length - 1));
      gripIndex[chordMode] = index;
      const chosen = options[index];
      chordNavigation.hidden = false;
      prevGrip.disabled = index === 0;
      nextGrip.disabled = index >= options.length - 1;
      if (!chosen) {
        chordPosition.textContent = 'Ei otetta valitulla nauhamäärällä';
        chordHelp.textContent = 'Lisää näytettävien nauhojen määrää.';
      } else {
        grip = chosen.strings;
        if (chordMode === 'full') {
          barre = chosen.barre;
          description = chosen.label + ' · ' + formatFrets(grip);
          chordHelp.textContent = 'Koko ote: × merkitsee mykistettyä kieltä. Nuolilla vaihdat saman soinnun avointen ja barré-muotojen välillä.';
        } else {
          description = triadInversion(chord, grip) + ' · G–B–e · ' +
            grip.slice(0,3).reverse().join(' ');
          chordHelp.textContent = 'Triadi: vain G-, B- ja e-kielet. Nuolilla selaat kolmisoinnun eri käännöksiä.';
        }
        chordPosition.textContent = description + ' · ' + (index + 1) + '/' + options.length;
      }
    }
    board.innerHTML = renderBoard(chord.root, chord, fretCount(), {
      automatic: automatic(), grip, barre,
      label: chord.name + (grip ? ' · ' + description : ' · kaikki sointusävelet')
    });
    title.textContent = CHROM[rootPC] + (chordQuality === 'maj' ? '-duuri' : '-molli') +
      ' · ' + (chordMode === 'all' ? 'Kaikki sointusävelet' :
        chordMode === 'full' ? 'Koko ote' : 'Triadi');
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
    gripIndex.full = 0; gripIndex.triad = 0;
    syncUrl();
    render();
  });
  scaleSelect.addEventListener('change', () => {
    scaleId = scaleSelect.value;
    syncUrl();
    render();
  });
  fretCountSelect.addEventListener('change', render);
  viewButtons.forEach(button => button.addEventListener('click', () => setView(button.dataset.view)));
  [pentatonicBoxes, threeNoteBoxes].forEach(group =>
    group.addEventListener('change', render));
  onlyBoxNotes.addEventListener('change', render);
  qualitySelect.addEventListener('change', () => {
    chordQuality = qualitySelect.value;
    gripIndex.full = 0; gripIndex.triad = 0;
    syncUrl();
    render();
  });
  chordModes.forEach(button => button.addEventListener('click', () => {
    chordMode = button.dataset.chordMode;
    syncUrl();
    render();
  }));
  prevGrip.addEventListener('click', () => {
    gripIndex[chordMode] = Math.max(0, gripIndex[chordMode] - 1);
    render();
  });
  nextGrip.addEventListener('click', () => {
    gripIndex[chordMode] += 1;
    render();
  });

  window.addEventListener('hashchange', () => {
    setView(location.hash === '#oktaavit' ? 'octaves'
      : location.hash === '#soinnut' ? 'chords' : 'scale', false);
  });
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(updateScrollHint).observe(board);
  setView(view, false);
})();
