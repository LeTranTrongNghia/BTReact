var express = require("express");
var router = express.Router();
router.use("/home", require(__dirname + "/homecontroller"));
// router.use("/product", require(__dirname + "/productcontroller"));
// router.use("/service", require(__dirname + "/servicecontroller"));
// router.use("/about", require(__dirname + "/aboutcontroller"));
// router.use("/contact", require(__dirname + "/contactcontroller"));

router.get("/", function (req, res) {
    // res.json({ "message": "this is index page" });
    res.render("index.ejs");
});
module.exports = router;