# Sointipaja #48 – tasot 3–4, kokeilusuunnitelma v0.1

Pohja: #190 @ 4c50a659d75d6f4fa37d42ee0f454493665b29e9; tasot 1–2 säilyvät. Omistajan 24.11.2026 hyväksymä suunta: tavalliset hyödylliset avosoinnut, kaksi seuraavaa tasoa, barrét omaksi myöhemmäksi kokonaisuudekseen. Tämä on demo, ei merge- tai julkaisulupa. [Tason 1 suunnitelma](sointipaja-taso-1-v03.md), [tason 2 suunnitelma](sointipaja-taso-2-v01.md).

## Tavoite ja kierrokset

| Taso | Uudet | Kierrokset | Tehtäviä |
|---|---|---|---:|
| 3 | B7, C7, G7, Am7, Em7, Dm7 | 6 uutta kerran, 12 uutta ja vertailusointua, kaikki 17 | 35 |
| 4 | Cmaj7, Fmaj7, Dsus2, Dsus4, Asus2, Asus4, Cadd9 | 7 uutta kerran, 14 uutta ja vertailusointua, kaikki 24 | 45 |

Uudet kohteet tulevat vastaan vähintään kolmesti. Viimeisessä kierroksessa jokainen tähän asti opittu sointu kerran. Vastausvalinnat perussävelen kirjaimittain, vapaa taso- ja kierrosvalinta, ei lukituksia. Järjestys sekoitetaan ilman peräkkäistä samaa sointua. Taso 4:n 45 tehtävää on kokeilun yläraja, ei lukittu määrä; pidempi kumulatiivinen kertaus voidaan myöhemmin jakaa. Oikean vastauksen jälkeen näytetään soiva rakenne ja vertailu. Automaattisoitto ja kumuloituva kieli kerrallaan säilyvät. Ei vielä uutta päättely- tai muuntamismekaniikkaa eikä barré-tasoa. Dm7:n kaksi vierekkäistä 1. nauhan merkkiä voi painaa erillisillä sormilla tai pikkubarrélla.

## Musiikillinen sisältö

| Sointu | Ote EADGBe | Teoreettiset sävelet | Rakenne |
|---|---|---|---|
| B7 | x21202 | B D♯ F♯ A | 1 3 5 ♭7 |
| C7 | x32310 | C E G B♭ | 1 3 5 ♭7; G puuttuu tästä otteesta |
| G7 | 320001 | G B D F | 1 3 5 ♭7 |
| Am7 | x02010 | A C E G | 1 ♭3 5 ♭7 |
| Em7 | 020000 | E G B D | 1 ♭3 5 ♭7 |
| Dm7 | xx0211 | D F A C | 1 ♭3 5 ♭7 |
| Cmaj7 | x32000 | C E G B | 1 3 5 7 |
| Fmaj7 | xx3210 | F A C E | 1 3 5 7 |
| Dsus2 | xx0230 | D E A | 1 2 5 |
| Dsus4 | xx0233 | D G A | 1 4 5 |
| Asus2 | x02200 | A B E | 1 2 5 |
| Asus4 | x02230 | A D E | 1 4 5 |
| Cadd9 | x32033 | C E G D | 1 3 5 9 |

C7:n tavallisessa avoimessa otteessa soivat C3 E3 B♭3 C4 E4. Kvintin puuttuminen on tarkoituksellinen ja selitetään. Sointusäveljoukko ja toteutunut ote erotetaan. Nooni määritellään sointurakenteessa, ei yksittäisen sävelen absoluuttisesta oktaavista. C7:n B♭ näytetään B♭:nä, ei A♯:na. Sus-soinnuissa ei ole terssiä. Maj7 ja dominantti-7 erotetaan. Ei väitetä kaikkia mahdollisia otteita kattavaksi.

Kolme uutta alkuperäistä CC0-ääninäytettä (D-kieli D♯3 ja F3, G-kieli B♭3) on kopioitu kiinnitetystä lähteestä. AAC:n muunnos WAV:stä dokumentoitu lähdetiedostoon ja rajattuun CI:hin; katso toteutunut CI-tila, älä oleta läpäisyä. Kaikkien 24 soinnun sävelluokat, perussävelbassot, avokielet ja C7:n dokumentoitu kvintin puuttuminen tarkistettu staattisesti.

## Katselmointi

Käyttäjäkoe: tasojen 3 ja 4 pituus, vastausryhmien hahmotettavuus, musiikillinen palaute, B♭-kirjoitus, kaikki uudet äänet ja tasojen 1–2 regressiot. Tarkista erityisesti C7, B7, Fmaj7, AAC/OGG-fallback ja iPhone. Testit: npm run check, Playwright kohdennettu ja WebKit, 320/360/390 px, 200 % teksti, näppäimistö, fyysinen ääni. Arvonnan 12 000 kierroksen tarkistus läpäisty ja JS-syntaksi tarkistettu, muut tulokset kirjataan erikseen. Ei väitetä kuulotunnistusta tai soittotaitoa todennetuksi. Ei pysyvää edistymistallennusta. Seuraava rajattu päätös katselmuksen jälkeen: siirtyminen rakenteen ja muuntamisen harjoituksiin tai barré-pajaan erikseen. Ei uusia tasoja ilman omistajan päätöstä.
