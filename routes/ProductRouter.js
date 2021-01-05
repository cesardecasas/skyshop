const Router = require('express').Router()
const controller = require('../controllers/ProductController')

Router.post('/:user_id', controller.addProduct)
Router.get('/random', controller.randomProducts)
Router.get('/specific/:id', controller.productById)
Router.get('/label/:label_id', controller.productsByLabel)
Router.delete('/:product_id', controller.deleteProduct)

module.exports = Router