const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(morgan("common"));

const writeLog = (req, res) => {
  let timeStamp = String(new Date()).substring(4, 24); // Mmm dd YYYY HH:MM:SS
  console.log(
    `${timeStamp} ${req.method} ${req.originalUrl} ${res.statusCode}`
  );
};

app.locals.currentPathClass = (path, currentPath) => {
  return path === currentPath ? "current" : "";
};

app.get("/", (req, res) => {
  res.redirect("/english");
});

app.get("/english", (req, res) => {
  res.render("hello-world-english", {
    currentPath: req.path,
  });
});

app.get("/french", (req, res) => {
  res.render("hello-world-french", {
    currentPath: req.path,
  });
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian", {
    currentPath: req.path,
  });
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000.");
});
