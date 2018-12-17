const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: [
		'./src/createElectron.jsx'
	],
	target: "electron-main",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'output.bundle.js'
	},
	module:{
		rules:[
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.htmls$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	]
};
