const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

// BACK END

// Schema folder, type definitions, resolvers
// Query to generate a response from OpenAI
// Mutation to save a response to the database

// FRONT END

// Queries, mutations to connect, the ones that go into utils, file mutations and file queries
// Install apollo client, graphql(On the client folder, needed in both client and server folders)
// Now you can start connecting into the server, hooks, usequeries, mutations
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connections");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Hoiiiii

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer();

// HOla
