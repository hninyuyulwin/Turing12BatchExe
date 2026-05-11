const bcrypt = require("bcrypt");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const config = require("../config/Config");

async function registerUser(user) {
  let salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(user.password, salt);

  let newUser = new User({
    username: user.username,
    password: hashedPassword,
    role: user.role,
  });
  let registeredUser = await newUser.save();

  let payload = {
    username: registeredUser.username,
    role: registeredUser.role,
  };
  let token = jwt.sign(payload, config.config.TOKEN_SECRET);

  let returnUser = {
    username: registeredUser.username,
    role: registeredUser.role,
    token: token,
  };
  return returnUser;
}

async function loginUser(user) {
  let existingUser = await User.findOne({ username: user.username });
  if (!existingUser) {
    throw new Error("User not found");
  }
  let validPassword = await bcrypt.compare(
    user.password,
    existingUser.password,
  );
  if (!validPassword) {
    throw new Error("Invalid password");
  }
  let payload = {
    username: existingUser.username,
    role: existingUser.role,
  };
  let token = jwt.sign(payload, config.config.TOKEN_SECRET);

  let returnUser = {
    username: existingUser.username,
    role: existingUser.role,
    token: token,
  };
  return returnUser;
}

module.exports = { registerUser, loginUser };
