# H4-säätökokeen katselmointi: ääni–välähdysparin tunnistettavuus (19.11.2026)

**Tila:** H4:n jatko- ja kelausmittaukset on keskeytetty omistajan päätöksellä. Koodia ja hyväksymiskriteerejä ei ole muutettu. PR #126 on Draft-tilassa ja issue #9 NO-GO-tilassa.

**Lähtökohta:** testaaja havaitsi fyysisellä iPhonella mahdollisen mittausvirheen. Säännöllisesti toistuvat välähdykset voivat kohdistua eri piippauksiin, jolloin näennäisesti oikea kohdistus syntyy väärälle ääni–välähdysparille.

## 1. Ensimmäiset viisi havaintoa (raakadata, tulkinta epävarma)

| # | Tilanne | d (ms) |
| --- | --- | --- |
| 1 | käynnistys | −150 |
| 2 | käynnistys | +50 |
| 3 | käynnistys | −180 |
| 4 | käynnistys | +60 |
| 5 | käynnistys | +50 |

- **Lähde:** omistajan ilmoittamat arvot. Testisivun JSON-raporttia (`nayttoaani.trials`) ei ole vielä toimitettu.
- **Päivitys 19.11.2026:** omistajan tarkistuksen mukaan kolmella viidestä on `sameOperation=true` (saman toistojakson toistosäätö). Riippumattomia käynnistysoperaatioita on vain **kaksi**. Alla olevat tilastot on laskettu ikään kuin havaintoja olisi viisi riippumatonta, joten niitä **ei pidä käyttää**. Ne on säilytetty vain kirjauksen jäljitettävyyden vuoksi. Ks. `H4-VIDEOMITTAUS-SUUNNITELMA.md` luku 0.
- **Puuttuvat tiedot:** `sameOperation`-merkinnät, `pageLoadId`, `flashes`, `adjustMs`, `sliderStartMs`, `confidence`, M − R ja käännöksen tunniste. Niitä ei voi tarkistaa ennen raporttia.
- **Tallennus:** raportti tallennetaan muuttamattomana nimellä `raportit/iphone-h4-2026-11-19.json`, kun se toimitetaan.
- **Tilastot (virheellinen oletus viidestä riippumattomasta havainnosta, ei käytetä):** keskiarvo −34 ms, SD 120 ms, 95 %:n luottamusväli ±149 ms, mediaani +50 ms.
- **Jakauma on kaksihuippuinen:** {−180, −150} ja {+50, +50, +60}. Ryhmien ero on noin 220 ms.
- **Tulkinta epävarma.** Arvoja ei käytetä H4:n tuloksena eikä vertailukohtana jatkolle ja kelaukselle (luvut 3 ja 4).

## 2. Nykyinen toteutus

| Osa | Toteutus (`synteettinen.ts`, `nayttoaani.ts`, `NayttoAaniKoe.tsx`) |
| --- | --- |
| Ääni | 240 s:n synteettinen raita, 441 merkkiääntä (30 ms, 300 Hz ja 1,5 kHz). Ensimmäinen 0,25 s:n kohdalla, sitten näennäissatunnaisin välein **351–750 ms** (mediaani 537 ms). Välijärjestys on sama joka kerta (kiinteä siemen). |
| Välähdys | 60 ms:n valkoinen ruutu, kun mediaelementin `currentTime` ylittää kohdan *merkkiääni + d* (`requestAnimationFrame`, `flashesBetween`). Jokainen merkkiääni tuottaa oman välähdyksensä. Ohjelmallisesti pari on siis yksiselitteinen. |
| Säädin | d ∈ [−600, +600] ms, 10 ms:n askel. Aloitusarvo arvotaan väliltä ±300 ms. Hienosäätö ±10 / ±50. |
| Tallennus | Sallittu, kun jaksossa on näkynyt **3 välähdystä** (`MIN_FLASHES`). |
| `sameOperation` | Tosi, jos samalla sivulatauksella ja samalla toistopyynnöllä (`request`) on jo tallennus. Tällaiset toistosäädöt jäävät pois tilastoista ja protokollan laskureista, mutta ne säilyvät raakadatassa. Ruudun listassa ne näkyvät merkinnällä *sama jakso*. |
| Tulkinta | d ≈ (M − O) − näytön viive. Tulos on d:n **muutos** käynnistyksestä jatkoon ja kelaukseen, ja 80 ms on alustava suunnittelutavoite. |

## 3. Voiko syntyä väärä pari? (juurisyyt)

Merkitään T = kohta, jossa d:n pitäisi olla, jotta välähdys ja *oma* piippaus näkyvät ja kuuluvat yhtä aikaa. Väärällä säädöllä välähdys i osuu kohtaan *piippaus i + (d − T)*. Alla on laskettu laitteen todellisesta 441 piippauksen aikataulusta (`beepStarts`, 24 kHz, 240 s), kuinka usein välähdys osuu jonkin **toisen** piippauksen kohdalle:

| d − T (ms) | ±50 ms:n sisällä väärästä piippauksesta | ±100 ms:n sisällä | 3 peräkkäistä välähdystä kaikki väärän parin kohdalla (±100 ms) | 5 peräkkäistä | 8 peräkkäistä |
| --- | --- | --- | --- | --- | --- |
| −300 … +300 | 0 % | 0–12 % | ≤ 2 % | 0 % | 0 % |
| ±350 | 12 % | 24 % | 2 % | 0 % | 0 % |
| ±400 | 24 % | 38 % | 5 % | 0 % | 0 % |
| ±450 … ±550 | 26–30 % | 53–54 % | 13–15 % | 2–3 % | 0 % |
| ±600 | 24 % | 50 % | 11 % | 1 % | 0 % |

### Juurisyyt (riskit)

1. **Säätöalue on lyhintä piippausväliä laajempi.** d voi olla ±600 ms, mutta piippausten väli on vähintään 351 ms. Kun säätö on vähintään noin 350 ms väärässä kohdassa, 12–54 % välähdyksistä osuu sattumalta naapuripiippauksen kohdalle. Epäsäännöllinen väli estää *jatkuvan* väärän parin (8 peräkkäisellä välähdyksellä osuus on 0 %), mutta osittainen täsmäys on mahdollinen.
2. **Tallennus sallitaan liian lyhyen havaintojakson jälkeen.** Kolmella välähdyksellä väärä pari näyttää täydeltä osumalta jopa 15 %:ssa jaksoista (±100 ms:n ikkuna). Simulaattoriajossa (käyttöliittymädataa) 9 säätöä 15:stä tallennettiin 5–9 välähdyksen jälkeen.
3. **Juuri tutkittava ilmiö on piippausvälin suuruinen.**
   - Simulaattorissa M − R siirtyi jatkon ja kelauksen jälkeen noin −500 ms:lla, ja H2:n laitteella M − R oli noin 425 ms.
   - Jos kuultava ero muuttuu operaation jälkeen saman verran, oikea d on noin 400–550 ms päässä käynnistyksen d:stä. Se on se alue, jossa väärä pari on todennäköisin.
   - Menetelmä on heikoimmillaan juuri siinä tilanteessa, joka H4:llä pitäisi tunnistaa.
4. **Ohje ohjaa monitulkintaiselle alueelle.** H4-OHJE käskee kokeilemaan ensin ääripäitä. Arvot ±600 ms ovat väärän parin alueella, jos T on lähellä nollaa. "Hae kohta niiden välistä" olettaa, että samanaikaisuuden tuntu muuttuu säädön mukana yhteen suuntaan, mikä ei päde, kun väärät parit ovat mahdollisia.
5. **Mikään ei kerro, mikä välähdys kuuluu mihinkin piippaukseen.** Kaikki piippaukset ja välähdykset ovat samanlaisia. Pari on yksiselitteinen ohjelmassa mutta ei havaitsijalle.

### Mitä viidestä havainnosta voi ja ei voi päätellä

- **Väärä pari ei selitä huippujen eroa.** Ryhmien {−165} ja {+53} ero on noin 220 ms. Naapuripiippaukseen kohdistuminen vaatisi vähintään noin 350 ms:n siirron.
  - Ero sopii paremmin havaintoikkunan leveyteen ja säädön lopetuskohdan vaihteluun: ihmisen ääni–kuva-samanaikaisuuden ikkuna on tyypillisesti useita kymmeniä tai jopa yli sata millisekuntia leveä.
  - Tämä on päättely, ei todennettu.
- **Kumpikin ryhmä voi silti olla väärä pari**, jos laitteen todellinen T on noin ±400–700 ms. Koska T:tä ei tunneta laitteella, tätä ei voi sulkea pois.
  - Trialien M − R -arvot (`mediaMinusRendered`) ja välähdysmäärät raportissa auttavat arvioimaan tätä.
- **Hajonta on mittaustarkkuuteen nähden liian suuri.** Viidellä havainnolla 95 %:n luottamusväli on ±149 ms. ±80 ms:n suunnittelutavoitteeseen nähden tulosta ei voisi luokitella, vaikka pari olisi oikea.

## 4. Onko toistuva piippaus–välähdys-vertailu riittävän luotettava?

**Ei päätöksentekoon.** Perusteet:
- **Pari ei ole yksiselitteinen**, jos ääni–kuva-ero on lähellä piippausväliä (luku 3).
- **Säätömenetelmä mittaa havaitsijan samanaikaisuusikkunaa**, ei pelkkää järjestelmän viivettä. Ikkunan leveys (kymmeniä tai satoja millisekunteja) on samaa suuruusluokkaa kuin ±80 ms:n tavoite. Viidellä toistolla epävarmuus on noin ±150 ms.
- **Henkilökohtainen harha** (havaitsijan oma samanaikaisuuspiste) kumoutuu vertailussa käynnistykseen vain, jos se pysyy samana. Väsymys ja oppiminen muuttavat sitä.
- **Ajoitusvirheet ovat pieniä:** `currentTime` jäi päivittymättä 1–19 %:ssa piirtokerroista, ja piirtoväli oli 17 ms. Välähdyksen ajoitusvirhe on noin yhden piirtovälin luokkaa, joten toteutuksen ajoitus ei ole pääongelma.

Menetelmä voi kertoa **karkeasti**, siirtyykö ääni–kuva-suhde operaation jälkeen satoja millisekunteja. Sekin edellyttää, että väärä pari on suljettu pois.

## 5. Vaihtoehtoiset mittaukset

| | Menetelmä | Tunnistettavuus | Tarkkuus | Työ ja tarvikkeet | Arvio |
| --- | --- | --- | --- | --- | --- |
| **A** | **Riippumaton mittaus valolla ja äänellä.** Valokenno tai aurinkokenno ruudun valkoista aluetta vasten ja mikrofoni iPhonen kaiuttimen edessä, kumpikin omaan tuloonsa samassa äänikortissa (esim. Scarlett Solo: mikrofonitulo ja Hi-Z-soitintulo). Molemmat tallennetaan samalla kellolla, 48 kHz. Sivu soittaa epäsäännöllisen harvan sarjan (välit 1,5–3 s). Ero lasketaan jokaiselle parille ja ristikorrelaatiolla koko sarjalle. | Yksiselitteinen ristikorrelaatiolla, kun ero on alle noin ±1 s. Ei havaitsijaa. | Noin ±1–2 ms tapahtumaa kohden. Kymmeniä tapahtumia tilannetta kohden minuutissa. | Valokenno (noin 5–20 €) ja johto. Sivulle tarvitaan harva sarja (pieni muutos). Analyysityökalu WAV-tiedostolle. Vaatii omistajan hyväksynnän hankinnalle ja koodimuutokselle. | **Suositus ensisijaiseksi.** Ainoa vaihtoehto, joka ratkaisee ±80 ms:n kysymyksen luotettavasti ja erottaa näytön ja äänen viiveen. |
| **B** | **Hidastusvideo.** Toinen puhelin kuvaa ruutua ja kaiutinta 240 fps:llä. Kameran oma ääni–kuva-ero kalibroidaan näkyvällä ja kuuluvalla iskulla (esim. kynä pöytään kuvassa). | Yksiselitteinen harvalla sarjalla | Noin ±4 ms kuvaa kohden, lisäksi kalibroinnin epävarmuus (noin ±10 ms) | Toinen puhelin. Analyysi käsin tai skriptillä. | Hyvä varavaihtoehto, jos valokennoa ei hankita. |
| **C** | **Yksittäiset tapahtumaparit ja pakotettu valinta.** Yksi piippaus ja yksi välähdys kerrallaan, väli 2–4 s, ennalta asetettu ero (esim. −400 … +400 ms, 100 ms:n välein, satunnainen järjestys, 6–8 toistoa). Vastaus: *ääni ensin / välähdys ensin* (järjestysarvio) tai *samaan aikaan / ei*. Tuloksesta sovitetaan psykometrinen käyrä. | Yksiselitteinen, koska kumpaakin ärsykettä on vain yksi. | Samanaikaisuuspiste noin ±20–40 ms (havaitsijasta riippuen), luottamusväli sovituksesta | Noin 50 arviota tilannetta kohden, 5–8 min. Uusi koetila sivulle. | Havaintopohjainen tarkistus, jos A ja B eivät ole mahdollisia. Mittaa havaitsijan ja järjestelmän yhteistuloksen. |
| **D** | **Nykyisen säätökokeen korjaus.** Harva epäsäännöllinen sarja (välit vähintään 1,5 s, jolloin ±600 ms ei koskaan osu naapuriin) ja yksilöivä koodaus: joka neljäs piippaus korkeampi ja sen välähdys värillinen. Tallennus vasta noin 8 välähdyksen jälkeen. Ääripääohje poistetaan. | Yksiselitteinen säätöalueella | Rajoittuu edelleen havaitsijan ikkunaan (noin ±100 ms yksittäin) | Pieni koodimuutos | Riittää havaitsemaan karkean, noin 0,5 s:n siirron, mutta ei ±80 ms:n arviointiin. |

Vaihtoehto E, iPhonen oma mikrofoni samalla sivulla, ei ole suositeltava: mikrofonin avaaminen muuttaa iOS:n äänisession ja reitityksen, jolloin mitattava viive muuttuu.

## 6. Suositus

1. **Viisi ensimmäistä havaintoa** säilytetään raakadatana, ja niiden tulkinta merkitään epävarmaksi. JSON-raportti tallennetaan, kun se toimitetaan, ja sen `sameOperation`-, `flashes`- ja M − R -kentät tarkistetaan.
2. **Nykyistä säätökoetta ei jatketa** jatko- ja kelausmittauksiin ennen kuin pari on yksiselitteinen.
3. **Ensisijaiseksi mittaukseksi A:** riippumaton valo- ja äänimittaus samalla äänikortilla. Se vastaa suoraan kysymykseen, onko kuultava ääni ja näyttö tahdissa käynnistyksen, jatkon ja kelauksen jälkeen. Tulos ei riipu havaitsijasta.
4. **Jos A ei ole mahdollinen:** B (hidastusvideo kalibroinnilla) tai C (yksittäiset parit ja järjestysarvio). D on halvin, mutta se kertoo vain karkeista siirroista.
5. **Päätettävää omistajalle:**
   - valokennon hankinta, tai vaihtoehtoisesti toisen puhelimen käyttö videoon
   - harvan tapahtumasarjan koetilan toteutus testisivulle
   - säilytetäänkö ±80 ms:n alustava suunnittelutavoite A:n tuloksille sellaisenaan.

## 7. Mittausohjeen vaatimukset (H4-OHJE) ja tämä ajo

| Vaatimus | Tila |
| --- | --- |
| Bluetooth pois, iPhonen kaiutin, ulostulo *iPhonen kaiutin* | Ei tiedossa ilman raporttia (`output`). |
| Virransäästötila kirjattu | Ei tiedossa. |
| Käynnistys: sivu ladataan uudelleen ennen jokaista | Ei toteutunut: omistajan tarkistuksen mukaan 3/5 on `sameOperation=true`, joten uusia käynnistyksiä oli kaksi. |
| Protokollan järjestys vuorottelee (käynnistys → jatko → kelaus) | Viisi käynnistystä peräkkäin poikkeaa järjestyksestä, jos ne tehtiin ennen ensimmäistä jatkoa. Sivu kirjaa tallennuksen todellisena tilanteena, joten tämä ei vääristä luokittelua, mutta väsymys ja oppiminen painottuvat. |
| Säätö enintään noin 30 s, varmuus valittu | Näkyy raportista (`adjustMs`, `confidence`). |
| Ääripäiden kokeilu ensin | Ohje itse altistaa väärälle parille (luku 3, kohta 4). |
| ≥ 5 operaatiota tilannetta kohden | Käynnistys 5. Jatko ja kelaus keskeytetty. |

H4-OHJE.md:hen on lisätty keskeytysmerkintä. Muuten ohje ja kriteerit ovat ennallaan.
