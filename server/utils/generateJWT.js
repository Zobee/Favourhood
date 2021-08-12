const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateJWT = (userId) => {
  return jwt.sign({ _id: userId }, process.env.SECRET_TOKEN, {expiresIn: "15m"});
}

const generateRefreshToken = (userId) => {
  return jwt.sign({ _id: userId }, process.env.REFRESH_TOKEN, {expiresIn: "7d"});
}

module.exports = {generateJWT, generateRefreshToken};