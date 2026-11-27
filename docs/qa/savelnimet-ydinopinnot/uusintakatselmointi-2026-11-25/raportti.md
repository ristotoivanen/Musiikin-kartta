# Uusintakatselmointi – PR #205 auditointikorjaukset

Pohja: [riippumaton auditointi 24.11.2026](../auditointi-2026-11-24-2308/raportti.md), arkistoitu alkuperäisessä muodossa. Korjauscommit `1414ffe`, kuuntelukoesivu `6248930` (HEAD). Beta ennallaan `794d203`.

## Löydösten tila

| Tunniste | Vakavuus | Korjaus | Uusintatesti | Tila |
|---|---|---|---|---|
| SN-01-M01 kaksoisnapautuksen zoom | MAJOR | `touch-action: manipulation` painikkeille, summaryille ja korteille Sävelnimet-sivuilla (`savelnimet-ydinopinnot.css`) | iPhone 16 Pro Safari: kaksoisnapautus harjoituksissa 01, 02, 03 ei zoomaa; uusi E2E-testi tarkistaa `touch-action` ja ettei viewport estä nipistystä | **Korjattu** tälle aiheelle. Yhteinen jatkotoimi alla |
| SN-02-N01 kosketuskohteet | MINOR | `min-inline-size: 44px` | E2E tarkistaa nyt leveyden ja korkeuden 320/360/390 px ja 200 %; simulaattorissa F/F♯ ≈ 44 px | **Korjattu** |
| SN-03-N02 asettelun hyppy | MINOR | tilarivi varaa `1lh` + pieni marginaali | E2E: probe-elementin y-koordinaatti sama ennen/aikana/jälkeen kaikissa kolmessa harjoituksessa (testi löysi alkuperäisen 1,6 px:n heiton); simulaattori vahvisti | **Korjattu** |
| SN-04-N03 miksaus | MINOR | ei muutosta | ohjelmallinen analyysi alla; kuuntelukoesivu valmisteltu | **Avoin – omistajan kuuloarvio** |
| SN-05-N04 "Kuuntele uudelleen" ennen ensikuuntelua | MINOR | painike "Kuuntele valittu väli"; ohje "tai paina Kuuntele valittu väli" | simulaattori, E2E | **Korjattu** |
| SN-06-N05 yhtäaikainen kuuntelu | MINOR | lisätty: kitaralla kahta nauhaa samalta kieleltä ei voi soittaa yhtä aikaa, kuuntelu on havainnollistus | simulaattori | **Korjattu** |
| SN-07-N06 septimi / sus4 | MINOR | "C on D:stä laskettuna seitsemäs sävel, pieni septimi"; "Dsus4 voi soida myös omana sointunaan; sen ei tarvitse purkautua D:hen" | E2E | **Korjattu** |
| SN-08-I01 Kokeiltu-kuvake | IDEA | ei muutosta (yhteinen UI, vaatii käyttäjätestin) | – | Ei korjata tässä PR:ssä |
| SN-09-I02 tunnistemuoto, kovakoodattu portti, ensikeikka-bundlen hash | INFO | ei muutosta | – | Dokumentoitu |
| SN-10-P01 Opettele-testi `practice.spec.ts:89` | testi, ennestään | ei kosketa | epäonnistuu satunnaisesti sekä betalla että PR:llä (aiempi vertailu 24.11.) ja kerran lopullisessa täydessä ajossa | **Avoin, ei PR:n asia** |

## Yhteisen zoom-korjauksen jatko

Korjaus on rajattu Sävelnimet-sivuille, koska kokonaisuudet.css:n muutos vaihtaisi version kaikilla aihesivuilla ja lisäisi generoitujen sivujen konfliktiriskiä PR:ille #178 ja #179. Suositus: erillinen pieni PR, joka lisää samat `touch-action: manipulation` -säännöt (`.study-inline button`, `.study-inline summary`, `.study-unit > summary`, `.done-toggle`, Ydinopintojen painikkeet) yhteiseen tyyliin betaan. Rytmin ja Sointujen sivuilla ongelma on edelleen olemassa. Nipistyszoomaus säilyy (`manipulation` sallii pan/pinch-zoom).

## Miksausanalyysi (ohjelmallinen, ei kuuloarvio)

Menetelmä: sama synteesi ja kaavat kuin `savelnimet-aanet.js`, näytteet M4A:sta; puhelinkaiuttimen jäljittely: kaksi 350 Hz ylipäästöä + 9 kHz alipäästö ([apu/mix2.mjs](apu/mix2.mjs)).

| Esimerkki | Huippu | RMS (aktiivinen) | Kitara/komppi dB nuotti kerrallaan, täysi / puhelin |
|---|---|---|---|
| Melodia C–C♯–D + D | −20,2 dBFS | −37,5 dBFS | 19,8/13,1 · 4,5/13,9 · 22,0/15,6 · −0,2/11,7 |
| Melodia C–C–D + D | −21,4 | −37,6 | 19,8/13,1 · 4,2/13,3 · 22,0/15,6 · −0,2/11,7 |
| Melodia C–D–D + D | −21,9 | −37,3 | 19,8/13,1 · 6,3/15,8 · 22,0/15,6 · −0,2/11,7 |
| Riffi F | −18,2 | −32,3 | 5,7/19,7 · 23,4/16,7 · 9,6/16,8 · 21,4/19,4 (×2) |
| Riffi F♯ | −16,4 | −31,1 | 5,7/19,7 · 27,0/19,0 · … |
| Riffi ylempi D | −18,2 | −32,8 | 5,7/19,7 · 21,1/19,5 · … |

Tulkinta: leikkautumista ei ole (huiput ≤ −16 dBFS). Lopetus-D:n −0,2 dB johtuu täysalueisesta RMS:stä, jossa D2-basso hallitsee; puhelinkaiutinsuodatuksella lopetus on +11,7 dB komppia voimakkaampi, eli kyse ei ole teknisestä virheestä. Melodian keskimmäinen nuotti on eri vaihtoehdoissa 4,2–6,3 dB (täysi), 13–16 dB (puhelin) komppia voimakkaampi. Koko miksaus on hiljainen (RMS −31…−38 dBFS); se on mahdollinen oikea ongelma vain kuulokokeen perusteella. **Miksausta ei muutettu.** Kuulonvaraista arviota en ole tehnyt.

Uusintakatselmointia varten valmisteltiin kuuntelukoe (A nykyinen, B kaikki +6 dB, C lopetus-D +4 dB, D komppi +3 dB sekä riffi- ja melodiavaihtoehdot). Koesivun historiallinen versio on commitissa `6248930`. Sivu poistettiin viimeistelyssä.

## Testitulokset (HEAD `6248930`, koodi = `1414ffe`)

| Tarkistus | Tulos |
|---|---|
| `npm run check` | läpi, 806/806, generaattori ajettu |
| Chromium `savelnimet-ydinopinnot` + `osiot` | 107 läpi, 3 ohitettu |
| WebKit `playwright.ydinopinnot-webkit.config.ts` | 40/40 |
| Koko `npm run test:e2e --workers=4` | **1247 läpi, 1 epäonnistui, 50 ohitettu, 12,5 min.** Epäonnistunut: `practice.spec.ts:89` (tunnettu epävakaa, betallakin) |
| Uudet regressiotestit | 3 testiä × 2 profiilia: touch-action/zoom-säännöt, asettelun vakaus, toistuvat painallukset; lisäksi leveystarkistus kattaa nyt kosketuskohteen leveyden |
| Vanhat tallennukset | `musiikin-kartta:luvut`-testi (savelet-ja-intervallit) läpi; kolmen vanhan tunnisteen tarkistus tehty 24.11. ja sisältötiedostot ovat muuttumattomat |
| Linkit/#117 | generaattori ja ajo läpi; erillistä linkkitarkistusskriptiä ei ajettu uudelleen (vain `build:oppimiskartta`); GitHubin #117-ajo nähtävissä PR:n tarkistuksista |
| iPhone 16 Pro -simulaattori (iOS 27.2 Safari, paikallinen palvelin) | kaksoisnapautus kaikissa kolmessa harjoituksessa, nopeat toistuvat painallukset, riffivalinnat, tilarivin ilmestyminen, sulkeminen kesken toiston, uudelleenavaus, tumma teema, vaaka. Keskittymistila/paluu: ei ajettu uudelleen simulaattorissa (E2E-testi läpi, muuttumaton koodi). Nipistyszoomausta ei voitu ohjata simulaattorilla – tarkistettu vain säännöin. Pienempi iPhone ei ollut turvallisesti vapaana |
| VoiceOver / Android / fyysinen iPhone | ei tehty |

Uusintakatselmoinnin kuvakaappaukset: [jalkeen-01-sointu-kaksoisnapautus](kuvakaappaukset/jalkeen-01-sointu-kaksoisnapautus.png), [jalkeen-02-kaksoisnapautus-ei-zoomia-vakaa](kuvakaappaukset/jalkeen-02-kaksoisnapautus-ei-zoomia-vakaa.png), [jalkeen-03-riffi-painikkeet-44px-kaksoisnapautus](kuvakaappaukset/jalkeen-03-riffi-painikkeet-44px-kaksoisnapautus.png), [jalkeen-03-tilarivin-tila-varattu](kuvakaappaukset/jalkeen-03-tilarivin-tila-varattu.png), [jalkeen-vaaka-tumma-suljettu-kesken-toiston](kuvakaappaukset/jalkeen-vaaka-tumma-suljettu-kesken-toiston.png). Ennen-kuvat: [alkuperäisen auditoinnin kuvakaappaukset](../auditointi-2026-11-24-2308/raportti.md#kuvakaappaukset).

## Rinnakkaiset PR:t

Beta `794d203` ennallaan. `git merge-tree`: HEAD + beta ei konfliktia; #178 (b6ff787) ja #179 (97a49fe) konfliktoivat yhä vain `rakenna.py`:ssä (ei uusia tiedostoja konfliktissa korjausten takia). #110 (eed5e7e) ennallaan: viisi konfliktia, jotka ovat betassa. Korjaukset eivät koske generaattoria tai yhteistä tyyliä. Mitään ei yhdistetty eikä rebasettu.

## Uusintakatselmoinnin avoimet asiat ennen puhelinkoetta

1. Kuuntelukoe (miksaus A–D) fyysisellä iPhonella; päätös miksausmuutoksesta.
2. Yhteisen `touch-action`-korjauksen erillinen PR.
3. `practice.spec.ts:89`:n korjaus omana tehtävänään (issueta ei löytynyt; ei luotu uutta).
4. Kuuntelukoesivun poisto ennen betaa.
5. Fyysinen iPhone, Android, VoiceOver, oikea kitara.


## Omistajan puhelinkoe ja viimeistelyn päätös 25.11.2026

**Omistajan puhelinkoe hyväksytty.** Omistaja raportoi, että korjatussa toteutuksessa kaikki kolme Ydinopintoa, kuuntelut, melodia- ja riffiharjoitukset sekä mobiilikäytettävyys toimivat hyvin fyysisellä puhelimella. Puhelimen mallia, käyttöjärjestelmää, selainversiota ja äänireittiä ei yksilöity. Tämän perusteella **SN-04-N03 on käsitelty**. Hyväksytty miksaus säilytetään ja väliaikainen kuuntelukoesivu on poistettu. Oppituntisisältö, harjoitussovellus ja äänitiedostot ovat samat kuin viimeistelyn lähtöcommitissa `4c43124`.

| Auditoinnin havainto | Lopputila PR #205:ssä |
| --- | --- |
| SN-01–SN-03 | Korjattu Sävelnimet-aiheessa. Kaksoisnapautuksen zoom, kosketuskohteen molemmat mitat ja tilarivin vakaus on katettu uusintakatselmoinnissa. Muiden aiheiden yhteinen zoom-korjaus on erillinen. |
| SN-04 | Omistaja hyväksyi kuuntelun fyysisellä puhelimella. Nykyinen miksaus on hyväksytty. |
| SN-05–SN-07 | Aiemmat tekstikorjaukset on tarkistettu ja säilytetty. |
| SN-08 sekä yhteinen otsikkorakenne | Kokeiltu-kuvakkeen löydettävyys on käyttäjätestausidea ja otsikkohierarkia yhteisen komponentin havainto. Molemmat jäävät tämän aiheen rajauksen ulkopuolelle. |
| SN-09 | Vanhat tallennustunnisteet säilyvät. Testiportti ja Ensikeikan koontitiedoston hash ovat dokumentoituja teknisiä sivuhavaintoja. |
| SN-10 | Betalla toistuva Kitaraharjoittelijan epävakaa Opettele-testi jää erilliseen työhön. |

VoiceOveria, Android/Chromea, TalkBackia eikä erillisiä kokeita oikealla kitaralla ole todennettu. Myös puhelimen lukitus ja taustalta paluu sekä kattava numeerinen kontrastimittaus jäävät avoimiksi. Omistajan puhelinkoe ei yksilöinyt näitä kokeita.

**Suositus on hyväksyä #205 betaan omistajan erillisellä yhdistämisluvalla**, kun viimeistelyn regressiot ja ajantasaisen betan yhteensopivuus on todettu. Androidin ja VoiceOverin kokeet jäävät avoimeksi ennen tuotantohyväksyntää. Erillinen kitarakoe täydentää näyttöä soittokokeiluista.
