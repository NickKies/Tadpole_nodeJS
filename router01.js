var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");

app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

var server = app.listen(3000, function() {
    console.log("Express server has started on port 3000");
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//var router = require('./router/main01')(app, fs);
//var router = require('./router/main02')(app, fs);
//var router = require('./router/main03')(app, fs);
//var router = require('./router/main04')(app, fs);
var router = require('./router/main05')(app, fs);