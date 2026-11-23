# Issue #9: D2:n latauksen etenemisen näyttö (23.11.2026)

Kokeiluhaara `koe/ios-d2-latausnaytto` PR #176:n commitin `bad486f` päällä. `bad486f` (fyysisellä iPhonella
testattu) on muuttumaton palautuspiste. Vain käyttöliittymä: äänimoottori, latausalgoritmi, ajoitus ja puskurit
ennallaan. Ei mergejä eikä julkaisuja; lukituspalautuksen integrointi on erillinen seuraava työ.

## Omistajan laitetesti (PR #176, fyysinen iPhone, 23.11.2026)

- Uusi lataustapa toimii hyvin.
- Kitaran ja laulun poistaminen ja palauttaminen toimii.
- Kelaus lataamattomaan kohtaan jää odottamaan tarvittavaa latausta ja toimii.
- Tahdistusongelmia ei tässä testissä havaittu.

## Muutos

- Soittimen alle "Ladattu XX %" ja ohut etenemispalkki (`<progress>`, 4 px, ei animaatiota), kun MP3:ien lataus
  jatkuu taustalla, myös musiikin soidessa. Lähtötieto on soittimen todelliset saapuneet tavut kaikista kolmesta
  raidasta (`ChunkSongPlayer.downloadStatus`, uusi vain luku -ominaisuus), ei soittoaika.
- Prosentti pyöristetään alas: 100 % vasta, kun kaikki tiedostot ovat valmiit. Valmistuttua "Ladattu 100 %" näkyy
  noin 2–3 s (2 s + enintään yksi 1 s:n tarkistusväli), sitten rivi poistuu. Välimuistista valmiina tullut kappale ei välähdä.
- Kelaus lataamattomaan kohtaan: "Ladataan valittua kohtaa…" (aiemmin "Ladataan kappaletta tähän kohtaan…").
- Tuntematon kokonaiskoko (ei Content-Lengthiä): "Ladataan kappaletta…" ilman prosenttia ja palkkia.
- Versionvaihto, peruutus ja virhe piilottavat rivin ja nollaavat seurannan; uusi versio alkaa omasta 0 %:sta.
- Saavutettavuus: palkin saavutettava nimi on näkyvä teksti (`aria-labelledby`); ruudunlukijalle ilmoitetaan vain
  alku ("Kappaleen lataus jatkuu taustalla.") ja valmistuminen ("Kappale ladattu."), ei jokaista prosenttia.
- Rivi on oma komponenttinsa (`DownloadProgressLine.tsx`, `memo`): tarkistaa tilan kerran sekunnissa ja renderöityy
  vain, kun teksti muuttuu. Kappalesoittimen renderöinnit (sointunäytön iskunvaihdot) eivät renderöi sitä uudelleen.
  Ensimmäinen versio päivitti tilaa kappalesoittimessa 300 ms välein; se kevennettiin ajoitusmittausten jälkeen (alla).
- Latausvaiheessa prosenttirivi korvaa erillisen "Ladataan kappaleen raitoja…" -rivin, ettei samaa asiaa näy kahdesti.

## Tarkistukset

- Simulaattori (420 kt/s): "Ladattu 17 %" soiton alussa, kelaus 3:17:ään → "Ladataan valittua kohtaa…" + "Ladattu 58 %",
  lataus valmis → "Ladattu 100 %", odotusviesti poistui, soitto jatkui valitusta kohdasta, rivi poistui 2 s:n jälkeen.
- Ajoitus samassa toimintaskenaariossa (420 kt/s, tauot, kelaukset ja kytkennät latauksen aikana). Mac oli mittausten
  aikana kuormitettu (Microsoft Teams ≈ 3 ydintä, kuormitus 4–7), joten laitteistotestattu `bad486f` mitattiin samaan
  aikaan vertailuksi:

  | versio | ajo | aikajana | raidat | jatko | sointunäyttö − ääni |
  |---|---|---|---|---|---|
  | `bad486f` (laitetestattu) | 1 | ≤ 0,1 ms ¹ | ≤ 0,1 ms ¹ | 0,0 ms | −13…+22 ms |
  | `bad486f` (laitetestattu) | 2 | ≤ 10,1 ms ¹ | ≤ 0,1 ms ¹ | 0,0 ms | −8…+33 ms |
  | 1. versio (300 ms, kappalesoittimen tila) | 1 | ≤ 17 ms ¹ | ≤ 17 ms ¹ | 0,0 ms | −15…**+44** ms |
  | 2. versio (oma komponentti, 300 ms) | 1 | ≤ 17 ms ¹ | ≤ 17 ms ¹ | 0,1 ms | −7…+22 ms |
  | 2. versio | 2 | ≤ 10,1 ms ¹ | 0,0 ms | 0,1 ms | −13…**+42** ms ² |
  | lopullinen (memo, 1 s) | 1 | ±0,4 ms | 0,0 ms | 0,0 ms | −11…+36 ms |
  | lopullinen | 2 | ≤ 2,7 ms | 0,0 ms | 0,1 ms | −11…**+43** ms ² |
  | lopullinen | 3 | ≤ 17 ms ¹ | ≤ 17 ms ¹ | 0,0 ms | −2…+39 ms |

  ¹ Tunnettu korrelaatioartefakti (+17 ms laulu samassa kohdassa, 10,2 ms:n monikerrat jaksollisessa introssa) kaikissa
  versioissa, myös hyväksytyssä D2:ssa; yksittäiset mittausikkunat, naapurit 0,0 ms.
  ² Yli rajan (+40 ms) menneet yksittäiset sointunäytön lukemat osuivat kohtiin 37 s ja 61 s, kun lataus oli valmistunut
  33,6 s:n kohdalla ja etenemisrivi oli jo poistunut (komponentti ei tehnyt mitään). Ne eivät siis johdu
  etenemisnäytöstä vaan koneen kuormasta; myös `bad486f` ylsi samassa kuormassa +33 ms:iin. Rajaa (−80…+40 ms) ei
  muutettu. Lukemat perustuvat puhtaisiin äänimittauksiin (aikajanavirhe 0,0 ms), joten ne ovat todellista näytön
  viivettä tässä kuormassa. Suositus: laitetestissä tarkkaillaan sointunäyttöä kuten ennenkin.
- Ei odotuksia, alivuotoja eikä virheitä missään ajossa; ei pääsäikeen yli 300 ms:n katkoja.
- 320 px:n leveys (Chromium, E2E): ei vaakavieritystä.

## Testit

- `tests/downloadProgress.test.ts` (6): prosentti tavuista ja alas pyöristys, näyttö soiton aikana, 100 % ja piiloon,
  ei välähdystä välimuistista, tuntematon koko, versionvaihto/peruutus/virhe.
- `tests/chunkPlayer.test.ts` (+2): `downloadStatus` todellisista tavuista, valmis, nollaus; ilman virtaa.
- `tests/e2e/song-d2.spec.ts` (+2, Chromium desktop + phone, CDP-rajoitettu yhteys, 320 px): palkki ja kasvava
  prosentti soiton aikana, odotusviesti kelauksessa, 100 % → piiloon, ruudunlukijailmoitus, versionvaihto, ei
  vaakavieritystä; katkennut lataus → virheilmoitus ilman palkkia.
- Koko sarja: typecheck, lint, vitest 42 tiedostoa / 691 testiä, Playwright E2E 852 läpi / 42 ohitettu / 0 virhettä (desktop + phone, myös oletussoittimen testit).
- Rakennus päivittää myös Riffikaiun CSS:n (se tuo `harjoittelija/style.css`:n); uusi `.song-load`-sääntö koskee vain
  kappalesoitinta.
