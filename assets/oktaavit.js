// Oktaaviharjoitus otelautaharjoittelijaan. Lukija kuulee ensin, että sama sävel soi kahdelta
// kieleltä samalla korkeudella ja kolmannelta oktaavia ylempää, ja etsii sitten loput saman
// sävelen paikat napauttamalla otelautaa. Otelauta piirretään samalla renderBoard-funktiolla
// kuin muut näkymät (assets/otelauta.js), ja äänet tulevat harjoitustaustojen soittimista
// (assets/harjoitustausta.js).
const octaveTrainer = (() => {
  const { CHROM, OPEN_PITCHES, renderBoard } = fretboard;
  const FRETS = 15;
  const E_STRING = 5, A_STRING = 4, D_STRING = 3; // OPEN_PITCHES kulkee ohuimmasta kielestä paksuimpaan.
  const STRING_GENITIVE = ['ohuen e-kielen', 'B-kielen', 'G-kielen', 'D-kielen', 'A-kielen', 'paksun E-kielen'];
  const OPEN_STRING = ['vapaa ohut e-kieli', 'vapaa B-kieli', 'vapaa G-kieli', 'vapaa D-kieli', 'vapaa A-kieli', 'vapaa paksu E-kieli'];
  const OPEN_ADESSIVE = ['vapaalla ohuella e-kielellä', 'vapaalla B-kielellä', 'vapaalla G-kielellä', 'vapaalla D-kielellä',
    'vapaalla A-kielellä', 'vapaalla paksulla E-kielellä'];
  const KINDS = ['same', 'up', 'up2', 'up3'];
  const HEIGHTS = ['sama', 'oktaavia ylempi', 'kaksi oktaavia ylempi', 'kolme oktaavia ylempi'];

  const el = id => document.getElementById(id);
  const cap = text => text[0].toUpperCase() + text.slice(1);
  const place = ({ string, fret }) => fret ? STRING_GENITIVE[string] + ' ' + fret + '. nauha' : OPEN_STRING[string];
  const placeAt = ({ string, fret }) => fret ? STRING_GENITIVE[string] + ' ' + fret + '. nauhalla' : OPEN_ADESSIVE[string];
  const key = ({ string, fret }) => string + ':' + fret;
  const midiOf = ({ string, fret }) => OPEN_PITCHES[string] + fret;

  let active = false;
  let rootPC = null;
  let base, given, hidden, found, miss;
  let context = null, playing = null;
  const buffers = new Map();

  async function play(midis) {
    if (typeof backingTrack === 'undefined') return;
    context ??= new AudioContext();
    if (context.state === 'suspended') await context.resume();
    const id = midis.join(',');
    if (!buffers.has(id)) {
      const events = midis.map((midi, i) => ({ time: i * .8, midi, length: 1.5, voice: 'clean', velocity: .9, pan: 0 }));
      buffers.set(id, await backingTrack.renderScore({ events, duration: (midis.length - 1) * .8 + 2.6, room: 1.4, reverb: .12 }));
    }
    playing?.stop();
    playing = context.createBufferSource();
    playing.buffer = buffers.get(id);
    playing.connect(context.destination);
    playing.start();
  }

  // Annetut paikat: sävel paksulta E-kieleltä, sama sävelkorkeus A-kieleltä, jos se on olemassa,
  // ja oktaavia ylempi sävel D-kieleltä kaksi nauhaa ylempää. Muut paikat lukija etsii itse.
  function start(pc) {
    rootPC = pc;
    const fret = (pc - OPEN_PITCHES[E_STRING] % 12 + 12) % 12;
    base = OPEN_PITCHES[E_STRING] + fret;
    given = [{ string: E_STRING, fret }];
    if (fret >= 5) given.push({ string: A_STRING, fret: fret - 5 });
    given.push({ string: D_STRING, fret: fret + 2 });
    const known = new Set(given.map(key));
    hidden = [];
    OPEN_PITCHES.forEach((open, string) => {
      for (let f = 0; f <= FRETS; f++) {
        if ((open + f) % 12 === pc && !known.has(string + ':' + f)) hidden.push({ string, fret: f });
      }
    });
    found = new Set();
    miss = null;
  }

  const octave = position => Math.round((midiOf(position) - base) / 12);

  function listenButton(text, midis) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = '▶ ' + text;
    button.addEventListener('click', () => play(midis));
    return button;
  }

  function draw(feedback = '', state = '') {
    const name = CHROM[rootPC];
    const low = given[0];
    const high = given.at(-1);
    el('octave-intro').textContent = given.length === 3
      ? cap(place(low)) + ' ja ' + place(given[1]) + ' soivat samalla korkeudella. ' + cap(placeAt(high)) + ' soi ' + name +
        ' oktaavia ylempää. Kuuntele ne ensin.'
      : cap(placeAt(low)) + ' soi ' + name + ', ja ' + placeAt(high) + ' soi ' + name + ' oktaavia ylempää. Kuuntele ne ensin.';
    el('octave-listen').replaceChildren(
      ...given.map(position => listenButton(cap(place(position)), [midiOf(position)])),
      listenButton('Kaikki peräkkäin', given.map(midiOf))
    );
    el('octave-task').textContent = found.size === hidden.length
      ? 'Löysit kaikki ' + hidden.length + ' piilossa ollutta paikkaa.'
      : 'Etsi nyt loput paikat, joissa soi ' + name + '. Napauta otelautaa: kuulet sävelen heti, ja oikea paikka jää näkyviin. Löydetty ' +
        found.size + '/' + hidden.length + '.';
    const status = el('octave-feedback');
    status.textContent = feedback;
    status.className = 'octave-feedback' + (state ? ' is-' + state : '');

    const notes = [...given, ...hidden.filter(position => found.has(key(position)))]
      .map(position => ({ ...position, label: name, kind: KINDS[octave(position)] ?? 'up3' }));
    if (miss) notes.push({ ...miss, label: CHROM[midiOf(miss) % 12], kind: 'miss' });
    el('board').innerHTML = renderBoard(rootPC, { name: 'oktaavit', base: [], add: [] }, FRETS, {
      notes, targets: true,
      label: 'Oktaaviharjoitus, etsittävä sävel ' + name + '. Näkyvissä ' + (given.length + found.size) + ' paikkaa'
    });
  }

  function choose(target, viaKeyboard) {
    const position = { string: Number(target.dataset.string), fret: Number(target.dataset.fret) };
    const name = CHROM[rootPC];
    play([midiOf(position)]);
    let feedback, state;
    if (midiOf(position) % 12 !== rootPC) {
      miss = position;
      feedback = cap(placeAt(position)) + ' soi ' + CHROM[midiOf(position) % 12] + '. Vertaa sitä annettuihin säveliin ja kokeile uudelleen.';
      state = 'wrong';
    } else {
      miss = null;
      const isNew = hidden.some(other => key(other) === key(position)) && !found.has(key(position));
      if (isNew) found.add(key(position));
      const height = octave(position);
      feedback = (isNew ? 'Oikein. ' : '') + cap(placeAt(position)) + ' soi ' + HEIGHTS[height] + ' ' + name +
        (height ? '.' : ' kuin paksulla E-kielellä.');
      state = 'correct';
      if (isNew && found.size === hidden.length) {
        feedback += ' Kaikki paikat on löydetty. Kaksi muotoa toistuu: kaksi kieltä ohuemmalle ja kaksi nauhaa ylemmäs sekä ' +
          'kolme kieltä ohuemmalle ja kolme nauhaa alemmas. Kun muoto ylittää G- ja B-kielen välin, se siirtyy yhden nauhan ylemmäs. ' +
          'Valitse seuraavaksi toinen sävel.';
      }
    }
    draw(feedback, state);
    if (viaKeyboard) {
      el('board').querySelector('.fret-target[data-string="' + position.string + '"][data-fret="' + position.fret + '"]')?.focus();
    }
  }

  el('board').addEventListener('click', event => {
    const target = event.target.closest('.fret-target');
    if (active && target) choose(target, false);
  });
  el('board').addEventListener('keydown', event => {
    const target = event.target.closest('.fret-target');
    if (!active || !target || (event.key !== 'Enter' && event.key !== ' ')) return;
    event.preventDefault();
    choose(target, true);
  });
  el('octave-reset').addEventListener('click', () => {
    start(rootPC);
    draw();
  });

  return {
    show(pc) {
      active = true;
      if (pc !== rootPC) start(pc);
      draw();
    },
    hide() {
      active = false;
      playing?.stop();
      playing = null;
    }
  };
})();
