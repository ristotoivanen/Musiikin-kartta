# Sointujen maailma: yksityiskohtainen toteutusohjelma

**v0.1 | 15.11.2026 | Tila: SUUNNITTELU, ei toteutuslupaa**
**Pedagoginen lähde:** [sointujen-maailma-oppimispolku.md](sointujen-maailma-oppimispolku.md)
**Tavoite:** toteuttaa opittava, miellyttävä ja testattava sointujen oppimispolku ilman päällekkäistä logiikkaa tai keskeneräisten projektien sekoittumista.

## 0. Päätös, jolla tämä työ käynnistetään

Aloitetaan **yhdellä kokonaisella G-duurin luvulla**. Ensimmäinen valmis julkaistava harjoitus koostuu teoriasta, valinnoista, basson erillisestä kuuntelusta, oikean kitaran harjoittelusta, musikaalisesta soveltamisesta ja virheet selittävästä palautteesta. Muut seitsemän lukua ovat tämän todistamisen jälkeinen laajennus.

**Tätä dokumenttia EI saa tulkita käskyksi käynnistää koodausta tai yhdistää mitään haaraa automaattisesti.** Ensimmäinen kehitystyö alkaa erillisestä omistajan hyväksymästä työpaketista ja ajantasaisesta integraatiopohjasta.

### Mitä ei tehdä aluksi

- Ei uutta irrallista CAGED-sivustoa eikä kaikkia 30 otetta yhdellä kertaa.
- Ei vanhojen harjoitusten korvaamista tai tallennustietojen nollaamista.
- Ei polyfonista mikrofonisointutunnistinta eikä automaattista soittotaidon arvosanaa.
- Ei suoria muutoksia Ensikeikan tai Riffikaiun lähdekoodiin.
- Ei Suno-ääntä sisältöjen tai oikeiden vastausten ainoaksi perustaksi.
- Ei tuotanto- tai beta-julkaisua ennen hyväksymisportteja.

## 1. Lähtötilanteesta todennetut koodiosat

Tarkistettu GitHubin main-haarasta 15.11.2026:

| Nykyinen osa | Havaittu nykytilanne | Suositus |
|---|---|---|
| harjoittelija/ChordJourney.tsx | Avosointujen tunnistus C, G, D, Em sekä laajempi 7 soinnun valinta; omat avosointuotteet komponentin sisällä | Säilytä toiminta ja testit; selvitä ote-datan yhdistäminen vasta validoituun yhteiseen malliin |
| harjoittelija/music.ts | CHORDS: maj/min/dom7; CAGED_SHAPES; cagedPositions; sävelnimi- ja otelautatoiminnot | Laajennus vähennettyyn kolmisointuun ja sävellajin sointuihin vasta auditoinnin jälkeen |
| harjoittelija/Board.tsx | Yhteinen otelautakomponentti | Hyödynnä, älä tee rinnakkaista renderöijää |
| harjoittelija/LearningPaths.tsx | Soinnut ja musiikin rakenne -harjoittelupolku; vanhat osoitteet | Säilytä suorat reitit ja lisää mahdollinen linkki uuden polun hyväksytyn navigaation kautta |
| harjoittelija/audio.ts | Nykyisten audioharjoitusten työkaluja | Tutki ajastus, toiston pysäytys ja soveltuvuus ennen uutta audioratkaisua |
| book/osa-3, osa-4, osa-6 ja osa-7 | Olemassa oleva sointuteoria, transponointi, CAGED ja kuuntelu | Lähdemateriaali ja linkit, ei päällekkäistä ristiriitaista teoriaa |
| harjoittelija/storage.ts | Nykyinen paikallinen eteneminen | Käytä versionoitua erillistä avainta, ei nykyisen tiedon muuttamista |

**Rinnakkaiset työt:** Oppimiskartta-integraatio #61, Kitaran perusteiden uudistus #65 ja keskeneräiset Claude-/Codex-haarat. PR #65 on draft ja perustuu haaraan codex/oppimiskartta-aihesivut, joka ei ole 15.11.2026 main-haaran rakenne. Varmista myöhemmin toteutuksen oikea yhteinen pohja ja sen todellinen status. Älä rakenna polkua oletettuun oppi/-hakemistoon ennen tarkistusta.

## 2. Omistajuus, haarastrategia ja pysäytysehdot

1. Tämä dokumentointityö asuu erillisessä docs/sointujen-maailma-oppimispolku-20261115-haarassa, ehdotus-PR:ssä. Vain Markdownia, ei lähdekoodia.
2. Toteutus aloitetaan, kun Oppimiskartan navigaation ja Kitaran perusteiden integraatiopohja on selkeä. Se voi olla uusin hyväksytty beta, ei automaattisesti main tai PR #65:n head.
3. Jokainen työpaketti omaan lyhytikäiseen feat/sointujen-maailma-* -haaraan, yksi rajattu PR kerrallaan. Ei muokata toisen agentin työhaaraa tai worktree:tä.
4. Älä koske ensikeikka/, riffikaiku/, pelit/ensikeikka/, assets/riffikaiku/ tai navigaation yhteisiin tiedostoihin ilman tehtävän eksplisiittistä rajausta.
5. Ei rebasea/force-pushia yhteisiin haaroihin, ei historian uudelleenkirjoitusta, ei automaattista mergeä. Päällekkäisyydessä pysäytä ja raportoi tiedostot.
6. Generoidut tiedostot tuotetaan vain olemassa olevalla build-prosessilla ja varmistetaan erikseen; älä käsin paikkaile build-artefakteja.
7. PR-kuvauksessa: lähtö-SHA, muutetut tiedostot, riippuvuudet, ajettu testikomento, tulokset, puutteet ja selaimen esikatselu tarvittaessa. Omistajan hyväksyntä tarvitaan julkaisuun.

### Erityiset rajapintasäännöt

- Uudet oppimistehtävät käyttävät yhteistä sävel-/sointulogiikkaa. Soittovalinnat, pedagogiset nimitykset ja renderöinti ovat erillisiä.
- Sointujen maailma ei importoi Ensikeikan tai Riffikaiun sisäisiä peliolioita. Myöhemmät yhteydet tehdään julkisen osoitteen tai erikseen määritellyn versionoidun rajapinnan kautta.
- Uusi oppimissivu ei omista ylävalikon muutosta, ennen kuin Kitaran perusteiden reittipohja on vakautettu.

## 3. Käyttäjäpolku ja ensimmäisen luvun käsikirjoitus

### 3.1 Navigointi

Oppimiskartta → **Soinnut ja harmonia** → **Sointujen maailma** → **Luku 1: G-duurin sointuperhe**. Lukusivulla selkeä «Takaisin Sointujen maailmaan». Kunkin harjoituksen sisältö on omassa selkeässä näkymässään; harjoituksista ei navigoida massiivisen teoria-artikkelin ankkuroidulle kohdalle pelkän suorituspolun vuoksi. Lisätietolinkit voivat viedä teoriaoppaan nykyisiin osiin erikseen.

Paluu navigaatiosta säilyttää käynnissä olevan harjoituksen järkevän tilan, mutta kuuntelu pysähtyy sivulta poistuttaessa. Näytä «Jatka» silloin, kun tila on tallennettu. Ei pakollista peliä ennen teoriaa.

### 3.2 Luku 1, 6 harjoitusnäkymää

| Näkymä | Käyttäjälle | Sisällön toteutus | Palautteen periaate |
|---|---|---|---|
| 1. Kuuntele | «Mitä kuulet? Kuuntele sama kierto kahdesti» | 8 tahtia, 4/4, esimerkiksi 72 BPM: G–D–Em–C kaksi kertaa, sointu/tahti | Ei kysytä vielä oikeaa vastausta |
| 2. Löydä sointu | G ja Em, duuri vs molli | 2 erottuvaa vaihtoehtoa; sitten 3–4 valintaa | Mikä soinnun laatu muuttui ja miten se muodostuu |
| 3. Seuraa bassoa | Koko bändi / basso / soinnut | Sama kontrolloitu 8 tahdin tapahtumadata, basson pohjasävelet G–D–E–C | Basso kertoo tässä helpotetussa tapauksessa pohjasävelen, ei automaattisesti koko sointua |
| 4. Rakenna asteet | Siirrä G/D/Em/C asteiksi I/V/vi/IV | Korttipeli tai saavutettava vaihtoehtoinen valintakäyttö | Selitys: G-duurin aste ja rakennussävelet |
| 5. Soita itse | G, D, Em ja C otelautaan; ensin oma tahti, sitten tausta | Selkeä ote ja kielen/mykistyksen merkki; taustalooppi valinnainen | «Harjoittelin» on itsearvio, ei automaattisesti mitattu oikea suoritus |
| 6. Muuta yksi asia | Valitse toinen perusteltu sointuvaihtoehto ja kuuntele eroa | Sointukiertopajan rajattu esiversio; näytä I/IV/V/vi ja sointunimet | Kerro, mitä muuttui. Ei virheväitettä silloin kun ratkaisu on musiikillisesti kelvollinen |

Päätösnäyttö: «Tunnistin», «Päättelin», «Kokeilin soittaa» erotellaan. Loppuun lyhyt musiikillinen näyte vain, jos lisenssi ja soveltuvuus hyväksytty; MVP voi käyttää omaa kontrolloitua bänditaustaa.

### 3.3 Käsikirjoituksen testikappale

Kahdeksan tahdin esimerkki:
- Tahti 1 G (G–B–D), 2 D (D–F#–A), 3 Em (E–G–B), 4 C (C–E–G).
- Tahdit 5–8: sama kierto, soitinsävyä voidaan vaihdella kuitenkaan muuttamatta oikeaa harmonista sisältöä.
- Basso soittaa aluksi perussävelen: G, D, E, C. Käännöksiä ja ohimeneviä bassosäveliä ei lisätä tähän tunnistustestiin.
- Soitinoikeuksien ja pedagogiikan kannalta paras ensiversio käyttää itse tuotettua tai kontrolloidusti synteettistä tapahtumadataa, ei tarkistamatonta Suno-tuotosta.

Tempo 72 BPM ja neljä vaihtoehtoa ovat **pilotissa säädettäviä oletuksia**, eivät lukittuja vaatimuksia.

## 4. Sisältö- ja tietomalli

### 4.1 Mallin erotettavat käsitteet

- Key: toonika, duuriasteikon oikeat sävelnimet ja sävelluokat.
- Degree: 1–7 ja roomalainen kirjoitusasu (I, ii, iii, IV, V, vi, vii°).
- Chord: juurisävel, laatu maj/min/dim, säveljoukko ja sävelnimet oikeassa kirjoitusasussa.
- Grip/Voicing: kuusi kieltä, soitettu/mykistetty kieli, nauha, soivien äänten sävelkorkeudet, pohjasävelen rooli, mahdollinen barre.
- CAGEDShape: muodon alkuperä C/A/G/E/D, siirtymä, sijainnit ja rajat (kokonainen ote tai fragmentti).
- AudioEvent: alkuhetki/tahti, kesto, sointu, soittimet, erillinen basso- ja harmonialähde.
- Exercise: vakaa id, taitotunnisteet, osaamistavoite, vaikeus ja helpotuksen taso, sisältöviite, selittävä palaute ja oikean vastauksen peruste.
- Attempt: aikaleima, tehtäväversio, annettu vastaus, käytetty vihje, automaattisesti todettu vai käyttäjän itse kuittaama.

### 4.2 Tietojen oikeellisuus

- Älä monista OPEN_CHORDS-, CAGED_SHAPES- ja sointulaskentaa kolmeen ristiriitaiseen paikkaan. Selvitä, mikä voi olla yksi validoitu yhteinen lähde.
- Vähennetty kolmisointu (0, 3, 6 puolisävelaskelta) puuttuu nykyisestä CHORDS-luettelosta; lisääminen on erillinen kontrolloitu muutos, joka ei riko muita sointutestitapauksia.
- Esimerkiksi C-duurissa Bdim:n sävelet ovat B–D–F kansainvälisellä nimistöllä. Sävelten kirjainasu ei määräydy yksin MIDI-numerosta.
- **Suomen H/B:** valitse yksi näyttökäytäntö käyttäjän näkymiin ja säilytä sisäinen musikaalinen identiteetti. Tarkista myös vanhojen oppaan sivujen johdonmukaisuus ennen keskitettyä muutosta. Älä tee massakorvausta B → H lähdekoodissa.
- Sormitukset validoidaan laskemalla soivien kielten todelliset sävelet. Duuriote ei saa tuottaa väärää terssiä eikä «täysi CAGED-ote» saa olla sormilta mahdoton aloittelijan portti.

### 4.3 Tallennus

Uusi paikallinen, versionoitu nimiavaruus esimerkiksi:
    musiikin-kartta:sointujen-maailma:v1

Käyttäjän itse kuittamat soittoharjoitukset, automaattisesti mitatut tietovisat ja kuunteluyritykset tallennetaan erikseen. Älä muuta olemassa olevia musiikin-kartta:harjoittelu-, skaalapolku-, moodipolku- tai teorialukuavaimia. Päivityksellä tulee olla migraatiotesti ja säilytyksestä kertova käyttöliittymäteksti.

## 5. Oppimisen säätely ja tehtävien valinta

### Ensimmäinen versio (sääntöpohjainen, ei mystinen «AI»)

- Jokaisella tehtävällä **skillId** (esim. degrees-major-key, hear-bass-root, play-open-chords, transpose-degree-progression).
- Erota oikeellisuus, yritysten määrä, vihjeen käyttö, mahdollinen keskeytys ja itsearvio.
- Ensimmäinen kierros: opeta ja kysy 2 vaihtoehdolla. Onnistumisen jälkeen 3–4 vaihtoehtoa sekä uusi musiikillinen asiayhteys.
- Virhe: kerro *miksi*, näytä/soita yksi vihje ja palauta sama taito uudessa tehtävässä, ei samaa täsmälleen identtistä kysymystä heti.
- Sama exerciseId ja sama audiovariantti ei saa tulla peräkkäin, ellei käyttäjä nimenomaisesti pyydä uusintaa.
- Pidä tuoreiden tehtävien historia rajallisena; mahdollista vakaalla siemenellä toistettava testi ja debuggaus.
- Ei absoluuttista onnistumisprosenttia koko käyttäjälle. Teoriasta suoriutuminen ei merkitse soittosuoritusta.
- Kertaaminen myöhemmin (esim. 1/3/7 päivän rytmi) on jatkokokeilu, ei julkaisuehto.

### Vaihtelua viidellä tasolla

1. Sävellaji / asteet / sointujärjestys.
2. Kysymisen muoto: tunnistus, järjestäminen, kuulohavainto, omatoiminen soitto, rakentaminen.
3. Äänensävy, instrumentointi, tempo ja basson erottelu, mutta oikea vastaus pysyy auditoitavana.
4. Vihjeiden määrä, näkyvä otelauta, vaihtoehtojen lukumäärä.
5. Loppuhaaste: tehtävät samassa musiikillisessa tilanteessa eri painotuksin.

Pelillisyys ei saa peittää oppimistavoitetta: näyttävä «oikein»-animaatio ei ole perustelu. Sama pätee kohtuuttomaan pistemäärän ja nopeuden optimointiin.

## 6. Äänitekniikan työsuunnitelma

### Pakollinen MVP-ääni

- Yksi tapahtumataulukko määrää sointujen ajat, basson sävelet ja oikean vastauksen. Äänentoisto ja tehtävä käyttää samaa lähdettä.
- Soittimien kanavat/raidat: **bändi**, **basso**, **soinnut**. Vaihto ei saa aloittaa eri harmonista aikajanaa; jos toisto aloitetaan alusta, se kerrotaan käyttöliittymässä.
- Ajastus perustuu todelliseen audioaikaan, ei renderöinnin ajastuksen arvaamiseen.
- Mobiilissa ääni alkaa vain käyttäjän toimesta; toisto loppuu pysäytyksestä, navigaatiosta ja tarvittaessa taustalle siirryttäessä.
- Säädä äänenvoimakkuus järkevälle tasolle; bassoraita ei saa olla käytännössä kuulumaton puhelimen kaiuttimella. Kuulokekuunteluun suositus tarvittaessa.
- Testaa soittimen tilakone: play, stop, replay, stems, hidden tab, page navigation, orientation change.

### Suno erillisenä sisältötyönä

Jokaisella hyväksytyllä audiolla tulee olla: tunniste, versio, tekijä/tuotantotapa, oikeudet, kesto, tahtilaji, tempoarvio, harmoninen rakenne tarkistettuna, opetuskäyttö ja tiedostopaikka. Kuratoi valmiiksi kokonainen 20–60 sekunnin musikaalinen katkelma vain loppuosioon. Älä aloita tämän työn Suno-tilauksilla ennen MVP:n musiikillisen käsikirjoituksen hyväksyntää. Lisenssimerkinnät sovitetaan olemassa olevaan assets/audio/AANITTEET-LISENSSI.md-käytäntöön.

## 7. PR- ja toteutusjono

**Säilytä tämä järjestys.** Alla olevat nimet kuvaavat tulevia tehtäviä; niitä ei ole avattu tai toteutettu.

### P0: Nykytilan auditointi ja integraatiopäätös (suunnittelutyö)

Tehtävät:
- Varmista, mihin Oppimiskartan aihekohtaisiin sivuihin #65 lopulta yhdistyy ja missä on Soinnut ja harmonia -aiheen reitti.
- Inventoi ChordJourney, Board, music, audio, storage, teoriaoppaan asiaankuuluvat osat sekä uudistusten mahdollisesti muuttamat testit.
- Kirjaa uudelleenkäytettävät funktiot, ylikirjoitusriskit, käyttöliittymän reittirajapinta ja testattavat H/B-nimitykset.
- Valmistele ensimmäisen luvun musiikillinen käsikirjoitus (edellä) kuunneltavaksi.
- Päätä lähdekoodin toteutushaara vasta todellisen yhdistämistilanteen perusteella.

**Valmis kun:** kirjallinen auditointimuistio, validoidut riippuvuudet, ei yhteisen työn päällekkäisiä tiedostomuutoksia. Omistaja hyväksyy seuraavan rajatun PR:n.

### P1: Sointudatan perusta ja yksikkötestit (ensimmäinen koodi-PR)

Tehtävät:
- Toteuta vain tarkistettava sointuperhe/aste/sointusävel-laskenta ja näyttönimien rajapinta.
- Lisää maj/min/dim-tietomalli niin, että nykyinen maj/min/dom7-logiikka säilyy yhteensopivana.
- Lisää 5 × 7 -astetestit C/G/D/A/E, mukaan lukien vii°, H/B-nimitysten näyttö ja enharmoninen oikeellisuus.
- Validoi harjoitukseen käytettävät G/D/Em/C-avosoitto-otteet ja soivat MIDI-sävelet.
- Ei uusia lukusivuja eikä muutosta Ensikeikka/Riffikaiku-koodiin.

**Valmis kun:** kaikki 35 diatonista astetta ovat testattuja, olemassa olevat testit läpäisevät, mitään vanhaa URL- tai tallennuskäyttäytymistä ei muuteta.

### P2: Luvun 1 teoria ja visuaalinen harjoitus (yksi UI-PR)

Tehtävät:
- Tee hyväksytyn navigaatiomallin mukainen Sointujen maailma -etusivu ja erillinen G-duurin luku.
- Käsikirjoita lyhyt teoria I/IV/V/vi; lisää G/D/Em/C ja asteiden yhdistelypeli, saavutettavat painikevalinnat ja selittävä virhepalaute.
- Käytä nykyistä Boardia tai yhteistä näkymälogiikkaa; ensimmäisessä vaiheessa ei ääniä, joita ei ole auditoitu.
- Lisää takaisin-navigointi, saavutettava otsikkohierarkia, mobiilitestaus ja yhden harjoituksen vähintään 3 virhetilaa.

**Valmis kun:** oppija voi tehdä tehtävän hiirellä, kosketuksella ja näppäimistöllä; mikään vanha polku ei katoa; tehtävän oikeellisuus perustuu P1:n dataan.

### P3: Basson kuuntelu ja kontrolloitu äänisoitto (yksi audio-PR)

Tehtävät:
- Toteuta 8 tahdin G–D–Em–C-esimerkki yhteisestä tapahtumamallista.
- Lisää bändi / basso / soinnut -kuuntelu ilman väärien sointumerkintöjen riskiä.
- Kuuntelupeli: yksinkertainen basson pohjasävel tai duuri/molli-vaihtoehto, oikea palaute ja helpotettu uusintakuuntelu.
- Testaa samanaikaisuuden sijaan hallitusti valittavat soitintilat, pysäytys ja toiston keskeytykset.

**Valmis kun:** kaikki basson ja sointujen tapahtumat voidaan tarkistaa yksikkötesteissä ja toisto toimii myös mobiiliesikatselussa. Ääni ei jatku poistuttaessa.

### P4: Oikean kitaran harjoitus ja edistyminen (yksi UX-PR)

Tehtävät:
- Otekuvat G/D/Em/C, mykistetyt/vapaat kielet, hidas vaihtoharjoitus ja valinnainen taustatoisto.
- Käyttäjän itsekuittaus erillään automaattisesta oikeellisuudesta. Ei vaatimusta mikrofonista.
- Tehtävän satunnaisvaihtelu niin, ettei sama sisältö toistu sellaisenaan; yksinkertainen skillId-kohtainen tilanne.
- Versionoitu tallennus uudessa avaimessa, alkuperäisten tallennusten regressiotestit.

**Valmis kun:** harjoitus on tehtävissä ilman mikkiä tai äänikorttia; selaimen sulkeminen/sivulle paluu ja jatkaminen toimii; itsearviota ei väitetä mitatuksi soittotaidoksi.

### P5: Soveltaminen ja ensimmäisen luvun pilotointi

Tehtävät:
- Rajattu sointukiertopaja: sama sävellaji, I/IV/V/vi, yksi muuttuva kohta, kuuntele ja vertaa.
- Luvun päätösyhteenveto, kertaus ja siirtymä seuraavaan lukuun ilman pakollista lukitusta.
- Käytä nykyistä auditoitua taustaa; Suno ei ole julkaisun estävä riippuvuus.
- Kokeile itse oikealla kitaralla ja iPhonella. Kerää vähintään muutaman aloittelijan havaintoja, jos testihenkilöitä on käytettävissä; älä väitä tehtyjä käyttäjätestejä ilman näyttöä.
- Kirjaa havainnot: epäselvät käsitteet, virheelliset valinnat, toiston ongelmat, oppimisen ilmeneminen.

**Valmis kun:** yksi kokonainen luku on pelattavissa päästä päähän, hyväksymiskriteerit täyttyvät ja omistaja hyväksyy jatkolaajennuksen.

### P6: Laajennus lukuihin 2–5, vasta pilotin jälkeen

Toteuta 4 erillistä sisältöpakettia. Luku 2: C-duurin sointujen rakentaminen 1–3–5, mukana vii°. Luku 3: kontrolloidut I/IV/V/vi-kuuntelut. Luku 4: vapaampi sointukiertopaja. Luku 5: transponointi G→C→D→A→E. Jokaisen paketin jälkeen musiikkiteorian tarkistus, saavutettavuus ja rajattu oikean käyttäjän koe.

**Valmis kun:** samat abstraktiot toimivat kaikissa viidessä sävellajissa eikä vaikea barré-ote estä teoria- tai kuunteluetenemistä.

### P7: Luku 6, CAGED (oma projektinsa)

- Aloita saman C-duurisoinnun **pohjasävelistä**, triadeista ja soivista 2–3-kielisistä fragmenteista.
- Näytä kaksi eri kohtaa ennen koko viiden muodon kiertoa. Erota otteen nimi soinnun nimestä.
- Varmista jokaiselle muunnokselle MIDI-sävelet, rootit, soivat kielet, saavutettavuus ja pedagoginen soitettavuus.
- Mahdollista miellyttävä oppiminen ilman kokobarré-vaatimusta; vaikeat kokonaiset muodot ovat jatkoharjoituksia.
- Kytke harjoitukset valmiiseen Otelautaoppaaseen linkeillä, ei koodin kopioinnilla.

### P8: Luvut 7–8 ja mahdolliset laadukkaat musiikkinäytteet

- Luku 7: sointusävelen osuminen melodiaan, esimerkiksi 2 tahdin päätös I-soinnun pohjasäveleen tai terssiin.
- Luku 8: yhdistetty sointukeikka, johon tehdään uusi musiikillinen tilanne ja 2–3 erilaista tehtävää, ei vain sama monivalinta.
- Päätösnäytteet voi kuratoida Sunolla tai muulla laillisella tuotantotavalla. Testaa niiden pedagoginen toimivuus ja dokumentoi käyttöoikeudet.
- Ensikeikka/Riffikaiku: lisätään vain linkit, tai tulevaisuudessa erikseen määritelty yhteinen rajapinta. Näiden pelien sisäiseen logiikkaan ei kosketa ilman uutta tehtävää.

## 8. Testausmatriisi ja julkaisun portit

| Ulottuvuus | Pakollinen todennus |
|---|---|
| Musiikkidata | 5 sävellajia × 7 astetta, sävelten intervallit, nimet, triadien laatu, vähennetty, olemassa olevien avosointujen oikeellisuus |
| CAGED | Otteiden säveljoukot, pohjasävelet, siirrot, mykistetyt kielet; fragmenteille oma testikattavuus |
| Audio | Tapahtumataulu ja soiva sointukulku vastaavat; bassoraita vastaa samassa tahdissa; stop/replay/kanavanvaihto |
| Palaute | Jokaisessa virheessä ymmärrettävä selitys ja järkevä seuraava askel; vihje ei kirjaudu itsenäiseksi onnistumiseksi |
| Eteneminen | Omatoiminen soitto on itsekuittaus; teoria, korva ja soittaminen erillisiä; vanhat tallennukset säilyvät |
| Toisto | Ei identtistä peräkkäistä tehtävää ilman käyttäjän omaa uusintaa; testattava, toistettava tehtävävalinta |
| Navigointi | Sivu/aihe/takaisin sekä selaimen Back; vanhat URL-ankkurit ja parametrit säilyvät |
| Responsiivisuus | 320/360/390/768/1280 px, ei pakollista vaakasuuntaista navigointia kuunteluun tai korttitehtäviin |
| Käytettävyys | iPhone/Safari oikeana laitteena, kosketus, äänen avaaminen, tauko ja keskeytykset |
| Saavutettavuus | Otsikot, fokus, näppäimistö, kuvioiden tekstivastineet, ei pelkkää väriin perustuvaa palautetta |
| Regressio | npm run lint; npm run typecheck; npm test; npm run build; npm run test:e2e; python3 tools/linkit/tarkista-linkit.py |
| Julkaisu | Esikatselu ja omistajan kuittaus, vasta sen jälkeen sovittu beta / tuotanto |

Älä raportoi testien läpäisyä ennen kuin ne on ajettu nimenomaisessa toteutushaarassa. GitHubin vanhojen PR:ien testiluvut eivät ole tämän uuden työn testituloksia.

## 9. Pilotin havainnot ja päätöskriteerit

Ensimmäisen luvun testissä katsotaan **oikeaa ymmärtämistä**, ei pelkkää klikkausmäärää:
- Pystyykö oppija selittämään, että G on I, D on V, Em on vi ja C on IV G-duurissa?
- Huomaako hän basson ja koko bändin eron ja löytääkö basson muutokset rauhassa?
- Ymmärtääkö hän, miksi Em on molli eikä G-duurin ulkopuolinen sointu?
- Löytääkö hän G/D/Em/C-otteet ja pystyykö hän kokeilemaan kiertoa omaan tahtiinsa?
- Pystyykö hän kuvaamaan, mitä vaihtamalla yhtä sointua tapahtuu?
- Jääkö opetuksesta tunne edistymisestä ilman pakollista uudelleenpelausta?

Havainnot ja korjaukset kirjataan ennen P6-vaihetta. Mittauskynnysarvoja ei lukita ennen pilottia.

## 10. Ensimmäinen toteutusagentille annettava toimeksianto (P0, ei koodausta)

**Tavoite:** tee tekninen ja sisällöllinen lähtötila-auditointi. Älä muuta tuotetiedostoja tai pelilogiikkaa.

1. Lue nämä kaksi dokumenttia kokonaan.
2. Selvitä tämänhetkinen oikea integraatiopohja (main, beta, Oppimiskartta-PR:t, Kitaran perusteiden PR #65) ja dokumentoi commit-SHA:t.
3. Inventoi harjoittelija/ChordJourney.tsx, Board.tsx, music.ts, audio.ts, storage.ts, LearningPaths.tsx, book/osa-3/4/6/7, nykyiset testit sekä mahdolliset uudet oppi/-sivut.
4. Ehdota rajattua sointudatan API:a, yhtenäistä ote- ja sävelnimilähdettä ja ensimmäisen G-duuriluvun reittiä. Nimeä tarkat uudelleen käytettävät ja muutettavat tiedostot.
5. Tarkista, missä nykyinen H/B-merkintä todellisuudessa ratkaistaan; älä muuta sitä auditoinnin aikana.
6. Raportoi ristiriidat, päällekkäisyydet muiden agenttien töiden kanssa ja välttämättömät päätökset. Jos yhteinen työhaara on liikkeessä, pysähdy ilman muutoksia.
7. Tuota yksi auditointiraportti ja ehdotus P1:n rajatuksi PR:ksi. Älä mergeä, julkaise tai vaihda aktiivisen kehityksen pohjaa.

**P0:n tulos:** hyväksyttävä auditointiraportti + tiedostotason P1-tehtävä, ei sovelluskoodia.

## 11. Toteutuksen tilanseuranta

| Paketti | Tila 15.11.2026 | Aloituksen ehto |
|---|---|---|
| Dokumentointi (tämä) | Dokumentointihaara, draft-PR valmisteltavana | Ei muuta |
| P0 Nykytilan auditointi | EI ALOITETTU | Omistajan päätös auditoinnin käynnistämisestä |
| P1 Data ja testit | EI ALOITETTU | P0 hyväksytty |
| P2 Ensimmäinen käyttöliittymä | EI ALOITETTU | P1 hyväksytty |
| P3 Basson audio | EI ALOITETTU | P2 + audio-rajapinta |
| P4 Kitara ja eteneminen | EI ALOITETTU | P2/P3 toimiva kokonaisuus |
| P5 Ensimmäisen luvun pilotointi | EI ALOITETTU | P1–P4 hyväksytty |
| P6 Luvut 2–5 | EI ALOITETTU | P5 palaute käsitelty |
| P7 CAGED | EI ALOITETTU | P6 tai erikseen hyväksytty suppea pilotti |
| P8 Soinnut ja melodia / loppukeikka | EI ALOITETTU | Sovitut edeltävät rajapinnat ja sisältö |

## 12. Jatkossa päivitettävät päätökset

- Mikä on hyväksytty Oppimiskartta-/Kitaran perusteiden integraatiopohja?
- Mikä on näkyvän suomenkielisen H/B-merkinnän käytäntö?
- Missä kulkee uusi Sointujen maailman erillisten sivujen reittirakenne?
- Hyväksytäänkö 72 BPM ja kahdeksan tahdin G–D–Em–C pilottiaudioksi?
- Onko yhteinen audioevent-rajapinta jo olemassa sellaisenaan vai tarvitaanko adapteri?
- Milloin Suno-ääninäytteet otetaan mukaan ja mitä käyttöoikeuksia niillä on?
- Miten pilottitestit tehdään fyysisellä iPhonella ja oikealla kitaralla?

Päätökset dokumentoidaan ennen koodia, joka niistä riippuu. **Älä yritä ratkaista kaikkia nyt.**
