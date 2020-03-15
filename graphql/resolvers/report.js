const Report = require("../../models/Reports");
const User = require("../../models/User");
const Regions = require("../../config/regions.json");
const {
  sendReportWithoutPhoto,
  sendReportWithPhoto,
} = require("../../util/mails/sendReport");
const getAuthenticatedUser = require("../middlewares/authenticated");

module.exports = {
  Query: {},
  Mutation: {
    newReport: async (
      _,
      { newReportInput: { region, name, address, description, photo } },
      context
    ) => {
      const { user } = getAuthenticatedUser(context);
      if (!user) {
        throw new Error("Unauthenticated!");
      }
      const registerUser = await User.findOne({ email: user.email });
      if (!registerUser) {
        const newUser = new User({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        });
        const savedUser = await newUser.add();
        const newReport = new Report({
          reporter: savedUser._id,
          name,
          address,
          region,
          description,
          photo,
        });
        await newReport.add();
      } else {
        const newReport = new Report({
          reporter: registerUser._id,
          name,
          address,
          region,
          description,
          photo,
        });
        const savedReport = await newReport.add();
        const ReportData = await Report.findOne({
          _id: savedReport._id,
        }).populate("reporter");
        const Region = Object.keys(Regions)
          .filter(function(key) {
            return Regions[key].name === ReportData.region;
          })
          .reduce(function(obj, key) {
            return Regions[key];
          }, {});
        sendReportWithoutPhoto(ReportData, Region);
        // cause of upload problem, photo will be avaible soon
        // if (ReportData.photo === "") {
        //   sendReportWithoutPhoto(ReportData, Region);
        // } else {
        //   sendReportWithPhoto(ReportData, Region);
        // }
      }
      return "success";
    },
  },
};
