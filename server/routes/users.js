const router = require("express").Router();
const bcrypt = require('bcrypt');
const {generateJWT, generateRefreshToken} = require('../utils/generateJWT');

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
  return router;
};