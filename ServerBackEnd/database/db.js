var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Esnafer19'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected');
});

module.exports = connection;
