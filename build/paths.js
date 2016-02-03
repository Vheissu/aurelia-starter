var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  font: 'assets/fonts/**/*',
  style: ['assets/styles/**/*.scss', 'assets/styles/**/*.css'],
  image: 'assets/images/**/*',
  output: outputRoot,
  fontOutput: outputRoot + 'assets/fonts',
  styleOutput: outputRoot + 'assets/styles',
  imageOutput: outputRoot + 'assets/images',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
