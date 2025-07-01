#!/usr/bin/env bash

cd ../web-components-lib

npm run build

cp ./dist/web-components-lib.umd.cjs ../test-project/static/web-components-lib.umd.cjs

cd ../test-project

npx http-server ./static -p 3000 -o -c-1