const express = require("express");
const cors = require("cors");
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());

// app.get("/api", (req, res) => {
//   res.json({
//     message: "Hello world",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
