const jwt = require("jsonwebtoken");
const config = require("../config/Config");

async function verifyToken(req, res, next) {
  let authorization = req.headers.authorization;
  if (!authorization) {
    res.status(401).json({ error: "No token provided" });
    return;
  }
  // let token = authorization.split(" ")[1];
  let token = authorization.substring("Bearer ".length);
  if (!token) {
    res.status(401).json({ error: "No token provided!" });
    return;
  }
  let verifiedUser = jwt.verify(token, config.config.TOKEN_SECRET);
  if (!verifiedUser) {
    res.status(401).json({ error: "Invalid token" });
    return;
  }
  req.authUser = verifiedUser;
  next();
}

function hasRole(rolename) {
  return async function (req, res, next) {
    let authUser = req.authUser;
    if (authUser.role !== rolename) {
      res
        .status(403)
        .json({ error: "Don't have permission to register user!" });
      return;
    } else {
      next();
    }
  };
}

module.exports = { verifyToken, hasRole };
