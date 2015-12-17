[![Build Status](https://travis-ci.org/r-park/todo-angular2-webworker.svg?branch=master)](https://travis-ci.org/r-park/todo-angular2-webworker)


# Todo app with Angular2 WebWorker
A simple Todo app example built with **Angular 2** and running in a **WebWorker**. The app persists data to a server via **websocket connection**, and caches task objects on the client using an **immutable list**.

- Angular `2.0.0-beta.0`
- Express
- Gulp `4.0.0-alpha.2`
- Immutable
- LowDB
- SASS
- Socket.io
- SystemJS
- Typescript `~1.7.5`


## Quick Start
```bash
$ git clone https://github.com/r-park/todo-angular2-webworker.git
$ cd todo-angular2-webworker
$ npm install
$ ./node_modules/.bin/gulp
```


## Developing
### Prerequisites
- `node >=4.2`

### Installing Global Dependencies
```bash
$ npm install -g karma-cli
```

##### Gulp v4 (optional)
```bash
$ npm install -g gulpjs/gulp-cli#4.0
```
The gulp tasks for this project require gulp v4-alpha. If you don't wish to globally install the v4 gulp-cli, you can run the gulp tasks using the locally installed gulp under `./node_modules/.bin` — for example:
```bash
$ ./node_modules/.bin/gulp run
```


### Installing Project-local Dependencies
```bash
$ npm install
```


## Commands
#### Develop
```bash
$ gulp
```
- Start the BrowserSync dev server at <a href="http://localhost:3000" target="_blank">localhost:3000</a>
- Start the Express/Socket.io API server
- Watch for changes to your source files
- Live-reload the browser

#### Lint (tslint)
```bash
$ gulp lint
```

#### Test (single-run)
```bash
$ gulp test
```

#### Test (watch mode)
```bash
$ gulp test.watch
```

#### Build
```bash
$ gulp build
```
