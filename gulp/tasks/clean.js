var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function (cb) {
	del([
		'build/css/**',
		'build/js/**',
		'build/lib/**/*'
	],cb);
});