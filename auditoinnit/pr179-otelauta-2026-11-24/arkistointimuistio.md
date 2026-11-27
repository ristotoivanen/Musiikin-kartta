# PR #179 · Otelauta Ydinopinnot: arkistointimuistio

**Kirjattu 27.11.2026.** Tämä muistio kokoaa työn tilan ennen pilvikeskustelun arkistointia. Sovelluskoodia, alkuperäistä PR-haaraa, betaa tai mainia ei muutettu tämän muistion yhteydessä. Yhdistämisristiriitoja ei ratkaistu.

> ## ⚠️ Tärkein asia
> **Alkuperäinen [PR #179](https://github.com/ristotoivanen/Musiikin-kartta/pull/179) (haara `claude/116-otelauta-ydinopinnot`, HEAD `97a49fe`) ei sisällä auditointikorjaushaaran viittä uudempaa committia.**
> Ajantasainen toteutus on haarassa **`claude/116-otelauta-auditointikorjaukset`**, HEAD **`20123da`** (tätä muistiota edeltävä commit).
> Ennen beta-integraatiota omistaja päättää, **päivitetäänkö alkuperäinen PR #179** (korjaushaara tuodaan PR:n haaraan) **vai avataanko korvaava PR** korjaushaarasta ja suljetaan #179. **Molempia ei yhdistetä erikseen.** Korjaushaara sisältää koko alkuperäisen PR:n historian, joten kahden erillisen yhdistämisen tulos olisi päällekkäinen.

## 1. Viimeisin toteutus ja haarat

| Kohta | Arvo |
|---|---|
| Ajantasainen haara | [`claude/116-otelauta-auditointikorjaukset`](https://github.com/ristotoivanen/Musiikin-kartta/tree/claude/116-otelauta-auditointikorjaukset) |
| Viimeisin toteutuscommit | `20123da` (N5–N7 viimeistely: satula/talla-sanasto, `keepAnchored`, 02:n tulos ruudussa) |
| Alkuperäinen PR-haara | `claude/116-otelauta-ydinopinnot` @ `97a49fe` (PR #179, Draft, base `beta`) – ei muutettu auditoinnin aikana |
| Yhteinen kantacommit betan kanssa | `454aee5` |
| Beta tarkistushetkellä | `07d8126` (PR #209:n yhdistäminen) |

Korjaushaaran viisi uudempaa committia (vanhimmasta uusimpaan):

| Commit | Sisältö |
|---|---|
| `e3ece3b` | Auditoinnin 1. korjauskierros: tahmea palautepaneeli poistettu, 03:n kiintopistejakauma, dokumenttikorjaus PR #178:n `rakenna.py`-muutoksesta |
| `db1f113` | Alkuperäinen auditointi ja 1. Xcode-uusintatesti arkistoon |
| `14aed6d` | Kierros 2: N1 palaute vastausalueen lähellä, N2 suunta ja määrä ruudussa, N3 ei kehää kiintopisteessä, uusi tehtävä näkyviin, MINOR 4/5/7/9/10 |
| `0be1a4f` | Kierroksen 2 Xcode-uusintatestin raportti |
| `20123da` | Viimeistely N5–N7 ja sen Xcode-testi |

Toteutuksen pääosat: `assets/otelauta-ydinopinnot.{js,css,d.ts}`, sisällöt `tools/oppimiskartta/sisallot/otelauta/*.html`, Otelauta-lohko `tools/oppimiskartta/aiheet.json`, kuuden rivin merkintä `tools/oppimiskartta/rakenna.py`:ssä (`data-otelautaharjoitus`), generoidut `oppi/otelauta/*.html`. Aiemmat 8 sisältöä säilyvät samoilla URL:eilla ja tunnisteilla. Ei mikrofonia, ei tallennusmuutoksia, yhteistä äänimoottoria ei muutettu.

## 2. Auditointiketju

Kaikki raportit säilytetty muuttamattomina hakemistossa `auditoinnit/pr179-otelauta-2026-11-24/`:

1. [Alkuperäinen auditointi](alkuperainen/raportti.md) – 2 MAJOR (tahmea paneeli peittää laudan; vaaka/400 %), 8 MINOR, ideat.
2. [Korjausraportti, kierros 1](korjausraportti.md) + `korjaus-kuvat/`.
3. [Uusintatesti 1 (Xcode)](uusintatesti/raportti.md) – uudet löydökset N1–N4.
4. [Kierros 2, pilvi](kierros2/raportti.md) – N1–N3 ja MINORit korjattu.
5. [Kierros 2, Xcode-uusintatesti](kierros2/xcode/raportti.md) – kaikki PASS; uudet N5 (nuoli vs. sana), N6 (04:n valmistuminen siirsi ruutua 51 px), N7 (02:n palaute laudan alaosassa), N8–N10.
6. [Viimeistely N5–N7](viimeistely/raportti.md) – tekninen, musiikillinen, pedagoginen ja mobiilikäytettävyys: **GO**.
7. [Tunnetut lähtötilan ongelmat](viimeistely/tunnetut-ongelmat.md) ja [omistajan käyttäjätestausohje](viimeistely/kayttajatestausohje.md).

Lisäksi: inventaario [`docs/oppiminen/otelauta-ydinopinnot-116-2026-11-23.md`](../../docs/oppiminen/otelauta-ydinopinnot-116-2026-11-23.md) ja QA-raportti [`docs/qa/otelauta-ydinopinnot/raportti.md`](../../docs/qa/otelauta-ydinopinnot/raportti.md).

## 3. Testitulokset

| Ajo | Ympäristö | Commit | Tulos |
|---|---|---|---|
| `npm run check` (lint, Vitest, typecheck, build, linkit) | macOS | `20123da`:n muutokset | läpi, Vitest **724/724** |
| Otelauta-spec Chromium (desktop + phone) | macOS | sama | **64/64** |
| Otelauta-spec WebKit (`playwright.otelauta-ydinopinnot-webkit.config.ts`) | macOS | sama | 67 läpi, **3 kaatuu** (T1–T3, samat myös `14aed6d`:llä) |
| `npm run check` | pilvi (Linux) | `14aed6d` | 721/721 |
| Otelauta-spec Chromium / WebKit | pilvi | `14aed6d` | 58/58 / 140/140 |
| Koko Chromium-regressio | pilvi | `14aed6d` | 1146 läpi, 1 kaatui (`responsive.spec.ts:259`, epävakaa myös betalla), 49 ohitettu |
| Linkit | pilvi | `14aed6d` | 121 sivua, 2988 viittausta, 0 ongelmaa |
| CI | GitHub | `0ce7f64` (alkuperäinen PR) | kaikki vihreät: Chromium 1129/0/49, WebKit 52/52 |

**CI:tä ei ole ajettu korjaushaaralle.** Haarakohtainen työnkulku `.github/workflows/otelauta-ydinopinnot-qa.yml` käynnistyy vain haaran `claude/116-otelauta-ydinopinnot` pushista, eikä korjaushaaralle ole PR:ää. CI ajetaan, kun integraatiotapa on päätetty.

### Tunnetut ongelmat

| # | Kuvaus | Tila |
|---|---|---|
| T1–T2 | WebKit (macOS): 01 ”näppäimistö: yksi sarkainpysähdys” – Tab ei siirry Uusi tehtävä -painikkeeseen | Lähtötilan ongelma, ei viimeistelyn aiheuttama; erillinen tehtävä |
| T3 | 03 nimeä ”ilman vieritystä” (WebKit 82 px; Chromium epävakaa 4/24) | Todennäköisesti testin oma vieritysmittaus; erillinen tehtävä |
| – | `responsive.spec.ts:259` ”pehmeä vieritys” | Epävakaa myös betalla, ei Otelaudan |
| – | `riffikaiku-pipeline.test.ts:388` noin 3,2–3,8 s, ylittää 5 s CI-kuormassa | Lähtötila, ei Otelaudan |
| N8 | IDEA: 03:n kiintopistenauhan 2. virhe antaa saman tekstin | Jatkokehitys |
| N9 | MINOR: vaaka → pysty kesken harjoituksen palauttaa sivun alkuun | Jatkokehitys |
| N10 | IDEA: iPhone 17e:n Safari-alapalkki peittää hetkeksi 02:n kolmannen suhdepainikkeen; vieritys auttaa | Jatkokehitys |
| – | MINOR: 02:n tulosrivi laudan alla voi jäädä noin 40 px näkymän alle, kun lauta päättyy ruudun alareunaan | Omistajan päätös |
| – | Vaaka-asennossa lauta täyttää vain vasemman osan (N4) | Ei toteutettu |

## 4. Tehdyt Xcode-simulaattoritestit

Kaikki omistajan Macilla, Xcoden iOS Simulatorin omalla Safarilla ja todellisella kosketuksella (ei Playwright-emulaatiota). iOS 27.2 -simulaattori.

| Kierros | Laitteet | Commit | Tulos |
|---|---|---|---|
| [Uusintatesti 1](uusintatesti/raportti.md) | iPhone 16 Pro | `e3ece3b` | Tahmea paneeli poistunut; uudet N1–N4 |
| [Kierros 2](kierros2/xcode/raportti.md) | iPhone 16 Pro (pysty + vaaka), iPhone 17e | `14aed6d` | 01–04 PASS; N5–N10 |
| [Viimeistely](viimeistely/raportti.md) | iPhone 16 Pro, iPhone 17e | `20123da`:n muutokset | N5/N6/N7 PASS (siirtymä ≤ 1 px), N10 PASS vierittämällä |

Playwright-emulaatiokuvat (pilvi) ovat vain täydentäviä, eivät Xcode-testin korvike.

## 5. Avoimet kokeet (ei tehty)

- **Fyysinen iPhone:** äänen kuuluvuus ja matalat sävelet kaiuttimella (alkuperäinen #11), napautustarkkuus oikealla sormella.
- **VoiceOver:** `✓/✗`-merkkien, ruudun suuntanimien (”kohti satulaa/tallaa”) ja ruudukon roving tabindexin lukeminen.
- **Kitaran käyttäjäkoe:** onko ”kohti satulaa / kohti tallaa” kitaristille selkeä, ja vastaavatko nuolet fyysistä kitaraa. Ohje: [kayttajatestausohje.md](viimeistely/kayttajatestausohje.md).
- **400 % reflow** Safarin tekstikoolla ja **vähennetty liike** simulaattorin asetuksella.
- **Android** (ei testattu lainkaan).

## 6. Pilviympäristö

| Kohta | Arvo |
|---|---|
| Ympäristö | ”Musiikin-kartta”, henkilökohtainen, rajoitettu verkko |
| Sallittu | pakettirekisterit ja MCP-palvelimet |
| Sallitut lisäpalvelimet (Playwright-selainlataukset) | `cdn.playwright.dev`, `playwright.download.prss.microsoft.com` |
| Asennusskripti | ei ole |
| Chromium | esiasennettu: `PLAYWRIGHT_CHROME_EXECUTABLE=/opt/pw-browsers/chromium` |
| WebKit | asennettava joka istunnossa: `npx playwright install webkit` ja `npx playwright install-deps webkit` |

Pilvestä ei pääse Cloudflare Pages -esikatseluun eikä omistajan Maciin (Xcode). Xcode-testit tehdään paikallisella Claude Code -istunnolla.

## 7. Beta ja rinnakkaiset PR:t (27.11.2026)

Beta `07d8126` sisältää kantacommitin `454aee5` jälkeen mm.:

| Muutos | Merkitys Otelaudalle |
|---|---|
| [PR #205](https://github.com/ristotoivanen/Musiikin-kartta/pull/205) Sävelnimet Ydinopinnot | Muutti `tools/oppimiskartta/rakenna.py`:tä (oma harjoitusmerkintä samaan kohtaan) ja `aiheet.json`:ia; toi rajatun `touch-action: manipulation` -ratkaisun omaan CSS:äänsä (`assets/savelnimet-ydinopinnot.css`). |
| #204 kertauksen yhteinen otelauta ja minitunnit | Muutti generaattoria ja Otelaudan generoituja sivuja |
| PR #208 Sointupaja, PR #209 Soittopakki (Otelautaoppaan pikavalinnat pois Soittopakista) | `oppi/otelauta/index.html`, `otelauta.html` muuttuneet betassa |
| PR #181/#182 D2-soitin | Ei suoraa päällekkäisyyttä havaittu |

**Kokeiluyhdistäminen (vain luku, `git merge-tree`):** sekä `20123da` että `97a49fe` betaa `07d8126` vasten → **yksi sisältöristiriita: `tools/oppimiskartta/rakenna.py`**. `aiheet.json`, `oppi/otelauta/index.html` ja `tests/e2e/aihesivut.spec.ts` yhdistyvät automaattisesti, mutta generoidut sivut on luotava uudelleen (`rakenna.py`) ja `--tarkista` ajettava yhdistämisen jälkeen. Ristiriitaa ei ratkaistu.

**Rinnakkaiset:**

- [PR #178](https://github.com/ristotoivanen/Musiikin-kartta/pull/178) Sävelkorva (Draft, HEAD `a7af747`, ei betassa): muuttaa myös `rakenna.py`:tä (`data-melodiaharjoitus`) ja samoja yhteisiä testejä. Säilytä molempien merkinnät; yhteisissä testeissä aiheet.json-pohjainen muoto. Yhdistämisjärjestys päätettävä.
- [#210](https://github.com/ristotoivanen/Musiikin-kartta/issues/210) yhteinen kaksoisnapautuszoomin korjaus: koskee myös Otelaudan painikkeita ja ruudukkoa. Otelauta ei tällä hetkellä käytä `touch-action`-sääntöä. Ei lisätä omaa korjausta #179:ään; koordinoidaan #210:n kanssa, jotta sääntöjä ei tule kahteen kertaan.
- [#211](https://github.com/ristotoivanen/Musiikin-kartta/issues/211) epävakaa Opettele-testi (`tests/e2e/practice.spec.ts:89`): ei Otelaudan; koko regressiossa mahdollinen kaatuminen tulkitaan sen kautta, ei #179:n regressioksi.

## 8. Hyväksyntäportit (järjestyksessä)

1. **Integraatiotapa:** päivitetäänkö PR #179 korjaushaaralla vai korvaava PR (ei molempia).
2. **Yhdistämisjärjestys** suhteessa PR #178:aan ja #210:een; `rakenna.py`-ristiriidan ratkaisu omana rajattuna tehtävänä.
3. **CI** integraatiohaaralle (Chromium koko regressio, WebKit, #117, Cloudflare-esikatselu).
4. **Omistajan kokeet:** fyysinen iPhone, VoiceOver, kitara.
5. **T1–T3 ja N8–N10:** erillisiksi tehtäviksi vai hyväksytään jatkokehitykseen.
6. **Beta-yhdistäminen** vasta omistajan päätöksellä. Main ei kuulu tähän vaiheeseen.
