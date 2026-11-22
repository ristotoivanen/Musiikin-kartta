# Issue #9 vaihe 2: muistilähteet (B), aikaperusta (A) ja arkkitehtuurivaihtoehdot (22.11.2026)

**Tila:** toteutettavuuskokeet, haara `koe/ios-muistilahteet` PR #161:n päällä. Ei julkaisuun. **Issue #9 pysyy NO-GO-tilassa.**
Fyysisiä testejä ei tehty.

**Pysäytysehto täyttyi.** B poistaa toistuvat lataukset, mutta B ja A yhdessä eivät korjaa äänen ajoitusta hyväksyttävästi:

- raitojen keskinäinen tahti (A-T1) ei täyty;
- Web Audio -aikajana pysyy tavoitteessa vain säestyksellä ja vain kesken kappaleen;
- loopin noin 1 s:n virhe jää.

Ohjeen mukaisesti A:ta ei rakennettu tuotteeseen. Raportissa ovat arkkitehtuurivaihtoehdot mitattuine muisti- ja suoritustietoineen.

Vaiheen A tavoitteet kirjattiin ennen mittauksia: `tavoitteet.md`, commit 35227a6.

## 1. Yhteenveto

| kysymys | tulos (iPhone 16 Pro -simulaattori, iOS 27.2) |
|---|---|
| B: poistuuko vanha puskuri muistilähteellä | **Kyllä.** Kaikki 27–33 `load()`-kutsua ajoa kohden luettiin muistista. M − R −272…−280 ms, ei yhtään +1 s:n viivettä. |
| B: verkkolataukset tauossa ja kelauksessa | **Poistuvat.** Muistiin vaihdon jälkeen 0 MP3-pyyntöä (F1:ssä 84 pyyntöä ja 117 Mt samassa ajossa). |
| B: ensimmäisen käynnistyksen viive | Tausta-tavassa 158–211 ms (PR #155:n polku ennallaan). Heti-tavassa 4,1 s noin 4,2 Mt/s:n yhteydellä. |
| B: verkkotavut ensimmäisellä käynnillä | Noin kaksinkertaiset kerran versiota kohden: 30,8 Mt (normaali), 34,1 Mt (akustinen). Uusinnassa ETag-otsakkeella palvelin vastasi 304, ja tavuja siirtyi lähes 0. |
| B: muisti | WebKit-prosessien huippu yhteensä noin +12 Mt F1:een verrattuna. |
| A: Web Audio -aikajana | Säestyksen äänen alkuhetkeen sidottuna säestyksen kohdalla −21…0 ms kesken kappaleen. **Kitara −53…−11 ms, laulu −75…−11 ms, kylmäkäynnistys +101…+159 ms.** A-T1 ja A-T2 eivät täyty. |
| Loop | +1,0 s kaikissa elementtipohjaisissa ajoissa. WebKit kelaa loopissa sisäisesti, mikä tyhjentää puskurin. |
| Raidan päälle kytkentä | Katko lyheni: F1 551–666 ms → B 148–183 ms. |
| PR #155:n kylmäkäynnistys | Säilyy: M − R −15…−22 ms, raitojen ero −41…−7 ms, 158–211 ms painalluksesta. |
| D (AudioBufferSourceNode, koe) | **Aikajana ja raitojen ero 0,0 ± 0,2 ms kaikissa tilanteissa, loop saumaton.** Puskurit 244 Mt (normaali). Valmis soittamaan 4,5 s painalluksesta 4,2 Mt/s:n yhteydellä. |

## 2. B: MP3:t muistiin

### Toteutus (kokeilu)

- `loadTrackBlobs()` (`songAudio.ts`):
  - Lataa raidat `fetch`illä ja luo Blob-URL:t.
  - `release()` vapauttaa ne, kerran.
  - Virheessä jo luodut URL:t vapautetaan.
- `freshTracksAt(..., { source })`: jos raidan lähde eroaa muistilähteestä, raita vaihtaa lähteen. Lähteen vaihto
  käynnistää latausalgoritmin, joten erillistä `load()`-kutsua ei tarvita.
- `SongJourney`:
  - Muistilataus alkaa ensimmäisestä Soita-painalluksesta.
  - Vapautus versionvaihdossa ja soittimen sulkeutuessa. Ajoissa luotiin 6 ja vapautettiin 3 URL:ia: vanha versio vapautettiin, nykyinen jäi käyttöön.
- Tapa valitaan kokeilussa osoitteella `?muistilahde=tausta|heti|pois`. Oletus `pois` on PR #161:n käytös.

### Mittaukset

Palvelimessa tuotannon kaltaiset otsakkeet (ETag, ei Cache-Controlia), 140–250 ms:n viive ja 1,4 Mt/s yhteyttä kohden.
ETagit vaihtuvat jokaisella palvelimen käynnistyksellä, jotta välimuisti on kylmä.

| ajo | tapa | ensimmäinen käynnistys | muistilataus valmis | verkko muistiin vaihdon jälkeen | `load()` muistista | huippumuisti WebContent / Networking / GPU |
|---|---|---|---|---|---|---|
| m1 | F1, ei muistia | 174 ms | – | 84 pyyntöä, 117 Mt | 0/30 | 94 / 59 / 93 Mt |
| m2 | tausta | 158 ms | 3,9 s | **0** (versionvaihtoon asti) | 27/27 | 106 / 75 / 77 Mt |
| bh1 | heti | **4 102 ms** | 3,9 s | 0 | 33/33 | ¹ |
| bt2 | tausta, lämmin välimuisti | 211 ms | 0,13 s (304) | 0 | 27/27 | ¹ |

¹ Ajossa oli referenssi-PCM (noin 173 Mt) mittausta varten. Muistivertailu tehtiin ajoilla m1 ja m2 ilman sitä.

**Havainnot.**

- **Heti-tapa ei säästä tavuja.** Painalluksen avaus-`play()` käynnistää verkkovirran samanaikaisesti, ja vaihto muistiin
  katkaisee sen vasta latauksen jälkeen. Molemmat tavat lataavat ensimmäisellä käynnillä noin kaksinkertaisesti.
  Tausta-tapa on siksi parempi: ensimmäinen käynnistys pysyy nopeana.
- **Muistilähteen virhe kaataa soittimen.** Valjaan oma CSP (`default-src 'self'`) esti `blob:`-median, ja kaikki kolme
  raitaa menivät virheeseen MEDIA_ERR_SRC_NOT_SUPPORTED (ajo `csp-virhe/`).
  - Tuotannossa ei ole CSP:tä, joten tilanne ei synny siellä.
  - Varsinainen toteutus tarvitsee kuitenkin paluun verkkolähteeseen.
- **Muistikustannus on pieni** (noin +12 Mt huippu). Toistuvia latauksia ei ole.

## 3. A: Web Audio -aikajana varsinaisessa soittimessa

- **Menetelmä (valjas, ei tuotekoodia):** jokaisen `play()`-kutsun jälkeen tunnistetaan, milloin lähteen
  analysaattoriin tulee ensimmäinen ei-hiljainen näyte. Hetki muunnetaan AudioContextin kelloon näytetarkasti.
- **Aikajana:** aloituskohta + (kontekstin kello − alkuhetki).
- **Vertailu:** jokaisen raidan renderöityyn kohtaan 1–6 s alkuhetkestä.
- **Aineisto:** ajot bh1, an1 (normaali) ja an2 (akustinen), 21 käynnistystä, joista 17 kesken kappaleen.
- **Simulaattorin viiveet:** `outputLatency` 0 ms, `baseLatency` 2,7–3 ms.

| tilanne | käynnistyksiä | säestys | kitara | laulu |
|---|---|---|---|---|
| kylmäkäynnistys | 4 | +111…+159 | +101…+149 | +127…+138 |
| tauko–jatko | 4 | −21…0 | −53…−11 | −64…−43 |
| toistuva jatko (3 peräkkäin) | 4 | −21…0 | −53…−21 | −75…−32 |
| nopea jatko (0,3 s) | 3 | −21…0 | −43…−21 | −53…−11 |
| kelaus soiton aikana | 3 | −21…0 | −43…−21 | −64…−32 |
| raita päälle | 2 | −21…−11 | −43…−21 | −53…−43 |

**Tulkinta.**

- **Säestys:** säestyksen alkuhetkeen sidottu aikajana seuraa säestystä −21…0 ms:n tarkkuudella kesken kappaleen. Virhe
  kulkee 10,7 ms:n (512 kehyksen) askelin.
- **Kitara ja laulu** ovat 11–75 ms säestyksen jäljessä. Tämä on raitojen välinen ero itse, ei aikajanan virhe.
  Yksi aikajana ei voi osua kaikkiin raitoihin, kun raidat ovat jo 30–75 ms erillään.
  - A-T1 (±25 ms) ei täyty F1:ssä, B:ssä eikä PR #155:ssä.
  - Peräkkäiset `play()`-kutsut ja WebKitin 512 kehyksen askeleet tuottavat eron, eikä elementtipohjaisessa toistossa
    löytynyt keinoa säätää sitä.
- **Kylmäkäynnistys:** säestys alkaa 133 ms (normaali) tai 170 ms (akustinen) hiljaisuudella. Alkuhetken tunnistus on
  siksi myöhässä aina, kun aloituskohta on hiljainen.
- **Mediakellon siirtymä on pysyvä simulaattorissa:** kaikissa tuoreen soittimen kelatuissa käynnistyksissä −271…−281 ms,
  molemmilla versioilla ja kaikissa ajoissa.
  - Laitteella vastaava arvo oli PR #101:ssä noin 425 ms, joten pysyvyyttä laitteella ei ole osoitettu.
  - Kiinteää korjausta ei käytetty.

**Tavoitteet** (A-T3 ja A-T4 arvioitu mittausdatasta, koska A:ta ei rakennettu tuotteeseen):

| tavoite | tulos |
|---|---|
| A-T1 | ei täyty |
| A-T2 | täyttyy vain säestyksellä kesken kappaleen |
| A-T3 | säestykseen sidottu näyttö olisi kesken kappaleen −21…+17 ms (täyttyisi), kylmäkäynnistyksessä +101…+176 ms myöhässä (ei täyty) |
| A-T4 | tauon kohta aikajanasta antaisi kesken kappaleen −21…0 ms (täyttyisi) |

## 4. Muut avoimet toiminnot

- **Loop.**
  - WebKit toteuttaa loopin sisäisellä kelauksella alkuun (seeking/seeked ilman JavaScriptin kelausta). Se tyhjentää
    MediaElementSourcen puskurin, ja kaikki raidat jäävät +1,0 s jälkeen. Tahdistimen korjauskelaukset lisäävät uusia
    tyhjennyksiä.
  - Elementtipohjaisessa toistossa saumatonta korjausta ei löytynyt:
    - Oma uudelleenkäynnistys muistista katkaisisi äänen noin 150–180 ms.
    - Kaksi elementtisarjaa vuorotellen on testaamatta ja monimutkainen.
  - D:ssä loop oli saumaton (luku 5).
- **Raidan päälle kytkentä:** muistilähteellä katko lyheni 551–666 ms:sta 148–183 ms:iin. D:ssä kytkentä olisi pelkkä
  tason muutos ilman katkoa.
- **PR #155:n kylmäkäynnistys säilyy** B:n tausta-tavassa (luku 1).
- **PR #92:n rajapinnat tulevaa yhdistämistä varten:**
  1. `start()` ja `togglePlayback`: PR #92 tarkistaa ja palauttaa AudioContextin Soita-painalluksesta. Tarkistus pitää
     tehdä ennen F1/B-valmistelua ja `play()`-kutsuja.
  2. `pause(false)` piilotuksessa: lukitus ei käynnistä valmistelua.
  3. `SongGainMixer`: B ei muuta sitä.
  4. D:ssä aikajana on kontekstin kello. Jos lukitus jäädyttää kellon (PR #92:n havainto), palautuksen jälkeen lähteet
     käynnistetään uudelleen tallennetusta kohdasta.

## 5. Arkkitehtuurivaihtoehdot

### D1: koko raita AudioBufferiksi (mitattu simulaattorissa, ajo d1)

**Koe:**

- Kolme MP3:a ladattiin, purettiin `decodeAudioData`:lla ja soitettiin `AudioBufferSourceNode`illa samalla
  `start(when, offset)`-hetkellä.
- Tauko pysäyttää lähteet ja jatko luo uudet.
- Aikajana on offset + (kontekstin kello − when).

| mittari | tulos |
|---|---|
| lataus (15,3 Mt, 4,2 Mt/s) | 3,85 s |
| purku | 302, 470 ja 660 ms (säestys, kitara, laulu) |
| valmis soittamaan | 4,53 s painalluksesta |
| puskurit | 3 × 81,5 Mt float32 stereo = 244 Mt (normaali 212 s). Akustinen 233 s ≈ 268 Mt (laskettu). |
| WebContent-prosessin footprint | 44 → 419 Mt, josta valjaan referenssi-PCM noin 92 Mt, eli D noin 280 Mt |
| aikajana − renderöity | 0,0 ± 0,2 ms: kylmäkäynnistys, 3 jatkoa, nopea jatko, kelaus, loop |
| raitojen välinen ero | 0,0 ± 0,2 ms |
| loopin sauma (40–46 s) | 0,0 ms, saumaton |

**Riskit:**

- Muisti, noin 250–300 Mt versiota kohden. iOS voi sulkea välilehden muistin loppuessa erityisesti vanhemmilla laitteilla.
- Ensimmäinen käynnistys odottaa koko latauksen ja purun.
- Versionvaihto vaatii uuden purun ja vanhojen puskurien vapautuksen.
- Lukituksen jälkeinen palautus (PR #92).
- Tahdistin, F1, B ja suurin osa nykyisestä toistologiikasta korvautuvat.
- Toteutusriski keskisuuri. Laitetesti muistista ja purkuajasta tarvitaan ennen täyttä toteutusta.

### Muut arkkitehtuurivaihtoehdot

1. **D2: paloittainen purku** (esim. 30 s:n jaksot ajastetaan peräkkäin).
   - Muisti noin 70 Mt.
   - MP3:n kooderiviive ja täyte palojen rajoilla vaativat limityksen ja trimmauksen, ja virheestä seuraa naksahduksia.
   - Riski korkea. Ei mitattu.
2. **D3: AudioWorklet ja WASM-MP3-purkaja** (suoratoisto rengaspuskuriin).
   - Pienin muisti ja täysi hallinta.
   - Suurin toteutus- ja ylläpitoriski. Ei mitattu.
3. **D4: hybridi.**
   - Ensimmäinen käynnistys elementeillä (B, nopea), ja siirto puskureihin, kun purku on valmis.
   - Kaksi toistopolkua ja siirtymän tahdistus.
   - Riski korkea.
4. **E: Web Audio -reitityksestä luopuminen iOS:llä** (pelkät elementit).
   - Vanhan äänen puskuri on MediaElementSourcen polussa, joten se todennäköisesti poistuisi.
   - Sovelluksen äänenvoimakkuussäädin lakkaisi toimimasta iPhonella, mikä on musiikkitoiminnon muutos.
   - Raitojen tahtia ja looppia ei voi mitata tällä valjaalla, koska kuuluvaa ääntä ei saa Web Audiosta.

### Suositus

D1 on ainoa mitattu vaihtoehto, joka täyttää ajoitustavoitteet ja korjaa loopin. Ennen täyttä toteutusta kannattaa
tehdä erillinen D1-prototyyppi soittimessa, ensin simulaattorisarja molemmilla versioilla ja sitten yksi laitteen muisti-
ja purkuaikatesti erillisellä hyväksynnällä. Jos muisti ei riitä, seuraava vaihtoehto on D2.

F1+B kannattaa säilyttää varavaihtoehtona: se korjaa vanhan puskurin ja lataukset, mutta jättää raitojen eron,
aikajanan ja loopin auki.

## 6. Testit

- **Yksikkötestit** (`tests/songAudio.test.ts`), 3 uutta, vain toimivaksi osoitetuille B:n osille:
  - `loadTrackBlobs`: järjestys ja yksi vapautus.
  - `loadTrackBlobs`: virhe ilman vapauttamattomia URL:eja.
  - `freshTracksAt`: lähteen vaihto muistiin ilman erillistä `load()`-kutsua ja ilman toistuvaa vaihtoa.
- E2E-testejä ei lisätty: B on kokeilutilassa (`?muistilahde=`), ja A:ta ei rakennettu tuotteeseen.
- Koko sarja bundlella `b429568d1e4f` (muistitila oletuksena pois): lint läpi, 638 yksikkötestiä läpi, `check:song-audio` OK, Playwright 846 läpi, 44 ohitettu, 0 epäonnistui.

## 7. Aineisto

- **Paikallinen aineisto (ei versionhallinnassa):** `test-results/kappaleharjoittelija-ios-2026-11-22/b-a-d/`
  - `tulokset-b/`: ajot m1, m2, bh1, bt2, an1 ja an2 sekä muistinäytteet `muisti-*.jsonl`.
  - `tulokset-b/csp-virhe/`: CSP-virheen ajo.
  - `valjas/`: `probe.js`, `server.mjs` (suolatut ETagit ja kaistarajoitus), `ajo.sh`, `muisti.sh` ja analyysit.
  - `arkkitehtuuri-d/`: D1-koe ja tulokset.
- **Analyysikomennot:**
  - B: `node valjas/b-analyysi.mjs raportti.json pyynnot.json muisti.jsonl`
  - A: `node valjas/a-analyysi.mjs raportti.json…`
  - D: `node arkkitehtuuri-d/puskuri-analyysi.mjs puskuri-d1-loppu.json muisti-d1.jsonl`
- **Aiemmat raportit ovat ennallaan.**
