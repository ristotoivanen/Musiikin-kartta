# Betan julkaisuvalmius tuotantoon

13.11.2026 klo 15.25 (EET) · Musiikin kartta · katselmoitu `beta` → `main`

| | Commit | Aika |
| --- | --- | --- |
| `origin/beta` | `ba65ce9daeb83b57bd81a22385594362b3274268` | 13.11.2026 14.49 (EET) |
| `origin/main` (tuotanto) | `cef487a371ccc91c8f369663d4aaf4be44b3fa32` | 13.11.2026 08.38 (EET) |
| Bundle betassa | `assets/harjoittelija/app.js?v=f2f30ba6b9b1` | |

Merkinnät: **[F]** fakta, jonka katselmoija on itse tarkistanut tällä kierroksella ·
**[D]** dokumentoitu fakta aiemmasta PR:stä tai commitista, ei itsenäisesti
toistettu · **[P]** päätelmä · **[?]** todentamaton väite.

Katselmus ei muuttanut sovellusta, `main`-haaraa, PR:iä eikä julkaisuja.

## 1. Suositus

**CONDITIONAL GO.** Beta voidaan julkaista tuotantoon, kun yksi ehto on täytetty:
**lyhyt käsin tehtävä iPhone Safari -savutesti beta.rinnepelto.comissa**
(luku 6, ehto E1). Muut ehdot ovat julkaisun yhteydessä tehtäviä menettelyjä.

Perustelut:

- **[F]** `main` on `beta`n esi-isä: mainissa ei ole yhtään committia, jota betassa
  ei olisi (0 / 101). Julkaisu ei korvaa eikä poista mitään tuotannon muutosta.
- **[F]** Kaikki automaattiset tarkistukset menevät läpi betan nykytilassa, ja
  generoidut tiedostot vastaavat lähdekoodia (luku 5).
- **[F]** beta.rinnepelto.com vastaa GitHubin `beta`-haaraa, ja rinnepelto.com
  vastaa `main`-haaraa (luku 5.3).
- **[F]** Kappaleharjoittelijan moniraitasoitin (`songAudio.ts`) on täsmälleen sama
  kuin jo tuotannossa oleva, iPhonella testattu versio. Julkaisu ei siis muuta
  issue #9:n ääniongelman tilaa kumpaankaan suuntaan.
- **[P]** Julkaisun suurin riski on betan *uusi* syntetisoitu ääni: moodien
  kertasoitto, melodiaharjoitukset ja otelaudan korostukset. Niitä ei ole koskaan
  kuunneltu iPhone Safarilla. Siksi ehto E1.

## 2. Betan tärkeimmät muutokset tuotantoon verrattuna

101 committia, 14 merge-committia. PR:t yhdistetty 13.11.2026.

| PR | Muutos |
| --- | --- |
| #19, #20 | Moodien oppimispolku (C-jooninen, A-aiolinen), asteikko soi kerran, turha mallifraasi pois |
| #21 | Melodialähtöisen oppimispolun ja tekijänoikeusselvitettyjen sävelmien dokumentaatio |
| #22, #24, #27 | Rytmiset perinnemelodiat (Wayfaring Stranger, Ukko Nooa), avattavat melodiaharjoitukset, soivan sävelen korostus otelaudalla, pidempi melodia muistiharjoitukseen |
| #25 (sis. #23) | Yhteinen päävalikko, uusi Musiikin teoria -aloitusnäkymä `/book/`, Otelautaoppaan alavalikko, etusivun painikkeet |
| #28 | Otelautaoppaan graafinen uudistus (yksi työskentelykortti) |
| #29 | Sisältöön perustuvat versiotunnisteet CSS-linkeissä |
| #32 | Kappaleharjoittelijan *Lataa MP3* -linkki molemmille versioille, `Content-Disposition: attachment` Pages Functionissa |
| #33 | Mobiili: soiva sävel ja tabulatuurin soiva kohta pysyvät näkyvissä, käyttäjän vieritys saa etusijan; teoriasivun skriptivirheen korjaus |

**[F]** Tuotannossa on jo ennestään PR #3 (oppimispolut, kappaleharjoittelija,
Range-funktio, iPhone-tahdistuskorjaukset) ja PR #18 (pentatoniset positiot 2–3
ja yhdistäminen).

## 3. Toteutetut ominaisuudet ja tarkistus

| Alue | Tila | Näyttö |
| --- | --- | --- |
| Päävalikko ja navigaatio | Toimii | **[F]** e2e (`navigation.spec.ts`), savutesti betassa 5 sivua |
| Otelautakartta ja sointunäkymä | Toimii | **[F]** e2e (`visualizer.spec.ts`), savutesti: A-doorinen, sointuotteen selaus 2/3 |
| Skaalat, moodit, melodiat | Toimii Chromiumilla | **[F]** e2e (`learning-paths`, `mode-paths`, `melodic-pilots`), savutesti: pentatoninen ja moodien ”Nyt soi” |
| Kappaleharjoittelija, molemmat versiot | Toimii Chromiumilla | **[F]** savutesti betassa: kolme raitaa etenee 0,053 s (normaali) ja 0,094 s (akustinen) sisällä, kitaran pois- ja päällekytkentä palautuu 0,045 / 0,110 s:iin |
| MP3-lataukset | Toimii | **[F]** `song-download.spec.ts` 6/6; betassa HEAD 200, `audio/mpeg`, `Content-Disposition: attachment`, 4 917 868 ja 5 264 507 tavua |
| Mobiilikorjaukset (K1, K6) | Toimii emulaatiossa | **[F]** `responsive.spec.ts` 15 testiä; **[?]** sormella vieritystä ei ole testattu puhelimella |
| Tallennettu edistyminen | Yhteensopiva | **[F]** `storage.ts` muuttumaton; kaikki mainin `localStorage`-avaimet ovat betassa ennallaan; uusia avaimia on vain `musiikin-kartta:moodipolku:*`; skaalapolun vaiheita on edelleen viisi |
| Välimuistit | Toimii pienin varauksin | **[F]** bundle ja kaikki CSS versioitu; HTML `max-age=0`; JS, CSS ja MP3 `max-age=14400`. Versioimaton `assets/edistyminen.js` muuttuu (luku 7, M1) |
| Äänitiedostot | Toimii | **[F]** `check:song-audio` 10/10 MP3:a; suurin 5,5 MiB (raja 25 MiB); Range 206 sekä MP3:lle että oppaan `.m4a`:lle betassa ja tuotannossa |

## 4. Issue #9 ja iPhone Safarin moniraitaääni

### Alkuperäinen ongelma

**[D]** Issue #9, päivitetty viimeksi 12.11.2026 klo 16.34 UTC: fyysisellä iPhonella
kappaleharjoittelijan miksauksesta puuttui joskus laulu ja toisella kerralla
kitara. Tila NO-GO. Aiemmin samana päivänä Cloudflare Pages ei tukenut HTTP
Rangea, joten kelaus ja tahdistus eivät toimineet esikatselussa.

### Myöhemmät korjaukset

Issue #9:n kuvaus on vanhentunut. Korjaukset tehtiin issuen viimeisen päivityksen
jälkeen ja julkaistiin tuotantoon PR #3:ssa (yhdistetty 12.11.2026 20.59 UTC).

| Commit | Korjaus | Mainissa |
| --- | --- | --- |
| `16928d6` | Pages Function: HTTP Range 206 äänitiedostoille | **[F]** kyllä |
| `1b88b8c` | Driftiä ei kelata latauksen aikana toistuvasti (raita katosi) | **[F]** kyllä |
| `834df02` | Pois kytketty raita pysäytetään, ei mykistetä | **[F]** kyllä |
| `4a0b190`, `4f661ac` | `StemAligner` kompensoi iPhonen kelausviiveen 0,3–0,8 s | **[F]** kyllä |
| `d2a1d6b` | Tahdistuksen säännöt ja tunnettu rajoitus `harjoittelija/README.md`:ssä | **[F]** kyllä |

**[F]** `harjoittelija/songAudio.ts` ei ole muuttunut `d2a1d6b`:n jälkeen.
`SongJourney.tsx`:ään on lisätty vain latauslinkki (PR #32), ja Pages Function
lisää `Content-Disposition`-otsakkeen vain `*-kokonainen.mp3`-tiedostoille.
Soittimen raitoihin se ei koske.

### Tila

**1. Todistetusti korjattu**

- **[F]** HTTP Range: tuotanto ja beta antavat 13.11.2026 vastauksen `206` ja
  oikean `Content-Range`-otsakkeen sekä MP3-raidalle että oppaan `.m4a`-äänelle.
- **[D]** Raidan katoaminen alussa ja pois kytketyn raidan jumiutuminen: PR #3:n
  mukaan iPhonella (iOS 18.7, Safari, Cloudflare-esikatselu) mitattiin korjausten
  jälkeen raitojen kellot 54,48 / 54,51 / 54,38 s (kappale) ja 56,58 / 56,65 s
  (Am-vamp). PR #3:n tarkistuslistassa on kuitattu ”Testaa oikealla iPhonella
  Safarissa: toisto, kitaran ja laulun kytkentä, Am-vampin kitara”. Mittauspaneeli
  ja raakadata on poistettu, joten tulosta ei voi tarkistaa itsenäisesti.

**2. Korjattu koodissa ja automaattisesti testattu, laitetesti puuttuu**

- **[D]** Äänenvoimakkuuden GainNode-reitti (`SongGainMixer`): Playwrightissa on
  simuloitu iOS:n toiminta. README:n mukaan reittiä ei ole testattu fyysisellä
  iPhonella.
- **[F]** Betan uusi syntetisoitu ääni: moodien kertasoitto, melodioiden
  `playTimed` ja korostukset (`ea51038`, `fe09c35`, `6f7ec9a`). Vain
  Chromium-testit. Ei kappaleen raitoja, mutta samaa iOS:n Web Audiota.

**3. Avoin tai epäselvä**

- **[?]** Kaikkien kolmen raidan (säestys, kitara, laulu) *kuuluminen* oikein
  **molemmissa** versioissa uusimmalla koodilla. Dokumentoitu mittaus koskee
  toistokelloja eikä kerro versiota. Korvakuuloista vahvistusta molemmille
  versioille ei ole kirjattu.
- **[D]** Ei testattu iPhonella: keskeytys puhelulla tai sovelluksen vaihdolla,
  *Soita looppina* -kierrosraja ja äänenvoimakkuusliukuri.
- **[D]** Hyväksytty tunnettu rajoitus: kesken soiton takaisin kytketty raita voi
  iPhonella nykäistä hetken ennen kuin se asettuu tahtiin.

**[P]** Issue #9:ää ei pidä sulkea. Julkaisun kannalta sen tila on kuitenkin sama
tuotannossa ja betassa, koska soitin on sama.

Tähän johtopäätökseen **ei** ole käytetty näyttönä MP3-tiedostojen oikeellisuutta,
latausten toimivuutta eikä Playwright-testejä.

## 5. Testit ja tarkistukset

Ajettu 13.11.2026 betan commitista `ba65ce9` erillisessä työpuussa.

| Tarkistus | Tulos |
| --- | --- |
| `npm run lint` | **[F]** läpi |
| `npm run typecheck` | **[F]** läpi |
| `vitest` | **[F]** 280 / 280 (20 tiedostoa) |
| `npm run build` | **[F]** läpi; työpuu puhdas rakennuksen jälkeen, eli `app.js`, lähdekartta ja CSS vastaavat lähdekoodia tavu tavulta |
| Bundlen versiotunniste | **[F]** `v=f2f30ba6b9b1` = `app.js`:n SHA-256:n alku |
| `tools/versioi-tyylit.mjs --tarkista` | **[F]** kaikki CSS-tunnisteet ajan tasalla |
| `tools/linkit/tarkista-linkit.py` | **[F]** 18 sivua, 604 viittausta, 2 tunnettua `#oktaavit`-huomautusta (ankkuri toimii JavaScriptillä) |
| `npm run check:song-audio` | **[F]** 10 / 10 MP3:a |
| Playwright, koko sarja | **[F]** 267 läpi, 17 ohitettu (tarkoituksella), 0 epäonnistunutta, 10,8 min |
| Savutesti beta.rinnepelto.comia vasten (Chromium) | **[F]** 19 / 19 (luku 3) |

### 5.1 Rajoitukset

- Playwright käyttää Chromiumia. Puhelinprojekti on Chromiumin mobiiliemulaatio, ei
  WebKit eikä Safari.
- Selaintestien paikallinen palvelin (`python3 -m http.server`) ei tue Rangea.
  Kelauksen ja moniraitatahdistuksen Range-käytös näkyy vain Cloudflaressa. Siksi
  savutesti ajettiin betaa vasten.
- Savutestissä ääni oli mykistetty (`--mute-audio`). Raitojen eteneminen todennettiin
  `currentTime`-arvoista, ei kuuntelemalla.
- Betan otelautakartan testeissä on aiemmin havaittu satunnaisia aikakatkaisuja
  rinnakkaisajossa. Tällä ajolla niitä ei ollut.

### 5.2 Avoimet PR:t

- **[F]** Ainoa avoin PR on #23 (`main` ← `feature/yhtenainen-navigaatio`). Sen head
  `d3a8e3a` on jo betan historiassa PR #25:n kautta. Beta → main tuo sen sisällön
  mainiin, joten erillistä yhdistämistä ei tarvita.
  **[P]** GitHub merkitsee PR #23:n todennäköisesti yhdistetyksi, kun beta on
  mainissa. Muussa tapauksessa se suljetaan tarpeettomana.

### 5.3 Julkaisut vastaavat haaroja

**[F]** Tiedostot verrattiin SHA-256-tiivisteillä. HTML-sivuista poistettiin ensin
Cloudflaren itse lisäämät Web Analytics -beacon, bottitunnistuksen skripti ja
piilotettu `cdn-cgi`-linkki.

- beta.rinnepelto.com = `origin/beta`: 9 HTML-sivua sekä `app.js`, `app.css`,
  `edistyminen.js`, `visualizer.css` ja `paavalikko.css`.
- rinnepelto.com = `origin/main`: 8 HTML-sivua sekä `app.js`, `app.css`,
  `edistyminen.js` ja `visualizer.css`.

## 6. Julkaisuesteet ja ehdot

Varsinaisia julkaisun estäviä virheitä ei löytynyt. Ehdot:

- **E1 · iPhone Safari -savutesti betassa (pakollinen, noin 15 min).**
  Testattava beta.rinnepelto.comissa oikealla iPhonella:
  1. Skaalat ja moodit → Pentatoniset: *Toista asteikkoa jatkuvasti* kuuluu, ja
     korostus etenee.
  2. Moodit: *Soita asteikko kerran* kuuluu ja päättyy. Ukko Nooa -melodia kuuluu,
     ja tabulatuuri seuraa soivaa kohtaa.
  3. Kappale, normaali ja akustinen versio: säestys, kitara ja laulu kuuluvat
     kaikki. Kitara ja laulu pois ja takaisin tauolla. Kelaus kertosäkeeseen.
  4. Pystyasennossa otelaudan vierittäminen sormella toiston aikana: otelauta ei
     palaa heti takaisin, ja seuranta jatkuu muutaman sekunnin kuluttua.
  5. *Lataa MP3* tallentaa tiedoston eikä avaa soitinta.
  Jos kohdat 1–2 eivät toimi, julkaisu on NO-GO, koska ne ovat betan uusia
  ominaisuuksia. Jos kohta 3 ei toimi, vika on myös nykyisessä tuotannossa.
  Silloin päätetään erikseen, estääkö se julkaisun.
- **E2 · Julkaisutapa.** PR `beta` → `main`, yhdistäminen *Create a merge commit*
  -vaihtoehdolla (ei squash, ei rebase). Silloin julkaisu voidaan perua yhdellä
  revertillä. Kirjaa ennen yhdistämistä Cloudflaren nykyisen tuotantojulkaisun
  tunniste.
- **E3 · Julkaisun jälkeinen tarkistus rinnepelto.comissa.**
  `kitaraharjoittelija`-sivun bundle on `v=f2f30ba6b9b1`. `/book/` toimii.
  Äänen Range-pyyntö antaa `206`. MP3-latauksen HEAD antaa `200` ja
  `Content-Disposition`-otsakkeen. Teoriasivulla ei synny konsolivirheitä.

## 7. Myöhempään kehitykseen

Nämä eivät estä julkaisua.

- **M1 (pieni riski)** `assets/edistyminen.js` muuttuu, mutta siinä ei ole
  versiotunnistetta (4 h:n välimuisti). **[P]** Palaava kävijä voi enintään neljän
  tunnin ajan saada uuden etusivun ja teoriasivun vanhalla skriptillä. Silloin
  jatkamislinkit ja teoriasivun edistymismerkinnät puuttuvat, mutta virheitä ei
  synny ja tallennetut tiedot säilyvät. Korjaus on sama `?v=`-tunniste kuin
  CSS:llä, ja sen voi tehdä ennen julkaisua tai myöhemmin.
- **M2** Mobiiliauditoinnin K2–K5 ja K7: kapea kielisarake, vaalean teeman tilavärit,
  kappaleen mobiiliasettelu, vaaka-asento ja kosketuksen viimeistely.
- **M3** Issue #9:n avoimet laitetestit (luku 4, kohta 3).
- **M4** Issuet #6, #7 ja #10 on toteutettu ja ovat jo tuotannossa **[F]**, mutta
  ne ovat auki. Ne voi sulkea, kun omistaja on vahvistanut asian. #5, #30 ja #31
  ovat uusia ominaisuuksia.
- **M5** Linkkitarkistin ei tunnista JavaScriptin käsittelemää `#oktaavit`-ankkuria.
- **M6** Pages Functionin (`/assets/audio/*`) kutsumäärää ja kustannuksia
  kannattaa seurata julkaisun jälkeen, kuten issue #9:ssä on todettu.

## 8. Cloudflare Pages ja palautussuunnitelma

- **[D]** `main`-haaran push julkaisee rinnepelto.comin automaattisesti (Cloudflare
  Pages Git -integraatio). Muut haarat saavat esikatselun. `beta` näkyy osoitteessa
  beta.rinnepelto.com.
- **[?]** Cloudflaren rakennusasetuksia (build command, julkaisuhakemisto,
  ympäristömuuttujat) ei voitu lukea tällä kierroksella, koska hallintapaneeliin ei
  ollut pääsyä. **[P]** Julkaistut tiedostot ovat tavu tavulta samat kuin
  repositoriossa. Tämä on yhdenmukaista sen kanssa, että Cloudflare julkaisee
  repon juuren sellaisenaan ja `functions/`-hakemiston Pages Functionina.
- **[F]** Haarojen automaatio (`build-beta-trainer.yml`) käynnistyy vain `beta`-pushista.
  Mainiin julkaistaessa se ei aja eikä tee committeja.

**Palautus:**

1. Nopein tapa: Cloudflare Pages → Deployments → edellinen tuotantojulkaisu →
   *Rollback*. Git-historia ei muutu. **[?]** Ominaisuus on Cloudflare Pagesin
   vakiotoiminto, mutta sen käyttöoikeutta tähän projektiin ei tarkistettu.
2. Pysyvä tapa: uudessa haarassa `git revert -m 1 <merge-commit>` ja PR mainiin.
   Ei force pushia. Huom: myöhempi uusi julkaisu vaatii silloin revertin
   kumoamisen.
3. Tallennetut tiedot: **[F]** beta vain lisää `localStorage`-avaimia. **[P]**
   Palautus vanhaan versioon ei kadota käyttäjien edistymistä. Uusien moodipolun
   avainten arvot jäävät talteen käyttämättöminä.
4. Välimuisti: **[F]** palautuksen jälkeen versioidut bundle- ja CSS-osoitteet
   vaihtuvat heti. Vain `edistyminen.js` voi olla 4 tunnin ajan uudempi versio
   (M1).

## 9. Yhteenveto

**CONDITIONAL GO.** Beta on teknisesti julkaisuvalmis.

- **[F]** Testit, rakennus, julkaisujen vastaavuus ja tallennustietojen
  yhteensopivuus on tarkistettu.
- **[F]** Tuotantomuutoksia ei menetetä, koska main on betan esi-isä.
- **[F]** iPhonen moniraitasoitin on sama kuin tuotannossa.

Ennen yhdistämistä tarvitaan yksi oikealla iPhonella tehty savutesti (E1). Betan
uutta syntetisoitua ääntä ja mobiilivieritystä ei ole koskaan kokeiltu Safarilla.
Issue #9 pysyy auki laitetestien osalta.
