'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      nickname: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      biography: {
        type: DataTypes.TEXT
      },
      address: DataTypes.TEXT,
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      birth_date: {
        allowNull: false,
        type: DataTypes.DATEONLY
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      image:{
        type: DataTypes.STRING
      }
    },
    {}
  );
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.friendship, {
      foreignKey: 'id_user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    user.hasMany(models.friendship, {
      foreignKey: 'id_friend',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    user.hasMany(models.tag_to_friendship, {
      foreignKey: 'id_user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    user.hasMany(models.tag_to_user, {
      foreignKey: 'id_user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    user.hasMany(models.user_present, {
      foreignKey: 'id_user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  return user;
};
