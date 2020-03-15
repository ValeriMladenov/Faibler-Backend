const reportResolvers = require("./report");

module.exports = {
  Query: {
    ...reportResolvers.Query,
  },
  Mutation: {
    ...reportResolvers.Mutation,
  },
};
