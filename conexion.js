const {DB_HOST
  , DB_USER
  , DB_PASSWORD
  , DB_NAME
  , DB_PORT
} = require('./config.js');

 var mysql = require('mysql2');
var pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
});

var getConnection = function (cb) {
  pool.getConnection(function (err, connection) {
    if (err) {
      return cb(err);
    }
    cb(null, connection);
  });
}

module.exports = getConnection;
