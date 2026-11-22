#!/usr/bin/env python3
"""Meta Steel #156: convert selected, pinned WAV sources to QA-only OGG/AAC.

No network access. Never writes into an existing output folder.
Requires the reviewed Node sample plan, Meta's original v1.0.0 WAV ZIP,
and FFmpeg with libvorbis and AAC encoders. All audio remains staging-only.
"""
import argparse
import hashlib
import json
import math
import shutil
import struct
import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path

PINNED_SHA = "caaa8a9c07217f4a82d1dfd9f5657c286155464b66bf4dd27797811c2558a909"
META_COMMIT = "514c926efecdb3c7812bf00eedf8e5c8d61dd681"
CATALOG_PATH = Path(__file__).resolve().parents[2] / "assets/soitinpankki/meta-steel-inventory-v1.json"
MAX_DEFAULT_SAMPLES = 48


def sha256_file(path):
    digest = hashlib.sha256()
    with open(path, "rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def load_plan(plan_path, catalog_path=CATALOG_PATH):
    catalog_bytes = Path(catalog_path).read_bytes()
    catalog = json.loads(catalog_bytes)
    plan = json.loads(Path(plan_path).read_text("utf-8"))
    if (catalog.get("schema") != "musiikin-kartta-upstream-inventory-v1"
            or catalog.get("origin", {}).get("commit") != META_COMMIT):
        raise ValueError("Lähdekatalogin versio tai lukittu Meta-commit ei täsmää.")
    if (plan.get("sourceOnly") is not True or plan.get("bank") != "meta-steel-guitar"
            or not isinstance(plan.get("samples"), list)):
        raise ValueError("Anna lähdekatalogiin perustuva valintasuunnitelma.")
    inventory = {(x["string"], x["midi"], x["layer"]): x for x in catalog["samples"]}
    samples = plan["samples"]
    if not samples or len(samples) != len({
        (x.get("string"), x.get("midi"), x.get("layer")) for x in samples
    }):
        raise ValueError("Näytejoukko on tyhjä tai sisältää kaksoiskappaleita.")
    for selected in samples:
        key = (selected.get("string"), selected.get("midi"), selected.get("layer"))
        if selected != inventory.get(key):
            raise ValueError(f"Näyte ei vastaa lukittua lähdekatalogia: {key}")
    expected_bytes = sum(x["oggBytes"] for x in samples)
    if (plan.get("sourceOggBytes") != expected_bytes
            or plan.get("uniqueSamples") != len(samples)):
        raise ValueError("Suunnitelman tavubudjetti tai näytemäärä on virheellinen.")
    return samples, hashlib.sha256(catalog_bytes).hexdigest(), catalog["origin"]


def ffmpeg_version(executable):
    result = subprocess.run([executable, "-version"], capture_output=True,
                            text=True, check=True)
    return result.stdout.splitlines()[0]


def convert(executable, source, destination, audio_filter, format_name):
    common = [executable, "-hide_banner", "-loglevel", "error", "-nostdin", "-y",
              "-i", str(source), "-map_metadata", "-1", "-vn", "-af", audio_filter,
              "-ar", "48000"]
    if format_name == "ogg":
        command = common + ["-c:a", "libvorbis", "-q:a", "4", str(destination)]
    elif format_name == "m4a":
        command = common + ["-c:a", "aac", "-b:a", "96k",
                            "-movflags", "+faststart", str(destination)]
    else:
        raise ValueError("Tuntematon jakelumuoto.")
    subprocess.run(command, check=True, capture_output=True)


def onset_ms(executable, file):
    command = [executable, "-hide_banner", "-loglevel", "error", "-nostdin",
               "-i", str(file), "-t", "1", "-ac", "1", "-ar", "48000",
               "-f", "f32le", "pipe:1"]
    payload = subprocess.run(command, capture_output=True, check=True).stdout
    count = len(payload) // 4
    if count < 96:
        raise ValueError(f"Liian lyhyt audionäyte: {file}")
    floats = (x[0] for x in struct.iter_unpack("<f", payload[:count * 4]))
    blocks = []
    for _ in range(count // 48):
        values = [next(floats) for _ in range(48)]
        blocks.append(math.sqrt(sum(x * x for x in values) / 48))
    peak = max(blocks)
    if not math.isfinite(peak) or peak < 1e-10:
        raise ValueError(f"Hiljainen tai virheellinen audionäyte: {file}")
    threshold = peak * 0.04
    for i in range(len(blocks) - 1):
        if blocks[i] >= threshold and blocks[i + 1] >= threshold:
            return i
    raise ValueError(f"Äänen alkua ei löydy: {file}")


def extract_wav(zf, filename, output):
    # Never extract archive paths directly (ZIP-slip protection).
    members = [name for name in zf.namelist()
               if not name.endswith("/") and Path(name).name == filename]
    if len(members) != 1:
        raise ValueError(
            f"Arkistosta puuttuu yksikäsitteinen WAV {filename}: {len(members)} osumaa")
    with zf.open(members[0]) as source, open(output, "wb") as target:
        shutil.copyfileobj(source, target)
    return sha256_file(output)


def render_subset(plan_path, archive, destination, *, seconds=5.0,
                  executable="ffmpeg", allow_large=False, catalog_path=CATALOG_PATH):
    samples, catalog_sha, origin = load_plan(plan_path, catalog_path)
    if len(samples) > MAX_DEFAULT_SAMPLES and not allow_large:
        raise ValueError(
            f"Valittu {len(samples)} ääntä. Turvallinen oletusraja on "
            f"{MAX_DEFAULT_SAMPLES} (erillinen --allow-large-batch vaaditaan).")
    if not math.isfinite(seconds) or not 1 <= seconds <= 15:
        raise ValueError("Näytepituuden on oltava 1–15 sekuntia.")
    archive = Path(archive)
    destination = Path(destination)
    if destination.exists():
        raise ValueError(f"Kohdekansio on jo olemassa: {destination}")
    if not archive.is_file():
        raise ValueError(f"Lähde-WAV-arkistoa ei löytynyt: {archive}")
    archive_sha = sha256_file(archive)
    if archive_sha != PINNED_SHA:
        raise ValueError("WAV-julkaisuarkiston SHA-256 ei täsmää Meta v1.0.0 -julkaisuun.")
    version = ffmpeg_version(executable)
    audio_filter = (
        f"pan=mono|c0=0.5*c0+0.5*c1,atrim=end={seconds:g},"
        f"afade=t=out:st={max(0, seconds-0.4):g}:d=0.4"
    )
    destination.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(
        prefix="meta-steel-stage-", dir=destination.parent
    ) as temp:
        scratch = Path(temp)
        audio = scratch / "audio"
        audio.mkdir()
        records = []
        with zipfile.ZipFile(archive) as zf:
            for entry in samples:
                wav = scratch / entry["sourceWav"]
                source_sha = extract_wav(zf, entry["sourceWav"], wav)
                files = {}
                for fmt in ("ogg", "m4a"):
                    name = (f"steel-{entry['string']}-{entry['midi']}-"
                            f"{entry['layer'].lower()}.{fmt}")
                    target = audio / name
                    convert(executable, wav, target, audio_filter, fmt)
                    files[fmt] = {
                        "path": "audio/" + name, "bytes": target.stat().st_size,
                        "sha256": sha256_file(target), "onsetMs": onset_ms(executable, target)
                    }
                wav.unlink()
                records.append({
                    "string": entry["string"], "midi": entry["midi"],
                    "layer": entry["layer"],
                    "pitch": entry["sourceWav"].split("_")[-2],
                    "originalMidi": entry["midi"], "sourceFile": entry["sourceWav"],
                    "sourceSha256": source_sha, "playbackSemitones": 0, "files": files
                })
        manifest = {
            "schema": "musiikin-kartta-instrument-bank-v1",
            "id": "meta-steel-guitar", "instrument": "steel-acoustic-guitar",
            "status": "staging-only", "complete": False,
            "availableLayers": sorted({x["layer"] for x in records}),
            "origin": {
                "publisher": "Meta Creative Audio / facebookincubator",
                "version": origin["tag"], "commit": origin["commit"],
                "license": "CC0-1.0", "archiveSha256": archive_sha,
                "sourceCatalogSha256": catalog_sha
            },
            "referenceGain": 0.76221,
            "conversion": {
                "ffmpeg": version, "audioFilter": audio_filter,
                "formats": {"ogg": "libvorbis q4", "m4a": "AAC 96k faststart"},
                "warning": "QA staging only. Fading, dynamics and sustain not approved."
            },
            "samples": records
        }
        (scratch / "manifest.json").write_text(
            json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        (scratch / "NOT-FOR-BETA.txt").write_text(
            "#156 QA-näytteet. Ei hyväksytty julkaistavaksi.\n", encoding="utf-8")
        scratch.rename(destination)
    return manifest


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--plan", type=Path, required=True,
                        help="plan-meta-steel.mjs:n JSON-tuloste")
    parser.add_argument("--archive", type=Path,
                        help="Meta v1.0.0:n alkuperäinen WAV-julkaisuarkisto")
    parser.add_argument("--out", type=Path, help="UUSI, aiemmin olematon QA-kansio")
    parser.add_argument("--seconds", type=float, default=5.0)
    parser.add_argument("--ffmpeg", default="ffmpeg")
    parser.add_argument("--allow-large-batch", action="store_true")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args(argv)
    samples, catalog_sha, _ = load_plan(args.plan)
    if args.dry_run:
        print(json.dumps({
            "sourceOnly": True, "selected": len(samples),
            "sourceCatalogSha256": catalog_sha,
            "sourceOggBytes": sum(s["oggBytes"] for s in samples),
            "sourceWavs": [s["sourceWav"] for s in samples]
        }, ensure_ascii=False, indent=2))
        return 0
    if not args.archive or not args.out:
        parser.error("Renderöintiin tarvitaan --archive ja --out.")
    manifest = render_subset(
        args.plan, args.archive, args.out, seconds=args.seconds,
        executable=args.ffmpeg, allow_large=args.allow_large_batch
    )
    print(json.dumps({
        "status": "staging-only", "out": str(args.out),
        "samples": len(manifest["samples"])
    }, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    sys.exit(main())
