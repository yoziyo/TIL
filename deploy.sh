#!/usr/bin/env sh

# abort on errors
set -e

git checkout gh-pages

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

git add -A
git commit -m 'vuepress deploy'
git push -f origin gh-pages

cd -