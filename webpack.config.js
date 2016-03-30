var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');

var TARGET = process.env.npm_lifecycle_event;
var PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

var common = {
	// entry accepts a path or an object of paths.  we'll do the latter bc it can be better later as shit gets more complex
	entry: { app: PATHS.app },
	// Add resolve.extensions.
	// '' is needed to allow imports without an extension
	// Note the .'s before extensions as it will fail to match without!
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				// these will get processed right to left.  so css-loader happens first, then style-loader
				loaders: ['style', 'css'],
				// Include accepts either a path or an array of paths
				include: PATHS.app
			},
			{
				test: /\.jsx?$/,
				// Enable caching for improved performance during development
				// It uses default OS dictionary by default.  If you need something more custom, pass a path to it.  I.e., babel?cacheDirectory=<path>
				loaders: ['babel?cacheDirectory'],
				// Parse only app files!  Without this is will go through the entire project.
				// In addition to being slow, that will most likely result in an error.
				include: PATHS.app
			}
		]
	}
};

// Default configuration
if (TARGET == 'start' || !TARGET) {
	module.exports = merge(common, {
		devtool: 'eval-source-map',
		devServer: {
			contentBase: PATHS.build,

			// Enable history API fallback so HTML5 History API based routing works.  This is a good default that will come in handy in more complicated setups.
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,

			// Display only errors to reduce the amount of output.
			stats: 'errors-only',

			// Parse host and port from env so this is easy to customize.
			// If you use Vagrant of Cloud9, set host: process.env.HOST || '0.0.0.0';
			// 0.0.0.0 is available to all network devices, unlike default localhost
			host: process.env.HOST,
			port: process.env.PORT
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	});
}

if (TARGET == 'build') {
	module.exports = merge(common, {});
}
