require("dotenv").config();
const app = require("./app");
const http = require("http");
const connectDB = require("./db");
const asyncHandler = require("express-async-handler");
const portServer = process.env.PORT | 5200;
const server = http.createServer(app);
const startServer = asyncHandler(async () => {
  await connectDB();
  server.listen(portServer, () => {
    console.log(`server start on port ${portServer}`);
  });
});

startServer();
