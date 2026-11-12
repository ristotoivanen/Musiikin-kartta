# Yksi sointu, kaksi askelta (normaali versio)

Kappaleharjoittelijan toinen ääniversio. Kesto 3:32,208 (212,208 sekuntia).
Alkuperäiset 10 ääniraitaa ovat samanpituisia, 48 kHz stereo.

| Julkaistava äänitiedosto | Alkuperäiset raidat |
| --- | --- |
| yksi-sointu-kaksi-askelta-normaali-saestys.mp3 | Bass, Drums, FX, Keyboard, Percussion, Strings, Synth |
| yksi-sointu-kaksi-askelta-normaali-kitara.mp3 | Guitar |
| yksi-sointu-kaksi-askelta-normaali-laulu.mp3 | Vocals, Backing Vocals |

Kolme miksattua tiedostoa ovat keskenään samanpituisia ja MP3-muodossa
(48 kHz, stereo, 192 kbit/s). Toisto on toteutettu samalla SongJourney-soittimella
kuin akustisessa versiossa. Normaali versio valitaan **Versio**-valikosta.
Versiota vaihdettaessa toisto pysähtyy, aikajana palaa nollaan eikä uusi
versio käynnisty automaattisesti. Kitaran, laulun ja loopin valinnat säilyvät.

Äänitiedostot eivät sisälly GitHub-tekstipäivitykseen.

**Asennus:** Pura keskustelusta ladattu
`yksi-sointu-kaksi-askelta-normaali-raidat.zip` suoraan worktreen juureen.

```bash
cd ~/src/Musiikin-kartta/worktrees/kitaraharjoittelija-oppimispolut
unzip -o ~/Downloads/yksi-sointu-kaksi-askelta-normaali-raidat.zip -d .
npm run check:song-audio
```

Asennuksen tarkistus odottaa myös akustisen version kolmea raitaa.
Julkaisuun tarvitaan kaikki kuusi MP3-tiedostoa. Varmista jakeluoikeudet
ennen julkiseen sivustoon lisäämistä.

Huomautus: HTMLMediaElement-ääniraitojen käynnistys ja jatkuva looppitoisto
eivät ole näytetarkkaa äänityöasemamiksausta. Tarkista musiikillinen synkka
käytännössä sekä työpöydällä että puhelimella.
