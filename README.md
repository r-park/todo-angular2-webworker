[![Travis branch](https://img.shields.io/travis/r-park/todo-angular2/master.svg?style=flat-square)](https://travis-ci.org/r-park/todo-angular2)
[![Coveralls branch](https://img.shields.io/coveralls/r-park/todo-angular2/master.svg?style=flat-square)](https://coveralls.io/github/r-park/todo-angular2?branch=master)


# Todo app with Angular 2
- Angular 2 alpha.39
- Typescript
- SystemJS
- SASS

## Installing dependencies
```bash
npm install
```

#### Gulp v4
The gulp tasks for this project require gulp v4-alpha ([docs](https://github.com/gulpjs/gulp/tree/4.0/docs)). If you don't wish to install it at this time, you must run the gulp tasks using the locally installed gulp. For example, with gulp v4 installed:
```bash
gulp dev
```
Without gulp v4:
```bash
./node_modules/.bin/gulp dev
```

#### Installing Gulp v4 (optional)
```bash
npm install -g gulpjs/gulp-cli#4.0
```

## Running the app
```bash
gulp
```
Running `gulp` will:
- Build the project
- Start the server at <a href="http://localhost:7000" target="_blank">localhost:7000</a>

## Developing
```bash
gulp dev
```
Running `gulp dev` will:
- Build the project
- Start the server at <a href="http://localhost:7000" target="_blank">localhost:7000</a>
- Watch for changes to the source files and process changes
- Live-reload the browser

## Testing
```bash
gulp test
```
The following command will run the test suite, watch for changes to the source files, and re-run the tests when sources are modified:
```bash
gulp test.watch
```
