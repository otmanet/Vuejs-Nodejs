const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorHandler.js");
const app = express();
const indexRoutes = require("./Routes/index.routes.js");
/* this two line for connect with database */
const connectDB = require("./db");
const db = connectDB;
/************/
// application helps to improve security :
app.disable("x-powered-by");
// this middleware for create  instance db in request
app.use((req, res, next) => {
  req.db = db;
  next();
});
// for convert req to json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// use cors for give server the request trust come for what
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use("/api", indexRoutes);
// handle error :
app.use("/api", (_, res) => {
  res.status(404).json({ status: "fail", message: "Not found" });
});
// create middleware for handle error
app.use(errorHandler);

module.exports = app;
