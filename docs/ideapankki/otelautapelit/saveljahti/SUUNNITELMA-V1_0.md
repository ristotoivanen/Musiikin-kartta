# Musiikin kartta – Säveljahti / Sävelketju
## Suunnitelma v1.0: kahden riippumattoman auditoinnin jälkeen

**Päiväys:** 23.11.2026  
**Tila:** suunnittelullisesti viimeistelty toteutuksen päätöspohja. **Ei toteutus-, PR-, beta- tai tuotantojulkaisulupaa.**  
**Kohderyhmä:** noin 1–2 vuotta kitaraa soittaneet, jotka tuntevat kitaran perusteet mutta eivät vielä hahmota sävelten sijainteja ja niiden välisiä yhteyksiä otelaudalla luontevasti.  
**Sijainti:** Musapelit → Säveljahti. **Sävelketju** on uuden pelin ydinmekaniikka.  
**Lähteet:** v0.9-suunnitelma, kaksi 23.11.2026 riippumatonta auditointia, GitHub #43/#49/#50, PR #46/#179 ja nykyinen beta-koodi. Auditointien laskut ovat niiden käyttämien sääntömääritelmien mukaisia, eivät mittaus pelin kiinnostavuudesta.

---

## 1. Tuotelupaus ja rajaus

**Pelaaja oppii löytämään nimettyjä säveliä kuusikieliseltä kitaralta ja ymmärtämään, miten saman sävelen eri paikat, täsmälleen samankorkuiset äänet, oktaavit ja sävelaskeleet liittyvät toisiinsa.** Jokainen hyväksytty löytö toimii seuraavan johtolangan lähtökohtana. Näin ketju rakentuu osittain pelaajan omista valinnoista eikä pelkästä ennalta määrätystä kysymysjonosta.

V1 ei ole alkeiskurssi eikä absoluuttisen sävelkorvan testi. Se ei väitä osoittavansa fyysisen kitaran hallintaa vain verkkopainallusten perusteella. Peliin sisältyy siksi erillinen, **vapaaehtoinen ja ratkaisun piilottava fyysisen kitaran siirtotehtävä**. V1 ei kuuntele mikrofonia eikä vahvista soittosuoritusta automaattisesti.

Pelissä ei ole pakollisia avauksia/lukituksia, ajastinta, pistevähennyksiä, pakollista ohjevelhoa, päivittäisiä tehtäväputkia tai laajaa tulosprofiilia. Peli käynnistyy suoraan ymmärrettävään tehtävään, ja alueen sekä ketjutyypin voi vaihtaa vapaasti.

### Hyväksytyt lähtöperiaatteet

1. **Vähimmäisalue on 0–5**, aina kaikki kuusi kieltä ja nauha 0 eli vapaa kieli. Tätä pienempää pelialuetta ei tarjota.
2. **Laajempi 0–12** on heti vapaasti valittavissa. Molemmat kuuluvat v1:een.
3. Valittu paikka soi **jokaisella otelautanapautuksella**: oikein, väärin, jo löydetty ja valmistuneen ketjun jälkeen. Ääni vastaa täsmälleen kyseisen kielen ja nauhan **soivaa korkeutta**.
4. Pelaajan oikea sijaintivalinta vaikuttaa jatkomahdollisuuksiin. **Seuraavan johtolangan antaa peli automaattisesti**, ei jatkuva kahden valikkovaihtoehdon tarjoaminen.
5. Pelissä on kaksi ketjuperhettä: **Saman sävelen jäljillä** ja **Seuraa säveliä**. Molemmat ovat vapaasti valittavissa. Jälkimmäisessä vähintään yhden ketjusiirtymän pitää todella vaihtaa sävelnimeä.
6. Löytöjen muisti, äänen vertailu, paikan nimen tunnistaminen ja oikealla kitaralla testaaminen erottuvat toisistaan: niitä ei tulkita yhdeksi mittariksi.

---

## 2. Kohderyhmän vaatima pedagogiikka

Kohderyhmä tuntee todennäköisesti kielten ja nauhojen merkityksen ja saattaa soittaa sormituskuvioita, pentatonisia asteikkoja sekä tuttuja riffejä. Vaikeus voi silti olla esimerkiksi sävelen **C** löytäminen toiselta kieleltä ilman asteikkokuvion mekaanista muistelua. V1:n pitää haastaa nimenomaan tätä osaamisaukkoa.

Harjoitetaan kolmea toisiaan täydentävää taitoa:

- **Nimi → paikka:** ”Etsi C” tai ”Etsi edellistä paikkaa oktaavia korkeampi C”. Pelaaja paikantaa sävelen.
- **Paikka → nimi:** ”Mikä sävel on D-kielen 5. nauhalla?” Pelaaja päättelee vastauksen ennen kuin oikea nimi paljastetaan. Tämä tapahtuu tarkoituksenmukaisessa tunnistustehtävässä, ei tehtävässä, jonka otsikko jo kertoo vastauksen.
- **Suhde → siirtymä:** ”Etsi yhtä korkealta soiva paikka toiselta kieleltä” tai ”Etsi kokosävelaskelta korkeampi sävel; mikä sen nimi on?” Pelaaja yhdistää otelaudan rakenteen musiikilliseen sääntöön.

V1:n kierrosvalikoimassa on oltava **aidosti ratkaistavia paikka → nimi -tehtäviä**. Saman C-sävelen ketjun keskelle ei lisätä keinotekoista kysymystä ”Mikä tämän C:n nimi on?”. Tällainen täyttäisi auditoinnin tarkistuslistan mutta ei opettaisi mitään. Paikasta nimeen -tunnistus tarjotaan omana **vaihtuvana aloitustehtävänään** tai vaihtuvan nimen ketjun selkeänä vaiheena. Kahden peräkkäisen suositellun jahdin kokonaisuudessa on aina vähintään yksi todellinen nimeämistehtävä. Käyttäjä voi silti valita ja pelata saman nimen ketjuja vapaasti. Pelin yhteenvedossa erotellaan, mitä tehtävätyyppejä juuri siinä suoritettiin.

**Säännöt ja kiintopisteet** tuodaan esiin tilanteen mukaan: nauha nostaa säveltä puoliaskelen, naapurikielten perusväli on yleensä viisi puolisävelaskelta (G–B-välissä neljä), saman korkuinen sävel löytyy toiselta kieleltä tietyllä nauhasiirrolla, ja saman kielen 12. nauha soi oktaavia avointa korkeampana. Vihje ei muutu pakolliseksi teoriatunniksi. Tuttu H/B-nimitysten selitys jää Kitaran perusteisiin.

### Fyysinen siirtovaikutus

Kierroksen lopussa tarjotaan **”Kokeile omalla kitaralla”**. Ensin otelauta ja paikkaratkaisut piilotetaan. Tehtävä nimeää vähintään yhden kohdesävelen ja tarvittaessa kielen: esim. **”Soita C B-kieleltä ilman mallia.”** Pelaaja voi kuunnella vertailuäänen, pyytää lievän vihjeen tai paljastaa paikan. Paljastuksen jälkeen tehtävä on harjoiteltu, ei itsenäisesti todennettu. Peli ei kirjaa pelaajan väittämää onnistumista automaattisesti varmistetuksi. Uutta, edellisestä ketjusta poikkeavaa paikkaa voidaan käyttää valinnaisessa jatkohaasteessa. Vasta kohderyhmän käyttäjäkoe kertoo, siirtyykö taito oikeaan kitaraan.

---

## 3. Käyttöpolku ja pelinäytön rakenne

**Avaus:** suoraan otelaudalle ja yhteen tehtävään, esimerkiksi ”Löydä jokin F”. Ensimmäisessä avauksessa alue 0–5 on näkyvissä, ja **0–12 on yhtä selkeästi tarjolla** merkinnällä ”Laajempi jahti, suositeltava kun perusteet ovat tuttuja”. Tämä on tarkoituksellinen kompromissi: helppo kokeilla ilman asetusruljanssia, mutta kohderyhmää ei pidetä alkeistasolla. V1 muistaa valitun alueen saman istunnon aikana.

**Näkymän pysyvät osat:** (1) nykyinen johtolanka, (2) viimeisin hyväksytty lähtöpaikka, kieli ja soiva korkeus, (3) löydöt ja niiden lukumäärä, (4) otelauta, (5) palaute/vihje. Uuden johtolangan automaattinen ilmestyminen ei saa pyyhkiä edellisen löydön selitystä pois: ”Edellinen löytö” säilyy omassa rivissään. Käyttöliittymä ei näytä kahta kilpailevaa päätehtävää.

**Kierros:** kolme **eri kieli+nauha-paikkaa** on valmis ketju. Mahdollinen neljäs on *erillinen vapaaehtoinen jatko*, joka voidaan näyttää vasta, jos sen kelpoisuus on laskettu kaikkien hyväksyttävien vastausten kannalta. Pelaajalle ei luvata alussa ”neljää löytöä”. Ensimmäinen paikka saa olla mikä tahansa aloitustehtävän ehtoja vastaava paikka, ellei kierros ole nimenomainen paikka → nimi -tunnistusaloitus.

**Valmis kierros:** otelauta pysyy näkyvissä ja napautettavissa. Näytetään löydöt oikeassa järjestyksessä, niiden suhteet, kuvaava oppimishavainto, **Kuuntele ketju**, **Kokeile omalla kitaralla**, **Uusi jahti** sekä ketjuperheen/alueen vaihto. Ei automaattista siirtymää eikä päälle liimattua palkintoruutua.

### Kaksi ketjuperhettä

**Saman sävelen jäljillä:** kaikki ketjun varsinaiset löytöpaikat ovat samaa sävelluokkaa; ne voivat soida yhtä korkealla tai eri oktaaveissa. Peli painottaa eroa ”sama nimi” ja ”täsmälleen sama korkeus”. Kaikki valitut paikat jäävät kartalle. Perhe voi silti sisältää turvallisen nimeämisaloituksen, jossa kohdesävel ei ole vielä näkyvissä.

**Seuraa säveliä:** ketjun ainakin yksi siirtymä vaihtaa todellisuudessa sävelluokkaa. Muita siirtymiä voivat olla oktaavi, unisono tai toinen nimetyn sävelen paikka. Askelsiirtymät eivät jää pelkäksi nauhojen laskemiseksi: ennen kohdepaikan hyväksymistä pelaaja nimeää tarvittaessa tuloksena olevan sävelen, esim. F → G, ja sen jälkeen etsii paikan. Tässä nimivaiheessa ei vaadita absoluuttista sävelkorvaa.

**Kierrosperheen valinta:** suositeltu seuraava perhe vuorottelee istunnossa, mutta **vaihtoehto on aina käyttäjän valittavissa** kevyenä valintana. Ei pakollista monitasoista valikkoa.

---

## 4. Musiikillinen tietomalli ja tarkat tehtäväehdot

Vakiovire soivina MIDI-arvoina: **paksu E2=40, A2=45, D3=50, G3=55, B3=59, ohut e4=64**. Harjoittelijan lähdekoodissa kieli-indeksi **0 tarkoittaa ohuinta e-kieltä**, **5 paksuinta E-kieltä**. PR #179:n paikallinen järjestys alkaa paksusta E:stä. Näitä ei saa sekoittaa. Testit nimeävät kielen eksplisiittisesti eivätkä nojaa muuttuviin indekseihin.

- **Sijainti:** `(string, fret)`; `fret=0` on vapaa kieli.
- **Soiva korkeus:** `midi = openMidi[string] + fret`.
- **Sävelluokka:** `midi mod 12`, esimerkiksi C3, C4 ja C5 kuuluvat C-sävelluokkaan.
- **Sama sävelkorkeus:** täsmälleen sama MIDI, vaikka kieli vaihtuu.
- **Oktaavi:** täsmälleen ±12 MIDI-yksikköä, ei vain epämääräisesti ”ylempänä”.
- **Sama nimi:** sama sävelluokka, riippumatta oktaavista. Tämä ei takaa samaa MIDIä.
- **Uusi löytö:** kyseistä `(string,fret)`-paria ei ole jo hyväksytty saman ketjun löydöksi.

**Näkyvän tehtävän relaatiot:**

| Tunnus | Tehtävätyyppi | Kelpoisuuden ehto | Pelaajan oppima yhteys |
|---|---|---|---|
| S1 | Sama korkeus toiselta kieleltä | uusi paikka, `new.midi=old.midi`, `new.string != old.string` | unisono eri kielillä |
| S2 | Oktaavia korkeampi | uusi paikka, `new.midi=old.midi+12` | tarkka oktaavi |
| S3 | Oktaavia matalampi | uusi paikka, `new.midi=old.midi-12` | tarkka oktaavi |
| S4 | Toinen saman niminen | uusi paikka, `new.pc=old.pc` | kaikki sävelluokan paikat; **vain sisäinen varajohdantotyyppi / harkittu avoin etsintä** |
| A1 | Puoliaskel, kohdennettu | uusi paikka samalla kielellä, nauha ±1; määritelty suunta | puoliaskel ja kohdesävelen nimi |
| A2 | Kokoaskel, kohdennettu | uusi paikka samalla kielellä, nauha ±2; määritelty suunta | kokoaskel ja kohdesävelen nimi |
| N1 | Paikka → nimi -tunnistus | näytetty kieli+nauha, pelaaja valitsee sävelnimen **ennen oikean nimen näyttöä** | sävelkartta ilman valmista vastausta |

N1 on **tehtävän vastausvaihe tai aloitus**, ei vaatimus saada ketjun ketjuun neljättä erillistä sijaintia. N1 voidaan liittää yhteen ketjun varsinaiseen löytöön. N1:ssä paikka tiedetään, mutta vastausta ei näytetä eikä lausuta ennen nimeämisyritystä. Jos pelaaja koskettaa paikkaa, **se soi normaalisti**; oikeaa nimeä ei paljasteta ennen vastausta. Nimeäminen tehdään ilman absoluuttisen sävelkorvan vaatimusta käyttämällä kielen ja nauhan tietoa. Väärä nimivastaus antaa oikean nimen ja sallii jatkamisen avustetusti. N1 ei saa olla triviaali, esimerkiksi kysyä valmiiksi nimetyssä C-jahdissa ”Mikä sävel tämä C on?”.

**V1:n ulkopuolelle omana näkyvänä tehtävänään:** L1 ”vapaa kieli ↔ 12. nauha”. Se voidaan tarjota S2/S3:n sanamuotona ja vihjeenä. Ei erillistä samaa asiaa mittaavaa sääntöä. S4 on sallittu mutta näkyy vain, kun avoin sama nimi -etsintä on pedagogisesti mielekäs, ei kolmea kertaa peräkkäin täyttämään generaattorin aukkoja.

**Sävelnimet:** noudata projektin olemassa olevaa nimikäytäntöä; v1 voi näyttää kromaattisen enharmonisen vaihtoehdon pienellä lisätekstillä, esimerkiksi C♯ (D♭). Älä vaihda kielten ja sävelten kirjoitusasua hiljaisesti PR #179:n toteutuksen mukaan. Pelaajatekstissä on ”B-kieli, 1. nauha”, ei moniselitteinen ”B1”. Soiva oktaavimerkintä (esim. C4) esitetään tukitietona, ei oletettuna esitietona; transponoivan kitaran nuottikirjoituksen ja soivan korkeuden ero ei kuulu tämän pelin opetusvelvoitteisiin.

---

## 5. Generaattorin sopimus: kaikkien oikeiden vastausten takuu

**Yksi onnistuva polku ei riitä.** Jokainen ennen näyttämistä hyväksytty johtolanka on turvallinen **jokaiselle mahdolliselle oikealle vastaukselle**, ei vain ennakkoon valitulle esimerkkipolulle.

**V1:n muodolliset säännöt:**

1. Alue on aina joko kaikki 36 paikkaa (0–5) tai kaikki 78 paikkaa (0–12). Istunnon aikana yksittäisen vastauksen saa kohdistaa tiettyyn kieleen, mutta alueesta ei piiloteta muita kieliä tai nauhaa 0.
2. Tavallisen ketjun ensimmäisen tehtävän kohdesävelnimi on jokin seitsemästä luonnollisesta sävelestä. Kaikki ensimmäisen vihjeen oikeat sijainnit ovat hyväksyttäviä. **N1-aloitus** voi vaihtoehtoisesti nimetä tietyn ennalta valitun luonnollisen sävelen paikan ilman, että sävelnimi on näkyvissä; tällöin sen jälkeiset löytötehtävät muodostuvat todellisen alkupaikan perusteella.
3. Kaikki uudet hyväksytyt löytöpaikat ovat eri sijainteja. Väärä painallus, jo löytyneen napautus ja kuuntelu eivät muuta lähtötilaa.
4. Generaattorin ehdokasvihjeen vastausjoukko on **kaikki** alueen käyttämättömät sijainnit, jotka täyttävät vihjeen tarkasti. Ei piilotettua ”ainoaa haluttua” paikkaa.
5. Ehdokasvihje hyväksytään näytettäväksi vain jos sen vastausjoukko ei ole tyhjä ja **jokaisen** vastauksen jälkeen on olemassa sallittu jatko ketjun jäljellä oleviin löytöihin. Vaihtuvan nimen perheen tapauksessa jäljellä olevan polun on sisällettävä vähintään yksi toteutunut nimenmuutos, ellei se ole jo tapahtunut.
6. Kolme eri löytöä muodostaa aina päättyvän valmiin kierroksen. Neljänteen ei sitouduta ennen erillistä tarkistusta, eikä neljännen löytymistä vaadita koskaan. Jos hyvää neljättä ei ole, näytetään vain **Uusi jahti**.
7. **Enintään kaksi samaa näkyvää suhdetta peräkkäin**; geneeristä S4:ää ei käytetä näennäisenä vaihteluna. Jos lisärajoite tekee kolmen löydön lupauksesta mahdottoman, generaattorin tarkistus ei saa ohittaa sitä hiljaisesti: suunnittelussa sallitaan vain testattu reitti tai palautetaan tilaan sopiva tarkasti kuvattu avoin löytö ilman harhaanjohtavaa suhdelupausta.
8. Siemenohjattu vaihtelu palvelee testeissä toistettavuutta. Tuotannossa valinnassa suositaan istunnossa vähän nähtyjä sävelnimiä, kieliä ja todellisia suhdeluokkia. Satunnaisuus ei syrjäytä kelpoisuustarkastusta.

**Ydinalgoritmi (määrittely, ei toteutuskoodi):**

```
viable(state, findsRemaining):
  if findsRemaining == 0:
    return täyttyvätkö perheen tavoitteet (mm. nimenmuutos)
  for each allowed clue in candidateClues(state):
    answers = all correct, not-yet-used positions for clue
    if answers is nonempty AND
       every answer in answers satisfies viable(state + answer, findsRemaining - 1):
       return true
  return false

nextClue(state):
  keep only clues whose every correct answer has a viable continuation
  choose among them using meaningful musical variety and session history
```

Ensimmäisen aloituskehotteen turvallisuus tarkistetaan samalla periaatteella **kaikille sen sallimille lähtöpaikoille**. Tunnistusvaihe, paljastuksen kautta eteneminen ja vaihtuva nimi on sisällytettävä tilatestiin. Syvyyshaku voi olla pieni, koska 36/78 sijaintia ja kolmen löydön perusmitta ovat rajalliset.

**Auditointien lukujen tulkinta:** ensimmäisessä auditoinnissa on varmistettu kolmen löydön mahdollisuus molemmissa perheissä jokaisesta luonnollisen sävelen aloituksesta; saman nimen neljän löydön universaali takuu puuttuu 0–5-alueella puolelta aloituksista. Toisen auditoinnin neljän löydön kattavuus käyttää laajempaa tehtäväjoukkoa eikä ole sama lupaus. **V1 ei käytä kumpaakaan neljän löydön lukua toteutuslupana**. Uusi, lukittu sääntömäärittely validoidaan uudelleen automaattisella kaikkien vastaushaarojen haulla. Erityistestinä ensimmäisen auditoinnin F3-vastaesimerkki.

---

## 6. Pelin tehtävien vaihtelu ja rehellinen pelillisyys

**Vaihtelu syntyy suhteesta ja paikoista, ei sanamuodon satunnaistamisesta.** Generaattori seuraa toteutuneita tapahtumia: vaihtuiko kieli, pysyikö soiva korkeus samana, vaihtuiko oktaavi, vaihtuiko sävelnimi ja oliko tehtävässä paikka → nimi -tunnistus. S1/S2/S3/S4 eivät ole neljä eri oivallusta, jos lopputulos on käytännössä aina saman nimisen paikan keräämistä.

0–5-alueella useimmat täsmälliset suhteet antavat vain **yhden** oikean ratkaisun. Peli ei saa väittää, että jokainen löytö avaa useita haaroja. Haarautumista korostetaan vain, kun sitä todella on: esim. A-kielen 3. nauhan C3:sta oktaavia ylemmän C4:n voi valita sekä B-kielen 1. että G-kielen 5. nauhalta. Molemmat kelpaavat ja jatko voi erota. 0–12:ssa tällaisia valintoja on enemmän.

**Kiinnostavuus ilman pisteitä:** lyhyt 3 löydön ketju; tarkkaan asetetut johtolangat; suora kuultava palaute; oikea ”olen löytänyt yhteyden” -yhteenveto; kevyt, istunnon sisäinen vaihtelu seuraavan jahdin ehdotuksessa. Peli ei tarjoa joka askeleen jälkeen vaihtoehtojen valikkoa. Jos käyttäjä haluaa muita yhteyksiä, hän vaihtaa ketjutyypin tai alueen. Tutki/Nimeä-tehtävien vaihtelu on näkyvää ja tarkoituksellista, ei piilossa kasvatettu vaikeuskerroin.

**Virhe ja oppiminen:** kaikki painallukset soivat; väärä sijainti palauttaa *valitun* sävelen ja miksi se ei täytä juuri kyseisen vihjeen ehtoa (esim. ”sama nimi mutta eri oktaavi”, ”puoliaskel liian korkea”). Väärä ei poista löytöjä eikä aiheuta pistevähennystä. **Aiemman löydön kuuntelu** ei ole virhe eikä uusi suoritus.

**Istunnon aikainen havainto, ei pysyvä arvio:** jokainen löydetty paikka luokitellaan `ensimmäinen yritys`, `kokeillen`, `vihjeellä` tai `paikka paljastettu`; N1-nimivastaukselle sama erittely. Vain kyseinen tehtävä ja istunto mittaavat havaittua suoritusta. Virheiden määrää ei käytetä rangaistuksena eikä sitä esitetä soittotaidon todisteena. Ei v1:n pysyvää osaamisprofiilia tai adaptiivista muistijonoa.

---

## 7. Esimerkkikierrokset (testitapauksiksi)

**A. 0–5, sama C, kolme löytöä:**

1. ”Löydä jokin C.” → pelaaja valitsee **B-kielen 1. nauhan = C4 (MIDI 60)**.
2. ”Löydä yhtä korkealta soiva C toiselta kieleltä.” → **G-kielen 5. nauha = C4 (60)**.
3. ”Löydä C täsmälleen oktaavia matalammalta.” → **A-kielen 3. nauha = C3 (48)**.

Yhteenvedossa kolme eri paikkaa, soivien korkeuksien erot 0 ja −12. Ensimmäinen valinta olisi voinut olla myös toinen paikka; seuraava johtolanka muodostuu siitä.

**B. 0–5, nimen vaihtava ketju, kolme löytöä ja nimeämisvaihe:**

1. ”Löydä jokin F.” → **paksu E-kieli, 1. nauha = F2 (41)**.
2. ”Etsi F täsmälleen oktaavia korkeammalta.” → **D-kieli, 3. nauha = F3 (53)**.
3. ”Kokosävelaskel korkeammalle samalla D-kielellä. Mikä on kohdesävel?” → pelaaja vastaa **G** ennen oikean nimen paljastusta ja napauttaa **D-kielen 5. nauhaa = G3 (55)**. Nimenmuutos F → G on toteutunut.

Valinnainen neljäs, jos tarkistus sallii: ”Etsi sama G3 toiselta kieleltä.” → **vapaa G-kieli = G3 (55)**. Neljäs ei ole kierroksen ehto.

**C. 0–12, sama korkeus laajalla kaulalla:**

B-kielen 1. nauha = C4 (60) → G-kielen 5. nauha = C4 (60) → D-kielen 10. nauha = C4 (60). Tämä on kolme erillistä samaa korkuista paikkaa, mutta kolmannen johtolangan täytyy rajata vastaus oikein ja olla haaraturvallinen. C3 löytyy esimerkiksi A-kielen 3. ja paksun E-kielen 8. nauhalta; C5 ohut e-kielen 8. nauhalta. Kaikki ovat sama C-nimi, mutta eivät yhtä korkeat kuin C4.

**D. Nimeämisaloitus ilman valmista vastausta:**

Peli korostaa esimerkiksi **D-kielen 5. nauhaa**, mutta ei näytä sen sävelnimeä: ”Mikä sävel tässä paikassa on?” Pelaaja valitsee **G** (soiva korkeus G3), minkä jälkeen hän voi kuunnella ja jatkaa tähän paikkaan sidottua **Seuraa säveliä** -ketjua. Väärällä nimivastauksella näytetään G ja kyseinen ensimmäinen löytö merkitään avustetuksi; peli ei teeskentele itsenäistä tunnistusta. Tunnistusalun tehtäväkohtaisen jatkotakuun pitää läpäistä sama generaattoritesti.

---

## 8. Vihjeet, paljastus ja ohitus

- **Kokeile ilman apua:** ensimmäinen nimetty tai suhteeseen sidottu tehtävä näkyy ilman oikean sijainnin korostusta.
- **Ensimmäinen vihje:** kertoo musiikillisen säännön tai kiintopisteen (esim. G–B-poikkeus, oktaavimuodon idea). Se ei siirrä otelautaa automaattisesti eikä osoita vastausta.
- **Toinen vihje:** rajaa hakua esimerkiksi kieleen tai nauhaväliin, jos se on perusteltua; ei vielä automaattista oikean paikan keskitystä.
- **Näytä paikka:** näyttää **yhden** oikean paikan, nimeää avustetuksi ja sallii jatkamisen siitä. Jos alun perin useita paikkoja on oikein, peli ei saa jälkikäteen väittää muita vääriksi. Tarkka paljastus saa pyydettäessä tuoda paikan näkyviin.
- **Vaihda jahtia / aluetta:** luopuu käynnissä olevasta ketjusta, ei kirjaa sitä valmiiksi. Palaaminen käynnistää uuden jahdin.

Vihjeet määritellään tehtävätyypin mukaan; aloitustehtävälle ei tarjota merkityksetöntä ”suunta”-vihjettä, jos aiempaa lähtöpistettä ei ole.

---

## 9. Äänentoiston ja tilan hyväksymissopimus

Käytetään lähtökohtaisesti nykyistä `ReferencePlayer`-soitinta ja harjoittelijan sävelmatematiikkaa. **Ei uutta kilpailevaa äänimoottoria**, ei mikrofonilupaa. Sävelkorkeus eroaa oikein eri oktaaveissa. Yhden MIDI-korkeuden syntetisaattori ei yritä mallintaa kielten erilaista sointiväriä; sama korkeus saa kuulostaa saman sävelkorkeuden havainnollistamiseksi samalta.

| Tapahtuma | Ääni | Vaikutus peliin |
|---|---|---|
| Oikea uusi löytö | valitun paikan MIDI kerran | hyväksy löytö, anna palaute ja seuraava johtolanka |
| Väärä sijainti | valitun paikan MIDI kerran | näytä todellinen nimi/korkeus ja syy, pysy samassa tehtävässä |
| Jo löydetty sijainti | paikan MIDI uudelleen | kuuntelu, ei virhettä eikä etenemistä |
| N1:n vielä nimeämätön sijainti | paikan MIDI napautuksesta | **älä paljasta nimeä ennen vastausta**; kosketus ei yksin ratkaise N1:tä |
| Kolmas eli viimeinen löytö | viimeisen löydön MIDI kerran | viimeistä ääntä ei katkaista pelkän valmistumisrenderöinnin vuoksi |
| Valmis otelauta, mikä tahansa paikka | paikan MIDI | vapaa kuuntelu, ei uutta yritystä |
| Kuuntele ketju | vain hyväksytyt sävelet löytöjärjestyksessä, myös peräkkäiset samankorkuiset erillisinä | korosta vuorossa oleva paikka, älä muuta suorituslaskuria |
| Napautus sarjan aikana | napautettu MIDI; sarja keskeytyy | normaali valinnan tai kuuntelun logiikka tilanteen mukaan |
| Uusi jahti / poistuminen / piilotus / lukitus | vanha toisto ja odottavat ajastukset katkaistaan | vanha ääni ei ala itsestään uudelleen |

**Safari ja iPhone:** AudioContext voi keskeytyä, ja äänetön tila voi estää kuuluvuuden, vaikka tilakenttä sanoo `running`. Selvitetään kontrolloitu `navigator.audioSession.type='playback'` **vain tuetuissa ympäristöissä**, käyttäjän tietoisen painalluksen yhteydessä; muutosta ei tehdä koko projektin yhteiseen soittimeen ilman erillistä regressioarviota. Käyttäjälle tarjotaan ohje ”Ei ääntä? Tarkista iPhonen äänetön tila ja äänenvoimakkuus”. Pelkkä tila-API ei voi luotettavasti todistaa äänen kuulumista. Äänitoiminnon epäonnistuminen ei lukitse tehtävää; näkyvä palaute jatkuu. Piilotuksesta/lukituksesta palatessa ääni käynnistyy vasta **seuraavasta tietoisesta painalluksesta**. Testataan laitteella kuulokkeilla ja kaiuttimella. AudioContextia ei suljeta koko sivun muiden äänten kustannuksella yhden kierroksen päättyessä.

---

## 10. Otelauta, iPhone ja saavutettavuus

**V1 käyttää yhtä vaakasuuntaista otelautaa** kuten harjoittelijan `Board`: ohut e ylimpänä kuten tabulatuurissa, paksu E alimpana. PR #179:n pystysuuntainen opintolauta voi säilyä omassa yhteydessään. Käännettyä kielijärjestystä tai vaihtelevaa suuntaa ei kopioida huomaamatta saman pelin eri näkymiin. Jos oikea käyttäjäkoe osoittaa vaakalaudan toimimattomaksi 0–12-alueella, suunnitelmaa muutetaan ennen beta-GO:ta; pystylayout on varavaihtoehto, **ei nyt kahden itsenäisen toteutuksen lupa**.

- Kaikki kuusi kieltä ja vapaat kielet ovat aina mukana. Nauhojen 3/5/7/9 ja 12 hahmotuspisteet erotetaan, 12. nauha kaksoismerkinnällä.
- Noin **44 × 44 CSS-pikselin** painallusalue on pelin tavoite, mieluiten noin 48 px korkeutta. Mitataan todellinen **napautettava painike**, ei vain taulukon solu. Painikkeen reunukset, vapaan kielen satula ja nauha 12 tarkistetaan erikseen.
- 0–5 pyritään saamaan näkyviin 390 px:n iPhonella kaventamalla kielisaraketta sekä sivun ja kortin välejä, **mutta ei pienentämällä painikkeita vaadittua huonommiksi**. Myös 360/320 px:ssä hyvä osumatarkkuus on tärkeämpi kuin se, että kaikki mahtuu kerralla.
- 0–12 säilytetään yhtenä 78 paikan otelautana. **Vain lauta vierii vaakaan**, eivät sivun otsikko ja tehtävä. Pysyvät kielimerkinnät ja sivureunan lisänauhaviitteet. Nauha-alueille saa antaa **vierityksen pikasiirtymät** (esim. 0–5, 6–12) ilman että ne katkaisevat tehtävän tai muuttavat loogista pelialuetta. Ei v1:n erillisiä 5–9 / 8–12 kädenasema-alueita, koska ne rikkoisivat nyt hyväksyttyä koko alueen pelaamista ja lisäisivät generaattorin rajatapauksia.
- Tavallinen löytö tai väärä valinta **ei** vieritä lautaa automaattisesti. Harkittu vihje tai näppäinkohdistuksen säilytys voi vierittää kohteen näkyviin ilman koko sivun hyppäystä. Komponentille tarvitaan `follow='none'` tai vastaava.
- Vaakasuuntainen pyyhkäisy **ei saa soittaa eikä kirjata** vahinkovalintaa. Varmistetaan oikealla puhelimella.
- Kun kieltä ja nauhaa ei ole vielä valittu, ruudunlukija kertoo **vain kielen ja nauhan**, ei piilotettua sävelnimeä. Valinnan tai ratkaisun jälkeen nimi, soiva oktaavi ja palaute ovat saavutettavia. N1:n nimeämisvaiheessa vastausta ei vuoda ennen tehtävän ratkaisemista.
- Näppäimistö: nuolinäppäimet, Home/End, Enter/välilyönti, näkyvä fokus ja ruudunlukijalle yksi hallittu live-ilmoitus per etenemisvaihe. Edellinen löytö säilyy näkyvissä, vaikka seuraava johtolanka ilmestyy automaattisesti. Kaikki keskeinen tieto välittyy myös ilman ääntä ja väriä. Testit 320/360/390 px, 200 % tekstikoko ja vähennetty liike.

---

## 11. Vanha harjoitus, GitHub-työ ja arkkitehtuurin ehdot

**Vanha ”Etsi sävelet otelaudalta” säilyy sellaisenaan konseptina ja seitsemän luonnollisen sävelen kertauksena vanhassa suorassa osoitteessaan** (`?polku=otelauta&harjoitus=savelten-etsinta`). Säveljahti saa **oman vakaan, suoraan avattavan reittinsä** Musapeleihin ja selkeän paluun Musapeleihin. Kitaraharjoittelijan kautta vanhaan tehtävään tullut palaa sinne. Reitti-ID `saveljahti` on ehdotus; varsinainen toteutus tarkistaa reitityksen eikä riko vanhoja linkkejä.

Nykyisen Musapelit-kortin ”ei ääntä” -kuvausta ei saa jättää näkyviin, jos siihen lisätään ääni. Uuden kortin teksti lupaa oikeasti toteutuvat ketjut ja sävelen äänet. #50 päivitetään vasta uuden toteutustyön erillisen hyväksynnän jälkeen siten, että aiempi aloittelijoiden yhden kielen polku ei ole tämän pelin vaatimus. #49:n vapaa valinta ja suorat linkit säilyvät.

- **PR #46 / #43:** avoin, ei yhdistetty betaan tarkistushetkellä. PR ratkaisee aktiivisen `NoteJourney`-napautuksen äänen, mutta ei valmistuneen ketjun vapaata kuuntelua. Toteutusta aloitettaessa päätetään erikseen, yhdistetäänkö korjattu PR vanhaan harjoitukseen vai sovitetaanko sen muutokset uuteen peliin. **Ei kahteen kertaan toteutettua äänen käynnistystä.**
- **PR #179:** erillinen Otelauta-ydinopintojen kokonaisuus. Hyödynnetään käsitteet, unisono-/oktaavisäännöt ja pedagogiset esimerkit, mutta ei kopioida PR:n käänteistä kieli-indeksiä, erillistä demosoitinta tai pystylaudan koko koodia.
- **Olemassa olevat osat:** `harjoittelija/music.ts`, `Board.tsx`, `ReferencePlayer` / `audio.ts`. `Board` vaatii rajatun kuuntelutilan, loppunäkymän aktiiviset painikkeet, vierityksen säätämisen ja mobiilimittojen tarkistamisen. Esiselvityksessä verrataan rajattua nykyisten osien uudelleenkäyttöä erilliseen pelinäyttöön; kumpaakaan ei valita ideologisesti.
- **Ei** uutta yhteistä oppimispelimoottoria, uutta sävelmatematiikkaa, erillistä äänikirjastoa eikä koko sivuston navigaation muutosta Säveljahdin takia.

V1:n uusi seuranta on **istunnon aikaista** eikä kirjoita nykyisten harjoittelujen tallennustietoja uusiksi. Nykyisen NoteJourneyn mahdolliset etenemistiedot ja suorat linkit säilytetään; myöhempi pysyvä tallennus sekä mukautuva uusintajono ovat omia päätöksiään.

---

## 12. Testattavuus, näyttö ja GO/NO-GO

### Automaattiset musiikilliset ja generaattoritestit

1. Vakiovirityksen MIDI-arvot ja kaikki 36/78 sijaintia; luonnolliset lähtösävelet: 24 paikkaa 0–5:ssä ja 48 paikkaa 0–12:ssa. Tarkista myös kromaattiset kohteet, kielten E/e-erottelu ja 0/5/12-rajan lähellä olevat siirtymät.
2. Jokaisesta sallitusta aloituspaikasta molemmilla alueilla ja molemmissa ketjuperheissä generaattori päätyy kolmeen eri löytöön, **riippumatta siitä, minkä oikean vastauksen pelaaja valitsee**. Kokeile kaikki oikeat vastaushaarat, ei vain yhtä valittua siementä.
3. Nimen vaihtavan perheen ketjussa vähintään yksi sävelluokan muutos todella tapahtuu. Saman nimen perheessä kaikki ketjun sijainnit pysyvät samassa sävelluokassa.
4. Kaikki N1:n nimeämisaloitukset / vaiheistukset joko jatkavat turvalliseen ketjuun tai niitä ei tarjota. Ensiyritys, väärä nimi, vihje ja paljastus eivät luo mahdotonta tilaa.
5. **F3-vastaesimerkki 0–12:** A-kielen 8. nauha → D-kielen 3. nauha → paksun E-kielen 1. nauha. Johtolanka, jonka toinen täysin oikea haara päättyisi umpikujaan, ei kelpaa neljänteen sitoutuvaan ketjuun.
6. Ei käytetyn paikan tuplalaskentaa, ei väärän oktaavin hyväksyntää unisonoon, ei kolmea samaa geneeristä vihjettä peräkkäin, eikä mahdotonta pituus-/vaihtelulupausta.
7. Testit varmistavat molemmilla E-kielillä ja G–B-välillä, että #179:n käänteinen kielijärjestys ei vuoda pelin logiikkaan.

### Käyttöliittymä, ääni ja laitetestit

8. Jokaisen otelautanapautuksen oikea taajuus: oikea, väärä, löydetty, viimeinen ja valmis. ”Kuuntele ketju” soi löytöjärjestyksessä, uusi napautus katkaisee sarjan ja poistuminen siivoaa toiston.
9. Fyysinen iPhone Safari: ensikäynnistys, nopea vaihtelu, äänetön tila, kaiutin, Bluetooth-kuulokkeet, piilotus, lukitus, paluu, äänen kuuluminen todellisuudessa. **WebKit-emulaatio ja AudioContext-mock eivät korvaa laitetta.**
10. iPhone-kosketus: 0/5/12, kaikki kielet, pyyhkäisy ilman vahinkovalintaa, sivun vaaka-vierimisen puute, paikallinen laudan vieritys, 320/360/390 px, 200 % teksti ja VoiceOverin oikea puhejärjestys ilman ennakkovastausta.
11. Vanha harjoitus ja sen URL, uusi Musapelit-sisääntulo, palautteet, linkit PR #179:n sisältöön, vanhan #43-äänen yhteensopivuus ja muiden harjoitusten äänen regressio.

### Pedagoginen pilotti ennen beta-GO:ta

Vähintään **3–5 kohderyhmän 1–2 vuotta soittanutta**. Ennen peliä yksi tai kaksi fyysisen kitaran nimettyä paikannustehtävää ilman näkyvää mallia. Sen jälkeen pelataan kummallakin alueella, mukaan lukien vähintään yksi paikka → nimi -tunnistus ja yksi muuttuvan nimen ketju. Pelin jälkeen uudet, lähtötasoon verrattavat tehtävät ilman ruudukkoa ja **vähintään yksi harjoittelematon sävelpaikka**. Seurataan valittua kieltä/nauhaa, ensiyritystä, avun käyttöä, ymmärtääkö pelaaja johtolangat, syntyykö tahattomia painalluksia ja haluaako hän aidosti uuden kierroksen. Myöhempi lyhyt uusinta selvittäisi muistamisen säilymistä. Pieni pilotti osoittaa käytettävyysongelmia ja mahdollisia oppimissignaaleja, ei tilastollisesti varmaa oppimistulosta.

**NO-GO**, jos yksikin seuraavista toteutuu: generaattori hyväksyy umpikujaan johtavan oikean vastauksen; fyysisen pelin ratkaisut vuotavat toistuvasti ennen tunnistusta; 0–12:n mobiilikäyttö aiheuttaa merkittäviä virheosumia; Safari-ääni puuttuu olennaisista tilanteista ilman hallittua toimintatapaa; vanha URL/harjoitus rikkoutuu; PR #179:n kielijärjestys tuottaa väärän sävelen; käyttäjäpilotti osoittaa, ettei tehtävän tarkoitus ymmärry tai paikannusta voi harjoitella mielekkäästi. Korjataan ja uusitaan näyttö ennen beta-päätöstä.

---

## 13. Auditointipäätösten jäljitettävyys

| Auditointien havainto / ristiriita | v1.0-päätös | Perustelu |
|---|---|---|
| Yksi onnistuva generaattoripolku ei riitä | universaali kaikkien oikeiden vastausten jatkotakuu; 3 löytöä, 4. vain valinnainen ja erikseen tarkistettu | poistaa BLOCKERin ja epäselvän neljän löydön lupauksen |
| Peli voidaan läpäistä ruutuja kokeilemalla | aidot paikka → nimi -tehtävät, nimettävä askelsiirtymä, ensiyrityksen/avun erottelu ja piilotetun laudan kitaratehtävä | parantaa tiedon käyttöä, ei kiellä kokeilemista |
| Peli ei automaattisesti osoita fyysisen kitaran osaamista | vapaaehtoinen piilotettu muistitehtävä sekä pilotti ilman mallia, myös harjoittelematon paikka | välttää perusteettoman osaamisväitteen |
| 0–5:n haarautuminen on rajallista | ei väitetä jatkuvaa haarautumista; 0–12 heti tarjolla, mutta 0–5 säilyy aito 6-kielinen alue | kunnioittaa aiempaa päätöstä ja kohderyhmää |
| Ehdotus kahdesta johtolangasta valittavaksi | **ei oteta mukaan** | käyttäjä päätti automaattisesta seuraavasta johtolangasta; uusi valikko sotkisi ydinidean |
| Ehdotus 5–9/8–12 erillisistä kädenasemaikkunoista | **ei oteta v1:een**; vain vierityksen pikasiirtymiä | koko 0–12 säilyy yhtenä tehtäväalueena |
| PR #179 pystylauta vs. Board-vaakalauta | yksi vaakasuunta v1:ssä; koetestillä varmennettava; yhteiset musiikilliset testit | pieni regressioriski eikä kilpailevia esityksiä saman pelin sisään |
| `Board` estää loppukuuntelun ja keskittää vanhan löydön | erillinen kuuntelutila ja `follow='none'`-periaate | täyttää sovitun äänen ja mobiilin käytöksen |
| Ruudunlukija voisi paljastaa oikean sävelen | ennen valintaa kieli+nauha, vasta jälkeen sävelnimi | tasavertainen ratkaiseminen |
| Safari hiljaisena, `AudioContext`-tila ei kerro kuuluvuutta | tuettu audioSession-playback harkittavaksi, näkyvä ohje, fyysinen laitetesti, ei globaalia muutosta ilman regressiota | ei väitetä ohjelmallista audion kuuluvuustarkistusta |
| Vanhan NoteJourneyn kohtalo ristiriidassa #50:n kanssa | vanha kertaus ja reitti säilytetään; Säveljahdille oma avaus | ei rikota aiempia linkkejä ja sisältöä |
| PR #179:n kieli-indeksi käänteinen | betan sävelmatematiikka + yhteiset eksplisiittiset testiesimerkit | estää kahden oktaavin virheen |
| L1:n ja S4:n turha päällekkäisyys | L1 ei oma v1-tehtävä; S4 harkittu varajohdanto | vähemmän keinotekoista monimutkaisuutta |
| Pysyvä osaamisprofiili vs. kevyt v1 | vain istunnon muisti; nykyiset tallennukset koskemattomat | rajaa v1:n, ei väitä pitkäaikaisen oppimisen mittausta |

---

## 14. Rajaus ja seuraava päätösportti

**V1:een:** molemmat alueet, kuusi kieltä/vapaat kielet, kaksi ketjuperhettä, automaattinen haaraturvallinen johtolanka, mielekäs nimeämistehtävä, tarkka audio kaikkialla, valmiin ketjun kuuntelu, vihje/paljastus, vapaaehtoinen oikean kitaran piilotehtävä, istunnon muisti, mobiili- ja VoiceOver-saavutettavuus, olemassa olevien harjoitusten säilyminen.

**Ei v1:een:** pakotettu alkeispolku, uudet kädenasema-alueet, erillinen L1-pelimoottori, pakollinen neljän löydön kierros, ajastin/pisteet/saavutukset, käyttäjätili, mikrofonilla tapahtuva vahvistus, pysyvä osaamisen analytiikka, automaattinen kertausjono, uusi yleinen oppimispelialusta, erillinen instrumenttisamplemoottori tai PR #179:n toisenlainen otelautakoodi.

**Päätösportti:** Tämä on valmis **v1.0-suunnitelma toteutusarviointiin**, ei lupa aloittaa koodausta. Seuraavassa erikseen hyväksyttävässä vaiheessa valitaan toteutuksen tarkka muutosraja, GitHub-työnkulku, testit sekä mahdolliset betaan ja tuotantoon vientipäätökset. Jos pilotti osoittaa suunnitelman käyttäjäkokemuksen vääräksi, suunnitelmaa korjataan ennen julkaisua.