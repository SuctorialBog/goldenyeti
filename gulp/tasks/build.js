var gulp = require('gulp');

gulp.task('build', ['browserify', 'scss', 'bower', 'images', 'html']);
