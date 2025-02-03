'use strict';

const { query } = require('../config/conn-db');
const bcrypt = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
    */
    return queryInterface.bulkInsert('Users',[
      {
        name: 'John Pantau',
        email: 'john@gmail.com',
        password: await bcrypt.hash('123456', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Dodik Anwar',
        email: 'dodik@gmail.com',
        password: await bcrypt.hash('123456', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Users', null, {})
  }
};
