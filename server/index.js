require("dotenv").config();
const app = require("./app");
const http = require("http");
const portServer = parseInt(process.env.PORT, 10) || 5200;
//  before create server call file app for give what should used in this server
const server = http.createServer(app);
// arrow function for start server
const startServer = async () => {
  try {
    server.listen(portServer, () => {
      console.log(`Server started on port ${portServer}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
