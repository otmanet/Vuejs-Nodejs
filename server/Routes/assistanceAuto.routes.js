// this file for  create  used  function inside controller  by path
const router = require("express").Router();
const {
  postAssistanceAuto,
} = require("../controllers/assistanceAutoController");
router.route("/insertInformation").post(postAssistanceAuto);

module.exports = router;
