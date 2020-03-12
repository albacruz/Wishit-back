'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('presents', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      link:{
        allowNull: false,
        type: Sequelize.STRING
      },
      image:{
        allowNull: false,
        type: Sequelize.STRING
      },
      is_material: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      type: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      n_beneficiary: {
        type: Sequelize.INTEGER
      },
      expire_date: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('presents');
  }
};
