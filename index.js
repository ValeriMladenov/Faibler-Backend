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

// load regex middleware
const regexMiddleware = require("./graphql/middlewares/regexMiddleware");

const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
  context: async ({ req }) => ({ req: regexMiddleware(req) }),
});
server.listen(port).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
console.log(`Faibler Backend ready...`);
