const express = require("express");
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 3002
const { db } = require('./db')

const app = express()

app.use(cors())
app.use(express.json())


db.connect()
.then(console.log("Successfully connected to db"))
.catch(err => console.error(err))

const usersRoutes = require("./routes/users");
app.use("/api/users", usersRoutes(db));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})