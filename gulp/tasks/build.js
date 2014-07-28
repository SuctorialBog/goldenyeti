var gulp = require('gulp');

gulp.task('build', ['coffeelint', 'browserify', 'scss', 'bower', 'images', 'html', 'font_icons', 'ie8']);
