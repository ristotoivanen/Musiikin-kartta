import json,sys,time
LOG=sys.argv[1];seen=int(sys.argv[2]);offy=float(sys.argv[3]) if len(sys.argv)>3 else 0
t0=time.time()
while time.time()-t0<8:
    try: L=[l for l in open(LOG).read().split('\n') if l.strip()]
    except FileNotFoundError: L=[]
    if len(L)>seen:
        d=json.loads(L[-1])
        def p(c): return None if not c else (round(c['x']),round(c['y']+offy))
        print(len(L),d['key'],d.get('chord'),'root',p(d.get('rootBtn')),'chord',p(d.get('chordBtn')),'next',p(d.get('next')),'rootsTop',d.get('rootsTop'),'nextBottom',d.get('nextBottom'),'vh',d.get('vh'),'ov',d.get('overlap'),'rows',d.get('rows'),'minW',d.get('minW'))
        sys.exit(0)
    time.sleep(0.25)
print('TIMEOUT',len(L))
