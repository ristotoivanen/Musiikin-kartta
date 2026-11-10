# Harjoittelijan kehittäjälle

Harjoittelija on React-saareke staattisessa HTML-sivustossa. Selain tarvitsee
ainoastaan `kitaraharjoittelija.html`-sivun, `assets/otelauta.css`:n ja buildatun
`assets/harjoittelija/`-hakemiston. Ei palvelinrajapintoja, tunnuksia, analytiikkaa,
CDN-riippuvuuksia tai service workeriä.

## Rajapinnat

- `music.ts`: sovitin nykyiseen `assets/otelauta.js`:ään. Asteikkosävelet,
  oikeinkirjoitus, vakioviritys ja sormitusboksit lasketaan olemassa olevalla
  kirjastolla. Uutena vain harjoituskohteet, kolmen sointutyypin asteet ja CAGED.
- `engine.ts`: selaimesta ja Reactista riippumaton kysymys- ja tilamoottori.
  Satunnaisluku ja kello voidaan injektoida testeihin. Tilat: idle → active →
  feedback → active/done, active/feedback → paused → aiempi tila, mistä tahansa
  done. Käyttäjä siirtyy seuraavaan kysymykseen itse; automaattisia siirtymäajastimia
  ei ole.
- `vendor/`: MIT-lisensoidut FretEcho-sovitukset. `notes.ts` on alkuperäinen,
  mikrofonin ja tunnistuksen sovitukset on kuvattu arkkitehtuuriraportissa.
- `audio.ts`: mikrofonin ja esimerkkisävelten elinkaari. Operaatiotunniste estää
  myöhäisen lupavastauksen ja perutun toiston muuttamasta uutta harjoitusta.
- `storage.ts`: versioitu tietomalli ja virheenkestävä selaintallennus.
- `Controls.tsx`, `Board.tsx`, `main.tsx`: suomenkielinen käyttöliittymä.
  Otelautaruudukko on semanttinen taulukko; nuolinäppäimet, Home, End ja Enter
  toimivat vastauksissa. Vihjeen vaakavieritys ei siirrä koko sivua.

## Tunnistuksen rajat

Pitchy käyttää McLeod-menetelmää 8192 näytteen ikkunassa. Taajuusalue 70–1450 Hz
kattaa tuetun E2–E6-otelaudan. Oletukset: RMS ≥ .01, selkeys ≥ .94, senttipoikkeama
enintään ±35 ja sama sävel vähintään 240 ms sekä vähintään kolme havaintokehystä.
Ennen jokaista vastausta tarvitaan 140 ms vaimennusta. Havainnointi seuraa
selaimen animaatiokehystä; piilotettu sivu keskeyttää harjoituksen. Näytön
sävelmittarin päivityksiä rajoitetaan noin kahdeksaan sekunnissa.

Arvot ovat konservatiivisia lähtöasetuksia, eivät fyysisillä kitaroilla validoitu
optimointi. Hiljaisuuden kalibrointi mittaa kolmen sekunnin RMS-jakauman
95. prosenttipisteen ja asettaa kynnykseksi kolminkertaisen arvon välillä .003–.15.
Se ei kalibroi virettä, latenssia tai soittimen taajuusvastetta.

Mikrofonin väärä sävel on ehdotus, kunnes käyttäjä vahvistaa oman virheensä.
Sävelluokkavertailu hyväksyy oktaavit. MIDI-vertailu vaatii saman oktaavin;
virityksen toleranssi sovelletaan ennen MIDI-havainnon välittämistä moottorille.
Oikea tulos ei ole todistus kielen, nauhan tai kokonaisen sointuotteen valinnasta.

## Tallennussopimus

Avain `musiikin-kartta:harjoittelu`, nykyinen `version: 2`:

```text
settings: validoidut harjoitusasetukset
stats: avain → attempts, correct, errors, totalMs, lastSeen
recent: enintään 500 ratkaistua tehtävää
sessions: enintään 200 uusinta harjoituskertaa
```

Tilastoavain on `vastaustapa:tarkistus:solo|guided:harjoituskohde`.
Kohde erottaa sävelharjoituksen kieli/nauhan, soinnun perussävelen/tyypin/asteen,
asteikon/boksin kohdan, CAGED-muodon tai intervallin/suunnan. Boksia ei lisätä
erilliseen avaimeen: sama asteikkokohta jakaa tulokset riippumatta rajauksesta.
Mikrofonin kohdalla kieli/nauha tarkoittaa kysyttyä kohdetta; otelautavastauksessa
tallennetaan valittu kohta. Kuullun sävelen nimeämisessä avain perustuu sävelluokkaan.

`Result.first` tarkoittaa ratkaisua ilman yhtään kirjattua virhettä. `ms` mittaa
kokonaisajan onnistuneeseen vastaukseen, mukaan lukien korjaavat yritykset mutta
ilman taukoja tai esimerkin toistoa. `played` on MIDI sävelvastauksessa,
sävelluokka nimivastauksessa ja puoliaskelmäärä astevastauksessa. `expected` on
kysytty MIDI-sävel. Vihjeet merkitään myös automaattisesti avustetuissa kysymyksissä.
Keskeneräisen kysymyksen yrityksiä ei kirjata ennen ratkaisua. Vastatut kysymykset
tallentuvat heti; selaimen sulkeminen ei tarvitse erillistä loppukuittausta.

Osaamisarvio: 65 % ensimmäisen yrityksen tarkkuutta ja 35 % nopeutta
(≤1,5 s = täysi nopeuspiste, ≥5 s = nolla nopeuspistettä). Alle kolme vastausta
näytetään alustavina. Heikkojen painotus on FretEchon mallin mukaisesti 3 vähän
harjoitelluille, muuten `.25 + (1 - osaaminen) * 3`; vahvatkin kohteet esiintyvät.

V1-mallin `{version:1, stats, settings, recent?, sessions?}` aineisto saa puuttuvat
virhemäärät ja asetukset oletuksista. Korruptoitunutta tai tulevan version
aineistoa ei kirjoiteta päälle; tämän käynnin tulokset jäävät muistiin ja ne voi
ladata. Tallennuksen v1 on integraation oma yhteensopivuusmuoto, ei FretEchon
erillisen sivuston tilastoformaatti. Oppaan `musiikin-kartta:tehdyt` ei muutu.

## Build ja testit

Repon juuresta: `npm ci`, `npm run check`, `npm run test:e2e`.
`npm run dev` palvelee portissa 5173 TypeScript-lähteitä. Tavallinen HTTP-palvelin
palvelee commitoitua bundlea. `npm run build` päivittää bundlen ja MIT-ilmoitukset
`tools/trainer-notices.mjs`:llä. Muuttuneesta musiikkikirjastosta tarvitaan aina
uusi build, sillä harjoittelijan bundle sisältää sen oman kopion.

ESLint tarkistaa uuden TypeScriptin ja asetukset. Nykyisten classic-skriptien
syntaksi ja vanhat harjoitussivut tarkistetaan erillisillä regressiotesteillä.
Testit ja build-asetukset kuuluvat myös tiukkaan TypeScript-tarkistukseen.
E2E-kuvakaappaukset syntyvät `/private/tmp/mk-trainer-*.png`-tiedostoiksi Macilla.
Ajantasainen tilanne, rajoitteet ja fyysiset hyväksyntätestit ovat
[`../reviews/fretecho-kehityskatselmus.md`](../reviews/fretecho-kehityskatselmus.md).
