const AppError = require("../helpers/AppError");

const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    if (err.isOperational) {
      res
        .status(err.statusCode)
        .json({ status: err.status, message: err.message });
    } else {
      console.error("Something went wrong in server:", err);
      res
        .status(500)
        .json({ status: "error", message: "Something went wrong in server " });
    }
  } else {
    const status = `${res.statusCode}`.startsWith("4") ? "Fail" : "Error";
    res.status(res.statusCode === 200 ? 500 : res.statusCode);
    res.json({ status: status, message: err.message });
  }
};
module.exports = { errorHandler };
