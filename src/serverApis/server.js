var express = require('express');
var app = express();
const SERVER_PORT=5000;
//-------------------------
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})
//-------------------------------------------
app.get('/', function (req, res) {
    res.send('Hello World!');
});

//------------------------
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const api = require('./usersApi')
app.use('/', api)
//---------------------------------
app.listen(SERVER_PORT, function () {
    console.log('Example app listening on port 5000!');
});
