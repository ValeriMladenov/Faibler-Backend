const { gql } = require("apollo-server");

module.exports = gql`
  input generateTokenInput {
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
  }
  type Query {}
  type Mutation {
    generateToken(generateTokenImput: generateTokenInput): String!
  }
`;
