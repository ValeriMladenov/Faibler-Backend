const { gql } = require("apollo-server");

module.exports = gql`
  input generateTokenInput {
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
  }
  input newReportInput {
    place: String!
    name: String!
    address: String!
    description: String!
    photo: String!
  }
  type Query {
    ping: String!
  }
  type Mutation {
    generateToken(generateTokenInput: generateTokenInput): String!
    newReport(newReportInput: newReportInput): String!
  }
`;
