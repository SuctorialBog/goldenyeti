var scss      = require('gulp-sass');
var gulp         = require('gulp');
var prefix =  require('gulp-autoprefixer');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');

gulp.task('scss', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(scss({
      errLogToConsole: false,
      onSuccess: function() {
          return notify().write("Sass Compiled!");
      },
      onError: function(err) {
          return notify().write(err);
      }
    }))
    .pipe(prefix("last 3 version", "> 1%", "ie 8"))
    .pipe(gulp.dest('./build/css'));
});