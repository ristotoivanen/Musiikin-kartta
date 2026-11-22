#!/usr/bin/env python3
"""Hae A/Am-parin kaksi alkuperäistä Meta Steel Guitar Vel02 -ääninäytettä.

OGG:t tulevat kiinnitetystä Meta-commitista tarkistettuine SHA-256-arvoineen.
AAC-LC tehdään lähteen 24-bit WAV:stä, ei OGG:stä eikä transponoinnilla.
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
TARGET = ROOT / "assets/audio/soinnut"
SOURCE = runpy.run_path(str(ROOT / "tools/aanet/soinnut-naytteet.py"))
NAMES = {
    "INSGuitarSteel_StringA_Vel02_A2_01": "b60289b81de9f65d5c9c4653d9e76286413bcb0fd8283f62a25a05b574b24d23",
    "INSGuitarSteel_StringB_Vel02_Cs4_01": "de860fe8ff370cf8161b7d43882fec955b67c8bb19d360d7f341c574217fd0a2",
}


def sha(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def convert(name: str, wav: bytes, temp: Path) -> Path:
    orig = temp / (name + ".wav")
    orig.write_bytes(wav)
    rate, frames = SOURCE["mono_float"](orig)
    if rate != 48000 or len(frames) < 5 * rate:
        raise RuntimeError(name + ": odotettiin 48 kHz ja vähintään 5 s")
    frames = frames[:5 * rate]
    fade = int(.4 * rate)
    for i in range(fade):
        frames[len(frames) - fade + i] *= (fade - i) / fade
    data = struct.pack(f"<{len(frames)}f", *frames)
    fmt = struct.pack("<HHIIHH", 3, 1, rate, rate * 4, 4, 32)
    pcm = temp / (name + ".mono.wav")
    pcm.write_bytes(
        b"RIFF" + struct.pack("<I", 36 + len(data)) + b"WAVEfmt "
        + struct.pack("<I", 16) + fmt + b"data"
        + struct.pack("<I", len(data)) + data
    )
    dest = temp / (name + ".m4a")
    subprocess.run([
        "ffmpeg", "-hide_banner", "-loglevel", "error", "-nostdin", "-y",
        "-i", str(pcm), "-c:a", "aac", "-b:a", "96000", str(dest)
    ], check=True)
    return dest


def check_aac(path: Path) -> None:
    probe = subprocess.check_output([
        "ffprobe", "-v", "error", "-select_streams", "a:0",
        "-show_entries", "stream=codec_name,channels,sample_rate,duration",
        "-of", "default=noprint_wrappers=1", str(path)
    ], text=True)
    fields = dict(line.split("=", 1) for line in probe.splitlines() if "=" in line)
    if (fields.get("codec_name") != "aac" or fields.get("channels") != "1"
            or fields.get("sample_rate") != "48000"
            or not 4.9 <= float(fields.get("duration", "0")) <= 5.1):
        raise RuntimeError(f"{path.name}: AAC-muoto, kanavat, taajuus tai kesto virheellinen: {probe}")


def main() -> None:
    TARGET.mkdir(parents=True, exist_ok=True)
    for name, expected in NAMES.items():
        path = TARGET / (name + ".ogg")
        if not path.is_file():
            raw, _ = SOURCE["fetch"](SOURCE["OGG_BASE"] + path.name)
            if sha(raw) != expected:
                raise RuntimeError(name + ": Meta-OGG:n SHA-256 ei täsmää")
            path.write_bytes(raw)
        if sha(path.read_bytes()) != expected:
            raise RuntimeError(name + ": repon OGG ei vastaa lähdettä")
        print(f"{path.name}: alkuperäinen OGG SHA-256 OK")

    missing = [n for n in NAMES if not (TARGET / (n + ".m4a")).is_file()]
    if missing:
        if not (shutil.which("ffmpeg") and shutil.which("ffprobe")):
            raise RuntimeError("ffmpeg ja ffprobe tarvitaan")
        with tempfile.TemporaryDirectory(prefix="mk-a-am-") as directory:
            temp = Path(directory)
            for filename, raw in SOURCE["zip_members"](
                SOURCE["WAV_ZIP"], [n + ".wav" for n in missing]
            ):
                name = filename[:-4]
                print(f"{filename}: WAV-arkiston CRC32 OK, SHA-256 {sha(raw)}")
                result = convert(name, raw, temp)
                check_aac(result)
                shutil.copyfile(result, TARGET / (name + ".m4a"))

    for name in NAMES:
        path = TARGET / (name + ".m4a")
        check_aac(path)
        print(f"{path.name}: AAC-LC, mono 48 kHz, SHA-256 {sha(path.read_bytes())}")


if __name__ == "__main__":
    main()
