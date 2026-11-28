# PR #179 · Otelaudan Ydinopinnot: riippumaton auditointi (24.11.2026)

Auditointitoimeksianto, ei toteutus. Lähdekoodia ei muutettu, ei committeja, PR:ää ei yhdistetty. Tämä raportti ei korvaa `docs/qa/otelauta-ydinopinnot/raportti.md`:ää.

## 1. Tiivistelmä ja hyväksyntäsuositus

**Suositus: GO KORJAUKSIN.**

Sisältö on musiikillisesti oikein ja pedagogisesti perusteltu. Kaikki 78 paikkaa, kaikki tehtävägeneraattorien tulokset ja kaikki testatut palautetekstit pitivät paikkansa. Neljän harjoituksen rakenne toimii. Yksi toistettu käytettävyysvika pitää korjata ennen betaa: **tahmea palautepaneeli peittää laudan juuri sillä hetkellä, kun oppija lukee palautetta** (löydökset 1 ja 2). BLOCKER-tason löydöksiä ei ole.

| Hyväksyntä | Tulos |
|---|---|
| Tekninen | **GO.** `npm run check` 720/720, WebKit 52/52, Chromium 206/206, linkit 0 ongelmaa. Esikatselu vastaa lähdekoodia. |
| Musiikillinen | **GO.** 78/78 paikkaa, 82 unisonotehtävää (18 G–B) ja kaikki tekstiesimerkit tarkistettu riippumattomalla laskennalla. Yksi tekstitarkennus (löydös 7). |
| Pedagoginen | **GO KORJAUKSIN.** Ydinoivallukset toimivat. Pieniä parannuksia löydöksissä 3–5 ja 9. Omistajan päätös puuttuu yhä. |
| Mobiilikäytettävyys | **GO KORJAUKSIN.** Kosketuskohteet ja vaakavieritys kunnossa, mutta paneelin peitto, vaaka-asento ja 400 %:n reflow vaativat korjauksen. |

## 2. Tarkistettu commit ja testiympäristö

- PR #179 Draft, kohde `beta`, HEAD `97a49fe` (vain QA-dokumentti `0ce7f64`:n päällä). Haarassa ei ollut uusia commiteja.
- Esikatselun sivut (aihesivu ja neljä harjoitusta) vastaavat lähdekoodia lukuun ottamatta Cloudflaren analytiikkakoodia. JS ja CSS ovat tavu tavulta samat. Kaikki kahdeksan vanhaa osoitetta vastaavat HTTP 200.
- **Käytetyt ympäristöt:**

| Ympäristö | Käyttö |
|---|---|
| **Xcode iOS Simulator, iPhone 16 Pro, iOS 27.2, oikea Safari** (402 × 874 pistettä, Safarin näkymä 402 × 754) | Varsinainen vuorovaikutteinen käyttäjätestaus kosketuksin, vaaka-asento. Oma laite *iPhone 16 Pro – PR179-auditointi*. |
| **iOS Simulator, iPhone 17e, iOS 27.2, oikea Safari** (390 × 844) | Pienempi malli: harjoitus 03, kosketus. |
| Playwright **WebKit-emulaatio** (iPhone 13 -profiili) | Tehtävämäärät, mittaukset 320, 375, 390, 402, 430, vaaka, 400 % reflow, 200 % teksti. **Ei ole Safari eikä simulaattori.** |
| Playwright Chromium | Vain kohdennettu e2e ja pakotetut värit. Ei Safari-testi. |

- **Ohjaustyökalut:** simulaattorin `tap`/`swipe`/`rotate`/kuvakaappaus (Claude Code iOS Simulator -työkalu), `xcrun simctl`, paikallinen välityspalvelin (`mittaus/proxy.py`), joka lisää sivulle mittausskriptin ja välittää JS-komennot simulaattorin Safariin. IDB, Maestro ja XcodeBuildMCP eivät olleet asennettuina, eikä niitä asennettu.
- **Rajoitus:** iPhone 17e on samaa leveyttä (390) kuin iPhone 13/14. Pienempiä simulaattoreita (SE, 320/375 pt) ei ole asennettu, joten 320 ja 375 on testattu vain WebKit-emulaatiolla.
- **Aloitus ennen vastauksia:** ensimmäisen harjoituksen ensimmäinen yritys tehtiin ennen lähdekoodin lukua. Lähdekoodi luettiin vasta sen jälkeen, joten harjoitusten 02–04 ensimmäiset yritykset eivät ole sokkoyrityksiä.
- **Simulaattorikattavuus:** 01: esimerkki + 2 tehtävää, 02: 1 kokonainen tehtävä, 03: 3 tehtävää (etsi, väärä kieli, nimeä), 04: 1 kokonainen tehtävä. Pitkät sarjat ajettiin WebKit-skriptillä (40 / 30 / 40 / 36 tehtävää), ja skripti lukee näkyvän tehtävälauseen ja laskee vastauksen omalla taulukollaan. Se on täydentävä testi, ei simulaattorikoe.

## 3. Viisi tärkeintä löydöstä

1. **MAJOR: tahmea palautepaneeli peittää laudan ja kuuntelupainikkeet** (iPhone 16 Pro, Safari). Kuvat 14, 15, 23.
2. **MAJOR: vaaka-asennossa ja 400 %:n reflowssa paneeli vie 31–86 % näkymästä.** Kuva 24 ja `kuvat/m-320x256-dark-h02-vastattu.png`.
3. **MINOR: 03:n nimeä-tehtävistä 57 % osuu kiintopistenauhoille**, jolloin virhepalaute paljastaa vastauksen ja tehtävä on ulkomuistia.
4. **MINOR: PR #179:n kuvaus ja pedagoginen dokumentti väittävät virheellisesti, ettei PR #178 koske `rakenna.py`:tä.** Yhdistäminen konfliktoi viidessä tiedostossa.
5. **MINOR [T]: matalien sävelten (E2–D3) perustaajuus jää puhelimen kaiuttimella heikoksi**, mikä voi heikentää 02:n oktaavivertailua. Vaatii fyysisen laitteen.

## 4. Harjoituskohtaiset pedagogiset arviot

| | 01 Sama sävel toiselta kieleltä | 02 Kuule ja löydä oktaavi | 03 Perussävel E- ja A-kieleltä | 04 Kaikki saman sävelen paikat |
|---|---|---|---|---|
| Oppijan teko | Valitsee solun laudalta | Kuuntelee, valitsee suhteen, valitsee paikan | Etsii tai nimeää | Etsii kaikki paikat |
| Ydinoivallus | Sama korkeus löytyy 5 nauhan siirrolla (G–B: 4) | Oktaavi kuullaan ja nähdään samassa paikassa | Johda sävel lähimmästä kiintopisteestä | Yksi sävel on laudalla useassa paikassa ja oktaavissa |
| Ymmärtämistä vai muistamista | Ymmärtämistä. Palaute nimeää syyn (”liian korkea, siirry yksi nauha alemmas”). | Ymmärtämistä ja kuuntelua | **Sekä että**: 57 % nimeä-tehtävistä on suoraa kiintopisteen muistamista | Ymmärtämistä: jokainen löytö kertoo korkeuden ja ”sama kuin X” |
| Siirtyy kitaralle | Todennäköisesti. ”Etsi ensin kitaralta” -ohje on perusteltu. | Osittain: vaihe B on laudan päättelyä | Kyllä, barré-juurisävelet | Kyllä |
| 10. käyttökerta | Kiinnostava: 82 tehtävää, ei toistoa peräkkäin | Kohtalainen: kolme suhdetta, vaihtuvat paikat | Kohtalainen: 14 nimeämispaikkaa, 26 etsintäpaikkaa | Hyvä: laajuusvalinta kasvattaa |
| Vaikeustaso | Sopiva | Sopiva | Sopiva (♯/♭ vasta tehtävästä 5) | Sopiva; E/A → kaikki → ♯/♭ |

**Tehtäväkohtaiset havainnot**

- **01.** Opettava esimerkki sanoo itse, että vastaus on ”viisi nauhaa ylempää”. Se paljastaa vastauksen mutta on selvästi merkitty Esimerkiksi. Kolmen ensimmäisen tehtävän jälkeen ohje ei enää kerro vastausta. **Suositus: säilytä.** Lähtö- ja etsittävä sävel erottuvat (oranssi täytetty vs. vastauksen vihreä; väärä: katkoviivareuna). Palaute tunnistaa oikean sävelkorkeuden myös väärällä kielellä (”Sekin on X, mutta etsi …”). Suunnat on kuvattu sanallisesti (”paksummalla … ylempänä”).
- **02.** Kaksivaiheinen rakenne on intuitiivinen. Vastaus ei näy ennen ratkaisua: laudan solujen nimet eivät sisällä korkeutta eikä ”paikka N” -nimeä ennen vaihetta B (30 tehtävää, 0 vuotoa). Kolme suhdetta esiintyivät 12 / 9 / 9, paikkaindeksit 9 / 12 / 9. Vertailutoisto (lähtö + arvoitus 0,8 s välein) on erillinen ja toimii. **Kuuntelun voi ohittaa vain tekstiversiolla**, joka on nimetty rehellisesti. Vaihe B on laudan päättelyä, ei kuuntelua. Se on perusteltua. Ennen vastausta oma valinta ja oikea vastaus erottuvat vasta vaiheessa B. **Yhteinen ”Kuuntele sävelpari” -painike ennen vastausta olisi IDEA**: nyt kaksi painallusta ja jälkimmäinen katkaisee edellisen. En suosittele lisäämään 01:een, koska siellä oma vastaus ja lähtösävel kuullaan jo napautuksella. **Sävelkorvan suuntakuvan** hyöty on vähäinen, koska suhde annetaan tekstinä ja sanallisena palautteena.
- **03.** Kiintopisteet 0·3·5·7·12 ovat intuitiivisia. Vihje näyttää ne vasta pyydettäessä. Hyväksyntä: tyhjä kieli ja 12. nauha hyväksytään (E, A), kaikki kelvolliset vaihtoehdot hyväksytään. E–F ja B–C-väli on oikein sekä palautteessa (”Löydät sen C:n vierestä”) että vihjetekstissä. Barré-yhteys on oikea E- ja A-muodolle, ei yleispätevästi (löydös 7). Nimeämisäänet toistavat kysytyn paikan, eivät vastausta: pedagogisesti vaatimaton mutta harmiton. Absoluuttista sävelkorvaa ei harjoitella.
- **04.** Alue 0–12 näkyy vain laudan nimessä, ei tehtävälauseessa (löydös 4). Vihjeet ovat kolmiportaisia: kieli → päättely löydetystä paikasta tai kiintopisteistä → merkitty paikka. Kolmas porras paljastaa paikan, mikä on sopiva viimeinen keino. Valmistuminen on selvästi havaittavissa (”Kaikki 3 löytyi! Korkeudet: E2 × 1, E3 × 2.” ja ”Kuuntele löydetyt”). **Läpäisy pelkällä klikkaamisella on mahdollista** (enintään 26 napautusta E/A:lla, 78 kaikilla kielillä), mutta jokainen napautus kertoo sävelnimen ja suunnan (”Tällä kielellä D on ylempänä”). Oppija oppii siis silti laudan nimet. Ei haittaa; en suosittele rajoitusta.
- **Neljän harjoituksen rakenne** on perusteltu. Loppukokeilua musiikilliseen tilanteeseen ei tarvita tässä PR:ssä; ”Kokeile kitaralla” -osiot hoitavat yhteyden oikeaan soittoon. Ydinopintojen periaatteet täyttyvät: matala kynnys, vapaa eteneminen, oma tekeminen, kuunteleminen (02), kontrastiparit, oikeellisuus, opettava palaute, vanhat sisällöt säilyvät (8/8 osoitetta 200, kaksi uutta testiä).

## 5. Mobiilikäytettävyyden arvio

Kaikki laudan solut ja painikkeet ovat ≥ 44 × 44 CSS-px **kaikissa** mitatuissa koossa (320 × 568, 375 × 667, 390 × 844, 402 × 874, 430 × 932, vaaka 844 × 390 ja 568 × 320, 320 × 256, 200 % teksti). Sivun vaakavieritystä ei ollut kertaakaan (WebKit-emulaatio). Kaikki kuusi kieltä näkyvät yhtä aikaa 320 px:ssä (solut 48 × 44). Laudan korkeus on 632 px, joten se mahtuu yhdessä paneelin kanssa vain ≥ 844 px korkealle näkymälle, ja Safarin oikea näkymä on iPhone 16 Prolla 754 px.

**Kuvat** (`kuvat/`): `02-h01-avattu`, `04-h01-esimerkki-oikein`, `08-h01-vaarin`, `09-h01-oikein-gb`, `13-h02-suhde-valittu`, `14-h02-paikka-oikein`, `15-h02-paneeli-peittaa`, `17-h03-oikein`, `20-h03-nimea-vaarin`, `21-h04-avattu`, `23-h04-valmis`, `24-vaaka-h04`, `26-17e-h03-vaarin` (simulaattori), `m-*` (WebKit-emulaatio, kaikki koot) ja `pakotetut-varit-chromium-h01.png`.

- **Lauta vastaa kitaraa:** kielten järjestys E–A–D–G–B–e vasemmalta oikealle, satula ja vapaat kielet rivillä 0 selkeinä, nauhanumerot ja pisteet nauhoilla 3, 5, 7, 9 ja kaksoispiste 12 (vain `•`-merkit, ei muita kuvauksia). Pystysuora asettelu vastaa sointukaavioita.
- **Erottuvuus ilman väriä:** lähtö (täytetty kuvake + nimi), kokeiltu (katkoviivareuna + nimi), oikea (✓ + vihreä + nimi). Pakotetuissa väreissä (Chromium) merkit säilyttävät 2 px:n reunaviivan.
- **03 ja 04 E/A-laajuudessa** lauta täyttää vain puolet leveydestä ja oikea puoli jää tyhjäksi (MINOR, ulkonäkö). Sen voisi keskittää.
- **Yksi teema:** sivu on vain tummalla teemalla. Simulaattori oli vaalealla, ja sivu pysyi tummana. Vaaleaa teemaa ei ole; ei virhe.

## 6. Musiikillinen faktantarkistus

Riippumaton laskenta (`faktat/tarkista.py`, tulos `faktat/tulos.txt`):

- **78/78** paikkaa: nimi, tieteellinen korkeus ja taajuus täsmäävät (E2 A2 D3 G3 B3 E4, A4 = 440 Hz), 0 virhettä.
- Kielivälit E–A–D–G 5, **G–B 4**, B–e 5. Kaikkiaan **37 eri korkeutta**, enintään 3 paikkaa samaa korkeutta kohden.
- **Unisonotehtäviä 82, joista G–B 18** (vastaa dokumentin lukuja). Käyttäjäajossa kaikki viisi kieliparia ja molemmat suunnat esiintyivät, G–B 14/40.
- Paikkamäärät: E/A-kielillä E ja A kolme, muut kaksi. Kaikilla kielillä E 8, D/G/A/B 7, muut 6.
- Enharmoniset nimet ovat johdonmukaiset (C♯ E♭ F♯ A♭ B♭); G♯ ja D♯ eivät esiinny kohteina, mikä on ok.
- **No-JS-tekstiversiot** laskettu käsin: 01 (E 5, G 4, G 2, E 8), 02 (kaikki kolme tehtävää) ja 03 (C, E 10, A 9, G) sekä 04 (D seitsemän ja F kuusi paikkaa) oikein.
- **Selaintoistot:** 40 + 30 + 40 + 36 tehtävää: kaikki oikeat vastaukset hyväksyttiin, väärät hylättiin, toistetut taajuudet vastasivat laskettua (esim. A2 = 110 Hz ✓).
- **Barré-väite:** ”E-muotoinen barré paksun E-kielen 5. nauhalta on A-duuri, A-muotoinen barré A-kielen 3. nauhalta C-duuri” on oikein. Yleissääntö ”nimi tulee matalimmasta perussävelestä” pätee vain perusmuotoisiin otteisiin (löydös 7).

## 7. Äänentoiston arvio

| Taso | Havainto |
|---|---|
| **Lähdekoodista todennettu** | Demoääni 1,5 s, 8 yläsävelen jaksollinen aalto, alipäästö, verhokäyrä 8 ms nousu ja eksponentiaalinen vaimeneminen. Uusi toisto pysäyttää edellisen (30 ms:n liuku). `visibilitychange`, `pagehide` ja oppitunnin sulkeminen pysäyttävät. |
| **Web Audio -kutsuista todennettu** (iPhone 16 Pro Safari + WebKit) | Napautus soittaa oikean taajuuden. Edellinen ääni katkeaa 0,04 s:ssa uuden alkaessa. Ei haamuääniä nopeissa painalluksissa, sivun piilotuksessa, oppitunnin sulkemisessa eikä `pagehide`ssa. Äänetön tila: solun napautus ei soi, Lähtösävel-painike soi (tarkoituksellinen). Paluun jälkeen ääni toimii. |
| **Äänisignaalista mitattu** (OfflineAudioContext, oma graafi, WAV: `aani/pair.wav`, `aani/jakso.wav`) | Huippu 0,30–0,31 (−10 dBFS), ei leikkausta. Taso putoaa −31 dB 0,3 s:ssa, −44 dB 0,6 s:ssa ja −58 dB 0,9 s:ssa, joten **kuultava kesto on noin 0,7 s eikä 1,5 s**. 02-vertailussa (0,8 s) ensimmäinen sävel on toisen alkaessa jo −55 dB: erottuvat selvästi eivätkä limity. 04:n 0,55 s:n välein soitettu sävelsarja: edellinen on −35 dB seuraavan alkaessa, uuden hyökkäys erottuu myös samoilla korkeuksilla. |
| **Todella kuunneltu** | **Ei kuunneltu.** Ääntä ei kuunneltu kuulokkeilla eikä kaiuttimella. |
| **Fyysisellä iPhonella testattava** | Matalien sävelten kuuluvuus: E2, A2 ja D3 sisältävät 68–71 % energiasta alle 150 Hz, jota puhelimen kaiutin toistaa heikosti. 02:n oktaavivertailu vaatii kuulokkeilla ja kaiuttimella kuunneltuna varmistuksen. Lisäksi ensimmäinen ääni iOS:n lukituksen jälkeen. |

## 8. Saavutettavuuden arvio

| Kohta | Tulos |
|---|---|
| Näppäimistö | **OK (WebKit desktop).** Laudalla yksi sarkainpysähdys, nuolet/Home/End/PageUp/PageDown toimivat, Enter valitsee. |
| Fokus | Näkyvä (3 px:n kiinteä rengas). Palautepaneeli ei peittänyt fokusoitua solua (12 riviä läpikäyty, `scroll-margin` toimii). |
| Nimet | **OK.** ”vapaa A-kieli”, ”paksun E-kielen 1. nauha”, merkityt solut ”lähtösävel A2” ja ”kokeiltu, B♭2”. 02: ei vuotoa ennen vaihetta B. |
| Tilaviestit | Kaksi `role="status"` / `aria-live="polite"` -aluetta (palaute ja äänivirhe). Ei puhetestattu. |
| Virhe/onnistuminen ilman väriä | OK: ✓-merkki, teksti ja katkoviiva/täytetty reuna. |
| Kontrastit | Mitatut tekstit ja painikkeet 7,8–15,7 : 1. Yksi teema. |
| Pakotetut värit | Chromiumissa merkit säilyttävät reunat. **WebKit-pakotettua väritilaa ei voitu emuloida.** |
| Tekstin suurennus | 200 % (390 px): ei vaakavieritystä, solut ≥ 44 px. **400 % reflow: paneeli peittää 58–86 % näkymästä (löydös 2).** |
| Ruudukon semantiikka | `table role="grid"`, painikkeet soluissa, sarakeotsikot ja sr-only ”Nauha”-otsikko. Käyttökelpoinen. |
| **Ei tehty** | **VoiceOver tai muu ruudunlukija: tekemättä.** Automaattinen testi ei korvaa sitä. iOS-simulaattorin Safarin Tab-/näppäimistökäyttöä ei testattu. |

## 9. Automaattisten testien tulokset

| Ajo | Tulos |
|---|---|
| `npm run check` (lint, Vitest, build) | **OK**, Vitest **720/720** (44 tiedostoa). Työpuu puhdas build-vaiheen jälkeen. |
| `playwright.otelauta-ydinopinnot-webkit.config.ts` | **52/52 läpi**, 0 epäonnistunutta, 0 ohitettua (iPhone 13 -emulaatio + Desktop Safari). |
| Chromium: Otelauta-spec + `aihelista`, `aihesivut`, `lukumerkinnat` | **206/206 läpi**, 0 epäonnistunutta. Sisältää vanhojen kahdeksan sivun testin. |
| `rakenna.py --tarkista` | OK. |
| Linkit | 121 sivua, 2 988 viittausta, 0 ongelmaa. |
| **Ei ajettu paikallisesti** | Koko Chromium-regressio (1 129 testiä). CI-ajo `0ce7f64`:ssä oli läpi (1 129 / 0 / 49 ohitettu) ja kaikki PR:n tarkistukset ovat vihreitä HEADissä. Riffikaikua ja Kitaraharjoittelijaa ei ajettu erikseen. Epäonnistuneita ei ollut. |

## 10. PR #178:n yhteensovitus

PR #178 HEAD `b6ff787`. Koemerge (`git merge-tree`, ei muutoksia):

- Yhteiset muutetut tiedostot: `index.html`, `aiheet.json`, `rakenna.py`, `aihelista.spec.ts`, `aihesivut.spec.ts`, `lukumerkinnat.spec.ts`, `oppimiskartta-kokonaisuudet.test.ts`.
- **Konfliktit viidessä tiedostossa:** `rakenna.py` (yksi hunk), kolme e2e-spec-tiedostoa ja `oppimiskartta-kokonaisuudet.test.ts`. `aiheet.json` ja `index.html` yhdistyvät automaattisesti, ja yhdistetty `aiheet.json` on kelvollinen (rytmi, korva, otelauta ja soinnut `kokonaisuudet`).
- **Virhe PR #179:n kuvauksessa ja dokumentissa (§6): ”`rakenna.py`:hyn koskee vain tämä PR” ei pidä.** PR #178 lisää samaan kohtaan saman rakenteen (`melody_practice` + `melodia-ydinopinnot.js`). Ratkaisu on pitää **molemmat** lataukset (CSS ja JS).
- **Semanttinen konflikti:** #178:n testit kovakoodaavat Otelaudan laskuriksi ”3/8 sisältöä tehty”, mutta #179 muuttaa sen muotoon ”aiemmista sisällöistä”. Yhdistettäessä pitää valita #179:n yleistetty `progress_text`-pohjainen muoto ja päivittää #178:n kovakoodattu ”3 laskuria” (`data-progress-count`) vastaavasti.
- Generoidut `index.html` ja `oppi/` täytyy rakentaa uudelleen (`npm run build:oppimiskartta`). Yhteisiä regressiotestejä pitää ajaa yhdistetyllä haaralla.

## 11. Kaikki löydökset vakavuusjärjestyksessä

| # | Vakavuus | Harj. | Laite ja selain | Toisto | Odotettu | Todellinen | Näyttö | Vaikutus | Korjausehdotus |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **MAJOR [H]** | 02, 04 (myös 01, 03) | iPhone 16 Pro simulaattori, Safari; iPhone 17e | 02: valitse suhde → tahmea paneeli. 04: napauta E 8. | Palaute ja kohdat näkyvät yhtä aikaa. | Paneeli (130–250 px, 18–33 % näkymästä) peittää laudan nauhat 1–5, juuri löydetyn E 8 -merkin ja 02:n kuuntelupainikkeet. | Kuvat 14, 15, 23, 26 | Oppija ei näe vastaamaansa kohtaa eikä voi kuunnella vertailua ilman vieritystä. | Pienennä paneeli (vain palaute + Uusi tehtävä, paikkapainikkeet laudan viereen) tai vieritä peitetty merkki näkyviin. |
| 2 | **MAJOR [H]** | kaikki | iPhone 16 Pro vaaka (750 × 402); WebKit-emulaatio 568 × 320 ja 320 × 256 | Vastaa ensimmäiseen tehtävään vaaka-asennossa tai 400 %:n reflowssa. | Palaute ei estä sisällön käyttöä. | Paneeli 31–47 % (vaaka), 58–86 % (320 × 256; 02: 220/256 px). Käytännössä lauta on piilossa. | Kuva 24, `m-320x256-dark-h02-vastattu.png`, `mobiili-mittaukset.json` | Vaaka-asento on lähes käyttökelvoton. WCAG 1.4.10 reflow -tavoite vaarassa. | Tahmea vain, kun lauta + paneeli mahtuvat (esim. alle 40 % korkeudesta), muuten paneeli normaalisti laudan alla. |
| 3 | MINOR [H] | 03 | Simulaattori, WebKit | Nimeä-tehtävä A-kielen 3. nauhalle, vastaa väärin. | Virhe ohjaa päättelyyn. | ”Lähin kiintopiste: 3. nauha on C.” antaa vastauksen. 12/20 nimeä-tehtävää (57 %) on kiintopisteellä (3, 5, 7, 12). | `kayttaja-ajo-390.json`, kuva 20 | Osa tehtävistä on ulkomuistia eikä päättelyä. | Painota nimeä-tehtävät ei-kiintopistenauhoille (1, 2, 4, 6, 8, 10) ja kiintopisteet vain alkuun. |
| 4 | MINOR [H] | 04, 02 | Simulaattori | 04: lue tehtävälause. | Alue 0–12 mainitaan. | ”Etsi kaikki C-sävelet. Niitä on 2.” Kortin otsikko ”Liiku otelaudalla”, harjoituksen ”Kaikki saman sävelen paikat”. 02:n otsikko ”sama nimi, eri korkeus” ei kata ”yhtä korkea” -vaihtoehtoa. | Kuva 21 | Pieni epäselvyys, yksi sana riittää. | ”… nauhoilta 0–12”. Yhdenmukaiset nimet. |
| 5 | MINOR [H] | 03 | Simulaattori | Etsi D A-kieleltä, napauta E 10 (myös D). | Kuten 01:ssä: ”sekin on D, mutta etsi A-kieleltä”. | ”Etsi A-kieleltä.” ilman tunnustusta. | `kayttaja-ajo-390.json` | Oppija ei tiedä, osuiko sävelnimi oikein. | Käytä 01:n mallia. |
| 6 | MINOR [H] | 01 | iPhone 16 Pro simulaattori | ”Uusi tehtävä →” laudan alaosasta. | Uusi tehtävälause näkyviin. | Kerran tehtävälause jäi noin 400 px ruudun yläpuolelle (uusi tehtävä vain laudalla); kolmessa muussa tapauksessa se tuli näkyviin. | Kuva 06 | Ajoittainen. | Vieritä tehtävälause näkyviin `scrollIntoView`lla. |
| 7 | MINOR [L][A] | 03 | – | Lue Barré-lisätieto. | Yleisyyden rajaus. | ”Barré-otteen nimi tulee sen matalimmasta perussävelestä.” Pätee E- ja A-muodoille, mutta ei esim. käännöksille (C/E). Johdannon ”useimpien sointujen” on lievä yleistys. | `perussavel-e-ja-a-kielelta.html` | Harhaanjohtava kokeneelle. | ”E- ja A-muotoisen barré-otteen nimi tulee sen juurisävelestä.” |
| 8 | MINOR [L] | – | – | Lue PR #179:n kuvaus ja dokumentti §6. | Oikea väite. | ”Ei muutoksia rakenna.py:hyn” (#178). Konflikti viidessä tiedostossa. | §10 | Yhdistäjä aliarvioi työn. | Korjaa kuvaus. |
| 9 | MINOR [H] | 01 | Simulaattori | ”Näytä vastaus”. | Selvä ero omaan oikeaan vastaukseen. | Palaute saa onnistumisen tyylin (`data-tulos=oikein`, ✓). Teksti alkaa ”Vastaus:”. | `mittaus` | Hieman harhaanjohtava onnistumisen tunne. | Käytä neutraalia tyyliä. |
| 10 | MINOR [H] | 03, 04 | Simulaattori, WebKit | Avaa E/A-laajuus. | Lauta keskitettynä. | Kaksikielinen lauta täyttää vain vasemman puolen. | Kuvat 16, 18, 21 | Ulkoasu. | Keskitä tai levennä. |
| 11 | MINOR [T] | 02 | iPhone, kaiutin | Kuuntele E2/A2/D3. | Selvä korkeusero. | 68–71 % energiasta < 150 Hz. | `aani/aani-analyysi.json` | Oktaavi voi olla vaikea kuulla kaiuttimella. | Testaa fyysisellä laitteella; harkitse alaoktaavien rajausta. |
| 12 | IDEA | 02 | – | – | – | Kaksi painallusta vertailuun; jälkimmäinen katkaisee edellisen. | – | – | Valinnainen ”Kuuntele sävelpari” 02:een. Ei 01:een. |
| 13 | IDEA | 04 | – | – | – | Väärä napautus ei jätä laudalle merkkiä (toisin kuin 01 ja 03). | Kuva 23 | – | Valinnainen. |

## 12. Säilytä / muuta / poista / lisää

| | |
|---|---|
| **Säilytä** | Neljän harjoituksen rakenne ja yksi päätoiminto. Tehtävägeneraattorit ja generaattoreiden testit. Ensimmäinen opettava esimerkki. 02:n kaksivaiheisuus ja ”paikka N” -nimet. 04:n laajuusvalinta ja kolmiportainen vihje. Kuuden kielen lauta ≥ 44 px solulla. 01:n ja 03:n palautetekstit. Vanhat kahdeksan sisältöä ja osoitteet. |
| **Muuta** | Tahmea paneeli (löydökset 1, 2). 03:n nimeä-tehtävien painotus ja virhepalaute. 03:n väärän kielen palaute. 04:n tehtävälause ja nimet. Barré-lisätiedon sanamuoto. PR:n kuvaus ja dokumentti #178:n osalta. |
| **Poista** | Ei mitään. |
| **Lisää** | Ei pakollista. Valinnainen: ”Kuuntele sävelpari” 02:een; merkintä väärästä napautuksesta 04:ään. |

## 13. Fyysisellä iPhonella ja oikealla kitaralla vielä testattavat

- Äänen kuuluvuus ja oktaavivertailu (E2–D3) kuulokkeilla ja kaiuttimella. **Ääntä ei ole kuunneltu.**
- Ensimmäinen ääni lukituksen jälkeen, oppitunnin sulkeminen, sivulta poistuminen ja paluu oikealla Safarilla.
- VoiceOver: ruudukon navigointi, paikkojen nimet, tilaviestit.
- Kosketuksen tarkkuus peukalolla (44 px) ja paneelin peitto oikealla laitteella.
- Oikea kitara: QA-raportin viisi koetta (unisono, oktaavi, perussävelet, 90 s:n paikkahaku, kertaus). Käyttäjäkoe 3–5 kohderyhmän oppijalla.

## 14. Mitä ei tarkistettu ja miksi

- VoiceOver ja muu ruudunlukija: ei käytettävissä tässä istunnossa. Tarkistus **tekemättä**.
- Pienempi kuin 390 pt iPhone-simulaattori: ei asennettuna. 320 ja 375 on vain WebKit-emulaatio.
- Ääntä ei kuunneltu (ei äänilähtöä auditoinnissa).
- Koko Chromium-regressio paikallisesti: aikaresurssien vuoksi vain kohdennetut ajot. CI:n tulos on [L], ei oma ajo.
- Tulostus, pitkäaikainen oppiminen, käyttäjäkoe oikeilla ihmisillä, Android.
- WebKitin pakotetut värit (ei emuloitavissa), vaalea teema (ei ole).
- Kolmen käyttäjätyypin kognitiivinen läpikäynti on tehty **päättelynä** (aloittelija ilman kitaraa: 01:n opettava esimerkki ja 03:n kiintopisteet riittävät aloitukseen; 1 vuoden soittaja: sopiva; kärsimätön: ”Näytä vastaus” ja ”Uusi tehtävä” toimivat ilman ohjeen lukua, mutta nimeä-tehtävien virhepalaute antaa vastauksen heti). Ei oikeiden ihmisten koe.

## 15. Lopullinen hyväksyntäsuositus

**GO KORJAUKSIN.**

- **Tekninen: GO.** Kaikki automaattiset tarkistukset läpi, esikatselu = lähdekoodi, ei konsolivirheitä ajoissa.
- **Musiikillinen: GO.** 78/78, 82/18, kaikki tekstiesimerkit ja palautteet oikein. Yksi tekstitarkennus (löydös 7).
- **Pedagoginen: GO KORJAUKSIN.** Ydinoivallukset toimivat; 03:n nimeä-tehtävät ja palautteet vaativat pienen viilauksen. Omistajan pedagoginen hyväksyntä puuttuu.
- **Mobiilikäytettävyys: GO KORJAUKSIN.** Kosketuskohteet ja leveys onnistuivat, mutta paneelin peitto, vaaka ja 400 %:n reflow estävät puhtaan GO:n.

Ennen betaa: korjaa löydökset 1 ja 2, päivitä PR:n kuvaus (löydös 8) ja yhdistä #178 niin, että molemmat lataukset säilyvät. Fyysisen iPhonen ja kitaran testit ennen tuotantoa.
