'use strict';
module.exports = (sequelize, DataTypes) => {
  const present = sequelize.define(
    'present',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      link:{
        allowNull: false,
        type: DataTypes.STRING
      },
      image:{
        allowNull: false,
        type: DataTypes.STRING
      },
      is_material: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      type: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      n_beneficiary: DataTypes.INTEGER,
      expire_date: DataTypes.DATE
    },
    {}
  );
  present.associate = function(models) {
    // associations can be defined here
    present.hasMany(models.tag_to_present, {
      foreignKey: 'id_present',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    present.hasMany(models.user_present, {
      foreignKey: 'id_present',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  return present;
};
