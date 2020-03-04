var express = require('express');
var router = express.Router();

router.get('/tutorDashboard', async (req, res) => {
    res.render('tutor/tutorDashboard')
});

router.get('/manageStudent', async (req, res) => {
    res.render('tutor/manageStudent')
});

router.get('/manageCourse', async (req, res) => {
    res.render('tutor/manageCourse')
});

router.get('/accountTutor', async (req, res) => {
    res.render('tutor/accountTutor')
});

router.get('/scheduleTutor', async (req, res) => {
    res.render('tutor/scheduleTutor')
});

router.get('/chatTutor', async (req, res) => {
    res.render('tutor/chatTutor')
});
module.exports = router;
