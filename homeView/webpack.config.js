const path = require('path');

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	} ,
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	
	devtool: 'source-map',
	
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			}
		]
	},
	plugins: [
		new CheckerPlugin()
	]
};
