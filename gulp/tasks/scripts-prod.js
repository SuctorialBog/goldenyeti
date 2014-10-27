var browserify   = require('browserify');
var bundleLogger = require('../util/bundleLogger');
var config       = require('../config');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');

gulp.task('scripts:prod', function() {

	var bundler = browserify({
		entries: ['./src/js/app.coffee'],
		extensions: ['.js','.coffee']
	});

	var bundle = function() {
		bundleLogger.start();
		return bundler
			.bundle()
			.on('error', handleErrors)
			.pipe(source('app.min.js'))
			.pipe(gulp.dest('./build/js/'))
			.on('end', bundleLogger.end);
	};

	return bundle();

});