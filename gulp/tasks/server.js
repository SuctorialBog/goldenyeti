var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('serve', ['build'], function() {
  browserSync.init(['build/**'], {
    server: {
      baseDir: 'build'
    }
  });
});