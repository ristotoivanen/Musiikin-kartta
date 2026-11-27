# Issue #9: D2-soittimen integraatio, lukituspalautus ja julkaisuvalmistelu (23.11.2026)

Haara `release/issue9-d2` = ajantasainen beta (`454aee5`) + D2-ketju (#155 → #165 → #172 → #176 → #180, `4c0ee06`)
+ yksi integraatiocommit. Alkuperäiset PR:t ja commitit ovat palautuspisteinä ennallaan. Ei mergejä, ei julkaisuja.

## 1. Lähtötilanne ja julkaisuesteet

| tarkistus | tulos |
|---|---|
| beta / main | `454aee5` / `68b8a77` (työn alussa tarkistettu, vastaavat toimeksiantoa) |
| beta vs main | beta 585 committia mainia edellä, main ei mitään betaa edellä; kappaleharjoittelijan bundle on sama (`app.js?v=d9c5fc9d089b`) tuotannossa ja betassa |
| D2-ketjun pohja | `b659b85` (PR #148), molempien esivanhempi |
| ristiriidat ketju ↔ beta | **ei yhtään yhteistä tiedostoa** (ketju 30, beta 242 tiedostoa); betaan yhdistäminen ilman ristiriitoja |
| tarvittavat muutokset | #155 (`songAudio.ts` kylmäkäynnistys, vanhan soittimen palautusvaihtoehto), #165 (`bufferPlayer.ts`: yhteiset tyypit ja `createPlaybackContext`), #172 (`chunkPlayer.ts`, `mp3Layout.ts`), #176 (`progressiveLoad.ts`), #180 (`downloadProgress.ts`, `DownloadProgressLine.tsx`, `.song-load`) |
| kokeilukoodi | D1-reitti (`?soitin=d1`) poistettu; `BufferSongPlayer`-luokka jää lähdekoodiin (yksikkötestit) mutta ei ole bundlessa. Mittauskoukku `window.__kappaleD1` vain `navigator.webdriver`/`?valjas=1`. `?diag=1` erillinen. |
| PR #92 | ei integroitu; sen periaate (kellovahti + suspend → resume) toteutettu D2:lle uudelleen (`contextClock.ts`) |
| muut ominaisuustyöt | ei muutettu; Riffikaiku, Ensikeikka, muut harjoitukset: koko Playwright-sarja läpi |
| äänet | kappaleen MP3:t, Am-vamp ja `functions/assets/audio/[[path]].ts` tavu tavulta samat kuin mainissa; `check:song-audio` 10/10 |
| oikeudet | Suno-äänitteet: `assets/audio/AANITTEET-LISENSSI.md` (maksullinen tilaus, kaikki oikeudet pidätetään, vain harjoittelijan käyttöön); ei muutoksia. Ei uusia äänitteitä eikä riippuvuuksia. |
| CI | betan `build-beta-trainer.yml` (push betaan): lint, vitest, build, osa Playwrightia, cache-bust ja käännettyjen tiedostojen commit. Ei koko Playwright-regressiota → ajettu tässä erikseen. |

## 2. Lukituksen jälkeinen palautus (D2)

Riski koskee D2:ta: D2 soittaa omalla AudioContextilla, ja PR #92:n D6-tilanteessa nimenomaan kontekstin kello
pysähtyi tilassa `running`. D2:n vanha käsittely (`onstatechange`) ei tunnista tilaa, koska tila ei muutu.

Toteutus (`contextClock.ts`, `SongJourney.tsx`):

- Kellon seuranta 250 ms välein vain näkyvältä sivulta; näytteet nollataan sivun piilotuksessa ja palautuksessa.
- Soiton aikana pysähdys todetaan 1 s:n ikkunalla (kello etenee alle 0,5 × seinäkello) → toisto pysäytetään
  kuuluvaan kohtaan (kohta lasketaan pysähtyneestä kellosta, ei hyppyä eteenpäin) ja näytetään
  "Ääni pysähtyi (esimerkiksi näytön lukituksen jälkeen). Paina Soita jatkaaksesi samasta kohdasta."
- Soita-painalluksesta: `suspend()` → `resume()` (kumpikin 2 s:n aikaraja), varmistus että kello etenee (300 ms),
  sitten uudet lähteet samasta kohdasta. Palautuksen aikana lisäpainallukset ohitetaan (yksi palautus kerrallaan);
  versionvaihto kesken palautuksen peruu sen (pyyntötunniste).
- `NotAllowedError` (iOS vaatii eleen) → "Ääni ei käynnistynyt. Paina Soita uudelleen."; muu epäonnistuminen →
  soitin ja konteksti suljetaan, kohta tallennetaan, ja seuraava Soita luo uudet samaan kohtaan
  ("Ääntä ei saatu palautettua. Paina Soita, niin soitin käynnistetään uudelleen samasta kohdasta.").
- Vanhaa tai päällekkäistä ääntä ei synny: AudioBufferSourceNodet pysäytetään ennen palautusta, ja jatko luo uudet
  lähteet kuten tavallinen tauko/jatko (sama ajastus kuin hyväksytyssä D2:ssa).

Testit: `tests/contextClock.test.ts` (12: unknown/ok/stalled, iOS:n 43 ms:n renderöintijaksot, D6:n luvut,
raja 0,5, tuore pysähdys vanhan jakson jälkeen, palautus, NotAllowedError, interrupted, 2 s:n aikarajat,
puuttuva suspend, suljettu konteksti, kellon varmistus) ja `tests/e2e/song-d2-lukitus.spec.ts` (5, desktop + phone:
jäädytetty `currentTime` tilassa running → pysähtyy kohtaan ja palautuu, kolme nopeaa painallusta → yksi suspend
ja yksi soitto, epäonnistunut palautus → viesti ja uudelleenkäynnistys samasta kohdasta, sivun piilotus,
versionvaihto kesken palautuksen). Mutaatiotarkistus: palautus pois → 4/5 lukitustestiä kaatuu.

**Ei hyväksytty:** lukituspalautus vaatii fyysisen iPhone-testin (`laitetesti.md`).

## 3. Sointunäytön ajoitus: vertailu

Samat olosuhteet: sama simulaattori, sama valjas (420 kt/s, 140–250 ms viive), sama toimintaskenaario
(tauot, kelaukset, kytkennät, loop, versionvaihto latauksen aikana), versiot vuorotellen kolmella kierroksella
(a = `bad486f`, b = `4c0ee06`, c = integraatio). Koneen kuormitus 3,7–9,4 (kirjattu ajoittain).

| versio | ajo 1 | ajo 2 | ajo 3 | yli +40 ms |
|---|---|---|---|---|
| `bad486f` (laitetestattu) | −13…+30 | −9…+19 | −11…**+53** | 1/123 (+53 ms) |
| `4c0ee06` (PR #180, laitetestattu) | −12…+10 | −12…+18 | −8…+33 | 0/121 |
| integraatio | −14…+40 | −14…+15 | −9…**+45** | 1/117 (+44,6 ms) |

Kaikkien versioiden muut mittarit: raitojen ero 0,0 ms (ja tunnettu 10–17 ms:n korrelaatioartefakti kaikissa),
jatko 0,0 ms, ei odotuksia, alivuotoja eikä virheitä; yksi 445 ms:n pääsäikeen katko integraatioajossa c1
ennen skenaarion alkua (sivun latauksessa, kuorma 9,4).

Johtopäätös: ylitykset ovat yksittäisiä (1 näyte noin 120:stä) ja niitä esiintyy myös laitteella hyväksytyssä
`bad486f`:ssä, jossa ei ole etenemisnäyttöä eikä lukitusvalvontaa (sen suurin lukema +53 ms on koko aineiston suurin).
Kaikki ylitykset osuvat yksittäisiin iskuihin eri kohdissa, eivät toistu samassa kohdassa, ja ne mitataan puhtailla
äänimittauksilla (aikajanavirhe 0,0 ms) → näytön päivitys myöhästyy yksittäin simulaattorin kuormassa. Ei osoitettua
regressiota, joten äänimoottoria ei muutettu. Rajaa (−80…+40 ms) ei muutettu. **Jäljellä oleva riski:** yksittäinen
iskun näyttö voi myöhästyä 40–55 ms raskaassa kuormassa; omistaja on todennut laitteella sointunäytön seuraavan
musiikkia oikein (PR #180).

## 4. Muisti (integraatio, sama skenaario kuin aiemmin)

10 versionvaihtoa: WebContent 93–125 Mt, ei kasvua; poistuminen ja paluu 86 Mt; 3 loopin kierrosta 93–101 Mt;
3 min soitto ≤ 169 Mt; huippu 171 Mt (hyväksytty D2: 166–168 Mt). Allas enintään 4 paikkaa (46 Mt).
Versionvaihto → soi 0,30–0,35 s (ensimmäinen 1,07 s). MP3-pyynnöt 36, 32,2 Mt (6 × 200, 30 × 304), ei Range-pyyntöjä.

## 5. Testit

| testi | tulos |
|---|---|
| TypeScript | läpi |
| ESLint | läpi |
| Vitest | 48 tiedostoa, 776 testiä läpi |
| Playwright (desktop + phone, koko sarja) | 1128 läpi, 49 ohitettu, 0 virhettä |
| D2:n ajoitus (simulaattori, renderöity ääni) | 9 ajoa, kohta 3 |
| muisti, pitkä soitto, versionvaihdot | kohta 4 |
| hidas / nopea / katkeileva verkko, kelaus ja peruutus latauksessa | PR #176:n mittaukset (sama latauskoodi) + e2e (CDP-rajoitettu yhteys, katkennut vastaus) |
| saavutettavuus ja mobiili | e2e 320 px, etenemispalkin nimi, ruudunlukijailmoitukset (PR #180) |
| MP3-eheys | `check:song-audio` 10/10, SHA-256 ladattaville, tavut = main |
| Riffikaiku ja muut harjoitukset | koko Playwright-sarja (sis. riffikaiku, ensikeikka, betapelit, oppimispolut) |

Vanhan soittimen testit (learning-paths 3 testiä, song-chords, song-download, song-start-readiness,
song-volume-scales) käyttävät nyt `?soitin=vanha`; D2:n vastineet käyttäjälle näkyville toiminnoille:
`tests/e2e/song-d2-kaytto.spec.ts` (oletus ilman parametreja, kytkennät, versionvaihto ja sen säilyminen,
sointukartan osa- ja tahtihyppy, äänenvoimakkuus, MP3-lataus kesken toiston).

**Tekemättä:** fyysinen iPhone-testi (lukitus), Cloudflare-esikatselun e2e oikeaa palvelua vasten (vain bundlen ja
MP3:ien tarkistus sekä simulaattorin käsitesti), WebKit-Playwright koko sarjalle.

## 6. Tuotanto (vaihe C, vain valmistelu)

Beta on 585 committia mainia edellä (useita keskeneräisiä tai erikseen hyväksyttäviä kokonaisuuksia: Ydinopinnot,
Soinnut #116/#158, Rytmi, intervallit, Riffikaiun ja Ensikeikan uudet versiot jne.). **Betaa ei voi viedä mainiin
kokonaisuutena D2:n mukana.** Kokeiltu ja suositeltu tapa: D2:n commitit poimitaan mainin päälle omaksi haarakseen
(paikallinen kokeiluhaara `kokeilu/issue9-d2-main-poiminta`, ei pushattu):

- 8 committia (`c0b210c` … `4c0ee06` + integraatiocommit) poimittuina ilman lähdekoodiristiriitoja; ainoat ristiriidat
  käännetyissä CSS- ja HTML-tiedostoissa → mainin HTML säilytetään, vain cache-tunnisteet päivitetään, ja käännetään.
- Tulos: kappaleharjoittelijan bundle sama kuin integraatiossa; HTML eroaa mainista vain cache-tunnisteissa;
  Vitest 537/537 läpi (mainin oma testijoukko + D2:n testit). Playwright-sarjaa ei vielä ajettu tälle haaralle.
- Palautuspiste: `68b8a77` (main), tuotannon nykyinen bundle `app.js?v=d9c5fc9d089b`.
