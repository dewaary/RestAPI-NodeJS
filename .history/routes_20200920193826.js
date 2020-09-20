'use strict';

module.exports = function(app) {
    var jsoni = require('./controller');

    app.route('/')
    .get(jsoni.index);

    app.route('/tampil')
    .get(jsoni.dataStudents);

    app.route('/tampil/:id')
    .get(jsoni.getIDstudents);

    app.route('/create')
    .post(jsoni.addData);

    app.route('/edit')
    .put(jsoni.editData);

    app.route('/delete')
    .delete(jsoni.deleteData);

    app.route('/viewgroup')
    .get(jsoni.viewGroup);
}