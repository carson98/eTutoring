const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
  }
});

module.exports = mongoose.model('Profiles', ProfileSchema);