var config = require('../config.js');

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('imagemin', function() {

    return gulp.src(config.src.images)
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest.img))

});