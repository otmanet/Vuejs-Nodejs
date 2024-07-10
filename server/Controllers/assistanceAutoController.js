const asyncHandler = require("express-async-handler");

const postAssistanceAuto = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "Added successfully",
  });
});

module.exports = {
  postAssistanceAuto,
};
