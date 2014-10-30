'use strict';

var path = require('path');
var spawn = require('child_process').spawn;

function background (options) {
  var backgroundPath = path.join(__dirname, 'lib', 'background.js');
  var backgroundProcess = spawn('node', [backgroundPath, JSON.stringify(options)]);

  process.on('exit', function () {
    backgroundProcess.kill();
  });
}

module.exports = background;
