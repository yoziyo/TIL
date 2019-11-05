#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git add docs/.vuepress/dist -f
git commit -m 'vuepress commit'
git push origin `git subtree split --prefix docs/.vuepress/dist master`:gh-pages --force


# navigate into the build output directory
# cd docs/.vuepress/dist

# git add -A
# git commit -m 'vuepress deploy'
# git push -f origin gh-pages

# cd -