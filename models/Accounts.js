
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;


const AccountSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  profile: {
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    phone: {
      type: String,
      require: true
    },
    gender: {
      type: String,
      require: true
    }
  },
  role: {
    type: String,
    require: true
  }
});

AccountSchema.pre('save', function (next) {
  var account = this;
  if (!account.isModified('password')) { return next() };
  bcrypt.hash(account.password, 10).then((hashedPassword) => {
    account.password = hashedPassword;
    next();
  })
}, function (err) {
  next(err)
})
AccountSchema.methods.comparePassword = function (candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return next(err);
    next(null, isMatch)
  })
}

module.exports = mongoose.model("Accounts", AccountSchema);
