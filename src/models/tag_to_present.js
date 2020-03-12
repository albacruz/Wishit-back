'use strict';
module.exports = (sequelize, DataTypes) => {
  const tag_to_present = sequelize.define(
    'tag_to_present',
    {
      id_tag: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      id_present: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      id_user: {
        allowNull: false,
        type: DataTypes.INTEGER
      }
    },
    {}
  );
  tag_to_present.associate = function(models) {
    // associations can be defined here
    tag_to_present.belongsTo(models.tag, {
      foreignKey: 'id_tag',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    tag_to_present.belongsTo(models.present, {
      foreignKey: 'id_present',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  return tag_to_present;
};
