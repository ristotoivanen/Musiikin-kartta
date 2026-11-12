# Yksi sointu, kaksi askelta (akustinen versio)

Kappaleharjoittelun oletusversio. Toisto käyttää kolmea samaan aikaan
käynnistyvää MP3-raitaa. Oletuksena sekä kitara että laulu kuuluvat, ja ne saa
erikseen mykistettyä keskeyttämättä soittoa.

| Julkaistava äänitiedosto | Alkuperäiset raidat |
| --- | --- |
| yksi-sointu-kaksi-askelta-akustinen-saestys.mp3 | Bass + Drums + Keyboard + Percussion + Synth + Woodwinds |
| yksi-sointu-kaksi-askelta-akustinen-kitara.mp3 | Guitar |
| yksi-sointu-kaksi-askelta-akustinen-laulu.mp3 | Vocals + Backing Vocals |

Raidat on koottu Sunolla tehdyn kappaleen yhdeksästä stem-tiedostosta
(ID3: `made with suno; created=2026-11-11T21:16:11Z`). Kaikki alkuperäiset raidat
ja kolme koottua tiedostoa ovat 48 kHz stereo ja kestoltaan 233,376 sekuntia.
MP3-bittivirta on 192 kbit/s.

## Asennus kehitystyöpuuhun

Pura `yksi-sointu-kaksi-askelta-akustinen-raidat.zip` projektin juureen, ei
`harjoittelija/`-kansioon:

```bash
cd ~/src/Musiikin-kartta/worktrees/kitaraharjoittelija-oppimispolut
unzip -o ~/Downloads/yksi-sointu-kaksi-askelta-akustinen-raidat.zip -d .
npm run check:song-audio
```

## Julkaisu ja oikeudet

MP3-tiedostot eivät ole Gitissä. Cloudflare Pages julkaisee GitHub-repon
sisällön, joten tiedostot tulevat sivustolle vasta, kun ne commitoidaan
julkiseen repoon tai siirretään erilliseen tallennuspalveluun.

**Jakeluoikeus on vahvistamatta.** Sunon ehtojen mukaan kaupallinen käyttö ja
oikeuksien siirto koskevat vain maksullisen tilauksen aikana luotuja kappaleita.
Ilmaistason kappaleet on rajattu henkilökohtaiseen, ei-kaupalliseen käyttöön.
Ennen julkaisua on varmistettava tilaustaso luontihetkellä ja lisättävä
Suno-alkuperän maininta. Repon Unlicense-lisenssi koskee ohjelmistoa, ei näitä
äänitteitä.

MP3-raitojen soittoaikaeroa korjataan HTMLMediaElementien välillä. Se ei ole
näytetarkkaa audiomiksausta, joten ajoitus tarkistetaan kuuntelemalla.
