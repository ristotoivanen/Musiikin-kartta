# Riffikaiku – kehityssuunnitelma

Tila 0.3: toteutettu **Kotitreeni 1 (B-kieli)** ja **Kotitreeni 2 (G-kieli)**. Muut alla olevat
kohdat ovat suunnitelmia, joita **ei ole toteutettu**.

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
