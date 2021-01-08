const { Product} = require('../models')
const Sequelize = require('sequelize')
const upload =require('../middleware/awsUpload')


const addProduct =async(req,res)=>{
    try {
        const user_id = req.params.user_id
        const image = await upload(req.file)
        let product = {
            user_id,
            image,
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

const searchProducts=async(req,res)=>{
    try {
        console.log('hello',req.query)
        const searched = req.query.product
        const Op = Sequelize.Op
        const products = await Product.findAll({
            where:{
                [Op.or]:[
                    {name:{
                        [Op.like]: `%${searched}%`
                    }},
                    {description:{
                        [Op.like]: `%${searched}%`
                    }}
                ]
            }
        })
        res.send(products)
    } catch (error) {
        return error
    }
}

module.exports ={
    addProduct,
    productById,
    productsByLabel,
    deleteProduct,
    randomProducts,
    searchProducts
}