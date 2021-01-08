const Router = require('express').Router()
const controller = require('../controllers/ProductController')
const multer = require('multer')
let storage = multer.memoryStorage()

Router.post('/:user_id',multer({ storage }).single('image'), controller.addProduct)
Router.get('/random', controller.randomProducts)
Router.get('/specific/:id', controller.productById)
Router.get('/label/:label_id', controller.productsByLabel)
Router.delete('/:product_id', controller.deleteProduct)
Router.get('/search', controller.searchProducts)

module.exports = Router