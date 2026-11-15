#!/usr/bin/env python3
"""Muodosta Oppimiskartan Kitaran perusteet -aiheen omat ääniesimerkit."""

import argparse
from array import array
from io import BytesIO
import math
from pathlib import Path
import sys
import wave


TARGET = Path(__file__).resolve().parents[2] / 'assets/audio/kitara'
RATE = 24000
BPM = 64
BEAT = round(RATE * 60 / BPM)
BAR = 4 * BEAT

# Tavalliset avoimet otteet alimmasta soivasta kielestä ylöspäin (MIDI-sävelet).
CHORDS = {
    'G': (43, 47, 50, 55, 59, 67),  # 320003
    'C': (48, 52, 55, 60, 64),      # x32010
    'D': (50, 57, 62, 66),          # xx0232
}


def chord_bar(notes):
    """Alaspäin pyyhkäisty ote tahdin ykkösellä, bassoäänestä alkaen."""
    samples = [0.0] * BAR
    level = 0.22 / math.sqrt(len(notes))
    for string, note in enumerate(notes):
        start = round(RATE * 0.014 * string)
        angle = math.tau * 440 * 2 ** ((note - 69) / 12) / RATE
        for index in range(start, BAR):
            offset = index - start
            seconds = offset / RATE
            attack = min(1, seconds / 0.008)
            release = min(1, (BAR - index) / (RATE * 0.08))
            phase = offset * angle
            tone = math.sin(phase) + math.exp(-3 * seconds) * (
                0.35 * math.sin(2 * phase) + 0.14 * math.sin(3 * phase)
            )
            samples[index] += level * attack * release * math.exp(-1.6 * seconds) * tone
    return samples


def with_pulse(samples):
    """Neljä tasavälistä merkkiääntä, ykkönen hieman korkeammalla."""
    marked = list(samples)
    for beat in range(4):
        frequency = 1440 if beat == 0 else 1030
        for tick in range(round(RATE * 0.055)):
            seconds = tick / RATE
            attack = min(1, seconds / 0.002)
            value = 0.18 * attack * math.exp(-115 * seconds) * math.sin(math.tau * frequency * seconds)
            marked[beat * BEAT + tick] += value
    return marked


def wav(bars):
    pcm = array('h', (round(sample * 32767) for bar in bars for sample in bar))
    if sys.byteorder == 'big':
        pcm.byteswap()
    buffer = BytesIO()
    with wave.open(buffer, 'wb') as output:
        output.setparams((1, 2, RATE, 0, 'NONE', 'not compressed'))
        output.writeframes(pcm.tobytes())
    return buffer.getvalue()


def examples():
    bars = {name: chord_bar(notes) for name, notes in CHORDS.items()}
    chart_bars = {name: with_pulse(samples) for name, samples in bars.items()}
    count_in = with_pulse([0.0] * BAR)
    chart = 'G C G C G C D G'.split()
    yield 'sointukartta.wav', wav([count_in, *(chart_bars[name] for name in chart)])
    opening = [bars[name] for name in 'GCD']
    yield 'lopetus-a.wav', wav([*opening, bars['G']])
    yield 'lopetus-b.wav', wav([*opening, bars['D']])


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--tarkista', action='store_true', help='vertaa äänitteitä kirjoittamatta tiedostoja')
    args = parser.parse_args()
    if not args.tarkista:
        TARGET.mkdir(parents=True, exist_ok=True)

    mismatches = []
    for name, data in examples():
        path = TARGET / name
        if not args.tarkista:
            path.write_bytes(data)
        elif not path.is_file() or path.read_bytes() != data:
            mismatches.append(name)
    if mismatches:
        print('Päivitä äänitiedostot komennolla python3 tools/aanet/kitara.py: ' + ', '.join(mismatches))
        return 1
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
