#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下
cd dist

# 部署到自定义域域名
# echo 'https://zhenou.github.io/' > CNAME

# git init
# git add -A
# git commit -m '作业展示'

# 部署到 https://<USERNAME>.github.io
# git push  git@github.com:Zhenou/homework.git master


# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f  git@github.com:Zhenou/homework.git master:gh-pages

cd -
