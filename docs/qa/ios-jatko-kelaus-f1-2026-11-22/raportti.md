# Issue #9 vaihe 2: F1 eli tuore mediasoitin jatkossa ja kelauksessa (22.11.2026)

**Tila:** kokeellinen toteutus, Draft-PR pinottuna PR #155:n päälle. **Toteutus on pysäytetty hyväksymisehtojen
perusteella** (luku 1). Fyysistä iPhone-testiä ei pyydetä. **Issue #9 pysyy NO-GO-tilassa.** Mittausrajoja ei muutettu.

Haara `fix/ios-jatko-kelaus-f1` (pohja `fix/ios-kaynnistys-tahdistus` 168bc78). Lopullinen bundle `366b21f919c2`.

## 1. Hyväksymisehdot

| ehto | tulos simulaattorissa (iOS 27.2) |
|---|---|
| Ei noin sekunnin vanhaa äänipuskuria tauon tai kelauksen jälkeen | **Täyttyy** jatkossa, nopeassa jatkossa, kahdessa peräkkäisessä kelauksessa, tauolla tehdyssä kelauksessa, raidan päälle kytkennässä ja heti käynnistyksen jälkeisessä tauossa: M − R −247…−280 ms, 0 raitaa ≥ +300 ms. **Ei täyty loopin kierroksessa:** +1002…+1009 ms kuten ennen (F1 ei kata sitä). |
| Kolmen raidan keskinäinen tahti | **Täyttyy:** kuuluva K/L − S −68…+25 ms (kylmäkäynnistys −57…−4 ms). Alkuperäisessä −439…+1202 ms. |
| Sointunäytön ja kuuluvan äänen ajoitus raportoidaan erikseen | Raportoitu (luku 5). **F1 heikentää sitä:** näyttö on jatkon ja kelauksen jälkeen 297–468 ms äänen jäljessä, kylmäkäynnistyksessä 36–161 ms. Alkuperäisessä näyttö oli jatkon jälkeen 872–938 ms äänen edellä. |
| Ei uusia pitkäkestoisia jumituksia tai ääniraitojen katoamisia | **Täyttyy:** F1-ajoissa ei yhtään yli 300 ms:n pääsäikeen katkoa, ei virheilmoituksia eikä kadonneita raitoja. Tauko heti käynnistyksen jälkeen (aiempi H7-jumi) ei jumittunut. |
| Oikea jatkokohta | **Ei täysin:** jatko toistaa 88–131 ms jo kuultua kylmäkäynnistyksen jälkeen ja 334–352 ms tuoreen käynnistyksen jälkeen. Alkuperäinen toisti 942–967 ms, ja sen jälkeen jäi pysyvä noin 1 s viive. |
| Ylimääräiset lataukset | **Uusi regressio:** jokainen valmistelu lataa kaikki kolme MP3:a kokonaan (noin 15 Mt). Skenaarioajossa 51–73 pyyntöä ja 92–187 Mt, alkuperäisessä 6–12 pyyntöä ja 15–32 Mt. Tuotannon kaltaiset otsakkeet (ETag) tai `Cache-Control: max-age` eivät auttaneet. |

**Päätös:** F1 poistaa vanhan puskurin ja pitää raidat tahdissa, mutta tuo aikajanavirheen (näyttö ja jatkokohta noin
0,28 s kuuluvaa ääntä jäljessä) ja uuden latausregression. Ohjeen mukaisesti toteutusta ei paikata eikä viedä laitteelle.
Vaihtoehdot ovat luvussa 7.

## 2. WebKit Bug 288879 ja nykyinen havainto

Lähdekoodi luettu WebKitin GitHub-peilistä 22.11.2026. **Tämä on johdonmukainen selitys, ei todennettu juurisyy.**

- **Bug 288879** (”stale audio buffer data plays after seek”, korjattu 7.3.2025, commit 80b4316): GPU-prosessin äänitappi
  merkitsee katkoksen, ja web-prosessin `AudioSampleDataSource` siirtää lukukohdan **ensimmäiseen katkoksen jälkeiseen
  kehykseen**. Vanha ääni ohitetaan.
- **Commit 1774dbef65** (3.4.2026, Bug 311000 ”preservesPitch=true does not work when using AudioContext”, tila REOPENED)
  korvasi `WebAudioSourceProviderCocoa`:ssa `AudioSampleDataSource`-polun suoralla jaetun `CARingBuffer`-puskurin luvulla.
  Uusi `setNeedsFlush()` asettaa lukukohdan **puskurin vanhimpaan kehykseen** (`m_readCount = startFrame`).
  Flush-viesti ei kerro, mistä uusi ääni alkaa. Commit 6a97f27f1c (10.4.2026) lisäsi ylivuodon uudelleentahdistuksen.
- **Yhteys havaintoon:** nykyinen oire on sama kuin Bug 288879:ssä (vanha ääni kelauksen jälkeen), mutta se kulkee eri
  puskurointipolkua ja näkyy myös pelkän tauon jälkeen. Lukukohta vanhimpaan kehykseen selittää vanhan äänen toiston
  ja noin sekunnin viiveen (puskuri ≥ 1 s, pyöristys 65 536 kehykseen).
- **Ei todennettu:** sisältääkö iOS 27.2 commitin 1774dbef65, aiheuttaako tauko katkoksen juuri tapin aikavälivertailun
  kautta, ja miksi raita joskus välttää viiveen. Varmistus vaatisi WebKitin lokit tai Applen vahvistuksen.

## 3. Muutokset (F1)

`harjoittelija/songAudio.ts`:

- `freshTracksAt(elements, at, options)`:
  - Pysäyttää soivat raidat ja kutsuu `load()` vain soineille raidoille.
  - Odottaa kaikkien metatiedot ja kelaa kaikki samaan kohtaan (ei kelausta, jos kohde on alku).
  - Odottaa valmiuden. Palauttaa `valmis | virhe | aikakatkaisu | ohitettu`.
- H7-suoja: `load()` odottaa vähintään `FRESH_LOAD_GUARD_MS` = 100 ms raidan viimeisimmän `play()`-lupauksen täyttymisestä.
- `SEEK_SETTLE_MS` = 250 ms.

`harjoittelija/SongJourney.tsx` (vain Web Audio -tilassa eli iOS:llä; työpöytäselaimet ennallaan):

- **Tauko** valmistelee soineet raidat heti pysäytyskohtaan. Jatko käynnistää ne ilman kelausta.
- **Kelaus soiton aikana** vaientaa raidat heti ja valmistelee 250 ms viimeisestä säätimen siirrosta. Vain viimeisin kohta
  ladataan. Tauko-painike pysyy näkyvissä.
- **Kelaus tauolla** valmistelee uuden kohdan samalla viiveellä.
- **Raidan päälle kytkentä** soiton aikana käynnistää kaikki raidat tuoreina taustan kohdasta (ääni katkeaa noin 0,6 s).
- **Ennallaan:** ensimmäinen käynnistys ja versionvaihdon jälkeinen käynnistys (PR #155), äänenvoimakkuus, MP3:t,
  tahdistin ja loop. PR #92:n lukituksen palautus ei sisälly. Piilotettu sivu pysäyttää ilman valmistelua.

## 4. Mittaukset todellisessa kolmiraitasoittimessa

- **Valjas:** PR #90:n diagnostiikkapalvelin ja `probe.js`, laajennettu skenaarioajuriksi (`valjas/` paikallisessa aineistossa).
  - Ensimmäisen Soita-napautuksen jälkeen ajuri käyttää sovelluksen omia ohjaimia.
  - Mittaa raitakohtaisen kuuluvan kohdan (ristikorrelaatio), mediakellot, sointunäytön muutokset, `load()`-kutsut,
    pääsäikeen katkot (yli 300 ms) ja MP3-pyynnöt tavuineen.
- **Skenaario:**
  1. Kylmäkäynnistys, 8 s
  2. Tauko 3 s ja jatko
  3. Tauko 0,3 s ja jatko
  4. Kaksi kelausta 0,4 s:n välein
  5. Kitara pois 3 s ja päälle
  6. Laulu pois 1 s ja päälle
  7. Tauko, jatko ja välitön tauko (H7)
  8. Kelaus tauolla
  9. Loop ja loppukohta
  10. Versionvaihto ja käynnistys oikealla napautuksella
- **Ympäristö:** iPhone 16 Pro -simulaattori, iOS 27.2. Palvelimella 140–250 ms:n viive jokaiseen äänipyyntöön.
- **Ajot:**

| ajo | koodi | versio | MP3-otsakkeet |
|---|---|---|---|
| b1 | PR #155 (`459c8267b455`) | normaali | `no-store` |
| b2 | PR #155 | akustinen | tuotannon kaltaiset (ETag, ei Cache-Controlia) |
| n1 | F1 (`32d2352a370f`) | normaali | `no-store` |
| n2 | F1 (`509c2cbe2faf`) | normaali | tuotannon kaltaiset |
| n3 | F1 | normaali | ETag ja `max-age=86400` |
| a1 | F1 | akustinen | tuotannon kaltaiset |
| n4 | F1 (`366b21f919c2`, lopullinen) | normaali | tuotannon kaltaiset |

b1:ssä sointunäyttöä ei vielä mitattu.

**Toteutusvirhe ja korjaus.** Bundleissa `32d2352a370f` ja `509c2cbe2faf` päälle kytketyn raidan GainNode jäi 0:aan:
ajastettu uudelleenkäynnistys luki kytkimen vanhasta React-tilasta. Raita soi siis äänettömänä. Ajoissa n2 ja a1 kitaran
gain oli 0 ja ulostulo 0,000. Virhe ei näkynyt tahdistusmittauksessa, koska se mitataan ennen GainNodea. Olemassa
oleva e2e-testi (`song-volume-scales.spec.ts`) löysi virheen. Lopullisessa bundlessa tila luetaan refeistä. Ajossa n4
kitaran gain oli päälle kytkennän jälkeen 0,78 ja ulostulon RMS 0,021.

## 5. Tulokset

Arvot ms. M − R = mediakello − kuuluva kohta, eli positiivinen arvo tarkoittaa, että ääni on jäljessä. Näyttö − ääni on
positiivinen, kun sointunäyttö vaihtuu kuuluvan äänen jälkeen. Hyppy on jatkossa kuultu kohta miinus kohta, joka kuului
tauon hetkellä.

| tilanne | PR #155 (b1, b2) | F1 (n1–n4, a1) |
|---|---|---|
| kylmäkäynnistys: M − R | −23…−18 | −31…−17 |
| kylmäkäynnistys: näyttö − ääni | +105…+161 | +36…+156 |
| jatko: M − R | **+868…+1195** | −280…−271 |
| jatko: kuuluva K/L − S | −439…+46 | −68…+25 |
| jatko: näyttö − ääni | **−910…−872** | **+356…+468** |
| jatko: hyppy, 1. jatko (kylmäkäynnistyksen jälkeen) | **−967…−942** | −131…−88 |
| jatko: hyppy, 2. jatko | +62…+67 (ääni oli jo valmiiksi noin 1 s jäljessä) | **−352…−334** |
| jatko: toisto alkaa painalluksesta | 113–283 | 14–239 |
| kaksi kelausta soiton aikana: M − R | +1001…+1006 | −279…−272 |
| kaksi kelausta: kuuluva K/L − S | +24…+484 | −42…−22 |
| kaksi kelausta: näyttö − ääni | −938 | +379…+431 |
| kaksi kelausta: toisto alkaa viimeisestä siirrosta | – | 265–434 (sis. 250 ms:n odotus) |
| raita päälle: M − R | −278…+1009 | −279…−247 |
| raita päälle: kuuluva K/L − S | **−57…+1202** (laulu 1,2 s muiden edellä) | −46…−4 |
| raita päälle: äänikatko | 9–32 | **551–666** |
| loopin kierros: M − R | +1001…+1048 | **+1002…+1009** |
| pääsäikeen pisin katko | 335 (b2), muuten ei | ei yhtään yli 300 |
| MP3-pyynnöt skenaariossa | 6–12, 15–32 Mt | 51–73, 92–187 Mt |

Näyttö − mediakello oli kaikissa ajoissa +57…+166 ms, mikä vastaa WebKitin `timeupdate`-väliä (noin 250 ms).

- **Eristyskokeet** (kolme elementtiä ilman sovelluksen logiikkaa, sama mittaus):
  - Tuore soitin ilman kelausta antoi −20 ms.
  - Tuore soitin, joka kelattiin ennen ensimmäistä `play()`-kutsua, antoi −275 ms. Siirtymä oli sama kaikilla raidoilla.
  - Kaksi muunnelmaa ei poistanut siirtymää:
    - `play()`+`pause()`-esivalmistelu: −276 ms, ja `play()`-esto palasi (L − S −100 ms).
    - Mediafragmentti `#t=`: −275 ms.
- **Mediakellon siirtymä on siis WebKitin tuoreen soittimen kelauksen ominaisuus,** eikä F1 voi välttää sitä.

## 6. Regressiotestit

- `tests/songAudio.test.ts`: 5 uutta yksikkötestiä `freshTracksAt`-funktiolle.
  - `load()` ennen kelausta, kelaus vasta metatietojen jälkeen samaan kohtaan
  - alusta soitettaessa ei kelausta
  - H7-suoja
  - peruutus
  - kestoraja, virhe ja aikakatkaisu
- `tests/e2e/song-resume-seek.spec.ts`: 5 testiä × desktop ja phone. Raitojen data, kello ja `load()` ohjataan käsin.
  - jatko
  - kaksi kelausta
  - raidan päälle kytkentä
  - H7
  - työpöytäselaimen ennallaan pysyminen
- **Alkuperäistä koodia vastaan:** PR #155:n bundlella `459c8267b455` kaikki 8 F1-testiä epäonnistuivat. Työpöydän
  suojatesti meni läpi.
- `song-start-readiness.spec.ts`: PR #155:n tauon jälkeistä toleranssitestiä ajetaan vain desktop-projektissa (elementtitila).
  iOS-tyylisessä tilassa jatkon kattaa uusi testi.
- `learning-paths.spec.ts`:
  - Päälle kytkennän jälkeinen `play()`-laskuri odottaa nyt uudelleenkäynnistystä.
  - Testin raidoille annetaan data (readyState 4).
  - Testi epäonnistui jo PR #155:n bundlella 4/4 toistossa: valmiusportin lataus-`play()` kirjautui ajoituksesta
    riippuen ylimääräiseksi kutsuksi. Sama testimuutos kuuluisi PR #155:een.

**Koko testisarja bundlella `366b21f919c2`:**

- `npm run lint`: läpi
- `npx vitest run`: 635 läpi
- `npm run check:song-audio`: OK
- `npx playwright test`: 846 läpi, 44 ohitettu, 0 epäonnistui

## 7. Vaihtoehdot (päätettäväksi)

1. **A: Web Audio -kellosta johdettu sijainti** sointunäytölle ja jatkokohdalle.
   - Kuultu kohta = aloituskohta + AudioContextin kellon kulku `play()`-lupauksen täyttymisestä.
   - Simulaattoriajoissa ero kuuluvaan ääneen oli −64…−111 ms (20 käynnistystä ajoissa n1–n4 ja a1, keskimäärin noin −85 ms, hajonta noin ±25 ms).
   - Korjaisi näytön ja jatkokohdan, mutta vakio pitää kalibroida laitteella. Ei korjaa latauksia.
2. **B: MP3:t muistiin kerran** (`fetch` → Blob-URL elementin lähteeksi).
   - `load()` lukisi muistista, joten uudelleenlataukset ja Pages-funktion toistuvat koko tiedoston luvut poistuisivat.
   - Muistia noin 15 Mt versiota kohden.
   - Ensimmäinen soitto joko odottaa koko latausta tai vaihtaa Blobiin myöhemmin.
   - PR #101:n laitetesti H2 käytti Blob-lähdettä toimivasti (WAV).
3. **C: Välimuistiotsakkeet.** Ei riitä: ajossa n3 `max-age`-otsakkeella 61 pyyntöä ja noin 126 Mt.
4. **D: AudioBufferSourceNode-toisto.**
   - Näytetarkka aloitus, sijainti suoraan Web Audion kellosta, saumaton loop, eikä MediaElementSourcen puskuria.
   - Purettuna noin 270 Mt muistia (3 × 3:53 stereo float32) ja purkuaika.
   - Koko toistoarkkitehtuurin vaihto: vaatii erillisen päätöksen.
5. **E: Oma loop** tuoreella käynnistyksellä kohdasta 0 (kelausta ei tarvita, siirtymä −20 ms). Lyhyt katko silmukan
   saumassa. Erillinen pieni muutos, ei riipu muista.

**Suositus:** jos HTMLAudioElement-arkkitehtuuri säilytetään, F1 + A + B yhtenä kokonaisuutena (ja tarvittaessa E). Sen
jälkeen sama simulaattorisarja uudelleen ennen laitetestiä. D on pitkän aikavälin vaihtoehto, jos laitteen muisti riittää.

## 8. Riskit ja avoimet kysymykset

- Laitteella ei ole testattu, salliiko iOS `play()`-kutsun `load()`-kutsun jälkeen ilman uutta painallusta MP3-verkkolähteellä.
- Pages-äänifunktio lukee koko tiedoston jokaista Range-pyyntöä varten. F1 moninkertaistaa nämä luvut.
- Tahdistimen korjauskelaus soiton aikana jättää yhä raidan noin sekunnin jälkeen. F1-ajoissa se laukesi vain loopin kierroksen jälkeen.
- Raidan päälle kytkennän noin 0,6 s:n katko on uusi käyttäytyminen.
- Simulaattori ei ole laite. PR #101:n laitetestissä vastaava yhteinen siirtymä oli noin 425 ms.

## 9. Aineisto

- **Paikallinen aineisto (ei versionhallinnassa):** `test-results/kappaleharjoittelija-ios-2026-11-22/f1-kokeellinen/`
  - Raportit: `tulokset-perus/`, `tulokset-f1/`, `tulokset-f1t/`, `tulokset-f1v/` ja `tulokset-f1x/` (n4).
  - Valjas: `valjas/probe.js`, `server.mjs`, `analyysi.mjs` ja `kooste.mjs`.
  - Eristyskokeet: `eristys/`.
- **Taulukko:** `node valjas/kooste.mjs nimi=raportti-loppu.json[,pyynnot.json] …`
- **Aiemmat raportit ovat ennallaan:**
  - `docs/qa/ios-kaynnistys-issue9-2026-11-22/raportti.md`
  - `test-results/…/vaihe2-juurisyy/`
