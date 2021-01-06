const Router = require('express').Router()
const controller = require('../controllers/CheckOutController')

Router.post('/session', controller.checkOutSession)

module.exports =Router