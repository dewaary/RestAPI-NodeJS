'use strict';

var response = require('./res');
var connection = require('./connetion');

exports.index = function (req, res) {
    response.ok("Aplication Rest API Ready...",res)
};