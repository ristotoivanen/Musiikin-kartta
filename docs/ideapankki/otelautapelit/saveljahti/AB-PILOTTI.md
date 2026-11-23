# Säveljahti – pelimekaniikkojen A/B-pilottipaketti v0.1

**Päiväys:** 23.11.2026  
**Tila:** valmiit tehtäväkortit ja koeohje, **ei toteutuspäätöstä, käyttäjätestituloksia eikä väitettä todistetusta oppimisesta**.  
**Kohderyhmä:** noin 1–2 vuotta kitaraa soittaneet; osaa jo soittaa mutta sävelten paikannus on epävarmaa.  
**Vertailtavat vaihtoehdot:** A = v1.0:n peräkkäiset automaattiset johtolangat, B = v1.1:n alusta näkyvä musiikillinen pulma ja tarvittaessa automaattinen vihje.  
**Huomautus:** tämä on ohjattu, rajattu testi. Se ei ole kummankaan pelin täysi toteutus eikä osoita, että v1.1:n generaattori toimii kaikissa tilanteissa.

## 1. Päätettävä kysymys

**Haluaako kohderyhmän soittaja mieluummin seurata kolmea automaattista johtolankaa (A) vai ratkaista kokonaisuutena näkyvän sävelpulman (B)?** Samalla havainnoidaan itsenäistä päättelyä ja siirtymistä oikean kitaran otelaudalle.

Tämä koe **ei** vielä vertaa äänimoottoreita, 0–5- ja 0–12-käyttöliittymien toteutuksia, istuntokartan vaikutusta eikä kestävää oppimista. Uusien ominaisuuksien antaminen vain B:lle vääristäisi vertailua.

## 2. Kokeen reunaehdot

- Sama kuuden kielen 0–12-otelauta, samat näkyvät kieli- ja nauhamerkinnät, sama ääni ja samat vihjeet A:ssa ja B:ssä. Vapaa kieli = nauha 0.
- Yhden kierroksen **kolme sijaintia sisältävät lähtöpaikan**. Lähtöpaikka määritetään tässä ohjatussa kokeessa valmiiksi, jotta eri pelaajien suoritukset ovat vertailtavissa. Oikeassa pelissä aloituksen valintaa koskeva vapaus säilyy.
- Kumpikin versio harjoittaa samanlaisia suhteita (sama soiva sävelkorkeus, oktaavi, nimenvaihto). Jokainen kierros vaatii vähintään yhden sijainnin nauhalta 6–12.
- A:ssa ohjaaja näyttää johtolangat yksi kerrallaan. B:ssä ohjaaja näyttää molemmat puuttuvat tavoitteet heti lähtösävelen jälkeen, eikä järjestystä määrätä, jos ne ovat riippumattomia. B:ssä ohjaaja voi korostaa yhtä tavoitetta **ilman että toinen oikea ratkaisu hylätään**.
- Kaikki otelaudan kosketukset tuottavat oikean korkuisen äänen testissä, jos käytettävä prototyyppi pystyy siihen. Paperitestissä ohjaaja voi soittaa korkeuden sävelsoittimesta; **äänetön paperitesti ei testaa äänikokemusta**.
- Väärä paikka: kerro valitun paikan nimi ja soiva sävel, älä välittömästi oikeaa koordinaattia. Pelaaja saa yrittää uudelleen, käyttää yhtä samanlaista vihjeporrasta tai lopettaa.
- Molemmissa versioissa sallitaan vapaaehtoinen oman kitaran käyttö, mutta sitä ei tuoda vain B:n lisäeduksi.
- Ei pisteitä, aikarajoja, etenemislukkoja, mikrofonivahvistusta tai väitettä fyysisen soiton automaattisesta tarkistuksesta.

## 3. Koejärjestys ja vastapainotus (6 osallistujaa)

Kaksi tehtäväsarjaa, **X** ja **Y**. Jokaisessa kolme sisällöltään rinnastettua kierrosta. Jokainen pelaaja kokeilee molempia mekaniikkoja ja molempia tehtäväsarjoja, mutta ei samaa sarjaa kahdesti.

| Osallistuja | Ensimmäinen jakso | Toinen jakso |
|---|---|---|
| P1 | A + X | B + Y |
| P2 | B + X | A + Y |
| P3 | A + Y | B + X |
| P4 | B + Y | A + X |
| P5 | A + X | B + Y |
| P6 | B + X | A + Y |

Tämä tasapainottaa kummankin mekaniikan esiintymisen kummassakin tehtäväsarjassa (3 kertaa) ja aloitusjärjestyksen (A ensin 3, B ensin 3). Jos osallistujia on viisi, kuudennen ryhmän puuttuminen kirjataan tulosten tulkintaan.

## 4. Testin kulku, 25–35 minuuttia/pelaaja

1. **Johdanto, 2 min:** "Tässä vertaillaan kahta tapaa harjoitella otelaudan säveliä. Testi kohdistuu tehtäviin, ei sinuun. Kokeile toimia kuten toimisit kotona. Voit käyttää vihjeitä ja lopettaa milloin tahansa." Älä kerro kumman version oletetaan olevan parempi.
2. **Ennakkotehtävät oikealla kitaralla, 4–5 min:** neljä itsenäistä paikannus-/nimeämistehtävää (liite 3), ei virtuaalista otelautaa eikä vastausten näyttämistä ennen vastausta.
3. **Ensimmäinen pelitapa, 6–8 min:** sarjan kolme tehtävää. Havaitse ensimmäinen yritys, kokeilu, vihjeet, selitykset ja vierityksen vaikutus.
4. **Toinen pelitapa, 6–8 min:** rinnakkainen sarja. Sama ohjaajan neutraali käytös ja avun saatavuus.
5. **Vapaa jatkaminen, 2–3 min:** "Varsinainen vertailu päättyi. Saat halutessasi pelata vielä yhden kierroksen kummalla tavalla tahansa tai lopettaa." Älä vaadi lisäkierrosta. Kirjaa valitsiko A:n, B:n vai ei kumpaakaan. Tarjoa yksi uusi rinnastasoinen kierros tarpeen mukaan (testikorteista eri aloitus, ohjaajan tarkistamana).
6. **Jälkitehtävät oikealla kitaralla, 4–5 min:** neljä muuta mutta samanrakenteista tehtävää (liite 3). Ei virtuaalista lautaakaan avuksi. Tavoitteena tutkia uuden tilanteen ratkaisemista, ei pelissä toistettua muistikuvaa.
7. **Lyhyt haastattelu, 2–3 min:** kysy alla olevat neljä kysymystä. Valinnainen samanlainen kertaus 2–3 vrk:n kuluttua on suositeltava mutta ei tämän kertatestin vaatimus.

## 5. Pelaajalle näytettävät tehtäväkortit

**Tässä osiossa ei ole ratkaisukoordinaatteja.** Testaajan pitää pitää liitteen 1 vastausavain erillään. Kitaran merkit näyttävä 0–12-lauta on käytössä, mutta **sävelten nimet eivät näy soluissa ennen valintaa**. Merkintä "B-kieli" tarkoittaa kitaran toiseksi ohuinta kieltä; sovelluksen H/B-nimikäytäntöä ei selitetä uudelleen.

### Sarja X

**X1 · Saman sävelen jäljillä**  
Lähtö: B-kielen 1. nauha (C, soiva C4).

- **A – vaiheittain:** 1) "Löydä yhtä korkealta soiva C toiselta kieleltä." 2) "Löydä C oktaavia ylempää kuin lähtösävel."  
- **B – tavoite kerralla:** "Täydennä C-silta kahdella uudella paikalla: yksi C soi täsmälleen lähtösävelen korkeudella eri kielellä, toinen on oktaavia korkeampi. Saat valita järjestyksen."

**X2 · Saman sävelen jäljillä**  
Lähtö: D-kielen 3. nauha (F, soiva F3).

- **A – vaiheittain:** 1) "Löydä yhtä korkea F A-kieleltä." 2) "Löydä F oktaavia ylempää kuin lähtösävel, joltakin muulta kieleltä."  
- **B – tavoite kerralla:** "Täydennä F-silta: löydä lähtösävelen kanssa yhtä korkea F A-kieleltä ja oktaavia korkeampi F toiselta kieleltä. Saat valita järjestyksen."

**X3 · Seuraa säveliä**  
Lähtö: paksun E-kielen 1. nauha (F2).

- **A – vaiheittain:** 1) "Etsi F oktaavia korkeammalta." 2) "Etsi siitä kokosävelaskeleen korkeampi G A-kieleltä."  
- **B – tavoite kerralla:** "Rakenna F–G-silta. Löydä F oktaavia lähtösäveltä korkeammalta ja G A-kieleltä. G soi kokosävelaskeleen ylempänä kuin etsimäsi F. Saat valita järjestyksen."

### Sarja Y

**Y1 · Saman sävelen jäljillä**  
Lähtö: B-kielen 3. nauha (D, soiva D4).

- **A – vaiheittain:** 1) "Löydä yhtä korkealta soiva D toiselta kieleltä." 2) "Löydä D oktaavia ylempää kuin lähtösävel."  
- **B – tavoite kerralla:** "Täydennä D-silta kahdella uudella paikalla: yksi D soi täsmälleen lähtösävelen korkeudella eri kielellä, toinen on oktaavia korkeampi. Saat valita järjestyksen."

**Y2 · Saman sävelen jäljillä**  
Lähtö: D-kielen 2. nauha (E, soiva E3).

- **A – vaiheittain:** 1) "Löydä yhtä korkea E A-kieleltä." 2) "Löydä E oktaavia ylempää kuin lähtösävel, joltakin muulta kieleltä."  
- **B – tavoite kerralla:** "Täydennä E-silta: löydä yhtä korkea E A-kieleltä ja oktaavia korkeampi E toiselta kieleltä. Saat valita järjestyksen."

**Y3 · Seuraa säveliä**  
Lähtö: paksun E-kielen 3. nauha (G2).

- **A – vaiheittain:** 1) "Etsi G oktaavia korkeammalta." 2) "Etsi siitä kokosävelaskeleen korkeampi A D-kieleltä."  
- **B – tavoite kerralla:** "Rakenna G–A-silta. Löydä G oktaavia lähtösäveltä korkeammalta ja A D-kieleltä. A soi kokosävelaskeleen ylempänä kuin etsimäsi G. Saat valita järjestyksen."

**Testiohje:** A-versiossa ei näytetä toista vaihetta ennen ensimmäisen täyttymistä; B-versiossa näytetään molemmat heti. Pelaajan oikea vaihtoehtoinen valinta hyväksytään B:ssä, eikä sitä ohiteta automaattisen vihjeen perusteella. Yhtä paikkaa ei lasketa kahteen löytöön.

## 6. Mitä havainnoidaan?

Kirjaa kunkin kierroksen jälkeen:

| Kenttä | Kirjattava havainto |
|---|---|
| Osallistuja / A tai B / X tai Y / tehtävänumero | Esim. P1 · A · X1 |
| Ensimmäinen oikea yritys kummassakin uudessa löydössä | 0, 1 tai 2 (ei lähtöpaikkaa) |
| Väärät kosketukset | lukumäärä, ei rangaistusta |
| Vihjeet ja paljastukset | lukumäärä erikseen |
| Löytöjärjestys | esim. ensin oktaavi, sitten unisono |
| Kitaran käyttö | ei / vapaaehtoinen ennen näyttöä / vasta jälkeen |
| Selitys omin sanoin | pystyykö selittämään *miksi* löydöt liittyvät toisiinsa? (kyllä / osittain / ei + lausuma) |
| Kiinnostavuushavainnot | oma-aloitteisuus, turhautuminen, epäselvä tehtävänanto, koettu valinnanvapaus |
| Näkymän käyttö | häiritsikö vieritys tai aloitus-/tavoitepaikan katoaminen? |

**Kierroksen jälkeen, ennen yhteenvedon selitystä:** "Miten tiesit, mistä etsiä?" Älä kysy tätä jokaisen painalluksen jälkeen, koska se muuttaisi peliä jatkuvaksi suulliseksi tentiksi.

**Loppuhaastattelu:**
1. "Kummassa ymmärsit paremmin, mitä yritit saavuttaa?"
2. "Kummassa jouduit itse enemmän päättelemään? Anna esimerkki."
3. "Kummalla pelaisit huomenna oma-aloitteisesti? Miksi?"
4. "Mikä tuntui turhalta, epäselvältä tai liian helpolta?"

Kysy lisäksi asteikolla 1–5 kummankin pelitavan **koettu kiinnostavuus** ja **koettu hyöty otelaudan oppimisessa**. Nämä ovat kokemuksia, eivät oppimisen mittaus.

## 7. Tulkinta ja päätös

**B:n jatkokehitystä puoltaa**, jos enemmistö valitsee sen vapaaehtoiseen jatkamiseen, ymmärtää pulman kokonaisuuden ilman lisäselitystä ja osoittaa ratkaisunsa perustuvan sävelsuhteeseen eikä vain summittaiseen kokeiluun. **A:n säilyttämistä puoltaa**, jos B:n lisätavoitteet kuormittavat, hidastavat tai aiheuttavat valintoja ilman koettua hyötyä. Jos tulos jakautuu, harkitse A:ta oletuksena ja B:n pulmaa valinnaisena tehtävätyyppinä; älä julista selkeää voittajaa.

Muutama huomio:
- B voi viedä enemmän aikaa ilman, että se on huonompi. Aika yksin ei ole laatumittari.
- Vapaaehtoinen jatkaminen ei ole puhdas kiinnostavuusmittari tutkittavassa tilanteessa, mutta se on parempi signaali kuin pelkkä miellyttävyyskysymys.
- Ennen/jälkeen-tehtävien erot voivat johtua tehtävien eroista, aiemmasta osaamisesta, harjoitusvaikutuksesta tai sattumasta. Kuuden osallistujan koe ei todista oppimistehoa eikä vertailuversioiden paremmuutta väestötasolla.
- Ylempien nauhojen käyttö on **molempien versioiden yhteinen vaatimus**. Näin se ei vääristä pulmarakenteen vertailua.
- Jos huomataan, että molemmat versiot ovat harjoitusmaisia tai molemmat tuntuvat puuduttavilta, kumpaakaan ei pidä hyväksyä automaattisesti. Silloin yksinkertaisempi kielikohtainen muistiharjoitus voi olla järkevämpi.

## Liite 1. Ohjaajan vastausavain ja musiikillinen tarkistus

**Vakiovire, soivat MIDI-korkeudet:** paksu E2=40, A2=45, D3=50, G3=55, B3=59, ohut e4=64. `(kieli, nauha)` on yksiselitteinen paikkamerkintä; `C4` tarkoittaa soivaa sävelkorkeutta, ei kieltä/nauhaa.

| Tehtävä | Lähtö | Saman nimen / unisonon / oktaavin slotit | Tarkistus |
|---|---|---|---|
| X1 | B/1 = C4, 60 | C4 eri kielellä **G/5 tai D/10**; C5 **e/8** | 60,60,72; e/8 takaa ylänauhan |
| X2 | D/3 = F3, 53 | F3 A-kielellä **A/8**; F4 **e/1, B/6 tai G/10** | 53,53,65; A/8 takaa ylänauhan |
| X3 | E/1 = F2, 41 | F3 **D/3 tai A/8**; G3 A-kielellä **A/10** | 41,53,55; A/10 takaa ylänauhan |
| Y1 | B/3 = D4, 62 | D4 eri kielellä **G/7 tai D/12**; D5 **e/10** | 62,62,74; e/10 takaa ylänauhan |
| Y2 | D/2 = E3, 52 | E3 A-kielellä **A/7**; E4 **e/0, B/5 tai G/9** | 52,52,64; A/7 takaa ylänauhan |
| Y3 | E/3 = G2, 43 | G3 **G/0, D/5 tai A/10**; A3 D-kielellä **D/7** | 43,55,57; D/7 takaa ylänauhan |

**Tärkeä sääntö:** X3:ssa ja Y3:ssa ensimmäisen oktaavipaikan saa valita useasta paikasta, ja toisen tavoitteen määrätty sävelkorkeus pysyy samana. B:n vapaa löytöjärjestys on turvallinen. Kaikissa kuudessa tehtävässä kummankin slotin ratkaisujoukot ovat erilliset, ja jokaisen oikean valinnan jälkeen toinen slotti voidaan täyttää. Tämä on tarkistettu tehtäväkohtaisesti, **ei väite yleisen generaattorin täydellisestä oikeellisuudesta**.

**Fyysinen kitara:** ohjaaja ei arvioi vain äänen tasoa. Jos tehtävä pyytää nimenomaan tiettyä kieltä tai nauhaa, myös käytetty paikka pitää havainnoida. Ilman mikrofoni- tai kameratunnistusta sovellus ei vahvista tätä itsenäisesti.

## Liite 2. Neutraali palaute ja vihjeet

- Valinnan jälkeen: "Valitsit [kieli]/[nauha]. Siinä soi [sävel]." Jos paikka ei täytä ehtoa: "Tämä ei täytä tämän tavoitteen ehtoa. Voit yrittää uudelleen tai käyttää vihjettä."
- Ensimmäinen vihje: muistuta suhteesta, esimerkiksi "oktaavi = 12 puolisävelaskelta" tai "täsmälleen sama korkeus voi löytyä toiselta kieleltä". Älä anna koordinaattia.
- Toinen vihje (vain pyydettäessä): kerro yksi sopiva kieli tai nauha-alue ilman täsmällistä ratkaisua.
- Ratkaisun näyttö (vain pyydettäessä): näytä yksi kelvollinen paikka, merkitse avustetuksi. Testi saa jatkua, mutta löytöä ei lasketa itsenäiseksi onnistumiseksi.
- Valmiin pulman jälkeen: "Mikä näitä paikkoja yhdistää?" ja toista hyväksytyt sävelet löytöjärjestyksessä. Voidaan antaa yksi lause sääntöä vasta havainnon jälkeen.

## Liite 3. Oikean kitaran ennen/jälkeen-tehtävät

Tavoite on havainnoida **uusia** sijainteja ja itsenäistä nimeämistä, ei testata äänen soinnin täydellisyyttä. Ohjaaja ei näytä mallia ennen vastausta. Nimeämisessä kelpaavat enharmoniset vastineet (esim. C♯/D♭), jos sama soiva sävel tarkoitetaan. Pidä tehtävissä kaksi matalampien nauhojen ja kaksi ylempien nauhojen tehtävää sekä tasaisesti nimi→paikka ja paikka→nimi.

**Ennakkotehtävät** (järjestys: nimi→paikka, nimi→paikka, paikka→nimi, paikka→nimi):

1. "Etsi C paksulta E-kieleltä, nauhat 0–12." → E/8 = C3.
2. "Etsi C♯ A-kieleltä, nauhat 0–12." → A/4 = C♯3.
3. "Mikä sävel on G-kielen 11. nauhalla?" → F♯4.
4. "Mikä sävel on D-kielen 1. nauhalla?" → D♯3/E♭3.

**Jälkitehtävät** (rinnakkainen rakenne, eri sijainnit):

1. "Etsi D paksulta E-kieleltä, nauhat 0–12." → E/10 = D3.
2. "Etsi D♯ A-kieleltä, nauhat 0–12." → A/6 = D♯3/E♭3.
3. "Mikä sävel on G-kielen 8. nauhalla?" → D♯4/E♭4.
4. "Mikä sävel on D-kielen 4. nauhalla?" → F♯3.

Kumpikin sisältää kaksi paikkaa nauhoilta 6–12. **Rajoitus:** esitehtävä ja jälkitehtävä eivät ole kalibroituja rinnakkaistestejä. Älä väitä pelin aiheuttaneen oppimista pelkän pistemääräeron perusteella. Parantamisen arvoinen lisäkoe on 2–3 päivän päästä tehtävä uusi, vastaava paikannus ilman ruutua.

## Liite 4. Päätösmuistio täytettäväksi pilotin jälkeen

- Testatut osallistujat ja taustat:
- Pystyivätkö pelaajat erottamaan A:n ja B:n idean ilman selityksiä?
- Vapaaehtoinen jatko: A / B / ei kumpaakaan (määrät):
- Missä havaittiin itsenäistä sävelpäättelyä?
- Missä havaittiin vain yritys–erehdys-ratkaisua?
- Koettu vaikeus ja mobiilivierityksen esteet:
- Ennen/jälkeen-havainnot oikealla kitaralla, ilman vaikutusväitettä:
- Yllättävät ongelmat:
- **Päätös:** A / B / hybridi / ei kumpikaan.
- **Perustelu:**
- **Edellytetyt muutokset ennen toteutusta:**
- **Avoimet asiat fyysisen iPhonen kokeeseen:**

**Ei GitHub-, koodi- tai tuotantotoimia tämän dokumentin perusteella.**