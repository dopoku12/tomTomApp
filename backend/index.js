const PORT = process.env.PORT || 8001
const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.get(('/', (req, res) => {
    res.send('Hello World')
}))


app.listen((PORT, () => {
    console.log(`server running on ${PORT}`)
}))