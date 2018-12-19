var configValues = require('./config');

module.exports = {
	getDbConnectionString: function() {
		return 'mongodb://' + configValues.uname + ':' + configValues.pwd + 
			'@ds127139.mlab.com:27139/nodetodosample';
	}
}