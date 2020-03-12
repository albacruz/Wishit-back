'use strict';
module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define(
    'tag',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      tag: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      }
    },
    {}
  );
  tag.associate = function(models) {
    // associations can be defined here
    tag.hasMany(models.tag_to_friendship, {
      foreignKey: 'id_tag',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    tag.hasMany(models.tag_to_user, {
      foreignKey: 'id_tag',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    tag.hasMany(models.tag_to_present, {
      foreignKey: 'id_tag',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  return tag;
};
