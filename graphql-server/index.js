// Load env variables
require('dotenv').config();

// Do requires
const express = require('express');
const glue = require('schemaglue');
const { ApolloServer } = require('apollo-server-express');
const { path, port, playground } = require('./src/config');
const apis = require('./src/apis');

// Use schemaglue to make schema and resolvers
const { schema, resolver } = glue('src/graphql');

// Create Apollo Server
const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolver,
  playground,
  context: apis,
});

// Setup server and run
const app = express();
server.applyMiddleware({ app, path });

app.listen({ port }, () => {
  console.log(`🚀 GraphQL Server ready at http://localhost:${port}${server.graphqlPath}`);
});
