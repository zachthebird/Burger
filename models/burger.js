var orm = require('../config/orm.js');

var burger = {
	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},
	insertNew: function(valToInsert, cb) {
		orm.insertNew('burgers', 'burger_name', valToInsert, function(res) {
			cb(res);
		});
	},
	update : function(newVal, rowId, cb) {
		orm.update ('burgers', 'devoured', newVal, rowId, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;