const Router = require('express').Router()
const controller = require('../controllers/CartController')

Router.post('/:user_id/:product_id', controller.addItem)
Router.get('/:user_id', controller.getCart)
Router.delete('/:item_id', controller.removeCart)

module.exports = Router 