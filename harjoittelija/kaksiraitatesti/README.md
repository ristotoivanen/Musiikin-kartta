# Kahden raidan synkronointitesti (issue #9, testiversio)

Eristetty testisivu, jolla selvitetään, esiintyykö kappaleharjoittelijan raitojen epätahti myös
kahdella raidalla. Sivu `kaksiraitatesti.html` ei ole linkitetty sivustolta (`noindex`), sillä on
oma käännös (`npm run build:kaksiraitatesti` → `assets/kaksiraitatesti/`), eikä se kuulu
`npm run build` -tuotantokäännökseen. Tuotannon kolme raitaa, tahdistin (`StemAligner`) ja
kappaleharjoittelija ovat ennallaan.

Tavoite on erottaa toisistaan neljä tekijää:

| Tekijä | Miten erotetaan |
| --- | --- |
| Raitamäärä | Kaksi raitaa (Kitara, Tausta) samalla toistopolulla kuin kolmen raidan soitin. |
| Tiedostomuoto | Erilliset tilat `?lahde=mp3` ja `?lahde=wav`. |
| Lähderaitojen kohdistus | Mitattu Macilla (alla) ja synteettinen aineisto, jonka kohdistus tunnetaan. |
| Nykyinen tahdistin | Oletuksena käytössä. `&tahdistin=pois` ajaa saman toiston ilman korjauskelauksia. |

## Tilat

- `kaksiraitatesti.html?lahde=mp3`: Sunon alkuperäiset MP3:t muuttamattomina, koko kappale 3:53.
- `kaksiraitatesti.html?lahde=wav`: samat raidat WAV-muodossa. Mukana on vain kohta 0–120 s, koska
  Cloudflare Pages hyväksyy enintään 25 MiB:n tiedostot. Aikajana on sama kuin MP3:ssa.
- `kaksiraitatesti.html?lahde=synteettinen`: selaimessa luodut 60 s:n raidat, joiden kohdistus
  tunnetaan näytteen tarkkuudella. Kummassakin raidassa on merkkiääni samoissa kohdissa: tausta
  300 Hz, kitara 1500 Hz, väli vaihtelee 0,35–0,75 s. Kohdakkain ne kuulostavat yhdeltä iskulta.
  `&siirto=40` siirtää kitaraa 40 ms myöhemmäksi. Tämä on positiivinen kontrolli: mittauksen pitää
  näyttää −40 ms.
- Kaikkiin tiloihin voi lisätä `&tahdistin=pois`.

## Lähdeaineisto

Sunon Split from Mix -erotus akustisesta kappaleesta, toimitettu paketissa
`Yksi sointu, kaksi askelta Stems accoustic.zip`.

| Tiedosto testissä | Alkuperäinen | SHA-256 |
| --- | --- | --- |
| `yksi-sointu-akustinen-kitara.mp3` | `(Acoustic Guitar).mp3`, muuttamaton | `ffcc1e1f…a9cbc2` |
| `yksi-sointu-akustinen-tausta.mp3` | `(Without Acoustic Guitar).mp3`, muuttamaton | `f0678ae6…7eeb05` |
| `yksi-sointu-akustinen-kitara-0-120s.wav` | `(Acoustic Guitar).wav`, kehykset 0–5 760 000 | `81e3ca07…1929a3` |
| `yksi-sointu-akustinen-tausta-0-120s.wav` | `(Without Acoustic Guitar).wav`, kehykset 0–5 760 000 | `3e8cb163…5ef0cf` |

Alkuperäisten WAVien SHA-256: kitara `191902b5…7e88`, tausta `4ccb82cb…03d0`. Molempien MP3:ien
ID3-tunnisteessa on `created=2026-11-11T21:04:20.7346…` (mikrosekuntien ero), joten ne ovat samasta
erotusajosta. Kaikki tiedostot ovat 48 kHz stereo. WAVit ovat 16-bittisiä, MP3:t noin 180 kbit/s
(Lavf, LAME-otsakkeessa 576 näytteen alkuviive).

## Aineiston kohdistus (mitattu Macilla 17.11.2026)

MP3:t purettiin Applen dekooderilla (`afconvert`, sama kuin Safarissa) ja paikannettiin samalla
ristikorrelaatiolla kuin testisivulla: `tools/kaksiraitatesti-analyysi.mts`.

| Tarkistus | Tulos |
| --- | --- |
| MP3 vs. WAV, kitara (8 kohtaa 5–200 s) | Siirtymä −0,02…−0,28 näytettä (alle 0,006 ms), korrelaatio 0,997–0,9996. |
| MP3 vs. WAV, tausta | Siirtymä 0…−2,3 näytettä (alle 0,05 ms), korrelaatio 0,998–0,999. Intro 5 s: 0,87, koska tausta on lähes hiljaa. |
| Alkuviive | Applen dekooderi poistaa 576 näytteen alkuviiveen: MP3 ja WAV alkavat samasta näytteestä. |
| Kesto | WAV 233,320 s (11 199 360 kehystä). Purettu MP3 233,3335 s, eli lopussa 648 kehystä (13,5 ms) pidempi. Ei vaikuta alkuun. |
| Kitaran ja taustan keskinäinen kohdistus | Kitara + tausta vs. valmis kokonainen kappale: siirtymä 0,15–1,1 näytettä. Jäännösenergia on pienimmillään tasan 0 näytteen kohdalla ja kasvaa ±1 näytteen siirrolla. Raidat ovat kohdakkain näytteen tarkkuudella. |
| Uusi kitara vs. tuotannon kitararaita | Siirtymä alle 1 näyte. Kahden raidan ja kolmen raidan aineistolla on sama aikajana. |
| Taso | MP3 on 3,8 dB voimakkaampi kuin WAV, molemmissa raidoissa yhtä paljon (RMS-suhde 1,54). Miksauksen tasapaino on sama. Kuulonvaraisessa MP3–WAV-vertailussa WAV kuulostaa hiljaisemmalta. |
| Koodaus | **Uudet MP3:t ovat VBR-koodattuja** (Xing-otsake ja 100-kohtainen sisällysluettelo, kehysten bittinopeus 32–320 kbit/s). **Tuotannon kolme raitaa ovat CBR-koodattuja** (Info-otsake, kaikki kehykset 192 kbit/s). VBR-MP3:n kelaus perustuu sisällysluetteloon ja voi olla epätarkka. MP3-tila ei siis ole kelausten osalta täysin vertailukelpoinen tuotantoon. WAV-tila erottaa tämän tekijän. |

Johtopäätös: lähderaitojen kohdistus tai MP3:n alkuviive ei selitä kuultua epätahtia. Kelauksiin liittyvät
tulokset MP3-tilassa voivat sisältää VBR-kelauksen epätarkkuuden, jota tuotannon CBR-raidoissa ei ole.

## Ensimmäiset havainnot iOS-simulaattorissa (18.11.2026, ei korvaa fyysistä iPhonea)

iPhone 16 Pro -simulaattori, iOS 27.2, AudioContext 48 kHz. Järjestys: Soita, 24 s toistoa, kelaus
kohtaan 1:00, 16 s toistoa, Tauko 3 s, Soita.

| Tila ja vaihe | Mediakellojen ero | Renderöity ero | Havainto |
| --- | --- | --- | --- |
| WAV, ennen kelausta | +10,7 ms | +10,67 ms | Graafi renderöi kumpaakin raitaa 20 ms mediakelloa edellä. Ero on sama kuin kelloissa. |
| WAV, kelauksen jälkeen | −92 ms | +932 ms | Käyttäjän kelaama tausta renderöi 1,000 s mediakelloaan jäljessä. Tahdistimen korjaama kitara on normaalisti −22 ms:ssä. |
| WAV, Tauko → Soita | +119 ms | +119 ms → +1143 ms | Molemmat ensin 1,0 s jäljessä. Kitaran seuraava korjauskelaus palautti vain kitaran. |
| MP3, käynnistys ilman korjauksia (ajo 1) | +10,7 ms | +16,0 ms | |
| MP3, käynnistys 4 korjauskelauksella (ajo 2) | −56 ms | +797 ms | Kitara renderöi 868 ms mediakelloaan edellä. |

Lisäksi havaittiin, että kelauksen jälkeen soittimen `pendingSeek` jäi joskus voimaan. iOS raportoi
kelauskohdaksi esimerkiksi 60,009 s, ja tarkkuusehto on 1 ms. Silloin seuraava Tauko → Soita palasi
kelauskohtaan (1:00), eli kohta toistui. Logiikka on kopioitu tuotannosta muuttamatta, joten sama on
todennäköistä kappaleharjoittelijassa. Tätä ei ole todennettu fyysisellä iPhonella.

## Mittaukset

Raportti (Valitse raportti → kopioi) sisältää kaiken alla olevan:

- **Tapahtumat:** painallukset, `play()`-kutsut ja tulokset, tauot syineen, kaikki `currentTime`-kirjoitukset raidoittain (`seek-write`: tahdistimen pakotettu tai jatkuva korjaus tai käyttäjän kelaus) sekä elementtien `seeking`/`seeked`/`waiting`/`playing`-tapahtumat ja AudioContextin palautus.
- **Kelausten valmistuminen:** `seekLatencies`, eli aika `seek-write` → saman raidan `seeked`.
- **Mediakellot 0,5 s välein:** kummankin elementin `currentTime` ja niiden ero (kitara − tausta). **Tämä on elementtien kellojen ero, ei kuultava kohdistus.** `currentTime` on WebKitissä arvio, joka etenee kellon mukana riippumatta siitä, mitä Web Audio -graafi renderöi.
- **Renderöity kohdistus:** 3 s Soita-painalluksen ja kelauksen jälkeen ja sitten 5 s välein. Kummankin raidan MediaElementSourcesta kaapataan analysaattorilla (ennen GainNodea) 32 768 näytettä. Kaappaus toistetaan, kunnes kontekstin kello ei muutu lukujen välissä, jolloin näytteet ovat samasta renderöintijaksosta. Näyte paikannetaan alkuperäisestä PCM-tiedostosta ristikorrelaatiolla: karkea haku 3 kHz:llä, sitten tarkka haku täydellä näytetaajuudella. Erotus (kitara − tausta) on raitojen todellinen kohdistus graafissa. Ulostulon viive (myös Bluetooth) on molemmille sama, koska raidat miksataan ennen ulostuloa.
  - MP3-tila mitataan WAV-tiedostoja vastaan (näytetarkasti kohdakkain, ks. yllä). Mittaus toimii siis vain kohdissa 0–118 s.
  - Mittaus on **epävarma**, jos korrelaatio on alle 0,6, toiseksi paras paikallinen huippu on alle 0,1:n päässä tai raita on hiljaa (RMS ≤ 0,0001). Akustisen kappaleen intro (0–14 s) on pelkkää kitaraa, joten taustaa ei voi mitata ennen noin 0:14:ää.
  - `mediaMinusRenderedMs` (mediakello − renderöity kohta) on suuntaa antava, koska `currentTime` luetaan pääsäikeessä.
- **Kuulokuva:** painikkeet tallentavat arvion (tahdissa / epätahdissa / en osaa sanoa) soittimen kohdan kanssa.

## Vertailukelpoisuus kolmen raidan soittimeen

Toistopolku on kopio `SongJourney.tsx`:n toistosta PR #92:n jälkeen. Samat ovat:
- `SongGainMixer` ja sen AudioContext-palautus
- `StemAligner` samoine raja-arvoineen ja samoissa kutsukohdissa (`syncStems(true)` ennen `play()`-kutsuja, `syncStems()` käynnistyksen jälkeen ja `timeupdate`-tapahtumissa, pakotettu tahdistus kelauksen valmistuttua)
- tauko, kelaus, näkyvyyden menetys
- `preload="metadata"`
- tasot 0,85 / 0,78

Erot, jotka on kirjattu tähän tarkoituksella:

1. Sivuraitoja on yksi (kitara). Tahdistimen yhteinen viive-estimaatti voi päivittyä korkeintaan kerran kierroksessa, joten kolmen raidan kaksoispäivitys ei voi tapahtua.
2. Tahdistuksen päälähde on Tausta (kaikki paitsi kitara, myös laulu). Kolmen raidan soittimessa se on säestys ilman laulua.
3. Web Audio -reititystä käytetään kaikissa selaimissa (iPhonella sama kuin tuotannossa), jotta mittaus toimii myös työpöydällä.
4. Ei äänenvoimakkuussäädintä, raitojen mykistystä, looppia eikä versionvaihtoa. Kelaus tehdään painikkeella ("Siirry kohtaan 1:00"), jotta se on toistettava.
5. Kitaran `currentTime`-kirjoitukset kulkevat kirjaavan välikappaleen kautta. Välikappale on sama olio joka kerta, joten tahdistimen raitakohtainen muisti säilyy. Logiikka ei muutu.
6. Mittaukset (analysaattorit ja korrelaatio 5 s välein, noin 10–40 ms pääsäikeessä) lisäävät kuormaa, jota tuotannossa ei ole.

## Testit

- `tests/kaksiraitatesti.test.ts`: WAV-luku, ristikorrelaatio (kokonais- ja murto-osainen siirto, kohina, alipäästö, toistuva signaali, hiljaisuus) ja synteettinen aineisto (siirto täsmälleen tunnettu, mittaus 0 ja 40 ms).
- `tests/e2e/kaksiraitatesti.spec.ts` (Chromium, työpöytä ja puhelin):
  - synteettinen 0 ms
  - positiivinen kontrolli −40 ms
  - tahdistin pois
  - kelaus ja jatko
  - MP3-tila oikeilla raidoilla

## Rajoitukset

- Simulaattori ja työpöytäselain eivät korvaa fyysistä iPhonea.
- WAV-tila kattaa vain kohdan 0–120 s.
- Pages Function lukee koko tiedoston jokaista Range-pyyntöä varten, mikä voi hidastaa WAV-tilan latausta. Tämä on itsessään WAV-tilan mahdollinen sekoittava tekijä.
- Akustisen kappaleen toistuva komppi voi tehdä yksittäisestä mittauksesta epävarman. Epävarmat mittaukset näytetään, mutta niitä ei lasketa yhteenvetoon.
