'use strict';

module.exports = function(app) {
    var jsoni = require('./controller');

    app.route('/')
    .get(jsoni.index);
}