var mysql = require('mysql');
//สร้าง Connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "covid19-data"
});

//connect Database
con.connect(function (err) {
    if (err) { throw err; } else {
        console.log("Connect!!!");
        //อยากให้แสดงอะไรแก้ที่ sql
        const sql = "select `COL 2`,`COL 66` from `covid19_confirmed`";
        var total_confirmed;
        con.query(sql, function (err, result,fields) {
            if (err) {
                throw err; 
            } else {


                console.log(result);
         
               
            }
        });
       


    }

});