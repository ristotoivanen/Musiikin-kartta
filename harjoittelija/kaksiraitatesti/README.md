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
| Nykyinen tahdistin | Oletuksena käytössä. `&tahdistin=pois` ajaa saman toiston ilman tahdistinta, `&tahdistin=ei-korjauksia` ilman toiston aikaisia korjauskelauksia. |
| Toistotapa | `&moottori=uusi` on korjausehdokas, joka ei käytä tahdistinta (ks. [Korjausehdokas](#korjausehdokas-uusi-moottori)). |

## Tilat

- `kaksiraitatesti.html?lahde=mp3`: Sunon alkuperäiset MP3:t muuttamattomina, koko kappale 3:53.
- `kaksiraitatesti.html?lahde=wav`: samat raidat WAV-muodossa. Mukana on vain kohta 0–120 s, koska
  Cloudflare Pages hyväksyy enintään 25 MiB:n tiedostot. Aikajana on sama kuin MP3:ssa. Tiedostot
  ladataan kerran kokonaan ja soitetaan muistista (`&lataus=verkko` soittaa verkosta kuten PR #100).
- `kaksiraitatesti.html?lahde=aac` ja `?lahde=mp3cbr`: samat raidat pakattuina (AAC-LC 192 kbit/s ja
  MP3 CBR 192 kbit/s), ladataan kerran ja soitetaan muistista. `&pituus=koko` = koko kappale (3:53).
  Mittausreferenssit (WAV) ladataan toistotiedostojen jälkeen; `&mittaus=pois` jättää ne pois.
- `kaksiraitatesti.html?lahde=synteettinen`: selaimessa luodut 60 s:n raidat, joiden kohdistus
  tunnetaan näytteen tarkkuudella. Kummassakin raidassa on merkkiääni samoissa kohdissa: tausta
  300 Hz, kitara 1500 Hz, väli vaihtelee 0,35–0,75 s. Kohdakkain ne kuulostavat yhdeltä iskulta.
  `&siirto=40` siirtää kitaraa 40 ms myöhemmäksi. Tämä on positiivinen kontrolli: mittauksen pitää
  näyttää −40 ms.
- Kaikkiin tiloihin voi lisätä:
  - `&tahdistin=pois`: ei tahdistinta. Käyttäjän kelaus siirtää vain taustaa (koe B2).
  - `&tahdistin=ei-korjauksia`: vain pakotetut tahdistukset (käynnistys, kelaus, jatko), ei toiston
    aikaisia korjauskelauksia (koe B3).
  - `&moottori=uusi`: korjausehdokas.
  - `&mittausvali=2000`: renderöidyn kohdistuksen mittausväli millisekunteina (oletus 5000, vähintään 1000).
- **Aja vakiokoe** -painike tekee saman järjestyksen joka tilassa: Soita, 25 s, kelaus (1:00,
  synteettisessä 0:30), 15 s, Tauko 3 s, Soita, 15 s, Tauko. Ensimmäinen Soita on painallus, muut
  vaiheet ohjelmallisia. Painiketta käytetään simulaattorikokeissa, ei fyysisen iPhonen testeissä.

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

## Juurisyyanalyysi (MK-20261118-01, 18.11.2026)

### Lähtötiedot fyysiseltä iPhonelta

Käyttäjän yhteenvedot kokeista M1 ja W1 (nykyinen soitin, tahdistin käytössä). Täysiä JSON-raportteja
ei ole käytetty tässä analyysissä.

| Koe | Vaihe | Mediakellojen ero | Renderöity ero | Kuulokuva |
| --- | --- | --- | --- | --- |
| M1 (MP3) | ennen kelausta | +21 ms | +21 ms | epätahdissa |
| M1 | kelauksen jälkeen | −51 ms | −408 ms | ei yhteenvedossa |
| M1 | Tauko → Soita | | ei luotettavaa (korjauskelauksia) | palasi kohtaan 1:00 |
| W1 (WAV) | ennen käyttäjän kelausta, automaattisten korjausten jälkeen | −45 ms | −898 ms | epätahdissa |
| W1 | kelauksen jälkeen | | +1320 ms, myöhemmin +96 ms | epätahdissa |
| W1 | Tauko → Soita | | +360 ms, sitten −66 ms | epätahdissa, palasi kohtaan 1:00 |

### Vahvistettu

Fyysisellä iPhonella (M1, W1):

1. Renderöity ero poikkesi mediakellojen erosta satoja millisekunteja (W1 −45 vs. −898 ms, M1 −51 vs.
   −408 ms). Mediakellojen kohdistus ei kerro äänen kohdistuksesta.
2. Tauko → Soita palasi kelauskohtaan 1:00 molemmissa kokeissa.
3. W1:ssä renderöity ero muuttui jokaisen siirto-operaation yhteydessä (−898 → +1320 → +96 → +360 → −66 ms).

iOS-simulaattorissa (iPhone 16 Pro, iOS 27.2, vakiokoe, taulukot alla):

4. Kelaus siirtää kelatun raidan renderöityä ääntä mediakelloon nähden. WAV ilman tahdistinta (B2):
   käyttäjän kelaama tausta +853 ms, kelaamaton kitara 0. MP3:lla 0…+949 ms.
5. Myös pelkät pakotetut tahdistukset ilman korjauskelauksia (B3) tuottavat poikkeaman: MP3:n
   käynnistyksessä −75 ms ja kelauksen jälkeen +970 ms.
6. Korjauskelaukset (B1, B4) arpovat poikkeaman uudelleen. Synteettisellä aineistolla poikkeama oli
   kelauksen jälkeen +943…+949 ms ja jatkon jälkeen +925…+931 ms, vaikka mediakellojen ero oli −64…−262 ms.
7. Poikkeama muuttuu vain siirto-operaatioissa (kelaus, tauko ja soitto). Peräkkäisissä mittauksissa
   se pysyy samana (esim. +853,1…+853,3 ms viidessä mittauksessa 5 s välein). Mittaus ei siis aiheuta
   poikkeamaa. Synteettinen positiivinen kontrolli mitataan tasan −40,0 ms:ksi.
8. `pendingSeek` jää voimaan. iOS raportoi kelauskohdaksi esimerkiksi 60,009 s, mutta ehto on 1 ms.
   Kaikissa viidessä nykyisen soittimen vakiokokeessa Tauko → Soita kelasi taustan takaisin
   kelauskohtaan (74,4 → 60 s, synteettisessä 44,4 → 30 s). Samalla kelauksen jälkeinen pakotettu
   tahdistus jää tekemättä, koska `followBacking` odottaa yhä kelauksen valmistumista.
9. Sunon uusien VBR-MP3:ien kelaus on epätarkka. Uudella moottorilla MP3:n poikkeama oli kelauksen
   jälkeen −360 ms ja jatkon jälkeen +75…+120 ms, WAVilla samassa kokeessa 0.

WebKitin lähdekoodista luettu (main-haara, ei vahvistettu laitteella):

10. iOS:llä `MediaElementAudioSourceNode` saa äänen GPU-prosessin äänitapista
    (`AudioSourceProviderAVFObjC`) jaetun rengaspuskurin (`CARingBuffer`) kautta. Puskuri on vähintään
    1 s (`kRingBufferDuration`).
11. Kelauksessa tai muussa katkoksessa tappi merkitsee puskurin tyhjennettäväksi, ja
    `RemoteAudioSourceProviderProxy` lähettää `SetNeedsFlush`-viestin.
    `WebAudioSourceProviderCocoa::setNeedsFlush()` asettaa lukukohdan puskurin vanhimpaan kehykseen
    (`m_readCount = startFrame`). Graafi lukee siis jopa noin sekunnin vanhaa ääntä.
12. Lukija tahdistuu uudelleen vain ylivuodossa (`m_readCount < startFrame`). Muuten ero säilyy
    seuraavaan katkokseen asti.
13. `currentTime` on soittimen oma arvio, joka ei näe tätä puskuria.

### Todennäköiset selitykset

- **Laitteen poikkeamat syntyvät samasta mekanismista kuin simulaattorissa.** Suuruusluokka
  (0,36–1,3 s) vastaa puskurin kestoa, ja poikkeamat ilmaantuivat kelausten jälkeen, myös
  tahdistimen omien korjauskelausten jälkeen. W1:n −898 ms on samaa suuruusluokkaa kuin
  simulaattorin +853 ms. Tapahtumatasolla tätä ei ole todennettu, koska laitteen raportteja ei ole käytetty.
- **Poikkeaman etumerkki riippuu kelaussuunnasta.** Puskurissa on kelausta edeltävän kohdan ääntä:
  eteenpäin kelattu raita kuulostaa jäljessä olevalta, taaksepäin kelattu edellä olevalta. Tämä
  selittää, miksi poikkeama vaihtaa merkkiä (W1: −898 → +1320 ms).
- **Pakotettu tahdistus pysäytetyllä raidalla** (B3, −75 ms) viittaa siihen, että myös tauolla
  tehty kelaus jättää puskuriin vanhaa ääntä, joskin vähemmän.

### Avoimet kysymykset

1. **Toimiiko uuden moottorin `load()` + `play()` fyysisellä iPhonella?** Simulaattorissa saman
   elementin `play()` onnistui `load()`:n jälkeen. Uusien elementtien `play()` hylättiin
   (`NotAllowedError`). Laitteen soittolupakäytäntö voi poiketa simulaattorista.
2. **Onko käynnistyksen 10,7–21,3 ms:n jäännösero kuultava?** M1:ssä +21 / +21 ms kuultiin
   epätahdissa. Ero näkyy sekä mediakelloissa että renderöidyssä äänessä, ja se on 512 kehyksen
   (48 kHz) monikerta. Sen säätämiseen ei löytynyt toimivaa keinoa (ks. kielteiset tulokset).
3. **Yhteinen noin 420 ms:n ero `currentTime`n ja renderöidyn äänen välillä** uuden moottorin
   kelauksen ja jatkon jälkeen. Se on molemmilla raidoilla sama, joten se ei vaikuta raitojen väliseen
   tahtiin. Tuotannossa sointunäyttö seuraa kuitenkin `currentTime`a.
4. Tuotannon CBR-MP3:ien kelaustarkkuutta uudella moottorilla ei ole mitattu.
5. Kolmen raidan tuotantosoitinta ei ole mitattu tällä tavalla. Logiikka on sama, joten sama mekanismi
   on todennäköinen.

### Tapahtumaketju nykyisessä soittimessa

1. **Soita.** Pakotettu tahdistus kelaa pysäytetyn kitaran taustan kohtaan ennen `play()`-kutsua.
   Jo tämä voi jättää kitaran puskuriin vanhaa ääntä (B3: −75 ms).
2. **Toiston aikana** `StemAligner` vertaa mediakelloja. Kun ero ylittää 120 ms:n rajan, se
   kirjoittaa kitaran `currentTime`-arvon (korjauskelaus).
3. **WebKit** merkitsee kitaran puskurin tyhjennettäväksi ja siirtää lukukohdan vanhimpaan
   kehykseen. Kitara kuuluu nyt jopa noin sekunnin väärästä kohdasta, mutta `currentTime` näyttää
   uutta kohtaa.
4. **Tahdistin** näkee mediakellot kohdakkain. Kuultava ero jää voimaan. Jos mediakellojen ero
   ylittää rajan uudelleen, uusi korjauskelaus arpoo eron uudelleen (B1 ja B4: viisi korjausta
   kelauksen jälkeen, poikkeama yhä noin +945 ms).
5. **Käyttäjän kelaus.** Tausta kelataan ja kitara pakotetusti perään. Kummankin puskuri
   tyhjennetään erikseen, ja poikkeama on raidoilla eri suuri (WAV B2: tausta +853 ms).
6. **`pendingSeek` jää voimaan** (1 ms:n ehto, iOS raportoi 60,009 s). Tauko → Soita aloittaa
   vanhasta kelauskohdasta. Kappale hyppää taaksepäin, ja uusi kelaus arpoo poikkeaman jälleen uudelleen.

### Kokeet B1–B4 (simulaattori, vakiokoe)

*Poikkeama* = renderöity ero − mediakellojen ero + tunnettu siirto (synteettisessä 40 ms). 0
tarkoittaa, että kuultava ääni vastaa mediakelloja. Vain luotettavat mittaukset. Arvot ovat
millisekunteja, ja kukin rivi on yksi vakiokoe.

| Koe | Lähde ja tila | Käynnistys: media / poikkeama | Kelauksen jälkeen | Tauko → Soita | Korjauskelaukset (kelaus / jatko) | Taaksehyppy |
| --- | --- | --- | --- | --- | --- | --- |
| B1 | MP3, tahdistin käytössä | +10,7 / +10,6 | ei luotettavaa mittausta | ei luotettavaa mittausta | 5 / 3 | 74,4 → 60 s |
| B2 | MP3, tahdistin pois | −10,7 / 0 | ¹ / 0…+949 | ¹ / −2160 (VBR-kelaus) | 0 / 0 | 74,4 → 60 s |
| B2 | WAV, tahdistin pois | −10,7 / 0 | ¹ / +853 | ¹ / 0 | 0 / 0 | 74,4 → 60 s |
| B3 | MP3, ei korjauskelauksia | +10,7 / −75 | ¹ / +967…+973 | ei luotettavaa mittausta | 0 / 0 | 74,5 → 60 s |
| B4 | synteettinen +40, tahdistin käytössä | +10,7 / +10,7 | −262…−64 / +943…+949 | −131…−64 / +925…+931 | 5 / 3 | 44,4 → 30 s |

¹ B2:ssa kitaraa ei kelata (ei tahdistinta), ja B3:ssa sen pakotettu tahdistus jää tekemättä
`pendingSeek`-virheen vuoksi. Mediakellojen ero on siksi kymmeniä sekunteja. Poikkeama kertoo silti
kelatun taustan puskurin tilan.

### Kielteiset tulokset

- **Uudet audioelementit jokaisessa siirto-operaatiossa:** ohjelmallinen `play()` hylättiin ilman
  uutta painallusta (`NotAllowedError`). Hylätty.
- **Jäännöseron hienosäätö `playbackRate`-arvolla** (0,98, `preservesPitch` päällä ja pois): kahdessa
  ajossa kolmesta mediakello hyppäsi 1,2–1,4 s ja poikkeama oli −427…−440 ms. Haitallinen, poistettu.
- **Tahdistimen 120 ms:n toleranssia ei muutettu.** Poikkeamat ovat satoja millisekunteja ja syntyvät
  kelauksista. Tiukempi raja lisäisi korjauskelauksia ja sitä kautta poikkeamia.

## Korjausehdokas: uusi moottori

`&moottori=uusi`, vain testisivulla (`freshStart` tiedostossa `KaksiraitaTesti.tsx`). Tuotannon
soitin ei muutu.

- **C1, hallittu aloitus.** Jokainen Soita, jatko ja kelaus pysäyttää molemmat raidat ja kutsuu
  `load()` (ei ensimmäisellä kerralla). Sitten molemmat kelataan samaan kohtaan, ja moottori odottaa,
  että kumpikin on valmis (`readyState ≥ 1`, ei `seeking`, kohta ±0,25 s). Vasta sitten molemmille
  kutsutaan `play()`. `load()` luo elementille uuden mediasoittimen ja äänitapin, joiden puskuri on
  tyhjä. Elementti säilyttää `MediaElementSource`-kytkentänsä ja soittoluvan.
- **C2, ei korjauskelauksia.** Toiston aikana raitoja ei kelata. `StemAligner`ia ei käytetä.
- **C3, jatko ja kelaus.** Tauko tallentaa pysäytyskohdan, ja Soita jatkaa siitä. Uusi kelaus
  ohittaa aiemmat: jokainen operaatio saa uuden pyyntötunnisteen, ja vanhentunut aloitus keskeytyy
  ennen `play()`-kutsua. Jos kelaus ei valmistu 5 sekunnissa, toistoa ei aloiteta. Käyttäjä näkee
  viestin ”Kelaus ei valmistunut. Paina Soita uudelleen.”
- **C4, Web Audio -moottori säilyy.** `SongGainMixer`, PR #92:n AudioContext-palautus ja tasot ovat
  ennallaan.

Tulokset simulaattorissa, lopullinen käännös `59889d8823cb` (vakiokoe):

| Lähde | Käynnistys: media / poikkeama | Kelauksen jälkeen | Tauko → Soita | Korjauskelaukset | Taaksehyppy |
| --- | --- | --- | --- | --- | --- |
| WAV | −10,7 / 0,0 | −21,3 / 0,0 | −21,3 / 0,0 | 0 | ei (tauko 74,327 s → jatko 74,327 s) |
| synteettinen +40 | −21,3 / 0,0 (renderöity −61,3) | −10,6 / 0,0 (−50,7) | −10,7 / 0,0 (−50,7) | 0 | ei (44,345 → 44,345 s) |
| MP3 (VBR), käännös `880eec2b66e3` | −22 / +0,5…+0,8 | −21,5 / −360 | −21…+23 / +75…+120 | 0 | ei |

Sama moottori ilman myöhemmin poistettua hienosäätöä (käännös `880eec2b66e3`) antoi WAVilla ja
synteettisellä aineistolla poikkeaman 0,0 kaikissa vaiheissa. Aloitus kesti simulaattorissa
70–200 ms painalluksesta.

Uusi moottori ei poista käynnistyksen jäännöseroa (0, ±10,7 tai ±21,3 ms). Se näkyy sekä
mediakelloissa että renderöidyssä äänessä. VBR-MP3:n kelausvirhettä se ei myöskään korjaa, koska
virhe on tiedostossa: tarkka kelaus vaatii CBR-MP3:n tai WAVin.

**Arkkitehtuurivaihtoehto (ei toteutettu):** jos fyysinen iPhone osoittaa, että jäännösero on
kuultava tai että `load()`-polku ei toimi laitteella, HTMLAudioElement-pohjainen toisto ei riitä.
Silloin vaihtoehto on purkaa raidat `AudioBuffer`eiksi ja käynnistää ne `AudioBufferSourceNode`illa
samalla `start(when, offset)`-hetkellä. Se antaa näytetarkan kohdistuksen, mutta 3:53 min stereo-
raita vie noin 90 Mt muistia (48 kHz, float32), ja purku vie aikaa. Tämä vaatii erillisen suunnitelman.

## H1:n latausvika ja korjaus (18.11.2026)

Fyysisen iPhonen testi H1 (WAV, uusi moottori, esikatselu) epäonnistui:
- Käynnistys onnistui, ja mediakellojen ero oli vakaasti noin −21,3 ms.
- Mittaukset epäonnistuivat, koska WAV-referenssien lataus palautti HTTP 503 -virheen.
- Kelaus kohtaan 1:00 epäonnistui, eivätkä uusintayritykset palauttaneet toistoa.

H1 ei siis kertonut tahdistuksesta mitään.

### 503:n alkuperä (vahvistettu)

- **Cloudflaren vastaus, ei selain.** Virheen sai toistettua Macilta `curl`illa ilman selainta.
  - Vastaus: `HTTP 503`, `server: cloudflare`, runko `error code: 1102`. Koodi 1102 tarkoittaa, että Worker ylitti resurssirajansa.
  - Selaimen resurssirajat tai mittauskoodin kuorma eivät näy HTTP-tilakoodeina.
- **Syy on äänifunktiossa** `functions/assets/audio/[[path]].ts`. Se lukee koko tiedoston muistiin (`response.arrayBuffer()`) jokaista Range-pyyntöä varten ja palauttaa siitä palan.
- **Mittaus esikatselusta:**

  | Pyyntö | Onnistui |
  | --- | --- |
  | 23 Mt:n WAV, Range-pyynnöt (myös peräkkäin, ilman rinnakkaisuutta) | 24/36 |
  | 23 Mt:n WAV, koko tiedosto ilman Rangea (välitetään virtana) | kaikki |
  | Tuotannon 5,6–5,7 Mt:n MP3-raidat, Range-pyynnöt | 40/40 |
  | Testisivun 5 Mt:n MP3, Range-pyynnöt | 11/12 |

- **Toistomoottorin latausvirhe on seuraus, ei syy.** Kun `load()` tai mittaus tekee Range-pyynnön ja funktio vastaa 503, elementti saa `error`-tapahtuman.

### Pyynnöt ennen korjausta

Mitattu simulaattorissa paikallisella palvelimella, 60 s:n vakiokoe, WAV, uusi moottori, mittausväli 2 s.

- **68 WAV-pyyntöä yhteensä.**
- **Jokainen `load()`:** 3–4 Range-pyyntöä raitaa kohden (`bytes=0-1`, `bytes=0-`, loppupää ja yksi pala).
- **Jokainen mittaus:** kaksi noin 707 kt:n Range-pyyntöä, yksi kummallekin referenssille. Mittaukset hakivat siis referenssiä verkosta joka kerta.
- **Onnistumisen todennäköisyys:** kun Range-pyynnöistä onnistuu noin kaksi kolmesta, kahden raidan `load()` (8 pyyntöä) onnistuu kokonaan vain noin 4 %:n todennäköisyydellä. H1:n osoitteessa ollut `&mittausvali=2000` kaksinkertaisti mittauspyynnöt.
- **Referenssin otsakehaun virhe jäi välimuistiin.** Yksi epäonnistunut otsakehaku esti kaikki myöhemmät mittaukset.

### Kun yksi raita ei lataudu

Tarkistettu simulaattorissa: kitaran WAV vastasi 503, tausta latautui.

- **Uusi moottori:** kitara sai `error`-tapahtuman heti, mutta Soita odotti silti 5 s. Viesti ”Kelaus ei valmistunut” oli harhaanjohtava.
- **Nykyinen moottori:** kitaran `play()` hylättiin (`NotSupportedError`), ja viesti oli yleinen ”Toisto epäonnistui”. Virhetilassa oleva elementti ei toipunut uusista painalluksista.

### Todennäköinen tapahtumaketju H1:ssä

1. Ensimmäiset pyynnöt onnistuivat, ja käynnistys toimi.
2. Mittausreferenssin otsakehaku sai 503:n. Virhe jäi välimuistiin, joten kaikki mittaukset epäonnistuivat.
3. Kelaus kutsui `load()`:n, joka teki uudet Range-pyynnöt. Ne saivat 503:n, elementti meni virhetilaan, ja toisto pysähtyi kohtaan 1:00.
4. Jokainen uusintayritys teki uudet Range-pyynnöt, joista jokin epäonnistui taas.

Laitteen raporttia ei ole käytetty, joten ketju on päätelty vasta simulaattorin ja Cloudflaren mittauksista.

### Korjaus (vain testisivu)

- **WAV ladataan kerran kokonaan ilman Rangea** (`lataus.ts`). Cloudflare välittää tällaisen vastauksen virtana, joten funktio ei kuormitu.
  - Palvelinvirheet ja verkkovirheet uusitaan: 3 yritystä, väleinä 1 s ja 3 s.
  - Jos tavuja ei tule 20 sekuntiin, yritys keskeytetään ja uusitaan.
  - Puuttuvaa tiedostoa (404) ei uusita.
- **WAV-tila soittaa muistikopiosta** (Blob-osoite). Mittausreferenssi luetaan samasta Blobista. Käynnistys, kelaus, jatko ja mittaukset eivät siis tee yhtään verkkopyyntöä. `&lataus=verkko` palauttaa PR #100:n verkkotoiston vianetsintää varten.
- **MP3-tila soittaa yhä verkosta kuten tuotanto,** mutta sen mittausreferenssit ladataan samalla tavalla kerran.
- **Epäonnistunutta latausta ei jäädytetä.** Mittaukset eivät kuitenkaan käynnistä uusia latauksia lopullisen virheen jälkeen, ettei vikatilassa synny pyyntötulvaa. Uusi yritys tehdään vain Yritä uudelleen -painikkeesta.
- **Latauksen tila näkyy:** kummankin raidan edistyminen megatavuina, uusintayritykset ja virheen syy.
  - WAV-tilassa Soita, kelaus ja vakiokoe ovat pois käytöstä, kunnes molemmat raidat ovat ladattu.
  - Virhe näytetään hälytyksenä, jossa on Yritä uudelleen -painike.
- **Verkosta soitettavan raidan latausvirhe näkyy heti** (`error`-tapahtuma):
  - Toinen raita pysäytetään, eikä se jää soimaan yksin.
  - Uusi moottori ei odota 5 sekuntia.
  - Seuraava Soita lataa virhetilassa olevan elementin uudelleen. Tämä koskee molempia moottoreita.
- **Ei muutettu:**
  - tahdistusarkkitehtuuri ja uuden moottorin toistologiikka
  - tuotannon äänifunktio ja tuotantosoitin.

Oikea korjaus suurille tiedostoille olisi funktio, joka välittää pyydetyn alueen lukematta koko tiedostoa. Se on tuotantomuutos, eikä se kuulu tähän PR:ään.

### Tulokset korjauksen jälkeen

**iOS-simulaattori** (iPhone 16 Pro, iOS 27.2). Paikallinen palvelin jäljittelee vikoja: 503 kaikille Range-pyynnöille tai yhdelle raidalle, sekä viivästetty vastaus.

| Koe | Vika | Tulos |
| --- | --- | --- |
| S1, WAV, uusi moottori, vakiokoe, mittausväli 2 s | Kaikki Range-pyynnöt 503 (kuten Cloudflare) | Koko koe toimi **kahdella pyynnöllä**: kumpikin WAV kerran, ilman Rangea. Ennen korjausta pyyntöjä oli 68. Renderöity ero oli sama kuin mediakellojen ero joka vaiheessa (+10,7 / −21,3 / −21,3 ms). 16 luotettavaa mittausta 23:sta, ei virheitä. |
| S2, WAV | Kitara 503 aina | Kolme yritystä (0 s, 1 s, 4 s), sitten virhe: ”Äänitiedoston lataus epäonnistui: kitara (HTTP 503 (3 yritystä)). Toistoa ei voi aloittaa.” Soita pois käytöstä, painallus ei tee mitään. Vian poistuttua Yritä uudelleen latasi kitaran yhdellä pyynnöllä, ja toisto alkoi 92 ms Soita-painalluksesta. |
| S3, WAV | Kitaran vastaus viivästyy 4 s | Edistyminen näkyi (”kitara 0,0 / ? Mt”), ja painikkeet olivat pois käytöstä. Lataus valmistui 4,05 s:ssa, ja toisto alkoi 70 ms painalluksesta. |
| S4, MP3 verkosta, uusi moottori | Kitaran MP3 503 aina | Virhe näkyi heti sivun latauduttua. Soita vian aikana antoi latausvirheen 66 ms:ssa: ei 5 s:n odotusta, eikä tausta jäänyt soimaan. Vian poistuttua seuraava Soita latasi uudelleen, ja toisto alkoi 216 ms:ssa. |
| S5, MP3 verkosta, nykyinen moottori | Kitaran MP3 503 aina | Soita vian aikana: `load()`-uusinta, kitaran `play()` hylättiin, ja kumpikin pysäytettiin 144 ms:ssa. Tausta ehti soida noin 50 ms. Vian poistuttua toisto alkoi normaalisti. |

**Selaintestit** (Chromium, työpöytä ja puhelin): `tests/e2e/kaksiraitatesti-lataus.spec.ts`, 7 testiä.

- WAV ladataan kerran ilman Rangea. Käynnistys, mittaukset, kelaus ja jatko eivät tee äänipyyntöjä.
- 503 kahdesti, sitten onnistuu.
- Pysyvä 503 ja Yritä uudelleen.
- Viivästynyt ja pysähtynyt vastaus.
- Verkosta soitettavan raidan 503 molemmilla moottoreilla.
- MP3-tilan referenssivirhe: toisto toimii, eikä mittaus lataa uudelleen.

**Yksikkötestit** (`tests/kaksiraitatesti-lataus.test.ts`):

- `loadWhole`: uusinnat, 404, aikaraja, pysähtynyt virta ja vajaa tiedosto.
- `OnceLoader`: yksi lataus, epäonnistunut ei jää välimuistiin.
- `blobReference`: lukee ikkunat Blobista, eikä epäonnistunut otsakehaku jäädy.

## Pakatut toistotiedostot (MK-20261118-03, 18.11.2026)

**Lähtötilanne, fyysinen iPhone H2** (WAV, uusi moottori, kerran muistiin ladattu):
- Lataus onnistui ja vei noin 11 s (46,1 Mt).
- Renderöity ero oli useimmissa luotettavissa mittauksissa noin −16 ms.
- Kelaus ja Tauko → Soita toimivat, ja kuulohavainnot olivat myönteiset.
- Äänen ja mediakellon välillä oli noin 425 ms:n yhteinen poikkeama.
- Käynnistyksestä ei saatu luotettavaa mittausta (intro 0–14 s on pelkkää kitaraa).

**Kysymys:** voiko pakattu tiedosto lyhentää latausta ja pienentää muistia ilman, että kohdistus heikkenee?

### Vaihe A: koodaus ja kohdistus (Mac, Applen dekooderi)

- **Lähde:** samat WAVit. 0–120 s on koodattu testisivun WAVeista ja täyspitkä alkuperäisistä täysistä WAVeista (SHA-256 `191902b5…7e88`, `4ccb82cb…03d0`).
- **Mittaus:** purettu tiedosto paikannettiin lähteestä ristikorrelaatiolla 6–9 kohdassa (`tools/kaksiraitatesti-pakkaus.mts`).

| Muoto | Koko 0–120 s / koko kappale (raita) | Kooderin viive ja täyte | Purettu pituus | Siirtymä lähteeseen | Kitara − tausta | SNR kitara / tausta |
| --- | --- | --- | --- | --- | --- | --- |
| WAV 16 bit (vertailu) | 23,0 Mt / 44,8 Mt (ei mahdu Pagesiin) | – | sama | 0 | 0 | – |
| AAC-LC 192 kbit/s, M4A (Applen kooderi) | 3,0 Mt / 5,8 Mt | 2112 + 960 näytettä, `iTunSMPB` | täsmälleen sama | ≤ 0,01 näytettä | ≤ 0,01 näytettä | 34,5 / 29,3 dB |
| MP3 CBR 192 kbit/s (LAME 4.0) | 2,9 Mt / 5,6 Mt | 576 + 576 näytettä, LAME-otsake | täsmälleen sama | ≤ 0,03 näytettä | ≤ 0,03 näytettä | 27,9 / 26,2 dB |
| Sunon MP3 (VBR, vain vertailuun) | – / 5,2–5,3 Mt | 576, LAME-otsake | 13,5 ms pidempi | < 0,3 näytettä | < 0,3 näytettä | – |

- **Viive ja täyte:** kummankin kooderin viive ja täyte tunnistetaan ja poistetaan. Purettu tiedosto alkaa lähteen ensimmäisestä näytteestä ja on näytteen tarkkuudella sen pituinen.
- **Keskinäinen kohdistus:** koodaus ei siirrä raitoja toisiinsa nähden.
- **Laatu:** SNR mittaa aaltomuodon eroa, ei kuulohavaintoa.
  - Samalla bittinopeudella AAC:n jäännöskohina on 3–6 dB pienempi kuin MP3:n.
  - Tuotannon kappaleraidat ovat MP3 CBR 192 kbit/s, joten molemmat ovat vähintään tuotannon tasoa ja riittävät kitaraharjoitteluun.
  - Kuuntelutestiä ei ole tehty.
- **Selainten ero:**
  - M4A:ssa ei ole edit list -taulukkoa. Applen soitin lukee viiveen `iTunSMPB`-tiedosta, mutta Chromium ei kelauksen jälkeen. Chromiumissa AAC:n yhteinen poikkeama on kelauksen jälkeen noin +45 ms (= 2112 näytettä) ja MP3:n noin +23 ms.
  - Poikkeama on molemmilla raidoilla sama, joten raitojen keskinäinen ero on 0.
  - Simulaattorin WebKitissä tätä eroa ei ole (vaihe C).

### Vaihe B: lataus ja muisti

**Latausaika (Chromium).** Verkko rajoitettiin H2:n nopeuteen: 4,19 Mt/s (46,08 Mt / 11 s) ja viive 30 ms (`tests/e2e/kaksiraitatesti-latausmittaus.spec.ts`, ajetaan pyydettäessä). WAV-tilan tulos 11,3 s vastaa H2:n havaintoa, joten olosuhde on kalibroitu.

| Tila | Ladattu | Siirto | Blob | Lähde → metadata | Soita käytössä sivun avaamisesta | Painallus → toisto |
| --- | --- | --- | --- | --- | --- | --- |
| WAV 0–120 s | 46,1 Mt | 11,0–11,1 s | 15–21 ms | 59 ms | 11,3 s | 222 ms |
| AAC 0–120 s | 6,0 Mt | 1,48 s | 1–2 ms | 44 ms | **1,6 s** | 38 ms |
| MP3 CBR 0–120 s | 5,8 Mt | 1,42 s | 1–2 ms | 48 ms | **1,6 s** | 36 ms |
| AAC koko kappale (3:53) | 11,6 Mt | 2,80 s | 2–3 ms | 75 ms | **3,0 s** | 43 ms |
| MP3 CBR koko kappale | 11,2 Mt | 2,73 s | 3–5 ms | 85 ms | **2,9 s** | 23 ms |

- **Ajan erittely:** siirto, Blobin luonti ja toiston valmistelu (lähde asetettu → `loadedmetadata`) mitataan erikseen. Erillistä purkuvaihetta ei ole: mediaelementti purkaa ääntä soiton aikana.
- **Mittausreferenssit** (WAV, vain mittausta varten) ladataan vasta toistotiedostojen jälkeen, eivätkä ne vaikuta Soita-aikaan.

**Muisti (iOS-simulaattori).** WebKit-prosessien `phys_footprint` (`footprint`), yksi välilehti, `&mittaus=pois` (ei WAV-referenssejä).

| Tila | WebContent, huippu | Networking (Blobit), huippu | GPU (media), huippu | Yhteensä soiton aikana |
| --- | --- | --- | --- | --- |
| WAV 0–120 s | 195 Mt | 124 Mt | 86 Mt | 268 Mt |
| AAC 0–120 s | 82 Mt | 58 Mt | 74 Mt | 240 Mt |
| AAC koko kappale | 96 Mt | 66 Mt | 74 Mt | 239 Mt |
| MP3 CBR koko kappale | 95 Mt | 65 Mt | 72 Mt | 239 Mt |

- **Lataushuippu:** WebContentin huippu syntyy latauksen aikana, kun tavut kerätään ja Blob luodaan. Se on noin 2,9 × ladattu data.
- **Täyspitkä WAV:** 89,6 Mt ei mahdu Pagesiin. Arvio samalla suhteella on noin 320 Mt WebContent-huippua ja noin 190 Mt Networking-huippua. Täyspitkä WAV ei ole käytännöllinen yhdellä latauskerralla.
- **Täyspitkä pakattu:** sen muistinkulutus on lähes sama kuin 0–120 s:n pakatun.
- **Simulaattori ei ole laite.** Arvot ovat suhteellisia vertailuja, eivät iPhonen absoluuttisia lukuja.

### Vaihe C: tahdistusregressiot

**iOS-simulaattori**, laaja vakiokoe (`&koe=laaja`, mittausväli 2 s):
1. Soita, 25 s
2. Kelaus kohtaan 1:00, 15 s
3. Tauko 3 s, Soita, 15 s
4. Kaksi peräkkäistä kelausta (0:30 ja sekunnin päästä 1:30), 15 s.

Kaikki tilat 0–120 s.

| Lähde | Renderöity ero: alku / kelaus / jatko / kaksoiskelaus | Renderöity − mediakellot | Yhteinen poikkeama (media − renderöity): alku / kelausten jälkeen | Luotettavia mittauksia | Virheet |
| --- | --- | --- | --- | --- | --- |
| WAV | +21,3 / −10,7 / +21,3 / +21,3 ms | 0,0 ms kaikissa | −23…−15 / −280…−271 ms | 21/29 | ei |
| AAC | −21,3 / −21,3 / −21,3 / −21,3 ms | 0,0 ms kaikissa | −25…−16 / −281…−272 ms | 21/29 | ei |
| MP3 CBR | −21,3 / −10,7 / −10,7 / −21,3 ms | 0,0 ms kaikissa | −25…−15 / −281…−271 ms | 21/29 | ei |

- **Kaikilla lähteillä:**
  - Tauko → Soita jatkoi pysäytyskohdasta.
  - Kaksoiskelaus päätyi kohtaan 1:30.
  - Korjauskelauksia ei tehty, eikä kelaus tehnyt verkkopyyntöjä.
- **Jäännösero:** raitojen ero (0 / ±10,7 / ±21,3 ms) on sama aloituksen jaksotus kuin aiemmin. Se näkyy myös mediakelloissa, eikä se riipu koodekista.

**Chromium** (`tests/e2e/kaksiraitatesti-pakattu.spec.ts`, työpöytä ja puhelin):
- AAC ja MP3 CBR: renderöity − mediakellot = 0,0 ms aloituksessa, kelauksessa, jatkossa ja kaksoiskelauksessa.
- Sivu tekee neljä äänipyyntöä (2 toisto, 2 referenssiä) ilman Rangea, eikä yhtään sen jälkeen.
- Täyspitkä AAC: kelaus kohtaan 3:40 ilman verkkopyyntöjä.

### Vaihe D: jatkoehdokas

**AAC-LC 192 kbit/s (Applen kooderi, M4A), koko kappale, ladataan kerran muistiin.**

| Tavoite | Tulos |
| --- | --- |
| Soita käytössä ≤ 3 s (H2:n verkkonopeus) | 0–120 s: 1,6 s ✓. Koko kappale: 3,0 s, rajalla. Laitteella sivun lataus lisää aikaa, joten tavoite voi ylittyä. |
| Renderöity raitojen ero ≤ 25 ms | ≤ 21,3 ms ✓ (simulaattori) |
| Renderöity − mediakellot ≤ 5 ms | 0,0 ms ✓ (simulaattori ja Chromium) |
| Kelaus ja jatko eivät jätä pysyvää epätahtia | ✓, myös kaksoiskelaus |
| Ei toistuvia verkkolatauksia kelauksessa | ✓ (0 pyyntöä) |
| Ei merkittäviä laatuongelmia | Tuotannon MP3:n tasoa tai parempi (SNR). Kuuntelu tehdään laitetestissä. |

**Perustelut:**
- Tahdistus on simulaattorissa identtinen WAVin kanssa, ja yhteinen poikkeama on sama.
- Samalla bittinopeudella AAC:n jäännöskohina on 3–6 dB pienempi kuin MP3:n.
- Applen soitin poistaa kooderin viiveen myös kelauksen jälkeen.
- Koko kappaleen muistihuiput ovat noin puolet 0–120 s:n WAVin huipuista.

MP3 CBR 192 kbit/s on tulosten perusteella lähes yhtä hyvä varavaihtoehto. Chromiumissa sen yhteinen poikkeama on pienempi (+23 vs. +45 ms), ja se toimii laajimmin eri selaimissa.

**Riskit:**
- Koko kappaleen Soita-aika on H2:n verkossa tavoitteen rajalla. Jos laite ylittää 3 s, vaihtoehdot ovat pienempi bittinopeus (160 kbit/s ≈ 2,5 s) tai lataus osissa. Osissa lataus on erillinen suunnitelma.
- Chromiumin +45 ms:n yhteinen poikkeama kelauksen jälkeen ei koske iPhonea, mutta koskee muita selaimia, jos ehdokas viedään tuotantoon.

### Avoin asia: noin 425 ms:n yhteinen poikkeama

H2:ssa ääni ja mediaelementin aikajana erosivat noin 425 ms, ja ero oli molemmilla raidoilla sama.

| Mittaus | Yhteinen poikkeama kelauksen jälkeen |
| --- | --- |
| H2, laite | noin 425 ms |
| Simulaattori, verkkotoisto | −420 ms |
| Simulaattori, muistitoisto (WAV, AAC, MP3) | −276 ms |
| Simulaattori, aloitus | −20 ms |

Poikkeama syntyy `load()`:n ja kelauksen jälkeen. Se ei vaikuta raitojen keskinäiseen tahtiin, mutta vaikuttaa kaikkeen, mikä seuraa `currentTime`a (sointunäyttö, harjoituksen aikajana). Mittarin laskentaa ei ole muutettu. Asia pidetään erillisenä, ja sitä ei ole korjattu tässä.

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
- `tests/e2e/kaksiraitatesti-moottori.spec.ts` (uusi moottori, Chromium, työpöytä ja puhelin):
  - käynnistys, kelaus ja Tauko → Soita: renderöity ero = mediakellojen ero − 40 ms ±1,5 ms, ei
    korjauskelauksia
  - Tauko → Soita jatkaa pysäytyskohdasta eikä palaa vanhaan kelauskohtaan
  - tauolla tehty kelaus: seuraava Soita alkaa kelauskohdasta
  - kolme peräkkäistä kelausta, joista kaksi kesken edellisen: vain viimeisin toteutuu
  - kelaus ei valmistu (`seeking` pysyy totena): toistoa ei aloiteta, virheilmoitus, seuraava
    Soita toimii
- `tests/kaksiraitatesti-lataus.test.ts` ja `tests/e2e/kaksiraitatesti-lataus.spec.ts`: lataus ja
  latausvirheet (ks. H1:n latausvika). Selaintestit ajetaan sarjassa, koska jokainen WAV-sivu lataa 46 Mt.
- `tests/e2e/kaksiraitatesti-pakattu.spec.ts`: AAC ja MP3 CBR. Lataus kerran ja referenssit sen jälkeen,
  renderöity ero = mediakellot neljässä vaiheessa, ei verkkopyyntöjä kelauksissa, koko kappale.
  Ajetaan sarjassa.
- `tests/e2e/kaksiraitatesti-latausmittaus.spec.ts`: latausaikojen mittaus H2:n verkkonopeudella, ajetaan
  vain pyydettäessä (`KAKSIRAITA_LATAUSMITTAUS=1`).
- `tools/kaksiraitatesti-pakkaus.mts`: pakatun tiedoston siirtymä, keskinäinen kohdistus ja SNR lähteeseen.
- Mittaustestit ovat kuormaherkkiä: raskaassa rinnakkaisajossa mittaus voi valmistua vasta testin
  aikarajan jälkeen. Tämä näkyi jo pohjahaarassa ja commitilla 95622ef (53/54 samassa ajossa).
  Erikseen ajettuna testit menevät läpi.

## Rajoitukset

- Simulaattori ja työpöytäselain eivät korvaa fyysistä iPhonea. Uuden moottorin hyväksyntä vaatii
  onnistuneen fyysisen iPhonen testin.
- Chromium ei toista iOS:n puskurivirhettä. Selaintestit todentavat uuden moottorin ohjauslogiikan
  ja mittauksen, eivät WebKitin käytöstä.
- WAV-tila kattaa vain kohdan 0–120 s.
- Pages Function lukee koko tiedoston jokaista Range-pyyntöä varten. 23 Mt:n WAVeilla se aiheuttaa 503-virheitä (ks. H1:n latausvika). Siksi WAV-tila soittaa oletuksena muistikopiosta. Muistitoisto eroaa tuotannon verkkotoistosta. Puskurivirhe näkyi kuitenkin simulaattorissa myös muistista soitetulla synteettisellä aineistolla, joten tahdistuksen mittaus on vertailukelpoinen.
- WAV-tila lataa ennen toistoa 46 Mt. Hitaalla yhteydellä tämä vie aikaa.
- Akustisen kappaleen toistuva komppi voi tehdä yksittäisestä mittauksesta epävarman. Epävarmat mittaukset näytetään, mutta niitä ei lasketa yhteenvetoon.
