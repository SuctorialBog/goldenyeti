var gulp  = require('gulp');
var uglify = require('gulp-uglify');
var bower = require('gulp-bower-files');

gulp.task('bower', function() {
  bower()
    .pipe(uglify())
    .pipe(gulp.dest('build/lib/'))
});

gulp.task('ie8', function() {
  return gulp.src(['bower_components/selectivizr/selectivizr.js'])
    .pipe(gulp.dest('build/lib/selectivizr/'));
});