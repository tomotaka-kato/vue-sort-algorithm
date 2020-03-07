# vue-sort-algorithm

## 動かす
### Dockerを使う場合（nuxt-appと言う名前でコンテナを作る場合）
1. `$ docker build -t nuxt-app .`
2. http://localhost:3000 にアクセス

### ローカル環境で実行する場合
1. Node13以上の実行環境を用意
2. `$ npm install`
3. `$ npm run build`
4. `$ npm run start`
5. http://localhost:3000 にアクセス

### Dockerを使う場合（nuxt-appと言う名前でコンテナを作る場合）
1. `$ docker build -t nuxt-app .`
2. `$ docker run --rm -it -v "$PWD:/app" -p 3000:3000  nuxt-app bash`
3. 実行環境に入れるので、下に記載してあるコマンドを利用しながら開発を行う。
`

### ローカルで環境を作る場合
1. node13以上の環境を用意する。
2. `$ npm install`
3. あとは下のコマンドを使っていい感じに開発を進める


> My smashing Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# Lint
$ npm run lint
# Lint and auto fix
$ npm run lintfix
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
