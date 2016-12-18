var webpack = require('webpack')
module.exports ={
		entry:'./app.js',
		output:{
				path:'build',
				filename:'bundle.js'
		},
		devServer:{
				inline: true,
				port:3001
		},
		module:{
				loaders:[
						{
								test:/\.js$/,
								exclude:/(node_modules|bower_components)/,
								loader:'babel',
								query:{
										presets:['es2015','react']
								}
						},
						{
								test:/\.(png|jpg)$/,
								loader:'url-loader?limit=3000'
						}
				]
		}
};