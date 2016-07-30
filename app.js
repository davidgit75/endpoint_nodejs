var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var mongoose = require("mongoose");

var app = express();
var server = app.listen(3000);

//mongoose.connect("mongodb://localhost/endpoint_users");

var controllers = require("./controllers/controllers");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", controllers.app.get_home);
app.post("/app_test_endpoint/get_users", controllers.app.post_home);
//app.post("/app_test_endpoint/add_user", controllers.app.add_user);


module.exports = app;
