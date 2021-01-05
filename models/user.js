'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Cart, {
        foreignKey: 'user_id'
      })

      User.hasMany(models.Inverntory,{
        foreignKey: 'user_id'
      })

      User.hasOne(models.Address,{
        foreignKey: 'user_id'
      })
      
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_digest: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};