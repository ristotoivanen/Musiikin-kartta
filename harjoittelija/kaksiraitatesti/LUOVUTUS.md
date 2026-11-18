# Luovutus: kahden raidan äänentoistotyö (18.11.2026)

Seuraavalle Claude Code -istunnolle. Yksityiskohdat ovat tämän hakemiston `README.md`:ssä ja PR-kuvauksissa.
**Issue #9 on NO-GO.** Mitään ei ole yhdistetty eikä julkaistu.

## 1. PR:t ja haarat (tarkistettu 18.11.2026)

| PR | Haara @ HEAD | Base | Sisältö | Tila |
| --- | --- | --- | --- | --- |
| #90 | `fix/kappaleharjoittelija-ios-audio-diagnostiikka` @ 1b9db41 | `beta` | Äänidiagnostiikka (vain mittaus) | Draft. Työpuussa paikallinen commit **7f91d77**, ei pushattu (ahead 1). |
| #92 | `fix/ios-audiocontext-palautus` @ 6f5647e | `beta` | AudioContextin palautus lukituksen jälkeen | Draft. R1 PASS kirjattu kuvaukseen. |
| #100 | `test/kaksiraita-synkronointi` @ 8134b5a | #92:n haara | Kahden raidan testisivu `kaksiraitatesti.html` ja mittaus | Draft, ei yhdistetä. |
| #101 | `fix/kaksiraita-tahdistus` @ bf201a6 | #100:n haara | Juurisyy, uusi moottori `&moottori=uusi` ja H1:n latauskorjaus | Draft. H2 tehty (tulokset alla, ei kirjattu PR:ään). |
| #106 | `test/kaksiraita-pakattu` @ 2e66095 + tämä luovutus | #101:n haara | Pakatut toistotiedostot (AAC, MP3 CBR) ja latausmittaukset | Draft. Odottaa H3:a. |

- **Riippuvuusketju:** `beta` ← #92 ← #100 ← #101 ← #106. #90 on erillinen.
- **Esikatselut:**
  - `https://fix-kaksiraita-tahdistus.musiikin-kartta.pages.dev`
  - `https://test-kaksiraita-pakattu.musiikin-kartta.pages.dev`
- Haara-alias katkeaa 28 merkkiin.

## 2. Fyysisellä iPhonella vahvistettu

- **R1 (PR #92):** äänettömyys korjaantui lukituksen jälkeen. Yksi ajo, PASS.
- **M1 ja W1 (nykyinen soitin):**
  - Renderöity ero poikkesi mediakelloista satoja millisekunteja: W1 −45 vs. −898 ms, M1 −51 vs. −408 ms.
  - Ääni kuulosti epätahdissa.
  - Tauko → Soita palasi kohtaan 1:00.
- **H1 (uusi moottori, WAV verkosta), epäonnistui latausvikaan, ei tahdistukseen:**
  - Kaikki 503-vastaukset olivat Cloudflaren `error code: 1102`. Äänifunktio `functions/assets/audio/[[path]].ts` lukee koko tiedoston muistiin jokaista Range-pyyntöä varten: 23 Mt:n WAVin Range-pyynnöistä onnistui 24/36.
  - Korjattu #101:ssä: tiedosto ladataan kerran kokonaan ja soitetaan muistista (Blob).
- **H2 (uusi moottori, WAV muistista):**
  - Lataus onnistui ja vei noin 11 s (46,1 Mt).
  - Renderöity ero oli useimmissa luotettavissa mittauksissa noin −16 ms.
  - Kelaus ja Tauko → Soita toimivat.
  - Kuulohavainnot olivat myönteiset.
  - Noin 425 ms:n yhteinen poikkeama.
  - Käynnistyksestä ei saatu luotettavaa mittausta.

## 3. PR #106: tehty ja mitattu

- **Koodaus:** samoista lähde-WAVeista AAC-LC 192 kbit/s (`afconvert`, M4A, viive `iTunSMPB`-tiedossa) ja MP3 CBR 192 kbit/s (LAME 4.0, viive LAME-otsakkeessa), 0–120 s ja koko kappale.
- **Testisivu:**
  - `lahde=aac|mp3cbr`, `pituus=koko`, `koe=laaja` (kaksi peräkkäistä kelausta), `mittaus=pois`.
  - Pakatut tiedostot ladataan kerran, ja WAV-referenssit vasta niiden jälkeen.
  - Latauksen ajoitukset kirjataan raporttiin, ja ”Soita käytössä … s” näkyy sivulla.
- **Työkalut:** `tools/kaksiraitatesti-pakkaus.mts` ja `tests/e2e/kaksiraitatesti-latausmittaus.spec.ts` (`KAKSIRAITA_LATAUSMITTAUS=1`).
- **Tulokset:** README, osio ”Pakatut toistotiedostot”.
  - **Kohdistus:** koodaus ei siirrä raitoja (≤ 0,03 näytettä).
  - **Soita käytössä H2:n nopeudella:** WAV 11,3 s, pakattu 0–120 s 1,6 s, koko kappale 2,9–3,0 s.
  - **Simulaattorin laaja koe:** WAV, AAC ja MP3 identtiset: renderöity − media 0,0 ms ja raitojen ero ≤ 21,3 ms.
  - **Muistihuiput:** WAV 0–120 s 195 + 124 Mt, AAC koko kappale 96 + 66 Mt.

## 4. AAC vai MP3

Molempien tahdistus on simulaattorissa identtinen WAVin kanssa. **AAC-LC 192 kbit/s valittiin** jatkoehdokkaaksi, koska:
- samalla bittinopeudella sen jäännöskohina on 3–6 dB pienempi (SNR 34,5/29,3 vs. 27,9/26,2 dB)
- Safari poistaa sen viiveen myös kelauksen jälkeen
- koko on käytännössä sama kuin MP3:n.

MP3 CBR 192 on varavaihtoehto: Chromiumissa sen yhteinen poikkeama on pienempi (+23 vs. +45 ms kelauksen jälkeen), ja se toimii laajimmin eri selaimissa.

## 5. H3: seuraava fyysinen testi (ei vielä tehty)

URL: `https://test-kaksiraita-pakattu.musiikin-kartta.pages.dev/kaksiraitatesti?lahde=aac&pituus=koko&moottori=uusi&mittausvali=2000`

Sama iPhone, Safari, Bluetooth-kuulokkeet ja Wi-Fi kuin H2:ssa.

1. Avaa uutena latauksena. Sivulla pitää lukea **Tila: AAC 192 kbit/s (koko kappale, muistista) · uusi moottori (korjausehdokas)**.
2. Kirjaa ”Soita käytössä … s sivun avaamisesta”. Odota, että mittausreferenssit ovat valmiina.
3. Soita. Noin kohdassa 0:30 kuulokuva ja arvio äänenlaadusta.
4. Siirry kohtaan 1:00, noin 20 s, kuulokuva.
5. Tauko 3 s → Soita, noin 20 s, kuulokuva.
6. Siirry kohtaan 1:00 kaksi kertaa nopeasti, noin 15 s, kuulokuva.
7. Tauko → Valitse raportti → kopioi koko teksti. Kerro samalla Soita-aika ja huomiot äänenlaadusta.

**Hyväksytty, kun kaikki nämä toteutuvat:**
- **A, lataus:** Soita käytössä ≤ 3,0 s, ei latausvirheitä.
- **B, toisto:**
  - Kelaus onnistuu.
  - Jatko pysäytyskohdasta ±0,3 s.
  - Kaksoiskelaus päätyy kohtaan 1:00.
  - Raportissa ei ole latausvirheitä, kelauksen aikakatkaisuja eikä verkkolatauksia kelauksissa.
- **C, mittaus:**
  - Jokaisessa neljässä jaksossa (alku 0:15–0:30, kelaus, jatko, kaksoiskelaus) on vähintään yksi luotettava mittaus.
  - Jokaisessa luotettavassa mittauksessa |renderöity − media| ≤ 5 ms ja |renderöity| ≤ 25 ms.
- **D, kuulokuva:** ”tahdissa” kaikissa jaksoissa, eikä äänenlaadussa ole huomautettavaa.

**Tulkinta:**
- **Vain A ylittyy:** kokeillaan 160 kbit/s tai osissa latausta erillisenä suunnitelmana.
- **C ei toteudu:** varavaihtoehto on MP3 CBR.
- **C toteutuu, D ei:** jäännösero kuuluu. Seuraava askel on erillinen arkkitehtuuriehdotus (`AudioBufferSourceNode`).

## 6. Ratkaisemattomat

- **Noin 425 ms:n yhteinen poikkeama** äänen ja `currentTime`n välillä `load()`:n ja kelauksen jälkeen.

  | Mittaus | Poikkeama |
  | --- | --- |
  | Laite (H2) | noin 425 ms |
  | Simulaattori, verkkotoisto | −420 ms |
  | Simulaattori, muistitoisto | −276 ms |
  | Alussa | noin −20 ms |

  Poikkeama on molemmilla raidoilla sama, joten raitojen tahti ei kärsi. Sointunäyttö ja harjoituksen aikajana kärsivät. Mittarin laskentaa ei ole muutettu, ja asia on avoin.
- **Käynnistyksen mittauspuute:** intro (0–14 s) on pelkkää kitaraa, joten ensimmäinen mittaus 3 s:n kohdalla on aina epävarma. Alkujakson luotettavat mittaukset tulevat 15–30 s:n kohdalla, ja ne näkyvät jatkuva-riveinä. Taulukon käynnistys-rivi on siksi tyhjä. Jaksoittainen yhteenveto puuttuu.
- **Jäännösero:** käynnistyksessä raitojen väliin jää 0 / ±10,7 / ±21,3 ms (512 kehyksen jaksotus). Sen säätämiseen ei löytynyt keinoa.
- **Muisti:**
  - Testisivu kerää tavut JavaScriptissä ennen Blobia, joten latauksen huippu on noin 2,9 × data. Täyspitkä WAV ei ole käytännöllinen (arvio noin 320 + 190 Mt).
  - Mittausreferenssit lisäävät laitteella 46 Mt.
  - Laitteen absoluuttisia muistilukuja ei ole mitattu.
- **Laite ei vielä vahvistanut:** pakattujen tiedostojen toimintaa, Soita-aikaa koko kappaleella eikä `load()`-polun toimivuutta muulla kuin WAV:lla.
- **Tuotannon äänifunktio** lukee koko tiedoston jokaista Range-pyyntöä varten. Tuotannon 5,6 Mt:n MP3:t: 40/40 onnistui, testi-MP3: 11/12. Funktiota ei ole muutettu.

## 7. Testien epävarmuudet ja regressioriskit

- **PR #100:n mittausspeksit ovat kuormaherkkiä** (`kaksiraitatesti.spec.ts`). Raskaassa rinnakkaisajossa yksittäinen testi jää ilman luotettavaa mittausta (myös 95622ef: 53/54). Aja raskaat speksit erikseen, ja vertaa edelliseen commitiin ennen rajojen muuttamista.
- **Lataus- ja pakattu-speksit** ajetaan sarjassa (46 Mt per sivu).
- **Chromium ei toista iOS:n puskurivirhettä.** Selaintestit todentavat ohjauslogiikan ja mittauksen, eivät WebKitiä.
- **Simulaattori ei korvaa laitetta.** Muistiluvut ovat suhteellisia.
- **Symlinkitetty `node_modules`** saa `npm run check`in muuttamaan tuotannon `app.js.map`-tiedostot (kitaraharjoittelija, Riffikaiku). Käytä uusissa työpuissa `npm ci`:tä.
- **Jos ehdokas viedään tuotantoon:**
  - Muistitoisto eroaa nykyisestä verkkotoistosta.
  - Raitojen kytkentä kesken soiton, looppi ja versionvaihto puuttuvat uudesta moottorista.
  - Chromiumissa AAC:n yhteinen poikkeama on +45 ms kelauksen jälkeen.
  - Kolmen raidan soitinta ei ole mitattu tällä tavalla.

## 8. Työpuut, tiedostot ja sitomattomat muutokset

- **Työpuut** (`/Users/ristotoivanen/src/Musiikin-kartta/worktrees/`):
  - `kaksiraita-pakattu` (#106)
  - `kaksiraita-tahdistus` (#101)
  - `kaksiraita-synkronointitesti` (#100)
  - `kappaleharjoittelija-ios-audiocontext-palautus` (#92)
  - `kappaleharjoittelija-ios-audio-diagnostiikka` (#90).
  
  Kaikki ovat puhtaita. Ainoa poikkeus on #90:n pushaamaton commit 7f91d77.
- **#106:ssa muuttuneet:**
  - `harjoittelija/kaksiraitatesti/KaksiraitaTesti.tsx`, `lataus.ts`, `README.md` ja tämä tiedosto
  - `kaksiraitatesti.html` ja `assets/kaksiraitatesti/app.js(.map)`
  - `assets/audio/kaksiraitatesti/`: 8 uutta M4A- ja MP3-tiedostoa sekä README
  - `tests/kaksiraitatesti-lataus.test.ts`, `tests/e2e/kaksiraitatesti-pakattu.spec.ts` ja `tests/e2e/kaksiraitatesti-latausmittaus.spec.ts`
  - `tools/kaksiraitatesti-pakkaus.mts`.
- **#101:ssä:** `lataus.ts`, `mittaus.ts`, `KaksiraitaTesti.tsx`, README, e2e-speksit `-moottori` ja `-lataus` sekä yksikkötesti `-lataus`.
- **Väliaikaiset välineet istunnon scratchpadissa** (häviävät):
  - simulaattorivaljas `valjas6/server.mjs`: Range-palvelin, raportin automaattinen POST, pyyntöloki ja vikojen injektointi `/__vika?tila=503|range503|viive&tiedosto=&p=&ms=`
  - `koe.py` (jaksoyhteenveto)
  - `muisti.sh` (`footprint` simulaattorin WebKit-prosesseille)
  - `avaa.sh`.
  
  Ne on helppo kirjoittaa uudelleen README:n kuvauksen pohjalta.
- **Kone:** Homebrew'lla on asennettu `lame` ja `mpg123` (käyttäjän luvalla).

## 9. Seuraava istunto

**Saa:**
- tarkistaa PR:ien tilat
- arvioida H3:n raportin, kun käyttäjä toimittaa sen
- kirjata tulokset #106:n README:hen ja PR-kuvaukseen
- tehdä käyttäjän pyytämiä rajattuja muutoksia `test/kaksiraita-pakattu`-haaraan omassa työpuussaan
- kirjata H2:n tulokset #101:n kuvaukseen, jos käyttäjä pyytää.

**Ei saa:**
- yhdistää PR:iä tai julkaista betaan tai tuotantoon
- muuttaa #90:n, #92:n tai #100:n haaroja tai #101:tä ilman pyyntöä
- pushata 7f91d77:ää ilman lupaa
- koskea Ensikeikkoihin, Riffikaikuun, Am-vampiin, tuotannon kappalesoittimeen, `StemAligner`iin tai tuotannon äänifunktioon
- pienentää 120 ms:n toleranssia
- muuttaa 425 ms:n poikkeaman mittarin laskentaa
- vaihtaa toistoarkkitehtuuria (`AudioBufferSourceNode`, AudioWorklet) ilman erillistä hyväksyntää
- julistaa tahdistusta korjatuksi ennen fyysisen iPhonen hyväksyntää
- pyytää uutta laitetestiä ennen kuin automaattiset kokeet ovat valmiit.
