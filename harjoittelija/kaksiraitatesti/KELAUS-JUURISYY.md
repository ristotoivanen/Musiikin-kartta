# Kelauksen aikakatkaisu ja puuttuva loadstart: juurisyyanalyysi (MK-20261119-03)

**Tila:** analyysi ja korjausehdotus. Moottoria ei ole muutettu, ja korjaus odottaa omistajan hyväksyntää.
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
