require('dotenv').config()
const mysql = require('mysql2/promise')

const ENV = process.env.APP_ENV || "local"

const config = {
    local: {
        host: process.env.DB_HOST_LOCAL,
        user: process.env.DB_USER_LOCAL,
        password: process.env.DB_PASSWORD_LOCAL,
        database: process.env.DB_NAME_LOCAL,
    },
    development: {
        host: process.env.DB_HOST_DEV,
        user: process.env.DB_USER_DEV,
        password: process.env.DB_PASSWORD_DEV,
        database: process.env.DB_NAME_DEV,
    }
}

const pool = mysql.createPool(config[ENV]);

console.log(`Connected to ${ENV} database`);

module.exports = pool