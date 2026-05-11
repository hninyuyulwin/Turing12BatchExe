var express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");
const UserController = require("../controllers/UserController");

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

router.post(
  "/register",
  auth.verifyToken,
  auth.hasRole("admin"),
  UserController.register,
);

router.post("/login", UserController.login);

module.exports = router;
