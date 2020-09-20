'use strict';

module.exports = function(app) {
    var jsoni = require('./controller');

    app.route('/')
    .get(jsoni.index);

    app.route('/tampil')
    .get(jsoni.dataStudents);

    app.route('/tampil/:id')
    .get(jsoni.getIDstudents);
}