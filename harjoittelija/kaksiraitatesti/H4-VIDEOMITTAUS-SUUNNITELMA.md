# H4, vaihtoehto B: ulkoinen videomittaus (suunnitelma, 19.11.2026)

**Tila:** mittausmenetelmän kehitysvaihe.
- Omistaja hyväksyi vaiheet P0–P2 rajauksin 19.11.2026 (luku 5).
- P3 (koetila ja analyysityökalu), koodimuutokset ja laitehankinnat eivät ole hyväksyttyjä.
- P0–P2:n ohje ja pöytäkirja ovat tiedostossa `H4-VIDEO-P0-P2-OHJE.md`. Vaiheita ei ole vielä suoritettu.
- PR #126 on Draft-tilassa ja issue #9 NO-GO-tilassa.
- Pohjana ovat `H4-KATSELMOINTI-2026-11-19.md` ja mittaussuunnitelman M2 (`NAYTTO-AANI-MITTAUSSUUNNITELMA.md`).

**Kysymys:** kuinka paljon iPhonen kaiuttimesta kuuluva ääni ja näytöllä näkyvä välähdys eroavat toisistaan, kun välähdys seuraa mediakelloa (`currentTime`)? Muuttuuko ero käynnistyksen, jatkon ja kelauksen välillä? Mittaus ei riipu havaitsijasta.

## 0. Säätökokeen viisi ensimmäistä havaintoa

Omistajan tarkistuksen mukaan alkuperäisessä H4-raportissa **kolmella viidestä** käynnistyshavainnosta on `sameOperation=true`.
- Ne ovat saman toistojakson toistosäätöjä, eivät uusia käynnistyksiä. Riippumattomia käynnistysoperaatioita on siis vain **kaksi**.
- Sivu jättää toistosäädöt pois tilastoista ja protokollan laskureista, mutta ne säilyvät raakadatassa.
- Viittä arvoa ei käsitellä viitenä riippumattomana havaintona. Katselmoinnin luvussa 1 laskettu keskiarvo, SD ja luottamusväli ovat tästä syystä virheellisiä tulkintoja.
- JSON-raportti ei ole vielä Macilla (tarkistettu Lataukset-kansiosta 19.11.). Se tallennetaan muuttamattomana nimellä `raportit/iphone-h4-2026-11-19.json`, ja `sameOperation`-, `pageLoadId`- ja `request`-kentät tarkistetaan sitä vasten.

## 1. Vastaukset kysymyksiin

### 1.1 Voiko toisella puhelimella tallentaa näytön ja kaiuttimen samaan tallenteeseen?

**Todennäköisesti kyllä, mutta se on todennettava pilotilla (P0).**
- Puhelimen videotallenteessa on yksi kuvaraita ja yksi ääniraita samalla aikajanalla. Näytön välähdys näkyy kuvassa, ja kaiuttimen ääni kuuluu kameran mikrofonissa.
- **Kameran oma kuva–ääni-ero on tuntematon, ja se voi vaihdella tallenteesta toiseen.**
  - Tunnetuissa tapauksissa ero on vaihdellut huomattavasti samassa järjestelyssä ([OBS-foorumi](https://obsproject.com/forum/threads/audio-loses-sync-within-one-second.122309/)).
  - Pitkissä tallenteissa voi olla lisäksi ajautumaa ([arXiv 2107.00987](https://arxiv.org/abs/2107.00987v1)).
  - Siksi kamera kalibroidaan **jokaisen tallenteen alussa ja lopussa** (luku 1.3). Yhteen kertaan kalibroituun arvoon ei luoteta.
- **Äänen kulkuaika** on pieni (30 cm ≈ 0,9 ms), mutta se mitataan ja korjataan eikä sitä jätetä huomiotta. Etäisyydet kaiuttimeen ja iskukohtaan sekä lämpötila kirjataan, ja korjaus on (s_k − s_i) / v. Ks. `H4-VIDEO-P0-P2-OHJE.md` luku 2.1.
- **Mikrofonilinjaus:** omistaja päätti 19.11.2026, että ulkoisen kameran mikrofonilla saa tallentaa testisivun piippaukset ja kalibrointiäänet. Alkuperäisen vaatimuksen tarkoitus ja soveltuminen on käsitelty luvussa 5.1. Vaatimusta ei ole muutettu sovelluksen osalta.

### 1.2 Säilyykö ääni 240 fps:n hidastusvideossa?

**Ei tiedossa varmasti. Todennetaan pilotin P0 ensimmäisenä asiana.**
- **iPhonen hidastusvideo:**
  - Kolmannen osapuolen lähteiden mukaan iPhone tallentaa äänen normaalinopeudella ([klipa.ai](https://klipa.ai/en/blog/slow-motion-video-on-iphone_1117)).
  - Alkuperäinen tiedosto on 120 tai 240 fps:n video, jonka hidastus on toistoasetus ([Adobe-yhteisö](https://community.adobe.com/t5/premiere-pro-discussions/exporting-240fps-iphone-footage-in-the-same-format-as-original/m-p/8789412)).
  - Tavallinen jakaminen voi kuitenkin tuottaa uudelleenkoodatun 30 fps:n version, jossa aika on venytetty ([Apple-yhteisö](https://discussions-cn-prz.apple.com/thread/250446889)).
  - Tiedostossa voi olla vaihteleva kuvanopeus ([totalmedia.ai](https://www.totalmedia.ai/en/resources/blog/convert-iphone-slow-motion-video-pc-editing)), joten kuvien ajat luetaan aikaleimoista, ei kuvanumerosta.
  - Applen omaa dokumentaatiota hidastusvideon ääniraidasta ei löytynyt.
- **Android-puhelimissa** hidastusvideo jättää usein äänen kokonaan pois. Tätä ei ole tarkistettu kuvaavasta laitteesta.
- **Siirto Macille muuttamattomana:** AirDrop asetuksella *Valinnat → Kaikki kuvadata* ([Apple, ProRes-ohje](https://support.apple.com/109041)) tai Kuvansiirto-sovellus kaapelilla. Tiedosto tarkistetaan Macilla AVFoundationilla (Swift, Xcoden mukana; ei asennuksia):
  - ääniraita on olemassa, ja sen kesto vastaa todellista kestoa
  - kuvaraidan aikaleimojen välit ovat noin 4,17 ms.
- **Jos ääni puuttuu tai on venytetty,** käytetään tavallista 60 fps:n videota. Kuvaväli on silloin 16,7 ms, joten yksittäisen välähdyksen alkuhetken epävarmuus on noin ±8 ms. Se riittää satojen millisekuntien siirtojen havaitsemiseen, mutta ±80 ms:n arvioon tarvitaan useita tapahtumia (luku 1.5).

### 1.3 Kameran oman ääni–kuva-eron mittaus ja vähennys

- **Kalibrointi-isku:** kaksi kovaa esinettä (esim. kaksi lusikkaa tai kynä pöydän reunaan) lyödään yhteen kuvassa, samalla etäisyydellä mikrofonista kuin iPhonen kaiutin. Isku tehdään 5 kertaa **ennen mittausjaksoa ja 5 kertaa sen jälkeen**.
  - Kosketushetki: ensimmäinen kuva, jossa esineet koskettavat.
  - Äänen alku: iskun alkureuna ääniraidassa.
- **Kameran ero** c = äänen alku − kosketushetki − etäisyys / 343 m/s.
  - Lasketaan alku- ja loppusarjoista erikseen.
  - Ajautuma = loppu − alku.
  - Iskujen keskinäinen hajonta kertoo kalibroinnin epävarmuuden.
- **Korjattu tulos** jokaiselle tapahtumalle: Δᵢ = (piippauksen alku − välähdyksen alku) − c.
- **Muutos ja kalibrointi** (korjattu 19.11.2026 omistajan tarkennuksen mukaan):
  - H4:n päätuloksena on *muutos* käynnistyksestä jatkoon ja kelaukseen. Kun kaikki kolme tilannetta kuvataan samassa tallenteessa, c:n **arvo** kumoutuu erotuksessa **vain, jos c pysyy samana** koko tallenteen ajan.
  - Tätä ei oleteta. c:n vakaus tallenteen sisällä ja tallenteiden välillä tutkitaan P1:ssä (`H4-VIDEO-P0-P2-OHJE.md` luvut 2.2–2.3).
  - c:n muutos tallenteen aikana on aina osa muutoksen epävarmuutta.
- **Rullaava suljin:** kuvan rivit valottuvat eri aikaan, 240 fps:llä yhden kuvan sisällä joitakin millisekunteja. Isku ja välähdysalue kuvataan samalla korkeudella kuvassa, tai rivin vaikutus arvioidaan pilotissa.
- **Näytön virkistys:** välähdyksen näkyminen riippuu siitä, millä ruudun rivillä välähdysalue on, ja ruudun virkistystaajuudesta (ProMotion, virransäästötila). Mitattava rivi pidetään samana kaikissa tallenteissa ja kirjataan. Tämä viive on osa sitä, mitä mitataan, eikä sitä vähennetä.

### 1.4 Harva, epäsäännöllinen tapahtumasarja

**Periaate:** pari tunnistetaan **välijärjestyksen kuviosta**, ei lähimmästä naapurista. Kun peräkkäisten tapahtumien välit ovat epäsäännölliset ja tunnetut, usean tapahtuman sarjan ristikorrelaatiolla on vain yksi huippu, vaikka ero olisi suurikin.

**Suunniteltu sarja** (uusi koetila, esim. `&koe=video`; vaatii hyväksynnän):

| Ominaisuus | Arvo | Peruste |
| --- | --- | --- |
| Tapahtumaväli | Näennäissatunnainen 1,2–2,4 s, kiinteä siemen, kaksi peräkkäistä väliä aina vähintään 150 ms eri pituisia | Lähin naapuri on yksiselitteinen, kun ero on alle 600 ms. Kuvio on yksiselitteinen paljon suuremmillakin eroilla. |
| Piippaus | 10 ms, 2 kHz, jyrkkä alku (1 ms:n nousu), tasainen voimakkuus | Alkuhetki on tarkka ääniraidasta. Taajuus erottuu huoneäänistä. |
| Tunnistekoodi | Joka neljäs tapahtuma kaksoispiippauksena ja kaksoisvälähdyksenä (150 ms:n välein) ja ruudulla juokseva numero | Ankkurit tarkistavat parin käsin. Numerosta näkee tapahtuman videolta. |
| Välähdys | Koko leveyden valkoinen alue mustalla taustalla, kesto 100 ms. Kohta: välähdys syttyy, kun `currentTime` ylittää piippauksen kohdan (sama sääntö kuin H4:ssä, d = 0). | 240 fps:llä 24 kuvaa, 60 fps:llä 6 kuvaa. Alkureuna erottuu selvästi. |
| Jakson pituus | Vähintään 15 s, eli noin 8–12 tapahtumaa, jokaisen operaation jälkeen | Riittää kuvion tunnistamiseen ja hajonnan arvioon. |
| Kirjaus raporttiin | Jokaisen tapahtuman suunniteltu kohta, välähdyksen piirtohetki (`performance.now`), `currentTime` piirtohetkellä ja jakso (käynnistys, jatko tai kelaus) | Videon tapahtumat yhdistetään sivun tapahtumiin numerolla. |

**Ilman koodimuutosta (pilotti P2):** nykyisen H4-sivun säätö asetetaan arvoon 0 (painikkeilla ±10 ja ±50).
- Sivun 441 piippauksen välit ovat epäsäännölliset (351–750 ms) ja tunnetut (`beepStarts`). Kuviontunnistus on mahdollinen, mutta se ei ole itsestään yksiselitteinen:
  - Kun aikataulua siirretään noin ±530 ms, jopa 39 % tapahtumista osuu ±20 ms:n päähän toisesta piippauksesta. Tämä on juuri epäillyn ilmiön suuruusluokka.
  - Pari varmistetaan siksi ennen analyysia indeksin tunnistuksella, ankkurilla ja parien johdonmukaisuudella (`H4-VIDEO-P0-P2-OHJE.md` luku 4).
- Piippaukset ovat kuitenkin pehmeäalkuisia (30 ms:n ikkunoitu) ja tiheitä, ja välähdys on 60 ms.
- Pilotti kertoo, riittääkö nykyinen sivu ja tarvitaanko harva tila lainkaan.

### 1.5 Epävarmuuden raportointi ilman ennenaikaisia lupauksia

- **Tarkkuutta ei ilmoiteta etukäteen.** "Noin 4 ms:n kuvaresoluutio" on vain kuvavälin raja. Todellinen epävarmuus määritetään pilotista. Siihen asti tulokset ovat "pilotti, epävarmuus määrittämättä".
- **Absoluuttinen ero ja tilanteiden välinen muutos raportoidaan erikseen** (lisätty 19.11.2026), koska niiden epävarmuuslähteet ovat eri. Absoluuttinen ero tarvitsee c:n arvon. Muutokseen vaikuttaa vain c:n muutos tallenteen aikana. Erottelu on kuvattu tiedostossa `H4-VIDEO-P0-P2-OHJE.md`, luku 5.
- **Raportoidaan jokaiselle tallenteelle ja tilanteelle:**
  - tapahtumien määrä n ja jokaisen tapahtuman Δᵢ (raakadata)
  - mediaani, kvartiiliväli, pienin ja suurin arvo
  - mediaanin 95 %:n bootstrap-luottamusväli
  - muutos käynnistyksestä (saman tallenteen sisällä) omana taulukkonaan ja sen bootstrap-luottamusväli
  - luottamusväli vain jaksoille, joiden ääni–välähdyspari on varmistettu.
- **Osatekijää ei esitetä kokonaisepävarmuutena:** kuvaväli, äänen tai äänikortin näyteväli ja kalibrointi-iskujen hajonta ovat osatekijöitä.
- **Virhebudjetti mitattuna, ei oletettuna:**

  | Lähde | Miten arvioidaan |
  | --- | --- |
  | Kuvaväli | Tasajakautunut ±½ kuvaväliä. Mitataan aikaleimoista, ei oleteta. |
  | Äänen alkuhetki | Saman kalibrointi-iskun toistettavuus (5 iskua) |
  | Kameran ero c | Alku- ja loppusarjan hajonta ja niiden ero (ajautuma) |
  | Rullaava suljin | Iskun ja välähdyksen rivien ero × rivien lukuaika (pilotista) |
  | Asettelu | Sama mittaus kahdella eri asettelulla (etäisyys tai kulma) |

- **Luokittelu:** ±80 ms:n alustavaa suunnittelutavoitetta käytetään vain olemassa olevalla tavalla (koko luottamusväli tavoitteen sisällä, kokonaan ulkona tai epäselvä). Mitään ei kutsuta hyväksytyksi, eikä kriteereitä muuteta.
- **Rajaukset kirjataan jokaiseen raporttiin:** vain iPhonen kaiutin (Bluetoothin ääntä ei saa tallenteeseen), yksi laite, yksi näytön kohta, ja virkistystaajuus ja virransäästötila mainittuina.

## 2. Testisuunnitelma

Vaiheet P0–P2 eivät vaadi koodimuutoksia eivätkä hankintoja. P3 vaatii hyväksynnän.

**Tilanne 19.11.:** kaksi tallennetta analysoitu, kummassakin tavallinen video ja ääniraita mukana, ja paritus aikataulun kautta onnistui yksiselitteisesti. iPhone: [`H4-VIDEO-IPHONE-2026-11-19.md`](H4-VIDEO-IPHONE-2026-11-19.md) (`IMG_0016.MOV`, kuvaajana iPad, 30 fps). Erillinen iPad-pilotti: [`H4-VIDEO-PILOTTI-IPAD-2026-11-19.md`](H4-VIDEO-PILOTTI-IPAD-2026-11-19.md). Omistaja hyväksyi siirtymisen P1:een 19.11. P1:n ohje ja ennalta kirjatut ehdot: [`H4-P1-KALIBROINTIOHJE.md`](H4-P1-KALIBROINTIOHJE.md) (yksi tallenne: 5 iskua, H4-toisto, 5 iskua; sama iPad ja iPhone). Tallennetta ei vielä ole. Raitaeron vertailu sivun mittaukseen: [`H4-RAITAERO-VERTAILU-2026-11-19.md`](H4-RAITAERO-VERTAILU-2026-11-19.md). Työkalut: [`tools/h4-video/`](../../tools/h4-video/README.md).

| Vaihe | Mitä | Läpäisyehto (vaiheen jatkamiselle, ei H4:n hyväksymiselle) |
| --- | --- | --- |
| **P0** Laitetarkistus | Kuvaavan puhelimen malli. Noin 30 s:n koetallenne (iskut, H4-sivu 15 s, iskut) hidastustilassa ja tavallisessa 60 fps:n tilassa → siirto Macille alkuperäisenä → tarkistus: raidat, alkuajat ja muokkauslistat, kuvien aikaleimat, ääniraidan näytetaajuus ja kesto. **Äänen ja kuvan aikamittakaava** tarkistetaan testisivun tunnetuista piippaus- ja välähdysväleistä. Tarkennettu 19.11.2026, ks. ohjeen luku 1. | Ääniraita on olemassa, ja ääni ja kuva kulkevat reaaliajassa samalla aikajanalla. Muuten B käytetään tavallisella videolla, tai työ pysäytetään omistajan päätökseen. |
| **P1** Kameran kalibrointi | Telineeseen tai kirjapinoon, noin 20–30 cm. iPhonen näyttö ja alareunan kaiutin samassa kuvassa. Geometria, etäisyydet ja lämpötila kirjataan. Kalibrointiajot (tarkennettu 19.11.2026):<br>– **P1-a** 5 min, 6 iskusarjaa: vakaus ja ajautuma tallenteen sisällä<br>– **P1-b** 3 erillistä tallennetta: vaihtelu tallenteiden välillä.<br>Valaistus päivänvalo tai tasavirtavalo: 50 Hz:n verkkovalo välkkyy 240 fps:n kuvassa. | c:n hajonta, ajautuma ja tallenteiden välinen vaihtelu ovat tiedossa. Jos c ei ole vakaa, sitä ei oleteta kumoutuvaksi. Jos hajonta on suuri, B:n absoluuttinen tulos ei ole käyttökelpoinen, ja muutoksen käyttökelpoisuus riippuu c:n vaihtelusta tallenteen aikana. |
| **P2** Pilotti nykyisellä sivulla | PR #126:n kiinteä käännös `7fdb5dd65cc9`, `?koe=nayttoaani`, säätö 0. Yhdessä tallenteessa: iskut → käynnistys 15 s → Tauko 2 s → jatko 15 s → kelaus 15 s → iskut. iPhonella kirkkaus täysi, virransäästötila pois, Älä häiritse päälle ja äänenvoimakkuus korkea. | Välähdys ja piippaus erottuvat tallenteesta. **Ennen analyysia** jokaisen jakson ääni–välähdyspari on varmistettu (ohjeen luku 4, V1–V5), ettei vertailu kohdistu viereisiin tapahtumiin. Arvio epävarmuudesta saadaan. |
| **P3** Harva tila ja analyysityökalu | Vain hyväksynnällä: `&koe=video` (luku 1.4) ja analyysityökalu. Työkalu tekee AVFoundationilla tapahtumalistan videosta (välähdysalueen kirkkaus kuvittain, ääniraidan alkuhetket) ja Pythonilla parituksen, kalibroinnin ja tilastot. | Työkalun yksikkötestit synteettisellä videolla, jossa ero tunnetaan (positiivinen kontrolli). |
| **P4** Mittaus | 3 tallennetta, kahdella asettelulla. Jokaisessa 5 × käynnistys (sivu ladataan uudelleen), 5 × jatko ja 5 × kelaus, iskut alussa ja lopussa. | Tulokset luvun 1.5 mukaisesti. Ei hyväksyntää ilman omistajan päätöstä. |

**Analyysi P2:ssa ilman uusia työkaluja repossa:** pilotti analysoidaan kertaluonteisella skriptillä istunnon väliaikaishakemistossa. Työkalu lisätään repoon vasta P3:ssa.

## 3. Vertailu vaihtoehtoon A (valokenno ja mikrofoni samassa äänikortissa)

| | **B: video** | **A: valokenno ja mikrofoni** |
| --- | --- | --- |
| Tarvikkeet | Toinen puhelin ja teline. Ei hankintoja, jos puhelin on käytettävissä. | Valokenno (noin 5–20 €), johto, mikrofoni. Äänikortti (Scarlett Solo) on jo olemassa. |
| Yhteinen kello | Kameran kuva ja ääni. Ero c tuntematon ja kalibroitava, voi ajautua. | Molemmat kanavat samassa A/D-muuntimessa. Kanavien välisen eron oletetaan olevan pieni, mutta se on tarkistettava yhdellä signaalilla ennen käyttöä. |
| Ajallinen erottelu (vain resoluutio, ei kokonaisepävarmuus) | Kuvaväli 4,2 ms (240 fps) tai 16,7 ms (60 fps), lisäksi rullaava suljin | Näyteväli 0,02 ms (48 kHz). Kokonaisepävarmuuteen vaikuttavat myös alkuhetken tunnistus, valokennon vasteaika, mikrofonin ja valokennon asettelu ja äänen kulkuaika. Ne on mitattava, eikä näyteväliä esitetä mittauksen tarkkuutena. |
| Epävarmuuden päälähde | Kalibrointi (c ja ajautuma), alkuhetken tunnistus kuvasta | Valokennon kytkentä ja taso, mikrofonin asettelu |
| Muutoksen mittaus (jatko ja kelaus vs. käynnistys) | Hyvä: c kumoutuu saman tallenteen sisällä | Hyvä |
| Absoluuttinen ääni–kuva-ero | Kalibroinnin varassa | Suoraan |
| Analyysi | Videon purku ja kirkkauden laskenta (AVFoundation), raskaampi | Kaksikanavainen WAV, kevyt (sama ristikorrelaatio kuin testisivun mittauksissa) |
| Pilotointi | Heti ilman koodia (P0–P2) | Vaatii hankinnan. Kytkentä on kokeiltava. |
| Bluetooth-ääni | Ei mitattavissa | Ei mitattavissa (kumpikin mittaa kaiutinta) |

**Johtopäätös:**
- **B on oikea ensimmäinen askel:** pilotti onnistuu ilman hankintoja ja koodia, ja muutoksen mittaus on luotettava ilman kalibrointia.
- **A on tarkempi absoluuttiselle erolle.** Se kannattaa ottaa harkintaan, jos P1:n kalibroinnin hajonta on suuri tai jos absoluuttinen ero tarvitaan ±80 ms:n arvioon.

## 4. Päätettävää omistajalle

1. ~~Tallenteiden ääni ja mikrofonilinjaus.~~ **Päätetty 19.11.2026:** saa tallentaa (luku 5). Tallenteiden säilytys ja poisto on vielä auki.
2. ~~Saako P0–P2 tehdä nykyisellä sivulla, ilman koodimuutoksia?~~ **Päätetty 19.11.2026:** kyllä, säätö 0 (luku 5).
3. P2:n jälkeen: tarvitaanko harva tila `&koe=video` ja analyysityökalu (P3), vai riittääkö nykyinen sivu? **Avoin.** Päätetään P0–P2:n tulosten perusteella.
4. Vaihtoehto A:n hankinta, jos P1:n kalibrointi osoittautuu liian epävarmaksi. **Ei hankita nyt** (päätös 19.11.2026).

## 5. Omistajan päätökset ja tekniset tarkennukset 19.11.2026

### Omistajan päätökset

| # | Päätös |
| --- | --- |
| 1 | Ulkoisen kameran mikrofonilla saa tallentaa testisivun piippaukset ja kalibrointiäänet. Tallenteessa ei tarvitse olla puhetta eikä muuta yksityistä ääntä. M2:n alkuperäisen vaatimuksen tarkoitus ja soveltuminen tarkistetaan, eikä vaatimusta muuteta hiljaisesti (luku 5.1). |
| 2 | **P0:** lyhyt koetallenne. Varmistetaan, että alkuperäisestä videotiedostosta voidaan analysoida ääni ja kuva oikealla yhteisellä aikajanalla. |
| 3 | **P1:** kameran alku- ja loppukalibrointi. Huomioidaan äänen kulkuaika, kuvausgeometria ja tallennuksen mahdollinen ajautuma. |
| 4 | **P2:** nykyinen H4-sivu hyväksytään pilottiin. Säätö asetetaan nollaan, ja käynnistys, jatko ja kelaus kuvataan samaan tallenteeseen. |
| 5 | P3:n uutta koetilaa ja analyysityökalua ei vielä toteuteta. Päätös tehdään P0–P2:n tulosten jälkeen. |
| 6 | Valokennoa tai muuta mittalaitteistoa ei hankita vielä. |

**Rajaukset:**
- H4 pysyy mittausmenetelmän kehitysvaiheessa.
- PR #126 pysyy Draft-tilassa ja issue #9 NO-GO-tilassa.
- Toistomoottoria ei muuteta, eikä mergeä tai tuotantojulkaisua tehdä.

### Omistajan tekniset tarkennukset ja niiden kirjaus

| Tarkennus | Missä huomioitu |
| --- | --- |
| Ei oleteta, että 240 fps:n hidastusvideossa on analyysikelpoinen reaaliaikainen ääni ennen P0-varmennusta. | Luku 1.2 (ennallaan: ei tiedossa) ja ohjeen luku 1: P0-c ja P0-d tarkistavat aikamittakaavan tunnetuista väleistä. |
| Ei oleteta kameran ääni–kuva-eron kumoutuvan, ennen kuin sen vakaus on tutkittu. | Luku 1.3 korjattu. Ohjeen luvut 2.2–2.3: P1-a (vakaus) ja P1-b (vaihtelu tallenteiden välillä). |
| Äänikortin näyteväliä ei esitetä mittauksen kokonaisepävarmuutena. | Luku 3, rivi *Ajallinen erottelu*, ja luku 1.5 |
| Absoluuttiset erot ja tilanteiden väliset muutokset raportoidaan erikseen. | Luku 1.5 ja ohjeen luku 5 |
| Ennen P2:n analyysia varmistetaan, että verrataan samaa ääni–välähdysparia eikä viereisiä tapahtumia. | Luku 1.4, luku 2 (P2) ja ohjeen luku 4 (V1–V5) |

**Huom.:** `H4-KATSELMOINTI-2026-11-19.md`:n luvun 5 taulukon B-rivin tarkkuusarviot (noin ±4 ms kuvaa kohden ja noin ±10 ms kalibrointi) ovat ennakkoarvioita, eivät mitattuja. Tämä suunnitelma ja ohje korvaavat ne. Katselmointi säilyy ennallaan historiallisena.

### 5.1 Mikrofonivaatimuksen tarkoitus ja soveltuminen ulkoiseen mittaukseen

**Lähteet:**
- **Issue #9** (12.11.2026, tutkintatehtävän kohta 2): ”Kerää vain tekninen diagnostiikka, älä tallenna mikrofonia.” Kohta koskee testisivun instrumentointia tutkittavalla iPhonella.
- **`NAYTTO-AANI-MITTAUSSUUNNITELMA.md`**, *Ei käytetä*: ”Mikrofonitallenne: projektin linjaus on, ettei mikrofonia tallenneta.”
- **`H4-KATSELMOINTI-2026-11-19.md`** luku 5, vaihtoehto E: iPhonen oman mikrofonin avaaminen muuttaa iOS:n äänisession ja reitityksen, jolloin mitattava viive muuttuu.

**Tarkoitus.** Lähteet eivät kirjaa sitä sanatarkasti, joten seuraava on päättelyä:
1. **Yksityisyys:** sivusto tai testisivu ei tallenna käyttäjän ääntä.
2. **Mittauksen pätevyys:** jos tutkittavan iPhonen mikrofoni avataan, iOS siirtyy eri äänisession tilaan, ja mitattaisiin muuta kuin tuotannon toistoa.
3. **Diagnostiikan rajaus:** testisivun raportti sisältää vain teknisiä tietoja.

**Soveltuminen ulkoiseen mittaukseen:**

| Tarkoitus | Ulkoinen kamera | Johtopäätös |
| --- | --- | --- |
| 1 Yksityisyys | Tallenne on ääntä, mutta omistajan omalla laitteella, ja sisältönä on testiääniä. | Koskee osittain. Omistajan päätös 1 sallii tallenteen ehdoin: ei puhetta, ei repoon eikä ulkoisiin palveluihin, ja säilytyksestä päätetään erikseen. |
| 2 Mittauksen pätevyys | Tutkittavan iPhonen mikrofoni pysyy suljettuna. Testisivu ei pyydä mikrofonia (`getUserMedia` puuttuu sekä lähteestä että käännöksestä, tarkistettu 19.11.2026), eikä iPhonen näytön tallennusta käytetä. | Ei riko. Ulkoinen tallenne on juuri keino välttää tutkittavan laitteen mikrofoni. |
| 3 Diagnostiikan rajaus | Videotallenne ei ole testisivun diagnostiikkaa. Sivun raportti pysyy teknisenä. | Ei koske. |

**Kirjaus:**
- Vaatimus pysyy voimassa sovelluksen ja testisivun osalta. Sovellus ja testisivu eivät tallenna mikrofonia.
- Ulkoinen kameratallenne on omistajan 19.11.2026 hyväksymä, rajattu tarkennus, joka on kirjattu myös mittaussuunnitelmaan (`NAYTTO-AANI-MITTAUSSUUNNITELMA.md`).
- **Huomio:** mittaussuunnitelman M2 (hidastusvideo ja taputuskalibrointi) on aina edellyttänyt kameran äänen tallennusta. Se oli ristiriidassa kohdan *Ei käytetä* kanssa. Ristiriita on nyt purettu tällä tarkennuksella.
