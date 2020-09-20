const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var morgan = require('morgan');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

//call routes

var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});