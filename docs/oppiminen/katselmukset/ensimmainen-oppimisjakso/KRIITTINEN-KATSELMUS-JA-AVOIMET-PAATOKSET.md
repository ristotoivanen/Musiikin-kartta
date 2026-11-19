# Ensimmäiset neljä iskua – kriittinen katselmus ja avoimet päätökset

**Tila:** 17.11.2026. Tämä on sisäinen katselmus, jonka on tehnyt sama tekijä kuin suunnitelman. Ulkoista musiikkipedagogin katselmusta, saavutettavuusasiantuntijan arviota tai käyttäjätestiä ei ole tehty.
**Kohde:**

- Tämän hakemiston kolme dokumenttia: [Pedagoginen käsikirjoitus](PEDAGOGINEN-KASIKIRJOITUS.md), [Musiikillinen sovellus](MUSIIKILLINEN-SOVELLUS.md) ja [A/E-vertailu ja testisuunnitelma](A-E-VERTAILU-JA-TESTISUUNNITELMA.md).
- PR #53:n luonnokset ([käsikirjoitus](https://github.com/ristotoivanen/Musiikin-kartta/blob/df160b0477b4af428b7bc49cf0f596ba3b34ea97/docs/oppiminen/ensimmainen-oppimisjakso-nelja-iskua-2026-11.md), [G1](https://github.com/ristotoivanen/Musiikin-kartta/blob/df160b0477b4af428b7bc49cf0f596ba3b34ea97/docs/oppiminen/g1-pilotin-katselmointi-ja-paatosrajat-2026-11.md)), joita ei ole muutettu.
- Betan nykytila `f9964c5`.

**Vakavuusluokat:**

- **Kriittinen:** estää tavoitteen tai antaa oppijalle väärää tietoa.
- **Korkea:** todennäköinen epäonnistuminen tai virheellinen osaamisväite.
- **Keskitaso:** heikentää oppimista, käytettävyyttä tai ylläpitoa.
- **Matala:** viimeistely.

**Tila-sarake:**

- *Korjattu* = korjattu tämän hakemiston dokumenteissa.
- *Avoin* = vaatii testin tai omistajan päätöksen.
- *Nykytila* = koskee betan koodia, jota tämä toimeksianto ei muuta.

---

## 1. Havainnot

### 1.1 Tavoitteen ja sisällön ristiriidat

| Nro | Vakavuus | Havainto | Lähde | Tila ja ratkaisu |
| --- | --- | --- | --- | --- |
| **H1** | Korkea | PR #53:n luonnoksen ja G1.3:n tavoite täyttyy myös taputtamalla. Omistajan tavoite edellyttää neljää ääntä oikealla kitaralla ja tarkoituksellista pysäytystä. Taputtaja merkittäisiin jakson suorittaneeksi ilman kitaraa. | Luonnos §1, G1.3 | **Korjattu.** Kitaravaihe V5 kuuluu ydinpolkuun. Kitaraton etenee V2:een asti, ja hänelle sanotaan suoraan, että tavoite vaatii kitaran (käsikirjoitus V2). |
| **H2** | Korkea | Luonnos sanoo sekä *valitsemallaan vapaalla kielellä* että *paksu E-kieli ehdotettu pilottiin*. Vapaa valinta lisää aloittelijalle päätöksen, eikä taustan sävelkorkeus sovi kaikkiin kieliin. | Luonnos §1 ja taitotaulukko, G1.3 | **Korjattu.** Kieli on aina 6. kieli. Perustelut ovat käsikirjoituksen luvussa 4.1. |
| **H3** | Korkea | Luonnoksessa kitaravaihe (kohta 4) on *valinnainen*, mutta P1 vaatii oikean kitaran harjoituksen. | Luonnos §2 | **Korjattu**, ks. H1. |
| **H4** | Keskitaso | Luonnos ei kerro, millä kädellä ja miten ääni pysäytetään (*koskettamalla kieltä kevyesti*). Plektran ja peukalon valinta on jätetty oppijalle. | Luonnos §2 kohta 4 | **Korjattu ehdollisesti.** Peukalo soittaa ja pysäyttää, ja plektran kanssa käytetään kämmensyrjää. Vahvistetaan testeillä T2 ja T8. |
| **H5** | Korkea | **Betan nykytila:** etusivun ainoa aloituslinkki vie harjoitukseen *02 / 04*, jonka äänite etenee 5,7 sekunnissa kahdeksasosiin ja G-komppiin. Seuraava harjoitus vaatii G-otteen. Yhden kielen soittovaihe puuttuu kokonaan. | `index.html`, `aiheet.json`, `oppi/rytmi/` | **Nykytila.** Suunnitelma korjaa puutteen. Koodiin ei kosketa tässä toimeksiannossa. |
| **H6** | Keskitaso | Luonnoksen kuuntelupelissä *kolmas isku* on aina siirretty aikaisemmaksi, ja palaute paljastaa paikan. Toistettaessa vastauksen voi muistaa. Kahden vaihtoehdon tehtävässä arvaus osuu 50 %:ssa. | Luonnos §2 kohta 3 | **Korjattu.** Siirretyn iskun paikka ja suunta vaihtelevat, ja kierroksia on kolme. Tulosta ei näytetä osaamisena (käsikirjoitus V2b ja Musiikillinen sovellus 2.1). |
| **H7** | Keskitaso | Luonnoksen *musiikillinen siirto* (*uudella kierroksella osa mallin iskuista hiljenee*) on määrittelemätön. Ei sävellajia, sointuja, tahtimäärää eikä oppijan roolia. | Luonnos §2 kohta 5 | **Korjattu.** *Ensimmäinen groove* on määritelty tarkasti (Musiikillinen sovellus, luku 3). |
| **H8** | Keskitaso | Luonnoksen onnistumisraja *suunnilleen saman pulssin tahdissa* ei kerro, milloin tavoite on saavutettu. | Luonnos §1 | **Korjattu.** Kolme kuultavaa ehtoa ja kaksi peräkkäistä onnistumista (käsikirjoitus 7.2). |
| **H9** | Matala | PR #53:n luonnoksen luvussa 3 lukee *valitsee neljästä tasaisista/epätasaisista vaihtoehdoista*, mutta muualla tehtävässä on kaksi näytettä. | Luonnos §3 taulukko | **Korjattu** tässä: kaksi näytettä. PR #53:ään ei kosketa. |
| **H10** | Matala | Dokumenttien tila on kirjattu eri tavoin: luonnos sanoo *valmis katselmoitava käsikirjoitus*, ARKISTOINTI-JA-JATKOTILA *luonnos odottaa hyväksyntää* ja G1 *päätösluonnos*. | PR #53 | **Korjattu** tässä: kaikki uudet ratkaisut on merkitty [Ehdotus]. |

### 1.2 Liian vaikeat tehtävät ja liian suuret tietovaatimukset

| Nro | Vakavuus | Havainto | Tila ja ratkaisu |
| --- | --- | --- | --- |
| **H11** | Korkea | **Oma suunnitelma:** V5b vaatii samanaikaisesti laskemisen, lyönnin ja pysäytyksen. Pysäytys osuu ykköselle, jolla oppija on juuri tottunut *soittamaan*. Tämä voi olla ensimmäisellä kerralla liian vaikeaa. | **Osin korjattu.** V5a (vain ykkösellä) tulee ensin, ja ✋ on ruudukossa. **Avoin:** kuivaharjoitus (testisuunnitelma 4.2) näyttää, tarvitaanko vielä välivaihe *soita neljä, pysäytä, tauko ilman naksutusta*. |
| **H12** | Keskitaso | Auditoinnin 06-dokumentin ensimmäisellä rivillä on mukana *kevyt painallus*, *asento* ja *vire ennen uuden korkeuden matkimista*. Ne ovat turhia esitaitoja vapaan kielen pulssitehtävälle. | **Korjattu.** Vasen käsi on pois kieliltä. Vire ei vaikuta V1–V5:een, ja V6:ssa se on valinnainen rivi (käsikirjoitus 5.3). |
| **H13** | Keskitaso | **Oma suunnitelma:** vaiheita on kahdeksan (V0–V7). Ensimmäinen käynti voi tuntua pitkältä. | **Korjattu rajaamalla.** Ydinpolku on V0, V1, V3, V4, V5 ja V7, kesto 6–10 min, ja V2 ja V6 ovat valinnaisia. **Avoin:** todellinen kesto mitataan kuivaharjoituksessa. |
| **H14** | Matala | Kielen nimi *E* ja numero *6.* näytetään, vaikka niitä ei tarvita. Ne voivat tuntua vaatimuksilta. | **Korjattu.** Tekstissä lukee *nimeä ei tarvitse vielä muistaa*, eikä nimeä kysytä missään. |
| **H15** | Keskitaso | Vaiheen 2 (toinen sävel) *Em kaksi tahtia, Am kaksi tahtia* vaatii tahtien laskemista. Sitä ei opeteta tässä jaksossa. | **Avoin, hyväksytty riski.** Mallibasso (M2c) on käytössä helpotuksena. Vaihe 2 on jakson jälkeinen jatko, ei osa tavoitetta. |

### 1.3 Puutteelliset ohjeet

| Nro | Vakavuus | Havainto | Tila ja ratkaisu |
| --- | --- | --- | --- |
| **H16** | Korkea | Mikään aiempi luonnos ei kerro, että **vasemman käden lepääminen kielillä tukahduttaa vapaan kielen**. Se on aloittelijan yleisimpiä syitä siihen, ettei ääntä kuulu. | **Korjattu.** V4:n ensimmäinen ohje ja vianmäärityksen ensimmäinen rivi. |
| **H17** | Keskitaso | Vasenkätinen, joka soittaa oikeakätistä kitaraa ylösalaisin, löytää ohjeella *lähimpänä kasvoja* väärän kielen. | **Korjattu.** V3:ssa on lisärivi *etsi aina paksuin kieli*. |
| **H18** | Keskitaso | Löysän tai katkenneen kielen ja soittimen säätöongelman erottaminen soittajan virheestä puuttui. | **Korjattu.** Vianmääritys (käsikirjoitus 5.1). Viimeinen rivi on aina *rytmitehtävä onnistuu silti*. |
| **H19** | Matala | Betan *Löydä pulssi ja ykkönen* -sivu pyytää soittamaan alkuperäisen levyn, jota ei ole sivustolla. | **Nykytila.** Ei kuulu tähän toimeksiantoon. Kirjataan jatkohuomioksi. |

### 1.4 Musiikillisesti epätarkat tai varmistamattomat kohdat

| Nro | Vakavuus | Havainto | Tila ja ratkaisu |
| --- | --- | --- | --- |
| **H20** | Korkea | **Oma suunnitelma:** E-pedaali Am-soinnun alla tekee soinnusta käännöksen Am/E. Kuulostaako se aloittelijan korvaan oikealta? Tätä ei ole kuunneltu. | **Avoin.** Testi T3. Varavaihtoehto E5–A5 on valmiina (Musiikillinen sovellus 3.5). |
| **H21** | Keskitaso | Mallibasson E2 (82 Hz) ei välttämättä kuulu puhelimen kaiuttimesta. Kaiuttimen perusääni heikkenee yleensä alle noin 150–200 Hz:n. Kuuluvuus riippuu yläsävelistä. | **Avoin.** Testi T5 ja ensimmäinen renderöinti. Mallibasson tasoa ja sointia säädetään. Mallia ei siirretä oktaavia ylemmäs, koska sen pitää kuulostaa samalta kuin oppijan kieli. |
| **H22** | Keskitaso | Kuuntelutehtävän ±150 ms on arvioitu kuultavaksi, mutta arvo ei perustu mittaukseen eikä tähän tehtävään sovellettuun lähteeseen. | **Avoin.** Testi T6 ensimmäisen renderöinnin yhteydessä. Säätöväli on 100–200 ms. |
| **H23** | Keskitaso | Tempo 72 BPM on kompromissi PR #53:n 60–72:n ja nykyisen 84:n välillä. Liian hidas tempo voi olla aloittelijalle vaikeampi kuin keskitempo, koska iskujen väli on pitkä. | **Avoin.** Testi T1. |
| **H24** | Keskitaso | Issuen #45 tekninen kommentti 15.11. ehdottaa *rumpu-/bassotaustaa*. Tämä suunnitelma poistaa basson taustasta tarkoituksella, jotta oppijan rooli on aito. | **Tietoinen poikkeama**, perusteltu (Musiikillinen sovellus 3.2). Omistaja hyväksyy tai hylkää päätöksessä P2. |
| **H25** | Keskitaso | Kolme cowboyta -taustan oikeusasemaa ei ole selvitetty. Siltavaihe ja askel 4 riippuvat siitä. | **Avoin.** Ei estä jakson ydintä, koska se käyttää uutta aineistoa. Omistajan aiempi tai erillinen arvio. |

### 1.5 Harjoituksen läpäisy ja todellinen osaaminen sekoittuvat

| Nro | Vakavuus | Havainto | Tila ja ratkaisu |
| --- | --- | --- | --- |
| **H26** | Korkea | Aloittelija ei aina kuule omaa jälkeen jäämistään tai kiirehtimistään. Kahden kierroksen itsearvio voi olla väärä positiivinen. | **Osin korjattu.** Kirjaus on nimetty itsearvioksi, eikä prosentteja tai pisteitä näytetä. Käyttäjätestissä on erillinen havainnoija. Valinnainen oma äänitys puhelimeen auttaa kuulemaan. **Avoin:** tarkempaa automaattista näyttöä ei ole ilman mikrofonia, eikä sitä tavoitella tässä jaksossa. |
| **H27** | Keskitaso | Vaihtoehdon A *Merkitse harjoitus tehdyksi* näyttää samalta kuin muiden harjoitusten tehdyksi merkitseminen, vaikka tässä se tarkoittaa itsearvioitua kitarasuoritusta. | **Korjattu ohjeena:** painikkeen yhteydessä lukee *oma arviosi*. Jos sivupohja ei salli tekstiä, asia kirjataan toteutuksen hyväksymiskriteeriksi. |
| **H28** | Keskitaso | Kuuntelutehtävän *3/3 oikein* voi näyttää osaamiselta, vaikka arvaamalla saa saman 12,5 %:n todennäköisyydellä. | **Korjattu.** Tulosta ei näytetä käyttäjälle osaamisena (käsikirjoitus 7.1). |

### 1.6 Ylimääräiset valikot, vaiheet ja päällekkäisyys nykyisten ominaisuuksien kanssa

| Nro | Vakavuus | Havainto | Tila ja ratkaisu |
| --- | --- | --- | --- |
| **H29** | Keskitaso | Vaihtoehto E loisi neljännen sijainnin pulssiaiheelle (teoriaosa 1, Rytmi-aihe, Kitaran perusteet ja E-näkymä). E toistaisi lisäksi sivupohjan navigaation, paluun, tehdyksi merkitsemisen ja soittimen. | **Huomioitu.** A on alustava suositus. Jos E tehdään, se käyttää samaa tallennusavainta ja tyylejä (A/E-vertailu 2.2). |
| **H30** | Keskitaso | Vaihtoehto A muuttaa Rytmi-harjoitusten numerot (*02 / 04* → *03 / 05*) ja aiheen edistymislaskurin. | **Avoin.** Päätös P5. Tallennusavaimet eivät muutu. |
| **H31** | Matala | Tempovalinta voisi kasvaa asetusvalikoksi. | **Korjattu.** Tempovalinta on vain *Hitaampi versio* -linkki V5:ssä ja V6:ssa (käsikirjoitus 9.5). |
| **H32** | Matala | Ajastettu 1–2–3–4-korostus näytöllä olisi houkutteleva, mutta äänen ja näytön synkronointia ei ole mitattu. | **Korjattu.** Ei ensimmäisessä versiossa, vaan staattinen ruudukko (käsikirjoitus 9.4). |
| **H33** | Matala | Erillinen viritin ja metronomi (#84) ovat päällekkäisiä M0:n ja V6:n viritysrivin kanssa. | **Huomioitu.** M0 on jakson oma raita. Viritysrivi osoittaa #84:ään, kun se on valmis. |

### 1.7 Saavutettavuus

| Nro | Vakavuus | Havainto | Tila ja ratkaisu |
| --- | --- | --- | --- |
| **H34** | Keskitaso | Tavoite on kuulonvarainen. Kuurolle tai huonokuuloiselle ei ole vastaavaa reittiä: visuaalinen laskuri jätetään pois (H32), ja värinää ei voi käyttää iOS-selaimessa. | **Avoin, tietoinen rajaus.** Tekstivastine kuvaa äänitteet mutta ei väitä korvaavansa kuuntelua. Kirjataan rajoitukseksi, ja visuaalinen tahdistettu malli arvioidaan erikseen synkronointimittauksen jälkeen. |
| **H35** | Keskitaso | Natiivin soittimen ■ voi olla iOS:llä pieni, kun kitara on sylissä. | **Avoin.** A/E-vertailun ehto 2. Testataan teknisessä testissä (4.3). |

---

## 2. Dokumentaation sisäiset ristiriidat, jotka korjattiin tämän hakemiston dokumenteissa

| Ristiriita | Missä | Korjaus |
| --- | --- | --- |
| Tavoite *taputtamalla tai kitaralla* vs. omistajan *oikealla kitaralla* | PR #53:n luonnos ja G1 vs. toimeksianto | H1 |
| *Vapaa kieli* vs. *paksu E-kieli* | Luonnos | H2 |
| Kuuntelutehtävässä *neljästä* vs. *kahdesta* näytteestä | Luonnos §2 vs. §3 | H9 |
| Kolme eri tilamerkintää (*valmis*, *luonnos*, *päätösluonnos*) | PR #53 | H10 |
| Basso taustassa (#45-kommentti) vs. oppija bassona | #45 vs. tämä | H24, tietoinen poikkeama |
| **Omat dokumentit:** M2-tiedostojen nimet (M2b ja M2d) vs. *M2-tausta*, helpotusten järjestys ja silmukan toteutustapa | Käsikirjoitus vs. Musiikillinen sovellus vs. A/E | Yhtenäistetty ennen commitia: M2-tausta, mallibasso ensimmäisenä helpotuksena, 16 tahdin M0 ja selaimen `loop` sallittu ilman saumattomuuslupausta |
| **Omat dokumentit:** paluulinkki teoriasta harjoitukseen oletettiin olemassa olevaksi | A/E 2.1 | Tarkistettu: `data-return-topic` palauttaa Oppimiskartan aihekorttiin, ei teoriaoppaasta harjoitukseen. A/E-tekstiä korjattu. |

PR #53:n tiedostoja ei ole muutettu. Ristiriidat on kirjattu tähän, jotta ne voidaan korjata PR #53:ssa omistajan päätöksellä.

---

## 3. Mikä jää musiikilliseen hyväksyntään

1. **Tempo:** 72 BPM perustempona ja 60 BPM helpotuksena (testi T1).
2. **Sointutausta:** Em–Am vai E5–A5 (T3), ja kuuluuko E-pedaali Am:n alla hyväksyttävältä.
3. **Taustan rakenne:** ei bassoa, hi-hat neljäsosina, rytmikitara puolinuotteina kielillä 4–1, lopetusisku tahdin 9 ykkösellä.
4. **Mallibasson taso ja kuuluvuus** puhelimen kaiuttimesta (T5, renderöinnin jälkeen).
5. **Vaimennustapa** (T2) ja peukalo vai plektra (T8).
6. **Kuuntelutehtävän siirron suuruus** (T6, renderöinnin jälkeen).
7. **Silta Kolme cowboyhin** (T7) ja Kolme cowboyta -aineiston oikeusarvio (H25).
8. **Lopullinen kuuntelu** renderöidyistä M0–M3:sta kuulokkeilla ja puhelimen kaiuttimella ennen julkaisua.

---

## 4. Päätökset, jotka omistajan on tehtävä ennen toteutusta

### Viisi pääpäätöstä

| Nro | Päätös | Vaihtoehdot | Suositus | Tarvittava tieto |
| --- | --- | --- | --- | --- |
| **P1** | **Hyväksytäänkö jakson tavoite ja ydinpolku?** Kitara on pakollinen tavoitteen saavuttamiseen, kieli on 6. kieli, peukalo soittaa ja pysäyttää, ja onnistuminen on kaksi peräkkäistä V5b-kierrosta itsearvioituna. | Hyväksy, muuta tai palauta PR #53:n *taputtamalla tai kitaralla* -linja | Hyväksy, ehtona T2 ja T8 | Huomisen testit T1, T2 ja T8 |
| **P2** | **Hyväksytäänkö uusi alkuperäinen aineisto?** M0–M3 ja *Ensimmäinen groove* (Em–Am tai E5–A5, ei bassoa, 8 tahtia), renderöitynä oppaan omalla generaattorilla. Vai käytetäänkö ensimmäisenä sovelluksena olemassa olevaa Kolme cowboyta -taustaa? | Uusi aineisto, olemassa oleva tausta tai molemmat porrastettuna | Uusi aineisto ensin ja Kolme cowboyta askeleena 4 | T3, T4 ja T7 sekä H25 |
| **P3** | **A vai E ja missä järjestyksessä?** | (a) A ensin, E vain jos A:n testi osoittaa luvun 4.4 mukaisen puutteen. (b) A ja E rinnakkain vertailuun. (c) Suoraan E. | (a) | Työmäärän hyväksyminen. Käyttäjätestin järjestäminen (P4) |
| **P4** | **Tehdäänkö käyttäjätesti ja kenellä?** Testi tehdään kuivaharjoituksena 1–2 aloittelijalla ennen koodia ja A/E-testinä 4 + 4 + 2 toteutuksen jälkeen. Samalla päätetään tietojen käsittely. | Molemmat, vain kuivaharjoitus tai ei käyttäjätestiä (silloin vain omistajan oma arvio) | Molemmat. Kuivaharjoitus heti, kun aloittelija on saatavilla. | Osallistujien saatavuus. Suostumus ja muistiinpanojen säilytys |
| **P5** | **Mihin etusivun aloitus osoittaa, ja muuttuuko Rytmi-aiheen numerointi?** | Uusi oppitunti Rytmi-aiheen ensimmäiseksi (numerot siirtyvät) tai numeroimaton *Aloita tästä* -oppitunti ennen numeroituja | Numeroimaton, jos generaattori sen sallii. Muuten siirtyminen hyväksytään. | Generaattorin `aiheet.json`-rakenteen tarkistus toteutusvaiheessa |

### Pienemmät avoimet kysymykset

Nämä eivät estä toteutusta, mutta ne kannattaa sopia samalla:

- Jakson nimi käyttöliittymässä: *Ensimmäiset neljä iskua* (toimeksiannon nimi) vai PR #53:n *Soita ensimmäiset neljä iskua*. Tämä dokumentti käyttää toimeksiannon nimeä.
- V3:n valokuva: kuka ottaa sen, millä kitaralla, ja tarvitaanko myös sähkökitarasta oma kuva.
- Tehdäänkö ruudun naputus (tasaisuuden mittaus ilman kitaraa) myöhemmin? Vaatii laiteviiveen vaihtelun mittauksen ensin (käsikirjoitus 7.1).
- Kuurojen ja huonokuuloisten vaihtoehto (H34).
- PR #53:n luonnoksen ristiriitojen (luku 2) korjaus: tehdäänkö se PR #53:ssa vai korvaako tämä katselmus luonnoksen ensimmäisen jakson osalta?

---

## 5. Mitä tämä katselmus ei tee

- Ei toteuta sivuja, soitinta, äänitteitä eikä testejä.
- Ei muuta PR #53:n, muiden haarojen tai muiden agenttien työtä.
- Ei väitä mitään tutkimusnäyttöä tai käyttäjätestin tulosta.
- Ei vahvista oikeuksia. Luvun 3 kohdat 2 ja 7 sekä Musiikillisen sovelluksen luku 6 ovat arvioita.
- Ei korvaa ulkoista musiikkipedagogista arviota, jonka G1 ja auditoinnin jatkotila edellyttävät.
