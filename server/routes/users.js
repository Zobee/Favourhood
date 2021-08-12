const router = require("express").Router();
const bcrypt = require('bcrypt');
const verify = require('jsonwebtoken').verify;
require("dotenv").config()
const {generateJWT, generateRefreshToken} = require('../utils/generateJWT');
const validateToken = require('../utils/validateToken')

const SALTROUNDS = 10;

module.exports = (db) => {
  router.get("/", async (req, res) => {
    try{
      const data = await db.query(`SELECT * FROM users;`)
      res.json(data.rows)
    } catch (err) {
      console.log(err)
      res.status(500).json({Error: "Query Error"})
    }
  });

  router.post("/signup", async (req, res) => {
    const {name, email, password} = req.body
    if (!name || !email || !password) return res.status(400).json({Error: "Fields cannot be empty!"});
    
    const user = await db.query(`
    SELECT * FROM users 
    WHERE email = $1
    `,[email])
    
    if (user.rows.length) return res.status(400).json({Error: "Email is already in use!"})

    const salt = await bcrypt.genSalt(SALTROUNDS);
    const hashedPw = await bcrypt.hash(password, salt);

    try {
      const newUser = await db.query(`
      INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;`
      ,[name, email, hashedPw]).rows[0]
      
      const accessToken = generateJWT(newUser.id);
      const refreshToken = generateRefreshToken(newUser.id);

      res.cookie("jid", refreshToken, {httpOnly: true})
      res.json(accessToken)
      
    } catch(err) {
      console.log(err)
      res.status(500).json({Error: "Error adding user to DB"})
    }
  })

  router.post('/login', async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) return res.status(400).json({Error: "Fields cannot be empty!"});

    const queryRes = await db.query(`
    SELECT * FROM users 
    WHERE email = $1
    `,[email])

    const user = queryRes.rows[0]

    if (!user) return res.status(400).json({Error: "User Does Not Exist!"})

    const validPw = await bcrypt.compare(password, user.password)
    if(!validPw) return res.status(400).json({Error: "Password is invalid"})

    const accessToken = generateJWT(user.id);
    const refreshToken = generateRefreshToken(user.id);

    res.cookie("jid", refreshToken, {httpOnly: true})
    res.json(accessToken)
  })

  router.post("/refresh_token", async (req, res) => {
    const refreshToken = req.cookies.jid
    if (!refreshToken) return res.status(400).json("Error: No Refresh Token")

    let payload;
    try {
      payload = verify(refreshToken, process.env.REFRESH_TOKEN);
    } catch (err) {
      console.log(err)
      return res.status(400).json("Error: Invalid Refresh Token")
    }

    const queryRes = await db.query(`SELECT * FROM users WHERE id = $1`,[payload._id])
    const user = queryRes.rows[0]
    if(!user) return res.status(400).json("Error: User Not Found")


    const accessToken = generateJWT(user.id);
    const newRefreshToken = generateRefreshToken(user.id);

    res.cookie("jid", newRefreshToken, {httpOnly: true})
    res.json(accessToken)
  })

  router.get("/userData", validateToken, async (req, res) => {
    res.json("SECRET DATA, SHHHHH")
  })
  return router;
};