#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'vuepress deploy'

git push -f https://github.com/yoziyo/yoziyo.github.io.git master

cd -