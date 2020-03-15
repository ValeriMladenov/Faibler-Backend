const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const ReportSchema = new Schema({
  reporter: { required: true, type: ObjectId },
  name: { required: true, type: String, default: "" },
  region: { required: true, type: String, default: "" },
  address: { required: true, type: String, default: "" },
  photo: { required: false, type: String, default: "" },
  description: { required: true, type: String, default: "" },
});

ReportSchema.methods.add = function() {
  return new Promise(resolve => {
    this.save((error, savedObj) => {
      if (error) throw error;
      resolve(savedObj);
    });
  });
};

const Report = mongoose.model("Report", ReportSchema);

module.exports = Report;
