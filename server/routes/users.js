const router = require("express").Router();

const users = [
  {
    id: 1,
    name: "Tad",
    favoursAsked: [],
    favoursTakenOn: [],
    totalFavoursComplete: 5
  },
  {
    id: 2,
    name: "Chad",
    favoursAsked: [],
    favoursTakenOn: [],
    totalFavoursComplete: 2
  },
  {
    id: 3,
    name: "Fad",
    favoursAsked: [],
    favoursTakenOn: [],
    totalFavoursComplete: 25
  }
]

router.get("/", (req, res) => {
  res.json(users)
})

module.exports = router;