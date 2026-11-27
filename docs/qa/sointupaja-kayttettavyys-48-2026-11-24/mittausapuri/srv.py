import http.server,socketserver,json,os,sys,time
ROOT=sys.argv[1];PORT=int(sys.argv[2]);LOG=sys.argv[3]
INJ=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'inject.js'),encoding='utf-8').read()
class H(http.server.SimpleHTTPRequestHandler):
    def __init__(s,*a,**k): super().__init__(*a,directory=ROOT,**k)
    def log_message(s,*a): pass
    def do_POST(s):
        n=int(s.headers.get('content-length',0)); b=s.rfile.read(n).decode('utf-8','replace')
        with open(LOG,'a') as f: f.write(b.replace('\n',' ')+'\n')
        s.send_response(204); s.end_headers()
    def do_GET(s):
        p=s.path.split('?')[0]
        if p.endswith('sointipaja-harness.html'):
            raw=open(os.path.join(ROOT,'sointipaja-prototyyppi.html'),encoding='utf-8').read().replace('</body>','<script>'+INJ+'</script></body>')
            d=raw.encode(); s.send_response(200); s.send_header('Content-Type','text/html; charset=utf-8'); s.send_header('Content-Length',str(len(d))); s.send_header('Cache-Control','no-store'); s.end_headers(); s.wfile.write(d); return
        return super().do_GET()
socketserver.TCPServer.allow_reuse_address=True
with socketserver.ThreadingTCPServer(('0.0.0.0',PORT),H) as t: t.serve_forever()
