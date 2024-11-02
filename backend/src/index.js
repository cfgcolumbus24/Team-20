// I wish I had time to clean this up...

// load data
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const authRoutes = require("./routes/auth.routes.js");

// configure app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Express Server");
});

// start app
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

module.exports = app;
