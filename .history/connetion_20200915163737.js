var mysql = require('mysql');

//create connetion database
const conn = mysql.createConnection({
    host:"localhost",
    user:"",
    password:"",
    database:"nodejs"
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("MySQL Ready...");
});