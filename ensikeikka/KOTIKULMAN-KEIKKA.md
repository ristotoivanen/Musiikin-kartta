# Ensikeikka – Kotikulman keikka: musiikillinen käsikirjoitus

**Tila:** pilotti ja omistajan 16.11.2026 rajattu korjauskierros haarassa `claude/kotikulman-ensikeikka`.
Automaattitestit ja signaalianalyysi on tehty. **Kuulonvarainen hyväksyntä puuttuu.**
**Lähtökohta:** [PR #66](https://github.com/ristotoivanen/Musiikin-kartta/pull/66) (Ensitreenit 1–9 → Ensikeikka).

## Ajatus

Ensitreeneissä (kappaleet 1–9) pysähdytään, eristetään ja analysoidaan yksi lopetus kerrallaan.
Ensikeikalla samat kuuntelutaidot käytetään **pidemmässä musiikissa**, ja pelaaja kuulee aina,
miltä hänen valintansa kuulostaa. Keikassa on kolme vaihetta: soundcheck ja kaksi keikkabiisiä. Lopuksi
keikkabiisit voi kuunnella peräkkäin yhtenä esityksenä. Soundcheck on harjoitus ennen ovien avaamista,
joten se ei kuulu esitykseen.

| Numero | Tunniste | Bändin tilanne | Taito Ensitreeneistä | Uutta |
| --- | --- | --- | --- | --- |
| Soundcheck – Mikä muuttui? | 10 | Ennen ovien avaamista bändi soittaa saman pätkän kahdesti. Miksaaja kysyy, mikä muuttui. | Basso (7, 9), soinnut ja duuri/molli (4, 8), melodian suunta (1–6) | **Vertailutehtävä**: ei lopetusta vaan kahden kokonaisen version ero. Vastaus on soittimen osa, ei kirjain. Kolme kierrosta arvotaan yhdeksän kierroksen joukosta. Erilliskuuntelu on vihje. |
| Ensimmäinen biisi – Miten kappale jatkuu? | 11 | Laulaja aloittaa säkeistön, ja bändin pitää valita sen loppupuolisko. Bändillä on tavoite. | Piste ja kysymys (8), kotiin palaaminen (1–6) | **Jatkotehtävä**: vaihtoehdot ovat neljän tahdin jatkoja, eivät yksittäisiä säveliä. Valinta ratkeaa **soittamalla koko kappale** valitulla jatkolla; palaute tulee vasta esityksen jälkeen. Kaksi eri kappaletta, joissa tavoite on päinvastainen. |
| Illan viimeinen kappale – Kertosäe nousee | 12 | Viimeinen kertosäe nostetaan sävelaskeleen ylemmäs. Basso vie bändin uuteen kotiin. | Basson kuuntelu (7, 9), kotisävel (1–6) | **Koti vaihtuu kesken kappaleen.** Vanha kotisävel on lopussa väärä. Ensin kuunnellaan, mihin basso vie, sitten valitaan melodian loppu uudessa kodissa. |
| Keikan biisit | – | Ensimmäinen biisi ja illan viimeinen kappale soivat peräkkäin aplodeineen. | – | Valmiit biisit yhtenä esityksenä. Soundcheck ei ole mukana. |

## 1. Soundcheck – Mikä muuttui? (kappale 10)

Jokaisella kierroksella kaksi versiota ovat yhtä pitkät ja yhtä voimakkaat. **Vain yksi osa muuttuu**,
ja muut osat ovat näytteen tarkkuudella samat (yksikkötesti tarkistaa tämän kerroksittain kaikille
yhdeksälle kierrokselle). Mikään osa ei katoa.

| Kierros | Sävellaji | Muutos | Miksi kuultavissa |
| --- | --- | --- | --- |
| 0 | C-duuri | **Soinnut**: toinen tahti F → Fm | Terssi A → A♭ (duuri → molli, tuttu teoriaosasta). Melodia ja basso eivät soita A:ta eivätkä A♭:ta. |
| 1 | a-molli | **Basso**: E7-tahdin kulku nousee E–F♯–G♯ → A tai laskee E–D–C → A | Suunta, tuttu kappaleista 7 ja 9 |
| 2 | D-duuri | **Melodia**: toisen tahdin sävelet A-duurisoinnusta nousevassa tai laskevassa järjestyksessä | Samat sävelet, eri suunta, joten energia on sama |
| 3 | a-molli | Melodia: d-mollisoinnun sävelet ylös tai alas | |
| 4 | G-duuri | Basso: D–E–F♯ → G tai D–C–B → G | |
| 5 | E-duuri | Soinnut: A → Am | Terssi C♯ → C |
| 6 | D-duuri | Soinnut: G → Gm | Terssi B → B♭. Melodia ei soita B:tä eikä B♭:tä. |
| 7 | F-duuri | Basso: C7-tahdin kulku C–D–E → F tai C–B♭–A → F | |
| 8 | e-molli | Melodia: a-mollisoinnun sävelet pisteellisessä rytmissä ylös tai alas | Eri rytmi kuin muissa melodiakierroksissa |

**Arvonta (`drawSoundcheck`).** Jokainen yritys, myös etenemisessä, arpoo kolme kierrosta. Kunkin
kierroksen osa (basso, soinnut tai melodia) arvotaan erikseen ja tasajakaumasta, joten sama osa voi
muuttua useammin kuin kerran. Kolmatta vastausta ei siksi voi päätellä kahdesta ensimmäisestä.
Osan sisällä valitaan vielä käyttämätön kierros, joten sama pätkä ei toistu sarjassa. Arvonta säilyy
yrityksen ajan, ja otsikot ("Soundcheck 1/3"), johdannot ja ratkaisun selitys rakennetaan arvotuista
kierroksista. Uudelleenlataus aloittaa keskeneräisen soundcheckin alusta uudella arvonnalla, kuten
muutkin keskeneräiset kappaleet. Tallenne ei muutu, koska kappaleen tunniste on edelleen 10.

Vastausvaihtoehdot ovat **Basso, Soinnut ja Melodia** samassa järjestyksessä joka kierroksella.
Oletussarja (kierrokset 0, 1, 2) on vain yksikkötestien ja dokumentaation lähtökohta.

## 2. Ensimmäinen biisi – Miten kappale jatkuu? (kappale 11)

Säkeistön alkupuolisko (4 tahtia) päättyy dominanttiin eli kysymykseen. Vaihtoehtoina on kaksi
neljän tahdin jatkoa:

- **Vastaus (piste):** toistaa alun aiheen ja palaa kotisointuun ja kotisäveleen (B→C tai G♯→A).
- **Avoin jatko (kysymys):** tuo uutta melodiaa ja pysähtyy taas dominanttiin, joka johtaa kertosäkeeseen.

Kumpikin on musiikillisesti toimiva. **Arviointi perustuu bändin ilmoittamaan tavoitteeseen**, ei
makuun, ja palaute sanoo tämän.

| Versio | Sävellaji, tempo | Bändin tavoite | Oikea jatko |
| --- | --- | --- | --- |
| Opetus | C-duuri, 100 | "Säkeistö on lopussa. Päätetään se kotiin, jotta laulaja ehtii hengähtää." | Vastaus |
| Harjoittelun vaihtoehto | a-molli, 92 | "Kertosäe tulee heti perään. Säkeistön pitää jäädä kysymykseen." | Avoin jatko |

## 3. Illan viimeinen kappale – Kertosäe nousee (kappale 12)

G-duuri, 104. Kertosäe G–Em–C–D palaa G-duurisointuun (tahti 5). Sen jälkeen basso nousee
puolisävelaskelin **G–G♯–A** (tahdit 5–7): G♯-bassoinen E7 (E7/G♯) on uuden sävellajin dominantti,
ja kertosäe toistuu A-duurissa (A–F♯m–D–E–A). Melodia on transponoitu kokonaisen sävelaskeleen ylöspäin.
Sovitus (`first-gig.ts`, sointujen indeksit 4–6) ja yksikkötesti käyttävät samaa G–G♯–A-kulkua.

- **Vaihe 1 (perustelu, basso erikseen):** "Mihin basso vie viimeisellä kierroksella?" Väitteet:
  uuteen ja korkeampaan kotiin, samaan kotiin, matalammalle. Ratkaiseva kohta (tahdit 4–8, D-sointu
  ennen nousua ja kertosäkeen alku A-duurissa) soitetaan rajattuna katkelmana.
- **Vaihe 2 (lopetus, melodia erikseen):** bändin tavoite on päättää kappale uuteen kotiin.
  A (uusi koti, oikein), G (vanha koti) ja C♯ (uuden kotisoinnun terssi: vakaa mutta ei koti).
- **G:n palaute on tavoitesidonnainen.** A-duurisoinnun päällä G on pieni septimi. Bluesissa ja
  rockissa sillä lopetetaan joskus tarkoituksella, joten palaute ei väitä sen riitelevän soinnun kanssa
  tai olevan yleisesti väärä. Se on väärä tähän tehtävään, koska se jättää loppuun jännitteen eikä
  päätä kappaletta uuteen kotiin, kuten bändi halusi.
- Ero kappaleeseen 9: kotisävel ei ole kiinteä. Opittu tieto "basso näyttää kodin" ratkaisee, miksi
  aiemmin oikea G on nyt väärä.

## Mitä tarkistetaan korvalla (ei automaattisesti)

1. Soundcheck: kuuluuko F → Fm ‑muutos puhelimen kaiuttimesta? Erottuuko melodian suunta, kun sävelet ovat samat?
2. Basson suunta kierroksella 2 (E–F♯–G♯ ja E–D–C), myös puhelimessa.
3. Ensimmäinen biisi: tuntuuko vastaus pisteeltä ja avoin jatko kysymykseltä? Onko kumpikin uskottava?
4. Nousu kappaleessa 12: kuuluuko sävellajin nousu selvästi? Kuulostaako vanha G lopussa jännitteiseltä
   ja keskeneräiseltä bändin tavoitteeseen nähden, ja vastaako palaute kuultua?
5. Keikan biisit: siirtymä ensimmäisestä biisistä viimeiseen, kokonaistaso, aplodien luonnollisuus ja pituus (noin 45 s).
6. Soundcheckin uudet kierrokset 6–8: G → Gm (D-duuri), basson C7-kulku (F-duuri, myös matala C2 puhelimessa)
   ja e-mollin pisteellinen melodiakierros.

## Suno

Sunoa ei käytetä. Keikan biisit renderöidään nykyisellä moottorilla, joten oikeat vastaukset ovat
täsmälleen määriteltyjä. Mahdollinen Suno-encore on erillinen, vapaaehtoinen kokeilu, ja sen
hyväksyntälista on PR #66:ssa.

## Keikan biisit (finaali)

Keikan viimeisen vaiheen jälkeen "Kuuntele keikan biisit" soittaa ensimmäisen biisin ja illan viimeisen
kappaleen peräkkäin ja lopuksi aplodit (`gig.finale.songs = [11, 12]`). Biisit soivat
**opetusversioina hyväksytyillä ratkaisuilla** (`target`), eli samoina, jotka pelaaja soittaa
etenemisessä. Esitys ei toista harjoittelussa kokeiltuja versioita eikä pelaajan yksittäisiä ottoja,
koska niitä ei tallenneta. Siksi se on sama myös uudelleenlatauksen jälkeen. Kortti kertoo tämän.
Soundcheck (kappale 10) on edelleen keikan vaihe ja suoritus, mutta ei esitys. Siksi laskuri näyttää
"N / 3 vaihetta" ja valmistumiskortti "Suoritit soundcheckin ja kaksi keikkabiisiä."

## Jatkokehitys (ei toteutettu)

- **Keikkakalenteri** omassa hyväksytyssä PR:ssään. Keikkojen 1 ja 2 näkyvä nimistö on toteutettu
  tehtävässä #79 nimellä **Bänditreenit** (treenikerrat 1 ja 2); tekniset tunnisteet pysyivät ennallaan.
- Soundcheckiin rumpujen muutos rytmiopintojen jälkeen ja lisää kierroksia kuuntelutestin perusteella.
- Pelaajan valitseman version tallentaminen, jos finaalin halutaan joskus toistavan henkilökohtaiset otot (vaatisi tallennusformaatin laajennuksen).
- Ensimmäiseen biisiin kolmas versio ja jatkon valinta kesken soiton ilman pysähdystä.
- Sunolla viimeistelty, vapaaehtoinen encore koko keikan jälkeen.
