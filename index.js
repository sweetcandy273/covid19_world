var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"covid19-data"
});

con.connect(function (err) {
    if (err) { throw err; } else {
        console.log("Connect!!!");

    }

});