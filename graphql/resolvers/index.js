const pingResolvers = require("./ping");
const reportResolvers = require("./report");
const userResolvers = require("./user");
const regionResolvers = require("./region");

module.exports = {
  Query: {
    ...pingResolvers.Query,
    ...reportResolvers.Query,
    ...userResolvers.Query,
    ...regionResolvers.Query,
  },
  Mutation: {
    ...reportResolvers.Mutation,
    ...userResolvers.Mutation,
  },
};
