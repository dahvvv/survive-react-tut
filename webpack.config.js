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
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	}
};

// Default configuration
if (TARGET == 'start' || !TARGET) {
	module.exports = merge(common, {
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
