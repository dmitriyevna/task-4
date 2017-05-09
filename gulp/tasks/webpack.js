var config = require('../config.js');

var gulp = require('gulp');
var webpack = require('webpack-stream');
var WebpackConfig = require('../../webpack.config');

gulp.task('webpack', function() {
	return webpack(WebpackConfig)
		.pipe(gulp.dest(config.dest.js));
});

gulp.task('webpack::watch', function(){

	WebpackConfig.watch = true;

	return webpack(WebpackConfig)
		.pipe(gulp.dest(config.dest.js));

});