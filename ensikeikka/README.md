# Ensikeikka – kehitysohje

Ensikeikka on sävelkorvapeli, jossa pelaaja kuuntelee lyhyitä bändikappaleita ja ratkaisee,
miten melodia ja harmonia päättävät ne. Peli julkaistaan hakemistoon `pelit/ensikeikka/`
(`npm run build`), ja sen lähteet ovat tässä hakemistossa.

## Rakenne

| Tiedosto | Tehtävä |
| --- | --- |
| `tasks.ts` | Tehtävätyypit (`choose`, `match`, `reason`), kappaleen ja keikan tyypit |
| `catalog.ts` | Esiintymisalue, keikat ja kappaleet 1–9. `renderSong` renderöi minkä tahansa kappaleen |
| `song-demo-score.ts`, `approved-songs.ts` | Keikan 1 sovitukset (ennallaan) |
| `second-night.ts` | Keikan 2 sovitukset, lopetukset, tehtävät ja palautteet |
| `arrangement.ts` | Synteettinen bändi: rummut, basso, komppi ja melodia kerroksina |
| `GigPlayer.tsx` | Kappaleen näkymä: tehtävä, vaiheet, valmiin kappaleen soitto |
| `main.tsx` | Alku, keikkalista, osoitteet ja eteneminen |
| `setlist.ts`, `progress.ts` | Etenemisen säännöt ja tallennus |
| `usePlayback.ts`, `audio.ts` | Yksi soitin kerrallaan; uusi soitto pysäyttää edellisen |

## Tehtävätyypit

- **`choose`** – Kuuntele keskeneräinen kappale ja kolme lopetusta, valitse yksi. Lopetus voi vaihtaa
  melodian viimeistä säveltä (`lead`), bändin loppusointua (`chord`) tai molempia. `isolate`
  lisää painikkeet, joilla valitun lopetuksen ratkaisevan kohdan voi kuunnella vain bassona tai melodiana.
- **`match`** – Kuuntele kaikki lopetukset ja tunnista kuvauksen mukainen lopetus jokaiseen
  kysymykseen. Käytetään, kun useampi lopetus on musiikillisesti toimiva eikä yhtä voi merkitä vääräksi.
- **`reason`** – Valitse väite, joka selittää kuulemasi ratkaisun. Basson erilliskuuntelu vaaditaan
  ennen tarkistusta, jos `isolate` sisältää basson.

Kappaleella voi olla useita tehtäviä peräkkäin (`tasks`). Väliin näytetään onnistumispalaute ja
"Jatka vaiheeseen N". Valmis kappale soitetaan lopetuksella `target`.

## Uuden keikan lisääminen

1. Kirjoita kappaleet samaan tapaan kuin `second-night.ts`. Anna kappaleille **uudet, koko pelissä
   yksilölliset tunnisteet** (seuraavaksi 10–). Tallenne käyttää niitä suoraan.
2. Lisää keikka `catalog.ts`:n `area.gigs`-listaan. `requires` kertoo, minkä keikan jälkeen se
   avautuu, ja `freePractice` sallii kappaleiden kokeilun ilman tallennusta.
3. Lisää musiikkiteoreettiset tarkistukset ja ääniesimerkkien mittaukset testeihin
   (`tests/ensikeikka-second-night.test.ts` on malli) sekä selaintesti (`tests/e2e/`).

Käyttöliittymään ei tarvitse lisätä kappalenumeroihin sidottuja ehtoja. Kaikki tehtäväkohtainen
teksti (ohje, vihjeet, palaute) on datassa.

### Palautteen periaatteet

- Ennen oikeaa vastausta tekstit eivät nimeä oikeaa säveltä (testi tarkistaa sävelnimet).
- Väärän vastauksen palaute kertoo, mitä valittu lopetus tekee ja mitä kannattaa kuunnella seuraavaksi.
- Vihjeitä on kaksi tasoa: ensin kuuntelun suunta, sitten tarkempi keino.
- "Miksi tämä vastaus?" saa käyttää sävel- ja sointunimiä, koska vastaus on jo löydetty.

## Eteneminen ja tallennus

`localStorage['musiikin-kartta:ensikeikka'] = { "version": 1, "completed": [1, 2, …] }`

- Keikan kappaleet avautuvat järjestyksessä. Keikasta lasketaan vain alusta yhtenäinen osa.
- Keikka 2 avautuu, kun keikka 1 on valmis. Jos keikasta 2 on jo suorituksia, se pysyy auki.
- **Vapaa harjoittelu** (`#harjoitus-N`): suoritetut kappaleet ja `freePractice`-keikan kaikki
  kappaleet. Ei koskaan muuta tallennetta.
- **Uudelleenkuuntelu** (`#kappale-N` suoritetulle kappaleelle): valmis kappale ja selitys.
- **Keikan uudelleenharjoittelu**: valmiin keikan kortin painike avaa kappaleet harjoitustilassa järjestyksessä.
- Versio pysyy 1:nä tarkoituksella. Vanha pelin versio lukee samasta tallenteesta kappaleet 1–5,
  ja uusi versio säilyttää tallennettaessa tuntemattomat tunnisteet.

## Osoitteet

`#keikkalista`, `#keikka-N` (keikan settilista auki, `#settilista` = keikka 1), `#kappale-N`,
`#harjoitus-N`. Jokainen siirtymä lisää selainhistoriaan merkinnän. Lukitun kappaleen osoite
ohjautuu keikan korttiin.

## Ääni

`renderTake` kokoaa miksauksen kerroksista. Keikan 1 kappaleiden ääni on näytteen tarkkuudella sama
kuin ennen moottorin laajentamista. Testi vertaa sitä `tests/fixtures/ensikeikka-arrangement-v1.ts`:ään.
Erilliskuuntelu (`renderIsolated`) nostaa valitun osan 0,8-kertaiseksi koko bändin
tehollisarvosta, jottei basso hukkuisi puhelimen kaiuttimessa.

## Testit

```bash
npx vitest run tests/ensikeikka*
npx playwright test tests/e2e/ensikeikka.spec.ts tests/e2e/ensikeikka-toinen-ilta.spec.ts tests/e2e/betapelien-navigointi.spec.ts
```
