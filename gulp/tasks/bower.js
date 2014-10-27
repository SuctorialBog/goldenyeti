var gulp  = require('gulp');
var bower = require('main-bower-files');
gulp.task('bower', function() {
  return gulp.src(bower())
    .pipe(gulp.dest('build/lib/'))
});

gulp.task('ie8', function() {
  return gulp.src(['bower_components/selectivizr/selectivizr.js'])
    .pipe(gulp.dest('build/lib/'));
});