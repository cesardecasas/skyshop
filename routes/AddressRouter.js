const Router = require('express').Router()
const controller = require('../controllers/AddressController')

Router.post('/:user_id', controller.addAddress)
Router.get('/:user_id', controller.getAddress)
Router.put('/:address_id', controller.updateAddress)
Router.delete('/:address_id', controller.deleteAddress)

module.exports =Router