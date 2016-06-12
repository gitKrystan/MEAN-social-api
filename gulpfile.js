var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

// require all files in the gulp folder
var fs = require('fs');
fs.readdirSync(__dirname + '/gulp').forEach(function(task) {
  require('./gulp/' + task);
});

gulp.task('js', function() {
  // load module declaration first, after that order doesn't matter
  gulp.src(['ng/module.js', 'ng/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(ngAnnotate()) // add dependency annotations to components
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets'));
});

// build js files then watch for changes
gulp.task('watch:js', ['js'], function() {
  gulp.watch('ng/**/*.js', ['js']);
});
