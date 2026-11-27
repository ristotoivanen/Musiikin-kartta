# PR #179 · beta-julkaisun valmistelu (27.11.2026)

Hyväksytty toteutus `20123da` siirretty haaraan `claude/116-otelauta-ydinopinnot` (fast-forward) ja yhdistetty betaan `07d8126` merge-commitilla `2a2ba1a`. Otelaudan toteutustiedostot ovat muuttumattomat `20123da`:hon nähden. Ainoa konflikti: `tools/oppimiskartta/rakenna.py` (säilytetty sekä Sävelnimien että Otelaudan lataus). Generoiduissa sivuissa on lisäksi betan linkkimuutokset.

## Testit yhdistetyllä tilalla (paikallisesti, macOS)

| Testi | Tulos |
|---|---|
| `npm run check` | läpi, Vitest 836/836 |
| Koko Playwright Chromium (desktop + phone), 3 työntekijää | 1 313 läpi, 50 ohitettu, 27 kaatui (koneella ajoi samaan aikaan toinen testisarja) |
| Kaatuneet uudestaan, 1 työntekijä | desktop: kaikki läpi; phone: 4 kaatui |
| Samat 4 muuttamattomalla betalla `07d8126` | kaikki 4 kaatuvat samoin → lähtötilan virheitä |
| Otelauta WebKit | 74 läpi, 2 kaatui (T1, T2) |

## Tunnetut lähtötilan virheet

- **T1, T2** (WebKit, 01 sarkainnäppäintesti) ja **T3** (03 nimeä -vieritys, satunnainen): ks. [tunnetut-ongelmat.md](tunnetut-ongelmat.md).
- **B1** `aihesivut.spec.ts` · Kitaran perusteet · jokainen askel ja resurssi löytyy (phone)
- **B2** `aihesivut.spec.ts` · ristiinlinkitys avaa saman opetussivun … (phone)
- **B3** `otelautaopas-beta.spec.ts` · Soittopakin Otelautaopas on tämä sivu BETA-merkinnällä (phone)
- **B4** `practice.spec.ts` · Opettele näyttää oikean kohdan heti … (phone)

B1–B4 eivät koske Otelaudan Ydinopintoja; testejä ei muutettu.

## PR #178 (`6f17abf`)

#178 on jo ristiriidassa nykyisen betan kanssa (`rakenna.py`). #179:n yhdistämisen jälkeen ristiriitoja on viidessä tiedostossa:
- `tools/oppimiskartta/rakenna.py`: säilytettävä kaikki latauslohkot (savelnimet, otelauta, melodia).
- `tests/e2e/{aihesivut,aihelista,lukumerkinnat}.spec.ts`, `tests/oppimiskartta-kokonaisuudet.test.ts`: käytettävä #179:n `progress_text`-pohjaista muotoa.
Generoidut sivut regeneroidaan yhdistämisen jälkeen.

## Avoimet (ei estä beta-yhdistämistä, omistajan hyväksymät)

N8–N10, 02:n tulosrivin näkymäsijainti, VoiceOver, fyysisen iPhonen kuuntelutesti, oikean kitaran käyttäjäkoe, 400 % reflow, vähennetty liike. Käyttäjätestausohje: [kayttajatestausohje.md](kayttajatestausohje.md).
