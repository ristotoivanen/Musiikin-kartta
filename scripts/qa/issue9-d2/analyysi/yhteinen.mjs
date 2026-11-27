// Analyysien yhteinen syötteen tarkistus ja poistumiskoodit (lisätty PR #185:n katselmoinnista 24.11.2026).
//
// Poistumiskoodit:
//   0 = analyysi ajettiin ja aineistoa oli riittävästi (EI tarkoita, että hyväksymisrajat täyttyvät; vertaa tulosta
//       README:n rajoihin)
//   1 = mittaus ajettiin, mutta tulos rikkoo määrittelyn (esim. palapurussa ero, loopin sauma ei ole 0 kehystä)
//   2 = syöte puuttuu, ei ole kelvollista JSONia tai raportti on rikki tai skenaario päättyi virheeseen
//   3 = raportti on kelvollinen, mutta mittauksia on liian vähän (skenaario ei käynnistynyt tai mittaus epäonnistui)
import { existsSync, readFileSync, statSync } from 'node:fs';

export const TULOS_RIKKOO = 1, SYOTE_VIRHE = 2, EI_MITTAUKSIA = 3;

// d1-skenaarion mittausten vähimmäismäärät: puolet pienimmästä määrästä hyväksytyissä vertailuajoissa 22.–24.11.2026
// (11 ajoa: aikajana 249–263, raitojen ero 47–60, jatkuvuus 5, sointunäyttö 34–43). Nämä ovat mittauksen
// kelpoisuusehtoja, eivät hyväksymisrajoja: pienempi määrä tarkoittaa, että skenaario tai mittaus jäi kesken.
export const D1_VAHIMMAT = { aikajana: 124, raidat: 23, jatkuvuus: 3, naytto: 17 };

export function fail(message, code = SYOTE_VIRHE) {
  console.error(`${code === EI_MITTAUKSIA ? 'EI MITTAUKSIA' : code === TULOS_RIKKOO ? 'POIKKEAMA' : 'VIRHE'}: ${message}`);
  process.exit(code);
}

export function readJson(path, what = 'raportti') {
  if (!path) fail(`${what}: tiedostopolku puuttuu`);
  if (!existsSync(path) || !statSync(path).isFile()) fail(`${what} ei löydy: ${path}`);
  try { return JSON.parse(readFileSync(path, 'utf8')); }
  catch (error) { return fail(`${what} ei ole kelvollista JSONia: ${path} (${error.message})`); }
}

// Probe.js:n raportti: events-taulukko on pakollinen, ja skenaarion virhe tekee raportista kelvottoman.
export function readReport(path) {
  const report = readJson(path);
  if (!report || typeof report !== 'object' || !Array.isArray(report.events)) fail(`raportissa ei ole events-taulukkoa: ${path}`);
  const error = report.events.find(e => e.event === 'skenaario-virhe');
  if (error) fail(`skenaario päättyi virheeseen: ${error.message ?? 'tuntematon'} (${path})`);
  return report;
}

export function readJsonLines(path, what) {
  if (!path) fail(`${what}: tiedostopolku puuttuu`);
  if (!existsSync(path)) fail(`${what} ei löydy: ${path}`);
  const lines = readFileSync(path, 'utf8').split('\n').filter(l => l.trim());
  if (!lines.length) fail(`${what} on tyhjä: ${path}`, EI_MITTAUKSIA);
  return lines.map((line, i) => { try { return JSON.parse(line); } catch { return fail(`${what}: rivi ${i + 1} ei ole JSONia (${path})`); } });
}

export const scenarioOf = report => report.events.find(e => e.event === 'skenaario-alku')?.scenario ?? null;
