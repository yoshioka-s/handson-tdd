# TDD Handson
## What's this?
TDDの楽しさを体感してみよう！というハンズオン講座のサンプルコードです。

## Tech Stack
- Front: Vue3 / Typescript
- API: Express.js / Typescript
- Test: Jest
- DB: SQLite
- DOC: Swagger UI

## Requirements
### Node
Node 14.15.4 で作成しています。バージョンを合わせるには[nvm](https://github.com/nvm-sh/nvm)をインストールして 
```bash
nvm install 14.15.4
nvm use
```
すればOKです。

(勉強用なので厳密に合わせなくても今入っているnodeで問題ないと思います)

### SQLite
SQLiteをインストールしてください。
- Ubuntuの場合: `sudo apt-get install sqlite3 libsqlite3-dev`
- Macの場合: デフォルトで入っていると思います。

## Setup
```bash
cd front
npm i
cd ../api
npm i
npm run db:migrate
```

※sqlite3のインストールでコケるときは `npm i sqlite3 --build-from-source` を試してみてください。

## 開発サーバー立ち上げ
### Front
```bash
cd front
npm run serve
```
[localhost:8080](http://localhost:8080)で起動します。

### API
```bash
cd api
npm run dev
```
[localhost:8000](http://localhost:8000)で起動します。
[localhost:8000/api-docs](http://localhost:8000/api-docs)でSwagger UIが確認できます。

### Jest実行
```bash
npm test
```
