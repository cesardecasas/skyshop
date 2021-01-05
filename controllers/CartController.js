const {Cart,Product} = require('../models')

const addItem=async(req,res)=>{
    try {
        const user_id = req.params.user_id
        const product_id = req.params.product_id
        let body = {user_id,product_id}
        const item = await Cart.create(body)
        res.send(item)
    } catch (error) {
        return error
    }
}

const getCart =async(req,res)=>{
    try {
        const id = req.params.user_id
        let cart = await Cart.findAll({
            where:{user_id:id},
            include:[{model:Product}]
        })
        res.send(cart)
    } catch (error) {
        return error    
    }
}

const removeCart = async(req,res)=>{
    try {
        const id = req.params.item_id
        await Cart.destroy({where:{id:id}})
        res.send({msg:'item succesfully removed from cart'})
    } catch (error) {
        return error
    }
}

module.exports = {
    addItem,
    getCart, 
    removeCart
}