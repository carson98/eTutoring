const express = require('express');
const router = express.Router();
const account = require('../models/Accounts');
router.get('/', (req, res, next) => {
	res.render('admin/adminDashboard', { dashboard: 'dashboard', title: 'Dashboard' });
});
//  Tutor
router.get('/tutorList', (req, res, next) => {
	res.render('admin/manageTutors', { tutor: 'tutor', title: 'Tutor List' });
});
router.get('/tutor-upload/:id', (req, res, next) => {
	res.render('admin/tutorUpload', { tutor: 'tutor', title: 'Upload Tutor' });
});
router.get('/tutorDetail/:id', (req, res, next) => {
	res.render('admin/tutorDetail', { tutor: 'tutor', title: 'Tutor Detail' });
});

// Student
router.get('/studentList', (req, res, next) => {
	account.find(async (err, rs) => {
		let studentList = rs.map((user) => {
			if (user.role === 'student') {
				return user;
			}
		});
		console.log(studentList);
	});
	res.render('admin/manageStudent', { student: 'student', title: 'Student List' });
});
router.get('/student-upload/:id', (req, res, next) => {
	res.render('admin/studentUpload', { student: 'student', title: 'Upload Student' });
});
router.get('/studentDetail/:id', (req, res, next) => {
	res.render('admin/studentDetail', { tutor: 'tutor', title: 'Student Detail' });
});

module.exports = router;
