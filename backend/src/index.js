// I wish I had time to clean this up...

// load data
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

// const authRoutes = require('./routes/auth.routes.js');
const admin = require("./config/firebase.config.js");

// configure app routes
const app = express();
// app.use("/api/auth", authRoutes);
app.use("/test", (req, res) => {
  console.log(admin);
});
app.get("/", (req, res) => {
  res.send("Express Server");
});

// start app
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

module.exports = app;
