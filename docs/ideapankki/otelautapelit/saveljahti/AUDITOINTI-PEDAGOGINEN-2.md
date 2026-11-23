Teen uuden, pedagogiikkaan ja pelattavuuteen keskittyvän auditoinnin. Lasken ensin edellisen auditoinnin skriptiä laajentamalla, miten v1.0:n säännöillä pelaava pelaaja käyttäytyy, jotta pelisimulaatiot nojaavat sääntöihin eivätkä mutuun.

# Säveljahti v1.0: pedagoginen ja pelillinen auditointi

**Lopputulos: HYVÄKSY MUUTOKSIN.** Sävelketju kannattaa säilyttää, koska sävelten väliset suhteet (sama korkeus, oktaavi, sävelaskel) ovat pelin todellinen vahvuus. Johtolankojen painopistettä pitää kuitenkin muuttaa. Nykyisillä säännöillä pelaaja pystyy kiertämään juuri sen alueen, jota kohderyhmä ei osaa: nauhat 6–12. Lisäksi oikea kitara on mukana vasta kierroksen jälkeen ja vain vapaaehtoisena.

Laskin v1.0:n sääntöjen mukaan, miten erilaiset pelaajat etenevät. Luvut ovat sääntöjen seurauksia, eivät käyttäjätestin tuloksia. Kiinnostavuutta ne eivät mittaa.

## Mitä laskenta näytti

- **Tutun alueen pelaaja pääsee 0–12-jahdin läpi ilman ylänauhoja.** Oletin pelaajan, joka valitsee aina matalimman kelpaavan paikan. Saman sävelen perheessä 61 % hänen ketjuistaan pysyy kokonaan nauhoilla 0–5, ja vain 13 % löydöistä on 5. nauhan yläpuolella. Seuraa säveliä -perheessä luvut ovat 79 % ja 8 %. Syy: ensimmäinen löytö saa olla mikä tahansa paikka, ja useimpiin johtolankoihin kelpaa myös matala paikka.
- **Seuraa säveliä -perhe jää helposti yhdelle kielelle.** Jos generaattori arpoo johtolangan tasaisesti, 35–37 % ketjuista on kolme löytöä samalla kielellä eli pelkkää nauhojen laskemista. Suunnitelma pyrkii välttämään juuri tätä. Tulos riippuu painotuksista, joita v1.0 ei vielä määrittele.
- **0–5-alueen saman sävelen perhe toistaa itseään nopeasti.** 3 000 simuloidusta kierroksesta tuli vain 96 erilaista ketjua. Seitsemällä sävelellä se on noin 14 ketjua per sävel.

## 1. Todellinen oppiminen

**Mitä pelaaja osaa paremmin pelin jälkeen?** Todennäköisesti kolme asiaa:
- naapurikielten säännön: sama sävel on paksummalla kielellä 5 nauhaa ylempänä, G- ja B-kielen välillä 4
- saman sävelen ja saman korkeuden eron
- muutaman oktaavimuodon

Nämä ovat otelaudan rakennetta, eivät irrallisia paikkoja. Ketjumekaniikka tukee tätä hyvin, koska jokainen johtolanka on yhteys kahden paikan välillä.

**Heikkoudet:**
- **Kielikohtainen haku puuttuu.** Kohderyhmän tärkein käytännön taito on "missä C on A-kielellä?", esimerkiksi barré-soinnun perussävelen löytämiseksi. v1.0:n tehtävät sanovat "toiselta kieleltä" tai "samalla kielellä", mutta eivät koskaan "D-kieleltä". §5.1 sallii kielen kohdistamisen, mutta tehtävätaulukossa sitä ei ole.
- **Pelaaja harjoittelee osin tunnistamista, ei muistamista.** Ruudukossa näkyvät aina nauhanumerot ja kielten nimet. Oikeassa kitarassa on vain merkkipisteet.
- **Taitojen tasapaino on kohtuullinen.** N1-tehtävä (paikka → nimi) on hyvin rajattu, mutta sitä tulee vain joka toisessa jahdissa. Kielikohtainen nimi → paikka -haku puuttuu kokonaan.
- **Muistamisen säilyminen jää heikoksi.** Tieto katoaa istunnon päättyessä, eikä mikään kohdista seuraavaa kertaa heikkoihin paikkoihin. Peli tukee kierroksen sisäistä oppimista, ei pitkäaikaista.
- **Siirtymä oikeaan kitaraan on epävarma.** Kitarakokeilu tarjotaan vasta kierroksen lopussa ja vapaaehtoisena. Ennuste on, että useimmat ohittavat sen kolmannen kierroksen jälkeen.

## 2. Kiinnostavuus ja halu jatkaa

- **Kolmen löydön ketju on sopivan pituinen** puhelimella ja nopealle onnistumiselle. Pituus ei ole ongelma. Ongelma on, että kierrokset muistuttavat liikaa toisiaan.
- **Oivalluksia syntyy, mutta niitä ei hyödynnetä tarkoituksella.** Parhaat hetket ovat esimerkiksi "kolme eri paikkaa soi täsmälleen samalla korkeudella", G–B-poikkeus ja "kokoaskel E:stä ylöspäin on F♯ eikä F". Generaattori ei kuitenkaan tavoittele niitä, joten ne syntyvät sattumalta.
- **Pelaajan valinnalla on merkitystä lähinnä ensimmäisessä löydössä.** Sen jälkeen ketju on käytännössä peräkkäisiä kysymyksiä, joilla on jatkuvuus. Tämä ei ole huono asia, kunhan sitä ei markkinoida haarautumisena (v1.0 §6 on tässä rehellinen).
- **Tekeminen muuttuu ennalta arvattavaksi** noin 4–6 kierroksen jälkeen. Pelaajalle näkyviä tehtävätyyppejä on kuusi, eikä pelissä ole vaikeuden nousua eikä mitään, mikä kertyy kierroksesta toiseen.
- **Kyllästyminen ja turhautuminen:**
  - Taitava pelaaja kyllästyy 0–5-alueella heti.
  - Heikompi pelaaja turhautuu 0–12-alueella puhelimella, jos hänet pakotetaan ylänauhoille ilman tukea.
  - Nykyinen v1.0 ei pakota, joten turhautumisen sijaan tulee mukavuusalueella pysymistä.

## 3. Vaikeustaso

- **0–5 on kohderyhmälle liian helppo** pääharjoitukseksi. Se sopii lämmittelyksi ja nimeämistehtäviin.
- **0–12 ei ole liian vaikea, se on nykyisellään liian vältettävissä.** Vaikeus kannattaa ohjata johtolangoilla, esimerkiksi "Etsi sama korkeus A-kieleltä", eikä alueen kokoa kasvattamalla.
- **Työmuistikuorma on hallittava,** koska v1.0 pitää näkyvissä "Edellinen löytö" -rivin. Kuormaa kasvattavat eniten nimeäminen ja paikantaminen samassa askeleessa (A1/A2 + nimi). Siksi toteutusjärjestys on oikea: ensin nimi, sitten paikka.
- **Hyödyllinen oivallus syntyy tehtävästä, jossa sääntöä pitää käyttää tuntemattomassa paikassa.** Esimerkki: "Olet B-kielen 8. nauhalla (G4). Etsi sama korkeus G-kieleltä." Vastaus on 12. nauha, ja se löytyy vain G–B-säännöllä. Pelkkä ruutujen laskeminen ei auta.

## 4. Simuloidut pelaajat

Nämä ovat sääntöihin perustuvia ajatuskokeita, eivät havaintoja oikeista pelaajista.

**a) Osaa nauhat 0–5, ei juuri ylempää.** Alue 0–12, saman sävelen perhe:
1. "Löydä jokin G" → G-kieli vapaana (G3).
2. "Sama korkeus toiselta kieleltä": kelpaa D-kieli 5 tai A-kieli 10 → hän valitsee D-kieli 5.
3. "Oktaavia korkeampi": kelpaa ohut e 3, B-kieli 8 tai G-kieli 12 → hän valitsee ohut e 3.

- **Motivoi:** onnistuminen ja sujuvuus.
- **Opettaa:** ei mitään uutta. Ylänauhojen vaihtoehdot ohitetaan näkemättä.
- **Epäonnistuu:** peli ei koskaan kohtaa pelaajan varsinaista aukkoa. Laskennan mukaan tämä toistuu 61–79 %:ssa hänen ketjuistaan.

**b) Tuntee pentatoniset kuviot muttei sävelnimiä.** Alue 0–12, Seuraa säveliä, A-mollipentatoninen kuvio nauhoilla 5–8:
1. "Löydä jokin A" → paksu E 5 (kuvion pohjasävel).
2. "Oktaavia korkeampi" → D-kieli 7.
3. "Kokosävelaskel korkeammalle, mikä sävel?" → hän päättelee B:n ja napauttaa D-kieli 9.

- **Motivoi:** tuttu kuvio saa nimet.
- **Opettaa:** tälle pelaajalle eniten. Nimet kiinnittyvät sormien jo tuntemaan kuvioon.
- **Epäonnistuu:** jos generaattori vie kuvion ulkopuolelle, esimerkiksi A-kieli 0 tai G-kieli 2, yhteys kuvioon katkeaa. Peli ei tiedä pelaajan kuviosta mitään, eikä sen tarvitse tietää, jos johtolangat painottuvat nauhoille 5–9.

**c) Arvailee ja kokeilee.** Alue 0–5, Seuraa säveliä:
1. "Löydä jokin E" → hän napauttaa ohut e 2 (F♯4, väärin), sitten ohut e 0 ✓.
2. "Puoliaskel korkeammalle, mikä sävel?" → arvaa F♯ ja saa palautteen: "F". Tämä on aito E–F-oivallus, vaikka se tuli virheen kautta.
3. "F oktaavia matalammalta" → D-kieli 2 (väärin), sitten D-kieli 3 ✓.

- **Motivoi:** ei rangaistuksia, ja jokainen napautus soi.
- **Opettaa:** jonkin verran, koska väärä napautus kertoo sävelen nimen.
- **Epäonnistuu:** §6:n mukainen palaute kertoo suunnan, esimerkiksi "puoliaskel liian korkea". Silloin arvaaminen on nopein tapa edetä ja pelaaja oppii arvaamaan. Merkintä "kokeillen" näkyy vasta yhteenvedossa eikä muuta toimintaa.

**d) Löytää lähes kaiken ensimmäisellä yrityksellä.** Alue 0–5:
1. "Löydä jokin B" → A-kieli 2.
2. "Oktaavia korkeampi" → B-kieli vapaana.
3. "Sama korkeus toiselta kieleltä" → G-kieli 4.

- **Motivoi:** kierros vie noin 15 sekuntia, onnistumisia tulee.
- **Opettaa:** ei mitään uutta.
- **Epäonnistuu:** kolmannella kierroksella hän pelaa jo tottumuksesta. Yhteenveto "korkeuserot +12 ja 0" ei kerro hänelle mitään uutta. Mikään ei tarjoa vaikeampaa versiota, ellei hän itse vaihda aluetta.

**e) Pelaa kymmenen kierrosta peräkkäin.**
- Kierrokset 1–3: uutuus.
- Kierrokset 4–6: tehtävätyypit alkavat toistua.
- Kierrokset 7–10: sama C löytyy samoista kolmesta paikasta kolmatta kertaa, ja Kokeile kitaralla -painike ohitetaan jo refleksinä.
- **Epäonnistuu:** istunnon muisti on olemassa, mutta pelaaja ei näe sitä. Mikään ei kerry, joten jatkamiselle ei ole syytä.

## 5. Vaihtoehtoiset pelimekaniikat

| Mekaniikka | Oppiminen | Siirtymä kitaraan | Kiinnostavuus | Lisätyö |
|---|---|---|---|---|
| **Sävelketju (v1.0)** | rakenne ja suhteet hyvin | heikko–kohtalainen | kohtalainen, laantuu | suurin (generaattori) |
| **Kielikohtainen haku** ("Etsi C D-kieleltä", painotus heikkoihin paikkoihin) | paikat hyvin, rakenne heikosti | hyvä | matala, puuduttaa | pienin |
| **Kartoitus** (etsi kaikki C:t ja ryhmittele ne korkeuksittain; PR #179:n tehtävä 04) | oktaavirakenne hyvin | kohtalainen | 1–2 kierrosta | ei uutta (on jo olemassa) |
| **Kitara ensin** (soita ensin, merkitse sitten ruudulle, vertaa vertailusäveleen) | hyvä | paras | riippuu pelaajasta | pieni |

**Johtopäätös:** Pelkkä kielikohtainen haku siirtyisi kitaraan parhaiten, mutta siitä tulee nopeasti puuduttava drilli. Sävelketju on näistä ainoa, joka opettaa yhteyksiä. Paras ratkaisu on yhdistelmä: ketju säilyy, mutta johtolanka kohdistuu kieleen, ja kitara ensin -toiminto tulee ketjun sisään tilaksi, jonka pelaaja voi valita. Kumpikaan muutos ei palauta v1.0:ssa hylättyjä ratkaisuja, eli kahden johtolangan valikkoa tai kädenasemaikkunoita.

## 6. Fyysinen kitara

Kierroksen lopun vapaaehtoinen tehtävä ei riitä. Se tulee väärään aikaan (kun pelaaja on jo valmis) ja väärässä muodossa (erillinen lisätehtävä).

**Parempi ratkaisu on "Kitara kädessä" -tila,** jonka pelaaja kytkee päälle kerran ja peli muistaa istunnon ajan. Jokainen johtolanka toimii näin:
1. Otelauta on piilossa.
2. Pelaaja soittaa paikan omalla kitarallaan.
3. Hän voi kuunnella vertailusävelen ja verrata sitä omaan soittoonsa.
4. Hän painaa "Merkitse paikka", jolloin otelauta tulee näkyviin, ja napauttaa paikan, jossa soitti. Napautus on vastaus normaalin säännön mukaan.

Mikrofonia ei tarvita. Peli ei väitä mitään, mitä se ei pysty tietämään: pelaaja kertoo itse, mihin soitti, ja ääni antaa hänelle rehellisen tavan tarkistaa. Ääniteknisesti tämä ei vaadi mitään uutta.

## Edellytetyt tulokset

### 1. Pedagoginen arvio: 6/10
- **Vahvuudet:** musiikillinen malli on tarkka, sävelten suhteet opettavat rakennetta, N1 on hyvin rajattu ja istunnon kirjaus (ensimmäinen yritys / kokeillen / vihjeellä / paljastettu) on rehellinen.
- **Miinukset:** ylänauhoja ei tarvitse kohdata, kielikohtainen haku puuttuu, numeroitu ruudukko tukee tunnistamista eikä muistamista, ja oppimista ei tueta istunnon jälkeen.

### 2. Pelillisen kiinnostavuuden ennakkoarvio: 5/10 (teoreettinen arvio)
- Ensimmäiset kierrokset toimivat: ne ovat lyhyitä, soivat ja tuottavat oivalluksia.
- Viidennen kierroksen jälkeen motiivit jatkaa loppuvat: ei vaikeuden nousua, ei kertymää, tehtävätyypit toistuvat.

### 3. Halu jatkaa pelaamista
- **Tukee:** lyhyt kierros, rangaistuksettomuus, jokainen napautus soi, ja ajoittaiset aidot "aa, sama korkeus!" -hetket.
- **Heikentää:** ennustettavat tehtävätyypit, 0–5:n toisto, mikään ei kerry kierroksesta toiseen, yhteenvedot alkavat kuulostaa samoilta, ja kitaratehtävä on erillinen lisäkuorma.

### 4. Kolme vakavinta ongelmaa

1. **BLOCKER (oppimistavoitteen kannalta): 0–12-alueella ylänauhoja ei tarvitse kohdata.**
   - Tutun alueen pelaajan ketjuista 61–79 % pysyy nauhoilla 0–5.
   - Peli ei siis harjoita juuri sitä aukkoa, joka suunnitelmassa on nimetty kohderyhmän ongelmaksi.
   - Korjaus on halpa, ks. parannus 1.
2. **MAJOR: siirtymä oikeaan kitaraan jää sattuman varaan.**
   - Kitara tulee mukaan vasta kierroksen jälkeen ja vapaaehtoisena.
   - Ruudukossa näkyvät aina nauhanumerot.
3. **MAJOR: pelissä ei ole vaikeuden nousua eikä kertymää.**
   - Toisto alkaa noin 5. kierroksella.
   - Ilman painotuksia Seuraa säveliä -perhe ajautuu yhden kielen nauhalaskentaan (35 % ketjuista tasaisella arvonnalla).
   - Suuntaa kertova virhepalaute tekee arvaamisesta nopeimman strategian (MINOR, mutta liittyy tähän).

### 5. Viisi tärkeintä parannusta (prioriteettijärjestyksessä)

1. **Johtolangat kohdistetaan kieleen, ja 0–12-alueella jokaisessa ketjussa on vähintään yksi löytö nauhoilta 6–12.**
   - Esimerkkejä: "Etsi sama korkeus A-kieleltä", "Etsi C D-kieleltä".
   - Ensimmäinen löytö pysyy vapaana.
   - *Hyöty:* suurin. Harjoittaa kohderyhmän aukkoa ja käytännön taitoa (perussävelet E- ja A-kieleltä).
   - *Lisätyö:* pieni. Generaattoriin tulee uusi suodatin, mutta kaikkien vastausten jatkotakuu tarkistetaan samalla tavalla.
   - *Haitta:* vastausvaihtoehtoja on vähemmän, mutta ne olivat nytkin pääosin näennäisiä.
2. **Kitara kädessä -tila ketjun sisään** (ks. kohta 6).
   - *Hyöty:* paras siirtymä oikeaan kitaraan.
   - *Lisätyö:* pieni, koska kyse on käyttöliittymän tilasta eikä uudesta äänestä.
   - *Haitta:* kierros hidastuu. Pelaaja valitsee tilan itse, eikä sitä pakoteta.
3. **Istunnon otelautakartta, joka täyttyy kierroksesta toiseen.**
   - Löydöt jäävät kartalle, ja itse löydetyt erottuvat avustetuista.
   - Seuraava jahti suosii paikkoja ja kieliä, joita ei vielä ole kartalla. Tämä tekee v1.0:n §6.8:n vähän nähtyjen suosimisesta näkyvää.
   - Kartta ei ole pistemäärä vaan otelaudan sisältöä. Myöhemmin sen voi tallentaa paikallisesti yhdellä avaimella.
   - *Hyöty:* syy pelata 5.–10. kierros, ja kertaus kohdistuu heikkoihin paikkoihin.
   - *Lisätyö:* pieni–kohtalainen, koska istunnon tila on jo suunnitelmassa.
   - *Haitta:* voi muuttua keräilyksi, jos se näytetään prosentteina. Näytetään vain karttana.
4. **Oivallukset tehdään tarkoituksella.**
   - Generaattori painottaa rakennetta opettavia tilanteita: E–F ja B–C (puoliaskeleet ilman ♯-merkkiä), G–B-poikkeus, kolme samaa korkeutta 0–12-alueella ja oktaavimuodot.
   - Virhepalaute kertoo vain, mitä pelaaja napautti ("Tämä on F♯4, etsit E:tä"). Suunta kerrotaan vasta vihjeessä.
   - Yhteenveto nimeää yhden opitun säännön.
   - *Hyöty:* oppiminen ja yllätykset.
   - *Lisätyö:* pieni (painot ja tekstipohjat).
   - *Haitta:* tekstiä on helposti liikaa. Rajaksi yksi lause.
5. **Haastetaso ilman lukkoja: "Ilman nauhanumeroita".**
   - Otelaudalla näkyvät vain merkkipisteet.
   - Lisäksi tarjotaan kromaattisia kohdesäveliä.
   - Peli ehdottaa tasoa, kun pelaaja onnistuu ensimmäisellä yrityksellä useita kertoja peräkkäin.
   - *Hyöty:* taitavalle pelaajalle syy jatkaa, ja muistaminen korvaa tunnistamisen.
   - *Lisätyö:* hyvin pieni (CSS ja yksi valinta).
   - *Haitta:* voi turhauttaa, mutta pelaaja ottaa tason käyttöön itse.

### 6. Suositeltu lopullinen pelimekaniikka
**Säilytä ydin ja muuta painopistettä.**
- Kolmen löydön Sävelketju, automaattinen johtolanka, kaikkien vastausten jatkotakuu ja N1 säilyvät.
- Johtolangat kohdistuvat kieleen ja ylänauhoille.
- Kitara kädessä -tila ja istunnon kartta lisätään.
- Kierroksen lopun erillinen kitaratehtävä voidaan jättää pois. Se jää kevyeksi kehotukseksi niille, jotka eivät käytä kitaratilaa.

### 7. Pienin mahdollinen käyttäjäkoe ennen laajaa toteutusta

Koe ei vaadi toteutusta:
- 0–12-otelautakuva tabletilla tai paperilla ilman sävelnimiä
- ohjaajan valmis johtolankalista, joka generoidaan skriptillä ennalta
- vertailusävelet puhelimen sävelgeneraattorista

**Osallistujat:** 5 kohderyhmän soittajaa, noin 25 minuuttia kukin.

**Kulku:**
1. **Esitesti oikealla kitaralla (3 min, ei ruutua):** 6 tehtävää, joista 3 on nauhoilla 6–12 ja 4 on kohdistettu kieleen.
2. **Kaksi 6 minuutin jaksoa vaihtelevassa järjestyksessä:**
   - (A) v1.0:n mukainen vapaa ketju alueella 0–12
   - (B) kieleen kohdistettu ketju ja Kitara kädessä -tila
   - Pelaaja ajattelee ääneen.
3. **Jälkitesti kitaralla:** 6 uutta tehtävää, joista 2 paikkaa ei harjoiteltu lainkaan.
4. **Jatkohalu:** "Haluatko vielä yhden kierroksen, ja kummalla tavalla?" Havaitaan, ottaako pelaaja kierroksen oikeasti.
5. **Valinnainen:** 3 minuutin uusinta 2–3 päivän päästä.

**Tarkistettavat oletukset:**
- Ymmärretäänkö johtolangat ilman apua? Tavoite: vähintään 4/5.
- Pakeneeko pelaaja A-jaksossa nauhoille 0–5, kun ylempi vaihtoehto olisi tarjolla?
- Paraneeko ylänauhojen jälkitesti B-jaksossa enemmän kuin A-jaksossa ainakin 3/5:llä?
- Tarttuuko pelaaja kitaraan, kun se on vapaaehtoista?
- Valitseeko ainakin 3/5 jatkaa?

Viisi pelaajaa antaa suuntaa, ei tilastollista näyttöä. iPhonen kosketustarkkuus testataan myöhemmin erikseen oikealla toteutuksella.

**Pieni korjaus v1.0:aan:** §12:n testi 5 ("F3-vastaesimerkki 0–12") on kirjattu väärin. Ensimmäisen auditoinnin vastaesimerkki oli alueella 0–5. Aloitus on D-kieli 3 (F3) saman sävelen perheessä ilman S4:ää, ja siitä saa taatusti vain kaksi löytöä.

En muuttanut koodia enkä GitHubia.