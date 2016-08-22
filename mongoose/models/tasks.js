/**
 * Created by increment on 21.08.16.
 */
var mg = require('../index');

var tasksSchema = new mg.Schema({
	name: {type: String},
	date: {type: String},
	time: {type: String},
	category: {type: String},
	VIP: {type: Boolean}
});

var tasksDB = mg.model('Tasks', tasksSchema);

module.exports = tasksDB;