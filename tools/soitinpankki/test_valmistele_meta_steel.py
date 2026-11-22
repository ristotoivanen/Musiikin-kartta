"""#156: test WAV archive provenance gates and QA staging with synthetic audio."""
import json
import math
import struct
import tempfile
import unittest
import wave
import zipfile
from pathlib import Path
from unittest.mock import patch

import valmistele_meta_steel as app

WAV_NAME = "INSGuitarSteel_StringLowE_Vel02_E2_01.wav"
SAMPLE = {
    "string": 6, "midi": 40, "fret": 0, "layer": "Vel02",
    "sourceWav": WAV_NAME, "sourceOgg": WAV_NAME.replace(".wav", ".ogg"),
    "oggBytes": 12345, "oggSha256": "a" * 64
}


class ImporterTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name)
        catalog = {
            "schema": "musiikin-kartta-upstream-inventory-v1",
            "origin": {"commit": app.META_COMMIT, "tag": "meta-steel-guitar-v1.0.0"},
            "samples": [SAMPLE]
        }
        plan = {
            "sourceOnly": True, "bank": "meta-steel-guitar",
            "samples": [SAMPLE], "sourceOggBytes": 12345, "uniqueSamples": 1
        }
        self.catalog = self.root / "catalog.json"
        self.plan = self.root / "plan.json"
        self.catalog.write_text(json.dumps(catalog), encoding="utf-8")
        self.plan.write_text(json.dumps(plan), encoding="utf-8")

    def create_zip(self):
        wav = self.root / WAV_NAME
        with wave.open(str(wav), "wb") as stream:
            stream.setnchannels(2)
            stream.setsampwidth(2)
            stream.setframerate(48000)
            frames = bytearray()
            for i in range(48000):
                amplitude = (0 if i < 480 else
                             int(7000 * math.sin(2 * math.pi * 82.4 * i / 48000)))
                frames.extend(struct.pack("<hh", amplitude, amplitude))
            stream.writeframes(frames)
        archive = self.root / "synthetic.zip"
        with zipfile.ZipFile(archive, "w") as zf:
            zf.write(wav, arcname="release/wavs/" + WAV_NAME)
        return archive

    def test_plan_matches_pinned_inventory(self):
        samples, digest, origin = app.load_plan(self.plan, self.catalog)
        self.assertEqual(len(samples), 1)
        self.assertEqual(len(digest), 64)
        self.assertEqual(origin["commit"], app.META_COMMIT)
        invalid = json.loads(self.plan.read_text())
        invalid["samples"][0]["sourceWav"] = "other.wav"
        self.plan.write_text(json.dumps(invalid))
        with self.assertRaisesRegex(ValueError, "ei vastaa"):
            app.load_plan(self.plan, self.catalog)

    def test_archive_hash_mismatch_cannot_write_output(self):
        archive = self.create_zip()
        output = self.root / "result"
        with self.assertRaisesRegex(ValueError, "SHA-256"):
            app.render_subset(self.plan, archive, output, catalog_path=self.catalog)
        self.assertFalse(output.exists())

    def test_synthetic_wav_generates_both_formats_and_manifest(self):
        archive = self.create_zip()
        output = self.root / "result"
        # The production SHA is never bypassable through the CLI. Tests patch
        # only this module constant against an independently created synthetic ZIP.
        with patch.object(app, "PINNED_SHA", app.sha256_file(archive)):
            result = app.render_subset(self.plan, archive, output, seconds=2.0,
                                       catalog_path=self.catalog)
        self.assertEqual(result["status"], "staging-only")
        self.assertFalse(result["complete"])
        self.assertEqual(len(result["samples"]), 1)
        self.assertTrue((output / "manifest.json").is_file())
        for fmt, info in result["samples"][0]["files"].items():
            path = output / info["path"]
            self.assertTrue(path.is_file(), fmt)
            self.assertEqual(info["sha256"], app.sha256_file(path))
            self.assertGreater(info["bytes"], 500)
            self.assertGreaterEqual(info["onsetMs"], 0)
            self.assertLess(info["onsetMs"], 90)
        with patch.object(app, "PINNED_SHA", app.sha256_file(archive)):
            with self.assertRaisesRegex(ValueError, "jo olemassa"):
                app.render_subset(self.plan, archive, output,
                                  catalog_path=self.catalog)


if __name__ == "__main__":
    unittest.main()
