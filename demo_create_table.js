var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user : "root",
    password : "",
    database : "student"

});
con.connect(function(err){
    if(!err){
        console.log("Connected!");
        var sql = "CREATE TABLE info (name VARCHAR(255), address VARCHAR(255) , roll VARCHAR(255))"
        con.query(sql , function(err){
            if(!err){
                console.log("Table created!");
            }
            else{
                console.log("fail!");
            }
        });
    }
    else{
        console.log("fail!");
    }
});