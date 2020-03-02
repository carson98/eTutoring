var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    uuid: String,
    name: String,
    email: String,
    createdDate: { type: Date, default: Date.now }, 
    updatedDate: { type: Date, default: Date.now }
  });

module.exports = mongoose.model("User", UserSchema);

