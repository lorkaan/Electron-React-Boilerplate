const path = require('path');

module.exports = {
  entry: [
		'./src/electron/createElectron.js'
	],
	target: "electron-main",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'electron.bundle.js'
	},
  module:{
    rules:[
			{
				test: /electron\/.+\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
  }
};
