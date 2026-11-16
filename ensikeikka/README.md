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
| `first-gig.ts` | Ensikeikka – Kotikulman keikka (kappaleet 10–12); käsikirjoitus `KOTIKULMAN-KEIKKA.md` |
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
- **`compare`** – Kuuntele saman kohdan kaksi versiota (`versions`) ja kerro, mikä osa muuttui
  (basso, soinnut tai melodia). Muut osat soivat näytteen tarkkuudella samoin. Tarkin vihje avaa
  osien erilliskuuntelun ("Vertaa vain bassoa").
- **`continue`** – Kuuntele alku (`openingBars`) ja kaksi kokonaista jatkoa (kappaleen `takes`).
  Valinta ratkeaa soittamalla koko kappale valitulla jatkolla, ja palaute tulee esityksen jälkeen.
  Arvio perustuu bändin tavoitteeseen (`goal`), joten molemmat jatkot voivat olla musiikillisesti toimivia.
  Jatkot numeroidaan (Jatko 1, Jatko 2), ja tekstit viittaavat niihin paikkamerkeillä `{A}`/`{B}`.
- **`reason`** – Valitse väite, joka selittää kuulemasi ratkaisun. Basson erilliskuuntelu vaaditaan
  ennen tarkistusta, jos `isolate` sisältää basson.

**Kuunteluperiaate (kaikki tehtävätyypit):** lopetuspainike soittaa lopetuksen ratkaisevan kohdan.
Soivan lopetuksen painaminen pysäyttää sen, ja toinen lopetus pysäyttää edellisen heti. Valintatehtävässä
sama painallus myös valitsee lopetuksen (`aria-pressed`). Valinta säilyy, vaikka toisto pysähtyy.
Toiston tila (mikä soi) on `GigPlayer`in omassa tilassa, ei tehtävän tilassa. Lopetus on "kuultu"
vasta, kun se soi loppuun. Keskeytys ei kuittaa sitä, eikä vanhan toiston myöhäinen päättymistapahtuma
vaikuta, koska `usePlayback` hylkää vanhentuneet kutsut. Erillistä "Kuuntele valittu lopetus"
-painiketta ei ole; "Kuuntele koko kappale valitulla lopetuksella" ja erilliskuuntelut säilyvät.

**Onnistumiskortti:** oikean ratkaisun jälkeen näkyy yksi kortti, joka säilyy koko loppuajan. Siinä on
viimeisen tehtävän onnistumispalaute, avattava "Selitä, miksi tämä toimii" (selitys ja ratkaisevan
kohdan kuuntelu) sekä "Soita valmis kappale". Kun kappale on kuultu loppuun, samaan korttiin ilmestyy
valmistumisilmoitus (`aria-live`) ja jatkopainikkeet. Ensisijainen painike on seuraava kappale, seuraava
keikka tai settilista, ja toissijainen on "Kuuntele uudelleen". Soittopainike on sama elementti kuin
"Kuuntele uudelleen", joten fokus ei siirry. Selityksen avoin tila säilyy. Uudelleenkuuntelu ei tallenna
mitään, ja keskeytetty toisto ei valmista kappaletta. Tilakoneen vaiheet `perform` ja `complete` säilyvät,
mutta näkymä on sama. Jokaisen kappaleen selitys käsittelee myös väärät vaihtoehdot (yksikkötesti).

Tehtävän `span: [alku, loppu]` rajaa ratkaisevan kohdan tahteihin. Katkelma leikataan ja häivytetään.

**Versiot (`variants`):** saman taidon toiset musiikkiesimerkit. Opetus käyttää kappaletta sellaisenaan.
Harjoittelukierros arpoo version, jota ei juuri kuultu (`songVersion`, `versionCount`). Tunniste ja
tallennus pysyvät samoina.

**Arvotut kierrokset (`rounds`):** kappaleen tehtävät voidaan arpoa joukosta jokaisella yrityksellä
(soundcheck, `drawSoundcheck`). Arvonta tallentuu yritykseen (`Attempt.rounds`), ja `songVersion`
rakentaa siitä tehtävät ja selityksen. Etenemisen yritys arpoo kierroksensa kerran sivun aikana,
harjoittelu joka kierroksella. Tallenne ei muutu.

**Keikan biisit (`finale`):** keikan viimeisen vaiheen jälkeen "Kuuntele keikan biisit" soittaa
`finale.songs`-kappaleet peräkkäin opetusversioina hyväksytyillä ratkaisuilla (`target`) ja lopuksi
aplodit (`renderFinale`). Esitys ei riipu harjoittelusta eikä tallennetusta tilasta. `finale.note`
kertoo kortissa, mitä esitys sisältää. Ensikeikalla soundcheck ei ole mukana. `unit` vaihtaa keikan
laskurin sanan (esim. "vaihetta"), ja `completionSummary` vaihtaa valmistumiskortin yhteenvedon.

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

- Viittaa lopetukseen paikkamerkillä: `lopetus {A}`, ei `lopetus A`. Harjoittelussa paikkamerkki
  täytetään kirjaimella, jolla pelaaja näkee juuri sen lopetuksen. Testi estää kirjoitetut kirjaimet.
- Kirjoita selityksiin sävelnimi muodossa "sävel A", jottei sitä lue lopetuksen kirjaimeksi.

- Ennen oikeaa vastausta tekstit eivät nimeä oikeaa säveltä (testi tarkistaa sävelnimet).
- Väärän vastauksen palaute kertoo, mitä valittu lopetus tekee ja mitä kannattaa kuunnella seuraavaksi.
- Vihjeitä on kaksi tasoa: ensin kuuntelun suunta, sitten tarkempi keino.
- "Miksi tämä vastaus?" saa käyttää sävel- ja sointunimiä, koska vastaus on jo löydetty.

## Eteneminen ja tallennus

`localStorage['musiikin-kartta:ensikeikka'] = { "version": 1, "completed": [1, 2, …] }`

- Keikan kappaleet avautuvat järjestyksessä. Keikasta lasketaan vain alusta yhtenäinen osa.
- Keikka 2 avautuu, kun keikka 1 on valmis. Jos keikasta 2 on jo suorituksia, se pysyy auki.
- Ensikeikka (keikka 3, `requires: [1, 2]`) avautuu, kun Ensitreenit eli keikat 1 ja 2 ovat valmiit.
  Myös sen voi aloittaa suoraan tai kokeilla vapaasti. Esiintymisalue valmistuu vasta kaikkien kolmen
  keikan jälkeen. Näkyvä nimistö (Ensitreenit, Keikkakalenteri) on jatkokehitystä, ja tekniset
  tunnisteet (`#keikka-3`, kappaleet 10–12) pysyvät.
- **Suora aloitus** (`directStart`): kokenut pelaaja voi aloittaa lukitun keikan 2 ensimmäisestä
  kappaleesta. Suoritukset tallentuvat normaalisti, keikka 1 ei merkitse itseään suoritetuksi, ja
  esiintymisalue valmistuu vasta molempien keikkojen jälkeen. Kun keikasta on yksi suoritus, se on auki.
- **Vapaa harjoittelu** (`#harjoitus-N`): suoritetut kappaleet ja `freePractice`-keikan kaikki
  kappaleet. Ei koskaan muuta tallennetta. Jokainen harjoittelukierros arpoo lopetusten näkyvän
  järjestyksen (`order.ts`), ja järjestys pysyy samana koko kierroksen ajan. Normaali eteneminen
  käyttää aina alkuperäistä järjestystä. Kappalenäkymä kertoo, tallentuuko tulos.
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
tehollisarvosta. Erikseen kuunneltu basso korostaa 2.–6. yläsäveltä, jotta kulku kuuluu myös
puhelimen kaiuttimesta. Keikan 2 sovitukset käyttävät kirkkaampaa bassoa (`BRIGHT_BASS`), koska
tehtävät perustuvat basson kuulemiseen. Testi mittaa tämän 300 Hz:n ylipäästön läpi.

Koko sivu käyttää yhtä `TakePlayer`ia ja AudioContextia (`usePlayback.ts`). Näkymästä poistuminen
pysäyttää soiton mutta ei sulje kontekstia.

## Testit

```bash
npx vitest run tests/ensikeikka*
npx playwright test tests/e2e/ensikeikka.spec.ts tests/e2e/ensikeikka-toinen-ilta.spec.ts tests/e2e/ensikeikka-kotikulman-keikka.spec.ts tests/e2e/betapelien-navigointi.spec.ts
```

Ensikeikan selaintestit eivät odota pitkiä soittoja. Kun oikea toisto on käynnistynyt, testi kutsuu
ääniolion `ended`-käsittelijää, ja sovellus käsittelee sen kuin luonnollisen loppumisen. Ensitreenien
testit odottavat soitot loppuun asti, joten oikea toisto on testattu myös kokonaan.
