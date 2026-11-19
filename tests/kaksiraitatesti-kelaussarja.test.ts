import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { BURST_GAPS, burstPlan, classifyBurst, manualBursts, summarizeBursts, type LogEntryLike } from '../harjoittelija/kaksiraitatesti/kelaussarja';

describe('kelaussarja-ajurin suunnitelma', () => {
  const plan = burstPlan();
  it('24 sarjaa, tilat vuorottelevat ja kumpikin tila saa kaksois- ja kolmoiskelauksia', () => {
    expect(plan).toHaveLength(24);
    for (const tila of ['soitosta', 'aloituksesta'] as const) {
      const own = plan.filter(burst => burst.tila === tila);
      expect(own).toHaveLength(12);
      expect(new Set(own.map(burst => burst.osuudet.length))).toEqual(new Set([2, 3]));
    }
  });
  it('välit ovat 0–400 ms, kaikki välit esiintyvät, ja kohteet ovat raidan sisällä ja eri kohdissa', () => {
    const gaps = plan.flatMap(burst => burst.valit);
    expect(new Set(gaps)).toEqual(new Set(BURST_GAPS));
    expect(Math.max(...gaps)).toBeLessThanOrEqual(400);
    // Välien yhdistelmät vaihtelevat, ja 0 ms:n väli (sama tehtävä) osuu myös sarjan keskelle kummassakin tilassa.
    expect(new Set(plan.map(burst => burst.valit.join(','))).size).toBeGreaterThanOrEqual(12);
    for (const tila of ['soitosta', 'aloituksesta']) {
      expect(plan.some(burst => burst.tila === tila && burst.valit.slice(1).includes(0))).toBe(true);
    }
    for (const burst of plan) {
      expect(burst.valit).toHaveLength(burst.osuudet.length);
      expect(new Set(burst.osuudet).size).toBe(burst.osuudet.length);
      expect(Math.max(...burst.osuudet)).toBeLessThan(0.8);
    }
  });
});

describe('kelaussarjan luokittelu', () => {
  const base: LogEntryLike[] = [
    { ms: 100, event: 'tuore-aloitus', request: 7 },
    { ms: 120, event: 'tuore-aloitus', request: 8 },
    { ms: 130, event: 'aloitus-ohitettu', request: 7 },
  ];
  it('ok: viimeisimmän aloituksen toisto alkaa odotetusta kohdasta', () => {
    const result = classifyBurst([...base, { ms: 200, event: 'toisto-alkoi', request: 8, tausta: 30, kitara: 30.01 }], 100, 120, 30);
    expect(result).toMatchObject({ tulos: 'ok', kestoMs: 80, aloituksia: 2, ohitettuja: 1, aikakatkaisuja: 0 });
    // Sarjan alku ei-kokonaisena millisekuntina: samassa millisekunnissa kirjattu aloitus lasketaan mukaan.
    expect(classifyBurst([...base, { ms: 200, event: 'toisto-alkoi', request: 8, tausta: 30, kitara: 30 }], 100.6, 120, 30).aloituksia).toBe(2);
  });
  it('ohitetun aloituksen toisto ei kelpaa, ja väärä kohta ja aikakatkaisu erotetaan', () => {
    expect(classifyBurst([...base, { ms: 200, event: 'toisto-alkoi', request: 7, tausta: 20, kitara: 20 }], 100, 120, 30).tulos).toBe('ei-toistoa');
    expect(classifyBurst([...base, { ms: 200, event: 'toisto-alkoi', request: 8, tausta: 20, kitara: 20 }], 100, 120, 30).tulos).toBe('vaara-kohta');
    expect(classifyBurst([...base, { ms: 5200, event: 'kelaus-aikakatkaisu', request: 8 }], 100, 120, 30).tulos).toBe('aikakatkaisu');
    expect(classifyBurst([...base, { ms: 5100, event: 'kelattu', tausta: 'aikakatkaisu', kitara: 'valmis', request: 7 },
      { ms: 200, event: 'toisto-alkoi', request: 8, tausta: 30, kitara: 30 }], 100, 120, 30).tulos).toBe('aikakatkaisu');
  });
  it('yhteenveto laskee tulokset tiloittain', () => {
    const events: LogEntryLike[] = [
      { ms: 1, event: 'kelaussarja-tulos', tila: 'soitosta', tulos: 'ok', kestoMs: 60, pisinJumiMs: 25 },
      { ms: 2, event: 'kelaussarja-tulos', tila: 'soitosta', tulos: 'aikakatkaisu', kestoMs: null, pisinJumiMs: 10_700 },
      { ms: 3, event: 'kelaussarja-tulos', tila: 'aloituksesta', tulos: 'ok', kestoMs: 80, pisinJumiMs: 30 },
    ];
    expect(summarizeBursts(events)).toEqual([
      { tila: 'soitosta', sarjoja: 2, ok: 1, muut: { aikakatkaisu: 1 }, pisinJumiMs: 10_700, kestoMediaaniMs: 60 },
      { tila: 'aloituksesta', sarjoja: 1, ok: 1, muut: {}, pisinJumiMs: 30, kestoMediaaniMs: 80 },
    ]);
  });
});

describe('alkuperäinen simulaattoriraportti (19.11.2026, kolmoiskelaus)', () => {
  const report = JSON.parse(readFileSync('harjoittelija/kaksiraitatesti/raportit/simulaattori-2026-11-19-1.json', 'utf8')) as { events: LogEntryLike[]; samples: LogEntryLike[] };
  const bursts = manualBursts(report.events, report.samples);
  it('kolmoiskelaus tunnistetaan käsin tehdyksi sarjaksi, joka päättyi aikakatkaisuun ja ~11 s:n näytetaukoon', () => {
    const triple = bursts.find(item => item.kelauksia === 3);
    expect(triple).toMatchObject({ tila: 'käsin-soitosta', tulos: 'aikakatkaisu', toistoAlkoi: false, aloituksia: 3 });
    // 500 ms:n näytteenotto katkesi: pääsäie ei ajanut mitään ~11 s:iin (ks. KELAUS-JUURISYY.md, luku 7).
    expect(triple!.pisinJumiMs).toBeGreaterThan(10_000);
  });
  it('vapaatekstikentät ovat tyhjiä (ei yksilöiviä tietoja)', () => {
    const notes = report.events.filter(item => 'note' in item).map(item => item.note);
    const trials = (JSON.parse(readFileSync('harjoittelija/kaksiraitatesti/raportit/simulaattori-2026-11-19-1.json', 'utf8')) as { nayttoaani: { trials: { note: string }[] } }).nayttoaani.trials;
    expect([...notes, ...trials.map(item => item.note)].every(note => note === '')).toBe(true);
  });
});
