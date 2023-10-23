var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 30
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100
  },
  emailId: {
    type: String,
    required: true,
    unique: true
   
  }
});

module.exports = new mongoose.model("User", UserSchema);
