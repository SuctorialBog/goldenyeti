var scss      = require('gulp-sass');
var gulp         = require('gulp');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');

gulp.task('scss', function() {
	return gulp.src('./src/scss/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./build/css'))
    .on('error', handleErrors);
});