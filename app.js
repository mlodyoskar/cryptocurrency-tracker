const express = require("express");
const ejs = require("ejs");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use("/node_modules", express.static("node_modules"));

app.get("/", (req, res) => {
  const title = "Home";
  const page_name = "home";
  res.render("index", { title, page_name });
});

app.get("/about", (req, res) => {
  const title = "About";
  const page_name = "about";
  res.render("about", { title, page_name });
});

app.get("/contact", (req, res) => {
  const title = "Contact";
  const page_name = "contact";
  res.render("contact", { title, page_name });
});

app.listen(port, () => {
  console.log(`App listening at port:${port}`);
});
