const hbs = require("hbs");
const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

// Define Paths for Express Config
const staticPath = path.join(__dirname, "../static");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// Setup Handlebars Engine and Views Location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

// Setup Static Directory to Serve
app.use(express.static(staticPath));

app.get("", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Application Running on Port ${port}`);
});
