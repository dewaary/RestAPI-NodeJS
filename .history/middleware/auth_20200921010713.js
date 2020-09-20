var connection = require('../connetions')
var mysql = require('mysql')
var md5 = require('md5')
var response = require('response')
var jwt = require('jsonwebtoken')
var config = require('../config/secret')
var ip = require('ip')

