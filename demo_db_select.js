var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user : "root",
    password : "",
    database : "student"

});
con.connect(function(err){
    if(!err){
      var sql= "SELECT * FROM info";
        con.query(sql , function(err, result , fields){
            if(!err){
                console.log(result);
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