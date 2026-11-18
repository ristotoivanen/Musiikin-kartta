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
  Cloudflare Pages hyväksyy enintään 25 MiB:n tiedostot. Aikajana on sama kuin MP3:ssa.
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

## Rajoitukset

- Simulaattori ja työpöytäselain eivät korvaa fyysistä iPhonea. Uuden moottorin hyväksyntä vaatii
  onnistuneen fyysisen iPhonen testin.
- Chromium ei toista iOS:n puskurivirhettä. Selaintestit todentavat uuden moottorin ohjauslogiikan
  ja mittauksen, eivät WebKitin käytöstä.
- WAV-tila kattaa vain kohdan 0–120 s.
- Pages Function lukee koko tiedoston jokaista Range-pyyntöä varten, mikä voi hidastaa WAV-tilan latausta. Tämä on itsessään WAV-tilan mahdollinen sekoittava tekijä.
- Akustisen kappaleen toistuva komppi voi tehdä yksittäisestä mittauksesta epävarman. Epävarmat mittaukset näytetään, mutta niitä ei lasketa yhteenvetoon.
