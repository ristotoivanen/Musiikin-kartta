import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { gunzipSync } from 'node:zlib';
import { afterAll, describe, expect, it } from 'vitest';

/**
 * Issue #9, PR #185:n katselmointi: D2:n simulaattorimittausten analyysit (scripts/qa/issue9-d2) eivät saa ilmoittaa
 * onnistumista, kun mittausaineisto puuttuu, on rikki tai siinä on liian vähän näytteitä. Positiiviset tapaukset
 * käyttävät oikeita 24.11.2026 simulaattoriajojen raportteja (tests/fixtures/issue9-d2, gzip).
 * Poistumiskoodit: 1 = tulos rikkoo määrittelyn, 2 = syöte puuttuu tai on rikki, 3 = liian vähän mittauksia.
 */
type Event = Record<string, unknown> & { event: string; ms?: number };
type Report = { events: Event[]; d1?: { events?: Record<string, unknown>[] } | null; d1Log?: Record<string, unknown>[] };

const ROOT = join(__dirname, '..');
const TOOLS = join(ROOT, 'scripts/qa/issue9-d2');
const FIXTURES = join(__dirname, 'fixtures/issue9-d2');
const work = mkdtempSync(join(tmpdir(), 'issue9-d2-analyysi-'));
afterAll(() => rmSync(work, { recursive: true, force: true }));

const fixtureText = (name: string) => gunzipSync(readFileSync(join(FIXTURES, `${name}.gz`))).toString('utf8');
const fixture = (name: string) => JSON.parse(fixtureText(name)) as Report;
let counter = 0;
function file(content: string, name = `raportti-${++counter}.json`, dir = work) {
  mkdirSync(dir, { recursive: true });
  const path = join(dir, name);
  writeFileSync(path, content);
  return path;
}
const reportFile = (report: Report, name?: string, dir?: string) => file(JSON.stringify(report), name, dir);
function analysis(script: string, ...args: string[]) {
  const result = spawnSync(process.execPath, [join(TOOLS, 'analyysi', script), ...args], { encoding: 'utf8' });
  return { code: result.status, out: result.stdout, err: result.stderr };
}
function summary(...args: string[]) {
  const result = spawnSync('sh', [join(TOOLS, 'yhteenveto.sh'), ...args], { encoding: 'utf8' });
  return { code: result.status, out: result.stdout, err: result.stderr };
}
const withoutEvents = (report: Report, drop: (e: Event) => boolean): Report => ({ ...report, events: report.events.filter(e => !drop(e)) });
const isRender = (e: Event) => e.event === 'render';

const REPORT_SCRIPTS = ['d1-analyysi.mjs', 'naytto-tarkistus.mjs', 'lataus-yhteenveto.mjs', 'loopi-analyysi.mjs', 'tarkistus-analyysi.mjs'];

describe('Issue #9 D2-mittausanalyysit: oikeat raportit', () => {
  it('d1-ajon ajoitus, sointunäyttö ja lataus analysoituvat (poistumiskoodi 0)', () => {
    const path = file(fixtureText('d1-loppu.json'));
    const d1 = analysis('d1-analyysi.mjs', path);
    expect(d1.code).toBe(0);
    expect(d1.out).toMatch(/Kaikki: aikajana .* \(n 249\), raitojen ero .* \(n 52\), jatkuvuus .* \(n 5\), näyttö − ääni .* \(n 34\)/);
    expect(analysis('naytto-tarkistus.mjs', path)).toMatchObject({ code: 0, out: expect.stringMatching(/A -10…\+33 ms \(n 34\)/) });
    expect(analysis('lataus-yhteenveto.mjs', path, 'd1')).toMatchObject({ code: 0, out: expect.stringMatching(/lataus valmis 33\.6 s/) });
  });

  it('palapurku, loopin sauma, ensilataus ja muisti analysoituvat (poistumiskoodi 0)', () => {
    expect(analysis('tarkistus-analyysi.mjs', file(fixtureText('tarkistus-loppu.json')))).toMatchObject({ code: 0, out: expect.stringMatching(/BITTITARKKA/) });
    expect(analysis('loopi-analyysi.mjs', file(fixtureText('loopiloppu-loppu.json')))).toMatchObject({ code: 0, out: expect.stringMatching(/loppukehys = 0/) });
    const dir = join(work, 'ensi-ok');
    file(fixtureText('en-e1-loppu.json'), 'en-e1-loppu.json', dir);
    expect(analysis('ensi-analyysi.mjs', dir, 'e')).toMatchObject({ code: 0, out: expect.stringMatching(/kokoLataus: n 1/) });
    const d2 = analysis('d2-analyysi.mjs', file(fixtureText('d2vaihdot-loppu.json')), file(fixtureText('d2vaihdot-muisti.jsonl'), 'muisti.jsonl'),
      file(fixtureText('d2vaihdot-pyynnot.json')));
    expect(d2.code).toBe(0);
    expect(d2.out).toMatch(/WebContent: huippu 171 Mt/);
  });

  it('yhteenveto: d1-raportti mukaan, muut skenaariot ohitetaan ja kerrotaan, poistumiskoodi 0', () => {
    const dir = join(work, 'yhteenveto-ok');
    file(fixtureText('d1-loppu.json'), 'sv-a1-loppu.json', dir);
    file(fixtureText('tarkistus-loppu.json'), 'ta-t1-loppu.json', dir);
    const result = summary(dir);
    expect(result.code).toBe(0);
    expect(result.out).toMatch(/sv-a1 +kuorma \? +aikajana/);
    expect(result.out).toMatch(/näyttö: A -10…\+33 ms/);
    expect(result.out).toMatch(/ta-t1 +OHITETTU: skenaario tarkistus/);
  });
});

describe('Issue #9 D2-mittausanalyysit: puuttuva tai rikkinäinen aineisto → epäonnistunut poistumiskoodi', () => {
  it.each(REPORT_SCRIPTS)('%s: puuttuva tiedosto, ei-JSON, events puuttuu ja skenaariovirhe → 2', script => {
    expect(analysis(script).code).toBe(2);
    expect(analysis(script, join(work, 'ei-ole.json')).code).toBe(2);
    expect(analysis(script, file('{"events": [')).code).toBe(2);
    expect(analysis(script, file('{"current": {}}')).code).toBe(2);
    const failed = fixture('d1-loppu.json');
    failed.events.push({ event: 'skenaario-virhe', message: 'TypeError: x' });
    const result = analysis(script, reportFile(failed));
    expect(result.code).toBe(2);
    expect(result.err).toMatch(/skenaario päättyi virheeseen/);
  });

  it('d1: ei operaatioita (skenaario ei käynnistynyt) → 3', () => {
    const report = withoutEvents(fixture('d1-loppu.json'), e => e.event === 'op' || e.event === 'skenaario-alku');
    expect(analysis('d1-analyysi.mjs', reportFile(report)).code).toBe(3);
    expect(analysis('lataus-yhteenveto.mjs', reportFile(report), 'd1').code).toBe(3);
  });

  it('d1: nollanäytteinen raportti (ei renderöityjä mittauksia) → d1-analyysi ja sointunäyttö 3', () => {
    const path = reportFile(withoutEvents(fixture('d1-loppu.json'), isRender));
    const d1 = analysis('d1-analyysi.mjs', path);
    expect(d1.code).toBe(3);
    expect(d1.err).toMatch(/aikajana n 0 < 124, raidat n 0 < 23, jatkuvuus n 0 < 3, naytto n 0 < 17/);
    expect(analysis('naytto-tarkistus.mjs', path)).toMatchObject({ code: 3, err: expect.stringMatching(/sointunäytön mittauksia 0 < 17/) });
  });

  it('d1: liian vähän näytteitä (joka kolmas renderöinti jäljellä) → 3', () => {
    const report = fixture('d1-loppu.json');
    let i = 0;
    const thinned = withoutEvents(report, e => isRender(e) && i++ % 3 !== 0);
    expect(analysis('d1-analyysi.mjs', reportFile(thinned)).code).toBe(3);
  });

  it('sointunäyttö: ei näyttötapahtumia → 3; muu skenaario ilman ainuttakaan mittausta → 3', () => {
    expect(analysis('naytto-tarkistus.mjs', reportFile(withoutEvents(fixture('d1-loppu.json'), e => e.event === 'naytto'))).code).toBe(3);
    expect(analysis('naytto-tarkistus.mjs', file(fixtureText('tarkistus-loppu.json'))).code).toBe(3);
  });

  it('lataus: lataus ei valmistunut → 3', () => {
    const report = fixture('d1-loppu.json');
    const strip = (list?: Record<string, unknown>[]) => list?.filter(e => e.kind !== 'ladattu');
    const unfinished = { ...report, d1Log: strip(report.d1Log), d1: report.d1 ? { ...report.d1, events: strip(report.d1.events) } : report.d1 };
    expect(analysis('lataus-yhteenveto.mjs', reportFile(unfinished), 'd1').code).toBe(3);
  });

  it('palapurku: ero → 1, kohtia vajaa → 3, tarkistus puuttuu → 3', () => {
    const changed = fixture('tarkistus-loppu.json');
    const check = changed.events.find(e => e.event === 'tarkistus') as Event & { out: { max: number }[] };
    check.out[5].max = 1;
    expect(analysis('tarkistus-analyysi.mjs', reportFile(changed)).code).toBe(1);
    check.out.pop();
    expect(analysis('tarkistus-analyysi.mjs', reportFile(changed)).code).toBe(3);
    expect(analysis('tarkistus-analyysi.mjs', reportFile(withoutEvents(fixture('tarkistus-loppu.json'), e => e.event === 'tarkistus'))).code).toBe(3);
  });

  it('loop: sauma ≠ 0 kehystä → 1, ei loopin kytkentöjä → 3', () => {
    const report = fixture('loopiloppu-loppu.json');
    const firstOn = report.events.find(e => e.event === 'op' && e.kind === 'loop-paalle')!;
    const shift = (list?: Record<string, unknown>[]) => list?.map(e =>
      e.kind === 'pala-ajastettu' && e.offset === 0 && (e.ms as number) >= (firstOn.ms as number) ? { ...e, when: (e.when as number) + 0.01 } : e);
    const shifted = { ...report, d1Log: shift(report.d1Log), d1: report.d1 ? { ...report.d1, events: shift(report.d1.events) } : report.d1 };
    expect(analysis('loopi-analyysi.mjs', reportFile(shifted))).toMatchObject({ code: 1, err: expect.stringMatching(/sauma 480 kehystä/) });
    expect(analysis('loopi-analyysi.mjs', file(fixtureText('d1-loppu.json'))).code).toBe(3);
  });

  it('ensilataus: kansio puuttuu → 2, ei ajoja → 3, ajosta puuttuu soitto → 3', () => {
    expect(analysis('ensi-analyysi.mjs', join(work, 'ei-kansiota'), 'e').code).toBe(2);
    const empty = join(work, 'ensi-tyhja'); mkdirSync(empty, { recursive: true });
    expect(analysis('ensi-analyysi.mjs', empty, 'e').code).toBe(3);
    const dir = join(work, 'ensi-ei-soittoa');
    const report = fixture('en-e1-loppu.json');
    const strip = (list?: Record<string, unknown>[]) => list?.filter(e => e.kind !== 'soitto');
    reportFile({ ...report, d1Log: strip(report.d1Log), d1: report.d1 ? { ...report.d1, events: strip(report.d1.events) } : report.d1 }, 'en-e1-loppu.json', dir);
    expect(analysis('ensi-analyysi.mjs', dir, 'e').code).toBe(3);
  });

  it('muisti: tyhjä tai rikkinäinen muistiloki → 3/2, ei WebContent-lukemia → 3', () => {
    const report = file(fixtureText('d2vaihdot-loppu.json'));
    expect(analysis('d2-analyysi.mjs', report).code).toBe(2);
    expect(analysis('d2-analyysi.mjs', report, file('', 'tyhja.jsonl')).code).toBe(3);
    expect(analysis('d2-analyysi.mjs', report, file('{"ms": 1\nrikki\n', 'rikki.jsonl')).code).toBe(2);
    const gpuOnly = fixtureText('d2vaihdot-muisti.jsonl').split('\n').filter(l => !l.includes('WebContent')).join('\n');
    expect(analysis('d2-analyysi.mjs', report, file(gpuOnly, 'gpu.jsonl')).code).toBe(3);
  });

  it('yhteenveto: kansio puuttuu → 2, tyhjä kansio → 3, vain muita skenaarioita → 3', () => {
    expect(summary(join(work, 'ei-tuloksia')).code).toBe(2);
    const empty = join(work, 'yhteenveto-tyhja'); mkdirSync(empty, { recursive: true });
    expect(summary(empty)).toMatchObject({ code: 3, err: expect.stringMatching(/EI MITTAUKSIA/) });
    const other = join(work, 'yhteenveto-muu');
    file(fixtureText('tarkistus-loppu.json'), 'ta-t1-loppu.json', other);
    expect(summary(other).code).toBe(3);
  });

  it('yhteenveto välittää analyysin poistumiskoodin: rikkinäinen raportti → 2, nollanäytteinen → 3, myös kelvollisen rinnalla', () => {
    const broken = join(work, 'yhteenveto-rikki');
    file(fixtureText('d1-loppu.json'), 'sv-a1-loppu.json', broken);
    file('{"events": [', 'sv-a2-loppu.json', broken);
    const brokenResult = summary(broken);
    expect(brokenResult.code).toBe(2);
    expect(brokenResult.out).toMatch(/sv-a1 +kuorma/);
    expect(brokenResult.out).toMatch(/sv-a2 +VIRHE: raportti ei ole kelvollista JSONia/);

    const zero = join(work, 'yhteenveto-nolla');
    reportFile(withoutEvents(fixture('d1-loppu.json'), isRender), 'sv-a1-loppu.json', zero);
    const zeroResult = summary(zero);
    expect(zeroResult.code).toBe(3);
    expect(zeroResult.out).toMatch(/EI MITTAUKSIA: liian vähän mittauksia d1-skenaariossa/);

    const noDisplay = join(work, 'yhteenveto-ei-nayttoa');
    reportFile(withoutEvents(fixture('d1-loppu.json'), e => e.event === 'naytto'), 'sv-a1-loppu.json', noDisplay);
    expect(summary(noDisplay).code).toBe(3);
  });
});
