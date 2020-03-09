const express = require('express');
const router = express.Router();
const mongoClient = require('mongodb').mongoClient;
const mongoUrl = 'mongodb://heroku_ptn142g5:fur6mijdqu54vb26q9e7c08qfg@ds141786.mlab.com:41786/heroku_ptn142g5';
var assert = require('assert');

/* GET admin pages. */
router.get('/', (req, res, next) => {
	res.render('admin/adminDashboard', { dashboard: 'dashboard' });
});
//  Tutor
router.get('/tutorList', (req, res, next) => {
	res.render('admin/manageTutors', { tutor: 'tutor' });
});
router.get('/tutor-upload/:id', (req, res, next) => {
	res.render('admin/tutorUpload', { tutor: 'tutor' });
});
router.get('/tutorDetail/:id', (req, res, next) => {
	res.render('admin/tutorDetail', { tutor: 'tutor' });
});

// Student
router.get('/studentList', (req, res, next) => {
	res.render('admin/manageStudent', { student: 'student' });
});
router.get('/student-upload/:id', (req, res, next) => {
	res.render('admin/studentUpload', { student: 'student' });
});
router.get('/studentDetail/:id', (req, res, next) => {
	res.render('admin/studentDetail', { tutor: 'tutor' });
});

// Course
router.get('/course', (req, res, next) => {
	res.render('admin/manageCourse', { course: 'course' });
});

module.exports = router;
