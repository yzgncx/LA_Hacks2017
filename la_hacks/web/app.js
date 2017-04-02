var Twitter = require("node-twitter-api");
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

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

 var twitter = new Twitter({
        consumerKey: "SUBxCtGE3XL2k1TGF6ERNIh0S",
    	consumerSecret: "adLtZk2nvylcUcA7B3DBJewyZqNYC55fmZ9hYVp3r6nJW8dQQI",
    	callback: "http://localhost:3000/twitter-done"
    });

	app.get("/twitter-done", function(req,res) {
		var token = req.query.oauth_token;
		console.log(token);
		res.send("okay")
	})
    var _requestSecret;

    app.get("/request-token", function(req, res) {
        twitter.getRequestToken(function(err, requestToken, requestSecret) {
            if (err)
                res.status(500).send(err);
            else {
                _requestSecret = requestSecret;
                res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + requestToken);
            }
        });
    });

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
