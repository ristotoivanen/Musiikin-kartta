# Musiikin kartta – Säveljahti / Sävelketju
## Suunnitteluehdotus v1.1 kahden pedagogisen ja pelillisen auditoinnin jälkeen

**Päiväys:** 23.11.2026  
**Tila:** suositeltu muutossuunta, **ei hyväksytty lopulliseksi toteutussuunnitelmaksi**. Ei koodia, GitHub-muutoksia, beta-/tuotantojulkaisua tai toteutuspäätöstä.  
**Kohderyhmä:** noin 1–2 vuotta kitaraa soittaneet, jotka hallitsevat perustaidot ja mahdollisesti sormituskuvioita mutta eivät paikanna kaikkia säveliä sujuvasti.  
**Pohjana:** v1.0-suunnitelma sekä kaksi riippumatonta 23.11.2026 pedagogis-pelillistä auditointia (arviot 6,5/10 ja 6/10 pedagogiikasta; 4,5/10 ja 5/10 ennakoidusta kiinnostavuudesta). Lukemat ovat asiantuntija-arvioita, eivät käyttäjähavaintoja.

---

## 1. Johtopäätös ja muutoksen tarkoitus

v1.0:n musiikillinen tietomalli ja yleiset oikeellisuusehdot säilytetään. **Pelin pääasia muuttuu peräkkäisten johtolankojen suorittamisesta ymmärrettävän musiikillisen pulman ratkaisemiseen.** Kolme löytöä on edelleen hyvä mitta. Pelaaja tietää, mitä kokonaisuutta hän yrittää muodostaa, ja hänelle tarjotaan aito mahdollisuus löytää ratkaisu eri järjestyksissä silloin, kun musiikillinen tehtävä sen sallii.

Toisen auditoinnin tärkeät havainnot yhdistetään tähän: kohdennettu kieli- ja ylänauhapaikannus, fyysisen kitaran käyttö jo ratkaisun aikana, ensimmäisen yrityksen ja vihjeiden erottelu sekä kevyt istunnon sisäinen kertaus.

**Sävelketjun brändi ja ydin jäävät.** Työnimi pelin uudistetulle kierrokselle on *Sävelsilta*: pelaaja rakentaa ratkaistavan musiikillisen yhteyden. Säveljahti pysyy Musapelien nimenä. Lopullinen kierrosnimi ratkaistaan prototyypin perusteella, ei tässä dokumentissa.

**Erityisesti säilytettävät päätökset:** kaikki kuusi kieltä ja vapaat kielet; 0–5 vähimmäisalue, 0–12 vapaasti valittavissa; jokainen otelaudan painallus soittaa kyseisen paikan oikean MIDI-korkeuden myös virhetilanteissa ja kierroksen jälkeen; ei pakollisia etenemislukituksia; ei mikrofonia; ei pisteitä, ajastinta tai palkintokierrettä; ei koko sivuston uutta pelimoottoria.

## 2. Pelin ydinsilmukka: tavoite → ratkaisu → oivallus

1. **Kierroksen luonne näkyy alussa**, esim. ”Kolme samaa sävelnimeä” tai ”Rakenna kahden sävelen välinen silta”. Pelaaja ymmärtää, mitä harjoitellaan.
2. **Lähtölöytö**: yleensä pelaaja valitsee itse pyydetyn sävelen paikan. Osassa kierroksista peli tarjoaa paikan ja pyytää nimeämään sävelen ennen kuin ääni/ratkaisu paljastetaan (paikka → nimi). Näitä ei pidä sekoittaa keinotekoisiin, jo vastauksen paljastaviin nimikysymyksiin.
3. **Pelin laskema ratkaisutavoite** muodostetaan juuri tämän lähtölöydön perusteella. Se on näkyvä, musiikillisesti yhtenäinen pulma, jossa on yleensä kaksi jäljellä olevaa löytöä. Näytetään molemmat tarvittavat suhteet tai lopputavoite, mutta **ei niiden koordinaatteja**.
4. **Pelaaja ratkaisee**: jos molemmat kohteet ovat toisistaan riippumattomia, hän saa etsiä ne kummassa tahansa järjestyksessä. Jos tehtävä edellyttää järjestystä, järjestys kerrotaan. Peli voi korostaa automaattisesti järkevää seuraavaa johtolankaa, mutta muita sallittuja oikeita löytöjä ei estetä. **Automaattinen johtolanka jää, erillistä kahden vihjeen valikkoa ei tule.**
5. **Oivallus**: kun pulma ratkeaa, ääniä voi vertailla peräkkäin; palaute nimeää yhden rakennesäännön ja sen, miten pelaaja käytti sitä. Oikeat ja avustetut löydöt erotetaan toisistaan; peli ei väitä vahvistaneensa fyysistä soittoa.
6. **Jatko tai kertaus**: uusi pulma valitaan istunnon aikana siten, että se harjoittaa myös vähän käytettyä kieltä/nauhaa, eri sävelnimeä tai aiemmin avustetusti löytynyttä paikkaa. Pelaajalla säilyy vapaus vaihtaa aluetta ja ketjuperhettä.

**Miksi tämä on olennainen muutos?** v1.0 kertoi jokaisen löydön jälkeen, mitä on tehtävä seuraavaksi. v1.1 näyttää pelaajalle pienen ongelman, johon hän voi rakentaa oman ratkaisunsa. Pelin automaattinen vihje tukee eikä korvaa pelaajan päättelyä.

## 3. Kaksi ketjuperhettä ja esimerkit

### 3.1 Saman sävelen jäljillä – 0–5

**Aloitus:** ”Etsi yksi C.” Pelaaja valitsee B-kielen 1. nauhan; soiva korkeus on C4 (MIDI 60).

**Näkyvä pulma lähtölöydön jälkeen:** ”Täydennä kolme C:tä. Etsi toiselta kieleltä täsmälleen yhtä korkea C sekä yksi C oktaavia matalammalta. Voit löytää ne kummassa järjestyksessä tahansa.”

**Ratkaisut:** G-kielen 5. nauha = C4 (60) ja A-kielen 3. nauha = C3 (48). Peli voi nostaa jommankumman suhteen automaattiseksi seuraavaksi vihjeeksi; toisen oikean paikan painaminen on silti sallittua.

**Lähtöhaaran vaikutus:** jos pelaaja aloittaakin A-kielen 3. nauhasta (C3), tätä samaa kuvausta ei näytetä, koska C3:lle ei ole oktaavia alempaa C:tä 0–5:ssä. Peli voi silloin pyytää kahta oktaavia korkeammalta löytyvää C4-paikkaa eri kieliltä. Ratkaisut B/1 ja G/5. Tämä on todellista pelaajan aloituksesta seuraavaa vaihtelua.

**Huomio:** kaikilla sävelnimillä ei ole 0–5-alueella yhtä korkeita pareja. Generaattori valitsee kelvollisen pulman eikä koskaan tarjoa yleistä C-esimerkkiä toiselle sävelelle vain ulkoasun vuoksi.

### 3.2 Seuraa säveliä – 0–5

**Aloitus:** ”Etsi jokin F.” Pelaaja valitsee paksun E-kielen 1. nauhan = F2 (41).

**Näkyvä pulma:** ”Rakenna F:stä G:hen etenevä silta. Etsi F oktaavia ylempää sekä G, joka soi siitä kokosävelaskeleen ylempänä.” Kohteet voi etsiä vapaassa järjestyksessä, jos kaikki ehdot ovat nähtävissä; vaihtoehtoisesti peli kertoo edellytetyn järjestyksen ennen ratkaisua.

**Esimerkkiratkaisu:** D-kieli/3 = F3 (53), sitten D-kieli/5 = G3 (55) **tai** G-kieli/0 = G3 (55). Jos G3 löydetään ensin, F3-vihje jää näkyviin, ja jälkikäteinen yhteenveto selittää F3 → G3 -kokosävelaskeleen. Myös toisinpäin ratkaiseminen sallitaan, koska tavoitteet määräytyvät lähtö-F2:sta eivätkä valitusta välivaiheesta.

**Nimeäminen:** tehtävässä, jossa sävelnimi on ennalta näkymätön, kohdesävel arvataan/nimetään **ennen** sen paikan valintaa; eikä jo näkyvää ”G”-tavoitetta kysytä uudelleen. V1.1 ei vaadi jokaiseen C-ketjuun sisällötöntä nimikysymystä.

### 3.3 0–12:n varsinainen lisäarvo

Laajalla alueella pulmat ottavat **normaalisti mukaan vähintään yhden nauhojen 6–12 löydön** (jos aloittaja on jo siellä, tämä ehto täyttyy). Pelkkä suurempi ruudukko ei tee tehtävästä vaikeampaa. Esimerkki: kolme G3:sta eri kielillä ovat G-kieli/0, D-kieli/5 ja A-kieli/10 (kaikki MIDI 55). Vain yksi niistä on nauhoilla 6–12.

Tämä on tehtävän näkyvä ominaisuus: ”Laajan otelaudan jahti: myös ylempiä nauhoja”. Sitä ei toteuteta siten, että täysin oikea 0–5-vastaus yhtäkkiä hylätään jälkikäteen. Näytetyn kohteen vastausjoukko ja ylänauhaehto määritellään **etukäteen**. Jos turvallista ratkaisua ei voi muodostaa, valitaan toinen pulmatyyppi tai aloitustehtävä ennen vihjeen näyttämistä. Pelaajaa ei siirretä automaattisesti toiseen alueeseen eikä lukita etenemistä.

0–5 säilyy täysin kuusikielisenä vaihtoehtona, ei alkeisiin rajattuna osapelinä. Siinä vaikeutta kasvatetaan päättelyllä ja nimeämisellä, ei salaa pienentämällä pelialuetta.

## 4. Generaattorin sopimus: turvalliset pulmat ja todellinen valinnanvapaus

Määritä ensin **pulman tavoite ja ratkaisuslotit**, ei vain yksi oikea siirtymä. Jokaisella slotilla on musiikillinen predikaatti, esimerkiksi sama MIDI, ±12 MIDI, tietty nimetty sävelluokka tietyllä kielellä tai kahden sävelen välinen nimetty ero. Löydetyt `(kieli,nauha)`-parit ovat yksilöllisiä.

**Turvatakuu:** jokaisen *näytetyissä ehdoissa kelpaavan ja edelleen käyttämättömän* vastauspaikan jälkeen kaikkien jäljellä olevien slottien on edelleen oltava täytettävissä. Jos yksi painallus kelpaisi useampaan slottiin, sijoitus on ratkaistava niin, että jäljellä olevat tavoitteet pysyvät toteuttamiskelpoisina, tai päällekkäiset ratkaisualueet on poistettava pulman määritelmästä. Mikään oikea vastaus ei saa muuttua vääräksi vain koska se johtaisi umpikujaan.

- Ennen pulman julkaisua lasketaan ratkaisujoukot molemmilla alueilla ja tarkastetaan **kaikki kelvolliset haarat ja löytöjärjestykset**, ei vain yksi läpäisevä esimerkki.
- Kolme erillistä löydettyä sijaintia muodostaa valmiin kierroksen. Neljäs on erillinen vapaaehtoinen lisäpulma vain, jos sille on omat testatut ehdot.
- Saman nimen pulmassa jokainen hyväksytty sijainti kuuluu samaan sävelluokkaan. Vaihtuvan nimen pulmassa vähintään yksi todellinen sävelluokkamuutos toteutuu; ei pelkkää nimeen viittaavaa vihjetekstiä.
- Kuusi kieltä, nauha 0 ja molemmat alueet ovat aina osa generaattorin testiavaruuksia.
- Jos pulmassa on vain yksi mahdollinen ratkaisu, sitä ei esitellä pelaajalle harhaanjohtavasti ”valintojen rakentamana ainutlaatuisena reittinä”. Tällaisia tehtäviä tarvitaan silti harjoitteluun.
- Tehtävät kohdennetaan tarvittaessa **nimettyyn kieleen** (esim. ”Etsi C D-kieleltä”), mutta ei muuteta jokaista tehtävää yhden ruudun viereisen nauhan napautukseksi.
- Säännöt ohjaavat *toteutuneita* eroja: kielenvaihto, sama korkeus, oktaavi, todellinen nimenmuutos ja uudet vs. tunnetut paikat. Pelkkä tehtävätyypin tunnisteiden vaihtelu ei riitä.
- Istuntokohtainen siemen mahdollistaa toistettavat testit. Generaattorin ei tarvitse olla tekoälypohjainen.

**Erityinen regressiotesti:** aiemmassa auditoinnissa osoitettu 0–12-haara A-kieli/8 = F3 → D-kieli/3 = F3 → paksu E-kieli/1 = F2 on täysin laillinen kolmen F:n löytö; neljättä ei voi luvata jokaisesta vastaushaarasta vanhoilla säännöillä. Erillinen aiemman auditoinnin huomio koskee 0–5:n F3-aloitusta ilman avointa saman nimen S4-vihjettä. Nämä ovat **kaksi eri tapausta**. Jälkimmäisen pedagogisen auditoinnin maininta, että alkuperäinen F3-vastaesimerkki olisi ollut 0–5, ei pidä paikkaansa 0–12:n esimerkin osalta.

## 5. Oppimisen laatu ja sopiva haaste

**Aito mieleen palauttaminen:** mukaan tulee kierroksia, joissa nimetty kieli+nauha pitää tunnistaa ennen kuin pelaaja saa painaa vastausta paljastavaa solua, tai joissa tuttu sävelnimi pitää sijoittaa uuteen kohtaan ilman paikkavihjettä. Jos nimi näkyy jo tehtävässä, sitä ei kysytä takaisin. Monivalinta ei saa muodostua liian triviaaliksi, eikä pelaajaa rangaista erehtymisestä.

**Virheen palaute:** painettu sävel soi ja peli ilmoittaa, mikä paikka ja korkeus oli kyseessä sekä miksi se ei täyttänyt tavoitetta. Suunta tai tarkka koordinaatti annetaan vasta erillisellä vihjeellä. Näin vapaata kokeilua ei kielletä, mutta virheen palaute ei tee ruutuja summittain naputtelemisesta tehokkainta ratkaisustrategiaa.

**Oivallus:** loppunäytön yksi lyhyt lause nimeää juuri käytetyn rakennesäännön, esimerkiksi kahden unisonopaikan eron tai oktaavisiirron. Vältä automaattista teoriaesseetä. Jos säännön ymmärtäminen on epäselvää, tarjoa valinnainen ”Miksi nämä ovat samat?” -selitys tai vertailuääni.

**Haaste ilman tasolukkoja:** jos pelaaja löytää paikkoja toistuvasti itsenäisesti, seuraava jahti voi tarjota ylemmän nauhan, nimetyn kielen, ennustamistehtävän tai otelaudan nauhanumeroiden piilotuksen. Nauhanumeroiden piilotus ei yksin riitä, sillä otelaudan merkkipisteet ja sijaintimuisti jäävät käyttöön; se on valinnainen esitysmuoto, ei näyttö oppimisesta. Pelaaja valitsee lopulta itse.

**Istunnon muistipaluu:** merkitse vain istunnon ajaksi, mistä tehtävästä löytyi itsenäinen vastaus, kokeileva vastaus, vihje tai paljastus. Seuraavien kierrosten pulmat voivat käyttää samoja sävelsuhteita uudessa paikassa. Kevyt ”Tämän istunnon löydöt” -kartta voidaan näyttää vasta kierrosten välillä, **ei ratkaisuja paljastavana taustakarttana kesken jahtia**. Kartta ei väitä todennettua osaamista eikä tarvitse piste-/prosenttikeräilyä. Seuraavan päivän muistamisesta ei tehdä väitteitä ilman erillistä mittausta; pysyvä osaamisprofiili ei kuulu tähän suunnitelmaversioon.

## 6. Fyysisen kitaran käyttö

Vapaaehtoinen **Kitara kädessä** -tila voidaan kytkeä päälle istunnossa tai yksittäisen pulman aikana:

1. Pelaaja näkee johtolangan ja voi piilottaa virtuaalisen laudan ennen ratkaisua.
2. Hän etsii ja soittaa sävelen oikealla kitaralla; halutessaan kuuntelee vertailuäänen.
3. Hän avaa ”Merkitse paikka” ja napauttaa sen kielen ja nauhan, jota soitti.
4. Ohjelma tarkistaa vain ruudulla ilmoitetun paikan. Se **ei voi todistaa**, soittiko pelaaja oikean sävelen tai käytti juuri tätä nauhaa.

Tila ei ole pakollinen eikä keskeytä pelin mobiilikäyttöä. V1.0:n kierroksen jälkeinen erillinen ”Kokeile kitaralla” voidaan säilyttää kevyenä jatkotoimintona niille, jotka eivät käyttäneet tilaa. Samaa tehtävää ei tarvitse tuplata.

## 7. Ääni, lauta, saavutettavuus ja vanha toteutus

- Soiva MIDI: E2=40, A2=45, D3=50, G3=55, B3=59, e4=64 sekä valittu nauha. Kaikki kosketukset soivat oikean, väärän, jo löydetyn ja valmis-tilassa. Napautus keskeyttää aiemman ketjutoiston, uusi kierros siivoaa vain oman toistonsa. Viimeistä oikeaa ääntä ei katkaista pelkän pelitilan vaihdon vuoksi.
- Äänen puuttuminen todellisella iPhone Safarilla on mitattava: AudioContextin ”running” ei todista kuuluvuutta. Testaa kaiutin, Bluetooth, äänetön tila, lukitus, paluu ja uuden kosketuksen toisto. Ei uutta rinnakkaista äänimoottoria.
- 0–5:n tavoite on kuusi kieltä kerralla mahdollisuuksien mukaan; 0–12:ssa lauta vierii vain omalla alueellaan. Ei pakotettua näkymän vieritystä jokaisen löydön jälkeen. Todelliset painikealat 44–48 CSS-pikselin luokkaa, erityisesti vapaa kieli ja 12. nauha; pyyhkäisy ei rekisteröidy vastaukseksi.
- Ennen ratkaisua ruudunlukija saa kieli+nauha-tiedon, **ei solun sävelnimeä**. Valinnan jälkeen sävelnimi ja palaute ovat käytettävissä myös ilman ääntä. Ohje ja edellinen löytö pysyvät ymmärrettävinä automaattisen vihjeen päivittyessä.
- Vanhasta `NoteJourney`-harjoituksesta säilytetään seitsemän luonnollisen sävelen kertaus ja sen suora osoite. Säveljahti saa oman käynnistyksen Musapeleihin. Yhteiset osat (betan `music.ts`, `Board`, `ReferencePlayer`) hyödynnetään harkiten. PR #46 ja PR #179 ovat erillisiä avoimia töitä auditointiajankohtana. PR #179:n päinvastaista kieli-indeksijärjestystä ei kopioida.

## 8. Pienin päätöksenteon mahdollistava pilotti

Ennen laajaa toteutusta vertaillaan **kahta aitoa pelikokemusta**, jotta vältetään pelkkään AI-arvioon perustuva rakennemuutos.

- **A: v1.0-automaattiketju.** Kolme peräkkäistä johtolankaa.
- **B: v1.1-pulma.** Sama kolmen löydön mitta, mutta koko kierroksen musiikillinen tavoite näkyy ja pelaaja pystyy ratkaisemaan jäljellä olevat suhteet valitsemassaan järjestyksessä, kun se on mahdollista.
- **Vertailukelpoisuus:** sama 0–12-alue ja sama määrä ylemmille nauhoille kohdistuvia tehtäviä **molemmissa** versioissa. Sama apu, äänet ja fyysisen kitaran mahdollisuus. Näin ero ei selity vain sillä, että B:lle annettiin enemmän uusia ominaisuuksia.
- **Osallistujat:** 5–6 soittajaa, 1–2 vuoden kokemuksella, erilaiset sävelkarttataidot. Puolet aloittaa A:sta, puolet B:stä. Tehtävät vastaavantasoisia, eivät identtisiä.
- **Ennen:** lyhyt oikean kitaran paikannuskoe ilman ruudukkoa (nimi → paikka, paikka → nimi, osa nauhoilla 6–12).
- **Koe:** kummallakin 3–5 pulmaa ja vapaa mahdollisuus jatkaa. Kirjataan, mihin käyttäjä tarttuu ilman pyyntöä, mikä tuntuu turhalta, missä syntyy oivallus, kuinka usein apua tarvitaan ja onko valinta oikeasti koettu merkitykselliseksi.
- **Jälkeen:** saman vaikeuden mutta uudet otelautatehtävät oikealla kitaralla, myös harjoittelemattomat sijainnit. Valinnainen uusinta 1–3 vuorokauden kuluttua.
- **Lisäksi:** erillinen, aito iPhone-kosketus- ja äänitesti heti kun toimiva käyttöliittymäprototyyppi on saatavilla.

Pieni 5–6 hengen pilotti ei todista pysyvää oppimistehoa, mutta sen pitäisi paljastaa, onko pulma aidosti mielekkäämpi kuin v1.0-ketju. **Jos B ei tuota selvää havaittavaa etua**, älä tuo lisämonimutkaisuutta peliin vain siksi, että se kuulostaa paperilla pelillisemmältä.

## 9. Päätösportit ja avoimet asiat

**Ennen v1.1:n hyväksymistä:**

1. Testataan, ymmärtääkö 1–2 vuotta soittanut pulman *ilman pitkiä ohjeita*.
2. Varmistetaan, että vapaavalintaisen löytöjärjestyksen jokainen oikea vaihtoehto johtaa ratkaisuun ja että vastausryhmät eivät vuoda päällekkäin virheellisesti.
3. Varmistetaan, että 0–12:n ylänauhavaatimus on jokaisessa tarjotussa pulmassa ratkaistavissa ilman väärien vastausten jälkikäteistä hylkäämistä.
4. Arvioidaan, tuntuuko istunnon löydöistä muodostuva kartta oppimista tukevalta vai vain keräilymittarilta.
5. Ratkaistaan pilotin perusteella **Sävelketju-v1.0 vai pulmapohjainen v1.1**; vasta sitten lopullinen muutosraja ja mahdollinen toteutuslupa.

**Ei toteuteta ennen erillistä lupaa.** Tämä dokumentti on auditointien pohjalta tehty päätösehdotus, ei toteutusmääräys.