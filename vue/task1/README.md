# Task1

> My awe-inspiring Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## Firebase Hosting
- Install firebase tools `npm i -g firebase-tools`
- Init firebase `firebase init`, Choose `hosting`, Set `dist/` for the generated html folder.
- Set your `nuxt.config.js` set your application mode as `spa`
- check your `firebase.json`, make sure the `public` key is `dist`
- Run `npm run build`
- Run `firebase deploy`
