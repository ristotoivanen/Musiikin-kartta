# Oppimiskartan aiheiden hallittu laajentaminen ja julkaisukynnys

**Päiväys:** 15.11.2026  
**Tila:** suunnitteluehdotus; ei hyväksytty toteutus, ei julkaisuvaltuutus  
**Seuranta:** [#71](https://github.com/ristotoivanen/Musiikin-kartta/issues/71)  
**Päätöksiä ohjaava tiekartta:** [#54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54)

> **Järjestys:** Nykyinen Oppimiskartan navigaation ja Kitaran perusteiden uudistus viimeistellään ensin ja katselmoidaan käytössä. Tämä asiakirja **ei** käynnistä 11 aiheen käyttöönottoa eikä muuta keskeneräisiä Codexin/Clauden töitä, `main`-/`beta`-haaroja, Ensikeikkaa tai Riffikaikua.

## 1. Lähtökohta ja ongelma

Musiikin kartan nykyisessä Oppimiskartta-prototyypissä näkyy kahdeksan pääaihetta: Kitaran perusteet; Rytmi; Sävelnimet ja sointumerkinnät; Sävelkorva ja melodia; Otelauta; Soinnut ja harmonia; Asteikot ja moodit; Kappaleet ja oma musiikki. Kehityshaara saattaa poiketa julkaistusta `main`-versiosta; tässä kuvataan käyttäjän 15.11.2026 näyttämää näkymää ja keskustelussa tehtyä ehdotusta.

Teoria- ja asteikkosisällöt ovat kartalla, mutta itsenäinen musiikillinen ilmaisu, fyysinen kitaratekniikka ja bändissä toimiminen eivät erotu kunnolla. Pelkkä aiheiden määrän nostaminen kahdeksasta yhteentoista aiheuttaisi toisen ongelman: suurikokoinen aihevalikko voisi täyttyä keskeneräisistä tai heikoista sisällöistä.

**Täsmennys mittareista:** Kortin `0/4 sisältöä tehty` voi tarkoittaa käyttäjän suorittamien sisältöjen määrää, **ei** sitä, että neljästä sisällöstä nolla olisi toteutettu. Julkaisukypsyys, sisällön määrä ja käyttäjän eteneminen ovat kolme eri asiaa. Niitä ei saa sekoittaa käyttöliittymässä tai auditoinnissa.

**Päätavoite:** käyttäjä oppii kuulemaan, ymmärtämään, muistamaan, soittamaan ja soveltamaan musiikkia myös ilman jatkuvaa tabien/sointukaavioiden katsomista. Teoria, pelit, kuuntelu ja oikea kitara ovat tilanteen mukaan valittuja tapoja päästä samaan taitotavoitteeseen; ei pakollinen sama nelivaiheinen putki jokaisessa aiheessa.

## 2. Ehdotettu 11 pääaiheen kartta

Tämä on **mahdollinen tuleva jäsennys**, ei vaatimus tehdä 11 valikkokorttia.

| # | Ehdotettu nimi | Suhde nykyiseen | Rajaus / oppimistulos |
|---|---|---|---|
| 01 | Kitaran perusteet | Nykyinen, tarkennettava | Lyhyt jatko-opintojen kertaus jo perustaidot osaavalle. Ei kitaran käsittelyn alkeiskurssia. |
| 02 | Rytmi ja groove | Nykyinen, laajennettava | Tasainen pulssi, laskeminen, rytmikuviot, tauot, aksentit, synkoopit, vaimennettu komppi ja yhdessä pysyminen. |
| 03 | Musiikin kieli ja merkinnät | Nykyisen sävelnimet/sointumerkinnät laajennus | Sävelnimet, intervallit, sointumerkinnät, rytmimerkinnät, tabulatuurien ja nuottien lukemisen käyttökelpoiset perusteet. |
| 04 | Sävelkorva ja melodia | Nykyinen, laajennettava | Sävelten ja melodian kuuntelu, tunnistus, kuullun toistaminen ja kuulolta soittaminen. |
| 05 | Otelauta | Nykyinen | Sävelsijainnit, oktaavit, muodot, CAGED ja soveltaminen kitaralla. |
| 06 | **Soittotekniikka ja ilmaisu** | **Uusi ehdokas** | Plektratekniikka, kielten vaimennus, bendit, vibrato, slide, hammer-on/pull-off, dynamiikka, artikulaatio ja soundin hallinta. |
| 07 | Soinnut ja harmonia | Nykyinen | Sointujen rakenne, otteet, vaihdot, sointukierrot, harmoniat ja niiden kuuleminen. |
| 08 | Asteikot ja moodit | Nykyinen | Duuri, molli, pentatoninen, bluesasteikko, moodit ja niiden suhde harmoniseen tilanteeseen. |
| 09 | **Improvisaatio ja fraasitus** | **Uusi ehdokas** | Motiivit, tauot, kysymys–vastaus, rytminen muuntelu, sointusäveliin tähtääminen, asteikkojen musikaalinen käyttö. |
| 10 | Kappaleet ja oma musiikki | Nykyinen, laajennettava | Kappaleen muoto, korvalla oppiminen, muistaminen, sovittaminen, säveltäminen ja soveltaminen. |
| 11 | **Yhteissoitto ja bänditaidot** | **Uusi ehdokas** | Soittaminen rumpujen ja basson kanssa, muiden kuuntelu, sisääntulot, tauot, yhteiset lopetukset ja vuorovaikutus. |

**Harjoittelun menetelmät** (hidas toisto, vaikean kohdan eristäminen, muistista soitto, hajautettu kertaus, palautteen ymmärtäminen) ovat kaikkien aiheiden läpäisevä osa, eivät oletusarvoisesti 12. pääaihe.

**Rajojen tarkistus:** Rytmi, tekniikka, improvisaatio ja yhteissoitto menevät osittain päällekkäin; rajoja ei pidä väkisin pitää erillään. Esimerkiksi vaimennettu rytmikomppi kuuluu ensisijaisesti Rytmiin, vaikka kielten vaimennuksen tekniikan yksityiskohta linkittyisi Soittotekniikkaan.

## 3. Näkyvyyden ja julkaisun periaate: ei tyhjiä aiheita

**Oletusratkaisu: julkisessa Oppimiskartassa näytetään vain toimiva, riittävästi valmis sisältö.** Suunnitellut aiheet ja harjoitukset asuvat GitHubissa/kehitysdokumenteissa, eivät tyhjinä tai lukittuina käyttäjäkortteina. Ei `Tulossa pian` -kortteja oletusarvoisesti.

### Sisäinen tila, ei käyttäjän suoritusprosentti

- **Suunniteltu:** tavoite ja oppimissisällön ehdotus GitHubissa. **Ei julkisessa kartassa.**
- **Rakenteilla:** teoria, esimerkit ja tehtävät työn alla kehityshaarassa. **Ei julkaistuna pääaiheena.**
- **Katselmoitavana:** pienin merkityksellinen kokonaisuus valmis testattavaksi; voidaan näyttää vain nimenomaisessa esikatselussa.
- **Julkaisukelpoinen:** laatu- ja testikriteerit täytetty, käyttäjä/omistaja hyväksyy, julkaisu voidaan tehdä hallitusti.
- **Julkaistu:** näkyy Oppimiskartassa; etenemismittari kuvaa vain todellisia käyttäjälle käytettäviä tehtäviä.

Tämä on **toimintaperiaate**, ei vaatimus toteuttaa uutta tilarekisteriä tai piilottamislogiikkaa nyt. Ensin tutkitaan, sopiiko nykyiseen rakenteeseen yksinkertainen sisällön valinta ilman rinnakkaista järjestelmää.

### Milloin oma pääaihe on perusteltu?

1. Aiheella on yksiselitteinen **taitotavoite**: mitä oppija pystyy tekemään oikeasti soittamalla/kuuntelemalla.
2. On olemassa vähintään yksi **kokonainen käyttökelpoinen oppimisjakso**, ei vain otsikko ja linkkilista. Kokonaisuuden mahdolliset välineet valitaan pedagogisesti: esimerkki, lyhyt teoria, peli/kuuntelutehtävä, fyysinen soitto ja palaute siellä missä hyödyllisiä.
3. Harjoituksen onnistumista voi arvioida **rehellisesti**: klikkaus tai teoriavastaus ei yksin väitä todistavansa oikealla kitaralla osattua taitoa. Itsearviointi, pelitulos ja mahdollinen mikrofonihavainto erotetaan.
4. Aiheen sivu on hyödyllinen myös **ilman mikrofonia** eikä sen käyttäminen edellytä uutta tiliä, pelimoottoria tai pakollista vaiheputkea.
5. Äänet, palautteet, linkit, takaisin-/jatkoreitti, saavutettavuus ja mobiilikäyttö on testattu aiheeseen sopivasti; oikean kitaran tehtävä on kokeiltu oikealla soittimella, jos sitä luvataan.
6. Otsikko ja kuvaus vastaavat toteutettua sisältöä; keskeneräistä tulevaisuuslupausta ei mainosteta valmis-kortissa.
7. Omistaja hyväksyy julkaisun erikseen. Oppimisuudistuksen #54:n päätösportteja G1–G4 ei ohiteta.

**Pienin julkaistava kokonaisuus ei tarkoita, että jokaiseen aiheeseen pitää tehdä oma peli.** Usein nykyinen toimiva harjoitus + hyvä ohje ja käytännön soitto riittävät. Jos sisältö on vielä suppea, se voidaan näyttää nykyisen relevantin aiheen **sisäisenä oppimisjaksona**, eikä luoda uutta päävalikon korttia.

## 4. Hallittu laajentamisen tapa

### Ensin nykyinen kahdeksan aiheen versio kuntoon

1. Hyväksytään käynnissä oleva navigaation ja Kitaran perusteiden uudistus **omilla ehdoillaan**, mukaan lukien aiheen omat sivut, paluureitit, käytettävät sisällöt, otsikot ja saavutettavuus.
2. Inventoidaan nykyiset aiheet aidolla taulukolla: olemassa oleva teoriakappale, toimiva peli, oikean kitaran sovellus, mahdollinen ääniesimerkki, koeteltu käyttötapa ja aukko. Kuvan `0/x` ei ole sisältöauditointi.
3. Tarkistetaan jo käynnissä olevat rytmi-, asteikko-, sointu-, Säveljahti-, Riffikaiku- ja Ensikeikka-suunnitelmat. Ei toteuteta niitä toista kertaa uudella nimellä.
4. Valitaan **yksi** merkittävä taitopuute ja toteutetaan se ensin olemassa olevaan asiaankuuluvaan aiheeseen, jos ratkaisu pysyy näin selkeämpänä.
5. Päätetään vasta käyttäjätestin perusteella, ansaitseeko kokonaisuus oman pääkortin. Kortti lisätään näkyviin samassa julkaisussa kuin sen valmis sisältö.

### Esimerkki aiheiden läpi kulkevasta polusta

- A-mollipentatonisen hahmotus → Otelauta / Asteikot.
- Rytminen kahden tahdin fraasi → Rytmi.
- Bend + vibrato → Soittotekniikka ja ilmaisu (tai nykyisen harjoituksen sisäinen ohje).
- Kysymys–vastaus ja tauot → Improvisaatio ja fraasitus.
- Vastauksen soittaminen basson/rumpujen kanssa → Yhteissoitto, esimerkiksi tulevan Ensikeikka-/bänditreeniharjoituksen osana.

Oppija saa liikkua vapaasti. Sama teoria, harjoitus tai musiikillinen tilanne voidaan linkittää useampaan osaamistavoitteeseen, mutta **samaa sisältöä ei tarvitse kopioida erillisiksi järjestelmiksi**. Linkki sopivaan yhteiseen resurssiin on ensisijainen.

## 5. Auki jätettävät suunnittelupäätökset

- Ovatko kaikki kolme uutta aihetta lopulta itsenäisiä pääaiheita, vai osa nykyisiä? Päätetään toteutuvan sisällön ja käyttäjätestin perusteella.
- Millainen on mobiilissa luettava aihevalikko, jos näkyviä kortteja on 9–11? Mahdolliset ryhmittelyt tai tiivistykset testataan; ei lisätä uuden navigaatiotason vuoksi uutta navigaatiotasoa.
- Miten käyttäjän **suoritus**, sisällön **julkaisuvalmius** ja pedagoginen **osaaminen** erotetaan nykyisiä tallenteita rikkomatta?
- Mikä osa yhteissoittotaidoista on mielekästä tehdä Ensikeikan bänditreeneissä ja mikä omana oppimisjaksona?
- Mitkä tehtävät tarvitsevat uutta äänimateriaalia, oikealla kitaralla testattua palautetta tai todellisen käyttötilanteen?

## 6. Työn rajaus ja riippuvuudet

- **Ajoitus:** tehtävä #71 on tarkoituksella lykätty, kunnes nykyisen Oppimiskartan muutos on viimeistelty ja arvioitu. Tämä dokumentti ei ole toteutuskäsky.
- **Yläohjaus:** #54 (oppimisuudistus ja G1–G4); #49 (oppimisjaksojen yhteiset periaatteet).
- **Aihekohtaisia rinnakkaisia töitä:** #69 (rytmi ja komppi), #52 (asteikot ja moodit), #68 (bluesasteikko), #50 (Säveljahti), #48 (Sointipaja), [Ensikeikka-suunnitelma PR #66](https://github.com/ristotoivanen/Musiikin-kartta/pull/66).
- **Ei kosketa nyt:** Oppimiskartan käyttöliittymää, aiheiden näkyvyyttä, sovelluksen reittejä, sisältö-ID:tä, localStoragea, testejä, betaa, tuotantoa eikä Clauden/Codexin kehityshaaroja.
- **Hyväksyntä:** uuden aiheen tekninen tai pedagoginen julkaisu vaatii myöhemmän erillisen päätöksen.

### Päätös kirjattavaksi myöhemmin

**Tässä vaiheessa hyväksytty vain suunnittelun kohteeksi:** kolme lisäaihe-ehdokasta ja vaatimus estää tyhjien/heikkojen aiheiden julkaisu. **11 kortin toteutusta, nimiä, järjestystä tai ajoitusta ei vielä hyväksytä.**
