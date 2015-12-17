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

## Installing dependencies
```bash
npm install
```

#### Gulp v4 (optional)
```bash
npm install -g gulpjs/gulp-cli#4.0
```
The gulp tasks for this project require gulp v4-alpha. If you don't wish to globally install the v4 gulp-cli, you can run the gulp tasks using the locally installed gulp under `./node_modules/.bin` — for example:
```bash
./node_modules/.bin/gulp run
```

## Running the app
```bash
gulp run
```
Executing `gulp run` will:
- Build the project
- Start the server at <a href="http://localhost:7000" target="_blank">localhost:7000</a>

## Developing
```bash
gulp
```
Executing the default `gulp` command will:
- Build the project
- Start the server at <a href="http://localhost:7000" target="_blank">localhost:7000</a>
- Watch for changes to the source files and process changes
- Live-reload the browser

## Testing
```bash
gulp test.watch
```
Executing `gulp test.watch` will:
- Run the test suites
- Watch for changes to the source files
- Re-run the tests whenever the sources are modified

For a single test run without auto-watch, execute `gulp test` instead.
