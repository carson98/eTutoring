// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
var session = require('express-session')
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');
var bodyParser = require('body-parser')
var i18n = require('i18n')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var demoRouter = require('./routes/demo');
var config = require(__dirname + '/config.json')[process.env.NODE_ENV || "development"];

var app = express();

//database connection
mongoose.connect(config.dbUrl, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true });

// view engine setup
app.engine('.hbs', expressHbs({
  defaultLayout: 'layout',
  extname: '.hbs',
}))
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/demo', demoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404;
  next(err);
  //next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
