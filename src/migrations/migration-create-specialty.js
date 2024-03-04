'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('specialty', {
      // firstName: DataTypes.STRING,
      // lastName: DataTypes.STRING,
      // email: DataTypes.STRING,
      // address: DataTypes.STRING,
      // gender: DataTypes.BOOLEAN,
      // roleid: DataTypes.STRING,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('specialty');
  }
};