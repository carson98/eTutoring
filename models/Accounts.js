const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  profile_id: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    trim: true,
  }
});

AccountSchema.static("checkExisted", function(id) {
    return this.find()
})

module.exports = mongoose.model('Accounts', AccountSchema);