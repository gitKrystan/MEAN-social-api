var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
  // load module declaration first, after that order doesn't matter
  gulp.src(['ng/module.js', 'ng/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate()) // add dependency annotations to components
    .pipe(uglify())
    .pipe(gulp.dest('assets'));
});

// build js files then watch for changes
gulp.task('watch:js', ['js'], function() {
  gulp.watch('ng/**/*.js', ['js']);
});
