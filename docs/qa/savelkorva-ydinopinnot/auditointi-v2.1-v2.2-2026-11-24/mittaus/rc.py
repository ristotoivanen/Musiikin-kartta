#!/usr/bin/env python3
"""Lähettää JS-lausekkeen simulaattorin Safariin ja tulostaa tuloksen."""
import json, sys, time, urllib.request, uuid
js = sys.argv[1]; cid = uuid.uuid4().hex[:8]
urllib.request.urlopen(urllib.request.Request('http://127.0.0.1:8766/__ctl', data=json.dumps({'cmd': {'id': cid, 'js': js}}).encode(), method='POST'))
for _ in range(int(float(sys.argv[2]) * 10) if len(sys.argv) > 2 else 100):
    time.sleep(0.1)
    try:
        r = urllib.request.urlopen(f'http://127.0.0.1:8766/__res/{cid}').read()
        print(json.dumps(json.loads(r)['out'], ensure_ascii=False, indent=None)); sys.exit(0)
    except urllib.error.HTTPError:
        pass
print('TIMEOUT'); sys.exit(1)
