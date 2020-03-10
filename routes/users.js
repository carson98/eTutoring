var express = require('express');
var router = express.Router();
var AccoụntController = require('../controllers/AccountController')

/* GET users listing. */
router.get('/signin', function(req, res, next) {
	res.render('user/signin', {
		tille: 'login',
		layout: false
	});
});

// log in
router.post('/signin', AccoụntController.login);


module.exports = router;
