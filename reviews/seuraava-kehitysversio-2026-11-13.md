# Seuraava kehitysversio 13.11.2026: mobiilikorjaukset, pentatoniset melodiat ja kuunteluharjoitukset

Itsenäisesti tehty kehitystyö omistajan poissa ollessa. Mitään ei ole yhdistetty `main`- tai
`beta`-haaraan eikä julkaistu tuotantoon. Kaikki muutokset odottavat katselmointia pull requesteissa.

Merkinnät: **[F]** tarkistettu fakta (git, GitHub, koodi), **[T]** automaattitestillä tai
selainemulaation mittauksella todennettu tulos, **[A]** arvio tai suunnittelupäätös, jota ei ole
todennettu fyysisellä laitteella tai korvakuulolla.

## 1. Lähtötilanne ja käytetyt commitit

- **[F]** `origin/main` = `d62de20` (julkaisu-PR ristotoivanen/Musiikin-kartta#36, merge 13.11.2026).
  `origin/beta` = `48a0af2`. Haarojen tiedostosisältö on identtinen (`git diff origin/beta d62de20`
  on tyhjä); `main` on yhden merge-commitin edellä.
- **[F]** iPhonen äänenvoimakkuuskorjaus ristotoivanen/Musiikin-kartta#35 sisältyy molempiin.
- **[F]** Kaikki kehityshaarat on haarautettu `origin/beta`sta (`48a0af2`), jonka sisältö on sama
  kuin julkaistussa tuotantoversiossa. Näin PR:t kohdistuvat betaan ilman julkaisun merge-commitia.
- **[F]** Paikallinen `git/`-työpuu (`main`, `b04a50f`, 338 committia jäljessä) ja sen
  seuraamattomat tiedostot (`.DS_Store`, `transkriptiot/`) jätettiin koskematta. Työ tehtiin
  erillisissä työpuissa `worktrees/seuraava-versio`, `worktrees/melodiat-p2-p3` ja
  `worktrees/savelkorva-kuuntelu`.
- **[F]** Projektissa ei ole `AGENTS.md`- eikä `CLAUDE.md`-tiedostoa. Ohjeina käytettiin
  READMEa, `harjoittelija/README.md`:tä, `playwright.config.ts`:ää, CI-työnkulkua
  `build-beta-trainer.yml` sekä issueita ristotoivanen/Musiikin-kartta#9, #30 ja #31.
- **[F]** Mobiiliauditoinnin K-tunnukset luettiin alkuperäisestä auditointiraportista
  (Clauden artefakti 13.11.2026, beta `1d7e4c7`). K1 ja K6 korjattiin jo PR:ssä
  ristotoivanen/Musiikin-kartta#33. Tässä työssä käsiteltiin K2–K5 ja K7.
- **[F]** PR ristotoivanen/Musiikin-kartta#34 (vanha julkaisuvalmiusraportti) pidettiin erillään;
  siihen ei koskettu.
- **[T]** Lähtötason testit muuttamattomalla betalla: `npm run check` (lint, typecheck, 284/284
  yksikkötestiä, build vastaa commitoituja tiedostoja), Playwright 270 läpi, 18 ohitettu.

## 2. Toteutetut muutokset työpaketeittain

### Työpaketti 1 – Mobiiliauditoinnin K2–K5 ja K7 (`feature/mobiili-k2-k7`)

| Tunnus | Auditoinnin havainto | Muutos |
| --- | --- | --- |
| K2 | Kiinteä 96 px:n kielisarake vie ~30 % otelaudasta, 4–5 nauhan positio ei mahdu, melodian sisäkkäiset reunukset kaventavat | ≤ 480 px: kielisarakkeessa vain kielen kirjain (30 px; `aria-label` kertoo koko nimen), nauhan vähimmäisleveys 46 → 40 px, otelauta ja melodiaosio ulottuvat kortin sisennyksen yli, melodian otelauta täyttää leveyden. Sävelpisteet (30 px), tekstikoko (13 px) ja rivikorkeus (46 px) ennallaan. |
| K3 | Vaalea teema: soiva tahti 1,60:1 ja 1,14:1, painettu painike hover-tilassa 1,33:1 | Hover vain hiirelle ja tavallisille painikkeille, painettu painike pysyy tummana (11,2:1). Soivan tahdin tekstit vaaleina (5,95:1 ja 6,47:1). `--good` ja `--gold/--wrong` tummemmiksi (≥ 5,0:1 paneelia vasten). Virheellisen valinnan merkintä tummalla otelaudalla 3,3 → 9,7:1. |
| K4 | Soitin ja soiva sointu eri ruuduilla (876–910 px), asteikkokuvan pieni teksti, 16 px:n liukusäädin | Harjoituskartan asetukset avattavaan osaan tahtien jälkeen (puhelimessa aluksi suljettu, tila näkyy otsikossa), soiva sointu ennen osion valintaa, liukusäätimille 44 px:n kosketusalue. Ei pysyvää työkalupalkkia. |
| K5 | Vaaka-asennossa painike ja soiva sävel samassa ruudussa vain 0–3/14 näytteessä | Korkeus ≤ 480 px: tiiviimpi otsikkoalue, vaihevalinta yhdellä rivillä, pelkän mallisoiton otelaudan rivit 36 px (vastattavat otelaudat ennallaan 46 px), otelaudan otsikko vain ruudunlukijalle. |
| K7 | Päävalikko 40 px leveässä näkymässä kosketuslaitteella | `pointer: coarse`: päävalikon ja alavalikon linkit 44 px. |

Lisäksi: mittausskriptit `tools/mobiilimittaus/` (sama menetelmä kuin auditoinnissa) ja
regressiotestit `tests/e2e/responsive.spec.ts`:ään.

### Työpaketti 2 – Pentatonisen positioiden 2 ja 3 melodiat (`feature/pentatoniset-melodiat-p2-p3`, issue #31)

- **Positio 2:** Wayfaring Stranger -alku uudessa käsiasemassa. Kaikki sävelet ovat position 2
  boksissa *samalla sävelkorkeudella ja rytmillä* kuin positiossa 1, joten oktaavisiirtoa ei
  tarvita. Sormitusvaiheessa on avattava, neljän rivin vertailutaulukko position 1 sormitukseen.
- **Positio 3:** oma neljän tahdin melodia ”Korkea vastaus”.
- Toteutus on dataohjattu (`melodyData.ts` + `POSITION_MELODY` `ScaleJourney.tsx`:ssä).
  `MelodyPractice.tsx` sai vain valinnaisen vertailuosion, ei kopiota.
- Opetusjärjestys säilyy: 1 vain asteikko · 2 avattava A/B, tabulatuuri piilossa · 3 koko melodia
  muistista ilman A/B-valintaa, sävelvihjeet ja tabulatuuri piilossa (soivan sävelen korostus
  säilyy) · 4 improvisointi ilman melodiaharjoitusta.
- Tallennusavaimet ennallaan, etenemistiedot säilyvät (testattu).

### Työpaketti 3 – Kuunteluharjoitukset (`feature/savelkorva-kuuntelu`, issue #30)

- **A. Kuuntele ja paikanna sävel:** ohut e-, B- ja G-kieli vuorotellen, nauhat 0–5, vain
  luonnolliset sävelet. Opettelu (kielen sävelet nousevasti, soiva paikka ja nimi näkyvät),
  kuuntelutesti (5 kysymystä/kieli, kaikki kielen luonnolliset sävelet vähintään kerran, ei samaa
  peräkkäin), vastaus nauhaa napauttamalla, palaute ja oikea paikka vasta yrityksen jälkeen,
  kielen tulos ja yhteenveto. **Päivitetty 14.11.2026 omistajan pyynnöstä (commit `513e7d7`):**
  jokainen kysymys soittaa ensin kielen koko mallisarjan (soiva sävel korostuu), sitten kahden
  iskun tauon ja vasta sitten kysytyn sävelen. Vastaaminen avautuu, kun kysytty sävel on soinut.
  *Kuuntele uudelleen* toistaa koko järjestyksen, *Vain kysytty sävel* pelkän sävelen.
- **B. Kuuntele moodien ero:** A-aiolinen/A-doorinen ja C-jooninen/C-miksolyydinen, sama toonika
  ja hiljainen toonikan urkupiste oktaavia alempana. Kolme harjoitusta: *Kuuntele ero*,
  *Kumpi oli kumpi?* ja *Mikä sävelaste muuttui?*. Selittävä palaute ja eroavan asteen
  sijainnit otelaudalla vastauksen jälkeen.
- **Navigaatio:** Sävelkorva ja otelauta -polku ja suora linkki `?polku=otelauta` avautuvat
  edelleen *Etsi sävelet otelaudalta* -harjoitukseen. Uudet harjoitukset ovat sen alla.
  Moodivertailu on myös Skaalat ja moodit -valikossa (sama komponentti, ei kopiota).
  Nykyinen C-joonisen ja A-aiolisen sävelkeskusvertailu (`ModeJourney.tsx`) on ennallaan.
- Ei mikrofonintunnistusta, ei uusia tallennusavaimia.

## 3. Musiikilliset ja tekniset suunnittelupäätökset

### Positiot ja melodiat (issue #31) – [F]/[T]

Positiorajat luettiin `MusicMapFretboard.fingeringBoxes`-kirjastosta (sama kuin otelaudalla):
positio 2 nauhat 7–10, positio 3 nauhat 9–13. Yksikkötesti varmistaa rajat.

**Wayfaring Stranger, positio 2** (sama inkipit 1 1 5 5 4 / 5 4 3 1 1 / 3 4 4 1 3, A-mollissa):

| Sävel | Positio 1 | Positio 2 |
| --- | --- | --- |
| E4 | B-kieli, 5. nauha | **G-kieli, 9. nauha** |
| D4 | G-kieli, 7. nauha | G-kieli, 7. nauha |
| C4 | G-kieli, 5. nauha | **D-kieli, 10. nauha** |
| A3 | D-kieli, 7. nauha | D-kieli, 7. nauha |

Rytmi ja tauot ovat samat (oma 4/4-harjoitusrytmi, 6 tahtia koko melodiassa). Sormitus: etusormi
7, nimetön 9, pikkusormi 10 – yhden käsiaseman sisällä **[A]**. Issuessa mainittua omaa
vastausfraasia ei lisätty: vertailtava ydinasia on sama melodia uudessa paikassa, ja lisäosio olisi
opettanut vain yhden uuden paikan (B-kielen 10. nauha). **[A]**

**Korkea vastaus, positio 3** (oma sävellys, vapaa käyttää):

| Tahti | Sävelet ja kestot | Paikat (kieli:nauha) |
| --- | --- | --- |
| 1 (kysymys) | A4 ♩ · C5 ♩ · D5 𝅗𝅥 | B10 · B13 · e10 |
| 2 | C5 ♩ · A4 ♩ · G4 𝅗𝅥 | B13 · B10 · G12 |
| 3 (vastaus) | E5 ♩ · D5 ♩ · C5 ♩ · A4 ♩ | e12 · e10 · B13 · B10 |
| 4 | G4 ♩ · E4 ♩ · A4 𝅗𝅥 | G12 · G9 · B10 |

Kysymys jää ♭7:ään (G), vastaus alkaa position ylimmästä E5:stä ja ratkeaa A:han. Vain sävelet
A C D E G. Fraasin sisällä peräkkäiset sävelet ovat viereisillä kielillä ja enintään neljän nauhan
päässä; fraasien rajalla (puolinuotti G4 → E5) hypätään B-kielen yli samalla 12. nauhalla.
Issuen luonnos `A–C–D–C | A–G–E–A | E–D–C–A | G–E–A` toimi lähtökohtana, mutta toinen tahti
muutettiin kysymykseksi, joka jää auki. **[A]**

### Kuunteluharjoitukset (issue #30)

- **[F]/[T]** Kysyttävät sävelet issuen taulukon mukaan: e = E4 F4 G4 A4 (0, 1, 3, 5),
  B = B3 C4 D4 E4 (0, 1, 3, 5), G = G3 A3 B3 C4 (0, 2, 4, 5). e-kielellä ei ole C:tä.
  Kromaattisia nauhoja voi napauttaa, mutta ne ovat aina vääriä vastauksia (ne eivät ole kysyttäviä).
- **[F]** Kuuntelutestin vertailukohta on koko mallisarja ennen jokaista kysymystä (päivitetty
  vaatimus 14.11.2026; ensimmäisen version vapaan kielen vertailusävel poistettiin). Tempo 80 BPM,
  tauko 2 iskua (1,5 s), kysytty sävel 2 iskua. Absoluuttista sävelkorvaa ei vaadita. Tauon ja
  tempon sopivuus on arvio, jota ei ole tarkistettu korvakuulolta **[A]**.
- **[F]** Moodiparien teoria: aiolinen ♭6 (F) / doorinen 6 (F♯); jooninen 7 (B) / miksolyydinen ♭7
  (B♭). Sama toonika (A3, C4), sama rekisteri, sama rytmi. Yksikkötesti varmistaa, että parit
  eroavat täsmälleen yhdessä asteessa ja puolen sävelaskelen verran.
- **[F]** Sormitukset: A-pari D-, G- ja B-kielellä nauhoilla 7–11 (F = G10, F♯ = G11);
  C-pari G-, B- ja e-kielellä nauhoilla 5–8 (B♭ = e6, B = e7).
- **[A]** Tehtävän 3 fraasit (`1 3 5 6 | 6 5 4 3 | 2 1` ja `1 3 5 7 | 8 7 6 5 | 3 1`) kuljettavat
  eroavan asteen kahdesti toonikan ja kvintin ympäröimänä, jotta ero kuuluu melodiassa eikä vain
  asteikossa. Urkupiste soi hiljaisemmalla tasolla (0,10 vs. 0,22).
- **[F]** Paljastuksen esto: kysymystiloissa otelauta ja soivan sävelen nimi pysyvät tyhjinä myös
  toiston aikana, koska soivan nauhan näkyminen paljastaisi vastauksen.
- **[A]** Vastausvaihtoehdot tehtävässä 3: 6./7. aste × nousi/laski. Koska toonika kertoo parin,
  aste on pääteltävissä parista; varsinainen kuuntelutehtävä on suunta. Myöhemmin voi lisätä
  pareja, joissa eroaa esimerkiksi kolmas aste.

### Tekniset päätökset

- **[F]** Yhteinen otelautakomponentti `Board.tsx` muuttui vain merkinnöiltään (luokat
  `string-number`, `board-head-label`, `display-only`). Kaikki mitoitus on mediakyselyissä, joten
  työpöytä (> 480 px) on ennallaan (testattu 768 ja 1440 px).
- **[F]** K2:n jälkeen 4–6 nauhan positiot mahtuvat 320 px:iin, eikä niitä tarvitse vierittää.
  Automaattisen seurannan ja käyttäjän oman vierityksen testit siirrettiin 280 px:n leveyteen
  (esim. Galaxy Z Fold -kansinäyttö), jossa positioiden 1+2 alue yhä vierii. Seurantalogiikkaa
  (`followScroll.ts`) ei muutettu.
- **[F]** `ReferencePlayer.playTimed` sai valinnaisen tason (`level`) urkupistettä varten.
  Kappalesoittimen äänenvoimakkuuteen, GainNode-reititykseen, moniraitojen tahdistukseen,
  MP3-latauksiin ja Range-kelaukseen ei koskettu.
- **[F]** Pinotut haarat: työpaketit 2 ja 3 käyttävät työpaketin 1 yhteistä otelauta-CSS:ää.
  Generoidut tiedostot (`app.js`, lähdekartta, `app.css`, `THIRD-PARTY-NOTICES.txt`,
  tyylien `?v=`-tunnisteet ja `app.js?v=`) rakennettiin jokaisessa haarassa uudelleen
  `npm run build`illa ja CI:n versiotunnistelogiikalla.

## 4. GitHub-PR:t ja riippuvuudet

| # | PR | Haara | Kohde | Sisältö |
| --- | --- | --- | --- | --- |
| 1 | ristotoivanen/Musiikin-kartta#37 | `feature/mobiili-k2-k7` | `beta` | Mobiiliauditointi K2–K5, K7, mittausskriptit |
| 2 | ristotoivanen/Musiikin-kartta#38 | `feature/pentatoniset-melodiat-p2-p3` | `feature/mobiili-k2-k7` | Positioiden 2 ja 3 melodiat (#31) |
| 3 | ristotoivanen/Musiikin-kartta#39 | `feature/savelkorva-kuuntelu` | `feature/pentatoniset-melodiat-p2-p3` | Kuunteluharjoitukset (#30) |
| – | ristotoivanen/Musiikin-kartta#40 | `docs/seuraava-kehitysversio` | `beta` | Tämä raportti (pelkkä dokumentti, riippumaton pinosta) |

Viimeiset commitit: PR 1 `a019e9a`, PR 2 `9c37981`, PR 3 `bacb457`. Kaikki haarat on pushattu;
Cloudflare Pages rakentaa niistä esikatselut.

**Yhdistämisjärjestys:** 1 → 2 → 3. Kun PR 1 on yhdistetty betaan, PR 2:n kohde vaihdetaan
`beta`ksi (GitHub tekee sen automaattisesti, jos PR 1:n haara poistetaan yhdistettäessä), ja sama
PR 3:lle. Jokainen haara sisältää alemman haaran merge-committeina, ei uudelleenkirjoitettua
historiaa. Generoidut tiedostot voivat yhdistettäessä mennä ristiriitaan; ratkaisu on
`npm run build` yhdistetyistä lähteistä (CI tekee betassa saman).

Issueihin #30 ja #31 on kirjattu edistyminen. Niitä ei ole suljettu.

## 5. Automaattitestien tulokset

Ajettu 13.11.2026 kunkin haaran omassa työpuussa (Chrome, `--mute-audio --disable-audio-output`). **[T]**

| Haara | `npm run check` (lint, typecheck, Vitest, build) | Playwright `--workers=2` | Työpuu buildin jälkeen |
| --- | --- | --- | --- |
| Lähtötaso `origin/beta` | ok, 284/284 | 270 läpi, 18 ohitettu | puhdas |
| PR 1 `feature/mobiili-k2-k7` | ok, 285/285 | **283 läpi, 31 ohitettu, 0 kaatui** | puhdas |
| PR 2 `feature/pentatoniset-melodiat-p2-p3` | ok, 291/291 | **289 läpi, 31 ohitettu, 0 kaatui** | puhdas |
| PR 3 `feature/savelkorva-kuuntelu` | ok, 299/299 | **301 läpi, 31 ohitettu, 0 kaatui** | puhdas |
| PR 3 päivitys 14.11. (`513e7d7`) | ok, 303/303 | **305 läpi, 0 kaatui** | puhdas |

- Ohitettujen määrä 18 → 31: `responsive.spec.ts` asettaa näyttökoot itse ja ohitetaan siksi
  tarkoituksella puhelinprojektissa; siihen tuli 13 uutta testiä. Muita testejä ei ohitettu tai poistettu.
- `npm run check:song-audio` (PR 3): kaikki 10 MP3:ta löytyvät. Linkkitarkistus
  `tools/linkit/tarkista-linkit.py`: 18 sivua, 604 viittausta, 2 vanhaa `#oktaavit`-huomautusta.
- `node tools/versioi-tyylit.mjs --tarkista` ok; `app.js?v=` vastaa käännetyn tiedoston
  SHA-256:ta (sama logiikka kuin CI:ssä); `THIRD-PARTY-NOTICES.txt` identtinen betan kanssa.
- Äänenvoimakkuuden, MP3-latauksen ja Range-kelauksen aiemmat regressiotestit
  (`audioRange.test.ts`, `songAudio.test.ts`, `song-download.spec.ts`,
  `song-volume-scales.spec.ts`) menevät läpi kaikissa haaroissa.
- **Muutetut olemassa olevat testit (perustelut commiteissa):** K1:n seurantatestit siirrettiin
  320 → 280 px:iin, koska 320 px:ssä otelauta ei enää vieri; improvisoinnin puhelintesti tarkistaa
  nyt, että nauha 8 näkyy ilman vieritystä (aiemmin oletti sen olevan piilossa); kappaletestit
  avaavat puhelimessa suljetun asetusosan; melodiadatan kestotesti laajennettiin uuteen
  melodiaan. Hyväksymiskriteerejä ei löysennetty.
- Kehityksen aikana ajo kaatui kerran omaan virheeseeni (pysäytetyn ajon palvelin varasi portin
  8765); ajot toistettiin puhtaina.

## 6. Kuva- ja mobiilivertailujen tulokset

Menetelmä: `tools/mobiilimittaus/mittaa.mjs`, 16 näkymää × 8 kokoa (320, 360, 390, 430, 768,
1440 px sekä vaaka 844 × 390 ja 740 × 360), vaalea ja tumma teema, 14 näytettä mallisoiton
aikana. *Ennen* = muuttamaton beta `48a0af2`, *jälkeen* = `feature/mobiili-k2-k7`.
Chromium-emulaatio, kosketus päällä puhelinko'oissa. **Ei fyysisen iPhonen Safari-testi.**

**Näkyvät nauhat / kaikki (piiloon jäävät sävelpisteet), vaalea teema [T]:**

| Näkymä | 320 ennen | 320 jälkeen | 360 ennen | 360 jälkeen | 390 ennen | 390 jälkeen |
| --- | --- | --- | --- | --- | --- | --- |
| Pentatoninen positio 1 | 3/4 (3) | 4/4 (0) | 4/4 (0) | 4/4 (0) | 4/4 (0) | 4/4 (0) |
| Positio 2 | 3/4 (5) | 4/4 (0) | 3/4 (0) | 4/4 (0) | 4/4 (0) | 4/4 (0) |
| Positio 3 | 3/5 (6) | 5/5 (0) | 4/5 (1) | 5/5 (0) | 5/5 (0) | 5/5 (0) |
| Positiot 1+2 | 3/6 (9) | 6/6 (0) | 4/6 (6) | 6/6 (0) | 4/6 (6) | 6/6 (0) |
| Positio 1 + melodia | 3/7 (8) | 7/7 (0) | 4/7 (5) | 7/7 (0) | 5/7 (5) | 7/7 (0) |
| Moodit (C-jooninen) | 2/4 (4) | 4/4 (0) | 2/4 (4) | 4/4 (0) | 2/4 (3) | 4/4 (0) |
| Moodit + Ukko Nooa | 4/8 (5) | 8/8 (0) | 5/8 (5) | 8/8 (0) | 6/8 (3) | 8/8 (0) |
| Sointu (C) | 2/4 (3) | 4/4 (0) | 3/4 (2) | 4/4 (0) | 3/4 (0) | 4/4 (0) |
| Etsi sävelet (0–5) | 3/6 (0) | 6/6 (0) | 4/6 (0) | 6/6 (0) | 5/6 (0) | 6/6 (0) |
| Vanha ?tila=notes | 3/6 (0) | 6/6 (0) | 4/6 (0) | 6/6 (0) | 5/6 (0) | 6/6 (0) |

Melodiaa sisältävissä näkymissä luvut ovat kahden otelaudan summa.

**Vaaka-asento: painike ja soiva sävel samassa ruudussa (näytteet) ja niiden etäisyys [T]:**

| Näkymä | 844 × 390 ennen | jälkeen | 740 × 360 ennen | jälkeen |
| --- | --- | --- | --- | --- |
| Pentatoninen positio 1 | 3/14 · 448 px | 14/14 · 348 px | 3/14 · 448 px | 14/14 · 348 px |
| Positio 2 | 3/14 · 448 px | 14/14 · 348 px | 3/14 · 448 px | 14/14 · 348 px |
| Positio 3 | 3/14 · 448 px | 14/14 · 348 px | 3/14 · 448 px | 14/14 · 348 px |
| Positiot 1+2 | 0/14 · 448 px | 14/14 · 348 px | 0/14 · 502 px | 14/14 · 348 px |
| Moodit (C-jooninen) | 9/14 · 402 px | 14/14 · 312 px | 9/14 · 402 px | 14/14 · 312 px |
| Moodit + Ukko Nooa | 3/14 · 397 px | 14/14 · 311 px | 3/14 · 397 px | 14/14 · 311 px |
| Positio 1 + melodia | 14/14 · 351 px | 14/14 · 275 px | 14/14 · 351 px | 14/14 · 275 px |

Muut tulokset **[T]**:

- Kappaleharjoittelu, soittopainikkeesta soivaan sointuun: 390 × 844 949 → 445 px,
  360 × 780 983 → 475 px, 844 × 390 590 → 345 px.
- Painettu painike hover-tilassa (vaalea teema): 1,33 → 11,20:1.
- Soivan tahdin kontrasti vaaleassa teemassa: sointu 1,60 → 5,95:1, tahtinumero 1,14 → 6,47:1
  (tumma teema 5,15/3,15 → 5,95/6,47).
- Sivun vaakaylivuotoa ei ole yhdessäkään 256 mittauksessa ennen eikä jälkeen; sivuvirheitä 0.
- Tumman teeman tulokset ovat samat ±1 näyte.
- 430, 768 ja 1440 px: kaikki nauhat näkyivät jo ennen; työpöydän kielisarake 105 px ennallaan.

Kuvakaappaukset ja JSON-tulokset (noin 510 kuvaa) ovat julkaisemattomassa hakemistossa
`/Users/ristotoivanen/src/Musiikin-kartta/worktrees/seuraava-versio-mittaukset/`
(`ennen/`, `jalkeen/`, `vertailu-light.md`, `vertailu-dark.md` sekä uusien harjoitusten
360 px:n kuvat). Niitä ei viety repoon, koska Cloudflare julkaisisi ne.

## 7. Fyysisellä laitteella vielä testaamattomat asiat

Mitään tämän version muutosta **ei ole testattu fyysisellä iPhonella tai Androidilla**, eikä
uusien melodioiden tai kuunteluharjoitusten ääntä ole arvioitu korvakuulolla.

- Kapean kielisarakkeen ja kortin reunan yli ulottuvan otelaudan piirto iOS Safarissa
  (kiinnitetty sarake, `position: sticky`).
- Nauhan 40 px:n kosketustarkkuus *Etsi sävelet*- ja *Kuuntele ja paikanna* -harjoituksissa.
- Vaaka-asento todellisella korkeudella (osoite- ja kotipalkki, lovi).
- Kelausliukusäätimen 44 px:n kosketusalue sormella.
- Hover-tilan käyttäytyminen napautuksen jälkeen (K3).
- Positioiden 2 ja 3 melodioiden soitettavuus oikealla kitaralla ja syntetisoidun äänen ajoitus
  iPhonella (tunnettu ~0,43 s:n viive koskee kappalesoitinta, ei syntetisoitua ääntä).
- Moodivertailun urkupisteen ja asteikon tasapaino puhelimen kaiuttimesta: kuuluuko ero.
- Issue #9:n aiemmat avoimet kohdat (keskeytys puhelulla/sovellusvaihdolla, *Soita looppina*,
  E1) ovat ennallaan avoimia.

## 8. Tunnetut ongelmat ja jatkokehitysehdotukset

- **Korjattu oma regressio [F]:** välikäännökset tehtiin pelkällä `vite build`illa, joka poisti
  `assets/harjoittelija/THIRD-PARTY-NOTICES.txt`:n. Tiedosto palautettiin (identtinen betan
  kanssa), ja `tests/site.test.ts` tarkistaa nyt sen olemassaolon.
- Kappaleen asteikkokuva on edelleen 680 px:n vierityskehyksessä 0,64-kertaisena (merkinnät
  ~7,7 px). Sama 680 px:n vähimmäisleveys kuin Otelautaoppaassa, kuten auditointi ehdotti;
  suurempi leveys lisäisi vieritystä. Ratkaistaan Otelautaoppaan positiorajauksen yhteydessä. **[A]**
- Otelautakartan SVG:n 11 px:n nauhanumerot ja 18–19 px:n valintaruudut (K7) jätettiin
  ennalleen: SVG on yhteinen oppaan kaavioiden kanssa, ja valintaruutujen nimiöt ovat napautettavia.
- Linkkitarkistus: kaksi vanhaa `#oktaavit`-huomautusta (`book/osa-5.html`), samat kuin
  aiemmin; eivät liity tähän työhön.
- Kuunteluharjoitusten tuloksia ei tallenneta, eikä automaattista etenemistä ole.
- Issue #31:n jatko: positioiden 2+3 yhdistävä melodia. Issue #30:n jatko: kaikki kuusi kieltä,
  kromaattiset sävelet, lisää moodipareja, mikrofoni.
- Positioiden 2 ja 3 ensimmäisessä vaiheessa on yhä aiempi lyhyt *mallifraasi*-painike. Se ei ole
  melodiaharjoitus, joten se jätettiin; omistaja voi päättää sen poistamisesta.

## 9. Käyttäjän hyväksymistestilista

Testaa esikatselussa (Cloudflare-esikatselu PR:stä) iPhonella ja tietokoneella.

**Mobiili (PR 1)**
1. 320–390 px: Skaalat ja moodit → Pentatoniset, positiot 1–3 ja *Yhdistä 1 + 2*: koko
   nauha-alue näkyy ilman vieritystä, kielen kirjaimet luettavissa.
2. Mallisoiton aikana keltainen korostus näkyy aina; sormella vierittäminen ei taistele seurantaa
   vastaan.
3. Avaa melodiaharjoitus (Wayfaring Stranger, Ukko Nooa): otelauta lähes näytön levyinen.
4. Vaalea teema: Kappaleharjoittelu → Soinnut ja sanat; soiva tahti ja sointu luettavia. Paina
   *Toista asteikkoa* ja vie hiiri pysäytyspainikkeen päälle: teksti pysyy luettavana.
5. Kappaleharjoittelu 390 × 844: Soita, avaa Soinnut ja sanat; soiva sointu ja tahdit näkyvät
   samalla ruudulla soittimen kanssa. *Harjoituskartan asetukset* aukeaa ja näyttää tason.
6. Puhelin vaaka-asennossa: pysäytyspainike ja koko otelauta saman vierityksen sisällä.
7. Kelaa kappaletta liukusäätimellä sormella.

**Melodiat (PR 2)**
8. Positio 2: vaihe 1 vain asteikko → vaihe 2 avattava Wayfaring Stranger · positio 2, osat A/B,
   tabulatuuri piilossa, *Vertaa sormitusta* aukeaa → soita oikealla kitaralla.
9. Kuuntele, että melodia kuulostaa samalta kuin positiossa 1.
10. Vaihe 3: koko melodia, ei A/B-valintaa, vihjeet piilossa; vaihe 4: ei melodiaa.
11. Positio 3: *Korkea vastaus* kuulostaa musiikilliselta ja päättyy A:han; soitettavuus kitaralla.
12. Aiemmat etenemistiedot (positiot 1–3, yhdistäminen, moodit) säilyvät.

**Kuunteluharjoitukset (PR 3)**
13. Sävelkorva ja otelauta → *Kuuntele ja paikanna sävel*: e-, B- ja G-kielen sävelet,
    kuuntelutesti (mallisarja → tauko → kysytty sävel; onko tauko riittävä?), väärän vastauksen
    palaute, kielen tulos ja yhteenveto.
14. Skaalat ja moodit → *Kuuntele moodien ero*: kuuluuko F/F♯- ja B/B♭-ero puhelimen
    kaiuttimesta ja kuulokkeilla; urkupisteen taso sopiva.
15. *Kumpi oli kumpi?* ja *Mikä sävelaste muuttui?*: vastaus ei näy ennen valintaa.
16. Siirry näkymästä pois kesken toiston: ääni loppuu.
17. Moodit-polun C-jooninen/A-aiolinen ennallaan.

## 10. Suositus

- **PR 1 (mobiili): valmis betaan esikatselutarkastuksen jälkeen [A].** Automaattitestit ja
  mittaukset ovat vihreitä, ja muutos on rajattu mediakyselyihin. Ehto: hyväksymistestit 1–2 ja 6
  oikealla iPhonella.
- **PR 2 (melodiat): valmis betaan, kun omistaja on soittanut ja kuunnellut melodiat [A].**
  Musiikkidata on testattu, mutta oma sävellys ja sormitukset vaativat ihmisen hyväksynnän.
- **PR 3 (kuuntelu): ensimmäinen versio valmis katselmointiin, vaatii kuuntelutestin ennen betaa
  [A].** Logiikka ja palaute on testattu, mutta moodierojen kuuluvuutta syntetisoidulla äänellä
  ei ole arvioitu korvalla.
- Tuotantoon (`main`) ei suositella mitään ennen kuin beta on testattu iPhonella (issue #9).
