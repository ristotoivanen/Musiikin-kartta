# PR #179 · Otelauta: rajattu viimeistely (N5, N6, N7)

**24.11.2026 · haara `claude/116-otelauta-auditointikorjaukset`, pohja `0be1a4f` · muutokset työpuussa, ei committia (omistajan katselmointi) · ei yhdistetty.**
Aiemmat raportit säilytetty muuttamattomina: [alkuperäinen](../alkuperainen/raportti.md), [uusintatesti 1](../uusintatesti/raportti.md), [kierros 2](../kierros2/raportti.md), [Xcode-uusintatesti](../kierros2/xcode/raportti.md).

## 1. Mitä muutettiin

| # | Muutos | Tiedostot |
|---|---|---|
| **N5** | Fyysinen suunta kuvataan **satula/talla**-sanoilla, sävelkorkeus säilyy sanoissa *korkea/matala/korkeampi/matalampi*. Nuolet ennallaan: ↑ = kohti satulaa, ↓ = kohti tallaa. | `assets/otelauta-ydinopinnot.js`, `tools/oppimiskartta/sisallot/otelauta/{kuule-oktaavi,sama-savel-toiselta-kielelta}.html`, generoidut `oppi/otelauta/*.html` |
| **N6** | Uusi apufunktio `keepAnchored(anchor, muutos)`: napautuksen koko asettelumuutos (palaute, löytö, valmistumisen painikkeet) tehdään yhden mittauksen sisällä ja vieritys kompensoidaan kerralla. Käytössä 01, 02 (paikka), 03 (etsi) ja 04. `setFeedback` käyttää samaa funktiota. | `assets/otelauta-ydinopinnot.js` |
| **N7** | 02:n valittu paikka kertoo tuloksen **ruudussa** (`✓E♭3` / `✗E♭5`, saavutettavassa nimessä ”valittu, oikein/väärin”) ja uudella **tulosrivillä laudan alla** (”✗ Paikka 1: G3, yhtä korkea. Oikea: paikka 2.”). Pidempi selitys pysyy palautekohdassa. Tulosrivi on piilossa ennen valintaa, joten vastausta ei paljasteta etukäteen. | `assets/otelauta-ydinopinnot.js`, `.css` |

### N5 · sanasto

| Paikka | Ennen | Nyt |
|---|---|---|
| 01 palaute (väärä sävel) | ”Siirry kolme nauhaa ylemmäs/alemmas.” | ”Siirry kolme nauhaa **kohti tallaa**.” / ”… **kohti satulaa**.” |
| 01 ruudun saavutettava nimi | ”siirry … ylemmäs/alemmas” | ”siirry … kohti tallaa/satulaa” |
| 01 esimerkkilause ja vihje | ”viisi nauhaa ylempää”, ”ylempänä paksummalla / alempana ohuemmalla” | ”viisi nauhaa kohti tallaa”, ”kohti tallaa paksummalla / kohti satulaa ohuemmalla” |
| 02 selitys (`shapeWords`) ja sisältöteksti | ”kaksi nauhaa ylemmäs” | ”kaksi nauhaa kohti tallaa” |
| 03 nimeä, 2. virhe | ”… yksi nauha alempana” | ”… yksi nauha kohti satulaa” |
| 03 etsi | ”D on ylempänä.” | ”D löytyy kohti tallaa.” (nuoli `C↓`) |
| 04 | ”Tällä kielellä B on alempana.” | ”Tällä kielellä B löytyy kohti satulaa.” |
| Ruudun nimi (03, 04) | ”F on ylempänä kohti runkoa” | ”F löytyy kohti tallaa” |

Sävelkorkeus säilyy sanoissa ”liian korkea/matala”, ”oktaavia korkeampi/matalampi”, ”yhtä korkea”.

## 2. Rajaukset (ei muutettu)

Tehtävägeneraattorit ja vaikeus, harjoitusten pedagoginen rakenne, äänet ja äänimoottori, URL-osoitteet ja tallennukset, muut Ydinopintojen aiheet. N8, N9 ja N10 jätetty jatkokehitykseen.

## 3. Automaattiset testit

| Testi | Tulos |
|---|---|
| `npm run check` (lint, Vitest, typecheck, build, linkit) | **läpi**, Vitest **724/724** (kierros 2: 721, uusia 3) |
| Otelauta Chromium (desktop + phone) | **64/64** (kierros 2: 58, uusia 6 mukaan lukien päivitykset) |
| Otelauta WebKit (`playwright.otelauta-ydinopinnot-webkit.config.ts`) | **67 läpi, 3 kaatuu** – samat 3 kaatuvat myös muuttamattomalla `14aed6d`:llä tässä macOS-ympäristössä (ks. alla) |

Uudet regressiotestit:
- Yksikkö: suuntasanasto 01 (kaikki 13 nauhaa, tarkat tekstit), 03 ja 04 (ei sanoja ylempää/alempaa), `shapeWords` ja `unisonHint`.
- E2E: 04 valmistumisen viimeinen löytö ei siirrä napautettua ruutua (≤ 1 px) ja se pysyy näkymässä; 02 laudan alaosan paikkavalinta (ruudun ✓/✗, saavutettava nimi, tulosrivi näkyvissä, ruutu ei siirry); 02 tulosrivi piilossa ennen valintaa.
- Päivitetty: vanhat sanamuodot ylemmäs/alemmas → kohti tallaa/satulaa.

**Ennestään kaatuvat WebKit-testit (ei tämän kierroksen aiheuttamia).** Mitattu muuttamattomalla `14aed6d`:llä: 01 ”näppäimistö: yksi sarkainpysähdys” (kaksi projektia; Tab ei siirtynyt odotetulle painikkeelle; syytä ei selvitetty, mahdollisesti WebKitin sarkainkäyttäytyminen) ja 03 nimeä ”ilman vieritystä” (WebKit: 82 px; Chromiumissa epävakaa, 4/24 ajoa kaatui samoin ennen muutoksia, 10–22 px). Pilviympäristö (Linux) ei nähnyt näitä. En muuttanut näitä testejä. Suositus: korjata tai ohittaa erillisessä tehtävässä.

## 4. Xcode iOS Simulator (iPhone 16 Pro ja 17e, Safari, todellinen kosketus)

Palvelin työpuusta (`otelauta-ydinopinnot.js?v=dfbf238435`, sisältää `keepAnchored`). Mittausskripti vain lukee tilan.

| Tarkistus | Laite | Tulos |
|---|---|---|
| 01: ↓3 ja ↑4, sanat kohti tallaa/satulaa | 16 Pro | **PASS** – E 2: ”F♯2 – liian matala. Siirry kolme nauhaa kohti tallaa.” ruudussa `↓3`; E 9: ”C♯3 – liian korkea. Siirry neljä nauhaa kohti satulaa.” ruudussa `↑4`. Saavutettavat nimet: ”siirry kolme nauhaa kohti tallaa” ja ”… neljä nauhaa kohti satulaa”. Kuva 01. |
| 04 valmistuminen, viimeinen löytö **alhaalla** (E 10) | 16 Pro | **PASS** – 679 → 678 px (siirtymä 1 px; aiemmin 51 px). Kuva 02. |
| 04 valmistuminen, viimeinen löytö **ylhäällä** (E 1) | 16 Pro | **PASS** – 444 → 443 px. |
| 04 valmistuminen, viimeinen löytö **keskellä**, pitkä 4 rivin teksti (A 3) | 16 Pro | **PASS** – 536 → 535 px. Kuva 03. |
| 04 valmistuminen, viimeinen löytö alhaalla | 17e | **PASS** – 697 → 696 px. Kuva 05. Ruutu ei jää Safarin alapalkin alle. |
| 02 paikkavalinta laudan alaosassa (A 10) | 16 Pro | **PASS** – ruudussa `✗G3` (saavutettava nimi: ”… valittu, väärin”), oikea G2 vihreänä, rivi laudan alla ”✗ Paikka 1: G3, yhtä korkea. Oikea: paikka 2.” Kuva 04. |
| 02 tulosrivi laudan alla | 16 Pro | **Osittain näkyvä**: laudan päättyessä ruudun alareunaan rivi on noin 40 px näkymän alapuolella (vähän vieritystä). Ruudun merkki on aina näkyvissä. |
| N10: kolmas suhdepainike vierittämällä (17e) | 17e | **PASS** – pienen vierityksen (≈ 280 px sivun alusta) jälkeen kaikki kolme painiketta ovat kokonaan näkyvissä, ja napautus rekisteröityi (”Oikein: oktaavia korkeampi. Missä se soi?”, `aria-pressed`). Kuva 06. Ei hyväksynnän estettä. |
| Uusi tehtävä / Uusi sävel avautuu oikeaan kohtaan | 16 Pro | **PASS** – tehtävälause näkyvissä (`top` ≈ 0) ja fokuksessa (04 todennettu tässä kierroksessa; 01–03 kierroksella 2, koodi ennallaan). |
| Alkuperäinen peittovika ei palaudu | – | **PASS** – ei tahmeaa paneelia, 01/04-ruutukuvissa palaute ja lauta eivät peity. Chromium-testi ”palautepaneeli ei peitä” läpi 320 × 568, 390 × 640 ja vaaka 844 × 390. |

Laitteita ja kuvakulmia ei toistettu laajemmin; 02:n ja 03:n sanoja ei kokeiltu erikseen simulaattorissa (yksikkö- ja E2E-testit kattavat; 01 ja 04 nähty).

## 5. Jäljelle jäävät

| # | Vakavuus | Kuvaus |
|---|---|---|
| N8 | IDEA | 03: kiintopistenauhan 2. virhe antaa saman tekstin. (Jatkokehitys.) |
| N9 | MINOR | Vaaka → pysty kesken harjoituksen palauttaa sivun alkuun. (Jatkokehitys.) |
| N10 | IDEA | Safarin alapalkki peittää iPhone 17e:llä hetkeksi 02:n kolmannen painikkeen ensimmäisessä näkymässä; painike on saavutettavissa vierittämällä (todennettu). (Jatkokehitys.) |
| – | MINOR | 02:n tulosrivi laudan alla voi jäädä hieman näkymän alapuolelle, jos lauta on juuri ruudun alareunassa. Merkki ruudussa ratkaisee tarpeen. |
| – | Testiympäristö | Ennestään kaatuvat WebKit-testit ja epävakaa 03 nimeä -testi (kohta 3). |
| – | Avoin | Fyysisen iPhonen kuuntelutesti, VoiceOver (`✓/✗`-merkin ja uuden suuntasanaston lukeminen), oikean kitaran käyttäjäkoe, 400 % reflow, vähennetty liike. |

## 6. Hyväksyntäsuositukset (erikseen)

- **Tekninen: GO.** N6 korjattu kaikissa mitatuissa tapauksissa (≤ 1 px) molemmilla laitteilla. `npm run check` ja Chromium läpi; WebKitin 3 kaatumista ovat ennestään ympäristökohtaisia.
- **Musiikillinen: GO.** Suuntasanat vastaavat fyysistä kitaraa (satula/talla), sävelkorkeus säilyy erillään. Nauhamäärät ja nuolet tarkistettu molempiin suuntiin.
- **Pedagoginen: GO.** N5:n ristiriita poistui. 02:n paikkapalaute ei paljasta vastausta ennen valintaa.
- **Mobiilikäytettävyys: GO.** Avoimet vain VoiceOver, fyysinen laite ja pienet jatkokehityskohteet.

## TEHTÄVÄN LUOVUTUS PÄÄKESKUSTELUUN

- **Tila:** VALMIS omistajan katselmointiin. **Ei committia**, ei pushia, ei yhdistämistä.
- **Pohja:** `0be1a4f` (toteutus `14aed6d`).
- **Muutetut tiedostot (11):** `assets/otelauta-ydinopinnot.{js,css}`, `tools/oppimiskartta/sisallot/otelauta/{kuule-oktaavi,sama-savel-toiselta-kielelta}.html`, generoidut `oppi/otelauta/*.html` (5), `tests/otelauta-ydinopinnot.test.ts`, `tests/e2e/otelauta-ydinopinnot.spec.ts`; uusi hakemisto `auditoinnit/pr179-otelauta-2026-11-24/viimeistely/` (tämä raportti ja 6 kuvaa).
- **Testit:** ks. kohta 3 ja 4.
- **Omistajan päätökset:** (1) hyväksytäänkö muutokset ja commit; (2) ennestään kaatuvien WebKit-testien (01 sarkain, 03 nimeä vieritys) korjaus erillisenä; (3) N8–N10 jatkokehitykseen; (4) pitääkö 02:n tulosrivin sijaintia säätää.
- **Avoimet:** fyysinen iPhone, VoiceOver, kitaran käyttäjäkoe, 400 % reflow, vähennetty liike, PR #178:n yhdistäminen, PR #179:n kuvauksen korjaus.
- **Seuraava rajattu tehtävä:** commit ja push haaraan omistajan hyväksynnän jälkeen; sen jälkeen VoiceOver-pikatesti.
- **Älä koske:** PR #179:n alkuperäinen haara, PR #178, beta, main, äänet, äänimoottori.
- **Jäljelle jäänyt työtilassa:** `node_modules` on symbolinen linkki auditointityöpuuhun (ei seurata), `uusintatesti/mittaus/` skriptit (ei seurata). Simulaattorit 16 Pro ja 17e käynnissä.
