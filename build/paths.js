var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  font: appRoot + 'assets/fonts/**/*',
  style: [appRoot + 'assets/styles/**/*.scss', appRoot + 'assets/styles/**/*.css'],
  image: appRoot + 'assets/images/**/*',
  output: outputRoot,
  fontOutput: outputRoot + 'assets/fonts',
  styleOutput: outputRoot + 'assets/styles',
  imageOutput: outputRoot + 'assets/images',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
