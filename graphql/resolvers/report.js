const Report = require("../../models/Reports");
const User = require("../../models/User");
const getAuthenticatedUser = require("../middlewares/authenticated");

module.exports = {
  Query: {},
  Mutation: {
    newReport: async (
      _,
      { newReportInput: { place, name, address, description, photo } },
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
          place,
          description,
          photo,
        });
        await newReport.add();
      } else {
        const newReport = new Report({
          reporter: registerUser._id,
          name,
          address,
          place,
          description,
          photo,
        });
        await newReport.add();
      }
      return "success";
    },
  },
};
