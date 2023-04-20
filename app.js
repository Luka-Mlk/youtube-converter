const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

const pages = require("./handlers/pages");
const { convert } = require("./handlers/convert");

const app = express();

const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", pages.home);

app.post("/convert-mp3", convert);

app.listen(PORT, () => {
  console.log(`App started\nVisit http://localhost:${PORT}/`);
});
