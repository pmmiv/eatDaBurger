var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];


  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
};

var orm = {
  selectAll: function(cb) {

    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      //will have to populate the handlebars template with this info.
      cb(result);
    });
  },
  create: function(burgerName, cb) {

    var queryString = "INSERT INTO burgers SET ?";

    console.log(queryString);

    connection.query(queryString, {burger_name: burgerName}, function(err, result) {
      if (err) throw err;
      cb(result);
    });

  },
  update: function(burgId, cb) {

    var queryString = "UPDATE burgers SET ? WHERE ?";

    console.log(queryString);

    connection.query(queryString, [{devoured: true}, {id: burgId}], function(err, result) {
      if (err) throw err;
      cb(result);
    });

  }
};

module.exports = orm;
