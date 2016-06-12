var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// nodemon will restart server when specified files are changed
gulp.task('dev:server', function() {
  nodemon({
    script: 'server.js',
    ext:    'js',
    ignore: ['ng*', 'gulp*', 'assets*'] // ignore non-node files
  });
});
