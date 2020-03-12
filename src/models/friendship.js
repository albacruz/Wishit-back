'use strict';
module.exports = (sequelize, DataTypes) => {
  const friendship = sequelize.define(
    'friendship',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      id_user: {
        allowNull: false,
        type: DataTypes.UUID
      },
      id_friend: {
        allowNull: false,
        type: DataTypes.UUID
      }
    },
    {}
  );
  friendship.associate = function(models) {
    // associations can be defined here
    friendship.belongsTo(models.user, {
      foreignKey: 'id_user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    friendship.belongsTo(models.user, {
      foreignKey: 'id_friend',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    friendship.hasMany(models.tag_to_friendship, {
      foreignKey: 'id_friendship',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  return friendship;
};
