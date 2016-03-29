var path = require('path');

var PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

module.exports = {
	// entry accepts a path or an object of paths.  we'll do the latter bc it can be better later as shit gets more complex
	entry: { app: PATHS.app },
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	}
};
