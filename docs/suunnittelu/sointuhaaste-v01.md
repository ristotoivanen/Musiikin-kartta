# Sointuhaaste #48 – ajastettu pelitila v0.1

24.11.2026. Omistajan hyväksymä kokeilusuunta, ei beta-merge- eikä julkaisulupa. Pohja #191 @ 76d135b34a6cbbc73a2fe18bd1c18b711df74f74. Neljä harjoitustasoa säilyvät. [Tasot 3–4](sointipaja-tasot-3-4-v01.md), [katselmointiohje](suunnittelu-ja-pr-katselmointi.md).

## Oppimistavoite ja säännöt

Käyttäjä harjoittelee jo opittujen avosointujen sujuvaa visuaalista tunnistamista. Ei väitetä kuulotunnistusta, soittotaitoa tai teoriapäättelyä todennetuksi. Ajaton harjoittelu säilyy rinnalla. Peli on vapaaehtoinen.

- Peliasetukset: tasot 1–4 valitaan riippumattomasti. Kukin taso tuo mukaan juuri sillä tasolla esitellyt uudet soinnut (7, 4, 6, 7). Valintojen yhdistelmä muodostaa yhden duplikaatittoman joukon; tason 4 valitseminen yksin ei sisällä aiempien tasojen sointuja. Oletus 1+2, 60 s, 4 s lukitus. Peliaika 30/60/120/180 s, lukitus 3/4/5 s. Tyhjä valinta ei käynnistä peliä.
- Arvonta tasapainotetuista sekoitetuista pakoista: jokainen valittu sointu kerran per pakka, ei välittömiä toistoja myöskään pakkojen rajalla. Ei väitetä kaikkia järjestyksiä tasatodennäköisiksi.
- Kiinteä C–D–E–F–G–A–B-rivi ja toinen sointuvalinta. Kirjaimen valinta ei arvioi eikä rankaise. Oikeasta täydestä vastauksesta piste, uusi tehtävä heti; ei automaattiääntä tai mallisoittoa eikä äänen latausta pelissä. Otelautamerkit ovat ei-interaktiivisia kuvallisia merkkejä, joilla on sanallinen paikka.
- Väärä täysi vastaus lukitsee kaikki vastausvalinnat. Pelikello ei pysähdy. Lukituksen päätyttyä sama tehtävä; aiemmin vääräksi merkitty vaihtoehto ei aiheuta uutta rangaistusta. Ajan loppu katkaisee lukituksen ja pelin; myöhäisiä vastauksia ei hyväksytä. Menetetty peliaika on toteutunut lukitusaika, enintään jäljellä ollut aika. Kellon lähde performance.now, ei vähennys timer-tickien määrällä.
- Tulokset: oikeat, ensiyrityksellä oikeat, väärät täysvastaukset, todellinen lukitusaika, virhekohteet (virhevalintojen määrät). Keskeytetystä pelistä ei ennätystä; sivulta poistuminen keskeyttää. Välilehden vaihtaminen ei anna lisäaikaa; palatessa tarkistetaan aikaraja.
- Ennätys vain paikallinen, avain sisältää sääntöversion, järjestetyt tasotunnisteet, peliajan ja lukituksen. Vain suurempi pisteet päivittyvät, tasatulos ei uusi ennätys. Estetty tallennus ei kaada peliä, eikä väitetä ennätystä tallennetuksi. Ei pilvitallennusta, tulostaulua tai kilpailua muiden kanssa.
- Asetuksiin siirtyminen ei nollaa harjoitusta. Pelin käynnistys päättää keskeneräisen harjoituksen; palatessa sama taso alkaa alusta, kerrotaan ennen aloitusta. Pelin keskeytys ja paluu ovat aina saatavilla. Ei uusia sointuja, ei barréita eikä yhteisen ääni- tai otelautamoduulin muutoksia.

## Todentaminen

Puhdas pelimalli assets/sointipaja-challenge.js, testattu V8:ssa kaikkien 180 asetuskombinaation läpi: 15 ei-tyhjää tasovalintaa × 4 peliaikaa × 3 lukitusta. Tarkastettu kohteiden kattavuus, pakkojen välinen toisto, oikea/väärä pisteytys, lukituksen rajat, myöhäinen vastaus, ajan päättyminen kesken lukituksen, tallennus ja avainerottelu. HTML:n inline-JS:n syntaksi tarkistettu. Selaintestit tests/e2e/sointipaja-challenge.spec.ts sekä aiemmat harjoitustestit kohdennettu erilliseen Chromium/WebKit CI-ajoon; tuloksia ei oleteta läpäistyiksi. Kokeile 320/360/390 px, 200 % teksti, näppäimistö, fokus, ruudunlukijan palaute ja todellinen ajoitus; arvioi koettu pelinopeus ja vaikeustaso. Ajastettu tila ei korvaa ajatonta harjoittelua. Fyysinen iPhone/Android ja harjoittelun ääniregressio edelleen erikseen.

Beta-ehto: riippuvuuksien katselmointi (#187, #189, #190, #191), koko ketjun regressiot, löydösten käsittely, erillinen beta-integraatio-PR näkyvällä beta-leimalla ja omistajan nimenomainen merge-/julkaisupäätös. Ei main-julkaisua.
