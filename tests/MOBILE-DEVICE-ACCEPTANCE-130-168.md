# Ensimmäiset neljä iskua – oikeiden puhelimien hyväksymistesti

**Tila:** Ei tehty fyysisillä laitteilla tässä PR:ssä. WebKit- ja Chromium-emulaatioiden läpäisy **ei korvaa** oikeaa mobiiliselainta.

## Rajaus ja testikohteet

Testattavat sivut (tästä pinotusta Draft-versiosta):

1. Alkuperäinen M0–M3-esikatselu: `/testit/ensimmaiset-nelja-iskua.html`
2. Hyväksytyllä Steel-äänellä toimiva M2: `/assets/soitinpankki/ensimmaiset-nelja-iskua-steel.html`

Käytä mielellään iPhone/Safaria (tunnettu ongelmaympäristö: Safari, iOS ja Bluetooth-kuulokkeet) sekä Android/Chromea, kun laite on käytettävissä. Vertaa samalla laitteella samoilla kuulokkeilla, mutta **älä tee lisää balanssin hienosäätöä**: tarkoitus on testata toistotoimintaa ja ohjeen näkyvyyttä.

## Kriittiset kohdat

| Testi | Menettely | Hyväksymisehto |
| --- | --- | --- |
| Käynnistys | Avaa Steel-esikatselu suoraan, valitse M2 ja Käynnistä | Meta Steel -mallikitaran ja B-säestyksen tulee kuulua; ohje etenee samalla pulssilla |
| Pysäytys | M2:n tai M3:n soidessa Pysäytä ja käynnistä uudelleen | Ääni loppuu, seuraava aloitus käynnistyy omasta lähtölaskustaan; ei päällekkäistä ääntä |
| Pieni näyttö | Vieritä tarvittaessa, aloita M1 ja seuraa iskunäyttöä | Pysäytä, vaiheen otsikko ja kahdeksan iskun ruudukko mahtuvat yhtä aikaa näkyviin |
| M0 | Valitse M0, kuuntele E2-esimerkki | FreePats E2 ja klikki; kaksi kierrosta ja automaattinen lopetus |
| M2 | Valitse M2, odota loppuun | 16 Steel E2 -malli-iskua neljässä kahden tahdin kierroksessa, välit hiljaisia, soittokerta päättyy |
| M3 | Valitse M3, kuuntele vähintään kaksi kierrosta | B-säestys jatkuu saumattomana, ei Steel-mallikitaraa; käyttäjä voi pysäyttää |
| Bluetooth | Aloita M2 BT-kuulokkeilla; katkaise ja yhdistä kuuloke uudelleen | Ei ghost-tilaa (UI näyttää soivan, mutta ääni on kadonnut), tarvittaessa pysäytetty tila ja käyttäjän uusi käynnistys |
| Näytön lukitus | Soi M2 tai M3, lukitse iPhone ja avaa | Sivun keskeytyksen käsittely vastaa todellista ääntä; ei automaattista haamusoittoa; käyttäjä voi jatkaa uudella käynnistyksellä |
| Sovelluksen vaihto | Vaihda väliaikaisesti toiseen sovellukseen, palaa | Jos selain ilmoittaa taustoituksesta tai keskeytyksestä, toisto pysähtyy ja ilmoitus on neutraali; ei itsestään käynnistymistä |
| Äänetön tila | iPhone äänettömään tilaan, kokeile uudelleen | Käyttäjän kuulema ääni on johdonmukainen ja käyttöliittymä kertoo tilanteen; älä päättele emulaatiosta |
| Verkkovirhe | Katkaise yhteys **ennen ensimmäistä** Steel-näytteen latausta, jos testattavissa | Näkyvästi ilmoitettu FreePats-varaääni tai ymmärrettävä virhe, ei hiljainen lähteen vaihto |

## Kirjattavat havainnot

- Laitemalli, käyttöjärjestelmäversio, selainversio, kuulokkeet tai kaiutin.
- Aloitus/keskeytys/lukitus/BT-vaihdon tarkka tapahtumajärjestys ja lopputulos.
- UI-tila, `#message`-teksti, kuuluiko ääni oikeasti ja mikä tila oli valittuna.
- Mahdollinen konsolivirhe; ei tarpeetonta käyttäjädataa.
- Tarvittaessa yhteys vanhaan iPhone AudioContext -lukitusvikaan; tämä PR ei väitä korjanneensa sitä.

## Automaattitestien raja

CI kattaa Chromium- ja WebKit-työpöytä- sekä puhelinemulaation, 320/375 px ohjaimen näkyvyyden, M2:n ja M3:n lähteet, käynnistyksen, pysäytyksen, varaäänen, `visibilitychange`-keskeytyksen ja muita ohjelmallisia ajoituksia. Se **ei** luotettavasti toista fyysisen iPhonen AudioSessionia, BT-kuulokkeiden uudelleenkytkentää tai oikean näytön lukitusta.

**Älä merkitse fyysisten testien kohtia hyväksytyiksi ilman oikealla laitteella tehtyä havaintoa.**
