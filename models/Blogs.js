const mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    url: {
        type: String,
        trim: true,
    },
    comments: [{
        sender_id: {
            type: String,
            trim: true,
        },
        body: String,
        date: { type: Date, default: Date.now }
    }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        marks: Number
    }
});

module.exports = mongoose.model('Blogs', BlogSchema);