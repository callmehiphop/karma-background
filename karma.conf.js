'use strict';

module.exports = function (karma) {

  karma.set({

    autoWatch: false,
    singleRun: false,
    frameworks: ['mocha', 'chai'],
    reporters: ['spec'],
    plugins: ['karma-*'],
    files: ['test/*'],
    browsers: ['PhantomJS']

  });

};