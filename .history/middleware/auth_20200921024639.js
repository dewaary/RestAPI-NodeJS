var connection = require('../connetions')
var mysql = require('mysql')
var md5 = require('md5')
var response = require('../res')
var jwt = require('jsonwebtoken')
var config = require('../config/secret')
var ip = require('ip')

exports.registrasi = function (req, res) {
    var post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
        role: req.body.role,
        tanggal_daftar: new Date()
    }

    var query = "SELECT email FROM ?? WHERE ??=?";
    var table = ["user", "email", post.email];

    query = mysql.format(query, table);

    connection.query(query, function (error, rows) {
        if(error){
            console.log(error)
        }else {
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["user"];
                query = mysql.format(query, table);
                connection.query(query, post, function (error, rows) {
                    if(error){
                        console.log(error)
                    }else {
                        response.ok("Succesfuly create user new", res);
                    }
                });
            }else {
                response.ok("Email is ready!", res)
            }
        }
    });
}

exports.login = function (req, res) {
    var post = {
        email: req.body.email,
        password: req.body.password,
        
    }

    var query = "SELECT * FROM ?? WHERE ??=? AND ??=?";
    var table = ["user", "password", md5(post.password), "email", post.email];

    query = mysql.format(query, table);
    connection.query(query, function (error, rows) {
        if(error){
            console.log(error);
        }else {
            if(rows.length == 1){
                var token = jwt.sign({rows}, config.secret, {
                    expiresIn: 1440
                });
                id_users = rows[0].id_users;

                var data = {
                    id_users: id_users,
                    access_token: token,
                    ip_address: ip.address()
                }

                var query = "INSERT INTO ?? SET ?";
                var table = ["akes_token"];

                query = mysql.format(query, table);
                connection.query(query, data, function (error, rows) {
                    if(error) {
                        console.log(error);
                    }else {
                         res.json({
                             success: true,
                             message: "Token JWT generated",
                             token:token,
                             currUser: data.id_user
                         });
                    }
                });
            }else {
                 res.json({"Error": true, "Message": "Email or Password Invalid"});
            }
        }
    })
}

exports.secretPage = function (req, res) {
    response.ok("This page is only for users who have role == 2!")
}