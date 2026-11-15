# Ensikeikka – kuuntelupelistä musiikilliseksi oppimispoluksi

**Tila:** SUUNNITELMA / katselmointiluonnos, ei hyväksytty toteutustehtävä eikä tuotantojulkaisulupa  
**Päiväys:** 15.11.2026  
**Omistajan päätetty suunta 15.11.2026 (sisältörakenne):** kaikki nykyiset kappaleet 1–9 ovat **Ensitreenejä**. Niiden jälkeen tulee uusi **Kotikulman keikka**, jossa sovelletaan harjoituksissa opittua kokonaisemman kappaleen yhteydessä. Sen jälkeen voivat tulla Bändiharjoitukset 2 ja myöhemmät keikat. Sisältöjen toteutus, nimet, julkaisujärjestys ja Suno-aineisto edellyttävät vielä erilliset päätökset.

## 0. Sijainti projektin päätöksenteossa

Tämä dokumentti on **Ensikeikan pelikohtainen jatkosuunnitelma**. Se ei korvaa eikä ohita [oppimisuudistuksen ensisijaista tehtävälistaa #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54), sen G1–G4-päätösportteja tai [yhtenäisen oppimisrakenteen draftia #53](https://github.com/ristotoivanen/Musiikin-kartta/pull/53). Teoria, virtuaalinen kuuntelu, oikea soitto ja pelillinen tekeminen ovat yhden oppimiskokonaisuuden muotoja; Ensikeikasta ei rakenneta kilpailevaa pakollista opetussuunnitelmaa.

**Lähdetilanne (ei väite tuotannosta):**
- Nykyinen tuotanto-/main-versio sisältää ensimmäisen keikan, kappaleet 1–5.
- Clauden keikka 2 on haarassa [feature/ensikeikka-toinen-ilta](https://github.com/ristotoivanen/Musiikin-kartta/tree/feature/ensikeikka-toinen-ilta), tarkistettu commit `6dfa967403f95d2eccd4af79ab1fb3fd127c50bb`. Kappaleet 6–9 ja katselmus: `ensikeikka/README.md`, `second-night.ts`, `catalog.ts`, `tasks.ts`, `reviews/ensikeikka-kokonaiskatselmus.md`.
- [PR #61](https://github.com/ristotoivanen/Musiikin-kartta/pull/61) on erillinen Codexin Oppimiskartan, Riffikaiun ja Ensikeikan näkymämuutosten integraatioluonnos. Sen hyväksyminen ei tarkoita Clauden keikka 2:n hyväksymistä. Tarkista haarojen viimeisin todellinen tila ennen koodausta.
- Clauden katselmus perustuu lähdekoodiin, automatisoituihin äänimittauksiin ja mykistettyyn selainajoihin. **Kuulonvarainen koe puhelimella ja kuulokkeilla on tekemättä.** Älä väitä materiaalin musiikillista tai pedagogista toimivuutta todennetuksi.
- Tässä dokumentissa ehdotettu treeni–keikka-vuorottelu ja uudet keikkakohtaukset eivät ole toteutettuja eivätkä hyväksytty aikataulu.

## 1. Päätavoite ja ei-tavoitteet

**Lupaus pelaajalle:** kuulen musiikista aiempaa enemmän, osaan kertoa mistä ero syntyy ja voin lopulta itse vaikuttaa siihen, miltä bändi kuulostaa.

Toimintajärjestys: **kuuntele → vertaile → erota → ennakoi → sovella → luo**. Jokainen uusi tehtävä lisää yhden musiikillisen vaatimuksen, ei vain tempoa, nappien määrää tai teknistä vaikeutta. Uusi käsite esitellään lyhyesti esimerkin yhteydessä.

Säilytettävää:
1. Keikka 2:n hyvät oivallukset: sama melodia / eri basso, piste vs. kysymys, useita toimivia ratkaisuja, melodian ja basson vastaliike.
2. Kappalekohtainen selittävä palaute, kaksi vapaaehtoista vihjetasoa, mahdollisuus erilliskuunteluun.
3. Sama näkymä kuuntelulle, vertailulle ja valinnalle; suorat osoitteet, paluu, vapaa harjoittelu, aiemmin ansaitut suoritukset.
4. Vapaa pääsy harjoituksiin silloin kun teknisesti mahdollista; suositeltu eteneminen ei ole kaikille pakollinen.

**Ei tavoitteena:** loputon kolmen vaihtoehdon tietovisa, irralliset teoriakokeet, pistesaaliin maksimointi, pakollinen mikrofoni, generatiivisen musiikin automaattinen reaaliaikainen tuottaminen, laaja yleinen pelimoottori tai uusi erillinen oppimisportaali.

## 2. Nykyinen pedagoginen lähtötila

| Keikka / kappale | Jo toteutettu tavoite kehityshaarassa | Huomio |
| --- | --- | --- |
| Ensitreenit, nykyisen pelin keikka 1 (1–5) | Kotisävel, läheiset lopetukset, diatoninen / sointuun sopiva mutta ei koti | Sama tehtävätyyppi viidesti; palautteet ja vihjeet parannettu |
| 6 | F-duuri: kolme loppusoinnun säveltä, vain yksi koti | Onko oikea loppu korvalla riittävästi erotettavissa? |
| 7 | A-duuri: melodia sama, basson ja soinnun muutos | Erillinen basso, puhelinkaiuttimen kuuluvuus tarkistettava |
| 8 | d-molli: tunnista piste ja kysymys; kumpikin on mahdollinen | Älä kutsu kaikkia erilaisia ratkaisuja vääriksi |
| 9 | E-duuri: ensin melodian lopetus, sitten basson nousu vs. melodian lasku | Kaksivaiheinen encore, erillinen basson kuuntelu |

Nykyisen kehityshaaran toisen keikan (6–9, suunnitellut Ensitreenit) tehtävätyypit ovat `choose`, `match`, `reason`; yhdessä kappaleessa voi olla peräkkäisiä tehtäviä. Lopetusten järjestys sekoittuu vapaassa harjoittelussa. Tärkeä rajoite: sama musiikki toistuu; pelkkä kirjainten sekoittaminen ei testaa siirtovaikutusta uuteen kappaleeseen.

## 3. Päätetty tarinallinen järjestys: ensin kaikki yhdeksän treenitehtävää

**Omistajan tarkennus 15.11.2026:** nykyiset kappaleet **1–9 kuuluvat kaikki ensimmäisiin bänditreeneihin**. **Kotikulman keikka tulee vasta niiden jälkeen.** Älä lisää ensimmäistä keikkaa kappaleiden 5 ja 6 väliin. Tämä korvaa aiemman treeni–keikka–treeni-välijärjestyksen.

| Näkyvä vaihe | Sisältö | Kokemus ja opittava asia | Tila |
| --- | --- | --- | --- |
| **Ensitreenit – osa A** | Nykyiset kappaleet 1–5 | Kotisävel, melodian sopiva lopetus, vakaus ja jännite | Olemassa olevassa pelissä |
| **Ensitreenit – osa B** | Clauden nykyiset kappaleet 6–9 | Basso erikseen, soinnut, piste ja kysymys, musiikillisen ratkaisun perustelu | Toteutettu kehityshaarassa, kuulonvarainen hyväksyntä avoin |
| **Kotikulman keikka** | Uusi kohtaus tai pieni joukko kokonaisempia kappaleita | Opittu sovelletaan uuteen musiikkiin, tehdään päätös ja kuullaan sen vaikutus | Suunniteltu, ei koodattu |
| **Bändiharjoitukset 2** | Uusia taitoja: esimerkiksi muutos, rytmi, fraasi ja soittimien vuorovaikutus | Lisää harjoitusmuotoja, tarvittaessa erilliskuuntelu ja oikea kitara | Jatkoehdotus |
| **Seuraava keikka** | Uudet kokonaisemmat musiikkitilanteet | Sovella uusien treenien oppeja, tee ratkaisuja yhtenäisen kappaleen aikana | Jatkoehdotus |

**Ensitreenit ovat yksi pelaajan ymmärtämä kokonaisuus, vaikka sisältö rakennettiin kahdessa teknisessä keikassa.** Säilytä toimiva sisältö ja etenemislogiikka mahdollisimman vähin muutoksin: näkyvän nimen tai etenemiskortin päivittäminen ei oikeuta rikkomaan 1–9-suorituksia. Tarvittaessa näytä Ensitreenien sisällä kaksi osaa ilman että ne näyttävät kahdelta eri esiintymiseltä.

### Nimeäminen ja tuleva Keikkakalenteri (uusi idea 15.11.2026)

**Ehdotettu nimihierarkia:**
- **Ensitreenit** = nykyiset kappaleet 1–9, yksi harjoituskokonaisuus (voi sisältää osa A:n ja B:n).
- **Ensikeikka** = ensimmäisen esiintymisen varsinainen nimi. **Kotikulman keikka** voi toimia alaotsikkona tai esiintymispaikan/keikkajakson nimenä: esimerkiksi **Ensikeikka – Kotikulman keikka**.
- **Keikkakalenteri** = myöhempi kokoelma/näkymä, jonka alta löytyvät *esiintymiset* (Ensikeikka, toinen keikka, myöhemmät keikat). Treenit pysyvät erillisinä eivätkä muutu kalenteritapahtumiksi.
- **Bändin matka** = mahdollinen yhteinen yleistaso treeneille ja keikoille **vain jos** sille myöhemmin havaitaan navigaatiotarve; älä lisää uutta hierarkiatasoa huvin vuoksi.

**Ajan ja valmiuden käsitteet:** Keikkakalenterin ei tarvitse olla oikeita päivämääriä tai ajanvarauksia esittävä kalenteri. Ensi vaiheessa sen kannattaa olla **keikkalistana tai keikkajulisteina esitetty selkeä valikko**. Esityksille voi näyttää esimerkiksi `Suositeltu seuraavaksi`, `Soitettu` ja `Kertaa`, mutta tilat eivät saa väittää oppimisen todellista hallintaa eivätkä edellyttää kovia etenemislukkoja. Jos keikkalistassa on vasta yksi esiintyminen, **erillistä Keikkakalenteri-sivua ei tarvitse vielä toteuttaa**: Ensitreenit voivat ohjata suoraan Ensikeikkaan. Kalenteri kannattaa tuoda näkyviin vasta, kun keikkoja on vähintään kaksi ja koonti helpottaa valintaa.

**Esimerkkejä tulevien esiintymisten nimistä vain tarinaideoina:** Toinen keikka – Klubi-ilta; Kolmas keikka – Festarilava. Nämä eivät ole vahvistettuja sisältöjä eikä niiden toteutukselle aseteta aikataulua.

**Tekninen nimierottelu:** nykyinen sovelluksen hakemistopolku ja mahdollinen URL `/pelit/ensikeikka/`, vanhat reitit ja tallennusavain voivat edelleen käyttää historiallista merkkijonoa `ensikeikka`. **Älä nimeä niitä massana uudelleen** vain siksi, että pelaajalle Ensikeikka on ensimmäisen keikan nimi. Käyttöliittymän otsikot, tarinallinen keikkatunnus ja tekninen peli-/route-tunnus ovat eri asioita.

**Päätösportti:** ensin Ensitreenien 1–9 testaus ja näkyvän nimen muutos omassa hyväksytyssä PR:ssä, sitten yksi Ensikeikan musiikkipilotti. Keikkakalenterin käyttöliittymä on oma myöhempi, todelliseen usean keikan tarpeeseen sidottu päätös.

### Treenin ja keikan eri tarkoitukset

- **Ensitreenit:** 1–9 tarjoaa lyhyitä rajattuja kuuntelutehtäviä, soittimien eristystä, vihjeitä ja palautetta. Toisto on osa oppimista.
- **Kotikulman keikka:** kuunnellaan kokonaisempaa musiikkia, tehdään yksi tai kaksi luontevaa valintaa merkityksellisissä kohdissa ja **kuullaan, miten valinta vaikuttaa kappaleeseen**. Ei yhdeksän monivalinnan uusintakoetta. Soiton aikana mahdollisimman vähän keskeytyksiä; palaute sopivassa tauossa tai lopussa.
- **Seuraavat bändiharjoitukset:** tuovat aidosti uusia taitoja. Niiden jälkeen taas keikka, jossa taidot otetaan käyttöön.
- **Vapaa pääsy:** nykyinen vapaa harjoittelu, suora aloitus ja kertaus eivät katoa. Uusi keikka voi olla suositeltu jatko Ensitreeneistä ilman että pelin koko muu sisältö sidotaan uusiin lukkoihin.

### Ensitreenien dramaturgia: uskottavat bändin kysymykset

**Omistajan pedagoginen tarkennus 15.11.2026:** nykyiset 1–9:n tilanteet ovat **oikeaan bändiharjoitukseen sopivia**: bändi miettii, miten kappale lopetetaan, miten basso etenee, miten melodia suhteutuu bassoon ja miltä lopetus kuulostaa. Älä muuta niitä irralliseksi teoriatentiksi vain siksi, että sisältö saa Ensitreenit-nimen.

**Toistuva lyhyt tehtävärakenne:** bändi kohtaa aidon musiikillisen kysymyksen → pelaaja kuuntelee tilanteen → kokeilee tai vertailee vaihtoehtoja → kuulee lopputuloksen → saa tarvittaessa lyhyen musiikillisen selityksen → bändi jatkaa.

**Nykyisten tehtävien muotoiluperiaatteet (esimerkkirepliikit, eivät nykyisen UI:n kirjaimellisia tekstejä):**
- Kappaleet 1–5: *"Miten lopetetaan tämä kappale niin, että se tuntuu tulevan kotiin?"* Pelaaja kuuntelee melodian ja eri loppusävelet. Opittava asia: kotisävel ja lopetuksen tuntuma.
- Kappale 6: *"Nämä kaikki sävelet sopivat sointuun, mutta mikä kuulostaa tämän kappaleen viimeiseltä säveleltä?"* Opittava asia: sointuun kuuluminen ei yksin tarkoita kotisäveltä.
- Kappale 7: *"Melodia pysyy samana. Kuuntele bassoa: miten koko lopetus muuttuu?"* Opittava asia: basson ja harmonian vaikutus, erilliskuuntelu.
- Kappale 8: *"Tehdäänkö tähän piste vai jätetäänkö kysymys ilmaan?"* Opittava asia: erilaiset tarkoituksenmukaiset musiikilliset lopetukset; kaikkia ei saa käsitellä yksiselitteisesti väärinä.
- Kappale 9: *"Kuuntele, mihin basso nousee ja melodia laskee. Miten lopetetaan ja miksi se toimii?"* Opittava asia: usean soittimen suhteen kuuleminen ja perustelu.

**Kieliasu ja pelillisyys:**
- Bändin dialogi lyhyeksi, arkiseksi ja soittajien puheeseen sopivaksi: mitä ollaan tekemässä ja miksi. Erikoistermi tulee selityksessä tai vapaaehtoisessa teoriavihjeessä, ei aina repliikissä.
- Sama kysymys voi saada useita oikeutettuja musiikillisia ratkaisuja. Jos bändi haluaa tiettyä lopputulosta, arvioidaan *tavoitteeseen sopivuutta*, ei mieltymystä objektiivisesti oikeana.
- Tehtävän oikeaa vastausta **ei paljasteta repliikissä**. Basson erilliskuuntelu on kuunteluväline, ei automaattisesti näyttävä ratkaisu.
- Älä lisää monimutkaisia tarina-animaatioita, pitkää kirjoitettua dialogia tai pakollista kuuntelulukkoa nykyisiin toimiviin tehtäviin.
- Varmista, että jo sävelletyn 1–9:n musiikilliset esimerkit tukevat kysymystä; älä pakota tarinaa sopimaan huonosti ääneen. Jos repliikki väittää basson kulkevan tavalla, jota äänitteestä ei kuule, korjataan tekstiä tai musiikillista aineistoa katselmoinnin perusteella.
- Treenien ja keikan ero säilyy: treeneissä pysähdytään, kokeillaan ja analysoidaan; Ensikeikalla musiikkia soitetaan pidempänä kokonaisuutena, ja valintojen vaikutus kuuluu esityksessä.

**Tila:** sisältösuunnittelun linjaus, ei nykyisten kappaleiden hyväksytty tekstimuutos eikä pyyntö puuttua Clauden keskeneräiseen haaraan.

### Bänditreenit muissakin oppimisaiheissa (laajennusehdotus)

**Periaate:** sama bändi ja sen uskottava harjoitustilanne voivat antaa musiikillisen syyn opetella myös muita Musiikin kartan taitoja. **Bänditreenit ei ole uusi, kaiken sisällön korvaava oppimisportaali, pelimoottori tai toinen opetussuunnitelma.** Se on tarvittaessa käytettävä **tarinallinen ja musiikillinen konteksti** olemassa oleville harjoituksille ja niiden syvälinkeille. Yhtenäisen oppimisrakenteen pääsuunnitelma ja päätösportit ovat [issue #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54) ja [PR #53](https://github.com/ristotoivanen/Musiikin-kartta/pull/53).

| Opittava taito | Uskottava tilanne bänditreeneissä | Toteutusperiaate |
| --- | --- | --- |
| **Sävelkorva ja melodia** | Laulaja/kitaristi kysyy, tuleeko fraasi kotiin vai jääkö se avoimeksi | Ensitreenien 1–9 nykyinen toimiva kuuntelupeli; eri kappale-esimerkit |
| **Rytmi ja komppi** | Rumpali näyttää sykkeen ja ehdottaa muutosta komppiin | Kuule–taputa/soita–vertaa; erota onnistunut kuuntelu ja oikea soitto |
| **Soinnut ja harmonia** | Basisti aloittaa kierron, kitaristi kokeilee siihen sopivaa sointua | Olemassa olevien sointuharjoitusten käyttö ja tarkoitukseen sopivuuden kuuleminen |
| **Otelauta ja sävelten löytäminen** | Bändin jäsen pyytää tiettyä säveltä tai saman sävelen toisesta kohdasta | Avaa sopiva nykyinen otelauta-/sävelharjoitus, ei kopioida otelaudan koodia |
| **Riffikaiku ja melodinen vastaus** | Kitaristi soittaa lyhyen fraasin: "Vastaatko tähän?" | Linkitä tai integroi rajatusti nykyiseen Riffikaikuun; säilytä sen soitto-/kuuntelutavat |
| **Pentatoninen ja improvisointi** | Bändi jää pyörittämään helppoa blueskiertoa, kitaristi kokeilee vastausfraasia | Lyhyt kuultava esimerkki, otelauta-/kitaratehtävä ja taustalla soitto, alussa ilman pakollista mikkiä |
| **Kappaleen rakenne** | Bändi miettii, missä kohtaa nostetaan dynamiikkaa tai jätetään tauko | A/B-vertailu sekä sen kuuleminen koko kappaleessa |

**Säännöt:**
1. Valitse bänditreenikehys vain, jos se auttaa ymmärtämään kyseistä musiikillista taitoa. Kaikkia teoriaosia, teknisiä sormiharjoituksia tai yksinäistä harjoittelua ei tarvitse väkisin lavastaa bändin keskusteluksi.
2. **Yksi oppimistavoite, useita harjoitustapoja**: lyhyt teoria, kuuntelu, virtuaalinen tehtävä, oikea kitara ja soveltaminen tarpeen mukaan. Sama taito näkyy Musiikin kartan nykyisissä aiheissa; bänditarina linkittää ne, ei tee niistä kopioita.
3. Tarinalause vastaa todellista musiikkia: soittajan kommentti ei saa väittää basson nousevan, ellei käytetystä äänestä kuulu nousua. Oikeat/avoimet musiikilliset ratkaisut erotellaan annettuun tavoitteeseen perustuen.
4. Hyödynnä nykyisiä pelejä ja URL:itä: Riffikaiku, Otelautaopas ja Kitaraharjoittelija säilyvät itsenäisesti käytettävinä, myös ilman tätä tarinaa.
5. Oikeaa kitaransoittoa ei väitetä varmennetuksi ruutuvastauksen perusteella, eikä mikrofoni ole oletuksena pakollinen. Jos mikrofoni tulee mukaan, onnistumisen arviointi ja yksityisyys suunnitellaan erikseen.
6. Sama bändi voi toistua eri tehtävissä, mutta **älä rakenna raskasta pysyvää hahmo-, keskustelu- tai quest-moottoria** ennen näyttöä siitä, että kevyt yhteinen kehys oikeasti lisää ymmärtämistä.

**Ensimmäinen poikkiaiheinen kokeilu vasta Ensikeikka-pilotin jälkeen:** tee vain yksi lyhyt "kitaristi soittaa – vastaa takaisin" -bänditreeninäkymä, joka käyttää Riffikaiun nykyistä tehtävää tai syvälinkkiä. Mittaa ymmärtääkö käyttäjä yhteyden, löytääkö hän tehtävän ja palaako hän samaan oppimiskontekstiin. Vasta sen jälkeen arvioidaan rytmi-, sointu- ja pentatonisten harjoitusten laajennusta. Tämä **ei** oikeuta koodaamaan uutta yhteistä pelimoottoria eikä ohittamaan #54:n päätösportteja.

### Tavoite: soittaminen ilman jatkuvaa tabin tai sointukaavion seuraamista

**Omistajan tarkennus 15.11.2026:** Musiikin kartan tulee auttaa oppijaa **soittamaan oikeaa kitaraa, ymmärtämään musiikkia, muistamaan opittu, soveltamaan sitä uusiin kappaleisiin ja improvisoimaan**. Pelitehtävän onnistuminen on välietappi, ei lopullinen näyttö soittotaidosta. Tätä sovelletaan mahdollisuuksien mukaan yhtenäisen oppimisrakenteen sisällä ([päätehtävälista #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54), [yhtenäisen oppimisen luonnos PR #53](https://github.com/ristotoivanen/Musiikin-kartta/pull/53)).

**Periaatteellinen oppimiskaari (ei pakollinen kuuden portin lukitus):**

| Vaihe | Oppijan toiminta | Mitä voi päätellä? |
| --- | --- | --- |
| 1. Kuule ja ymmärrä | Lyhyt kuunteluesimerkki + juuri tarvittava teoria | Tunnistaa tarkoituksen ja esimerkin, ei vielä soittotaitoa |
| 2. Oivalla pelissä | Kokeilee, vertaa, tunnistaa ja saa palautteen | Osoittaa rajatun kuuntelu-/hahmotustaidon |
| 3. Soita oikealla kitaralla | Harjoittelee näppäilyn, sormituksen, rytmin ja puhtaan äänen vihjeillä | Fyysinen taito vaatii oikean soiton, pelkkä klikkaus ei riitä |
| 4. Soita muistista | Soittaa fraasin, sointukierron tai kompin vähentäen tabeja/kaavioita | Opitun saa palautettua ilman jatkuvaa visuaalista mallia |
| 5. Sovella uuteen | Sama taito toisen sävellajin, tempon, grooven tai sointukierron kanssa | Näyttöä siirtovaikutuksesta, ei vain ulkoa opitusta yhdestä katkelmasta |
| 6. Improvisoi ja osallistu | Vastaa fraasiin, muuttaa rytmiä, valitsee sopivia säveliä ja reagoi taustabändiin | Luova musiikillinen soveltaminen, ei automaattisesti objektiivinen oikein/väärin |

**Asteittain katoava tuki (fading):** alussa näkyvät sävelet, sormitus, tabulatuuri tai sointukaavio; seuraavaksi vain osittainen vihje; lopuksi soitetaan ilman näyttöä. Käyttäjä saa avata vihjeet uudelleen, eikä poistaminen ole rangaistus tai pakko. Harjoittelun voi aloittaa suoraan sopivalta tasolta. Uuden kappaleen tabien tai sointumerkkien käyttö **ei ole epäonnistuminen**: riippumattomuuden tavoite koskee jo opitun musiikin ja musiikillisten suhteiden hallintaa, ei kaiken uuden materiaalin lukemista kieltäen.

**Taidon osoittamisen rehellisyys:**
- `kuunneltu` / `pelissä ratkaistu` ei ole sama kuin `kitaralla soitettu`.
- Oikean kitaran tehtävä ilman mikrofonia voi sisältää soittajan oman kuittauksen tai ohjeen itsensä kuunteluun; sitä ei esitetä järjestelmän varmentamana soittosuorituksena.
- Mikrofonilla arvioitu yksittäinen sävel, jos toteutetaan, ei yksin todenna oikeaa sormitusta, rytmiä, puhtautta, improvisaatiota tai kappaleen hallintaa. Epävarmuus ja yksityisyys käsiteltävä erikseen.
- Soittosuoritusta arvioidaan tilanteeseen sopivasti: tasainen pulssi, tunnistettava fraasi, siisti soinnunvaihto, musiikillinen sopivuus ja kyky palauttaa asia muistista. Ei keksittyä universaalia "soitit oikein" -prosenttia.
- Taito varmistuu uskottavammin, kun pelaaja palaa siihen myöhemmin ja onnistuu **toisessa musiikillisessa esimerkissä**.

**Esimerkki A-mollipentatonisesta (sisällön tavoite, ei uusi erillinen polku):** kuule pieni A-molliblues-fraasi → opettele miksi A–C–D–E–G sopivat kyseiseen ympäristöön → löydä sävelet virtuaaliotelaudalta → soita helpot sävelet ja fraasi oikealla kitaralla tabin kanssa → soita sama muistista → vastaa kitaristin fraasiin A-mollitaustan päällä → tee oma kahden tahdin vastaus → kokeile uutta taustaa tai rytmiä ja kuuntele, miten oma ratkaisu sopii.

**Kehitystapa:** tätä periaatetta ei toteuteta lisäämällä samaan PR:ään kaikkia soitto-, muistamis- ja improvisointitehtäviä. Jokaiseen valittuun oppimisaiheeseen tehdään pieni yhteys nykyisen teorian, pelin, fyysisen soittotehtävän, muistivaiheen ja sovelluksen välille. Ensimmäinen rajattu esimerkki suunnitellaan vasta asianomaisen oppimisjakson hyväksynnän jälkeen; nykyiset Riffikaiku, Otelautaopas ja Kitaraharjoittelija säilyttävät itsenäiset käyttötapansa.

### Kotikulman keikan pilottikohtaus: ensimmäinen oikea esiintyminen

**Musiikillinen tarkoitus:** osoita, että Ensitreeneissä kuultu melodian kotiin palaaminen sekä basson ja soinnun toiminta on tunnistettavissa myös uudessa musiikillisessa tilanteessa.

1. Bändi soittaa **30–60 sekunnin** uuden alkuperäisen blues-rock-kappaleen tai sitä lyhyemmän yhtenäisen jakson. Äänimateriaalin pituus ja laatu ovat pilotin kokeiluarvoja, eivät vaatimuksia massatuotannolle.
2. Pelaaja kuuntelee ensin musiikkia. Ennen loppua bändillä on valinta: "Lopetetaanko selvästi vai jätetäänkö jatkolle tilaa?" Tehtävässä määritellään, kumpaa bändi tässä tilanteessa tavoittelee.
3. Pelaaja kuuntelee kaksi tai kolme vertailukelpoista, etukäteen sävellettyä vaihtoehtoa. **Molemmat voivat olla musiikillisesti kelvollisia**, jos niillä on eri tehtävä; arvioidaan annettuun tarkoitukseen sopivaa valintaa.
4. Pelaaja kuulee **valitun ratkaisun vaikutuksen kokonaisen jakson yhteydessä**. Sen jälkeen tulee lyhyt perustelu ja valinnainen toinen yritys tai toisen vaihtoehdon kuuntelu.
5. Keikan lopussa voidaan kokeilla valinnaista Suno-viimeisteltyä katkelmaa tai encorea, mikäli se sopii tähän musiikkiin ja käyttöoikeudet varmistuvat. Keikan suorittaminen ei saa edellyttää Sunoa.
6. Testissä sama tavoite esiintyy **toisessa, aidosti erilaisessa musiikkiesimerkissä**. Jos pelaaja selvittää vain ulkoa opitun äänitteen, siirtovaikutus ei ole osoitettu.

**Pelin tunnelma syntyy musiikista ja soittajien valinnoista, ei pitkistä välianimaatioista.** Lyhyitä bändin kommentteja voidaan käyttää harkiten, mutta ne eivät saa muuttua toistuvaksi dialogiksi, joka estää kuuntelun.

### Bändiharjoitukset 2 ja myöhempi eteneminen

Aiemmin suunnitellut uudet mekanismit **Mikä muuttui?** (`compare-change`), **Basson jäljillä** (`bass-contour`), **Rytmi katoaa** (`spot-event`) ja **Kitaristi vastaa** (`phrase-response`) sijoitetaan **mahdollisiin Bändiharjoituksiin 2 tai myöhempiin treeneihin**. Ne eivät kuulu automaattisesti Kotikulman keikkaan eikä niiden teknisiä tunnisteita tai paikkoja lyödä lukkoon ennen pilottia.

### Vanhojen suoritusten ja linkkien turva

- Nykyisten kappaleiden **1–9 ID:t, tehtävät ja ratkaisut säilyvät**. Älä numeroi niitä uusiksi tai kirjoita Clauden keikka 2:n sisältöä uudelleen.
- Älä tee väliin tulevaa uutta pakollista porttia kappaleiden 5 ja 6 välille. **Kotikulman keikka näkyy vasta Ensitreenien kokonaisuuden jälkeen.**
- Nykyinen `localStorage['musiikin-kartta:ensikeikka']` ja `version: 1` säilyvät, kunnes erikseen hyväksytty yhteensopivuusratkaisu on testattu. Vanhat osoitteet `#kappale-N`, `#harjoitus-N` ja nykyiset keikkareitit eivät saa rikkoutua.
- Näkyvän vaihelistan ja teknisten tunnisteiden ei tarvitse vastata toisiaan. Vanha tallennettu "keikka 2" on suunnitelmassa Ensitreenien loppuosa, ei toisen esiintymisen suoritusmerkintä.
- Jo suoritettuja 1–9-tehtäviä ei vaadita uudelleen, kun tarinan ulkoasu muuttuu.

## 4. Tehtävämekaniikat ja oikean vastauksen määritelmä

| Mekaniikka | Mitä todella mitataan? | Palaute |
| --- | --- | --- |
| `compare-change` (uusi) | Muuttuiko kahden otoksen välillä basso, rummut, komppi vai melodia? | Nimeä kuultava ero, tarjoa sama kohta eroteltuna |
| `bass-contour` (uusi) | Nousu / lasku / tasaisuus riippumatta sävellajista | Näytä kuultu bassokulku vasta yrityksen jälkeen |
| `spot-event` (myöhemmin) | Missä tahdissa rytmi/tauko muuttui? | Toista oikea aikaväli; salli kuulopohjainen navigointi |
| `phrase-response` (myöhemmin) | Mikä vastaus täyttää annetun *musiikillisen tarkoituksen*? | Erota analyysikysymys ja oma maku |
| `play-or-create` (myöhemmin) | Musiikillinen kokeilu ja soveltaminen | Ei perusteetonta oikein/väärin-leimaa mikin epätarkasta havainnosta |

Tehtävän tarkoitus ja mittaustapa on määriteltävä tietueessa. Älä väitä musiikillista luovuutta tai todellista soittotaitoa mitatuksi monivalinnan perusteella.

**Tarkka tehtäväsopimus (pilotti):** `id`, `skillGoal`, `kind`, `difficulty`, `audioExamples`, `correctnessRule` (tai `noSingleCorrectAnswer`), `explanation`, `hints[2]`, `wrongFeedback`, `requiredListening`, `accessibilityFallback`. Kytke pilottityypit nykyiseen `Task`-unioniin mahdollisimman pienellä lisäyksellä, älä korvaa olemassa olevia `choose`/`match`/`reason`-tehtäviä.

## 5. Vaikeusaste, kertaus ja vaihtelu

Vaikeusasteen kolme erillistä ulottuvuutta:
1. **Kuultavan eron hienovaraisuus:** selvä riitasointu → useita sointuun sopivia vaihtoehtoja → saman melodian alla muuttuva basso → usean osan suhde.
2. **Tehtävän ajattelukuorma:** tunnista → vertaile → perustele → ennakoi → tuota oma vaihtoehto.
3. **Uutuus:** tuttu ääni ja sävellaji → sama taito eri sävellajissa, tempossa, sointivärissä ja musiikillisessa tilanteessa.

Älä kasvata kaikkia kolmea samalla kertaa. Vastausvaihtoehtojen määrän lisääminen ei yksin tee tehtävästä opettavampaa.

**Vaihtelusäännöt:**
- Jokaiselle opetettavalle taidolle tavoitteeksi vähintään 2–3 **aidosti eri sävellystä/sovitusta**, ei pelkästään A/B/C-järjestyksen sekoitus.
- Opettavassa etenemisessä aloita suunnitellulla esimerkillä; harjoittelussa valitse variantti, jota ei juuri kuultu. Vältä kahta saman `skillGoal`+`audioVariant`-paria peräkkäin, ellei kyse ole nimenomaisesta kertauksesta.
- Jos soitinnäytteitä on liian vähän, näytä käyttäjälle että tämä on kertaus; **älä lupaa loputonta vaihtelua**.
- Kertauksessa siirrä sama taito eri kappaleeseen. Kertausta voi tarjota myöhemmin vapaaehtoisesti, ei pakollisena estona seuraavalle keikalle.
- Pidä oikea vastaus musiikillisen esimerkin ID:ssä, ei näkyvässä kirjaimessa. Testaa kaikki vaihtoehtojen permutaatiot ja selittävä palaute.

**Osaamisen kolme eri käsitettä:**
- `kuultu`: katkelma kuunneltu (ei todista osaamista);
- `ratkaistu`: oikea ratkaisu tehty, kirjaa tarvittiinko vihjettä / kuinka monta yritystä;
- `sovellettu`: sama taito ratkaistu uudessa musiikkiesimerkissä itsenäisesti.

`Sovellettu` on suunniteltu uusi arviointikäsite, ei nykyisen tallenteen ominaisuus. Älä muuta nykyisen `localStorage['musiikin-kartta:ensikeikka']` `version: 1` -tallenteen rakennetta pilotin ensimmäisessä vaiheessa. Jos myöhemmin lisätään uusia avaimia, tee migraatiot, vanhan version yhteensopivuus ja palautuminen erillisen hyväksynnän kautta. Ei seurantaa eikä palvelintelemetriaa ilman erillistä perustetta ja päätöstä.

## 6. Suno ja laadukas ääni: pieni, erillinen koe

**Ensisijainen käyttökohde:** etenkin **Kotikulman keikan** ja myöhempien esiintymisten musiikillinen kokonaisuus tai lopun **20–40 sekunnin vapaaehtoinen encore**, joka tuo opitun ilmiön oikean bändin tuntuiseksi. Bändiharjoitusten ei tarvitse päättyä Suno-kappaleeseen. Ei palkintona irrallinen kappale, vaan opitun asian musikaalinen todistus: esimerkiksi basson nousu ja melodian lasku samaan kotisäveleen.

Mahdolliset huipennukset:
- **A Encore:** kuuntele viimeistelty bändikatkelma ilman uutta koetta (ensimmäinen kokeilu).
- **B Valintasi vaikutus:** sama fraasi, kaksi etukäteen tuotettua ja **rytmisesti yhteensovitettua** musiikillista loppua, joista pelaaja valitsee (jatkokoe, ei ensimmäiseen pilottiin).
- **C Soita bändin mukana:** erillinen tausta ilman soolokitaraa; oikealla kitaralla soittaminen valinnaista (myöhemmin).

**Tekninen ja opetuksellinen raja:** nykyinen sovitus-/renderöintimoottori tuottaa tarkasti määritellyt sävelet ja lopetukset arvioitaviin tehtäviin. Generatiivista valmista äänitiedostoa ei pidä olettaa nuotti- tai stemmitarkaksi eikä siitä saa automaattisesti johtaa oikeita vastauksia. Mahdollisia Suno-stemmejä käytetään vasta, kun niiden vuoto, kohina, basson tunnistettavuus ja tahtikohdistus on tarkistettu ihmisvoimin.

**Ensimmäisen Suno-kokeen hyväksyntälista:**
- [ ] Tee yksi lyhyt *alkuperäinen* tumma blues-rock- tai hillityn rockin katkelma, ei olemassa olevan kappaleen jäljitelmä tai lainattu melodia.
- [ ] Määritä musiikillinen tapahtuma etukäteen (esim. nouseva bassokulku ja laskeutuva melodialinja) ja tarkista että se **todella kuuluu** lopputuloksessa.
- [ ] Tallenna lähde, generointipäivä, työkalun versio/tilaus, oikeusperuste ja tarvittava käyttöoikeusnäyttö projektin ääniluetteloon. Tarkista palvelun voimassa olevat ehdot ennen verkkojulkaisua.
- [ ] Tarkista äänen huiput, koettu voimakkuus, mobiilikaiutin, kuulokkeet, aloitus/lopetus ja latauskoko. Ei automaattista toistoa.
- [ ] Tarjoa `Ohita encore`, `Kuuntele uudelleen` ja paluu settilistaan. Keikka tulee valmiiksi **ilman** että musiikkipalkinto on pakko kuunnella.
- [ ] Jos Suno ei tuota oikeaa ilmiötä / tarvittavia oikeuksia ei voida osoittaa, käytä hyväksyttyä itse tehtyä ääntä tai jätä encore pois. Se ei estä oppimispilottia.

**Ei vielä:** Sunon suora selainintegraatio, automaattinen generointiputki, soitinraitojen käyttäminen luotettavana arviointiaineistona tai maksullisten generointien massatuotanto.

## 7. Työpaketit uuden järjestyksen mukaisesti

### P0 – Ensitreenien kappaleiden 1–9 sisällön hyväksyminen
- [ ] Kuuntele erityisesti Clauden 6–9 fyysisen puhelimen kaiuttimella ja kuulokkeilla; 6:n loppujen erot, 7:n basso, 8:n piste/kysymys, 9:n kaksivaiheinen tehtävä.
- [ ] Testaa äänen keskeytys, erilliskuuntelu, 320/360/390 px, saavutettavuus ja jo tallennettu eteneminen.
- [ ] Tarkista nykyisen Clauden työhaaran ja Codexin PR #61:n tila ennen toteutusta. Älä muuta niiden keskeneräisiä työpuita.
- [ ] Kirjaa omistajan hyväksyntä sisältöjen 1–9 käytölle **Ensitreeneinä**. Pelin nykyinen kaksi teknistä keikkaa voi toistaiseksi säilyä.

### P1 – Ensitreenien näkyvän rakenteen ja Kotikulman keikan käsikirjoitus
- [ ] Tee näkyvä malli: **Ensitreenit (1–9) → Ensikeikka (Kotikulman keikka) → Bändiharjoitukset 2**. Pidä sisäinen kahden osan jako tarvittaessa, mutta älä nimitä niitä esiintymisiksi.
- [ ] Kirjoita yksi uusi Kotikulman keikkakohtaus: yhtenäisempi kappale, yksi päätös, kuultava seuraus ja lyhyt palaute.
- [ ] Tee kahdesta erilaisesta alkuperäisestä musiikillisesta esimerkistä käsikirjoitus, vastausperuste ja erojen kuulonvaraisen tarkistuksen ohje.
- [ ] Esitä tallenteen ja reittien säilyttävä suunnitelma ilman ID-uudelleennumerointia.
- [ ] Omistajan päätös ensimmäisen **yhden keikkakohtauksen** prototyypistä. Ei koko tarinan toteutuspäätöstä.

### P2 – Yksi rajattu tekninen pilotti
- [ ] Toteuta yksi Kotikulman keikkakohtaus **hyväksytyssä omassa toteutushaarassa**. Erota äänivalintojen musiikillinen tarkistus ja valinnaiset Suno-assetit.
- [ ] Anna 1–9-suoritusten ja vanhojen linkkien toimia entiseen tapaan; seuraava keikka saa uudet vakaat tunnisteet.
- [ ] Testaa että pelaaja todella kuulee valitsemansa ratkaisun vaikutuksen, ettei musiikki katkeile väärässä kohdassa ja että paluu/puhelintoisto toimivat.
- [ ] Ei tuotantojulkaisua eikä mergeä ilman hyväksyntää.

### P3 – Käyttäjä- ja kuulonvarainen arvio
- [ ] Kokeile eri tasoisilla soittajilla, onko Ensitreenien ja Kotikulman keikan ero ymmärrettävä ilman selitystä.
- [ ] Selvitä siirtyykö taito harjoituksista uuteen musiikkiin vai muistetaanko vain vanha vaihtoehto.
- [ ] Kuuntele myös oikeilla laitteilla, tutki ovatko keskeytykset liian tiheitä ja liittyykö encore todella musiikkiin.
- [ ] Omistajan päätös: korjaa prototyyppiä, laajenna Kotikulman keikkaa tai siirry suunnittelemaan Bändiharjoituksia 2.

### P4 – Seuraavat bändiharjoitukset ja esiintymiset
- [ ] Pilotoi uusia tehtävämekaniikkoja vasta P3:n havaintojen perusteella; esimerkiksi `compare-change` ja `bass-contour`.
- [ ] Rakenna seuraava keikka uusien treenien taidoista, ei kopiona edellisestä.
- [ ] Vältä koko tarinan massatoteutusta, uutta yleismoottoria ja yhteensopimattomia tallennusmuutoksia.

## 8. Kokeen onnistumisen tarkistus

Ennen teknistä GO-päätöstä pilotista pitää olla todennettavissa:
1. **Ero kuultavissa:** oikea vaihtoehto perustuu analysoitavaan musiikilliseen ilmiöön, ei äänenvoimakkuuteen, kielelliseen vihjeeseen tai miksauksen virheeseen.
2. **Oppiminen näkyvissä:** pelaaja osaa omin sanoin tai uuden näytteen kautta kuvata, mikä muuttui; ensimmäinen oikein napautettu vaihtoehto ei yksin riitä.
3. **Vaihtelua:** sama taito kahdessa erilaisessa musiikillisessa tilanteessa, ei toistoa peräkkäin ellei kyse ole kertaamisesta.
4. **Kohtuullinen vaikeus:** vihjeet auttavat etenemään, eivät suoraan paljasta oikeaa säveltä; uuden tehtävän vaatimukset ovat johdonmukaiset edellisen jälkeen.
5. **Musiikki palkitsee:** Kotikulman keikka tulee kaikkien yhdeksän Ensitreenin jälkeen ja sisältää uuden musiikillisen kokonaisuuden sekä valintojen seuraukset; mahdollisen encoren voi kuunnella tai ohittaa.
6. **Tekninen turva:** ääni pysähtyy vaihdettaessa, vanha tallenne säilyy, mobiili ja näppäimistö toimivat, oikeudet ovat kunnossa, testit dokumentoitu.
7. **Katselmointierottelu:** automaattitestit, todellinen kuuntelukoe, käyttäjätesti ja omistajan hyväksyntä ilmoitetaan erikseen.

## 9. Työeristys ja seuraava konkreettinen tehtävä

**Tämä PR:** vain tämä suunnitelmatiedosto. Ei `ensikeikka/`, `pelit/`, `tests/`, äänitiedostojen tai muiden agenttien haarojen muutoksia.

1. Claude viimeistelee `feature/ensikeikka-toinen-ilta`-työnsä omassa työpuussaan. Codexin keskeneräisiä Oppimiskartan ja Riffikaiun haaroja ei kosketa.
2. Ensikeikka 2 kuunnellaan ja hyväksytään erikseen. Tämän suunnitelman omistaja voi hyväksyä myös ennen toteutuskoodia.
3. Valmistele ensin 1–9:n näkyvä yhdistäminen **Ensitreeneiksi**, sitten **erillinen käsikirjoitus-PR** yhdelle niiden jälkeiselle Kotikulman keikkakohtaukselle ja kahdelle erilaiselle musiikilliselle esimerkille. Älä muuta vanhoja ID:tä.
4. Toteutushaara otetaan tuolloin hyväksytystä, tuoreesta yhteisestä pohjasta eikä tästä dokumenttihaarasta. Tarkista `git status --porcelain` ja `git worktree list`; jos työkopio ei ole puhdas, älä resetoi/stashaa toisen työtä.
5. Yksi rajattu toteutus-PR, sen jälkeen todellinen kuuntelu- ja käyttäjäkoe. Erilliset päätökset beta-mergeen ja tuotantoon.

**Sisältörakenteen päätetty järjestys:** Ensitreenit 1–9 → Ensikeikka (Kotikulman keikka) → uudet bändiharjoitukset → seuraava keikka. **Uusi nimiehdotus:** Keikkakalenteri kokoaa myöhemmin kaikki esiintymiset, muttei treenejä; toteutus vasta usean keikan todellisessa tarpeessa. **Avoimet toteutuspäätökset:** nykyisten 6–9:n kuulonvarainen hyväksyntä; näkyvän rakenteen migraatio; Kotikulman keikan pilotti; Sunon käyttöoikeudet ja julkaisukelpoinen ääni; myöhempi laajennus. Oletusarvo on **EI VIELÄ TOTEUTUSHYVÄKSYTTY**.

## 10. Suorat lähteet

- [Ensikeikka 2 -haaran README](https://github.com/ristotoivanen/Musiikin-kartta/blob/feature/ensikeikka-toinen-ilta/ensikeikka/README.md)
- [Tehtävädata](https://github.com/ristotoivanen/Musiikin-kartta/blob/feature/ensikeikka-toinen-ilta/ensikeikka/second-night.ts)
- [15.11.2026 kokonaiskatselmus](https://github.com/ristotoivanen/Musiikin-kartta/blob/feature/ensikeikka-toinen-ilta/reviews/ensikeikka-kokonaiskatselmus.md)
- [Oppimisuudistuksen päätehtävälista #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54)
- [Oppimiskartan integraatioluonnos #61](https://github.com/ristotoivanen/Musiikin-kartta/pull/61)
