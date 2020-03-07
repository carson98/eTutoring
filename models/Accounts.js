var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;



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
    type: ObjectId,
    ref: 'Profiles'
  },
  role: {
    type: String,
    trim: true,
  }
});

module.exports = mongoose.model('Accounts', AccountSchema);