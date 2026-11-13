# Melodisten harjoitusten beta-pilotit (2026-11-13)

**Tila:** beta-pilotti, ei vielä tuotantohyväksyntää.
**Aiempi suunnitelma:** [Melodiapohjainen oppimispolku](melodinen-oppimispolku.md),
[sävelmäehdokkaat](savelmaehdokkaat.md).

## Rajaus ja pedagoginen rakenne

- Pentatonisen position 1 **Wayfaring Strangerin tunnistettava alkusävelkulku**.
  A- ja B-motiivit näkyvät aiemmissa asteikkoharjoituksissa, ja
  A+B+C muodostavat kuuden tahdin harjoituksen **ennen improvisointitaustaa**.
- Pentatonisen positioiden 1+2 yhdistämiselle **itse sävelletty** käsiasemanvaihtomelodia.
  Se käyttää erityisesti nauhoja 5, 8 ja 10, eikä sitä väitetä tunnetun
  kappaleen osaksi. Pidempi harjoitus on neljä tahtia.
- C-joonisen **Ukko Nooan neljän tahdin alku**. Harjoitukset A (2 tahtia)
  ja B (2 tahtia) yhdistetään pidemmäksi melodiaksi ennen improvisointia.
  Lisäksi erillinen **oma B → C -motiivi**, koska Ukko Nooan tässä
  katkelmassa ei ole johtosävel B:tä.
- Kussakin harjoituksessa mallimelodian saa soimaan **vain kerran painalluksesta**.
  Rytmillinen ääni on synteettinen, ei talteen otettu tai tekoälyn generoima
  tunnistettavan artistin äänite.
- Nykyinen pentatonisen ja moodin eteneminen tallennetaan yhä vanhoihin
  avaimiin. *Uusia pakollisia lukittuja vaiheita ei lisätty*, jotta
  jo suoritettuja harjoituksia ei nollata. Pidempi melodia on saman
  loppuharjoituksen sisällä ennen improvisointia.
- A-aiolisen melodiaharjoitus ei kuulu tähän pilottiin. Se vaatii
  itsenäisen melodian, joka kertoo selkeästi A-mollin sävelkeskuksesta.

## Kappale 1: Wayfaring Stranger, A-mollipentatoninen

**Vanha lähde:** Hymnary, WAYFARING STRANGER, American Traditional Melody,
Copyright: Public Domain:
https://hymnary.org/tune/wayfaring_stranger

**Opetuksellinen varmennus:** Texas A&M:n Steps to Music Theory, Modes,
Example 11.8.4: perinteisen melodian mollipentatonisuus:
https://odp.library.tamu.edu/stepstomusictheory/chapter/modes/

Hymnaryn *incipit* on asteina `1 1 5 5 4 | 5 4 3 1 1 | 3 4 4 1 3`.
A-molliin siirrettynä 15-sävelinen katkelma on
`A A E E D | E D C A A | C D D A C`.
Nämä sävelet tarkistetaan ohjelmallisesti A-mollipentatonisen
`A C D E G`-säveljoukkoon ja position 1 fyysisiin paikkoihin.

**Tärkeä ero:** alkusävelkulku pohjautuu perinnemelodiaan, mutta
`melodyData.ts`-tiedoston **4/4-rytmi ja tauot ovat tähän
harjoitukseen itse tehty opetusrytmi**. Se ei ole väite
Wayfaring Strangerin alkuperäisestä rytmistä tai tietyn artistin sovituksesta.
Kuuden tahdin mittainen pätkä ei ole kokonainen laulu.

## Kappale 2: Ukko Nooa, C-jooninen

**Historiallinen melodia:** Gubben Noak, Carl Michael Bellmanin
aikainen perinnesävelmä (1700-luku), tekijänoikeuden suoja-aika
on päättynyt. Uutta nuottikuvaa tai modernia äänitettä ei kopioitu.

**Lähdemelodian tarkistuksen apuna:**
Opi sävellajit ja asteikot (2023), s. 56, C-duurinen
Ukko Nooan alku 4/4-tahtilajissa:
https://aoe.fi/api/v1/download/file/opisavellajitjaasteikothankkeentehtavapaketti1-1701684466136.pdf

Säveljärjestys ja rytmi:
`C C C E | D D D F | E E D D | C (4 iskua)`.
Alkuperäinen nuottikuva on c1-tasolla; kitaraharjoitukseen
soitetaan vastaava melodia oktaavia alempaa
`C3 (A-kieli 3) ... C3`, jotta kaikki nuotit mahtuvat
nykyiseen C-joonisen sormitusalueeseen. Ensimmäiset 12
säveltä kestävät yhden neljäsosaiskun ja viimeinen neljä.

**Erillinen oma B → C -täydennys:** G A B C | G B C (2 iskua).
Tämä **ei ole osa Ukko Nooaa**; se opettaa täsmällisesti
C-duurin seitsemättä astetta ja sen purkausta C:hen.

## Oma positioiden 1+2 yhdistämismelodia

Käsiasemareitti sovitetaan A-mollipentatonisen
nykyisiin fyysisiin paikkoihin. Esimerkkimelodian kaksi
kahden tahdin osaa kirjoitettiin tätä opetusta varten.
Ei lainattu mistään tunnetusta kappaleesta.

## Tekijänoikeudet ja toteutusperiaatteet

Vapaan **perussävelmän** käyttö ei tarkoita, että voisimme
kopioida uuden sovituksen, MIDI-raitaa, sähkökitaraäänitteen
tai nuottijulkaisun graafista esitystä. Harjoituksen sävel- ja
rytmitiedot laadittiin tämän pilotin tietorakenteiksi,
malliääni syntyy selaimen Web Audio -moottorissa ja tabulatuuri
piirtyy sovelluksen omana taulukkona.

Wayfaring Stranger -katkelman poikkeava harjoitusrytmi
on merkitty käyttäjälle näkyviin; Ukko Nooa on rytmiltään
lähteen mukainen, mutta kitaralle oktaavia alempaa.

## Tekniikka ja tarkistukset

- `melodyData.ts`: sävelten MIDI-korkeus johdetaan
  samoista kieli+nauha-paikoista kuin otelauta, neljäsosaiskuihin
  sidotut aloitusajat, kestot ja tauot.
- `ReferencePlayer.playTimed`: Web Audio -kellolla ajastettu
  rytmitetty kertatoisto, nuottien tabikorostus, siivous
  keskeytyksessä ja välilehden piiloutuessa.
- `MelodyPractice.tsx`: A/B-pätkät, koko melodia, haluttaessa
  omat täydentävät motiivit, tempo ja piilotettava tabulatuuri.
- Pentatonisen ja moodipolun vanhat progress-avaimet sekä
  Kitaraharjoittelijan URL-linkit pysyvät muuttumattomina.
- Yksikkötesteissä tarkistetaan julkisen lähteen
  alkusävelkulku ja C-duurin alku, kaikki fyysiset
  nauhapaikat, hyväksytyt säveljoukot, tauot ja
  nuottien kestot. Selaintestit kattavat näkyvyyden,
  käyttöliittymän etenemisen ja rytmisoiton uudelleenkäynnistyksen.

## Beta-käyttöarvio, jota automaattitesti ei voi korvata

1. Onko Wayfaring Strangerin alkumotiivi riittävän tunnistettava
   omalla opetustempoon tehdyllä rytmillä? Jos ei, **ei nimetä
   sitä tarkaksi melodiasovitukseksi**, vaan joko tehdään
   asianmukainen perinnerytmien transkriptio tai käytetään
   alkuperäistä omaa A-mollipentatonista melodiaa.
2. Kuuluuko Ukko Nooan neljän tahdin melodia tutulta ja
   erottuuko erillinen B→C-fraasi siitä selvästi?
3. Vastaavatko nauhat ja melodia oikealla kitaralla,
   sekä onko tempo riittävän hidas ensikertalaiselle?
4. Toimivatko äänentoisto ja automaattinen pysähdys myös
   oikeassa iPhone/Safarissa (ei pelkässä Chromium-emulaatiossa)?
5. Jääkö pidempi melodia pedagogisesti improvisaation
   **esivaiheeksi** eikä peitä tai estä sen käyttämistä?

**Beta-pilotti ei ole valmis tuotantoon ilman näitä
soitto- ja kuuntelutarkistuksia.**
