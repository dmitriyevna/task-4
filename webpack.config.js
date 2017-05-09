var webpack = require('webpack');
var path = require('path');
var config = require('./gulp/config');

var WebpackConfig = {

	watch: false,
	entry: config.src.js,
	output: {
		path: path.resolve(__dirname, config.dest.js),
	filename: 'bundle.js'
	},
	module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel', 
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }

};

module.exports = WebpackConfig;