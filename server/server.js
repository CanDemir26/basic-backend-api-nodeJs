const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({ "users": ["userone", "userTwo", "userThree"] })
})

app.listen(5500, () => {
    console.log("server started on port 5000")
})