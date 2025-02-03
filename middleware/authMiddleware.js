const jwt = require('jsonwebtoken')
const response = require('../helper/responseHelper')

module.exports = (req, res, next) => {
    const token = req.header('Authorization')

    if(!token) response(401, null, "No token, authorization denied", res)

    try {
        const decode_token = jwt.verify(token.replace('Bearer', ''), process.env.JWT_SECRET)
        req.user = decode_token
        next()
    } catch (error) {
        response(401, null, 'Invalid token!', res)
    }
}