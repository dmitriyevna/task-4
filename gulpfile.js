require('require-dir')('./gulp/tasks', { recurse: true });

var gulp = require('gulp');
var browserSync = require('browser-sync');
var del = require('del');
var config = require('./gulp/config');

gulp.task('serve', function(){

    browserSync.init({
    	injectChanges: true,
        server: {
            baseDir: config.dest.build
        }
    });

    gulp.watch(config.src.sass).on('change', gulp.parallel('sass', browserSync.reload));
    gulp.watch(config.src.templates + '**/*.html').on('change', gulp.parallel('render-html', browserSync.reload));
    gulp.watch(config.dest.js + '/*.js').on('change', browserSync.reload);

});

gulp.task('clean', function(done){ 
    del.sync(config.dest.build);
    done();
});

gulp.task('build', gulp.series(
    'clean', 
    'render-html', 
    'sass-build', 
    'imagemin', 
    'webpack'
));


gulp.task('default',  gulp.series(
	'render-html', 
	'sass', 
	gulp.parallel(
		'serve',
		'webpack::watch'
	)
));