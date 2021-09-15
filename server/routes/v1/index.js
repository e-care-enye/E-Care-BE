const router = require("express").Router();

// custom Module
const registerRoute = require("./user.route");

router.use("/user", registerRoute);

module.exports = router;
