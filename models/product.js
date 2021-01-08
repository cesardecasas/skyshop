'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Cart,{
        foreignKey:'id'
      })

      Product.belongsTo(models.User,{
        foreignKey:'user_id'
      })

      Product.hasMany(models.Label,{
        foreignKey:'label_id'
      })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    label_id: DataTypes.INTEGER,
    user_id:DataTypes.INTEGER,
    rating: DataTypes.INTEGER 
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products'
  });
  return Product;
};