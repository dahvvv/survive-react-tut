var component = require('./component');
require('./main.css');

var app = document.createElement('div');

app.appendChild(component());

document.body.appendChild(app);
