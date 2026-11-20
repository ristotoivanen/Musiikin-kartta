# Kitaran äänipankkikoe · #132

Avaa koe-esikatselun `/testit/soitinpankki/` tai tarjoile tämä hakemisto paikallisesti.

```sh
python3 -m http.server 8132 --bind 127.0.0.1 --directory testit/soitinpankki
```

Paikallinen osoite on `http://127.0.0.1:8132/`. Koe on staattinen ja tarvitsee HTTP-palvelimen, jotta selain voi hakea moduulit ja äänitiedostot. Tee A/B/C-vertailu samalla äänenvoimakkuudella. Käynnistä jokainen esimerkki erikseen ja vaihda pankkia seuraavaa toistoa varten.

## Näytteet ja lisenssit

| Pankki | Julkaisija ja versio | Alkuperäinen otos | Lisenssi |
| --- | --- | --- | --- |
| A · Meta Steel Guitar | Meta Creative Audio · [v1.0.0](https://github.com/facebookincubator/Meta-open-sound/releases/tag/meta-steel-guitar-v1.0.0) | WAV, `Vel02`, otto 01 | [CC0 1.0](https://raw.githubusercontent.com/facebookincubator/Meta-open-sound/514c926efecdb3c7812bf00eedf8e5c8d61dd681/systems/instruments/meta-steel-guitar/LICENSE) |
| B · Meta Nylon Guitar | Meta Creative Audio · [v1.0.0](https://github.com/facebookincubator/Meta-open-sound/releases/tag/meta-nylon-guitar-v1.0.0) | WAV, `Vel02Pick`, otto 01 | [CC0 1.0](https://raw.githubusercontent.com/facebookincubator/Meta-open-sound/514c926efecdb3c7812bf00eedf8e5c8d61dd681/systems/instruments/meta-nylon-guitar/LICENSE) |
| C · FreePats FSBS Clean Electric Guitar | FreePats · [2026-08-07, `192cf0d`](https://github.com/freepats/electric-guitar-FSBS-clean/tree/192cf0d9bf2c4ba6ead8e3524ba3f78818e4fe91) | FLAC, tallamikrofoni, otto 01 | [CC0 1.0](https://raw.githubusercontent.com/freepats/electric-guitar-FSBS-clean/192cf0d9bf2c4ba6ead8e3524ba3f78818e4fe91/LICENSE.txt) |

| Kieli | Kokeessa soivat sävelet | FreePatsin poikkeavat lähdesävelet |
| --- | --- | --- |
| 6 (matala E) | E2, G2 | G2 soitettuna F2-näytteestä, +2 puolisävelaskelta |
| 5 (A) | A2, B2 | B2 soitettuna C3-näytteestä, −1 puolisävelaskel |
| 4 (D) | D3 | |
| 3 (G) | G3 | |
| 2 (B) | B3 | |
| 1 (korkea E) | G4 | |

[Manifestin](manifest.json) 24 näyteriviä perivät pankin julkaisijan, version, lähteen ja CC0-lisenssin. Jokaisella rivillä on alkuperäisen tiedoston tarkka ZIP-jäsenpolku tai FLAC-osoite, lähdetiedoston SHA-256, mahdollinen sävelsiirto ja kummankin toimitusmuodon koko, mitattu iskun alkukohta ja SHA-256. Molempien Meta-pankkien WAV:t tarkistettiin julkaisupaketin `SHA256SUMS`-tiedostosta. Steelin kuusi G-otteen WAV-tarkistetta täsmäävät myös PR #133:n selvitykseen. FreePatsin E2-tarkiste täsmää PR #130:n dokumentointiin. Metan WAV-arkistoista haettiin HTTP Range -pyynnöillä käytetyt tiedostot ja tarkisteluettelo. [PR #133:n näytelähteet](https://github.com/ristotoivanen/Musiikin-kartta/blob/4449932604e3614941c82d1fc42e7d60efc04827/assets/audio/soinnut/LAHTEET.md) · [PR #130](https://github.com/ristotoivanen/Musiikin-kartta/pull/130)

OGG/Vorbis ja AAC-LC/M4A koodattiin kumpikin suoraan samoista häviöttömistä WAV- tai FLAC-lähteistä. FFmpeg 9.0 summasi stereon monoksi, rajasi keston enintään viiteen sekuntiin ja käytti 0,4 sekunnin loppuhäivytystä kohdasta 4,6 s. Tiedostojen alut säilytettiin. Manifestissa ovat tarkat FFmpeg-valitsimet. Selain ajoittaa tiedoston alusta hieman ennen nuotin iskuhetkeä, sen mukaan missä toistuvan signaalin alku mitattiin kyseisen koodekin puretusta äänestä (0–32 ms). Pankkien voimakkuutta tasattiin yhdellä kertoimella per pankki 240 ms:n iskuikkunoiden perusteella. Yksittäisten nuottien voimakkuuserot ja lähdevire säilyvät. FreePatsin kahden sävelsiirron toteuttaa Web Audion `playbackRate`, joka muuttaa myös näytteen jälkisoinnin kestoa.

Karkea OGG-aineiston viremittaus 90–300 ms:n ikkunassa (autokorrelaatio, A4 = 440 Hz) antoi vaihteluvälit Steel +3…+17 senttiä, Nylon −12…+3 senttiä ja FreePats −1…+26 senttiä. FreePatsin A2 oli otoksen suurin poikkeama ja Steelin G2 pankkinsa suurin. Mittaus on lähtötieto omistajan kuunteluun.

## Ajastus ja lataus

[`scores.mjs`](scores.mjs) määrittää kielet, MIDI-sävelet, iskuhetket ja vaimennuksen. [`audio.mjs`](audio.mjs) valitsee vain teoksen tarvitsemat kieli–MIDI-parit ja ajastaa ne yhdellä `AudioContext`-kellolla vasta purkamisen jälkeen. Neljän E2-iskun väli on 833⅓ ms. Edellinen ääni on vaimennettu seuraavan iskun alkaessa. Viimeisen 150 ms:n häivytys alkaa 3⅓ s ensimmäisen iskun jälkeen. G-otteessa kieliväli on 45 ms ja järjestys on 6–5–4–3–2–1. Pysäytys peruu tulevat äänet ja häivyttää soivan äänen korkeintaan 25 ms:ssa. Sivun tai äänikontekstin keskeytys katkaisee toiston heti.

| Näytteet kylmästä muistista | Steel OGG / AAC (B) | Nylon OGG / AAC (B) | FreePats OGG / AAC (B) |
| --- | ---: | ---: | ---: |
| Neljä E2-iskua (1) | 41 556 / 62 086 | 40 812 / 61 988 | 21 961 / 61 822 |
| Kolmisointu erikseen tai yhdessä (3) | 126 556 / 186 275 | 123 886 / 185 854 | 70 256 / 186 253 |
| Kuuden kielen G-ote (6) | 260 698 / 372 667 | 238 733 / 356 985 | 156 677 / 364 891 |
| Melodia ja terssi (6) | 257 867 / 372 618 | 243 021 / 365 218 | 153 406 / 368 875 |

Taulukossa on äänitiedostojen tavumäärä, kun ensimmäinen koodekki toimii. Selain kokeilee tarpeen mukaan toista muotoa. Sivun mittari laskee selaimen lukemat tavut ja peräkkäisten tai rinnakkaisten purkujen yksittäiset kestot yhteen. Samassa sivuistunnossa jo puretut näytteet käytetään muistista. Avaaminen ei lataa ääntä.

## Automaattinen tarkistus

| Tarkistus | Näyttö |
| --- | --- |
| `npm run lint` ja `npx eslint testit/soitinpankki/*.mjs` | Läpäisivät |
| `npm run typecheck`, `npm run build` | Läpäsivät |
| `npm test` | 622/622. Manifesti ja kaikki 48 toimitustiedostoa tarkistettu SHA-256:lla |
| `npx playwright test tests/e2e/soitinpankki.spec.ts --workers=2` | 18/18 kolmella selainprofiililla. Ajoitettu PCM-signaali, 150 ms:n vaimennus ja stop, näytteiden purku, valikoiva lataus ja välimuisti, häiriöpalautuminen sekä 320 px / 200 % tekstisuurennus ja näppäimistö |

Selaintestit ajettiin macOS:llä Chromiumin työpöytä- ja iPhone 13 -näkymäasetuksilla sekä työpöytä-WebKitillä. Käytössä oli projektin staattista testipalvelinta vastaava palvelin vaihtoehtoisessa portissa. Ajoitus, pysäytys ja aitojen tiedostojen purku tarkistettiin myös `OfflineAudioContext`-signaalista.

## Fyysiset mobiilikokeet

1. Avaa sama esikatselu **fyysisellä iPhonella Safarissa** ja **fyysisellä Android-puhelimella Chromessa**. Merkitse laitemalli, käyttöjärjestelmän ja selaimen versiot, äänilähtö ja esikatseluversio. Käytä ensin sisäistä kaiutinta ja sen jälkeen kuulokkeita.
2. Avaa sivu uutena ja soita kaikki kolme koetta kullakin pankilla. Tarkista ensikosketus, alun säilyminen, kaikki G-otteen kielet, lopetus ja uusintatoisto. Kirjaa koodekki, tavut, purkuaika ja kontekstin tila. E2:n lämpimällä uusinnalla näytteitä pitäisi lukea muistista.
3. Paina **Pysäytä** sekä latauksen että toiston aikana ja vaihda pankkia nopeasti. Kuuntele, käynnistyykö vanhaa toistoa tai jääkö ääntä päälle. Kokeile myös välilehden ja sovelluksen vaihtoa sekä lukitusta. Palaa ja käynnistä koe itse uudelleen.
4. Kokeile iPhonen äänetöntä tilaa ja Androidin mediaäänenvoimakkuutta. Kirjaa, käynnistyykö ääni odotetusti. Testaa halutessasi erikseen Bluetooth-lähdöllä ja kirjaa sen aiheuttama viive omana havaintonaan.
5. iOS Simulatorissa, Android Emulatorissa ja Playwrightin puhelinnäkymässä voi toistaa asettelu-, pyyntö- ja selainlogiikkatarkistukset. Merkitse ne simulaattori- tai emulaatiotuloksiksi. Kaiutin, äänetön tila, lukitus ja audioreitin laitevaihdot hyväksytään fyysisillä laitteilla.

## Meta Steelin mahdollinen ensimmäinen käyttöönotto

**Yksi olemassa oleva, tapahtumapohjainen mallisoitto** olisi arviolta 2–4 lähdetiedoston muutos aineisto- ja testitiedostojen lisäksi. Työ olisi pankin määritys ja sävelkartta, valikoiva purku sekä pieni puskuritoistoadapteri nykyisen ajastuksen ja pysäytyksen perään. Jos ensimmäinen käyttökohde olisi PR #133:n sointuesimerkki sen erillisen hyväksynnän jälkeen, se jo käyttää Meta Steeliä. Mahdollinen muutos koskisi näytteen valintaa ja alkuperätietojen yhdenmukaistamista. Ajastusta voisi käyttää sellaisenaan.

Harjoittelijan ja Riffikaiun `ReferencePlayer` käyttää oskillaattoreita. Niiden mahdollinen myöhempi käyttöönotto tarvitsee oman adapterin, etenkin ajastetuille melodioille, silmukoille ja samanaikaiselle mikrofonille. Tämän kokeen kahdeksan Steel-näytettä riittävät vain kokeen säveliin. Valmiit taustaraidat ja `OfflineAudioContext`-generaattori vaativat oman uudelleenrenderöintipäätöksensä.

## Vielä avoimet hyväksynnät

- Omistajan A/B/C-kuuntelu äänen tasaisuudesta, vireestä ja jälkisoinnista sekä arviot E2:n vaimennuksesta ja G-harjauksen erottelusta.
- Fyysinen iPhone/Safari ja Android/Chrome yllä olevalla laitepolulla.
- Mahdollinen oppijakoe jälkisoinnin vaikutuksesta melodian ja intervallin hahmottamiseen. VoiceOveria ja TalkBackia ei ole testattu.
- Omistajan erillinen pankin valinta ja päätös ensimmäisen varsinaisen käyttökohteen rajauksesta.
