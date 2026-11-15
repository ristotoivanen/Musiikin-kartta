# Sointujen maailma: sointuperheet, diatoninen harmonia ja CAGED

**Musiikin kartta | pedagoginen suunnitelma v0.2 | 15.11.2026**
**Tila: EHDOTUS, dokumentointi vain. Ei kehityksen tai julkaisun hyväksyntää.**

Tämä versio säilyttää 15.11.2026 laaditun suunnitelman v0.1 olennaisen sisällön ja täsmentää sitä nykyiseen GitHub-arkkitehtuuriin sopivaksi. Yksityiskohtainen vaiheistus on dokumentissa [sointujen-maailma-toteutusohjelma.md](sointujen-maailma-toteutusohjelma.md).

## 1. Oppimistulos

Oppija ymmärtää, mistä duurisävellajin diatoniset soinnut tulevat, pystyy päättelemään ne asteikosta, tunnistaa tuttuja harmonisia tapahtumia kuuntelemalla, soittaa tarkoituksenmukaisia kiertoja sekä löytää saman soinnun eri kohdista otelautaa CAGED-muotojen ja kolmisointujen avulla. Osaaminen ei tarkoita 30 kuvallisen otteen ulkoa opettelua.

Erotetaan toisistaan **soinnun nimi**, **sävellaji**, **aste**, **soinnun laatu**, **soinnun sävelet**, **sormitus/ote**, **CAGED-muoto** ja **äänessä kuuluva sointuasettelu**. Nämä eivät ole synonyymejä.

## 2. Lähdekuvan tulkinta ja aineiston tarkistus

Käyttäjän jakamassa kuvassa on viiden duurisävellajin (C, A, G, E, D) kuusi ensimmäistä diatonista kolmisointua. Se ei yksin selitä CAGED-järjestelmää: CAGED tarkoittaa viiden avoimen perussoinnun muotojen siirtämistä otelaudalla, ei viiden sävellajin luetteloa. Kuvasta puuttuu vii° eli seitsemännen asteen vähennetty sointu. Kuva ei kelpaa tarkistamattomien sormitusten lähdekoodiksi.

Duurin diatoninen kolmisointukaava on **I – ii – iii – IV – V – vi – vii°**, laadut duuri–molli–molli–duuri–duuri–molli–vähennetty.

| Sävellaji | I | ii | iii | IV | V | vi | vii° |
|---|---|---|---|---|---|---|---|
| C | C | Dm | Em | F | G | Am | Bdim |
| G | G | Am | Bm | C | D | Em | F#dim |
| D | D | Em | F#m | G | A | Bm | C#dim |
| A | A | Bm | C#m | D | E | F#m | G#dim |
| E | E | F#m | G#m | A | B | C#m | D#dim |

Suomenkielisen H/B-merkintätavan ratkaisu tehdään keskitetysti ennen julkaisua. Taulukossa on kansainvälinen B-nimitys, eikä sen näyttäminen käyttäjälle ole vielä merkintäpäätös. Samoin erotetaan sävelnimi ja MIDI-/sävelluokkalaskenta.

Metaforat kuten «I on koti», «V kysyy vastausta» ovat kuuntelun apukieltä, eivät universaaleja tunnesääntöjä. VII asteen vähennetty sointu kuuluu teoriaan, mutta aloittelijan ei tarvitse heti soittaa sitä fyysisenä otteena.

## 3. Sisällön sijoitus

- Oppimiskartassa aihe **Soinnut ja harmonia**; sen alle oma, erillisillä sivuilla etenevä oppimiskokonaisuus **Sointujen maailma**.
- Kitaraharjoittelijan nykyinen **Soinnut ja musiikin rakenne** ja avosointujen tunnistuspeli ovat osa nykyistä lähtötasoa, eivät syrjäytettävää koodia.
- Teoriaoppaan osa 3 (sointujen tehtävät), osa 4 (sävellaji/transponointi), osa 6 (CAGED) ja osa 7 (korvakuulolta) toimivat lähde- ja lisämateriaalina; samasta käsitteestä ei pidetä eri sovelluksissa ristiriitaisia versioita.
- **Ensikeikka** ja **Riffikaiku** jäävät erillisiksi työalueiksi. Integraatio on linkki tai myöhemmin erikseen sovittu rajapinta, ei näiden pelien lähdekoodin muokkaus.
- Oppimiskartan rakenne viimeistellään ensin. PR #65:n Kitaran perusteiden navigaatio ja sivumalli huomioidaan vasta integraatiokatselmoinnissa. Älä olettaa, että sen hakemistot ovat jo päähaarassa.

## 4. Kahdeksan luvun pedagoginen polku

| Luku | Opittava oivallus | Teoria / peli / oikea kitara | Osaamisen osoitus |
|---|---|---|---|
| 1. Sointuperhe löytyy | G-duurissa I/IV/V/vi ovat G/C/D/Em | Kuuntele G–D–Em–C; sijoita sointukortit asteisiin; soita hitaasti | Tunnistaa asteet ja harjoittelee kierron |
| 2. Rakenna sointu | Kolmisoinnut saadaan asteikon joka toisesta sävelestä | Rakenna C:n, Dm:n ja Em:n sävelet; havainnollista terssi | Päättelee C-duurin I–vii°-soinnut |
| 3. Kuule soinnun tehtävä | Soinnun suhde sävellajin keskukseen | Kuuntele päättyykö I:een vai V:een; basso erikseen; vertaa duuria ja mollia | Tunnistaa hallitussa esimerkissä |
| 4. Tee oma kierto | Sointujen järjestys vaikuttaa musiikkiin | Valitse asteet, vaihda sointu, vertaa kahta toteutusta | Rakentaa ja perustelee kokeilun |
| 5. Siirrä sävellajia | Astejärjestys pysyy, sointunimet muuttuvat | Siirrä I–V–vi–IV G:stä C:hen/D:hen; A/E myöhemmin | Siirtää kierron oikein ilman arvausta |
| 6. CAGED otelaudalla | Sama sointu löytyy usealla otteella | Etsi C:n pohjasävel, kolmisointu ja ensin pari helppoa fragmenttia; laajenna viiteen muotoon | Näyttää saman soinnun kahdesta eri kohdasta |
| 7. Soinnut ja melodia | Pohjasävel, terssi ja kvintti näkyvät melodiassa | Valitse päätössävel soinnun päälle, soita kahden tahdin vastaus | Yhdistää sointusävelen ja kuulohavainnon |
| 8. Oma sointukeikka | Yhdistä teoria, korva ja soitto | Kuuntele, täydennä, soita, muuta kiertoa ja vertaa tulosta | Soveltaa aiempia taitoja yhdessä |

Luvut ovat navigoitavia, eivät kahdeksan pakollista lukkoa. Vaikeustaso säädetään taitokohtaisesti. Oikean kitaran käytössä itsensä kuittaama suoritus erotetaan mitatusta tuloksesta.

## 5. Peli- ja harjoitusmuodot

1. **Sointuperheen rakentaja:** valitse sävellajiin kuuluvat soinnut; sitten rakenna ne sävelistä ja asteista.
2. **Kuulokoe:** vertaile duuria/mollia, tuttuja kadensseja, yksinkertaista bassoliikettä ja koko bändiä. Älä päättele soinnun täydellistä laatua pelkästä bassosta.
3. **Basson jäljillä:** sama kontrolloitu esimerkki vaihtoehdoilla koko bändi / pelkkä basso / tarvittaessa soinnut. Pohjasävel on aluksi tarkoituksella bassossa; käännökset tulevat vasta jatkossa.
4. **Sointukiertopaja:** rakenna I/IV/V/vi-sekvenssi, kuule, muokkaa, siirrä sävellajia.
5. **CAGED-aarteenetsintä:** tunnista otteen pohjasävel, kolmisoinnun äänet ja muu sijainti; tue osittaisia sointuotteita.
6. **Sointukeikka:** eri taidot musiikillisessa kokonaisuudessa; ei pelkkää monivalinnan toistoa.

Tehtävämuotoja vaihdetaan: **tunnista → selitä → kuuntele → soita → rakenna → siirrä**. Väärästä vastauksesta tulee selittävä vihje. Vihjeet muodostavat portaat: vapaa yritys, pieni vihje, mallinäyttö, uusi samantyyppinen tehtävä toisella sisällöllä. Älä rankaise ajan käytöstä.

## 6. Osaamismalli

Kuusi erikseen seurattavaa tavoitetta: (1) nimien/asteiden tunnistus, (2) rakenteen päättely, (3) kuuntelu, (4) soittaminen, (5) otelauta/CAGED ja (6) soveltaminen. Niiden tilanteet eivät saa korvata toisiaan.

Harjoittelija tarjoaa vapaan etenemisen ja kertausvaihtoehdon. Tehtävien identtistä peräkkäistä toistoa vältetään. Heikot taidot palautuvat myöhemmin uuden musiikkiesimerkin kautta. Mahdolliset 1/3/7 päivän palautusvälit ovat **testattava hypoteesi**, eivät vahvistettu pakollinen algoritmi.

## 7. Ääni, mikrofoni ja Suno

Teoriasta johdetut oikeat vastaukset soitetaan **deterministisellä** äänilähteellä (Web Audio / validoidut erillisraidat); koko bändi ja bassoraita täytyy voida erottaa. Harjoituksen oikea sointu, soittohetki ja bassosävel on oltava testattavissa ilman korvalla arvailua.

**Suno**: kuratoitu, laadukas 20–60 sekunnin musiikillinen palkinto tai jatkokuuntelu luvun lopussa. Vain erikseen tarkastettuja ja käyttöoikeudeltaan hyväksyttyjä äänitteitä. Ei automaattista oikean vastauksen määrittelyä Sunon tuottamasta audiosta. Ei automaattista taustamusiikkia, joka peittää oppimistehtävän.

**Mikrofoni**: yhden sävelen tunnistus voidaan ottaa myöhemmin mukaan olemassa olevalla tekniikalla. Polyfonisen sointuotteen automaattista oikeellisuutta ei saa luvata ilman luotettavaa mittausta ja testejä. Ensiversiossa oikean kitaran suoritus on itsearvioitu.

## 8. Ensimmäinen MVP: G-duurin ensimmäinen sointukeikka

1. Lyhyt bändinäyte G–D–Em–C, kaksi kierrosta / kahdeksan tahtia.
2. Tunnista valituista vaihtoehdoista G ja Em; kuuntele sama katkelma bassona G–D–E–C.
3. Järjestä neljä sointukorttia asteiksi I–V–vi–IV.
4. Näytä G/D/Em/C-otteet ja valinnainen vihje. Soita omaan tahtiin, myöhemmin taustan kanssa.
5. Muuta yksi sointu tai loppuaste diatonisesti järkeväksi ja kuuntele muutos; palaute kertoo eron.
6. Päätös: lyhyt hyväksytty musiikkinäyte ja selkeä yhteenveto «ymmärsin / tunnistin / kokeilin itse».

**MVP ei sisällä:** viittä täyttä CAGED-barréa, pakollista mikrofoniarviointia, koko musiikinteoriakirjaston uusimista eikä Ensikeikan/Riffikaiun koodimuutoksia.

## 9. Hyväksymisen perusteet

- Kaikki viisi sävellajia, seitsemän astetta, sointulaadut ja sointusävelet vastaavat musiikinteoriaa myös testissä.
- Näkyvät otteet, MIDI-sävelet ja nimet ovat yhteensopivat. Siirrot ja mykistetyt kielet tarkistetaan; yksikään käyttöliittymä ei kopioi kuvaa virheellisenä lähteenä.
- Kuuntelutehtävissä vastaus perustuu tunnettuihin musiikkitapahtumiin. Basso ja koko bändi ovat kuunneltavissa erikseen.
- Pelaaja ymmärtää virheellisen vastauksen syyn ja voi saada vihjeen.
- Teoria-/kuuntelu-/soittoedistymistä ei sekoiteta.
- Navigointi toimii erillisiltä aihe-/lukusivuilta takaisin oppimiskarttaan ja vanhat osoitteet säilyvät.
- Mobiilin 320/360/390 px näkymät, näppäimistö, ruudunlukijan perustoiminnot, toiston pysäytys ja keskeytykset testataan.
- Ei ristiriitaisia muutoksia aktiivisissa Codex-, Ensikeikka- ja Riffikaiku-haaroissa.

## 10. Toteutusstrategia

Ensin rakennetaan **yksi laadukas pystysuuntainen luku** teoriaa, peliä, audioa ja oikean kitaran harjoittelua myöten. Vasta testauksen jälkeen luvut 2–5, CAGED (6), melodiayhteys (7) ja päätöskeikka (8). Yksittäinen harjoituksen läpäisy ei saa olla peruste olettaa muiden taitojen oppimista.

Tarkka töiden rajaus, riippuvuudet, PR:t, testit, datapohja ja hyväksymisportit: [sointujen-maailma-toteutusohjelma.md](sointujen-maailma-toteutusohjelma.md).

## 11. Lähteet tarkastukseen

- Scott Paul Johnson, CAGED System Basics Overview: https://static1.squarespace.com/static/575174bab654f9980cdd23c4/t/627aac0dd4313114fc203c88/1652206620880/CAGED_System_Basics_Overview_Scott_Paul_Johnson.pdf
- Diatoniset soinnut: https://www.fretwizard.net/diatonic-chords
- Community Guitar, Diatonic Chords: https://communityguitar.com/students/Resource_Sheets/files/Diatonic_Chords.pdf

Nämä ovat suunnittelun taustalähteitä. Mahdolliset sormituskuvat, audio ja tehtävät vaativat oman sisällön- ja lisenssitarkistuksen.
