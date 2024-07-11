const asyncHandler = require("express-async-handler");
const { AssistanceAuto } = require("../models/AssistanceAuto ");

const postAssistanceAuto = asyncHandler(async (req, res) => {
  const assistanceAutoModel = new AssistanceAuto(req.db);
  const insertedData = await assistanceAutoModel.save(req.body);
  res.status(201).json(insertedData);
});

module.exports = {
  postAssistanceAuto,
};
