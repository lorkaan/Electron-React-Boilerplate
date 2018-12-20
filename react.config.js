const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports ={
  entry: './src/react/HelloWorld.jsx',
  	output: {
  		path: path.resolve(__dirname, 'dist'),
  		filename: 'react.bundle.js'
  	},
  	module:{
  		rules:[
  			{
  				test: /react\/\.+\.(js|jsx)$/,
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
