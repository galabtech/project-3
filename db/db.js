var mysql = require("promise-mysql");


var db = {
  pool: null,
  connect: function() {
    var pool = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "",
      database: "vacations",
      connectionLimit: 10
    });
    this.pool = pool;
    console.log("Connected to db ");
  }
};

module.exports = db;