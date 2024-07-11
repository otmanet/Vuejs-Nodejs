const express = require("express");
const cors = require("cors");
const path = require("path");
const { errorHandler } = require("./middleware/errorHandler.js");
const app = express();
const indexRoutes = require("./Routes/index.routes.js");
const connectDB = require("./db");
const db = connectDB;
app.disable("x-powered-by");
app.use((req, res, next) => {
  req.db = db;
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use("/api", indexRoutes);
app.use(express.static(path.join(path.join(__dirname, "public"))));
app.use((_, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api", (_, res) => {
  res.status(404).json({ status: "fail", message: "Not found" });
});
app.use(errorHandler);

module.exports = app;
