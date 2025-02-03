const express = require('express')
const dotenv  = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./config/conn-db')
const response = require('./helper/responseHelper')
const userRoutes = require('./routes/userRoutes')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json())
app.use('/api/users', userRoutes)

connectDB.sync().then(() => console.log("Database synced")).catch(err => console.error(err))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})