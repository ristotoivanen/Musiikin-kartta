import re,collections
def parse(f):
    c=collections.Counter(); err={}
    L=open(f).read().split('\n')
    for i,l in enumerate(L):
        m=re.match(r'^\s+\d+\) \[([\w-]+)\] › (tests/e2e/[^:]+:\d+):\d+ › ',l)
        if m:
            k=(m[1],m[2]); c[k]+=1
            for x in L[i+1:i+14]:
                if x.strip().startswith(('Error','Test timeout')): err.setdefault(k,collections.Counter())[x.strip()[:90]]+=1; break
    return c,err
full,fe=parse('e2e-musapelit-142-webkit.txt'); a,ae=parse('t-clean.txt'); b,be=parse('t-merged.txt')
keys=sorted(set(full)|set(a)|set(b),key=lambda k:(k[1],k[0]))
for k in keys:
    print(f"{k[0][7:]:8} {k[1][10:]:42} full={full[k]} clean={a[k]}/3 merged={b[k]}/3", '| F:',list(fe.get(k,{}))[:1], '| C:',list(ae.get(k,{}))[:1] if list(ae.get(k,{}))[:1]!=list(fe.get(k,{}))[:1] else '=')
