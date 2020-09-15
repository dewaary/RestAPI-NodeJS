'use strict';

var response = require('./res');
var connection = require('./connetin');

exports.index = function (req, res) {
    response.ok("Aplication Rest API Ready...",res)
};

exports.dataStudents = function (req, res) {
    connection.query('SELECT * from mahasiswa', function(error, rows, fields){
        if(error) {
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};
