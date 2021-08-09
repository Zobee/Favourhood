const express = require("express");
const usersRouter = require('./routes/users');
const cors = require("cors");

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/users', usersRouter);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})