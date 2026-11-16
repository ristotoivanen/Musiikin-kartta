# Apukokeen tulokset: nykyinen aluketunnistin ja spektrivuo synteettisellä kompilla

**Ajettu:** 16.11.2026, Node 22.19, haara `docs/rytmin-mikrofoniarvio-2026-11` (pohja `beta` `f7a204b`).
**Komento:** `node docs/oppiminen/rytmi/mikrofoniarvio-2026-11/koe/onset-koe.mjs`
**Koodi:** [onset-koe.mjs](./onset-koe.mjs). Tunnistin A on tuotannon `OnsetDetector`
(`harjoittelija/vendor/pitchDetector.ts`) muuttamattomana, kehystettynä kuten `PitchLoop` sen tekee.

## Mitä koe voi ja ei voi osoittaa

Signaali on synteettinen: Karplus–Strong-kielet, G-avosointu, alasveto kuudelta kieleltä 12 ms:n
välein, ylösveto kolmelta ohuimmalta kieleltä hiljempaa, ihmisen ajoitushajonnaksi 10 ms, kohinapohja
noin −60 dBFS. Huonetta, mikrofonia, plektran ääntä, käden osumia tai selaimen äänenkäsittelyä ei ole.

- Koe **voi osoittaa**, että tunnistin ei toimi edes ihanneoloissa. Se on tämän kokeen tarkoitus.
- Koe **ei voi osoittaa**, että tunnistin toimii oikealla kitaralla. Hyvä tulos tässä taulukossa on
  yläraja, ei näyttö.

Vakioviive poistetaan ennen osumien laskemista, koska vakioviive on periaatteessa kalibroitavissa.
Sarake *Viive* kertoo poistetun mediaaniviiveen ja *Hajonta* osumien aikavirheen keskihajonnan.

## Tulokset

| Skenaario | Tunnistin | Iskuja | Havaittu | Osumat alas | Osumat ylös | Puuttuu | Ylimääräisiä | F ±50 ms | F ±25 ms | Viive ms | Hajonta ms |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Soiva sointu, neljäsosat alas, 80 BPM | A nykyinen, 60 Hz | 32 | 31 | 31/32 | 0/0 | 1 | 0 | 98 % | 79 % | 48 | 16.9 |
| Soiva sointu, neljäsosat alas, 80 BPM | A nykyinen, 30 Hz | 32 | 31 | 31/32 | 0/0 | 1 | 0 | 98 % | 86 % | 59 | 15.4 |
| Soiva sointu, neljäsosat alas, 80 BPM | B spektrivuo | 32 | 38 | 32/32 | 0/0 | 0 | 6 | 91 % | 91 % | 3 | 1.4 |
| Soiva sointu, kahdeksasosat alas–ylös, 60 BPM | A nykyinen, 60 Hz | 64 | 32 | 32/32 | 0/32 | 32 | 0 | 67 % | 65 % | 39 | 9.8 |
| Soiva sointu, kahdeksasosat alas–ylös, 60 BPM | A nykyinen, 30 Hz | 64 | 32 | 32/32 | 0/32 | 32 | 0 | 67 % | 65 % | 53 | 14.2 |
| Soiva sointu, kahdeksasosat alas–ylös, 60 BPM | B spektrivuo | 64 | 65 | 32/32 | 32/32 | 0 | 1 | 99 % | 99 % | 2 | 2.3 |
| Soiva sointu, kahdeksasosat alas–ylös, 80 BPM | A nykyinen, 60 Hz | 64 | 32 | 32/32 | 0/32 | 32 | 0 | 67 % | 60 % | 49 | 12.5 |
| Soiva sointu, kahdeksasosat alas–ylös, 80 BPM | A nykyinen, 30 Hz | 64 | 31 | 31/32 | 0/32 | 33 | 0 | 65 % | 59 % | 53 | 14.5 |
| Soiva sointu, kahdeksasosat alas–ylös, 80 BPM | B spektrivuo | 64 | 68 | 32/32 | 32/32 | 0 | 4 | 97 % | 97 % | 2 | 2.2 |
| Soiva sointu, kahdeksasosat alas–ylös, 100 BPM | A nykyinen, 60 Hz | 64 | 30 | 30/32 | 0/32 | 34 | 0 | 64 % | 57 % | 51 | 14.9 |
| Soiva sointu, kahdeksasosat alas–ylös, 100 BPM | A nykyinen, 30 Hz | 64 | 30 | 30/32 | 0/32 | 34 | 0 | 64 % | 57 % | 64 | 13.8 |
| Soiva sointu, kahdeksasosat alas–ylös, 100 BPM | B spektrivuo | 64 | 70 | 32/32 | 32/32 | 0 | 6 | 96 % | 96 % | 2 | 3.2 |
| Soiva sointu, kahdeksasosat alas–ylös, 120 BPM | A nykyinen, 60 Hz | 64 | 25 | 24/32 | 0/32 | 40 | 1 | 54 % | 49 % | 59 | 13.9 |
| Soiva sointu, kahdeksasosat alas–ylös, 120 BPM | A nykyinen, 30 Hz | 64 | 24 | 24/32 | 0/32 | 40 | 0 | 55 % | 48 % | 69 | 17.9 |
| Soiva sointu, kahdeksasosat alas–ylös, 120 BPM | B spektrivuo | 64 | 64 | 32/32 | 30/32 | 2 | 2 | 97 % | 97 % | 4 | 4.5 |
| Soiva sointu, hiljainen soitto (−12 dB), 100 BPM | A nykyinen, 60 Hz | 64 | 29 | 27/32 | 0/32 | 37 | 2 | 58 % | 58 % | 54 | 10.8 |
| Soiva sointu, hiljainen soitto (−12 dB), 100 BPM | A nykyinen, 30 Hz | 64 | 28 | 27/32 | 0/32 | 37 | 1 | 59 % | 52 % | 62 | 14.1 |
| Soiva sointu, hiljainen soitto (−12 dB), 100 BPM | B spektrivuo | 64 | 58 | 32/32 | 24/32 | 8 | 2 | 92 % | 92 % | 4 | 4.3 |
| Soiva sointu, tauollinen komppi D.DU.UDU, 100 BPM | A nykyinen, 60 Hz | 48 | 21 | 21/24 | 0/24 | 27 | 0 | 61 % | 49 % | 48 | 21.2 |
| Soiva sointu, tauollinen komppi D.DU.UDU, 100 BPM | A nykyinen, 30 Hz | 48 | 19 | 18/24 | 0/24 | 30 | 1 | 54 % | 36 % | 58 | 19.7 |
| Soiva sointu, tauollinen komppi D.DU.UDU, 100 BPM | B spektrivuo | 48 | 51 | 24/24 | 24/24 | 0 | 3 | 97 % | 97 % | 3 | 3.7 |
| Vaimennetut kielet, kahdeksasosat, 80 BPM | A nykyinen, 60 Hz | 64 | 64 | 32/32 | 32/32 | 0 | 0 | 100 % | 100 % | 7 | 4.6 |
| Vaimennetut kielet, kahdeksasosat, 80 BPM | A nykyinen, 30 Hz | 64 | 64 | 32/32 | 32/32 | 0 | 0 | 100 % | 100 % | 13 | 9.5 |
| Vaimennetut kielet, kahdeksasosat, 80 BPM | B spektrivuo | 64 | 67 | 32/32 | 32/32 | 0 | 3 | 98 % | 98 % | 0 | 1.7 |
| Vaimennetut kielet, kahdeksasosat, 120 BPM | A nykyinen, 60 Hz | 64 | 64 | 32/32 | 32/32 | 0 | 0 | 100 % | 100 % | 8 | 4.5 |
| Vaimennetut kielet, kahdeksasosat, 120 BPM | A nykyinen, 30 Hz | 64 | 64 | 32/32 | 32/32 | 0 | 0 | 100 % | 100 % | 17 | 9.3 |
| Vaimennetut kielet, kahdeksasosat, 120 BPM | B spektrivuo | 64 | 66 | 32/32 | 32/32 | 0 | 2 | 98 % | 98 % | 0 | 1.7 |
| Soiva sointu, kuudestoistaosat, 80 BPM | A nykyinen, 60 Hz | 128 | 29 | 28/64 | 0/64 | 100 | 1 | 36 % | 36 % | 67 | 10.0 |
| Soiva sointu, kuudestoistaosat, 80 BPM | A nykyinen, 30 Hz | 128 | 25 | 24/64 | 0/64 | 104 | 1 | 31 % | 29 % | 69 | 11.4 |
| Soiva sointu, kuudestoistaosat, 80 BPM | B spektrivuo | 128 | 84 | 64/64 | 12/64 | 52 | 8 | 72 % | 72 % | 4 | 3.0 |
| Tauollinen komppi + rumputausta kaiuttimesta (−6 dB), 100 BPM | A nykyinen, 60 Hz | 48 | 23 | 23/24 | 0/24 | 25 | 0 | 65 % | 62 % | 46 | 13.5 |
| Tauollinen komppi + rumputausta kaiuttimesta (−6 dB), 100 BPM | A nykyinen, 30 Hz | 48 | 23 | 23/24 | 0/24 | 25 | 0 | 65 % | 54 % | 59 | 15.7 |
| Tauollinen komppi + rumputausta kaiuttimesta (−6 dB), 100 BPM | B spektrivuo | 48 | 55 | 24/24 | 24/24 | 0 | 7 | 93 % | 93 % | 2 | 4.2 |
| Pelkkä rumputausta kaiuttimesta, kitara hiljaa, 100 BPM | A nykyinen, 60 Hz | 0 | 32 | 0/0 | 0/0 | 0 | 32 | – | – | – | – |
| Pelkkä rumputausta kaiuttimesta, kitara hiljaa, 100 BPM | A nykyinen, 30 Hz | 0 | 32 | 0/0 | 0/0 | 0 | 32 | – | – | – | – |
| Pelkkä rumputausta kaiuttimesta, kitara hiljaa, 100 BPM | B spektrivuo | 0 | 33 | 0/0 | 0/0 | 0 | 33 | – | – | – | – |

## Tulkinta

1. **Nykyinen tunnistin (A) ei havaitse yhtään ylösvetoa soivan soinnun päältä** missään skenaariossa
   (0/32, 0/24, 0/64). Syy on rakenteellinen: tunnistin vaatii, että 50 ms:n RMS-taso kaksinkertaistuu
   edeltävän 300 ms:n pienimpään arvoon nähden, ja sen jälkeen se on 150 ms sokea. Soiva sointu ei
   vaimene iskujen välissä puoleen, ja kevyt ylösveto kolmelta kieleltä ei kaksinkertaista tasoa.
2. **A:n aikaleima on 39–69 ms myöhässä ja sen hajonta on 10–21 ms** soivalla soinnulla. Vaimennetuilla
   kielillä viive on 7–17 ms ja hajonta 4,5–9,5 ms. Jälkimmäinen vastaa pelkkää ruudunpäivityksen
   kvantisointia (16,7 ms / √12 = 4,8 ms ja 33,3 ms / √12 = 9,6 ms).
3. **A havaitsee puhtaat vaimennetut iskut täysin** (64/64) tässä ihannesignaalissa. Vaimennettu komppi
   on siis helpoin tapaus, mutta tulos ei kerro mitään hiljaisesta sähkökitarasta ilman vahvistinta,
   huonekohinasta tai muista napsahduksista.
4. **Spektrivuo (B) on selvästi parempi lähtökohta**: kahdeksasosat 60–120 BPM F = 96–99 %, viive
   2–4 ms, hajonta 2–5 ms. Sekin jättää huomaamatta hiljaisen soiton ylösvetoja (8/32 puuttuu −12 dB:n
   tasolla) ja suurimman osan kuudestoistaosien ylösvedoista (12/64 löytyi).
5. **B tuottaa ylimääräisiä havaintoja** (1–8 kahdeksaa tahtia kohti), koska kuuden kielen alasveto
   kestää 60 ms eikä ole yksi piste. Neljäsosakompissa 6 ylimääräistä 32 iskua kohti.
6. **Kaiuttimesta vuotava rumputausta näyttää molemmille tunnistimille soitolta**: kun kitara on hiljaa,
   A ilmoittaa 32 ja B 33 iskua kahdeksassa tahdissa (rumpuiskuja on 32). Tauollisessa kompissa B:n
   ylimääräiset havainnot kasvavat kolmesta seitsemään, eli tauon kohdalle osuva bassorumpu tulkitaan
   soitetuksi iskuksi. Tämä on pedagogisesti pahin virhe, koska tehtävä opettaa juuri tauon pitämistä.
