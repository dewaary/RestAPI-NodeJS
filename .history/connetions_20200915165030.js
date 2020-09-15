var mysql = require('mysql');

//create connetion database
const connetion = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs"
});

connetion.connect((err)=>{
    if(err) throw err;
    console.log("MySQL Ready...");
});