const express = require('express')
const dotenv  = require('dotenv')
const bodyParser = require('body-parser')
const connectDB = require('./config/conn-db')
const response = require('./helper/responseHelper')

dotenv.config()
connectDB()

const app = express()
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})