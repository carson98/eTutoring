var express = require('express');
var router = express.Router();

router.get('/browseCourse', async (req, res) => {
	res.render('student/browseCourse', { title: 'Browse Course' });
});

router.get('/viewCourse', async (req, res) => {
	res.render('student/viewCourse', { title: 'Courses' });
});

router.get('/courseDetail', async (req, res) => {
	res.render('student/courseDetail', { title: 'Course Detail' });
});

router.get('/accountStudent', async (req, res) => {
	res.render('student/accountStudent', { title: 'Account' });
});

router.get('/scheduleStudent', async (req, res) => {
	res.render('student/scheduleStudent', { title: 'Schedule' });
});

router.get('/chatStudent', async (req, res) => {
	res.render('student/chatStudent', { title: 'Chat' });
});

router.get('/cart', async (req, res) => {
	res.render('student/cart', { title: 'Cart' });
});

router.get('/pay', async (req, res) => {
	res.render('student/pay', { title: 'pay' });
});

module.exports = router;
