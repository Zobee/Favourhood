const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')
require('dotenv').config();
const PORT = process.env.PORT || 3000
const { db } = require('./db')

const app = express()
app.use(cors({
  origin: "http://localhost:3002",
  credentials: true
}))

app.use(cookieParser());
app.use(express.json())

db.connect()
.then(console.log("Successfully connected to db"))
.catch(err => console.error(err))

const usersRoutes = require("./routes/users");
const favourRoutes = require("./routes/favours");

app.use("/api/users", usersRoutes(db));
app.use("/api/favours", favourRoutes(db));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})