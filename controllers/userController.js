const User = require('./models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const response = require('./helper/responseHelper')

exports.registerUser = async (req, res) => {
    const {name, email, password} = req.body

    try {
        let user = await User.findOne({ email })

        if (user) response(400, null, 'User already exists', res)
        
        const hashedPassword = await bcrypt.hash(password, 10)
        user = new User({name, email, password: hashedPassword})
        await user.save()

        response(200, null, 'User registered successfully!', res)

    } catch (error) {
        response(500, null, 'Terjadi kesalahan pada jaringan : ' . error.message, res)
    }
}

exports.loginUser = async (req, res) => {
    const {email, password} = req.body
    try {

    } catch (error) {
        response(500, null, 'Terjadi kesalahan pada jaringan : ' . error.message, res)
    }
}

exports.getUserProfile = async (req, res) => {
    const {id} = req.body
    try {

    } catch (error) {
        response(500, null, 'Terjadi kesalahan pada jaringan : ' . error.message, res)
    }
}