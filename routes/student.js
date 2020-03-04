var express = require("express");
var router = express.Router();

router.get("/browseCourse", async (req, res) => {
  res.render("student/browseCourse");
});

router.get("/viewCourse", async (req, res) => {
  res.render("student/viewCourse");
});

router.get("/accountStudent", async (req, res) => {
  res.render("student/accountStudent");
});


router.get("/scheduleStudent", async (req, res) => {
  res.render("student/scheduleStudent");
});

router.get("/chatStudent", async (req, res) => {
  res.render("student/chatStudent");
});

module.exports = router;
