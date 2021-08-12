const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json("No token provided");

  try{
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
    req.user = decoded
    next()
  } catch(err) {
    res.status(400).send("Invalid token")
}
};

module.exports = validateToken;