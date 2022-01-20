var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user : "root",
    password : "",
    database : "student"

});
con.connect(function(err){
    if(!err){
        var sql = "INSERT INTO info (name, address, roll) VALUES ('saikat', 'bogra', '13')";  
        con.query(sql , function(err){
            if(!err){
                console.log("done!");
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