# PR #178 – beta-yhteensopivuus ja regressiotestaus 27.11.2026

## Testatut commitit

| Mikä | Commit |
|---|---|
| Sävelkorva v2.3 (omistajan testaama) | `6f17abf` |
| beta | `07d8126` (PR #209:n yhdistäminen) |
| Yhdistetty tila (testattu puu) | merge-commit `91e7cb2` |
| Puhdas vertailukohta | `origin/beta` `07d8126`, erillinen väliaikainen työpuu |

Yhdistämisen jälkeen tähän commitiin on lisätty vain dokumentaatiota.
Ainoa tekstiristiriita: `tools/oppimiskartta/rakenna.py` (Sävelkorvan ja PR #205:n Sävelnimien moduulilataukset; molemmat säilytetty). Yhdistetty puu eroaa betasta vain Sävelkorvan muutoksissa. `assets/melodia-ydinopinnot.js` ja `.css`, harjoitusten sisällöt ja testit ovat samat kuin `6f17abf`:ssä.

## Ympäristö

macOS 27.2.1, Node 22, Playwright 1.56.1, WebKit 2215. Chromium-ajot paikallisella Google Chromella (158) `playwright.config.ts`:n mukaisesti. Äänitestit todentavat Web Audio -ajoituksen, eivät kuultua ääntä.

## Tulokset yhdistetyllä puulla

| Ajo | Tulos |
|---|---|
| `npm run check` | läpi, 51 tiedostoa, 883 testiä |
| `rakenna.py --tarkista` | läpi |
| `tools/linkit/tarkista-linkit.py` | 126 sivua, 3075 viittausta, 0 ongelmaa |
| `tests/issue-117-pdf-sources.py`, `tests/issue-151-pdf.py --source-only` | läpi |
| Koko `npx playwright test` (desktop + phone) | 1383 läpi, **8 epäonnistui**, 53 ohitettu |
| `playwright.savelkorva-116-webkit.config.ts` | 75 läpi, 3 ohitettu |
| `playwright.ydinopinnot-webkit.config.ts` | 40 läpi |
| `playwright.issue-163-webkit.config.ts` | 14 läpi |
| `playwright.musapelit-142-webkit.config.ts` (koko testisarja) | 1357 läpi, **33 epäonnistui**, 54 ohitettu |
| `intervallimuisti.spec.ts`, `playwright.intervallimuisti-143.config.ts` | 160 läpi, 2 epäonnistui (sama `:671` kuin alla), 6 ohitettu |

Intervallimuisti-143-kokoonpanon koko testisarjan ajo keskeytettiin tarpeettomana; ajettiin vain sen CI:ssäkin käytetty testitiedosto.

## Chromium: 8 epäonnistumista

| Testi (desktop ja phone) | Puhdas beta | Ryhmä |
|---|---|---|
| `aihesivut.spec.ts:123` Kitaran perusteet, askeleet ja resurssit | epäonnistui molemmissa | betassa ennestään |
| `aihesivut.spec.ts:435` ristiinlinkitys | epäonnistui molemmissa | betassa ennestään |
| `otelautaopas-beta.spec.ts:31` Soittopakin linkit | epäonnistui molemmissa | betassa ennestään |
| `practice.spec.ts:89` Opettele näyttää oikean kohdan | 36/60 toistoa epäonnistui | betassa ennestään, satunnainen |

`practice.spec.ts:89`: kaikissa 36 epäonnistumisessa kysymys osui vapaaseen kieleen. Kohdepainikkeen tekstiin kuuluu silloin kielen nimilappu (esim. ”4 · DD”), kun testi odottaa pelkkää sävelnimeä.

## WebKit: 33 epäonnistumista ryhmiteltyinä

Vertailu: samat testit samalla koneella, WebKitillä ja kokoonpanolla (`musapelit-142`), kolme toistoa ensin puhtaalla betalla ja sitten yhdistetyllä puulla. Luvut ovat epäonnistumisia / toistoja.

### PR #178:n aiheuttamat uudet regressiot: 0

Yksikään testi ei epäonnistunut toistuvasti vain yhdistetyllä puulla.

### Betassa ennestään, toistuu 3/3 molemmissa (11)

| Testi | Projekti | Huomio |
|---|---|---|
| `aihesivut.spec.ts:123` | desktop, phone | sama kuin Chromiumissa |
| `aihesivut.spec.ts:435` | desktop, phone | sama kuin Chromiumissa |
| `otelautaopas-beta.spec.ts:31` | desktop, phone | sama kuin Chromiumissa |
| `otelautaopas-beta.spec.ts:73` | desktop | puhelinprojekti läpäisi laajassa ajossa mutta epäonnistui vertailussa 3/3 molemmissa puissa; syy selvittämättä |
| `learning-paths.spec.ts:518` | phone | juurisyy tutkimatta |
| `song-volume-scales.spec.ts:22` | desktop | juurisyy tutkimatta |
| `visualizer.spec.ts:347` | desktop, phone | juurisyy tutkimatta |

### Testiympäristöstä, todennettu (15)

| Testi | Projekti | Todennus |
|---|---|---|
| `navigation.spec.ts:68`, `:290` | desktop | macOS-WebKitin Tab ohittaa painikkeet ja linkit |
| `osiot.spec.ts:191`, `:385`, `:418` | desktop | sama |
| `riffikaiku.spec.ts:164` | desktop, phone | sama |
| `intervallimuisti.spec.ts:671` | desktop, phone | sama |
| `song-d2-sovellusvaihto.spec.ts:97` | desktop, phone | testi käyttää CDP-istuntoa, jota on vain Chromiumissa |
| `song-d2.spec.ts:149`, `:187` | desktop, phone | sama |

Fokustestit: väliaikaisessa betakopiossa Tab-painallukset vaihdettiin Alt+Tab-painalluksiksi; kaikki yhdeksän aiemmin epäonnistunutta läpäisivät (9 läpi, 5 ohitettu). Repositorion testejä ei muutettu.

### Epävakaat (5)

| Testi | Projekti | Puhdas beta | Yhdistetty |
|---|---|---|---|
| `practice.spec.ts:89` | phone | 1/3 (desktop 2/3) | 3/3 |
| `practice.spec.ts:617` | desktop | 2/3 | 3/3 |
| `practice.spec.ts:617` | phone | 3/3 | 2/3 |
| `practice.spec.ts:690` | phone | 0/3 (desktop 1/3) | 0/3 |
| `practice.spec.ts:716` | phone | 0/3 | 0/3 |

`:89` riippuu satunnaisesta kysymyksestä (ks. yllä). `:617` epäonnistuu valtaosin molemmissa. `:690` ja `:716` (simuloitu mikrofonisignaali) epäonnistuivat vain kuormitetussa laajassa ajossa tai satunnaisesti; juurisyytä ei ole tutkittu. Harjoittelijan paketti on sama kuin betassa.

### Epäselvät (2)

| Testi | Projekti | Havainto |
|---|---|---|
| `ensikeikka-toinen-ilta.spec.ts:294` | desktop, phone | `page.reload: Page crashed`, 3/3 molemmissa puissa. Ei johdu PR:stä; onko kyse sovelluksesta vai selainmoottorista, on selvittämättä. |

## Epävarmuudet

- ”Betassa ennestään” tarkoittaa, että sama epäonnistuminen toistuu puhtaalla betalla. Useimpien juurisyytä ei ole tutkittu.
- Vertailu tehtiin yhdellä koneella. Puhtaalla betalla ei ajettu koko testisarjaa, vain epäonnistuneet testit.
- Chromium-vertailu puhtaalla betalla tehtiin portissa 8766 `python -m http.server` -palvelimella; WebKit-vertailu projektin omalla palvelimella.

## Suositus erilliseksi issueksi (ei luotu)

**Otsikko:** beta: ennestään epäonnistuvat E2E-testit (Chromium ja macOS-WebKit)

1. Päivitä vanhentuneet odotukset tai korjaa sisältö: `aihesivut:123`, `:435`, `otelautaopas-beta:31`, `:73`.
2. Korjaa `practice:89` vapaan kielen tapaukselle.
3. Tutki `learning-paths:518`, `song-volume-scales:22`, `visualizer:347`, `ensikeikka-toinen-ilta:294`, `practice:617/690/716`.
4. Tee fokustestit ja CDP-testit WebKit-yhteensopiviksi (Alt+Tab macOS:ssä, ohitus ilman CDP:tä).

## Omistajan käyttäjätesti

Omistaja on testannut version 2.3 (`6f17abf`) ja todennut harjoitusten toimivan odotetusti (kirjattu 27.11.2026). Testilaitetta, selainta ja yksittäisiä testikohtia ei ole ilmoitettu.

## Todentamatta

- Xcode-simulaattori versiolla 2.3.
- Fyysisellä iPhonella erikseen kirjattuina: kaksoisnapautuszoom, K7:n lukituksen tuntuma, melodian ja matalan G:n balanssi, 02:n tempo ja kesto.
- Melodiaparien 4 ja 8 erillinen kuunteluarvio.
- VoiceOver ja muut ruudunlukijat.
- Oikea kitara harjoituksessa 03 (kuuluvuusraja, oktaavipalaute).
