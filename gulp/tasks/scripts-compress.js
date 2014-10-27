var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var bundleLogger = require('../util/bundleLogger');
var uglify       = require('gulp-uglify');
var config       = require('../config');

gulp.task('scripts:compress',['scripts:prod'], function() {
	return gulp.src('build/js/app.min.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/js/'))
});