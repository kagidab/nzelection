var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'index_bundle.js',
		publicPath: '/'
	},

	module:{
		rules: [ 
			{ test: /\.(js|jsx)$/, loader: 'babel-loader', query:{presets: ['es2015', 'react']}},
			{ test: /\.(png|jpe?g)$/, loader: "url-loader?limit=250000"},
			{ test: /\.es6$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['es2015'] } },
			{ test: /\.json$/, loader: 'json-loader'},
		]
	},

	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new webpack.ProvidePlugin({
			"React": "react",
		}),
		new HtmlWebpackPlugin({
			template: 'app/index.html'
		})
	]
};

module.exports = config;
