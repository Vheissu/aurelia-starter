var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function() {
    return gulp.src(paths.source)
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(changed(paths.output, {extension: '.js'}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(to5(assign({}, compilerOptions.system())))
        .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/src'}))
        .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function() {
    return gulp.src(paths.html)
        .pipe(changed(paths.output, {extension: '.html'}))
        .pipe(gulp.dest(paths.output));
});

gulp.task('build-styles', function() {
    return gulp.src(paths.style)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['> 5%', 'Explorer >= 10']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styleOutput));
});

gulp.task('build-images', function() {
    return gulp.src(paths.image)
        .pipe(gulp.dest(paths.imageOutput));
});

gulp.task('build-fonts', function() {
    return gulp.src(paths.font)
        .pipe(gulp.dest(paths.fontOutput));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
    return runSequence(
        'clean',
        ['build-system', 'build-html', 'build-styles', 'build-images', 'build-fonts'],
        callback
    );
});
