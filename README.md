[![Circle CI](https://circleci.com/gh/rangle/typescript-react-redux-example.svg?style=svg)](https://circleci.com/gh/rangle/typescript-react-redux-example)

# Eatebyte wait app

This is the initial version of our eatebyte wait project using React, TypeScript and Webpack to tie it all together.

## npm scripts

### Dev
```bash
$ npm run dev
```

This runs a development mode server with live reload etc.

Open `http://localhost:8080` in your browser.

### Production

```bash
npm install
npm start
```

This runs a production-ready express server that serves up a bundled and
minified version of the client.

Open `http://localhost:8080` in your browser.

### Tests

#### Single Run
```bash
$ npm run test
```

#### Watch Files
```bash
$ npm run test:watch
```

#### Coverage
```bash
$ npm run cover

## License

Copyright (c) 2016 rangle.io

[MIT License][MIT]

[MIT]: ./LICENSE "Mit License"
