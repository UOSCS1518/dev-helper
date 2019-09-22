var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var expressLayouts = require('express-ejs-layouts');
// var dbconfig = require('/Users/geonhoi/Desktop/')
// var sql = require("sql-loader")("./sql")
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// DB Connector load 
// require("./lib/dbConnect.js")

// view engine setup
// app.set('views', __dirname + '/views');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
　
// ejs-layouts setting
// app.set('layout', 'layout');
// app.set("layout extractScripts", true);
// app.use(expressLayouts);

require("./routes/v1.js")(app)
// app.use('/', require('./routes/view'));
app.all('/*', (req, res, next) => {
  console.log(req.body)
  next()
})
global.isEmpty = function(value) {
  if(value === '' || typeof value === 'undefined' || value === null ) {
    return true;
  } else {
    return false;
  }
}

Date.prototype.formating = function(){
  const y = this.getFullYear();
  let m = this.getMonth() + 1;
  let d = this.getDate();
  if(m < 10) 
    m = '0' + m;
  if(d < 10) 
    d = '0' + d;
  return [y, m, d].join('-');
}

module.exports = app;
