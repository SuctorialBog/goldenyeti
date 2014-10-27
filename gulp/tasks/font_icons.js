var gulp  = require('gulp');

gulp.task('font_icons', function() {
  return gulp.src(['bower_components/fontawesome/fonts/fontawesome-webfont.*'])
    .pipe(gulp.dest('build/fonts/'));
});

gulp.task('fonts', function() {
  return gulp.src(['./src/fonts/*'])
    .pipe(gulp.dest('build/fonts/'));
});