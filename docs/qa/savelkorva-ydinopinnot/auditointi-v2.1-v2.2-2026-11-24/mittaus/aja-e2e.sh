#!/bin/bash
export PATH=/opt/homebrew/opt/node@22/bin:$PATH
cd ~/src/Musiikin-kartta/audit-sk178
L=~/src/Musiikin-kartta/git/auditoinnit/savelkorva-178-v2.1-2026-11-24/mittaus
echo "commit $(git rev-parse HEAD)" > $L/e2e-chromium.log
npx playwright test tests/e2e/savelkorva-ydinopinnot.spec.ts --reporter=line >> $L/e2e-chromium.log 2>&1; echo "EXIT $?" >> $L/e2e-chromium.log
echo "commit $(git rev-parse HEAD)" > $L/e2e-webkit.log
npx playwright test --config=playwright.savelkorva-116-webkit.config.ts --reporter=line >> $L/e2e-webkit.log 2>&1; echo "EXIT $?" >> $L/e2e-webkit.log
echo "commit $(git rev-parse HEAD)" > $L/oppimiskartta-tarkista.log
python3 tools/oppimiskartta/rakenna.py --tarkista >> $L/oppimiskartta-tarkista.log 2>&1; echo "EXIT $?" >> $L/oppimiskartta-tarkista.log
