# Riffikaiun äänikynnystestin Linux-CI-aikakatkaisu (issue #217)

Päiväys: 28.11.2026. Lähtö-beta `9600d05f13ee20ad2a63863e838cdb5b02f140e9`, testikorjauksen commit `4441b25ca5b399cd55e7be97a382b0a13581be9a`.

## Juurisyy

Testi `mitattu kynnys: soiva kieli pysyy havaittuna pidempään` ajaa neljä 6000 ms:n koetta. Jokaisessa kokeessa on 375 kehystä, ja jokainen kehys lukee 8192 näytettä, eli kaikkiaan 12 288 000 näytepyyntöä. Kehysväli on 768 näytettä, joten sama näyte kuuluu noin 11 ikkunaan, ja sama signaali ajetaan lisäksi kahdella äänikynnyksellä. Eri näytteitä on 590 848. Jokainen pyyntö laski näytteen alusta (`midiHz`, kaksi `exp`-kutsua, kuusi `sin`-kutsua).

Näytelaskenta vei noin 89 % testin ajasta (paikallinen profiili 1,30 s / 1,46 s; Linux-vertailussa synteesi 2,96 s ja Pitchy 0,31 s). Testillä oli siksi 5 s:n oletusaikarajaan vain pieni marginaali: sama testi kesti muuttamattomana 2,3–6,0 s runnerin suorittimen ja rinnakkaisen kuorman mukaan.

Poissuljettu tai ei näyttöä:

- **Toiminnallinen vika:** ei. Kaikki neljä mitta-arvoa ovat vakaita, ja testi läpäisee aina, kun se ehtii valmiiksi.
- **Testien välinen tilavuoto:** ei näyttöä. Testi on hidas myös yksin ajettuna (Linux 2,3–3,5 s).
- **Kellon tai ajastuksen vika:** ei. Kello on keinotekoinen; kesto on laskenta-aikaa.
- **Kuormitus:** pahentava tekijä, ei yksin syy. AMD EPYC 7763 -runnerilla koko sarjan rinnakkaisajo nosti keston 3,4 s:sta 5,3–6,0 s:iin.

## Korjaus

Vain `tests/riffikaiku-pipeline.test.ts`: apufunktio `sampledOnce` muistaa näytteet näytenumeron mukaan, ja saman signaalin kaksi kynnyskoetta jakavat muistin. Sitä käyttää vain tämä testi.

Ennallaan: `Microphone`/`PitchLoop`/Pitchy-polku, keinokello, `guitar` ja `fakeInput`, 6000 ms, 48 kHz, E2/E4, vaimenemiset, amplitudi, kynnykset, kolme väitettä, aikarajat, workerit ja rinnakkaisuus. Ei retryjä, ohituksia eikä sovelluskoodin muutoksia. Aikarajaa ei nostettu.

Muisti toimii vain näytteenottoruudukossa. Muu käyttö (esim. 44,1 kHz) kaataa testin virheeseen (mutaatio M6) eikä palauta väärää näytettä.

## Semanttinen vastaavuus (`vertailu.mjs`)

| Koe | `lastPitchMs` ennen | jälkeen |
|---|---|---|
| E2, kynnys 0,01 | 2256 | 2256 |
| E2, kynnys 0,003 | 4624 | 4624 |
| E4, kynnys 0,01 | 624 | 624 |
| E4, kynnys 0,003 | 1216 | 1216 |

Näytteet **eivät ole bitilleen identtiset**: 394 näytettä 12 288 000:sta erosi, suurin ero 1,2·10⁻¹⁰ (yksi Float32-pyöristysaskel). Syy on, että alkuperäinen laski saman näytteen ajan eri ikkunoissa hieman eri liukulukuna. Kaikissa 1500 analyysikehyksessä tila ja MIDI-sävel olivat samat, taajuus bitilleen sama ja RMS:n suurin suhteellinen ero 3·10⁻¹³. Sama tulos Macilla ja Linuxilla.

## Mutaatiot (`mutaatiot.mjs`)

| Mutaatio | Kaatui |
|---|---|
| M1 E2:n mitattu kynnys poistettu | `e2[1] > e2[0]` (2256 > 2256) |
| M2 E4:n mitattu kynnys poistettu | `e4[1] > e4[0]` (624 > 624) |
| M3 E2 vaimenee kuten E4 | `e2[0] > e4[0] * 2.5` |
| M4 E4 saa E2:n näytemuistin | `e2[0] > e4[0] * 2.5` |
| M5 `PitchLoop` ohittaa annetun kynnyksen | `e2[1] > e2[0]` (sama myös alkuperäisellä testillä) |
| M6 näytetaajuus ruudukon ulkopuolelle | ruudukkovahdin virhe |

Pelkän `quiet`-rivin muuttaminen (`rms < .01`) ei kaada testiä, koska hiljaisuuden varhainen paluu vaatii myös koko ikkunan RMS:n kynnyksen alle. M5 muuttaa siksi koko `minRms`-asetuksen.

## Linux-mittaukset

[Ajo 46148908019](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46148908019): `ubuntu-24.04`, kuva 20261122.23.1, Node 22.23.5, Vitest 5.1.0, `availableParallelism` 4, oletusrinnakkaisuus, aikaraja 5000 ms, ei retryjä. Kummallekin versiolle kolme erillistä runneria; kullakin 10 erillistä toistoa, 2 tiedostoajoa ja 2 koko sarjaa. Kaikkien yritysten kestot ovat `measure`-töiden lokeissa.

Suorittimet: perustaso runnerit 1 ja 3 Intel Xeon 6975P-C, runner 2 AMD EPYC 7763; korjaus runner 1 AMD EPYC 7763, runnerit 2 ja 3 Intel Xeon 6975P-C.

Kohdetestin kesto millisekunteina:

| Ajotapa | Versio | n | virheitä | min | mediaani | p95 | max |
|---|---|---|---|---|---|---|---|
| Erillinen testi | perustaso | 30 | 0 | 2297 | 2330 | 3469 | 3508 |
| Erillinen testi | korjaus | 30 | 0 | 558 | 568 | 712 | 717 |
| Pipeline-tiedosto (44 testiä) | perustaso | 6 | 0 | 3274 | 3359 | 4891 | 4891 |
| Pipeline-tiedosto (44 testiä) | korjaus | 6 | 0 | 630 | 632 | 807 | 807 |
| Koko sarja (836 testiä) | perustaso | 6 | **2** | 3274 | 3402 | 5997 | 5997 |
| Koko sarja (836 testiä) | korjaus | 6 | 0 | 628 | 875 | 1186 | 1186 |

Perustason virheet: AMD-runnerin molemmat koko sarjan ajot, `Test timed out in 5000ms` (5997 ja 5263 ms, 835/836). Korjauksen huonoin arvo 1186 ms jättää 5 s:n rajaan 76 % marginaalin.

Aiemmat lokit: [beta yritys 1](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46145609013/attempts/1) 5168 ms virhe, [yritys 2](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46145609013/attempts/2) 3285 ms, #178:n ajot 3653 ms ja [5801 ms virhe](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46147259422/job/140985942151).

## Hyväksyntäportit

Testattu koodi on commit `4441b25` (testitiedosto ja skriptit). Myöhemmät commitit tässä haarassa lisäävät vain tämän raportin. Kaikki ajot `ubuntu-24.04`, `--retries=0`.

### Ensimmäinen kierros ([46148908019](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46148908019))

| Portti | Tulos |
|---|---|
| `npm run check` | läpi: 836/836 ja buildit |
| `rakenna.py --tarkista`, `rakenna-osiot.py --tarkista`, linkkitarkistus | läpi |
| #117: staattiset, yksikkötestit, selain (desktop ja phone), PDF-lähde | läpi, selain 12/12 |
| #151: staattiset ja uusi PDF | läpi, 836/836; PDF 71 sivua |
| Vastaavuusvertailu ja mutaatiot | läpi, 6/6 mutaatiota kaatui odotetusti |
| Koko Chromium desktop + phone, 3 workeria | **1 virhe**: 1361 läpi, 50 ohitettu |
| WebKit desktop + iPhone-emulaatio: `riffikaiku.spec.ts`, `practice.spec.ts` | **1 virhe**: 117 läpi, 8 ohitettu |

#117:n ja #151:n omat workflow't eivät käynnisty tämän PR:n polkusuodattimilla, joten niiden vaiheet ajettiin QA-workflow'ssa.

### Virheiden kohdistus

Sovelluskoodi ja e2e-testit ovat perustasossa ja korjauksessa identtiset, eikä Playwright lataa muutettua yksikkötestiä. Virheet ajettiin silti uudelleen kummallakin versiolla.

Koko Chromium-regressio toisen kerran ([46150567307](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46150567307)): perustaso 1362 läpi, 0 virhettä; korjaus 1360 läpi, **2 virhettä**.

| e2e-testi | perustaso | korjaus | Ajo |
|---|---|---|---|
| `otelauta-ydinopinnot.spec.ts:540` (phone, 60 toistoa) | 6/60 virhettä | 6/60 virhettä | [46150567307](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46150567307) |
| `practice.spec.ts:209` (WebKit, 40 toistoa) | 8/40 virhettä | 4/40 virhettä | [46150567307](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46150567307) |
| `otelautaopas-beta.spec.ts:282` (desktop, 15 toistoa) | 15/15 aikakatkaisua, noin 35 s | 0/15, noin 24 s | [46152498580](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46152498580) |

Kaikki kolme esiintyvät siis muuttamattomassa betassa:

- `otelauta-ydinopinnot:540`: vieritysasema muuttuu 15–31 px, kun testi odottaa sen pysyvän.
- `practice:209`: WebKitissä `dblclick` kohdistuu joskus painikkeeseen, joka on jo poistettu käytöstä, ja testi odottaa 30 s.
- `otelautaopas-beta:282`: testi kestää noin 24 s tai noin 35 s runnerin mukaan, aikaraja 30 s. Runnerin suoritinta ei kirjattu, joten nopeusero on päätelmä kestoista.

Näiden juurisyitä ei tutkittu eikä niitä korjattu (rajauksen ulkopuolella). **Koko Chromium-regressio ei ollut lopullisella ehdokkaalla kertaakaan täysin vihreä** (ajot: 1 virhe ja 2 virhettä).

## Arvio

**Testikorjaus: GO.** Yksikkötestien hyväksyntäportit täyttyvät (30/30 erillistä, 6/6 tiedostoajoa, 6/6 koko sarjaa), vertailut säilyvät ja aikarajamarginaali on 76 %.

**Yhdistäminen betaan: ehdollinen GO.** Ehto: omistaja hyväksyy, että e2e-regression kolme virhettä ovat tästä muutoksesta riippumattomia perustason virheitä.

**#178:** korjaus yhdistyy sen HEADiin `34fa0b7` ilman konflikteja (`git merge-tree`, ei kirjoitettu). #178 saa korjauksen vasta, kun beta tuodaan siihen; sitä ei muutettu. #178:n 913 testin sarjaa ei ajettu korjauksen kanssa. #178:n e2e-regressioon samat kolme virhettä voivat osua.

## Havainnot, joita ei korjattu

- `npm run check` muuttaa tiedostoa `pelit/ensikeikka/index.html` ja luo uuden `pelit/ensikeikka/assets/index-*.js`-tiedoston. Tunnettu sivuvaikutus; ei mukana tässä PR:ssä.
- Samassa pipeline-tiedostossa muut testit käyttävät samaa päällekkäistä näytelaskentaa. Suurin koko sarjassa mitattu oli 2,5 s (`kuusi vapaata kieltä`, AMD), eli aikarajaan on noin 50 % marginaali. Niitä ei muutettu. `sampledOnce` ei sellaisenaan sovi 44,1 kHz:n tapauksiin.
- Koko pipeline-tiedosto kestää Linuxissa yhä 26–51 s.

## Katselmointirunko (§9)

Muutos koskee vain yhtä yksikkötestiä ja QA-aineistoa. UX, A11Y, AUDIO, MIC, DEVICE, PED ja käyttäjäkoe: **ei sovellu** (sovelluskoodi, sisältö ja ääni eivät muutu). Synteettinen signaali ei ole näyttöä oikean kitaran tai mikrofonin toiminnasta. Fyysisiä laite-, kuuntelu- tai kitarakokeita ei tehty.

## Toistaminen

Repositorion juuressa, Node 22, `npm ci`:

```bash
node docs/qa/riffikaiku-ci-timeout-2026-11-28/vertailu.mjs
```

```bash
node docs/qa/riffikaiku-ci-timeout-2026-11-28/mutaatiot.mjs
```

```bash
node docs/qa/riffikaiku-ci-timeout-2026-11-28/mittaa.mjs paikallinen 30 5 3
```

CI-workflow on vain tutkimushaarassa `qa/217-riffikaiku-timeout-linux` (lukuoikeus). Sitä ei yhdistetä.
