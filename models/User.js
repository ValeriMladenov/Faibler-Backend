const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: { required: false, type: String },
  lastName: { required: false, type: String },
  email: { required: true, type: String },
  phone: { required: false, type: String, default: "" },
});

UserSchema.methods.add = function() {
  return new Promise(resolve => {
    this.save((error, savedObj) => {
      if (error) throw error;
      resolve(savedObj);
    });
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
