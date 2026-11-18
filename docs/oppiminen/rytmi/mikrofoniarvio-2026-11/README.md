# Rytmiopetuksen tekninen ja pedagoginen toteutettavuusarvio

**Päivätty:** 16.11.2026. **Pohja:** `beta` `f7a204b`. **Laatija:** Claude (Fable 5.2), itsenäinen selvitys.
**Tila:** selvitys. **Ei toteutuslupa, ei merge-lupaa, ei julkaisulupaa.** Tuotantokoodia ei ole
muutettu, issueita ei ole luotu. Liittyy issueihin #54, #45, #49 ja #69 sekä PR:ään #70.

## Päätösehdotus

1. **Mikrofonilla ei kannata nyt arvioida rytmiä automaattisesti.** Isku iskulta annettava
   "ajoissa / myöhässä" -arvio ei ole selaimessa riittävän luotettava, eikä sitä pidä rakentaa.
2. **Ensimmäinen rytmipilotti tehdään ilman mikrofonia:** "Sama sointu, kaksi komppia". Oppija kuulee
   kaksi komppia, näkee ne kahdeksan kohdan ruudukossa, poistaa yhden iskun ja soittaa oikealla kitaralla
   mallin ja klikin kanssa. Pedagoginen hyöty ei tässä vaiheessa riipu mikrofonista.
3. **Mikrofonin mahdollinen myöhempi rooli selvitetään erillisellä mittauskokeella** omistajan omalla
   kitaralla, ennalta kirjatuin hyväksymisrajoin. Rajattu, koko ottoa koskeva havainto ("kuulin kuusi
   iskua tahdissa, iskuvälit olivat tasaiset") voi olla toteutettavissa. Se on oletus, kunnes se on
   mitattu.
4. **Pilotin koekäyttö kertoo, tarvitaanko mikrofonia lainkaan:** verrataan oppijan itsearviota
   havainnoijan arvioon. Jos ne täsmäävät, mikrofoniarvion hyöty on pieni.

## Miksi automaattinen arvio ei ole nyt luotettava

| Syy | Näyttö |
| --- | --- |
| Kaiuttimesta kuuluva rumputausta näyttää soitolta | Oma koe: 32–33 väärää iskua kahdeksassa tahdissa, kun kitara oli hiljaa |
| Nykyinen aluketunnistin ei havaitse ylösvetoja soivan soinnun päältä | Oma koe tuotannon koodilla: 0/32, 0/24 ja 0/64 |
| Parempikin menetelmä jättää iskuja huomaamatta | Oma koe: hiljaisen soiton ylösvedoista 8/32 puuttui. Tutkimus: puhelimen mikrofonilla F1 85–93 %, ylösvedot 53–79 % |
| Selain ei tunne äänen viivettä luotettavasti | `outputLatency` tuli Safariin vasta versiossa 18.4, ja mitattuna arvo oli alle puolet todellisesta. Bluetooth ilmoittaa liian pieniä arvoja |
| Nykyinen analyysi on sidottu ruudunpäivitykseen | Koodi: `requestAnimationFrame`. Koe: aikaleiman hajonta 4,6–9,5 ms jo ihannesignaalilla, viive 39–69 ms soivalla soinnulla |
| Kompin isku ei ole piste | Alasveto kuudelta kieleltä kestää kymmeniä millisekunteja. Koe: 1–8 ylimääräistä havaintoa ottoa kohti |
| Mikrofoni ei kuule käden liikettä tauon aikana | Kompin opetuksen ydinasia jää aina itsearvion tai katsojan varaan |

## Asiakirjat

| # | Asiakirja | Sisältö |
| --- | --- | --- |
| 1 | [Tekninen toteutettavuus](./01-tekninen-toteutettavuus.md) | Koodin nykytila, virhebudjetti, kalibrointi, tunnistusmenetelmät, olosuhteet, mitä voi päätellä, kirjastot, lähteet |
| 2 | [Pedagoginen pilotti](./02-pedagoginen-pilotti.md) | Polku pulssista omaan komppiin, pilotin tarkka rajaus, mitä mikäkin vaihe mittaa, vertailu ilman mikrofonia |
| 3 | [Arkkitehtuurivaihtoehdot](./03-arkkitehtuurivaihtoehdot.md) | Viisi vaihtoehtoa, vertailu, päätösehdotus, tekninen rakenne |
| 4 | [Prototyypin spesifikaatio](./04-prototyypin-spesifikaatio.md) | Rytmilabra-mittausväline, mittarit M1–M11, hyväksymisrajat, koematriisi, rajatapaukset |
| 5 | [Tehtäväehdotukset](./05-tehtavaehdotukset.md) | Omistajan päätökset D1–D5, tehtävät T1–T9 hyväksymiskriteereineen |
| – | [Apukoe](./koe/tulokset.md) ja [sen koodi](./koe/onset-koe.mjs) | Nykyinen tunnistin ja spektrivuo synteettisellä kompilla |

## Mikä on varmennettu, mikä perustuu lähteisiin ja mikä on oletus

**Varmennettu tässä selvityksessä** (luettu koodista haarasta `beta` tai ajettu):

- Nykyinen mikrofoniketju on yksiääninen sävelentunnistin. Sen aikaleimat syntyvät ruudunpäivityksen
  tahdissa ja hyväksytyn sävelen aikaleima on vähintään 240 ms iskun jälkeen.
- Riffikaiku arvioi sävelten järjestystä, ei ajoitusta.
- Koodissa ei käytetä AudioWorkletia eikä selaimen latenssitietoja.
- Etukäteen ajastettu toisto äänikelloon on jo olemassa (`ReferencePlayer.loop`).
- Rytmisisältöä on neljä generoitua sivua ja yksi 84 BPM:n äänite. Suoritus merkitään itse.
- Riffikaiun oikean kitaran hyväksyntäkokeet versioille 0.2–0.4 on merkitty tekemättömiksi.
- `AGENTS.md`-tiedostoa ei ole yhdessäkään haarassa.
- Synteettisen kokeen tulokset (taulukko asiakirjassa `koe/tulokset.md`).

**Lähteisiin perustuva arvio:**

- Selaimen latenssiluvut ja niiden tuki eri selaimissa.
- Viite samassa äänityksessä poistaa viiveen (REPP, naputukselle, kannettavilla ja kaiuttimilla).
- Tunnistusmenetelmien tarkkuudet kirjallisuudessa ja lyönnin suunnan vaikeus.
- Kirjastojen lisenssit.
- iPhonen ja Androidin äänikäyttäytyminen. Osa näistä on luettu vain hakutulosten tiivistelminä, ja ne
  on merkitty lähdeluetteloon.

**Testaamaton oletus:**

- Spektrivuo riittää oikealla kitaralla kahdeksasosiin tempoon noin 100 BPM asti.
- Viiveestä riippumattomat mittarit (määrä, kuvio, tasaisuus, tempo) ovat riittävän luotettavia
  oppijalle näytettäviksi.
- Kapeakaistainen klikki erottuu kitarasta taajuuden perusteella puhelimen kaiuttimella ja mikrofonilla.
- Olosuhteiden järjestys (akustinen paras, sähkökitara ilman vahvistinta heikoin).
- Kaikki pedagogiset väitteet siitä, mikä pilotissa auttaa oppijaa. Ne testataan koekäytöllä.

## Mitä ei kannata toteuttaa

1. **Iskukohtaista reaaliaikaista pisteytystä** mikrofonilla (vihreä ja punainen merkki joka iskulle).
2. **Millisekuntilukemia oppijalle** ("olit 38 ms myöhässä") millään syötteellä ilman viitettä samassa
   äänityksessä.
3. **Rytmin arviointia nykyisen `PitchLoop`-, `NoteGate`- tai `PluckDetector`-ketjun päälle.** Se on
   sävelentunnistin, ja sen omat oikean kitaran kokeet ovat kesken.
4. **Mikrofoniarviota rumpu- tai bänditaustan kanssa kaiuttimista.**
5. **Lyönnin suunnan, soinnun oikeellisuuden tai aksenttien tunnistusta** mikrofonista.
6. **Väitettä, että mikrofoni todisti oppijan soittaneen kitaraa** tai että puuttuva havainto tarkoittaa
   soittamatonta iskua.
7. **Napautusten pisteytystä klikkiin osumisen mukaan.** Sama viiveongelma koskee napautusta. Arvioidaan
   tasaisuutta ja pulssitasoa.
8. **Omaa opetettua mallia** tai valmiin mallin tuomista selaimeen.
9. **essentia.js:ää tai aubiota riippuvuudeksi** (AGPL ja GPL, repo on Unlicense).
10. **Bluetooth-laitteiden tukemista mikrofonitehtävissä.** Sivu tunnistaa ne mahdollisuuksien mukaan ja
    kertoo, miksi havaintoa ei anneta.
11. **Mikrofoniominaisuutta ennen mittauskoetta oikealla kitaralla.** Synteettinen testi ei ole näyttö.
12. **Pisteitä, tasoja tai lukkoja rytmipilottiin**, yleistä pelimoottoria tai uutta tallennusmallia.
13. **Laajaa kymmenen jakson rytmiosiota kerralla.** Yksi jakso, koekäyttö, sitten päätös.
14. **Kuudestoistaosien, shufflen ja synkoopin arviointia mikrofonilla** edes myöhemmin, ellei
    mittauskoe erikseen osoita sitä mahdolliseksi.

## Tämän selvityksen rajat

- **Yhtään mittausta oikealla kitaralla ei tehty.** En voi soittaa enkä kuunnella. Kaikki väitteet
  oikeasta soitosta ovat lähteisiin perustuvia tai oletuksia.
- Oma koe on synteettinen. Se osoittaa, mikä ei toimi ihanneoloissa, ei sitä, mikä toimii oikeasti.
- Selaintuen versiotiedot ovat peräisin web.dev-sivulta ja MDN:n Baseline-merkinnöistä. MDN:n
  yhteensopivuustaulukoita en saanut luettua.
- REPP-artikkelista luin esijulkaisun, en lehtiversiota. Kompin tunnistuksen artikkelista (ISMIR 2025)
  loppuosa oli käytössäni vain tiivistelmänä.
- Kaupallisten sovellusten toiminnasta minulla on vain tukisivujen ja arvostelujen tiivistelmiä.
- `AGENTS.md` puuttuu repositoriosta, joten noudatin issueiden #54, #49 ja #69 kirjattuja rajoja.
