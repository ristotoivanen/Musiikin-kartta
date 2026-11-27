# Apuskriptit

Auditoinnin kertaluonteiset mittausskriptit, arkistoitu näytön vuoksi. Eivät ole osa testisarjaa.
Aja repositorion juuressa `npm ci`:n jälkeen: `node docs/qa/savelnimet-ydinopinnot/auditointi-2026-11-24-2308/apu/<skripti>`.

| Skripti | Tehtävä | Edellytys |
|---|---|---|
| `pitch.mjs <wav-kansio>` | M4A-näytteiden perustaajuudet | WAV-tiedostot: `afconvert -f WAVE -d LEI16 näyte.m4a näyte.m4a.wav` |
| `mix.mjs` | kitaran ja kompin taso | samat WAV-tiedostot, kansio `AUDIT_WAV` (oletus `./wav`) |
| `oggpitch.mjs` | OGG-näytteiden perustaajuudet Chromiumissa | staattinen palvelin repositorion juuressa, portti 8951 |
| `probe.mjs`, `probe2.mjs` | tallennukset, kosketuskohteet, saavutettavuus | sama palvelin; mittaavat korjaamattoman version tilaa |

`probe*.mjs` ja `oggpitch.mjs` tuovat Playwrightin repositorion `node_modules`-hakemistosta.
