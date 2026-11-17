# Intervallioppimisen auditointilöydökset – v0.3

**Lähde:** Clauden 17.11.2026 auditointi: 33 löydöstä sekä R1–R5.  
**Tila:** 13 dokumentaatiolla suljettua, 4 omistajan päätöstä odottavaa, 18 koodia ja testiä odottavaa, 3 pedagogisesti avointa. Tämä taulukko kirjaa v0.3:n tilanteen, ei todista toteutusta eikä korvaa alkuperäisen auditoinnin täysiä perusteluja.

| ID | Vakavuus | v0.3:n käsittely / sulkemisehto | Tila |
|---|---|---|---|
| I1 | blocker | Betan nykyiset harjoitukset kuvattu; SHA tarkistetaan uudelleen | Dokumentaatio |
| I2 | blocker | Suhde PR #53:een, linjaus L1 | Omistaja |
| T1 | blocker | Puolisävelmäärästä nimeen ja tritonuksen hyväksyntäsäännöt, testi | Koodi/testi |
| K1 | blocker | Kuulo mukana jaksoissa 1–7 | Dokumentaatio |
| K2 | blocker | Viiden taidon erilliset mittarit, testi | Koodi/testi |
| K6 | blocker | Kuulumaton ääni mitätöidään; fyysinen iPhone ennen kuulo-osan julkaisua | Koodi/testi |
| T2 | major | A–A♯ / A–B♭-kirjoitusasujen oikeellisuustesti | Koodi/testi |
| T3 | major | Laatuperheet opetussisällössä | Dokumentaatio |
| L1 | major | Siirtotehtävä toisesta juuresta | Dokumentaatio |
| L2 | major | Teoriapalat, viiden ankkurin aloitus | Dokumentaatio |
| M1 | major | Mittarien rajat pilotin hypoteeseina | Pedagoginen |
| I3 | major | Sijainti Sävelnimet ja sointumerkinnät -aiheessa | Dokumentaatio |
| I4 | major | Tallennuksen uudelleenkäyttö ja migraatiotesti | Koodi/testi |
| I5 | major | IV-portit erillään projektin G-porteista | Dokumentaatio |
| I6 | major | Priorisointi suhteessa PR #91:een, L2 | Omistaja |
| K3 | major | Kuulotehtävien järjestys pilotoitava | Pedagoginen |
| K4 | major | Duuri/molli-kuulo tehtävänä E, ei pakollinen MVP-läpäisyehto; raportointi testattava | Koodi/testi |
| K5 | major | Lähtösävelten, rekisterin ja sointivärin vaihtelu testattava | Koodi/testi |
| K7 | major | playTimed()-samanaikaisuuden testaus; aiempi auditointiväite korjattu | Koodi/testi |
| T4 | minor | Ylinouseva ja vähennetty ovat yleisiä laatuja | Dokumentaatio |
| T5 | minor | Pa-yksikön ja sointuasteen ero näkymissä | Koodi/testi |
| T6 | minor | Paksu E-kieli (6.) sekä tabin tarkistus | Koodi/testi |
| T7 | minor | Jakson 2 tehtävät eivät edellytä ennenaikaista laatua | Dokumentaatio |
| L3 | minor | Ryhmitelty ensiesittely, sekoitettu erottelu | Koodi/testi |
| L4 | minor | Tuotetut vastaukset / koko vastausjoukko, saavutettavuus | Koodi/testi |
| M2 | minor | Itsekuittaus erillään automaattisesta osaamisesta | Koodi/testi |
| I7 | minor | Generaattorin ja aiheet.json:n muutosreitti | Dokumentaatio |
| I8 | minor | Termipäätös, linjaus L3 | Omistaja |
| S1 | minor | Ei raahauksen varaan rakentuvaa peliä, saavutettavuustesti | Koodi/testi |
| S2 | minor | Ääniregressiot ja fyysinen laite | Koodi/testi |
| K8 | minor | Kuullun soittamisen itsearvio erillään kuulotunnistuksesta | Koodi/testi |
| K9 | minor | Vertailu eri lähtösävelistä, jotta loppusävel ei paljasta vastausta | Koodi/testi |
| K10 | minor | Vastaamaton kuuntelujakso G kokeiluna | Pedagoginen |
| R1 | major | Äänimoduulin vaikutusarvio; omistajan valinta ja erillinen riippuvuus | Omistaja |
| R2 | major | MVP erotettu kokonaistavoitteesta | Dokumentaatio |
| R3 | minor | Kellovahti vain PR #92:ssa, ei betassa | Dokumentaatio |
| R4 | minor | Teorian viisi ankkuria vs. kuulon neljä ja tehtäväjoukkojen testit | Koodi/testi |
| R5 | minor | proficiency() vs. weight() kuvattu oikein | Dokumentaatio |

## Avoimet päätökset

- **L1 (I2):** Intervallit PR #53:n kolmisointupilotin esitieto-osana vai erillisenä kohteena.
- **L2 (I6):** Rytmin PR #91:n prioriteetin säilyttäminen.
- **L3 (I8):** Täydet nimet opetuksessa, lyhyet nimet vastauksissa.
- **R1:** Yhteisen äänimoduulin korjaustapa ja PR #92:n järjestys.

Omistajan keskustelussa 17.11. tehty **rajausehdotus**: iPhonen yleistä äänikorjausta ei sidota intervallioppimisen toteutukseen. PR #92 koskee kappalesoitinta, eikä sen valmistuminen sulje ReferencePlayerin K6-löydöstä. Äänettömän kysymyksen mitätöinti ja iPhone-julkaisun erillinen hyväksyntä ovat välttämättömiä. Tätä ei tulkita R1:n teknisen toteutustavan hyväksynnäksi.

## Seuraavat portit

1. **IV-REV:** omistaja hyväksyy pedagogisen suunnitelman ja päätökset, ei koodilupaa.
2. **IV-READY:** erillinen toteutustehtävä, rajatut tiedostot, testisuunnitelma, riippuvuudet.
3. **IV-ACCEPT:** ajettujen testien näyttö, kuulo-osassa lisäksi fyysisen iPhonen hyväksyntä ennen julkaisua.

Tämä dokumentti ei sulje yhtään testattavaa löydöstä eikä valtuuta mergeä.
