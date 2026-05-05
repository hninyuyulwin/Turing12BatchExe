var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Wakanda Forever users");
});

router.get("/hello", function (req, res, next) {
  res.json({
    name: "Wai Yan Myo!",
    age: 19,
  });
});

module.exports = router;
