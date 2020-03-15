const mongoose = require("mongoose");

const { Schema } = mongoose;

const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  username: { required: false, type: String },
  email: { required: true, type: String },
  phone: { required: false, type: String, default: "" },
  firstName: { required: false, type: String },
  middleName: { required: false, type: String, default: "" },
  lastName: { required: false, type: String },
  website: { required: false, type: String, default: "" },
  facebook: { required: false, type: String, default: "" },
  linkedin: { required: false, type: String, default: "" },
  instagram: { required: false, type: String, default: "" },
  github: { required: false, type: String, default: "" },
  position: { required: false, type: String, default: "" },
  company: { required: false, type: String, default: "" },
  avatarImage: {
    type: String,
    default:
      "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png",
  },
  joinDate: { type: Number, required: true, default: Date.now() },
  lastLogin: { type: Number, required: true, default: Date.now() },
  status: {
    isActivated: { type: Boolean, default: false },
    lastActiveDate: { type: Number, default: Date.now() },
  },
  bio: { required: false, type: String, default: "" },
  password: { required: true, type: String },
  role: { required: false, type: String },
});

UserSchema.methods.add = function() {
  return new Promise(resolve => {
    bcrypt.hash(this.password, 10, (err, hash) => {
      if (err) throw err;
      this.password = hash;
      this.save((error, savedObj) => {
        if (error) throw error;
        resolve(savedObj);
      });
    });
  });
};

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
