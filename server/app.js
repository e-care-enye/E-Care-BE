const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const { PORT } = process.env;

const app = express();

const port = PORT || 1102;

app.get("/", (req, res) => {
  res.send("Getting Started");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
