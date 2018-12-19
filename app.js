var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var port = process.env.PORT || 3000;
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

app.use('/', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());

setupController(app);
apiController(app);

console.log('setup TODO by using: http://localhost:' + port + '/api/setupTodos');
app.listen(port);