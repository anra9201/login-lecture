const mysql = require('mysql');

const db = mysql.createConnection({
  
});

db.connect();

module.exports = db;