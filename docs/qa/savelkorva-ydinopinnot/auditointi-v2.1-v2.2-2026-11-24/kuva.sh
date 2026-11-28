#!/bin/sh
# kuva.sh nimi  -> tallentaa simulaattorin kuvakaappauksen
xcrun simctl io C473C410-D2E0-45A2-B26D-6D99971AF82A screenshot "$(dirname "$0")/kuvakaappaukset/$1.png"
