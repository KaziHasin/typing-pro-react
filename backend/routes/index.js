var express = require("express");
var router = express.Router();
const connectDB = require("../config/database.config");
connectDB();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
