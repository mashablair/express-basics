const express = require("express");
const app = express();

const names = ["masha", "sophie", "elijah", "ivan"];

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/cards", (req, res) => {
  res.render("card", { prompt: "Who is burried in Grant's tumb?" });
});

app.get("/sandbox", (req, res) => {
  res.render("sandbox", { names });
});

app.listen(3000, () => {
  console.log("The app is running on localhost:3000");
});
