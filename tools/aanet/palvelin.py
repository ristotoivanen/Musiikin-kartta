"""Paikallinen palvelin kirjan ääniesimerkkien renderöintiin.

Käynnistä repon juuresta:  python3 tools/aanet/palvelin.py
ja avaa http://127.0.0.1:8766/tools/aanet/

Palvelin jakaa repon tiedostot ja tallentaa generaattorin lähettämät WAV-tiedostot
kansioon assets/audio. Jokaisesta tehdään macOS:n afconvert-työkalulla AAC-versio (.m4a)
sekä kevyt mono-WAV varalle.
"""
import http.server
import re
import shutil
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
AUDIO = ROOT / 'assets' / 'audio'
TARGET = re.compile(r'^/tallenna/(osa-\d{1,2})/([a-z0-9-]+)\.wav$')


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def do_PUT(self):
        match = TARGET.match(self.path)
        length = int(self.headers.get('Content-Length', 0))
        if not match or not 0 < length < 100_000_000:
            self.send_error(400, 'Odotettiin /tallenna/osa-N/nimi.wav')
            return
        folder, name = match.groups()
        target = AUDIO / folder
        target.mkdir(parents=True, exist_ok=True)
        with tempfile.TemporaryDirectory() as work:
            source = Path(work) / 'lahde.wav'
            source.write_bytes(self.rfile.read(length))
            subprocess.run(['afconvert', '-f', 'm4af', '-d', 'aac', '-b', '128000', '-q', '127',
                            str(source), str(target / f'{name}.m4a')], check=True)
            fallback = Path(work) / 'varalla.wav'
            subprocess.run(['afconvert', '-f', 'WAVE', '-d', 'LEI16@24000', '-c', '1',
                            str(source), str(fallback)], check=True)
            shutil.move(str(fallback), target / f'{name}.wav')
        self.send_response(204)
        self.end_headers()


if __name__ == '__main__':
    server = http.server.ThreadingHTTPServer(('127.0.0.1', 8766), Handler)
    print('Avaa http://127.0.0.1:8766/tools/aanet/')
    server.serve_forever()
