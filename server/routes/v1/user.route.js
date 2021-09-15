const router = require("express").Router();

const userCtrl = require("../../controllers/users/patient.controller");

router.post("/signup", userCtrl.create);

module.exports = router;
