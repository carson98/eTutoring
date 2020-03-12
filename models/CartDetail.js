var mongoose = require("mongoose");

var CartdetailSchema = new mongoose.Schema ({
    course_id: {
		type: String,
		require: true
    },
    student_id:{
        type: String,
        require: true
    },
    totalPrice:{
        type: String
    },
});

module.exports = mongoose.model('CartDetail', CartdetailSchema);