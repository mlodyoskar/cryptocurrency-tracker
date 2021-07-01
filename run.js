const express = require("express");
const ejs = require("ejs");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use('/public', express.static('public'))
app.use('/node_modules', express.static('node_modules'))

app.get("/", (req, res) => {
  const title = "Home";
  res.render("index", {title});
});

app.get("/about", (req, res) => {
  const title = "About";
  res.render("about", {title});
});

app.get("/contact", (req, res) => {
  const title = "Contact";
  res.render("contact", {title});
});

app.listen(port, () => {
  console.log(`App listening at port:${port}`);
});
