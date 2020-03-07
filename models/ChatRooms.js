const mongoose = require('mongoose');

var ChatRoomSchema = new mongoose.Schema({
    tutor_id: String,
    student_id: String,
    message: [{
        sender_id: {
            type: String,
            trim: true,
        },
        text: String,
        date: Date,
        is_read: Boolean
    }],
});

module.exports = mongoose.model('ChatRooms', ChatRoomSchema);