// Otelautaopas BETA: Soinnut-näkymän käyttöliittymä (issue #193).
// Piirto tehdään yhteisellä otelautakomponentilla (MusicMapFretboard.renderBoard); tämä tiedosto
// rakentaa valintapainikkeet, nelisuuntaisen ohjauksen ja tiedot sekä korostaa aktiiviset kielet.
// Laskenta on assets/sointuotteet.js:ssä.
import {
  FAMILIES, MODES, QUALITIES, STRING_GROUPS, chordInfo, formatFrets, groupById, gripsFor, inversionLabel,
  matchAfterQualityChange, nearestGrip, neighbourGroup, parseChordParams, qualityById, supportsTriads,
  writeChordParams,
} from './sointuotteet.js';

// Perusnäkymä: yleisimmät soinnut, Koko ote ja Triadit. Laaja näkymä: kaikki laadut, Sointusävelet ja Sävelet/Asteet-vaihto.
const BASIC_QUALITIES = new Set(['maj', 'min', '7', 'maj7', 'm7']);
// Perusnäkymässä vain nuotit ilman etumerkkejä (ylennykset ja alennukset vain Laajassa).
const NATURAL_ROOTS = new Set([0, 2, 4, 5, 7, 9, 11]);
const SVG_NS = 'http://www.w3.org/2000/svg';
const escapeHtml = text => String(text).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

/**
 * @param {object} ctx
 *   panel: sointuvalintojen säiliö, board: #board, pad: nuoliohjauksen säiliö, details: otteen tiedot otelaudan alla,
 *   getRoot()/setRoot(pc): yhteinen perussävel, fretCount(), automatic(),
 *   change(): kutsutaan tilan muutoksen jälkeen (URL + uudelleenpiirto), summary({title, notes}).
 */
export function createChordsBeta(ctx) {
  const { CHROM } = globalThis.MusicMapFretboard;
  const state = {
    quality: 'maj', mode: 'full', group: 'gbe', labels: 'names', level: 'basic',
    anchor: null, rule: { type: 'initial', form: null, number: null },
    view: { grips: [], index: -1 },
  };
  let active = false;

  // --- Rakenne -------------------------------------------------------------------------------
  ctx.panel.innerHTML = `
    <div class="cb-block cb-level">
      <span class="cb-label" id="cb-level-label">Näkymä</span>
      <div class="cb-row cb-joined" role="group" aria-labelledby="cb-level-label">
        <button type="button" data-level="basic" aria-pressed="true">Perus</button>
        <button type="button" data-level="advanced" aria-pressed="false">Laaja</button>
      </div>
    </div>
    <div class="cb-block">
      <span class="cb-label" id="cb-root-label">Perussävel</span>
      <div class="cb-row cb-roots" role="group" aria-labelledby="cb-root-label">
        ${CHROM.map((name, pc) => `<button type="button" data-root="${pc}" ${NATURAL_ROOTS.has(pc) ? '' : 'data-adv '}aria-pressed="false">${name}</button>`).join('')}
      </div>
    </div>
    <div class="cb-block cb-qualities">
      ${FAMILIES.map(family => `
        <div class="cb-family" data-family="${family.id}">
          <span class="cb-label" id="cb-family-${family.id}">${family.label}</span>
          <div class="cb-row ${family.id === 'triad' ? 'cb-joined' : ''}" role="group" aria-labelledby="cb-family-${family.id}">
            ${QUALITIES.filter(quality => quality.family === family.id).map(quality =>
    `<button type="button" data-quality="${escapeHtml(quality.id)}" ${BASIC_QUALITIES.has(quality.id) ? '' : 'data-adv '}aria-pressed="false" aria-label="${escapeHtml(quality.title)} (${escapeHtml(quality.label)})" title="${escapeHtml(quality.title)}">${escapeHtml(quality.label)}</button>`).join('')}
          </div>
        </div>`).join('')}
    </div>
    <div class="cb-block cb-options">
      <div class="cb-family">
        <span class="cb-label" id="cb-mode-label">Esitystapa</span>
        <div class="cb-row" role="group" aria-labelledby="cb-mode-label">
          ${MODES.map(mode => `<button type="button" data-mode="${mode.id}" ${mode.id === 'all' ? 'data-adv ' : ''}aria-pressed="false">${mode.label}</button>`).join('')}
        </div>
      </div>
      <div class="cb-family" data-adv>
        <span class="cb-label" id="cb-labels-label">Merkinnät</span>
        <div class="cb-row cb-joined" role="group" aria-labelledby="cb-labels-label">
          <button type="button" data-labels="names" aria-pressed="true">Sävelet</button>
          <button type="button" data-labels="degrees" aria-pressed="false">Asteet</button>
        </div>
      </div>
      <div class="cb-family" id="cb-groups" hidden>
        <span class="cb-label" id="cb-groups-label">Kielet</span>
        <div class="cb-row" role="group" aria-labelledby="cb-groups-label">
          ${STRING_GROUPS.map(group => `<button type="button" data-group="${group.id}" aria-pressed="false" aria-label="Kielet ${group.label}">${group.label}</button>`).join('')}
        </div>
      </div>
    </div>
`;

  const q = selector => ctx.panel.querySelector(selector);
  const facts = ctx.details.querySelector('#cb-facts');
  const help = ctx.details.querySelector('#cb-help');
  const qa = selector => [...ctx.panel.querySelectorAll(selector)];
  const pad = {
    up: ctx.pad.querySelector('[data-pad="up"]'), down: ctx.pad.querySelector('[data-pad="down"]'),
    left: ctx.pad.querySelector('[data-pad="left"]'), right: ctx.pad.querySelector('[data-pad="right"]'),
    count: ctx.pad.querySelector('[data-pad="count"]'),
  };

  // --- Tila --------------------------------------------------------------------------------------
  function effectiveMode() {
    return state.mode === 'triad' && !supportsTriads(state.quality) ? 'full' : state.mode;
  }

  function sameGrip(a, b) { return a && b && a.strings.join() === b.strings.join(); }

  function chooseIndex(grips) {
    if (!grips.length) return -1;
    const { rule, anchor } = state;
    if (rule.type === 'initial') {
      if (rule.number && rule.number <= grips.length) return rule.number - 1;
      if (rule.form) {
        const found = grips.findIndex(grip => grip.shape === rule.form);
        if (found >= 0) return found;
      }
      return 0;
    }
    if (rule.type === 'quality') return matchAfterQualityChange(grips, anchor);
    const same = grips.findIndex(grip => sameGrip(grip, anchor));
    return same >= 0 ? same : nearestGrip(grips, anchor);
  }

  // --- Piirto ------------------------------------------------------------------------------------
  function relabel(svg, chord) {
    if (state.labels !== 'names') return;
    const byDegree = new Map(chord.degrees.map((degree, index) => [degree, chord.notes[index]]));
    svg.querySelectorAll('text[font-weight="700"]').forEach(text => {
      const name = byDegree.get(text.textContent);
      if (!name || text.closest('.muted-mark')) return;
      text.textContent = name;
      text.setAttribute('font-size', name.length > 2 ? '8' : name.length > 1 ? '9.5' : '11');
    });
  }

  // Kielten paksuudet suhteessa toisiinsa tavallisen sarjan (.010–.046) mukaan: e, B, G, D, A, E.
  const STRING_WIDTHS = [0.9, 1.2, 1.6, 2.4, 3.3, 4.2];
  function scaleStrings(svg) {
    [...svg.querySelectorAll('line[stroke="#b9b9c4"], line[stroke="#c4d2d3"]')]
      .filter(line => line.getAttribute('y1') === line.getAttribute('y2'))
      .forEach((line, index) => { if (index < 6) line.setAttribute('stroke-width', String(STRING_WIDTHS[index])); });
  }

  // Talla (kielten kiinnitys) ei opeta mitään: poistetaan se kuvasta.
  function removeBridge(svg) {
    svg.querySelectorAll('text').forEach(text => { if (text.textContent === 'Talla') text.remove(); });
    svg.querySelectorAll('rect[fill="#49434f"], rect[fill="#d8cbb6"][width="3"], circle[r="3"][fill="#211c26"]')
      .forEach(node => node.remove());
  }

  function highlightStrings(svg) {
    const notes = svg.querySelector('.grip-notes');
    const dots = notes ? [...notes.querySelectorAll('circle[data-string]')] : [];
    if (!dots.length) return;
    const ys = dots.map(dot => Number(dot.getAttribute('cy')));
    const top = Math.min(...ys) - 17, bottom = Math.max(...ys) + 17;
    const box = svg.viewBox.baseVal;
    const band = document.createElementNS(SVG_NS, 'rect');
    band.setAttribute('class', 'string-group-band');
    band.setAttribute('x', String(box.x));
    band.setAttribute('width', String(box.width));
    band.setAttribute('y', String(top));
    band.setAttribute('height', String(bottom - top));
    band.setAttribute('rx', '8');
    band.setAttribute('aria-hidden', 'true');
    svg.insertBefore(band, notes);
  }

  function applyLevel() {
    const advanced = state.level === 'advanced';
    if (!advanced) {
      if (!BASIC_QUALITIES.has(state.quality)) state.quality = 'maj';
      if (state.mode === 'all') state.mode = 'full';
      state.labels = 'names';
      const root = ctx.getRoot();
      if (!NATURAL_ROOTS.has(root)) ctx.setRoot(root - 1);
    }
    ctx.panel.classList.toggle('cb-basic', !advanced);
    qa('[data-adv]').forEach(element => { element.hidden = !advanced; });
    qa('[data-family="sus"]').forEach(element => { element.hidden = !advanced; });
    qa('[data-level]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.level === state.level)));
  }

  function render() {
    applyLevel();
    const root = ctx.getRoot();
    const mode = effectiveMode();
    const chord = chordInfo(root, state.quality);
    const frets = ctx.fretCount();
    const grips = gripsFor(root, state.quality, mode, state.group, frets);
    const index = chooseIndex(grips);
    const grip = index >= 0 ? grips[index] : null;
    state.view = { grips, index };
    if (grip) state.anchor = grip;
    state.rule = { type: 'keep' };

    const modeLabel = MODES.find(item => item.id === mode).label;
    const group = groupById(state.group);
    let description = chord.name + ' · ' + modeLabel;
    if (grip) {
      description += mode === 'triad'
        ? ' · ' + group.label + ' · ' + inversionLabel(grip.slot) + ' · ' + formatFrets(grip.strings)
        : ' · ' + grip.label + ' · ' + formatFrets(grip.strings);
    } else if (mode !== 'all') description += ' · ei otetta valitulla nauhamäärällä';
    const empty = mode !== 'all' && !grip;
    ctx.board.innerHTML = globalThis.MusicMapFretboard.renderBoard(
      root, empty ? { ...chord, base: [], add: [] } : chord, frets, {
        automatic: ctx.automatic(), grip: grip?.strings ?? null, barre: grip?.barre ?? null,
        muteFret: grip?.muteFret ?? null, label: description,
      });
    const svg = ctx.board.querySelector('svg');
    if (svg && !empty) {
      relabel(svg, chord);
      removeBridge(svg);
      scaleStrings(svg);
      if (mode === 'triad' && grip) highlightStrings(svg);
    }

    // Valinnat
    qa('[data-root]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.root) === root)));
    qa('[data-quality]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.quality === state.quality)));
    qa('[data-mode]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.mode === mode));
      if (button.dataset.mode === 'triad') {
        button.disabled = !supportsTriads(state.quality);
        button.title = button.disabled ? 'Triadit on tarkoitettu kolmisävelisille soinnuille. Nelisävelisillä soinnuilla käytä Koko ote -tilaa.' : '';
      }
    });
    qa('[data-labels]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.labels === state.labels)));
    q('#cb-groups').hidden = mode !== 'triad' || state.level !== 'advanced';
    qa('[data-group]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.group === state.group)));

    // Tiedot
    if (grip) {
      const bass = chord.notes[grip.slot];
      facts.innerHTML = `<dl>
        <div><dt>Ote</dt><dd>${grip.label} · <span class="cb-frets">${formatFrets(grip.strings)}</span></dd></div>
        <div><dt>Käännös</dt><dd>${inversionLabel(grip.slot)} · basso ${bass}</dd></div>
        <div><dt>Järjestys</dt><dd>${index + 1}/${grips.length} nauhasijainnin mukaan</dd></div>
      </dl>`;
    } else {
      facts.innerHTML = empty ? '<p class="chord-warning">Ei otetta valitulla nauhamäärällä. Lisää näytettäviä nauhoja.</p>' : '';
    }
    help.textContent = mode === 'all'
      ? 'Näytössä ovat kaikki soinnun sävelet koko otelaudalla.'
      : mode === 'full'
        ? 'Koko ote: × merkitsee soittamatta jäävää kieltä. Nuolilla ← → siirryt otteesta toiseen nauhasijainnin mukaan.'
        : 'Triadi: vain kolme vierekkäistä kieltä. ↑ ja ↓ vaihtavat kielten ryhmää, ← ja → saman ryhmän seuraavaan otteeseen.';
    if (!supportsTriads(state.quality) && state.mode === 'triad') {
      help.textContent += ' Triadit eivät ole käytössä nelisävelisille soinnuille, joten näytössä on koko ote.';
    }

    // Nuoliohjaus
    const thinner = neighbourGroup(state.group, 1), thicker = neighbourGroup(state.group, -1);
    const triad = mode === 'triad';
    setPad(pad.up, triad && thinner, thinner ? 'Ohuempien kielten ryhmään ' + thinner.label : 'Ohuimpien kielten ryhmä on jo valittu',
      triad ? '' : 'Kielten vaihto: valitse Triadit');
    setPad(pad.down, triad && thicker, thicker ? 'Paksumpien kielten ryhmään ' + thicker.label : 'Paksuimpien kielten ryhmä on jo valittu',
      triad ? '' : 'Kielten vaihto: valitse Triadit');
    setPad(pad.left, index > 0, 'Edellinen ote, lähempänä satulaa', 'Ensimmäinen ote');
    setPad(pad.right, index >= 0 && index < grips.length - 1, 'Seuraava ote, kohti talaa', 'Viimeinen ote');
    pad.count.textContent = grip ? (index + 1) + '/' + grips.length : '–';

    const names = chord.notes.map((note, i) => note + ' (' + chord.degrees[i] + ')').join(' · ');
    ctx.summary({
      title: chord.name + ' · ' + modeLabel + (mode === 'triad' ? ' · ' + group.label : ''),
      notes: 'Sointusävelet: ' + names,
    });
    ctx.afterRender(grip);
  }

  function setPad(button, enabled, label, disabledLabel) {
    button.disabled = !enabled;
    button.setAttribute('aria-label', enabled ? label : (disabledLabel || label));
    button.title = enabled ? label : (disabledLabel || label);
  }

  // --- Tapahtumat -------------------------------------------------------------------------------
  function go(rule, update) {
    if (update) update();
    state.rule = rule;
    ctx.change();
  }
  const keep = { type: 'keep' };

  ctx.panel.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button || button.disabled) return;
    const { root, quality, mode, labels, group, level } = button.dataset;
    if (level) go(keep, () => { state.level = level; });
    else if (root !== undefined) go(keep, () => ctx.setRoot(Number(root)));
    else if (quality) go({ type: 'quality' }, () => { state.quality = quality; });
    else if (mode) go(keep, () => { state.mode = mode; });
    else if (labels) go(keep, () => { state.labels = labels; });
    else if (group) go(keep, () => { state.group = group; });
  });

  function step(delta) {
    const { grips, index } = state.view;
    const next = grips[index + delta];
    if (!next) return;
    go(keep, () => { state.anchor = next; });
  }
  function changeGroup(delta) {
    const next = neighbourGroup(state.group, delta);
    if (next) go(keep, () => { state.group = next.id; });
  }
  pad.left.addEventListener('click', () => step(-1));
  pad.right.addEventListener('click', () => step(1));
  pad.up.addEventListener('click', () => changeGroup(1));
  pad.down.addEventListener('click', () => changeGroup(-1));
  // Nuolinäppäimet toimivat, kun fokus on nuoliohjauksessa.
  ctx.pad.addEventListener('keydown', event => {
    const handler = { ArrowLeft: pad.left, ArrowRight: pad.right, ArrowUp: pad.up, ArrowDown: pad.down }[event.key];
    if (!handler) return;
    event.preventDefault();
    if (!handler.disabled) handler.click();
  });

  // --- Julkinen rajapinta -----------------------------------------------------------------------
  return {
    render,
    /** Valittu perussävel muuttui muualla (esim. toisessa näkymässä): valitse lähin ote. */
    rootChanged() { state.rule = keep; },
    setActive(value) {
      active = value;
      ctx.pad.hidden = !value;
      ctx.details.hidden = !value;
    },
    isActive() { return active; },
    readParams(params) {
      const parsed = parseChordParams(params);
      state.quality = parsed.quality;
      state.mode = parsed.mode;
      state.group = parsed.group;
      state.level = params.get('taso') === 'laaja' || !BASIC_QUALITIES.has(parsed.quality) || parsed.mode === 'all' || (params.get('toonikka') ?? '').match(/[♯♭]/) ? 'advanced' : 'basic';
      state.rule = { type: 'initial', form: parsed.form, number: parsed.number };
    },
    writeParams(params) {
      if (state.level === 'advanced') params.set('taso', 'laaja'); else params.delete('taso');
      writeChordParams(params, {
        quality: state.quality, mode: effectiveMode(), group: state.group,
        grip: state.view.grips[state.view.index] ?? null,
        number: state.view.index >= 0 ? state.view.index + 1 : null,
      });
    },
    get quality() { return qualityById(state.quality); },
  };
}
