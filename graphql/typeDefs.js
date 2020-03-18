const { gql } = require("apollo-server");

module.exports = gql`
  input generateTokenInput {
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
  }
  input newReportInput {
    region: String!
    name: String!
    address: String!
    description: String!
  }
  type Region {
    id: String!
    name: String!
    email: String!
  }
  type Query {
    ping: String!
    getAllRegions: [Region]
  }
  type Mutation {
    generateToken(generateTokenInput: generateTokenInput): String!
    newReport(newReportInput: newReportInput): String!
  }
`;
