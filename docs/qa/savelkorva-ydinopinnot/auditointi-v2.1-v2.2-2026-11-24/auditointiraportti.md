# Riippumaton auditointi: 04 Sävelkorva ja melodia, Ydinopinnot v2.1 (PR #178)

Päivämäärä 24.11.2026. Auditoija: Claude (yksi agentti). Tämä on auditointi, ei toteutus: sovelluskoodia, testejä, PR:iä tai haaroja ei ole muutettu. Ainoa kirjoituskohde on tämä hakemisto.

## 1. Tiivistelmä

Toteutus on pedagogisesti ehjä ja käytettävä: kolmen harjoituksen perusrakenne toimii iPhone-simulaattorissa, suuntakuvat ovat luettavia, vertailukortit ja soiva/valittu-erottelu toimivat, kaikki automaattiset testit läpäisevät (yksi paikallinen WebKit-poikkeus on ympäristöselitteinen). Sävelfaktat ovat oikein.

Auditoinnissa ei löytynyt BLOCKERia. Kolme MAJOR-löydöstä vaatii päätöksen tai korjauksen ennen beta-yhdistämistä:

1. Tuplanapautus zoomaa sivun (touch-action puuttuu). Toistuu simulaattorissa; sivustonlaajuinen, ei #178:n regressio.
2. Melodiaparit 4 ja 8 ovat tonaalisesti epäselviä (asiantuntija-arvio, vaatii kuuntelutestin).
3. 02 tuomitsee kuulokokemuksen vääräksi (✗ valintasi, "Oikein!"), vaikka kysymys on "kuulostaa valmiimmalta" (SK-01).

Simulaattorilla ei kuunneltu ääntä. Musiikillinen päättyneisyys on siis asiantuntija-arvio ja omistajan kuuntelutesti on ehto.

Suositus: **GO KORJAUKSIN** (ei ehdotonta GO:ta, koska kuuntelu- ja laitetestit puuttuvat).

## 2. Testattu commit ja GitHub-tila

- PR #178 avoin Draft, base `beta`, HEAD `b6ff78713ec87fef7a688b0825e327f2fb8ed891` (vastaa promptia), MERGEABLE. Kaikki 9 checkia SUCCESS (static-and-storage, static, static-and-unit, browser-legacy, fresh-pdf, chromium, pdf-source, webkit-savelkorva, Cloudflare Pages).
- PR #179 HEAD `97a49fe0` (vastaa promptia). `beta` on nyt `9526b70` (promptin lähtötilanteen jälkeen edennyt D2-integraatiolla). 
- Esikatselun vastaavuus: `claude-116-savelkorva-ydinop.musiikin-kartta.pages.dev` palvelee `assets/melodia-ydinopinnot.js` ja `.css` tavu tavulta samoina kuin b6ff787. HTML eroaa vain Cloudflaren analytiikkaskriptin osalta. Testattu siis oikeaa committia.
- Paikallinen työpuu (`main`) koskematon. Kaikki ajot tehtiin erillisessä detached-worktreessä `~/src/Musiikin-kartta/audit-sk178` (poistettavissa: `git worktree remove`). Sen build muutti vain `*.js.map`-tiedostoja (tunnettu sivuvaikutus).
- Muistiinpano: prompti viittaa `docs/auditoinnit/`-polkuun, mutta repossa on vakiintunut `auditoinnit/`. Käytetty sitä.

## 3. Ympäristöt ja työkalut

- Xcode 27.2, iOS 27.2 -simulaattori **iPhone 16 Pro** (C473C410), Safari. Ohjaus: `simctl openurl`, ohjaustyökalun tap/swipe/screenshot/rotate/HOME, localhost-välityspalvelin + mittausskripti (`mittaus/proxy.py`, `probe.js`, `rc.py`; DOM-tilan luku ja Web Audio -kutsujen loki). IDB ja Maestro eivät ole asennettu.
- Playwright 1.56.1 (Chromium, WebKit), Node 22, Vitest 5.1.
- Huomio 1: työkalun oletuslaite vaihtui kerran toisen session laitteeseen (PR179-auditointi). Siitä otettiin vain yksi kuvakaappaus; omat napautukseni raportoitiin omalle laitteelleni ja annoin sen jälkeen laitteen aina erikseen.
- Huomio 2: sokkotesti jäi osittain: mittauslokini paljasti H1:n ensimmäisen melodian sävelet ennen vastausta. Muut tehtävät kierrettiin ilman sävelkenttiä. Lisäksi DOM-komennot voivat klikata piilotettuja painikkeita, joten tilakuvat otettiin oikeilla napautuksilla.
- Playwrightin iPhone 13 -emulaatio (oktaavi-, 5-sävel-, 320 px -testit) ei ole simulaattori. Merkitty erikseen.

## 4. Viisi tärkeintä johtopäätöstä

1. Perusrakenne toimii ja on omistajan havaintojen mukainen. Ensinäkymä on minimaalinen, suuntakuvat luettavissa, vertailukortit selkeät.
2. Tuplanapautus zoomaa sivun: toistuvat samat painallukset (Alas–Alas, Sama–Sama, G–A–G) ovat harjoitusten ydinliike.
3. 02:n kuulokysymys ja arviointi eivät ole sama asia, ja parit 4 ja 8 ovat heikoimmat. Suositus: vaihtoehto B (vertaileva palaute) tai A (vain selvät parit), ei C.
4. 03:n oktaavipalaute on harhaanjohtava ("kuului G, vastasit G ✗"), ja nopeasti tapailtu lataamaton sävel kirjautuu vastaukseen kuulumatta.
5. Generaattori on terve normaalissa käytössä (0 sääntörikkomusta 140 000 melodiassa), mutta dokumentaation väite suunnanvaihdosta ja vararatkaisu ovat epätarkkoja.

## 5. Harjoitus 01: Ylös, alas vai sama?

Havaittu simulaattorissa [H] ja lähteestä [L].

- Mitä oppija tekee: kuuntelee, merkitsee jokaisen sävelvaihdon kuvapainikkeilla, tarkistaa.
- Aluksi näkyy vain otsikko, yksi virke ja Kuuntele (kuva 01-aihesivu…; tilat kuvissa 02, 03, 03b). Vastausalue ilmestyy vasta kuuntelun jälkeen. Kolmen sävelen melodia näyttää 2 paikkaa (`?`), 5 sävelen 4. Poista poistaa yhden vastauksen kerrallaan. Tarkista näkyy vasta täydellä ketjulla. Vastauksen jälkeen painikkeet lukittuvat (aria-disabled).
- Palaute: "1/2 oikein. Vaihto 2: kuului ylös, vastasit alas." Virhe kohdistuu vaihtoon, ei säveleen. Kortit: malli ylhäällä, "sinä" alla, ✗ ja katkoviiva (ei vain väri). Seuraava melodia heti palautteen alla.
- Suuntakuvat: geometria vastaa sääntöä (ylös nousee vasemmalta oikealle, ontto piste edellinen). Ei vaadi ⓘ-ohjetta.
- Kitaran suuntaharha: teksti kertoo "korkeampi sävel", kuva on ylhäällä. Ohuempi kieli / suurempi nauha ei sekoitu tekstissä; ristiriitaa ei havaittu, mutta oikean kitaran koe puuttuu [T].
- Tuplanapautus: kaksi nopeaa Alas-painallusta zoomasi sivun 1,6-kertaiseksi, molemmat vastaukset kirjautuivat (SK-AUD-001, kuva 02).
- Arvattavuus [L, otanta 20 000/taso]: taso 1 paras kiinteä suuntakuvio `alas–ylös` osuu 32,9 % (tasainen arvaus 11,1 %); taso 2 17,1 % (3,7 %); taso 3 9,8 % (1,2 %). Generaattorin hyppysääntö suosii vuorottelua, joten "vuorottele" voittaa arvauksen selvästi. Ei virhe; kohtuullinen skenaario aloittelijalle. Kohdeyleisölle tehtävä voi olla liian helppo (taso 3 auttaa).
- Ydinkysymys: oppija tekee oikean asian itse ja kuulee muodon; pedagogisesti toimiva, mutta tasoa 1–2 voi arvata. Ei estä hyväksyntää.

## 6. Harjoitus 02: Kotiin vai kesken?

- Aloitus, Kuuntele molemmat, soi-tila, valinta, tarkistus kokeiltu oikeilla napautuksilla (kuvat 04, 06). Ajoitus mitattu: 7 nuottia/versio, 0,45 s välein, toinen versio alkaa +0,9 s ensimmäisen jälkeen, tukiääni mukana. Soiva ja valittu ovat eri tiloja ("✓ valittu · ▶ soi"). Loppu 1/2 soittaa ja valitsee, erillinen Tarkista valinta.
- Kontrasti: kaikki 16 kierrosta (8 paria × 2 järjestystä) tarkistettu ohjelmallisesti: alku identtinen, vain viimeinen sävel eroaa, sama rytmi, kesto, gain ja tukiääni. Sointivärin vihje: eri loppusävelet soivat eri kieliltä (G3 G-kieli, D4/C4 B-kieli, G4/F♯4 e-kieli), joten pieni sointiväri- ja sustain-ero on mahdollinen [T].
- Kriittinen kysymys: palaute ja arviointi tarkistavat vain "päättyikö G:hen". Väärä valinta saa ✗ valintasi ja tekstin "Tässä melodiassa loppu 1 kuulostaa valmiimmalta" (kuva 06). Se väittää kuulokokemuksen vääräksi (SK-01, SK-AUD-003).
- Tukiääni: tasolla 1 loppu G on oktaavissa/yhtäsuuruudessa bassoon, joten se voidaan ratkaista bassoon vertaamalla. Taso 2 ilman tukiääntä testaa varsinaista tonaalista hahmotusta. Taso nousee kahdella oikealla (50 % arvauksella 25 % kahdesti), ei mittaa taitoa luotettavasti.
- Jokaisen parin oikea loppu on G (6× G3, 2× G4): oppija voi oppia "valitse G-sävel" ilman päättyneisyyden kuulemista (SK-AUD-009).
- "Mitä opit?" -kortti on näkyvissä ennen yritystä ja kertoo säännön (SK-AUD-004).
- Vertailu vaihtoehtoihin:
  - A (säilytä oikea/väärä, vain selvät parit): vähentää riskiä, mutta ehdottomuus jää.
  - B (kuuntelukysymys + vertaileva palaute): säilyttää ydinoivalluksen parhaiten ja poistaa kuulokokemuksen tuomitsemisen. Suositus.
  - C (kysymys kotisäveleen palaamisesta): kapeampi ja paljastaa käsitteen ennen kokemusta.
  Suositus: B pohjaksi, A:n parikarsinta (4 ja 8) lisänä.

## 7. Harjoitus 03: Kuule ja etsi kitaralta

- Tapailu, ketju, tarkistus, virhekortit, Kitaralla-rivi ja Oma kulkusi kokeiltu (kuvat 05, 07, 08). Taso 1: B- ja G-kieli, 5 painiketta, ensimmäinen sävel annettu. Neljän sävelen tapailu 3 sävelen tehtävässä: ketju "Viimeksi soitetut" näyttää viimeiset 3, vanhin putoaa (kuva 05).
- Palaute: "1/3 oikein. Kahdessa sävelessä oli eroa." + sävelkortit + numeroidut paikat (toisto "1·3") + "Kitaralla: G-kieli, vapaa → G-kieli, 2. nauha → G-kieli, vapaa". Toimii hyvin; omistajan arvio "erityisen onnistunut" on perusteltu.
- Näytä sävelkulku: ei vaikuta tasoon [L, adapt ei kutsuta; check ei lukittu]. Toistuvat sävelet, järjestysnumerot ja aria-label ("sävel 1 ja 3 kulussa") toimivat.
- Oktaavi: G3 vs G4 erotetaan arvioinnissa, mutta kortit näyttävät vain "G" ja aria-label sanoo "kuului G, vastasit G" (toistettu, kuva 07; SK-AUD-005). Numeroitu ruudukko ja Kitaralla-rivi auttavat osittain.
- Nopea tapailu: lataamaton A3 napautettiin 120 ms ennen kahta muuta (viive 0,8 s): ketju A–G–B, mutta A3:n lataus keskeytyi eikä soinut (SK-AUD-006).
- Taso 1 on suppea: vain 16 mahdollista melodiaa, G3–A3–B3 15 % tehtävistä (tarkoituksellisesti helppo, mutta toistuu nopeasti).
- 5 sävelen palaute 320 px:ssä (kuva 08): ei vaakavieritystä; kortit rivittyvät 3+2; Tarkista y=763, Seuraava y=929, kortit y=981–1255, ruudukko y=404–620. Palaute ja ruudukko eivät mahdu yhteen 568 px -näkymään, mutta järjestys on looginen. Hyväksyttävä.
- Ydinkysymys: vapaa tapailu opettaa etsimään kuultu; ruudukon sävelmäärä on pieni (taso 1) ja jokaisella sävelellä on vain yksi paikka. Fyysisen kitaran taito jää [T]; sivu sanoo itse, ettei mittaa sitä.

## 8. Kognitiivinen läpikäynti (simuloitu, ei oikeita käyttäjiä)

- A. Aloittelija ilman kitaraa: 01 toimii kuvilla ja ilman teoriaa. 02 ymmärrettävä ("kumpi tuntuu päättyneemmältä"), "kotisävel" selitetään vasta palautteessa; sääntökortti kuitenkin etukäteen. 03 toimii virtuaalikitaralla; kielten ja nauhojen otsikot riittävät.
- B. 1–2 vuoden soittaja: 01 taso 1–2 liian helppo, taso 3 mielekäs. 02 kiinnostava, mutta pari 8 voi hämmentää (Am-sävy). 03 haastaa korvaa tasolla 3–4; Kitaralla-rivi yhdistää oikeaan soittoon konkreettisesti. Palaute auttaa.
- C. Kärsimätön: nopeat painallukset aiheuttavat tuplazoomin (SK-AUD-001) ja kirjaavat kuulumattomia säveliä (SK-AUD-006). Muuten eteneminen onnistuu ilman pelkoa; arvaamalla 02 etenee (50 %), mutta tämä on tietoinen vapaaehtoisuus. Ratkaisun näyttäminen ei nosta tasoa.

## 9. Mobiilikäytettävyys

Kuvat: `kuvakaappaukset/`. 01 aihesivu, 02 zoom, 03/03b H1-palaute, 04 H2-palaute, 05 H3-palaute, 06 H2 väärä valinta, 07 oktaavi (WebKit-iPhone 13 -emulaatio), 08 5 sävelen palaute (320/375 emulaatio).

- iPhone 16 Pro pysty: Ydinopinnot ensin ("0/3 kokeiltu", "Aloita tästä"), aiemmat 14 suljetussa ryhmässä. Kosketuskohteet vähintään ~54 pt; painikkeiden välit riittävät.
- Vaaka (simulaattori, H3): sisältö mahtuu, Safarin välilehtipalkki vie tilaa; ei sovelluksen vika.
- Pienempi laite: iPhone 17e oli käynnissä, mutta sillä ei testattu erikseen; 320/360/390 px ja 200 %/400 % katettu olemassa olevilla e2e-testeillä (32 läpi).
- Teema: sivusto ei seuraa järjestelmäteemaa (`prefers-color-scheme` ei esiinny CSS:ssä), pelkkä tumma teema. Vaaleaa ei voitu testata. (IDEA/ei vika)
- Zoomaus simulaattorin aA-valikolla ei tehty; vain automaatti.

## 10. Musiikillinen faktantarkistus

Riippumaton laskenta normaalivireestä (E2 40, A2 45, D3 50, G3 55, B3 59, e4 64 + nauha): kaikki 11 sävelpaikkaa, MIDI, sävelnimi ja tunniste oikein, 0 virhettä. B–C ja F♯–G ovat 1 puoliaskel, G3–A3 2, G3–D4 7 (puhdas kvintti). Nimeämisnormi B käytössä. Kaikille 11 sävelelle on m4a- ja ogg-tiedostot (`Fs4`-tunniste vastaa `Fs4`-tiedostoja). F♯3 puuttuu näytteistä eikä sitä käytetä; sivu ei väitä koko G-duuriasteikkoa. Oppijatekstit: "Soita sama oikealla kitaralla", "C3" jne. ei virheitä; F♯-teksti "puoliaskeleen G:n alapuolelle" on oikein.

## 11. Kahdeksan melodiaparin arviointi

Todentaminen: lähteestä [L] ja asiantuntija-arvio [A]. **Ääntä ei kuunneltu; kaikki vaikutelmat ovat [A] ja vaativat omistajan kuuntelutestin [T].** Mittaus: alku identtinen, vain loppusävel eroaa (16/16 kierrosta). Kodin ja kesken-loppujen rekisterit: G3/G4 vs A3, F♯4, D4, C4.

| Pari | Alku (sävelluokat) | Koti | Kesken | Mahdolliset tulkinnat | Tukiäänellä | Ilman tukiääntä | Epäselvyys | Suositus | Perustelu |
|---|---|---|---|---|---|---|---|---|---|
| 1 | G B D C A B | G3 (−4) | A3 (−2) | G-duuri; A = 2. aste | selvä | selvä | pieni | Säilytä | G-murtosointu aluksi, B→G ja B→A selkeä ero |
| 2 | D G F♯ E C E | G4 (+3) | F♯4 (+2) | G-duuri (F♯) | selvä | selvä | pieni | Säilytä | johtosävel F♯ vetää G:hen; vahvin kontrasti |
| 3 | G A B G C B A | G3 (−2) | D4 (+5) | G-duuri; D = 5. aste (sointusävel) | melko selvä | kohtalainen | D voi kuulostaa melko vakaalta | Säilytä, kuuntele | A→G askel alas vs hyppy D:hen |
| 4 | B C D B E D C | G3 (−5) | A3 (−3) | G-duuri tai **C-duuri** (ei F♯:a, ei G:tä/A:ta alussa, alku päättyy C:hen) | kohtalainen | **epäselvä** | C-keskeinen tulkinta; G voi kuulostaa jännittyneeltä | **Muokkaa** | lisää F♯ tai G alkuun; kuuntele ennen hyväksyntää |
| 5 | G F♯ E D C B A | G3 (−2) | C4 (+3) | G-duuri (F♯ määrittää) | selvä | selvä | C4:n ylöspäinen hyppy laskevan asteikon jälkeen | Säilytä | laskeva G-asteikko päättyy G:hen; C ei C-duurina tässä |
| 6 | G B D C E D E F♯ | G4 (+1) | D4 (−4) | G-duuri | selvä | selvä | D4 johtosävelen jälkeen ei-purkautuvana | Säilytä | F♯→G vs F♯→D |
| 7 | G D C B C A | G3 (−2) | D4 (+5) | G-duuri | melko selvä | kohtalainen | sama kuvio kuin pari 3 (A→G / A→D); D vakaa | Säilytä, harkitse vaihtelua | vähäinen varianssi pareihin 3 |
| 8 | E C A B D C B | G3 (−4) | A3 (−2) | **A-molli** (E–C–A on Am-murtosointu, ei F♯:a), C-duuri, G-duuri | kohtalainen | **epäselvä, A-loppu voi kuulostaa valmiimmalta** | tonika-A kesken-vaihtoehtona | **Muokkaa tai poista** | todennäköisin virhe: "kesken"-loppu on A-mollin koti |

Dokumentaation lupaus ("jokaisessa C erottaa G:n D:stä, osassa F♯ erottaa C-duurista") ei kata pareja 4 ja 8, joissa F♯ puuttuu. Parin 5 C-loppu on perusteltu F♯:n takia. D-loppujen (3, 6, 7) vaikutus on rajatapaus; kuuntelu ratkaisee.

## 12. Melodiageneraattori

Ajo: `mittaus/generaattori-testi.mjs`, tulokset `mittaus/generaattori-testi.tulos.txt`. Deterministinen siemen 116, 20 000 melodiaa/taso, 7 tasoa.

- Säännöt (tritonus, maksimihyppy kvintti, ei kolmea samaa, paluu, puoliaskelrajoite, lähtö- ja loppusävel): 0 rikkomusta 140 000:ssa.
- Yksilöllisiä: H1 178 / 917 / 1964; H3 16 / 220 / 535 / 2153.
- Suunnat ylös ~46 %, alas ~46 %, sama 6–9 %. H3 taso 1 ~68 % ylös (lähtö G3 on alin).
- **A. Vararatkaisu** `ids.slice(0,length)`: pakotetuilla RNG:illä (aina 0, aina 0,999999, vuorotteleva) tasoilla suunta 3 ja etsi 4 palauttaa `G3 A3 B3 C4 D4` / `D3 E3 G3 A3 B3` (nouseva, ei suunnanvaihtoa). Muut tasot tuottivat sallitut melodiat. Normaalissa otannassa vararatkaisua ei osunut kertaakaan (SK-AUD-008, SK-04 vahvistettu: poikkeuspolku olemassa, käytännössä saavuttamaton).
- **B. Toisto:** freshMelody ei toistanut edellistä 350 000 yrityksessä; kiinteällä RNG:llä palauttaa 20 yrityksen jälkeen saman, mutta ei jumita (raja 20). `pickIndex` ei toista samaa kierrosta, mutta sama melodiapari vastakkaisessa järjestyksessä tulee peräkkäin 9,4 % (tasajako 6,7 %), koska törmäys → (index+1) (SK-AUD-009).
- **C. Suunnanvaihto:** tarkistus vaatii vain ≥2 eri arvoa joukossa {ylös, alas, sama}; `ylös, sama, ylös, ylös` hyväksytään. Melodioita ilman sekä ylös- että alasliikettä: H1 taso 2 9,2 %, etsi 3 11,2 %, tasot 3/4 4 %. Dokumentaatio väittää "suunta vaihtuu" (SK-AUD-007).
- **D. Murtosointu:** toteutus tarkistaa vain kahden samansuuntaisen ≥ pienen terssin hypyn yhteislaajuuden (≤ 8 ps), ei sointurakennetta. Läpikäytyjen poolien kaikki 14 hyväksyttyä kuviota ovat kuitenkin G-duurin diatonisia kolmisointuja (G, C, Em, Am, Bm). Ei musiikillista virhettä, vain dokumentaatio–toteutus-ero.
- **E. adapt:** polku Oikea×2 → ylös, Väärä×2 → alas, rajat 1 ja ylin toimivat. Vaikeus mittaa vain pituutta ja sävelalaa, ei kuuntelutaitoa (SK-05).

## 13. Äänentoisto ja näyttötasot

Näyttötasot: 1 lähde, 2 Web Audio -kutsuista, 3 mitattu signaali, 4 kuunneltu, 5 fyysinen laite.

| Havainto | Taso |
|---|---|
| Ajoitus: H2 ioi 0,45 s, loppu 1,6 s, tauko 0,9 s, tukiääni ≤ 4,8 s (suunnittelun kanssa, gain 0,40/0,42, bassoa 0,2) | 1, 2 (simulaattori source-start-loki) |
| H1 ioi 0,62, H3 0,70 (lähteestä) | 1 |
| Tukiäänen ja melodian aloitus samassa ajassa; versioiden välinen tauko | 2 |
| Ensimmäinen toisto: ~0,75 s tapista äänen alkuun (ei esilatausta; simulaattori, Cloudflare) | 2 |
| Kuuntele-painikkeen toggle ja pysäytys, kilpailutilanne (uusi toisto keskeyttää edellisen) | 1, 2 (e2e) |
| Taustalle siirto kesken toiston: UI palasi lepotilaan, AudioContext `running` | 2 (simulaattori). Todellinen ääni [5] |
| Nopean tapailun lataamaton sävel kirjautuu ilman ääntä | 2, 1 |
| Soiva-merkinnän ajoitus: seuraa `currentTime`-kellosta | 1 |
| Äänenlaatu, balanssi, loppusävelten riittävyys, sointiväri, jäljiteltävyys | **ei kuunneltu; [4][5] avoin** |
| Latausvirheestä palautuminen | 1 (e2e "latausvirhe näkyy") |

Mittaus-/kuuntelurajoite: simulaattori ei todenna iPhonen kaiutinta, Bluetoothia eikä äänettömän tilan/lukituksen vaikutusta.

## 14. Saavutettavuus

- Saavutettavat nimet: suuntapainikkeet "Ylös: korkeampi sävel" (näkyvä "Ylös" sisältyy nimeen), ketju "Vaihto 1: …", ruudukko "G, G-kieli, vapaa, sävel 1 ja 3 kulussa". Tila: aria-pressed (02), aria-disabled lukituksessa, polite-status kuuluttaa palautteen.
- Fokus: aria-disabled säilyttää fokuksen. Vahvistettu WebKit-Playwrightilla (Alt+Tab → Tarkista valinta, Enter → fokus pysyy). Paikallinen WebKit-virhe `:480` johtuu macOS-WebKitin Tab-oletuksesta (Tab ohittaa painikkeet), ei sovelluksesta; CI:n Linux-WebKit läpäisi.
- Ongelma: oktaavikortin nimi "kuului G, vastasit G" (SK-AUD-005).
- Väristä riippumattomuus: ✓/✗, katkoviiva, "▶ soi", "✓ valittu" kaikissa. Poikkeama: soi- ja valmiimpi-tila käyttävät molemmat vihreää kehystä (SK-AUD-011).
- Kontrastit: ei erillistä mittausta; ulkoasu tumma, teksti vaalea (visuaalinen tarkastus ok). ARIA-testi ei korvaa ruudunlukijaa: **VoiceOveria ei testattu**.
- Pedagoginen rajoite: kuunteluun perustuva sisältö; tekstivastinetta ei tule lisätä (paljastaisi vastauksen).

## 15. Automaattiset testit

Katso `testitulokset.md`. Yhteenveto commitilla b6ff787:
- `npm run check` EXIT 0: lint ok, Vitest 44 tiedostoa / 728 testiä, build ok.
- Chromium e2e (aihekohtainen): 32 läpi, 2 ohitettu.
- WebKit (`playwright.savelkorva-116-webkit.config.ts`): 31 läpi, 1 epäonnistui (ympäristöselitteinen), 2 ohitettu.
- `rakenna.py --tarkista`: EXIT 0.
- Ei ajettu: koko `npm run test:e2e` (1142-testin regressio), `responsive.spec.ts:259` ei siksi toistunut; linkkitarkistuskomentoa ei erikseen ajettu (kuuluu CI:n static-checkeihin, jotka olivat SUCCESS).

## 16. Vanhojen sisältöjen säilyminen

- Kaikki 14 vanhaa HTML-tiedostoa ovat paikallaan; base 454aee5 → b6ff787 ei poistoja tai uudelleennimeämisiä hakemistoissa `oppi/` ja `assets/`; `harjoitus:`-tunnisteet ja lukutunnisteet identtiset (esim. `harjoitus:kumpi-on-molli`).
- Projektin e2e kattaa: vanhat merkinnät säilyvät eivätkä kuittaa uusia, Edellinen/Seuraava-ketju, 14 linkkiä + 3 uutta (testit läpäisevät). Aihesivulla "0/14 aiemmista sisällöistä tehty" ja "0/3 kokeiltu" erillään.
- Ilman JavaScriptiä: kaikki kolme uutta sivua saavutettavissa, ja sivulla lukee "Ääniesimerkki tarvitsee JavaScriptin ja selaimen äänituen." Ryhmittelyn ymmärrettävyys: neljä ryhmää suljettuna ok. Vanhoissa sisällöissä ei löytynyt merkittäviä virheitä tässä auditoinnissa (sisältöjen musiikkia ei läpikäyty).

## 17. Yhteensopivuus PR #179 ja beta

- Kumpikin PR yhdistyy nykyiseen betaan (9526b70) erikseen puhtaasti (`git merge-tree`, ei tekstiristiriitoja).
- #178 + #179: 5 tekstiristiriitaa: `tools/oppimiskartta/rakenna.py` (molemmat lisäävät oman skriptilohkonsa, pidä molemmat), `tests/oppimiskartta-kokonaisuudet.test.ts`, `tests/e2e/lukumerkinnat.spec.ts`, `aihelista.spec.ts`, `aihesivut.spec.ts` (#178 kovakoodaa korva/rytmi/soinnut, #179 yleistää `aiheet.json`:n `progress_text`-tietoon). `index.html` ja `aiheet.json` yhdistyvät automaattisesti.
- Semanttinen riski pieni: #179:n datalähtöinen laskenta kattaa korva-aiheen, koska `progress_text` on #178:ssa. Yhdistetyn version rakennus- ja testiajoa **ei suoritettu**.
- Suositus: yhdistä #179 ensin (yleistetyt testit), sitten päivitä #178 sen päälle ja ota datalähtöiset testit; vaihtoehtoisesti toisinpäin, ristiriidat samat. Yhdistäminen on omistajan päätös.

## 18. SK-01–SK-06

| Tunniste | Tila | Vakavuus |
|---|---|---|
| SK-01 oikea/väärä päättyneisyydessä | Vahvistettu [H][L] | MAJOR (SK-AUD-003) |
| SK-02 parit, C/D-loput | Osin vahvistettu: parit 4 ja 8 ongelmallisia [A], 5 ok, D-loput rajatapauksia; vaatii kuuntelun [T] | MAJOR (SK-AUD-002) |
| SK-03 tapailu/viimeiset N | Ymmärrettävä: label "Viimeksi soitetut" ja ketju näyttävät säännön; ylimääräinen ohje ei ole välttämätön | Ei löydöstä |
| SK-04 vararatkaisu | Vahvistettu pakotetulla RNG:llä; käytännössä saavuttamaton | MINOR (SK-AUD-008) |
| SK-05 adaptiivinen vaikeus | Toimii teknisesti; ei mittaa kuuntelutaitoa (02: 2 oikeaa arvauksella 25 %) | IDEA |
| SK-06 ääninäytteet demoiksi | Lähdelinkit ja CC0 näkyvät sivulla ("Ääninäytteet: Meta Open Sound"); ääni käynnistyy vain painalluksesta | Ei löydöstä |

Promptin lisähavainnot: oktaavipalaute vahvistettu, suunnanvaihto vahvistettu, murtosointu = vain dokumentaatioero, nopeat painallukset vahvistettu.

## 19. Löydökset vakavuusjärjestyksessä

Kaikissa: commit b6ff787. Uusi = ei tunnistettu aiemmin.

**SK-AUD-001 MAJOR [H][L] · kaikki harjoitukset · simulaattori iPhone 16 Pro · Uusi (sivustonlaajuinen, ei #178:n regressio)**
Toisto: H1 Kuuntele, napauta Alas kahdesti nopeasti. Odotus: kaksi vastausta, sivu ennallaan. Todellinen: Safari zoomaa (visualViewport.scale 1,6, kuva 02); `touch-action: auto`, CSS:ssä 0 `touch-action`-määrittelyä (`assets/*.css`), viewport ei estä zoomia. Vaikutus: harjoitusten ydinliikkeet (sama painike peräkkäin: Alas–Alas, Sama–Sama, toistuva sävel) rikkovat asettelun. Korjaus: `touch-action: manipulation` painikkeille (`.melodia-*`); sivustolaajuisesti harkittava. Sivuvaikutus: estää tuplanapautuszoomin vain näillä elementeillä; pinch-zoom säilyy.

**SK-AUD-002 MAJOR [L][A][T] · 02 · Uusi · Pari 4 ja 8**
Odotus: kesken-loppu kuulostaa vähemmän valmiilta. Todennäköinen: pari 8 alkaa A-molli-murtosoinnulla ilman F♯:a, ja A3-loppu on Am-tonika; pari 4 painottuu C:hen. Vaikutus: oppija voi oikein kuullen valita "väärin". Korjaus: lisää F♯ tai G pareihin 4 ja 8 tai korvaa pari 8; validoi kuuntelulla. Sivuvaikutus: kierrosmäärä tai testien kiinteät odotukset.

**SK-AUD-003 MAJOR [H][L][A] · 02 · SK-01 vahvistettu**
Todellinen: väärä valinta saa "✗ valintasi" ja "Tässä melodiassa loppu 1 kuulostaa valmiimmalta" (kuva 06); oikea "Oikein!". Vaikutus: väittää kuulokokemuksen virheelliseksi, kun hyväksyttävä tulkinta on mahdollinen. Korjaus: vaihtoehto B: neutraali "Tässä G:hen palaava loppu on kotiin päättyvä; sinä valitsit …, joka …", ✗-merkintä pois tai "Toinen" -tyyppinen. Sivuvaikutus: e2e-tekstit, `endingFeedback`-testit.

**SK-AUD-004 MINOR [H][L] · 02 · Uusi**: "Mitä opit?" näkyy ennen yritystä ja kertoo säännön (G-duuri, G:hen palaava). Ristiriita lukitun periaatteen kanssa (kotisävel kokemuksen jälkeen). Korjaus: näytä kortti vasta ensimmäisen tarkistuksen jälkeen tai poista sääntölause.

**SK-AUD-005 MINOR [H] · 03 · Uusi (promptin kysymys)**: oktaavivirhe näkyy "G / G ✗", aria-label "kuului G, vastasit G" (kuva 07, WebKit-emulaatio). Korjaus: lisää korttiin kieli/nauha tai oktaavimerkki (esim. "G (G-kieli)"), aria-labeliin sama.

**SK-AUD-006 MINOR [H] · 03 · Uusi**: lataamaton sävel kirjautuu ketjuun, vaikka lataus keskeytyy eikä ääni soi. Korjaus: esilataa tehtävän poolin sävelet Kuuntele-painalluksella tai kirjaa sävel vasta onStart-vaiheessa. Sivuvaikutus: ~11×55 kt dataa.

**SK-AUD-007 MINOR [L][H] · 01, 03 · Uusi**: dokumentaation "suunta vaihtuu vähintään kerran" vs. toteutus (9,2 %/11,2 %/4 % melodioista vain nousuja tai vain laskuja + toisto). Korjaus: joko tarkenna dokumentaatio tai vaadi sekä ylös että alas.

**SK-AUD-008 MINOR [L] · SK-04**: vararatkaisu rikkoo suunnanvaihdon pakotetulla RNG:llä. Korjaus: kiinteä validi vara-melodia tasoa kohden.

**SK-AUD-009 MINOR [L][A] · 02**: (a) sama melodiapari vastakkaisessa järjestyksessä peräkkäin 9,4 %; (b) oikea loppu on aina G (kuuntelun sijaan sävelluokan oppiminen). Korjaus: `pickIndex` ilman (index+1) → sama pari; harkitse parien lisäämistä, joissa koti ei ole G.

**SK-AUD-010 MINOR [L][A] · 01, 03**: H1 vuorottelukuviot arvattavissa (32,9 % taso 1); H3 taso 1 vain 16 melodiaa. Korjaus: ei välttämätön.

**SK-AUD-011 MINOR [H] · 02**: soiva ja valmiimpi käyttävät molemmat vihreää kehystä; "✗ valintasi · ▶ soi" rivittyy ja painikkeen korkeus muuttuu. Korjaus: erota kehysvärit.

**SK-AUD-012 IDEA [H][A]**: ensimmäinen toisto ~0,75 s viiveellä; ei esilatausta. Sivusto vain tumma teema.

**Ei vahvistettu:** äänenlaatu, taustalle siirron todellinen äänikäyttäytyminen, VoiceOver, oikean kitaran siirto.

## 20. Säilytä / muuta / poista / lisää

| | |
|---|---|
| Säilytä | kolmen harjoituksen rakenne, kuvapainikkeet, soi/valittu-erottelu, vertailukortit, Kitaralla-rivi, Näytä sävelkulku, vapaa tapailu, vapaaehtoinen eteneminen |
| Muuta | 02:n palaute (B), parit 4 ja 8, kortti "Mitä opit?" ajoitus, touch-action, oktaavikortit, tapailun esilataus/kirjaus |
| Poista | ei mitään |
| Lisää | (valinnainen) pari, jossa koti ei ole G; dokumentaation korjaus suunnanvaihdosta |

## 21. Fyysisellä iPhonella vielä testattavat

Äänen kuuluvuus ja balanssi, Bluetooth, äänetön tila ja lukitus, taustalle siirto ja paluu (ääni jatkuuko), tuplanapautuszoomin korjaus, ensimmäisen toiston viive mobiiliverkossa, VoiceOver, suurennus ja koko näytön käyttö.

## 22. Oikealla kitaralla vielä testattavat

03:n sävelkulun löytäminen soittamalla; "Kitaralla"-rivin paikat; vaihtoehtoiset samat sävelkorkeudet muualla otelaudalla (sivu ei sano, että ne kelpaavat); suuntakuvan ja nauhanumeron yhteys.

## 23. Mitä ei tarkistettu ja miksi

- Oikeaa kuuntelua: työkaluja ei ole; kaikki musiikilliset vaikutelmat [A].
- VoiceOver ja fyysinen iPhone: ei saatavilla.
- Vaalea teema: sivusto vain tumma.
- iPhone 17e erikseen, simulaattorin zoomit ja 400 % reflow käsin: katettu vain Playwrightilla.
- Koko `npm run test:e2e` -regressio ja `responsive.spec.ts:259`: ei ajettu (aikarajaus).
- Yhdistettyjen #178+#179 rakennus/testit: ei ajettu, vain ristiriitaluettelo.
- Kontrastien numeerinen mittaus.
- Vanhojen 14 sisällön musiikillinen sisältö.

## 24. Hyväksyntäsuositus

**GO KORJAUKSIN.**

| Osa-alue | Suositus | Perustelu |
|---|---|---|
| Pedagoginen oikeellisuus | GO KORJAUKSIN | Ydin toimii; 02:n palaute (B) ja "Mitä opit?" -ajoitus korjattava |
| Musiikillinen oikeellisuus | GO KORJAUKSIN, ehto: omistajan kuuntelutesti | Faktat oikein; parit 4 ja 8 epäselviä, kuuntelua ei tehty |
| Mobiilikäytettävyys | GO KORJAUKSIN | Layout hyvä; touch-action-korjaus |
| Saavutettavuus | GO, VoiceOver avoin | ARIA ja fokus ok automaattisesti; ruudunlukijaa ei testattu |
| Tekninen toimivuus | GO | check, e2e, generaattori ok; pienet MINORit |
| Regressiovalmius | GO | Vanhat 14 säilyvät; #179-yhdistäminen vaatii mekaanisen ristiriitojen ratkaisun |
| Fyysisen laitteen testausvalmius | Ehdollinen | Laitetestit kohdissa 21 ja 22 vielä tekemättä |
| Kokonaissuositus | GO KORJAUKSIN | Ei BLOCKERia; kolme MAJORia käsiteltävä |

Päätökset erikseen:
- Pedagoginen hyväksyntä: kyllä korjausten (SK-AUD-002–004) jälkeen ja kuuntelutestillä.
- Tekninen hyväksyntä: kyllä.
- Välttämättömät korjaukset ennen beta-yhdistämistä: SK-AUD-001, 002, 003. Suositeltavat: 004, 005, 006.
- Jatkokehitys: 007–012.
- Avoimet testit: omistajan kuuntelutesti (kaikki 8 paria, erityisesti 4 ja 8), fyysinen iPhone, oikea kitara, VoiceOver.

Hyväksyntäsuositus ei ole lupa yhdistää PR:ää.

---

# Liite: uusinta-auditointi 25.11.2026, PR #178 HEAD `5df155823253c106af6d1c3d5e9b9499790febce` (v2.2)

Aiemmat osat 1–24 koskevat commitia `b6ff787` (v2.1) ja ovat historiaa. PR:n HEAD on sen jälkeen siirtynyt kolmella commitilla (`d1cce65` korjaukset, `4e0f769` regressiotestit K1–K6, `5df1558` dokumentaatio). Tämä liite kirjaa omistajan luvalla ajetut lisätestit v2.2:lle. Lähdekoodia, testejä, PR:iä tai beta-yhdistämisristiriitaa ei muutettu.

## L1. Todentamistavat tässä liitteessä

- **Ohjelmallisesti todennettu äänentoisto** [taso 2]: Playwright WebKitin (macOS) sivulle injektoitu tallennin kirjaa jokaisen `createBufferSource().start/stop`-kutsun, sävelen (näytteen nimi), ajastuksen, `AudioContext`-tilan, haut ja napautukset. Skripti `mittaus/aanitestit-v22.mjs`.
- **Todellista ihmisen kuunteluhavaintoa ei ole yhtään.** Ääntä ei kuunneltu, eikä mikään tämän liitteen väite koske sitä, miltä ääni kuulostaa. "Kuuluva" tarkoittaa tässä vain ohjelmallisesti arvioitua ajastettua ja katkaisematta jäänyttä lähdettä.
- Playwright-WebKit ei ole iOS-simulaattori eikä fyysinen iPhone; 320–375 px -testit ovat emulaatiota.

## L2. Tukiäänen säilyminen toisen tarkistetun tehtävän uudelleenkuuntelussa (SK-AUD-013)

**Vahvistettu todellisilla äänitapahtumilla.** Koodi: `drone = () => LEVELS.koti[endingLevel(progress.checked)].drone`; `progress.checked++` tapahtuu Tarkista valinta -painalluksessa ja `endingLevel(2) = 1` (ei tukiääntä). Mittaus (seed 7, G2-tukiäänen näytteiden lukumäärä, kaikki tarkistukset tehty valinnalla, joka kirjaa tehtävän kerran):

| Vaihe | progress | G2-tukiääniä | Sivun infoteksti |
|---|---|---|---|
| T1 Kuuntele molemmat | 0 | 2 (yksi/versio) | "Matala G soi taustalla tukiäänenä." |
| T1 Loppu 1 | 0 | 1 | sama |
| T1 uudelleenkuuntelu tarkistuksen jälkeen | 1 | 2 | sama |
| T2 Seuraava (soi heti) | 1 | 2 | sama |
| **T2 Kuuntele molemmat tarkistuksen jälkeen** | **2** | **0** | **"Matala G soi taustalla tukiäänenä." (vanhentunut)** |
| **T2 Loppu 1 / Loppu 2 tarkistuksen jälkeen** | **2** | **0 / 0** | sama |
| T2→T3 Seuraava | 2 | 0 | "Ilman tukiääntä." |

Johtopäätös: toisen tehtävän tarkistuksen jälkeinen uudelleenkuuntelu soi **ilman tukiääntä**, vaikka oppija kuuli ja valitsi tehtävän tukiäänellä ja infoteksti yhä väittää tukiäänen soivan. Palaute lisää kyllä "Seuraavaksi ilman tukiääntä." (mutta se koskee seuraavaa tehtävää). Vaikutus: vertailukuuntelu eroaa siitä, mitä valintaa tehtäessä kuultiin, ja infoteksti on virheellinen. Vakavuus MINOR [H]. Rajattu korjaus: laske tukiäänitaso tehtävän alussa ja pidä se tehtävän ajan (`const droneForTask` newTaskissa) tai päivitä infoteksti tarkistuksessa. Sivuvaikutus: pieni; testi K-sarjassa kiinnittää nykyisen laskentatavan.

(Huomio: rivi "T3 Kuuntele molemmat" näytti 0 lähdettä, koska Seuraavan automaattisoitto oli vielä käynnissä ja testin klikkaus pysäytti sen. Se ei ole vika.)

## L3. Harjoitus 02: keskeytys ja latausvirhe, kun tehtävä ja loput ovat näkyvissä

[Taso 2: ohjelmallisesti todennettu; skripti osat `keskeytys`, `keskeytys2`.]

- **Näkyvissä olevan tehtävän latausvirhe ei ole mahdollinen**: kun tehtävä on näkyvissä, molempien loppujen kaikki sävelet on jo ladattu ja välimuistissa. Verkon katkaisu tässä tilassa: Loppu 2 soi normaalisti, haku-yrityksiä 0 (E1).
- **Keskeytys (`ctx.suspend()`) kesken Loppu 2 -toiston** (A): viesti "Kuuntelu keskeytyi. Voit kuunnella uudelleen.", ▶ soi poistuu, **valinta säilyy** (✓ valittu), Tarkista valinta säilyy käytettävissä. Tarkista valinta onnistuu myös keskeytyneen kuuntelun jälkeen (oppija voi vahvistaa valinnan kuulematta loppua loppuun; hyväksyttävä, vapaaehtoisuus). Uusi Loppu-painallus palauttaa kontekstin (`suspended → running`) ja soi.
- **Keskeytys Kuuntele molemmat -toiston aikana** (B): viesti näkyy, ei valintaa, Kuuntele molemmat toimii heti uudelleen.
- **`visibilitychange` (hidden) ja `pagehide`** kesken toiston (C): molemmat pysäyttävät ja näyttävät keskeytysviestin, valinta säilyy.
- **Keskeytys tarkistetun vastauksen uudelleenkuuntelussa** (D): palaute ja valinta eivät muutu (`checked`-tila ei nollaudu).
- **Latausvirhe Seuraava-painalluksessa, kun uusi tehtävä vaatii lataamattoman sävelen (E4), verkko poissa**: viesti "Ääniä ei voitu ladata. Kokeile uudelleen.", tehtävä ja Loput piiloutuvat (uusi tehtävä ei avaudu ilman kuultua ääntä), haku kokeilee m4a ja ogg. Palautuminen: Kuuntele molemmat toimii verkon palattua (debug-ajo; skriptin variantti `keskeytys2` ei osunut lataamattomaan säveleen, joten se ei tuottanut itse tulosta).
- **Hidas verkko (13,5 s viive, aikakatkaisu 12 s) uudessa tehtävässä**: **ei toistettu**, koska satunnaisjakauma ei tuottanut lataamatonta säveltä; lähdekoodista aikakatkaisu 12 s pysäyttää ja näyttää "Äänen käynnistys kesti liian kauan". Merkitty avoimeksi.
- Todennettu: näkyvissä olevassa tehtävässä ei ole piiloutumatonta tilaa, jossa Loppu-painike epäonnistuisi latauksessa; ainoa mahdollinen katkos on keskeytys (A–D), ja se käsitellään siististi.

## L4. Harjoitus 03: tapailun vaste ja kirjautuminen eri tahdeilla

[Taso 2. Skripti `tapailu2` ja `tapailu3`. Tehollinen kuuluvuus lasketaan lähteen `start(when)` ja viimeisen `stop`-kutsun perusteella, tulokset ovat ohjelmallisia arvioita.]

v2.2 kirjaa sävelen vastausketjuun vasta kun se on ehtinyt kuulua (`createEchoChain`, tiketit, vahvistus `AUDIBLE_AFTER`:n jälkeen). Tulokset:

- **Esilatausta käyttävä taso 1** (pool ladattu newTaskissa): kaikki viisi sävelpaikkaa valmiina ennen tehtävän näkyvyyttä. Viive napautuksesta ääneen 0–2 ms kaikilla viiveillä 0/400/1500 ms.
  - Tahti 30 ms: vain **viimeinen** napautus kirjautuu (`[D ? ?]`); kaksi ensimmäistä katkaistiin 27–56 ms kuluttua eivätkä kirjaudu.
  - Tahti ≥ 100 ms: kaikki kolme kirjautuvat (`[B C D]`); kunkin sävelen kuuluva kesto ≈ tahti (94–1100 ms, viimeinen koko kesto).
- **Tason 2 uudet sävelet (E4, F♯4, G4, esilataus kesken, siemen 2)**:

| Verkkoviive | Tahti | Ketju | Äänet (ms kuuluvaa) | Huomio |
|---|---|---|---|---|
| 0 | 30 / 60 | `[G ? ?]` | E:27/56, F♯:0/54, G:1100 | vain viimeinen kirjautuu |
| 0 | 100–600 | `[E F♯ G]` | E:94–595, F♯:94–595, G:1100 | kaikki kirjautuvat ja kuuluvat |
| 600 | 30–250 | `[G ? ?]` | vain G (viive 10–446 ms) | lataamattomat E4/F♯4 eivät soi eivätkä kirjaudu |
| 600 | 600 | `[E F♯ G]` | E:91 (viive 506 ms), F♯:598, G:1100 | kirjautuu, kun kuului |
| 2500 | 30–150 | `[? ? ?]` | ei yhtään; status "Ladataan kitaran ääniä…" | ei kirjauksia ennen ääntä |
| 2500 | 250 / 600 | `[G ? ?]` | G:1100 (viive 1,2–1,9 s) | vain kuultu sävel kirjautuu |

Johtopäätös: **SK-AUD-006 on korjattu**: ketjussa ei ollut yhtään säveltä, jolla ei olisi ollut ajastettua ja kuuluvaa ääntä (sarake "ketjussa mutta ei kuuluvaa ääntä": tyhjä kaikissa 33 ajossa). Huomioitavaa (IDEA): hyvin nopea tai lataamattomien sävelten napautus ei kirjaudu eikä tuota virheviestiä (vain ensimmäisen kerran "Ladataan…" 400 ms jälkeen); oppija voi hämmentyä, miksi ketju ei täyty. Ensimmäinen napautus lataamattomaan säveleen kuuluu vasta latauksen jälkeen (viive = verkkoviive).

## L5. Tehtävän vaihtaminen kesken äänentoiston

[Taso 2. Skripti osa `vaihto`; vanhojen lähteiden tehollinen loppu verrattuna uuden tehtävän ensimmäiseen ääneen.]

| Tilanne | Vanhoja päällekkäin uuden kanssa | Stop-kutsuja vaihdon jälkeen |
|---|---|---|
| 01 Seuraava kesken Kuuntele-toiston (3 lähdettä ajastettu) | 0 | 5 |
| 02 Seuraava kesken Kuuntele molemmat -toiston (20 ajastettu) | 0 | 31 |
| 03 Seuraava kesken Kuuntele-toiston | 0 | 5 |
| 03 Seuraava kesken Oma kulkusi -toiston | 0 | 5 |

Vanha ääni vaimennetaan (25 ms) ja tulevat lähteet peruutetaan (`stop(0)`) ennen uuden toiston alkua; uusi toisto ajastuu +0,1 s. Ei päällekkäistä ääntä. (Ensimmäinen ajo antoi vääriä päällekkäisyyslukuja, koska oletin kaikkien lähteiden kestävän 1,1 s; laskenta korjattiin käyttämään ajastuksessa annettua loppuaikaa. Vain korjattu tulos raportoitu.)

## L6. 320–375 px täydentävä selaintesti (WebKit, iPhone 13 -emulaatio)

| Näkymä | Vaakavieritys | touch-action painikkeella | Alle 44 px kohteet |
|---|---|---|---|
| 320×568, 375×667; 01, 02, 03 (alku, kuunneltu, tarkistettu) | ei yhdessäkään (docW = viewport) | `manipulation` | vain tekstilinkit: lähdelinkki "Meta Open Sound…" 41 px korkea; 03:ssa "Riffikaiussa" -tekstilinkki 18 px (rivinsisäinen) |

Painikkeet ovat kaikki ≥ 44 px kummallakin leveydellä kaikissa kolmessa tilassa. Sivun korkeus 1557–1827 px. 5 sävelen palaute 320 px:ssä käsitelty jo aiemmin (osa 7). Tuplanapautuszoomin korjaus: `touch-action: manipulation` on voimassa (lasketun tyylin tarkistus); **todellista zoomin estymistä ei toistettu simulaattorissa tässä ajossa** [T/H avoin].

## L7. macOS-WebKit-näppäimistötesti

[Taso 2; Playwright WebKit Desktop Safari, macOS. Alt+Tab siirtää fokuksen painikkeelta toiselle.]

Kaikissa kolmessa harjoituksessa: Enter Kuuntele-painikkeella käynnistää toiston (fokus säilyy Kuuntele/Pysäytä-painikkeella); Space/Enter vastaus; **Tarkista-painikkeen Enterin jälkeen fokus pysyy Tarkista-painikkeella** (`aria-disabled`, ei fokuksen putoamista); Seuraava + Enter siirtää fokuksen Kuuntele/Pysäytä-painikkeelle, ja uusi tehtävä alkaa (Alt+Tab-askeleita 1–4 per vaihe). Pelkkä Tab Kuuntele-painikkeelta menee ⓘ-yhteenvetoon eikä painikkeelle: macOS-Safarin oletus (painikkeet vaativat Alt+Tab tai "Täysi näppäimistökäyttö"), ei sovellusvika. Projektin oma WebKit-testi `:480`, joka epäonnistui v2.1:llä paikallisesti, **läpäisee nyt** (59 läpi).

## L8. Automaattiset testit v2.2:lle (commit 5df1558)

- `npm run check` EXIT 0: Vitest 44 tiedostoa / **767** testiä läpi, lint ja build ok.
- Chromium e2e (aihekohtainen): **59 läpi, 3 ohitettu**, 0 epäonnistunut.
- WebKit (`playwright.savelkorva-116-webkit.config.ts`): **59 läpi, 3 ohitettu**, 0 epäonnistunut.
- `rakenna.py --tarkista` EXIT 0.
- Ei ajettu: koko `npm run test:e2e` (1142) ja `responsive.spec.ts:259`.

## L9. v2.1-löydösten tila v2.2:ssa (koodista ja testeistä, ei täysi uusinta-auditointi)

| Löydös | Tila v2.2:ssa |
|---|---|
| SK-AUD-001 touch-action | `manipulation` nyt painikkeilla (todennettu lasketusta tyylistä); todellinen zoomin esto simulaattorissa vielä testaamatta |
| SK-AUD-002 parit 4 ja 8 | Ei muutettu (koodikommentti: ei muuteta ilman omistajan kuuntelutestiä); **edelleen avoin** |
| SK-AUD-003 02 oikein/väärin | Muutettu vertailevaksi palautteeksi ("Loppu X oli sinun valintasi…") ilman ✗-merkintää (todennettu koodista ja palautetekstistä) |
| SK-AUD-004 "Mitä opit?" ennen yritystä | Sääntölause poistettu; kortti kertoo vain yleisesti lopetuksen vaikutuksesta (HTML-diff) |
| SK-AUD-005 oktaavikortti | `octaveHint` lisätty (lähteestä; ei ajettu uudelleen selaimessa) |
| SK-AUD-006 lataamaton sävel ketjussa | **Korjaus todennettu** (L4) |
| SK-AUD-007 suunnanvaihto | Tarkistus `melodyProblem` yhä "≥ 2 eri liikettä"; dokumentaatiota tarkennettu; käytännössä sama kuin ennen |
| SK-AUD-008 vararatkaisu | `fallbackMelody` valitsee sallitun melodian (lähteestä) |
| SK-AUD-009 sama pari | `pickRound` estää saman melodian vastakkaisessa järjestyksessä (lähteestä) |
| SK-AUD-011/012 | Ei käsitelty tässä |
| Uusi: SK-AUD-013 tukiääni uudelleenkuuntelussa | MINOR, ks. L2 |

## L10. Mitä ei tehty tässä liitteessä

Ihmisen kuuntelua; fyysistä iPhonea; VoiceOveria; todellista tuplanapautuszoomin estymisen kokeilua simulaattorissa v2.2:lla; hitaan verkon 12 s -aikakatkaisun toistoa uudessa tehtävässä; tason 3–4 tapailua eri tahdeilla; koko e2e-regressiota; beta-yhdistämisristiriidan ratkaisua (ohjeen mukaan).

## L11. Päivitetty suositus

Edelleen **GO KORJAUKSIN**, nyt kapeampana: v2.2 korjaa suurimman osan v2.1:n löydöksistä. Ennen beta-yhdistämistä: (1) omistajan kuuntelutesti pareille 4 ja 8 (SK-AUD-002), (2) todellinen iPhone-/simulaattorikoe zoomin estymisestä, (3) SK-AUD-013 (tukiääni uudelleenkuuntelussa) korjattava tai hyväksyttävä tietoisesti. Hyväksyntäsuositus ei ole lupa yhdistää PR:ää.
