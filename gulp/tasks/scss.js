var gulp                = require('gulp');
var scss                = require('gulp-ruby-sass');
var prefix              =  require('gulp-autoprefixer');
var notify              = require('gulp-notify');
var handleErrors        = require('../util/handleErrors');

gulp.task('scss', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(scss({
    	style: "compressed",
    	compass: true
    }))
    .on('error', handleErrors)
    .pipe(prefix("last 3 version", "> 1%", "ie 8"))
    .pipe(gulp.dest('./build/css'));
});