const express = require("express");
const api = require("./api");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 5000;

const app = express();
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
app.use(bodyParser.json());
app.use("/api", api);

console.log(path.join(__dirname, "..", "build"));

app.use(express.static(path.join(__dirname, "..", "build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Listening at http://localhost:" + port);
});
