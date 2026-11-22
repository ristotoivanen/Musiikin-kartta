# Ydinopintojen käyttöliittymä: keskustelujen päätös- ja arkistointikooste

**Päiväys:** 21.11.2026  
**Kohde:** Musiikin kartta, [PR #141](https://github.com/ristotoivanen/Musiikin-kartta/pull/141), Sointujen ja Rytmin yhteinen Ydinopinnot-käyttöliittymä sekä Sointujen *Yksi sävel muuttaa sointua* -harjoitus.  
**Tila:** käyttäjän hyväksymä visuaalinen/käytettävyysratkaisu; **PR edelleen Draft, ei beta-/main-yhdistämislupaa**.  
**Tarkoitus:** säilyttää myöhempää toteutusta ja katselmointia varten päätökset, toteutukset, rajaukset ja avoimet portit, jotta aiheesta käydyt ChatGPT-keskustelut voi arkistoida menettämättä sovittuja periaatteita.

## 1. Lähteet ja todennettavuuden rajat

- Tämän keskusteluketjun päätökset, palautteet ja GitHubiin tehdyt muutokset 21.11.2026.
- Aiemman samaa aihetta käsitelleen keskustelun käytettävissä ollut keskusteluhistoria sekä viittaus käyttäjän jakamaan keskusteluun: [ChatGPT-jaettu keskustelu](https://chatgpt.com/share/6b02048e-c6dc-83eb-afeb-0ca0d5180b34).
- Todennetut [PR #141:n kuvaus ja kommentit](https://github.com/ristotoivanen/Musiikin-kartta/pull/141), [yhteinen QA-raportti](raportti.md), lähdekoodi ja selaintestit.
- **Rajoitus:** jaettua ChatGPT-sivua ei saatu avattua suoraan tässä dokumentointiympäristössä. Tätä tekstiä ei tule pitää kyseisen jaetun sivun täydellisenä sanatarkkana kopiona. Kokonaisuus on koottu palautettavissa olleista keskustelupäätöksistä ja GitHubissa säilyvästä toteutuksesta; puuttuvaa keskustelusisältöä ei ole arvattu.
- Toteutuneen QA-ajon lopputulos tulee tarkistaa GitHub Actionsista. Tämän koonnin tekohetkellä uusimman selaintestiajon lopputulos oli **vielä avoin**.

## 2. Hyväksytty yhteinen navigointi ja oppitunnit

1. Sointujen ja Rytmin aiheissa **Ydinopinnot, Lisäopinnot ja Aiemmat sisällöt** ovat oletusarvoisesti kiinni. Vain yksi pääkokonaisuus on auki kerrallaan.
2. Kokonaisuuden sisällä on avattavia oppitunteja; vain yksi sisäinen oppitunti on auki kerrallaan. Käyttö perustuu tuttuihin avaa/sulje-toimintoihin, ei koko näkymän tarpeettomaan uusimiseen.
3. Oppitunnin avaus siirtää otsikon puhelimella hallitusti näkyville. Sulku otsikosta tai **Sulje oppitunti** -painikkeesta palauttaa sijainnin ja näppäimistöfokuksen avauskohtaan.
4. Oppitunnin saa avata myös **omalla sivullaan** keskittymistilaan ilman aiheen päävalikon toistoa. Paluu vie samaan oppituntiin. Suorat ankkurit, linkit ja vanhat suoritusmerkinnät säilyvät.
5. **Tehty** ja **Kokeiltu** ovat eri merkityksiä. Uusi kokeilumerkintä ei saa kasvattaa vanhoja tehty-laskureita eikä esittää soittotaitoa todennettuna.
6. Käyttäjä katselmoi yhteisen käyttöliittymän toimintaa myös fyysisellä iPhonella ja hyväksyi avaus-, sulku-, vieritys- ja keskittymistilaratkaisut. Tämä ei ole näyttö Safari-äänen, VoiceOverin tai lukituksen jälkeisen toiston läpäisystä.
7. Yhteinen graafinen malli hyväksyttiin **Soinnuille ja Rytmille**. Muiden kuuden aiheen Ydinopintojen sisältöä tai pedagogista hyväksyntää ei tällä päätöksellä luotu.

## 3. Hyväksytty ikonisto ja Knoppitieto

- Kahdeksan pääaiheen kortin yhtenäinen SVG-sarja: **(1) akustinen kitara, (2) metronomi, (3) nuotti viivastolla, (4) korva, (5) otelauta, (6) G-avain, (7) nousevat palkit, (8) avoin kirja**. Pääkortissa kuvake 44 × 44 px.
- **Kuuntele:** yksinkertaistettu korvakuvake, 19 px. **Soita itse:** hyväksytty akustinen kitara, 22 px. Aiempi epäselvästi kitaralta näyttänyt ehdokas hylättiin; lopullista akustista kitaraa ei vaihdeta takaisin.
- **Knoppitieto:** noin 20 % kapeampi 22 px **plektran** symboli, ei `i`-kirjainta. Suljettuna ääriviiva; avattuna teemavärillä täytetty.
- Knoppitiedon avaaminen vierittää lisäsisällön otsikon näkyville etenkin puhelimessa. Avatun lisätiedon **oikeassa yläkulmassa** on täytetty sulkuplektra, jonka vähimmäispainikealue on **44 × 44 px**. Sitä painamalla lisätieto sulkeutuu ja vieritys sekä fokus palaavat alkuperäiseen avauskohtaan.
- Toteutuksessa säilyy natiivi `details/summary`-toiminta ja näppäimistökäyttö. Ilman JavaScriptiä natiivi avaaminen toimii edelleen; JS:ää vaativa sisäinen sulkupainike ei jää näkyviin toimimattomana. Tulosteessa ylimääräistä sulkupainiketta ei näytetä.
- Näitä ikonipäätöksiä ei pidä enää muuttaa vain uusien graafisten vaihtoehtojen vuoksi. Käyttäjä hyväksyi nykyisen kapeahkon plektran, vaikka muoto ei ollut täysin ideaalinen.

## 4. Soinnut: *Yksi sävel muuttaa sointua*

### Ongelma, joka ratkaistiin

Aiemmassa mobiilinäkymässä **Arvaa**-painallus muutti harjoituksen rakennetta liikaa: kysymys ilmestyi vasta tässä vaiheessa, E/Em-kuuntelupainikkeet korvautuivat eri kokoisilla ja eri paikkaan päätyvillä painikkeilla ja sointukaaviot katosivat. Se hankaloitti kysymyksen ja kuuntelun paikantamista.

### Hyväksytty rakenne ja toiminta

1. Kysymyksellä on **valmiiksi näkyvä vakipaikka**. Alussa siinä lukee esimerkiksi `Kuuntele ensin E ja Em`; arvatessa sama kortti kysyy `Kumpi on duuri?` tai `Kumpi on molli?`. Kysymyksen fokus ja vieritys hoidetaan ilman turhia siirtymiä.
2. **E/Em**-kuuntelupainikkeet ja **Sointu 1 / Sointu 2** -kuuntelupainikkeet käyttävät samaa ruudukkoa, leveyksiä, korkeuksia ja sijainteja. **Arvaa / Uusi arvaus** pysyy omalla paikallaan. 390 px leveällä erillisellä oppituntisivulla kuuntelupainikkeet saavat olla allekkain jo alussa; niitä ei pakoteta vierekkäin hinnalla millä hyvänsä.
3. **Vastausvaihtoehdot ovat erilliset kuuntelupainikkeista** ja tulevat niiden alapuolelle vasta arvauksen alettua.
4. Sointukaaviot ja nimeä paljastava vertailu **piilotetaan vain arvauksen ajaksi**. Vastauksen jälkeen nimet ja kaaviot palautuvat ja soinnut voi kuunnella uudelleen.
5. **Oikein vastattu:** valittu vastauspainike vihreäksi. **Väärin vastattu:** valittu vastauspainike punaiseksi ja oikea vaihtoehto vihreäksi. Kaikissa tapauksissa tulos sanotaan myös tekstillä ja painikkeen ruudunlukijanimessä; väri ei ole ainoa palaute.
6. Vastauspainikkeet lukitaan vastauksen jälkeen kuten aiemmin, mutta niiden sijainti, koko ja näkyvä teksti eivät muutu väripalautteen seurauksena. **Uusi arvaus** palauttaa värit ja sanalliset tilat neutraaleiksi ja aloittaa uuden kierroksen.
7. Harjoituksen musiikillinen sisältö säilyy: **E-duurin ja E-mollin ero on G♯/G**. Äänien ajoitusta, satunnaistusta, tallennusmerkintöjä tai muuta hyväksyttyä pedagogiikkaa ei tämän UI-korjauksen vuoksi muuteta.

### Toteutuksen ja testien jäljet

- Vakiopaikkojen katselmointitoteutus PR #141:n komiteissa `e565411`, `63c11a9`, `932b639` ja generaattorin synkronoinnissa.
- Väripalautteen toteutus commitissa [`2618db2`](https://github.com/ristotoivanen/Musiikin-kartta/commit/2618db2fce21376239c2d83dbe48dae72c5ffbf8), tiedostot `assets/sointuharjoitus.js`, `assets/sointuharjoitus.css` sekä `tests/e2e/soinnut-kokonaisuudet.spec.ts`. Automaattisesti generoitu HTML seuraa Python-lähteitä.
- Playwright-regressiot tarkistavat 390 px tilanvaihdossa kuuntelu-/Arvaa-painikkeiden dokumenttikoordinaatit ja vastauspainikkeiden oikein/väärin-tilat, nollauksen, värit, ruudunlukijanimet sekä mitat ja sijainnit.
- Käyttäjän nimenomainen katselmointipäätös 21.11.2026: **`Tuo minusta nyt tarpeeksi hyvä.`** Tämä hyväksyy harjoituksen nykyisen käyttöliittymän ja väripalautteen; uusia kosmeettisia kierroksia ei tarvita ilman todellista ongelmaa.
- Toteutuksen [GitHub-kirjaus](https://github.com/ristotoivanen/Musiikin-kartta/pull/141#issuecomment-7068968866) ja [hyväksynnän kirjaus](https://github.com/ristotoivanen/Musiikin-kartta/pull/141#issuecomment-7069029516).
- Viimeinen dokumentoinnin yhteydessä todettu branch-versio ennen tätä koontia: `b0df0ff` (generoitu HTML commitin `2618db2` jälkeen). Esikatselun osoitteita ja HTML:n välimuistiversioita ei pidä tulkita muuttumattomiksi pysyviksi testituloksiksi.

## 5. Laadunvarmistuksen vahvistetut tulokset ja avoimet portit

**Automaattiset tarkistukset 21.11.2026:**

- Väripalautteen pushin [QA-ajo #44947753739](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/44947753739): generaattori, lint, yksikkötestit, tyyppitarkistus/build ja linkkitarkistus **läpäisivät**. Koko Playwright-selaintestivaihe oli tätä koostetta kirjoitettaessa **vielä käynnissä**; sen tulosta **ei** väitetä onnistuneeksi.
- Aiempi laaja ajo [#44939992811](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/44939992811): **954 Playwright-testiä läpäisi, 46 ohitettiin, 10 epäonnistui**; aiemmat regressiot ja 320 px / 200 % -tapaukset on käsitelty erillisissä GitHub-tehtävissä.
- Fyysisen iPhonen **Safari-äänen**, lukituksen/taustalle siirtymisen, **VoiceOverin** ja kattavan saavutettavuustestauksen läpäisyä **ei ole todennettu**. Pelkkä Chromium-puhelinemulaatio ei korvaa näitä.
- Tarkistettava edelleen tarkoituksenmukaisesti: 320/360/390 px ja 200/400 % reflow, kontrastit sekä pakotetut värit, näppäimistö, JS pois, tulostus, suoritusmerkintöjen yhteensopivuus ja selaimen paluun vieritys/fokus. Jo todetut hyväksynnät säilyvät, mutta teknisiä julkaisuehtoja ei ohiteta.

**Erilliset regressiotehtävät, joita ei pidä korjata koskemalla hyväksyttyyn UI:hin:**

- [#142: Musapelien 320 px / 200 % vaakavieritys](https://github.com/ristotoivanen/Musiikin-kartta/issues/142).
- [#143: Intervallimuistin 320 px / 200 % ylivuoto ja mobiilin taulukkopyyhkäisy](https://github.com/ristotoivanen/Musiikin-kartta/issues/143).
- [#144: Kitaran perusteiden sävelnimien luettavuus 320 px / 200 %](https://github.com/ristotoivanen/Musiikin-kartta/issues/144).

Näiden löydösten osalta erillisen beta-vertailun tulokset ja hyväksymiskriteerit ovat kunkin tehtävän omassa kuvauksessa. Ne eivät yksin osoita, että #141:n Soinnut/Rytmi-muutos olisi aiheuttanut ongelman.

## 6. Riippuvuudet ja rajaus jatkotyölle

- **PR #141** kokoaa Sointujen ja Rytmin yhteisen käyttöliittymän, äänet, kuvakkeet ja testit. Yhteensovittamattomia avoimia Draft-töitä **[#133](https://github.com/ristotoivanen/Musiikin-kartta/pull/133), [#134](https://github.com/ristotoivanen/Musiikin-kartta/pull/134), [#137](https://github.com/ristotoivanen/Musiikin-kartta/pull/137)** ei yhdistetä sen päälle toisistaan riippumatta.
- Muun kuuden aiheen Ydinopintojen pedagoginen suunnittelu: [#115](https://github.com/ristotoivanen/Musiikin-kartta/issues/115) ja [PR #138](https://github.com/ristotoivanen/Musiikin-kartta/pull/138). Aihesivujen muu selkeyttäminen: [#116](https://github.com/ristotoivanen/Musiikin-kartta/issues/116). Ikoniston määrittely: [#125](https://github.com/ristotoivanen/Musiikin-kartta/issues/125). Vaalean teeman koko sivuston ratkaisut: [#124](https://github.com/ristotoivanen/Musiikin-kartta/issues/124). Niitä ei pidä tulkita tähän hyväksyntään sisältyviksi.
- Muut kuin nimenomaisesti kuvattu käyttöliittymä- ja testimuutos pidetään ennallaan. Uudet havainnot dokumentoidaan samaan PR:ään tai tarkoituksenmukaiseen erilliseen tehtävään.
- **Julkaisuportti: edelleen NO-GO** koko PR #141:n beta-/main-yhdistämiselle ennen teknisten tarkistusten kirjattua käsittelyä ja omistajan **erikseen antamaa nimenomaista yhdistämislupaa**.

## 7. Paluu tähän työhön arkistoinnin jälkeen

Aloita [PR #141:stä](https://github.com/ristotoivanen/Musiikin-kartta/pull/141), tästä koosteesta ja [varsinaisesta QA-raportista](raportti.md). Tarkista GitHubista senhetkinen HEAD, viimeisin Actions-ajo, erillisten issueiden tila ja mahdolliset myöhemmät hyväksynnät ennen uuden työn aloittamista. Hyväksyttyä käyttöliittymää ei tarvitse suunnitella alusta.

**Keskustelujen arkistointi ChatGPT:ssä ei itsessään muuta GitHubia, yhdistä PR:ää tai poista jaetun keskustelulinkin käyttöoikeutta.** Arkistointia ei ole suoritettu tämän dokumentin luomisella.
