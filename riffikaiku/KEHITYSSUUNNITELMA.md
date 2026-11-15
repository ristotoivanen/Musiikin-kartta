# Riffikaiku – kehityssuunnitelma

Tila 0.5: toteutettu **Kotitreeni 1 (B-kieli)** ja **Kotitreeni 2 (G-kieli)** kahdessa käyttötavassa:
**Riffiharjoitus – oikea kitara** (`?tila=harjoitus`) ja **Riffikaiku-peli – virtuaalikitara** (`?tila=peli`).
Muut alla olevat kohdat ovat suunnitelmia, joita **ei ole toteutettu**.

## Kaksi käyttötapaa (0.4)

Uusi kotitreeni tulee automaattisesti molempiin: harjoitukseen ilman lukkoja ja peliin järjestyksessä
avautuvana. Sisältöä lisättäessä mieti erikseen:

- **Harjoitus:** onko ehdotettu otelautapaikka ja soittovinkki opettavainen? Toistuuko riffissä sama sävel
  (mikrofonille vaativa: tarvitaan vaimennusohje)? Onko riffi monofoninen? Matalien kielten oktaavi- ja
  ylä-äänivirheet on mitattava oikealla kitaralla ennen julkaisua.
- **Peli:** onko riffi kuulonvaraisesti ratkaistavissa otelaudalla nauhoilla 0–5? Tähti ja ennätys
  toimivat sellaisenaan.

**Pelin kulku 0.5:** Kuuntele → Harjoittele vapaasti → Nyt riffataan! → Palaute → Jatka (ks. README).
Opastustaso on kotitreenin datassa (`guidance: 'guided' | 'memory' | 'challenge'`). Kun uusia kotitreenejä
lisätään, suunniteltu eteneminen on: yhden kielen kotitreenit 1–6 `guided`, Treenikämppä (kaksi kieltä)
`memory`, Studiosessiot `challenge`. Taso valitaan sisällön vaikeuden mukaan, ei numeron perusteella, ja se
pitää koekäyttää: jos pelaajat jäävät `memory`-tasolla jumiin, sävelet kannattaa avata yhdellä painalluksella
kuten nyt, ei piilottaa kokonaan.

Seuraavat askeleet, joita ei ole toteutettu:

1. Oikean kitaran hyväksyntäkokeet ([HYVAKSYNTAKOKEET.md](HYVAKSYNTAKOKEET.md)) ja niiden perusteella
   epävarman tunnistuksen (450 ms) ja toistuvan sävelen ohjeen (700 ms) rajat.
2. Harjoitukseen ja pelin harjoitteluvaiheeseen hitaampi mallitempo (vaatii `ReferencePlayer`-muutoksen Kitaraharjoittelijassa).
5. Pelin automaattisen mallisoiton ja kahden samanaikaisen soittimen kokeilu oikeilla puhelimilla
   (iOS Safari, Android Chrome) ja äänenvoimakkuuksien tasapaino puhelimen kaiuttimesta.
3. Pelin kotitreenikohtainen tähtiyhteenveto aloitussivun kortissa ja Oppimiskartan edistymisessä
   (koordinoi Oppimiskartan kehityksen kanssa).
4. Kitaraharjoittelijan Sävelkorva ja otelauta -valikon kortin teksti (”Avaa peli”) kuvaamaan kahta
   käyttötapaa. Jätetty tästä työstä pois, koska muutos vaatii Kitaraharjoittelijan käännöksen ja
   koskee rinnakkain kehitettäviä navigaatiotiedostoja.

## Rakenne

Harjoituskokonaisuudet ovat `riffikaiku/riffs.ts`:n `LEVELS`-listassa. Kotitreeni = nimi, harjoituskieli
(korostetaan otelaudalla), ohje ja kolme neljän sävelen riffiä. Pelilogiikka (`game.ts`), tallennus
(`store.ts`: kierros, suoritetut, avautuminen järjestyksessä) ja näkymä lukevat rakenteen listasta, joten
uuden kotitreenin lisääminen on datamuutos. Testit tarkistavat automaattisesti, että jokainen sävel löytyy
harjoituskieleltä nauhoilta 0–5. Jos myöhemmin tarvitaan useita kokonaisuustyyppejä (alla), `Level` saa
`kind`-kentän ja tallennus `structure`-version; nykyinen siirtologiikka näyttää mallin.

## Kotitreenit 3–6: muut yksittäiset kielet (ei toteutettu)

Sama muoto kuin 1–2: kolme sävelkorkeutta yhdeltä kieleltä nauhoilta 0–5, ensin pienet askeleet.

| Kotitreeni | Kieli | Ehdotetut sävelet |
|---|---|---|
| 3 | ohut E | E4, F4, G4 (0, 1, 3) |
| 4 | D | D3, E3, F3 (0, 2, 3) |
| 5 | A | A2, B2, C3 (0, 2, 3) |
| 6 | paksu E | E2, F2, G2 (0, 1, 3) |

Huomio mikrofonille: matalat kielet (A, paksu E) ovat tunnistuksen kannalta vaativimpia (ylä-äänet,
oktaavivirheet); ne kannattaa testata oikealla kitaralla ennen julkaisua.

## Treenikämppä: ensimmäiset riffit kahdella kielellä (ei toteutettu)

Kaksi vierekkäistä kieltä (esim. G + B, B + ohut E), joissa riffi ylittää kielen. Korostus: molemmat
harjoituskielet; ohje vain, jos jokainen sävel on soitettavissa niillä nauhoilla 0–5.

## Studiosessiot: pidemmät, useampaa kieltä hyödyntävät riffit (ei toteutettu)

5–8 sävelen riffejä laajemmalla otelaudalla. Vaatii pallukkarivin ryhmittelyn kapealla näytöllä.

## Kokonaisen melodian oppiminen lyhyistä osista (ei toteutettu)

Kappaleharjoitukset, joissa tuttu melodia opetellaan pieninä osina:

1. Kuuntele ja soita lyhyt 3–5 sävelen fraasi.
2. Opettele seuraava fraasi.
3. Yhdistä aiemmin opitut osat.
4. Harjoittele koko melodia.
5. Soita koko kappale virheettömästi ja saa onnittelut.

Ensimmäiset ehdokkaat: **Ukko Nooa** ja **Happy Birthday to You**.

- Sama säveljonon tarkistaja (`SequencePractice`) mikrofonille ja virtuaalikitaralle; fraasit ovat
  tavallisia säveljonoja, ja yhdistetty osa on niiden yhdiste.
- Tarkista tuolloin melodioiden tarkat sävelet ja rytmit sekä sävelmien ja sovitusten käyttöoikeudet
  (kansanlaulu vs. tekijänoikeuden alainen sävelmä; tilanne voi vaihdella maittain). Käytä itse tuotettuja ääniä.
- Rytmi: nykyinen tarkistus ei arvioi rytmiä. Kappaleissa malli soitetaan rytmissä (`ReferencePlayer.playTimed`),
  mutta vastaus hyväksytään edelleen järjestyksen perusteella, ellei rytmipisteytystä erikseen suunnitella.

## Myöhemmin: asteikot ja moodit Kitaraharjoittelijassa

Ks. `README.md`, kohta ”Uudelleenkäytettävä ydin”.
