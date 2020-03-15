const pingResolvers = require("./ping");
const reportResolvers = require("./report");
const userResolvers = require("./user");

module.exports = {
  Query: {
    ...pingResolvers.Query,
    ...reportResolvers.Query,
    ...userResolvers.Query,
  },
  Mutation: {
    ...reportResolvers.Mutation,
    ...userResolvers.Mutation,
  },
};
