# Issue #54:n sisältö ennen auditointia

Tilanne 16.11.2026 ennen päätehtävälistan päivitystä. Tämä on historiallinen versio. Ajantasainen työlista on [issue #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54).

# Oppimisuudistuksen toteutustiekartta ja päätösportit

**Tila 14.11.2026:** Yhteinen tehtävälista **suunnittelusta pilotin kautta rajattuun toteutukseen**. Tämä issue on uudistuksen **ensisijainen seuranta- ja järjestyslista**, ei uusi rinnakkainen opetussuunnitelma eikä suora toimeksianto muuttaa betaa. Kukin olemassa oleva issue on oman aiheensa tarkempi toteutus-/suunnittelutehtävä. **Älä sulje niitä tämän koonnin perusteella.**

**Periaate, jota jokaisessa vaiheessa suojataan:** teoria, virtuaaliset pelit, oikean kitaran hyödylliset harjoitukset ja oikealla kitaralla tehtävät pelilliset haasteet ovat **saman oppimiskokonaisuuden tehtävämuotoja**. Ei pakollista `Pelaa` vastaan `Harjoittele` -valintaa eikä kahta opetussuunnitelmaa. Eteneminen on intuitiivinen ja suositeltu, **ei lukittu**; vapaa harjoittelu ja itsenäinen teoriaopiskelu säilyvät. Ei yleistä pelimoottoria ilman todennettua hyötyä.

## 0. Tutkimus- ja suunnittelupohja (VALMIS – ei tarkoita lopullista hyväksyntää)

- [x] Alkuperäinen **11 raportin** oppimisarkkitehtuurin auditointi tuotu muuttamattomana dokumentaatiohaaraan (PR #53).
- [x] Yhtenäisen oppimisen tavoiterakenne dokumentoitu (PR #53; #49).
- [x] Auditoinnin taitotaulukon todellinen määrä varmistettu: **36** tunnistetta; alkuperäiset riippuvuudet käyty läpi ja **18/36** rivin muutosehdotukset dokumentoitu. Ehdotettu ydinriippuvuusverkko on syklitön. **Katselmointi ei ole pedagoginen hyväksyntä**.
- [x] Ensimmäisen oppimiskokonaisuuden `Soita ensimmäiset neljä iskua` käsikirjoitus tehty, mukaan lukien teoria, kevyt kuuntelupeli, todellinen kitarasoitto, vapaa valinta ja musiikillinen soveltaminen.
- [x] Sisällöltään vastaavien **A (suorat linkit nykyisiin sivuihin)** ja **E (kevyt oppimistavoitesivu)** -vaihtoehtojen vertailusuunnitelma kirjoitettu. **Vertailua ei vielä ajettu**.

**Aineisto:** [PR #53](https://github.com/ristotoivanen/Musiikin-kartta/pull/53) / `docs/oppiminen/` ja `docs/audit/oppimisarkkitehtuuri-2026-11/`. **Auditoinnin koonti:** #45.

## 1. Suunnitelman katselmointi ja ensimmäisen pilotin rajaus (SEURAAVAKSI)

- [ ] **Päätös 1.1:** hyväksytäänkö [yhteisen oppimisrakenteen periaatteet](https://github.com/ristotoivanen/Musiikin-kartta/blob/docs/yhtenainen-oppimisrakenne-2026-11/docs/oppiminen/yhtenainen-oppimisrakenne-2026-11.md) pilotin lähtökohdaksi? Erota päätös *koko sivuston rakenteen* hyväksymisestä.
- [ ] **Päätös 1.2:** katselmoidaan 36 taidon riippuvuudet (etenkin `EAR-ECHO`, `MELO-EAR`, `HARM-FUNCTION`, `SCALE-PENTA`, `PLAY-IMPRO`, `HARM-7`). Dokumentoidaan hyväksytyt/korjattavat suhteet erikseen, **ei muokata alkuperäistä auditointia**.
- [ ] **Päätös 1.3:** rajataan ensimmäinen pilotti **vain yhteen jaksoon**: `Soita ensimmäiset neljä iskua`. Vahvistetaan mikä on välttämätön ensimmäinen toiminto, mitkä ovat valinnaiset pelilliset ja oikean kitaran tehtävät, ja mitä tarkoittaa onnistuminen. [Käsikirjoitus](https://github.com/ristotoivanen/Musiikin-kartta/blob/docs/yhtenainen-oppimisrakenne-2026-11/docs/oppiminen/ensimmainen-oppimisjakso-nelja-iskua-2026-11.md).
- [ ] **Päätös 1.4:** sovitaan ennen testiä A/E-vertailun vähimmäishyöty, pieni testiryhmä, laitteet, testiohjeet ja kuka havainnoi tulokset; erotetaan käytettävyys, oppiminen ja fyysinen soitto.
- [ ] **PR #53:** tarkistetaan vain dokumentaation sisällöllinen johdonmukaisuus. **Omistaja päättää**, muutetaanko draftista katselmoitavaksi ja yhdistetäänkö dokumentaatio betaan; sitä ei tarvitse odottaa käyttöliittymäpilotiksi, eikä yhdistäminen hyväksy lopullista rakenneuudistusta.

**Portti G1:** ensimmäisen pilotin tavoite, rajaus, riippuvuudet ja vertailukriteerit kirjattu, suunnittelun keskeneräisyydet tiedossa. **Ilman G1:tä ei käynnistetä laajaa UI-uudistusta.**

## 2. Ensimmäisen pilotin aineisto ja pienet prototyypit

- [ ] Valmistellaan/varmennetaan **neljän tasaisen iskun malli**, vertailukelpoiset tasainen–epätasainen-kuuntelunäytteet sekä pieni **alkuperäinen** tausta; tarkistetaan äänen tasot, kitaralla soitettavuus ja verkkojulkaisun oikeudet. Ei väitettä valmiista äänimateriaaleista.
- [ ] Tarkistetaan ensimmäisen fyysisen kitaratehtävän ohjeet: yksi vapaa kieli, kevyt näppäily, äänen sammuttaminen, ergonomia, kohtuullinen äänenvoimakkuus ja ilman mikrofonia eteneminen. Viritys vasta sävelkorkeusvertailussa.
- [ ] Toteutetaan **A-verrokki** vain nykyisten sivujen lyhyillä ohjeilla, oikeilla syvälinkeillä ja paluureitillä; opetussisältö sama kuin E:ssä.
- [ ] Toteutetaan erillinen **E-prototyyppi** samalle neljän iskun materiaalille. Ei uutta tilien, pisteytysten, pelimoottorin tai pysyvän edistymisen alustaa.
- [ ] Automaattinen vähimmäistestaus: tehtävän aloitus, äänentoisto/pysäytys, paluu teoriaan, näppäimistö, mobiilin 320/360/390 px, ilman ääntä tapahtuva vaihtoehtoinen käyttö. **Nykyiset syvälinkit ja localStorage säilyvät.**

**Portti G2:** molemmat prototyypit ovat oikeasti saman tehtävän vertailukelpoisia versioita; äänet ja oikeudet sekä turvallisen käytön ohjeet varmistettu. Toteutuksia ei julkaista tuotantoon ilman erillistä hyväksyntää.

## 3. Koekäyttö ja päätös uuden rakenteen laajuudesta

- [ ] Testataan ensikertalaisilla **ilman suullista opastusta**: ensimmäisen toiminnon löytäminen, teorian avaus oikealla hetkellä, kertaus ja paluu, keskeytys ja jatko.
- [ ] Kokeillaan **oikealla kitaralla** ja ilman kitaraa, ainakin työpöydällä ja fyysisellä puhelimella. Arvioidaan ääni, ergonomia, syötteen epävarmuus ja tekniset virhetilanteet. Mikrofonia ei pakoteta.
- [ ] Tallennetaan erilleen tehtävän oikea valinta, ohjattu onnistuminen, itsearvioitu fyysinen soitto sekä mahdollinen arvioijan todentama soittosuoritus.
- [ ] Kokeillaan uutta esimerkkiä ja mielellään **viivästettyä kertausta**. Tunnistetaan, jos tehtävä onnistuu vain ulkoa opitulla nappijärjestyksellä.
- [ ] Raportoidaan A:n ja E:n vertailun havainnot, ylläpitokustannus, löydettävyys ja todelliset oppimisrajat. **Jos E:n lisäarvo jää epäselväksi, valitaan A** eikä rakenneta kokonaan uutta rakennetta pelkän näyttävyyden vuoksi.
- [ ] **Omistajan päätös G3:** valitaan A, E tai rajattu muunnelma ja kirjataan perustelut sekä mahdolliset muutostarpeet.

**Portti G3:** ei yleistä sivuston oppimispolkujen uudelleenjärjestelyä ennen A/E-päätöstä.

## 4. Hyväksytyn mallin rajattu toteutus ja julkaisu

- [ ] Tehdään yhden oppimisjakson tuotantokelpoinen versio: teoria, pelilliset/ei-pelilliset tehtävät, oikean kitaran osuus, paluu, kertaus, suorat linkit ja vapaa aiheen valinta.
- [ ] Valmistellaan aiemman sisällön taito-/teoriaviitteet sekä **vain perustellusti yhteinen UX** (#49): Jatka, Kertaa, Valitse tehtävä, palaute ja virheen selitys. Ei pakollisia lukkoja eikä `Pelaa/Harjoittele`-porttia.
- [ ] Testataan saavutettavuus, selain- ja fyysiset mobiililaitteet, audio- ja mikrofonitilojen katkaisu, tallenteiden migraatio *vain jos tallennusmallia muutetaan*.
- [ ] Julkaistaan vaiheittain beta → katselmointi/koesoitto → erillinen tuotantohyväksyntä. **Dokumentaatio-PR #53 ei ole sovelluskoodin julkaisuvaltuutus.**

**Portti G4:** ensimmäinen oikeasti toimiva oppimisjakso hyväksytty. Vasta tämän jälkeen laajennetaan rakenteellista muutosta muihin aiheisiin.

## 5. Laajennus oppimistavoitteittain, ei yhtä suurta kaikki-kerralla-projektia

Ehdotettu järjestys ensimmäisen pilotin jälkeen. Kunkin sisältö pilkotaan **omaksi rajatuksi toteutus-PR:ksi** nykyisten issueiden perusteella:

- [ ] **Kitaran perusteet – tarkoituksella lyhyt 2–5 minuutin kertaus (#72; suunnitelma draft-PR #74, toteutus draft-PR #83):** omistajan 16.11.2026 päättämä rajaus **ei sisällä harjoituksia, pelejä, soittotehtäviä, suoritustilastoja eikä seitsemän aiheen hakemiston toistoa**. Kolme kompaktia kertausteemaa: kielet/otelauta, soinnut/merkinnät ja rytmin peruskäsitteet; lisäopiskeluun linkki tarvittaessa ja selkeä siirtymä Oppimiskarttaan. Betassa ennestään olevat viisi harjoitussivua ja tallennukset säilytetään, mutta niitä ei näytetä pikakertauksen suorituspolkuna. Korjaus tehdään samaan PR #83:een, katselmoidaan esikatselussa; ei automaattista mergeä eikä julkaisua.

- [ ] **Kahden sävelen vastaus**: nykyiseen Riffikaikuun perustuva *uusi lyhyt aloittelijavariantti* ja oikean kitaran matkiminen. Ei väitettä, että nykyinen peli jo sisältäisi tämän.
- [ ] **Ensimmäinen kappaleen soitettava rooli**: helppo yhden kielen rytmi, sitten sointuvaihto; musiikillinen sovitus ja käyttöoikeudet tarkistettava.
- [ ] **Komppirytmien kuuntelu, rakentaminen ja soitto (#69)**: nykyisen osa 1:n pulssi-/alas–ylös-perustan jälkeen tauot, aksentit, vaimennukset, synkoopit ja saman sointukierron erilaiset rytmiset toteutukset. Pieni kuuntelu–ruudukko–oikea kitara -pilotti; ei nuolikaavioiden irrallista kopiointia eikä muutoksia keskeneräisiin peleihin. Toteutus ja hyväksynnät erikseen.
- [ ] **Melodian kotisävel ja kuuntelu**: Ensikeikan teoria, uusi kuuntelukoe, pelin UX-korjaukset #47.
- [ ] **Otelauta ja Säveljahti**: sama aihe yhdistää kielen/nauhan teorian, virtuaaliset etsinnät, oikealla kitaralla sävelten soittamisen ja kertaamisen (#50); PR #46 / #43 on rajattu olemassa olevan tehtävän ääniparannus, ei Säveljahdin valmistuminen.
- [ ] **Soinnut ja Sointipaja**: avosoinnut → juuri/terssi/kvintti → sointukierrot → barré ja seiskasoinnut; teorialinkit, peli ja oikea soitto samassa aiheessa (#48).
- [ ] **Skaalat, pentatoniset ja moodit**: nykyiset `ScaleJourney`, `ScaleBridgeJourney`, `ModeJourney`, `MelodyPractice` ja pelilliset tehtävät saman jakson sisällä (#52, #30, #31). Ei kahta erillistä opetussuunnitelmaa.
- [ ] **Mollibluesasteikko Otelautaoppaaseen ja oppimispolkuun (#68)**: yksi yhteinen asteikkomääritelmä, ♭5-erottelu, viisi oikein rajattua pentatonista boksia, yhteys teoriaosan 8 blueskuvaukseen sekä myöhempi kuuntelu-/soittoharjoittelu. Nykyinen G-blues kappaleharjoittelussa säilyy; rajattu toteutus erikseen nykyisten Ensikeikka- ja Riffikaiku-töiden jälkeen. Ei automaattista toteutusta tai julkaisua.
- [ ] **Syventävät ja uudet aiheet** priorisoidaan toteutuksen käytettävyys- ja oppimisnäytön sekä todellisen harjoitusaukon perusteella. Vain tarvittaviin asioihin uusi peli.

### Riippumattomat pienkorjaukset rinnalla

Nämä **eivät estä** ensimmäisen oppimisjakson pedagogista prototyyppiä eikä niitä pidä niputtaa samaan isoon PR:ään:
- [ ] PR #46 / #43: sävelen ääni otelaudalla, testattava ennen yhdistämistä.
- [ ] #51: Riffikaiun staattinen `Aloita tästä` -kortti.
- [ ] #44: Otelautaoppaan ylimääräinen alavalikko.
- [ ] #47: Ensikeikan kuuntelun ja lopetusvalintojen yhdistäminen.

## Hyväksymisen ja valmiuden määritelmä

**Tehtävä on valmis** vasta, kun: (a) määritelty oppimistavoite ja tarvittava teoria ovat samassa yhteydessä; (b) tehtävä toimii ilman pakollista erillistä tutorialia, ja käyttäjä voi jatkaa/kerrata/vaihtaa aihetta; (c) mittaus väittää vain sen, mitä tehtävä oikeasti mittaa; (d) ääni/mobiili/saavutettavuus/soittimella tehty koe ja oikeudet on tarkistettu tehtävän vaatimalta osin; (e) testit ja katselmointi on kirjattu; (f) beta ja tuotanto saavat erilliset hyväksynnät.

**Oletusjärjestys heti nyt:** käsittele **vaihe 1** ja hyväksy pilotin rajaus. Älä käynnistä vaihetta 5 vain siksi, että pelikonseptit ovat valmiit. Säilytä nykyinen toimiva sivusto ja kaikki olemassa olevat käyttötavat siirtymäkaudella.


---

## G1-katselmointi 14.11.2026: valmiit perustelut, hyväksyntä auki

**[Lue G1:n täsmällinen katselmointi ja A/E-pilotin päätösrajat](https://github.com/ristotoivanen/Musiikin-kartta/blob/docs/yhtenainen-oppimisrakenne-2026-11/docs/oppiminen/g1-pilotin-katselmointi-ja-paatosrajat-2026-11.md)** · sisältyy PR #53:een.

- [x] **1.1 valmistelu:** käyttäjän päätettyihin periaatteisiin verrattu oppimisjakson rajaus, teoria samassa jaksossa, virtuaalinen ja fyysinen tehtävä, vapaa eteneminen, ei kahta Pelaa/Harjoittele-putkea. **Omistajan hyväksyntää ei oleteta**.
- [x] **1.2 sisäinen kriittinen tarkistus:** kaikki 36 taitoa taustalla; kriittiset `EAR-ECHO`, `MELO-EAR`, `HARM-FUNCTION`, `SCALE-PENTA`, `PLAY-IMPRO`, `HARM-7` käyty erikseen läpi. Tehtäväkohtaiset suoritustavat, ei lukitusgraafia. **Pedagogin riippumaton katselmointi auki**.
- [x] **1.3 pilotin luonnos lukittu vertailun lähtöehdotukseksi:** `Soita ensimmäiset neljä iskua`, aloitus `Kuuntele neljä iskua`, kuuntelupeli valinnainen, oikean kitaran vapaa kieli / taputus ilman mikkiä, lyhyt musiikillinen sovellus. **Uusia ääniä ei ole vielä tuotettu**.
- [x] **1.4 vertailun valmistelu:** sama sisältö A/E, ehdotus 8 ensikertalaisesta + 2 jo osaavasta, etukäteiset havainnot ja esitetty E:n lisäarvon kynnys; pieni otos ei ole tilastollinen oppimistutkimus.
- [ ] **G1:n varsinainen päätös:** omistaja hyväksyy/korjaa rajauksen ja vertailuehdot. Vasta sen jälkeen kaksi pientä prototyyppiä, **ei** koko sivuston rakenneuudistusta.

**Huom:** yllä ovat **valmistelun** kuittaukset. Vaiheen 1 alkuperäiset neljä päätöskohtaa pysyvät tarkoituksella avoimina, kunnes sovitut ratkaisut on hyväksytty. Sovelluskoodia ei ole muutettu. PR #53 on dokumentaatio-PR, edelleen luonnos.


## Etusivun aihealuekuoren ensimmäinen prototyyppi (PR #55)

Käyttäjän 14.11.2026 jatkotoive: **nykyisen sivun ylätason rakenne voidaan järjestää ensin**, jolloin 36 taitotunnisteeseen liittyvää teoriaa, pelejä ja oikean kitaran tehtäviä rakennetaan **aihekohtaisesti** jatkossa.

- [x] Tehty **erilliseen prototyyppihaaraan** [draft PR #55](https://github.com/ristotoivanen/Musiikin-kartta/pull/55): etusivulle **Oppimiskartta**, kahdeksan avattavaa oppimisaihetta ja 24 aihekohtaista linkkiä nykyisiin valmiisiin sisältöihin. Kaikki 11 teoriaosaa on linkitetty vähintään yhteen aiheeseen.
- [x] Säilytetty kolme vanhaa työkalulinkkiä, vanhat URL:t ja `#harjoittelija`-ohjaus. Ei 36 näkyvää taitokoodia, ei luvattuja toteuttamattomia tehtäviä.
- [x] Lisätty testit rakenteelle, aihevalikon avaamiselle, harjoituksen syvälinkille ja 360 px leveydelle.
- [ ] Suoritettava unit-/selain-/mobiilitestit, tehtäväkohtaiset sisällön kytkennät ja visuaalinen katselmointi.
- [ ] Käyttäjätesti: onko kahdeksan aihetta hyödyllinen vai liian raskas aloitus täysin uudelle kitaristille? Tarjoa silti **suora ensimmäinen toiminto**.
- [ ] Omistajan nimenomainen hyväksyntä ennen PR #55:n beta-yhdistämistä.

**Päätösportit eivät ohitu:** PR #55 on ehdotus uudesta navigaatiokuoresta. Ensimmäisen oppimisjakson A/E-vertailu, G1 ja varsinaiset oppimista mittaavat käyttäjäkokeet ovat edelleen avoinna. Dokumentaatio-PR #53 jää erilliseksi luonnokseksi.


## PR #55:n ensimmäinen katselmointi – korjauksia ennen betaa

[PR #55](https://github.com/ristotoivanen/Musiikin-kartta/pull/55): lähdekoodin ja nykyisen navigaation katselmointi tehty 14.11.2026. Kritiikki kirjattu PR:n keskusteluun; prototyyppimuutoksia ei tässä katselmoinnissa tehty.

- [x] Kahdeksan aihealuetta, 21 linkkiä ja nykyisen sivun päällekkäiset navigointipinnat katselmoitu lähdekoodista.
- [x] Todettu puuttuva aiheen sisäinen takaisin-/jatkopolku sekä aloittelijan pitkän teoriapulssiesimerkin rajoitus.
- [x] Todettu konkreettinen linkkikohdistus: `Soinnut ja harmonia → Sointukartta` vie oletuksena asteikkonäkymään. Korjausehdotus `otelautaharjoittelija.html#soinnut`.
- [x] Cloudflare Pages -check valmistunut onnistuneesti PR:n commitissa `f08ba98`, preview: https://e14bf789.musiikin-kartta.pages.dev.
- [x] **14.11.2026:** poistettu alimmat kolme päällekkäistä työkalukorttia ja nimetty uusi jaottelu **Oppimiskartaksi**. Vanha päävalikko, yläosan pikapainikkeet ja kirjan oma **Musiikin teoria** säilyvät.
- [ ] Ensimmäisen lyhyen neljän iskun harjoituksen varsinainen toteutus sekä paluureitti ovat edelleen avoinna.
- [x] Korjattu **Sointukartta**-linkki osoitteeseen `otelautaharjoittelija.html#soinnut`; lisätty puuttuneiden teoriaosien 4 ja 10 sekä osa 6:n syvälinkit.
- [ ] Tarkennettava joidenkin aiheiden lupaukset todelliseen sisältöön ja lisättävä paluu oppimisaiheeseen.
- [ ] Aja oikeasti unit-/Playwright-testit ja tee visuaalinen/mobiili-/saavutettavuuskatselmointi.
- [ ] Käyttäjän/omistajan hyväksyntä PR #55:lle **vasta korjausten jälkeen**; G1/A-E-pilotin kokonaispäätös edelleen erillinen.

**PR #55 pidetään draftina, ei beta-mergeä ennen korjauksia.**


## Oppimiskartta: 28 teoria-aihetta ja päävalikon uudelleenohjaus (14.11.2026)

Käyttäjä pyysi, että teoriat **jaetaan kahdeksan aiheen sisään** ja sivuston päävalikon `Musiikin teoria` -linkki vie **Oppimiskarttaan** eikä teoriaoppaan erilliselle indeksisivulle. Toteutus tehty **vain PR #55:n prototyyppihaaraan**:

- [x] **28/28 yksittäistä teorialukua** sijoitettu kahdeksaan aihealueeseen, jokainen kerran. Lisäksi kolme syventävää teoriaviitettä ja 11 olemassa olevaa harjoitus-/pelilinkkiä. Sisältö erotettu `Teoria` / `Harjoitukset ja työkalut` -otsikoilla.
- [x] `Oppimiskartta` nyt yhteisessä ylävalikossa, osoitteena `index.html#oppimisaiheet`; myös 11 teoriaosaa, kirjan indeksisivu, Riffikaiku ja Ensikeikan staattinen julkaisu päivitetty. Vanha `book/index.html` säilyy suoraan käytettävänä.
- [x] Poistettu myös etusivun kolme päällekkäistä hero-pikalinkkiä (pelkät ylävalikon linkit riittävät). Vanha `#harjoittelija`-osoite ja jatkamismerkinnät sovitettu uuteen rakenteeseen.
- [x] Kaikki 28 teorialinkin HTML-ankkuria vahvistettu lähdetiedostoista; staattisia ja E2E-testejä päivitetty.
- [x] Cloudflare Pages -preview valmistunut onnistuneesti: https://22d4ccf4.musiikin-kartta.pages.dev
- [ ] `npm test`, `npm run typecheck`, `npm run lint`, `npm run test:e2e` **ajettava vielä** (GitHubin onnistunut esikatselujulkaisu ei ole testiraportti).
- [ ] Käytettävyys- ja saavutettavuuskatselmointi, puhelimet, paluureitti aiheeseen, mahdollisen otsikkokorjauksen hyväksyntä.
- [ ] PR #55 beta-yhdistäminen vasta käyttäjän hyväksynnän jälkeen. PR #53:n riippuvuus-/opetussuunnitelmaehdotukset säilyvät erillisenä.

**Uudistuksen seuraava oikea sisältötehtävä** on ensimmäisen oppimisjakson `Soita ensimmäiset neljä iskua` toteutus ja testaaminen. Pelkkä nyt tehty teoria-/harjoituslinkkikokoelma ei vielä osoita pedagogista tai musiikillista oppimista.


## Codexille valmisteltu itsenäinen työjakso

[#56 – Codex: Oppimiskartan vakautus ja rajatut korjaukset](https://github.com/ristotoivanen/Musiikin-kartta/issues/56) on tämän päätehtävälistan alainen **toimeksianto**. Työjakson toteutukset ja päätökset on kirjattu alla. Järjestys: ensin PR #55:n testaus ja korjaus, sitten #44 ja #51 erillisissä draft-PR:issä, #47 vain kun laajuus on hallittu, G1:een sidottu oppimisjakso vain katselmoitavana prototyyppinä ja iPhone/Safari-äänieste #9 vain todellisen fyysisen laitteen näytöllä ratkaistuna. Ei suoraa beta-/main-pushia eikä automaattisia mergejä.


## Työjakson tilanne 15.11.2026

- [x] PR #55:n vakautus toteutettu erilliseen draftiin #57. Tarkistettu kahdeksan aihetta, 42 linkkiä ja 28 teorialukua sekä paluu ja tallennetun edistymisen näyttö.
- [x] Rajatut toteutukset ovat draft-PR:issä #58 (#44), #59 (#47) ja #60 (#51). Omistajan katselmointi ja fyysiset laitekokeet avoinna.
- [x] Neljän draftin paikallinen yhteistesti läpäisi 456 yksikkötestiä ja 378 Playwright-testiä. 30 Playwright-testiä ohitettiin testiasetusten mukaisesti. [Tarkemmat tulokset ja komennot](https://github.com/ristotoivanen/Musiikin-kartta/issues/56#issuecomment-6885134047).
- [x] Neljän iskun A/E-pilotin tekninen toteutettavuus, aineisto ja testausjärjestys kirjattu [#45:een](https://github.com/ristotoivanen/Musiikin-kartta/issues/45#issuecomment-6885122627).
- [ ] Oppimiskartan beta-katselmointi ja fyysinen puhelin. #9:n avoimet iPhone-kokeet kattavat keskeytyksen, loopin, moodi- ja melodiaäänet sekä mobiilivierityksen.
- [ ] G1-päätös yhdestä pilotista, tarkka soitto-ohje, testaajat ja A/E-vertailukynnys. G2–G4 pysyvät avoimina.

### Jatkojärjestys

1. Katselmoi #55 + #57 ja kolme rajattua sisar-PR:ää. Tarkista fyysisellä puhelimella navigaatio, pelien ääni ja keskeytys. #57:n ja #60:n vierekkäiset CSS-versiorivit `riffikaiku.html`:ssä sovitettiin paikalliseen yhteistestiin, jossa molemmat tyylit ja paluuskripti säilyivät.
2. #43 / PR #46 on jo rajattu äänihanke. Tee fyysinen kuuntelu ja varmista, että ääni katkeaa poistuttaessa. Mobiilipino sovitetaan tuoreeseen pohjaan järjestyksessä #37 → #38 (#31, soitettavuus) → #39 (#30, kuuntelu). #37:ssa on ristiriitoja ja #46/#39 koskevat samaa `NoteJourney`-näkymää.
3. G1:n jälkeen A/E samalla aineistolla, G3:ssa mallipäätös ja G4:ssä yhden jakson hyväksyntä. Seuraavat rajatut ehdotukset ovat #50:n yhden otelauta-alueen tehtävä nykyisestä `NoteJourney`:stä ja #52:n yhden position kokonaisuus nykyisistä `ScaleJourney`- ja `MelodyPractice`-tehtävistä. #48 aloitetaan vasta katselmoidusta avosointutehtävästä nykyisellä `ChordJourney`:llä. #5 tarvitsee soittamalla tarkistetut sormitukset. #49:n yhteiset käytännöt arvioidaan pilotin näytön perusteella.
4. #6, #7 ja #10 sisältävät jo betassa ja mainissa olevia toteutuksia (`930d244`, `d1c7bd8`, `1549733`). Katselmoi hyväksymiskohdat ennen tehtävien tilamuutoksia. PR:t #34 ja #40 ovat katselmointiraportteja.

## Integraatiodraft 15.11.2026

- [x] #55:n päälle koottu erillinen [draft #61](https://github.com/ristotoivanen/Musiikin-kartta/pull/61), johon sisältyvät #57–#60. Katselmointi voidaan tehdä yhdestä [esikatselusta](https://d74ad7f7.musiikin-kartta.pages.dev).
- [x] 456 yksikkötestiä ja 392 selaintestiä läpäisty. Selaintesteissä 34 asetusten mukaista ohitusta, 0 epäonnistunutta. Tarkistettu 42 aihelinkkiä, 28 teorialukua, vanhat reitit ja esikatselu leveyksillä 320/360/390/768/1280 px. [Ajot ja rajaukset](https://github.com/ristotoivanen/Musiikin-kartta/issues/56#issuecomment-6891799965).
- [ ] Katselmoi #61 ja tee fyysisen iPhonen/Safarin, Androidin, ruudunlukijan ja oikean kitaran kokeet. #9:n ääni- ja keskeytyskokeet ovat auki. Beta- ja tuotantopäätökset erikseen.
- [ ] Tee erillinen G1-päätös neljän iskun pilottirajauksesta, testaajista ja A/E-vertailukynnyksestä.


## Rytmi-osion syvätutkimus ja toteutustyöt, kirjattu 15.11.2026

- [x] **Rytmi-osion tutkimus ja toteutusohjelma** tallennettu GitHubiin erilliseen [draft-PR:ään #70](https://github.com/ristotoivanen/Musiikin-kartta/pull/70): kaksi Markdown-dokumenttia (pedagoginen nykytila ja 10 oppimisjaksoa; äänitekniikka, pelit, P0–P8 ja hyväksymiskriteerit). Dokumenttisisältö on tarkistettu alkuperäisiä vasten. **Ei koodimuutoksia eikä hyväksyttyä toteutussuunnitelmaa.**
- [ ] **Rytmin MVP:n ja #54:n G1–G4-porttien yhteensovitus:** katselmoi, miten [aihekohtaisen tehtävän #69](https://github.com/ristotoivanen/Musiikin-kartta/issues/69) P0–P8 ja neljän iskun alkuperäinen pilotti liittyvät toisiinsa. Vahvista ensimmäinen rajattu toteutus vasta omistajan päätöksellä.
- [ ] **Rytmin P0–P8-töiden seuranta:** yksityiskohtaiset tehtävät ja hyväksyntäehdot ovat [#69:ssä](https://github.com/ristotoivanen/Musiikin-kartta/issues/69), joka on ainoa varsinainen rytmin työlista. Tähän päälistaan ei kopioida samaa 13 kohdan toteutuslistaa.

**Rajaus:** draft-PR #70 ei käynnistä Codexia/Claudea toteuttamaan rytmiä, ei yhdistä mitään `beta`-/`main`-haaraan eikä muuta keskeneräisiä Ensikeikka-, Riffikaiku- tai Kitaran perusteet -haaroja.


## Suno-äänimateriaalien selvitys: yhteys koko Musiikin karttaan (15.11.2026)

- [ ] **Suno Speech / Sounds / Songs -äänimateriaalikokeilu:** toteuta vain rajattu **9 näytteen materiaalivertailu** osana [Rytmi-osion tehtävää #69](https://github.com/ristotoivanen/Musiikin-kartta/issues/69) ja arvioi käyttö myös muissa oppimisaiheissa: Kitaran perusteet, Sävelkorva, Otelauta, Soinnut, Asteikot sekä Kappaleet. Erityisesti puhutun rytmilaskennan käyttö, äänen ajoituksen mittaus, ääninäytteiden laatu, harjoitustaustojen stemit, lisenssit/kaupalliset oikeudet ja oppimishyöty.
- [ ] **Päätös ennen integrointia:** vertaa Sunolla tuotettuja ja nykyisiä/ohjelmallisia näytteitä; hyväksy vain todetusti käyttökelpoiset ja oikeuksiltaan selvät materiaalit. Selaimen rytmiajoitus ja harjoitusten arviointi pysyvät ohjelmallisina, eivät generatiivisen äänen varassa. Kirjaa tulokset #69:ään ja vasta sen jälkeen mahdollinen oma toteutus-PR.

**Tila:** tämä on tuleva selvitys, ei vielä tuotettu äänikokoelma, hyväksytty sivustointegraatio eikä lupa muuttaa nykyisiä pelejä. Päätehtävälista #54 kokoaa vain riippuvuuden; yksityiskohtainen kokeilusuunnitelma ja näytteet kuuluvat #69:ään.


## Rytmin avoimen lähdekoodin selvitys ja äänimaailman rajaus (16.11.2026)

- [x] **Rytmin OSS-auditointi tehty:** #82 / [draft-PR #85](https://github.com/ristotoivanen/Musiikin-kartta/pull/85). Johtopäätös: Calicon isku-/taukoruudukon idea ja Metrognomen tahtirajalla hiljenevä malli ilman uutta tuotantoriippuvuutta. **Jatkotehtävät OSS-R1–R5 löytyvät vain #69:stä.** Dokumentoinnin ja pilotin toteutuksen hyväksynnät ovat eri päätöksiä.
- [ ] **Yhteinen metronomi ja viritin**, itsenäiset sivut ja harjoituksiin upotettu käyttö: #84. Integraatio rytmiin sovitettu yhteen #69:n OSS-R3:n kanssa. Ei päällekkäisiä klikkejä eikä äänisessioita.
- [ ] **Äänenlaadun kehittäminen:** #87. Opetuksen täsmälliset yksittäiset sävelet, soinnut, kompit ja asteikot toteutetaan ensisijaisesti aidon soittimen lisenssikelpoisilla näytteillä ja nykyisen kellon ohjaamina. Suno on ehdokas alkuperäisiin kokonaisiin keikka-/bändibiiseihin ja harjoitustaustoihin, ei opetusäänten täsmälliseksi rytmi- tai sävelmoottoriksi. Näytteet, lisenssit, todelliset äänitulokset ja kuuntelutestit hyväksytään erikseen. Ei tuotanto- tai toteutuslupaa.

