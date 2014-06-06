// currently not used in anything.
var gulp  = require('gulp');
var uglify = require('gulp-uglify');
var bower = require('gulp-bower-files');

gulp.task('bower', function() {
  bower()
    .pipe(uglify())
    .pipe(gulp.dest('build/lib/'))
});