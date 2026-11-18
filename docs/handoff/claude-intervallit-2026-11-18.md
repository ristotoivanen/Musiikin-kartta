# Intervallikehityksen luovutus 18.11.2026 (Claude)

## TEHTÄVÄN LUOVUTUS PÄÄKESKUSTELUUN

- **Tehtävä:** Sävelet ja intervallit -oppitunnin intervallikokonaisuuden viimeistely, vaiheittainen oppiminen ja H/B-linjaus.
- **Tila:** ODOTTAA PÄÄTÖSTÄ. Koodaus on pysäytetty omistajan pyynnöstä. Avoimet PR:t odottavat yhdistämispäätöstä.
- **Lähtökohta:** Codexin luovutus [`docs/handoff/codex-to-claude-2026-11-18.md` @ `1d22eb0`](https://github.com/ristotoivanen/Musiikin-kartta/blob/1d22eb0b9a644bc6eebebfc85421c7b20d4c35cd/docs/handoff/codex-to-claude-2026-11-18.md), issuet [#103](https://github.com/ristotoivanen/Musiikin-kartta/issues/103), [#94](https://github.com/ristotoivanen/Musiikin-kartta/issues/94) ja [#54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54), suunnitelma [PR #93](https://github.com/ristotoivanen/Musiikin-kartta/pull/93) sekä omistajan päätökset tässä keskustelussa.
- **Tarkistettu beta:** `6562e141cd6f6beeb9dd1fb02134e276a2983ab8` (Merge PR #95). Betan viimeisin `Build beta trainer assets` -ajo tälle commitille onnistui (ajot 34 ja 35).

Tähän dokumenttiin on eroteltu GitHubista todennetut tiedot, Clauden omat testiajot ja omat arviot. Kaikki testiajot on tehty Clauden pilviympäristössä, Linuxissa ja vain Chromiumilla.

---

## 1. Toteutetut muutokset ja tärkeimmät päätökset

### Jo betassa (yhdistetty ennen tätä luovutusta)

| PR | Sisältö | Tekijä |
| --- | --- | --- |
| [#104](https://github.com/ristotoivanen/Musiikin-kartta/pull/104) | Intervallitaulukon sanakatkot 320 px / 200 %, paikallinen vaakavieritys ja saavutettava vieritysalue. Luovutusdokumentti poistettiin lopullisesta sisällöstä commitilla `a05b73b`, ja alkuperäinen `1d22eb0` säilyi historiassa. | Codex, poistocommit Claude |
| [#105](https://github.com/ristotoivanen/Musiikin-kartta/pull/105) | Kansalaisopistoviittaus poistettu. Otsikko on nyt *Kromaattinen harjoitus A:sta A:han*, ja otelauta on ennallaan (E6 5–8, A5 4–7, D4 3–7 ja vertailu A5 0–12). | Claude, commit `3b2ec6a` |
| [#95](https://github.com/ristotoivanen/Musiikin-kartta/pull/95) | Intervallien teoria ja 29 kysymyksen muistiharjoitus, sisältää #104:n ja #105:n. | Codex. Yhdistetty betaan, `6562e14` |

Clauden paikallinen yhdistelmäregressio ennusti betan puun `cbbfa4b`. Yhdistetyn betan puu on sama `cbbfa4be5ba2b8a4703c702a1c2f1306e8f331ba`.

### Avoin [PR #109](https://github.com/ristotoivanen/Musiikin-kartta/pull/109): vaiheittainen oppiminen

Intervalliosuuden järjestys on nyt:

1. teoria
2. **opettelukortit**
3. **tuettu monivalinta**
4. avattava 13 välin taulukko
5. kromaattinen A–A-harjoitus
6. Terssi muuttaa soinnun ja Siirrä yhtä sormea
7. **29 kysymyksen kirjoitettava muistamistesti viimeisenä**

Osioiden välillä voi liikkua vapaasti, eikä mitään tallenneta.

**Opettelukortit**
- Yksi kortti kerrallaan. Ensin viisi ankkuria (0, 3, 4, 7 ja 12 pa), sitten parit 1–2, 5–6, 8–9 ja 10–11.
- Kortissa on nimi, lyhenne, puolisävelaskeleet, sävelpari A:sta, 13 ruudun etäisyyskuva ja selitys.
- Muistittelutila (`aria-pressed`) piilottaa puolisävelaskeleet, sävelparin, kuvan, selityksen ja tritonuksen lisänimet, kunnes vastaus näytetään.

**Tuettu monivalinta**
- 26 kysymystä: kaikki 13 väliä kumpaankin suuntaan, ankkurit ensin.
- Neljä vaihtoehtoa: oikea vastaus ja kolme lähintä väliä. Näyttöjärjestys arvotaan kerran kierrosta kohden.
- Tarkistus tapahtuu vain *Tarkista*-painikkeesta. Palaute selittää vastauksen, ja oikea vaihtoehto merkitään.
- Ei aikarajaa eikä tallennusta.

**Vihjeet** (`hints` tiedostossa `assets/intervallimuisti.js`)
- Jokaisella vihjeellä on `viitteet`: aiemmin opitut välit, jotka vihjeen teksti nimeää.
- Viite ei ole koskaan vastausvaihtoehto.
- Vihjeissä ei ole numeroita eikä kysytyn välin sävelparia. Nimikysymyksen vihje ei nimeä kysyttyä väliä.
- Testit tunnistavat nimetyt välit vihjeen *tekstistä*, myös taivutusmuodot.

**Kaksoisnapsautussuoja**
- Kun testi siirtyi oppitunnin loppuun, kaksoisnapsautuksen toinen napsautus osui *Seuraava kysymys* -painikkeen tilalle tulevaan sisältöön. Se merkitsi luvun tehdyksi tai siirtyi sivulta.
- Korjaus ohittaa hetken ajan napsautukset, joiden `event.detail > 1`. Suoja on dokumenttitason capture-kuuntelija tiedostossa `intervallimuisti.js`.

**Muistamistesti:** kysymykset, hyväksytyt vastausmuodot, selitykset, pisteytys, uudelleenaloitus ja Enter-toiston esto ovat ennallaan. Vain sijainti ja johdantolause muuttuivat.

**Katselmointikorjaukset (`99eaf2f`):**
- monivalinnan järjestyksen arvonta
- vihjeiden `viite` korvattu `viitteet`-kentällä, joka vastaa tekstiä (esim. pienen sekunnin viite on pieni terssi, ja kvintin vihje ei laske vaihtoehtoina olevista tersseistä)
- tritonuksen lisänimet piiloon muistittelutilassa.

### Avoin [PR #110](https://github.com/ristotoivanen/Musiikin-kartta/pull/110): H/B-linjaus (stacked PR #109:n päälle)

- **Sävelet ja intervallit:** H-maininnat ja historialinkki poistettu. Huomautuslaatikon tilalla on yksi kappale kansainvälisistä nimistä ja B/B♭-erosta. `id="h-savelnimi"` säilyy kappaleessa.
- **Kitaran perusteet:** B/H-selitys lähteineen (Apel ja Kwon) oli jo valmiina. Lisätty tunniste `#b-ja-h` ja linkki *Lisälukemista: Mistä H-sävelen nimi tuli?*.
- **Historiallinen artikkeli:** sisältö ennallaan. Paluulinkki vie Kitaran perusteiden selitykseen.
- **`book/index.html`:** H-artikkelin linkki poistettu Lisämateriaaleista (`eed5e7e`).
- **`assets/oppimiskartta.js`:** suora linkki suljetun `<details>`-osion sisältöön avaa osion (`eed5e7e`). Chromium jätti `#b-ja-h`-osion muuten suljetuksi.

### Tärkeimmät omistajan päätökset tässä keskustelussa

1. Sanakatkokorjaus #104 hyväksyttiin. Luovutusdokumentti poistettiin PR:n lopullisesta sisällöstä erillisellä commitilla, ilman historian uudelleenkirjoitusta.
2. Kosketuspyyhkäisyn automaattitesti jätettiin avoimeksi, ympäristöriippuvaiseksi havainnoksi. Syytä ei ole todistettu.
3. Kansalaisopistoviittaus poistettiin hyväksytyllä tekstillä (#105).
4. Intervallien vaiheittainen oppiminen toteutettiin rajatusti (#109). 29 kysymyksen testi on viimeisenä ja muuttumaton.
5. H/B-linjaus: sivustolla käytetään kansainvälisiä nimiä. H:n selitys ja historia ovat vain Kitaran perusteissa. Historiallinen artikkeli säilytetään lisälukemistona. `#h-savelnimi` säilyy. Sanaston H-otsikko jää. PDF päivitetään erikseen.

---

## 2. PR:t, haarat, commitit ja yhdistämisjärjestys

GitHubista todennettu tila 18.11.2026 luovutushetkellä:

| PR | Haara | Kohde | HEAD | Commitit | Tila |
| --- | --- | --- | --- | --- | --- |
| [#109](https://github.com/ristotoivanen/Musiikin-kartta/pull/109) | `claude/intervallit-vaiheittainen-oppiminen` | `beta` | `99eaf2f005860101758d52cc2ff190cd57c8db15` | `235b902`, `99eaf2f` | Draft. Cloudflare Pages onnistui `99eaf2f`:lle. Ei katselmointeja GitHubissa. Omistaja hyväksyi kolme korjausta teknisesti. |
| [#110](https://github.com/ristotoivanen/Musiikin-kartta/pull/110) | `claude/intervallit-hb-selitys` | `claude/intervallit-vaiheittainen-oppiminen` | `eed5e7eebe42a2eb8bc7b4424315af2469ee4978` | `71ffe07`, `eed5e7e` | Draft. Cloudflare Pages onnistui `eed5e7e`:lle. Ei katselmointeja GitHubissa. |

- #109 perustuu suoraan nykyiseen betaan (`6562e14`), ja #110 suoraan #109:n HEADiin. Molemmat ovat nopeasti eteenpäin kelattavia.
- Puiden tiivisteet: `99eaf2f` → `ae759f38…`, `eed5e7e` → `bd5be25c…`.

**Suositeltu yhdistämisjärjestys:**
1. PR #110 → `claude/intervallit-vaiheittainen-oppiminen` merge-commitilla. Tuloksena olevan puun pitää olla `bd5be25c57c3d4812d7678dc0fe82450b56c4c1d`.
2. Jos beta on muuttunut `6562e14`:stä, tee ensin yhdistelmäregressio uutta betaa vasten (ks. kohta 6, PR #111).
3. PR #109 → `beta` merge-commitilla, omistajan erillisellä hyväksynnällä.

Älä yhdistä #109:ää betaan ennen #110:tä. Muuten H/B-linjaus jää betasta pois. #110:n kohdetta ei tarvitse vaihtaa, jos järjestys on tämä.

**Yhdistämisen sivuvaikutus:** beta-merge käynnistää GitHub Actions -työnkulun `build-beta-trainer.yml`. Se ajaa lintin, yksikkötestit, buildin ja osan e2e-testeistä, ja voi pushata käännetyt harjoittelijatiedostot betaan omana committinaan. Lisäksi Cloudflare julkaisee beta-haaran. Beta-merge on siis käytännössä betaversion julkaisu.

---

## 3. Testitulokset ja avoimet havainnot

Clauden omat ajot:

| HEAD | Ajo | Tulos |
| --- | --- | --- |
| `eed5e7e` (#110) | `VITEST_MAX_WORKERS=2 npm run check` | Lint, 605/605 yksikkötestiä (37 tiedostoa), TypeScript ja build läpäisivät |
| `eed5e7e` | `python3 tools/oppimiskartta/rakenna.py --tarkista` | Läpäisi |
| `eed5e7e` | `python3 tools/linkit/tarkista-linkit.py` | 101 sivua, 2 368 viittausta, 0 ongelmaa |
| `eed5e7e` | `node tools/versioi-tyylit.mjs --tarkista` | Läpäisi |
| `eed5e7e` | Koko e2e-sarja, 724 testiä, desktop + phone | 686 läpäisi, 36 ohitettiin, 2 epäonnistui |
| `99eaf2f` (#109) | `npm run check` | 604/604 |
| `99eaf2f` | e2e `intervallimuisti`, `aihesivut`, `beta-regressio-audit`, `lukumerkinnat` | 228 läpäisi, 1 ohitettiin, 1 epäonnistui |
| `99eaf2f` | Monivalinta- ja vihjetestit, `--repeat-each=3` | 60/60 |
| `235b902` (#109) | Koko e2e-sarja | 682 läpäisi, 36 ohitettiin, 2 epäonnistui |

**Avoimet testihavainnot:**
1. **`intervallimuisti.spec.ts` › kosketuspyyhkäisy vierittää taulukkoa (phone).**
   - Epäonnistuu johdonmukaisesti Clauden ympäristössä ja läpäisi Codexin ympäristössä.
   - Testi käyttää CDP-kutsua `Input.synthesizeScrollGesture`. Clauden ympäristössä Chromium on 1243, kun taas repo on kiinnitetty Playwright 1.56.1:een (Chromium 1194). Sama kutsu ei vierittänyt edes sivua pystysuunnassa.
   - Erillinen kosketustapahtumilla tehty veto vieritti taulukkoaluetta.
   - **Syytä ei ole todistettu lopullisesti.** Omistajan päätöksellä uutta kehityskierrosta ei aloitettu.
2. **`responsive.spec.ts:259` › pehmeä vieritys: soiva sävel ei jää kokonaan piiloon (desktop, kitaraharjoittelija).**
   - Epäonnistui samassa ympäristössä myös puhtaalla betalla ennen tätä työtä, eristettynä kolme kertaa kolmesta.
   - Intervallityö ei koske tiedostoon. Syy on selvittämättä.
3. **Ei testattu:** WebKit, fyysinen iPhone tai Android ja VoiceOver. Safarin käytös `<details>`-ankkurin kanssa on varmistamatta, mutta korjaus avaa osion JavaScriptillä.
4. **Kapea näkymä:** 320 px / 200 % näkymässä Oppimiskartan sivun `overflow-wrap: anywhere` (`assets/oppi.css`) katkaisee pitkiä sanoja kapeissa huomautuslaatikoissa, myös uusissa otsikoissa. Sivu ei vieri vaakaan.
5. **QA-01:** kirjan osa 2 on edelleen yli 320 px leveä asteikkotaulukon vuoksi. Clauden ympäristössä leveys oli 429 px näkymässä 320 px / 200 %. Intervallityö ei kasvata leveyttä, ja testi tarkistaa sen.
6. **Vihjeet:** testit estävät suoran paljastamisen ja nimeämällä poissulkemisen. Pieni/suuri-pareissa oppija voi silti joskus arvata sanan perusteella. Vihjeiden pedagoginen laatu kannattaa arvioida lukemalla.

---

## 4. H/B-linjauksen toteutuminen ja PDF

| Kohde | Tila |
| --- | --- |
| Sävelet ja intervallit (kirja ja Oppimiskartta) | H-maininnat poistettu. Lyhyt B/B♭-kappale, `#h-savelnimi` säilyy |
| Kitaran perusteet (`oppi/kitara/index.html`, lähde `pikakertaus.html`) | B/H-taulukko, historia ja lähteet. Lisätty `#b-ja-h` ja linkki lisälukemistoon |
| `book/h-savelnimen-alkupera.html` | Säilytetty. Paluulinkki vie Kitaran perusteisiin |
| `book/index.html` Lisämateriaalit | H-artikkelin linkki poistettu |
| `book/sanasto.html` | H-aakkosotsikko säilytetty (ryhmittelee H-alkuiset käsitteet) |
| Harjoittelija, Riffikaiku ja Ensikeikka | Lähdekoodista ei löytynyt H-nimeä |
| **`pdf/musiikin-kartta.pdf`** | **Päivitettävä erikseen.** Sisältää edelleen vanhan H/B-huomautuksen. PDF:ää ei ole rakennettu uudelleen 12.11. jälkeen, joten siitä puuttuu myös #95:n ja #109:n sisältö. `tools/pdf/rakenna-pdf.py` lisää H-artikkelin liitteeksi (`APPENDICES`), mitä ei muutettu. Päätettävä, säilyykö artikkeli PDF:n liitteenä. |

---

## 5. Riippuvuudet

### Generointi
- **Sävelet ja intervallit:** lähde on `book/osa-2.html`. Oppimiskartan sivu `oppi/savelnimet/savelet-ja-intervallit.html` generoidaan komennolla `python3 tools/oppimiskartta/rakenna.py`, eikä sitä saa muokata käsin. Tarkistus: `rakenna.py --tarkista`.
- **Generaattori:**
  - muuttaa `h3`-otsikot `h2`:ksi
  - korvaa `aside.practice[data-oppisisalto]`-harjoituksen linkillä omalle sivulleen, esimerkiksi *Harjoitus · Siirrä yhtä sormea*
  - lisää `intervallimuisti.css`:n ja `.js`:n vain, jos sivulla on `data-intervallimuisti`.
- **Kitaran perusteet:** lähde `tools/oppimiskartta/sisallot/kitara/pikakertaus.html`. Linkit kirjoitetaan lähdetiedoston sijainnista käsin (`../../../../book/…`), ja generaattori laskee ne uudelleen.
- **Versiotunnisteet:**
  - `book/osa-2.html`: CSS:n `?v=` päivittyy komennolla `node tools/versioi-tyylit.mjs`. JS:n `?v=` (`intervallimuisti.js`) on päivitettävä käsin sha256-tiivisteen 10 ensimmäisellä merkillä.
  - Oppimiskartan sivut: generaattori laskee tiivisteet itse.
  - `tests/intervallimuisti.test.ts` tarkistaa, että tiivisteet vastaavat tiedostoja.
  - `edistyminen.js` on versioitu 82 sivulla, `oppimiskartta.js` ei ole versioitu.
- **Pitkät komennot:** `npm run build` ajaa myös `versioi-tyylit`in ja Oppimiskartan generoinnin.

### Navigaatio
- Oppimiskartan sivulla sarkainjärjestys kulkee taulukon vieritysalueen jälkeen *Siirrä yhtä sormea* -linkin kautta muistamistestiin. Testit olettavat tämän järjestyksen.
- Kaksoisnapsautussuoja (`intervallimuisti.js`) on dokumenttitason capture-kuuntelija. Se vaikuttaa vain napsautuksiin, joiden `detail > 1`, ja vain 600 ms katoavan painikkeen napsautuksen jälkeen.
- `oppimiskartta.js` avaa `<details>`-osion, kun osoitteen ankkuri osoittaa osioon tai sen sisälle. Skripti on käytössä 98 sivulla, myös kirjan osissa ja otelautaharjoittelijassa. Ilman ankkuria osiot pysyvät suljettuina.

### Syvälinkit
- Säilyneet: `#savelet-ja-intervallit` ja `#h-savelnimi`, jälkimmäinen nyt `<p>`-elementissä.
- Toimivat: `osa-2.html?aihe=aihe-nuotit#h-savelnimi` sekä vanhan osajaon `osa-1.html#h-savelnimi`, jonka `edistyminen.js` ohjaa osaan 2.
- `tools/linkit/tarkista-linkit.py` vaatii, että osasivujen tunnisteet vastaavat `edistyminen.js`:n `PARTS`-ankkureita täsmälleen. Siksi osa-2:een ei lisätty uusia staattisia `id`-tunnisteita. Vihjeen tunniste annetaan JS:ssä.
- Uusi ankkuri `#b-ja-h` on Oppimiskartan sivulla, joka ei kuulu `PARTS`-tarkistukseen.

### Etenemistiedot
- `localStorage`-avaimet ovat ennallaan: `musiikin-kartta:luvut`, `musiikin-kartta:tehdyt`, `musiikin-kartta:harjoittelu` ja `musiikin-kartta:aihenakyma`.
- Opettelukortit, monivalinta ja muistamistesti eivät tallenna mitään. Testit vertaavat `localStorage`a ennen ja jälkeen.
- Luvun tunnisteet, `edistyminen.js` ja `MOVED`-taulukko ovat ennallaan.

---

## 6. Käyttöliittymäuudistuksen kannalta tärkeät tiedostot ja konfliktit

**Tiedostot, joihin UI-uudistus todennäköisesti koskee:**
- `book/reader.css`: värimuuttujat `--bg`, `--panel`, `--text`, `--muted`, `--accent`, `--gold` ja `--line` sekä `.note`, `.practice` ja `details`. `assets/intervallimuisti.css` käyttää näitä muuttujia.
- `assets/oppi.css`: `.study-page` ja sen `overflow-wrap: anywhere`.
- `assets/intervallimuisti.css` sisältää kiinteät oikein/väärin-värit (`#3fbf7f` ja `#e06666`) sekä `color-mix()`-funktion. Pitkien sanojen rivitys on rajattu luokkiin `.intervallikortit` ja `.intervallivalinta`.
- `tools/oppimiskartta/rakenna.py`: `render()`, sivupohjat, skriptien ja tyylien lisäys sekä `h3` → `h2`.
- `assets/oppimiskartta.js`: generoitu `// oppimiskartta:aiheet`-lohko ja uusi `openLinkedDetails`.
- `assets/edistyminen.js`: navigaatio ja etenemistiedot. Muutos vaatii `?v=`-päivityksen 82 sivulle.
- Generoidut `oppi/**/*.html`. Muuta lähdettä ja aja generaattori.

**Testit, jotka ovat herkkiä UI-muutoksille:**
- `tests/e2e/intervallimuisti.spec.ts`: luokat `.intervallikortit`, `.intervallivalinta` ja `.intervallikysely`, `data-*`-attribuutit, saavutettavat nimet, sarkainjärjestys sekä 320/360/390 px ja 200 % -mittaukset.
- `tests/e2e/aihesivut.spec.ts`: H/B-testi ja oppimispolku.
- `tests/e2e/kitaran-lahtosivu.spec.ts`: `.recap-note-names` ja reunatyylit.

**Todetut konfliktit:**
- **[PR #111](https://github.com/ristotoivanen/Musiikin-kartta/pull/111)** (`claude/oppimiskartta-numeroimaton-johdanto` @ `794d106`, draft betaan, toinen työ): paikallinen kokeiluyhdistäminen `eed5e7e`:n kanssa tuotti kaksi konfliktia.
  - `assets/oppimiskartta.js`: viereiset rivit. #111 muuttaa `entries`-valitsinta heti generoidun lohkon jälkeen, ja #110 lisää samaan kohtaan `openLinkedDetails`-funktion. Ratkaisu: säilytä molemmat.
  - `oppi/savelnimet/savelet-ja-intervallit.html`: generoitu tiedosto. Ratkaisu: aja generaattori uudelleen ratkaisun jälkeen.
  - Kumpi PR yhdistetäänkin jälkimmäisenä, sen haara pitää päivittää ja testata uudelleen. Kokeiluyhdistäminen keskeytettiin, eikä mitään pushattu.
- **Vanhat haarat:** `feature/mobiili-k2-k7` (#37), `feature/pentatoniset-melodiat-p2-p3` (#38) ja `feature/savelkorva-kuuntelu` (#39) muuttavat tiedostoja `book/osa-2.html`, `book/index.html`, `book/h-savelnimen-alkupera.html` ja `assets/paavalikko.css` 13.–14.11. pohjalta. Mukana on myös `claude/banditreenit` (#86, `osa-2.html` rivit 77–90).
- **Prototyyppihaarat:** `prototype/oppimiskartta-*` (#62/#63) muuttavat `edistyminen.js`:ää, `oppimiskartta.js`:ää ja H-artikkelia. Ne ovat vanhentuneita prototyyppejä.

---

## 7. Paikalliset työpuut ja pushaamattomat muutokset

- Clauden ympäristössä ei ole muita työpuita kuin päätyöpuu (`/home/user/Musiikin-kartta`).
- Kaikki tilapäiset testi- ja yhdistelmätyöpuut on poistettu.
- Pushaamattomia committeja tai tallentamattomia muutoksia ei ole. Kaikki PR-haarat on pushattu.
- Tämä luovutusdokumentti on istunnon omassa haarassa `claude/loving-noether-aytisx` betan `6562e14` päällä. Se ei kuulu PR #109:ään eikä #110:een.
- Tämän työn etähaarat:

| Haara | Tila |
| --- | --- |
| `claude/intervallit-vaiheittainen-oppiminen` | PR #109, avoin |
| `claude/intervallit-hb-selitys` | PR #110, avoin |
| `claude/intervallit-kansalaisopisto-95` | Yhdistetty #105:llä. Omistaja voi poistaa |
| `codex/intervallitaulukko-reflow-95` | Codexin, yhdistetty #104:llä |

Muiden agenttien haaroihin ja työpuihin ei ole koskettu, lukuun ottamatta omistajan erikseen hyväksymää poistocommitia `a05b73b` haarassa `codex/intervallitaulukko-reflow-95`.

---

## 8. GO/NO-GO

| Päätös | Arvio | Perustelu |
| --- | --- | --- |
| PR #110 → PR #109:n haara | **GO** | Omistaja hyväksyi H/B-korjauksen ja tarkennukset. Cloudflare onnistui. Koko e2e-sarja ilman uusia epäonnistumisia. |
| PR #109 (sis. #110) → `beta` | **GO ehdoin** | Ehdot alla. |
| Tuotantojulkaisu (`main`) | **NO-GO** | Ei pyydetty. Fyysiset laitetestit, WebKit ja VoiceOver puuttuvat, ja PDF on päivittämättä. |

**Ehdot beta-yhdistämiselle:**
1. #110 yhdistetään ensin #109:n haaraan, ja puun pitää olla `bd5be25c…`.
2. Beta on yhä `6562e14`. Muuten tehdään uusi yhdistelmäregressio. Jos #111 on ehtinyt betaan, `oppimiskartta.js`:n konflikti ratkaistaan ja sivut generoidaan uudelleen.
3. Omistaja hyväksyy kaksi avointa testihavaintoa sekä testaamatta jääneet WebKitin, fyysiset laitteet ja VoiceOverin.
4. Omistaja tiedostaa, että merge käynnistää betan CI:n ja Cloudflare-julkaisun.

---

## 9. Omistajan päätökset, seuraava rajattu tehtävä ja rajaukset

**Tarvittavat omistajan päätökset**
- #110:n ja #109:n yhdistäminen ja ajoitus suhteessa #111:een.
- PDF:n uudelleenrakennus ja H-artikkelin säilyminen PDF:n liitteenä.
- Kosketuspyyhkäisytestin ja `responsive.spec.ts:259`:n jatkokäsittely, esimerkiksi ajo Playwrightin kiinnitetyllä selainversiolla tai fyysisellä laitteella.
- Saako `claude/intervallit-kansalaisopisto-95`-haaran poistaa.

**Suositeltu seuraava rajattu tehtävä:** yhdistämisen jälkeen WebKit-, iPhone- ja VoiceOver-tarkistus intervallioppitunnille sekä PDF:n päivitys erillisenä tehtävänä.

**Mihin ei saa vielä koskea**
- 29 kysymyksen muistamistesti, pisteytys, äänet ja etenemistiedot ilman erillistä päätöstä.
- `edistyminen.js`:n `PARTS`-ankkurit ja luku- ja aihetunnisteet.
- Generoidut sivut käsin.
- Muiden agenttien haarat ja PR:t (#111, #107, #108, ääni-PR:t #100, #101 ja #106).
