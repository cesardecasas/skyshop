const { Product} = require('../models')
const Sequelize = require('sequelize')


const addProduct =async(req,res)=>{
    try {
        const user_id = req.params.user_id
        let product = {
            user_id,
            ...req.body
        }
        const nproduct = await Product.create(product)
        res.send(nproduct)

    } catch (error) {
        console.log(error)
    }
}

const productById= async(req,res)=>{
    try {
        const id = req.params.id
        let product = await Product.findAll({where:{id:id}})
        res.send(product)   
    } catch (error) {
        console.log(error)
    }
}

const productsByLabel= async(req,res)=>{
    try {
        const id = req.params.label_id
        const products = await Product.findAll({
            where:{label_id:id}
        })
        res.send(products)
    } catch (error) {
        console.log(error)
    }
}

const deleteProduct =async(req,res)=>{
    try {
        let product_id = req.params.product_id
        await Product.destroy({where:{id:product_id}})
        res.send({msg:'product successfully removed'})
    } catch (error) {
        console.log(error)
    }
}

const randomProducts =async(req,res)=>{
    try {
        const products = await Product.findAll({order: [ [ Sequelize.fn('RANDOM') ] ], limit:4})
        res.send(products)
    } catch (error) {
        console.log(error)
    }
}

module.exports ={
    addProduct,
    productById,
    productsByLabel,
    deleteProduct,
    randomProducts
}