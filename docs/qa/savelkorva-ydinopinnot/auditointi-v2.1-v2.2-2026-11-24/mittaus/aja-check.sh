#!/bin/bash
export PATH=/opt/homebrew/opt/node@22/bin:$PATH
cd ~/src/Musiikin-kartta/audit-sk178
L=~/src/Musiikin-kartta/git/auditoinnit/savelkorva-178-v2.1-2026-11-24/mittaus
echo "commit $(git rev-parse HEAD)" > $L/npm-check.log
npm run check >> $L/npm-check.log 2>&1
echo "EXIT $?" >> $L/npm-check.log
