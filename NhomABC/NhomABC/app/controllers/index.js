var express = require("express");
var router = express.Router();
router.use("/home", require(__dirname + "/homecontroller"));
router.use("/admin1", require(__dirname + "/admin1controller"));
router.use("/admin2", require(__dirname + "/admin2controller"));
router.use("/products", require(__dirname + "/productcontroller"));

router.get("/", function (req, res) {
    res.render("index.ejs");
});
module.exports = router;