const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;
  const userData = await User.findOne({ username: username });
  if (!userData) {
    return res.json({
      message: "No user found",
    });
  }
  if (userData.username == username && userData.password == password) {
    next();
  } else {
    res.status(404).json({ msg: "Invalid credentials" });
  }
}

module.exports = userMiddleware;
