const mongoose = require("mongoose");

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

AccountSchema.static("checkExisted", function(id) {
  return this.find();
});

module.exports = mongoose.model("Accounts", AccountSchema);
