# Ensimmäiset neljä iskua – tekninen validointi nykyistä betaa vasten

**Päätös:** MK-20261117-01, kohta *Seuraava vaihe*.
**Tila:** 18.11.2026. Toteutussuunnitelman rajattu tekninen validointi on tehty. Oppituntia ei ole toteutettu, äänimateriaalia ei ole tehty, eikä mitään ole kokeiltu oikealla kitaralla tai iPhonella.
**Pohja:** `origin/beta` `6562e141cd6f6beeb9dd1fb02134e276a2983ab8` (18.11.2026 17:59).
**Lähteet:** päätös MK-20261117-01, PR #91 (`docs/ensimmainen-oppimisjakso-p1-katselmointi`, `bf90797`), `tools/oppimiskartta/`, `assets/edistyminen.js`, `assets/oppimiskartta.js`, `assets/harjoitustausta.js`, `tools/aanet/` ja betan testit.

Merkinnät: **[Mitattu]** = ajettu tai mitattu tässä validoinnissa, **[Koodista]** = luettu lähdekoodista mutta ei ajettu, **[Ehdotus]** = hyväksymätön suositus.

---

## 1. Yhteenveto

Hyväksytty rakenne voidaan toteuttaa nykyisen Oppimiskartan päälle ilman uutta oppimisjärjestelmää. Vanhat URL-osoitteet, suoritustunnisteet ja tallennusavaimet säilyvät. Ennen varsinaista toteutusta on ratkaistava kaksi estävää asiaa:

| # | Havainto | Vaikutus | Ratkaisu |
| --- | --- | --- | --- |
| **E1** | Generaattori numeroi jokaisen aiheen sivun ja lisää sen etenemisjärjestykseen ja aiheen laskuriin. Numeroimatonta johdantoa ei nykyisin voi tehdä. | Jos harjoitus lisätään tavallisena sivuna, Rytmin muut sivut numeroituvat uudelleen (esim. *Harjoitus 02 / 04* muuttuu muotoon *03 / 05*). Aiheen laskuri muuttuu 4:stä 5:een, ja käyttäjiltä, joilla Rytmi on valmis, katoaa merkintä *✓ Aihe käyty läpi*. | Aiheelle lisätään valinnainen `intro`-kenttä, joka jää etenemisjärjestyksen ja laskurin ulkopuolelle. Kokeiltu, ks. luku 3.2. |
| **E2** | Generaattorin `clean`-kitaraääni soi tarkoituksella **0,3 s** kirjoitettua pituutta pidempään (`ring: .3`). | Mallissa "neljä ääntä ja tauko" ääni kuuluu noin 320 ms tauon puolelle, eli 72 BPM:ssä 38 % iskusta. PR #91:n väite, että nuotin pituus katkaisee soinnin, ei pidä tällä äänellä. Malli ei näyttäisi täsmällistä pysäytystä. | Joko tapahtumakohtainen `ring`/`release`-ohitus generaattoriin tai oikealla kitaralla äänitetty malli. Mitattu, ks. luku 4.1. |

Lisäksi on kuusi ei-estävää havaintoa (luku 6) ja neljä omistajan päätöstä (luku 8).

---

## 2. Lähtötaso [Mitattu]

Ajettu puhtaassa `origin/beta`-työpuussa `6562e14`:

| Tarkistus | Tulos |
| --- | --- |
| `python3 tools/oppimiskartta/rakenna.py --tarkista` | Ok. Generoidut sivut vastaavat lähteitä. |
| `vitest run tests/site.test.ts tests/beta-staattinen-eheys.test.ts` | 15/15 läpi |
| `playwright test aihelista aihesivut lukumerkinnat navigation` (desktop ja phone) | 260 läpi, 2 ohitettu, 0 epäonnistui |

Huomio ympäristöstä: projekti lukitsee Playwrightin version 1.56.1 (Chromium 1194). Testit ajettiin Linux-kontissa Chromiumilla 1243 (`PLAYWRIGHT_CHROME_EXECUTABLE`). Koko `npm run check` ja muiden pelien e2e-testit jäivät ajamatta, koska ne eivät kuulu tähän rajaukseen.

---

## 3. Arkkitehtuuri ja päätösten toteutettavuus

### 3.1 Päätökset ja nykytila

| Päätös | Nykytila betassa | Tarvittava muutos |
| --- | --- | --- |
| Uusi johdantoharjoitus Rytmi-aiheeseen | [Koodista] Erilliset oppitunnit ovat jo tuettuja: `aiheet.json` → `{"standalone": …}` ja sisältö `tools/oppimiskartta/sisallot/<aihe>/<slug>.html`. Käytössä vain Kitaran perusteissa. Rytmissä on nyt luku *Pulssi ja komppi* ja kolme harjoitusta. | Uusi kansio `sisallot/rytmi/`. |
| Ensisijaisesti numeroimaton | [Koodista] `topic_home` ja `page_content` numeroivat kaiken ryhmissä olevan (`study-number`, *Harjoitus NN / NN*). `steps` rakentaa edellinen/seuraava-linkit samasta järjestyksestä. `data-study-items` ja `data-topic-items` laskevat saman joukon. | **E1:** `intro`-kenttä (luku 3.2). |
| Etusivulle suositeltu aloituslinkki | [Koodista] `aiheet.json` → `"start": "rytmi/kuuntele-pulssi"`. Linkkiteksti *Kuuntele pulssi* on kovakoodattu tiedostoon `rakenna.py` (rivi 646), ja jatko *"ja taputa esimerkin mukana."* on generoidun lohkon ulkopuolella tiedostossa `index.html`. | `start` vaihdetaan. Linkkiteksti siirretään asetukseksi, ja `index.html`:n staattinen jatkoteksti päivitetään käsin. |
| Ei pakollista etenemislukitusta | [Koodista] Mitään ei lukita. Etusivu näyttää aluksi kolme aihetta, ja Rytmi on niistä toinen. | Ei muutosta. |
| URL:t, tunnisteet ja suoritusmerkinnät säilyvät | [Mitattu] Johdantokokeessa (3.2) muuttuivat vain `index.html` ja `oppi/rytmi/index.html`. Kaikki muut generoidut sivut pysyivät tavulleen samoina. | Uusi tunniste `harjoitus:ensimmaiset-nelja-iskua` samaan avaimeen `musiikin-kartta:luvut`. Uutta tallennusavainta ei tarvita. |
| Teoriasta takaisin harjoitukseen ja samaan vaiheeseen | [Koodista] Harjoitussivulta on linkki *Ohje ja esimerkit · \<luku>*. Luvusta on linkit harjoituksiin. Työkaluilla on `?aihe=`-paluu (`oppimiskartta.js`), mutta se ohitetaan Oppimiskartan sivuilla (`if (… document.querySelector('.study-page')) return`). Kitaran perusteiden pikakertauksesta on vain linkki *Siirry Oppimiskarttaan*. Paluuta tiettyyn harjoituksen vaiheeseen ei ole. | Luku 3.3. |
| Ei uutta yleistä oppimisjärjestelmää | — | Kaikki edellä on generaattorin ja olemassa olevan skriptin pientä laajennusta. |

### 3.2 Johdantokoe [Mitattu]

Kertakäyttöinen koe (`liitteet/johdanto-generaattorikoe.patch`, noin 30 riviä `rakenna.py`:hyn) tehtiin erillisessä työpuussa. Sitä ei ole commitoitu betaan, eikä se ole toteutusehdotus sellaisenaan.

- Aiheelle `rytmi` lisättiin `intro` (standalone `ensimmaiset-nelja-iskua`), ja `start` osoitettiin siihen.
- Johdanto ei kuulu `topic['pages']`-joukkoon. Siksi muiden sivujen numerointi, edellinen/seuraava-linkit, aiheen laskuri ja koko polun valmistumistieto pysyivät ennallaan.
- Johdanto sai oman *Merkitse harjoitus tehdyksi* -painikkeen sekä linkit *Jatka: Pulssi ja komppi* ja *Rytmiin*.
- Tulos: `rakenna.py` onnistui, ja `--tarkista` oli puhdas. Muuttuneet tiedostot olivat `index.html` (vain aloituslinkin `href`), `oppi/rytmi/index.html` (uusi aloituskortti) ja uusi sivu.

Testit kokeen jälkeen: yksikkötesteistä 2/15 ja e2e-testeistä 24/262 (12 tapausta kahdella laitteella) epäonnistui. Kaikki epäonnistumiset johtuivat **tarkoituksellisista vartijoista**, jotka tarkistavat Rytmin tarkan sivulistan, 73 sisältösivun kokonaismäärän, aloituslinkin `href`:n, yksittäisen *Aloita tästä* -merkinnän ja korttien asettelun. Vanhoja osoitteita tai merkintöjä ei rikkoutunut. Toteutuksessa nämä testit päivitetään tietoisesti, ja johdannolle lisätään omat testinsä.

Epäonnistuneet testit:

- `tests/site.test.ts`: *aihekortit ja sisältösivut käyttävät samoja yksilöllisiä suoritustunnisteita* ja *kaikki 70 vanhaa sisältöosoitetta säilyvät…*
- `aihesivut.spec.ts:121`, `:225` ja `:364` (viisi leveyttä)
- `lukumerkinnat.spec.ts:116`, `:129` ja `:133`
- `navigation.spec.ts:118` ja `:260` (pulssiesimerkin pysäytys palattaessa, joka kulkee nykyisen aloituslinkin kautta)

**Avoin kysymys (P-1):** lasketaanko johdanto Rytmin *N/N sisältöä tehty* -laskuriin? Kokeessa sitä ei laskettu, jolloin vanhat valmistumismerkinnät eivät muutu. [Ehdotus] Johdantoa ei lasketa. Sen oma ✓-merkintä näkyy aiheen aloituskortissa.

### 3.3 Paluu teoriasta oikeaan vaiheeseen [Ehdotus]

1. Johdannon seitsemän vaihetta ovat yhdellä sivulla omina osioinaan, ja niillä on pysyvät ankkurit `#vaihe-1` … `#vaihe-7`. Selaimen paluu palaa silloin oikeaan kohtaan ilman koodia.
2. Vaiheesta teoriaan vievä linkki saa parametrin, esimerkiksi `?paluu=ensimmaiset-nelja-iskua&vaihe=3`. `oppimiskartta.js` lisää teoriasivulle linkin *Palaa harjoitukseen · vaihe 3* vain, jos `paluu` löytyy generaattorin tuottamasta sallittujen kohteiden listasta, samaan tapaan kuin nykyinen `topicPaths`. Näin parametri ei ohjaa mielivaltaiseen osoitteeseen.
3. Kohteet ovat ainakin *Pulssi ja komppi* (`oppi/rytmi/pulssi-ja-komppi.html`) ja Kitaran perusteiden pikakertaus (`oppi/kitara/index.html`, jonka sivupohja on erilainen).

Vaihtoehto 1 yksin ei vaadi koodia, mutta se ei toimi, jos teoriasivu avataan uuteen välilehteen tai sieltä siirrytään eteenpäin. **Päätös P-2.**

---

## 4. Ääni

### 4.1 Pysäytetyn äänen täsmällisyys generaattorilla [Mitattu]

Menetelmä (`liitteet/aanikoe-m1.html` ja `aanikoe-m1-mittaus.cjs`): oppaan oma `backingTrack.renderScore` renderöi headless-Chromiumissa M1:n kitaraosan: avoin 6. kieli (E2, MIDI 40), neljä yhden iskun mittaista ääntä ja sen jälkeen tauko. Mittauksessa katsottiin, kuinka kauan tauon alun jälkeen taso putoaa annetun rajan alle viimeisen äänen huipusta. Ruutu oli 5 ms.

| Kitaraääni (kaiku) | Tempo | −20 dB | −40 dB | −60 dB | Iskun pituus |
| --- | --- | --- | --- | --- | --- |
| `clean` (0,14, oletus) | 60 | 315 ms | 375 ms | 790 ms | 1000 ms |
| `clean` (0,14, oletus) | 72 | 320 ms | 380 ms | 840 ms | 833 ms |
| `clean` (ei kaikua) | 72 | 320 ms | 370 ms | 425 ms | 833 ms |
| `crunch` (0,14) | 72 | 140 ms | 180 ms | 510 ms | 833 ms |
| `scratch` (0,14) | 72 | ääni on vaimentunut jo ennen taukoa | | | |

Tulkinta:

- Isku ja tauon alku ovat renderöinnissä näytetarkkoja, koska `renderScore` ajoittaa tapahtumat ilman inhimillistämistä. Ongelma on äänen *loppu*, ei alku.
- `clean`-ääni soi noin 0,3 s tauon puolelle lähes täydellä voimakkuudella. Tämä johtuu `ring`-arvosta, ei kaiusta. Oikealla kitaralla vaimennetun kielen ääni hiljenee tyypillisesti muutamassa kymmenessä millisekunnissa. Tämä on oletus, joka tarkistetaan fyysisessä kokeessa.
- `scratch` on tarkoitettu vaimennetuiksi raapaisuiksi, ja se hiljenee jo iskun aikana. Se ei sovi soivaksi ääneksi.

[Ehdotus] Lisätään `Score.pick`- ja `Score.note`-kutsuille valinnainen `ring` ja `release` (esimerkiksi `ring: 0, release: .03`), jotka välitetään `playTone`-funktiolle. Oletusarvot eivät muutu, joten nykyiset ääniesimerkit pysyvät samoina. Muutos koskee jaettua tiedostoa `assets/harjoitustausta.js`, joten sen on oltava pieni ja testattu. Vaihtoehtona tai vertailukohtana on oikealla kitaralla äänitetty malli (päätöksen *MIDI vs. sample vs. oikea kitara* -vertailu).

### 4.2 Pulssi, tiedostomuodot ja silmukka

- [Mitattu] Nykyisessä `pulssi-ja-komppi.m4a`-tiedostossa AAC:n alkuviive on kompensoitu: ensimmäinen isku on ffmpeg-dekoodauksessa samassa kohdassa (6,8 ms) kuin WAV-tiedostossa. Selaimen ja iPhonen käyttäytymistä ei mitattu.
- [Koodista] `tools/aanet/palvelin.py` muuntaa m4a-tiedostot macOS:n `afconvert`-työkalulla. Linux-kontissa on `ffmpeg`, mutta sen tuottamaa tiedostoa ei ole verrattu `afconvert`-tulokseen. Uudet äänet renderöidään joko macOS:llä tai muunnoksen vastaavuus tarkistetaan erikseen.
- [Ehdotus] Silmukkaa ei käytetä. Tausta renderöidään riittävän pitkäksi, kuten PR #91 jo ehdottaa. AAC-tiedoston `loop` on saumaton vain, jos selain käsittelee alkuviiveen oikein, eikä sitä ole todennettu.
- Kestot neljän äänen ja neljän iskun tauon kierrokselle (kaksi tahtia) sekä lähtölaskulle (yksi tahti):

| Tempo | Kierros | Lähtölasku ja kaksi kierrosta (vaihe 6) |
| --- | --- | --- |
| 60 BPM | 8,0 s | 4,0 s + 16,0 s = 20,0 s |
| 72 BPM | 6,7 s | 3,3 s + 13,3 s = 16,7 s |
| 84 BPM | 5,7 s | 2,9 s + 11,4 s = 14,3 s |

### 4.3 Usea soitin samalla sivulla [Koodista]

Johdannossa on useita äänitteitä: malli, eri tempot ja taustaversiot. `oppimiskartta.js` pysäyttää soittimet, kun sivulta poistutaan (`pagehide`), ja näyttää latausvirheen. Saman sivun soittimet eivät kuitenkaan pysäytä toisiaan, joten oppija voi käynnistää kaksi tiedostoa päällekkäin. [Ehdotus] Lisätään muutaman rivin käsittelijä: kun yksi `.study-page audio` alkaa soida, muut pysähtyvät. Toiminta on testattava iPhonella (luku 7).

### 4.4 Musiikillinen yhteensopivuus [Koodista ja teoria]

Avoin 6. kieli E2 sopii kaikkiin kolmeen testattavaan taustaan. E on Em:n ja E5:n perussävel sekä Am:n ja A5:n kvintti. Avoin 5. kieli A soisi Em-tahdeissa sävelten G ja B välissä ilman sointusäveltä, joten se ei sovi yhteiseksi ensimmäiseksi säveleksi. Am/E-käännöksen kuulostavuus on yhä kuunneltava (PR #91, testi T3).

### 4.5 Äänilähteet ja oikeudet

- Oppaan omalla generaattorilla tehdyt äänet ovat Unlicense-lisenssin piirissä, kuten nykyiset `osa-*`-esimerkit.
- [Koodista] Suno-äänitteiden ehdot (`assets/audio/AANITTEET-LISENSSI.md`) rajaavat nykyiset tiedostot "vain kitaraharjoittelijaa varten". Jos Sunoa käytetään, uudet tiedostot tarvitsevat oman rivin, luontiajan ja käyttöalan, joka kattaa myös Oppimiskartan. Lisäksi niiden tempo ja lopetus on mitattava samalla menetelmällä kuin luvussa 4.1, koska Sunon tuottama ajoitus ei ole ennalta määrätty.
- Samplekirjaston lisenssi on tarkistettava ennen vertailua. Sitä ei ole valittu.
- Rajauksen mukaisesti Kolme cowboyta ei ole mukana. Nykyinen harjoitus `kuuntele-pulssi` viittaa siihen edelleen, mutta siihen ei kosketa. Etusivun aloituslinkki siirtyy pois siitä.

---

## 5. Itsearviointi ja saavutettavuus

- [Koodista] Nykyinen painike *Merkitse harjoitus tehdyksi* / *✓ Harjoitus tehty* on neutraali, eikä se väitä osaamista todennetuksi. Johdanto voi käyttää sitä sellaisenaan.
- PR #91 ehdottaa, että itsearvioon tallennettaisiin, oliko mallibasso käytössä. Se vaatisi uuden tallennusmuodon, mikä on ristiriidassa linjauksen *ei uutta yleistä oppimisjärjestelmää* kanssa. [Ehdotus] Tietoa ei tallenneta. Kahden kierroksen itsearvio on sivulla ohjeena ja kysymyksinä, ja ainoa tallennettava asia on nykyinen tehty-merkintä. **Päätös P-3.**
- [Koodista] Nykyiset soittimet ovat selaimen omia `<audio controls>` -elementtejä. Niissä on `aria-labelledby`-kuvaus, ja niitä voi käyttää näppäimistöllä. Johdannon kortin on läpäistävä olemassa olevat 320–1440 px ja suurennetun tekstin testit (`aihesivut.spec.ts:364`). Ruudunlukijaa ja VoiceOveria ei ole testattu.

---

## 6. Ei-estävät havainnot

1. Linkkiteksti *Kuuntele pulssi* on kovakoodattu tiedostoon `rakenna.py`, ja osa lauseesta on käsin kirjoitettu tiedostoon `index.html`.
2. Rytmin aloitussivulla lukisi kokeen jälkeen kahdesti *Aloita tästä* (johdanto ja ryhmä). Ryhmän merkintä poistetaan, kun aiheella on johdanto.
3. Saman sivun soittimet eivät pysäytä toisiaan (4.3).
4. M4a-muunnos vaatii macOS:n (4.2).
5. Playwrightin lukittu Chromium puuttuu pilvikontista. Testit vaativat siellä `PLAYWRIGHT_CHROME_EXECUTABLE`-muuttujan.
6. Avoimet äänitiedostoja koskevat PR:t (#92, #100, #101 ja #106) eivät muuta Oppimiskartan tiedostoja. Ristiriitaa tämän jakson kanssa ei löytynyt. PR:t #53 ja #91 ovat edelleen Draft-tilassa, eikä niihin koskettu.

---

## 7. Testit, jotka vielä puuttuvat

| Testi | Kuka/missä | Tila |
| --- | --- | --- |
| Fyysinen kuivaharjoitus oikealla kitaralla (alla) | Omistaja | Tekemättä |
| Generaattorin, samplen ja oikean kitaran vertailu kuuntelemalla | Omistaja | Tekemättä, äänet tekemättä |
| iPhone/Safari: toisto mykistyskytkin päällä, pysäytys, kahden soittimen päällekkäisyys, näytön lukitus ja paluu, m4a- ja wav-lähteet | Omistaja, oikea laite | Tekemättä |
| Aloittelijoiden käytettävyys- ja oppimistesti | — | Tekemättä |
| Johdannon e2e-testit ja päivitetyt vartijat | Toteutusvaihe | Tekemättä |

**Fyysisen kitarakokeen tarkistuslista [Ehdotus]:**

1. Viritä 6. kieli E:ksi. Laita metronomi 72 BPM:ään, ja ykkönen korostettuna, jos mahdollista.
2. Soita E2 iskuilla 1–4 ja pysäytä ääni seuraavan tahdin ykkösellä. Kokeile ensin oikean kämmenen syrjällä ja sitten vasemman käden sormilla. Pidä neljän iskun tauko. Toista kaksi kierrosta peräkkäin.
3. Kirjaa: kuuluuko pysäytys selvästi, kumpi tapa on luontevampi aloittelijalle, ja syntyykö pysäytyksestä ylimääräistä ääntä, kuten naksahdus tai viereisen kielen soiminen.
4. Toista tempoilla 60 ja 84.
5. Näppäile ylemmillä kielillä Em, Am, E5 (`x x 2 4 x x`) ja A5 (`x x x 2 5 x`) ja soita E2 samaan aikaan. Arvioi korvalla Am/E-käännös.
6. Äänitä halutessasi puhelimella. Äänite on samalla oikean kitaran vertailunäyte kohtaan 4.1.

---

## 8. Omistajan päätökset

| # | Päätös | Suositus |
| --- | --- | --- |
| P-1 | Lasketaanko johdanto Rytmin laskuriin? | Ei. Vanhat valmistumismerkinnät säilyvät. |
| P-2 | Paluumekanismi teoriasta | Ankkurit ja sallittujen kohteiden `?paluu=`-parametri (3.3) |
| P-3 | Tallennetaanko itsearvion yksityiskohtia? | Ei. Vain nykyinen tehty-merkintä. |
| P-4 | Mallin ääni | Lisätään `ring`/`release`-ohitus ja verrataan sitä oikean kitaran äänitteeseen ennen kuin lopullinen lähde valitaan. |

## 9. Ehdotetut rajatut toteutustehtävät

Kukin tehtävä on oma Draft-PR, ja ne tehdään vasta fyysisen kokeen ja päätösten P-1–P-4 jälkeen:

1. **Generaattori:** `intro`-kenttä, linkkitekstin asetus, vartijatestien päivitys ja johdannon testit. Sisältönä on paikkamerkki. Ei ääntä.
2. **Äänigeneraattori:** `ring`/`release`-ohitus muuttamatta oletuksia. M1:n ja taustojen renderöinti kolmella tempolla. Mittausskripti testiksi.
3. **Sisältö:** seitsemän vaihetta, ankkurit, paluulinkit, soittimien yksinoikeus ja etusivun teksti.
4. **Laite- ja käyttäjätestit** luvun 7 mukaisesti.

---

## TEHTÄVÄN LUOVUTUS PÄÄKESKUSTELUUN

- **Tehtävä ja tila:** MK-20261117-01, tekninen validointi. **VALMIS**, sillä rajauksella että fyysinen kitarakoe **ODOTTAA OMISTAJAA**.
- **Lähtö-SHA:** `origin/beta` `6562e14`. Lähteet on lueteltu otsakkeessa.
- **Tehty:** generaattorin, tallennuksen, navigoinnin ja äänipolun tarkistus. Lähtötason testiajo. Kertakäyttöinen johdantokoe ja äänen pysäytysmittaus. Tämä raportti ja liitteet.
- **Ei tehty:** oppitunnin toteutus, äänitteet, iPhone-testi, oikean kitaran koe, `npm run check` kokonaan sekä muutokset betaan tai PR:iin #53 ja #91.
- **Haara:** `claude/eloquent-bell-kmpmfe`. Haaran pohja on `main` (`68b8a77`), koska siirto betan päälle olisi vaatinut force-pushin. Raportti koostuu pelkistä uusista tiedostoista, joten sen voi poimia betan päälle cherry-pickillä. PR:ää ei ole avattu.
- **Testitulokset:** luku 2 (lähtötaso) ja luku 3.2 (koe: 2 yksikkö- ja 24 e2e-epäonnistumista, kaikki tarkoituksellisia vartijoita).
- **Riskit:** E1 ja E2. iOS-äänen käyttäytymistä ei ole todennettu.
- **Päätökset:** P-1–P-4.
- **Suositeltu seuraava tehtävä:** fyysinen kitarakoe (luku 7) ja sen jälkeen tehtävä 9.1.
- **Ei saa vielä koskea:** Ensikeikka, Riffikaiku, Kappaleharjoittelija, muut keskeneräiset PR:t, PR:t #53 ja #91 sekä Oppimiskartan yleisarkkitehtuuri.
