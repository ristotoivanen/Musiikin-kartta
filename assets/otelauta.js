const fretboard = (() => {
  const CHROM = ['C','C♯','D','E♭','E','F','F♯','G','A♭','A','B♭','B'];
  const LETTERS = 'CDEFGAB';
  const NATURAL_PITCHES = [0, 2, 4, 5, 7, 9, 11];
  const OPEN_PITCHES = [64, 59, 55, 50, 45, 40]; // MIDI-sävelkorkeudet ohuimmalta kieleltä paksuimmalle.
  const STRING_NAMES = ['e', 'B', 'G', 'D', 'A', 'E'];

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
    boxes = [], onlyBoxNotes = false, automatic = true, focusDegree = ''
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

    let s = '<svg viewBox="0 0 ' + width + ' ' + height + '" style="min-width:' + minWidth + 'px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' +
      CHROM[rootPC] + ' ' + sc.name + '. ' + fretCount + ' nauhaa. Vapaat kielet satulan vasemmalla puolella.">';
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
      s += '<line x1="' + (OPEN_LEFT + 4) + '" y1="' + y + '" x2="' + (NUT_X - 4) + '" y2="' + y + '" stroke="#8b809d" stroke-dasharray="3 3"/>';
      s += '<line x1="' + NUT_X + '" y1="' + y + '" x2="' + (bridgeX + 5) + '" y2="' + y + '" stroke="#b9b9c4" stroke-width="' + th.toFixed(2) + '"/>';
      s += '<circle cx="' + (bridgeX + 5) + '" cy="' + y + '" r="3" fill="#211c26" stroke="#b9b9c4"/>';
      s += '<text x="13" y="' + (y + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + STRING_NAMES[i] + '</text>';
    });
    OPEN_PITCHES.forEach((openPitch, si) => {
      for (let f = 0; f <= fretCount; f++) {
        const pc = (openPitch + f) % 12;
        if (!(pc in ivMap)) continue;
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
    s += '</svg>';
    return s;
  }

  return { CHROM, OPEN_PITCHES, PENT_MAJ, SCALES, noteName, scaleNotes, selectionFromURL, selectionHref, renderBoard };
})();
