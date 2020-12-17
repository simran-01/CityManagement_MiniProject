const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  contact: Number,
  birthDate: String,
  bloodGroup: String,
  gender: String,
  type: String,
});
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
