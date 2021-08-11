const router = require("express").Router();

module.exports = (db) => {
  router.get("/", async (req, res) => {
    try{
      const data = await db.query(`SELECT * FROM users;`)
      res.json(data.rows)
    } catch {
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

    try {
      const data = await db.query(`
      INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;`
      ,[name, email, password])
      res.json(data.rows[0])
    } catch {
      res.status(500).json({Error: "Error adding user to DB"})
    }
  })
  return router;
};