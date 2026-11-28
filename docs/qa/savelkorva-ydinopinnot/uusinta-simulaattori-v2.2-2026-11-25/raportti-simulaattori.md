# Sävelkorva v2.2 – paikallinen uusintatestaus (PR #178)

**Tila: vaihe 1 ja vaihe 2 tehty ohjelmallisesti ja hiljaisesti. Ihmisen tekemää kuuntelua ei ole tehty lainkaan (omistajalle).**

| | |
|---|---|
| Testattu commit | `5df155823253c106af6d1c3d5e9b9499790febce` (= haaran `claude/116-savelkorva-ydinopinnot` kärki, tarkistettu `git fetch` jälkeen 25.11.2026) |
| Esikatselu | https://0b5aaa88.musiikin-kartta.pages.dev (Cloudflare-kommentti: Latest commit `5df1558`) |
| Laite | iPhone 16 Pro, iOS 27.2, Xcode-simulaattori, oma laite UDID `0BFEADCD-EFC4-48D7-99E9-5680802F7532` |
| Selain | Simulaattorin Safari, kosketus simulaattorityökalun oikeilla napautuksilla |
| Kuvakaappaukset | `kuvakaappaukset/` (tässä hakemistossa; v2.1-hakemistoa ei muutettu) |

## Mitä on kuunneltu ja mitä ei

**Mitään ääntä ei ole kuunneltu vaiheessa 1.** Mittausvälityspalvelin (`mittaus/proxy.py` + `probe.js`) ohjasi kaiken Web Audio -ulostulon nollavahvistuksen kautta (kello ja ajoitus säilyvät), joten simulaattori oli täysin hiljainen. Kaikki alla oleva ääntä koskeva on **Web Audio -kutsujen mittausta** (`decodeAudioData`, `BufferSource.start`, `currentTime`), ei kuuntelua. Fyysisen iPhonen ja oikean kitaran testejä ei ole tehty.

Sivun omat kutsut `AudioContext`iin kulkivat muuttumattomina; lisäys oli vain `connect()`-uudelleenohjaus.

## Esikatselun vastaavuus (kohta 1) – TÄYTETTY

`assets/melodia-ydinopinnot.js`, `.css` ja `korvatreeni.js` ovat tavu tavulta samat kuin `git show 5df1558:…`. Kolmen harjoitussivun ja aihesivun HTML eroaa commitista vain Cloudflaren lisäämän analytiikkakomentosarjan osalta. Haara-alias palauttaa saman JS:n kuin commit-kohtainen esikatselu.

## Korjaukset K1–K6

| # | Tila | Perustelu |
|---|---|---|
| K1 tuplanapautuszoom | **GO** | Kolme oikeaa nopeaa napautusta Alas-painikkeeseen (~115–130 ms välein, sivun click-aikaleimat): kaikki rekisteröityivät, `visualViewport.scale` pysyi 1, vastausketjun kohdat täyttyivät. Nipistyszoom toimii (scale 2,8). Positiivinen kontrolli: kun samanlainen pikanapautus osui vahingossa ei-painikkeeseen (`touch-action: auto`), sivu zoomasi 1,25×, joten työkalu todella tuottaa pikanapautuksen. `touch-action: manipulation` on kaikissa harjoituspainikkeissa. Kuvat 02, 03. |
| K2 02 vertaileva palaute | **GO KORJAUKSIN** (ks. vaihe 2, löydös L1: tukiääni katoaa kesken tehtävän) | Ei ✓/✗-merkintöjä eikä punaista. Palaute nimeää valitun lopun ja kumpi palaa G:hen, kummallakin valinnalla. Soiva (`▶ soi`, `data-soi`) ja valittu (`✓ valittu`, `aria-pressed`) ovat erilliset: Loppu 2 valittuna ja Loppu 1 soimassa samanaikaisesti. 2. tarkistuksen palaute päättyy ”Seuraavaksi ilman tukiääntä.”. Kuvat 04–06. |
| K3 ”Mitä opit?” | **GO** | 02:n kortti ei paljasta kotisäveltä (”Melodian viimeinen sävel voi muuttaa…”). |
| K4 oktaavipalaute | **GO** | Tehtävä E3 → vastaus E4: kortilla ”E / D-kieli, 2. nauha” ja ”sinä E / Ohut e-kieli, vapaa / Oktaavia korkeampi.”, yhteenvedossa ”Sävelnimi oli oikein, mutta oktaavi eri.” Muilla korteilla ei lisärivejä. Luettava 402 px:ssä. Kuva 17. Matalampi-suuntaa ja D3/D4 ei kokeiltu. |
| K5 kuulumattomat sävelet | **GO** | Keskeytetty D4-painallus (näyte myöhässä 20 s) ei soinut eikä kirjautunut, vaikka näyte myöhemmin latautui; seuraava B3 kirjautui. Latausvirheessä (D4 503) ei kirjausta, viesti ”Ääniä ei voitu ladata. Kokeile uudelleen.”. Kuvat 12, 13. |
| K6 generaattorin poikkeuspolut | **Ei todennettavissa käytettävissä olevilla välineillä** | Ei käyttäjälle näkyvää eroa; ”uusi melodia eri kuin edellinen” ei ole mitattu systemaattisesti tässä istunnossa. Vitest/CI kattaa (CI vihreä). |

## Testattavat tilanteet 1–13

| # | Tulos | Huomio |
|---|---|---|
| 1 Esikatselun vastaavuus | TÄYTETTY | ks. yllä |
| 2 Tuplanapautuszoomi | TÄYTETTY | K1 |
| 3 Nipistyszoom | TÄYTETTY | scale 2,8; kuva 03 |
| 4 Vertaileva palaute (02, molemmat valinnat) | TÄYTETTY | Loppu 2 ja Loppu 1 valittuna; kuvat 05–06 |
| 5 Soiva/valittu erilliset | TÄYTETTY | |
| 6 Tukiäänen poistuminen kahden tarkistetun vertailun jälkeen | OSITTAIN | Tilateksti ja 3. tehtävä toimivat, mutta todelliset äänitapahtumat osoittavat, että tukiääni poistuu jo 2. tehtävän tarkistuksen hetkellä (L1) |
| 7 Vastauksen ennenaikainen paljastuminen | TÄYTETTY | K3 |
| 8 Oktaavipalaute | TÄYTETTY | K4 |
| 9 Nopea tapailu | OSITTAIN | ks. B alla; ”tuntuu välittömältä” vaatii kuuntelun |
| 10 Hidas lataus / virhe / keskeytys | TÄYTETTY | 2,5 s viive: ”Ladataan kitaran ääniä…” (kuva 10); 12 s aikakatkaisu: ”Äänen käynnistys kesti liian kauan.”, painike palautuu, taulukko pysyy piilossa (kuva 11) |
| 11 Vaihto/sulku/taustalle | OSITTAIN | aihesivun 02-kortin sulkeminen soiton aikana: ääni loppuu, ”Kuuntelu keskeytyi…”, ei uutta käynnistystä. Safari taustalle (HOME) kesken soiton: `visibilitychange` → keskeytys, viesti, ei automaattista paluuta (kuva 14). Tehtävän vaihtoa (Seuraava) kesken soivan/latautuvan äänen **ei testattu erikseen**; Seuraava toimi vain soiton päätyttyä (autopilotti, DOM-klikkaus). |
| 12 Viisisävelinen palaute pienellä näytöllä | TÄYTETTY | 402 px simulaattorissa (kuva 16) + 320 ja 375 px Playwright-WebKitillä (vaihe 2, kuvat 19). Ei fyysisellä pienellä laitteella |
| 13 macOS-WebKit-näppäimistötesti | TÄYTETTY | ks. vaihe 2 |

## Lisätarkistukset

**A. Tukiäänen vaihtumishetki – EI TÄYTY (korjaus ylempänä: aiempi ”TÄYTETTY” perustui pelkkään tilatekstiin ja oli virheellinen).** Todelliset äänitapahtumat: ks. vaihe 2, L1.

**B. Vapaa tapailu (03).** Mittaus: yksi hiljainen läpikäynti Web Audio -kutsuilla.
- Oikeat napautukset ~115 ms välein (B, C, D): kaikki kolme kirjautuivat ja jokaisella oli oma `source-start`.
- Portaittainen DOM-klikkaus, 4 painallusta (starts = 4 kaikissa): väli 20 ms → 1 kirjautui; 60 ms → 1; 80 ms → 2 (raja); 100 ms → 4; 150 ms → 4. Eli kirjaus vaatii ~80 ms napautusvälin (30 ms TAP_LEAD + 50 ms). Kuulumattomia ei kirjata; ≥100 ms välein kaikki kirjautuvat. Ketju vastasi aina sitä, mikä ehti 50 ms.
- **HUOMIO (ei estä):** kun ketju on täynnä, Tarkista pysyy näkyvissä (`check.hidden` päivittyy vain vahvistuksessa). Painallus A3, 20 ms, Tarkista → arvioitiin vanha ketju CDG; A3 jäi pois (`chain.lock()` mitätöi odottavan tiketin). Käytännössä ikkuna on ~80 ms (ihmiselle vaikea), mutta hitaalla verkolla uusi painallus voi odottaa latausta sekunteja ja Tarkista arvioi silloin edellisen ketjun. Ehdotus omistajalle: piilota/lukitse Tarkista, kun `pressed > confirmed`. Ei muutettu.
- ”Tapailu tuntuu välittömältä” – **ei arvioitu** (vaatii kuuntelun).

**C. Harjoituksen 02 latausvirhe – ei havaittu ongelmaa.** Kun näytteet eivät lataudu, Loppu 1/2-painikkeet ja Tarkista pysyvät piilossa (`data-melodia-tehtava` hidden), joten oppija ei voi valita eikä tarkistaa lopun, jota ei ole onnistuneesti ladattu; ”Ääniä ei voitu ladata. Kokeile uudelleen.”. Toipuminen: virhe pois → Kuuntele toimii. Rajaus: ”ladattu” ei takaa ”kuultu” (esim. ääni keskeytyy heti onStartin jälkeen) – ei pedagogisesti merkittävä, koska valinta on vapaaehtoinen vertailu.

**D. GitHub – RISTIRIITA (ei ratkaistu).** PR #178: `mergeable: CONFLICTING`, `mergeStateStatus: DIRTY`, base `beta` (`4db2d3a`). `git merge-tree` haaran kärjen ja `origin/beta`n välillä: yksi sisällöllinen konflikti **`tools/oppimiskartta/rakenna.py`**; automaattisesti yhdistyvät `assets/audio/soinnut/LAHTEET.md`, `tests/e2e/aihesivut.spec.ts`, `tools/oppimiskartta/aiheet.json`. CI (Issue 116 Sävelkorva QA): static-and-unit, chromium, webkit-savelkorva kaikki SUCCESS; Cloudflare Pages SUCCESS. Konflikti pitää ratkaista erillisessä toimessa (ei tehty).

## Uudet löydökset (olennaiset)

1. **Huomio:** Tarkista on aktiivinen odottavan painalluksen aikana (ks. B).
2. **Huomio:** 02:n palaute näkyy vihreänä vaikka valinta ei ole ”oikea”; ei ✗/punaista, mutta vihreä voi viestiä ”oikein”. Pedagoginen arvio omistajalle (näytön tila: kuva 06).
3. **Huomio (työkalu):** simulaattorin Safari avaa jokaisesta `openurl`ista uuden välilehden ja kaikki mittausskriptit kilpailevat samasta komentojonosta → käytä yhtä välilehteä (`location.href` rc:n kautta). Ei sivun vika.

## Jäljellä omistajalle / ei tehty

- Fyysinen iPhone (kuuntelu, latenssi, kelaus/taustalle, kaiutin/kuulokkeet).
- Oikea kitara (tapailtujen paikkojen vastaavuus).
- Kahdeksan melodiaparin kuuntelu, erityisesti parit 4 ja 8; lopullinen hyväksyntä.
- 320–375 px viisisävelinen palaute oikealla pienellä laitteella.
- Vaihe 2 (lupaa vaille): oikea kuuntelu simulaattorissa, macOS-WebKit-testit.
- PR #178:n beta-konfliktin ratkaisu.

## Työkalut

`mittaus/proxy.py` (välitys + viive/virheinjektio, hiljainen/äänekäs tila), `probe.js`, `rc.py` (etäkomennot), `auto03.js`, `burst.js`, `round.js`. Koordinaatit: sivun rect + 62 pt = simulaattorin napautuskoordinaatti.

## VAIHE 2 – äänitapahtumat, macOS-WebKit ja 320–375 px (25.11.2026)

Kaikki ohjelmallista: ulostulo nollavahvistuksen kautta, `source-start`/`source-stop`-tapahtumat mitattu probella. **Ihmisen kuuntelua ei ole tehty.** Lupa äänen käyttöön oli annettu, mutta pidin ajon hiljaisena; kuuntelu jää omistajalle.

### L1 – Tukiääni katoaa kesken tehtävän (NO-GO-tason poikkeama speksistä)
Lähdekoodi (`melodia-ydinopinnot.js` rivi 965): `drone = () => LEVELS.koti[endingLevel(progress.checked)].drone`, `endingLevel = checked >= 2 ? 1 : 0`. Laskuri kasvaa tarkistuksessa, ja kaikki toistot lukevat sen toistohetkellä. Mitattu (`mittaus/drone.js`, `drone2.js`, basso = `LowE:G2`-näyte):

| Tehtävä | Toisto | Bassoja (G2) |
|---|---|---|
| 1 | Kuuntele molemmat ennen tarkistusta | 2 |
| 1 | Loppu 1 ennen / Loppu 2 tarkistuksen jälkeen | 1 / 1 |
| 1 | Kuuntele molemmat tarkistuksen jälkeen | 2 |
| 2 | Loppu 1 ennen tarkistusta | 1 |
| 2 | **Kuuntele molemmat tarkistuksen jälkeen** | **0** (n=14–16 nuottia) |
| 2 | **Loppu 2 tarkistuksen jälkeen** | **0** |
| 3 | kaikki toistot | 0 |

Tilateksti sanoo samalla yhä ”Matala G soi taustalla tukiäänenä.”, eli käyttöliittymä ja todellinen ääni ovat ristiriidassa 2. tehtävän tarkistuksen jälkeen. Odotus (ChatGPT/omistaja): saman tehtävän kuunteluolosuhteet säilyvät, tukiääni poistuu vasta Seuraava-painikkeella. **Korjausehdotus (ei tehty):** lukitse `drone` tehtävän alussa (`newTask`) muuttujaan, esim. `let taskDrone = drone()`, ja käytä sitä toistoissa. K2: GO KORJAUKSIN.

### Tehtävän vaihto kesken äänentoiston – TÄYTETTY (02 ja 03)
- 02: Kuuntele molemmat soi, Seuraava: vanhat soivat lähteet saivat `stop` kohtaan now+25 ms (häivytys), odottavat lähteet peruttiin (`stop(0)`), uusi tehtävä alkoi 100 ms myöhemmin. Kuuntele-painike oikein tilassa.
- 03: tarkistuksen jälkeen painallus + Seuraava 30 ms myöhemmin: vanha sävel katkaistiin 25 ms:ssa, ketju `???`, `kuultu=0`, ei myöhäistä kirjausta 9 s jälkeen.
- 01: jaettu `setupFlow`-koodi; ei testattu erikseen.
- Seuraava käynnistää uuden tehtävän soiton tarkoituksella heti.

### 02: keskeytys ja latausvirhe, kun vaihtoehdot ovat jo näkyvissä
- **Keskeytys** (Loppu 2 painettu oikealla napautuksella, HOME heti): viesti ”Kuuntelu keskeytyi. Voit kuunnella uudelleen.”, Loppu 2 pysyy ”✓ valittu”, Tarkista pysyy käytössä (kuva 18). Valinta rekisteröityy painalluksesta, ei vasta kun ääni on kuultu (toisin kuin 03:n ketju). **Huomio:** oppija voi tarkistaa valinnan, jonka toisto keskeytyi; palaute on vertaileva, joten pedagoginen vaikutus on pieni, mutta ero 03:een on olemassa.
- **Latausvirhe** (verkko pois sen jälkeen, kun 1. tehtävä on kuultu ja tarkistettu): Seuraava käynnistää uuden tehtävän, jonka näytteitä ei ole ladattu → ”Ääniä ei voitu ladata. Kokeile uudelleen.”, tehtävä, Loppu 1/2 ja Tarkista piiloutuvat. Oppija ei voi valita eikä tarkistaa kuulematta. Jos kaikki näytteet olivat jo sivun muistissa, toisto onnistuu verkon katkettua.
- Yksittäisen Loppu-painikkeen latausvirhe kesken tehtävän on käytännössä saavuttamaton, koska Kuuntele molemmat on jo ladannut samat näytteet.

### 03: tapailun vaste ja kirjaus eri tahdeilla
- Oikeat napautukset: ~2,5 s välein (B, A3, D4) → kaikki kirjautuivat, jokaisesta heti `source-start`. ~115 ms välein → kaikki kolme kirjautuivat.
- DOM-portaikko 20/60/80/100/150 ms (täydentävä): kirjautuneita 1/1/2/4/4 painallusta kohti, soittoja 4/4/4/4/4 → raja ~80 ms. Vastausketju ei jää jälkeen: ketju vastaa kuultua, ei sitä mitä painettiin liian nopeasti.
- Keskeytetty painallus ei kirjaudu, latausvirhe ei kirjaudu (ks. vaihe 1). Tarkista-painikkeen huomio (vanhan ketjun arviointi odottavan painalluksen aikana) säilyy.
- Erottelu: ohjelmallinen todennus = kirjaus vs. `source-start`; **”tuntuu välittömältä/luontevalta” on ihmisen kuunteluhavainto, jota ei ole tehty.**

### 13. macOS-WebKit (Playwright 1.56.1, WebKit 2215, macOS)
`playwright.savelkorva-116-webkit.config.ts` committi `5df1558`, projektit `webkit-desktop` ja `webkit-iphone`: **59 läpi, 3 ohitettu** (kaikki `test.skip` -ehdot: näppäimistötestit mobiiliprojektissa ja kosketustesti työpöydällä), 1,0 min. 02:n näppäimistötesti (Alt+Tab macOS:llä, Space/Enter) läpi. Ajo tehtiin skratch-kopiosta (`git archive` 5df1558) siten, että (a) portti vaihdettiin 8923:ksi, koska 8765 oli toisen istunnon käytössä, ja (b) spec-kopioon lisättiin `beforeEach`-mykistys (nollavahvistus `connect()`-kutsussa). Assertioita ei muutettu; repositorion testejä ei muutettu. node_modules lainattiin lukutilassa `audit-sk178`-työpuusta (Playwright 1.56.1).

### 5. 320–375 px (täydentävä selaintesti, ei fyysinen laite)
WebKit/Playwright, iPhone 13 -emulaatio, mykistetty, seedattu 5 sävelen tehtävä (`mittaus/webkit-5savelta-v22.mjs`):
- 320×568: ei vaakavieritystä (docW 320), kortit 3+2 (58×134 px), Seuraava 44 px korkea, palaute ”1/5 oikein. Neljässä sävelessä oli eroa.”
- 375×667: ei vaakavieritystä, kortit 4+1, Seuraava 44 px.
- Kuvat: `kuvakaappaukset/19-h3-5-savelta-v22-320x568.png`, `…-375x667-SE.png`. Oktaavikortin leveys 320 px:ssä ei erikseen mitattu (K4-asettelutesti läpi 390 px:ssä).

### Siivous
Mittausvälityspalvelin (portti 8771), skratch-HTTP-palvelin (8924) ja Playwrightin palvelin sammutettu; oma simulaattori (UDID yllä) sammutettu, ei poistettu. Toisen istunnon palvelin portissa 8765 ja muut simulaattorit jätetty koskematta.

## TEHTÄVÄN LUOVUTUS PÄÄKESKUSTELUUN (osa 1)

Lopputila: K1 GO, K2 GO KORJAUKSIN (L1 tukiääni katoaa, korjaus: lukitse drone tehtävän alussa), K3 GO, K4 GO, K5 GO, K6 ei todennettavissa. macOS-WebKit 59/59 + 3 ohitettu. Ei koodimuutoksia, committeja eikä pushauksia; beta-konflikti ratkaisematta. Omistajalle: ihmisen kuuntelu, fyysinen iPhone, oikea kitara, parit 4 ja 8.
