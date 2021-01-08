import ApiClient from './ApiClient'

export const __getRandom =async()=>{
    try {
        const res = await ApiClient.get('/product/random')
        return res.data
    } catch (error) {
        return error
    }
}

export const __addProduct =async(userId,formData)=>{
    try {
        const res = await ApiClient.post(`/product/${userId}`,formData)
        return res.data
    } catch (error) {
        return error
    }
}

export const __getById =async(productId)=>{
    try {
        const res = await ApiClient.get(`/product/specific/${productId}`)
        return res.data
    } catch (error) {
        return error 
    }
}

export const __getByLabel=async(labelId)=>{
    try {
        const res = await ApiClient.get(`/product/label/${labelId}`)
        return res.data
    } catch (error) {
        return error 
    }
}

export const __removeProduct=async(id)=>{
    try {
        const res = await ApiClient.delete(`/product/${id}`)
        return res.data
    } catch (error) {
        return error 
    }
}

export const __searchProduct=async(search)=>{
    try {
        console.log('service',search)
        const res = await ApiClient.get(`/product/search?product=${search}`)
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error) 
    }
}