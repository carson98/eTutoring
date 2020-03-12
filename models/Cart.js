var mongoose = require('mongoose');

var CartSchema = new mongoose.Schema({
	course_id: {
		type: String,
		require: true
    },
    student_id:{
        type: String,
        require: true
    },
    quanity:{
        type: Number,
        require: true
    },
    cartdetail_id:{
        type: String
    }
});

module.exports = mongoose.model('Cart', CartSchema);
