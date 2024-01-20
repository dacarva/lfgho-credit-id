const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/sign-in", (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
