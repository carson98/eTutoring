var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signin', function(req, res, next) {
  res.render('user/signin',{
    layout: false
  })
});
module.exports = router;
