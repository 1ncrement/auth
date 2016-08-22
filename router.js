/**
 * Created by user on 22.08.2016.
 */
var express = require('express'),
	path = require('path'),
	router = express.Router(),
	tasksCtrl = require('./controllers/tasks.ctrl');

router.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname, './index.html'));
});

module.exports = router;