# Mobiilimittaus

Kitaraharjoittelijan mobiilikäytettävyyden mittausskriptit. Sama menetelmä kuin 13.11.2026
mobiiliauditoinnissa (K1–K7). Skriptit eivät ole osa julkaistavaa sovellusta eivätkä testisarjaa:
pysyvät regressiotestit ovat tiedostossa `tests/e2e/responsive.spec.ts`.

Käynnistä ensin staattinen palvelin projektin juuressa:

```bash
python3 -m http.server 8794 --bind 127.0.0.1
```

| Skripti | Mitä mittaa |
| --- | --- |
| `mittaa.mjs <osoite> <tuloshakemisto> [light\|dark] [skenaariot]` | 16 näkymää, leveydet 320–1440 px ja kaksi vaaka-asentoa: otelaudan näkyvät nauhat, piiloon jäävät pisteet, soivan sävelen näkyvyys mallisoitossa, sivun vaakaylivuoto, pienet kosketuskohteet ja kuvakaappaukset. |
| `kappale.mjs [osoite]` | Kappaleharjoittelu: soittopainikkeen ja soivan soinnun etäisyys, aktiivisen tahdin kontrasti, asteikkokuvan koko. |
| `kontrasti.mjs [osoite]` | Painetun painikkeen kontrasti hover-tilassa ja lepotilassa molemmissa teemoissa. |
| `sointu.mjs [osoite]` | Näkyvätkö sointuharjoituksen C-soinnun kaikki merkinnät 320–430 px:n näytöllä. |

Tulokset ja kuvat kirjoitetaan hakemistoon `test-results/` (ei versionhallinnassa).
Kaikki skriptit käyttävät koneen Chromea (`/Applications/Google Chrome.app`) ilman äänilähtöä.
