var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const mongo = require('mongodb');
const mongoUrl = 'mongodb://heroku_ptn142g5:fur6mijdqu54vb26q9e7c08qfg@ds141786.mlab.com:41786/heroku_ptn142g5';

/* GET users listing. */
router.get('/signin', function(req, res, next) {
	res.render('user/signin', {
		tille: 'login',
		layout: false
	});
});

// log in
router.post('/signin', function(req, res) {
	var testEmail = 'Sterling26@hotmail.com';
	var testPassword = 'HeLqTHbee7XiDJD';
	mongo.Promise = global.Promise;
	mongo.connect(mongoUrl, function(err, db) {
		if (err) throw err;
		if (req.body.email == testEmail && req.body.password == testPassword) {
			/* session handle 
			
			*/

			res.redirect('/');
		} else {
			res.redirect('/users/signin');
		}
	});
});

// log out
router.post('/signout', function(req, res) {
	req.session.destroy((err) => {
		if (err) {
			throw err;
		} else {
			res.redirect('user/sigin');
		}
	});
});

module.exports = router;
