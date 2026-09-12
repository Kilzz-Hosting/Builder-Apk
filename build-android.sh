#!/data/data/com.termux/files/usr/bin/bash
set -e
npm install
[ -d android ] || npx cap add android
npx cap sync android
echo "Android project ready in ./android"
