'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('histories', {
        // patientID: DataTypes.INTEGER,
        // doctorID: DataTypes.INTEGER,
        // description: DataTypes.TEXT,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patientID: {
        type: Sequelize.INTEGER
      },
      doctorID: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },


    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('histories');
  }
};