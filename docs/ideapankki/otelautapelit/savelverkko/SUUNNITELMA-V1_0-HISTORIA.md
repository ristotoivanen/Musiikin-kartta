# Musiikin kartta – Sävelverkko v1.0

**Päiväys:** 23.11.2026  
**Tila:** valmis suunnitelma riippumattomaan arviointiin ja myöhempään toteutuspäätökseen; **ei toteutuslupaa**  
**Sijoitus:** Musapelit, omana pelinä/harjoituksena Säveljahdin rinnalla  
**Kohderyhmä:** noin 1–2 vuotta kitaraa soittaneet, jotka osaavat jo soittaa mutta eivät hahmota kaikkia sävelpaikkoja otelaudalla.

## 1. Ydinajatus ja oppimistavoite

**Sävelverkko opettaa löytämään yhden sävelnimen kaikki esiintymät kitaran otelaudalta ja ymmärtämään niiden väliset suhteet.** Kun käyttäjä napauttaa esimerkiksi yhtä C:tä, hän näkee kaikkien samalla pelialueella olevien C-paikkojen verkon. Kun hän napauttaa D:tä, näkyviin tulee D-verkko. Verkko ei tarkoita, että kaikkien pisteiden välillä on oktaavi: osa on **sama sävelkorkeus eri kielillä (unisono)**, osa **12 puolisävelaskelen oktaaviyhteyksiä**.

Käyttäjä oppii (a) löytämään yhden sävelen jokaiselta mahdolliselta kieleltä, (b) näkemään toistuvia otelaudan malleja, (c) erottamaan saman nimen, saman korkeuden ja oktaavin, (d) soveltamaan rakennetta uudelle sävelnimelle tai omalla kitaralla. Tavoite ei ole oktaavinumeroiden tentti, pelkkä virtuaalisen ruudukon muistaminen eikä alkeisopetus.

**Tuotelupaus:** *Valitse yksi C. Näe, missä kaikki muut C:t ovat. Harjoittele niin, että löydät ne lopulta ilman valmista karttaa.*

## 2. Rajaus ja pelialue

- Vakiovireinen kuusikielinen kitara: paksu E, A, D, G, B, ohut e. Kaikki kuusi kieltä ja avoimet kielet ovat mukana alusta.
- **0–5** on vähimmäisalue, **0–12** vapaasti valittava laajennus; mitään pienempää yksikielistä alkukenttää tai pakollista etenemislukkoa ei tehdä.
- Ensimmäisessä versiossa seitsemän luonnollista sävelluokkaa C, D, E, F, G, A, B (näyttönimi sidotaan koko sivuston H/B-käytäntöön). Kromaattinen ♯/♭-verkko voidaan lisätä erikseen myöhemmin.
- Kullakin sävelnimellä ovat mukana **kaikki** sallitut kieli–nauha-paikat, myös samalla kielellä vapaa ja 12. nauha.
- Säveljahti pysyy erillisenä pelinä. Sävelverkko vastaa kysymykseen *missä tämän sävelen koko verkko sijaitsee?* eikä kopioi automaattista johtolankaketjua.

## 3. Kaksi täydentävää käyttöä, ei kahta pakollista tasoa

### A. Tutki verkkoa (ensimmäisen version tunnusomainen toiminto)

1. Pelaaja näkee kuusi kieltä ja valitsemansa nauha-alueen.
2. Hän napauttaa **mitä tahansa luonnollisen sävelen paikkaa** (esimerkiksi B-kielen 1. nauha: C4) tai valitsee sävelnimen C–B kevyestä sävelvalitsimesta.
3. Napautettu paikka soi **todellisella soivalla korkeudellaan**. Kaikki saman sävelnimen paikat tulevat **heti näkyviin** ja niiden välille piirretään selkeä yhdysverkko. Tämä toteuttaa suoraan käyttäjän toivoman toiminnan.
4. Pelaaja voi napauttaa mitä tahansa kohtaa uudelleen, kuulla soivan korkeuden ja katsoa, onko kahden paikan suhde *sama korkeus* vai *oktaavi*. Yksittäisen pisteen valinta korostaa vain sen omia suoria yhteyksiä, jotta viivat eivät peitä otelautaa.
5. Pelaaja napauttaa toista luonnollista säveltä, esimerkiksi D:tä: C-verkko vaihtuu D-verkoksi ilman uutta valikkoa.
6. Väärä/ei-luonnollinen nuotti soi ja näyttää todellisen nimensä. Se ei muuta näkyvää perussävelverkkoa vahingossa; selkeä teksti kertoo, että tässä versiossa tutkitaan luonnollisia säveliä.

Tämän tilan tarkoitus on **visuaalinen ja auditiivinen ymmärtäminen**. Valmis kartta saa näkyä heti: sitä ei esitetä osaamisen mittarina.

### B. Rakenna muistista (vapaa harjoittelu)

1. Pelaaja valitsee sävelen C–B tai saa ehdotuksen jahtiin, esimerkiksi *Löydä kaikki D:t*.
2. Muut D-paikat eivät näy ennalta. Ensimmäinen oikea paikka aloittaa verkon; muut löydetään vapaassa järjestyksessä.
3. Jokainen oikea uusi D jää näkyviin ja liitetään verkkoon. Jos useita yhdyskohtia on tarjolla, peli valitsee vain luettavuuden kannalta oleelliset viivat. Väärät, toistetut ja löydetyt paikat soivat oikealla korkeudella; toisto ei anna uutta löydöstä eikä rankaise.
4. Näkymä kertoo `löydetty 2/6` ja tehtävän sävelnimen. Vihje voi selittää yhden suhteen tai antaa kielivihjeen; *Näytä yksi paikka* paljastaa yhden mahdollisen kohteen ja merkitsee sen avustetuksi, ei itsenäiseksi.
5. Kun kaikki kohteet on löydetty tai pelaaja valitsee *Näytä koko verkko*, koko verkko on nähtävillä. Hän voi kuunnella sitä ja kokeilla omalla kitaralla.
6. Aiemmin löydetyn tai valmiin verkon napautus on aina sallittu kuuntelua varten. Täyttynyt verkko ei lukitse otelautaa.

Molemmat käyttötilat näkyvät heti. **Tutki** ei ole lukittu kertausvaiheen taakse eikä **Rakenna muistista** edellytä ensin teoriaosuutta.

## 4. Tarkan sävelkorkeuden malli

Sävelpaikka on `(stringId, fret)`, missä `fret` on 0–5 tai 0–12. Soiva MIDI-korkeus on `openMidi[stringId] + fret`; avoimet MIDI-korkeudet paksusta ohueen: `40, 45, 50, 55, 59, 64`. Harjoittelijan nykyisessä indeksijärjestyksessä ohut e voi olla indeksi 0: indeksejä ei saa siirtää muista otelautatoteutuksista suoraan.

- **Sama sävelnimi / sävelluokka:** `pitch % 12` on sama.
- **Sama soiva korkeus:** MIDI-arvo on täsmälleen sama, vaikka kieli ja nauha eroavat.
- **Oktaavi:** MIDI-ero on täsmälleen 12 puolisävelaskelta.
- **Kaksi oktaavia:** MIDI-ero on 24; tätä ei saa selittää yhdeksi oktaaviksi eikä piirtää yhden oktaavin viivana.
- Kitaran nuottikirjoitus on soivaan korkeuteen nähden oktaavitransponoiva. Tässä pelissä C3/C4/C5 tarkoittaa **soivaa korkeutta**, ei nuottiviivastolle kirjoitettua säveltä. Oktaavinumerot ovat vapaaehtoista lisätietoa, eivät pakollisia kysymysmuotoja.
- Sävelnimet ja H/B-valinta sidotaan sivuston yhteen yhteiseen esitystapaan. H/B-perusasiaa ei selitetä uudestaan tässä pelissä, jos se on jo käsitelty Kitaran perusteissa.

## 5. Otelaudalle piirrettävä verkko

**Olennainen vaatimus:** yhden C:n napautus paljastaa koko C-verkon heti *Tutki*-tilassa. Harjoittelutilassa viivat syntyvät löydettyjen paikkojen mukana.

V1:n verkko muodostetaan sääntöpohjaisesti seuraavasti:

1. Hae kaikki valitun sävelluokan solmut käytössä olevalta otelaudalta.
2. Ryhmittele solmut soivan MIDI-korkeuden mukaan (esim. C3, C4, C5). Saman ryhmän solmut ovat unisonoja.
3. Yhdistä saman korkeusryhmän solmut **vain riittävillä** visuaalisilla yhteyksillä yhdeksi ketjuksi/puuksi (ei kaikkia kaikkiin). Yhdysviivalla on selite *sama korkeus*.
4. Yhdistä vierekkäiset oktaaviryhmät yhdellä havainnollisella yhteydellä, jonka päiden MIDI-ero on 12. Yhdysviiva on eri tyylinen ja selite on *oktaavi*. Koko verkko pysyy yhtenä kokonaisuutena silloin, kun ryhmät löytyvät. Alueen sallitut pisteet määrittävät solmut; viivat eivät saa keksiä puuttuvia säveliä.
5. Oletusnäkymässä näytetään pieni määrä viivoja: ensisijaisesti noin `N−1` yhdystä N solmulle. Napautettu solmu korostaa omia suhteitaan, ja erillinen tekstimuotoinen yhteysluettelo kertoo saman tiedon ilman viivakartan tulkintaa.
6. Graafin geometrinen välimatka ei ole musiikillisen suhteen määritelmä. Viiva on havainnollistus, ei soitettava liikerata. Jokainen viiva tarvitsee taustalle **todellisen MIDI-suhteen**.

**Väristä riippumattomat tunnisteet:** esimerkiksi yhtenäinen viiva = sama korkeus; katkoviiva = oktaavi. Myös tekstiselitteet ja näppäimistö-/ruudunlukijan käyttö vaaditaan. Kokeilussa tarkistetaan, onko viivoja liikaa pienellä puhelinnäytöllä; tarvittaessa näytetään oletuksena vain valitun solmun yhteydet ja koko verkko korostuspainikkeesta.

## 6. Tarkistetut musiikkiesimerkit

### C-verkko 0–5

- A-kieli, 3. nauha: **C3 (MIDI 48)**.
- G-kieli, 5. nauha: **C4 (MIDI 60)**.
- B-kieli, 1. nauha: **C4 (MIDI 60)**.

Yhteydet: A/3 → G/5 = oktaavi (+12); G/5 ↔ B/1 = sama korkeus (0). Myös A/3 → B/1 on +12, mutta sen lisäviiva olisi tarpeeton, jos verkko on jo yhdistetty.

### C-verkko 0–12

- paksu E/8 ja A/3: **C3 (48)**, sama korkeus.
- D/10, G/5, B/1: **C4 (60)**, sama korkeus.
- ohut e/8: **C5 (72)**.

Kuusi C-solmua. Esimerkkiverkon viisi yhteyttä: paksu E/8 ↔ A/3 (unisono); D/10 ↔ G/5 ↔ B/1 (kaksi unisonoa); A/3 ↔ G/5 (+12); D/10 ↔ ohut e/8 (+12). Tämä on yksi pätevä yhdysverkko, ei ainoa oikea graafinen toteutus.

### D ja E tuovat erilaisia kuvioita

- 0–5 D: D/0 = D3, A/5 = D3, B/3 = D4. Kolme D-paikkaa, joista kahdessa sama korkeus.
- 0–5 E: paksu E/0 = E2, D/2 = E3, B/5 = E4 ja ohut e/0 = E4. Myös vapaan paksun ja ohuen E-kielen ero on kaksi oktaavia, **ei yksi**.
- 0–12 alueella E:llä on kahdeksan paikkaa. Se havainnollistaa myös vapaan kielen ja 12. nauhan suhteen.

### Luonnollisten sävelten paikkamäärät

| Sävelnimi | Nauhat 0–5 | Nauhat 0–12 |
|---|---:|---:|
| C | 3 | 6 |
| D | 3 | 7 |
| E | 4 | 8 |
| F | 3 | 6 |
| G | 4 | 7 |
| A | 4 | 7 |
| B | 3 | 7 |

Alueella 0–5 kaikkien seitsemän luonnollisen sävelen paikkojen summa on 24; alueella 0–12 summa on 48. Muissa ruuduissa soi kromaattinen sävel, joka ei vielä kuulu v1:n seitsemään verkkoon. **Jokainen** paikan nuotti soitetaan silti oikealta korkeudelta.

## 7. Näkymä ja vuorovaikutus

**Pääruutu, ylhäältä alas:** otsikko *Sävelverkko*; kevyt `Tutki | Rakenna muistista` -valinta; `0–5 | 0–12` -valinta; tämänhetkinen sävel ja löydetyt paikat; otelauta; lyhyt suhdeselite ja `Kuuntele verkko`, `Kokeile kitaralla`, `Näytä verkko` (vain harjoituksessa) -toiminnot. Sävelen pikavalinta voidaan näyttää kompaktina rivinä C D E F G A B.

- **Tutki-tilan ensiavaus:** otelauta näkyy ilman sävelverkkoa ja kehotus *Napauta jotain sävelpaikkaa. Näet, missä sama sävel löytyy muualla.*
- **Valinnan jälkeen:** valittu nuotti soi; saman sävelen kaikki esiintymät korostuvat; viivat piirtyvät; yksi selite kertoo esim. *Löytyi 6 C:tä: kaksi C3:a, kolme C4:ää ja yksi C5.* Oktaavinumeron voi piilottaa, jos kuormittaa.
- **Puhelin:** kuusi kieltä aina käytettävissä, kosketuskohteet tavoiteltavasti noin 44–48 CSS-pikseliä. Alueella 0–12 vaakavieritys on hyväksyttävä; vain otelauta vierii, ei koko sivu. Yhdysviivat on piirrettävä **saman vieritettävän otelauta-elementin koordinaatistoon**, jotta ne pysyvät sävelten päällä vierittäessä.
- **Automaattinen vieritys:** tavallinen löydös tai sävelen vaihto ei saa siirtää lautaa vastoin pelaajan toimintaa. Vasta käyttäjän erikseen pyytämä paikannusvihje saa vierittää kohteeseen.
- **0–5:** mahtuminen 360–390 px leveyteen tavoite, ei sormikohteita pienentämällä; pienemmällä ruudulla hyväksytään tarvittaessa laudan oma vieritys. Testaus 320/360/390 px, 200 % zoom/tekstisuurennus, pysty- ja vaaka-asento.
- **Merkkipisteet:** nauhamerkit 3/5/7/9 ja 12. nauhan kaksoispiste kuten tavallisella kitaralla. Vapaa kieli visuaalisesti erotettu satulan puolelle.
- **Saavutettavuus:** valitsemattoman ruudun nimi on kieli ja nauha. Sävelnimi ja suhde lausuttaisiin vasta valinnan jälkeen tai silloin, kun *Tutki*-tilassa verkko on tarkoituksella avattu. Ruudunlukijassa myös koko verkko luettelona, ei pelkkinä viivoina. Ennen vastaamista harjoittelutilan nimet eivät saa paljastua näppäimistö-/VoiceOver-kohdistuksesta.

## 8. Ääni ja pelin tilasäännöt

- Jokainen fyysinen napautus soi soivan MIDI-korkeutensa perusteella riippumatta oikeellisuudesta, löydön aiemmasta tilasta tai harjoituksen valmistumisesta. C3, C4 ja C5 **eivät** soi samalla taajuudella.
- Saman korkuiset C4-paikat soivat käyttäen yhteistä referenssisoitinta yhtä korkealta; peli ei väitä syntetisaattorin toistavan eri kielten erilaisen sointivärin.
- `Kuuntele verkko` toistaa valitut löydöt/kaikki verkon paikat selkeässä järjestyksessä (matalasta korkeaan, ja sama korkeus eri kieliltä peräkkäin), korostaen kulloisenkin paikan.
- Uusi napautus keskeyttää meneillään olevan sarjatoiston ja soittaa valitun nuotin. Viimeinen oikea nuotti ei saa katketa siksi, että harjoitus vaihtaa valmiiksi.
- Piilotus, sivulta poistuminen, pelialueen vaihto ja lukitus pysäyttävät pelin oman sarjan. Palatessa mitään ei saa käynnistyä itsestään; seuraava tietoinen painallus käynnistää uuden äänen.
- Käytetään mahdollisuuksien mukaan olemassa olevaa `ReferencePlayer`-soitinta ja `music.ts`-sävelmatematiikkaa. Ei omaa Web Audio -moottoria. Jos iOS:n audioSession-/keskeytyslogiikkaa muutetaan yhteiseen soittimeen, testataan vaikutus myös muihin harjoituksiin.
- Äänen soittovirhe ei saa estää visuaalista tarkastelua. Voi kuunnella myös äänet pois kytkettynä, jolloin näytön sävel- ja suhdetiedot säilyvät.

## 9. Vapaaehtoinen oikean kitaran käyttö

`Kokeile kitaralla` voidaan avata **kesken tutkimisen tai harjoittelun**, ei vasta valmiina. Sen sisältö riippuu tilasta:

- Tutki: piilota verkko hetkeksi; *Löydätkö yhden/kaikki C:t omasta kitarastasi?*; `Näytä verkko` palauttaa mallin.
- Rakenna muistista: piilota myös tähän asti löytyneet paikat, mutta näytä kohdesävel ja löydettyjen lukumäärä; pelaaja etsii fyysiseltä kitaralta yhden paikan ja merkitsee sen sen jälkeen virtuaalilautaan.
- Peli voi soittaa vertailusävelen mutta **ei kuuntele mikrofonia eikä todista soittoa onnistuneeksi**. Ruudulla merkitty valinta voidaan arvioida, oikealla kitaralla soittamista ei.
- Käyttö ei ole pakollista eikä edellytä kitaran olevan juuri sillä hetkellä käsillä.

## 10. Pedagoginen vaihtelu ja kiinnostavuus

Peruspeli on **havaintoa tuottava sävelkartta**, ei ketjugeneraattorin uusi versio. Pelillinen koukku on verkoston nopea avautuminen ja oman muistiverkon asteittainen muodostuminen.

1. **Välitön oivallus:** C/valittu sävel avautuu kerralla otelaudalle; käyttäjä voi vaihtaa D:hen ja vertailla kuvioita.
2. **Oma yritys:** harjoittelussa piilossa olevat paikat täyttyvät yksi kerrallaan, ja kesken tehtävän voi palata katsomaan mallia.
3. **Uuden lähtöpisteen siirtovaikutus:** vaikka tietäisi C:n A/3:sta, kertausta tarjotaan esimerkiksi C:n D/10:n löytämisestä, eikä vain samasta ensimmäisestä aloituspaikasta.
4. **Rakenteen ymmärrys:** yhden valitun solmun suorat unisono- ja oktaaviyhteydet korostuvat, ja palautteessa on korkeintaan yksi pedagogisesti hyödyllinen lause.
5. **Kevyt istuntomuisti:** istunnon aikana muistetaan mitkä sävelverkot löytyivät itsenäisesti ja mitkä paljastettiin. Seuraavaksi ehdotetaan vähän harjoiteltua verkkoa, mutta ei tehdä pakollista etenemistä, prosenttikeräilyä tai osaamisen todentamisen väitettä.

Tärkeä rajaus: **tässä pelissä ei ole pakko pelata 10 kierrosta peräkkäin**. Sen pitää olla hyödyllinen myös 1–2 minuutin otelaudan tutkimisena. Kiinnostavuutta ja myöhempää muistamista arvioidaan käyttäjäkokeessa, ei oleteta automaattisesti syntyväksi verkon animaatiosta.

## 11. Toteutuksen riippuvuudet ja yhteensovitus

**Ei koodimuutoksia tällä suunnitelmalla.** Ennen toteutuspäätöstä tarkistetaan betan nykytilanne ja riippuvuudet:

- `harjoittelija/Board.tsx`: nykyrakenteen otelautasolut, kielimerkinnät, näppäimistö, mahdollinen vieritysohjaus ja esteet `disabled`-tilassa. Tarvitaan mahdollisuus pitää valmis verkko kuunneltavana.
- `harjoittelija/music.ts`: yksi lähde oikealle `(kieli,nauha) → MIDI` -tiedolle. Indeksijärjestys täsmällisesti varmistettava.
- `harjoittelija/audio.ts` / `ReferencePlayer`: yksittäisen paikan ja järjestetyn sarjan toisto; ei uutta äänimoottoria.
- PR #46 ja issue #43: vanhan sävelharjoituksen äänentoiston yhdistämättömät muutokset eivät saa tulla vahingossa mukaan.
- Issue #49/#50 sekä Säveljahdin v1.1: Sävelverkko on erillinen Musapelit-kortti/harjoitus, eikä se muuta vanhoja suoria osoitteita. Ei samaa tehtävää kolmella nimellä.
- PR #179: otelauta-ydinopintojen suunta ja kielijärjestys poikkeavat harjoittelijasta. Hyödynnetään samaa sävelmatematiikkaa ja sovittuja sanamuotoja, ei oleteta indeksien olevan vaihtokelpoisia.

Suositus: rajattu verkko- ja viivapiirtokerros olemassa olevan otelautamallin päälle, selvästi irti Säveljahdin generaattorista. Jos nykyinen Board ei sovi, perustellaan erillisen renderöinnin tarve ennen kirjoittamista.

## 12. V1:n ulkopuolelle

Ei automaattista uusien intervalliketjujen generointia, erillistä yleiskarttaa, muiden kuin seitsemän luonnollisen sävelen verkkoja, mikrofonitunnistusta, pakollista kitarasuoritusta, suorituspisteitä, ajastimia, tasolukkoja, pysyvää osaamisprofiilia eikä uutta soitinmoottoria. Myös oikean kitaran soiton nopeuden tai varmuuden mittaaminen jää pois.

## 13. Hyväksymiskriteerit ja testit

**Musiikkidata:** jokainen 36/78 paikkaa tuottaa oikean MIDI-arvon; seitsemän verkon paikka- ja oktaaviryhmät ovat oikein. Koko verkossa ei ole väärää sävelluokkaa, valitun paikan kopioita tai kahdesti laskettuja löytöjä.

**Graafi:** kaikki näytetyt saman korkeus -yhteydet ovat 0 puoliaskelta ja oktaaviyhteydet ±12; verkko on yhdistetty ja riittävän selkeä; 24:n puoliaskelen yhteyttä ei merkitä yhdeksi oktaaviksi. Kaikki yhden sävelen sallitut pisteet ovat näkyvissä Tutki-tilassa, riippumatta valitusta aloituspaikasta.

**Harjoittelu:** oikea valinta löydettyjen joukon ulkopuolelta lisää löytöä yhden; väärä, toistettu ja jälkikuuntelu eivät lisää. Täysi ratkaisu näkyy vain käyttäjän valinnasta tai loppuun pääsystä; paljastettu löytö erotetaan itsenäisesti löydetystä.

**Ääni:** oikeat, väärät, toistot, valmiin verkon solut ja verkon sarjatoisto soivat oikein. iPhone 16 Pro / Safari -todellinen laitetesti myös kaiuttimella ja Bluetooth-kuulokkeilla, lukituksen jälkeen; emulaatio tai MIDI-arvotesti ei todista äänen kuuluvan.

**Mobiili ja saavutettavuus:** kuusi kieltä ja avoimet kielet käytettävissä, 0–12:n vaakavieritys ei irrota viivoja solmuista eikä virheellisesti paina solua pyyhkäistessä. Näppäimistö ja VoiceOver: otsikot, sävelen paljastus, sama korkeus vs oktaavi, tehtävän tila. Ei viivaväriin yksin perustuvaa tietoa.

**Pedagoginen kokeilu:** 4–6 kohderyhmän soittajaa. Ennen/kokeilun jälkeen tehtävät fyysisellä kitaralla ilman mallia, mukana ennen peliä harjoittelematon sävel tai kieli. Havaitaan pystyvätkö he näyttämään, miksi kaksi C:tä soi yhtä korkealta ja miksi kolmas on oktaavia ylempänä; tunnistaako joku graafin väärin fyysiseksi soittojärjestykseksi. Myöhempi lyhyt kertaus selvittää muistamisen säilymistä. Nämä ovat suuntaviivoja, eivät tilastollista vaikutusnäyttöä.

## 14. Avoimet päätökset ennen toteutusta

1. Näytetäänkö `Tutki verkkoa` heti ensimmäisellä avauksella oletustilana? **Suositus kyllä.**
2. Näytetäänkö kaikki viivat heti vai vain kevyt yhdysverkko? **Suositus kevyt yhdysverkko; valittu solmu voi korostaa omansa.**
3. Miten sävelnimen C–B valitsin ja H/B-esitystapa sovitetaan sivuston olemassa olevaan sanastoon? **Ei uutta päällekkäistä teoriaopastusta.**
4. Miten käyttöliittymä mahduttaa 0–5-alueen 320/360/390 px leveyteen niin, että todelliset kosketuskohteet pysyvät riittävän isoina? **Todennettava prototyypillä.**
5. Onko viivojen piirtäminen laudan päälle ensimmäisessä kokeilussa selkeä vai pitäisikö käyttää samanaikaista tekstimuotoista yhteyslistaa? **Testattava kohderyhmällä.**

## 15. Tiivistetty toteutusjärjestys, jos erikseen hyväksytään

1. Sävellaskenta, verkkosolmujen muodostus ja yhteystyypit + automaattiset testit.
2. Pelkkä Tutki-tila: napauta yhtä C:tä ja näytä koko C-verkko. Äänet ja mobiilivieritys.
3. Rakenna muistista -tila, avustetun ratkaisun käsittely ja vapaa kuuntelu.
4. Kitaratila, VoiceOver ja iPhone/Safari-laitetestit.
5. Pieni pedagoginen pilotti; vasta tulosten jälkeen mahdolliset jatko-ominaisuudet.

**Päätöslinja:** Sävelverkko täydentää Säveljahtia. Sen pääarvo on kaikkien saman sävelnimen sijaintien **välitön näkeminen ja niiden yhteyksien ymmärtäminen**; muistiharjoittelu auttaa siirtämään tämän omalle kitaralle.