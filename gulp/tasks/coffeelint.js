var gulp = require('gulp');
var coffeelint = require('gulp-coffeelint');

gulp.task('coffeelint', function () {
    gulp.src('./src/js/*.coffee')
        .pipe(coffeelint())
        .pipe(coffeelint.reporter())
});