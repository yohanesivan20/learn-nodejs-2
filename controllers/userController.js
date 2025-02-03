const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const response = require('../helper/responseHelper')

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
        const user = await User.findOne({ email })
        
        if (!user) response(400, null, 'Invalid email or password', res)
        
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) response(400, null, 'Invalid email or password', res)
        
        const token = jwt.sign({id : user.id}, process.env.JWT_SECRET, { expiresIn: '1h'})
        response(200, token, 'Login successfully!', res)
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