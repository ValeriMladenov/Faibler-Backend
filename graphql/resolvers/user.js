const jwt = require("jsonwebtoken");

module.exports = {
  Query: {},
  Mutation: {
    generateToken: async (
      _,
      { generateTokenInput: { firstName, lastName, phone, email } }
    ) => {
      return jwt.sign(
        {
          firstName,
          lastName,
          email,
          phone,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: 604800,
        }
      );
    },
  },
};
