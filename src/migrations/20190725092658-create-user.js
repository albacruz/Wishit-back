'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      nickname: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      biography: {
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.TEXT
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      birth_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      image:{
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
