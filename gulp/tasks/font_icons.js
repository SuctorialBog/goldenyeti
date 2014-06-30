var gulp  = require('gulp');

gulp.task('font_icons', function() {
  return gulp.src(['bower_components/fontawesome/fonts/fontawesome-webfont.*'])
    .pipe(gulp.dest('build/fonts/'));
});