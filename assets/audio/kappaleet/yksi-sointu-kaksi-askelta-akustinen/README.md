# Yksi sointu, kaksi askelta (akustinen versio)

Kitaraharjoittelijan neljännen polun mallikappale. Toisto käyttää kolmea
samaan aikaan käynnistyvää MP3-raitaa. Oletuksena sekä kitara että laulu
kuuluvat, ja ne saa erikseen mykistettyä keskeyttämättä soittoa.

| Julkaistava äänitiedosto | Alkuperäiset raidat |
| --- | --- |
| yksi-sointu-kaksi-askelta-akustinen-saestys.mp3 | Bass + Drums + Keyboard + Percussion + Synth + Woodwinds |
| yksi-sointu-kaksi-askelta-akustinen-kitara.mp3 | Guitar |
| yksi-sointu-kaksi-askelta-akustinen-laulu.mp3 | Vocals + Backing Vocals |

Kaikki alkuperäiset 9 ääniraitaa ovat 48 kHz stereo ja kestoltaan
233,376 sekuntia. Myös kolmen julkaistavan miksatun tiedoston kestot
ovat täsmälleen 233,376 sekuntia. Käytetty MP3-bittivirta: 192 kbit/s.

**Asennus:** Lataa keskustelusta `yksi-sointu-kaksi-askelta-akustinen-raidat.zip`
ja pura paketti projektin juuriin, ei `harjoittelija/`-kansioon.

Esimerkiksi:

```bash
cd ~/src/Musiikin-kartta/worktrees/kitaraharjoittelija-oppimispolut
unzip -o ~/Downloads/yksi-sointu-kaksi-askelta-akustinen-raidat.zip -d .
npm run check:song-audio
```

MP3-binäärit eivät sisälly GitHubin koodipäivitykseen; julkaisun yhteydessä
ne on siirrettävä julkaistavalle palvelimelle erikseen. Älä julkaise
äänitteitä julkisesti ilman jakeluoikeuksien tarkistamista.

MP3-striimien soittoaikaeroa korjataan HTMLMediaElementien välillä, mutta
se ei ole ammattitasoinen näytetarkka audiomiksaus.
