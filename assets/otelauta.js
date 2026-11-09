const fretboard = (() => {
  const CHROM = ['C','C♯','D','E♭','E','F','F♯','G','A♭','A','B♭','B'];
  const LETTERS = 'CDEFGAB';
  const NATURAL_PITCHES = [0, 2, 4, 5, 7, 9, 11];
  const OPEN_PITCHES = [64, 59, 55, 50, 45, 40]; // MIDI-sävelkorkeudet ohuimmalta kieleltä paksuimmalle.
  const LOW_E = OPEN_PITCHES.at(-1);
  const BOX_FRETS = { pentatonic: 15, '3nps': 17 };
  const DIATONIC_DEGREES = 7;

  // A-mollipentatonisen vakioboksit ohuimmalta kieleltä paksuimmalle.
  const MINOR_BOXES = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]],
  ];

  const STRING_NAMES = ['e', 'B', 'G', 'D', 'A', 'E'];
  const SPOKEN_STRING_NAMES = ['ohut e', 'B', 'G', 'D', 'A', 'paksu E'];

  const PENT_MIN = [[0,'1'],[3,'♭3'],[5,'4'],[7,'5'],[10,'♭7']];
  const PENT_MAJ = [[0,'1'],[2,'2'],[4,'3'],[7,'5'],[9,'6']];

  const SCALES = {
    mp:        { name: 'mollipentatoninen', base: PENT_MIN, add: [],
                 hint: 'Kokeile samaa boksia doorisessa, fryygisessä tai aiolisessa moodissa.' },
    dorian:    { name: 'doorinen', base: PENT_MIN, add: [[2,'2'],[9,'6']],
                 hint: 'Lisäsävelet: 2. aste ja luonnollinen 6. aste – jazzia ja funkia.' },
    phrygian:  { name: 'fryyginen', base: PENT_MIN, add: [[1,'♭2'],[8,'♭6']],
                 hint: 'Alennettu 2. ja 6. aste antavat moodille tumman sävyn.' },
    aeolian:   { name: 'aiolinen', base: PENT_MIN, add: [[2,'2'],[8,'♭6']],
                 hint: 'Aiolinen on luonnollinen molli.' },
    locrian:   { name: 'lokrinen', base: [[0,'1'],[3,'♭3'],[5,'4'],[10,'♭7']],
                 add: [[1,'♭2'],[6,'♭5'],[8,'♭6']],
                 hint: 'Mollipentatoninen boksi toimii vertailukohtana. Lokrinen käyttää puhtaan kvintin tilalla alennettua kvinttiä.' },
    majp:      { name: 'duuripentatoninen', base: PENT_MAJ, add: [],
                 hint: 'Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi.' },
    ionian:    { name: 'jooninen', base: PENT_MAJ, add: [[5,'4'],[11,'7']],
                 hint: 'Lisäsävelet: 4. ja 7. aste – tavallinen duuri.' },
    lydian:    { name: 'lyydinen', base: PENT_MAJ, add: [[6,'♯4'],[11,'7']],
                 hint: 'Korotettu 4. aste antaa moodille leijuvan sävyn.' },
    mixolydian:{ name: 'miksolyydinen', base: PENT_MAJ, add: [[5,'4'],[10,'♭7']],
                 hint: 'Alennettu 7. aste on tuttu bluesista ja rockista.' }
  };

  const OPEN_LEFT = 26, NUT_X = 72;
  const PAD_T = 30, FW = 54, SS = 34, R = 11;
  const openCenter = (OPEN_LEFT + NUT_X) / 2;
  const height = PAD_T + (OPEN_PITCHES.length - 1) * SS + 30;
  const wireX = fret => NUT_X + fret * FW;
  const cellCX = fret => fret === 0 ? openCenter : wireX(fret) - FW / 2;
  const stringY = i => PAD_T + i * SS;

  function noteName(root, interval, degree) {
    const index = LETTERS.indexOf(CHROM[root][0]) + Number(degree.slice(-1)) - 1;
    const letter = index % LETTERS.length;
    const naturalPitch = NATURAL_PITCHES[letter] + 12 * Math.floor(index / LETTERS.length);
    const accidental = root + interval - naturalPitch;
    return LETTERS[letter] + (accidental < 0 ? '♭' : '♯').repeat(Math.abs(accidental));
  }

  function scaleNotes(scale) {
    return [...scale.base, ...scale.add].sort((a, b) => a[0] - b[0]);
  }

  function getPentatonicBox(rootPC, index, major) {
    // Rinnakkaisduurin toonika on mollipohjan toinen sävel.
    const shapeIndex = index + (major ? 1 : 0);
    const shape = MINOR_BOXES[shapeIndex % MINOR_BOXES.length];
    const first = Math.min(...shape.map(([low]) => low));
    const last = Math.max(...shape.map(([, high]) => high));
    const rootFret = (rootPC - (LOW_E % 12) + 12) % 12;
    const referenceRootFret = major ? 8 : 5; // C tai A paksuimmalla E-kielellä
    let shift = rootFret - referenceRootFret + 12 * Math.floor(shapeIndex / MINOR_BOXES.length);
    // Siirrä kokonainen boksi tarvittaessa oktaavia ylös tai alas.
    if (first + shift < 0) shift += 12;
    if (last + shift > BOX_FRETS.pentatonic) shift -= 12;
    return {
      strings: shape.map(pair => pair.map(fret => fret + shift)),
      start: first + shift,
      end: last + shift
    };
  }

  function getThreeNoteBox(rootPC, index, intervals) {
    const firstInterval = intervals[index];
    const firstFret = (rootPC + firstInterval - (LOW_E % 12) + 12) % 12;
    const tonicPitch = LOW_E + firstFret - firstInterval;
    const strings = OPEN_PITCHES.map((openPitch, string) => {
      // Kulje asteikkoa paksuimmalta kieleltä ylöspäin, kolme säveltä kerrallaan.
      const firstStep = index + (OPEN_PITCHES.length - 1 - string) * 3;
      return [firstStep, firstStep + 1, firstStep + 2].map(step => {
        const octave = Math.floor(step / intervals.length);
        const interval = intervals[step % intervals.length];
        return tonicPitch + interval + 12 * octave - openPitch;
      });
    });
    return {
      strings,
      start: Math.min(...strings.map(frets => frets[0])),
      end: Math.max(...strings.map(frets => frets.at(-1)))
    };
  }

  function getVisibleBoxPositions(box, fretCount) {
    const positions = [];
    const firstShift = Math.ceil(-box.end / 12) * 12;
    for (let shift = firstShift; box.start + shift <= fretCount; shift += 12) {
      const strings = box.strings.map(frets => frets
        .map(fret => fret + shift)
        .filter(fret => fret >= 0 && fret <= fretCount));
      const visibleFrets = strings.flat();
      positions.push({
        strings,
        start: Math.min(...visibleFrets),
        end: Math.max(...visibleFrets),
        partial: box.start + shift < 0 || box.end + shift > fretCount
      });
    }
    // Näytä reunoille jäävät osat, jos kokonainen boksi ei mahdu näkymään.
    const complete = positions.filter(position => !position.partial);
    return complete.length ? complete : positions;
  }

  function supportsThreeNoteBoxes(scale) {
    return scaleNotes(scale).length === DIATONIC_DEGREES;
  }

  // Pidä käyttäjän valitsema sormitustapa, jos se sopii asteikkoon.
  // Ilman omaa valintaa moodit näytetään 3NPS-sormituksina.
  function syncBoxSystem(select, scale, preferred) {
    const supported = supportsThreeNoteBoxes(scale);
    select.querySelector('[value="3nps"]').disabled = !supported;
    select.value = supported ? preferred ?? '3nps' : 'pentatonic';
  }

  function fingeringBoxes(rootPC, scale, system, numbers, fretCount) {
    const intervals = scaleNotes(scale).map(([interval]) => interval);
    return numbers.map(number => {
      const index = number - 1;
      const box = system === '3nps'
        ? getThreeNoteBox(rootPC, index, intervals)
        : getPentatonicBox(rootPC, index, scale.base === PENT_MAJ);
      const positions = fretCount === undefined ? [box] : getVisibleBoxPositions(box, fretCount);
      return { number, positions };
    });
  }

  function revealPositions(board, selector) {
    const viewport = board.getBoundingClientRect();
    const highlights = board.querySelectorAll(selector);
    let nearest = Infinity;
    highlights.forEach(highlight => {
      const bounds = highlight.getBoundingClientRect();
      let offset = 0;
      if (bounds.left < viewport.left) {
        offset = bounds.left - viewport.left - 8;
      } else if (bounds.right > viewport.right) {
        offset = bounds.right - viewport.right + 8;
      }
      if (Math.abs(offset) < Math.abs(nearest)) nearest = offset;
    });
    if (Number.isFinite(nearest)) board.scrollLeft += nearest;
  }

  function boxOptions(system, checkFirst = false) {
    const count = system === '3nps' ? DIATONIC_DEGREES : MINOR_BOXES.length;
    return Array.from({ length: count }, (_, index) => {
      const number = index + 1;
      return '<label class="box-toggle" data-box="' + number + '"><input type="checkbox" value="' +
        number + '"' + (checkFirst && index === 0 ? ' checked' : '') + '> Boksi ' + number + '</label>';
    }).join('');
  }

  function scaleTriads(rootPC, scale) {
    const notes = scaleNotes(scale);
    const names = new Map(notes.map(([interval, degree]) => [interval, noteName(rootPC, interval, degree)]));
    const forms = [
      { suffix: '', base: [[0, '1'], [4, '3'], [7, '5']] },
      { suffix: 'm', base: [[0, '1'], [3, '♭3'], [7, '5']] },
      { suffix: '°', base: [[0, '1'], [3, '♭3'], [6, '♭5']] },
    ];
    return notes.flatMap(([interval, degree]) => forms.flatMap(({ suffix, base }) => {
      const members = base.map(([step]) => names.get((interval + step) % 12));
      if (!members.every(Boolean)) return [];
      return {
        root: (rootPC + interval) % 12,
        degree: Number(String(degree).replace(/\D/g, '')),
        name: members[0] + suffix,
        notes: members,
        base,
        add: [],
      };
    }));
  }

  function triadGrips(chord, fretCount) {
    const pitchClasses = chord.base.map(([interval]) => (chord.root + interval) % 12);
    const candidates = OPEN_PITCHES.map(openPitch => {
      const frets = [];
      for (let fret = 0; fret <= fretCount; fret++) {
        const pitch = (openPitch + fret) % 12;
        if (pitchClasses.includes(pitch)) frets.push({ fret, pitch });
      }
      return frets;
    });
    const grips = [];
    for (let string = 0; string <= candidates.length - 3; string++) {
      for (const a of candidates[string]) {
        for (const b of candidates[string + 1]) {
          if (a.pitch === b.pitch) continue;
          for (const c of candidates[string + 2]) {
            if (c.pitch === a.pitch || c.pitch === b.pitch) continue;
            const frets = [a.fret, b.fret, c.fret];
            const low = Math.min(...frets);
            const high = Math.max(...frets);
            if (high - low > 3) continue;
            const strings = Array(OPEN_PITCHES.length).fill(null);
            strings.splice(string, 3, ...frets);
            grips.push({ strings, low, high });
          }
        }
      }
    }
    return grips.sort((a, b) => a.high - b.high || a.low - b.low);
  }

  // Perusotteet luetaan paksusta E-kielestä ohueen e-kieleen. null jätetään soittamatta.
  const OPEN_CHORDS = {
    '0:': [null, 3, 2, 0, 1, 0],        '2:': [null, null, 0, 2, 3, 2],
    '4:': [0, 2, 2, 1, 0, 0],           '7:': [3, 2, 0, 0, 0, 3],
    '9:': [null, 0, 2, 2, 2, 0],        '2:m': [null, null, 0, 2, 3, 1],
    '4:m': [0, 2, 2, 0, 0, 0],          '9:m': [null, 0, 2, 2, 1, 0],
    '0:7': [null, 3, 2, 3, 1, 0],       '2:7': [null, null, 0, 2, 1, 2],
    '4:7': [0, 2, 0, 1, 0, 0],          '7:7': [3, 2, 0, 0, 0, 1],
    '9:7': [null, 0, 2, 0, 2, 0],       '11:7': [null, 2, 1, 2, 0, 2],
    '2:m7': [null, null, 0, 2, 1, 1],   '4:m7': [0, 2, 0, 0, 0, 0],
    '9:m7': [null, 0, 2, 0, 1, 0],      '0:maj7': [null, 3, 2, 0, 0, 0],
    '2:maj7': [null, null, 0, 2, 2, 2], '4:maj7': [0, 2, 1, 1, 0, 0],
    '5:maj7': [null, null, 3, 2, 1, 0], '7:maj7': [3, 2, 0, 0, 0, 2],
    '9:maj7': [null, 0, 2, 1, 2, 0],    '2:5': [null, null, 0, 2, 3, null],
  };

  // Siirrettävät otteet perussävelen nauhasta: E-kielen ja A-kielen perussävel.
  const MOVABLE_CHORDS = [
    { string: 0, openPC: 4, shapes: {
      '': [0, 2, 2, 1, 0, 0], m: [0, 2, 2, 0, 0, 0], '7': [0, 2, 0, 1, 0, 0], m7: [0, 2, 0, 0, 0, 0],
      maj7: [0, null, 1, 1, 0, null], '9': [0, 2, 0, 1, 0, 2], 'm7♭5': [0, null, 0, 0, -1, null],
      '°': [0, 1, 2, 0, null, null], '5': [0, 2, 2, null, null, null], '5♭5': [0, 1, 2, null, null, null],
    } },
    { string: 1, openPC: 9, shapes: {
      '': [null, 0, 2, 2, 2, 0], m: [null, 0, 2, 2, 1, 0], '7': [null, 0, 2, 0, 2, 0], m7: [null, 0, 2, 0, 1, 0],
      maj7: [null, 0, 2, 1, 2, 0], '9': [null, 0, -1, 0, 0, 0], 'm7♭5': [null, 0, 1, 0, 1, null],
      '°': [null, 0, 1, 2, 1, null], '5': [null, 0, 2, 2, null, null], '5♭5': [null, 0, 1, 2, null, null],
    } },
  ];

  // Valitse avosointu, jos sellainen on, muuten matalin siirrettävä ote.
  function chordGrip(rootPC, quality) {
    const open = OPEN_CHORDS[rootPC + ':' + quality];
    if (open) return { frets: open, barre: null };
    let best = null;
    MOVABLE_CHORDS.forEach(({ string, openPC, shapes }) => {
      const shape = shapes[quality];
      if (!shape) return;
      let fret = (rootPC - openPC + 12) % 12;
      if (fret + Math.min(...shape.filter(offset => offset !== null)) < 0) fret += 12;
      if (best && best.fret <= fret) return;
      const frets = shape.map(offset => offset === null ? null : fret + offset);
      const barre = fret > 0 && shape.at(-1) === 0 ? { fret, from: string, to: shape.length - 1 } : null;
      best = { fret, frets, barre };
    });
    return best && { frets: best.frets, barre: best.barre };
  }

  // Sama kaaviotyyli kuin oppaan sivuilla (tools/kaaviot/sointukaavio.py, .chord-svg tiedostossa otelauta.css).
  function renderChordDiagram(rootPC, { frets, barre }, name) {
    const LEFT = 24, GAP = 14, TOP = 30, ROW = 18, ROWS = 4;
    const lowToHigh = [...OPEN_PITCHES].reverse();
    const fretted = frets.filter(fret => fret > 0);
    const nearNut = !fretted.length || (Math.max(...fretted) <= ROWS && (frets.includes(0) || Math.min(...fretted) === 1));
    const base = nearNut ? 1 : Math.min(...fretted);
    const x = string => LEFT + string * GAP;
    const y = fret => TOP + (fret - base) * ROW + ROW / 2;
    const bottom = TOP + ROWS * ROW;
    let s = '<svg class="chord-svg" viewBox="0 0 108 ' + (bottom + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' +
      name + '-ote paksusta kielestä ohueen: ' + frets.map(fret => fret ?? 'x').join(' ') + '">';
    for (let row = 0; row <= ROWS; row++) {
      s += '<line class="' + (row === 0 && base === 1 ? 'nut' : 'fret') + '" x1="' + x(0) + '" y1="' + (TOP + row * ROW) +
        '" x2="' + x(5) + '" y2="' + (TOP + row * ROW) + '"/>';
    }
    frets.forEach((_, string) => {
      s += '<line class="string" x1="' + x(string) + '" y1="' + TOP + '" x2="' + x(string) + '" y2="' + bottom + '"/>';
    });
    if (base > 1) s += '<text class="fret-label" x="' + (LEFT - 9) + '" y="' + (y(base) + 4) + '">' + base + '</text>';
    if (barre) {
      s += '<rect class="barre" x="' + (x(barre.from) - 6.5) + '" y="' + (y(barre.fret) - 6.5) + '" width="' +
        ((barre.to - barre.from) * GAP + 13) + '" height="13" rx="6.5"/>';
    }
    frets.forEach((fret, string) => {
      if (fret === null) {
        s += '<text class="marker" x="' + x(string) + '" y="22">×</text>';
        return;
      }
      const isRoot = (lowToHigh[string] + fret) % 12 === rootPC;
      if (fret === 0) {
        s += '<circle class="open' + (isRoot ? ' root-open' : '') + '" cx="' + x(string) + '" cy="18" r="4.5"/>';
        return;
      }
      if (barre && fret === barre.fret && string >= barre.from && string <= barre.to && !isRoot) return;
      s += '<circle class="' + (isRoot ? 'root' : 'tone') + '" cx="' + x(string) + '" cy="' + y(fret) + '" r="6.5"/>';
    });
    return s + '</svg>';
  }

  function selectionFromURL(defaultRoot, defaultScale) {
    const params = new URLSearchParams(location.search);
    const root = CHROM.indexOf(params.get('toonikka'));
    const scale = params.get('asteikko');
    return {
      rootPC: root === -1 ? defaultRoot : root,
      scaleId: Object.hasOwn(SCALES, scale) ? scale : defaultScale
    };
  }

  function selectionHref(page, rootPC, scaleId) {
    return page + '?' + new URLSearchParams({ toonikka: CHROM[rootPC], asteikko: scaleId });
  }

  function renderBoard(rootPC, sc, fretCount, {
    boxes = [], onlyBoxNotes = false, automatic = true, focusDegree = '', grip = null,
    label = CHROM[rootPC] + ' ' + sc.name,
  } = {}) {
    const fretboardEnd = wireX(fretCount);
    const bridgeX = fretboardEnd + 48;
    const width = bridgeX + 28;
    const neckTop = PAD_T - 14;
    const neckBottom = stringY(OPEN_PITCHES.length - 1) + 14;
    const neckHeight = neckBottom - neckTop;
    const minWidth = automatic ? 680 : Math.ceil(width * 0.64);
    const boxPositions = boxes.flatMap(box => box.positions);
    const ivMap = {};
    sc.base.forEach(([iv, deg]) => ivMap[(rootPC + iv) % 12] = { deg, added: false });
    sc.add.forEach(([iv, deg]) => ivMap[(rootPC + iv) % 12] = { deg, added: true });

    // Sointuotteessa kielet, joilla ei ole säveltä, jätetään soittamatta.
    const muted = OPEN_PITCHES.map((_, i) => Boolean(grip) && grip[i] === null);
    const mutedNames = SPOKEN_STRING_NAMES.filter((_, i) => muted[i]).reverse();
    const description = label + '. ' + fretCount + ' nauhaa. Vapaat kielet satulan vasemmalla puolella.' +
      (mutedNames.length ? ' Soittamatta jäävät kielet: ' + mutedNames.join(', ') + '.' : '');

    let s = '<svg viewBox="0 0 ' + width + ' ' + height + '" style="min-width:' + minWidth + 'px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' +
      description + '">';
    s += '<rect x="' + OPEN_LEFT + '" y="' + neckTop + '" width="' + (NUT_X - OPEN_LEFT) + '" height="' + neckHeight + '" rx="6" fill="#2a2338"/>';
    s += '<rect x="' + NUT_X + '" y="' + neckTop + '" width="' + (fretboardEnd - NUT_X) + '" height="' + neckHeight + '" fill="#231a12"/>';
    s += '<rect x="' + fretboardEnd + '" y="' + neckTop + '" width="' + (width - fretboardEnd - 4) + '" height="' + neckHeight + '" rx="8" fill="#32251e"/>';
    for (let f = 1; f <= fretCount; f++)
      s += '<line x1="' + wireX(f) + '" y1="' + neckTop + '" x2="' + wireX(f) + '" y2="' + neckBottom + '" stroke="#6f5b47" stroke-width="2"/>';
    s += '<rect x="' + (NUT_X - 3) + '" y="' + neckTop + '" width="6" height="' + neckHeight + '" rx="2" fill="#d8cbb6"/>';
    s += '<rect x="' + (bridgeX - 11) + '" y="' + (neckTop + 3) + '" width="22" height="' + (neckHeight - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>';
    s += '<rect x="' + (bridgeX - 4) + '" y="' + (neckTop + 7) + '" width="3" height="' + (neckHeight - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const midY = (neckTop + neckBottom) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter(f => f <= fretCount).forEach(f =>
      s += '<circle cx="' + cellCX(f) + '" cy="' + midY + '" r="5.5" fill="#7a6550"/>');
    for (let fret = 12; fret <= fretCount; fret += 12) {
      s += '<circle cx="' + cellCX(fret) + '" cy="' + (midY - SS) + '" r="5.5" fill="#7a6550"/>';
      s += '<circle cx="' + cellCX(fret) + '" cy="' + (midY + SS) + '" r="5.5" fill="#7a6550"/>';
    }
    s += '<text x="' + openCenter + '" y="' + (height - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>';
    s += '<text x="' + NUT_X + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>';
    s += '<text x="' + bridgeX + '" y="' + (height - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let f = 1; f <= fretCount; f++)
      s += '<text x="' + cellCX(f) + '" y="' + (height - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + f + '</text>';
    boxes.forEach(({ number, positions }) => {
      positions.forEach(position => {
        const classes = position.partial ? 'box-highlight box-partial' : 'box-highlight';
        s += '<g class="' + classes + '" data-box="' + number + '" aria-hidden="true">';
        const topFrets = position.strings.find(frets => frets.length);
        const labelX = (cellCX(topFrets[0]) + cellCX(topFrets.at(-1))) / 2;
        s += '<text class="box-number" x="' + labelX + '" y="12">' + number + '</text>';
        position.strings.forEach((frets, i) => {
          if (!frets.length) return;
          const left = cellCX(frets[0]) - 16;
          const bandWidth = cellCX(frets.at(-1)) - cellCX(frets[0]) + 32;
          s += '<rect class="box-band" x="' + left + '" y="' + (stringY(i) - 14) + '" width="' + bandWidth + '" height="28" rx="14"/>';
        });
        s += '</g>';
      });
    });
    OPEN_PITCHES.forEach((_, i) => {
      const th = 1 + (i * 0.45);
      const y = stringY(i);
      if (muted[i]) {
        s += '<text class="muted-mark" x="' + openCenter + '" y="' + (y + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>';
      } else {
        s += '<line x1="' + (OPEN_LEFT + 4) + '" y1="' + y + '" x2="' + (NUT_X - 4) + '" y2="' + y + '" stroke="#8b809d" stroke-dasharray="3 3"/>';
      }
      s += '<g' + (muted[i] ? ' opacity=".35"' : '') + '>';
      s += '<line x1="' + NUT_X + '" y1="' + y + '" x2="' + (bridgeX + 5) + '" y2="' + y + '" stroke="#b9b9c4" stroke-width="' + th.toFixed(2) + '"/>';
      s += '<circle cx="' + (bridgeX + 5) + '" cy="' + y + '" r="3" fill="#211c26" stroke="#b9b9c4"/>';
      s += '</g>';
      s += '<text x="13" y="' + (y + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + STRING_NAMES[i] + '</text>';
    });
    if (grip) s += '<g class="grip-notes">';
    OPEN_PITCHES.forEach((openPitch, si) => {
      for (let f = 0; f <= fretCount; f++) {
        const pc = (openPitch + f) % 12;
        if (!(pc in ivMap)) continue;
        if (grip && grip[si] !== f) continue;
        if (onlyBoxNotes && !boxPositions.some(({ strings }) => {
          const frets = strings[si];
          return frets.length > 0 && f >= frets[0] && f <= frets.at(-1);
        })) continue;
        const info = ivMap[pc];
        const isRoot = info.deg === '1';
        const fill = info.added ? '#f0a13c' : (isRoot ? '#4b2fd6' : '#6d4aff');
        const textColor = info.added ? '#1a1430' : '#fff';
        if (info.deg === focusDegree) {
          s += '<circle class="focus-note" cx="' + cellCX(f) + '" cy="' + stringY(si) + '" r="14.5"/>';
        }
        s += '<circle cx="' + cellCX(f) + '" cy="' + stringY(si) + '" r="' + R + '" fill="' + fill + '" stroke="' + (isRoot ? '#fff' : '#1a1430') + '" stroke-width="' + (isRoot ? 2.5 : 1) + '"/>';
        s += '<text x="' + cellCX(f) + '" y="' + (stringY(si) + 3.5) + '" font-size="' + (info.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + textColor + '" text-anchor="middle">' + info.deg + '</text>';
      }
    });
    if (grip) s += '</g>';
    s += '</svg>';
    return s;
  }

  return {
    CHROM, OPEN_PITCHES, PENT_MAJ, SCALES, noteName, scaleNotes, scaleTriads, triadGrips,
    chordGrip, renderChordDiagram,
    selectionFromURL, selectionHref, renderBoard,
    BOX_FRETS, supportsThreeNoteBoxes, syncBoxSystem, fingeringBoxes, boxOptions, revealPositions
  };
})();
