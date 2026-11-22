#!/usr/bin/env python3
"""Tuo Sointujen 02:n Dm-vertailun aito F4-näyte #116:n Draft-haaraan.

Yksi ainoa Meta Steel Guitar Vel02 / HighE:F4 -näyte.
OGG tarkistetaan julkaisijan SHA-256-tarkisteella. WAV poimitaan v1.0.0:n
julkaisupaketista HTTP Range -latauksilla, ZIP:n CRC32:n avulla; siitä
tehdään AAC-LC:n 5 sekunnin monoääni kuten muissakin Sointujen näytteissä.

Tämä skripti ei muuta muita äänitiedostoja eikä käytä sävelkorkeuden
transponointia. Fyysinen iPhone/Safari-kuuntelu ja äänen balanssi ovat
edelleen erillisiä hyväksyntöjä.
"""
from __future__ import annotations

import hashlib
import runpy
import shutil
import struct
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
TARGET = ROOT / "assets" / "audio" / "soinnut"
NAME = "INSGuitarSteel_StringHighE_Vel02_F4_01"
OGG_SHA256 = "79fc96bcdea8c49147bc561c2109b030fcbdf40ffe698e098525eaa3c586516d"
SAMPLES = runpy.run_path(str(ROOT / "tools" / "aanet" / "soinnut-naytteet.py"))


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main() -> None:
    TARGET.mkdir(parents=True, exist_ok=True)
    ogg = TARGET / f"{NAME}.ogg"
    aac = TARGET / f"{NAME}.m4a"

    if not ogg.exists():
        print(f"Ladataan alkuperäinen OGG: {NAME}")
        raw, _ = SAMPLES["fetch"](SAMPLES["OGG_BASE"] + NAME + ".ogg")
        if hashlib.sha256(raw).hexdigest() != OGG_SHA256:
            raise RuntimeError("Meta Steel Guitar F4: alkuperäisen OGG:n SHA-256 ei täsmää")
        ogg.write_bytes(raw)
    if sha256(ogg) != OGG_SHA256:
        raise RuntimeError("Meta Steel Guitar F4: repo-OGG:n SHA-256 ei täsmää")
    print(f"OGG SHA-256 OK: {OGG_SHA256}")

    if not aac.exists():
        if not shutil.which("ffmpeg") or not shutil.which("ffprobe"):
            raise RuntimeError("ffmpeg ja ffprobe tarvitaan AAC-LC:n tekemiseen")
        with tempfile.TemporaryDirectory(prefix="mk-f4-") as name:
            folder = Path(name)
            wav_file = folder / (NAME + ".wav")
            selected = list(SAMPLES["zip_members"](SAMPLES["WAV_ZIP"], [wav_file.name]))
            if len(selected) != 1 or selected[0][0] != wav_file.name:
                raise RuntimeError("Meta Steel Guitar: F4:n alkuperäinen WAV puuttuu")
            wav_file.write_bytes(selected[0][1])
            print(f"Alkuperäinen WAV SHA-256: {sha256(wav_file)}")
            rate, frames = SAMPLES["mono_float"](wav_file)
            if rate != 48000 or len(frames) < rate * 5:
                raise RuntimeError("Odotettiin vähintään viiden sekunnin 48 kHz:n F4-näytettä")
            frames = frames[:5 * rate]
            fade = int(.4 * rate)
            for index in range(fade):
                frames[len(frames) - fade + index] *= (fade - index) / fade
            data = struct.pack(f"<{len(frames)}f", *frames)
            fmt = struct.pack("<HHIIHH", 3, 1, rate, rate * 4, 4, 32)
            pcm = folder / "f4-mono.wav"
            pcm.write_bytes(
                b"RIFF" + struct.pack("<I", 36 + len(data)) + b"WAVEfmt "
                + struct.pack("<I", 16) + fmt
                + b"data" + struct.pack("<I", len(data)) + data
            )
            output = folder / (NAME + ".m4a")
            subprocess.run([
                "ffmpeg", "-hide_banner", "-loglevel", "error", "-nostdin", "-y",
                "-i", str(pcm), "-c:a", "aac", "-b:a", "96000",
                str(output),
            ], check=True)
            probe = subprocess.check_output([
                "ffprobe", "-v", "error", "-select_streams", "a:0",
                "-show_entries", "stream=codec_name,channels,sample_rate",
                "-of", "default=noprint_wrappers=1", str(output),
            ], text=True)
            if not all(entry in probe for entry in ("codec_name=aac", "channels=1", "sample_rate=48000")):
                raise RuntimeError(f"Virheellinen AAC-LC F4: {probe!r}")
            shutil.copyfile(output, aac)
    print(f"AAC SHA-256: {sha256(aac)}")
    print(f"F4 valmis: {ogg.name} ja {aac.name}")


if __name__ == "__main__":
    main()
