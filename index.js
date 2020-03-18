/* eslint-disable no-console */
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers/index");
// Configure dotenv
require("dotenv").config();

const connectDB = require("./config/database");

const port = process.env.PORT;
// Connect Database
connectDB();

const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
  context: async ({ req }) => ({ req }),
});
server.listen(port).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
console.log(`OneTap Backend ready...`);
