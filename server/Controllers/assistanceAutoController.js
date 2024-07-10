const asyncHandler = require("express-async-handler");

const postAssistanceAuto = asyncHandler(async (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    success: true,
    message: "Ajouté avec succès",
  });
});

module.exports = {
  postAssistanceAuto,
};
