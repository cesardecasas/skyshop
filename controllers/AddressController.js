const {Address} = require('../models')

const addAddress =async(req,res)=>{
    try {
        const user_id = req.params.user_id
        let body = {
            user_id,
            ...req.body
        }        
        let address = await Address.create(body)
        res.send(address)
    } catch (error) {
        console.log(error)
    }
}

const getAddress =async(req,res)=>{
    try {
        const id = req.params.user_id
        const address = await Address.findOne({where:{user_id:id}})
        res.send(address)
    } catch (error) {
        return error 
    }
}

const deleteAddress = async(req,res)=>{
    try {
        const id = req.params.address_id
        await Address.destroy({where:{id:id}})
        res.send({msg:'address has been removed'})
    } catch (error) {
        return error        
    }
}

const updateAddress = async(req,res)=>{
    try {
        const id = req.params.address_id
        const update = await Address.update(req.body,{
            where:{id:id},
            returning:true
        })
        res.send(update)
    } catch (error) {
        return error 
    }
}

module.exports={
    addAddress,
    getAddress,
    updateAddress,
    deleteAddress
}