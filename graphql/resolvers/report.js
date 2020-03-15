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
      console.log(context);
      const { user } = getAuthenticatedUser(context);
      if (!user) {
        throw new Error("Unauthenticated!");
      }
      const newUser = new User({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
      });

      const savedUser = await newUser.add();
    },
  },
};
