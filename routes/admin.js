var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.json({
    message: "Welcome to admin route!",
  });
});

router.get("/hello", function (req, res, next) {
  res.json({
    message: "Hello from admin hello route!",
  });
});

module.exports = router;

