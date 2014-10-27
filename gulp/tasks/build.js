var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(){
	runSequence(['clean','images', 'scss', 'bower', 'fonts','font_icons','scripts:dev','ie8']);
});