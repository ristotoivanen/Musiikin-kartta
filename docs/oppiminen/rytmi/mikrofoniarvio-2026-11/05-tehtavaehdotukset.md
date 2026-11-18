# 5. Priorisoidut tehtäväehdotukset hyväksymiskriteereineen

**Tila:** ehdotus 16.11.2026. **Issueita ei ole luotu.** Omistaja päättää, mitkä näistä kirjataan
GitHubiin ja missä järjestyksessä. Mikään tehtävä ei ole toteutuslupa eikä ohita issue #54:n portteja.

## 5.1 Päätökset, jotka omistajan pitää tehdä ensin

| # | Päätös | Vaihtoehdot | Suositus |
| --- | --- | --- | --- |
| D1 | Rytmipilotin paikka #54:n järjestyksessä | (a) vasta G4:n jälkeen, kuten #54 nyt sanoo, (b) "Sama sointu, kaksi komppia" on neljän iskun pilotin toinen jakso samalla A/E-rakenteella | (a), ellei G1 viivästy. Neljä iskua on komppipilotin esitaito |
| D2 | Mikrofonin rooli ensimmäisessä rytmipilotissa | Ei mikrofonia / äänitä ja kuuntele / havainto | Ei mikrofonia |
| D3 | Tehdäänkö mittauskoe (Rytmilabra) | Kyllä nyt erillisenä tutkimuksena / myöhemmin / ei | Kyllä, mutta vasta kun Riffikaiun omat oikean kitaran kokeet on tehty, koska ne käyttävät samoja laitteita ja samaa soittajaa |
| D4 | Mittauskokeen hyväksymisrajat | Asiakirjan 4 taulukko 4.5 sellaisenaan tai muutettuna | Vahvista ennen ensimmäistä mittausta |
| D5 | PR #70:n kaksi kohtaa, jotka tämä selvitys kyseenalaistaa | Napautuksen pisteytys klikkiä vasten ja mikrofoni rumputaustan kanssa (asiakirja 2, kohta 2.1) | Korjaa PR #70:n tekstiin ennen sen hyväksymistä |

## 5.2 Tehtävät tärkeysjärjestyksessä

Vastaavuus issue #69:n paketteihin on merkitty. Tehtävät T1–T3 ja T8 eivät tarvitse mikrofonia.

### T1. Rytmikuvion tietomalli ja ajastettu toisto

**Paketti:** #69 P2. **Riippuu:** D1. **Koko:** pieni.

Puhdas moduuli, joka kuvaa yhden tai kahden tahdin kompin (tahtilaji, jako, kohdat: alas, ylös, tauko,
vaimennettu) ja ajastaa sen `AudioContext`-kelloon samalla etukäteisajastuksella kuin nykyinen
`ReferencePlayer.loop`.

- [ ] Yksi kuviomäärittely tuottaa sekä ruudukon sisällön että toiston tapahtumat.
- [ ] Yksikkötesti: tapahtumien ajat ovat oikein tempoilla 60–120 BPM, 8 ja 16 kohtaa tahdissa.
- [ ] Yksikkötesti: tempon vaihto kesken toiston ei kasaa virhettä, ja pysäytys vaientaa kaiken.
- [ ] Ei muutoksia tiedostoihin `harjoittelija/audio.ts`, `riffikaiku/*` tai `ensikeikka/*`.
- [ ] Kokeiltu oikealla puhelimella: klikki pysyy tasaisena 2 minuuttia, myös näytön sammuessa ja
      palatessa.

### T2. Kahden kompin kontrolloidut ääninäytteet

**Paketti:** #69 P1. **Riippuu:** T1 tai nykyinen `tools/aanet`. **Koko:** pieni.

Kompit A ja B sekä välivaihe (asiakirja 2, kohta 2.3) vaimennettuna ja G-soinnulla, tempot 60, 72 ja 84.

- [ ] Näytteet syntyvät samasta kuviodatasta kuin ruudukko.
- [ ] Koneellinen tarkistus: renderöidyn äänen iskut ovat ruudukon kohdissa ±5 ms.
- [ ] Omistaja on kuunnellut näytteet ja soittanut ne oikealla kitaralla mukana.
- [ ] Vaimennetun iskun ääni kuulostaa vaimennetulta kitaralta eikä rummulta. Jos generaattori ei tähän
      pysty, kirjataan se ja päätetään äänilähteestä erikseen.
- [ ] Lähde ja oikeudet kirjattu.

### T3. Pilottisivu "Sama sointu, kaksi komppia" ilman mikrofonia

**Paketti:** #69 P3–P5, rajattuna. **Riippuu:** D1, D2, T1, T2. **Koko:** kohtalainen.

- [ ] Seitsemän vaihetta asiakirjan 2 kohdan 2.3 mukaan yhdellä sivulla.
- [ ] Ruudukko näyttää kohdat `1 ja 2 ja 3 ja 4 ja`, liikkeen suunnan ja soivan iskun erikseen. Sama
      tieto on luettavissa tekstinä.
- [ ] Vaiheissa 4, 5 ja 7 malli vaikenee neljän tahdin jälkeen ja klikki jatkuu.
- [ ] Sivu tallentaa vain kuunteluvalinnat ja oppijan oman "harjoiteltu"-merkinnän. Yhteenveto ei väitä
      soittotaitoa.
- [ ] Sisältö tulee kanonisesta lähteestä generaattorin kautta. Generoituja `oppi/`-sivuja ei muokata
      käsin.
- [ ] Linkit nykyisiin sivuihin `pulssi-ja-komppi` ja `alas-ylos-yhdella-soinnulla` ja takaisin.
- [ ] 320, 360 ja 390 px, näppäimistö, ruudunlukija, ääni pysähtyy poistuttaessa ja välilehden
      piilotuessa.
- [ ] Kokeiltu oikealla kitaralla ja oikealla puhelimella.
- [ ] Draft-PR, ei mergeä betaan ilman erillistä hyväksyntää.

### T4. Pilotin koekäyttö

**Paketti:** #69 "Hyväksyntä ja järjestys". **Riippuu:** T3. **Koko:** pieni, mutta vaatii ihmisiä.

- [ ] 5–8 testaajaa, havainnoija arvioi soiton (asiakirja 2, kohta 2.5).
- [ ] Kirjattu erikseen: löydettävyys, kuunteluvalinnat, havainnoijan arvio, oppijan itsearvio, viivästetty
      uusinta.
- [ ] Raportti vastaa kysymykseen: poikkeaako itsearvio havainnoijan arviosta niin usein, että
      ulkopuolinen palaute on tarpeen?
- [ ] Päätös D2:n jatkosta kirjattu.

### T5. Rytmilabra: mittausväline

**Paketti:** #69 P6. **Riippuu:** D3, D4, T1. **Koko:** kohtalainen.

- [ ] Toteutus asiakirjan 4 kohtien 4.2–4.3 mukaan erillisessä haarassa. Ei linkkiä navigaatiosta.
- [ ] Analyysi on puhdas funktio, joka ajetaan sekä selaimessa että Nodessa tallennetuille tiedostoille.
- [ ] Kohdan 4.8 automaattiset testit on kirjoitettu ennen analyysin toteutusta.
- [ ] Mitään ei lähetetä verkkoon. Sivu kertoo, että äänitys jää käyttäjän koneelle.
- [ ] Ei muutoksia `PitchLoop`-, `NoteGate`-, `PluckDetector`- tai `MicController`-luokkiin.
- [ ] Toimii Macin Chromessa ja Safarissa sekä yhdessä puhelimessa.

### T6. Mittauskoe oikealla kitaralla ja päätös

**Paketti:** #69 P6. **Riippuu:** T5, D4. **Koko:** yksi tai kaksi soittoistuntoa ja raportti.

- [ ] Hyväksymisrajat vahvistettu ja päivätty ennen ensimmäistä ottoa.
- [ ] Koematriisin rivit 1 ja 3 ajettu, muut sen mukaan kuin rivi 3 läpäisee.
- [ ] Vähintään yksi otto olosuhdetta kohti merkitty käsin.
- [ ] Raportti: M1–M11 olosuhteittain, rajatapausten havainnot, mitä ei mitattu.
- [ ] Päätös kirjattu issueen #69: C jatkuu nimetyissä olosuhteissa tai C hylätään.

### T7. Ehdollinen: "Äänitä ja kuuntele itse"

**Riippuu:** T4:n tulos puoltaa. **Koko:** kohtalainen.

- [ ] Oppija äänittää 8 tahtia ja kuuntelee ne. Ohjelma ei arvioi mitään.
- [ ] Kaiuttimilla äänitys sisältää klikin ja soiton. Kuulokkeilla sivu kertoo, että klikki ei tallennu.
- [ ] Äänitys pysyy muistissa ja häviää sivulta poistuttaessa. Ei tallennusta, ei lähetystä.
- [ ] Toimii ilman mikrofonilupaa: tehtävän muu osa ei muutu.
- [ ] Kokeiltu iPhonella: toiston voimakkuus ja reitti mikrofonin avaamisen jälkeen.

### T8. Ehdollinen: mikrofoni havaintona

**Riippuu:** T6 läpäisty. **Koko:** suuri.

- [ ] Käytössä vain olosuhteissa, jotka läpäisivät T6:n. Muissa sivu sanoo, miksi havaintoa ei anneta.
- [ ] Palaute koskee koko ottoa ja alkaa sanalla "Kuulin". Ei iskukohtaisia merkkejä, ei pisteitä.
- [ ] Alle luottamuskynnyksen palaute on "En saanut selvää", ja sivu ehdottaa syytä (tausta, hiljainen
      soitto, Bluetooth).
- [ ] Havainto tallennetaan erilleen itsearviosta ja kuunteluvalinnoista.
- [ ] Oikeat äänitetyt otot ovat mukana testisarjassa.

### T9. PR #70:n tekstin tarkennus

**Riippuu:** D5. **Koko:** hyvin pieni.

- [ ] Pulssijahdin ja Rytmikaiun kuvaus: napautuksesta arvioidaan tasaisuutta ja pulssitasoa, ei osumista
      klikkiin.
- [ ] Mikrofoni ja bänditausta erotetaan: mikrofonitehtävissä tausta on klikki tai oppijalla on
      kuulokkeet.

## 5.3 Järjestys ja riippuvuudet

```
D1 D2 ──► T1 ──► T2 ──► T3 ──► T4 ──► (T7)
D3 D4 ──► T1 ──► T5 ──► T6 ──► (T8)
D5 ──► T9
```

Vasen haara on oppijalle näkyvä pilotti. Oikea haara on tutkimusta, jonka tulos voi olla "ei kannata".
Haarat jakavat vain T1:n. Oikea haara ei saa viivästyttää vasenta.
