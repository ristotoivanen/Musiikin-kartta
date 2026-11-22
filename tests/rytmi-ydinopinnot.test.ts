import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  compLevel, createTransport, grooveCells, gridCell, LOOP_STEPS, positionAt, requestDrumGap, requestMode, requestTaukoMode, scheduleUntil, STEPS_PER_BAR, transitionCells,
  stepEvents, tempoFor,
// @ts-expect-error Testattu selainmoduuli palvellaan suoraan JavaScriptinä.
} from '../assets/rytmi-ydinopinnot.js';

type Event = { type: string; role: string; level?: number; harmony?: string; duration?: number; strong?: boolean; time: number; step: number };
type Switch = { time: number; step: number; mode: string };

const roles = (task: string, step: number, options = {}): string[] => stepEvents(task, step, options).map((event: Event) => event.role);
const loop = (task: string, options = {}) => Array.from({ length: LOOP_STEPS }, (_, step) => roles(task, step, options));

describe('Rytmin Ydinopinnot: tempot ja tausta', () => {
  it('käyttää v0.9:n tempoja', () => {
    expect([tempoFor('pulssi', 'rock'), tempoFor('pulssi', 'soft'), tempoFor('hiljaisuus'), tempoFor('tuntuma')])
      .toEqual([96, 108, 72, 96]);
  });

  it('rumpu- ja bassotausta soi jokaisella kahdeksasosalla kaikissa harjoituksissa', () => {
    for (const task of ['pulssi', 'hiljaisuus', 'tuntuma', 'osanvaihto']) {
      for (const step of loop(task)) expect(step.some((role: string) => ['hi-hat', 'virveli', 'bassorumpu', 'melodia'].includes(role))).toBe(true);
    }
  });

  it('harmonia vaihtuu G:stä Em:ään toisen tahdin alussa', () => {
    const chord = (step: number) => stepEvents('tuntuma', step, { mode: 'A' }).find((event: Event) => event.role === 'harmonia');
    expect(chord(0).harmony).toBe('G');
    expect(chord(STEPS_PER_BAR).harmony).toBe('Em');
  });
});

describe('01 Löydä pulssi ja ykkönen', () => {
  it('pulssivihje kuuluu vain paljastettuna, iskuilla ja ykkönen vahvempana', () => {
    expect(loop('pulssi').flat()).not.toContain('pulssivihje');
    const clicks = Array.from({ length: STEPS_PER_BAR }, (_, step) =>
      stepEvents('pulssi', step, { revealed: true }).find((event: Event) => event.role === 'pulssivihje'));
    expect(clicks.map(Boolean)).toEqual([true, false, true, false, true, false, true, false]);
    expect(clicks.filter(Boolean).map(click => click.strong)).toEqual([true, false, false, false]);
  });

  it('uusi esimerkki vaihtaa taustan mutta säilyttää pulssin', () => {
    expect(loop('pulssi', { example: 'soft' }).flat()).toContain('melodia');
    expect(loop('pulssi', { example: 'soft' }).flat()).not.toContain('bassorumpu');
    expect(loop('pulssi').flat()).toContain('bassorumpu');
  });
});


describe('01 hyväksytty rumpukatko', () => {
  it('A:ssa rummut jatkavat molemmissa tahdeissa; B:ssä rummuilla on yhden tahdin tauko mutta basso jää', () => {
    const isDrum = (role: string) => ['hi-hat', 'virveli', 'bassorumpu'].includes(role);
    const a = loop('pulssi', { drumGap: false });
    const b = loop('pulssi', { drumGap: true });
    expect(a.slice(STEPS_PER_BAR).flat().some(isDrum)).toBe(true);
    expect(b.slice(STEPS_PER_BAR).flat().some(isDrum)).toBe(false);
    for (let i = 0; i < STEPS_PER_BAR; i++) expect(b[i]).toEqual(a[i]);
    expect(b.slice(STEPS_PER_BAR).flat()).toContain('basso');
    expect(b.slice(STEPS_PER_BAR).flat()).toContain('harmonia');
    expect(gridCell('pulssi', STEPS_PER_BAR)).toEqual({ bar: 1, index: 0 });
    for (const example of ['rock', 'soft']) {
      expect(tempoFor('pulssi', example)).toBe(tempoFor('pulssi', example));
      expect(stepEvents('pulssi', 14, { drumGap: true, example }).some((event: Event) => isDrum(event.role))).toBe(false);
    }
  });
});

describe('01 rumpuversion vaihto kesken toiston', () => {
  const tempo = 96;
  const begin = 1;
  const eighth = 60 / tempo / 2;
  const drums = ['hi-hat', 'virveli', 'bassorumpu'];
  const at = (events: Event[], step: number) => events.filter(event => event.step === step);

  it('vaihtaa A:n B:hen ja takaisin vain kahden tahdin alussa ilman ajan nollaamista', () => {
    const transport = createTransport({ task: 'pulssi', tempo, begin, drumGap: false });
    const events = scheduleUntil(transport, begin + 5 * eighth);
    expect(requestDrumGap(transport, true)).toBe(true);
    events.push(...scheduleUntil(transport, begin + 28 * eighth));
    expect(transport.drumSwitches).toEqual([
      { time: begin, step: 0, drumGap: false },
      { time: begin + 16 * eighth, step: 16, drumGap: true },
    ]);
    // Keskeneräisen kierron rumpuja ei katkaista: myös toisen tahdin rummut kuuluvat.
    expect(at(events, 8).some(event => drums.includes(event.role))).toBe(true);
    expect(at(events, 16).some(event => drums.includes(event.role))).toBe(true);
    // Uuden kierron toisessa tahdissa rummut puuttuvat, mutta basso ja harmonia pysyvät.
    expect(at(events, 24).some(event => drums.includes(event.role))).toBe(false);
    expect(at(events, 24).map(event => event.role)).toContain('basso');
    expect(at(events, 24).map(event => event.role)).toContain('harmonia');
    expect(positionAt(transport, begin + 16 * eighth - 0.001).drumGap).toBe(false);
    expect(positionAt(transport, begin + 16 * eighth).drumGap).toBe(true);
    expect(positionAt(transport, begin + 16 * eighth).cell).toEqual({ bar: 0, index: 0 });

    expect(requestDrumGap(transport, false)).toBe(true);
    events.push(...scheduleUntil(transport, begin + 48 * eighth));
    expect(transport.drumSwitches.map((item: { step: number }) => item.step)).toEqual([0, 16, 32]);
    expect(at(events, 40).some(event => drums.includes(event.role))).toBe(true);
    expect(positionAt(transport, begin + 32 * eighth).drumGap).toBe(false);
    expect(transport.step).toBe(48);
    expect(transport.next).toBeCloseTo(begin + 48 * eighth);
  });

  it('nopea A → B → A peruu odottavan vaihdon ilman ajastetun toiston muutosta', () => {
    const transport = createTransport({ task: 'pulssi', tempo, begin });
    scheduleUntil(transport, begin + 3 * eighth);
    expect(requestDrumGap(transport, true)).toBe(true);
    expect(transport.pendingDrumGap).toBe(true);
    expect(requestDrumGap(transport, false)).toBe(true);
    expect(transport.pendingDrumGap).toBe(null);
    const later = scheduleUntil(transport, begin + 32 * eighth);
    expect(transport.drumSwitches).toHaveLength(1);
    expect(at(later, 24).some(event => drums.includes(event.role))).toBe(true);
    expect(requestDrumGap(transport, false)).toBe(false);
  });
});

describe('02 Hiljaisuus kuuluu rytmiin', () => {
  it('taputukset kuuluvat ensimmäisen tahdin iskuilla ja vaikenevat toisessa, tausta jatkuu', () => {
    const steps = loop('hiljaisuus');
    const claps = steps.map(step => step.includes('taputus'));
    expect(claps.slice(0, STEPS_PER_BAR)).toEqual([true, false, true, false, true, false, true, false]);
    expect(claps.slice(STEPS_PER_BAR)).toEqual(Array(STEPS_PER_BAR).fill(false));
    // Hiljaisessa tahdissa kuuluu edelleen rumpu- ja bassotausta.
    for (const step of steps.slice(STEPS_PER_BAR)) expect(step.length).toBeGreaterThan(0);
    expect(steps.slice(STEPS_PER_BAR).flat()).toContain('basso');
  });

  it('ruudukko korostaa tahdin 2 iskuja toisella rivillä', () => {
    expect(gridCell('hiljaisuus', 0)).toEqual({ bar: 0, index: 0 });
    expect(gridCell('hiljaisuus', 10)).toEqual({ bar: 1, index: 1 });
    expect(gridCell('hiljaisuus', 15)).toEqual({ bar: 1, index: 3 });
  });

  it('sivun ohje erottaa vaikenevat taputukset ja jatkuvan taustan', () => {
    const page = readFileSync(new URL('../tools/oppimiskartta/sisallot/rytmi/hiljaisuus-kuuluu-rytmiin.html', import.meta.url), 'utf8');
    expect(page).toContain('taputukset vaikenevat');
    expect(page).toContain('Musiikkitausta ja pulssi jatkuvat');
    expect(page).not.toContain('seuraavat neljä ovat hiljaisia');
    expect(page).not.toContain('github.com');
  });
});


describe('03 hyväksytty sointi / vaimennus / pois jätetty isku', () => {
  const chord = (mode: string) => Array.from({ length: LOOP_STEPS }, (_, step) =>
    stepEvents('hiljaisuus', step, { taukoMode: mode })
      .filter((event: Event) => event.role === 'tauon-sointu')
      .map((event: Event) => ({ step, duration: event.duration }))).flat();
  it('A soi nelosiskun yli, B vaimenee nelosen alussa, C jättää uuden iskun tekemättä', () => {
    const beat = 60 / tempoFor('hiljaisuus');
    expect(chord('soi')).toEqual([{ step: 8, duration: 4 * beat }]);
    expect(chord('vaimenna')).toEqual([{ step: 8, duration: 3 * beat }]);
    expect(chord('pois')).toEqual([{ step: 8, duration: 2 * beat }, { step: 12, duration: 2 * beat }]);
    for (const mode of ['soi', 'vaimenna', 'pois']) {
      expect(stepEvents('hiljaisuus', 14, { taukoMode: mode })
        .some((event: Event) => event.role === 'tauon-sointu')).toBe(false);
    }
  });
});

describe('03 taukomallin A/B/C vaihto kesken soiton', () => {
  const tempo = 72;
  const begin = 1;
  const eighth = 60 / tempo / 2;
  const heldAt = (events: Event[], step: number) => events.filter(event =>
    event.step === step && event.role === 'tauon-sointu');

  it('säilyttää jo alkaneen Em:n soinnin ja vaihtaa vasta seuraavan kahden tahdin kierroksen alussa', () => {
    const transport = createTransport({ task: 'hiljaisuus', tempo, begin, taukoMode: 'soi' });
    const events = scheduleUntil(transport, begin + 11 * eighth);
    expect(heldAt(events, 8)[0].duration).toBeCloseTo(4 * 60 / tempo);
    expect(requestTaukoMode(transport, 'vaimenna')).toBe(true);
    events.push(...scheduleUntil(transport, begin + 29 * eighth));
    expect(transport.taukoSwitches.map((item: { step: number }) => item.step)).toEqual([0, 16]);
    expect(heldAt(events, 8)[0].duration).toBeCloseTo(4 * 60 / tempo);
    expect(heldAt(events, 24)[0].duration).toBeCloseTo(3 * 60 / tempo);
    expect(positionAt(transport, begin + 16 * eighth - 0.001).taukoMode).toBe('soi');
    expect(positionAt(transport, begin + 16 * eighth).taukoMode).toBe('vaimenna');
    expect(positionAt(transport, begin + 16 * eighth).cell).toEqual({ bar: 0, index: 0 });
    expect(transport.next).toBeCloseTo(begin + 29 * eighth);

    expect(requestTaukoMode(transport, 'pois')).toBe(true);
    events.push(...scheduleUntil(transport, begin + 49 * eighth));
    expect(transport.taukoSwitches.map((item: { step: number }) => item.step)).toEqual([0, 16, 32]);
    expect(heldAt(events, 40)[0].duration).toBeCloseTo(2 * 60 / tempo);
    expect(heldAt(events, 44)[0].duration).toBeCloseTo(2 * 60 / tempo);
    expect(positionAt(transport, begin + 32 * eighth).taukoMode).toBe('pois');
  });

  it('nopea A → B → C → A peruu odottavan vaihdon kokonaan', () => {
    const transport = createTransport({ task: 'hiljaisuus', tempo, begin, taukoMode: 'soi' });
    scheduleUntil(transport, begin + 3 * eighth);
    expect(requestTaukoMode(transport, 'vaimenna')).toBe(true);
    expect(requestTaukoMode(transport, 'pois')).toBe(true);
    expect(requestTaukoMode(transport, 'soi')).toBe(true);
    expect(transport.pendingTaukoMode).toBe(null);
    expect(requestTaukoMode(transport, 'soi')).toBe(false);
    const events = scheduleUntil(transport, begin + 32 * eighth);
    expect(transport.taukoSwitches).toHaveLength(1);
    expect(heldAt(events, 24)[0].duration).toBeCloseTo(4 * 60 / tempo);
  });
});

describe('03 Sama musiikki, eri tuntuma: ruudukko ja ääni vastaavat toisiaan', () => {
  for (const mode of ['A', 'B', 'C']) {
    it(`versio ${mode}: soitetut ruudut = komppiäänet ja korostus = voimakkain ääni`, () => {
      const cells = grooveCells(mode);
      const comp = Array.from({ length: STEPS_PER_BAR }, (_, step) =>
        stepEvents('tuntuma', step, { mode }).find((event: Event) => event.role === 'komppi'));
      expect(comp.map(Boolean)).toEqual(cells.map((cell: { played: boolean }) => cell.played));
      expect(cells.filter((cell: { played: boolean }) => cell.played)).toHaveLength(4);
      const loudest = Math.max(...comp.filter(Boolean).map(event => event.level));
      cells.forEach((cell: { emphasis: boolean }, step: number) => {
        if (cell.emphasis) expect(comp[step].level).toBe(loudest);
      });
    });
  }

  it('A ja B soittavat samoissa kohdissa, C siirtää kaksi ääntä iskujen väliin', () => {
    const played = (mode: string) => grooveCells(mode).map((cell: { played: boolean }) => cell.played);
    expect(played('A')).toEqual([true, false, true, false, true, false, true, false]);
    expect(played('B')).toEqual(played('A'));
    expect(played('C')).toEqual([true, false, false, true, true, false, false, true]);
    expect(grooveCells('B').map((cell: { action: string }) => cell.action))
      .toEqual(['Soita', 'Hiljaa', 'Korosta', 'Hiljaa', 'Soita', 'Hiljaa', 'Korosta', 'Hiljaa']);
    expect(compLevel('A', 0)).toBeGreaterThan(compLevel('A', 2));
    expect(compLevel('B', 2)).toBeGreaterThan(compLevel('B', 0));
  });
});


describe('04 Valmistaudu seuraavaan osaan: D–G ja aktiivinen vaimennus', () => {
  const chords = (mode: string) =>
    Array.from({ length: LOOP_STEPS }, (_, step) =>
      stepEvents('osanvaihto', step, { mode }).find((event: Event) => event.role === 'osan-sointu'))
      .filter(Boolean);

  it('D ja G alkavat aina samojen tahtien ykkösillä', () => {
    expect(chords('A').map((event: Event) => event.harmony)).toEqual(['D', 'G']);
    expect(chords('B').map((event: Event) => event.harmony)).toEqual(['D', 'G']);
    expect(gridCell('osanvaihto', 0)).toEqual({ bar: 0, index: 0 });
    expect(gridCell('osanvaihto', 14)).toEqual({ bar: 1, index: 3 });
  });

  it('B vaimentaa D:n nelosiskun alussa, A antaa soida nelosen yli; tausta ja G eivät muutu', () => {
    const [aD, aG] = chords('A');
    const [bD, bG] = chords('B');
    const beat = 60 / tempoFor('osanvaihto');
    expect(aD.duration).toBeCloseTo(4 * beat);
    expect(bD.duration).toBeCloseTo(3 * beat);
    expect(aG.duration).toBeCloseTo(4 * beat);
    expect(bG.duration).toBe(aG.duration);
    for (let step = 0; step < LOOP_STEPS; step++) {
      const sounds = (mode: string) => stepEvents('osanvaihto', step, { mode })
        .filter((event: Event) => event.role !== 'osan-sointu');
      expect(sounds('A')).toEqual(sounds('B'));
    }
    expect(transitionCells('A')).toEqual(['Soita D', 'Anna soida', 'Anna soida', 'Anna soida']);
    expect(transitionCells('B')).toEqual(['Soita D', 'Anna soida', 'Anna soida', 'Vaimenna']);
  });

  it('käyttäjän B-vaihto tapahtuu seuraavan tahdin rajalla, ei valmiiksi ajastettuun D-ääneen', () => {
    const tempo = tempoFor('osanvaihto');
    const transport = createTransport({ task: 'osanvaihto', tempo, begin: 1, mode: 'A' });
    const oneEighth = 60 / tempo / 2;
    const prior = scheduleUntil(transport, 1 + 5 * oneEighth);
    expect(prior.find((event: Event) => event.role === 'osan-sointu')?.duration)
      .toBe(4 * 60 / tempo);
    requestMode(transport, 'B');
    const after = scheduleUntil(transport, 1 + 24 * oneEighth);
    expect(transport.switches[1].step).toBe(16);
    expect(after.find((event: Event) => event.role === 'osan-sointu' && event.step === 8)?.harmony).toBe('G');
    expect(after.find((event: Event) => event.role === 'osan-sointu' && event.step === 16)?.duration)
      .toBe(3 * 60 / tempo);
    expect(positionAt(transport, transport.switches[1].time - .001).mode).toBe('A');
    expect(positionAt(transport, transport.switches[1].time).mode).toBe('B');
  });
});

describe('Versiovaihto tahdin rajalla', () => {
  const tempo = 96;
  const step = 60 / tempo / 2;
  const begin = 1;
  const barStarts = (transport: { switches: Switch[] }) => transport.switches.map(change => change.step % STEPS_PER_BAR);

  function compAt(events: Event[], at: number) {
    return events.find(event => event.step === at && event.role === 'komppi');
  }

  it('kesken tahdin valittu versio alkaa vasta seuraavan tahdin ensimmäiseltä kahdeksasosalta', () => {
    for (let clickStep = 0; clickStep < 3 * STEPS_PER_BAR; clickStep++) {
      for (const fraction of [0.01, 0.5, 0.99]) {
        const transport = createTransport({ task: 'tuntuma', tempo, begin, mode: 'A' });
        const now = begin + (clickStep + fraction) * step;
        const events: Event[] = scheduleUntil(transport, now + 0.16);
        requestMode(transport, 'B');
        events.push(...scheduleUntil(transport, now + 4 * STEPS_PER_BAR * step));
        const change = transport.switches[1];
        expect(change.mode).toBe('B');
        expect(change.step % STEPS_PER_BAR).toBe(0);
        // Vaihto ei koskaan tapahdu jo ajastettuun tai menneeseen kohtaan.
        expect(change.time).toBeGreaterThanOrEqual(now);
        // Ääni: ennen vaihtoa A:n tasaiset tasot, vaihdon jälkeen B:n painotus iskulla 2.
        expect(compAt(events, change.step + 2)?.level).toBe(compLevel('B', 2));
        if (change.step >= STEPS_PER_BAR) expect(compAt(events, change.step - 6)?.level).toBe(compLevel('A', 2));
        // Ruudukko: soiva versio vaihtuu täsmälleen samalla hetkellä kuin ääni, ei aiemmin.
        expect(positionAt(transport, change.time - 0.001).mode).toBe('A');
        expect(positionAt(transport, change.time).mode).toBe('B');
        expect(positionAt(transport, change.time).cell).toEqual({ bar: 0, index: 0 });
      }
    }
  });

  it('nopeat peräkkäiset valinnat: vain viimeinen voimaan, ja paluu soivaan perii odottavan', () => {
    const transport = createTransport({ task: 'tuntuma', tempo, begin, mode: 'A' });
    scheduleUntil(transport, begin + 3 * step);
    expect(requestMode(transport, 'B')).toBe(true);
    expect(requestMode(transport, 'C')).toBe(true);
    scheduleUntil(transport, begin + 9 * step);
    expect(transport.switches.map((change: Switch) => change.mode)).toEqual(['A', 'C']);
    expect(barStarts(transport)).toEqual([0, 0]);

    const back = createTransport({ task: 'tuntuma', tempo, begin, mode: 'A' });
    scheduleUntil(back, begin + 3 * step);
    requestMode(back, 'B');
    expect(back.pending).toBe('B');
    requestMode(back, 'A');
    expect(back.pending).toBe(null);
    scheduleUntil(back, begin + 20 * step);
    expect(back.switches).toHaveLength(1);
  });

  it('ajastus etenee tasaisin kahdeksasosin ilman kumuloituvaa virhettä', () => {
    const transport = createTransport({ task: 'hiljaisuus', tempo: 72, begin, mode: 'A' });
    const claps = scheduleUntil(transport, begin + 600).filter((event: Event) => event.role === 'taputus');
    const interval = 60 / 72;
    claps.forEach((clap: Event) => {
      const expected = begin + clap.step * interval / 2;
      expect(Math.abs(clap.time - expected)).toBeLessThan(1e-9);
      expect(clap.step % LOOP_STEPS).toBeLessThan(STEPS_PER_BAR);
    });
    // 10 minuuttia, 72 iskua minuutissa: 720 iskua, joista puolet taputustahdissa.
    expect(claps.length).toBe(360);
  });

  it('ennen ensimmäistä iskua ruudukossa ei ole korostusta', () => {
    const transport = createTransport({ task: 'pulssi', tempo, begin, mode: 'A' });
    expect(positionAt(transport, begin - 0.01)).toBe(null);
    expect(positionAt(transport, begin).cell).toEqual({ bar: 0, index: 0 });
    expect(positionAt(transport, begin + 7.5 * step).cell).toEqual({ bar: 0, index: 3 });
  });
});

describe('Rytmin aihesivu ja muodostetut sivut', () => {
  const read = (path: string) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
  const lessons = ['loyda-pulssi-ja-ykkonen', 'sama-musiikki-eri-tuntuma', 'hiljaisuus-kuuluu-rytmiin', 'valmistaudu-seuraavaan-osaan'];
  const legacy = ['pulssi-ja-komppi', 'kuuntele-pulssi', 'alas-ylos-yhdella-soinnulla', 'kaksi-sointua-yhdessa-tahdissa'];

  it('Ydinopinnot on ensimmäinen avattava kokonaisuus ja aiemmat neljä sisältöä sen jälkeen, molemmat suljettuina', () => {
    const topic = read('oppi/rytmi/index.html');
    const units = [...topic.matchAll(/<details class="(study-unit[^"]*)" id="([^"]+)"( open)?>/g)].map(([, kind, id, open]) => [id, kind, Boolean(open)]);
    // Omistajan päätös 20.11.2026: myös Ydinopinnot on oletuksena suljettu.
    expect(units).toEqual([['ydinopinnot', 'study-unit', false], ['aiemmat', 'study-unit study-unit--legacy', false]]);
    expect([...topic.matchAll(/<summary class="study-choice study-choice--unit" id="valinta-([^"]+)"/g)].map(([, slug]) => slug))
      .toEqual(lessons);
    for (const slug of lessons) expect(topic).toContain(`href="${slug}.html" data-return-topic="valinta-${slug}"`);
    expect(topic.match(/class="study-inline-close" hidden>↑ Sulje oppitunti<\/button>/g)).toHaveLength(4);
    // Vanhat kortit: samat ankkurit, osoitteet ja suoritustunnisteet kuin betassa.
    expect([...topic.matchAll(/<a class="study-choice" id="valinta-([^"]+)" href="([^"]+)\.html"/g)].map(([, id]) => id)).toEqual(legacy);
    expect([...topic.matchAll(/data-study-status="([^"]+)"/g)].map(([, id]) => id)).toEqual([
      'pulssi-ja-komppi', 'harjoitus:kuuntele-pulssi', 'harjoitus:alas-ylos-yhdella-soinnulla', 'harjoitus:kaksi-sointua-yhdessa-tahdissa',
    ]);
    expect(topic).not.toContain('(valinnainen)');
  });

  it('uusilla sivuilla on omat tunnisteet, kokeiltu-sanamuoto ja paluu aihesivulle', () => {
    lessons.forEach((slug) => {
      const html = read(`oppi/rytmi/${slug}.html`);
      expect(html).toContain(`data-study-item="oppitunti:${slug}" data-study-kind="oppitunti" data-study-mark="kokeiltu"`);
      expect(html).toContain('class="frame study-page study-page--focus"');
      expect(html).toContain(`href="index.html#valinta-${slug}"`);
      expect(html).toContain('class="study-focus-title"');
      expect(html).toContain('>Merkitse kokeilluksi</button>');
      expect(html).toContain('assets/rytmi-ydinopinnot.js?v=');
      expect(html).not.toContain('(valinnainen)');
    });
    const last = read('oppi/rytmi/valmistaudu-seuraavaan-osaan.html');
    expect(last).toContain('href="index.html#valinta-valmistaudu-seuraavaan-osaan"');
    expect(last).not.toContain('pulssi-ja-komppi.html');
    // Etusivun Rytmi-kortti ja aiemman sarjan laskuri sisältävät vain aiemmat neljä.
    const card = read('index.html').match(/href="oppi\/rytmi\/index.html" data-study-items="([^"]+)"/)![1].split(' ');
    expect(card).toHaveLength(4);
  });

  it('Ydinopinnot käyttää yhteistä Kokeiltu-mekanismia samoilla oppitunti-tunnisteilla; aiemmat laskevat oman tekstinsä', () => {
    const topic = read('oppi/rytmi/index.html');
    // Ryhmän "attempts": Kokeilematta / ✓ Kokeiltu ja x/4 kokeiltu (assets/edistyminen.js). Tunnisteet eivät muutu.
    expect([...topic.matchAll(/data-study-attempt-status="([^"]+)"/g)].map(([, id]) => id)).toEqual(lessons.map(slug => 'oppitunti:' + slug));
    expect(topic).not.toContain('data-study-intro-status=');
    expect(topic).toContain('data-unit-progress data-unit-attempts hidden');
    const text = 'data-progress-count="aiemmista sisällöistä tehty" data-progress-done="✓ Aiemmat sisällöt tehty"';
    expect(topic).toContain(`data-study-total ${text} hidden`);
    expect(read('index.html')).toContain(`<span class="topic-status" ${text} hidden>`);
    expect(read('oppi/rytmi/kaksi-sointua-yhdessa-tahdissa.html').match(new RegExp(`data-boundary-progress[^>]*${text}`, 'g'))).toHaveLength(2);
  });

  it('ⓘ-lisävinkki on kohtien 1 ja 2 jälkeen; harjoituksessa 03 kohdat 3 ja 4 tässä järjestyksessä', () => {
    for (const slug of lessons) {
      const html = read(`oppi/rytmi/${slug}.html`);
      const [tryIt, info, learned] = ['2 · Kokeile itse', 'class="study-knoppi rytmi-lisa"', 'Mitä opit?'].map(text => html.indexOf(text));
      expect(html.indexOf('data-rytmi-toisto')).toBeLessThan(tryIt);
      expect(html.lastIndexOf('rytmi-ruudukko')).toBeLessThan(tryIt);
      expect(tryIt).toBeLessThan(info);
      expect(info).toBeLessThan(learned);
      expect(html.match(/<details class="study-knoppi/g)).toHaveLength(1);
    }
    const third = read('oppi/rytmi/sama-musiikki-eri-tuntuma.html');
    expect(third.indexOf('3 · Kokeile myös äänten eri paikkoja')).toBeLessThan(third.indexOf('4 · Kokeile myös kitaralla'));
  });
});
