var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function() {
  // load module declaration first, after that order doesn't matter
  gulp.src(['ng/module.js', 'ng/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('assets'));
});
