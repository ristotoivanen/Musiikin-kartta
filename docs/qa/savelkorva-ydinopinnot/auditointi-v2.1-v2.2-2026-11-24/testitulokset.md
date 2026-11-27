# Testitulokset, PR #178 commit b6ff78713ec87fef7a688b0825e327f2fb8ed891

Ympäristö: macOS (Darwin 27.2), Node 22 (`/opt/homebrew/opt/node@22`), Playwright 1.56.1, Vitest 5.1.0, Python 3. Erillinen detached worktree `audit-sk178`; `node_modules` linkitetty identtisestä package-lock-työpuusta.

| Ajo | Komento | Tulos | Loki |
|---|---|---|---|
| Koko tarkistus | `npm run check` (lint + vitest + build) | EXIT 0. Vitest 44 tiedostoa, 728 testiä läpi. Build ok, "Päivitetty 0 sivua" | `mittaus/npm-check.log` |
| Chromium e2e (aihekohtainen) | `npx playwright test tests/e2e/savelkorva-ydinopinnot.spec.ts` | 32 läpi, 2 ohitettu, 0 epäonnistunut | `mittaus/e2e-chromium.log` |
| WebKit e2e | `npx playwright test --config=playwright.savelkorva-116-webkit.config.ts` | 31 läpi, 1 epäonnistui, 2 ohitettu | `mittaus/e2e-webkit.log` |
| Generointi | `python3 tools/oppimiskartta/rakenna.py --tarkista` | EXIT 0 | `mittaus/oppimiskartta-tarkista.log` |
| Generaattori ja sisältö | `node mittaus/generaattori-testi.mjs <työpuu>` | ks. raportti §10–12 | `mittaus/generaattori-testi.tulos.txt` |
| WebKit lisätestit (näppäimistö, oktaavi) | `node mittaus/webkit-lisatestit.mjs <työpuu>` | A: Alt+Tab-fokus ok; B: oktaavivirhe toistuu | `mittaus/webkit-lisatestit.tulos.txt` |
| 5 sävelen palaute 320/375 px | `node mittaus/webkit-5savelta.mjs <työpuu>` | ei vaakavieritystä, kortit 3+2 | `mittaus/webkit-5savelta.tulos.txt` |
| Yhteensopivuus | `git merge-tree --write-tree` (#178/#179/beta) | #178+#179: 5 tekstiristiriitaa | raportti §17 |

## Epäonnistunut testi

`savelkorva-ydinopinnot.spec.ts:480`, webkit-desktop, "näppäimistöllä: Space valitsee lopun, Enter tarkistaa ja fokus säilyy": `expect(p.check).toBeFocused()` Tabin jälkeen epäonnistui. Selitys: macOS-WebKitissä Tab ohittaa painikkeet (fokus meni ⓘ-yhteenvetoon). Vahvistus erillisellä skriptillä: Alt+Tab → fokus "Tarkista valinta", Enter tarkistaa ja fokus pysyy. CI (Linux-WebKit) läpäisi testin. Ympäristöstä johtuva, ei sovellusvirhe. Testiä ei muutettu.

## Ei ajettu

Koko `npm run test:e2e` (1142 testiä) ja `responsive.spec.ts:259`; yhdistetyn #178+#179 -version rakennus ja testit.

## Simulaattori

iPhone 16 Pro (C473C410), iOS 27.2, Safari, kuvakaappaukset `kuvakaappaukset/`, mittausloki `mittaus/events.jsonl`. Simulaattorikäyttäjätesti suoritettu kaikille kolmelle harjoitukselle; ääntä ei kuunneltu.

---

# Uusinta 25.11.2026, commit 5df155823253c106af6d1c3d5e9b9499790febce (v2.2)

| Ajo | Komento | Tulos | Loki |
|---|---|---|---|
| Koko tarkistus | `npm run check` | EXIT 0; Vitest 44 tiedostoa, 767 testiä läpi | `mittaus/npm-check.log` (v2.1: `npm-check-b6ff787.log`) |
| Chromium e2e | `npx playwright test tests/e2e/savelkorva-ydinopinnot.spec.ts` | 59 läpi, 3 ohitettu | `mittaus/e2e-chromium.log` |
| WebKit e2e | `npx playwright test --config=playwright.savelkorva-116-webkit.config.ts` | 59 läpi, 3 ohitettu (v2.1:n `:480` läpäisee) | `mittaus/e2e-webkit.log` |
| Generointi | `python3 tools/oppimiskartta/rakenna.py --tarkista` | EXIT 0 | `mittaus/oppimiskartta-tarkista.log` |
| Äänitapahtumat, 02 tukiääni, keskeytykset, 03 tahdit, vaihto, näppäimistö, 320–375 | `node mittaus/aanitestit-v22.mjs <työpuu> <osa>` | ks. raportin liite L2–L7 | `mittaus/aanitestit-v22.tulos.txt` (viimeisen ajon osat), tulokset raportissa |

Ympäristö: macOS, Playwright 1.56.1 WebKit (Desktop Safari ja iPhone 13 -emulaatio), staattinen palvelin `tools/playwright-server.py` portissa 8765 (suljettu ajojen jälkeen). Verkkoviive ja -esto Playwrightin `route`-rajapinnalla. Ääni: Web Audio -kutsut kirjattu; ihmisen kuuntelua ei tehty.
