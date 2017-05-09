var config = require('../config.js');

var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var fm = require('front-matter');
var data = require('gulp-data');

gulp.task('render-html', function(){

    return gulp.src(config.src.templates + '/*.html')
        .pipe(data(function(file) {
            var content = fm(String(file.contents));
            file.contents = new Buffer(content.body);
            return content.attributes;
        }))
        .pipe(nunjucksRender({
            path: config.src.templates
        }))
        .pipe(gulp.dest(config.dest.build));

});