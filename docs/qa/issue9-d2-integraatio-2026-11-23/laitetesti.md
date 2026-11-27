# Issue #9: D2-integraation viimeinen fyysinen iPhone-testi

> **Tulos (lisätty 24.11.2026):** ajettu 23.11. PR #181:n esikatselusta (`33e74e3`): A ja B1–B6 toimivat, **B7
> epäonnistui** (sovellusvaihdon jälkeen ei ääntä) → korjaus `sovellusvaihto.md` / PR #182. PR #182:n uusintatesti
> hyväksyttiin 24.11. B3–B6 on uusimatta PR #182:n jälkeen. Ohje säilyy sellaisenaan seuraavia laitetestejä varten.
> Tila: [`README.md`](README.md).

Testattava versio: integraatio-PR:n kiinnitetty Cloudflare-esikatselu (linkki ja bundle PR:n kuvauksessa).
**Ei parametreja:** D2 on oletussoitin. Testaa tavallisella osoitteella, kuten käyttäjä.

Kirjaa: iOS-versio, Safari, kaiutin / kuulokkeet (Bluetooth?), Wi-Fi vai mobiilidata, kellonajat.
Lopeta ja kirjaa heti, jos Safari lataa välilehden uudelleen, toisto ei käynnisty, sivu jumittuu tai ääni rikkoutuu.

## A. Jo hyväksyttyjen asioiden tarkistus (lyhyesti)

1. Avaa linkki, Kitaratreeni → Kappaleharjoittelu (tai suora kappalelinkki). Soita.
   Odotus: soitto alkaa ennen koko latausta, "Ladattu XX %" ja palkki näkyvät soiton aikana.
2. Kitara pois / päälle, laulu pois / päälle: muut raidat eivät katkea, tahdistus säilyy.
3. Tauko → Soita: jatkuu samasta kohdasta.
4. Kelaa loppupuolelle ennen kuin lataus on valmis: "Ladataan valittua kohtaa…", sitten soitto jatkuu oikeasta kohdasta.
5. Sointunäyttö seuraa musiikkia.

## B. Näytön lukitus (uusi, tärkein)

Toista jokainen kohta. Kirjaa jokaisesta: kuuluiko ääni, mistä kohdasta toisto jatkui (aika soittimessa ennen ja jälkeen),
näkyikö viestiä, montako painallusta tarvittiin.

1. **Lyhyt lukitus kesken soiton:** soita ~30 s, lukitse näyttö sivupainikkeella 10 s, avaa lukitus.
   Odotus: toisto on pysähtynyt lukituskohtaan (Soita kappale -painike). Paina Soita kerran → kaikki kolme raitaa
   kuuluvat 2 s:n sisällä samasta kohdasta, tahdissa.
2. **Pitkä lukitus:** soita ~30 s, lukitse 60 s (PR #92:n R1-testin pituus), avaa, paina Soita kerran.
   Odotus kuten 1. Jos näkyy "Palautetaan ääntä…", odota hetki.
3. **Ääni ei kuulu lukituksen jälkeen (PR #92:n D6-tilanne):** jos Soita näyttää soivan mutta mitään ei kuulu,
   odota 2 s. Odotus: soitin pysähtyy ja näyttää "Ääni pysähtyi (esimerkiksi näytön lukituksen jälkeen). Paina Soita
   jatkaaksesi samasta kohdasta." → yksi Soita palauttaa äänen samasta kohdasta. **Kirjaa tarkasti, jos tämä tilanne
   esiintyy**, myös se, että se ei esiintynyt.
4. **Nopeat painallukset lukituksen jälkeen:** avaa lukitus ja paina Soita kolme kertaa nopeasti.
   Odotus: ei päällekkäistä tai kaikuvaa ääntä, toisto jatkuu kerran samasta kohdasta.
5. **Lukitus latauksen aikana:** aloita soitto heti avauksen jälkeen (lataus kesken, prosentti näkyy), lukitse 20 s,
   avaa, paina Soita. Odotus: soitto jatkuu, prosentti jatkaa kasvuaan, ei virhettä.
6. **Lukitus ja versionvaihto:** soita, lukitse 10 s, avaa, vaihda versio ennen Soitaa → Soita.
   Odotus: uusi versio alkaa alusta, vanhaa versiota ei kuulu.
7. **Taustalle siirto:** soita, vaihda toiseen sovellukseen 20 s, palaa Safariin, paina Soita.
   Odotus kuten 1.

## C. Virhetilanteet

- Jos näkyy "Ääntä ei saatu palautettua. Paina Soita, niin soitin käynnistetään uudelleen samasta kohdasta.", paina
  Soita: odotus, että soitto alkaa samasta kohdasta (lataus välimuistista on nopea). Kirjaa tämä aina.
- Jos näkyy "Ääni ei käynnistynyt. Paina Soita uudelleen.", paina uudelleen ja kirjaa.

## Hyväksyntä

Lukituspalautus on hyväksytty vasta, kun B1–B4 toimivat fyysisellä iPhonella. Yksi onnistunut ajo yhdellä
laitteella ei kata kaikkia iOS-versioita; kirjaa laite ja versio. Muistimittausta ei saada ilman Mac-yhteyttä.
