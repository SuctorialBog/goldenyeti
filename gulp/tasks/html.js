var gulp       = require('gulp');
var fileinclude = require('gulp-file-include');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');

gulp.task('html', function(){
  gulp.src('src/htdocs/**')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('build'))
    .on('error', handleErrors);
});