#!/usr/bin/env python3
"""Soinnut ja harmonia -harjoitusten kitaranäytteet (assets/audio/soinnut/, #116).

Lähde: Meta Open Sound · Meta Steel Guitar, CC0 1.0 (ks. assets/audio/soinnut/LAHTEET.md).

    python3 tools/aanet/soinnut-naytteet.py nouda KANSIO   hae OGG:t ja alkuperäiset WAV:t
    python3 tools/aanet/soinnut-naytteet.py muunna KANSIO  tee WAV:eista AAC-LC/M4A (macOS afconvert)
    python3 tools/aanet/soinnut-naytteet.py tarkista       tarkista assets/audio/soinnut/-tiedostot

OGG:t haetaan kiinnitetystä commitista ja tarkistetaan lähteen SHA256SUMS-arvoilla. WAV:t poimitaan
julkaisun meta-steel-guitar-v1.0.0 WAV-paketista HTTP Range -pyynnöillä (koko 663 Mt:n pakettia ei
ladata); ZIP:n CRC32 ja paketin oma SHA256SUMS tarkistetaan. AAC-muunnos: stereo summataan monoksi,
alku säilyy koskemattomana, tiedosto rajataan 5,0 sekuntiin ja viimeiset 0,4 s häivytetään
(harjoitukset soittavat näytteestä enintään noin 3,9 s). Kooderi: afconvert -d aac -b 96000.
"""
import array
import hashlib
import struct
import subprocess
import sys
import urllib.request
import wave
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
TARGET = ROOT / 'assets' / 'audio' / 'soinnut'
OGG_BASE = ('https://raw.githubusercontent.com/facebookincubator/Meta-open-sound/'
            '514c926efecdb3c7812bf00eedf8e5c8d61dd681/systems/instruments/meta-steel-guitar/ogg/')
WAV_ZIP = ('https://github.com/facebookincubator/Meta-open-sound/releases/download/'
           'meta-steel-guitar-v1.0.0/meta-open-sound-meta-steel-guitar-wav.zip')
NAMES = ['INSGuitarSteel_StringLowE_Vel02_G2_01', 'INSGuitarSteel_StringA_Vel02_B2_01',
         'INSGuitarSteel_StringD_Vel02_D3_01', 'INSGuitarSteel_StringG_Vel02_G3_01',
         'INSGuitarSteel_StringB_Vel02_B3_01', 'INSGuitarSteel_StringHighE_Vel02_G4_01']
# Ydinopinnot v0.5:n lisänäytteet, sama pankki ja velocity-kerros kuin G-pilotissa.
NAMES += [
    'INSGuitarSteel_StringA_Vel02_C3_01',
    'INSGuitarSteel_StringB_Vel02_C4_01',
    'INSGuitarSteel_StringB_Vel02_D4_01',
    'INSGuitarSteel_StringD_Vel02_D4_01',
    'INSGuitarSteel_StringD_Vel02_E3_01',
    'INSGuitarSteel_StringG_Vel02_A3_01',
    'INSGuitarSteel_StringG_Vel02_Gs3_01',
    'INSGuitarSteel_StringHighE_Vel02_E4_01',
    'INSGuitarSteel_StringHighE_Vel02_F4_01',
    'INSGuitarSteel_StringHighE_Vel02_Fs4_01',
    'INSGuitarSteel_StringLowE_Vel02_E2_01',
]
# Lähteen SHA256SUMS-tiedostoista (OGG: commit 514c926; WAV: julkaisun WAV-paketti).
SHA256 = {
    'INSGuitarSteel_StringLowE_Vel02_G2_01.ogg': 'c641ff5f3b777fac567abce68645aeaaa984ddc8eb37cbdda87faad1895270c4',
    'INSGuitarSteel_StringA_Vel02_B2_01.ogg': '092541f3135e2d32423135e41cd0d7ed7e2f41d3c307d583deae5659a5b3f999',
    'INSGuitarSteel_StringD_Vel02_D3_01.ogg': 'e7a377f4dca632ea11c0faca9b52b1463f7e9ff1325bd3643198774e08d1935b',
    'INSGuitarSteel_StringG_Vel02_G3_01.ogg': '5a32cb4e292aaa759c90fdaf922f5512558ff1f89bfd3574477f0f72795a24f8',
    'INSGuitarSteel_StringB_Vel02_B3_01.ogg': '3ab0cd1d96a456d6f62f5845c646e4516991c6882b4706e1a2fcdf919f27e8f0',
    'INSGuitarSteel_StringHighE_Vel02_G4_01.ogg': 'b7119ffb46550e15e0fb3c358f4a8159addfd38810e6e17a4705c5e85ad56811',
    'INSGuitarSteel_StringLowE_Vel02_G2_01.wav': 'ca08e222c62b3c16624c14ff61007a9609a20bca0bbdb8111401dfe53ba3ba4a',
    'INSGuitarSteel_StringA_Vel02_B2_01.wav': 'a055ae9c312749f4084756f33509f9a0f255e9d0806f30f4f72d7d8ea689f903',
    'INSGuitarSteel_StringD_Vel02_D3_01.wav': 'a45b53560d1c8d479df82ebc2f20b9c1e1f69103f14fb03c409a044d7855e925',
    'INSGuitarSteel_StringG_Vel02_G3_01.wav': '57542b61014c441cd5d19ae1c4b650a249d058d0eeb7464ecc30ac9b3e8888c7',
    'INSGuitarSteel_StringB_Vel02_B3_01.wav': '30a02c88db3b6dad6dda228cda50c4492668baf7bb4710476ea9ec1542f44789',
    'INSGuitarSteel_StringHighE_Vel02_G4_01.wav': '359b4e50c74af184de5b95d9639a7f84eb69efd82be2ece0b762e4d49f57ef34',
}
SHA256.update({
    'INSGuitarSteel_StringA_Vel02_C3_01.ogg': 'ac74e2a3ebfedf276a45881f8b16d6deaa35fe50d9db8fa5e9b496423dfb7b68',
    'INSGuitarSteel_StringB_Vel02_C4_01.ogg': '7412c3882dd78b16d01e3a643f52dd6f4caae8bdf2b8b49b22303ab78db662fb',
    'INSGuitarSteel_StringB_Vel02_D4_01.ogg': '60dc643394427f0166241e2fcba86e376310a80d8b5cb302dca03b64293549c7',
    'INSGuitarSteel_StringD_Vel02_D4_01.ogg': 'a888e57febc586ea12c6e15a05edf69df25fa54c3a796290652cfce04a0f263e',
    'INSGuitarSteel_StringD_Vel02_E3_01.ogg': '178f93e98874890e57261630a693e15a7d47102d8b8f12f7f484a4d535d71342',
    'INSGuitarSteel_StringG_Vel02_A3_01.ogg': '8d3032d6f2fe865ea30cdb2e154cc070c792547a8338ab144b7837d8924908a1',
    'INSGuitarSteel_StringG_Vel02_Gs3_01.ogg': '8ebd058a7d7cd3dc4af2882d277a23228572ca3a361596c4d11086d1dbabf26d',
    'INSGuitarSteel_StringHighE_Vel02_E4_01.ogg': '24fcdefc6b57e131677cc2af9e5055d07a093470e687c9ba03569b4471d0428a',
    'INSGuitarSteel_StringHighE_Vel02_F4_01.ogg': '79fc96bcdea8c49147bc561c2109b030fcbdf40ffe698e098525eaa3c586516d',
    'INSGuitarSteel_StringHighE_Vel02_Fs4_01.ogg': '47cfd12ccdaeafa4b3a85f3ada6e48a8d70dc2c3f9ff3e63e13e26849f5119ec',
    'INSGuitarSteel_StringLowE_Vel02_E2_01.ogg': '07643f0430551e6cbba6c9884c0ca8a1ea2f7f23e3daa12fa141d9476d84fd6d',
    'INSGuitarSteel_StringA_Vel02_C3_01.wav': 'bcf10e28cbae32e8754bf373d242365ec233ff2267a3afaa309b6e3d3f62bff1',
    'INSGuitarSteel_StringB_Vel02_C4_01.wav': '506224350316123aa38dd9a314d1e010865be65c6a504d6f313f3d06c1ff5a40',
    'INSGuitarSteel_StringB_Vel02_D4_01.wav': '8191735e8a59d2fbfd150f8e4a78097a0aa3276dce7947522fa7c30db7e20a14',
    'INSGuitarSteel_StringD_Vel02_D4_01.wav': '2b2e19d894032bf00aa2037a465870ca846807bdad7560e85a4e916b8a4d6862',
    'INSGuitarSteel_StringD_Vel02_E3_01.wav': '9d6ff7988196f01cf777f6238479b38f87d7e5100f06d599103e10d898a4e3d5',
    'INSGuitarSteel_StringG_Vel02_A3_01.wav': 'e3518b8f31330a854cdb863b5a795901fe2c41998b22c2941271086298eb2e2f',
    'INSGuitarSteel_StringG_Vel02_Gs3_01.wav': 'e70265a3a35d1e5305c68720f650034089ecb29b3fcb917326247b6594981110',
    'INSGuitarSteel_StringHighE_Vel02_E4_01.wav': '1a2411d8014c231be61d1b651e7e1416d069ec62426fa6398af29db824fbd143',
    'INSGuitarSteel_StringHighE_Vel02_F4_01.wav': 'c1dc99e1bdac5423344087db1052077ccb8d175229d8d83420153be3bb8082b4',
    'INSGuitarSteel_StringHighE_Vel02_Fs4_01.wav': '893bcb1a5f547da6d5256190560bf6670e43c638cfe487aacbca6bb1c638c01b',
    'INSGuitarSteel_StringLowE_Vel02_E2_01.wav': '31be9f8e68f541dca017ad0ef3ed3476112b9266f9db4e356c02d9d96a2f312d',
})
# Repoon tallennettujen AAC-versioiden tiedostotarkisteet. Uusi koodaus voi vaihtaa säiliön aikaleimoja.
SHA256.update({
    'INSGuitarSteel_StringA_Vel02_B2_01.m4a': 'bb328eda8e4e8b23cc237afc877111d758fe59b35ef6ba7ed7450ae8f54f5c9c',
    'INSGuitarSteel_StringA_Vel02_C3_01.m4a': '4ab72220b3ee330399c3cdda9294ff7d2e5a358a5ad53a0f3d0290161ffd8623',
    'INSGuitarSteel_StringB_Vel02_B3_01.m4a': 'f6431c80195db5c9958e0a3dae46762c2863d7f85151fada2a8b8353005a2013',
    'INSGuitarSteel_StringB_Vel02_C4_01.m4a': '4db52e7c3691e68f436d4abae5d29c115b822a173573e448c3a7c4fc367e03b2',
    'INSGuitarSteel_StringB_Vel02_D4_01.m4a': 'bd657a1ad00b672b288f1861872b4c538aa4e2fb547a29a46b053d4b2035153c',
    'INSGuitarSteel_StringD_Vel02_D3_01.m4a': 'ebd3a048c36a8849461b93c8e34c5ce994fabe4f46deadb0b60007f6485fb826',
    'INSGuitarSteel_StringD_Vel02_D4_01.m4a': 'be1675227181a6ffa6bcaaa340026b0729b891cf6b595a0d844458d8de9203e6',
    'INSGuitarSteel_StringD_Vel02_E3_01.m4a': '5d0c0dd7d5a6ced432dc7042843c49a316e7f2c767499192db3d80f0d39861d6',
    'INSGuitarSteel_StringG_Vel02_A3_01.m4a': 'b15bb53e4c07520fb06dfe563c4cb1de482420f20c76f7e82bbc9d7d0a1783fd',
    'INSGuitarSteel_StringG_Vel02_G3_01.m4a': '8d41455e246ec17d011d36080d85173d53e91494244fa406d69c1bcefb3e2480',
    'INSGuitarSteel_StringG_Vel02_Gs3_01.m4a': 'ed9aa5e747521b21c4eb522f75979d918f89953bff26665d1cf7b395eaf26f02',
    'INSGuitarSteel_StringHighE_Vel02_E4_01.m4a': 'e8ca0f94d08ed2510baea170b5e994b637fe4aa4a53f14901083d7aa50ac85ba',
    'INSGuitarSteel_StringHighE_Vel02_F4_01.m4a': '35e538b2e87d653e8806663a5dfd42f51370672f0cdd548c0853c4e190ff0cd0',
    'INSGuitarSteel_StringHighE_Vel02_Fs4_01.m4a': '41919a20fc3cf2e3ff0360a43955a9a01c4166ce7087a1cf479077b940b04a17',
    'INSGuitarSteel_StringHighE_Vel02_G4_01.m4a': '4a0534319c04ec2009462a78ab2f8e9a0624abf325526610bd3adc3a835b0815',
    'INSGuitarSteel_StringLowE_Vel02_E2_01.m4a': 'cbf397f7997a576f47ed420808605cc97c21fd648ec3ad4c7792af676ffe22cb',
    'INSGuitarSteel_StringLowE_Vel02_G2_01.m4a': 'cd4b172e76e8bcb2ca087c0bb1259b56f0a61e9628111b32887b710b1a4dd4d3',
})
LENGTH, FADE = 5.0, 0.4


def sha256(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()


def fetch(url, start=None, end=None):
    headers = {'User-Agent': 'musiikin-kartta-aanet'}
    if start is not None:
        headers['Range'] = f'bytes={start}-{"" if end is None else end}'
    with urllib.request.urlopen(urllib.request.Request(url, headers=headers)) as response:
        if start is not None and response.status != 206:
            raise SystemExit(f'Palvelin ei tue Range-pyyntöä ({response.status})')
        total = response.headers.get('Content-Range', '').rsplit('/', 1)[-1]
        return response.read(), int(total) if total.isdigit() else None


def zip_members(url, wanted):
    """Poimi ZIP-paketista nimetyt tiedostot lataamatta koko pakettia."""
    _, total = fetch(url, 0, 0)
    tail_len = min(total, 1 << 20)
    tail, _ = fetch(url, total - tail_len, total - 1)
    eocd = tail.rfind(b'PK\x05\x06')
    entries, cd_size, cd_offset = struct.unpack('<HII', tail[eocd + 10:eocd + 20])
    if 0xFFFFFFFF in (cd_size, cd_offset) or entries == 0xFFFF:
        locator = tail.rfind(b'PK\x06\x07')
        z64 = struct.unpack('<Q', tail[locator + 8:locator + 16])[0] - (total - tail_len)
        entries, cd_size, cd_offset = struct.unpack('<QQQ', tail[z64 + 32:z64 + 56])
    directory, _ = fetch(url, cd_offset, cd_offset + cd_size - 1)
    position, found = 0, {}
    for _ in range(entries):
        fields = struct.unpack('<IHHHHHHIIIHHHHHII', directory[position:position + 46])
        method, crc, csize, usize = fields[4], fields[7], fields[8], fields[9]
        name_len, extra_len, comment_len, offset = fields[10], fields[11], fields[12], fields[16]
        name = directory[position + 46:position + 46 + name_len].decode()
        extra = directory[position + 46 + name_len:position + 46 + name_len + extra_len]
        if 0xFFFFFFFF in (csize, usize, offset):
            i = 0
            while i < len(extra):
                header, size = struct.unpack('<HH', extra[i:i + 4])
                if header == 1:
                    values = list(struct.unpack('<' + 'Q' * (size // 8), extra[i + 4:i + 4 + size]))
                    usize = values.pop(0) if usize == 0xFFFFFFFF else usize
                    csize = values.pop(0) if csize == 0xFFFFFFFF else csize
                    offset = values.pop(0) if offset == 0xFFFFFFFF else offset
                i += 4 + size
        if name.rsplit('/', 1)[-1] in wanted:
            found[name.rsplit('/', 1)[-1]] = (method, crc, csize, usize, offset)
        position += 46 + name_len + extra_len + comment_len
    for name in wanted:
        method, crc, csize, usize, offset = found[name]
        local, _ = fetch(url, offset, offset + 29)
        start = offset + 30 + sum(struct.unpack('<HH', local[26:30]))
        data, _ = fetch(url, start, start + csize - 1)
        data = zlib.decompress(data, -15) if method == 8 else data
        if len(data) != usize or zlib.crc32(data) != crc:
            raise SystemExit(f'{name}: CRC32 ei täsmää')
        yield name, data


def fetch_all(folder):
    folder = Path(folder)
    folder.mkdir(parents=True, exist_ok=True)
    for name in NAMES:
        data, _ = fetch(OGG_BASE + name + '.ogg')
        (folder / f'{name}.ogg').write_bytes(data)
    for name, data in zip_members(WAV_ZIP, [f'{n}.wav' for n in NAMES]):
        (folder / name).write_bytes(data)
    for name in (*(f'{n}.ogg' for n in NAMES), *(f'{n}.wav' for n in NAMES)):
        if sha256(folder / name) != SHA256[name]:
            raise SystemExit(f'{name}: SHA-256 ei täsmää lähteen tarkisteeseen')
        print(f'{name}: SHA-256 OK')


def mono_float(path):
    with wave.open(str(path), 'rb') as source:
        channels, width, rate = source.getnchannels(), source.getsampwidth(), source.getframerate()
        raw = source.readframes(source.getnframes())
    if width != 3:
        raise SystemExit(f'{path}: odotettiin 24-bittistä PCM:ää')
    values = array.array('i', bytes(b for i in range(0, len(raw), 3) for b in (0, raw[i], raw[i + 1], raw[i + 2])))
    frames = [sum(values[f * channels:(f + 1) * channels]) / channels / 2147483648
              for f in range(len(values) // channels)]
    return rate, frames


def convert(folder):
    folder = Path(folder)
    for name in NAMES:
        rate, frames = mono_float(folder / f'{name}.wav')
        frames = frames[:int(LENGTH * rate)]
        fade = int(FADE * rate)
        for i in range(fade):
            frames[len(frames) - fade + i] *= (fade - i) / fade
        data = struct.pack(f'<{len(frames)}f', *frames)
        fmt = struct.pack('<HHIIHH', 3, 1, rate, rate * 4, 4, 32)
        temp = folder / f'{name}.mono.wav'
        temp.write_bytes(b'RIFF' + struct.pack('<I', 36 + len(data)) + b'WAVEfmt ' + struct.pack('<I', 16) + fmt
                         + b'data' + struct.pack('<I', len(data)) + data)
        subprocess.run(['afconvert', '-f', 'm4af', '-d', 'aac', '-b', '96000', '-q', '127',
                        str(temp), str(folder / f'{name}.m4a')], check=True)
        temp.unlink()
        print(f'{name}.m4a')


def check():
    problems = []
    for name in NAMES:
        for extension in ('ogg', 'm4a'):
            path = TARGET / f'{name}.{extension}'
            if not path.is_file():
                problems.append(f'{path.name} puuttuu')
            elif sha256(path) != SHA256[path.name]:
                problems.append(f'{path.name}: SHA-256 ei täsmää')
    for problem in problems:
        print(problem)
    return bool(problems)


if __name__ == '__main__':
    command = sys.argv[1] if len(sys.argv) > 1 else ''
    if command == 'nouda' and len(sys.argv) == 3:
        fetch_all(sys.argv[2])
    elif command == 'muunna' and len(sys.argv) == 3:
        convert(sys.argv[2])
    elif command == 'tarkista':
        raise SystemExit(check())
    else:
        raise SystemExit(__doc__)
