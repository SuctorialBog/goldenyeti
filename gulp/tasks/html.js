var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var fileinclude = require('gulp-file-include');
gulp.task('html', function(){
  gulp.src('src/htdocs/**')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('build'));
});