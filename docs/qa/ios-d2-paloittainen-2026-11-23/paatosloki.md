# Issue #9: D2-päätösloki (23.11.2026)

Lyhyt loki: mitä kokeiltiin, mitä mitattiin, mikä hylättiin ja miksi. Mittaukset iOS-simulaattorissa
(iPhone 16 Pro, Safari, WebKit 605.1.15), WebKit-prosessien footprint `footprint -p` -näytteistyksellä
sekunnin välein. Raakatulokset ja koeskriptit: `test-results/kappaleharjoittelija-ios-2026-11-23/d2-koe/`
(paikallinen, ei gitissä).

## Lähtötiedot

- MP3:t: MPEG-1 Layer III, 48 kHz, stereo, 192 kbit/s CBR, kaikki kehykset 576 tavua.
  Rakenne: ID3v2 (319–136 166 t) → Info-kehys (Lavc61.19, kooderiviive 576, täyte 1080) → 8842 (normaali)
  tai 9724 (akustinen) äänikehystä. Normaalin raidan kelvollinen pituus 10 184 328 näytettä (212,17 s).

## 1. D1:n muisti (A): oma koodi vai WebKit?

| Koe (eristetty sivu, ei Reactia, ei valjasta) | WebContent | Johtopäätös |
|---|---|---|
| Koko version purku → 3 lähdettä soi 3 s → stop/disconnect → pudotus, 10 kierrosta | 52 → 2549 Mt, ei laske 30 s:ssa | +250 Mt / kierros: kasvu toistuu ilman soittimen koodia |
| 10 s:n palojen purku ilman soittoa, 360 purkua (~1,4 Gt jätettä) | 81–86 Mt | soittamattomat puretut puskurit vapautuvat |
| 10 s:n palat, uusi AudioBuffer joka palalle, soitetaan 0,4 s | 51 → 735 Mt (60 palaa) | soitetun lähteen AudioBuffer jää muistiin kontekstin ajaksi |
| Sama, mutta kiinteä allas (3 puskuria/raita) uudelleenkäytössä | 93–107 Mt, tasainen | allas rajaa muistin |
| A-parannus: kolme kokopitkää puskuria uudelleenkäytössä | ensimmäinen vaihto huippu 571 Mt, sitten tasainen 356 Mt | kasautuminen poistuu, mutta jalanjälki ei pienene |

Päätös: D1:n kasautuminen ei johdu omista viittauksista vaan WebKitistä: AudioBuffer, joka on ollut
soitetun AudioBufferSourceNoden puskurina, ei vapaudu ennen AudioContextin sulkemista. Tätä ei voi
luotettavasti vapauttaa sivulta käsin. A-parannus (kokopitkä allas) poistaa kasautumisen mutta jättää
356 Mt:n tason ja 571 Mt:n huipun → **hylätty**, ei täytä muistitavoitetta. Mielivaltaisia odotuksia ei lisätty.

## 2. Paloittainen purku: decodeAudioData (D2) ja WebCodecs (D2b)

Koe: segmentti = raakakehykset [a − esi, a + 417) ilman ID3:a ja Info-kehystä; vertailu koko tiedoston
decodeAudioData-purkuun (D1:n puskuri) näyte näytteeltä, viive haettu ristikorrelaatiolla.

- decodeAudioData: tulos = kehyksiä × 1152 näytettä, indeksi j ↔ koko purun näyte (alkukehys × 1152 − 576 + j),
  viive 0 kaikissa tapauksissa. Kahden ensimmäisen kehyksen jälkeen **bittitarkka** (virhe 0,0) kaikilla raidoilla.
  Virheelliset: 2 ensimmäistä kehystä (bittivaranto, MDCT-limitys) ja viimeinen (dekooderiviive 529). → esi 2, jälki 1.
- WebCodecs AudioDecoder `mp3`: tuettu (`isConfigSupported` true) ja oikea purku toimii; näytteet täsmälleen samat
  kuin decodeAudioData (sama Applen dekooderi), ulostulot 623/1152/…/529, aikaleimat kehysten mukaan.
- Nopeus (Mac-simulaattori): 10 s:n pala 11–15 ms (decodeAudioData), 30–35 ms (WebCodecs).

Päätös: **D2 (decodeAudioData)**. Sama näytetarkkuus kuin WebCodecsilla, toimii myös vanhemmissa iOS-versioissa
eikä vaadi kehyskohtaista syöttöä. D2b (WebCodecs) **ei tarpeen**: ei mitattavaa etua tässä käytössä.
AudioWorklet/WASM (D) **ei perusteltu**, koska yksinkertaisempi ratkaisu täyttää ehdot.

## 3. Ajoitus: saako palat saumattomasti peräkkäin?

OfflineAudioContext (48 kHz), satunnaiset kehykset:
- `start(F/48000)` → täsmälleen kehys F: 300/300. Pyöristys ylöspäin pienellä toleranssilla (−0,7…+1e−6 kehystä → F,
  +0,1…+0,7 → F + 1), ei murto-osaista interpolointia.
- `start(when, o/48000)` → ensimmäinen näyte o: 100/100.
- Peräkkäiset lähteet (F ja F + pituus): 200/200 ilman aukkoa tai päällekkäisyyttä; summana lasketut ajat 100/100.

Päätös: palat ajastetaan kokonaisiin näytekehyksiin `start(F / sampleRate, o / sampleRate)`, sauma on näytetarkka.

## 4. Valittu toteutus (D2)

- Kolme MP3:a ladataan kokonaan (pakattuna ~15–17 Mt), kehysten sijainnit jäsennetään (ID3, Info/LAME-viive).
- Toisto 10 s:n paloina: jokainen pala puretaan decodeAudioDatalla (esi 2 + jälki 1 kehystä) ja kopioidaan
  **kiinteään AudioBuffer-altaaseen** (enintään 4 paikkaa × 3 raitaa × 10 s = 46 Mt). Allas säilyy versionvaihdon yli.
- Palat ajastetaan peräkkäin kokonaisiin kehyksiin; loop on vain seuraava pala kohdasta 0.
- Raitojen tasot ja kytkennät kuten D1:ssä (GainNode), joten muut raidat eivät katkea.

## 5. Löydös toteutuksen aikana: Chromiumin dekooderi (FFmpeg)

Sama purkukoe Chromiumissa: raakakehysten purku on bittitarkka kahden ensimmäisen kehyksen jälkeen, mutta
**529 näytettä siirtynyt** Applen dekooderiin nähden (FFmpeg ei poista dekooderiviivettä ilman Info-kehystä).
Kovakoodattu Apple-oletus olisi siirtänyt koko kappaleen 11 ms (saumat silti jatkuvia).
Päätös: latauksessa mitataan kerran alkuosan (ID3 + Info + 160 kehystä) ja raakapalan (kehykset 100–160) purun
vastaavuus; hyväksytään vain bittitarkka osuma. Mitattu: Safari (simulaattori) 0, Chromium 529. Epäonnistuessa
(hiljainen alku) oletetaan 0 ja kirjataan `kalibrointi-epaonnistui`.

## 6. Tarkistukset ja hylätyt epäilyt

- Ajoitusmittauksen kolme 10–17 ms:n poikkeamaa: yksittäisiä korrelaatioikkunoita (heikko ero toiseksi parhaaseen),
  naapurit 0,0 ms, ei palasaumoissa → mittausartefakti, ei toistovirhe.
- Valjaan kanssa tauolle jätetty sivu kasvoi ~0,2 Mt/min kolmen tunnin ajan (soiton aikana tasainen). Ilman valjasta:
  15 min soitto 129–166 Mt tasainen, 8 min tauko 153 → 140 Mt → kasvu tuli valjaasta, hylätty soittimen vikana.
- Mutaatiotarkistus: kalibrointi pois → e2e-testi kaatuu Chromiumissa (erot 0,03–0,21), eli testi mittaa oikeaa asiaa.

## 7. Lopputulos

D2 täyttää simulaattorissa kaikki ennalta asetetut kriteerit (raportti). Fyysinen iPhone-testi ja muistirajan
varmistus laitteella puuttuvat; ne ovat seuraava päätös.
