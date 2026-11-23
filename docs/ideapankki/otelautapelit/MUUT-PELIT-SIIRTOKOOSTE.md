# MUSIIKIN KARTTA – MUIDEN OTELAUTAPELIEN SUUNNITTELUN SIIRTOKOOSTE

**Päiväys:** 24.11.2026  
**Kohde:** Musiikin kartan projektin pääkeskustelu  
**Tila:** aiemman suunnittelukeskustelun yhteenveto; ei toteutuslupaa.  
**Huomautus:** Sävelverkon (oktaavi-/sävelverkkoharjoituksen) yksityiskohtainen siirto on tehty erikseen. Tämä kooste käsittelee etenkin Säveljahtia, Sävelketjua, Sävelsiltaa ja muita kokeiltuja peli-ideoita.

## 1. Kokonaiskuva: kaksi erillistä peli-ideaa

**Säveljahti** on Musapeleihin suunniteltu peli, jonka tavoitteena on oppia löytämään ja nimeämään kitaran otelaudan säveliä, käyttämään kielten välisiä unisono- ja oktaavisuhteita sekä soveltamaan opittua omalla kitaralla. Sitä on kehitetty Sävelketju- ja Sävelsilta-mekaniikoilla.

**Sävelverkko** on tästä erillinen harjoitus: yhden C:n, D:n jne. valinta avaa kaikki saman sävelnimen sijainnit ja niiden yhteydet. Myös muistista rakennettava verkko kuuluu siihen. Sen uusin erillinen prototyyppi käyttää alueita **0–12 ja 0–24**, vihreitä unisonoviivoja ja keltaisia katkoviivaisia oktaaviyhteyksiä. Sävelverkolla on oma keskustelunsa, ja sen tarkemmat vaatimukset siirrettiin sinne. **Älä sekoita Sävelverkon 0–12/0–24-aluepäätöstä Säveljahdin 0–5/0–12-aluepäätökseen.**

Kohderyhmä molemmille: noin **1–2 vuotta kitaraa soittaneet**, joilla on jo soiton perustaidot, mutta epävarmuutta sävelten sijainneista. Kyse ei ole aivan alkeisopetuksesta.

## 2. Säveljahdin lähtötilanne ja tärkeät päätökset

Nykyisestä Musapelien sävelten etsintäharjoituksesta haluttiin kiinnostavampi peli. Alussa vertailtiin kolmea ideaa:

- **Karttajahti (A):** etsi kaikki pyydetyn sävelen paikat, palaute ja ääni. Selkeä, mutta läheinen vanhalle harjoitukselle.
- **Sävelketju (B):** pelaaja löytää yhden sävelpaikan, ja siitä muodostuu seuraava musiikillinen tehtävä. **Valittiin jatkosuunnittelun pohjaksi.**
- **Korjaa kartta (C):** pelissä näytetään virheellinen sävelmerkintä, joka pelaajan pitää tunnistaa ja korjata. Idea jäi vaihtoehdoksi, ei toteutuspäätöstä.

Sävelketjulle päätettiin ensin:

1. Pelaajan löytämä paikka vaikuttaa jatkoon. Etsinnästä muodostuu ketju, ei irrallinen kysymyssarja.
2. Seuraava johtolanka muodostuu automaattisesti; pelaajalle **ei tule jokaisen löydön jälkeen kahden johtolangan valintavalikkoa**.
3. Kaksi tehtäväperhettä samassa pelissä: **saman sävelnimen ketjut** ja **sävelnimestä toiseen etenevät ketjut** (esim. F2 → F3 → G3).
4. Kaikki **kuusi kieltä ja vapaat kielet** ovat käytössä; pelialueet **0–5 ja 0–12** vapaasti valittavissa. Ei ensin vain yhtä kieltä tai pelkkiä vapaita kieliä. 0–5 ei tarkoita pakollista alkeispolkua.
5. Jokainen painallus soittaa **todellisen kyseisen kieli–nauha-paikan soivan sävelkorkeuden**, myös väärät vastaukset, jo löydetyt paikat ja valmiin kierroksen vapaa kuuntelu. Ei mikrofonia.
6. Ei pisteitä, ajastinta, pakkotasoja tai etenemislukituksia ensimmäiseen versioon. Väärä yritys ei katkaise jahtia.
7. Kolme oikeaa löydettyä paikkaa muodostaa riittävän peruskierroksen. Neljäs saa tulla vain, jos jokainen hyväksyttävä reitti jatkuu turvallisesti.

### Tarkistettu musiikillinen esimerkki

0–5-alueen C-ketju: **A-kieli/3 = C3**, **B-kieli/1 = C4**, **G-kieli/5 = C4**. Ensin mainittu on oktaavia alempana, kaksi viimeistä soivat yhtä korkealta. Toisen ketjuperheen esimerkki: **paksu E/1 = F2 → D/3 = F3 → D/5 = G3**. Vakiovireen soivat MIDI-avoimet kielet ovat paksusta ohueen 40, 45, 50, 55, 59, 64. Käyttöliittymässä kieli/nauha ilmoitetaan selvästi, jottei merkintä `G5` sekoitu sävelkorkeuden `G5`-merkintään.

## 3. Ensimmäiset tekniset ja pedagogiset auditoinnit – v1.0

Alkuperäinen suunnitelma v0.9 auditoitiin kahdesti. Molempien tulos oli **HYVÄKSY KORJAUKSIN**.

**Tärkein tekninen BLOCKER:** generaattori ei saa hyväksyä johtolankaa vain sen perusteella, että *jokin* oikea valinta johtaa loppuun. **Jokaisen näkyvän ehdon täyttävän oikean vastauksen täytyy sallia luvattu jatko.** Tehtävien kelvollisuus on tarkistettava kaikkien haarojen perusteella. Vaihtuvan sävelnimen ketjussa vähintään yhden nimen pitää todella vaihtua.

**Tärkein pedagoginen puute:** pelkkä virtuaalisen otelaudan naputtelu tai kahden nauhan laskeminen ei osoita itsenäistä sävelkarttaosaamista. Tarvitaan sekä **nimi → paikka** että **paikka → nimi**, oikean kitaran tehtävä ilman näkyvää mallia, täsmälliset kielikohtaiset tehtävät, ja palautetta siitä, löytyikö paikka ensimmäisellä yrityksellä, kokeilemalla, vihjeellä vai paljastettuna.

**Muut korjaukset:**
- Näytä lähtöpaikka ja nykyinen tavoite selvästi; vain otelauta vierii, ei koko sivu eikä automaattisesti takaisin vanhaan löytöön.
- Ennen painallusta ruudunlukijalle kieli+nauha, **ei valmiiksi sävelnimeä**; vasta painalluksen jälkeen nimi ja palaute.
- 0–12-alueella tulee aidosti harjoittaa myös ylempiä nauhoja eikä antaa pelaajan aina jäädä tutuille 0–5-nauhoille. Oikeat vastaukset on rajattava etukäteen, ei hylättävä jälkikäteen.
- Äänisoitossa hyödynnetään nykyistä `ReferencePlayer`-soitinta, ei rakenneta rinnakkaista äänimoottoria. Fyysinen iPhone/Safari (lukitus, äänetön tila, Bluetooth, keskeytykset) pitää testata erikseen.
- **Vanha seitsemän luonnollisen sävelen kertaus ja sen suora osoite säilyvät.** Säveljahdille suunnitellaan oma käynnistys Musapeleistä ja toimiva paluu.
- `PR #179` -Otelauta-ydinopintojen sisältöä ei kopioida uudeksi päällekkäiseksi harjoitukseksi. Huomaa eri koodien vastakkainen kieli-indeksijärjestys: harjoittelijassa 0 = ohut e; PR #179:ssä luettelo alkaa paksusta E:stä.

Näistä tehtiin **v1.0-suunnitelma**, mutta se ei ollut koodin toteutuslupa.

## 4. Kolmas, kiinnostavuuteen keskittynyt auditointikierros

Kaksi erillistä pedagogis-pelillistä auditointia kritisoi v1.0:n kiinnostavuutta:

- Ensimmäisen ennakkoarviot: pedagogiikka **6,5/10**, kiinnostavuus **4,5/10**; ehdotti **merkittävää pelimekaniikan uudistamista**.
- Toisen ennakkoarviot: pedagogiikka **6/10**, kiinnostavuus **5/10**; ehdotti nykyisen ketjun säilyttämistä mutta painopisteen muuttamista.

**Luvut ovat AI-asiantuntija-arvioita, eivät oikeiden pelaajien testituloksia.** Yhteinen kriittinen havainto: kolmen peräkkäisen oikean sävelen löytäminen on helposti *kolme peräkkäistä kysymystä*, ei pelaajan mielestä itsenäisesti ratkaistu musiikillinen ongelma. Pelaaja voi kyllästyä 5.–10. kierroksen aikana. Valinnan tekninen vaikutus ketjuun ei riitä, jos pelaaja ei koe valintaa merkitykselliseksi.

Toinen auditointi kiinnitti huomiota siihen, että 0–12-alueellakin pelaaja saattaa välttää nauhoja 6–12, ja sävelestä toiseen etenevä ketju saattaa pysyä samalla kielellä pelkkänä nauhalaskentana. Molemmat auditoinnit painottivat oikeaa kitaraa ja mieleen palauttamista ilman näyttöä.

## 5. Säveljahti v1.1 – viimeisin suositeltu SUUNNITTELUSUUNTA, EI LOPULLINEN HYVÄKSYNTÄ

Työnimi **Sävelsilta** tarkoittaa pulmapohjaista kierrosta Säveljahdin sisällä, **ei toistaiseksi erilliseksi hyväksyttyä peliä**.

**Mekaniikan muutos:** pelaajalle kerrotaan lähtölöydön jälkeen **koko kolmen paikan pulman tavoite**, esimerkiksi: ”Etsi sama C yhtä korkealta toiselta kieleltä ja toinen C oktaavia matalammalta.” Hän saa ratkaista puuttuvat kohteet **kummassa järjestyksessä tahansa, jos tehtävän ehdot sallivat sen**. Automaattinen johtolanka jää tukevaksi ohjeeksi, mutta se ei estä toisen oikean tavoitteen valitsemista. Tavoite → ratkaisu → oivallus, eikä vain johtolanka → johtolanka → johtolanka.

**Tarkka esimerkki (0–5):** Pelaaja aloittaa **B-kieli/1 = C4**. Kaksi jäljellä olevaa kohdetta ovat **G-kieli/5 = C4** (sama soiva korkeus) ja **A-kieli/3 = C3** (oktaavia alempi). Pelaaja saa valita niiden järjestyksen. Jos hän aloittaa A-kielen C3:sta, pulman teksti ja vastausjoukot muodostetaan siitä käsin, eikä mahdotonta alempaa C:tä pyydetä.

**V1.1:n muita suosituksia:**
- 0–12-tehtävissä normaalisti vähintään yksi löytö **nauhoilta 6–12** ja mahdollisuuksien mukaan nimetylle kielelle.
- Osassa tehtävistä pelaaja ennustaa/nimeää sävelen **ennen** paikan paljastamista; ei teeskennellä kysyvänsä nimeä, joka on jo näkyvissä.
- **Kitara kädessä** on vapaaehtoinen myös pulman keskellä: piilota virtuaalinen lauta, kokeile omalla kitaralla, palauta lauta ja merkitse paikka. Peli ei väitä tunnistaneensa soittoa.
- Istunnon aikainen muisti voi suosia vähän nähtyjä ja avustetusti löytyneitä paikkoja. Mahdollinen ”Tämän istunnon löydöt” -kartta näkyisi kierrosten välillä, ei ratkaisua paljastavana koko ajan. Ei pysyvää osaamisprofiilia v1.1:ssä.
- Loppupalaute nimeää yhden konkreettisen musiikillisen oivalluksen; ei pitkiä teoriaesseitä.
- Palautteessa ei anneta täsmällistä seuraavaa paikkaa ilman pyydettyä vihjettä. Vääräkin painallus soi oikein.

**Kriittinen päätös on yhä avoin:** voittaako alkuperäinen vaiheittainen A-versio vai pulmapohjainen B-versio kohderyhmän oikeassa kokeessa? v1.1 on suositus, ei vahvistettu lopullinen pelimuoto.

## 6. Tehdyt prototyypit ja A/B-käyttäjäkoe

**Tehty paikallinen, pelattava HTML-prototyyppi:** `Saveljahti_AB_kokeiltava_prototyyppi.html`. Se sisältää:
- **A · Johtolangat**: tavoitteet paljastuvat vaiheittain.
- **B · Pulma**: kaksi puuttuvaa tavoitetta näytetään yhdessä, oikeat ratkaisut voi tehdä vaihtoehtoisessa järjestyksessä.
- Kuuden kielen 0–12-otelauta, sekä erillinen 0–5-hahmotelma.
- Oikeat MIDI-äänet paikkoja napautettaessa, tehtäväpalaute, vapaaehtoinen Kitara kädessä -tila, valmiiden löytöjen kuuntelu.
- Kaksi vertailtavaa tehtäväsarjaa **X ja Y**, yhteensä 6 rinnastettua vertailutehtävää, sekä kolme ylimääräistä 0–5-harjoitusta; prototyypissä ei ole yleistä tehtävägeneraattoria.

**Tehty myös `Saveljahti_AB_pilottipaketti_v0_1_2026-11-23.md`**, jossa ovat kuuden pelaajan 25–35 minuutin kokeen ohje, tehtäväkortit, musiikillinen vastausavain, ennen/jälkeen-paikannukset oikealla kitaralla ja arviointipohja.

Koeasetelma: 5–6 noin 1–2 vuotta soittanutta kitaristia; kukin kokeilee molempia A- ja B-pelitapoja, järjestys tasapainotetaan; kummassakin vertailukelpoiset sävelsuhteet ja nauhojen 6–12 tehtävät. Havainnoidaan **minkä vaihtoehdon pelaaja valitsee oma-aloitteisesti uuteen kierrokseen**, itsenäinen päättely, vihjeiden tarve ja uuden paikan löytäminen oikealta kitaralta ilman mallia. Vapaaehtoinen uusi koe 2–3 päivän päästä auttaisi muistamisen tarkastelussa.

**Testipaketti ja prototyyppi ovat valmiit, mutta oikeiden soittajien käyttäjäkoetta EI ole tehty eikä A/B-voittajaa valittu.** Fyysisen iPhonen Safari-ääni vaatii erillisen laitetestin. Aiempi selaintestaus ei todista Safari-ääntä eikä pedagogista tehokkuutta.

## 7. Muut esillä olleet peli-/harjoitusideat

- **Korjaa kartta:** sävelpaikka on merkitty tarkoituksella väärin ja pelaaja korjaa sen. Vaihtoehtoinen idea, ei hyväksytty toteutus.
- **Karttajahti:** löydä kaikki nimetyn sävelen paikat; yksinkertaisempi ratkaisu, lähellä vanhaa tehtävää.
- **Suora kielikohtainen sävelkarttahaaste:** esim. ”Etsi G D-kieleltä” ja ”Mikä sävel on B-kielen 3. nauhalla?” Pedagogisesti selkeä, mutta yksin pelattuna helposti mekaaninen. Osia ehdotettu osaksi Säveljahtia.
- **Riffin muuttoreitti:** lyhyt kahden sävelen riffi siirretään toiseen kieli-/oktaaviasemaan käyttäen oikeita sävelnimiä. Mahdollinen myöhempi soveltava harjoitus, ei v1:n ydin.
- **Kitara ensin:** soita/etsi fyysisellä kitaralla ennen virtuaalista vahvistusta. Ei hyväksytty erilliseksi peliksi; ideasta syntyi Säveljahdin valinnainen **Kitara kädessä** -tila.
- **Sävelsilta:** vahvin viimeisin vaihtoehto nykyiselle automaattiselle Sävelketjulle; toistaiseksi Säveljahdin B-kierrosmallin työnimi, ei erillinen Musapelit-kortti.

Älä kirjaa näitä kaikkia ”toteutettaviksi peleiksi”: osa on tietoisesti hylätty, varalla tai yhdistetty Säveljahdin ominaisuuksiin.

## 8. GitHub-yhteydet ja toteutusrajat

GitHub-tila tarkistettiin keskustelussa 23.11.2026; tilat tarkistettava uudelleen ennen toimenpiteitä:

- [Issue #50](https://github.com/ristotoivanen/Musiikin-kartta/issues/50): aiempi Säveljahdin suunnitelma, sisältää vanhentuneen yhden kielen aloituksen. Kuusi kieltä on uudempi hyväksytty lähtökohta.
- [Issue #49](https://github.com/ristotoivanen/Musiikin-kartta/issues/49): yhteinen oppimispelien logiikka, vapaa eteneminen, vihjeet ja linkitykset.
- [Issue #43](https://github.com/ristotoivanen/Musiikin-kartta/issues/43), [PR #46](https://github.com/ristotoivanen/Musiikin-kartta/pull/46): sävelen soittaminen aktiivisesta NoteJourney-harjoituksesta. 23.11. PR #46 avoin eikä aktiivinen äänitoteutus vielä mukana betan `NoteJourney.tsx`:ssä. Valmiin ketjun kuuntelu vaatii erillisen tilakäsittelyn, koska vanha lauta estää valinnat valmistuttuaan.
- [PR #179](https://github.com/ristotoivanen/Musiikin-kartta/pull/179): Otelauta-ydinopintojen avoin luonnos, jossa unisono-/oktaavi-/kiintopisteharjoituksia. Pedagogiset esimerkit kannattaa hyödyntää, mutta Säveljahdin pitää erottua pelaajan ratkaisemilla pulmilla eikä kopioida samoja tehtäviä.

**Arkkitehtuuri:** hyödynnä harkiten nykyistä `harjoittelija/music.ts`-sävelmatematiikkaa, `Board`-otelautaa ja `ReferencePlayer`-soitinta. Älä tee rinnakkaista äänimoottoria tai laajaa yleistä pelimoottoria ilman erillistä päätöstä. Vanhat suorat harjoitusosoitteet pitää säilyttää.

## 9. Mitä pääkeskustelussa pitää muistaa ja tehdä seuraavaksi?

**Säveljahti:**
1. Pelin pedagoginen tavoite, ketjuperheet ja äänen vaatimukset ovat määriteltyjä.
2. **Lopullinen A/B-mekaniikka on edelleen avoin.** v1.1:n Sävelsilta-pulmamalli on lupaavin suositus, ei testattu voittaja.
3. Kokeile paikallista A/B-prototyyppiä ja mahdollisuuksien mukaan toteuta 5–6 soittajan pieni vertaileva pilotti. Testaa erityisesti todellista jatkohalua ja oikean kitaran soveltamiskykyä.
4. Pilottitulosten perusteella tee lopullinen toteutusraja ja vasta sitten erillinen päätös GitHub-työstä / betaan viemisestä.

**Sävelverkko:** jatkuu omassa keskustelussaan uusimman **0–12 / 0–24 ja kulmikkaat unisono-/oktaaviviivat** sisältävän HTML-prototyypin pohjalta. Sitä ei pidä sekoittaa tai yhdistää Säveljahtiin ilman päätöstä.

**Tämän koonnin tekeminen ei muuttanut GitHubia, betaa eikä tuotantoa.**

## 10. Siirrettävät paikalliset tiedostot

- `Musiikin_kartta_Saveljahti_Savelketju_v1_0_lopullinen_suunnitelma_2026-11-23.md`
- `Musiikin_kartta_Saveljahti_v1_1_pedagoginen_suunnitteluehdotus_2026-11-23.md` **(viimeisin suunnittelusuunta)**
- `Saveljahti_AB_pilottipaketti_v0_1_2026-11-23.md`
- `Saveljahti_AB_kokeiltava_prototyyppi.html` **(pelattava A/B-vertailu)**
- `Saveljahti_savelketju_suunnitelma_auditointiin_2026-11-23.md` (varhaisempi v0.9)
- `Liitetty teksti(20261123-171449).txt` ja `Liitetty teksti (2)(2).txt` (ensimmäiset auditoinnit)
- `Liitetty teksti(20261123-174146).txt` ja aiempi ChatGPT-kirjaston pedagoginen auditointi (myöhemmät arvioinnit)