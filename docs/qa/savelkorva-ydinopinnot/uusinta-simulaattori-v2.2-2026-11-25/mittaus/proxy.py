#!/usr/bin/env python3
"""Auditointivälityspalvelin: välittää esikatselun sellaisenaan ja lisää harjoitussivulle
mittausskriptin (/__probe.js). Kirjaa kaikki pyynnöt ja sivun lähettämät tapahtumat."""
import http.server, json, sys, time, urllib.request, urllib.error, threading, os

ORIGIN = 'https://0b5aaa88.musiikin-kartta.pages.dev'
HERE = os.path.dirname(os.path.abspath(__file__))
LOG = os.path.join(HERE, 'events.jsonl')
state = {'loud': False, 'audio_delay': 0.0, 'fail_audio': False, 'match': '', 'cmds': [], 'results': {}}
lock = threading.Lock()

def log(obj):
    obj['t'] = round(time.time(), 3)
    with lock, open(LOG, 'a') as f:
        f.write(json.dumps(obj, ensure_ascii=False) + '\n')

class H(http.server.BaseHTTPRequestHandler):
    def log_message(self, *a):
        pass

    def send(self, code, body, ctype='text/plain; charset=utf-8', extra=None):
        self.send_response(code)
        self.send_header('Content-Type', ctype)
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', 'no-store')
        for k, v in (extra or {}).items():
            self.send_header(k, v)
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        n = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(n).decode('utf-8', 'replace')
        if self.path == '/__log':
            try:
                for item in json.loads(body):
                    log({'src': 'page', **item})
            except Exception as e:
                log({'src': 'proxy', 'bad': str(e)})
            return self.send(204, b'')
        if self.path == '/__ctl':  # paikallinen ohjaus curlilla
            c = json.loads(body)
            if 'audio_delay' in c:
                state['audio_delay'] = float(c['audio_delay'])
            if 'loud' in c:
                state['loud'] = bool(c['loud'])
            if 'match' in c:
                state['match'] = c['match']
            if 'fail_audio' in c:
                state['fail_audio'] = bool(c['fail_audio'])
            if 'cmd' in c:
                state['cmds'].append(c['cmd'])
            return self.send(200, json.dumps({'ok': True, 'fail_audio': state['fail_audio']}).encode())
        if self.path == '/__result':
            r = json.loads(body)
            state['results'][r['id']] = r
            log({'src': 'result', **r})
            return self.send(204, b'')
        self.send(404, b'')

    def do_GET(self):
        if self.path.startswith('/__cmd'):
            cmds, state['cmds'] = state['cmds'], []
            return self.send(200, json.dumps(cmds).encode(), 'application/json')
        if self.path.startswith('/__res/'):
            r = state['results'].get(self.path.split('/')[-1])
            return self.send(200 if r else 404, json.dumps(r or {}).encode(), 'application/json')
        if self.path == '/__probe.js':
            with open(os.path.join(HERE, 'probe.js'), 'rb') as f:
                pre = ('window.__silent=%s;\n' % ('false' if state['loud'] else 'true')).encode()
                return self.send(200, pre + f.read(), 'text/javascript; charset=utf-8')
        m = (not state['match']) or any(s in self.path for s in state['match'].split(','))
        if '/audio/' in self.path and state['fail_audio'] and m:
            log({'src': 'proxy', 'req': self.path, 'status': 503, 'forced': True})
            return self.send(503, b'forced failure')
        if '/audio/' in self.path and state['audio_delay'] and m:
            time.sleep(state['audio_delay'])
        url = ORIGIN + self.path
        try:
            req = urllib.request.Request(url, headers={'User-Agent': self.headers.get('User-Agent', 'audit')})
            with urllib.request.urlopen(req, timeout=20) as r:
                data, code, ctype = r.read(), r.status, r.headers.get('Content-Type', 'application/octet-stream')
        except urllib.error.HTTPError as e:
            data, code, ctype = e.read(), e.code, e.headers.get('Content-Type', 'text/plain')
        log({'src': 'proxy', 'req': self.path, 'status': code, 'bytes': len(data)})
        if 'text/html' in ctype and b'melodia-ydinopinnot.js' in data:
            data = data.replace(b'<head>', b'<head><script src="/__probe.js"></script>', 1)
        self.send(code, data, ctype)

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8771
    http.server.ThreadingHTTPServer(('127.0.0.1', port), H).serve_forever()
