var mysql = require('mysql');

//create connetion database
const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mahasiswa"
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("MySQL Ready...");
});

module.exports = conn;