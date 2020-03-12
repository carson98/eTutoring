var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
	courseName: {
		type: String,
		require: true
	},
	courseBegin: {
		type: Date,
		default: Date.now
	},
	courseFinal: {
		type: Date,
		default: Date.now
	},
	tutor_id: {
		type: String,
		require: true
    },
    courseNote:{
        type: string,
        require: true
    },
    coursePrice:{
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('Courses', CourseSchema);
