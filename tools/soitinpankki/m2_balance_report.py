#!/usr/bin/env python3
"""#160: Measure real source files at M0 30%, Steel 2.4x, B 55%.

Offline estimate of sample peaks/RMS after Web Audio gain envelopes.
No network access, no audio mutation, no claims about perceived loudness/SPL.
"""
import json
import math
import subprocess
from pathlib import Path
import numpy as np

RATE = 48000
BEAT = 60 / 72
ROOT = Path(__file__).resolve().parents[2]
ASSETS = ROOT / "assets"
M0_FILE = ASSETS / "audio/ensimmaiset-nelja-iskua/e2-freepats-fsbs-clean-bridge-alku-2s.wav"
STEEL_FILE = ASSETS / "soitinpankki/audio/steel-6-40.ogg"
BACKING_FILE = ASSETS / "audio/ensimmaiset-nelja-iskua/em-komppi-b-m3-hillitty-basso.wav"


def pcm(path):
    proc = subprocess.run(
        ["ffmpeg", "-hide_banner", "-loglevel", "error", "-i", str(path),
         "-ar", str(RATE), "-ac", "2", "-f", "f32le", "pipe:1"],
        capture_output=True, check=True,
    )
    arr = np.frombuffer(proc.stdout, dtype="<f4")
    if arr.size < 1024 or arr.size % 2:
        raise RuntimeError("Virheellinen äänitiedosto: " + str(path))
    return arr.reshape(-1, 2).copy()


def schedule(target, sample, start, end, fade_start, amplitude, attack=.0):
    a = int(round(start * RATE))
    b = min(len(target), int(round(end * RATE)))
    if a < 0 or b <= a:
        raise ValueError("Invalid sample scheduling interval")
    n = min(b - a, len(sample))
    t = start + np.arange(n, dtype=np.float64) / RATE
    env = np.ones(n, dtype=np.float32)
    if attack:
        env *= np.clip((t - start) / attack, 0, 1).astype(np.float32)
    if end > fade_start:
        env *= np.clip((end - t) / (end - fade_start), 0, 1).astype(np.float32)
    target[a:a + n] += sample[:n] * (env * amplitude)[:, None]


def stats(signal):
    peak = float(np.max(np.abs(signal)))
    rms = float(np.sqrt(np.mean(np.square(signal.astype(np.float64)))))
    def db(v):
        return round(20 * math.log10(v), 2) if v > 1.e-12 else -240.0
    return {"peak_dbfs": db(peak), "rms_dbfs": db(rms),
            "peak_linear": round(peak, 7), "rms_linear": round(rms, 7)}


def section(signal, start, seconds=.5):
    return signal[round(start * RATE):round((start + seconds) * RATE)]


def main():
    m0 = pcm(M0_FILE)
    steel = pcm(STEEL_FILE)
    backing = pcm(BACKING_FILE)
    m0_level, steel_level, backing_level = .30, 2.4, .55
    m0g = np.zeros((round((20 * BEAT + .25) * RATE), 2), np.float32)
    m2g = np.zeros((round((36 * BEAT + .25) * RATE), 2), np.float32)
    m2b = np.zeros_like(m2g)
    m2b[:min(len(backing),len(m2b))] = backing[:len(m2b)] * backing_level
    for cy in range(2):
        for beat in range(4):
            start = (4 + cy * 8 + beat) * BEAT
            schedule(m0g, m0, start, start + BEAT + .15,
                     start + BEAT, .85 * m0_level, attack=.005)
    for cy in range(4):
        for beat in range(4):
            t = (4 + cy * 8 + beat) * BEAT
            last = beat == 3
            end = t + BEAT + (.15 if last else 0)
            fade = t + BEAT if last else end - .006
            schedule(m2g, steel, t - .005, end, fade, .76221 * steel_level)
    total = m2g + m2b
    attack = 4 * BEAT + .02
    measurements = {
      "provenance": {
        "m0_file": str(M0_FILE.relative_to(ROOT)),
        "steel_file": str(STEEL_FILE.relative_to(ROOT)),
        "backing_file": str(BACKING_FILE.relative_to(ROOT)),
        "source_rms": {"m0": stats(m0), "steel": stats(steel), "B": stats(backing)},
      },
      "levels": {"M0_guitar_slider": m0_level,
                 "M0_effective_gain": .85 * m0_level,
                 "M2_Steel_slider": steel_level,
                 "M2_effective_gain": .76221 * steel_level,
                 "M2_B_slider": backing_level},
      "first_guitar_note_500ms": {
        "M0": stats(section(m0g, attack)),
        "M2_Steel": stats(section(m2g, attack)),
        "M2_B": stats(section(m2b, attack)),
        "M2_mix": stats(section(total, attack))},
      "whole_exercise": {
        "M0": stats(m0g), "M2_Steel": stats(m2g),
        "M2_B": stats(m2b), "M2_mix": stats(total),
        "M2_over_0dBFS_frames": int(np.count_nonzero(np.any(np.abs(total) > 1, axis=1)))},
      "notes": [
        "Web Audio -ajoituksen offline-estimaatti. M2:n Steel onset korjattu 5 ms.",
        "Ei kuulokkeiden SPL-/kuuluvuusmittaus, ei LUFS, ei selaimen audiopolun mittaus.",
        "M0:n klikki ei sisälly M0-kitaran tasoon.",
        "Epälineaarinen laiterajoitus ja käyttäjän toiston aikana liikuttama säädin eivät sisälly."
      ]
    }
    print(json.dumps(measurements, ensure_ascii=False, indent=2))
    if stats(total)["peak_linear"] > 1.0:
        print("HUOMIO: M2-yhteissignaalin sample peak ylittää 0 dBFS, "
              "digitaalisen yliohjauksen riski.", flush=True)


if __name__ == "__main__":
    main()
