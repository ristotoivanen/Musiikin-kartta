# Luovutus: PR #178, Sävelkorva ja melodia – Ydinopinnot (27.11.2026)

**Suositus: GO** beta-yhdistämiseen. Yhdistäminen odottaa omistajan lupaa; PR on Draft.

- PR: https://github.com/ristotoivanen/Musiikin-kartta/pull/178
- HEAD `a7af747`, beta `07d8126` yhdistetty (`91e7cb2`), tila MERGEABLE
- Esikatselu: https://f5d49639.musiikin-kartta.pages.dev/oppi/korva/index.html
- Omistaja testasi version 2.3 (`6f17abf`): toimii odotetusti. Ominaisuudet jäädytetty; beta-yhdistäminen ei muuttanut harjoitusten koodia.

## Testit
- CI: #117, #151, static, yksikkö, Sävelkorva-WebKit, Cloudflare läpi. `chromium` punainen: 1379 läpi, 12 epäonnistui, kaikki beta-ongelmia.
- Uusia PR:n aiheuttamia regressioita ei löytynyt (Chromium, WebKit, Linux-CI).
- Esikatselu: JS/CSS vastaavat committia; kolmen harjoituksen äänet latautuivat Chromiumilla ja WebKit-iPhone-emulaatiolla.

## Beta-ongelmat erilliseen issueen (ei luotu)
aihesivut:123/435, otelautaopas-beta:31/73, practice:89, song-d2:25/149 (vain Linux),
macOS-WebKit: learning-paths:518, song-volume-scales:22, visualizer:347, ensikeikka-toinen-ilta:294, practice:617/690/716.

## Huomioitavaa yhdistäessä
- Punainen `chromium` näkyy PR:ssä, kunnes beta-ongelmat korjataan.
- #179 (`8065b07`): neljä ristiriitaista testitiedostoa; jälkimmäisenä yhdistettävä sovitetaan.

## Todentamatta
Xcode-simulaattori v2.3; fyysisen iPhonen erilliset kohdat (tuplanapautuszoom, K7:n tuntuma, äänitasapaino, tempo); melodiaparit 4 ja 8; VoiceOver; oikea kitara.

## Lähteet
docs/qa/savelkorva-178-beta-2026-11-27/raportti.md (haarassa) ja PR-kuvaus (Linux-CI:n tulokset vain siellä).
