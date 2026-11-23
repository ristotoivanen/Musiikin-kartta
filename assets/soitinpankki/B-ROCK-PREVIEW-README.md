# MK-20261117-01 — uusi B-rock-tausta, M2/M3-koekytkentä (23.11.2026)

**Tila: testiesikatselu. Ei hyväksytty uusi säestys eikä korvaus nykyiselle B-taustalle.**

## Tausta ja lähde

Käyttäjä valitsi 23.11.2026 kahdesta uudesta synteettisestä 72 BPM -Em-säestyksestä **B_rock**-version jatkokehitykseen. Vanhan `em-komppi-b-m3-hillitty-basso.wav`-taustan äänenlaatu koettiin heikoksi. Uusi versio ei sisällä TimGM6mb:tä, muita SoundFonteja eikä kolmannen osapuolen samplenauhoituksia. Ääni on tuotettu NumPy/SciPy-laskennalla ilman ulkoisia instrumenttiääniä.

- Toistettavissa oleva lähde: `tools/aanet/ensimmaiset_nelja_iskua_em_v2.py`.
- Riippuvuudet: Python 3, numpy, scipy, soundfile, FFmpeg (MP3-kuunteluversiota varten).
- Master: `em_72bpm_uusi_B_rock.wav`, 48 kHz, stereo, 24 bit, 30,4 s; **ei vielä GitHubissa**.
- SHA-256: `8cce9384b0385d67cdc62f68c24aef28c4a713bc7cff95c1dbd6a483ce85ea57`.
- Uusi master on saatavissa hyväksyntää varten alkuperäisen kuuntelukeskustelun tiedostona. Masteria ei korvata MP3:sta puretulla datalla.
- GitHubin koodilisenssi ei automaattisesti määritä valmiin musiikkiäänitteen edelleenjakeluoikeuksia. Julkaisulisenssi sovitaan erikseen.

## Koekäyttö

Esikatselu: `assets/soitinpankki/ensimmaiset-nelja-iskua-b-rock-koe.html`.

1. Lataa uuden B-rockin **WAV-master** keskustelusta.
2. Avaa haaran Cloudflare Pages -esikatselussa yllä oleva koesivu.
3. Valitse WAV tiedostonvalitsimella. Sivu lukee tiedoston **vain selaimessa** ja tarkistaa sen SHA-256:n.
4. Testaa **M2** (Meta Steel 2,4× -mallikitara + uusi B-rock) ja **M3** (uusi B-rock silmukkana, ei mallikitaraa), Käynnistä/Pysäytä, vaihto M2↔M3 ja iPhone-lukitus/keskeytyminen tarvittaessa.

Sivu **ei koskaan** hae vanhaa B-taustaa varaääneksi. M0/M1 ja alkuperäinen Steel-esikatselu ovat ennallaan. Meta Steel -mallikitara sekä alkuperäisen M2/M3:n Web Audio -ajoitus ja vaimennuslogiikka säilyvät.

Uuden B:n musiikin RMS on noin -18,3 dBFS, kun vanhan B:n dokumentoitu keskiarvo on noin -22,3 dBFS. Siksi esikatselu vähentää uuden taustan toistotasoa alustavasti **4 dB** molemmissa harjoituksissa:

- M2: säestyksen GainNode `0.55 × 10^(-4/20)` (n. 0,347) ja basson +2 dB low-shelf 90 Hz. Meta Steel 2,4× ennallaan.
- M3: uuden säestyksen GainNode `10^(-4/20)` (n. 0,631), toistuva musiikkialue 3,333…–30,000 s.

Tämä on **arvio RMS-vertailun perusteella**, ei mitattu yhtä suuri LUFS tai psykoakustinen äänenvoimakkuus. Lopullinen taso vaatii kuuntelun.

## Rakenne ja testaus

- 72 BPM, 4/4, neljä laskentaiskua 0–3,333… s.
- 8 tahdin Em-tausta 3,333…–30,000 s, viimeiset 0,4 s nollaa.
- Bassolinja E1/G1/B1, 1. ja 3. iskuilla, kahden tahdin harjoituskuvion yli.
- M2: neljä E2-iskua soitettavalla tahdilla; vaimennus taukotahdin ykkösellä.
- M3: tausta kiertää jatkuvasti käyttäjän pysäytykseen asti.
- Chromium/WebKit-selaintestit tarkistavat, ettei väärä WAV tai puuttuva tiedosto johda vanhan B:n hiljaiseen käyttöön. Testit eivät todista oikeaa äänenlaatua, kuultua miksausta, iPhone-lukituksen toimintaa tai ääninäytteiden synkronista kuulumista.

**Ei** beta-/main-yhdistämistä, nykyisten audioassetien muuttamista eikä julkaisu-GO:ta ennen omistajan kuunteluhyväksyntää ja erillistä integraatiopäätöstä.
