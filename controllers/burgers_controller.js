var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
	burger.selectAll(function(data) {
		var hamburgerObj = {
			burgers: data
		};
		res.render('index', hamburgerObj);
	});
});

router.post('/', function(req, res) {
	burger.insertNew(req.body.name, function() {
		res.redirect('/');
	});
});

router.put('/:id', function(req, res){
	var id = req.params.id;
	burger.update(req.body.devoured, id, function() {
		res.redirect('/');
	});
});

module.exports = router;