'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password:'123456', //132dsadsad-> hash password
      firstName: 'Hoai',
      lastName: 'Nam',
      address:'',
      gender : 1,
      typeRole:'ROLE',
      typeKey:'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
