# graphql-server
*Please see [the repo root folder](https://github.com/jesperlndk/graphql-react-nodejs-demo-app)*.

**GraphQL Server for "GraphQL + React + Node.js REST API - example app"**  
This GraphQL server provides a more efficient, powerful and flexible alternative to the REST API. It allows GraphQL clients to define the structure of the data required, and exactly the same structure of the data is returned from the server, therefore preventing excessively large amounts of data from being returned and [over-fetching](https://stackoverflow.com/questions/44564905/what-is-over-fetching-or-under-fetching).

This project uses open-source [Apollo Server](https://www.apollographql.com/docs/apollo-server/) to serve an API for GraphQL clients.

## Installation

Prerequisites:
* Node v8.11.4 and later
* npm v5.6.0 and later

Run command `npm install` to install all needed dependencies.

## Usage

| Command | Description |
|-----|-----|
| `npm run start` | Start the server. If environment variable `NODE_ENV` is NOT set to production, the server will try requesting [the API](https://github.com/jesperlndk/graphql-react-nodejs-demo-app/tree/master/api) by localhost:5000 |
| `npm run test` | Run all tests |
| `npm run lint` | Run linter on all JS files |
| `npm run docs` | Generate documentation website for the GraphQL schema. Documentation website will be available at `./docs/index.html`. This command requires that the server is already running locally. |

## GraphQL Playground

[GraphQL Playground](https://github.com/prisma/graphql-playground) is a graphical, interactive, in-browser GraphQL IDE, created by Prisma and based on GraphiQL.  
It makes exploring, testing and and debugging the GraphQL server very easy and efficient.

In development, Apollo Server enables GraphQL Playground on the same URL as the GraphQL server itself (`http://localhost:4000/`) and automatically serves the GUI to web browsers.  
When `NODE_ENV` is set to "production", GraphQL Playground (as well as introspection) is disabled as a production best-practice.