# Kelauksen aikakatkaisu ja puuttuva loadstart: juurisyyanalyysi (MK-20261119-03)

**Tila:** korjaus K1–K3 toteutettu testisivulle (omistajan hyväksyntä 19.11.2026). Alkuperäinen simulaattoriraportti tarkistettu (luku 7) ja simulaattorissa ajettu 48 + 7 kelaussarjaa korjauksen jälkeen (luku 8). Aikakatkaisu toistuu simulaattorissa (H7, pääsäikeen jumi); juurisyytä WebKitissä ei ole vahvistettu, eikä K1–K3 korjaa sitä.
- Issue #9 pysyy NO-GO-tilassa.
- Pohja: PR #122 @ `4a1f665` (`test/kaksiraita-nayttoaani`). Koodiviittaukset tiedostoon `KaksiraitaTesti.tsx` samassa versiossa.

## 1. Lähtötieto ja sen rajat

- **Omistajan kuvaus simulaattoriajosta** (Mac, iPhone 16 Pro -simulaattori, iOS 27.2):
  - kolmoiskelauksessa kolmas kelaus ei tuottanut odotettua `loadstart`-tapahtumaa
  - ajossa oli kelauksen aikakatkaisu.
- **Alkuperäinen JSON-raportti ei ole tämän analyysin käytössä.** Sitä ei ole GitHubissa eikä pilvi-istunnon tiedostoissa. Siksi alla olevat **lokiin perustuvat** päätelmät on tehty Chromiumissa toistetuista tapahtumajärjestyksistä ja koodista. Simulaattorin raportin tapahtumajärjestys on vielä tarkistettava (luku 6).
- **H4-simulaattoriajon 15 säätöarvoa ovat vain käyttöliittymän testidataa.** Ne eivät ole havaintoja äänen ja kuvan ajoituksesta: simulaattorin ääni kulkee Macin äänilaitteeseen, eikä sen viive vastaa iPhonea. Niitä ei käytetä H4:n tuloksina.

## 2. Asiaan liittyvä ohjauslogiikka (uusi moottori)

| Kohta | Rivi | Toiminta |
| --- | --- | --- |
| `seek(at)` | 320–332 | Jos Reactin `playing` on tosi, kutsuu `freshStart(at, 'kelaus')`. Muuten vain `playbackRequest++` ja `resumeAt = at`. |
| `freshStart(target)` | 515– | `request = ++playbackRequest`. Kummallekin raidalle `pause()` → `load()` → `currentTime = target`. Sitten `await waitPositioned` ja tarkistus `request === playbackRequest` → `play()` → `setPlaying(true)`. |
| `waitPositioned` | 490– | Ratkeaa tapahtumista `loadedmetadata`, `seeked`, `canplay`, `loadeddata` ja `error` tai 5 s:n aikarajasta. Se ei tiedä, onko aloitus ohitettu. |
| `onPause` | 843 | Taustaraidan `pause`-tapahtuma asettaa `playing = false`. |
| Virhehaarat | 560, 569 | Aikakatkaisu ja latausvirhe asettavat `playing = false`. |

Kaksi ratkaisevaa ominaisuutta:
- `playing` kuvaa sitä, että toisto **soi**. Se ei kuvaa sitä, että toistoa **halutaan**. Aloituksen ollessa kesken se voi olla epätosi.
- Ohitettu aloitus jatkaa odottamista, kunnes `waitPositioned` ratkeaa.

## 3. Todetut tosiasiat (Chromium 141, Linux, deterministiset toistot)

Toistot on tehty synteettisellä aineistolla muistista, `?lahde=synteettinen&moottori=uusi&mittaus=pois`. Testit ovat tiedostossa `tests/e2e/kaksiraitatesti-kelauskilpa.spec.ts`: 3 testiä × 2 profiilia × 3 toistoa, ja jokainen käyttäytyi joka kerta samoin.

**T1. Kelaus kesken olevan Soita-aloituksen aikana ei käynnistä toistoa (vika V1).**
1. Tauolta painetaan Soita, joka aloittaa `freshStart(…, 'jatko')`.
2. Ennen toiston alkua tehdään kelaus. `playing` on vielä `false`, joten `seek()` valitsee tauko-haaran: se kasvattaa pyyntötunnistetta ja asettaa `resumeAt`-arvon.
3. Kesken ollut aloitus huomaa ohituksen ja palaa `play()`a kutsumatta.

Lopputila:
- toisto on pysähdyksissä ja painikkeessa lukee ▶ Soita
- virheilmoitusta ei tule
- kelaukselle ei synny `tuore-aloitus`-, `load()`- eikä `loadstart`-tapahtumaa.

**T2. Ohitettu aloitus odottaa 5 s ja kirjaa aikakatkaisun (vika V2).**
- Kolme kelausta samassa tehtävässä: toisto alkaa oikein viimeisestä kohteesta (50 s) noin 20 ms:ssa.
- Kahden ohitetun aloituksen `waitPositioned` odottaa kohdetta 20 s tai 40 s, jota ei koskaan tule. Noin 5 s:n kuluttua lokiin tulee `kelattu tausta=aikakatkaisu kitara=aikakatkaisu` ohitetuille pyynnöille.
- Käyttäjälle tämä ei näy, eikä se vaikuta toistoon: tarkistus `request !== playbackRequest` estää jatkon. Lokissa se kuitenkin näyttää kelauksen aikakatkaisulta. Lisäksi ajastimet ja kuuntelijat jäävät elämään 5 sekunniksi.

**T0. Samassa tehtävässä tehdyt `load()`-kutsut yhdistyvät.**
- Kolme `load()`-kutsua samassa tehtävässä tuottaa yhden `emptied`- ja `loadstart`-parin per raita.
- Tämä on HTML-spesifikaation mukaista: uusi `load()` keskeyttää edellisen resurssinvalinnan ennen sen `loadstart`ia. Siksi odotus "yksi `loadstart` per kelaus" ei päde, vaikka kaikki toimisi oikein.

**T0b. Moottorin oma `pause()` ei tuota `pause`-tapahtumaa Chromiumissa.**
- `load()` poistaa jonossa olevat mediatapahtumat (spesifikaation load-algoritmi), joten `onPause` ei laukea `freshStart`in pysäytyksestä.
- Kelausketjussa (soi → kelaus → kelaus) `playing` pysyy tosena, ja peräkkäiset kelaukset toimivat. Painallusväleillä 0, 120 ja 400 ms viimeinen kohde voitti aina.

## 4. Hypoteesit simulaattorin kolmoiskelaukselle (ei todennettu)

WebKitiä **ei oleteta** vialliseksi. Jokaiselle hypoteesille on tunniste, jolla sen voi tarkistaa alkuperäisestä raportista.

| | Hypoteesi | Mekanismi | Tunniste raportissa | Arvio |
| --- | --- | --- | --- | --- |
| **H1** | WebKit lähettää `pause`-tapahtuman, vaikka `load()` kutsutaan samassa tehtävässä | `onPause` → `playing = false` kesken kelausaloituksen. Seuraava kelaus ottaa tauko-haaran (V1), eikä `load()`ia ja `loadstart`ia tule. Toisto pysähtyy. | `pause`-tapahtuma (track `tausta`) `tuore-aloitus`- ja `toisto-alkoi`-tapahtumien välissä. Kolmannelle `control kelaus` -tapahtumalle ei seuraa `tuore-aloitus`ta. | Mahdollinen. Mekanismi toistuu Chromiumissa testillä T3, kun `pause` lähetetään keinotekoisesti. |
| **H2** | Kolmas kelaus tuli, kun aloitus oli kesken ja `playing` oli epätosi muusta syystä | Sama V1: esimerkiksi edellinen aloitus lähti tauolta tai Soita-painalluksesta | `control kelaus` ilman `tuore-aloitus`ta. Edellinen `tuore-aloitus` ilman `toisto-alkoi`ta. | Todennäköinen, jos kolmoiskelaus alkoi tauolta. |
| **H3** | Kolmannen kelauksen `load()` yhdistyi edelliseen (T0) | Spesifikaation mukaista, ei vika | Kaksi `tuore-aloitus`ta samalla `ms`-arvolla, yksi `loadstart` | Mahdollinen vain, jos kelaukset tehtiin ohjelmallisesti samassa tehtävässä. |
| **H4** | Nykyisen aloituksen `waitPositioned` ei täyttynyt 5 s:ssa | `kelaus-aikakatkaisu` → `playing = false` → seuraava kelaus vain asettaa kohdan (suunniteltu käytös, C3). Kolmas kelaus ei siksi tuota `load()`ia. | `kelaus-aikakatkaisu`, jonka `request` on viimeisin. `kelattu`-tapahtuman `tT` ja `tK` sekä `seeking`- ja `seeked`-tapahtumat. | Mahdollinen. Ei toistu Chromiumissa. Juurisyy olisi WebKitin kelaustapahtumien järjestys tai `waitPositioned`in tapahtumapohjainen tarkistus. |
| **H5** | "Aikakatkaisu" oli ohitetun aloituksen `kelattu: aikakatkaisu` (V2) | Kosmeettinen lokimerkintä, ei käyttäjälle näkyvä aikakatkaisu | `kelattu … aikakatkaisu`, jonka `request` ei ole viimeisin, eikä `kelaus-aikakatkaisu`-tapahtumaa | Mahdollinen, ja voi esiintyä yhdessä H1:n tai H2:n kanssa. |
| **H6** | Ohjelmallinen kelaus ilman käyttäjän elettä | iOS:n mediarajoitukset voivat estää latauksen ilman elettä | Miten kelaukset tehtiin: painike vai `window.kaksiraitatesti.seek` Web Inspectorista | Tarkistettava ajotavasta. |

## 5. Korjausehdotus (ei toteutettu)

Pienin korjaus, joka ei muuta onnistuneiden toistojen tahdistusta. Muutokset koskevat vain päätöstä siitä, *käynnistetäänkö* aloitus, ja ohitetun aloituksen siivousta. Itse aloituksen kulku pysyy ennallaan: `pause` → `load` → `currentTime` → odotus → `play`.

**K1, korjaa V1:n (ja H1:n seurauksen).** Erotetaan toistoaikomus soimistilasta. Noin 8 riviä:

```ts
const wantsPlayback = useRef(false);            // toisto soi tai on alkamassa
// freshStart: alussa wantsPlayback.current = true
// pause(), onEnded sekä freshStartin latausvirhe-, aikakatkaisu- ja play-virhehaarat: wantsPlayback.current = false
// seek(): if (playing || wantsPlayback.current) void freshStart(at, 'kelaus'); else playbackRequest.current++;
```

- Kun toisto soi, `seek()` toimii kuten nyt.
- Kesken olevan aloituksen aikana kelaus käynnistää uuden aloituksen kelauskohdasta.
- Tauolla kelaus vain asettaa kohdan kuten nyt (C3).
- `onPause` ei enää ratkaise kelauksen haaraa, joten H1:n kaltainen `pause`-tapahtuma ei voi pysäyttää kelausketjua.

**K2, korjaa V2:n.** Ohitettu aloitus lopettaa odotuksen heti. Noin 10 riviä:
- `freshStart` peruu kaikki edelliset `waitPositioned`-odotukset alussa: ne ratkeavat arvolla `'ohitettu'`, ja kuuntelijat ja ajastimet poistetaan.
- Ohitettu aloitus kirjaa `aloitus-ohitettu { request }` eikä `kelattu`a.
- Nykyisen aloituksen odotus ja ajoitus pysyvät ennallaan.

**K3, diagnostiikka (valinnainen, vain kirjaus).**
- `control kelaus` -tapahtumaan kentät `playing` ja `wantsPlayback`.
- Tauko-haarassa erillinen `kelaus-tauolla`-tapahtuma.
- Tulevista raporteista näkee näin suoraan, kumpaa haaraa kelaus käytti.

**Ei ehdoteta:**
- `waitPositioned`in 5 s:n rajan tai 0,25 s:n toleranssin muuttamista
- `play()`-kutsun ajoituksen muuttamista
- korjauskelauksia
- arkkitehtuurin vaihtoa.

H4:n (WebKitin kelaustapahtumat) mahdollinen korjaus päätetään vasta, kun raportti osoittaa sen. Silloin pienin vaihtoehto olisi lisätarkistus esimerkiksi `timeupdate`- tai `canplaythrough`-tapahtumasta, ei aikarajan pidentäminen.

**Hyväksymistestit korjaukselle:**
- `kaksiraitatesti-kelauskilpa.spec.ts`: T1–T3 ilman `test.fail`-merkintää.
- Nykyiset `-moottori`, `-pakattu`, `-raportti`, `-nayttoaani` ja `kaksiraitatesti.spec.ts` ennallaan (tunnetut ajoittaiset ongelmat README:ssä).
- Lopuksi simulaattorissa ja iPhonella kolmoiskelaus tauolta ja soitosta.

## 6. Alkuperäisen raportin säilytys ja tarkistus

Kun omistaja toimittaa simulaattoriajon JSON-raportit:

1. **Tallennus muuttamattomina:** `harjoittelija/kaksiraitatesti/raportit/simulaattori-2026-11-19-<n>.json`, tähän haaraan.
2. **Yksilöivien tietojen tarkistus ennen GitHubiin vientiä.** Raportissa on:
   - `meta.userAgent` (laitetyyppi ja iOS-versio, ei yksilöivä)
   - esikatselun osoitteet
   - satunnainen `pageLoadId`
   - ajoitukset ja tapahtumat
   - H4-kokeiden `note`-kentät (vapaa teksti).
   
   Vapaa teksti tarkistetaan käsin. Jos siinä on nimiä tai muuta henkilötietoa, se korvataan merkinnällä `[poistettu]`, ja muutos kirjataan tähän dokumenttiin. Muuta sisältöä ei muuteta.
3. **Ajo työkalun läpi:** `node tools/kaksiraitatesti-raportti.mts <raportti>` ja luvun 4 tunnisteiden tarkistus tapahtumajärjestyksestä:
   - `control`, `tuore-aloitus`, `pause`, `emptied`, `loadstart`, `seeked`, `kelattu`, `toisto-alkoi` ja `kelaus-aikakatkaisu`
   - järjestys ja `request`-tunnisteet.
4. **Tulos:** H1–H6 luokitellaan todetuiksi tai kumotuiksi, ja korjausehdotus tarkistetaan vastaamaan todettua syytä.

## 7. Alkuperäisen simulaattoriraportin tarkistus (19.11.2026, Mac-istunto)

### Aineisto

| Tiedosto | Sisältö | SHA-256 (alku) |
| --- | --- | --- |
| `raportit/simulaattori-2026-11-19-1.json` | Ensimmäinen kopio heti kolmoiskelauksen jälkeen | `43c476e1…` |
| `raportit/simulaattori-2026-11-19-2.json` | Myöhempi kopio samalta sivulataukselta: sama kolmoiskelaus ja neljä myöhempää monikelaussarjaa | `a16e4ea4…` |

- Tallennettu **muuttamattomina** (tavu tavulta sama kuin Macin alkuperäinen).
- **Vapaatekstikentät tarkistettu:** kaikki `note`-kentät ovat tyhjiä (11 + 12 säätökoetta ja tallennustapahtumat). Muut merkkijonot ovat testisivun omia arvoja: user agent (`iPhone OS 18_7`, Safari 27.2), esikatselun osoite, satunnaiset `blob:`-tunnisteet ja `pageLoadId`:t. Yksilöiviä tietoja ei ole, joten mitään ei korvattu.
- Ajo: H4-sivu (`?koe=nayttoaani`, PR #122, bundle `cc67a916fe48`), iPhone 16 Pro -simulaattori, iOS 27.2. Kelaukset tehtiin **painikkeella** *Siirry kohtaan 2:30* (simulaattorin napautukset), ei Web Inspectorista.

### Tapahtumajärjestys (raportti 1)

| ms | Tapahtuma | Huomio |
| --- | --- | --- |
| 29 537 | `control kelaus` → `tuore-aloitus` request 4 | toisto soi (näyte 29 338: `pausedT: false`) |
| 29 558–29 619 | `emptied`, `loadstart`, `loadedmetadata`, `seeking` (molemmat raidat) | |
| 29 632 | `control kelaus` → `tuore-aloitus` request 5 | |
| 29 699–29 701 | `seeked`, `canplay`; `kelattu valmis` requesteille 4 ja 5 | |
| 29 707 | `toisto-alkoi` request 5 | molemmat raidat soivat |
| 29 717–29 718 | `control kelaus` → `tuore-aloitus` request 6, `seek-write` tausta ja kitara | `readyState 0` (load() kutsuttu) |
| **29 718 → 40 381** | **ei yhtään tapahtumaa eikä näytettä** | 10,66 s |
| 40 381 | `emptied` (molemmat), näyte (`readyState 0`) | jonossa ollut load()-tapahtuma |
| 40 382 | `kelattu aikakatkaisu` + `kelaus-aikakatkaisu` request 6 | 5 s:n ajastin oli myöhässä |
| 40 383–40 468 | `loadstart`, `loadedmetadata`, `seeked` 150 s, `canplay` | raidat olivat valmiit 86 ms myöhemmin |

### Hypoteesit H1–H6

| | Tulos | Peruste |
| --- | --- | --- |
| H1 (`pause` kesken aloituksen) | **kumottu tässä tapauksessa** | Ei `pause`-tapahtumaa requestien 4–6 välillä. Kolmas kelaus tuotti `tuore-aloitus`n. |
| H2 (`playing` epätosi) | **kumottu** | Request 5 ehti soida (`toisto-alkoi` 29 707), ja kolmas kelaus valitsi uuden aloituksen. |
| H3 (`load()`-kutsut samassa tehtävässä) | **kumottu** | Kelaukset 29 537, 29 632 ja 29 717 ms: eri tehtävät. |
| H4 (`waitPositioned` ei täyty) | **osittain** | Nykyisen pyynnön (6) odotus päättyi aikakatkaisuun, mutta ei WebKitin kelaustapahtumien järjestyksen takia: tapahtumia ei tullut lainkaan, ja kun ne tulivat, raidat olivat valmiit 86 ms:ssa. |
| H5 (ohitetun aloituksen merkintä) | **kumottu** | Request 6 oli viimeisin, ja `kelaus-aikakatkaisu` kirjattiin. |
| H6 (ohjelmallinen kelaus ilman elettä) | **kumottu** | Kelaukset tehtiin painikkeella. |

### Uusi hypoteesi H7: sivun pääsäie jumittui noin 10,7 s:ksi (todennäköisin, ei vahvistettu)

- Testisivun 500 ms:n näytteenotto (`setInterval`) ei tuottanut yhtään näytettä välillä 29 338–40 381 ms. Myöskään mitään mediatapahtumaa ei kirjattu. JavaScript ei siis ajanut mitään 10,66 sekuntiin.
- `AudioContext.currentTime` eteni samaan aikaan 22,03 → 33,07 s (11,04 s), eli äänisäie toimi. `document.hidden` oli `false`, eikä `visibilitychange`-tapahtumaa tullut.
- Jumi alkoi heti request 6:n `seek-write`-kirjausten jälkeen, 11 ms siitä, kun request 5:n `play()` oli täyttynyt. Lokista ei voi päätellä, jäikö kitaran `currentTime = 150` -sijoitus vai WebKitin tehtävä ennen `emptied`-tapahtumaa (mediasoittimen purku tai luonti) jumiin.
- Jumin jälkeen 5 s:n ajastin oli jo erääntynyt, joten se laukesi ennen `loadstart`ia. Kirjattu **10,7 s:n aikakatkaisu on jumin pituus, ei viiden sekunnin raja.**
- Saman simulaattoriajon seitsemässä muussa monikelaussarjassa jumia ei ollut (raportti 2: neljä sarjaa, H4-ajon lopullinen raportti: kolme; pisin näyteväli 505–543 ms, kaikki päätyivät kohteeseen). Raportin 2 sarjassa 157 185 ms kolmas kelaus osui 44 ms toiston alkamisen jälkeen ja onnistui (128 ms).
- **K1–K3 ei korjaa H7:ää.** Viat V1 ja V2 eivät olleet mukana tässä tapauksessa. K2 kuitenkin estää ohitettujen aloitusten harhaanjohtavat aikakatkaisumerkinnät, joten tulevissa raporteissa aikakatkaisu viittaa aina nykyiseen aloitukseen.
- **Mahdollinen lievennys (ei toteutettu, vaatii hyväksynnän):** kun `waitPositioned`in ajastin laukeaa selvästi myöhässä (pääsäie on ollut jumissa), odotusta jatketaan lyhyesti eikä aikakatkaisua kirjata heti. Tämä ei muuta 5 s:n rajaa normaalitilanteessa. Rajaa ei muuteta ilman päätöstä (luku 5).
- Onko jumi simulaattorin ominaisuus (ääni ja media kulkevat Macin prosessien kautta) vai esiintyykö se myös iPhonella, on selvitettävä laitteella.

### Uusi mittari

`&koe=kelaussarja` mittaa jokaisesta sarjasta pääsäikeen pisimmän jumin 20 ms:n ajastimella (`pisinJumiMs`). Analyysityökalu laskee käsin tehdyille sarjoille saman 500 ms:n näytteiden väleistä. Tällä H7 erottuu suoraan raportista.

## 8. Simulaattoriajo K1–K3:n jälkeen (19.11.2026)

**Ympäristö:** iPhone 16 Pro -simulaattori, iOS 27.2, Mobile Safari 27.2. Sivu `kaksiraitatesti.html?lahde=synteettinen&koe=kelaussarja` Macin paikalliselta palvelimelta (`127.0.0.1`, käännös `7fdb5dd65cc9` = commit `877c7fd`). Synteettinen 60 s:n aineisto muistista. Ei ääni- tai kuulohavaintoja.

**Raakaloki:** `raportit/simulaattori-2026-11-19-3.json` (yksi sivulataus, 3 932 tapahtumaa; tapahtumaloki on rajattu 4 000:een, joten pidemmät ajot kannattaa jakaa sivulatauksiin). Vapaatekstikenttiä ei ole.

### Tulokset

| Ajo | Sarjoja | ok | Aikakatkaisu | Pisin jumi |
| --- | --- | --- | --- | --- |
| Ajuri, kierros 1 | 24 (12 soitosta, 12 aloituksesta) | 24 | 0 | 10 610 ms (sarja 23, toisto päätyi silti kohteeseen) |
| Ajuri, kierros 2 | 24 (12 + 12) | 23 | 1 (sarja 22, aloituksesta) | 10 666 ms |
| Käsin, painikkeet (H6) | 7 tunnistettua (5 soitosta, 2 aloituksesta) | 5 | 2 (molemmat aloituksesta) | 10 825 ja 10 862 ms (näyteväli) |

- **V1 ja V2 eivät toistuneet:** kesken aloituksen tehty kelaus käynnisti uuden aloituksen joka kerta (`paatos: uusi-aloitus`, `kesken` ≠ null), ja 46 ohitettua aloitusta kirjasi `aloitus-ohitettu` eikä yhtään ohitetun aloituksen `kelattu: aikakatkaisu` -merkintää.
- **H1 ei näkynyt:** WebKit ei lähettänyt `pause`-tapahtumaa kesken aloituksen. Kaikki 27 `pause-paatos`-tapahtumaa johtuivat Tauko-painalluksista (`kesken: false`).
- **Kaikki kolme aikakatkaisua ja yksi lisäjumi ovat H7:n mukaisia:** viimeisen `seek-write`n jälkeen ei tapahtumia eikä näytteitä 10,5–10,9 s, sitten `emptied`, erääntynyt 5 s:n ajastin (`kelaus-aikakatkaisu`) ja raidat valmiina 50–70 ms:ssa. Koko sivu on jumin ajan reagoimaton.

### H7:n laukaisuehto (havainto, ei vahvistettu juurisyy)

Kaikki neljä jumia (ja alkuperäinen raportti 1) syntyivät, kun uusi aloitus kutsui `pause()` + `load()` elementille, jonka `play()` oli täyttynyt **3–32 ms** aiemmin:

| `toisto-alkoi` → uusi `load()` soivaan elementtiin | Kertoja | Jumi > 1 s |
| --- | --- | --- |
| ≤ 40 ms | 17 | 4 (3, 5, 9 ja 32 ms) |
| > 40 ms | 61 | 0 |
| Alkuperäinen raportti 1 | 1 (10 ms) | 1 |

- Jumin kesto on joka kerta lähes sama (10,5–10,9 s), mikä viittaa kiinteään aikarajaan WebKitin sisällä eikä kuormaan. Tämä on päättely, ei todennettu.
- Chromiumissa jumia ei havaittu (T8: 24/24, pisin jumi 28 ms). Ajoitusikkunaa ei ole kohdistetusti testattu Chromiumissa.
- Simulaattorissa media ja ääni kulkevat Macin prosessien kautta, joten **ilmiö on todennettava iPhonella** ennen kuin siitä tehdään päätöksiä tuotantosoittimelle.

### Lievennysvaihtoehdot (ei toteutettu, vaativat omistajan päätöksen)

- **K4a, aloituksen viive vain kilpaikkunassa:** jos uusi aloitus kohdistuu elementtiin, jonka toisto alkoi alle 50 ms sitten, `pause()` + `load()` siirretään 50 ms:n päähän toiston alusta. Muuttaa ajoitusta vain tässä ikkunassa. Ei poista jumia, jos syy on muu.
- **K4b, erääntyneen ajastimen armonaika:** jos `waitPositioned`in ajastin laukeaa yli 1 s myöhässä, odotetaan vielä hetki ennen aikakatkaisua. Estää virheellisen aikakatkaisun jumin jälkeen (raidat olivat valmiit 50–70 ms:ssa), mutta ei poista 10 s:n jäätymistä.
- Kumpaakaan ei toteutettu: luku 5 kieltää ajoituksen ja aikarajan muutokset ilman päätöstä.

