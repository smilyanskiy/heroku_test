const express = require("express");
const api = require("./api");
const bodyParser = require("body-parser");
const path = require("path");
const port = 5000;

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(bodyParser.json());
app.use("/api", api);

// added static files form build package
app.use(express.static(path.join(__dirname, "../")));
app.use(express.static(path.join(__dirname, "../build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port, "localhost", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:" + port);
});
