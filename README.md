# karma-background

## Why?

When using karma within gulp, if you want to programmatically call the
karma runner while a server is already started, it ouputs all the logs twice.
In [grunt-karma](https://github.com/karma-runner/grunt-karma) they got around
this by spawning the karma server as a background process.

This module is not a gulp plugin, all it does is spawn karma in a background
process in the same fashion as the grunt-karma plugin.

## example

Since I wrote this specifically to be used with gulp, the following example
is a gulpfile! You can also look at the gulpfile within this directory.

```javascript
var gulp = require('gulp');
var karma = require('karma');
var kbg = require('karma-background');
var configFile = __dirname + '/karma.conf.js';

// do a single run per usual
gulp.task('karma', function (done) {
  karma.server.start({
    configFile: configFile,
    singleRun: true
  }, done);
});

// call the runner
gulp.task('karma:run', function (done) {
  karma.runner.run({
    configFile: configFile
  }, done);
});

// create a watch task that launches a background process
gulp.task('watch', function () {
  kbg({ configFile: configFile });
  gulp.watch('./**.js', ['karma:run']);
});
```

## License

MIT
