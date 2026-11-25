# Toimeksianto paikalliselle Claude Codelle: Sävelkorva v2.2 – Xcode iOS Simulator -uusintatestaus

Suorita tämä **paikallisessa** Claude Code -istunnossa, jossa Xcode ja iOS Simulator ovat käytettävissä. Noudata repositorion `CLAUDE.md`-ohjeita (Git-turvasäännöt, ei yhdistämistä, Draft-PR). Raportoi suomeksi. **Älä muuta koodia** tässä toimeksiannossa; kirjaa löydökset raporttiin. Korjausehdotukset omistajalle erikseen.

## Testattava kohde

| | |
|---|---|
| Repositorio | `ristotoivanen/Musiikin-kartta` |
| PR | #178 (Draft, base `beta`) – **älä yhdistä** betaan tai mainiin, älä muuta PR #179:ää |
| Haara | `claude/116-savelkorva-ydinopinnot` |
| **Testattava commit** | **`5df155823253c106af6d1c3d5e9b9499790febce`** (`5df1558`). Lähtö-SHA `b6ff78713ec87fef7a688b0825e327f2fb8ed891` (v2.1) |
| **Esikatselu (juuri tämä commit)** | https://0b5aaa88.musiikin-kartta.pages.dev/oppi/korva/index.html |
| Haaran esikatselu (seuraa uusinta committia) | https://claude-116-savelkorva-ydinop.musiikin-kartta.pages.dev/oppi/korva/index.html |
| Harjoitussivut | `…/oppi/korva/ylos-alas-vai-sama.html`, `…/kotiin-vai-kesken.html`, `…/kuule-ja-etsi-kitaralta.html` |
| Aiempi auditointi | `auditoinnit/savelkorva-178-v2.1-2026-11-24/` (älä korvaa; jos ei löydy, käytä alla olevaa) |
| Tämän testin tallennuspaikka | `auditoinnit/savelkorva-178-v2.2-2026-11-25/` (raportti `raportti-simulaattori.md`, kuvat `kuvakaappaukset-simulaattori/`) |
| Pilvitestien raportti | `raportti-pilvitestaus.md` samassa hakemistossa |

Ennen aloitusta: `git fetch`, tarkista `git rev-parse origin/claude/116-savelkorva-ydinopinnot` = `5df1558…`. Jos haara on edennyt, kirjaa todellinen testattu SHA ja varmista, että esikatselu vastaa sitä (Cloudflare-kommentti PR #178:ssa). Esikatselun sivun `?v=`-tunnisteet ja alla ”Mitä muuttui” on testattavan version tunniste.

## Ympäristö

- Ensisijainen laite: **iPhone 16 Pro**, simulaattorin **Safari**. Sama iOS-versio kuin v2.1-auditoinnissa, jos käytettävissä (kirjaa versio).
- **Käytä jokaisessa `xcrun simctl` -komennossa yksiselitteistä laitetunnistetta (UDID)**. Älä käytä toisen auditointisession simulaattoria; luo/valitse oma laite ja kirjaa UDID raporttiin.
- Varmista ennen jokaista selainmittausta, että mittaus kohdistuu oikeaan sivuun ja välilehteen (URL + otsikko).
- Testaa **oikeilla napautuksilla** (simulaattorin kosketus, esim. `xcrun simctl`/AppleScript/XCUITest tai Safari Web Inspector -yhteys sivun tilan lukuun). DOM `click()` kelpaa vain täydentävänä eikä korvaa kosketuskäytettävyyden tarkistusta.
- **Älä väitä kuunnelleesi ääntä**, ellet oikeasti kuunnellut (simulaattorin ääni ohjautuu Macin kaiuttimiin; kirjaa, kuuntelitko ja mitä). Web Audio -kutsujen tai signaalin mittaus ei ole kuuntelua; kirjaa ne erikseen.
- Ota kuvakaappaukset olennaisista tiloista (`xcrun simctl io <UDID> screenshot`).

## Mitä muuttui versiossa 2.2 (tarkistettavat korjaukset)

| # | Korjaus | Odotettu toiminta |
|---|---|---|
| K1 | Tuplanapautuszoom | `touch-action: manipulation` harjoituspainikkeissa. Kaksi nopeaa Alas-napautusta (aiemmin 1,6× zoom) **ei** suurenna näkymää; kumpikin napautus rekisteröityy. Nipistyszoom toimii yhä. |
| K2 | 02 vertaileva palaute ja eteneminen | Ei oikein/väärin-merkintöjä eikä punaista virhettä. Palaute nimeää valitun lopun ja kumpi loppu palaa G:hen. Soiva (▶ soi) ja valittu (✓ valittu) erilliset. Tukiääni kahdelle ensimmäiselle tarkistetulle vertailulle, sen jälkeen ei, riippumatta valinnasta. Uusi melodia aina eri kuin edellinen. |
| K3 | ”Mitä opit?” ei paljasta ratkaisua | 02:n kortti: ”Melodian viimeinen sävel voi muuttaa sen tunnelmaa…”; kotisävelselitys vain ⓘ:ssä ja palautteessa. |
| K4 | Oktaavipalaute (03) | Sama sävelnimi eri oktaavissa: kortilla kuultu ja oma kitaran paikka + ”Oktaavia korkeampi/matalampi.”; muilla korteilla ei lisärivejä. |
| K5 | Kuulumattomat sävelet (03) | Vastausketjuun kirjautuu vain sävel, joka ehti soida (äänikello ≥ 50 ms ilman keskeytystä). Latauksen aikana seuraava painallus keskeyttää edellisen eikä se kirjaudu. |
| K6 | Generaattorin poikkeuspolut | Ei käyttäjälle näkyvää eroa; 02 vaihtaa melodian aina (ei vain loppujen järjestystä). |

## Testattavat tilanteet (suorita kaikki; kirjaa jokaisesta tulos TÄYTETTY/EI TÄYTETTY/EI TESTATTU + kuvakaappaus)

1. **Nopeat suuntapainikkeiden napautukset** (01 Ylös, alas vai sama?): kaksi–neljä nopeaa napautusta Alas/Ylös-painikkeeseen. Tarkista: näkymä ei zoomaa (kirjaa `visualViewport.scale` ennen/jälkeen, jos Web Inspector käytettävissä); vastausketjun kohdat täyttyvät oikein. Kokeile myös Poista (⌫) nopeasti. Tarkista, että nipistyszoom edelleen toimii.
2. **Nopea otelaudan tapailu** (03): napauta otelaudan paikkoja eri tahdeilla (hitaasti ~1 s, tavallisesti ~300 ms, nopeasti < 100 ms). Kirjaa, mitkä kirjautuvat vastausketjuun ja kuuluvatko ne. Odotus: nopeimmat (< n. 80 ms välein) voivat jäädä kirjautumatta; ketju vastaa sitä, mitä kuului. Tarkista, ettei kaksoisnapautus zoomaa.
3. **Melodian lopetusvaihtoehtojen valitseminen** (02): Loppu 1 ja Loppu 2 soittavat ja valitsevat; kuuntele molempia useita kertoja ennen Tarkista valintaa.
4. **Valinnan ja soivan version erilliset tilat** (02): ”✓ valittu” pysyy valitussa, ”▶ soi” siirtyy soivaan; nopea vuoropainelu. Tarkista, ettei pelkkä soi muuta valintaa väärin.
5. **Vertaileva palaute molemmille valinnoille** (02): tarkista erikseen (a) valinta, joka palaa G:hen, ja (b) toinen valinta. Odotus: sama rakenne, ei ✓/✗, ei punaista, ”Loppu N oli sinun valintasi. Loppu M palaa G:hen…”. Lue teksti ja arvioi ymmärrettävyys.
6. **Vaikeustason vaihtuminen ilman oikein/väärin-arviointia** (02): tee kolme peräkkäistä tarkistusta, valitse tarkoituksella eri vaihtoehtoja. Odotus: tukiääni (”Matala G soi taustalla tukiäänenä.”) kahdella ensimmäisellä, sitten ”Ilman tukiääntä.”; 2. tarkistuksen palaute päättyy ”Seuraavaksi ilman tukiääntä.” riippumatta valinnasta; uudelleenkuuntelu tai Tarkista-painikkeen toistuva painaminen ei etenemistä nopeuta.
7. **Oktaavivirheen palaute** (03): pääset tasolle 2 (kaksi peräkkäistä oikeaa → ”Seuraavaksi hieman vaikeampi.”), jolloin sävelalueella on G3 ja G4 (sama G eri kielillä). Tapaile tarkoituksella oikea sävelnimi väärässä oktaavissa (esim. ohut e-kieli 3. nauha ↔ G-kieli vapaa). Odotus: kortilla ”Kuului G / G-kieli, vapaa” ja ”Sinä G / Ohut e-kieli, 3. nauha / Oktaavia korkeampi.”; yhteenvedossa ”Sävelnimi oli oikein, mutta oktaavi eri.”; vain tällä kortilla lisärivit. Kokeile myös toisin päin (matalampi) ja E3/E4 sekä D3/D4 (taso 3–4: D-, G-, B-, e-kieli).
8. **Viisisävelisen melodian palaute** (03, taso 4 ja 01 taso 3): paina Seuraava / tee oikeat vastaukset, kunnes viiden sävelen tehtävä tulee. Tarkista palaute ja kortit 320–393 px leveällä näytöllä (ei vaakavieritystä, kortit rivittyvät, painikkeet ≥ 44 px, tekstin suurennus).
9. **Hidas näytelataus ja keskeytynyt toisto** (03): rajoita verkko (Network Link Conditioner / Xcode Devices ”Very Bad Network” tai Web Inspectorin throttling) ja avaa sivu tyhjin välimuistein. Paina Kuuntele (näkyy ”Ladataan kitaran ääniä…” jos kestää), sitten otelaudan paikkoja ennen kuin edelliset ovat ladattu. Odotus: keskeytynyt painallus ei kirjaudu vastausketjuun eikä soi; ladattu ja soinut kirjautuu. Kirjaa, kuuluiko jokainen ketjuun kirjattu sävel oikeasti (kuuntele!). Kokeile myös lentokonetilaa kesken tapailun: ”Ääniä ei voitu ladata. Kokeile uudelleen.”, ei kirjausta.
10. **Tehtävän vaihtaminen kesken äänen** (kaikki kolme): paina Seuraava (tai 03:ssa Näytä sävelkulku → Seuraava) kesken soivan/latautuvan äänen. Odotus: vanha ääni katkeaa, uusi tehtävä alkaa tyhjällä vastausketjulla, vanha sävel ei ilmesty siihen.
11. **Harjoituksen sulkeminen kesken äänen**: avaa harjoitus aihesivulla (`/oppi/korva/index.html`, Ydinopinnot → harjoituskortti) ja sulje kortti kesken soiton ja kesken latauksen; kokeile myös siirtymistä toiselle sivulle/välilehdelle ja Safarin taustalle (sovellusvaihto). Odotus: ääni lakkaa, ”Kuuntelu keskeytyi. Voit kuunnella uudelleen.”, paluu ei käynnistä ääntä itsestään, ketju ei muutu.

Lisäksi (nopeat tarkistukset): ⓘ-lisätiedot aukeavat ja ”Kuuntele kotisävel G” soittaa; ”Harjoitusdemo: …” -teksti ja CC0-lähdelinkki näkyvät sivun alalaidassa; aiemmat 14 sisältöä aukeavat samoilla osoitteilla (`/oppi/korva/index.html` → ”Aiemmat oppitunnit ja harjoitukset”); sivu toimii pysty- ja vaakasuunnassa.

## Pilvessä jo tehdyt (älä toista, jos ei tarvetta)

`npm run check` OK (767 Vitest). Chromium-E2E ja Linux-WebKit-E2E 59/59 läpi (3 ohitettu). Ks. `raportti-pilvitestaus.md`. **Ei tehty pilvessä:** Simulator, fyysinen iPhone, äänen kuuntelu, macOS-WebKit/Safari, koko regressio.

## macOS-WebKit-testit (jos ajat Playwrightia paikallisesti)

`npx playwright test tests/e2e/savelkorva-ydinopinnot.spec.ts` ja `npx playwright test --config=playwright.savelkorva-116-webkit.config.ts`. Aiemmin havaittu macOS-WebKitin Tab-käyttäytyminen: Safari ei siirrä Tab-näppäimellä painikkeisiin oletusasetuksin. 02:n näppäimistötesti käyttää darwin+webkit-ympäristössä `Alt+Tab` (kuten `intervallimuisti.spec.ts` ja `soinnut-kokonaisuudet.spec.ts`). **Tämä haara on ensimmäistä kertaa macOS:llä ajettava**: kirjaa tulos rehellisesti. Jos testi epäonnistuu, **älä piilota tai muuta testiä vihreän tuloksen vuoksi**; raportoi virheilmoitus ja ehdota syy.

## Raportin muoto

`raportti-simulaattori.md`: testattu SHA, laite + iOS-versio + UDID, 11 tilannetta tuloksineen (TÄYTETTY / EI TÄYTETTY / EI TESTATTU), kuvakaappaukset (tiedostonimet), erotellut havainnot (**korjaus tarvitaan / huomio / kunnossa**), selvästi erikseen: mitä **kuunneltiin** ja mitä vain mitattiin Web Audio -kutsuina, sekä omistajalle jäävät asiat (fyysinen iPhone, oikea kitara, kahdeksan melodiaparin kuuntelu – erityisesti parit 4 ja 8, lopullinen hyväksyntä). Älä väitä hyväksyntää. Päätä raportti ”TEHTÄVÄN LUOVUTUS PÄÄKESKUSTELUUN” -muotoon (`CLAUDE.md`). Commitoi raportti vain, jos omistaja/CLAUDE.md sallii; älä pushaa PR #178:n haaraan ilman erillistä lupaa. Älä aloita jatkotehtäviä.
