'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price:{
        type: Sequelize.INTEGER
      },
      stock: {
        type: Sequelize.INTEGER
      },
      label_id: {
        type: Sequelize.INTEGER
      },
      user_id:{
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      image:{
        type: Sequelize.STRING,
        defaultValue:'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};