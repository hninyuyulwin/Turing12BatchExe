const UserService = require("../services/UserService");

async function register(req, res) {
  // let { username, password } = req.body;
  let user = req.body;
  try {
    let newUser = await UserService.registerUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function login(req, res) {
  let user = req.body;
  try {
    let loggedInUser = await UserService.loginUser(user);
    res.status(200).json(loggedInUser);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

module.exports = { register, login };
