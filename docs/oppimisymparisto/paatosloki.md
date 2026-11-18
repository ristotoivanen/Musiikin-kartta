# Yhtenäinen oppimisympäristö: tekninen päätösloki

Tehtävä: neljä pääosiota (*Opi & oivalla · Musapelit · Kitaratreeni · Soittopakki*) ja yksi yhteinen
Oppimiskartta. Haara `claude/tender-maxwell-59f4we`, pohjana `origin/beta` @ `6562e141cd6f6beeb9dd1fb02134e276a2983ab8`.

## Päätösten tila

Tässä lokissa erotetaan kolme asiaa. Merkinnät myöhemmissä kohdissa viittaavat näihin.

| Laji | Sisältö |
| --- | --- |
| **Omistajan nimenomainen päätös** | Alkuperäinen toimeksianto (18.11.2026): neljän pääosion nimet täsmälleen *Opi & oivalla · Musapelit · Kitaratreeni · Soittopakki*, kahdeksan aiheen yhteinen Oppimiskartta, Soittopakin sisältö (Otelautaopas, metronomi, viritin, muut myöhemmin), ei uusia pelejä tai soittomoottoreita, H/B-linjaus sekä vanhojen osoitteiden ja tallennusten säilyttäminen. |
| **Katselmoinnissa alustavasti hyväksytty** (ei omistajan lopullinen hyväksyntä) | Katselmointi 1: neljän pääosion perusrakenne sekä Riffikaiun sijoittelu (peli Musapeleissä, harjoitus Kitaratreenissä). |
| **Katselmoinnin suositus omistajalle** (toteutettu suosituksen mukaisesti, odottaa omistajan vahvistusta) | Katselmointi 2: (1) alareunan päällekkäisen aihepaluun poisto; (2) ei kiinteää paluupainiketta pitkille sivuille ennen oikean puhelimen testiä, tarvittaessa kevyt *Takaisin alkuun* -linkki; (3) luokittelu *Soita* / *Korvalla kitaralle* alustavasti; (4) *Mikä sointu tulee?* myös aiheeseen Soinnut ja harmonia samalla sisällöllä ja suoritustunnisteella. |
| **Katselmoinnin korjausvaatimus** (toteutettu) | Katselmointi 1: oppimistavan säilyminen, rekisterin joustavuus, aihesivujen vaihto, alareunan paluu, riippuvuudet, pedagoginen tarkistus. Katselmointi 2: `?tapa=` vain saman oppimistavan kohdesivuille. Katselmointi 3: lisäaihelinkin paluukonteksti Opi & oivalla -osiossa, sovelluksen tilan huomioiva oppimistavan kelpoisuus ja tämän lokin täsmennys. |
| **Toteuttajan oma ratkaisu** | Tekniset ja käytettävyysratkaisut, joihin toimeksianto valtuutti (esim. 2 × 2 -valikko, `?tapa=`-parametri, rekisterin rakenne). Perustelut alla. |

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

**Rekisterin joustavuus (katselmointikorjaus 2).** Sisällöllä voi olla useita aiheita (`aiheet`, oppisivuilla
`lisaaiheet`) ja oppimistapoja (`tavat`). Yhden oppimistavan pakkoa ei ole. Erottelu tehdään todellisen tehtävän
perusteella: Musapelit hyväksyy välineet *kuuntelu*, *virtuaalikitara* ja *otelautakuva* sekä oppisivuilla
vain vuorovaikutteisen kuuntelutehtävän (sivulla on `data-korvatreeni`). Kitaratreeni hyväksyy vain *oikean
kitaran* ja oppisivuilla tehtävälajit *Soita* ja *Korvalla kitaralle*. Siksi pelin tulosta ja oikealla kitaralla
harjoittelua ei voi kirjata samaksi merkinnäksi. Riffikaiku on kaksi sisältöä samassa sovelluksessa: peli
Musapeleissä ja harjoitus Kitaratreenissä. Testit: `tests/osiot.test.ts` (hyväksytyt ja hylätyt rekisterit).

## C2. Oppimistavan säilyminen (katselmointikorjaus 1)

- Musapeleistä ja Kitaratreenistä avatut linkit saavat parametrin `?tapa=pelit` tai `?tapa=kitara`.
  `assets/oppimistapa.js` ohjaa silloin aihepaluun (*← Kitaratreeni: Rytmi*) ja työkalujen Takaisin-linkin
  samaan oppimistapaan ja aiheeseen, ja päävalikko näyttää osion aktiivisena.
- **Jäsenyystarkistus (korjauskierros 2):** `rakenna-osiot.py` kirjoittaa skriptin tietolohkoon kunkin
  oppimistavan sivut ja aiheet, joissa ne näkyvät (`MODES.*.sivut`). Oppimistapa on voimassa vain näillä
  sivuilla. Edellinen/Seuraava saa parametrin vain, kun kohdesivu kuuluu samaan oppimistapaan.
  Esimerkki: Kitaratreenin *Alas–ylös yhdellä soinnulla* → Edellinen *Löydä pulssi ja ykkönen* avautuu ilman
  parametria, Opi & oivalla aktiivisena ja paluulla *← Rytmiin*. Seuraava *Kaksi sointua yhdessä tahdissa*
  pysyy Kitaratreenissä. Jos osoitteeseen lisätään `?tapa=` käsin sivulle, joka ei kuulu oppimistapaan,
  parametri ohitetaan.
- Sisältö voi näkyä oppimistavassa useassa aiheessa. Lisäaiheesta avattaessa linkissä kulkee myös `?aihe=…`,
  jotta paluu osuu samaan aiheeseen.
- **Vanhat suorat osoitteet eivät muutu:** ilman parametria ja ilman JavaScriptiä paluu toimii kuten ennenkin.
  Parametri ei päädy tallennuksiin, koska `edistyminen.js` käyttää vain polkua.
- Vaihtoehto `sessionStorage` (muistettu viimeisin oppimistapa) hylättiin. Se olisi muuttanut myös vanhojen
  suorien osoitteiden käytöstä ja jäänyt voimaan seuraaviin käynteihin.
- Tunnettu raja: jos Riffikaiun sisällä vaihtaa pelistä harjoitukseen, sovelluksen oma linkki säilyttää vain
  `aihe`-parametrin. Paluu vie silloin Oppimiskartan aiheeseen. Korjaus kuuluisi Riffikaiun koodiin
  (`riffikaiku/modes.ts`), jota tämä PR ei muuta.

## C2b. Sovelluksen tila ja Opi & oivalla -lähtöaihe (katselmointi 3)

- **Sovelluksen tila:** sama tiedosto voi sisältää eri oppimistapoja (`riffikaiku.html?tila=peli` / `?tila=harjoitus`,
  `kitaraharjoittelija.html?polku=…`). Rekisterin `tunnistus` nimeää ne osoitteen parametrit, jotka erottavat
  sisällön. `MODES.*.sivut` sisältää jokaiselle tiedostolle muunnelmat `{ehdot, aiheet}`. `?tapa=` on voimassa
  vain, kun ehdot täsmäävät. Esimerkiksi `riffikaiku.html?tila=peli&tapa=kitara` ohittaa Kitaratreenin, ja paluu
  vie Oppimiskartan aiheeseen. Validointi vaatii tunnistuksen, jos sama tiedosto on useassa oppimistavassa, ja
  hylkää kaksi samaa ehtoa eri tavoissa.
- **Rajaus:** ehdot luetaan sivun latautuessa. Kitaraharjoittelijan sisäinen polun vaihto ilman sivun latausta
  ei päivitä paluulinkkiä tai valikkoa, eikä sovelluslogiikkaa muutettu. Ilman `?tapa=`-parametria sivujen
  staattinen päävalikko on ennallaan (Riffikaiku: Musapelit, Kitaraharjoittelija: Kitaratreeni) myös tiloissa,
  jotka kuuluvat toiseen oppimistapaan. Tämä on havainto omistajalle, ei korjattu.
- **Opi & oivalla -lähtöaihe:** `rakenna.py` (`related_url`) lisää *Tutki myös* -linkkiin `?aihe=<lähtöaihe>`,
  kun kohde on toisen aiheen sisältösivu. `rakenna-osiot.py` muodostaa `aiheet.json`:n `related`-tiedoista
  luettelon `RELATED`: sivu ja aiheet, joiden Tutki myös -listassa se on. `oppimistapa.js` ohjaa sivun yläreunan
  aihepaluun lähtöaiheeseen vain, jos aihe on luettelossa. Esimerkki: Soinnut ja harmonia → *Mikä sointu tulee?*
  → *← Sointuihin ja harmoniaan*. Sivu, suoritustunniste, Edellinen/Seuraava ja päävalikko pysyvät ennallaan.
  Ilman parametria, ilman JavaScriptiä tai tuntemattomalla aiheella paluu vie sivun omaan aiheeseen kuten ennen.

## C3. Oppimiskartan aihesivujen vaihto (katselmointikorjaus 3)

- **Nyt (ei ristiriitaa #111:n kanssa):** `rakenna.py` liittää jokaiselle sivulle `assets/oppimistapa.js`:n
  omalla rivillään. Skripti lisää aihesivulle rivin *Sama aihe: Musapelit (4) · Kitaratreeni (7)*. Määrät
  muodostaa `rakenna-osiot.py` rekisteristä skriptin tietolohkoon. Ilman JavaScriptiä riviä ei näy, ja sivu
  toimii kuten ennen. Rivi piilotetaan tulostettaessa.
- **Myöhemmin, kun #111 on yhdistetty:** rivi siirretään staattiseksi HTML:ksi `topic_home()`-funktioon, jota
  #111 muuttaa. `aiheet.json`:n `tools`-linkit voidaan samalla lukea rekisteristä. Tätä ei tehdä nyt, jotta
  #111:n `topic_home`-muutokset eivät joudu ristiriitaan.

## C4. Alareunan aihepaluu (katselmointikorjaus 4, #54 18.11.2026)

- `rakenna.py`:n `steps()` ei enää lisää alareunaan *← Aiheeseen* -painiketta. Yläreunan paluu (`.study-up`)
  ja alareunan Edellinen/Seuraava ovat ennallaan. *Katselmoinnin suositus 1 (katselmointi 2), odottaa omistajan vahvistusta.*
- Pitkät sivut puhelimessa (390 × 800 px): 73 sivusta 14 on yli neljän näytön ja yksi (*Septimisoinnut*,
  8,7 näyttöä) yli kahdeksan näytön mittainen. Niiden lopussa aiheeseen pääsee nyt Edellinen/Seuraava-linkeillä,
  selaimen paluulla tai vierittämällä ylös. *Katselmoinnin suositus 2:* kiinteää paluupainiketta ei toteuteta nyt.
  Käytettävyys testataan ensin oikealla puhelimella, ja tarvittaessa arvioidaan kevyttä *Takaisin alkuun* -linkkiä.
  Aihesivujen pituus kuuluu #116:een.
- **#111:n riippuvuus:** #111:n uusi `intro_content()` lisää paikkamerkkisivulle saman alareunan paluun.
  Koeyhdistyksessä `tests/osiot.test.ts` havaitsee sen. *Katselmoinnin linjaus (katselmointi 2):* korjaus tehdään #111:n omassa
  sovituksessa. Paikkamerkkisivua ei yhdistetä eikä julkaista keskeneräisenä.
- Koeyhdistys 19.11. (`f039a09` + #111 `794d106`): `rakenna.py` ja `aiheet.json` yhdistyvät ilman ristiriitoja.
  81 generoidun sivun ristiriidat ratkesivat ajamalla generaattorit uudelleen, ja tarkistukset menivät läpi.

## D. Sisällön sijoittelun perusteet (pedagoginen arvio)

- **Musapelit**: vain tehtävät, joissa on vuorovaikutteinen tunnistus ja palaute: Ensikeikka,
  Riffikaiku-peli, Sävelten etsintä, Tunnista avoin sointu sekä oppituntien kuuntelutehtävät *Mikä aste soi?*,
  *Tunnista sointutyyppi* ja *Mikä sointu tulee?*. Pelkkä äänite ilman palautetta ei ole peli.
- **Musapelien välineet tarkistettu koodista:** *Sävelten etsintä* ja *Tunnista avoin sointu* ovat äänettömiä
  otelautakuvan tunnistustehtäviä (`NoteJourney`, `ChordJourney`), eikä niissä ole tallennusta. Rekisterissä
  ollut Sävelten etsinnän tulosavain (`musiikin-kartta:harjoittelu`) oli virheellinen, koska se kuuluu vanhaan
  harjoittelijamoottoriin. Avain on poistettu.
- **Kitaratreeni**: harjoittelija- ja Riffiharjoitus-sovellukset sekä 33 oppituntien harjoitusta ja 3 Kitaran
  perusteiden oppituntia, joiden ohjeessa soitetaan tai etsitään säveliä omalla kitaralla. Jokaisen sivun
  tehtäväteksti luettiin uudelleen. Tehtävät jaetaan kahteen lajiin:
  - *Soita* (28): soittotekniikka, otteet, kierrot, asteikot ja kappaleet.
  - *Korvalla kitaralle* (7): ensin kuunnellaan tai hyräillään, sitten etsitään tai tarkistetaan kitaralla.
    Näitä ovat *Täydennä fraasi*, *Vaihda kotisäveltä*, *Etsi jälkimmäinen sävel*, *Kuuntele basso*,
    *Kumpi on molli?*, *Kolme C-sointua* ja *Etsi ensimmäinen melodiasävel*. Niissä ei ole vastauksen
    tarkistusta, joten ne eivät ole Musapelejä.
- **Kitaran rooli tarkistettu (korjauskierros 2):** jokaisessa *Korvalla kitaralle* -tehtävässä kitara on osa
  ratkaisua: kuultu sävel, basso tai sointu löydetään tai sitä verrataan omalla kitaralla (esim. A- ja Am-otteet,
  G-kielen nauhat 2/4/7, A-kielen C–D–E–G). *Sovita sävellaji laulajalle* poistettiin Kitaratreenistä, koska sen
  ydin on laulukorkeuden valinta äänitteiden avulla ja kitaraa käytetään vain lisätehtävässä (kapo 1. nauhalla).
  Se on edelleen Opi & oivalla -osiossa.
- Kirjallisiksi jätettiin *Rakenna kolme sointua G-duurista*, *Lisää septimi G-duurin sointuihin* ja *Nimeä sävel
  muodon avulla*. *Löydä pulssi ja ykkönen* (taputus ja laskeminen) jää Opi & oivalla -osioon.
- *Katselmoinnin suositus 4 (katselmointi 2), odottaa omistajan vahvistusta:* *Mikä sointu tulee?* liitetään myös aiheeseen Soinnut ja harmonia.
  Se käyttää samaa sivua (`oppi/kappaleet/mika-sointu-tulee.html`) ja suoritustunnistetta
  (`harjoitus:mika-sointu-tulee`). Rekisterissä on `lisaaiheet: ["soinnut"]` (Musapelit), ja Soinnut ja harmonia
  -aihesivun *Tutki myös* -listassa on linkki (`aiheet.json`:n `related`). Kappaleet-aiheen numerointi ja
  laskurit pysyvät ennallaan.
- Luokittelu *Soita* / *Korvalla kitaralle* on *katselmoinnin suositus 3* (alustava hyväksyntä), ei omistajan
  lopullinen päätös.
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
