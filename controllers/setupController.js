var Todos = require('../models/todoModel');

console.log('setting up controller...');

module.exports = function(app) {
	app.get('/api/setupTodos', function(req,res) {
		// see database
		var starterTodos= [
			{
				username: 'test',
				todo: 'buy milk',
				isDone: false,
				hasAttachment: false
			},
				{
				username: 'test',
				todo: 'buy cheese',
				isDone: false,
				hasAttachment: false
			},
				{
				username: 'test',
				todo: 'do somethine else',
				isDone: false,
				hasAttachment: false
			}
		];
		Todos.create(starterTodos, function(err, results) {
			res.send(results);
		});
	});
}