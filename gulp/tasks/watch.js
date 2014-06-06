var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
	gulp.watch('src/scss/**', ['scss']);
	gulp.watch('src/img/**', ['images']);
	gulp.watch('src/htdocs/**', ['html']);
	// Note: The browserify task handles js recompiling with watchify
});