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
  return router;
};