# Ensikeikka – Kotikulman keikka: musiikillinen käsikirjoitus

**Tila:** pilotin ensimmäinen toteutus haarassa `claude/kotikulman-ensikeikka`. Automaattitestit ja
signaalianalyysi on tehty. **Kuulonvarainen hyväksyntä puuttuu.**
**Lähtökohta:** [PR #66](https://github.com/ristotoivanen/Musiikin-kartta/pull/66) (Ensitreenit 1–9 → Ensikeikka).

## Ajatus

Ensitreeneissä (kappaleet 1–9) pysähdytään, eristetään ja analysoidaan yksi lopetus kerrallaan.
Ensikeikalla samat kuuntelutaidot käytetään **pidemmässä musiikissa**, ja pelaaja kuulee aina,
miltä hänen valintansa kuulostaa. Keikka on kolme numeroa ja lopuksi koko keikka yhtenä esityksenä.

| Numero | Tunniste | Bändin tilanne | Taito Ensitreeneistä | Uutta |
| --- | --- | --- | --- | --- |
| Soundcheck – Mikä muuttui? | 10 | Ennen ovien avaamista bändi soittaa saman pätkän kahdesti. Miksaaja kysyy, mikä muuttui. | Basso (7, 9), soinnut ja duuri/molli (4, 8), melodian suunta (1–6) | **Vertailutehtävä**: ei lopetusta vaan kahden kokonaisen version ero. Vastaus on soittimen osa, ei kirjain. Kolme kierrosta, eri sävellajit. Erilliskuuntelu on vihje. |
| Ensimmäinen biisi – Miten kappale jatkuu? | 11 | Laulaja aloittaa säkeistön, ja bändin pitää valita sen loppupuolisko. Bändillä on tavoite. | Piste ja kysymys (8), kotiin palaaminen (1–6) | **Jatkotehtävä**: vaihtoehdot ovat neljän tahdin jatkoja, eivät yksittäisiä säveliä. Valinta ratkeaa **soittamalla koko kappale** valitulla jatkolla; palaute tulee vasta esityksen jälkeen. Kaksi eri kappaletta, joissa tavoite on päinvastainen. |
| Illan viimeinen kappale – Kertosäe nousee | 12 | Viimeinen kertosäe nostetaan sävelaskeleen ylemmäs. Basso vie bändin uuteen kotiin. | Basson kuuntelu (7, 9), kotisävel (1–6) | **Koti vaihtuu kesken kappaleen.** Vanha kotisävel on lopussa väärä. Ensin kuunnellaan, mihin basso vie, sitten valitaan melodian loppu uudessa kodissa. |
| Koko keikka | – | Soundcheck-riffi, ensimmäinen biisi ja viimeinen kappale soivat peräkkäin aplodeineen. | – | Pelaaja kuulee keikkansa yhtenä esityksenä. |

## 1. Soundcheck – Mikä muuttui? (kappale 10)

Jokaisella kierroksella kaksi versiota ovat yhtä pitkät ja yhtä voimakkaat. **Vain yksi osa muuttuu**,
ja muut osat ovat näytteen tarkkuudella samat (yksikkötesti tarkistaa tämän kerroksittain). Mikään osa ei katoa.

| Kierros | Sävellaji | Muutos | Miksi kuultavissa |
| --- | --- | --- | --- |
| Opetusjärjestys 1 | C-duuri | **Soinnut**: toinen tahti F → Fm | Terssi A → A♭ (duuri → molli, tuttu teoriaosasta). Melodia ja basso eivät soita A:ta eivätkä A♭:ta. |
| Opetusjärjestys 2 | a-molli | **Basso**: E7-tahdin kulku nousee E–F♯–G♯ → A tai laskee E–D–C → A | Suunta, tuttu kappaleista 7 ja 9 |
| Opetusjärjestys 3 | D-duuri | **Melodia**: toisen tahdin sävelet A-duurisoinnusta nousevassa tai laskevassa järjestyksessä | Samat sävelet, eri suunta, joten energia on sama |
| Harjoittelun vaihtoehto 1 | a-molli | Melodia: kaari ylös tai alas | Eri kappale kuin opetusjärjestyksessä |
| Harjoittelun vaihtoehto 2 | G-duuri | Basso: D–E–F♯ → G tai D–C–B → G | |
| Harjoittelun vaihtoehto 3 | E-duuri | Soinnut: A → Am | |

Vastausvaihtoehdot ovat **Basso, Soinnut ja Melodia** samassa järjestyksessä joka kierroksella.
Opetusjärjestyksessä jokainen osa muuttuu kerran. Harjoittelussa arvotaan kahdesta kierrossarjasta toinen.
Rajoitus: opetusjärjestyksen kolmannen kierroksen vastauksen voi päätellä, jos tietää, että kaikki osat esiintyvät kerran.
Peli ei kerro tätä, mutta jatkossa kierroksia voisi arpoa laajemmasta joukosta.

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

G-duuri, 104. Kertosäe G–Em–C–D, sitten basso nousee D–D♯–E, E7 on uuden sävellajin dominantti,
ja kertosäe toistuu A-duurissa (A–F♯m–D–E–A). Melodia on transponoitu kokonaisen sävelaskeleen ylöspäin.

- **Vaihe 1 (perustelu, basso erikseen):** "Mihin basso vie viimeisellä kierroksella?" Väitteet:
  uuteen ja korkeampaan kotiin, samaan kotiin, matalammalle. Ratkaiseva kohta (tahdit 4–7) soitetaan
  rajattuna katkelmana.
- **Vaihe 2 (lopetus, melodia erikseen):** A (uusi koti, oikein), G (vanha koti, joka on nyt
  A-duurisoinnun pieni septimi ja jää riitelemään) ja C♯ (uuden kotisoinnun terssi: vakaa mutta ei koti).
- Ero kappaleeseen 9: kotisävel ei ole kiinteä. Opittu tieto "basso näyttää kodin" ratkaisee, miksi
  aiemmin oikea G on nyt väärä.

## Mitä tarkistetaan korvalla (ei automaattisesti)

1. Soundcheck: kuuluuko F → Fm ‑muutos puhelimen kaiuttimesta? Erottuuko melodian suunta, kun sävelet ovat samat?
2. Basson suunta kierroksella 2 (E–F♯–G♯ ja E–D–C), myös puhelimessa.
3. Ensimmäinen biisi: tuntuuko vastaus pisteeltä ja avoin jatko kysymykseltä? Onko kumpikin uskottava?
4. Nousu kappaleessa 12: kuuluuko sävellajin nousu selvästi, ja kuulostaako vanha G lopussa väärältä?
5. Koko keikka: siirtymät, kokonaistaso, aplodien luonnollisuus ja pituus (noin 60 s).

## Suno

Sunoa ei käytetä. Koko keikka renderöidään nykyisellä moottorilla, joten oikeat vastaukset ovat
täsmälleen määriteltyjä. Mahdollinen Suno-encore on erillinen, vapaaehtoinen kokeilu, ja sen
hyväksyntälista on PR #66:ssa.

## Jatkokehitys (ei toteutettu)

- Näkyvä nimistö **Ensitreenit** keikoille 1 ja 2 ja **Keikkakalenteri** omassa hyväksytyssä PR:ssään.
  Tekniset tunnisteet (keikat 1–3, kappaleet 1–12, `#keikka-3`) voivat pysyä ennallaan.
- Soundcheckin kierrokset laajemmasta joukosta, myös rumpujen muutos rytmiopintojen jälkeen.
- Ensimmäiseen biisiin kolmas versio ja jatkon valinta kesken soiton ilman pysähdystä.
- Sunolla viimeistelty, vapaaehtoinen encore koko keikan jälkeen.
