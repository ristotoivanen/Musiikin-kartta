# Ensikeikka – peli-, käytettävyys- ja oppimiskokemuksen kokonaiskatselmus

**Päiväys:** 15.11.2026
**Haara:** `feature/ensikeikka-toinen-ilta` (pohja `codex/ensikeikka-yhtenainen-tehtava`, f1b1e1c)
**Katselmoitu:** keikka 1 (kappaleet 1–5) ja uusi keikka 2 (kappaleet 6–9), äänimoottori, eteneminen, käyttöliittymä

## Menetelmä ja rajaukset

- Lähdekoodin ja tehtävädatan läpikäynti kappale kerrallaan.
- Ääniesimerkkien tekninen analyysi Node-ympäristössä: sävelkorkeudet Goertzel-suodattimella, tasot,
  huiput, vaimeneminen, kerrosten keskinäiset suhteet ja puhelinkaiutinta jäljittelevä 300 Hz:n
  ylipäästö (12 dB/oktaavi).
- Selainläpikäynti Playwrightilla työpöytä- ja puhelinnäkymässä (390 px ja 320 px) sekä
  kuvakaappaukset jokaisesta tehtävätyypistä. Lisäksi koko polku tyhjästä tallenteesta toisen keikan loppuun.
- **Kuulonvaraista arviointia ei tehty.** Testit ajetaan mykistettyinä, eikä katselmoija voi kuunnella ääntä.
  Musiikillinen toimivuus on arvioitu teorian ja signaalianalyysin perusteella. Ennen hyväksymistä
  kappaleet pitää kuunnella puhelimen kaiuttimella ja kuulokkeilla.
- Käyttäjänäkökulmat ovat **simuloituja arvioita**, eivät ihmiskäyttäjien testejä.

## 1. Kappalekohtainen arvio

| # | Opittava asia | Arvio | Parannusehdotus |
| --- | --- | --- | --- |
| 1 Löydä kotiin (a-molli) | Kotisävel kuulostaa vakaalta | Hyvä aloitus. Väärät vaihtoehdot (B♭, E♭) ovat selvästi riitasointuisia, joten tehtävä on helppo. Melodia on 12 tasapitkää neljäsosaa ja kuulostaa mekaaniselta. Uudelleen pelattuna vastaus muistetaan ulkoa. | Vaihtoehtokohtainen palaute ja hyräilyvihje lisätty (B). Melodian rytmiä voisi elävöittää myöhemmin (C). |
| 2 Uusi kotisävel (G-duuri) | Koti vaihtuu sävellajin mukana | Toimii, mutta vaikeus on sama kuin kappaleessa 1 (molemmat väärät vaihtoehdot ovat kromaattisia). Uutta on vain sävellaji. | Sopii kertaukseksi. Palaute kertoo nyt, mitä kukin väärä sävel tekee. |
| 3 Melodia löytää perille (C-duuri) | Sävellajiin kuuluva sävel ei ole vielä koti | Ensimmäinen todellinen nousu vaikeudessa (D kuuluu sävellajiin). Selitys on hyvä. | – |
| 4 Mollin maisemat (e-molli) | Kotisävel mollissa | Molemmat väärät vaihtoehdot ovat diatonisia, mikä on hyvä haaste. | – |
| 5 Ensimmäinen finaali (D-duuri) | Sointusävel voi olla vakaa olematta koti | Hyvä silta toiseen keikkaan: A on kotisoinnun kvintti. | – |
| 6 Melodia jatkaa matkaa (F-duuri) | Koti, kun **kaikki** lopetukset ovat kotisoinnun säveliä | Selvä vaikeuden nousu: F, A ja C sopivat kaikki loppusointuun. Lähestymissävel G on askeleen päässä sekä F:stä että A:sta, joten "puoliaskel ylös" ‑oikotie ei enää toimi. Vastaus perustuu basson ja melodian samaan säveleen. Aloittelijalle vaativin kohta. | Toinen vihje ohjaa hyräilemään basson. Kuulonvarainen tarkistus, ettei A-lopetus kuulosta yhtä valmiilta kuin F. |
| 7 Basso kertoo suunnan (A-duuri) | Kuuntele bassoa, kun melodia ei muutu | Aidosti uusi tehtävä: melodian loppu on kaikissa sama (A), ja vain bändi vaihtuu (kotisointu / F♯m-yllätys / E-sus-odotus). Basson nouseva kulku E–F♯–G♯ tekee oikeasta lopusta perusteltavan. **Ennen korjausta basso ei kuulunut puhelimen kaiuttimesta** (katso A1). | Korjattu: kirkkaampi basso ja korostettu erilliskuuntelu. |
| 8 Kaksi mahdollista loppua (d-molli) | Piste ja kysymys ovat molemmat toimivia loppuja | Tunnistustehtävä ei leimaa avointa loppua vääräksi, vaan pyytää tunnistamaan pisteen ja kysymyksen. Kolmas lopetus (melodia terssissä) on vertailukohta. Tehtävä yhdistää kappaleiden 6 ja 7 taidot. | Myöhemmin voisi soittaa kysymyksen ja pisteen peräkkäin säkeistö–kertosäe-tyyliin (C). |
| 9 Illan viimeinen encore (E-duuri) | Yhdistä melodia ja basso | Kaksi vaihetta: melodian lopetus (E / G♯ / D♯) ja basson liike (vastaliike). Vaihe 2 vaatii basson erilliskuuntelun ennen tarkistusta, joten väitteitä ei voi ratkaista pelkästä tekstistä. Kaikki kolme väitettä kuvaavat toimivia bassoliikkeitä, joten oikea vastaus ei erotu sanamuodosta. | Toinen vihje viittaa kappaleeseen 7, mikä antaa paljon apua. Tämä on tarkoituksellista, koska vihje tulee vasta pyynnöstä. |

**Voiko vastauksen arvata?** Kaikissa tehtävissä on kolme vaihtoehtoa ja rajaton määrä yrityksiä,
joten kokeilemalla löytää vastauksen viimeistään kolmannella yrityksellä. Tarkistus vaatii, että
valittu lopetus on kuultu loppuun, ja kappaleessa 9 basso on kuunneltava erikseen. Käyttöliittymä
ei paljasta vastausta. Testi tarkistaa, ettei tehtävänanto, vihje tai väärän vastauksen palaute nimeä oikeaa säveltä.

## 2. Hauskuus ja kiinnostavuus

- **Vaihtelu:** keikka 1 on viisi kertaa sama tehtävä. Keikka 2 tuo kolme uutta mekaniikkaa
  (bändin vaihtuminen, tunnistus, perustelu) ja erilliskuuntelun, joten kokonaisuus ei ole enää
  yhdeksän kertaa sama tehtävä.
- **Oivaltaminen:** kappale 7 ("melodia ei muutu, mutta loppu muuttuu silti") on pelin vahvin
  oivallus. Kappaleen 8 ajatus, että avoin loppu on toimiva mutta eri tarkoitukseen, on myös hyvä.
- **Onnistumisen tunne:** valmiin kappaleen soitto palkitsee luontevasti ilman pisteitä.
- **Musiikillinen tekeminen:** peli on pelkkää kuuntelua ja klikkaamista. Hyräilyä ehdotetaan nyt
  vihjeissä. Myöhemmin pelaaja voisi laulaa tai soittaa lopetuksen itse (C3).
- **Syy palata:** uudelleen pelattaessa vastaukset muistaa ulkoa. Harjoittelutila sekoittamalla
  lopetusten järjestys lisäisi uudelleenpeluuarvoa (B6, päätös käyttäjälle).

## 3. Äänimaailma

| Havainto | Mittaus | Toimenpide |
| --- | --- | --- |
| Tasot vaihtoehtojen välillä | Ero alle 0,1 dB kaikissa kappaleissa | Testattu |
| Huippu ja leikkautuminen | Huippu 0,40–0,46 ennen 0,92:n päävahvistusta, joten varaa on runsaasti | Testattu |
| Napsahdukset | Kaikilla äänillä on vähintään 3 ms:n nousu ja 12–40 ms:n vaimeneminen, eikä yksikään ääni katkea puskurin reunaan. Viimeinen näyte on alle 0,0001. | Testattu, ei kuulonvaraista vahvistusta |
| Melodian erottuminen | Melodian energia on joka tahdissa 4–9 kertaa bändin energia | Testattu |
| **Basso puhelimessa** | Ennen korjausta basson osuus miksauksesta yli 250 Hz:n alueella oli 1,7–3,3 %. | **A1, korjattu** |
| Soundi | Additiivinen "näppäily" kuulostaa enemmän sähköpianolta kuin kitaralta, ja rummut ovat suodatettua kohinaa. | C1: Karplus–Strong-kitara ilman riippuvuuksia |
| Renderöinti | 100–215 ms Macilla kappaletta kohden. Puhelimessa arviolta 2–4 kertaa hitaampi. | C: valmiiksi renderöidyt puskurit muistiin |
| AudioContext | Jokainen kappalenäkymä loi ja sulki oman kontekstinsa | **B1, korjattu** |

## 4. Vaikeustaso

Aloitus on riittävän helppo (kromaattiset väärät vaihtoehdot). Vaikeus kasvaa hallitusti: kromaattinen →
sävellajin sävel → sointusävel (5) → vain sointusäveliä (6) → melodia vakio, bändi vaihtuu (7) →
kahden ominaisuuden tunnistus (8) → yhdistelmä ja perustelu (9). Vaikeutta ei ole lisätty
lisäämällä vaihtoehtoja tai nostamalla tempoa: keikan 2 tempot ovat 84–112 ja keikan 1 88–116.

Uudet käsitteet (basso, piste ja kysymys, vastaliike) selitetään tehtävän johdannossa ennen kuin niitä
käytetään. Sointujen nimiä ei tarvita ennen vastausta. Kokenut käyttäjä pääsee kokeilemaan keikkaa 2
vapaasti, mutta suoritus ei tallennu ennen keikkaa 1 (B5, päätös käyttäjälle).

## 5. Palaute

Ennen katselmointia keikan 1 väärä vastaus sai yhden kahdesta yleisestä tekstistä, ja vihjeitä oli
yksi taso. Nyt jokainen väärä vaihtoehto kertoo, mitä juuri se lopetus tekee (riitelee, jää
odottamaan, sopii sointuun mutta ei ole basson sävel), ja vihjeitä on kaksi tasoa. Katselmoinnissa
pehmennettiin muotoiluja, jotka paljastivat oikean sävelen suunnan liian aikaisin, esimerkiksi
"vain puoliaskelen päässä kodista" ja "jatkaa nousuaan".

## 6. Käyttöliittymä

- Paluulinkki on nyt jokaisen näkymän yläreunassa kuten Kitaraharjoittelijassa ("← Oppimispolut").
- Keikoilla ja kappaleilla on omat osoitteensa, joten selaimen Takaisin-painike toimii ja keikkaan 2
  voi palata suoraan (`#keikka-2`).
- Alkunäkymä näyttää molempien keikkojen etenemisen.
- Tunnistus- ja perustelunäkymässä "Tarkista valintani" oli kiinni vaihtoehdoissa (korjattu, B3).
- Kappalenäkymässä on puhelimella paljon painikkeita (kuuntelu, kolme loppua, kaksi tai kolme
  toistopainiketta, tarkistus ja vihje). Kaikki mahtuvat 320 px:n leveyteen ja ovat vähintään 44 px korkeita.

## 7. Tekninen rakenne

| Ennen | Nyt |
| --- | --- |
| Yksi keikka kovakoodattuna `main.tsx`:ssä | `catalog.ts`: alue, keikat, `requires`, `freePractice` |
| `hasCloserEndings = song !== 1 && song !== 2` | Tehtäväkohtaiset tekstit datassa, ei numeroehtoja |
| Yksi tehtävätyyppi | `choose`, `match`, `reason` ja monivaiheiset kappaleet |
| Tallenne yhden settilistan etuliitteenä | Etuliite keikkaa kohden. Versio 1 säilyy, ja tuntemattomat tunnisteet säilytetään. |
| AudioContext näkymää kohden | Yksi jaettu soitin |

Jäljellä: keikan 1 sovitukset ovat vanhassa muodossa (`song-demo-score.ts`, `approved-songs.ts`), ja
`catalog.ts` sovittaa ne. Vaiheen 0 prototyypin koodi (`score.ts` `renderBand`/`renderTake`,
`theory.ts`, `TakePlayer.play`) on käytössä vain testeissä (C4).

## 8. Käyttäjänäkökulmat (simuloitu arvio)

- **Aloittelija:** keikka 1 on pelattavissa ilman apua. Kappaleessa 6 aloittelija valitsee
  todennäköisesti ensin terssin (A), koska se kuulostaa kauniilta. Palaute ja toinen vihje ohjaavat
  vertaamaan bassoon, mikä on juuri opetettava asia. Kappaleiden 7–8 johdannot selittävät käsitteet
  arkikielellä.
- **Kitaransoittoa aloittanut:** selitykset nimeävät soinnut (E7 → Am, F♯m-yllätys, puolilopuke A-duuri)
  vasta vastauksen jälkeen. Tämä yhdistää kuullun ja soitetun. Otelautaan viittaavaa "soita tämä"
  -tehtävää ei vielä ole (C3).
- **Kokeneempi harrastaja:** keikka 1 on liian helppo, mutta keikkaa 2 voi kokeilla heti. Kappaleet
  7–9 ovat kiinnostavia lyhyinä harjoituksina. Vaikeampaa sisältöä (moniäänisyys, modaaliset loput)
  ei vielä ole.

## 9. Löydökset tärkeysjärjestyksessä

### A – Korjattava ennen hyväksymistestausta

| # | Ongelma | Vaikutus | Ratkaisu | Laajuus | Riski | Tila |
| --- | --- | --- | --- | --- | --- | --- |
| A1 | Basso ei kuulu puhelimen kaiuttimesta. Sen osuus 250 Hz:n yläpuolella oli 2–3 % miksauksesta, vaikka kappaleet 7 ja 9 perustuvat basson kuulemiseen. | Tehtävä 7 voi olla puhelimella mahdoton, ja kappaleen 9 vaihe 2 on arvailua. | Keikalle 2 kirkkaampi bassosoundi (+4 dB puhelinkaistalla). Erilliskuuntelu korostaa 2.–6. yläsäveltä, jolloin taso on 3–7 dB:n päässä koko bändistä. Keikan 1 ääni pysyy ennallaan. | Pieni | Soundi muuttuu. Varmistettava kuuntelemalla. | **Korjattu**, testi lisätty |
| A2 | 320 px:n leveydellä sivuston yhteinen ylävalikko levenee 327 px:iin. Syy on Oppimiskartta-haaran uusi "Oppimiskartta"-linkki, jolla ei ole lyhyttä muotoa (aiemmin "Teoria"). | Vaakavieritys pienimmillä puhelimilla kaikilla sivuilla. Testit `betapelien-navigointi` (320 px) ja `riffikaiku` (320 px) kaatuvat myös pohjahaarassa. | Lisää linkille `nav-short`-muoto tai salli valikon rivitys 350 px:n leveydessä. | Pieni, mutta jokaisella sivulla | Muutos koskee Oppimiskartta-haaran kaikkia sivuja | **Ei korjattu tässä haarassa**, kuuluu Oppimiskartan navigaatiotyöhön |
| A3 | `npm run lint` kaatuu kahteen tarpeettomaan `\#`-merkintään tiedostossa `tests/site.test.ts`, rivi 68 (pohjahaarasta). | Betan CI-työnkulku pysähtyy lint-vaiheeseen. | Poista kenoviivat. | Yksi rivi | Ei | **Ei korjattu tässä haarassa**, kuuluu samaan pohjahaaraan |
| A4 | Näppäimistötesti oli kuormituksessa epävakaa: fokus siirrettiin ennen kuin alkunäkymä otti sen. | Satunnainen CI-virhe | Testi odottaa nyt otsikon fokusta. | Testi | Ei | **Korjattu** |

### B – Selvästi hyödylliset parannukset

| # | Parannus | Vaikutus | Laajuus | Riski | Tila |
| --- | --- | --- | --- | --- | --- |
| B1 | Yksi jaettu AudioContext koko sivulle (aiemmin uusi jokaiselle kappaleelle) | Ei käynnistysviivettä kappaleiden välillä. iOS:n äänilupa säilyy. | Pieni | Ei | **Toteutettu** |
| B2 | Keikan 1 väärille vastauksille vaihtoehtokohtainen palaute ja toinen vihjetaso. Keikan 2 paljastavat muotoilut pehmennetty. | Opettaa kuuntelemaan, ei vain kokeilemaan | Pieni | Ei | **Toteutettu** |
| B3 | Tarkistuspainikkeelle väli vaihtoehdoista ja selkeämpi "ei vielä kuultu" ‑merkintä | Valinta ja tarkistus erottuvat | Pieni | Ei | **Toteutettu** |
| B4 | Alkunäkymän etenemisrivi keikoittain ("Keikka 2: avautuu keikan 1 jälkeen") | Pelaaja näkee heti, mitä on jäljellä | Pieni | Ei | **Toteutettu** |
| B5 | Kokeneelle käyttäjälle "Aloita suoraan keikasta 2" niin, että suoritukset tallentuvat ilman keikkaa 1 | Ei pakkoa pelata liian helppoja tehtäviä | Pieni (`requires`-säännön ohitus) | Tehtävänannossa keikka 2 avautuu normaalisti keikan 1 jälkeen. | **Hyväksytty ja toteutettu 15.11.2026** |
| B6 | Harjoittelutila sekoittaa lopetusten järjestyksen | Uudelleenpeluu vaatii kuuntelua eikä muistamista | Keskikokoinen: palautetekstit viittaavat kirjaimiin (esim. "Lopetus A on avoin"), joten ne pitää muuttaa malleiksi. | Tekstien virheet | **Hyväksytty ja toteutettu 15.11.2026** |

### C – Myöhemmät kehitysmahdollisuudet (ei aloitettu)

| # | Mahdollisuus | Laajuus |
| --- | --- | --- |
| C1 | Karplus–Strong-kitara ja luonnollisemmat rummut ilman uusia riippuvuuksia. Keikan 1 äänen muutos vaatii hyväksynnän. | Keskikokoinen |
| C2 | Kappale 8: kysymys ja piste peräkkäin (säkeistö–kertosäe), uusi esiintymisalue pidemmille muodoille | Keskikokoinen |
| C3 | Musiikillinen tekeminen: laula tai soita lopetus mikrofoniin Riffikaiun sävelentunnistuksella | Suuri |
| C4 | Keikan 1 sovitukset samaan muotoon kuin keikka 2. Vaiheen 0 prototyyppikoodin poisto. | Pieni |
| C5 | Uudet tehtävätyypit: sointujen vaihtohetken tunnistus ja basson kulun piirtäminen | Keskikokoinen |
| C6 | Valmiiksi renderöidyt äänipuskurit muistiin, jotta puhelimella ei ole viivettä | Pieni |

## 10. Arvio valmiudesta käyttäjän hyväksymistestaukseen

Peli on toiminnallisesti valmis hyväksymistestaukseen: yksikkötestit ja Ensikeikan selaintestit
menevät läpi, ja koko polku tyhjästä tallenteesta toisen keikan loppuun on testattu. Ennen
hyväksyntää tarvitaan:

1. **kuulonvarainen tarkistus** puhelimen kaiuttimella ja kuulokkeilla, erityisesti kappaleet 6
   (kuulostaako terssiloppu liian valmiilta?), 7 (kuuluuko basson kulku?) ja 8 (onko piste selvästi
   erotettavissa terssilopusta?)
2. A2- ja A3-korjaukset Oppimiskartta-haarassa
3. ~~päätökset B5:stä ja B6:sta~~ (toteutettu, katso luku 11).

## 11. Uudelleenkatselmointi B5:n ja B6:n jälkeen (15.11.2026)

**Toteutettu**

- **B5 Suora aloitus.** Lukitussa keikka 2 ‑kortissa on kaksi erillistä vaihtoehtoa omine selitteineen:
  "Aloita suoraan keikasta 2" (suoritukset tallentuvat, keikka 1 pysyy ennallaan) ja "Kokeile
  kappaleita" (vapaa harjoittelu, ei tallennu). Keikan 1 painike on edelleen ensisijainen. Kappalenäkymä
  kertoo, tallentuuko tulos ("Suoritus tallentuu keikan etenemiseen" tai "Vapaa harjoittelu: tulos ei
  tallennu…"). Tallenteen muoto on ennallaan, ja kappale 6 tallentuu tunnisteena 6.
- **B6 Sekoitettu harjoittelu.** Harjoittelukierros arpoo lopetusten järjestyksen tasajakaumasta.
  Tunnisteet, oikea vastaus ja palaute pysyvät lopetuksen mukana, ja tekstit viittaavat lopetuksiin
  paikkamerkeillä. Järjestys ei muutu saman kierroksen aikana, ei myöskään kappaleen 9 vaiheiden välillä.
  Tasajakauma on tarkoituksellinen: jos alkuperäinen järjestys suljettaisiin pois, oikea vastaus
  ei koskaan olisi alkuperäisellä paikallaan, ja sen voisi päätellä.

**Uudelleenkatselmoinnissa löydetyt ja korjatut virheet**

| Löydös | Vaikutus | Korjaus |
| --- | --- | --- |
| Harjoittelun tila ei ollut sidottu kappaleeseen. Selaimen Takaisin-painike saattoi näyttää kappaleen 9 vaiheen 2 tai edellisen kierroksen tuloksen toisessa kappaleessa. | Väärä näkymä ja väärä järjestys | Harjoittelukierros tallentaa kappaleensa, ja toinen kappale aloittaa uuden kierroksen. |
| Suoraan avattu `#harjoitus-N` aloitti kierroksen alkuperäisessä järjestyksessä. | Sekoituksen ohitus linkillä | Myös suoraan avattu kierros arpoo järjestyksen. |
| Selityksissä sävelnimet (esim. "A ja C kuulostavat vakailta") näyttivät lopetusten kirjaimilta, kun järjestys oli sekoitettu. | Harhaanjohtava selitys | Sävelnimet muotoon "sävel A". Testi estää monitulkintaiset muodot. |

**Tunnettu rajoitus:** betan nykyinen (vanha) Ensikeikka tallentaa vain kappaleet 1–5. Jos pelaaja
käyttää samassa selaimessa ja samassa osoitteessa ensin uutta ja sitten vanhaa versiota ja suorittaa
vanhassa kappaleen, vanha versio poistaa merkinnät 6–9. Esikatselu toimii eri osoitteessa, joten
tilanne voi syntyä vain, jos beta palautettaisiin vanhaan versioon yhdistämisen jälkeen.

**Hyväksymistestauksen jäljellä olevat esteet**

1. Kuulonvarainen hyväksyntä puhelimella ja kuulokkeilla puuttuu edelleen (kappaleet 6–8 ja basson kuuluvuus 7 ja 9).
2. A2 (ylävalikon ylivuoto 320 px:ssä) ja A3 (lint) ovat erillisiä Oppimiskartta-haaran tehtäviä.
