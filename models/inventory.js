'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inventory.belongsTo(models.User,{
        foreignKey: 'user_id'
      })

      Inventory.hasMany(models.Product.{
        foreignKey:'product_id'
      })
    }
  };
  Inventory.init({
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inventory',
    tableName: 'inventories'
  });
  return Inventory;
};