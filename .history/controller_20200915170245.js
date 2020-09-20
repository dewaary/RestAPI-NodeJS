'use strict';

var response = require('./res');
var connection = require('./connetions');

exports.index = function (req, res) {
    response.ok("Aplication Rest API Ready...",res)
};

exports.dataStudents = function (req,res) {
    connection.query("SELECT * from mahasiswa", function(error, rows, fields){
        if(error) {
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

exports.getIDstudents = function (req,res) {
    let id = req.params.id;
    connection.query("SELECT * from mahasiswa where id = ?",[id],
     function(error, rows, fields){
        if(error) {
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};
