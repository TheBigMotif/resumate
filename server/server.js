const path = require("path");
const express = require("express");
const dotenv = require("dotenv");

// BACK END

// Schema folder, type definitions, resolvers
// Query to generate a response from OpenAI
// Mutation to save a response to the database

// FRONT END

// Queries, mutations to connect, the ones that go into utils, file mutations and file queries
// Install apollo client, graphql(On the client folder, needed in both client and server folders)
// Now you can start connecting into the server, hooks, usequeries, mutations

const db = require("./config/connections");
const routes = require("./routes/index");

const PORT = process.env.PORT || 3001;
const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set static folder
app.use(express.static(path.join(__dirname, "client")));

app.use("/openai", require("./routes/openaiRoutes"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

// http://localhost:3001/server/routes/api/openaiRoutes/generateText
