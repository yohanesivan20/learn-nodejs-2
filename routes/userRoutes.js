const express = require('express')
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/register',registerUser)
router.post('/login', loginUser)
router.get('/get-profile', getUserProfile)

module.exports = router