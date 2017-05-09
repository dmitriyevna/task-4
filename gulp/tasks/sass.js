var config = require('../config.js');

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var uncss = require('gulp-uncss');

gulp.task('sass', function(){
	return gulp.src(config.src.sass)
			.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
			.pipe(gulp.dest(config.dest.css));
});

gulp.task('sass-build', function(){

	return gulp.src(config.src.sass)
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
			.pipe(uncss({
		        html: [ config.dest.build + '/*.html' ]
		    }))
            .pipe(postcss([autoprefixer()]))
	        .pipe(gulp.dest(config.dest.css));
});


