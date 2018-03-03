var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {	
		orm.selectAll(function(res) {
			cb(res);
		});
	},
	create: function(burgerName, cb) {
		orm.create(burgerName, function(res) {
			cb(res);
		});
	},
	update: function(burgId, cb) {
		orm.update(burgId, function(res) {
			cb(res);
		});
	}
}

module.exports = burger;