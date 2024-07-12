const asyncHandler = require("express-async-handler");
const { AssistanceAuto } = require("../models/AssistanceAuto ");

const postAssistanceAuto = asyncHandler(async (req, res) => {
  //create instance for model  :
  const assistanceAutoModel = new AssistanceAuto(req.db);
  // call function for insert data in table and send  req.body  in params :
  const insertedData = await assistanceAutoModel.save(req.body);
  if (!insertedData) {
    // return message error when something wrong in operation :
    return res.status(400).json({
      success: false,
      message: "something went wrong , pls try again later ",
    });
  }
  // return status 201 when addedd new object in table
  return res.status(201).json({
    success: true,
    message: "Ajouté avec succès",
  });
});

module.exports = {
  postAssistanceAuto,
};
