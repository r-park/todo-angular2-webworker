var apiServer    = require('./server/server');
    autoprefixer = require('autoprefixer'),
    browserSync  = require('browser-sync'),
    changed      = require('gulp-changed'),
    del          = require('del'),
    exec         = require('child_process').exec,
    gulp         = require('gulp'),
    karma        = require('karma'),
    postcss      = require('gulp-postcss'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    tslint       = require('gulp-tslint'),
    typescript   = require('gulp-typescript');


//=========================================================
//  PATHS
//---------------------------------------------------------
var paths = {
  lib: {
    src: [
      'node_modules/angular2/bundles/web_worker/*',
      'node_modules/es6-shim/es6-shim.{map,min.js}',
      'node_modules/immutable/dist/immutable.min.js',
      'node_modules/socket.io-client/socket.io.js',
      'node_modules/systemjs/dist/system.{js,js.map}'
    ],
    target: 'target/lib'
  },

  src: {
    html: 'src/**/*.html',
    js: 'src/**/*.js',
    sass: 'src/**/*.scss',
    ts: 'src/**/*.ts'
  },

  target: 'target',

  typings: {
    entries: [
      'typings/tsd/tsd.d.ts',
      'typings/custom/custom.d.ts'
    ],
    watch: 'typings/**/*.ts'
  }
};


//=========================================================
//  CONFIG
//---------------------------------------------------------
var config = {
  autoprefixer: {
    browsers: ['last 3 versions', 'Firefox ESR', 'Opera 12.1']
  },

  browserSync: {
    files: [paths.target + '/**/*'],
    notify: false,
    open: false,
    port: 7000,
    reloadDelay: 500,
    server: {
      baseDir: paths.target
    }
  },

  karma: {
    configFile: __dirname + '/karma.conf.js'
  },

  nodemon: {
    script: 'server.js'
  },

  sass: {
    errLogToConsole: true,
    outputStyle: 'nested',
    precision: 10,
    sourceComments: false
  },

  ts: {
    configFile: 'tsconfig.json'
  },

  tslint: {
    report: {
      options: {emitError: true},
      type: 'verbose'
    }
  }
};


//=========================================================
//  TASKS
//---------------------------------------------------------
gulp.task('clean.target', function(){
  return del(paths.target);
});


gulp.task('copy.html', function(){
  return gulp.src(paths.src.html)
    .pipe(gulp.dest(paths.target));
});


gulp.task('copy.js', function(){
  return gulp.src(paths.src.js)
    .pipe(gulp.dest(paths.target));
});


gulp.task('copy.lib', function(){
  return gulp.src(paths.lib.src)
    .pipe(gulp.dest(paths.lib.target));
});


gulp.task('lint', function(){
  return gulp.src(paths.src.ts)
    .pipe(tslint())
    .pipe(tslint.report(
      config.tslint.report.type,
      config.tslint.report.options
    ));
});


gulp.task('sass', function(){
  return gulp.src(paths.src.sass)
    .pipe(sass(config.sass))
    .pipe(postcss([
      autoprefixer(config.autoprefixer)
    ]))
    .pipe(gulp.dest(paths.target));
});


gulp.task('serve', function(done){
  browserSync.create()
    .init(config.browserSync, done);
});


gulp.task('serve.api', function(done){
  apiServer.start(done);
});


var tsProject = typescript.createProject(config.ts.configFile);

gulp.task('ts', function(){
  return gulp.src([paths.src.ts].concat(paths.typings.entries))
    .pipe(changed(paths.target, {extension: '.js'}))
    .pipe(sourcemaps.init())
    .pipe(typescript(tsProject))
    .js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.target));
});


//===========================
//  BUILD
//---------------------------
gulp.task('build', gulp.series(
  'clean.target',
  'copy.html',
  'copy.js',
  'copy.lib',
  'sass',
  'ts'
));


//===========================
//  DEVELOP
//---------------------------
gulp.task('default', gulp.series(
  'build',
  'serve',
  'serve.api',
  function watch(){
    gulp.watch(paths.src.html, gulp.task('copy.html'));
    gulp.watch(paths.src.js, gulp.task('copy.js'));
    gulp.watch(paths.src.sass, gulp.task('sass'));
    gulp.watch([paths.src.ts, paths.typings.watch], gulp.task('ts'));
  }
));


//===========================
//  TEST
//---------------------------
function karmaServer(options, done) {
  var server = new karma.Server(options, function(error){
    if (error) process.exit(error);
    done();
  });
  server.start();
}


gulp.task('karma', function(done){
  config.karma.singleRun = true;
  karmaServer(config.karma, done);
});


gulp.task('karma.watch', function(done){
  karmaServer(config.karma, done);
});


gulp.task('karma.run', function(done){
  var cmd = process.platform === 'win32' ? 'node_modules\\.bin\\karma run karma.conf.js' : 'node node_modules/.bin/karma run karma.conf.js';
  exec(cmd, function(error, stdout){
    done();
  });
});


gulp.task('test', gulp.series('lint', 'build' /*, 'karma'*/));


gulp.task('test.watch', gulp.parallel(
  gulp.series('lint', 'build', 'karma.watch'),
  function(){
    gulp.watch(paths.src.ts, gulp.series('ts', 'karma.run'));
  }
));
