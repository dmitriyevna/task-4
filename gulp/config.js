var devPath = './src';
var destPath = './build';

var config = {

	src: {
		templates: devPath + '/templates-nunjucks',
		js: devPath + '/js/index.js',
		sass: devPath + '/sass/**/*.sass',
		css: devPath + '/css/**/*.css',
		fonts: devPath + '/fonts/**/*',
		images: devPath + '/img/**/*',
		iconsSvg: devPath + '/svg/**/*.svg'
	},
	dest: {
	    build: destPath,
	    css: destPath + '/css',
	    js: destPath + '/js',
	    fonts: destPath + '/fonts',
	    img: destPath + '/img',
	    svg: destPath + '/img/svg'
	}

};

module.exports = config;