# Videon 16 ms:n raitaero ja sivun aiempi noin 10,7 ms:n mittaus (19.11.2026)

**Rajaus:** tämä vertailee lukuja ja mittaustapoja. Raitaeron juurisyytä ei päätellä. Raitaero kuuluu kahden raidan synkronointiin (issue #9, NO-GO), ei H4:ään. Koodia tai hyväksymiskriteerejä ei muutettu.

**Tulkinta pyynnöstä:** "sivun aiempi noin 10,7 ms:n mittaus" on tässä H4-sivun oma renderöity raitaero simulaattoriajossa (`test-results/h4-simulaattori`, kopio [`raportit/h4-simulaattori-2026-11-19/`](raportit/h4-simulaattori-2026-11-19/)). Ajossa ero oli lähes aina −10,67 ms. Sama 0 / ±10,7 / ±21,3 ms:n jäännösero on kirjattu aiemmin myös [`README.md`](README.md):hen ja [`LUOVUTUS.md`](LUOVUTUS.md):hen. Jos tarkoitettiin muuta mittausta, vertailu tehdään uudelleen sitä vasten.

## 1. Luvut samalla merkillä

Sivun merkki: **kitara − tausta**, positiivinen = kitara edellä. Videon A_kitara − A_tausta on positiivinen, kun kitara kuuluu myöhemmin, joten sivun merkillä videon arvo on sen vastaluku. Jakso = 512 näytettä 48 kHz:llä = 10,667 ms.

| Mittaus | Laite | Raitaero, sivun merkki | Jaksoina | Aineisto |
| --- | --- | --- | --- | --- |
| Video `IMG_0016` | fyysinen iPhone (kuvaajana iPad) | **−16,0 ms** (18/19 palaa välillä −16,00…−16,03) | −1,50 | yksi käynnistys, noin 19 s |
| Video `IMG_0325` (erillinen iPad-pilotti) | iPad (kuvaajana iPhone) | **−32,0 ms** (kaistat 600 Hz – 8 kHz; palat −30,6…−33,7) | −3,00 | yksi käynnistys, noin 14 s |
| Sivu, simulaattori, H4 | iPhone 16 Pro -simulaattori, iOS 27.2 | **−10,67 ms** 40/41 mittauksessa, +10,67 ms 1/41 | −1,00 / +1,00 | 2 sivun latausta (raportin 1 mittaukset sisältyvät raporttiin 2), synteettinen lähde, uusi moottori, muistilataus |
| Sivu, simulaattori, H4-säätöjen mediaanit | sama | −10,7 (13), +10,7 (1), **−16,0 (1)** | | 15 säätöä, 6 sivun latausta |

Luvut: `node tools/h4-video/sivuraitaero.mjs raportit/h4-simulaattori-2026-11-19/*.json --video 16.03 --video 32.34`. Videoarvot ovat `raportit/h4-video/<tallenne>/raitaero.txt`:ssä.

**Havainnot:**
1. **Suunta on sama.** Kaikissa kitara on taustaa jäljessä, paitsi yhdessä simulaattorin mittauksessa (+10,67).
2. **Suuruus ei ole sama.** iPhone-videon 16,0 ms on 1,50 jaksoa, ei kokonainen jakso. Se poikkeaa simulaattorin 10,67 ms:stä 5,3 ms, mikä on yli kymmenkertainen videon palojen hajontaan (0,03 ms) nähden. iPadin 32,0 ms on 3,00 jaksoa.
3. **Simulaattorin ainoa −16,0 ms ei ole sama ilmiö kuin videon −16,0 ms.**
   - Se on yhden H4-säädön mediaani neljästä mittauksesta (sivun latauksen `mwmofngzbysr` käynnistys).
   - Parillisen määrän mediaani on kahden keskimmäisen keskiarvo, joten −16,0 = (−10,67 − 21,33) / 2 on mahdollinen. Yksittäisiä mittauksia ei ole tallessa yhdessäkään raportissa, joten tätä ei voi todentaa.
   - Videon −16,0 ms on vakio 18 palassa 19:stä. Yhdessä palassa (14,5 s) taustaraidan korrelaatiohuippu oli kaksiselitteinen (huippu / toinen 0,22 / 0,22), ja pala antoi 6,5 ms.
4. **Simulaattorissa renderöity ero = mediakellojen ero** (|ero| ≤ 0,04 ms kaikissa 41 mittauksessa). Fyysisen iPhonen H4-ajosta ei ole sivun raporttia (H4-JSON toimittamatta), joten saman ajon sivumittausta ei voi verrata videoon.

## 2. Mittaavatko sivu ja video samaa suuretta?

- **Sivu:** WebKitin `MediaElementSource`en kytketty analysaattori (`mittaus.ts:27–35`). Renderöity kohta paikannetaan alkuperäisestä PCM:stä. Analysaattori on kytketty ennen `GainNode`a.
- **Ääni:** testisivun uusi moottori kytkee kummankin elementin reitille `MediaElementSource → GainNode → destination` (`songAudio.ts:356–368`). Tapin jälkeinen polku on molemmille raidoille yhteinen.
- **Video:** kaiuttimesta kuuluva ääni kameran mikrofonissa, kaistakohtainen ristikorrelaatio alkuperäistä sisältöä vasten.

**Lähdekoodin perusteella** saman ajon sisällä sivun renderöidyn raitaeron ja videon raitaeron pitäisi olla sama suure mittausvirhettä lukuun ottamatta, koska raitakohtainen ero syntyy ennen yhteistä ulostuloa. Tätä ei ole todennettu laitteella. Jos ne poikkeavat samassa ajossa, ero kertoo, että raitojen välille syntyy viivettä myös tapin ja kaiuttimen välillä, tai että jompikumpi mittaus on harhainen.

## 3. Mitä vertailusta ei voi päätellä

Luvut ovat eri ajoista, eri laitteilta ja eri latauksista, joten niiden ero voi johtua ainakin näistä tekijöistä. Mitään ei ole todennettu:
- **Ajo:** käynnistyksen jäännösero on aiemmissa mittauksissa vaihdellut ajosta toiseen (0 / ±1 / ±2 jaksoa).
- **Laite:** simulaattori ja fyysinen iPhone voivat käyttää eri puskurikokoja tai näytetaajuuksia.
- **Lataustapa ja lähde:** simulaattoriajossa muisti ja WAV. Videoajon asetuksia ei tunneta, koska sivun raporttia ei ole.
- **Mittaustapa:** sivun tappi ja kaiutin (luku 2).

Siksi 16,0 ms:n ja 10,7 ms:n välistä eroa ei selitetä eikä kumpaakaan pidetä toista oikeampana.

## 4. Seuraava tieto, joka ratkaisee vertailun

P1-tallenteessa ([`H4-P1-KALIBROINTIOHJE.md`](H4-P1-KALIBROINTIOHJE.md), luku 3, kohta 7) kopioidaan saman toiston sivun raportti. Siitä saadaan samasta käynnistyksestä:
- sivun renderöity raitaero ja mediakellojen ero, noin 6 mittausta 5 s:n välein
- videon kaistakohtainen raitaero (`raitaero.mjs`).

Vertailu: `sivuraitaero.mjs <P1-raportti> --video <kitara − tausta>`.
- Jos arvot ovat samat (±1 ms), sivu ja video mittaavat samaa ja raitaero on käynnistyskohtainen.
- Jos ne eroavat, ero kirjataan issueen #9 havaintona ilman juurisyytä.

## 5. Tulos P1-tallenteista (22.11.2026)

Saman ajon sivuraportti ja video antoivat saman raitaeron 0,02 ms:n tarkkuudella kahdessa ajossa: −16,0 ms (`IMG_0018`) ja +10,67 ms (`IMG_0019`), ks. [`H4-P1-TULOKSET-2026-11-22.md`](H4-P1-TULOKSET-2026-11-22.md) luku 4. Sivu mittaa siis kuuluvaa raitaeroa näissä ajoissa, ja ero vaihtelee käynnistyksittäin. Vaihtelun juurisyytä ei päätellä.
