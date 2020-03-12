var express = require('express');
var router = express.Router();

router.get('/tutorDashboard', async (req, res) => {
	res.render('tutor/tutorDashboard', { title: 'Dashboard' });
});

router.get('/manageStudent', async (req, res) => {
	res.render('tutor/manageStudent', { title: 'Student List' });
});

router.get('/manageCourse', async (req, res) => {
	res.render('tutor/manageCourse', { title: 'Manage Course' });
});

router.get('/accountTutor', async (req, res) => {
	res.render('tutor/accountTutor', { title: 'Account' });
});

router.get('/scheduleTutor', async (req, res) => {
	res.render('tutor/scheduleTutor', { title: 'Schedule' });
});

router.get('/chatTutor', async (req, res) => {
	res.render('tutor/chatTutor', { title: 'Chat' });
});
module.exports = router;
