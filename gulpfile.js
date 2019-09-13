//Node.js libraries
var del = require('del');
var path = require('path');

// Gulp dependencies
var gulp = require('gulp');
var debug = require('gulp-debug');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var sourcemaps = require('gulp-sourcemaps');

//directory mapping. Update as necessary
var devDir = './src/';
var destDir = './dist/';

gulp.task('sass', function(){
  return gulp.src(devDir + 'scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(destDir + 'css/'));
});

gulp.task('scripts', function(){
  return gulp.src(devDir + 'js/**/*.js').pipe(gulp.dest(destDir + 'js/'));
});

gulp.task('move-html', function(){
  return gulp.src([devDir + '*.html']).pipe(gulp.dest(destDir));
});

gulp.task('move-images', function(){
  return gulp.src([devDir + 'img/**/*.+(jpg|jpeg|gif|png|svg|mp4|ogg|webm|mp3|css|woff|woff2|ttf|eot|pdf)']).pipe(gulp.dest(destDir+'img/'));
});

gulp.task('move-media', function(){
  return gulp.src([devDir + 'media/**/*.+(pdf)']).pipe(gulp.dest(destDir+'media/'));
});

gulp.task('watch', function(){
  gulp.watch(devDir + 'js/**/*.js', gulp.series('scripts'));
	gulp.watch(devDir + 'scss/**/*.+(scss|sass)', gulp.series('sass'));
	gulp.watch(devDir + '*.html', gulp.series('move-html'));
  gulp.watch(devDir + '**/*.+(jpg|jpeg|gif|png|svg|mp4|ogg|webm|mp3|pdf)', gulp.series('move-images'));
  gulp.watch(devDir + 'media/**/*.+(pdf)', gulp.series('move-media'));
});

//Clean Output Tasks
gulp.task('clean', function() {
  return del([
    'dist/**/*',
    '!dist/media/**'
  ]);
});

var serves = gulp.series('sass','scripts','move-html','move-images','move-media');
// Default task is watch
gulp.task('default', gulp.series(serves,'watch'));
