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
    connection.query("SELECT * from mahasiswa where id_mahasiswa = ?",[id],
     function(error, rows, fields){
        if(error) {
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

exports.addData = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query("INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)",
    [nim,nama,jurusan],
    function(error, rows, fields){
       if(error) {
           console.log(error);
       }else {
           response.ok("Succesfully Add Data Students", res)
       }
   });
};

exports.editData = function (req, res) {
    var id = req.body.id;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query("UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?", [nim, nama, jurusan, id_mahasiswa], 
            function(error, rows, fields) {
            if(error){
                console.log(error)
            }else {
                response.ok("Succesfully Edited Data Students by Id", res);
            }
            
        });
};

exports.deleteData = function (req, res) {
    var id = req.body.id;

    connection.query("DELETE FROM mahasiswa WHERE id_mahasiswa=?", [id],
    function(error, rows, field) {
        if(error) {
            console.log(error)
        }else {
            response.ok("Succesfully Deleted Data Students by Id", res);
        }
    });
};

exports.viewGroup = function (req, res) {
    connection.query("")
}

