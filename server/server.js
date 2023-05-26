const express = require("express");
const dotenv = require("dotenv");

const db = require("./config/connections");
const routes = require("./routes/index");

const PORT = process.env.PORT || 3001;
const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
