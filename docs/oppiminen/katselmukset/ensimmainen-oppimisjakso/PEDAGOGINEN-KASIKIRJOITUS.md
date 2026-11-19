# Ensimmäiset neljä iskua – pedagoginen käsikirjoitus

**Tila:** 17.11.2026. Tämä on omistajan hyväksyttäväksi tarkoitettu suunnitelma. Sitä ei ole toteutettu, koekäytetty eikä hyväksytty.
**Pohja:** `origin/beta` [`f9964c5`](https://github.com/ristotoivanen/Musiikin-kartta/commit/f9964c5463411a99f961fa9f6eed3fd3d72e6aba). PR #53:n aineisto on luettu haarasta `docs/yhtenainen-oppimisrakenne-2026-11` (head [`df160b0`](https://github.com/ristotoivanen/Musiikin-kartta/commit/df160b0477b4af428b7bc49cf0f596ba3b34ea97)). PR #53:n tiedostoja ei ole muutettu.
**Kattaa:** auditoinnin korjauskohdan P1 kokonaan. P2:n kappalerooli on omassa dokumentissaan.
**Muut tämän katselmuksen dokumentit:** [Musiikillinen sovellus](MUSIIKILLINEN-SOVELLUS.md) · [A/E-vertailu ja testisuunnitelma](A-E-VERTAILU-JA-TESTISUUNNITELMA.md) · [Kriittinen katselmus ja avoimet päätökset](KRIITTINEN-KATSELMUS-JA-AVOIMET-PAATOKSET.md)

Merkinnät koko dokumentissa:

- **[Nykytila]** tarkoittaa, että asia on nykyisessä betassa `f9964c5` ja on tarkistettu lähdekoodista.
- **[Lähde]** tarkoittaa, että asia on vahvistettu auditoinnista, PR #53:sta tai issueista. Se on suunnitelma tai havainto, ei toteutus.
- **[Ehdotus]** tarkoittaa tämän katselmuksen uutta ratkaisua, joka odottaa hyväksyntää.

---

## 1. Lähtökohta: mitä betassa on nyt

| Havainto | Merkintä | Lähde |
| --- | --- | --- |
| Etusivun ainoa aloituslinkki on *Kuuntele pulssi ja taputa esimerkin mukana*. Se vie Rytmi-aiheen sivulle `oppi/rytmi/kuuntele-pulssi.html`, jonka otsikko on *Harjoitus 02 / 04*. | [Nykytila] | `index.html` rivit 112–117 |
| Sivun ainoa äänite on `pulssi-ja-komppi.m4a`. Se kestää 33 s ja on 84 BPM. Siinä on kaksi tahtia pelkkää naksutusta, sen jälkeen kahdeksasosat, neljä tahtia G-komppia, G–D-vaihto ja loppusointu. Puhdasta pulssia on noin 5,7 sekuntia. | [Nykytila] | `tools/aanet/esimerkit.js`, `osa-1/pulssi-ja-komppi` |
| Sivun kolmas ohje pyytää soittamaan Kolme cowboyta -levyn. Levyä ei ole sivustolla. | [Nykytila] | `oppi/rytmi/kuuntele-pulssi.html` |
| Rytmin seuraava harjoitus on *Alas–ylös yhdellä soinnulla*. Se vaatii G-otteen ja alas–ylös-kompin. Yhden vapaan kielen soittoharjoitusta, oikean käden ohjetta ja äänen pysäyttämisen ohjetta ei ole missään vaiheessa. | [Nykytila] | `oppi/rytmi/index.html`, `book/osa-1.html` |
| Teoriaoppaan osa 1 opettaa pulssin, iskun, tahdin, 4/4:n ja ykkösen sekä kielet E–A–D–G–B–e ja vapaan kielen. Ohjeet ovat oikein, mutta ne olettavat, että kitara jo soi. | [Nykytila] | `book/osa-1.html#pulssi-ja-komppi`, `#kitaran-merkinnat` |
| Kitaran perusteet (`oppi/kitara/`) on 2–5 minuutin kertaussivu. Siinä on otelauta, sointukaaviot, tabi ja 4/4-tahti. Se ei ole täysin aloittelijan ensimmäinen tunti. | [Nykytila] | `oppi/kitara/index.html` |
| Harjoitus *Soita ensin basso* (Kolme cowboyta, 84 BPM) on lähin olemassa oleva yhden äänen rooli. Se vaatii painettuja säveliä G (6. kieli, 3. nauha) ja C (5. kieli, 3. nauha). | [Nykytila] | `oppi/kitara/soita-ensin-basso.html` |
| Viritin on vain Riffikaiussa ja vaatii mikrofonin. Erillistä viritintä tai metronomia ei ole. Ne on suunniteltu issueen #84. | [Nykytila] / [Lähde] | `riffikaiku/tuner.ts`, #54 P3 |
| PR #53:n käsikirjoitusluonnos ja G1-luonnos määrittelevät jakson rungon ja mittausrajat. Ne jättävät auki tarkan kielen, äänen pysäyttämisen tavan, ongelmatilanteet, onnistumiskriteerin ja musiikillisen sovelluksen. | [Lähde] | [PR #53:n luonnos](https://github.com/ristotoivanen/Musiikin-kartta/blob/df160b0477b4af428b7bc49cf0f596ba3b34ea97/docs/oppiminen/ensimmainen-oppimisjakso-nelja-iskua-2026-11.md), [G1](https://github.com/ristotoivanen/Musiikin-kartta/blob/df160b0477b4af428b7bc49cf0f596ba3b34ea97/docs/oppiminen/g1-pilotin-katselmointi-ja-paatosrajat-2026-11.md) |

**Johtopäätös.** Betassa on teoria ja pulssin kuuntelu. Sieltä puuttuu ensimmäinen soittokerta: kitaran ottaminen käteen, yhden kielen löytäminen, äänen tuottaminen ja pysäyttäminen sekä neljä ääntä pulssissa. Sen jälkeen tuleva harjoitus vaatii jo sointuotteen. P1 täyttää juuri tämän aukon. Teoriaa ei tarvitse kirjoittaa uudelleen.

### P1:n vaatimukset ja PR #53:n luonnos rinnakkain

| P1-vaatimus ([ARKISTOINTI-JA-JATKOTILA](https://github.com/ristotoivanen/Musiikin-kartta/blob/df160b0477b4af428b7bc49cf0f596ba3b34ea97/docs/audit/oppimisarkkitehtuuri-2026-11/ARKISTOINTI-JA-JATKOTILA.md)) | PR #53:n luonnoksessa | Tässä käsikirjoituksessa |
| --- | --- | --- |
| Itsenäisesti seurattava oppitunti | Tehtäväsarja 1–6 on olemassa, mutta kunkin vaiheen tekstiä ja valmisehtoa ei ole määritelty | Luku 3, vaiheet V0–V7 sekä tekstit ja valmisehdot |
| Kuultava malli | Ehdotettu 60–72 BPM, sisältö auki | Malli M1, luku 3 sekä [Musiikillinen sovellus](MUSIIKILLINEN-SOVELLUS.md), luku 2 |
| Vaiheistetut ohjeet | Lyhyt kitaraohje yhdessä solussa | V3–V5 ja luku 4 |
| Oikean kitaran harjoitus | Luonnoksessa valinnainen, kielen valinta ristiriitainen | V5 kuuluu ydinpolkuun, kieli on 6. kieli (luku 4.1) |
| Vaihtoehto ilman mikrofonia | Mikrofonia ei käytetä | Sama. Lisäksi luvussa 6 kerrotaan, mitä ilman mikrofonia voi tietää |
| Tavalliset virheet | Kolme lausetta | Vianmääritystaulukko, luku 5 |
| Palaute | Kuuntelupelin palautteet | Palaute vaiheittain sekä itsearvion ja havainnon erottelu (luvut 3 ja 7) |
| Siirtyminen seuraavaan | Ehdotettu jatko kahden sävelen vastaukseen | Ensin sama tausta toisella sävelellä, sitten olemassa oleva *Soita ensin basso* (luku 8) |
| Viritys ei estä | Mainittu | Ohje ja toleranssi luvussa 5.3 |

**Päätös luonnoksen käytöstä.** PR #53:n luonnos kelpaa rungoksi. Sen tavoite, mittausrajat ja *ei wizardia* -periaate säilyvät. Kolme kohtaa korjataan, koska ne ovat ristiriidassa tämän toimeksiannon tavoitteen kanssa:

1. Luonnoksessa tavoitteen voi täyttää myös taputtamalla. Tässä tavoite edellyttää oikeaa kitaraa.
2. Luonnos sanoo *valitsemallaan vapaalla kielellä* mutta ehdottaa myös paksua E-kieltä. Tässä kieli on aina 6. kieli.
3. Luonnoksessa kitaravaihe on valinnainen. Tässä se kuuluu ydinpolkuun.

Korjaukset ja perustelut ovat [kriittisessä katselmuksessa](KRIITTINEN-KATSELMUS-JA-AVOIMET-PAATOKSET.md), havainnot H1–H3.

---

## 2. Jakson tavoite ja rajaus

**Nimi:** Ensimmäiset neljä iskua

**Oppimistavoite (omistajan asettama):** Täysin aloittelija pystyy kuuntelemaan tasaista pulssia ja soittamaan oikealla kitaralla neljä ääntä yhdellä vapaalla kielellä sekä pysäyttämään äänen tarkoituksellisesti.

**[Ehdotus] Tavoitteen täsmennys havaittavaksi teoksi:**
Naksutuksen soidessa 72 BPM:ssä oppija soittaa kuudennen kielen neljä kertaa, yhden äänen jokaisella iskulla. Seuraavan tahdin ykkösellä hän pysäyttää äänen, niin että sen jälkeen on kuultavasti hiljaista neljän iskun ajan. Sama kierros onnistuu kahdesti peräkkäin.

**Ydinpolku** täyttää tavoitteen: V0 → V1 → V3 → V4 → V5 → V7. Arvioitu kesto on 6–10 minuuttia.
**Valinnaiset vaiheet** ovat V2 (laske ja naputa, kuuntelutehtävä) ja V6 (ensimmäinen musiikillinen sovellus). V6 suositellaan heti perään, jos oppija jaksaa. Muuten sitä tarjotaan seuraavalla kerralla.

**Ei tarvita** (tämä on auditoinnin ja PR #53:n linja, ja se säilyy):

- sointuotteita, tabulatuuria tai nuotteja
- kielten nimiä (nimi *E* näytetään, mutta sitä ei kysytä)
- vasenta kättä otelaudalla
- plektraa
- koko kitaran vakiovirettä
- viritintä, mikrofonia, käyttäjätiliä tai asetuksia
- käsitteitä *tahti*, *4/4* ja *tempo* (sana *tahti* mainitaan, mutta sitä ei selitetä ennen teoriakorttia)

**Taidot** (auditoinnin tunnisteet):

- Pääkohde: `TIME-PULSE`.
- Opitaan tehtävässä: `GTR-ORIENT` (vain 6. kieli), `GTR-CLEAN` (vapaa kieli soi, ei tukahdu), `GTR-MUTE` (tarkoituksellinen pysäytys), `TOOL-AUDIO` (toisto ja pysäytys) ja `PRACTICE-SAFE` (äänenvoimakkuus ja tauot).
- `PLAY-SONG` on V6:n jatko, ei tämän jakson tavoite.

---

## 3. Jakson kulku vaihe vaiheelta

Kaikki tässä luvussa näkyvät tekstit ovat **[Ehdotus]**. Toteuttaja saa lyhentää niitä, mutta ei muuttaa niiden sisältöä. Äänitteet M0–M3 on määritelty [musiikillisen sovelluksen luvussa 2](MUSIIKILLINEN-SOVELLUS.md#2-jakson-äänitteet-m0m3). Sama kulku toteutetaan sekä A- että E-vaihtoehdossa (ks. [A/E-vertailu](A-E-VERTAILU-JA-TESTISUUNNITELMA.md)). Ainoastaan esitystapa eroaa.

### V0 – Avautuva näkymä: mitä oppija näkee ensimmäisenä

| Kenttä | Sisältö |
| --- | --- |
| Otsikko | **Ensimmäiset neljä iskua** |
| Johdanto (yksi lause) | *Kuuntele tasainen syke ja soita se kitaralla – yksi kieli, ei otteita.* |
| Ainoa korostettu toiminto | **▶ Kuuntele, miltä tehtävä kuulostaa** (soittaa M1:n) |
| Toissijainen rivi, ei painikkeen näköinen | *Kitaraa tarvitset vasta vaiheessa 3.* · *Osaatko jo? Soita suoraan taustan kanssa* (linkki vaiheeseen V6) |
| Ei näytetä | Wizardia, asetuksia, vaikeustasoja, tempovalintaa, mikrofonia, edistymispalkkia, otekaaviota tai tabia |

**Mitä oppija kuulee ensimmäisenä?** Ei mitään ennen kuin hän painaa painiketta. Ääni ei käynnisty itsestään. M1 kestää noin 17 sekuntia:

1. Neljä naksahdusta, joista ensimmäinen on korkeampi.
2. Matala kitarakieli soittaa neljä ääntä naksutusten tahdissa.
3. Ääni katkeaa, ja naksutus jatkuu yksin neljän iskun ajan.
4. Kitara soittaa toiset neljä ääntä ja vaikenee taas.

Oppija kuulee siis koko tehtävän valmiina ennen kuin hän tekee mitään. Kuunteleminen on samalla ensimmäinen onnistuminen.

**Miksi juuri tämä kuulostaa ensimmäisenä eikä pelkkä naksutus?** M1 näyttää kerralla kaikki kolme tavoitteen osaa: tasaisen sykkeen, neljä ääntä ja tarkoituksellisen hiljaisuuden. Pelkkä naksutus (M0) tulee vasta harjoitteluun.

### V1 – Kuuntele (noin 20–40 s, ei kitaraa)

- **Toiminnot:** *▶ Kuuntele* / *■ Pysäytä*. Kun toisto päättyy, näkyy *Kuuntele uudelleen*.
- **Kuuntelun jälkeen näkyvä teksti:**
  > Kuulit naksutuksen, joka pysyy koko ajan tasaisena. Se on **pulssi**, ja jokainen naksahdus on **isku**. Kitara soitti neljä ääntä, yhden jokaiselle iskulle, ja oli sitten hiljaa neljän iskun ajan. Korkeampi naksahdus kertoo, mistä neljä alkaa: **1**, 2, 3, 4.
- **Teoriakortti** (avattava *Mikä on pulssi?*, enintään kolme lausetta):
  > Pulssi on musiikin tasainen syke – se, jonka mukana jalka alkaa naputtaa. Yksi naputus on isku. Laskemme iskuja neljään ja aloitamme taas ykkösestä; tällaista neljän iskun ryhmää kutsutaan tahdiksi.
  >
  > [Lue lisää teoriaoppaasta → Pulssi ja komppi](../../../../book/osa-1.html#pulssi-ja-komppi)
- **Valmisehto:** ei ole. Siirtymä V2:een tai V3:een on aina auki.

### V2 – Laske ja naputa (valinnainen, 1–2 min, ei kitaraa)

Tämä vaihe on tarkoitettu oppijalle, jolla ei ole kitaraa käsillä, ja kenelle tahansa, joka haluaa lämmitellä. Vaiheessa on kaksi osaa.

**V2a – Laske ääneen.** Äänite on M0, naksutus 16 tahtia 72 BPM:ssä, ja sen voi toistaa uudelleen.

> Laske naksutuksen mukana ääneen: **yksi, kaksi, kolme, neljä**, ja aloita taas ykkösestä, kun kuulet korkeamman naksahduksen. Naputa samalla reiteen kämmenellä jokainen isku.
>
> Kun se sujuu, kokeile samaa kuviota kuin mallissa: **naputa neljä, pidä käsi paikallaan neljä.** Laske koko ajan.

Valmisehto on itseilmoitus *Kokeilin*. Sitä ei tarkisteta.

**V2b – Kuuntelutehtävä: kumpi pysyi tasaisena?** Äänitteet ovat M3-parit.

- Oppija kuulee kaksi lyhyttä näytettä. Kummassakin on neljä naksahdusta. Toisessa yksi isku tulee hieman liian aikaisin tai liian myöhään.
- Kysymys: *Kumpi näyte pysyi tasaisena?* Vastausvaihtoehdot ovat **Näyte 1** ja **Näyte 2**. Kumpaakin näytettä voi kuunnella uudelleen rajattomasti.
- Palaute oikeaan vastaukseen: *Kyllä. Näytteessä 1 kaikki välit olivat yhtä pitkät. Näytteessä 2 kolmas isku tuli liian aikaisin.* Kerrottu iskun numero ja suunta vaihtelevat parin mukaan.
- Palaute väärään vastaukseen: *Ei aivan. Kuuntele näyte 2 uudelleen ja naputa mukana – yksi naputus tuntuu tulevan liian aikaisin.* Tämän jälkeen saa vastata uudelleen.
- Kierroksia on kolme. Muuttuneen iskun paikka (2., 3. tai 4.) ja suunta vaihtelevat, eikä vastaus ole aina samassa kohdassa.
- **Mittaa vain** kuulonvaraista erottelua tässä tehtävässä. Ei mittaa omaa ajoitusta eikä soittamista. Arvaamalla saa yhden kierroksen oikein 50 %:n todennäköisyydellä ja kolme peräkkäin 12,5 %:n todennäköisyydellä. Tulosta ei siksi näytetä osaamisena.

**Ilman kitaraa etenevälle sanotaan suoraan:**

> Pulssin kuuleminen ja naputtaminen ovat nyt hallussa. Tämän jakson tavoite on soittaa neljä iskua kitaralla – palaa vaiheeseen 3, kun kitara on käsillä.

Kitarattomalle merkitään vain *kuunneltu* ja *kokeiltu*, ei koko jaksoa.

### V3 – Ota kitara ja löydä paksuin kieli (1–2 min)

**Näkyvä ohje:**

> **Istu ja ota kitara syliin.** Kitaran kaula osoittaa vasemmalle, jos soitat oikeakätisesti (vasenkätisellä kitaralla oikealle). Kitaran runko lepää reidelläsi, ja voit katsoa kieliä ylhäältä päin.
>
> **Etsi paksuin kieli.** Se on se kieli, joka on **lähimpänä kasvojasi**, kun katsot kitaraa ylhäältä. Tunnustele: se on selvästi paksuin ja usein kierretty, eli siinä on pinnassa kierre.
>
> *Vasenkätisenä soitat ehkä oikeakätistä kitaraa ylösalaisin ilman kielten vaihtoa. Silloin paksuin kieli on **kauimpana** kasvoistasi. Etsi aina paksuin kieli, ei ylintä kieltä.*
>
> Tätä kieltä kutsutaan **kuudenneksi kieleksi** tai **matalaksi E-kieleksi**. Nimeä ei tarvitse vielä muistaa.

**Kuva:** Kuva otetaan soittajan omasta katselukulmasta. Paksuin kieli on rajattu tekstillä *paksuin kieli – tätä soitat*, ja tieto kerrotaan myös tekstinä. Väri ei yksin osoita kieltä. Kuvaa ei korvata sointukaaviolla, koska kaaviossa paksuin kieli on vasemmalla ja tabissa alimpana. Se sekoittaisi ensimmäisellä kerralla.

**Tarkistus ilman tietoa:**

> Varmista näin: soita peukalolla paksuinta kieltä ja sen vieressä olevaa kieltä. Paksuin soi **matalammalta**. Jos ne kuulostavat yhtä matalilta, olet ehkä löytänyt kaksi keskimmäistä kieltä – katso uudestaan, mikä on lähimpänä kasvojasi.

**Sähkökitara:**

> Sähkökitara soi hiljaa myös ilman vahvistinta. Tähän harjoitukseen se riittää, kun pidät taustan äänen pienellä.

**Valmisehto:** ei ole. Siirtymä V4:ään on aina auki.

### V4 – Soita yksi ääni ja pysäytä se (1–2 min)

**Näkyvä ohje kolmessa kohdassa:**

> **1. Vasen käsi pois kieliltä.** Pidä vasemmalla kädellä kevyesti kaulasta niin, ettei mikään sormi kosketa kieliä – tai laske käsi reidellesi. Jos sormi koskee kieleen, ääni tukahtuu.
>
> **2. Soita peukalolla.** Laske oikea peukalo paksuimman kielen päälle kitaran keskikohdan (äänireiän tai mikrofonien) kohdalle. Työnnä peukalo kielen yli alaspäin, kohti lattiaa. Peukalo saa pysähtyä viereisen kielen päälle. Anna äänen soida.
>
> **3. Pysäytä ääni.** Laske peukalo takaisin samalle kielelle. Ääni loppuu. Tämä on **vaimentaminen**.
>
> Kokeile kolme kertaa: **soita – anna soida – pysäytä.** Kuuntele, että hiljaisuus tulee silloin, kun sinä päätät.

**Miksi peukalo eikä plektra?** [Ehdotus, perustelut kriittisen katselmuksen havainnossa H4]

- Kaikilla on peukalo, mutta kaikilla ei ole plektraa.
- Sama sormi soittaa ja pysäyttää, joten opittavia liikkeitä on vain yksi pari.
- Peukalon lyönnissä on helppo pysähtyä viereiseen kieleen, eikä ylimääräinen kieli soi.
- Plektraa saa käyttää, jos sellainen on jo tuttu. Silloin äänen pysäyttää kämmensyrjä: laske oikean käden kämmenen ulkosyrjä kielelle lähelle tallaa.

**Turvaohje** (näytetään tässä vaiheessa kerran):

> Pidä taustan ääni niin hiljaisena, että kuulet myös oman kitarasi. Jos peukaloon tai ranteeseen sattuu, pidä tauko – kevyt kosketus riittää.

**Valmisehto:** ei ole. Oppija voi merkitä *Sain äänen soimaan ja loppumaan*. Jos ääni ei soi, avataan vianmääritys (luku 5) tämän vaiheen kohdalla.

### V5 – Neljä iskua kitaralla (2–4 min, jakson ydin)

**Äänite:** M0, 16 tahdin naksutus 72 BPM:ssä. Sen voi toistaa uudelleen. Saatavilla on myös hitaampi 60 BPM:n versio.

**Kaksi askelta:**

**V5a – Helpotettu, yksi ääni neljälle iskulle.**

> Käynnistä naksutus. Laske ääneen. Soita kieli **vain ykkösellä** ja anna sen soida koko neljän iskun ajan. Seuraavalla ykkösellä soita uudestaan.

V5a on helpotus, jota tarjotaan ensimmäisenä. Sen saa ohittaa.

**V5b – Varsinainen tehtävä, neljä ääntä ja hiljaisuus.**

> Soita **neljä ääntä: yksi jokaisella iskulla** – 1, 2, 3, 4.
> Seuraavalla ykkösellä **pysäytä ääni peukalolla** ja laske hiljaa neljään – 1, 2, 3, 4.
> Toista: neljä ääntä, neljä hiljaista.

Kuvio näytetään myös kahden rivin ruudukkona ilman nuotteja:

| Isku | 1 | 2 | 3 | 4 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sinä | ♪ | ♪ | ♪ | ♪ | ✋ pysäytä | – | – | – |

**Itsetarkistus V5b:n jälkeen** (kolme kysymystä, joihin vastataan kyllä tai ei):

1. *Kuuluiko neljä erillistä ääntä?*
2. *Tuliko jokainen ääni yhtä aikaa naksahduksen kanssa, niin ettet jäänyt jälkeen etkä kiirehtinyt?*
3. *Loppuiko ääni ykkösellä, niin että sen jälkeen oli hiljaista?*

**Palaute itsetarkistuksen perusteella** (tekstiä, ei pisteitä):

| Vastaus | Näytettävä vihje |
| --- | --- |
| Kaikki kyllä | *Hienoa – tee sama vielä kerran. Kun onnistut kahdesti peräkkäin, olet saavuttanut jakson tavoitteen.* |
| 1 = ei | Avataan vianmääritys luvusta 5 (*Ääni ei soi tai tukahtuu*). |
| 2 = ei | *Kokeile hitaampaa versiota tai soita ensin vain ykkösellä (V5a). Laske ääneen – se auttaa pysymään mukana.* |
| 3 = ei | *Laske peukalo kielelle juuri kun sanot ”yksi”. Kokeile ensin ilman naksutusta: soita, laske ”kaksi, kolme”, pysäytä.* |

**Valmisehto (itsearvio):** oppija vastaa kaikkiin kolmeen kyllä kahdella peräkkäisellä kierroksella ja merkitsee *Onnistuin kahdesti*. Tämä on **itsearvioitu** onnistuminen, ei järjestelmän todentama (luku 7).

### V6 – Soita bändin kanssa: ensimmäinen musiikillinen sovellus (valinnainen, 2–4 min)

Tarkka musiikillinen määrittely on [Musiikillisen sovelluksen luvussa 3](MUSIIKILLINEN-SOVELLUS.md#3-ensimmäinen-soitettava-sovellus-ensimmäinen-groove). Pedagoginen kulku on tämä:

1. **Kuuntele** taustaversio, jossa mallibasso soittaa oppijan osan (M2a).
2. **Soita mallibasson kanssa.**
   > Taustassa ei ole bassoa – sinä olet bändin basisti. Soita paksuinta kieltä neljä kertaa jokaisessa tahdissa. Bändi aloittaa neljän naksahduksen jälkeen. Lopussa kaikki lyövät kerran ja pysähtyvät: pysäytä silloin sinäkin äänesi.
3. **Soita ilman mallia** (M2-tausta). Tämä on V6:n varsinainen tehtävä.
4. **Itsetarkistus:**
   - *Pysyitkö mukana loppuun asti?*
   - *Pysähtyikö äänesi yhtä aikaa bändin kanssa?*

**Helpotukset** järjestyksessä:

1. Pidä mallibasso päällä (M2a).
2. Soita vain jokaisen tahdin ykkösellä.
3. Valitse hitaampi versio (60 BPM).
4. Soita vain neljä ensimmäistä tahtia.

Järjestys ja sisältö ovat samat kuin [Musiikillisen sovelluksen luvussa 3.4](MUSIIKILLINEN-SOVELLUS.md#34-helpotukset-järjestyksessä).

### V7 – Valmis: jatka, kertaa tai valitse muuta

**Näkyvä teksti, kun V5:n valmisehto on itse merkitty:**

> **Soitit ensimmäiset neljä iskua.** Kuulit pulssin, soitit sen kitaralla ja pysäytit äänen itse. Tämä sama taito – tasainen syke ja hallittu lopetus – kantaa jokaisessa kappaleessa.

**Jatkovalinnat:** kaikki ovat auki, mikään ei ole lukittu.

| Valinta | Kohde | Tila |
| --- | --- | --- |
| **Soita bändin kanssa** (jos V6 on tekemättä) | V6 | [Ehdotus] |
| **Lisää toinen sävel** | Sama tausta, A-kieli Am-tahdeissa (M2c mallin kanssa, M2-tausta ilman) | [Ehdotus] |
| **Kertaa neljä iskua** | V5 | [Ehdotus] |
| **Seuraava rytmiharjoitus: alas–ylös yhdellä soinnulla** | `oppi/rytmi/alas-ylos-yhdella-soinnulla.html` | [Nykytila] |
| **Lue pulssista teoriaoppaasta** | `book/osa-1.html#pulssi-ja-komppi` | [Nykytila] |
| **Valitse toinen aihe** | Oppimiskartta | [Nykytila] |

**Seuraavan kerran kertaus** (tarjous, ei pakko): *Viime kerralla soitit neljä iskua. Kokeile ensin ilman mallia: käynnistä naksutus ja soita heti V5b.* Kertauksen tulos merkitään viivästetyksi ja vihjeettömäksi suoritukseksi, erillään ensimmäisestä kerrasta (luku 7).

---

## 4. Kitaratekniikan opetus

### 4.1 Kielen valinta: 6. kieli (matala E)

[Ehdotus] Kieli on kiinteästi 6. kieli. Vaihtoehdot ja syyt valintaan:

| Vaihtoehto | Puolesta | Vastaan |
| --- | --- | --- |
| **6. kieli, matala E** (valittu) | Paksuimman löytää tunnustelemalla ja katsomalla ilman nimiä. Se on lähimpänä kasvoja ja reunimmaisena. Peukalon lyönti pysähtyy luontevasti 5. kieleen. Kieli voi toimia bassoroolina (V6). | Matala ääni hukkuu puhelimen kaiuttimesta soivan taustan alle. Tausta suunnitellaan siksi ilman bassoa (Musiikillinen sovellus, luku 3). |
| 1. kieli, ohut e | Myös reunimmainen. Kuuluu hyvin. | Ohuen kielen lyönti peukalolla on epävarmempi. Vasen kämmen osuu ohueen kieleen helpommin. Roolina se on melodiaääni eikä basso. |
| Vapaa valinta | Joustava. | Vaatii kielten tunnistamista, ja taustan sävelkorkeus ei sovi kaikkiin kieliin. Tästä tulee ylimääräinen päätös aloittelijalle. |

Jos 6. kieli puuttuu tai on katki, ohjeena on *Vaihda kieli ennen soittamista – kysy apua soitinliikkeestä.* V5 onnistuu myös 5. kielellä (A), mutta V6:n tausta on E:ssä. Siksi 5. kieli on vain V5:n hätävara, ei virallinen vaihtoehto.

### 4.2 Oikea käsi ja lyönti

- **Asento:** käsivarsi lepää rungon reunalla, ranne on rento ja peukalo kielellä kitaran keskikohdan kohdalla.
- **Lyönti:** peukalo liikkuu kielen yli kohti lattiaa ja pysähtyy viereiselle kielelle. Lyönti on pieni liike, ei heilautus.
- **Voimakkuus:** keskitaso. Liian kova lyönti saa kielen lyömään nauhoja vasten, ja kieli särisee.
- **Iskun hetki:** ääni syntyy, kun peukalo irtoaa kielestä. Ohjeessa sanotaan *soita naksahduksen kanssa*, ei *liikkeelle naksahduksesta*.

### 4.3 Vaimentaminen (`GTR-MUTE`)

- **Ensisijainen tapa:** soittanut peukalo laskeutuu takaisin samalle kielelle.
- **Vaihtoehto plektran kanssa:** oikean kämmenen ulkosyrjä kielelle lähellä tallaa.
- **Ei tässä jaksossa:** vasemman käden vaimennus. Sitä tarvitaan myöhemmin sointujen kanssa, ja ensimmäisellä kerralla vasen käsi on tarkoituksella pois kieliltä.
- **Musiikillinen tarkoitus näytetään aina:** V5:ssä pysäytys tekee neljän iskun hiljaisuuden. V6:ssa se on bändin yhteinen lopetus. Vaimennus ei ole irrallinen tekniikkaliike.

---

## 5. Kun ääni ei soi, särisee tai kieli ei ole vireessä

### 5.1 Vianmääritys

Taulukko avautuu V4:ssä ja V5:ssä linkistä *Ääni ei kuulosta oikealta?*. Yksi oire näytetään kerrallaan ja kullekin yksi korjaus.

| Oire, jonka oppija tunnistaa | Todennäköinen syy | Yksi korjaus | Jos ei auta |
| --- | --- | --- | --- |
| **Ääntä ei kuulu tai se on tumpelo ”tup”** | Vasemman käden sormi tai kämmen koskettaa kieltä | *Nosta vasen käsi kokonaan pois kieliltä ja kokeile uudestaan.* | Seuraava rivi |
| | Oikean käden kämmen lepää kielillä | *Pidä kämmen irti kielistä. Vain peukalo koskee kieleen.* | |
| | Peukalo ei irtoa kielestä, vaan painaa sitä | *Työnnä peukalo kielen yli, älä paina kieltä alas.* | |
| **Sähkökitarasta ei kuulu juuri mitään** | Vahvistinta ei ole, mikä on normaalia | *Laske taustan ääntä niin, että kuulet kitaran. Vahvistin ei ole pakollinen.* | |
| **Ääni särisee tai rämisee** | Lyönti on liian kova | *Soita kevyemmin.* | Kokeile toista lyöntisuuntaa: peukalo kevyesti alas, ei sivulle |
| | Vasen käsi koskettaa kieltä kevyesti | *Nosta vasen käsi pois.* | |
| | Kieli on hyvin löysällä (se lötkyy ja ääni on kalisevan matala) | *Kieli on liian löysällä. Viritä se tai pyydä apua (luku 5.3).* | |
| | Soittimen säätö | *Jos särinä kuuluu aina samalla tavalla kevyestäkin lyönnistä, vika voi olla kitaran säädössä – ei sinussa. Kysy soitinliikkeestä.* | Jatka harjoitusta silti: rytmitehtävä onnistuu |
| **Kaksi kieltä soi** | Peukalo osuu myös 5. kieleen | *Pysäytä peukalo 5. kielen päälle, älä lyö sen läpi. Silloin se ei soi.* | |
| **Ääni ei lopu** | Vaimennus on liian kevyt tai osuu väärään kieleen | *Laske koko peukalon pehmeä osa samalle kielelle, jota soitit.* | Kämmensyrjä kielille |
| **Peukaloon sattuu** | Iho ei ole tottunut | *Pidä tauko. Lyö kevyemmin. Arka iho on alussa normaalia, mutta kipu ei ole.* | Lopeta tältä päivältä |

[Ehdotus] Yksikään oire ei estä etenemistä. Ohjeen viimeinen rivi on aina *Rytmitehtävä onnistuu, vaikka ääni ei olisi täydellinen.*

### 5.2 Mitä *riittävän selkeä ääni* tarkoittaa tässä

Ääni on riittävä, kun oppija kuulee itse:

- äänen alun
- sävelkorkeuden, eli äänessä on korkeus eikä se ole pelkkä kopsahdus
- äänen lopun silloin, kun hän pysäyttää sen

Täydellistä sointia, särinättömyyttä tai painettujen äänten puhtautta ei vaadita. Ne ovat `GTR-CLEAN`-taidon myöhempiä osia.

### 5.3 Vire

- **V1–V5:** vireellä ei ole merkitystä. Pulssitehtävässä ei verrata sävelkorkeutta mihinkään. Viritystä ei mainita, paitsi jos kieli on silminnähden löysä (luku 5.1).
- **V6 (bändin kanssa):** tausta on E-mollissa. Jos 6. kieli on selvästi epävireessä, yhteissoitto kuulostaa riitaisalta. Näytetään yksi valinnainen rivi:
  > *Kuulostaako sinun äänesi ja bändin yhdessä riitaiselta? Kieli voi olla epävireessä. Voit virittää vain tämän yhden kielen E:ksi millä tahansa virittimellä (esim. puhelimen viritinsovellus tai klipsiviritin) – tai jatkaa silti. Rytmi on tässä tärkeintä.*
- Linkkiä Riffikaiun viritimeen ei tarjota ensimmäisenä, koska se vaatii mikrofoniluvan ja avaa pelinäkymän. [Ehdotus] Kun issuen #84 erillinen viritin valmistuu, linkki osoittaa siihen.
- **Avoin musiikillinen kysymys:** kuinka suuren epävireen E-pedaali kestää taustan kanssa ennen kuin se häiritsee aloittelijaa. Tämä testataan huomenna ([testisuunnitelma T4](A-E-VERTAILU-JA-TESTISUUNNITELMA.md#41-huominen-tarkistus-oikealla-kitaralla)).

---

## 6. Miten jakso toimii ilman mikrofonia

[Ehdotus] Jakso ei käytä mikrofonia missään vaiheessa. Sitä ei edes tarjota.

| Tieto | Miten se saadaan ilman mikrofonia | Kenen havainto |
| --- | --- | --- |
| Kuuliko oppija mallin | Toiston käynnistys ja loppuun kuuntelu | Järjestelmä (tekninen tieto, ei osaamisnäyttö) |
| Erottaako hän tasaisen epätasaisesta | V2b:n kuuntelutehtävä | Järjestelmä (valinta, 50 %:n arvaustodennäköisyys) |
| Soiko kitara | Oppija kuulee oman soittimensa | Itsearvio |
| Neljä ääntä pulssissa ja pysäytys | Kolmen kohdan itsetarkistus V5b:ssä | Itsearvio |
| Sama ulkopuolisen silmin | Havainnoija (opettaja, testaaja tai omistaja) käyttää samaa kolmen kohdan listaa | Havainnoitu |
| Valinnainen omalla laitteella | Oppija voi äänittää itsensä puhelimen sanelimella ja kuunnella | Itsearvio. Mikään ei lähde sivustolle |

**Miksi ei mikrofonia edes vapaaehtoisena?**

- Mikrofonin sävelkorkeushavainto ei kerro rytmin tasaisuutta.
- Iskun havaitseminen kitarasta naksutuksen ja taustan päältä vaatisi kaiunpoiston ja kalibroinnin, joita ei ole.
- Lupakysely on ylimääräinen vaihe ensimmäisellä kerralla.
- Auditoinnin linja (#49, G1.3) on sama.

Rytmin mikrofoniarvio on erillinen tutkimusaihe (`docs/rytmin-mikrofoniarvio-2026-11`), eikä se kuulu tähän jaksoon.

---

## 7. Mitä virtuaalinen harjoitus voi opettaa ja mitata, ja mikä on onnistumisen kriteeri

### 7.1 Virtuaalisen osuuden rajat

| Virtuaalinen osa | Mitä se voi **opettaa** | Mitä se voi **mitata** | Mitä se **ei** voi mitata |
| --- | --- | --- | --- |
| M1-malli | Mitä *neljä iskua ja hiljaisuus* tarkoittaa | Kuunneltiinko | Ymmärrystä |
| M0-naksutus | Ulkoisen pulssin seuraamista | Ei mitään | Seuraako oppija pulssia |
| V2b-kuuntelutehtävä | Huomion kiinnittämistä iskujen välien tasaisuuteen | Kuulonvaraista erottelua tässä tehtävässä, 50 %:n arvaustodennäköisyydellä | Omaa ajoitusta tai kitaransoittoa |
| Ruudun naputtaminen (**ei** ensimmäisessä versiossa) | Oman pulssin tuottamista | Periaatteessa naputusten välien tasaisuutta, koska vakioviive ei vaikuta väleihin. Laiteviiveen vaihtelu on mitattava ensin. | Kitaran ääntä, vaimennusta tai iskun osumista naksutukseen ilman kalibrointia |
| Itsetarkistus | Mihin kannattaa kiinnittää huomiota (kolme kohtaa) | Oppijan omaa käsitystä | Todellista suoritusta |

Ruudun naputtaminen jätetään pois ensimmäisestä versiosta. Se ei vie kohti kitaraa, ja sen laiteviiveitä ei ole mitattu. Mahdollinen myöhempi lisäys on kirjattu [avoimiin kysymyksiin](KRIITTINEN-KATSELMUS-JA-AVOIMET-PAATOKSET.md).

### 7.2 Onnistumisen kriteeri

**[Ehdotus] Jakson tavoite on saavutettu**, kun V5b:n kierros (neljä ääntä ja pysäytys ykkösellä) onnistuu **kahdesti peräkkäin** perustempon naksutuksen kanssa ilman mallia. Perustempo on 72 BPM, ellei testi T1 muuta sitä. Onnistumisella on kolme ehtoa:

1. **Neljä erillistä ääntä**, eli jokainen lyönti tuottaa kuultavan sävelen.
2. **Pulssissa:** jokainen ääni osuu naksahdukseen niin, ettei kuuntelija havaitse jälkeen jäämistä tai kiirehtimistä. Tarkkuutta ei mitata millisekunteina. Raja on kuultava.
3. **Pysäytys:** ääni loppuu seuraavan ykkösen kohdalla, ja sen jälkeen on hiljaista neljän iskun ajan.

**Miksi kaksi kertaa peräkkäin?** Yksi onnistuminen voi olla sattumaa. Kaksi peräkkäistä vaatii, että oppija pystyy aloittamaan kuvion uudelleen hiljaisuuden jälkeen, ja juuri se on pulssin ylläpitämistä. Raja on käytännöllinen oletus, ei tutkimuksella määritetty. Se tarkistetaan käyttäjätestissä.

**Kirjaus erillisinä tietoina** (yhteensopiva auditoinnin 06-dokumentin näyttötaulukon kanssa):

| Merkintä | Tarkoitus |
| --- | --- |
| `kuunneltu` | M1 toistettu loppuun |
| `kokeiltu_ilman_kitaraa` | V2a kuitattu |
| `kuuntelu_oikein_n/3` | V2b, ei osaamisnäyttö |
| `itsearvio_v5_onnistui` | Jakson tavoite itsearvioituna |
| `havainnoitu_v5_onnistui` | Vain testitilanteessa, ulkopuolisen havainnoijan merkitsemä |
| `kertaus_viiveella` | Seuraavalla käynnillä ilman mallia (V7-kertaus) |
| `sovellettu_v6` | V6 tehty ilman mallibassoa, itsearvio |

Käyttäjälle näytetään vain *Kuuntelit*, *Kokeilit* ja *Onnistuit (oma arviosi)*. Käyttäjälle ei näytetä prosentteja, pisteitä tai tähtiä.

---

## 8. Siirtyminen ensimmäiseen oikeaan musiikilliseen sovellukseen

**[Ehdotus] Porrastus:**

| Askel | Mitä soitetaan | Uusi asia | Aineisto |
| --- | --- | --- | --- |
| 1 | V5: neljä ääntä naksutuksen kanssa | Pulssi, lyönti, pysäytys | M0, uusi |
| 2 | V6: E-pedaali bändin kanssa, 8 tahtia | Yhteissoitto ja yhteinen lopetus | M2a ja M2-tausta, uusi |
| 3 | Sama tausta, A-kieli Am-tahdeissa | Kielen vaihto, toinen sävel, tahtien laskeminen | M2c ja M2-tausta, uusi |
| 4 | *Soita ensin basso*, Kolme cowboyta, 84 BPM | Painetut sävelet G ja C sekä oikea kappale | Olemassa oleva |
| 5 | Rytmi: alas–ylös yhdellä soinnulla | Sointu, komppi | Olemassa oleva |

Askel 2 on ensimmäinen *oikea musiikillinen sovellus*: oppijalla on bändissä rooli, jota ilman bändi kuulostaa vajaalta. Askel 4 on ensimmäinen *oikea kappale*. Askelten 3 ja 4 väliin voidaan tarvittaessa lisätä silta. Se on kuvattu [Musiikillisen sovelluksen luvussa 5](MUSIIKILLINEN-SOVELLUS.md#5-toisen-sävelen-lisääminen-ja-silta-olemassa-olevaan-aineistoon).

---

## 9. Toteuttajalle: vaatimukset, joita ei saa arvata

1. **Ääni käynnistyy vain käyttäjän toiminnosta.** Toisto pysähtyy, kun käyttäjä siirtyy toiseen vaiheeseen, poistuu sivulta tai piilottaa välilehden. Samaan aikaan soi vain yksi äänite.
2. **Pysäytys-painike on vähintään 44 × 44 CSS-pikseliä**, ja se näkyy koko toiston ajan, myös 320 px:n leveydellä ilman vieritystä. Oppijalla on kitara sylissä, joten painikkeen on oltava helppo osua yhdellä sormella.
3. **Toisto uudelleen ja silmukka.** M0 renderöidään 16 tahdin mittaiseksi, jotta harjoituskierros mahtuu yhteen toistoon. Selaimen oma `loop` tai uudelleen aloittaminen painikkeesta on sallittu, mutta saumatonta silmukkaa ei luvata. Ohjelmallista näytetarkkaa silmukkaa ei rakenneta, koska iOS Safarin toistossa on tunnettuja riskejä. Ks. [Musiikillinen sovellus, luku 2](MUSIIKILLINEN-SOVELLUS.md#2-jakson-äänitteet-m0m3).
4. **Ei ajastettua visuaalista laskuria** (1–2–3–4-korostusta) ensimmäisessä versiossa. iOS Safarin äänen käynnistyksen ja kelauksen viiveistä on aiempia havaintoja (issue #9). Äänen ja näytön synkronointia ei ole mitattu tähän käyttöön. Ruudukko näytetään staattisena.
5. **Tempovalinta** (72 tai 60 BPM) näytetään vasta V5:ssä ja V6:ssa *Hitaampi versio* -linkkinä, ei asetuksena.
6. **Kaikki vaiheet ovat avattavissa suoraan** syvälinkillä, eikä mikään vaihe ole lukittu. Tallennetaan vain viimeksi avattu vaihe ja luvun 7.2 merkinnät. Vanhat tallennusavaimet (`musiikin-kartta:luvut` ym.) eivät muutu.
7. **Tekstivastine:** jokaisella äänitteellä on lyhyt kuvaus siitä, mitä siinä kuuluu (esim. *16 naksahdusta, ensimmäinen korkeampi; kitara soittaa iskuilla 1–4 ja on hiljaa iskuilla 5–8*). Kuvaus ei väitä korvaavansa kuuntelua.
8. **Ruudunlukija:** vaiheen otsikko on otsikkoelementti. Toiston tila (*soi* tai *pysäytetty*) ilmoitetaan tilaviestinä. Kuuntelutehtävän palaute ilmoitetaan.
9. **Ei mikrofonia, ei tiliä, ei pisteitä, ei lukkoja.**
