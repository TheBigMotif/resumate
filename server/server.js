const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const { Configuration, OpenAIApi } = require("openai");
const multer = require("multer");

const cors = require("cors");
const fs = require("fs");
const axios = require("axios");
require("dotenv").config();
const app = express();

// app.use(express.json());

// app.post("/api/openai", async (req, res) => {
//   try {
//     const response = await axios.post(
//       "https://api.openai.com/v1/engines/davinci-codex/completions",
//       req.body,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
//         },
//       }
//     );

//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: error.toString() });
//   }
// });

// const port = process.env.PORT || 3001;
// app.listen(port, () => console.log(`Server listening on port ${port}`));

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
// const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Hoiiiii

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

const generateID = () => Math.random().toString(36).substring(2, 10);

// const configuration = new Configuration({
//   apiKey: "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",
// });

// const openai = new OpenAIApi(configuration);

// app.get("/resume", (res, res) => {
//   res.json({
//     message: "Request successful!",
//     data: database,
//   });
// });

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
}

app.get("*", (req, res) => {
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
