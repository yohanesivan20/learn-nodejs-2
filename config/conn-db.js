const { Sequelize } = require('sequelize')
require('dotenv').config()
console.log('Heheh');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
})

sequelize.authenticate()
    .then(() => console.log('MySQL Connected...'))
    .catch(err => console.error('Error connecting to MySQL:', err))

module.exports = sequelize