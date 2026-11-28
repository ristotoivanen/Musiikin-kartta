# Tunnetut lähtötilan ongelmat (PR #179, haara `claude/116-otelauta-auditointikorjaukset`)

Kirjattu 24.11.2026. Testejä ei ole muutettu ongelmien peittämiseksi. Kaikki kolme kaatuvat samoin muuttamattomalla toteutuscommitilla `14aed6d` (macOS-ympäristössä, Playwright WebKit, `playwright.otelauta-ydinopinnot-webkit.config.ts`), eli ne eivät johdu N5–N7-viimeistelystä.

| # | Testi (`tests/e2e/otelauta-ydinopinnot.spec.ts`) | Projektit | Oire | Tila |
|---|---|---|---|---|
| T1 | `01 · Sama sävel toiselta kieleltä › näppäimistö: yksi sarkainpysähdys laudalla, nuolet ja Enter` | webkit-desktop | Oikean vastauksen jälkeen Tab ei siirtänyt fokusta odotetulle ”Uusi tehtävä →” -painikkeelle laudan alla (`toBeFocused` epäonnistuu, rivi 185). Syytä ei selvitetty; mahdollisesti WebKitin sarkainkäyttäytyminen. | Tunnettu lähtötilan ongelma |
| T2 | sama testi | webkit-iphone | sama kuin T1 | Tunnettu lähtötilan ongelma |
| T3 | `palaute aktiivisen vastausalueen lähellä (390 × 664) › 03 nimeä: palaute sävelnimipainikkeiden alla ilman vieritystä` | webkit-desktop | `window.scrollY` muuttui 82 px sävelnimipainikkeen napautuksen jälkeen (odotus: ei muutosta). Chromiumissa sama testi on epävakaa (10–22 px, noin 4/24 ajosta) myös ilman viimeistelyn muutoksia. Simulaattorin Safarissa 03:n nimeämisen napautus ei vienyt näkymää (`y` pysyi ennallaan). | Tunnettu lähtötilan ongelma, mahdollisesti testin oma vieritys |

Tulokset: WebKit 67 läpi / 3 kaatuu (lähtötila ja viimeistely samat). Chromium 64/64 (03 nimeä -testi voi satunnaisesti kaatua). Pilviympäristön (Linux) ajoissa näitä ei havaittu.

Ehdotus: selvitä erillisessä tehtävässä (T1: sarkainkäyttäytyminen macOS-WebKitissä; T3: testin vierityksen mittaus vs. Playwrightin klikkausvieritys).
