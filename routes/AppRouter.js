const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const ProductRouter = require('./ProductRouter')
const CartRouter = require('./CartRouter')
const AddressRouter = require('./AddressRouter')

Router.use('/user', UserRouter)
Router.use('/product',ProductRouter)
Router.use('/cart', CartRouter)
Router.use('/address',AddressRouter)

module.exports = Router