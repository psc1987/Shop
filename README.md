# shop

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


쇼핑몰 관리 프로그램
웹 페이지는 vue.js를 사용하였고 서버는 nuxt.js를 사용하여 관리자 부분(관리자 전용 페이지) / 일반 유저가 사용하는 부분으로 나누어 구현하였습니다. 
DB는 Mysql 을 사용하였습니다. 

관리자  
1. 사용자에게 판매할 의류를 등록
2. 유저 리스트와 유저가 구매한 제품 리스트 확인

일반유저
1. 회원가입/로그인
2. 제품리스트 확인 후 구매
3. 구매제품을 확인 할 수 있는 마이페이지

