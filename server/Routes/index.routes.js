// index router used for  redirect file routes used  by path
const router = require("express").Router();
const assistanceAuto = require("./assistanceAuto.routes");

router.use("/assistanceAuto", assistanceAuto);

module.exports = router;
