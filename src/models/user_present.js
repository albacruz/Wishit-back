'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_present = sequelize.define(
    'user_present',
    {
      id_user: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      id_present: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      valuation_date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      valuation: {
        allowNull: false,
        type: DataTypes.INTEGER
      }
    },
    {}
  );
  user_present.associate = function(models) {
    // associations can be defined here
    user_present.belongsTo(models.user, {
      foreignKey: 'id_user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    user_present.belongsTo(models.present, {
      foreignKey: 'id_present',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  return user_present;
};
