# Kahden raidan synkronointitestin äänet (testiversio)

Vain `kaksiraitatesti.html`-testisivua varten (issue #9). Kappaleharjoittelija ei käytä näitä:
sen tuotantoraidat ovat `assets/audio/kappaleet/`-hakemistossa ennallaan.

- `yksi-sointu-akustinen-kitara.mp3` ja `yksi-sointu-akustinen-tausta.mp3` ovat Sunon Split from Mix
  -erotuksen (Acoustic Guitar / Without Acoustic Guitar) MP3:t muuttamattomina.
- `*-0-120s.wav` ovat saman erotuksen WAV-tiedostojen alku 0–120 s (16 bit, 48 kHz, stereo,
  tavut muuttamatta). Täysi WAV (44,8 Mt) ei mahdu Cloudflare Pagesin 25 MiB:n tiedostorajaan.

- Pakatut vertailuversiot (MK-20261118-03) on koodattu samoista lähde-WAVeista. 0–120 s
  tehtiin yllä olevista WAVeista ja `-koko` alkuperäisistä täysistä WAVeista (233,32 s):
  - `*-0-120s.m4a` ja `*-koko.m4a`: AAC-LC 192 kbit/s, Applen kooderi
    (`afconvert -f m4af -d aac -b 192000 -s 2 -q 127`). Kooderin viive (2112 näytettä) ja
    täyte on kirjattu `iTunSMPB`-tietoon.
  - `*-0-120s-cbr192.mp3` ja `*-koko-cbr192.mp3`: MP3 CBR 192 kbit/s, LAME 4.0
    (`lame -b 192 --cbr -q 0 --noreplaygain`). Viive ja täyte (576 + 576) ovat LAME-otsakkeessa.

Alkuperä, tiivisteet ja mitattu kohdistus: `harjoittelija/kaksiraitatesti/README.md`.
