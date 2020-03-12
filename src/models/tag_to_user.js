'use strict';
module.exports = (sequelize, DataTypes) => {
  const tag_to_user = sequelize.define(
    'tag_to_user',
    {
      id_tag: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      id_user: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      }
    },
    {}
  );
  tag_to_user.associate = function(models) {
    // associations can be defined here
    tag_to_user.belongsTo(models.tag, {
      foreignKey: 'id_tag',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    tag_to_user.belongsTo(models.user, {
      foreignKey: 'id_user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  return tag_to_user;
};
