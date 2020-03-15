const Regions = require("../../config/regions.json");

module.exports = {
  Query: {
    getAllRegions: () => Regions,
  },
  Mutation: {},
};
