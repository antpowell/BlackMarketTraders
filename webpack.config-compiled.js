'use strict';

module.exports = {
		entry: './app.js',
		output: {
				path: 'build\/js',
				filename: 'bundle.js'
		},
		module: {
				loaders: [{
						test: /\.js$/,
						exclude: /(node_modules,bower_components)/,
						loader: 'babel',
						query: {
								presets: ['es2015', 'react']
						}
				}]
		}
};

//# sourceMappingURL=webpack.config-compiled.js.map