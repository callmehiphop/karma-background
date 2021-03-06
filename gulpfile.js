'use strict';

var gulp = require('gulp');
var karma = require('karma');
var kbg = require('./index');
var karmaPath = __dirname + '/karma.conf.js';

/**
 * Runs once
 */
gulp.task('karma', function (done) {
  new karma.Server({
    configFile: karmaPath,
    singleRun: true
  }, done).start();
});

/**
 * Runs test runner..
 */
gulp.task('karma:run', function (done) {
  karma.runner.run({
    configFile: karmaPath
  }, done);
});

/**
 * Starts karma server
 */
gulp.task('watch', function () {
  kbg({
    configFile: karmaPath
  });

  gulp.watch('./test/*', ['karma:run']);
});
