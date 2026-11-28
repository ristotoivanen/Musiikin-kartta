#!/bin/sh
# arm.sh: asenna napautusloki sivulle
cd "$(dirname "$0")"
python3 rc.py 'window.__ck=[];["click","touchstart"].forEach(t=>document.addEventListener(t,e=>{const b=e.target.closest("button");window.__ck.push([t,Math.round(performance.now()),b?b.textContent.trim().slice(0,8):e.target.tagName])},true));JSON.stringify({vv:visualViewport.scale,y:scrollY})'
