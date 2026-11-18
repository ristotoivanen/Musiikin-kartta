# Yhtenäinen oppimisympäristö: tekninen päätösloki

Tehtävä: neljä pääosiota (*Opi & oivalla · Musapelit · Kitaratreeni · Soittopakki*) ja yksi yhteinen
Oppimiskartta. Haara `claude/tender-maxwell-59f4we`, pohjana `origin/beta` @ `6562e141cd6f6beeb9dd1fb02134e276a2983ab8`.

## A. Tarkistettu lähtötilanne (18.11.2026)

| Kohde | Tila | Vaikutus tähän työhön |
| --- | --- | --- |
| PR #109 intervallien kortit ja monivalinta | Draft, ei hyväksytty | Intervallipilotti (vaihe F) **estynyt**. `book/osa-2.html`:n ja intervallitiedostojen sisältöön ei kosketa. |
| PR #110 H-nimityksen rajaus (#109:n päällä) | Draft | Sama kuin #109. |
| PR #111 numeroimaton johdanto, generaattori | Draft, ei hyväksytty | `rakenna.py`:n koodiin, `aiheet.json`:iin, `edistyminen.js`:ään, `oppimiskartta.js`:ään ja etusivun aloituslohkoon ei kosketa. |
| Erillinen *Ensimmäiset neljä iskua* -oppitunti | Ei toteutusta | Ei vaikutusta. |
| PR #53 oppimisarkkitehtuuri | Draft-suunnitelma | Periaatteet noudatettu: yksi taito, eri harjoitusmuodot, vapaa siirtyminen. |
| Issue #54 | Kolmijako kirjattu 18.11. suunnitteluehdotuksena | Toimeksianto valtuutti valmistelun, kun riippuvuudet ovat hallinnassa. |
| Kitaran perusteiden *Merkitse tehdyksi* | Ei betassa | Ei toteutettu (edistymislogiikka on #111:n alueella). |
| Projektin Claude Code -ohjeet | PR #107, ei betassa | Työ noudattaa toimeksiannon ohjeita. |

Koeyhdistys erillisessä työpuussa (ei pushattu): tämä haara + #111 → ristiriidat vain 81 generoidussa
`oppi/`-sivussa (`?v=`-rivit), ja ne ratkesivat ajamalla `rakenna.py` ja `rakenna-osiot.py` uudelleen.
Sen päälle #110 (sisältää #109:n) → `book/osa-2.html`:ssä vain tyylien versiotunnisteet
(ratkeaa: `node tools/versioi-tyylit.mjs`). `assets/oppimiskartta.js`:n ristiriita on #110:n ja #111:n
välinen ja on olemassa ilman tätä haaraa (`git merge-tree`).

## B. Navigaation vaihtoehdot

| Vaihtoehto | Hyvää | Ongelmat | Päätös |
| --- | --- | --- | --- |
| **1. Aina näkyvä valikko, puhelimessa 2 × 2 -ruudukko** | Neljä oppimistapaa näkyvät heti, toimii ilman JS:ää, ei uutta komponenttia, 44 px kosketusalueet | Puhelimessa yläpalkki vie noin 150 px | **Valittu** |
| 2. Avattava ”hampurilaisvalikko” puhelimessa | Säästää tilaa | Piilottaa juuri sen, mitä uudistus haluaa näyttää. Vaatii JS:n ja fokuksen hallinnan. Yksi klikkaus lisää | Hylätty |
| 3. Kiinteä alapalkki puhelimessa | Peukalon ulottuvilla | Peittää Riffikaiun ja harjoittelijan kiinteitä painikkeita ja vaatii erillisen tulostus- ja zoomausratkaisun | Hylätty |

Oppimistapojen näkymät: pääosion sivu on järjestetty samojen kahdeksan aiheen mukaan ja samoilla
tunnisteilla (`#aihe-rytmi`, `#aihe-nuotit` …) kuin etusivun Oppimiskartta. Vaihtoehtona arvioitu
sovelluslähtöinen lista (pelit ilman aiheita) hylättiin, koska silloin oppimistavan vaihto pakottaisi
käyttäjän aloittamaan navigoinnin alusta.

## C. Yhteinen rakenne

- **Ei uutta sisältöjärjestelmää.** `aiheet.json` on yhä aiheiden ainoa lähde (nimet, numerot, tunnisteet).
- `tools/oppimiskartta/sisaltorekisteri.json` kuvaa vain sen, mitä `aiheet.json`:ssa ei ole: pääosiot,
  sovellukset ja työkalut (tunniste, nimi, aiheet, oppimistapa, osoite, saatavuus, nykyinen tulosavain ja
  tuloksen laji) sekä minkä oppimistavan alla olemassa oleva Oppimiskartan sivu näytetään.
- Oppimiskartan sivun otsikko, aihe ja suoritustunniste luetaan muodostetusta sivusta. Niitä ei kopioida.
- `rakenna-osiot.py` validoi puuttuvat osoitteet, ankkurit, tuntemattomat aiheet, kahdesti käytetyt tunnisteet,
  osoitteettomat suunnitellut työkalut sekä aihesivujen työkalulinkkien ristiriidat rekisterin kanssa.
- Päävalikon osiot ovat rekisterissä. Skripti päivittää valikon juuren ja book-kansion sivuille.
  `rakenna.py` kopioi valikon `book/osa-2.html`:stä muuttamattomana, ja Ensikeikan käännös kopioi sen
  `musapelit.html`:stä.

**Jatkotyö #111:n jälkeen:** siirretään `aiheet.json`:n `tools`-linkit rekisteriin ja lisätään Oppimiskartan
aihesivuille sama *Sama aihe: Musapelit · Kitaratreeni* -vaihto. Nyt se on vain uusissa näkymissä, koska
aihesivut muodostaa `rakenna.py`.

## D. Sisällön sijoittelun perusteet (pedagoginen arvio)

- **Musapelit**: vain tehtävät, joissa on vuorovaikutteinen tunnistus ja palaute: Ensikeikka,
  Riffikaiku-peli, Sävelten etsintä, Tunnista avoin sointu sekä oppituntien kuuntelutehtävät *Mikä aste soi?*,
  *Tunnista sointutyyppi* ja *Mikä sointu tulee?*. Pelkkä äänite ilman palautetta ei ole peli.
- **Kitaratreeni**: harjoittelija- ja Riffiharjoitus-sovellukset sekä ne 33 oppituntien harjoitusta ja 3 Kitaran perusteiden oppituntia, joiden
  ohjeessa soitetaan tai etsitään säveliä omalla kitaralla. Kirjallisiksi jätettiin *Rakenna kolme sointua
  G-duurista*, *Lisää septimi G-duurin sointuihin* ja *Nimeä sävel muodon avulla*. *Löydä pulssi ja ykkönen*
  (taputus ja laskeminen) jää Opi & oivalla -osioon.
- Yksi sisältö kuuluu vain yhteen oppimistapaan. Virtuaalinen valinta tai kuuntelu ei näy oikean kitaran
  harjoituksena (testi `tests/osiot.test.ts`).
- Mikään näkymä ei näytä suoritustilaa eikä väitä taitoa hallituksi. Kitaratreeni kertoo, että
  *Merkitse tehdyksi* on oma kuittaus. Tallennusavaimia ei luoda, lueta uusissa näkymissä eikä muuteta.
- Opetussisältöön, oikeisiin vastauksiin, pisteytykseen tai H/B-linjaukseen ei tehty muutoksia.

## E. Soittopakki

- **Otelautaopas** (ennallaan) ja kolme valmiiksi rajattua näkymää olemassa olevilla URL-parametreilla:
  asteikot (`?toonikka=A&asteikko=mp`), sointukartta (`#soinnut`) ja oktaavit (`?toonikka=A#oktaavit`).
  Kitaratreeni avaa samat näkymät aiheeseen sidottuina (`&aihe=…` → *Takaisin aiheeseen*).
- **Viritin** on Riffiharjoituksen sisällä (beta). Soittopakki ohjaa sinne eikä esitä sitä erillisenä
  työkaluna. Erillistä äänisessiota ei avata, joten päällekkäisiä mikrofoni- tai äänisessioita ei synny.
- **Metronomi** kirjataan rekisteriin saatavuudella `suunniteltu` (#84), mutta sitä ei näytetä.
- Upotettava metronomi tai itsenäinen viritin edellyttää äänimoottorin yhteistä hallintaa (#84). Ei toteutettu.

## Muuttuneet ja säilyneet osoitteet

- Uudet: `musapelit.html`, `kitaratreeni.html`, `soittopakki.html`.
- Säilyneet: kaikki aihe-, luku-, harjoitus-, peli-, kirja- ja työkaluosoitteet, `?polku=`, `?tila=`, `?aihe=`,
  `?toonikka=`, `#soinnut` ja `#oktaavit`. Vanha `index.html#harjoittelija` vie edelleen Otelautaoppaaseen.
- Ainoa käyttäjän kokema reittimuutos: Otelautaoppaaseen ja Kitaraharjoittelijan aloitusvalikkoon pääsee
  päävalikosta nyt Soittopakin tai Kitaratreenin kautta (yksi klikkaus lisää). Suorat osoitteet toimivat ennallaan.
