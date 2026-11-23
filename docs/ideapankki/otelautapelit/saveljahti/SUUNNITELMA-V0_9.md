# Musiikin kartta – Säveljahti / Sävelketju
## Suunnitelmaluonnos v0.9 riippumatonta auditointia varten

**Päiväys:** 23.11.2026  
**Tila:** kattava suunnitteluehdotus, **ei toteutus-, PR-, beta- tai tuotantojulkaisulupaa**. Tämä ei ole auditoinnin jälkeinen lopullinen hyväksytty suunnitelma.  
**Kohderyhmä:** ensisijaisesti noin 1–2 vuotta kitaraa soittaneet, joilla kielten, nauhojen ja sävelnimien perusteet ovat ainakin osittain tuttuja, mutta sävelten sijainnin hahmottaminen ja nopea löytäminen otelaudalta on epävarmaa.  
**Sijainti sivustolla:** Musapelit → Säveljahti. Oppimiskartan Otelauta-ydinopinnot ovat eri kokonaisuus.  
**Lähtötilanne:** nykyinen `harjoittelija/NoteJourney.tsx` etsii seitsemän luonnollisen sävelen kaikki paikat kuudelta kieleltä nauhoilta 0–5.

## 1. Tavoite ja ei-tavoitteet

**Päätavoite:** Pelaaja löytää sävelpaikkoja tarkoituksellisesti ja oppii siirtämään otelaudan hahmotusta fyysiseen kitaraan. Sävelen nimi, sijainti, tarkka korkeus, toisen kielen vastaava paikka, oktaavi sekä nauhojen väliset askelvälit muodostuvat toisiinsa liittyväksi kartaksi.

Pelaajan havaittavat teot: 1) valitsee itse sävelpaikan kuudelta kieleltä, 2) kuulee juuri sen sävelkorkeuden, 3) seuraa sen perusteella muodostuvaa johtolankaa, 4) tarvittaessa vertaa ääniä ja käyttää vihjettä, 5) lopuksi kertaa syntyneen ketjun ja voi kokeilla paikkoja oikealla kitaralla.

**Ei tavoitella:** ensikertalaisen opetusta nollasta, absoluuttisen sävelkorvan mittaamista, mikrofonilla todennettua fyysistä suoritusta, kilpailua nopeudesta, pakollista etenemispolkua tai uutta koko sivuston yhteistä pelimoottoria. Ruudun oikea vastaus ei todista pysyvää muistamista tai oikean käden/sormen käyttöä fyysisellä kitaralla.

## 2. Vahvistetut suunnittelupäätökset

1. Pelin nimi on toistaiseksi **Säveljahti**; sen päämekaniikka on **Sävelketju**.
2. Minimi on aina **kaikki kuusi kieltä, nauhat 0–5 ja vapaat kielet (0)**. Ei pakollista yhden kielen eikä pelkkien vapaiden kielten aloituspolkua.
3. **0–12** tarjotaan vapaaehtoisena laajempana pelialueena. Ei lukituksia; alueen valinta ei ole merkki osaamisesta.
4. Napautettu kieli+nauha soi **jokaisella painalluksella**, myös väärä ja aiemmin löydetty sävel. Löydöt pysyvät kuunneltavina myös ketjun valmistuttua. Ääni ei yksin kanna oikeellisuustietoa.
5. **Pelaajan ensimmäinen oikea sijaintivalinta vaikuttaa ketjuun.** Sen jälkeen peli muodostaa automaattisesti seuraavan **toteuttamiskelpoisen johtolangan**.
6. Samassa pelissä on **saman sävelnimen ketjuja** ja **sävelnimestä toiseen eteneviä ketjuja**. Ne eivät vaadi erillisiä pelejä tai raskasta tilavalikkoa.
7. Pelaaja saa vaihtaa haastetta ja harjoitella vapaasti. Ei pakollista opastusvelhoa, pistevähennyksiä vihjeistä tai päivittäisiä velvoitteita.
8. Tässä vaiheessa ei koodata, muuteta GitHubia eikä yhdistetä mitään betaan.

## 3. Musiikillisten käsitteiden täsmällinen ero

- **Sijainti** = tietty kieli ja nauha, esimerkiksi B-kieli/nauha 1.
- **Sävelnimi** = sama kromaattinen sävelluokka riippumatta oktaavista: esim. C3, C4 ja C5 ovat kaikki C-säveliä.
- **Sama sävelkorkeus** = kaksi paikkaa tuottaa saman MIDI-korkeuden, esimerkiksi B1=C4 ja G5=C4; oktaavi **ei** riitä.
- **Oktaavi ylemmäs/alemmas** = sävelkorkeus eroaa täsmälleen 12 puolisävelaskelta, esimerkiksi A3=C3 → B1=C4.
- **Puoli- tai kokosävelaskel** = täsmälleen yksi tai kaksi puolisävelaskelta, esimerkiksi D3=F3 → D5=G3. Esimerkeissä kielimerkintä on kieli ja numero nauha.

Peli käyttää olemassa olevan Musiikin kartan sävelnimijärjestelmän ja virityksen mukaisia nimiä; erillistä H/B-selitystä ei kopioida peliin. Lähtöoletus on tavallinen kuusikielisen kitaran E–A–D–G–B–e-vire; poikkeavat viritykset eivät kuulu tähän versioon.

## 4. Pelirakenne ja käyttöpolku

**Pelin avaaminen:** Otelauta näkyy välittömästi, oletusalue 0–5. Yläreunassa yksi selkeä tehtävä: esim. **”Löydä jokin C”** ja lyhyt ohje **”Napauta paikkaa. Jokainen valinta soi.”** Ei monisivuista opastusta eikä valikkoa ennen ensimmäistä tekoa. Alueen 0–12 valinta näkyy mutta ei vie pois pelistä.

**Kierros = yksi Sävelketju:** suositusarvona **3–4 erillistä oikeaa löytöä**, ei pakollista ajanottoa. Ensimmäinen löytö voi olla mikä tahansa annetun sävelnimen oikea sijainti. Peli antaa seuraavan johtolangan löydön perusteella. Vain yksi päätehtävä näkyy kerrallaan. Virheet eivät katkaise ketjua. Valmiin ketjun löydöt säilyvät napautettavina.

**Kierroksen päättyessä:** näytä paikat (kieli, nauha, sävel ja oktaavi), selkeä musiikillinen yhteys, mahdollisuus **”Kuuntele ketju”**, **”Kokeile kitaralla”** (valinnainen ohje, ilman automaattista suoritusarviota), **”Uusi jahti”** ja **”Valitse toinen jahti/alue”**. Uusi jahti ei ala automaattisesti. Näytön tulisi kertoa oivallus, ei pelkästään ”4/4 oikein”.

**Kaksi tehtäväperhettä yhden pelin sisällä:**
- **Saman sävelen jäljillä:** sävelnimi pysyy samana; johtolanka erottaa yhtä korkeat sävelet ja eri oktaavit. Tehtävä voi pyytää esimerkiksi ”toinen C4 eri kieleltä” tai ”C oktaavia alempaa”.
- **Seuraa säveliä:** sävelnimi saa muuttua; suhde voi olla seuraava puoli- tai kokosävelaskel samalla kielellä tai uusi saman korkuinen paikka toisella kielellä. Näin otelauta ei jää yhden sävelnimen mekaaniseksi keräilyksi.

Peli vaihtelee tehtäväperheitä ehdotuksissa, mutta pelaajalla pitää olla mahdollisuus valita haluamansa jahti ilman avaamisvaatimuksia. Tarkka asetusten näkyvyys ratkaistaan käytettävyystestissä; ensinäytön tulee pysyä rauhallisena.

## 5. Tehtävätyypit ja säännöt (versio 1)

| Tunnus | Johtolanka | Täsmällinen oikean vastauksen ehto | Opittava asia |
|---|---|---|---|
| S1 | Löydä sama **sävelkorkeus** toiselta kieleltä | `midi(new)=midi(old)` ja eri kieli ja uusi sijainti | Päällekkäiset sävelpaikat |
| S2 | Löydä sama sävel **oktaavia ylempää** | `midi(new)=midi(old)+12` ja uusi sijainti | Oktaavi ylöspäin |
| S3 | Löydä sama sävel **oktaavia alempaa** | `midi(new)=midi(old)-12` ja uusi sijainti | Oktaavi alaspäin |
| S4 | Löydä toinen samanniminen sävel | sama sävelluokka, uusi sijainti; käytä vain jos kysymys ei vaadi tarkkaa oktaavia | Sävelluokan paikat |
| A1 | Siirry yhdellä kielellä **puoliaskel** ylös/alas | sama kieli, nauha ±1, uusi sijainti | Kromaattinen nousu/lasku |
| A2 | Siirry yhdellä kielellä **kokoaskel** ylös/alas | sama kieli, nauha ±2, uusi sijainti | Nauhojen välinen etäisyys |
| L1 (0–12) | Etsi vapaan kielen oktaavi 12. nauhalta tai takaisin | sama kieli, nauhat 0 ja 12, MIDI-ero 12 | Kaulan rakenne ja 12. nauha |

**Sanamuodot eivät saa sekoittaa keskenään ”sama sävelnimi” ja ”sama sävelkorkeus”.** Puoliaskelta ei saa kutsua kokonaiseksi sävelaskeleeksi. Jos oikeita vastauksia on useita, jokaisen kelvollisen sijainnin pitää kelvata ja ohjata ketju sen mukaisesti. Ei piilotettua yhtä oikeaa vastausta.

**Vaihtelurajat:** enintään kaksi peräkkäistä samantyyppistä suhdetta, mielellään vähintään kaksi erilaista musiikillista suhdetta 4 löydön ketjussa. Ensimmäisissä ketjuissa suositaan S1–S4:ää, mutta 1–2 vuotta soittaneille A1/A2 voidaan tuoda jo varhain. Sävelaskeleen suunnan ja kromaattisen kohdesävelen nimi näytetään palautevaiheessa. Tehtävätyypit valitaan sen mukaan, mitä kyseisellä alueella on oikeasti mahdollista tehdä.

## 6. Seuraavan johtolangan generaattori

**Rajattu, deterministisesti testattava sääntöpohjainen generaattori**, ei generatiivista tekoälyä. Käytetään projektin jo tuntemia paikkatietoja: kieli, nauha, MIDI-korkeus ja sävelluokka.

1. Muodosta valitun alueen kaikki lailliset sijainnit (0–5 = 36, 0–12 = 78).
2. Ensimmäinen tehtävä nimeää luonnollisen sävelen C/D/E/F/G/A/B. Pelaaja saa valita minkä tahansa sen oikean sijainnin.
3. Valinnan jälkeen muodosta mahdollisten S1–S4/A1–A2/L1-suhteiden joukko. Älä tarjoa suhdetta, jonka oikea vastaus puuttuu alueelta tai on jo käytetty saman ketjun löytönä.
4. Valitse suhde vaihtelun, musiikillisen hyödyllisyyden ja halutun tehtäväperheen mukaan. **Tarkista myös, että valinnasta jää toteuttamiskelpoinen jatko kierroksen suunniteltuun pituuteen.** Käytä pientä rajattua syvyyshakua tai vastaavaa ennakkotarkistusta; ei tarvetta rakentaa yleistä oppimispelialustaa.
5. Jos sopivaa jatkoa ei löydy, valitse toinen kelvollinen suhde; jos suunniteltu neljäs löytö ei onnistu, päätä vähintään kolmen mielekkään löydön jälkeen. Älä koskaan näytä mahdotonta kysymystä tai ketjua, joka jumittuu ilman ohitustoimintoa.
6. Valinnat voivat vaihdella kierroksittain rajatulla satunnaisuudella. Testit ajavat toistettavalla siemenellä; sama aloitussävel ei aina johda samaan ketjuun.
7. Väärät napautukset eivät muuta ketjun oikeaa lähtöpistettä. Löydettyyn kohtaan napauttaminen on uudelleenkuuntelua, ei uusi löytö.

**Huomio suunnitteluriskistä:** jos pelaaja saa valita ensimmäiseksi minkä tahansa oikean paikan, generaattori ei saa luvata suhteita, jotka ovat vain joidenkin lähtöpaikkojen mahdollisuuksia. Tätä testataan kaikilla aloituspaikoilla ja tehtäväperheillä.

## 7. Esimerkkikierrokset musiikillisesti tarkistetuilla sävelillä

**0–5: saman C:n ketju, käyttäjän aloitus B1=C4.**
1. Löydä jokin C → B-kieli, nauha 1 = C4.
2. Etsi sama C4 toiselta kieleltä → G-kieli, nauha 5 = C4.
3. Etsi C oktaavia alempaa → A-kieli, nauha 3 = C3.
Ketju valmis: kolme sijaintia, kaksi yhtä korkeaa säveltä ja yksi alempi oktaavi. Vaihtoehtoinen ensimmäinen C olisi muuttanut järjestystä.

**0–5: sävelnimen vaihtava ketju.**
1. Löydä jokin F → paksu E, nauha 1 = F2.
2. Etsi F oktaavia ylempää → D-kieli, nauha 3 = F3.
3. Etsi samalla D-kielellä kokosävelaskel korkeammalta → D-kieli, nauha 5 = G3.
4. Etsi yhtä korkea G toiselta kieleltä → vapaa G-kieli = G3.
Ketju valmis: oktaavi, kokoaskel, sama sävelkorkeus toisella kielellä.

**0–12: C4:n kolme sijaintia ja uusi oktaavi.**
1. Löydä C → B1=C4.
2. Etsi sama C4 toiselta kieleltä → G5=C4 (yksi oikeista).
3. Etsi sama C4 vielä kolmannelta kieleltä → D10=C4.
4. Etsi C oktaavia ylempää → ohut e8=C5.
Laajalla alueella C-sijainnit ovat yhteensä: A3=C3, paksu E8=C3, B1=G5=D10=C4, ohut e8=C5. Siis kuusi sijaintia, joista kolme soi täsmälleen samalla korkeudella. Tätä ei tule muuttaa pakolliseksi kuuden paikan maratoniksi.

## 8. Oikea, väärä ja jo löydetty kohta

- Jokainen napautus käynnistää kyseisen paikan oikean MIDI-sävelkorkeuden. Nopea uusi napautus katkaisee aiemman; välilehden piilottaminen, poistuminen tai kierroksen vaihtuminen keskeyttää toiston.
- Oikea löytö jää selvästi näkyviin. Ketjussa voi olla useita oikeita vaihtoehtoja. Seuraava johtolanka vaihtuu ilman ylimääräistä ”tarkista”-painiketta.
- Väärä napautus soi ja tuo lyhyen palautteen: **mikä sävel/oktaavi oikeasti valittiin** sekä täsmällinen syy, miksi se ei täytä tehtävää (väärä sävelkorkeus, väärä oktaavi, väärä kieli tai eri askelmatka). Ei virhepisteitä eikä nollausta.
- Jo löydetty kohta soitetaan uudelleen eikä sitä lasketa uudeksi löydöksi. Tämä koskee myös **ketjun valmistumisen jälkeistä** tarkastelua.
- Vihjeet ovat valinnaisia ja asteittaisia: ensin suunta tai musiikillinen vihje, sitten kieli/nauha-alue, lopuksi tarkka paikka tai **Näytä ratkaisu / Ohita**. Näin peliin ei jää pakotettua umpikujatilannetta. Ohitettu tai paljastettu löytö erotetaan omaehtoisesta oikeasta vastauksesta mahdollisissa etenemistiedoissa.
- Jos ääni ei käynnisty, näkyvä ohje kertoo ongelmasta, mutta peli pysyy käytettävissä ilman ääntä. Mikrofonilupaa ei pyydetä.

## 9. Pelaajan kiinnostus ilman keinotekoista palkitsemista

- **Vaihtelevat musiikilliset kysymykset:** sama sävel eri kielillä, oktaavit, askelilla eteneminen ja laajemman alueen 12. nauhan oivallukset. Ei pelkästään sama tehtävä uudella sävelnimellä.
- **Omat päätökset muuttavat reittiä:** ensimmäinen ja myöhemmät moniselitteisesti oikeat sijaintivalinnat vaikuttavat seuraavaan johtolankaan. Yksi ketju ei vaadi yhtä tarkkaa ”oikeaa ratkaisupolkua”.
- **Lyhyet onnistumiset:** 3–4 löytöä ja selkeä lopputulos. Yksi kierros ei ole ajastettu eikä sen tarvitse käydä läpi kaikkia nuotteja.
- **Luonteva seuraava tehtävä:** ehdota välillä samaa sävelnimeä uudessa asetelmassa ja välillä sävelaskelketjua; pelaaja voi valita vapaan haasteen.
- **Muistia vahvistava paluu:** aiemmin vihjeillä tai useilla yrityksillä ratkaistut suhteet voidaan tarjota uudelleen toisessa yhteydessä. Ei anneta tekoälyn keksimiä arvioita pysyvästä soittotaidosta.
- Pisteet, kellot, päivittäiset putket ja achievementit **eivät kuulu alkuversioon**. Niitä harkitaan vasta, jos ne osoitettavasti parantavat oppimista ja pelin käyttöä.

## 10. Otelaudan mobiilikäyttö ja iPhone

**Minimileveys on rajoite, ei syy pienentää kosketusalueita.** Tavoitellaan vähintään noin 44×44 CSS-pikselin yksiselitteisiä napautusalueita, käytännössä noin 48 px korkeat/kohde. Kuusi riviä, pysyvät kielimerkinnät ja erottuva vapaan kielen sarake. Nauha 0 tarkoittaa aina avointa kieltä; 12. nauhan merkki näkyy laajalla alueella.

- **390 px:** 0–5 voidaan tavoitella kokonaisuudessaan näkyväksi, jos kielimerkinnät, marginaalit ja käytettävissä oleva tila sallivat.
- **360 px:** tavoite on samoin hyvä näkyvyys, mutta mitoitetaan vasta oikealla laitteella. Jos sisätila ei riitä vähintään 44 px kohteisiin, otelauta vierii vaakaan.
- **320 px:** koko 0–5-alueen näyttämistä yhdellä kertaa ei pidä luvata, jos se heikentää osumatarkkuutta. Kevyt vaakavieritys on hyväksyttävä.
- **0–12:** säilytetään yksi looginen 13 nauhan otelauta, jota vieritetään sivuttain; tarvittaessa pikasiirtymät ”nauhat 0–5” ja ”6–12” ovat vain vierityspikavalintoja, eivät uusia pelialueita tai eri tehtäviä.
- Kielimerkinnät pysyvät näkyvissä vaakavierityksen aikana. Näytä selkeästi, että ruudun ulkopuolella on nauhoja. Älä siirrä otelautaa automaattisesti jokaisen löydön jälkeen, koska se kadottaa pelaajan paikantajun. Vihjeen pyytäminen voi siirtää näkymää kohdennetusti.
- Yksi napautus = yksi paikka = yksi ääni. Vaakasuuntainen pyyhkäisy ei saa tulkittua nauhavalinnaksi. Vältä kaksoisnapautuksia, pieniä tekstikohteita ja kosketusta vaativia tooltippeja.
- Tehtävän otsikko, ketjun vaihe ja viimeisimmän valinnan palaute näkyvät myös vieritetyssä otelaudassa; ei edellytetä jatkuvaa pomppimista sivun ylä- ja alalaitaan.
- Testaa iPhone/Safari oikealla laitteella myös äänentoiston käynnistyminen, nopeat painallukset, äänen estyminen sekä välilehden piilotus ja lukitus. Selainemulaatio ei korvaa tätä.

## 11. Siirtyminen fyysiseen kitaraan

Tämä ei saa jäädä vain ruudukon muistamiseksi. Säilytetään otelaudan esitys, kielet ja nauhanumerot mahdollisimman yhdenmukaisina projektin muun sisällön ja oikean otelaudan kanssa. Otelaudan pistemerkit 3, 5, 7, 9 ja 12 auttavat maantieteellisessä hahmotuksessa.

Valmiin ketjun jälkeen tarjotaan vapaaehtoinen, konkreettinen ohje: **”Etsi ja soita nämä samat paikat omalla kitarallasi. Löydätkö seuraavan ilman näyttöä?”** Pelaaja voi palata paljastamaan paikat ja kuuntelemaan niitä. Peli ei väitä vahvistaneensa oikeaa soittoa; mikrofonin sävelkorkeuskaan ei yksin kertoisi, mitä kieltä ja nauhaa käytettiin.

## 12. Toteutuslinja ja olemassa olevan työn hyödyntäminen

**GitHub-tilanne 23.11.2026 tarkistettu:**
- [#50](https://github.com/ristotoivanen/Musiikin-kartta/issues/50): avoin, aiempi alueittainen suunnitelma. Sen hyödyllisiä tehtäväideoita käytetään, mutta aloitus pelkillä avoimilla kielillä / yhdellä kielellä **ei ole enää hyväksytty tavoite**.
- [#49](https://github.com/ristotoivanen/Musiikin-kartta/issues/49): avoin suunnitelma; vapaa eteneminen, lyhyt palaute, vihjeet ja ei lukituksia soveltuvat tähän.
- [#43](https://github.com/ristotoivanen/Musiikin-kartta/issues/43) ja [PR #46](https://github.com/ristotoivanen/Musiikin-kartta/pull/46): äänen käynnistävä `ReferencePlayer`-muutos on erillisessä avoimessa PR:ssä, **ei tarkistetun beta-haaran `NoteJourney.tsx`-tiedostossa**. Lisäksi PR #46:ssa `complete` estää painallukset ja `Board`-komponentin pois käytöstä; se on ristiriidassa uuden vaatimuksen kanssa, että valmiin ketjun löytöjä voi edelleen kuunnella. Toteutuksen yhteensovitus on suunniteltava ja testattava.
- [PR #179](https://github.com/ristotoivanen/Musiikin-kartta/pull/179): avoin Otelaudan Ydinopinnot -PR. Sen sama sävel eri kieleltä, oktaavit ja 0–12-paikkojen haku ovat **pedagogisesti päällekkäisiä**, mutta Säveljahti on dynaaminen peliketju Musapeleissä. Varmistetaan yhtenäinen sävelmatematiikka, käyttöliittymäkieli ja linkitys; ei tehdä turhaa kilpailevaa äänimoottoria eikä siirretä Otelauta-ydinopintojen muutoksia huomaamatta peliin.

**Toteutusjärjestystä ei vielä päätetä.** Kun toteutus aikanaan hyväksytään, vertaa ensin nykyisen `NoteJourney` + `Board` -kokonaisuuden laajentamista erilliseen pelikomponenttiin. Arkkitehtuurin valinnan tulee perustua koodin selkeyteen, testattavuuteen ja muihin peleihin kohdistuvaan regressioriskiin, ei uuden pelimoottorin itseisarvoon.

## 13. Saavutettavuus, toiminnallinen laatu ja hyväksymiskriteerit

**Saavutettavuus:** kokonaan näppäimistöllä käytettävä otelauta (nuolinäppäimet, Enter), näkyvä kohdistus, kieli/nauha/sävel oikein nimetty ruudunlukijalle, kohtuullinen ilmoitusten määrä, väreistä riippumaton palaute, vähennetty liike, 200 % tekstin suurennus ja 320/360/390 px:n mobiilitarkistus. Ääni on hyödyllinen mutta ei ainoa palautekanava.

**Ennen mahdollista beta-GO-päätöstä on todennettava ainakin:**
1. Kaikki kuusi kieltä ja nauha 0 sisältyvät jokaiseen pelialueeseen. 0–5 = 36, 0–12 = 78 sijaintia.
2. Vakiovirityksen MIDI-korkeudet oikein: C3=48, C4=60, F2=41, F3=53, G3=55. C löytyy 0–5-alueella kolmesta ja 0–12-alueella kuudesta paikasta.
3. Jokainen sallittu lähtöpaikka ja johtolanka tuottaa oikean/toteuttamiskelpoisen vastauksen; kaikkien seitsemän luonnollisen aloitussävelen aluekohtaiset aloitukset käydään automaattisissa testeissä läpi.
4. Oikea, väärä, aiemmin löydetty ja ketjun valmistumisen jälkeinen napautus soivat täsmälleen valitun paikan korkeudella, ellei selain estä ääntä; estosta annetaan näkyvä, ei-estävä ilmoitus.
5. Pelille kelpaavat kaikki aidosti oikeat sijainnit; väärää oktaavia ei hyväksytä samaa sävelkorkeutta edellyttävään tehtävään.
6. Väärät yritykset eivät katkaise ketjua, vihje tai ohitus on aina mahdollinen, ja samat sävelet voi kuunnella uudelleen.
7. Ketjulla on selkeä lopputila ja toistettava äänellinen yhteenveto. Paluu, vapaa kierroksen vaihto ja 0–12-valinta eivät lukitse pelaajaa.
8. iPhone: 0–5 ja 0–12 sekä viimeiset nauhat ovat oikeasti napautettavissa ilman virheellisiä pyyhkäisyosumia. Testataan fyysisellä Safarilla; desktop-emulaatio erikseen.
9. Ei mikrofonilupaa, uutta tiliä, pakollista etenemislukkoa, automaattista piste-/aikapainetta tai vaikutusta muiden pelien toimiviin ääniin.
10. `beta`-, `main`- ja PR-haaroihin ei tehdä muutoksia pelkän tämän dokumentin perusteella.

**Käyttäjäkoe:** ehdotus on tarkkailla vähintään 3–5 kohderyhmään kuuluvaa 1–2 vuotta soittanutta käyttäjää. Seuraa ilman ensikäynnin opastusta, löytävätkö he aloitustehtävän, ymmärtävätkö ”sama sävelkorkeus” vs ”sama nimi eri oktaavissa”, käyttävätkö kosketusalueita onnistuneesti ja pystyvätkö kertomaan ainakin yhden otelaudasta oppimansa asian. Mittaa havainnot, älä tulkitse yhden session onnistumista pitkäaikaiseksi oppimiseksi.

## 14. Tunnistetut epävarmuudet auditointia varten

1. **Kognitiivinen kuorma:** onko automaattisesti vaihtuva johtolanka sopivasti haastava 1–2 vuotta soittaneelle vai tuntuuko se sekavalta? Tarvitaanko pysyvä mini-konteksti edellisestä löydöstä?
2. **Tehtävägeneraattori:** pysyykö 3–4 löydön sääntö toteuttamiskelpoisena kaikista oikeista lähtöpaikoista ja molemmilla alueilla? Onko nykyinen tyyppijoukko riittävä tai liian laaja?
3. **Musiikkiterminologia:** mitä tarkoittaa ”sama sävel” käyttäjälle? Tarvitaanko alussa täsmällisempi teksti "yhtä korkea" ja "oktaavia korkeampi"?
4. **Motivaatio:** muodostuuko ketjuista riittävän erilaisia ilman pisteitä? Vaihtelevatko pelaajan merkitykselliset päätökset oikeasti vai näennäisesti?
5. **0–12 puhelimella:** opetetaanko sijainteja vai vaakavierityksen muistamista? Pitäisikö tarjota myös kartta/yleiskuva erillisenä, ei-interaktiivisena apuna?
6. **Äänentoiston uudelleenkäyttö:** kattavatko PR #46:n `ReferencePlayer` ja vanha `Board` uuden pelin jokaisen napautustilan ja iPhone-Safarin riskit, vai tarvitaanko rajattu korjaus?
7. **Päällekkäisyys PR #179:n kanssa:** mikä on varsinainen lisäarvo ja miten vältetään samat opit kahdesti irrallisina?
8. **Oppimisen siirtovaikutus:** onko fyysisen kitaran vapaaehtoinen loppukokeilu riittävä vai jääkö peli näytön ruudukon tunnistamiseksi?
9. **Osaamisen seuranta:** riittääkö ensi versioon pelkkä paikallinen alue- ja kertausvalinta; tarvitaanko v1:een tallennusta vai siirretäänkö erilliseen päätökseen?

## 15. Riippumattoman tekoälyauditoinnin toimeksianto

> **Arvioi tämä suunnitelma kriittisesti, älä toteuta mitään.** Kohderyhmä on 1–2 vuotta kitaraa soittanut, jonka otelaudan sävelten hahmotus on epävarmaa. Tarkista: (a) sävelkorkeudet, oktaavit ja esimerkkiketjut, (b) generoinnin toteuttamiskelpoisuus jokaisesta oikeasta aloituspaikasta 0–5 ja 0–12 -alueilla, (c) mitä pelaaja tekee ja oppii käytännössä, (d) vaihtelu ilman näennäistä satunnaisuutta, (e) puhelimen osumatarkkuus ja saavutettavuus, (f) ääni myös väärästä, uudelleenkuuntelusta ja ketjun päätyttyä, (g) päällekkäisyydet #43/#46, #49, #50 ja PR #179, (h) rajaus ja regressioriskit. **Älä myötäile suunnitelmaa.** Kirjaa löydökset vakavuudella `BLOCKER / MAJOR / MINOR / HUOMIO`, anna jokaiselle perustelu ja konkreettinen korjausehdotus. Erota todistettu lähdekoodihavainto ehdotuksesta ja oletuksesta. Päätä arvioon: `HYVÄKSY / HYVÄKSY KORJAUKSIN / HYLKÄÄ`, sekä täsmällinen lista päätöksistä, jotka omistajan tulee tehdä ennen toteutusta. Tämä dokumentti ei sisällä toteutuslupaa.

## 16. Päätösportti

**Nyt:** tämän v0.9-luonnoksen auditointi toisella tekoälyllä.  
**Auditoinnin jälkeen:** käydään löydökset yksitellen läpi, korjataan virheet, karsitaan tarpeeton monimutkaisuus ja laaditaan omistajan hyväksyttävä **lopullinen suunnitelma v1.0**.  
**Vasta erikseen:** valitaan toteutustapa, kehityshaara, testit, PR ja mahdollinen beta- sekä tuotantovienti.