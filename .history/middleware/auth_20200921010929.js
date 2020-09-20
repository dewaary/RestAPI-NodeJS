var connection = require('../connetions')
var mysql = require('mysql')
var md5 = require('md5')
var response = require('response')
var jwt = require('jsonwebtoken')
var config = require('../config/secret')
var ip = require('ip')

exports.regristrasi = function (req, res) {
    var post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
        role: req.body.role,
        tanggal_daftar: new Date()
    }
}