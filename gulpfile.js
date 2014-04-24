var gulp = require('gulp');
var jshint = require('gulp-jshint');

var scripts = ['index.js', './lib/**/*.js', './gulpfile.js', './test/**/*.js'];

gulp.task('jshint', function() {
  return gulp.src(scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  gulp.watch(scripts, ['jshint']);
});


gulp.task('default', ['jshint']);
