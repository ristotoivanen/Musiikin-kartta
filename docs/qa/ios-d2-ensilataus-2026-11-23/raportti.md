# Issue #9: D2:n ensilatauksen kokeilu (23.11.2026)

Kokeiluhaara `koe/ios-d2-ensilataus` hyväksytyn D2:n (PR #172, commit `4444e6a`) päällä. Commit `4444e6a` on
muuttumaton vertailu- ja palautuspiste. Ei mergejä eikä julkaisuja; issue #9 pysyy avoimena.

## Omistajan laitehavainto (fyysinen iPhone, 23.11.2026)

- Kitara- ja lauluraidan voi kytkeä pois ja takaisin päälle ilman tahdistuksen katoamista.
- Toiston voi pysäyttää ja käynnistää uudelleen ilman tahdistusongelmia.
- Soitin toimii kokonaisuutena hyvin.
- Ensimmäinen lataus kesti noin 36 sekuntia.
- Kun kappale oli kerran ladattu, myöhemmät käynnistykset olivat nopeita myös sivun päivityksen jälkeen.

Muita yksittäisiä toimintoja ei ole raportoitu laitteella erikseen testatuiksi.

## 1. Syy: koko version 15,3–16,9 Mt ladataan ennen ensimmäistä ääntä

| mittaus | tulos |
|---|---|
| Hyväksytty D2, simulaattori, 420 kt/s yhteensä (140 kt/s/raita) | napautus → MP3:t ladattu **36,9 s** → kalibrointi ja ensimmäinen pala 0,44 s → ääni **37,4 s** (2 ajoa: 37,0–37,4 s) |
| Aiempi simulaattorimittaus 4,1–4,7 s | paikallinen valjas 1,4 Mt/s *yhteyttä kohden* (4,2 Mt/s yhteensä), ei vastannut laitteen verkkoa |
| Cloudflaren oma nopeustesti tältä verkolta | 220–670 kt/s, myöhemmin 91–186 kt/s → 15,3 Mt vie 25–70 s |
| Pagesin staattinen tiedosto vs. MP3 Functionin kautta (vuorotellen) | sama suuruusluokka (92–553 kt/s vs. 95–265 kt/s) → Function ei ole pullonkaula |
| Range-pyyntö Functionin kautta | Function lukee koko tiedoston ennen viipalointia, ensitavu 0,25–0,83 s (D2 ei käytä Rangea) |
| Välimuistiotsakkeet | `public, max-age=0, must-revalidate` + ETag → toistuvat käynnistykset 304:llä nopeasti (vastaa havaintoa) |

Johtopäätös: 36 s ≈ ladattava data ÷ yhteyden nopeus (~0,42 Mt/s). Purku, kalibrointi ja soitin vievät alle puoli
sekuntia. Palvelinpään asetuksilla ei voi lyhentää ensilatausta: data on pakattua MP3:a, eikä Functionia voi poistaa
(oletussoitin tarvitsee Range-tuen). Ainoa merkittävä keino on aloittaa ennen kuin kaikki on ladattu.

## 2. Muutos: virtalataus erillisessä moduulissa (`progressiveLoad.ts`)

- Raidat luetaan virtana (`response.body`) esivarattuun taulukkoon (Content-Length). Muistinkäyttö on sama kuin ennen.
- Kehysrakenne ennustetaan vakiobittinopeuden tiedostolle (Info-otsake, kaikki kehykset 576 tavua) ja on täsmälleen
  sama kuin koko tiedoston jäsennys (testattu kaikilla kuudella raidalla). Jokainen kehysotsake tarkistetaan
  saapuessaan; poikkeama → hallittu virhe. Ilman Content-Lengthiä tai varmaa ennustetta ladataan koko tiedosto ensin
  (= hyväksytty D2).
- Aloitussääntö: ensimmäiset 16 s (pala + ennakko) ladattu, ja mitatulla nopeudella (× 0,8) loppu ehtii ennen kuin
  toisto tarvitsee sen. Hitaalla yhteydellä aloitus odottaa vastaavasti pidempään.
- Soittomoottori ennallaan: ajastus, puskuriallas (≤ 4), purku, kalibrointi ja raitojen ohjaus samat. Ainoa lisäys:
  ennen palan purkua odotetaan, että sen tavut ovat saapuneet (`ready`). Ominaisuus on moottorissa oletuksena pois
  (`progressive`), ja kappalesoitin kytkee sen kokeilussa päälle; `?lataus=koko` palauttaa hyväksytyn latauksen.
- Jos toisto tarvitsee tavuja, joita ei vielä ole (kelaus lataamattomaan kohtaan, yhteys hidastuu), soitin odottaa ja
  näyttää "Ladataan kappaletta tähän kohtaan…".
- `?diag=1` näyttää laitetestiä varten latauksen vaiheet ja selaimen Resource Timing -luvut (protokolla, tavut,
  vastausaika, kesto) jokaiselle MP3:lle.

## 3. Tulokset ennen/jälkeen (iOS-simulaattori, iPhone 16 Pro)

| yhteys (valjas) | hyväksytty D2: ääni | kokeilu: ääni | koko lataus | odotukset / alivuodot / virheet |
|---|---|---|---|---|
| 420 kt/s, normaali | 37,0–37,4 s | **3,23–3,31 s** (3 ajoa) | 36,8 s (ennallaan) | 0 / 0 / 0 |
| 420 kt/s, akustinen | (~41 s) ¹ | **4,16 s** | 41,4 s | 0 / 0 / 0 |
| vaihteleva, ka. 420 kt/s (0,3–1,7 × ja katkot) | (~38 s) ¹ | **2,30–2,42 s** (2 ajoa) | 37,8 s | 0 / 0 / 0 |
| hidas 90 kt/s (juuri toistoa nopeampi) | (~170 s) ¹ | **13,6 s** | 170 s | 0 / 0 / 0 |
| toistoa hitaampi 45 kt/s | (~340 s) ¹ | **179,8 s** (aloitussääntö odotti; toisto 160 s kohdalla, kun lataus valmistui) | 340 s | 0 / 0 / 0 |
| kaikki heti saatavilla (välimuisti) | – | ajastus ja sisältö identtiset (yksikkötesti) | – | – |

¹ Hyväksytty D2 aloittaa vasta koko latauksen jälkeen; arvo = samalla yhteydellä mitattu koko latauksen aika.

Verkkoliikenne: sama data kerran (normaali 15,3 Mt, akustinen 16,9 Mt), ei Range-pyyntöjä, ei uusintalatauksia.

Ajoitus latauksen aikana (koko toimintaskenaario 420 kt/s:ssa, taukoja, kelauksia ja kytkentöjä latauksen aikana):
aikajana 0,0 ms, jatko 0,0 ms, raidat −2,7…0,0 ms, sointunäyttö −13…+15 ms; 0 odotusta, 0 alivuotoa, 0 virhettä,
ei pääsäikeen jumeja. Loopin kierroksen kitaralla sama jaksollisen intron korrelaatioartefakti (10,2 ms:n monikerrat)
kuin hyväksytyssä D2:ssa.

Muisti (sama 10 versionvaihdon + poistumisen + loopin + 3 min soiton kierros, ilman referenssi-PCM:ää):

| | hyväksytty D2 (`4444e6a`) | kokeilu |
|---|---|---|
| 10 versionvaihtoa, WebContent | 109–138 Mt | 92–138 Mt |
| 3 min soitto | 133–166 Mt | ≤ 154 Mt |
| huippu | 168 Mt | 168 Mt |
| puskuriallas | ≤ 4 paikkaa, 46 Mt | ≤ 4 paikkaa, 46 Mt |
| MP3-pyynnöt | 36 (6 × 200, 30 × 304), 32,2 Mt | identtinen |
| ensimmäinen vaihto lataamattomaan versioon → soi | 4,69 s | 0,97 s |

Kilpailutilanteet latauksen aikana (420 kt/s): 10 kelausta 40 ms välein (viimeinen kohta ei vielä ladattu → odotti
tavuja ja näytti tilan, ei väärää ääntä), 5 nopeaa versionvaihtoa, kaksi peruutusta latauksessa, 8 nopeaa
tauko/jatkoa: oikea tila ja versio, 0 virhettä, 0 alivuotoa, allas ≤ 3. Versionvaihto kesken hitaan latauksen
(90 kt/s): vanha lataus keskeytyi heti (0,59–0,92 Mt saapunut), ei soittoa, uusi versio soi. Soittimen palapurku
virtalatauksen kautta: 33/33 kohtaa bittitarkasti (ero 0).

## 4. Kevyt esilataus (arvioitu, ei toteutettu)

- Koko version esilataus sivun avautuessa: 15–17 Mt ilman käyttäjän valintaa (mobiilidata), kilpailee sivun latauksen
  kanssa. Hylätty.
- Vain alun (~0,5 Mt/raita) esilataus: Range-pyyntö (Function lukee koko tiedoston), osittaista vastausta ei voi
  yhdistää myöhempään kokonaiseen hakuun ilman omaa jatkolatauslogiikkaa (If-Range, ETag). Hyöty enintään ~2–3 s
  virtalatauksen jälkeen. Ei perusteltu nyt.
- Käynnistys jo painalluksen alussa (`pointerdown`): ~0,1 s. Merkityksetön.

## 5. Testit

- `tests/progressiveLoad.test.ts` (8): ennuste = koko jäsennys kaikilla raidoilla, ei ennustetta poikkeaville,
  virran odotus, kehysotsakkeen poikkeama → virhe, katkennut virta, aloitussääntö (nopea, toistoa hitaampi, valmis).
- `tests/chunkPlayer.test.ts` (+6): aloitus ennen koko latausta samoin näyttein, kelaus lataamattomaan kohtaan odottaa
  ja jatkaa oikeasta näytteestä, versionvaihto keskeyttää virrat ilman virhettä, katkennut virta → hallittu virhe,
  ei Content-Lengthiä → koko lataus, kaikki heti saatavilla → identtinen ajastus ja sisältö.
- `tests/e2e/song-d2.spec.ts` (+1): Chromium, CDP-rajoitettu ~1,5 Mbit/s yhteys: toisto alkaa alle puolen latauksen
  kohdalla, ei alivuotoja, palat bittitarkat.
- Koko sarja: typecheck, lint, vitest 41 tiedostoa / 683 testiä, Playwright E2E 848 läpi / 42 ohitettu / 0 virhettä.

## 6. Riskit

- Yhteyden katkeaminen kesken soiton näkyy virheenä vasta, kun puuttuvia tavuja tarvitaan (ennen virhe tuli ennen
  soittoa). Soitin pysähtyy hallitusti ja näyttää viestin.
- Yhteys voi hidastua ennustettua enemmän: soitin odottaa ja näyttää tilan, ajastus ei siirry (aukko kirjataan).
- Kehysrakenteen ennuste olettaa vakiokokoiset kehykset; poikkeava tiedosto → virhe tai koko lataus, ei väärää ääntä.
- Lisää koodia latauspolkuun (~150 riviä); soittomoottorin muutos rajattu odotukseen ennen palan purkua.
